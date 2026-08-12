type FaqEntry = { question: string; answer: string };

const FAQS: FaqEntry[] = [
  {
    question: "Does Velmora work with mobile numbers, or just landlines?",
    answer:
      "Both. Velmora places calls over real phone lines — landline or mobile — the same way a person would dial out.",
  },
  {
    question: "Can I try an agent before it goes live?",
    answer:
      "Yes. Fire a one-off test call to your own number from the dashboard and hear exactly what a caller would.",
  },
  {
    question: "What happens if the agent can't handle something?",
    answer:
      "Every agent is scoped to one goal with guardrails around it. If a call falls outside that scope, it's flagged as a next step for a person instead of the agent guessing.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Calls are billed against your account balance, and a bulk campaign paces itself to that balance automatically. Ask us for current rates when you request a demo.",
  },
  {
    question: "Who can see call transcripts and outcomes?",
    answer:
      "Transcripts, outcomes, and insights are stored with your account and visible to your team in the dashboard — not just to us.",
  },
  {
    question: "What are AI voice assistants?",
    answer:
      "AI voice assistants are software that listen to spoken language and respond to it, usually to help someone complete a task — check a balance, set a reminder, answer a question. Most people know them from phones and smart speakers. Velmora is built for a different job: not answering what a person asks, but placing outbound business calls and carrying a full conversation toward a specific goal.",
  },
  {
    question: "What is an AI voice agent?",
    answer:
      "An agent goes further than an assistant — it's given a goal and works toward it across an entire conversation, rather than responding to one request at a time. A Velmora agent is configured with a model, a voice, and a goal, then runs a real phone call from open to close and reports back exactly what happened.",
  },
  {
    question: "What is voice AI used for?",
    answer:
      "Businesses use it for calls that are repetitive but still need a real conversation — appointment reminders, lead follow-up, renewal calls, quick check-ins. Velmora is built specifically for outbound, goal-driven calls like these: it dials, has the conversation, and comes back with a structured result instead of a call someone on your team had to sit through.",
  },
  {
    question: "What does an AI agent do?",
    answer:
      "It takes a goal and works toward it, rather than just reacting to one prompt. A Velmora agent decides what to say next based on how the conversation is actually going, stays inside the guardrails it's been given, and ends the call with a clear outcome — not just a recording to sort through later.",
  },
  {
    question: "Are AI voice calls legal?",
    answer:
      "Yes, when they're run the way outbound calling always has to be — with proper consent and clear disclosure. Velmora doesn't get you around consent or do-not-call rules; you're responsible for calling the right people the right way, same as a human calling team would be. Bring us your specific regional questions and we'll talk through them.",
  },
  {
    question: "Is voice AI free or paid?",
    answer:
      "Running real phone calls at scale has a real cost — the phone line, the model, the voice — so it's a paid service. Velmora bills against your account balance, and a bulk campaign paces itself to that balance automatically. Ask us for current rates when you request a demo.",
  },
  {
    question: "What are the 5 types of AI agents?",
    answer:
      "In general AI terms, agents are usually grouped into simple reflex, model-based reflex, goal-based, utility-based, and learning agents — categories that describe how much reasoning and adaptation an agent does. A Velmora agent is goal-based: it's given a specific outcome to reach on a call and adapts what it says to get there, rather than following a fixed script.",
  },
  {
    question: "Is it safe to use AI voice assistants?",
    answer:
      "Safety comes down to how the data is handled. Every Velmora call's transcript, outcome, and insights are stored with your account and visible to your team in the dashboard, not used for anything beyond that. If you need detail for your own security review, we're glad to walk through our specific practices on a call.",
  },
  {
    question: "What are the advantages of using AI agents?",
    answer:
      "The biggest one is consistency at scale — an agent doesn't get tired, skip a step, or forget to log what happened. With Velmora specifically, that means your team isn't stuck making the same repetitive calls one at a time; they spend their time on the calls that actually need a person, while Velmora handles the volume and reports back.",
  },
  {
    question: "What is the best AI voice assistant?",
    answer:
      "There isn't a single best one — it depends on the job. If what you need is outbound business calls placed over a real phone line with a structured result afterward, that's exactly what Velmora is built for. For other needs — a general-purpose assistant, a consumer smart speaker — a different tool will be a better fit.",
  },
  {
    question: "Can I use voice AI for free?",
    answer:
      "Velmora doesn't have a free tier — every call is a real outbound call over a real phone line, which has a real cost. What you can do at no risk is test an agent first: fire a one-off test call to your own number from the dashboard before committing to a full campaign.",
  },
  {
    question: "Are AI assistants always listening?",
    answer:
      "Not with Velmora. An agent isn't listening in the background — it's only active for the call it placed, and only processes what's said during that specific call.",
  },
];

export default function Faq() {
  return (
    <div className="border-t border-border-subtle">
      {FAQS.map((faq) => (
        <details className="group border-b border-border-subtle" key={faq.question}>
          <summary className="flex list-none cursor-pointer items-center justify-between gap-4 px-1 py-5.5 font-serif text-[1.05rem] font-medium text-text [&::-webkit-details-marker]:hidden">
            {faq.question}
            <svg
              className="h-5 w-5 shrink-0 text-accent-light transition-transform duration-200 ease-in-out group-open:rotate-45"
              aria-hidden="true"
            >
              <use href="#icon-plus" />
            </svg>
          </summary>
          <p className="mb-0 max-w-[70ch] pr-7.5 pb-5.5 pl-1 text-[0.95rem]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
