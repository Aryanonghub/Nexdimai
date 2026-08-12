import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import UseCaseTabs from "@/components/UseCaseTabs";
import DashboardMock from "@/components/DashboardMock";
import Faq from "@/components/Faq";
import CampaignDashboard from "@/components/CampaignDashboard";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestCallCard from "@/components/TestCallCard";
import LeadLifecycleFlow from "@/components/lead-flow/LeadLifecycleFlow";

export const metadata: Metadata = {
  title: "Velmora — Voice agents for business | by Nexdim AI",
  description:
    "Velmora places real outbound calls, holds a natural two-way conversation, and reports back with a transcript, outcome, insights, and next steps.",
};

const CONTAINER = "mx-auto max-w-[1180px] px-8 max-[600px]:px-5";
const SECTION_HEAD = "max-w-[640px] mb-12 text-left";
const EYEBROW =
  "font-mono uppercase tracking-[0.14em] text-[0.72rem] font-semibold text-text-soft inline-flex items-center gap-2 mb-3.5 before:content-[''] before:w-4 before:h-[1.5px] before:bg-accent before:inline-block";
const CARD =
  "h-full bg-surface border border-border-subtle rounded-[20px] p-7 transition-[transform,border-color,box-shadow] duration-200 ease-in-out hover:-translate-y-[3px] hover:border-border hover:shadow-[0_20px_48px_-28px_rgba(46,107,79,0.28)]";
const CARD_ICON =
  "size-10 rounded-[10px] bg-surface-elevated text-accent-light flex items-center justify-center mb-4 [&>svg]:size-5";
const PANEL_DARK =
  "relative bg-surface text-text border border-border-subtle rounded-3xl py-16 px-14 max-[600px]:py-10 max-[600px]:px-6 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_140%_at_12%_-10%,var(--accent-tint),transparent_60%)] before:pointer-events-none [&>*]:relative";
const BTN =
  "inline-flex items-center justify-center gap-2 rounded-full px-6.5 py-3.25 font-sans text-[0.92rem] font-semibold cursor-pointer border border-transparent transition-[transform,background,border-color,color] duration-180 ease-in-out [&_svg]:size-4";
const BTN_LIGHT = "bg-text text-bg hover:bg-btn-primary-hover hover:-translate-y-px";
const TIMELINE_STEP_LINE =
  "before:content-[''] before:absolute before:top-[15px] before:left-[30px] before:w-[calc(100%-30px+24px)] before:h-px before:bg-border last:before:hidden max-[900px]:before:hidden";
const TIMELINE_NODE =
  "absolute top-0 left-0 size-[30px] rounded-full border border-border bg-surface flex items-center justify-center font-mono text-[0.7rem] text-accent-light z-1";
const RECORD_LABEL =
  "font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent-light block mt-4 mb-2";
const RECORD_LI =
  "text-[0.9rem] text-text-soft pl-4.5 relative mb-1.5 before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-1.5 before:rounded-full before:bg-accent";
const BUBBLE = "max-w-[82%] py-2.5 px-3.5 rounded-[14px] text-[0.82rem]";

export default function VelmoraPage() {
  return (
    <>
      <Header variant="velmora" />

      <main>
        <section className="relative pt-22 pb-14 max-[600px]:pt-14 max-[600px]:pb-10">
          <div className={`${CONTAINER} max-w-[720px] mx-auto text-center flex flex-col items-center`}>
            <p className={`${EYEBROW} justify-center`}>Voice agents for business</p>
            <h1 className="text-[clamp(2.3rem,4.4vw,3.6rem)]">
              Velmora places the call. And has the <em>conversation</em>.
            </h1>
            <TestCallCard />
            <p className="text-[1.08rem] max-w-[54ch]">
              Configure the model that reasons, the voice that speaks, and the goal of the
              call. Velmora dials real phone lines — landlines and mobiles — holds a natural
              two-way conversation, and comes back with the outcome.
            </p>
          </div>
        </section>

        <section id="how-we-work">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>How we work</p>
              <h2>From workflow to working agent.</h2>
            </Reveal>
            <div className="grid grid-cols-4 gap-6 max-[900px]:grid-cols-2 max-[900px]:gap-8 max-[600px]:grid-cols-1">
              <Reveal className={`relative pt-11 ${TIMELINE_STEP_LINE}`}>
                <span className={TIMELINE_NODE}>01</span>
                <h3 className="text-[1.05rem]">Discover</h3>
                <p className="text-[0.92rem] mb-0">We map the workflow the agent needs to handle, and what a good outcome looks like.</p>
              </Reveal>
              <Reveal className={`relative pt-11 ${TIMELINE_STEP_LINE}`}>
                <span className={TIMELINE_NODE}>02</span>
                <h3 className="text-[1.05rem]">Design</h3>
                <p className="text-[0.92rem] mb-0">We build the agent: the model, the voice, the guardrails, the goal.</p>
              </Reveal>
              <Reveal className={`relative pt-11 ${TIMELINE_STEP_LINE}`}>
                <span className={TIMELINE_NODE}>03</span>
                <h3 className="text-[1.05rem]">Deploy</h3>
                <p className="text-[0.92rem] mb-0">We connect it to your systems and put it to work — live calls, live data.</p>
              </Reveal>
              <Reveal className="relative pt-11">
                <span className={TIMELINE_NODE}>04</span>
                <h3 className="text-[1.05rem]">Refine</h3>
                <p className="text-[0.92rem] mb-0">We tune it against real outcomes, not assumptions.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="what-it-is">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>How an agent is built</p>
              <h2>Four parts, one conversation.</h2>
              <p>A Velmora agent is a small, specific configuration — not a black box.</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-7 gap-x-8 max-[600px]:grid-cols-1">
              <Reveal className="flex gap-4 items-start">
                <div className="shrink-0 size-11 rounded-xl bg-accent-tint text-accent-light flex items-center justify-center [&>svg]:size-5.5">
                  <svg aria-hidden="true">
                    <use href="#icon-agent" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-text-muted block mb-0.5">Reasoning</span>
                  <h4 className="text-[1.02rem] mb-1">The model</h4>
                  <p className="text-[0.88rem] mb-0">The language model that decides what to say and when the call is done.</p>
                </div>
              </Reveal>
              <Reveal className="flex gap-4 items-start">
                <div className="shrink-0 size-11 rounded-xl bg-accent-tint text-accent-light flex items-center justify-center [&>svg]:size-5.5">
                  <svg aria-hidden="true">
                    <use href="#icon-chat" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-text-muted block mb-0.5">Hearing</span>
                  <h4 className="text-[1.02rem] mb-1">Speech-to-text</h4>
                  <p className="text-[0.88rem] mb-0">What lets the agent understand the person on the other end in real time.</p>
                </div>
              </Reveal>
              <Reveal className="flex gap-4 items-start">
                <div className="shrink-0 size-11 rounded-xl bg-accent-tint text-accent-light flex items-center justify-center [&>svg]:size-5.5">
                  <svg aria-hidden="true">
                    <use href="#icon-mic" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-text-muted block mb-0.5">Voice</span>
                  <h4 className="text-[1.02rem] mb-1">Text-to-speech</h4>
                  <p className="text-[0.88rem] mb-0">The voice the agent speaks with on the call.</p>
                </div>
              </Reveal>
              <Reveal className="flex gap-4 items-start">
                <div className="shrink-0 size-11 rounded-xl bg-accent-tint text-accent-light flex items-center justify-center [&>svg]:size-5.5">
                  <svg aria-hidden="true">
                    <use href="#icon-target" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-text-muted block mb-0.5">Goal</span>
                  <h4 className="text-[1.02rem] mb-1">The outcome</h4>
                  <p className="text-[0.88rem] mb-0">What the call is actually trying to accomplish.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="use-cases">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Use cases</p>
              <h2>Built for the calls you&apos;re already making.</h2>
              <p>
                Point Velmora at a workflow and it runs the calls that workflow needs — not a
                generic script.
              </p>
            </Reveal>
            <Reveal>
              <UseCaseTabs />
            </Reveal>
          </div>
        </section>

        <section id="solutions">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Solutions</p>
              <h2>Agents built around a workflow, not a demo.</h2>
              <p>
                Every engagement starts with one job the agent needs to do well — then we
                connect it to the tools that job actually depends on.
              </p>
            </Reveal>
            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
              {[
                {
                  icon: "icon-chat",
                  title: "Support",
                  body: "Agents that answer, triage, and resolve — connected to your helpdesk and knowledge base.",
                },
                {
                  icon: "icon-phone",
                  title: "Sales",
                  body: "Outbound and inbound conversations that qualify leads and move them forward, logged straight to your CRM.",
                },
                {
                  icon: "icon-target",
                  title: "Operations",
                  body: "Agents that handle the repeatable coordination work — status checks, follow-ups, internal routing.",
                },
                {
                  icon: "icon-agent",
                  title: "Scheduling",
                  body: "Booking, rescheduling, and reminders handled end-to-end, synced to the calendars you already use.",
                },
                {
                  icon: "icon-list",
                  title: "Data entry",
                  body: "Agents that turn calls, forms, and messages into clean records in the systems that need them.",
                },
                {
                  icon: "icon-integrate",
                  title: "Integrations",
                  body: "CRMs, phone systems, spreadsheets, internal APIs, and messaging — wired in, not worked around.",
                },
              ].map((item) => (
                <Reveal key={item.title}>
                  <div className={CARD}>
                    <div className={CARD_ICON}>
                      <svg aria-hidden="true">
                        <use href={`#${item.icon}`} />
                      </svg>
                    </div>
                    <h3 className="text-[1.15rem]">{item.title}</h3>
                    <p className="mb-0 text-[0.95rem]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="run-modes">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Two ways to run it</p>
              <h2>From one test call to a full campaign.</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-upload" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">Bulk campaign</h3>
                  <p className="mb-0 text-[0.95rem]">
                    Hand Velmora a lead list and it dials the whole thing on its own, pacing
                    calls against your account balance.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={CARD}>
                  <div className={CARD_ICON}>
                    <svg aria-hidden="true">
                      <use href="#icon-phone" />
                    </svg>
                  </div>
                  <h3 className="text-[1.15rem]">One-off test call</h3>
                  <p className="mb-0 text-[0.95rem]">
                    Fire a single call to your own number from the dashboard to check an agent
                    before you launch it.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal style={{ marginTop: "24px" }}>
              <CampaignDashboard />
            </Reveal>
          </div>
        </section>

        <section id="how">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>How a call works</p>
              <h2>Dial, converse, resolve, report.</h2>
            </Reveal>
            <div className="flex flex-col max-w-[640px]">
              <Reveal className="group relative flex gap-5 pb-8">
                <div className="relative shrink-0 size-10 rounded-full bg-surface border border-border flex items-center justify-center text-accent-light z-1 [&>svg]:size-4.5 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-px after:h-8 after:bg-border group-last:after:hidden">
                  <svg aria-hidden="true">
                    <use href="#icon-phone" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.05rem] mb-1">Dial</h3>
                  <p className="text-[0.92rem] mb-0">Velmora places the call over a real phone line — landline or mobile, not a browser tab.</p>
                </div>
              </Reveal>
              <Reveal className="group relative flex gap-5 pb-8">
                <div className="relative shrink-0 size-10 rounded-full bg-surface border border-border flex items-center justify-center text-accent-light z-1 [&>svg]:size-4.5 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-px after:h-8 after:bg-border group-last:after:hidden">
                  <svg aria-hidden="true">
                    <use href="#icon-chat" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.05rem] mb-1">Converse</h3>
                  <p className="text-[0.92rem] mb-0">The agent listens, reasons, and speaks — a natural two-way conversation, not a script read aloud.</p>
                </div>
              </Reveal>
              <Reveal className="group relative flex gap-5 pb-8">
                <div className="relative shrink-0 size-10 rounded-full bg-surface border border-border flex items-center justify-center text-accent-light z-1 [&>svg]:size-4.5 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-px after:h-8 after:bg-border group-last:after:hidden">
                  <svg aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.05rem] mb-1">Resolve</h3>
                  <p className="text-[0.92rem] mb-0">The call ends with a clear outcome, not just a hang-up.</p>
                </div>
              </Reveal>
              <Reveal className="group relative flex gap-5 pb-8 last:pb-0">
                <div className="relative shrink-0 size-10 rounded-full bg-surface border border-border flex items-center justify-center text-accent-light z-1 [&>svg]:size-4.5 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-px after:h-8 after:bg-border group-last:after:hidden">
                  <svg aria-hidden="true">
                    <use href="#icon-chart" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.05rem] mb-1">Report</h3>
                  <p className="text-[0.92rem] mb-0">Transcript, insights, and next steps land in your dashboard automatically.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="record">
          <div className={CONTAINER}>
            <Reveal className="grid grid-cols-[0.95fr_1.05fr] gap-14 items-start bg-surface border border-border-subtle rounded-3xl p-14 max-[900px]:grid-cols-1 max-[900px]:p-10 max-[600px]:p-7">
              <div>
                <p className={EYEBROW}>The call record</p>
                <h2>Every call comes back readable.</h2>
                <p>
                  No raw recordings to sit through. Every completed call resolves to an outcome,
                  a set of insights, and concrete next steps — plus the full transcript if you
                  want to check the source.
                </p>
                <p>
                  The analytics view rolls this up across every call: spend, outcomes, and agent
                  performance, tracked in one place.
                </p>
              </div>
              <div className="bg-bg-soft border border-border-subtle rounded-[16px] p-6.5">
                <div className="flex items-center justify-between mb-4.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
                  <span>Call completed</span>
                  <span>02:47</span>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-success-tint text-success font-mono text-[0.7rem] uppercase tracking-[0.08em] py-1.5 px-3 rounded-full mb-4.5">
                  <svg width="12" height="12" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>{" "}
                  Appointment booked
                </span>
                <span className={`${RECORD_LABEL} mt-0`}>Insights</span>
                <ul>
                  <li className={RECORD_LI}>Caller prefers afternoon slots</li>
                  <li className={RECORD_LI}>No pricing objection raised</li>
                  <li className={RECORD_LI}>Requested a text, not a call, for reminders</li>
                </ul>
                <span className={RECORD_LABEL}>Next steps</span>
                <ul>
                  <li className={RECORD_LI}>Send confirmation text</li>
                  <li className={RECORD_LI}>Add to Thursday 2pm schedule</li>
                </ul>
                <span className={RECORD_LABEL}>Transcript</span>
                <div className="flex flex-col gap-2.5 mt-1">
                  <p className={`${BUBBLE} bg-accent text-white rounded-bl-[4px] self-start`}>
                    You&apos;re set for Thursday at 2pm — I&apos;ll text a confirmation.
                  </p>
                  <p className={`${BUBBLE} bg-surface-elevated border border-border-subtle text-text rounded-br-[4px] self-end`}>
                    No, that&apos;s perfect, thank you.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="workflow">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Turn conversations into actions</p>
              <h2>An agent is the start of the workflow, not the end of it.</h2>
              <p>An outcome doesn&apos;t just get recorded — it moves the next step forward.</p>
            </Reveal>
            <Reveal>
              <LeadLifecycleFlow />
            </Reveal>
          </div>
        </section>

        <section id="analytics">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Analytics</p>
              <h2>One view across every call.</h2>
              <p>
                Spend, outcomes, and agent performance, tracked together instead of scattered
                across call logs.
              </p>
            </Reveal>
            <Reveal>
              <DashboardMock />
            </Reveal>
          </div>
        </section>

        <section id="capabilities">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Capabilities</p>
              <h2>What Velmora handles on every call.</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4.5 max-[600px]:grid-cols-1">
              {[
                { icon: "icon-phone", text: "Outbound calling over real phone lines — landlines and mobiles." },
                { icon: "icon-upload", text: "Bulk campaigns with pacing based on your account balance." },
                { icon: "icon-mic", text: "One-off test calls straight from the dashboard." },
                { icon: "icon-list", text: "Full call transcripts for every conversation." },
                { icon: "icon-target", text: "Clear outcome classification per call." },
                { icon: "icon-check", text: "Extracted insights and concrete next steps." },
                { icon: "icon-chart", text: "Analytics tracking spend, outcomes, and agent performance." },
              ].map((cap) => (
                <Reveal
                  key={cap.text}
                  className="flex items-start gap-3.5 p-4.5 bg-surface border border-border-subtle rounded-[14px]"
                >
                  <div className="size-10 rounded-[10px] bg-surface-elevated text-accent-light flex items-center justify-center shrink-0 [&>svg]:size-5">
                    <svg aria-hidden="true">
                      <use href={`#${cap.icon}`} />
                    </svg>
                  </div>
                  <p className="mb-0 text-[0.94rem] text-text">{cap.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <IntegrationsSection />

        <section id="faq">
          <div className={CONTAINER}>
            <Reveal className={SECTION_HEAD}>
              <p className={EYEBROW}>Questions</p>
              <h2>Before you ask.</h2>
            </Reveal>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        <section id="contact">
          <div className={CONTAINER}>
            <Reveal className={`${PANEL_DARK} text-center`}>
              <p className={EYEBROW} style={{ justifyContent: "center" }}>
                Get in touch
              </p>
              <h2>See Velmora on a real call.</h2>
              <p style={{ maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
                We&apos;ll set up an agent for your workflow and put it on a live test call — no
                fake numbers, no scripted demo.
              </p>
              <a href="mailto:support@nexdim.com" className={`${BTN} ${BTN_LIGHT}`}>
                Request a demo
              </a>
              <span className="block mt-3.5 font-mono text-[0.9rem] text-text-soft">
                support@nexdim.com
              </span>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer variant="velmora" />
    </>
  );
}
