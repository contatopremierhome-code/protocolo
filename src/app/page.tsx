import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { OfferMatrix } from "@/components/landing/OfferMatrix";
import { AppFooter } from "@/components/landing/Footer";
import { RecentSalesPopup } from "@/components/landing/RecentSalesPopup";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <ScrollReveal>
          <SocialProof />
        </ScrollReveal>

        <ScrollReveal>
          <OfferMatrix />
        </ScrollReveal>

      </main>
      <AppFooter />
      <RecentSalesPopup />
      <ExitIntentPopup />
    </div>
  );
}
