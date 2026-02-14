import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Download, Mail, Phone } from "lucide-react";
import Calculator from "@/components/Calculator";

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const scrollToVideoAndPlay = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      // First scroll to the section
      demoSection.scrollIntoView({ behavior: "smooth", block: "center" });

      // Start video after scroll is complete
      setTimeout(() => {
        const targetPosition =
          demoSection.offsetTop -
          window.innerHeight / 2 +
          demoSection.offsetHeight / 2;

        setIsVideoPlaying(true);

        // Monitor and maintain scroll position for 3 seconds after video starts
        let scrollCheckCount = 0;
        const maxScrollChecks = 30; // Check for 3 seconds (30 * 100ms)

        const maintainPosition = () => {
          scrollCheckCount++;
          if (scrollCheckCount > maxScrollChecks) return;

          const currentPosition = window.scrollY;
          const difference = Math.abs(currentPosition - targetPosition);

          // If scroll position changed significantly, restore it
          if (difference > 50) {
            window.scrollTo({ top: targetPosition, behavior: "auto" });
          }

          setTimeout(maintainPosition, 100);
        };

        setTimeout(maintainPosition, 100);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-calcuu-white font-inter overflow-x-hidden max-w-full">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-calcuu-white/95 backdrop-blur-sm border-b border-calcuu-detail">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-end gap-3">
              <img
                src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                alt="Calcuu Logo"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <span
                className="text-xl lg:text-2xl font-bold text-calcuu-secondary"
                style={{ fontFamily: "Toxigenesis, sans-serif" }}
              >
                CALCUU
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Functies
              </a>
              <button
                onClick={scrollToVideoAndPlay}
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                Demo
              </button>
              <a
                href="#pricing"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Prijzen
              </a>
              <a
                href="#download"
                className="text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium"
              >
                Download
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-12"
                onClick={() => {
                  const downloadSection = document.getElementById("download");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Probeer Gratis
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-calcuu-secondary hover:text-calcuu-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-calcuu-detail py-4 space-y-3">
              <a
                href="#features"
                className="block text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Functies
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToVideoAndPlay();
                }}
                className="block w-full text-left text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium px-2 py-2 bg-transparent border-none cursor-pointer"
              >
                Demo
              </button>
              <a
                href="#pricing"
                className="block text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prijzen
              </a>
              <a
                href="#download"
                className="block text-calcuu-secondary hover:text-calcuu-primary transition-colors font-medium px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              <Button
                size="sm"
                className="w-full bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-12"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const downloadSection = document.getElementById("download");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Probeer Gratis
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-calcuu-white to-calcuu-background">
        <div className="container mx-auto px-4 py-5 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mt-7 pt-3">
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-bold text-calcuu-primary mb-4">
                  Vakschilders, opgelet!
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-calcuu-secondary leading-[1.1] tracking-tight">
                  Stop met het maken van&nbsp;
                  <span className="text-calcuu-primary">offertes</span> in de
                  avonduren
                </h1>
                <p className="text-lg md:text-xl text-calcuu-text-sub leading-relaxed max-w-2xl">
                  Calcuu is de slimme calculatie-app voor vakschilders. <br />
                  Geen papierwerk. Geen rekenwerk. Alleen nog maar schilderwerk
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold text-lg px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-12"
                  onClick={() => {
                    const downloadSection = document.getElementById("download");
                    if (downloadSection) {
                      downloadSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Probeer Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold text-lg px-8 rounded-lg transition-all duration-300 hover:scale-105 h-12"
                  onClick={scrollToVideoAndPlay}
                >
                  Bekijk demo video
                </Button>
              </div>
            </div>

            {/* App Mockup */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/calcuu-offerte-a085b6?format=webp&width=800"
                  alt="Calcuu app offerte voorbeeld op iPhone"
                  className="h-[600px] w-auto object-contain shadow-2xl"
                  style={{
                    background: "transparent",
                    padding: "0",
                    margin: "0",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Block Section */}
      <section className="py-16 lg:py-20 bg-calcuu-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Block 1 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-full h-auto text-calcuu-success self-stretch"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Automatische berekeningen
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Laat de app het werk doen. Voer je project in en krijg direct
                nauwkeurige calculaties voor materiaal en arbeid.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-full h-auto text-calcuu-success flex flex-col justify-start items-start self-stretch"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Professionele offertes
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Genereer direct ter plekke professionele offertes die indruk
                maken op je klanten en je bedrijf serieus laten overkomen.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-calcuu-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-full h-auto text-calcuu-success self-stretch"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3 leading-tight">
                Bespaar tijd
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Van uren naar minuten. Besteed je avonden aan wat echt
                belangrijk is in plaats van achter de computer zitten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-calcuu-primary mb-6 tracking-tight">
              Bereken en verstuur de offerte direct op locatie.
            </h2>
            <p className="text-lg md:text-xl text-calcuu-text-sub leading-relaxed max-w-3xl mx-auto">
              Geen gedoe meer met ingewikkelde spreadsheets of handmatige
              berekeningen. Maak professionele offertes voor binnen- en
              buitenwerk in minuten, geen uren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Side - 50% width - 1 block */}
            <div className="lg:col-span-1">
              <div className="bg-calcuu-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail flex flex-col min-h-[207px] mr-0.5 -mb-1 px-8 pt-8 pb-16">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mt-5 mb-4">
                      Visuele Calculatie
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Teken je project direct in de app en krijg automatisch
                      nauwkeurige berekeningen voor materiaal, arbeid en
                      totaalprijs.
                      <br />
                      <br />
                      Zowel met het binnen- als buitenwerk worden alle kozijnen,
                      ramen, deuren, direct berekend.
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F5b56eb342c2e4f31a15814e558107f2d"
                      alt="Visuele Calculatie"
                      className="aspect-[0.5] object-cover object-top w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 50% width - 2 blocks stacked */}
            <div className="lg:col-span-1 flex flex-col gap-8 justify-start -ml-px">
              <div className="bg-calcuu-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail justify-start ml-auto flex flex-col">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                      Urenregistratie
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Houd alles overzichtelijk zoals je uren per project, foto
                      documentatie, klantbeheer, materiaalbeheer en dat allemaal
                      in ��én app.
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2Fec3c5b217a284078a3636c326043c92f"
                      alt="Directe offreren"
                      className="aspect-[1.16] object-cover object-bottom w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-calcuu-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-calcuu-detail justify-start ml-auto flex flex-col">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                      Direct offreren
                    </h3>
                    <p className="text-calcuu-text-sub leading-relaxed">
                      Genereer overzichtelijke en professionele offertes ter
                      plekke bij de klant.
                    </p>
                  </div>
                  <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F5514f8cbf39b428b975beafed6af49bf"
                      alt="Alles-in-één"
                      className="aspect-[1.35] object-cover object-top w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-16 lg:py-24 bg-calcuu-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary mb-4">
            Zie Calcuu in actie
          </h2>
          <p className="text-lg text-calcuu-text-sub mb-12 max-w-2xl mx-auto">
            Bekijk hoe snel je van schets naar offerte gaat.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-calcuu-detail rounded-2xl aspect-video overflow-hidden shadow-lg">
              {!isVideoPlaying ? (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F1af5348599114d869b193511ef9c0717?format=webp&width=800"
                    alt="Calcuu Demo Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all duration-300"></div>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="bg-calcuu-white/90 hover:bg-calcuu-white text-calcuu-secondary rounded-full w-20 h-20 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/uL34L4Cy9cs?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1"
                  title="Calcuu Demo Video"
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-16">
            Wij zijn benieuwd of jij dit ook herkent?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                question:
                  "Het maken van een offerte een saai en tijdrovend proces is?",
                description:
                  "Overdag het werk opnemen en s'avonds thuis alles uitwerken / calculeren en dan digitaal omzetten naar een offerte.",
                isMiddle: false,
              },
              {
                question:
                  "Het inschatten van materialen en uren best wel moeilijk is?",
                description:
                  "Je eerst maar eens begint met één liter verf en dat je er al snel achter komt dat je tekort hebt en je weer verf moet halen.",
                isMiddle: true,
              },
              {
                question:
                  "Je eigenlijk niet precies weet hoeveel kosten je hebt gemaakt.",
                description:
                  "Ja, je schat het allemaal een beetje in. Plusminus zoveel verf en zoveel uren. Maar precies weten doe je het niet.",
                isMiddle: false,
              },
            ].map((audience, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-calcuu-primary/5 overflow-hidden ${audience.isMiddle ? "flex flex-col" : ""}`}
              >
                <h3 className="text-xl font-semibold text-calcuu-secondary mb-4">
                  {audience.question}
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl font-medium text-calcuu-secondary">
              Dit kan anders,{" "}
              <span className="text-calcuu-primary">sneller</span> en
              makkelijker.
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-calcuu-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* 4-Step Process Section */}
      <section className="py-16 lg:py-24 bg-calcuu-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-calcuu-secondary mb-6 tracking-tight">
                Offerte Maken doe je in 4 Stappen
              </h2>
              <p className="text-lg text-calcuu-text-sub max-w-3xl mx-auto">
                Maak het jezelf gemakkelijk en gebruik de&nbsp;
                <span className="font-semibold text-calcuu-secondary">
                  Calcuu app&nbsp;
                </span>
                <br />
                om het offerte proces te versnellen en te vereenvoudigen.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual Side - Left */}
              <div className="relative">
                <div className="relative">
                  {/* Background Circle */}
                  <div className="absolute -inset-8 bg-calcuu-primary/5 rounded-full"></div>

                  {/* Desktop Mockup */}
                  <div className="relative z-10 bg-calcuu-secondary rounded-lg p-6 shadow-xl mb-8">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-calcuu-background rounded p-4 space-y-2">
                      <div className="h-4 bg-calcuu-primary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-calcuu-detail rounded w-1/2"></div>
                      <div className="h-4 bg-calcuu-detail rounded w-2/3"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-calcuu-success/20 rounded"></div>
                        <div className="h-12 bg-calcuu-primary/20 rounded"></div>
                        <div className="h-12 bg-calcuu-detail rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Mockup */}
                  <div className="absolute -bottom-4 -right-4 w-48 h-96 bg-black rounded-[2rem] p-1 shadow-2xl z-20">
                    <div className="w-full h-full bg-calcuu-background rounded-[1.5rem] overflow-hidden">
                      <div className="h-8 bg-calcuu-white flex items-center justify-center">
                        <div className="w-20 h-1 bg-black rounded-full opacity-30"></div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="h-6 bg-calcuu-primary rounded w-20"></div>
                        <div className="h-20 bg-calcuu-detail rounded"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-calcuu-detail rounded w-3/4"></div>
                          <div className="h-3 bg-calcuu-detail rounded w-1/2"></div>
                        </div>
                        <div className="h-10 bg-calcuu-success rounded"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-calcuu-detail rounded"></div>
                          <div className="h-8 bg-calcuu-primary/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps Side - Right */}
              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "Teken Je Project",
                    description:
                      "Maak een schets van het te schilderen object direct in de app. Voeg eenvoudig kamers, ramen en deuren toe via onze visuele interface.",
                  },
                  {
                    number: "2",
                    title: "Automatische Berekening",
                    description:
                      "Calcuu berekent automatisch benodigde materialen (verf, primer, etc.) en geschatte uren op basis van je tekening en oppervlaktes.",
                  },
                  {
                    number: "3",
                    title: "Controleer Gegevens",
                    description:
                      "Controleer de berekeningen en pas indien nodig aan. Voeg extra kosten toe zoals steigers, afplakwerk of voorbereiding.",
                  },
                  {
                    number: "4",
                    title: "Verstuur Offerte",
                    description:
                      "Genereer een professionele offerte en verstuur deze direct naar je klant via e-mail of print ter plekke uit.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-transparent border-2 border-calcuu-primary text-calcuu-secondary rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 relative cursor-pointer">
                      {step.number}
                    </div>
                    <div className="flex-1 transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-semibold text-calcuu-secondary mb-2 transition-all duration-300 group-hover:text-calcuu-primary">
                        {step.title}
                      </h3>
                      <p className="text-calcuu-text-sub leading-relaxed transition-all duration-300 group-hover:text-calcuu-secondary mb-10">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-calcuu-background">
        <div className="container mx-auto px-4">
          <div className="max-w-[73rem] mx-auto flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary text-center mb-6">
              Waarom Calcuu voor jou de beste keuze is!
            </h2>
            <p className="text-lg text-calcuu-text-sub text-center mb-16 max-w-3xl mx-auto">
              Ontdek de voordelen die Calcuu biedt en zie waarom je geen last
              meer hebt van het gebruiken van meerdere app's en zoekrakende
              notities.
            </p>

            {/* Feature Boxes - Only Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
              {/* Feature Box 4 */}
              <div
                className="relative bg-white border border-calcuu-primary/20 rounded-lg p-6 h-60 flex flex-col items-center text-center transition-all duration-300 hover:border-calcuu-primary/40 hover:shadow-lg group overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(91, 41, 222, 0.1), 0 0 20px rgba(91, 41, 222, 0.1), 0 0 40px rgba(91, 41, 222, 0.05)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-calcuu-primary/5 via-transparent to-calcuu-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center h-full">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-calcuu-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-calcuu-secondary mb-3">
                    Hanteer je Eigen Prijzen
                  </h3>
                  <p className="text-sm text-calcuu-text-sub leading-relaxed flex-1 flex items-center">
                    Stel je eigen uurtarieven en materiaalkosten in. Pas prijzen
                    aan per project of klant voor maximale flexibiliteit.
                  </p>
                </div>
              </div>

              {/* Feature Box 5 */}
              <div
                className="relative bg-white border border-calcuu-primary/20 rounded-lg p-6 h-60 flex flex-col items-center text-center transition-all duration-300 hover:border-calcuu-primary/40 hover:shadow-lg group overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(91, 41, 222, 0.1), 0 0 20px rgba(91, 41, 222, 0.1), 0 0 40px rgba(91, 41, 222, 0.05)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-calcuu-primary/5 via-transparent to-calcuu-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center h-full">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-calcuu-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-calcuu-secondary mb-3">
                    Alles-op-één Plek
                  </h3>
                  <p className="text-sm text-calcuu-text-sub leading-relaxed flex-1 flex items-center">
                    Geen gedoe meer met verschillende apps. Tekenen, calculeren,
                    offreren en klantenbeheer in één overzichtelijke app.
                  </p>
                </div>
              </div>

              {/* Feature Box 6 */}
              <div
                className="relative bg-white border border-calcuu-primary/20 rounded-lg p-6 h-60 flex flex-col items-center text-center transition-all duration-300 hover:border-calcuu-primary/40 hover:shadow-lg group overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(91, 41, 222, 0.1), 0 0 20px rgba(91, 41, 222, 0.1), 0 0 40px rgba(91, 41, 222, 0.05)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-calcuu-primary/5 via-transparent to-calcuu-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center h-full">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-calcuu-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-calcuu-secondary mb-3">
                    Inzicht en Overzicht
                  </h3>
                  <p className="text-sm text-calcuu-text-sub leading-relaxed flex-1 flex items-center">
                    Bekijk al je projecten, winst per klus en materiaalverbruik
                    in duidelijke overzichten. Zo groei je bewust.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold text-lg px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-12"
                onClick={() => {
                  const downloadSection = document.getElementById("download");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Probeer de App Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Calculator />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-calcuu-secondary mb-4">
              Transparant. Simpel.
              <br />
              Upgrade Wanneer jij wilt.
            </h2>
            <p className="text-lg text-calcuu-text-sub mb-8 max-w-2xl mx-auto">
              Nu tijdelijk
              <span className="text-calcuu-primary font-bold">
                &nbsp;Mega Korting
              </span>
              &nbsp;op een jaarlijks abonnement
              <br />
              Begin <strong>gratis</strong>&nbsp;en maak je keuze later.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-calcuu-secondary">Maandelijks</span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  className="sr-only"
                  defaultChecked
                  onChange={(e) => {
                    const isAnnual = e.target.checked;
                    const monthlyPrices =
                      document.querySelectorAll(".monthly-price");
                    const yearlyPrices =
                      document.querySelectorAll(".yearly-price");
                    const toggle = document.querySelector(
                      "#billing-toggle + label > div",
                    );
                    const yearlyBadge = document.querySelector(".yearly-badge");

                    if (isAnnual) {
                      monthlyPrices.forEach((p) => p.classList.add("hidden"));
                      yearlyPrices.forEach((p) => p.classList.remove("hidden"));
                      toggle.style.transform = "translateX(24px)";
                      toggle.parentElement.style.backgroundColor = "#5B29DE";
                      yearlyBadge.classList.remove("hidden");
                    } else {
                      monthlyPrices.forEach((p) =>
                        p.classList.remove("hidden"),
                      );
                      yearlyPrices.forEach((p) => p.classList.add("hidden"));
                      toggle.style.transform = "translateX(0px)";
                      toggle.parentElement.style.backgroundColor = "#e5e7eb";
                      yearlyBadge.classList.add("hidden");
                    }
                  }}
                />
                <label
                  htmlFor="billing-toggle"
                  className="flex items-center cursor-pointer bg-calcuu-primary w-12 h-6 rounded-full p-1 transition-all duration-300"
                >
                  <div className="bg-white w-4 h-4 rounded-full shadow-sm transform translate-x-6 transition-transform duration-300"></div>
                </label>
              </div>
              <span className="text-calcuu-secondary">Jaarlijks</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse yearly-badge">
                BESPAAR 36%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-calcuu-detail h-[600px] flex flex-col">
              <h3 className="text-2xl font-bold text-calcuu-secondary mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <div className="monthly-price hidden">
                  <span className="text-4xl font-bold text-calcuu-secondary">
                    €0
                  </span>
                  <span className="text-calcuu-text-sub ml-2">
                    14 dagen gratis
                  </span>
                </div>
                <div className="yearly-price">
                  <span className="text-4xl font-bold text-calcuu-secondary">
                    €0
                  </span>
                  <span className="text-calcuu-text-sub ml-2">
                    14 dagen gratis
                  </span>
                </div>
              </div>
              <p className="text-calcuu-text-sub mb-6">
                Ideaal voor schilders die snel, eenvoudige en professionele
                offertes willen maken.
              </p>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-6"
                onClick={() => {
                  const downloadSection = document.getElementById("download");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Probeer Gratis
              </Button>

              <div className="space-y-4 flex-grow">
                <p className="font-semibold text-calcuu-secondary">
                  Starter functies:
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    "Onbeperkte projecten",
                    "Calculatie voor binnen- en buitenwerk",
                    "Professionele offertes met logo",
                    "Email ondersteuning",
                    "Basis materiaal database",
                    "14 dagen toegang",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-calcuu-primary" />
                      <span className="text-calcuu-text-sub">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div
              className="rounded-2xl p-8 shadow-lg border-2 border-calcuu-primary relative h-[600px] flex flex-col"
              style={{ backgroundColor: "#f8f6fc" }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-calcuu-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Meest Populair
              </div>
              <h3 className="text-2xl font-bold text-calcuu-primary mb-2">
                Professional
              </h3>
              <div className="mb-6">
                <div className="monthly-price hidden">
                  <span className="text-4xl font-bold text-calcuu-secondary">
                    €60
                  </span>
                  <span className="text-calcuu-text-sub ml-2">per maand</span>
                </div>
                <div className="yearly-price">
                  <span className="text-4xl font-bold text-calcuu-secondary">
                    €45
                  </span>
                  <span className="text-calcuu-text-sub ml-2">per maand</span>
                  <div className="text-sm text-green-500 font-semibold">
                    36% KORTING!
                  </div>
                </div>
              </div>
              <p className="text-calcuu-text-sub mb-6">
                Voor ervaren schilders die hun bedrijf willen laten groeien
              </p>

              <Button
                size="lg"
                className="w-full bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-6"
                onClick={() => {
                  const downloadSection = document.getElementById("download");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Nu
              </Button>

              <div className="space-y-4 flex-grow">
                <p className="font-semibold text-calcuu-secondary">
                  Alles van "Starter", plus:
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    "Onbeperkte projecten",
                    "Calculatie voor binnen- en buitenwerk",
                    "Professionele offertes met logo",
                    "Email ondersteuning",
                    "Basis materiaal database",
                    "Meerwerk: uren en notities",
                    "Projectfoto's",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-calcuu-primary" />
                      <span className="text-calcuu-text-sub">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-calcuu-detail h-[600px] flex flex-col">
              <h3 className="text-2xl font-bold text-calcuu-secondary mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-lg text-calcuu-text-sub">
                  Neem contact op
                </span>
              </div>
              <p className="text-calcuu-text-sub mb-6">
                Voor grote schildersbedrijven met meerdere teams en complexe
                behoeften
              </p>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-calcuu-secondary text-calcuu-secondary hover:bg-calcuu-secondary hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-6"
              >
                Contact Ons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 font-semibold">
            <h2 className="text-3xl md:text-4xl font-semibold text-calcuu-secondary mb-4 flex flex-col justify-center items-center">
              <span className="text-5xl bg-gray-50">Download Calcuu</span>
            </h2>

            <p className="text-xl font-semibold text-calcuu-secondary mb-16">
              <h4 className="text-gray-400 font-semibold"></h4>
            </p>

            <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Arrow pointing to App Store */}
              <img
                src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/pijl-8c2851?format=webp&width=800"
                alt="Arrow pointing to App Store"
                className="absolute -top-20 left-1/2 transform -translate-x-32 w-16 h-16 sm:w-20 sm:h-20"
              />

              {/* Arrow pointing to Google Play Store (mirrored) */}
              <img
                src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/pijl-8c2851?format=webp&width=800"
                alt="Arrow pointing to Google Play Store"
                className="absolute -top-20 right-1/2 transform translate-x-32 scale-x-[-1] w-16 h-16 sm:w-20 sm:h-20"
              />

              <div
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/nl/app/calcuu/id1609226426",
                    "_blank",
                  )
                }
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
              <div
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.calcuu.calcuu",
                    "_blank",
                  )
                }
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={(() => {
                const mockups = [
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/1.-download-mockup-a252b2?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/2.-download-mockup-9ff884?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/3.-download-mockup-d06f78?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/4.-download-mockup-f4d202?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/5.-download-mockup-7d5392?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/6.-download-mockup-cf2992?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/7.-download-mockup-37546e?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/8.-download-mockup-39e04a?format=webp&width=800",
                ];
                return mockups[Math.floor(Math.random() * mockups.length)];
              })()}
              alt="Professionele schilder gebruikt Calcuu app"
              className="max-w-full h-auto"
              style={{ maxHeight: "600px", width: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-calcuu-secondary text-calcuu-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-end gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                  alt="Calcuu Logo"
                  className="w-8 h-8"
                />
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Toxigenesis, sans-serif" }}
                >
                  CALCUU
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Slimme calculatie-app voor vakschilders
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@calcuu.nl</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+31 6 21511498</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Voorwaarden
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs bg-white text-black px-3 py-2 rounded-lg">
                  <Download className="w-4 h-4" />
                  <span>App Store</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-white text-black px-3 py-2 rounded-lg">
                  <Download className="w-4 h-4" />
                  <span>Google Play</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            © 2026 Calcuu by Zinger Company. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
