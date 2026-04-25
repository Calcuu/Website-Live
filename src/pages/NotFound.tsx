import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set proper meta tags for 404 page
    document.title = "Pagina niet gevonden (404) | Calcuu";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Deze pagina bestaat niet op Calcuu.com. Ga terug naar onze homepage voor de beste schilder app.",
      );
    }

    // Add noindex for 404 page
    let noindexMeta = document.querySelector('meta[name="robots"]');
    if (noindexMeta) {
      noindexMeta.setAttribute("content", "noindex, follow");
    } else {
      noindexMeta = document.createElement("meta");
      noindexMeta.setAttribute("name", "robots");
      noindexMeta.setAttribute("content", "noindex, follow");
      document.head.appendChild(noindexMeta);
    }

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );

    // Cleanup
    return () => {
      document.title =
        "Calcuu - Offerte App voor Schilders | Snel & Professioneel Calculeren";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Met Calcuu maak je binnen 5 minuten een professionele offerte. Speciaal voor zzp'ers en schildersbedrijven. Snel, mobiel en foutloos calculeren. Probeer gratis!",
        );
      }
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.setAttribute(
          "content",
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        );
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-calcuu-white to-calcuu-background">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-calcuu-white/95 backdrop-blur-sm border-b border-calcuu-detail">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-end gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                alt="Calcuu Logo"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <span
                className="text-xl lg:text-2xl font-bold text-calcuu-secondary"
                style={{ fontFamily: "Geist, Inter, sans-serif" }}
              >
                calcuu
              </span>
            </button>

            {/* Back to Home Button */}
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              Terug naar Home
            </Button>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-2xl mx-auto">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-9xl lg:text-[12rem] font-bold text-calcuu-primary/20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-calcuu-secondary">
              Oeps! Deze pagina bestaat niet
            </h2>
            <p className="text-lg text-calcuu-text-sub leading-relaxed">
              De pagina die je zoekt kan niet worden gevonden. Misschien is de
              link verouderd of heb je een verkeerde URL ingetypt.
            </p>
            <div className="text-sm text-calcuu-text-sub bg-calcuu-background rounded-lg p-4">
              <span className="font-medium">Gezochte pagina:</span>
              <code className="ml-2 bg-white px-2 py-1 rounded text-calcuu-primary">
                {location.pathname}
              </code>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold px-8"
            >
              <Home className="w-5 h-5 mr-2" />
              Ga naar Home
            </Button>

            <Button
              onClick={() => navigate(-1)}
              size="lg"
              variant="outline"
              className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold px-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ga Terug
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
