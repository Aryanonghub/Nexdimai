import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Header variant="home" />

      <main>
        <section className="hero">
          <div className="container hero-solo">
            <p className="eyebrow">Nexdim / Applied AI</p>
            <h1>
              Nexdim builds applied AI agents for the work businesses <em>actually do</em>.
            </h1>
            <p className="lede">
              We build custom software, integrate AI into the systems you already run, and
              design agents around real workflows — plus ship products of our own, starting
              with Velmora, a voice agent that calls, talks, and reports back.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Schedule a call
              </a>
              <Link href="/velmora" className="btn btn-secondary">
                Explore Velmora{" "}
                <svg aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section id="what-we-do">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">How we work</p>
              <h2>Custom software, AI integration, agents, and products — built around how you actually operate.</h2>
            </Reveal>
            <div className="offerings-grid">
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-code" />
                    </svg>
                  </div>
                  <h3>Custom software</h3>
                  <p>
                    Bespoke software and internal tools for the workflows off-the-shelf products
                    don&apos;t cover.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-plug" />
                    </svg>
                  </div>
                  <h3>AI integration</h3>
                  <p>
                    AI layered into the CRMs, phone systems, and spreadsheets you already run —
                    no rip-and-replace.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-agent" />
                    </svg>
                  </div>
                  <h3>AI agent solutions</h3>
                  <p>
                    Custom agents designed around one workflow at a time — support, sales,
                    scheduling, data entry.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-product" />
                    </svg>
                  </div>
                  <h3>Products</h3>
                  <p>
                    Software Nexdim ships and owns outright. The flagship is Velmora, our
                    voice-agent calling platform.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="velmora">
          <div className="container">
            <Reveal className="velmora-band">
              <div>
                <p className="eyebrow">Flagship product</p>
                <h2>Velmora — voice agents that call, talk, and report back.</h2>
                <p>
                  Configure the model, the voice, and the goal. Velmora places real outbound
                  calls, holds a natural two-way conversation, and comes back with a transcript,
                  an outcome, and next steps — not a recording to sift through.
                </p>
                <Link href="/velmora" className="btn btn-secondary">
                  See how it works{" "}
                  <svg aria-hidden="true">
                    <use href="#icon-arrow" />
                  </svg>
                </Link>
              </div>
              <div className="mini-result">
                <span className="outcome">
                  <svg width="12" height="12" aria-hidden="true">
                    <use href="#icon-target" />
                  </svg>{" "}
                  Appointment booked
                </span>
                <ul>
                  <li>Caller prefers afternoon slots</li>
                  <li>No pricing objection raised</li>
                  <li>Next step: send confirmation text</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="trust">
          <div className="container">
            <Reveal className="panel-dark">
              <p className="eyebrow">Why teams choose Nexdim</p>
              <h2>Built to be checked, not just trusted.</h2>
              <p style={{ maxWidth: "56ch" }}>
                Every call comes back with a real transcript, not a summary you have to take on
                faith. Every agent is scoped to one job and reviewed by a person before it goes
                live. If something doesn&apos;t work, you&apos;ll see it in the record — not just
                hear about it from us.
              </p>
              <div className="spec-strip">
                <span>Transparent outcomes</span>
                <span>Real transcripts</span>
                <span>No black box</span>
                <span>Human-reviewed launches</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <Reveal className="panel-dark">
              <p className="eyebrow">About</p>
              <h2>A small studio, applied AI focus.</h2>
              <p style={{ maxWidth: "56ch" }}>
                Nexdim is built by a small team that designs and ships agents end-to-end —
                reasoning, voice, integration, and the plumbing in between. We&apos;d rather
                build one agent that actually does the job than a platform full of features
                nobody uses. Velmora is the clearest expression of that: a single product, built
                well, doing one thing — voice — properly.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <Reveal className="panel-dark">
              <p className="eyebrow">Get in touch</p>
              <h2>Ready to put an agent to work?</h2>
              <p style={{ maxWidth: "48ch" }}>
                Tell us the workflow. We&apos;ll tell you if an agent is the right fit — and show
                you Velmora if voice is part of it.
              </p>
              <a href="mailto:hello@nexdim.ai" className="btn btn-light">
                Request a demo
              </a>
              <span className="contact-email">hello@nexdim.ai</span>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer variant="home" />
    </>
  );
}
