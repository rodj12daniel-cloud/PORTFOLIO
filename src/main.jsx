import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'
import './styles.css'
import './mobile-overrides.css'
import profileImage from './images/7389f101-5846-4074-950e-fc58a0f107ee.jpg'
import ledgerlyImage from './images/ledgerly.jpg'
import footballImage from './images/football90.jpg'
import endlessImage from './images/endless.jpg'

const projects = [
  {
    number: '01',
    name: 'Ledgerly',
    type: 'Finance / Web app',
    description: 'A modern personal finance and expense tracking web application for wallets, expenses, multiple currencies, analytics, and net worth.',
    technologies: ['React', 'JavaScript', 'CSS', 'MongoDB'],
    link: 'https://client-sigma-liard.vercel.app/',
    accent: 'lime',
    image: ledgerlyImage,
  },
  {
    number: '02',
    name: 'Football 90',
    type: 'Commerce / Web store',
    description: 'A football jersey e-commerce experience with club and national team collections, product browsing, and shopping cart functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Aiven'],
    link: 'https://football90-three.vercel.app/',
    accent: 'coral',
    image: footballImage,
  },
  {
    number: '03',
    name: 'Endless Grind',
    type: 'Capstone / Management system',
    description: 'A fitness management web application for memberships, training goals, and appointment scheduling through one centralized platform.',
    technologies: ['C#', 'ASP.NET Core', 'MySQL'],
    link: 'https://endlessgrind.vercel.app/',
    accent: 'sky',
    image: endlessImage,
  },
]

const skills = ['React', 'JavaScript', 'HTML & CSS', 'MongoDB', 'MySQL', 'UI/UX Design']

function Arrow({ external = false }) {
  return <span className={`arrow ${external ? 'external' : ''}`} aria-hidden="true">↗</span>
}

function BrandIcon({ name }) {
  if (name === 'facebook') {
    return <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>
  }
  return <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.35 1.13 2.93.86.09-.67.35-1.13.64-1.39-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.91c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" clipRule="evenodd" /></svg>
}

function NavIcon({ name }) {
  const paths = {
    home: 'M3 10.8 12 3l9 7.8v9.7a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5v-9.7Z',
    projects: 'M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z',
    skills: 'M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Zm0 4L7.5 9.5 12 12l4.5-2.5L12 7Zm-4.5 6v2L12 17.5l4.5-2.5v-2L12 15.5 7.5 13Z',
    about: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM10.8 11h2.4v6h-2.4v-6Z',
    contact: 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 4.8 8-4.8V7l-8 4.8L4 7Z',
    education: 'M4 5h16v14H4V5Zm3 3h10M7 12h10M7 15h6',
  }
  return <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>
}

function TechLogo({ skill }) {
  const logos = {
    React: ['react', '61DAFB'],
    JavaScript: ['javascript', 'F7DF1E'],
    'HTML & CSS': ['html5', 'E34F26'],
    MongoDB: ['mongodb', '47A248'],
    MySQL: ['mysql', '4479A1'],
    'UI/UX Design': ['figma', 'F24E1E'],
  }
  const [slug, color] = logos[skill]
  return <img className="tech-logo" src={`https://cdn.simpleicons.org/${slug}/${color}`} alt={`${skill} logo`} />
}

const StyledWrapper = styled.div`
  .toggle-container {
    --knob-size: 1.75em;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .toggle-input {
    position: absolute;
    z-index: 2;
    bottom: 132.5%;
    border-radius: 50%;
    transform: rotate(-25deg);
    transform-origin: 50% 4.75em;
    width: var(--knob-size);
    height: var(--knob-size);
    opacity: 0;
    font: inherit;
    transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);
    cursor: pointer;
  }

  .toggle-input:checked { transform: rotate(25deg); }
  .toggle-handle-wrapper { position: absolute; z-index: 1; bottom: -135%; -webkit-mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%); mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%); width: 200%; overflow: hidden; }
  .toggle-handle { display: flex; flex-direction: column; align-items: center; transform: rotate(-25deg); transform-origin: bottom center; transition: transform .24s cubic-bezier(.65, 1.35, .5, 1); }
  .toggle-input:checked + .toggle-handle-wrapper > .toggle-handle { transform: rotate(25deg); }
  .toggle-handle-knob { position: relative; z-index: 1; border-radius: 50%; width: var(--knob-size); height: var(--knob-size); background-image: radial-gradient(farthest-corner at 70% 30%, #fedee2 4%, #d63534 12% 24%, #a81a1a 50% 65%, #d63534 75%); transition: transform .24s cubic-bezier(.65, 1.35, .5, 1); }
  .toggle-input:checked + .toggle-handle-wrapper .toggle-handle-knob { transform: rotate(-90deg); }
  .toggle-handle-knob::after { content: ''; position: absolute; inset: 0; border-radius: inherit; box-shadow: inset 0 0 8px 2px rgb(255 255 255 / .4); opacity: 0; transition: opacity .2s; }
  .toggle-input:hover + .toggle-handle-wrapper .toggle-handle-knob::after, .toggle-input:focus-visible + .toggle-handle-wrapper .toggle-handle-knob::after { opacity: 1; }
  .toggle-handle-bar-wrapper { position: relative; width: .5em; height: 3em; }
  .toggle-handle-bar { position: absolute; top: calc(var(--knob-size) / 2 * -1); left: 0; width: 100%; height: calc(100% + var(--knob-size) / 2); background-image: linear-gradient(to right, #777475, #a4a4a4, #fff 45% 55%, #a4a4a4, #777475); background-position-x: .06125em; transition: background-position-x .24s cubic-bezier(.65, 1.35, .5, 1); box-shadow: inset 0 1em .25em rgb(0 0 0 / .4); }
  .toggle-input:checked + .toggle-handle-wrapper .toggle-handle-bar { background-position-x: -.06125em; }
  .toggle-base { position: relative; border-radius: 3.125em; padding: .25em; width: 3.5em; height: 1.125em; background-color: #fff; background-image: linear-gradient(to bottom, #fff, #d7d7d7); box-shadow: 0 -.25em .5em #fff, 0 .25em .5em #d7d7d7; }
  .toggle-base-inside { position: relative; border-radius: inherit; width: 100%; height: 100%; background-image: linear-gradient(to bottom, #a6a6a6, #7d7d7d); box-shadow: inset 0 .0625em rgb(255 255 255 / .2), inset 0 -.03125em rgb(255 255 255 / 1), inset 0 -.0625em .25em rgb(0 0 0 / .1); }
  .toggle-base-inside::after { content: ''; position: absolute; inset: 0; border-radius: inherit; background-image: linear-gradient(to bottom, #5b9dff, #2864d7); box-shadow: inherit; opacity: 0; transition: opacity .24s cubic-bezier(.65, 1.35, .5, 1); }
  .toggle-input:checked ~ .toggle-base .toggle-base-inside::after { opacity: 1; }
`

function Switch({ checked, onChange }) {
  return (
    <StyledWrapper>
      <div className="toggle-container">
        <input className="toggle-input" type="checkbox" checked={checked} onChange={onChange} aria-label={checked ? 'Switch to light mode' : 'Switch to dark mode'} />
        <div className="toggle-handle-wrapper"><div className="toggle-handle"><div className="toggle-handle-knob" /><div className="toggle-handle-bar-wrapper"><div className="toggle-handle-bar" /></div></div></div>
        <div className="toggle-base"><div className="toggle-base-inside" /></div>
      </div>
    </StyledWrapper>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element))
    return () => reveal.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <aside className="sidebar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Rodj Rogacion home">
          <span className="brand-label">Rodj Rogacion</span>
        </a>
        <div className="mobile-profile"><img src={profileImage} alt="Rodj Rogacion" /><div><strong>Rodj Rogacion <span className="verified">✓</span></strong><small>@rodj.rogacion · portfolio</small></div></div>
        <div className="mobile-theme-toggle"><Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /></div>
        <div className="profile-orbit"><img src={profileImage} alt="Rodj Rogacion" /></div>
        <div className="profile-name">Rodj Rogacion <span className="verified">✓</span></div>
        <div className="profile-handle">@rodj.rogacion · portfolio</div>
        <div className="social-row"><a href="https://www.facebook.com/rodj.rogacion.2025" target="_blank" rel="noreferrer" aria-label="Facebook"><BrandIcon name="facebook" /></a><a href="https://github.com/rodj12daniel-cloud" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a><a href="mailto:rodj12daniel@gmail.com" aria-label="Email">@</a></div>
        <div className="sidebar-rule" />
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {[['home', 'Home', 'home'], ['work', 'Projects', 'projects'], ['skills', 'Skills', 'skills'], ['about', 'About', 'about'], ['contact', 'Contact', 'contact']].map(([id, label, icon]) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}><b><NavIcon name={icon} /></b>{label}</a>
          ))}
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Open to opportunities</div>
      </aside>

      <main>
        <section className="dashboard-home" id="home">
          <div className="dashboard-top reveal"><div><p className="eyebrow"><span className="status-dot" /> Aspiring web developer · UI/UX designer</p><h1>Build it with<br /><em>intention.</em></h1><p className="hero-intro">I build modern, responsive and user-focused websites using clean code and thoughtful design.</p></div><div className="dashboard-actions"><Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /><a className="button button-primary" href="#contact">Get in touch <Arrow /></a></div></div>
          <div className="tool-strip reveal"><div className="strip-label"><small>Daily drivers</small><strong>Tools I work with</strong></div><div className="tool-items"><div className="tool-items-track">{[0, 1].map(copy => skills.map(skill => <span key={`${copy}-${skill}`}><TechLogo skill={skill} />{skill}</span>))}</div></div></div>
          <div className="mobile-explore-heading"><strong>Explore</strong><a href="#work">Swipe <Arrow /></a></div>
          <div className="dashboard-grid">
            <a className="dash-card projects-card reveal" href="#work"><div className="card-heading"><span className="card-icon"><NavIcon name="projects" /></span><div><h2>Projects</h2><p>Selected work built to solve real problems.</p></div></div><div className="project-preview"><div className="browser-chrome"><i /><i /><i /><span>client-sigma-liard.vercel.app</span></div><img src={ledgerlyImage} alt="Ledgerly finance dashboard" /></div><span className="card-link">Explore work <Arrow /></span></a>
            <a className="dash-card about-card reveal" href="#about"><div className="card-heading"><span className="card-icon"><NavIcon name="about" /></span><div><h2>About</h2><p>Who I am and how I work.</p></div></div><div className="about-mark"><span>R</span><i /></div><span className="card-link">Get to know me <Arrow /></span></a>
            <a className="dash-card skills-card reveal" href="#skills"><div className="card-heading"><span className="card-icon"><NavIcon name="skills" /></span><div><h2>Skills</h2><p>Technologies I use to build.</p></div></div><div className="mini-tags">{skills.slice(0, 5).map(skill => <span key={skill}>{skill}<b>•</b></span>)}</div><span className="card-link">View toolkit <Arrow /></span></a>
            <a className="dash-card education-card reveal" href="#resume"><div className="card-heading"><span className="card-icon"><NavIcon name="education" /></span><div><h2>Education</h2><p>Information Technology</p></div></div><div className="education-line"><strong>DLSUD</strong><span>Web Development<br />Specialization</span></div><span className="card-link">My background <Arrow /></span></a>
            <a className="dash-card contact-card reveal" href="#contact"><div className="card-heading"><span className="card-icon"><NavIcon name="contact" /></span><div><h2>Let's connect</h2><p>Open to opportunities and collaborations.</p></div></div><div className="contact-card-email">rodj12daniel<br /><em>@gmail.com</em></div><span className="card-link">Start a conversation <Arrow /></span></a>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label reveal"><span>01</span> About</div>
          <div className="about-layout">
            <h2 className="section-heading reveal">Thoughtful interfaces,<br /><span>built to be useful.</span></h2>
            <div className="about-copy reveal">
              <p className="large-copy">I am a fresh graduate in Information Technology from De La Salle University–Dasmariñas, specializing in Web Development.</p>
              <p>My work sits at the intersection of frontend development, backend development, and visual design. I enjoy turning a clear idea into a responsive, considered experience that feels simple to use, supported by reliable functionality behind the interface.</p>
              <p className="open-to">Currently open to opportunities in <strong>Web Development</strong>, <strong>Frontend Development</strong>, <strong>Backend Development</strong>, and <strong>UI/UX Design</strong>.</p>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-label reveal"><span>02</span> Selected work</div>
          <div className="work-heading reveal"><h2>MY <span>WORK</span></h2><p>A small selection of things I have built.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project-${project.accent} reveal`} key={project.number}>
                  <div className="project-visual">
                    <div className="browser-frame"><div className="browser-chrome"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(' ', '')}.vercel.app</span></div><img className="project-image" src={project.image} alt={`${project.name} website`} /></div>
                  <div className="project-ui ui-top"><span>{project.number} / PROJECT</span><span className="ui-dot" /></div>
                  <div className="project-ui ui-bottom"><span>{project.type}</span><span>RODJ ROGACION</span></div>
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                  <h3>{project.name}{project.name === 'Endless Grind' && <sup>®</sup>}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View live site <Arrow external /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-label reveal"><span>03</span> Capabilities</div>
          <div className="skills-layout">
            <div className="reveal"><h2 className="section-heading">Tools for turning<br /><span>ideas into interfaces.</span></h2><p className="skills-note">A growing toolkit shaped by hands-on projects and a strong interest in the details of digital products.</p></div>
            <div className="skill-cloud reveal">{skills.map((skill, index) => <span key={skill} className={index === 0 || index === 3 ? 'featured-skill' : ''}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}</div>
          </div>
        </section>

        <section className="resume section-pad" id="resume">
          <div className="section-label reveal"><span>04</span> Background</div>
          <div className="resume-layout reveal">
            <h2 className="section-heading">Starting with<br /><span>curiosity.</span></h2>
            <div className="resume-card"><div className="resume-year">EDU</div><div><h3>Information Technology</h3><p>De La Salle University–Dasmariñas</p><p className="muted">Specialization: Web Development</p></div><span className="resume-arrow">↗</span></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="section-label reveal"><span>05</span> Contact</div>
          <div className="contact-content reveal"><p className="eyebrow">Have a project in mind?</p><h2>Let's make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:rodj12daniel@gmail.com">rodj12daniel@gmail.com <Arrow /></a><div className="contact-links"><a href="https://www.facebook.com/rodj.rogacion.2025" target="_blank" rel="noreferrer">Facebook <Arrow external /></a><a href="#home">Back to top ↑</a></div></div>
        </section>
      </main>

      <footer><span>© Rodj Rogacion</span><span>Designed & built with intention.</span><span>Web developer / UI/UX designer</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
