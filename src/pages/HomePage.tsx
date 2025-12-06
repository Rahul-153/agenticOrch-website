import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ContactSection } from '@/components/sections/ContactSection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <CaseStudySection />
      <ContactSection />
    </div>
  );
}
