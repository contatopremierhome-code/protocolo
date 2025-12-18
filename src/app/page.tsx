import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { OfferMatrix } from "@/components/landing/OfferMatrix";
import { AppFooter } from "@/components/landing/Footer";
import { RecentSalesPopup } from "@/components/landing/RecentSalesPopup";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { TopicsCovered } from "@/components/landing/TopicsCovered";
import { PowerfulQuestions } from "@/components/landing/PowerfulQuestions";
import { ForWhom } from "@/components/landing/ForWhom";
import { HowItWorks } from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <ScrollReveal>
          <PowerfulQuestions />
        </ScrollReveal>

        <ScrollReveal>
          <ForWhom />
        </ScrollReveal>

        <ScrollReveal>
          <TopicsCovered />
        </ScrollReveal>

        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

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
