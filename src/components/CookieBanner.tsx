import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("calcuu-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("calcuu-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("calcuu-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-calcuu-detail  p-4 md:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl">
        <p className="text-sm text-calcuu-text-sub text-center sm:text-left">
          Wij gebruiken cookies om je ervaring te verbeteren. Door verder te
          gaan ga je akkoord met ons{" "}
          <a
            href="/privacy"
            className="text-calcuu-primary underline hover:no-underline"
          >
            privacybeleid
          </a>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="border-calcuu-detail text-calcuu-text-sub hover:bg-gray-50"
            onClick={handleDecline}
          >
            Weigeren
          </Button>
          <Button
            size="sm"
            className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white"
            onClick={handleAccept}
          >
            Accepteren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
