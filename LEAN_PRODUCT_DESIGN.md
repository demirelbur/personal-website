# DESIGN.md

## Lean Product Development (LPD) for Full-Stack Software Development

This document defines how an AI agent should apply **Lean Product Development (LPD)** principles when designing, building, and improving full-stack software systems.

The goal is to build software that is useful, maintainable, measurable, and easy to evolve — without over-engineering before the product value is validated.

---

## 1. Core Philosophy

> Build the smallest thing that delivers user value. Ship it. Measure it. Improve it.

The goal is to **maximize learning per unit time** while **minimizing wasted engineering effort**.

In full-stack development, this means:

- Start with the user journey, not the tech stack
- Build the thinnest end-to-end slice
- Prefer working software over perfect architecture
- Validate before scaling
- Keep systems easy to change

---

## 2. Guiding Principles

### 2.1 Value First

Always ask:

> What is the user actually trying to accomplish?

Prioritize:

- User outcomes over feature count
- Clear workflows over clever UI
- Working end-to-end flows over isolated components
- Measurable product value over technical sophistication

Avoid building features that do not directly support a validated user need.

---

### 2.2 Minimize Waste

Waste includes:

- Over-engineering
- Premature abstraction
- Premature optimization
- Unused features
- Complex state management before it is needed
- Large database schemas before the domain is understood
- Overly generic APIs
- Excessive configuration
- Long development cycles without feedback
- Pixel-perfect UI before usability is validated

Rule:

> If it does not help validate, deliver, measure, or maintain user value, it is probably waste.

---

### 2.3 Build Thin Vertical Slices

Prefer building complete, small user journeys across the full stack.

A thin vertical slice includes:

- UI
- Client-side interaction
- API endpoint or server action
- Data persistence, if needed
- Basic validation
- Error handling
- Minimal observability

Example:

Instead of building the full dashboard first, build:

> One working page where a user can create, view, update, or delete one meaningful item.

This gives faster feedback than building isolated frontend or backend layers separately.

---

### 2.4 Rapid Feedback Loops

Design systems to enable:

- Fast local development
- Fast deployment
- Fast user testing
- Fast rollback
- Fast measurement

Prefer:

- Small pull requests
- Short-lived branches
- Frequent deploys
- Feature flags for risky changes
- Simple analytics
- Clear logging

The shorter the feedback loop, the faster the product improves.

---

### 2.5 Build–Measure–Learn Loop

1. **Build**: Create the smallest usable version
2. **Measure**: Collect product, technical, and user feedback
3. **Learn**: Decide whether to iterate, pivot, simplify, or scale

The loop should be as short as possible.

---

### 2.6 MVP: Minimum Viable Product

Definition:

> The smallest usable implementation that tests a core product assumption.

An MVP must:

- Be usable by the intended user
- Validate a specific assumption
- Produce feedback
- Be simple enough to change quickly

An MVP does not need:

- Perfect design
- Full automation
- Advanced permissions
- Complex infrastructure
- Complete admin tooling
- Support for every edge case

---

## 3. Design Process for Full-Stack AI Agents

### Step 1: Define the User Problem

Before implementing, clarify:

- Who is the user?
- What are they trying to do?
- What pain point are we solving?
- What is the smallest useful workflow?
- What assumption are we testing?

Output:

- Problem statement
- Target user
- Core user journey
- Key assumptions

Example:

```text
Problem:
Visitors to my portfolio need to quickly understand what I build and why it matters.

Core journey:
Visitor lands on homepage → understands positioning → views projects → contacts me.

Assumption:
A case-study-style Projects page increases trust and contact intent.
```

---

### Step 2: Identify the Core Hypothesis

Select one primary hypothesis to test.

Examples:

- “Users understand my expertise faster with project case studies.”
- “A mobile-optimized project card improves project engagement.”
- “Adding selected research improves credibility.”
- “Simplifying the Ask AI answer format improves trust.”
- “A clearer CTA increases contact clicks.”

Avoid testing too many ideas at once.

---

### Step 3: Design the Simplest End-to-End Solution

Guidelines:

- Build the smallest complete flow
- Prefer static data before dynamic CMS/admin tooling
- Prefer simple components before complex design systems
- Prefer local state before global state
- Prefer server-rendered content when interactivity is not needed
- Prefer direct API calls before complex orchestration
- Avoid abstractions until repeated patterns are proven

Ask:

> Can this be implemented in 1/10th the complexity?

---

### Step 4: Define Success Metrics

Metrics should be specific and actionable.

Product metrics:

- Page views
- CTA clicks
- Contact form submissions
- Project card clicks
- Blog post reads
- Search/Ask AI usage
- Scroll depth
- Time on page

UX metrics:

- Mobile readability
- Task completion
- Number of clicks to key content
- Bounce rate
- Confusing interactions
- User feedback

Technical metrics:

- Page load time
- Core Web Vitals
- API latency
- Error rate
- Build time
- Bundle size
- Search/retrieval quality
- Accessibility issues

Every feature should have at least one success signal.

---

### Step 5: Implement the MVP

Requirements:

- Minimal code
- Clear file structure
- Small components
- Simple data flow
- Basic error handling
- Basic loading states
- Mobile usability
- Easy rollback

Avoid:

- Complex frameworks without need
- Premature microservices
- Deep component hierarchies
- Global state for local problems
- Generic abstractions too early
- Building admin panels before content changes frequently
- Full authentication before it is needed

---

### Step 6: Measure and Collect Feedback

Collect:

- Analytics
- Logs
- Error reports
- User feedback
- Search queries
- CTA interactions
- Performance data
- Accessibility results

For a personal website, useful signals include:

- Which projects get clicked?
- Do visitors use Ask AI?
- What questions do they ask?
- Do visitors reach the Contact section?
- Do mobile users drop off before Projects?
- Which blog posts attract attention?

Observability should be simple but present.

---

### Step 7: Learn and Decide

After measuring, decide:

- **Iterate**: Improve the current solution
- **Simplify**: Remove unnecessary complexity
- **Pivot**: Change the approach
- **Scale**: Add robustness, automation, or performance optimization
- **Stop**: Do not continue if value is not demonstrated

Do not scale unvalidated ideas.

---

## 4. Full-Stack Design Heuristics

### 4.1 Start with the User Journey

Before database schemas, APIs, or components, define the journey:

```text
User intent → page/interaction → result → next action
```

Example:

```text
Visitor wants to understand my work
→ opens Projects
→ sees case studies
→ clicks related research
→ contacts me
```

---

### 4.2 Build Vertical Before Horizontal

Prefer:

```text
One complete feature end-to-end
```

over:

```text
Many incomplete layers
```

Example:

Good:

- One project case study page with real content

Less good:

- Generic case study framework, CMS schema, animations, filters, and no finished page

---

### 4.3 Hardcode Before Abstracting

For early versions:

- Hardcode content
- Hardcode layout variants
- Hardcode categories
- Hardcode examples

Abstract only after patterns repeat.

Rule:

> Duplication is cheaper than the wrong abstraction.

---

### 4.4 Prefer Boring Technology

Use reliable, familiar tools unless the product requires otherwise.

Prefer:

- Simple routing
- Simple data fetching
- Simple deployment
- Simple styling
- Simple persistence
- Simple analytics

Avoid novelty unless it directly improves user value or developer velocity.

---

### 4.5 Delay Optimization

Order of work:

1. Make it work
2. Make it usable
3. Make it correct
4. Make it maintainable
5. Make it fast
6. Make it scalable

Do not optimize before the bottleneck is known.

---

### 4.6 Optimize Bottlenecks Only

Use measurement before optimization.

Examples:

- If mobile cards are hard to scan, fix layout before adding features
- If Ask AI gives poor answers, improve indexing before styling
- If page load is slow, profile bundle size before rewriting components
- If users do not click Projects, improve project framing before adding more projects

---

### 4.7 Design for Change

Expect requirements to evolve.

Good designs are:

- Easy to modify
- Easy to delete
- Easy to test
- Easy to deploy
- Easy to understand

Avoid rigid architectures that make small product changes expensive.

---

### 4.8 Make States Explicit

Every interactive full-stack feature should consider:

- Empty state
- Loading state
- Success state
- Error state
- Partial data state
- Mobile state
- Unauthorized state, if relevant

Do not only design the happy path.

---

### 4.9 Treat Mobile as a First-Class Experience

For public-facing websites, mobile is often the first impression.

Mobile rules:

- Prioritize title, outcome, and CTA
- Avoid dense cards
- Avoid horizontal overflow
- Avoid desktop layouts squeezed into mobile
- Limit tags/chips
- Clamp long descriptions
- Use readable line heights
- Keep tap targets comfortable

---

### 4.10 Accessibility Is Product Quality

Accessibility is not optional polish.

Minimum expectations:

- Semantic HTML
- Proper heading order
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Descriptive link labels
- Alt text for meaningful images
- No color-only meaning

---

## 5. Anti-Patterns

Avoid:

- Building for scale before validation
- Designing a full platform before testing one workflow
- Adding authentication before it is needed
- Adding a database when static content works
- Creating generic component systems too early
- Overusing global state
- Overusing animations
- Shipping desktop-first layouts that break on mobile
- Hiding important information behind clever UI
- Ignoring loading/error/empty states
- Measuring nothing
- Long development cycles without feedback
- Keeping unused code “just in case”

---

## 6. Example: Applying LPD to a Personal Portfolio Website

### Traditional Approach

- Build a full custom CMS
- Create many pages
- Add complex animations
- Build advanced search
- Add authentication/admin tooling
- Perfect every detail before launch

### Lean Approach

1. Start with core pages:
   - Home
   - Projects
   - About
   - Research
   - Blog
   - Contact

2. Validate:
   - Do visitors understand the positioning?
   - Do they click Projects?
   - Do they reach Contact?
   - Do they understand the research-to-production story?

3. Iterate:
   - Improve mobile scannability
   - Turn projects into case studies
   - Add selected research
   - Improve CTAs
   - Add Ask AI only if it helps visitors find information

4. Scale:
   - Add richer project pages
   - Add architecture diagrams
   - Improve search/retrieval
   - Add analytics-driven refinements
   - Add CMS only if content updates become frequent

---

## 7. Example: Applying LPD to an Ask AI Feature

### Hypothesis

Visitors want to quickly ask questions about my work instead of browsing every page.

### MVP

- Simple Ask AI panel
- Search indexed website content
- Return concise answers
- Show source cards
- Collect common questions

### Avoid Early

- Complex chat history
- User accounts
- Personalization
- Advanced agent workflows
- Multiple retrieval systems
- Overly complex UI

### Measure

- Number of questions asked
- Questions with useful answers
- Failed queries
- Clicks on source cards
- Follow-up contact clicks

### Iterate

- Improve indexing
- Add missing project content
- Clean answer formatting
- Improve source ranking
- Add suggested questions

---

## 8. Decision Framework

Before implementing anything, ask:

1. What user problem am I solving?
2. What hypothesis am I testing?
3. What is the smallest end-to-end solution?
4. Can I ship this without extra infrastructure?
5. How will I measure whether it worked?
6. What is the simplest rollback plan?
7. What can I deliberately avoid for now?

---

## 9. Architecture Guidelines

### 9.1 Frontend

Prefer:

- Simple component composition
- Clear page structure
- Reusable components only after patterns emerge
- Mobile-first responsive design
- Semantic markup
- Minimal client-side JavaScript when static rendering is enough

Avoid:

- Deep component trees
- Global state for local UI
- Overly clever animation systems
- Too many variants before design patterns stabilize

---

### 9.2 Backend

Prefer:

- Simple API routes/server actions
- Clear request/response contracts
- Basic validation
- Useful error messages
- Logging for important flows
- Minimal external services

Avoid:

- Microservices before scale
- Complex queues before async work is proven necessary
- Premature caching
- Overly generic API layers
- Hidden side effects

---

### 9.3 Data

Prefer:

- Static data files for stable content
- Simple schemas
- Explicit fields
- Easy migration path
- Human-readable content structures

Avoid:

- Complex relational models too early
- CMS integration before content changes frequently
- Storing data that is not used
- Modeling every possible future case

---

### 9.4 UI/UX

Prefer:

- Clear hierarchy
- Strong headings
- Short descriptions
- Specific CTAs
- Scannable cards
- Consistent spacing
- Accessible contrast
- Mobile readability

Avoid:

- Dense cards
- Too many tags
- Repeated CTAs
- Generic button labels
- Raw debug output
- Unclear navigation labels

---

## 10. Definition of Done

A full-stack feature is done when:

- It solves the intended user problem
- The main user flow works end-to-end
- It works on mobile and desktop
- Loading, empty, and error states are handled
- Basic analytics or logs exist
- Accessibility basics are satisfied
- The implementation is easy to modify
- Unnecessary complexity has been removed
- There is a clear next learning step

---

## 11. Behavioral Rules for AI Agents

When helping with full-stack development, the AI agent should:

- Start from the user problem
- Prefer the smallest end-to-end solution
- Challenge unnecessary complexity
- Ask what should be measured
- Avoid premature abstractions
- Avoid unnecessary dependencies
- Preserve existing working systems
- Make mobile usability explicit
- Keep UI consistent with the product identity
- Suggest incremental changes over large rewrites
- Separate desktop and mobile changes when appropriate
- Recommend deletion of unused complexity
- Optimize only after evidence
- Prioritize shipping useful improvements

---

## 12. Summary

Lean Product Development for full-stack software means:

- Build less
- Ship sooner
- Measure behavior
- Learn from real usage
- Improve continuously
- Scale only what proves valuable

> Speed of learning beats sophistication of design.
