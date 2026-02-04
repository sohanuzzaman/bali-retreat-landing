import HeroSection from '@/components/sections/HeroSection';
import SacredInvitationSection from '@/components/sections/SacredInvitationSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import DivineFeminineSection from '@/components/sections/DivineFeminineSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import FacilitatorsSection from '@/components/sections/FacilitatorsSection';
import InvestmentSection from '@/components/sections/InvestmentSection';
import BookingSection from '@/components/sections/BookingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SacredInvitationSection />
      <ActivitiesSection />
      <DivineFeminineSection />
      <TargetAudienceSection />
      <FacilitatorsSection />
      <InvestmentSection />
      <BookingSection />
      <FAQSection />
      <FinalCTASection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
