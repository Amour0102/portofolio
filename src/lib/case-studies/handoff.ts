// ─────────────────────────────────────────────────────────────────────────────
// Handoff case study - content, mirroring the Paper source of truth
// ("Designing the handoff between an AI coding agent and a human").
// Visual sections carry no captions.
// ─────────────────────────────────────────────────────────────────────────────
import { MetaRow, VisualSection } from "./types";

export const handoff = {
  title: "Designing the handoff between an AI coding agent and a human",

  summary:
    "A researched concept for the handoff between an AI coding agent and a human, making agent state inspectable so people know what happened and where to continue.",

  intro: [
    "Handoff explores what happens between an AI coding agent finishing a task and a human deciding what happens next. The problem wasn't that agents couldn't produce code. It was that when work stopped, failed, or degraded, the human often had to reconstruct what had happened from a wall of messages.",
    "I designed a concept around making agent state inspectable: what happened, why the agent stopped, what it was holding, what had already been tried, and exactly where the human could continue. I researched the concept with developers who actively use AI coding agents, and one finding changed the product itself: the hardest handoff wasn't always a failure, it was knowing when the agent should stop before quality degraded.",
    "The result was a tested concept with eight task states, five stop types, and a new 'Degrading' state shaped directly by research.",
  ],

  meta: [
    { label: "Industry", value: "AI, Developer Tools" },
    { label: "Project Stage", value: "Concept" },
    { label: "Role", value: "Designer, Researcher, Product Direction" },
  ] as MetaRow[],

  visuals: [
    { kind: "web", image: { src: "/images/case-studies/handoff/imagea.jpg", alt: "Handoff - the agent's task state made inspectable" }, ratio: "3326 / 2160", caption: "Correct the agent's understanding instead of re-explaining it in another prompt." },
    { kind: "web", image: { src: "/images/case-studies/handoff/imageb.jpg", alt: "Handoff - the activity log of what the agent tried" }, ratio: "3326 / 2160", caption: "The whole task on one screen - held instructions become editable chips you fix in place." },
    { kind: "web", image: { src: "/images/case-studies/handoff/imagec.jpg", alt: "Handoff - where the agent stopped and the human can continue" }, ratio: "3326 / 2160", caption: "One click from the stop card: three attempts, each result, and the agent's own hypothesis." },
    { kind: "web", image: { src: "/images/case-studies/handoff/imaged.jpg", alt: "Handoff - a stopped task ready to hand off" }, ratio: "3326 / 2160", caption: "The causality trail - 'Copy log' exports it as plain text, a developer's screenshot made native." },
    { kind: "web", image: { src: "/images/case-studies/handoff/imagee.jpg", alt: "Handoff - the Degrading state shaped by research" }, ratio: "3326 / 2160", caption: "The pause doesn't ask for trust; it shows the evidence that triggered it." },
    { kind: "web", image: { src: "/images/case-studies/handoff/imagef.jpg", alt: "Handoff - task states and stop types" }, ratio: "3326 / 2160", caption: "The audit trail outlives the task - 'What did I allow?', answered after ship." },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/voit" },
};
