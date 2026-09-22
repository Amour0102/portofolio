# Cyusa Amour: Portfolio

**Product Designer** based in Kigali, Rwanda. Working worldwide.
**Live site:** https://cyusacandesign.com

**Links**
- X: https://x.com/cyusa_drizy
- LinkedIn: https://www.linkedin.com/in/cyusa-bahizi-amour-175a9a225/
- Email: cyusaamour@gmail.com

**Site positioning (meta description):**
Product designer building transportation infrastructure and language preservation tools. Based in Kigali.

---

## About

I'm a product designer working across strategy, systems, and interface design. I like projects where the answer isn't obvious yet: products with real constraints, complicated workflows, ambitious ideas, or a lot of moving pieces.

I care about how a product works as much as how it looks, and I like getting close enough to the problem to understand what actually needs to be designed.

Based in Kigali. Working worldwide. Find me on X or LinkedIn, or email me.

---

## Case Studies

There are five case studies, each with its own page under `/work/`.

---

### 1. AC Mobility
**Redesigning the infrastructure behind Rwanda's public transport network.**
URL: https://cyusacandesign.com/work/ac-mobility

**Summary:** Replacing a $12,000/month vendor platform with in-house ticketing infrastructure for Rwanda's upcountry bus network, across two product generations.

**Overview (full):**

AC Mobility runs ticketing for Rwanda's upcountry bus network, and was licensing the whole operation from an external vendor for roughly $12,000 a month. Feature requests sat in a shared queue with no committed timeline, and reporting gaps left management working from incomplete information about its own revenue.

An agent with no float cannot sell a ticket. On the vendor platform agents found that out by trying. When they needed more float they photographed a bank deposit slip into a WhatsApp group and waited, and the estimate failed hardest on the days they could least afford to stop selling. That was one of four operational workarounds discovery turned up, and each one marked the edge of what a shared-configuration platform could represent for a network of operators who compete with each other.

I was the sole product designer across two generations of the replacement. V1 shipped in four months and gave AC Mobility ownership of its operations. After thirteen months running it, I proposed and drove V2, rebuilding the model underneath so relationships between buses, stops, routes and operators became assignable rather than fixed, and so float, authority and audit history became part of the interface rather than conditions sitting behind it.

Daily upcountry revenue went from roughly $60K on the vendor platform to $90K on V1 and roughly $130K on V2, on a network that grew from 17 operators to 21. Float failures stopped appearing as a support category, and the $12,000 monthly contract is gone.

V2 also introduced a problem V1 did not have. It became more capable faster than some users became comfortable with its model, and where the correct path costs more thought than the workaround, the workaround wins. That changed how I think about operational software: a capability is not finished when the system can support it, it is finished when the right path is easier than the way around it.

**Details:**
- **Industry:** Transportation & Mobility
- **Role:** Product designer, Researcher
- **Timeline:** Two generations, July 2024-July 2026
- **Scope:** Operations Web, Android POS, Commuter App, Inspector App, USSD, Design System
- **Scale:** 21 Operators, 995 Agents, 2,032,930 Tickets/month
- **Team:** V1: 1 PM, 6 Engineers, 1 DevOps / V2: 4 Engineers, 2 DevOps

**Visuals on the page:**
1. Video: Operator dashboard, tickets, sales trips, activity overview
2. Video: The agent POS; selling a ticket, from trip details to issued receipt.
3. Phone screens: Inspector scan result screen, validated and cancelled states
4. Video: Tap&Go core flow: home, booking, and ticket confirmation screens
5. Phone screens: USSD top-up flow, step-by-step dialogue states

**Resume-ready bullets:**
- Sole product designer across two generations replacing a ~$12,000/month external vendor platform with in-house ticketing infrastructure for Rwanda's upcountry bus network.
- V1 shipped in 4 months; proposed and drove V2 after 13 months, rebuilding the data model so buses/stops/routes/operators became assignable and float, authority, and audit history lived in the interface.
- Daily upcountry revenue ~$60K (vendor) to ~$90K (V1) to ~$130K (V2); network grew 17 to 21 operators; float failures eliminated as a support category; $12K/month contract removed.
- Delivered across Operations Web, Android POS, a commuter app (Tap&Go), an Inspector app, USSD, and a design system; scale of 21 operators, 995 agents, 2,032,930 tickets/month.

---

### 2. Muvuzi
**Designing the brand, website and product experience for a pharmacy platform built for everyday operations.**
URL: https://cyusacandesign.com/work/muvuzi

**Summary:** Brand, website, and product design for a Rwandan pharmacy platform, inventory, dispensing, and insurance brought together in one operational SaaS.

**Overview (full):**

Muvuzi is a pharmacy management platform built for pharmacies in Rwanda. The initial brief outlined six modules, but turning that idea into a product meant defining how inventory, dispensing, insurance, branches, staff, subscriptions, and administration should actually work together.

I owned the product strategy, architecture, UX, content, and interaction design, taking Muvuzi from that high-level brief to a 229-screen multi-tenant SaaS product. Feedback from pharmacy owners and staff validated the operational problems behind the product and uncovered another opportunity: giving patients a way to check where a drug is available before visiting a pharmacy.

Muvuzi has secured Mastercard funding and mentorship and has its first pharmacy clients lined up for testing.

**Details:**
- **Industry:** Healthtech, Pharmacy SaaS
- **Project Stage:** Pre-launch
- **Role:** Product Designer, Strategist
- **Services Provided:** Product Strategy, Product Design, Brand Design

**Visuals on the page:**
1. Video: The Muvuzi identity, one wordmark and a green system built for every surface.
2. Video: The landing page, six modules distilled into one scroll for pharmacy owners.
3. Video: Inside the workspace; inventory, dispensing, and insurance in one flow.
4. Image: The patient side: search a medication, see which nearby pharmacies have it in stock.
5. Video: Purchase orders; procurement across suppliers, from draft to received.

**Resume-ready bullets:**
- Owned product strategy, architecture, UX, content, interaction, and brand for a Rwandan pharmacy-management SaaS: from a 6-module brief to a 229-screen multi-tenant product.
- Validated operational problems with pharmacy owners/staff; uncovered and designed a patient-facing "find where a drug is in stock" feature.
- Secured Mastercard funding and mentorship; first pharmacy clients lined up for testing.

---

### 3. Handoff
**Designing the handoff between an AI coding agent and a human.**
URL: https://cyusacandesign.com/work/handoff

**Summary:** A researched concept for the handoff between an AI coding agent and a human, making agent state inspectable so people know what happened and where to continue.

**Overview (full):**

Handoff explores what happens between an AI coding agent finishing a task and a human deciding what happens next. The problem wasn't that agents couldn't produce code. It was that when work stopped, failed, or degraded, the human often had to reconstruct what had happened from a wall of messages.

I designed a concept around making agent state inspectable: what happened, why the agent stopped, what it was holding, what had already been tried, and exactly where the human could continue. I researched the concept with developers who actively use AI coding agents, and one finding changed the product itself: the hardest handoff wasn't always a failure, it was knowing when the agent should stop before quality degraded.

The result was a tested concept with eight task states, five stop types, and a new 'Degrading' state shaped directly by research.

**Details:**
- **Industry:** AI, Developer Tools
- **Project Stage:** Concept
- **Role:** Designer, Researcher, Product Direction

**Visuals on the page:**
1. Image: Correct the agent's understanding instead of re-explaining it in another prompt.
2. Image: The whole task on one screen, held instructions become editable chips you fix in place.
3. Image: One click from the stop card: three attempts, each result, and the agent's own hypothesis.
4. Image: The causality trail; 'Copy log' exports it as plain text, a developer's screenshot made native.
5. Image: The pause doesn't ask for trust; it shows the evidence that triggered it.
6. Image: The audit trail outlives the task; 'What did I allow?', answered after ship.

**Resume-ready bullets:**
- Designed and researched a concept making an AI coding agent's state inspectable: what happened, why it stopped, what it was holding, what was tried, and where a human continues.
- Research with active AI-agent users reshaped the product: the hardest handoff was knowing when to stop before quality degraded.
- Delivered a tested concept: 8 task states, 5 stop types, and a research-driven "Degrading" state.

---

### 4. Voit
**Turning a design system into something designers could actually build with.**
URL: https://cyusacandesign.com/work/voit

**Summary:** Designing the Blocks layer of a Figma design system, 150+ responsive compositions that take designers from components to complete product screens.

**Overview (full):**

Voit is a Figma design system built to help teams move from foundations to complete product interfaces faster. When I joined, the foundations, components, and patterns were already established. The missing layer was the one designers needed most when building real products: complete screens

I was brought in to design the Blocks layer, creating full-page compositions across 13 categories while working within the existing system. Every block had to be useful on its own while remaining consistent with the foundations underneath it.

I designed 150+ responsive blocks across light and dark themes, turning the system into something designers could use to move from individual components to complete product experiences.

**Details:**
- **Industry:** Design
- **Project Stage:** Launched
- **Role:** Design Systems Specialist
- **Timeline:** 3 Months
- **Services Provided:** Design systems, UX/UI, Responsive design, Component Composition

**Visuals on the page:**
1. Video: The system in motion, from foundations to finished screens.
2. Image: The Components library: buttons, inputs, and the building blocks.
3. Image: The Blocks layer, full-page compositions across 13 categories.
4. Image: Patterns; the media, navigation, and utilities that hold the system together.
5. Image: Blocks composed into a complete dashboard, end to end.

**Resume-ready bullets:**
- Brought in to build the Blocks layer of a Figma design system on top of existing foundations, components, and patterns.
- Designed 150+ responsive blocks across 13 categories, in light and dark themes: taking the system from individual components to complete, shippable product screens.

---

### 5. Orla3
**Designing trust into a marketplace where money moves before trust exists.**
URL: https://cyusacandesign.com/work/orla3

**Summary:** Designing trust into a UK marketplace where money moves before trust exists, escrow, delivery, and structured handover between two strangers.

**Overview (full):**

Orla3 is a UK marketplace connecting people with professional videographers. The challenge wasn't simply finding someone to film an event. It was creating enough trust for two strangers to agree on a brief, exchange money, deliver finished work, and resolve issues when expectations weren't met.

As the sole product designer, I designed both sides of the marketplace, from discovery and booking to escrow, delivery, amendments, payments, and post-booking management. The product had to make the transaction understandable for first-time buyers while giving videographers control over their availability, enquiries, pricing, and work.

Orla3 launched in the UK with 500 videographers joining the platform at launch, with escrow and structured handover at the centre of the experience.

**Details:**
- **Industry:** Marketplace
- **Project Stage:** Launched 2025
- **Role:** Product Designer
- **Timeline:** 2 Months
- **Services Provided:** Product Design

**Visuals on the page:**
1. Image: Discovering a videographer; showreel, price range, and availability.
2. Image: Delivery arrives in chat, with the booking details alongside.
3. Image: Requesting amendments before the work is accepted.
4. Image: Confirm and pay, the fee held in escrow until handover.

**Resume-ready bullets:**
- Sole product designer for a UK two-sided marketplace connecting people with professional videographers.
- Designed both sides: discovery, booking, escrow, delivery, amendments, payments, and post-booking management: balancing clarity for first-time buyers with control for videographers.
- Launched in the UK in 2025 with 500 videographers at launch; escrow and structured handover at the center of the experience.

---

## Writing

Planned essays (currently shown on the site as "Soon", not yet published):

1. **When money becomes a UI state**: What designing ticketing infrastructure taught me about balances, reversals, pending payments, and financial accountability.
2. **When should an AI agent stop?**: What changed in Handoff after talking to developers who use AI coding agents every day.
3. **Designing around a 2016 Android POS**: A closer look at what happens when the hardware becomes one of the biggest constraints in the product.

---

## Site map

- Home: https://cyusacandesign.com
- AC Mobility: https://cyusacandesign.com/work/ac-mobility
- Muvuzi: https://cyusacandesign.com/work/muvuzi
- Handoff: https://cyusacandesign.com/work/handoff
- Voit: https://cyusacandesign.com/work/voit
- Orla3: https://cyusacandesign.com/work/orla3

---

## Notes for applications

- **Muvuzi** is pre-launch and **Handoff** is a concept: worth labeling their stage so framing stays accurate.
- All figures above (revenue, operator counts, screen counts, block counts, launch numbers) are taken directly from the live case-study copy.
