import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  smartDecimals?: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 600,
  decimals = 0,
  smartDecimals = false,
  className = "",
  prefix = "",
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTime: number | null = null;
    let startValue = displayValue;
    const targetValue = value;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue =
        startValue + (targetValue - startValue) * easeOutQuart;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatNumber = (num: number) => {
    let effectiveDecimals = decimals;
    // Strip trailing .0 / .00 etc. when the number is effectively whole
    if (smartDecimals && decimals > 0) {
      const rounded = parseFloat(num.toFixed(decimals));
      if (Number.isInteger(rounded)) {
        effectiveDecimals = 0;
      }
    }
    // Use Dutch locale: "." for thousands, "," for decimals (e.g. "4.860", "21,6")
    return num.toLocaleString("nl-NL", {
      minimumFractionDigits: effectiveDecimals,
      maximumFractionDigits: effectiveDecimals,
    });
  };

  return (
    <span className={className}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
