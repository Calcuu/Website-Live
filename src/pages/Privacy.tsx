import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Mail } from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title
    document.title = "Privacyverklaring | Calcuu - Veilig en Transparant";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Lees hoe Calcuu jouw persoonlijke gegevens beschermt. Transparante privacyverklaring conform AVG voor onze schilder app.",
      );
    }

    // Add/update Open Graph tags for privacy page
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        document.head.appendChild(metaTag);
      }
    };

    updateMetaTag("og:title", "Privacyverklaring | Calcuu");
    updateMetaTag(
      "og:description",
      "Transparante privacyverklaring: hoe Calcuu jouw gegevens beschermt",
    );
    updateMetaTag("og:url", "https://www.calcuu.com/privacy");
    updateMetaTag(
      "og:image",
      "https://cdn.builder.io/api/v1/image/assets%2F4370c0c81082416ebba6e6fcedf1fc84%2F0043911fd70c4889b0c5599b2468c7da?format=webp&width=1200",
    );

    // Cleanup function to restore original tags when component unmounts
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
    };
  }, []);

  return (
    <div className="min-h-screen bg-calcuu-white font-inter overflow-x-hidden max-w-full">
      {/* Navigation Menu */}
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            {/* Two-Column Header Layout */}
            <div className="bg-gradient-to-br from-calcuu-white to-calcuu-background border border-calcuu-detail rounded-card p-8 lg:p-12 shadow-lg max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Left Column - Logo & Company Info (1/3) */}
                <div className="text-center lg:text-left lg:col-span-1">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="bg-white rounded-full p-3 shadow-md">
                      <img
                        src="https://cdn.builder.io/api/v1/assets/4370c0c81082416ebba6e6fcedf1fc84/logo-purple-spring-500x500px-9f1602?format=webp&width=800"
                        alt="Calcuu Logo"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  <h1
                    className="text-2xl lg:text-3xl font-bold text-calcuu-secondary mb-3"
                    style={{ fontFamily: "Geist, Inter, sans-serif" }}
                  >
                    calcuu
                  </h1>

                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-calcuu-detail mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-calcuu-secondary">
                      Calcuu B.V.
                    </span>
                    <span className="text-calcuu-text-sub text-xs">•</span>
                    <span className="text-xs text-calcuu-text-sub">
                      KvK: 93209649
                    </span>
                  </div>
                </div>

                {/* Right Column - Privacy Title & Description (2/3) */}
                <div className="text-center lg:text-left lg:col-span-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-calcuu-secondary mb-4">
                    Privacyverklaring
                  </h2>
                  <p className="text-lg text-calcuu-text-sub leading-relaxed mb-6">
                    Wij respecteren jouw privacy en beschermen jouw
                    persoonsgegevens volgens de hoogste standaarden
                  </p>

                  {/* Version Info */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-calcuu-detail">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-calcuu-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-medium text-calcuu-secondary">
                          {new Date().toLocaleDateString("nl-NL")}
                        </span>
                      </div>
                    </div>
                    <div className="bg-calcuu-primary/10 rounded-lg px-4 py-2 border border-calcuu-primary/20">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-calcuu-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-medium text-calcuu-primary">
                          Versie 1.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                1. Verantwoordelijke voor gegevensverwerking
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                De verantwoordelijke voor de verwerking van persoonsgegevens
                binnen de Calcuu app is:
              </p>
              <div className="bg-calcuu-background rounded-lg p-6">
                <p className="text-calcuu-secondary font-semibold">
                  Calcuu B.V.
                </p>
                <p className="text-calcuu-text-sub">John de Visserhof 4</p>
                <p className="text-calcuu-text-sub">1621 PS Hoorn, Nederland</p>
                <p className="text-calcuu-text-sub">
                  E-mail: support@calcuu.com
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                2. Wat zijn persoonsgegevens?
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed">
                Persoonsgegevens zijn alle gegevens die informatie geven over
                een identificeerbare natuurlijke persoon, zoals je naam,
                e-mailadres, IP-adres of locatiegegevens.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                3. Welke gegevens verwerken we en waarom?
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed mb-6">
                Tenzij anders aangegeven, is de wettelijke grondslag voor de
                gegevensverwerking artikel 6, lid 1, onder b, van de Algemene
                Verordening Gegevensbescherming (AVG): uitvoering van een
                overeenkomst.
              </p>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                3.1 Technische communicatiegegevens
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Bij gebruik van de app verzamelen we onder meer:
              </p>
              <ul className="list-disc pl-6 text-calcuu-text-sub space-y-1 mb-6">
                <li>Apparaatnaam</li>
                <li>Besturingssysteem en app-versie</li>
                <li>Mobiele provider</li>
                <li>Unieke apparaat-ID</li>
                <li>Tijdstip van app-storingen</li>
                <li>IP-adres</li>
              </ul>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                3.2 Bluetooth-verbinding met Leica afstandslaser
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Voor het koppelen van een Leica afstandslaser via Bluetooth
                verzamelen wij:
              </p>
              <ul className="list-disc pl-6 text-calcuu-text-sub space-y-1">
                <li>Bluetooth-ID van het apparaat</li>
                <li>Meetgegevens</li>
                <li>Verbindingsdata</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                4. Registratie en gebruikersaccount
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed mb-6">
                Om de app te gebruiken, maak je een persoonlijk account aan met
                je e-mailadres en wachtwoord. Je kunt hier klant- en
                projectgegevens opslaan, zoals schilderprojecten, materialen en
                offertes. Na registratie ontvang je een bevestiging per e-mail.
              </p>

              <div className="bg-calcuu-primary/5 border border-calcuu-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-calcuu-secondary mb-3">
                  Account verwijdering&nbsp;
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed mb-4">
                  Je kunt je account op elk moment volledig verwijderen. Hierbij
                  worden alle jouw persoonsgegevens permanent gewist van onze
                  servers.
                </p>
                <div className="space-y-2">
                  <p className="text-calcuu-text-sub">
                    <strong>Optie 1:</strong> Via de app - Ga naar Instellingen
                    &gt; Account &gt; Account verwijderen
                  </p>
                  <p className="text-calcuu-text-sub">
                    <strong>Optie 2:</strong> Stuur een e-mail naar
                    <a
                      href="mailto:support@calcuu.com"
                      className="text-calcuu-primary hover:underline ml-1"
                    >
                      support@calcuu.com
                    </a>{" "}
                    met het onderwerp "Account verwijdering"
                  </p>
                  <p className="text-sm text-calcuu-text-sub mt-4 italic">
                    Account verwijdering wordt binnen 30 dagen verwerkt en is
                    onomkeerbaar.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                5. App-machtigingen
              </h2>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                5.1 Bluetooth
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Toestemming is nodig voor Bluetooth-koppeling met de
                afstandslaser. Recht van intrekking: je kunt deze toestemming op
                elk moment intrekken via je apparaatinstellingen.
              </p>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                5.2 Netwerkcommunicatie
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-6">
                Voor het functioneren van de app is internettoegang vereist om
                gegevens te verzenden en synchroniseren met onze servers.
              </p>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                5.3 Locatie
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed">
                Toestemming is nodig om automatisch het adres in te vullen bij
                het aanmaken van een project. Locatie wordt alleen gebruikt op
                het moment dat je op de locatieknop tikt in het aanmaakscherm.
                Locatie wordt nooit op de achtergrond verzameld of opgeslagen.
              </p>
            </section>

            {/* New Section - Data Safety for Google Play */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                6. Data Safety&nbsp;
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed mb-6">
                Voor transparantie volgens Google Play Store beleid, hieronder
                een overzicht van welke data we verzamelen en hoe we deze
                gebruiken:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-calcuu-background rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-calcuu-secondary mb-3">
                    ✅ Data die we WEL verzamelen
                  </h3>
                  <ul className="space-y-2 text-calcuu-text-sub">
                    <li>• E-mailadres (voor account)</li>
                    <li>• Projectgegevens (door jou ingevoerd)</li>
                    <li>• Apparaat informatie (voor ondersteuning)</li>
                    <li>• App-gebruik statistieken (anoniem)</li>
                    <li>• Bluetooth gegevens (Leica koppeling)</li>
                    <li>• Locatiegegevens (alleen op verzoek, voor automatisch invullen van projectadres)</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">
                    ❌ Data die we NIET verzamelen
                  </h3>
                  <ul className="space-y-2 text-red-600">
                    <li>• Contactenlijst</li>
                    <li>• Camera/foto's</li>
                    <li>• Microfoon/audio</li>
                    <li>• SMS/telefoongegevens</li>
                    <li>• Financiële informatie</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Data versleuteling:</strong> Alle data wordt
                  versleuteld opgeslagen en verzonden via HTTPS. We delen geen
                  persoonlijke data met derden voor marketing doeleinden.
                </p>
              </div>
            </section>

            {/* Section 7 - External Service Providers (renumbered) */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                7. Externe dienstverleners
              </h2>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                7.1 Digital Ocean
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Wij gebruiken DigitalOcean (DigitalOcean LLC, 101 Avenue of the
                Americas, 10th Floor, New York, NY 10013, USA) voor hosting en
                opslag van onze app-data. DigitalOcean verwerkt gegevens namens
                ons en volgens onze instructies. Zij zijn gebonden aan strikte
                beveiligingsstandaarden en privacyovereenkomsten.
              </p>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Voor meer informatie over hoe DigitalOcean met gegevens omgaat,
                zie hun Privacy Policy:
                <a
                  href="https://www.digitalocean.com/legal/privacy-policy/"
                  className="text-calcuu-primary hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.digitalocean.com/legal/privacy-policy/
                </a>
              </p>

              <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                7.2 Google Analytics
              </h3>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Wij gebruiken Google Analytics om anoniem inzicht te verkrijgen
                in het gebruik van de app, met als doel deze te verbeteren.
                IP-adressen worden geanonimiseerd en er worden geen
                persoonsgegevens gedeeld met Google.
              </p>
              <p className="text-calcuu-text-sub leading-relaxed">
                Met alle externe dienstverleners is een verwerkersovereenkomst
                afgesloten conform de AVG.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                8. Gegevensbeveiliging
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed">
                Gegevensoverdracht via de app is versleuteld. Calcuu raadt aan
                om je apparaat extra te beveiligen met een wachtwoord of
                gezichtsherkenning. Bij het verwijderen van de app worden lokaal
                opgeslagen gegevens automatisch gewist.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                9. Bewaartermijnen
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed">
                Persoonsgegevens worden niet langer bewaard dan strikt
                noodzakelijk. Technische communicatiegegevens worden maximaal 3
                jaar bewaard of geanonimiseerd.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                10. Jouw rechten
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed mb-4">
                Je hebt recht op:
              </p>
              <ul className="list-disc pl-6 text-calcuu-text-sub space-y-1 mb-4">
                <li>Inzage in je gegevens</li>
                <li>Rectificatie of verwijdering</li>
                <li>Beperking van verwerking</li>
                <li>Overdraagbaarheid van gegevens</li>
                <li>Bezwaar tegen verwerking</li>
              </ul>
              <p className="text-calcuu-text-sub leading-relaxed">
                Voor uitoefening van deze rechten kun je mailen naar
                support@calcuu.com. Je hebt daarnaast het recht om een klacht in
                te dienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                11. E-mailcommunicatie
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed">
                Wij kunnen je informeren over updates en belangrijke
                app-meldingen. Je kunt je hiervoor op elk moment afmelden via de
                link in de e-mail of een verzoek sturen naar support@calcuu.com.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                12. Wijzigingen
              </h2>
              <p className="text-calcuu-text-sub leading-relaxed">
                Wij behouden ons het recht voor om deze privacyverklaring aan te
                passen. Bij ingrijpende wijzigingen word je hierover
                geïnformeerd via de app of e-mail.
              </p>
            </section>

            {/* Section 13 - Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-calcuu-secondary mb-4">
                13. Contact
              </h2>
              <div className="bg-calcuu-background rounded-lg p-6">
                <p className="text-calcuu-secondary font-semibold mb-2">
                  Calcuu B.V.
                </p>
                <p className="text-calcuu-text-sub">John de Visserhof 4</p>
                <p className="text-calcuu-text-sub">1621 PS Hoorn, Nederland</p>
                <div className="flex items-center gap-2 mt-3">
                  <Mail className="w-4 h-4 text-calcuu-primary" />
                  <a
                    href="mailto:support@calcuu.com"
                    className="text-calcuu-primary hover:underline"
                  >
                    support@calcuu.com
                  </a>
                </div>
              </div>
            </section>

            {/* Final Statement */}
            <section className="mb-8">
              <div className="bg-calcuu-primary/5 border border-calcuu-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-calcuu-secondary mb-3">
                  Slotverklaring
                </h3>
                <p className="text-calcuu-text-sub leading-relaxed">
                  Door gebruik te maken van de Calcuu app ga je akkoord met deze
                  privacyverklaring.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Actions */}
          <div className="text-center mt-12 pt-8 border-t border-calcuu-detail">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-calcuu-primary hover:bg-calcuu-primary/90 text-white font-semibold px-8"
              >
                <Home className="w-5 h-5 mr-2" />
                Terug naar Home
              </Button>

              <Button
                onClick={() => navigate(-1)}
                size="lg"
                variant="outline"
                className="border-calcuu-primary text-calcuu-primary hover:bg-calcuu-primary hover:text-white font-semibold px-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Vorige Pagina
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
