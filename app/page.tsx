import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedProjectSection } from '@/components/sections/FeaturedProjectSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TechStackSection } from '@/components/sections/TechStackSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
