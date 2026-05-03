import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Array of hero images
  const heroImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F4f9cbf2a5b394949b1d5e2a4f4abc803?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F90bd20616bff4e61821744ae3f8acbae?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2Fbea4f13221bf4824b48bf50bc5c830ea?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F685ee88f74e04f8abb37afe86fc6e181?format=webp&width=800",
  ];

  // Select random image on component mount
  const [randomImage] = useState(() => {
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  });

  // Target date: September 1, 2025
  const targetDate = new Date("2026-05-22T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service
    console.log("Email submitted:", email);
    alert("Bedankt! Je bent toegevoegd aan onze early bird lijst.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-calcuu-white via-calcuu-background to-calcuu-primary/5 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-calcuu-primary/10 text-calcuu-primary px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-calcuu-primary rounded-full animate-pulse"></div>
            Binnenkort beschikbaar
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-calcuu-secondary leading-tight">
              De app voor de{" "}
              <span style={{ color: "rgb(91, 41, 222)" }}>vakschilder</span>
              &nbsp;
            </h1>
            <p className="text-xl text-calcuu-text-sub leading-relaxed max-w-2xl">
              De app die calculatie's binnen minuten omzet naar een offerte en
              je klanten, uren en materiaalbeheer bijhoud.&nbsp;
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-card p-6  border border-calcuu-detail">
            <h3 className="text-lg font-semibold text-calcuu-secondary mb-4 text-center">
              Lancering vrijdag 22 mei:
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Dagen", value: timeLeft.days },
                { label: "Uren", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-calcuu-primary text-white rounded-lg p-3 mb-2">
                    <div className="text-2xl md:text-3xl font-bold">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="text-sm text-calcuu-text-sub font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white rounded-card p-6  border border-calcuu-detail">
            {/* Signup Introduction Text */}
            <div className="text-center lg:text-left space-y-4 mb-6">
              <p className="text-lg font-semibold text-calcuu-secondary">
                Meld je aan voor vroege toegang en wees er als eerste bij als we
                de app langzaam gaan uitrollen.
              </p>
              <p className="text-calcuu-text-sub">
                Ontvang exclusieve updates en krijg als eerste toegang tot
                Calcuu met speciale early bird korting.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-calcuu-text-sub w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vul je e-mailadres in"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-calcuu-detail rounded-lg focus:border-calcuu-primary focus:outline-none transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Houd Mij Op De Hoogte
              </Button>
            </form>

            <p className="text-xs text-calcuu-text-sub mt-4 text-center">
              Geen spam, alleen updates over Calcuu. Je kunt je altijd afmelden.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", title: "60% Sneller", desc: "Offertes in minuten" },
              {
                icon: "💰",
                title: "Early Bird Prijzen",
                desc: "Exclusieve korting",
              },
              {
                icon: "🎯",
                title: "Eerste Toegang",
                desc: "Voor de officiële launch",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <div className="font-semibold text-calcuu-secondary">
                  {benefit.title}
                </div>
                <div className="text-sm text-calcuu-text-sub">
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - App Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-calcuu-primary/20 rounded-3xl blur-3xl scale-110"></div>

            {/* Hero Image */}
            <div className="flex justify-center items-center">
              <img
                src={randomImage}
                alt="Calcuu App Preview met Vakschilder"
                className="w-full max-w-lg mx-auto "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-calcuu-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-calcuu-primary/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
