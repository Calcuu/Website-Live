import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/nl/app/calcuu/id1609226426";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.calcuu.calcuu";

/**
 * Smart redirect-pagina. De QR-code op de homepage wijst hierheen.
 * - iPhone/iPad → direct door naar App Store
 * - Android → direct door naar Google Play
 * - Desktop / onbekend → keuzemenu tonen
 */
const GetApp = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Test-override via ?platform=ios|android (handig om de redirect te testen)
    const override = new URLSearchParams(window.location.search).get(
      "platform",
    );
    if (override === "ios") {
      window.location.replace(APP_STORE_URL);
      return;
    }
    if (override === "android") {
      window.location.replace(PLAY_STORE_URL);
      return;
    }
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua)) {
      window.location.replace(APP_STORE_URL);
    } else if (/Android/.test(ua)) {
      window.location.replace(PLAY_STORE_URL);
    }
    // Desktop blijft hier: toont fallback-knoppen
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-calcuu-background">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-calcuu-secondary mb-3">
          Calcuu downloaden
        </h1>
        <p className="text-calcuu-text-sub mb-8">
          Kies je platform om de app te downloaden.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={APP_STORE_URL}
            className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-card hover:bg-gray-800 transition-colors"
          >
            <span className="text-left">
              <span className="block text-xs">Download in de</span>
              <span className="block text-lg font-semibold">App Store</span>
            </span>
          </a>
          <a
            href={PLAY_STORE_URL}
            className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-card hover:bg-gray-800 transition-colors"
          >
            <span className="text-left">
              <span className="block text-xs">Download in</span>
              <span className="block text-lg font-semibold">Google Play</span>
            </span>
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-8">
          Word je niet doorgestuurd? Klik op de juiste knop hierboven.
        </p>
      </div>
    </div>
  );
};

export default GetApp;
