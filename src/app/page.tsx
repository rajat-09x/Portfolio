import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import AchievementsAndHobbies, { CertificationsAndCourses } from '@/components/Highlights';
import Divider from '@/components/divider'; // ← note the capital D

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Hero />

      <About />
      <Divider />

      <CertificationsAndCourses />
      <Divider />

      <AchievementsAndHobbies />
      <Divider />

      <Skills />
      <Divider />

      <Projects />
      <Divider />

      <Experience />
      <Divider />

      {/* Optional before contact, a hair thicker & gentler */}
      <Divider />
      <Contact />
    </main>
  );
}
