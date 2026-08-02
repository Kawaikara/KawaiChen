import { useEffect, useState } from 'react';
import { motion, MotionConfig, useScroll, useTransform } from 'motion/react';
import { chapters } from '../content/experience';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceLanding() {
  const [activeSection, setActiveSection] = useState('top');
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -50%', threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <header className="experience-header">
        <a className="brand-mark" href="#top" aria-label="Nocturne home"><span>N</span><span>C</span></a>
        <nav aria-label="Section navigation">
          {chapters.map((chapter) => (
            <a className={activeSection === chapter.id ? 'is-active' : undefined} href={`#${chapter.id}`} key={chapter.id}>
              <span>{chapter.index}</span>{chapter.label}
            </a>
          ))}
        </nav>
        <a className="docs-link" href="/docs/">Read the docs <span>↗</span></a>
      </header>

      <main>
        <section className="experience-hero" data-section id="top">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div className="hero-glow" style={{ y: heroY }} aria-hidden="true" />
          <motion.div className="hero-copy" style={{ opacity: heroOpacity }}>
            <motion.p initial="hidden" animate="visible" variants={reveal} className="eyebrow">AN ASTRO-NATIVE FOUNDATION</motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08 }}>
              Build beyond<br />the <em>shell.</em>
            </motion.h1>
            <motion.div className="hero-meta" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.18 }}>
              <p>Documentation when you need clarity.<br />A blank canvas when you need expression.</p>
              <a href="#compose">Explore the system <span>↓</span></a>
            </motion.div>
          </motion.div>
          <div className="hero-index" aria-hidden="true">KAWAICHEN / 001</div>
        </section>

        <section className="manifesto" aria-label="Manifesto">
          <p>One foundation.</p>
          <p>More than one way to build.</p>
        </section>

        {chapters.map((chapter) => (
          <section className="chapter" data-section id={chapter.id} key={chapter.id}>
            <motion.div className="chapter-inner" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}>
              <div className="chapter-label"><span>{chapter.index}</span>{chapter.label}</div>
              <div className="chapter-copy"><h2>{chapter.title}</h2><p>{chapter.body}</p></div>
              <div className="chapter-detail">{chapter.detail}</div>
            </motion.div>
          </section>
        ))}

        <footer className="experience-footer">
          <div><span>READY TO SHAPE</span><strong>Your next project.</strong></div>
          <a href="/docs/">Open documentation <span>↗</span></a>
          <p>KawaiChen — Astro-native, by design.</p>
        </footer>
      </main>
    </MotionConfig>
  );
}
