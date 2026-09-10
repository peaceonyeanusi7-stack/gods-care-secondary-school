import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Star,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const phone = "09041104816";
const whatsapp = "2349041104816";

function App() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="top-contact">
            <span><Phone size={14} /> {phone}</span>
            <span><MapPin size={14} /> Achara Layout, Enugu</span>
          </div>
          <a
            className="top-whatsapp"
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} /> Enquire on WhatsApp
          </a>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img src="/school-logo.jpg" alt="God's Care Secondary School logo" />
            <div>
              <strong>GOD'S CARE</strong>
              <span>SECONDARY SCHOOL · ENUGU</span>
            </div>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {["Home", "About", "Academics", "Admissions", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a
              className="nav-cta"
              href={`https://wa.me/${whatsapp}?text=Hello%20God's%20Care%20Secondary%20School,%20I%20would%20like%20to%20make%20an%20admission%20enquiry.`}
              target="_blank"
              rel="noreferrer"
            >
              Admission Enquiry <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow">KNOWLEDGE IS LIGHT</span>
            <h1>Building confident students for a brighter future.</h1>
            <p>
              A modern secondary school experience built around learning,
              discipline, character and the confidence to pursue excellence.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#admissions">
                Explore Admissions <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#about">
                Discover Our School
              </a>
            </div>
            <div className="hero-note">
              <CheckCircle2 size={17} />
              <span>JSS1 &amp; JSS2 admission enquiries are welcome.</span>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><GraduationCap /><span><strong>Academic Growth</strong><small>Focused learning environment</small></span></div>
            <div><Users /><span><strong>Student Development</strong><small>Character and confidence</small></span></div>
            <div><Target /><span><strong>Excellence</strong><small>High standards and ambition</small></span></div>
            <div><School /><span><strong>School Community</strong><small>Supportive environment</small></span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container split">
            <div>
              <span className="section-kicker">ABOUT THE SCHOOL</span>
              <h2>A school where knowledge meets character.</h2>
              <p>
                God's Care Secondary School is presented here through a
                professional website concept designed to make it easier for
                parents and prospective students to understand the school's
                identity, programmes and admission process.
              </p>
              <p>
                The website can be expanded with the school's official history,
                leadership profile, facilities, student achievements, news and
                other information supplied by the school management.
              </p>
              <div className="feature-list">
                <div><CheckCircle2 /> Clear communication with parents</div>
                <div><CheckCircle2 /> Easy access to admission information</div>
                <div><CheckCircle2 /> Stronger online school presence</div>
              </div>
            </div>
            <div className="about-card">
              <img src="/school-banner.jpg" alt="God's Care Secondary School banner" />
              <div className="about-card-overlay">
                <span>GOD'S CARE SECONDARY SCHOOL</span>
                <strong>Knowledge is Light</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="academics" className="section light-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">ACADEMICS</span>
              <h2>A strong foundation for the next stage.</h2>
              <p>
                This section is ready for the school's confirmed curriculum,
                departments, subjects and academic programmes.
              </p>
            </div>

            <div className="cards">
              <article className="info-card">
                <div className="icon"><BookOpen /></div>
                <h3>Junior Secondary</h3>
                <p>
                  A supportive environment for students developing core
                  academic skills, confidence and good study habits.
                </p>
              </article>
              <article className="info-card">
                <div className="icon"><GraduationCap /></div>
                <h3>Senior Secondary</h3>
                <p>
                  A focused learning pathway that can be tailored to the
                  school's approved senior secondary offerings.
                </p>
              </article>
              <article className="info-card">
                <div className="icon"><Target /></div>
                <h3>Beyond the Classroom</h3>
                <p>
                  The final site can showcase clubs, competitions, leadership,
                  sports, practical learning and student activities.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="admissions" className="section admissions">
          <div className="container admissions-box">
            <div>
              <span className="section-kicker">ADMISSIONS</span>
              <h2>Start the conversation about your child's next step.</h2>
              <p>
                Parents can use the school's website to understand admission
                requirements, ask questions and get clear directions on what
                to do next.
              </p>
            </div>

            <div className="admission-steps">
              <div><span>01</span><div><strong>Make an enquiry</strong><p>Call or send a WhatsApp message.</p></div></div>
              <div><span>02</span><div><strong>Get admission details</strong><p>Provide the confirmed requirements and process.</p></div></div>
              <div><span>03</span><div><strong>Visit the school</strong><p>Meet the school team and complete the next steps.</p></div></div>
            </div>

            <a
              className="button primary"
              href={`https://wa.me/${whatsapp}?text=Hello,%20I%20would%20like%20to%20make%20an%20admission%20enquiry%20at%20God's%20Care%20Secondary%20School.`}
              target="_blank"
              rel="noreferrer"
            >
              Start an Admission Enquiry <MessageCircle size={18} />
            </a>
          </div>
        </section>

        <section className="section gallery">
          <div className="container split gallery-split">
            <div className="gallery-image">
              <img src="/school-banner.jpg" alt="School promotional banner" />
            </div>
            <div>
              <span className="section-kicker">ONLINE PRESENCE</span>
              <h2>Give parents the information they need, when they need it.</h2>
              <p>
                A dedicated school website can become the school's online
                front door: useful on a phone, easy to share and available to
                parents beyond the school gate.
              </p>
              <div className="mini-points">
                <div><Star /> School announcements</div>
                <div><Star /> Admission notices and forms</div>
                <div><Star /> Contact and location information</div>
                <div><Star /> Photos, events and achievements</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <span className="section-kicker">CONTACT</span>
              <h2>Let's make it easy to reach the school.</h2>
              <p>
                These contact details were taken from the school promotional
                banner and should be confirmed by management before launch.
              </p>
            </div>

            <div className="contact-card">
              <div><Phone /><span><small>Phone</small><strong>{phone}</strong></span></div>
              <div><MapPin /><span><small>Address</small><strong>6 Ugbo Street, off Ubaka Gate, Achara Layout, Enugu</strong></span></div>
              <a
                className="button primary full"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>GOD'S CARE SECONDARY SCHOOL</strong>
            <span>Knowledge is Light</span>
          </div>
          <span>© 2026 God's Care Secondary School. Website concept by Peace Onyeanusi.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
