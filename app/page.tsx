import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StackedFeatureScroll from "@/components/StackedFeatureScroll";
import AnchorLink from "@/components/AnchorLink";

const CONTAINER = "mx-auto max-w-[1180px] px-8 max-[600px]:px-5";
const BTN =
  "inline-flex items-center justify-center gap-2 rounded-full px-6.5 py-3.25 font-sans text-[0.92rem] font-semibold cursor-pointer border border-transparent transition-[transform,background,border-color,color] duration-180 ease-in-out [&_svg]:size-4";
const BTN_PRIMARY = "bg-text text-bg hover:bg-btn-primary-hover hover:-translate-y-px";
const BTN_SECONDARY =
  "bg-transparent text-text border-border-subtle hover:border-accent hover:text-accent-light hover:-translate-y-px";
const BTN_LIGHT = "bg-text text-bg hover:bg-btn-primary-hover hover:-translate-y-px";
const EYEBROW =
  "font-mono uppercase tracking-[0.14em] text-[0.72rem] font-semibold text-text-soft inline-flex items-center gap-2 mb-3.5 before:content-[''] before:w-4 before:h-[1.5px] before:bg-accent before:inline-block";
const CARD =
  "h-full bg-surface border border-border-subtle rounded-[20px] p-7 transition-[transform,border-color,box-shadow] duration-200 ease-in-out hover:-translate-y-[3px] hover:border-border hover:shadow-[0_20px_48px_-28px_rgba(46,107,79,0.28)]";
const CARD_ICON =
  "size-10 rounded-[10px] bg-surface-elevated text-accent-light flex items-center justify-center mb-4 [&>svg]:size-5";
const PANEL_DARK =
  "relative bg-surface text-text border border-border-subtle rounded-3xl py-16 px-14 max-[600px]:py-10 max-[600px]:px-6 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_140%_at_12%_-10%,var(--accent-tint),transparent_60%)] before:pointer-events-none [&>*]:relative";

export default function HomePage() {
  return (
    <>
      <Header variant="home" />

      <main>
        <section className="relative pt-22 pb-14 max-[600px]:pt-14 max-[600px]:pb-10">
          <div className={`${CONTAINER} max-w-[720px]`}>
            <p className={EYEBROW}>Nexdim AI</p>
            <h1 className="text-[clamp(2.3rem,4.4vw,3.6rem)]">
              We build custom AI solutions for your <em>specific</em> needs.
            </h1>
            <p className="text-[1.08rem] max-w-[52ch]">
              We build custom software, integrate AI into the systems you already run, and
              design agents around real workflows — plus ship products of our own, starting
              with Velmora, a voice agent that calls, talks, and reports back.
            </p>
            <div className="flex gap-4 mt-7.5 flex-wrap">
              <AnchorLink href="#contact" className={`${BTN} ${BTN_PRIMARY}`}>
                Schedule a call
              </AnchorLink>
              <Link href="/velmora" className={`${BTN} ${BTN_SECONDARY}`}>
                Explore Velmora{" "}
                <svg aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section id="what-we-do">
          <div className={CONTAINER}>
            <Reveal className="max-w-[640px] mb-12 text-left">
              <p className={EYEBROW}>How we work</p>
              <h2>Custom software, AI integration, agents, and products — built around how you actually operate.</h2>
            </Reveal>
            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-code" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">Custom software</h3>
                  <p className="mb-0 text-[0.95rem]">
                    Bespoke software and internal tools for the workflows off-the-shelf products
                    don&apos;t cover.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-plug" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">AI integration</h3>
                  <p className="mb-0 text-[0.95rem]">
                    AI layered into the CRMs, phone systems, and spreadsheets you already run —
                    no rip-and-replace.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-agent" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">AI agent solutions</h3>
                  <p className="mb-0 text-[0.95rem]">
                    Custom agents designed around one workflow at a time — support, sales,
                    scheduling, data entry.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-product" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">Products</h3>
                  <p className="mb-0 text-[0.95rem]">
                    Software Nexdim AI ships and owns outright. The flagship is Velmora, our
                    voice-agent calling platform.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <StackedFeatureScroll>
          <div id="velmora" className={`${CONTAINER} w-full`}>
            <div className="grid grid-cols-[1.1fr_0.9fr] gap-14 items-center bg-surface border border-border-subtle rounded-3xl p-14 max-[900px]:grid-cols-1 max-[900px]:p-10 max-[600px]:p-7">
              <div>
                <p className={EYEBROW}>Flagship product</p>
                <h2>Velmora — voice agents that call, talk, and report back.</h2>
                <p>
                  Configure the model, the voice, and the goal. Velmora places real outbound
                  calls, holds a natural two-way conversation, and comes back with a transcript,
                  an outcome, and next steps — not a recording to sift through.
                </p>
                <Link href="/velmora" className={`${BTN} ${BTN_SECONDARY}`}>
                  See how it works{" "}
                  <svg aria-hidden="true">
                    <use href="#icon-arrow" />
                  </svg>
                </Link>
              </div>
              <div className="bg-bg-soft border border-border-subtle rounded-[14px] p-5">
                <span className="inline-flex items-center gap-1.5 bg-success-tint text-success font-mono text-[0.7rem] uppercase tracking-[0.08em] py-1.5 px-3 rounded-full mb-3.5">
                  <svg width="12" height="12" aria-hidden="true">
                    <use href="#icon-target" />
                  </svg>{" "}
                  Appointment booked
                </span>
                <ul>
                  <li className="text-[0.88rem] text-text-soft pl-4.5 relative mb-1.5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-1.5 before:rounded-full before:bg-accent">
                    Caller prefers afternoon slots
                  </li>
                  <li className="text-[0.88rem] text-text-soft pl-4.5 relative mb-1.5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-1.5 before:rounded-full before:bg-accent">
                    No pricing objection raised
                  </li>
                  <li className="text-[0.88rem] text-text-soft pl-4.5 relative mb-1.5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-1.5 before:rounded-full before:bg-accent">
                    Next step: send confirmation text
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="trust" className={`${CONTAINER} w-full`}>
            <div className={PANEL_DARK}>
              <p className={EYEBROW}>Why teams choose Nexdim AI</p>
              <h2>Built to be checked, not just trusted.</h2>
              <p style={{ maxWidth: "56ch" }}>
                Every call comes back with a real transcript, not a summary you have to take on
                faith. Every agent is scoped to one job and reviewed by a person before it goes
                live. If something doesn&apos;t work, you&apos;ll see it in the record — not just
                hear about it from us.
              </p>
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.1em] flex flex-wrap gap-y-3 gap-x-7 text-text-muted border-t border-border-subtle pt-6 mt-8">
                <span>Transparent outcomes</span>
                <span>Real transcripts</span>
                <span>No black box</span>
                <span>Human-reviewed launches</span>
              </div>
            </div>
          </div>

          <div id="about" className={`${CONTAINER} w-full`}>
            <div className={PANEL_DARK}>
              <p className={EYEBROW}>About</p>
              <h2>A small studio, applied AI focus.</h2>
              <p style={{ maxWidth: "56ch" }}>
                Nexdim AI is built by a small team that designs and ships agents end-to-end —
                reasoning, voice, integration, and the plumbing in between. We&apos;d rather
                build one agent that actually does the job than a platform full of features
                nobody uses. Velmora is the clearest expression of that: a single product, built
                well, doing one thing — voice — properly.
              </p>
            </div>
          </div>

          <div id="contact" className={`${CONTAINER} w-full`}>
            <div className={PANEL_DARK}>
              <p className={EYEBROW}>Get in touch</p>
              <h2>Ready to put an agent to work?</h2>
              <p style={{ maxWidth: "48ch" }}>
                Tell us the workflow. We&apos;ll tell you if an agent is the right fit — and show
                you Velmora if voice is part of it.
              </p>
              <a href="mailto:support@nexdim.com" className={`${BTN} ${BTN_LIGHT}`}>
                Contact us
              </a>
              <span className="block mt-3.5 font-mono text-[0.9rem] text-text-soft">
                support@nexdim.com
              </span>
            </div>
          </div>
        </StackedFeatureScroll>
      </main>

      <Footer variant="home" />
    </>
  );
}
