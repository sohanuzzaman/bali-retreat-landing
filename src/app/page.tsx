import HeroSection from '@/components/sections/HeroSection';
import SacredInvitationSection from '@/components/sections/SacredInvitationSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import DivineFeminineSection from '@/components/sections/DivineFeminineSection';
import AccommodationSection from '@/components/sections/AccommodationSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import FacilitatorsSection from '@/components/sections/FacilitatorsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InvestmentSection from '@/components/sections/InvestmentSection';
import BookingSection from '@/components/sections/BookingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import GallerySection from '@/components/sections/GallerySection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SacredInvitationSection />
      <ActivitiesSection />
      <DivineFeminineSection />
      <AccommodationSection />
      <TargetAudienceSection />
      <FacilitatorsSection />
      <TestimonialsSection />
      <InvestmentSection />
      <BookingSection />
      <FAQSection />
      <FinalCTASection />
      <GallerySection />
    </main>
  );
}
