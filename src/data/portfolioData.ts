export interface CaseStudy {
  id: string;
  title: string;
  category: 'branding' | 'posters' | 'social' | 'campaigns';
  categoryLabel: string;
  year: string;
  role: string;
  tools: string;
  impact: string;
  snippet: string;
  imageUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: string;
  deliverables?: string[];
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string;
  bgColorClass: string;
  textColorClass: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  dotColorClass: string;
  isCurrent?: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'origami',
    title: 'Origami For Good — National Awareness Campaign',
    category: 'campaigns',
    categoryLabel: 'Campaigns & Visual Direction',
    year: '2025',
    role: 'Lead Visual Designer & Strategist',
    tools: 'Canva Pro, Adobe Illustrator, Meta Suite',
    impact: '+240% Reach • 45k+ Impressions',
    snippet: 'Comprehensive social media revamp and promotional collateral driving a 240% engagement surge across Kathmandu youth communities.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljMCs6Ywngc4JjcelneBQ4m4zuH_wY0xqOyWZrZkJ45eqdyYinFbfseRyvtYkDq4E_gZ2mWZrnvrlhaN7ZbjD5Q22xI8B_VAkOGMluKcdtW_ofXp8SVtQWG14In44MJmtso6orOQyD7RYRzq-z1k15dZXBENAuq7Di0to1v3OQn0Qy2YGLsPDpCCJ0Vn3MdhiTLi_Av8VjOgXQRiLIXBKXCPqC5V86vt9KTdpUYoW6BSOyY5gWVkU',
    overview: 'A flagship nationwide youth empowerment campaign aimed at amplifying volunteer enrollment and humanitarian awareness through culturally-attuned, delicate pastel paper crane iconography.',
    challenge: 'Previous volunteer drives suffered from visual clutter and generic templates that failed to resonate with university students in the Kathmandu valley.',
    solution: 'Established a unified rose-and-cream aesthetic with bespoke vector origami cranes, clear typographic hierarchies, and interactive carousel layouts formatted for mobile attention spans.',
    metrics: '+240% Engagement surge, 45,000+ targeted impressions, and 300+ new volunteer sign-ups within 30 days.',
    deliverables: ['National Print Posters', 'Instagram Story & Feed Kit', 'Digital Volunteer Registration Guides', 'Event Roll-up Banners'],
    isFeatured: true,
  },
  {
    id: 'lumiere',
    title: 'Lumière Organics Skincare',
    category: 'branding',
    categoryLabel: 'Branding',
    year: '2024',
    role: 'Visual Brand Identity Designer',
    tools: 'Canva Pro, Adobe Illustrator, Figma',
    impact: '12 SKUs Branded • 100% Launch Uptake',
    snippet: 'Elegantly packaged botanical cosmetics identity guide.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC304c4jbLx08QL07-1ZgqTYZOHiA2QFiCr17Zlv1Nm9d94G51lcSTTqXhQaW78zc7D-f4quxg0yd6-Yx-yUcnOqMU1HheK7iQ13oV2lleiNh4dWnS8cCXe7Xu_cXZs1W_q6Uhb-0naJ2yRszZ7y1HjE5T_hf7IQEA8cqVTL5JIml_Jtl0w4mq1RiY5xEDN1Ov6Y43Pt-TyUB_23JcYiVPW-I4xJ-XcUxO_OOuj_2PLyfaveP-mzH2',
    overview: 'Crafting a clean, luxurious, and approachable identity system for a Kathmandu-based artisanal botanical skincare line.',
    challenge: 'Creating an identity that felt as premium as international apothecary brands while maintaining approachable pricing cues for local customers.',
    solution: 'Blended subtle serif wordmarks with frosted rose-gold tones, tactile textured packaging templates, and a reusable Instagram product launch toolkit.',
    metrics: 'Complete brand guide adopted across 12 SKUs, resulting in immediate distributor interest across regional boutique stores.',
    deliverables: ['Primary Bottle Labels', 'Outer Packaging Boxes', 'Brand Guidelines Manual', 'E-commerce Asset Kit'],
  },
  {
    id: 'techsummit',
    title: 'Kathmandu Youth Tech ’24',
    category: 'posters',
    categoryLabel: 'Posters & Banners',
    year: '2024',
    role: 'Lead Graphic Designer',
    tools: 'Adobe Illustrator, Canva Pro',
    impact: '600+ Attendees • Sold Out in 4 Days',
    snippet: 'Cyber-minimalist typography for national tech congress.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5YBqIu373pLob0IQvacIIIactekR091XE1iciFfjYSqV3dAKOvISfVMHOnjnI8_sN9CSj2vCFLF95QLtoy7dVNvz5jEC3_8OcEnf4-7uL4WeyxeGfHDta0ALuhfSk3gb_STJ4hZnuw9Q_lteEZEkCN2vwiXppuFRTNeEozGz-ckut-d3JG3-kjORReJg9Fcuz70ea8oYV52Et4NZv3JVyLfWekOQiy77TiEfH4MeVVVvB6o8-jDj',
    overview: 'Complete print collateral and event identity for a 2-day conference gathering 600+ young tech innovators in Lalitpur.',
    challenge: 'Balancing high-density technical agendas and sponsor logos without compromising on an uncluttered, modern conference presence.',
    solution: 'Constructed a bold geometric modular poster grid paired with high-contrast rose-to-wine gradients that held clarity from billboard size down to delegate badge scales.',
    metrics: 'Event sold out 4 days prior to schedule; 100% positive feedback on signage accessibility from attendees.',
    deliverables: ['Auditorium Backdrop', 'Stage Screen Graphics', 'Delegate Lanyard Badges', 'Speaker Introduction Cards'],
  },
  {
    id: 'bloom',
    title: 'Bloom Cafe & Roastery',
    category: 'social',
    categoryLabel: 'Social Media Design',
    year: '2024',
    role: 'Social Media Designer & Content Planner',
    tools: 'Canva Pro, Lightroom Mobile',
    impact: '+160% Profile Visits • 3.2x Saved Posts',
    snippet: 'Cohesive Instagram grid, story carousels & menu system.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo3XHbqC9TAoXu2JnWPAIcWlGE86s1wOhQ88MU8YmQAKAuhnQlloruGohyI6brRo0UYFi9vK4pjd4ufGD_R-7jvnUTd-X46MSOqo5HSjviYKhsWNYE17WRsXzIPzASTvVk007CdBB-nP5fX6ZI0EPkswVzBSgsWJB-vkE3uD4qmMl8IJCw0eFup9eoNERqnovEAZA0_sfSW9O4otjt7xqHr8iDrRKNX5aLYTi2OoHDTecNO1TK-d0U',
    overview: 'A 90-day Instagram aesthetic transformation for an independent specialty coffee destination located in Jhamsikhel, Kathmandu.',
    challenge: 'Inconsistent visual tone and sporadic posting had led to declining engagement and plateaued walk-in visits.',
    solution: 'Curated 18 modular carousel templates, story highlight systems, and a soft warm pink-to-mocha color system celebrating bean origin stories.',
    metrics: '+160% profile visits in 60 days, 3.2x increase in saved posts for seasonal beverage menu announcements.',
    deliverables: ['Instagram Feed Grid Kit', 'Story Highlights Icons', 'Printed Tabletop Menus', 'Seasonal Launch Posts'],
  },
  {
    id: 'tedx',
    title: 'TEDx Social Club Annual Gala',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    year: '2023',
    role: 'Club President & Creative Director',
    tools: 'Canva Pro, Presentation Tools',
    impact: '500+ Attendees • 3 Media Features',
    snippet: 'Event branding, stage screens, print badges & roll-ups.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiDzk06sDSWOputa2Evj3rEKVcB7wVQcZOIoFLSWrthO0jferv0eBdw_ChYXXVf6H3CoLqq74QUOEGz8lTo8TZSasTvO_xa2a7_3opBIB0OFZl7qDEgPNyhiJWWiz8gjGxe4vRytFUFLfXKUKggtkEoOj26BcMcqXz88J5olatjmO57moMQLMpFrb37a9fg5VcwvnZVKCxFf4wmgI2InYF5ZQ5iaxfaU-tmdNkFW691wp2PIYuFWBK',
    overview: 'Orchestrated end-to-end visuals and thematic consistency for an inter-college youth debate and ideas conference.',
    challenge: 'Coordinating multiple design assets under tight student budget constraints and stringent delivery timelines.',
    solution: 'Standardized visual assets across badges, stage projector screens, and social teaser countdowns for efficient turnkey production.',
    metrics: '500+ attendees engaged, unified branding featured across 3 local youth media publications.',
    deliverables: ['Stage Backdrop Graphics', 'Participant Badges', 'Presentation Slide Decks', 'Teaser Social Posts'],
  },
  {
    id: 'aura',
    title: 'Aura Candle Studio',
    category: 'branding',
    categoryLabel: 'Branding',
    year: '2024',
    role: 'Packaging & Brand Stylist',
    tools: 'Adobe Illustrator, Canva Pro',
    impact: '+210% Holiday Orders • 4 Jar Sizes',
    snippet: 'Visual identity, label packaging & warm mood boards.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOfEsB2iAAe3ZYE8xXK0M8_U5PSyJiPn3hXj69kSy4muMHczTyM47eqHGbv3UpyUiH397_Q4yfRlBKiSBlRzue-Z5zMNn5ai9A7Gg1SuXfRaAxTBJNzwx2bIShs3flbVZmjFFiy3aluHiH08zKU__UMSiZw-0UwkULhheI5nhh0rS1vVa0QzXIln7GghqbzPg20GhWTAhf69a3sxFEvgUnhDut-tWxkMV6bSq60bFrOhoxyf4vKc23',
    overview: 'Minimalist brand aesthetics and label engineering for hand-poured soy wax candles made with Himalayan essential oils.',
    challenge: 'Ensuring waterproof, heat-tolerant label visual balance across 4 different jar dimensions.',
    solution: 'Designed delicate typography with subtle starburst details and soft rose border trims that give the candles an artisanal gift feel.',
    metrics: 'Holiday gift pack orders surged 210% over projections within the initial launch quarter.',
    deliverables: ['Candle Jar Labels (4 sizes)', 'Linen Gift Box Sleeves', 'Fragrance Care Cards', 'Social Product Photography Guide'],
  },
  {
    id: 'heritage',
    title: 'Nepal Heritage Reimagined',
    category: 'posters',
    categoryLabel: 'Posters & Banners',
    year: '2024',
    role: 'Illustrator & Visual Artist',
    tools: 'Canva Pro, Vector Graphics',
    impact: 'Exhibition Feature • Viral Campus Reach',
    snippet: 'Cultural typography & modern architectural vector art.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBPbTUS7djXJ742ZnS9Wqu2blSFyfe-KY65oq-yFPHf4cguCOWy5ng1_W4eko40qLMQCTs6Z1TVrhRm0PRoch4VqwMxarwywZ8sybOuyJB5miyUmy9Z_ne1srCLx62te_xIZro8gPVOzPjXkoRI0QjB-ntyCpOa_4Cz7u_Bo3nqcHOWAMlwhNmTq6zJAYZMrAIb4eZYnFgtEdUr6faN7H89aSVJMVTQaIeACG4JDhJQutF02WmMl_-',
    overview: 'A non-commercial personal design series marrying iconic Newar architectural forms with contemporary pastel aesthetics.',
    challenge: 'Respecting cultural integrity while abstracting architectural landmarks for contemporary youth interiors.',
    solution: 'Applied warm rose-tinted atmospheric lines to temple silhouettes, balancing intricate wood-carving textures with clean negative space.',
    metrics: 'Featured on 2 design curation forums; widely shared across local architecture student groups.',
    deliverables: ['Fine Art A2 Posters', 'Limited Edition Postcards', 'Exhibition Wall Graphics'],
  },
  {
    id: 'urbanglow',
    title: 'Urban Glow Cosmetics',
    category: 'social',
    categoryLabel: 'Social Media Design',
    year: '2023',
    role: 'Digital Campaign Designer',
    tools: 'Canva Pro, Meta Ads Manager',
    impact: '38k Reach • 4.2% CTR on Meta Ads',
    snippet: 'Promotional reel covers, product ads & social campaign.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUgW_PPwYTZ-IXWlTOtntvJ6273gbw8Y9-Zbo0PwA_70QKlu_EDz-V9lhkhUXKxhiByrif-P_wvEju5VUycU87Tn3JBpg34idWvT8sWJER-lG-9_FK6dazWSaRu6fX3vgh5Zndin-_FHtM0UoG0AeCOWJXIZqkzmhL-sr3gEPxiD9Dtl2ej2UsvDRdKJlP0-Dfk_03Naq8QoGONLCa-3p0hA0PWn-I22-7vS5z99VUY_iiDkKTpgi',
    overview: 'High-energy social media launch kit tailored for youth TikTok and Instagram beauty demographics in Nepal.',
    challenge: 'Generating immediate curiosity and click-throughs in a hyper-saturated cosmetics market.',
    solution: 'Built dynamic story polls, giveaway templates, and short-form video cover cards optimized for mobile screens.',
    metrics: 'Campaign reached 38k unique accounts with an average CTR of 4.2% on paid promotion.',
    deliverables: ['Reels Covers', 'Stories Product Teasers', 'Feed Carousels', 'Paid Ad Static Cards'],
  },
  {
    id: 'echo',
    title: 'Echo Sustainable Living',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    year: '2024',
    role: 'Content Strategist & Graphic Designer',
    tools: 'Canva Pro, Adobe Illustrator',
    impact: '8 Campuses • 1,200+ Shares',
    snippet: 'Zero-waste digital awareness flyer & engagement drive.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZQdvUvGGQF1xoR7QtEjxQ2Y0lylo_7_qBzjqAT_j6ayreJfUnTvEHe4H81eor6XIFOiQ3JY0GlmjeVxtWE7TpVei1_jHgf-cdi4B5GuSsg5ZcayYhUwTCmj9qMWqDU4Lh4GDFEH0lJ6qnqQ2AdrdrOOrwD4fKhV5Sht3m4E5S6HAnCOx0cNDCrm0DfddYwSvKATWx5TnUgfRUFfnpda3vqRRV0OVhdoDF2U98QXTNh1ENZK-Fe0BT',
    overview: 'Environmental action digital flyers targeting single-use plastics in educational campuses throughout the Kathmandu valley.',
    challenge: 'Avoiding doom-and-gloom messaging; making sustainability look inviting, chic, and actionable.',
    solution: 'Designed friendly infographic checklists with soft pink and warm mint highlights that encouraged daily behavior shifts.',
    metrics: 'Distributed across 8 campus student unions, resulting in over 1,200 digital shares.',
    deliverables: ['Digital Infographics', 'Printable A3 Campus Posters', 'Social Challenge Checklists'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    icon: 'grid_view',
    title: 'Social Media Design',
    description: 'Curated Instagram feeds, carousel systems, story kits, and Reels thumbnails that captivate attention and convert casual scrollers into loyal brand fans.',
    tags: '✦ Feed Kits • Carousels • Stories',
    bgColorClass: 'bg-[#ffd9e1]',
    textColorClass: 'text-[#3a071b]',
  },
  {
    id: 'posters-banners',
    icon: 'post_add',
    title: 'Posters & Banners',
    description: 'High-impact print & digital posters, event backdrops, conference roll-ups, and marketing collaterals built with disciplined typographic hierarchy.',
    tags: '✦ Event Collateral • Print Ready',
    bgColorClass: 'bg-[#ffd9e0]',
    textColorClass: 'text-[#38091a]',
  },
  {
    id: 'brand-visuals',
    icon: 'palette',
    title: 'Brand Visuals',
    description: 'Logomarks, signature color palettes, font pairings, pitch decks, and brand style guides that establish a memorable, poised visual presence.',
    tags: '✦ Identity Kits • Style Guides',
    bgColorClass: 'bg-[#ffd9e1]',
    textColorClass: 'text-[#32101b]',
  },
  {
    id: 'marketing-planning',
    icon: 'trending_up',
    title: 'Marketing Planning',
    description: 'Data-informed campaign timelines, monthly content calendars, creative copywriting cues, and audience testing to maximize your media investments.',
    tags: '✦ Timelines • Content Calendars',
    bgColorClass: 'bg-[#ffe1e7]',
    textColorClass: 'text-[#703346]',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'origami-exp',
    role: 'Graphics Officer',
    organization: 'Origami For Good — Nepal Chapter',
    period: 'Jun 2025 — Present',
    description: 'Lead visual content creation and brand standards across social channels. Collaborate directly with the national communications team to engineer high-impact awareness campaigns that significantly enhanced community reach and donor engagement.',
    dotColorClass: 'bg-[#8a4b5c]',
    isCurrent: true,
  },
  {
    id: 'creative-spark-exp',
    role: 'Digital Marketing Intern',
    organization: 'Creative Spark Media • Kathmandu',
    period: 'Jan 2024 — May 2024',
    description: 'Supported multi-client social media execution, drafted visual content calendars, tested ad variants across Meta networks, and analyzed weekly performance analytics to optimize audience interaction.',
    dotColorClass: 'bg-[#e7acba]',
    isCurrent: false,
  },
  {
    id: 'tedx-exp',
    role: 'President',
    organization: 'TEDx Social Club',
    period: 'Mar 2018 — Mar 2020',
    description: 'Founded and spearheaded a youth community empowering 500+ students through weekly meetings, inter-college debates, public speaking symposiums, and stage collateral design.',
    dotColorClass: 'bg-[#f2b7c5]',
    isCurrent: false,
  },
];

export const CORE_SKILLS = [
  'Canva Pro',
  'Graphic Design',
  'Social Media Strategy',
  'Content Creation',
  'Presentation Design',
  'Creative Leadership',
  'HTML & CSS',
  'Web Basics',
];

export const PROFILE_DATA = {
  name: 'Salina Risal',
  title: 'Graphic Designer & Digital Marketer',
  location: 'Kathmandu, Bagmati, Nepal',
  education: {
    degree: 'BSc (Hons) Information Technology',
    institution: 'Lord Buddha Education Foundation, Kathmandu',
    years: '2026 – Present',
  },
  languages: 'English (Fluent) • Nepali (Native)',
  email: 'salinarisal3@gmail.com',
  timezone: 'GMT+5:45',
  social: {
    instagram: { handle: '@salinarisal.design', url: 'https://instagram.com' },
    linkedin: { handle: '/salina-risal', url: 'https://linkedin.com' },
    behance: { handle: '/salinarisal', url: 'https://behance.net' },
  },
  images: {
    wordmarkLogo: 'https://lh3.googleusercontent.com/aida/AEtjO1UaUzAze3nKZZYEOL1fluqQvdZ2o1yyA6gzaQxT2XqWGEmVg4cCES1ac2v_NudiJL8mll1CyKVpF16ylsKk2EFBH8Oo1jynuHdqj6YhvBsncjL2DUEF4XhqHElGHawLtZYCOSpehdrS6ADVCAr18ID_Lmk6LqoiCc90iz3jMR7l7pPGhNKmOg3h4RPPRo5R2Gev-rCFSL1MklXJ6Gw-BFaaV8VZjTzjfXULFwS66O2avkK967thzBeI7BQ',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Fgw4L26BkIGzTpKcjZ4pMaJV35p5p8X2mMboaYBPmcgKbw4SZ80JB88LFnmg64HKydNR_zKT0fxqi7_tSZHbyX3Uzl9qgGuMyb_KwUWWHDUIXjaqS7rmrHOP4ZgwbhClEv5WZXmvicjW_OwpjAcY1FBmeiJ2WQFbAtmpY_Hd3_K43IfRw8DPMgtIxkTYRpz7EgsmnDMMMQahj6ntmpa2tK2U8iV7ZjSAh7x5omSqNv0fhZC2rJ-d',
    heroBackCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8Zmk7zQ0Rp5BYdJNRosO9tAQN4JB90_3zGLbP4mQGXYuE3Vl3v7nvKNKD_jA6MTVZdPx5rpyAgAsgDRoBt0T3j6tIZbj4Q6A_suO0MHTIZaTE8OV2ldFoKTljqH1PcphQ_vCfHg0FWkX9laPnw4GhWUji3wfbt1hStFVu4uwy6BXN9CyRVq4iAvIh7PEYwfXsS3pgX4pBKlX46_LdIKOAk3SkyuFe5vn3tgzp4mcNyIiimFVRKGI',
    heroFrontCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWPEFOxpGfQ8hy5v7eSuONfDC0u5ZxGzDE-ep87VXhAk46ymUwGqGMyEN1WGpXrNHAe-JVF1KJhzZteTKTH2jyTNiD0ZX8FCW5L90J9-OKc5f4SXF_MTgujAqXENHCieiHwRtDJLun9dF2sHkFZZMBCX9Y1qTzzII29fXFGcrhGbrA5YaCU0RMeSinYmAADsVMDKhZ7eMILqHXydYfriZv8s38lODy8fx60k0fmpbvtPCXM5tx8RQ7',
    portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSBlOQtGvcWw6ef5g_SBQwld-gCYRy8tGrN2DTjKBqnusvhuxhnk_zYKKIo9CsgD5dlRQEUlFUqP3nKNM9qI9a2ueBEOO0gmEh1kvLsmSBjbZ6SALli2FQELQKvCZx_zRUUU3t1o9pEHKXax5CnrcIbD44A8t1KeN23fAImUXbTGuzSceYKC-bTPP154xKyk11bTlrsQfQalBxQXGJ_j7xOHCSaINWxgOtsZyCwCCmy3-tGlyuNL_7',
  },
};
