// ─── Design Tokens ────────────────────────────────────────────────────────────
export const BEIGE = "#f2ede4";
export const DARK_GREEN = "#162c20";
export const MID_GREEN = "#1e3a28";
export const LIME = "#c8f03e";
export const CREAM_CARD = "#ece8df";

// ─── Images ───────────────────────────────────────────────────────────────────
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1773432476209-49675713c4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920";

export const NIGERIA_1 =
  "https://images.unsplash.com/photo-1649502913092-fb7f0e8fc632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const NIGERIA_2 =
  "https://images.unsplash.com/photo-1765475467677-579353b25ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const NIGERIA_3 =
  "https://images.unsplash.com/photo-1761373564040-bf39ca486286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";

export const CANADA_1 =
  "https://images.unsplash.com/photo-1756763962068-747ddba8aaee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const CANADA_2 =
  "https://images.unsplash.com/photo-1757266562608-2bbf67f92e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const CANADA_3 =
  "https://images.unsplash.com/photo-1751566568114-a8fbb81f8004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";

export const TEAM_OFFICE =
  "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const REMOTE_WORK =
  "https://images.unsplash.com/photo-1760346547318-7e309662467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const OFFICE_MODERN =
  "https://images.unsplash.com/photo-1764755932155-dabbee87df7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
export const HANDSHAKE =
  "https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";

export const P1 = "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P2 = "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P3 = "https://images.unsplash.com/photo-1675186914580-94356f7c012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P4 = "https://images.unsplash.com/photo-1556557286-bf3be5fd9d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P5 = "https://images.unsplash.com/photo-1771072426488-87e6bbcc0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P6 = "https://images.unsplash.com/photo-1764084052338-23a317e34ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P7 = "https://images.unsplash.com/photo-1758691737583-e4cbfbc78377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P8 = "https://images.unsplash.com/photo-1758613655335-63e9e75af77f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P9 = "https://images.unsplash.com/photo-1589220286904-3dcef62c68ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P10 = "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
export const P11 = "https://images.unsplash.com/photo-1759366033145-572be989e3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";

// ─── Data ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  img: string;
  name: string;
  role: string;
  dept: "Creative" | "Digital" | "CX & Sales" | "Strategy";
  location: "Nigeria" | "Canada";
  available: boolean;
  skills: string[];
  bio?: string;
}

export const TALENT: TeamMember[] = [
  { img: P1, name: "Amara Kone", role: "Brand Designer", dept: "Creative", location: "Nigeria", available: true, skills: ["Figma", "Branding", "Typography"], bio: "5 years building brand identities for SaaS and fintech startups." },
  { img: P2, name: "James Liu", role: "Full Stack Dev", dept: "Digital", location: "Canada", available: true, skills: ["React", "Node.js", "PostgreSQL"], bio: "Previously at two YC-backed startups. Loves clean architecture." },
  { img: P3, name: "Sofia Mendez", role: "Creative Director", dept: "Creative", location: "Canada", available: false, skills: ["Art Direction", "Motion", "Brand"], bio: "Led creative for 20+ global campaigns across three continents." },
  { img: P4, name: "Daniel Reyes", role: "Growth Manager", dept: "CX & Sales", location: "Nigeria", available: true, skills: ["Paid Media", "Analytics", "CRO"], bio: "Scaled two D2C brands from $0 to $3M ARR using performance channels." },
  { img: P5, name: "Layla Nasser", role: "UX Lead", dept: "Digital", location: "Nigeria", available: true, skills: ["User Research", "Figma", "Prototyping"], bio: "Research-first designer with 7 years in product design." },
  { img: P6, name: "Marcus Bell", role: "Sales Lead", dept: "CX & Sales", location: "Canada", available: false, skills: ["Enterprise Sales", "Outbound", "CRM"], bio: "Closed $4M+ in B2B deals across SaaS and consulting." },
  { img: P7, name: "Elena Vasquez", role: "Copywriter", dept: "Creative", location: "Canada", available: true, skills: ["Content Strategy", "SEO Copy", "Brand Voice"], bio: "Writes conversion-focused copy for tech brands and marketplaces." },
  { img: P8, name: "Kofi Mensah", role: "Motion Designer", dept: "Creative", location: "Nigeria", available: true, skills: ["After Effects", "Lottie", "3D"], bio: "Creates cinematic motion content for product launches and ads." },
  { img: P9, name: "Priya Sharma", role: "Customer Success", dept: "CX & Sales", location: "Nigeria", available: true, skills: ["Onboarding", "Retention", "Intercom"], bio: "Reduced churn by 40% at her last role through proactive CS." },
  { img: P10, name: "Andre Silva", role: "Data Analyst", dept: "Digital", location: "Canada", available: false, skills: ["SQL", "dbt", "Looker"], bio: "Turns messy data into clear decisions for growth teams." },
  { img: P11, name: "Lucia Herrera", role: "Art Director", dept: "Creative", location: "Canada", available: true, skills: ["Adobe CC", "Illustration", "Campaign"], bio: "Creates bold visual identities that stand out in crowded markets." },
  { img: P1, name: "Kezia Tunde", role: "SDR", dept: "CX & Sales", location: "Nigeria", available: true, skills: ["Cold Outreach", "LinkedIn Sales", "Apollo"], bio: "Books 15+ qualified calls per week consistently." },
];

export const IBIMA_TEAM = [
  { img: P3, name: "Sofia Mendez", role: "Co-Founder & Creative Lead", bio: "Former creative director at TBWA. Built Ibima to democratise access to world-class offshore talent." },
  { img: P2, name: "James Liu", role: "Co-Founder & CTO", bio: "Ex-Google engineer who fell in love with remote-first culture. Leads all tech and product at Ibima." },
  { img: P9, name: "Priya Sharma", role: "Head of Talent", bio: "Sources, vets and places every talent member. Obsessed with culture-fit as much as skills." },
  { img: P4, name: "Daniel Reyes", role: "Head of Growth", bio: "Owns pipeline from first touch to close. Speaks fluent founder." },
  { img: P5, name: "Layla Nasser", role: "Head of Client Experience", bio: "Ensures every engagement starts strong and stays strong." },
  { img: P10, name: "Andre Silva", role: "Operations Lead", bio: "Keeps Ibima running smoothly across two continents and a dozen time zones." },
];

export const TESTIMONIALS = [
  { bg: "#e8e054", quote: "Ibima transformed how we think about hiring. We went from 3 months of recruiting to having an incredible designer in 2 weeks. The quality is unmatched.", name: "Sarah Okonkwo", role: "CEO, Stackr", img: P3 },
  { bg: "#a2cde8", quote: "I was skeptical about offshore talent until Ibima. Our dev team is now fully remote across Nigeria and Canada — and they outperform everyone.", name: "Tom Eriksen", role: "Founder, Buildflow", img: P2 },
  { bg: "#d4d0c8", quote: "The way Ibima integrates talent into your culture is different. They feel like part of the team from day one. Highly recommend to any founder scaling fast.", name: "Priya Sharma", role: "COO, Daylight Studio", img: P5 },
  { bg: "#e8d8c4", quote: "We scaled our customer success team 3x in 6 weeks using Ibima. Every single hire has been exceptional. This is the future of building teams.", name: "Marcus Osei", role: "Founder, Fieldr", img: P10 },
  { bg: "#c8e8d4", quote: "Ibima didn't just find us talent. They found us people who cared. Our brand designer rewrote our entire visual identity and it's now our biggest growth lever.", name: "Lena Frost", role: "CMO, Arc Studio", img: P7 },
  { bg: "#e8c8e8", quote: "We had tried three outsourcing agencies before Ibima. The difference was night and day. Ibima people feel like they're in your office, not across the ocean.", name: "Carlos Ríos", role: "CEO, Mercado Flow", img: P6 },
];

export const SOLUTION_ROLES = [
  {
    dept: "Creative Roles",
    description: "Visual storytellers and brand builders who make your product impossible to ignore.",
    color: "#e8e054",
    roles: [
      { title: "Brand Designer", desc: "Identity systems, logo design, brand guidelines and visual language." },
      { title: "Motion Designer", desc: "Animations, explainer videos, product demos and social content." },
      { title: "Art Director", desc: "Campaign concepting, visual strategy and creative oversight." },
      { title: "Copywriter", desc: "Brand voice, web copy, email sequences and long-form content." },
      { title: "Video Editor", desc: "Post-production, colour grading and social-ready cuts." },
    ],
  },
  {
    dept: "Digital Experts",
    description: "Engineers and strategists who build and grow your digital product.",
    color: "#a2cde8",
    roles: [
      { title: "Frontend Developer", desc: "React, Next.js, Tailwind — performant, accessible UIs." },
      { title: "Full Stack Developer", desc: "End-to-end product development from API to UI." },
      { title: "UX Designer", desc: "Research, wireframes, prototypes and usability testing." },
      { title: "SEO Specialist", desc: "Organic growth strategy, technical SEO and content planning." },
      { title: "Paid Media Manager", desc: "Google, Meta, LinkedIn ads managed for maximum ROAS." },
    ],
  },
  {
    dept: "CX & Sales",
    description: "Revenue-focused experts who convert, retain and delight your customers.",
    color: "#d4d0c8",
    roles: [
      { title: "Customer Success Manager", desc: "Onboarding, health scores, renewals and expansion revenue." },
      { title: "Sales Development Rep", desc: "Outbound prospecting, cold outreach and pipeline building." },
      { title: "Account Manager", desc: "Relationship management, upsells and client retention." },
      { title: "Community Manager", desc: "Brand communities, social engagement and feedback loops." },
    ],
  },
];

export const LOGOS = ["Stripe", "Notion", "Linear", "Vercel", "Figma", "Loom", "Intercom", "Framer"];
