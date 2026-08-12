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
import WorkflowBuilder from "@/components/WorkflowBuilder";
import TextHoverEffect from "@/components/TextHoverEffect";

export const metadata: Metadata = {
  title: "Velmora — Voice agents for business | by Nexdim",
  description:
    "Velmora places real outbound calls, holds a natural two-way conversation, and reports back with a transcript, outcome, insights, and next steps.",
};

export default function VelmoraPage() {
  return (
    <>
      <Header variant="velmora" />

      <main>
        <section className="hero">
          <div className="container hero-center-inner">
            <p className="eyebrow">Voice agents for business</p>
            <h1>
              Velmora places the call. And has the <em>conversation</em>.
            </h1>
            <TestCallCard />
            <p className="lede">
              Configure the model that reasons, the voice that speaks, and the goal of the
              call. Velmora dials real phone lines — landlines and mobiles — holds a natural
              two-way conversation, and comes back with the outcome.
            </p>
          </div>
        </section>

        <section id="how-we-work">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">How we work</p>
              <h2>From workflow to working agent.</h2>
            </Reveal>
            <div className="pipeline">
              <Reveal className="pipeline-step">
                <span className="pipeline-num">01</span>
                <h3>Discover</h3>
                <p>We map the workflow the agent needs to handle, and what a good outcome looks like.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">02</span>
                <h3>Design</h3>
                <p>We build the agent: the model, the voice, the guardrails, the goal.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">03</span>
                <h3>Deploy</h3>
                <p>We connect it to your systems and put it to work — live calls, live data.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">04</span>
                <h3>Refine</h3>
                <p>We tune it against real outcomes, not assumptions.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="what-it-is">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">How an agent is built</p>
              <h2>Four parts, one conversation.</h2>
              <p>A Velmora agent is a small, specific configuration — not a black box.</p>
            </Reveal>
            <div className="spec-grid">
              <Reveal className="spec-item">
                <span className="label">Reasoning</span>
                <h4>The model</h4>
                <p>The language model that decides what to say and when the call is done.</p>
              </Reveal>
              <Reveal className="spec-item">
                <span className="label">Hearing</span>
                <h4>Speech-to-text</h4>
                <p>What lets the agent understand the person on the other end in real time.</p>
              </Reveal>
              <Reveal className="spec-item">
                <span className="label">Voice</span>
                <h4>Text-to-speech</h4>
                <p>The voice the agent speaks with on the call.</p>
              </Reveal>
              <Reveal className="spec-item">
                <span className="label">Goal</span>
                <h4>The outcome</h4>
                <p>What the call is actually trying to accomplish.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="use-cases">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Use cases</p>
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
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Solutions</p>
              <h2>Agents built around a workflow, not a demo.</h2>
              <p>
                Every engagement starts with one job the agent needs to do well — then we
                connect it to the tools that job actually depends on.
              </p>
            </Reveal>
            <div className="usecases-grid">
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
                  <div className="card">
                    <div className="card-icon">
                      <svg aria-hidden="true">
                        <use href={`#${item.icon}`} />
                      </svg>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="run-modes">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Two ways to run it</p>
              <h2>From one test call to a full campaign.</h2>
            </Reveal>
            <div className="split-two">
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-upload" />
                    </svg>
                  </div>
                  <h3>Bulk campaign</h3>
                  <p>
                    Hand Velmora a lead list and it dials the whole thing on its own, pacing
                    calls against your account balance.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="card">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href="#icon-phone" />
                    </svg>
                  </div>
                  <h3>One-off test call</h3>
                  <p>
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
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">How a call works</p>
              <h2>Dial, converse, resolve, report.</h2>
            </Reveal>
            <div className="pipeline">
              <Reveal className="pipeline-step">
                <span className="pipeline-num">01</span>
                <h3>Dial</h3>
                <p>Velmora places the call over a real phone line — landline or mobile, not a browser tab.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">02</span>
                <h3>Converse</h3>
                <p>The agent listens, reasons, and speaks — a natural two-way conversation, not a script read aloud.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">03</span>
                <h3>Resolve</h3>
                <p>The call ends with a clear outcome, not just a hang-up.</p>
              </Reveal>
              <Reveal className="pipeline-step">
                <span className="pipeline-num">04</span>
                <h3>Report</h3>
                <p>Transcript, insights, and next steps land in your dashboard automatically.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="record">
          <div className="container">
            <Reveal className="record-band">
              <div>
                <p className="eyebrow">The call record</p>
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
              <div className="call-record">
                <div className="record-head">
                  <span>Call completed</span>
                  <span>02:47</span>
                </div>
                <span className="outcome">
                  <svg width="12" height="12" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>{" "}
                  Appointment booked
                </span>
                <span className="record-label">Insights</span>
                <ul>
                  <li>Caller prefers afternoon slots</li>
                  <li>No pricing objection raised</li>
                  <li>Requested a text, not a call, for reminders</li>
                </ul>
                <span className="record-label">Next steps</span>
                <ul>
                  <li>Send confirmation text</li>
                  <li>Add to Thursday 2pm schedule</li>
                </ul>
                <span className="record-label">Transcript</span>
                <div className="transcript">
                  <p className="bubble bubble-agent">
                    You&apos;re set for Thursday at 2pm — I&apos;ll text a confirmation.
                  </p>
                  <p className="bubble bubble-callee">No, that&apos;s perfect, thank you.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="workflow">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Turn conversations into actions</p>
              <h2>An agent is the start of the workflow, not the end of it.</h2>
              <p>An outcome doesn&apos;t just get recorded — it moves the next step forward.</p>
            </Reveal>
            <Reveal>
              <WorkflowBuilder />
            </Reveal>
          </div>
        </section>

        <section id="analytics">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Analytics</p>
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
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Capabilities</p>
              <h2>What Velmora handles on every call.</h2>
            </Reveal>
            <div className="capabilities-grid">
              {[
                { icon: "icon-phone", text: "Outbound calling over real phone lines — landlines and mobiles." },
                { icon: "icon-upload", text: "Bulk campaigns with pacing based on your account balance." },
                { icon: "icon-mic", text: "One-off test calls straight from the dashboard." },
                { icon: "icon-list", text: "Full call transcripts for every conversation." },
                { icon: "icon-target", text: "Clear outcome classification per call." },
                { icon: "icon-check", text: "Extracted insights and concrete next steps." },
                { icon: "icon-chart", text: "Analytics tracking spend, outcomes, and agent performance." },
              ].map((cap) => (
                <Reveal key={cap.text} className="capability">
                  <div className="card-icon">
                    <svg aria-hidden="true">
                      <use href={`#${cap.icon}`} />
                    </svg>
                  </div>
                  <p>{cap.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <IntegrationsSection />

        <section id="faq">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Questions</p>
              <h2>Before you ask.</h2>
            </Reveal>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <Reveal className="panel-dark contact-panel">
              <p className="eyebrow" style={{ justifyContent: "center" }}>
                Get in touch
              </p>
              <h2>See Velmora on a real call.</h2>
              <p style={{ maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
                We&apos;ll set up an agent for your workflow and put it on a live test call — no
                fake numbers, no scripted demo.
              </p>
              <a href="mailto:hello@nexdim.ai" className="btn btn-light">
                Request a demo
              </a>
              <span className="contact-email">hello@nexdim.ai</span>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer variant="velmora" />

      <div className="text-hover-wrap">
        <TextHoverEffect text="VELMORA" />
      </div>
    </>
  );
}
