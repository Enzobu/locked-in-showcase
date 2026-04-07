import { ConfiguratorPreviewSection } from '@/components/sections/home/configurator-preview-section';
import { HeroSection } from '@/components/sections/home/hero-section';
import { PlatformTeaserSection } from '@/components/sections/home/platform-teaser-section';
import { UseCasesSection } from '@/components/sections/home/use-cases-section';
import { ValueSection } from '@/components/sections/home/value-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <PlatformTeaserSection />
      <UseCasesSection />
      <ConfiguratorPreviewSection />
    </>
  );
}
