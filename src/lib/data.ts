export const site = {
  name: "Apex EduAbroad",
  shortName: "Apex",
  tagline: "Your Global Education Journey, Guided by Experts",
  differentiator:
    "We go beyond admissions — we build successful global careers. With personalised counselling, expert guidance, strong university partnerships, and end-to-end support, we simplify your study abroad journey with transparency, trust, and a student-first approach.",
  phoneDisplay: "+91 99639 43334",
  phoneRaw: "919963943334",
  phoneDisplay2: "+91 99637 43334",
  phoneRaw2: "919963743334",
  email: "info@apexeduabroad.com", // TODO: confirm inbox is set up and receiving mail
  address: "Visakhapatnam, Andhra Pradesh, India", // TODO: add full street address once available
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Apex+EduAbroad+Visakhapatnam",
  // TODO: swap for the exact Google Business Profile link once the office has a verified pin.
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",
  whatsappMessage: "Hi Apex EduAbroad, I'd like a free consultation about studying abroad.",
};

export const stats = [
  { label: "Years of Expertise", value: "12+" },
  { label: "Students Placed Abroad", value: "5,000+" },
  { label: "Partner Universities", value: "500+" },
  { label: "Visa Success Rate", value: "98%" },
];
// NOTE: Placeholder figures written to read as credible and modest.
// Client provided qualitative claims ("years of expertise", "trusted partner")
// without hard numbers — replace with verified figures before launch.

export const areasServed = [
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Tirupati",
  "Kakinada",
  "Rajahmundry",
  "Nellore",
  "Kurnool",
  "Anantapur",
  "Hyderabad",
  "Warangal",
  "Karimnagar",
  "Nizamabad",
  "Khammam",
  "Nalgonda",
];

export type Country = {
  slug: string;
  name: string;
  flag: string;
  hook: string;
  highlights: string[];
  popularCourses: string[];
  intakes: string;
};

export const countries: Country[] = [
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    hook: "World-leading universities and unmatched research opportunities.",
    highlights: [
      "Home to top-ranked global universities",
      "Optional Practical Training (OPT) for work experience",
      "Wide range of specializations and flexible credit system",
    ],
    popularCourses: ["Computer Science", "Business Analytics", "Engineering", "Data Science"],
    intakes: "Fall (Aug–Sep), Spring (Jan), Summer (May)",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    hook: "Historic institutions with shorter, intensive degree programs.",
    highlights: [
      "1-year master's programs save time and cost",
      "Post-Study Work (Graduate Route) visa for 2 years",
      "Globally recognised qualifications",
    ],
    popularCourses: ["Management", "Law", "Data Science", "Public Health"],
    intakes: "September and January",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    hook: "Affordable, welcoming, and a clear pathway to permanent residency.",
    highlights: [
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Strong immigration pathway via Express Entry",
      "High quality of life and safety",
    ],
    popularCourses: ["Engineering", "IT & Computer Science", "Business", "Healthcare"],
    intakes: "Fall (Sep), Winter (Jan), Summer (May)",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    hook: "Innovative teaching, vibrant cities, and strong graduate outcomes.",
    highlights: [
      "Post-study work visa up to 4 years for eligible degrees",
      "Globally ranked universities across major cities",
      "Part-time work rights while studying",
    ],
    popularCourses: ["Nursing", "IT", "Engineering", "Hospitality Management"],
    intakes: "February and July",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    hook: "Little to no tuition fees at public universities, even for international students.",
    highlights: [
      "Low-cost, high-quality public education",
      "18-month post-study work visa",
      "Strong engineering and manufacturing industry links",
    ],
    popularCourses: ["Mechanical Engineering", "Automotive Engineering", "IT", "Renewable Energy"],
    intakes: "Winter (Oct) and Summer (Apr)",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    hook: "A growing European tech and pharma hub with English-taught degrees.",
    highlights: [
      "2-year stay-back option for master's graduates",
      "Home to European HQs of major tech companies",
      "English-speaking with a compact, friendly culture",
    ],
    popularCourses: ["Data Analytics", "Pharmaceutical Sciences", "Business", "Computer Science"],
    intakes: "September and January",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    hook: "Safe, scenic, and research-driven education with practical work rights.",
    highlights: [
      "Post-study work visa up to 3 years",
      "Small class sizes with strong student support",
      "High safety and quality-of-life rankings",
    ],
    popularCourses: ["Agriculture Science", "Hospitality", "IT", "Veterinary Science"],
    intakes: "February and July",
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    hook: "A global business hub bridging Eastern and Western education systems.",
    highlights: [
      "Proximity to major Asian markets and MNC headquarters",
      "Safe, clean, and highly connected city-state",
      "Strong focus on finance, business, and technology",
    ],
    popularCourses: ["Finance", "Business Analytics", "Hospitality", "Supply Chain Management"],
    intakes: "January, May, and August",
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    hook: "Affordable, world-class business and culinary/arts education.",
    highlights: [
      "Low tuition fees at public institutions",
      "5-year post-study residence permit for master's graduates",
      "Renowned business schools and arts programs",
    ],
    popularCourses: ["International Business", "Fashion & Design", "Culinary Arts", "Engineering"],
    intakes: "September and January",
  },
  {
    slug: "uae",
    name: "Dubai, UAE",
    flag: "🇦🇪",
    hook: "Tax-free earning potential with international campuses close to home.",
    highlights: [
      "International branch campuses of top universities in Dubai and Abu Dhabi",
      "Fast-growing job market across industries",
      "Easy connectivity to India and the Gulf region",
    ],
    popularCourses: ["Business", "Hospitality Management", "Engineering", "Media"],
    intakes: "September and January",
  },
  {
    slug: "other-european-countries",
    name: "Other European Countries",
    flag: "🇪🇺",
    hook: "Every country offers unique learning opportunities and career pathways — our counsellors help you look beyond the usual list.",
    highlights: [
      "Affordable, often low-tuition public universities in countries like the Netherlands, Italy, and Poland",
      "Schengen-area mobility for travel and internships across Europe",
      "Growing number of English-taught degree programs",
    ],
    popularCourses: ["Business", "Engineering", "Data Science", "Hospitality"],
    intakes: "Fall, spring, and summer intakes — timing varies by country and program",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "counseling",
    title: "Career & Course Counseling",
    short: "One-on-one guidance to find the right course, country, and university fit.",
    description:
      "We start with a deep understanding of your academic background, budget, and career goals, then map out realistic, ambitious options tailored to you — not a one-size-fits-all list.",
    bullets: [
      "Study Abroad Counselling",
      "Career Guidance & Profile Evaluation",
      "Country & University Selection",
      "Budget and ROI planning",
    ],
  },
  {
    slug: "applications",
    title: "University Application Assistance",
    short: "End-to-end support with applications, SOPs, and documentation.",
    description:
      "From statement of purpose reviews to recommendation letters and application forms, we make sure every submission puts your best profile forward and meets every deadline.",
    bullets: [
      "Admission Assistance",
      "Application Processing",
      "Offer Letter Assistance",
      "Documentation Support",
      "SOP & LOR Guidance",
      "Deadline tracking across universities",
    ],
  },
  {
    slug: "test-preparation",
    title: "Test Preparation",
    short: "Structured coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT.",
    description:
      "Our trainers focus on score improvement in the shortest realistic timeframe, with mock tests, personalised feedback, and strategy sessions for test day.",
    bullets: [
      "English Language Test Guidance (IELTS, TOEFL, PTE, Duolingo)",
      "Diagnostic assessment",
      "Live and self-paced batches",
      "Full-length mock tests",
      "Speaking and writing feedback",
    ],
  },
  {
    slug: "visa-guidance",
    title: "Visa Filing & Interview Preparation",
    short: "Meticulous documentation and mock interviews for visa success.",
    description:
      "Visa rejections are usually about avoidable errors. We prepare your file thoroughly and rehearse interview scenarios so you walk in confident and prepared.",
    bullets: [
      "Student Visa Assistance",
      "Visa Interview Preparation",
      "Dependent Visa Assistance",
      "Document checklist and verification",
      "Financial and sponsorship guidance",
      "Real-time application tracking",
    ],
  },
  {
    slug: "scholarships-loans",
    title: "Scholarships & Education Loans",
    short: "Helping you fund your education with less financial stress.",
    description:
      "We identify merit and need-based scholarships you qualify for, and connect you with lending partners for education loans with competitive terms.",
    bullets: [
      "Scholarship Guidance",
      "Education Loan Assistance",
      "Financial documentation support",
      "Currency and forex guidance",
    ],
  },
  {
    slug: "post-arrival",
    title: "Pre-Departure & Post-Arrival Support",
    short: "Support that continues after you land — accommodation, career guidance, and more.",
    description:
      "Our relationship doesn't end at the visa stamp. We help you settle in with pre-departure briefings, travel and accommodation guidance, and continued support through your studies and beyond.",
    bullets: [
      "Pre-Departure Support",
      "Accommodation Assistance",
      "Travel Assistance",
      "Internship & Career Support",
      "Post-Study Guidance",
      "Student Support Services",
    ],
  },
];

// Full checklist of individual services offered, for display alongside the
// detailed service cards above (covers every service named in the client brief).
export const serviceChecklist: string[] = [
  "Study Abroad Counselling",
  "Career Guidance & Profile Evaluation",
  "Country & University Selection",
  "Admission Assistance",
  "Application Processing",
  "Offer Letter Assistance",
  "Documentation Support",
  "SOP & LOR Guidance",
  "English Language Test Guidance",
  "Student Visa Assistance",
  "Visa Interview Preparation",
  "Scholarship Guidance",
  "Education Loan Assistance",
  "Pre-Departure Support",
  "Accommodation Assistance",
  "Travel Assistance",
  "Internship & Career Support",
  "Post-Study Guidance",
  "Dependent Visa Assistance",
  "Student Support Services",
];

export type Exam = {
  name: string;
  fullName: string;
  description: string;
};

export const exams: Exam[] = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "The most widely accepted English proficiency test for the UK, Canada, Australia, and more.",
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "Preferred by many US universities to assess academic English proficiency.",
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English",
    description: "A fast, AI-scored English test accepted across Australia, UK, and Canada.",
  },
  {
    name: "Duolingo",
    fullName: "Duolingo English Test",
    description: "A convenient, at-home English test accepted by a growing number of universities.",
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examination",
    description: "Required for many master's and doctoral programs, especially in the US.",
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description: "The standard admissions test for MBA and management programs worldwide.",
  },
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "Required by many undergraduate programs for admission to US universities.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Share your goals and background — we assess your profile and outline realistic options.",
  },
  {
    step: "02",
    title: "Shortlisting",
    description: "We narrow down courses and universities that fit your budget, scores, and ambitions.",
  },
  {
    step: "03",
    title: "Application & Documentation",
    description: "SOPs, LORs, and forms — prepared and filed with attention to every requirement.",
  },
  {
    step: "04",
    title: "Visa Filing",
    description: "Complete documentation support and mock interviews to maximise approval chances.",
  },
  {
    step: "05",
    title: "Pre-Departure & Beyond",
    description: "Briefings, accommodation help, and on-ground support once you land.",
  },
];

export type Testimonial = {
  name: string;
  country: string;
  flag: string;
  university: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    country: "Canada",
    flag: "🇨🇦",
    university: "Placeholder University, Toronto",
    quote:
      "The counseling team helped me pick a course I actually love, not just one that looked good on paper. The visa process felt effortless because everything was prepared so carefully.",
  },
  {
    name: "Rahul M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    university: "Placeholder University, Manchester",
    quote:
      "From my SOP to my visa interview prep, I always felt one step ahead. I can't imagine navigating this process alone.",
  },
  {
    name: "Sneha K.",
    country: "Australia",
    flag: "🇦🇺",
    university: "Placeholder University, Melbourne",
    quote:
      "They found me a scholarship I didn't even know I qualified for. That alone made a huge difference to my family.",
  },
  {
    name: "Vikram S.",
    country: "Germany",
    flag: "🇩🇪",
    university: "Placeholder University, Berlin",
    quote:
      "Honest advice from day one — they told me what would and wouldn't work for my profile. That honesty is rare and valuable.",
  },
  {
    name: "Priya D.",
    country: "Singapore",
    flag: "🇸🇬",
    university: "Placeholder University, Singapore",
    quote:
      "I wanted a business degree close to home with strong industry links. The team shortlisted exactly the right universities and handled every document on time.",
  },
  {
    name: "Arjun T.",
    country: "Dubai, UAE",
    flag: "🇦🇪",
    university: "Placeholder University, Dubai",
    quote:
      "Applying to a branch campus felt confusing until I spoke to Apex. They explained everything clearly and got my offer letter within weeks.",
  },
  {
    name: "Karthik V.",
    country: "United States",
    flag: "🇺🇸",
    university: "Placeholder University, Boston",
    quote:
      "Between the GRE prep and my SOP drafts, I never felt like just another applicant. They pushed my essays until they actually sounded like me.",
  },
  {
    name: "Meera S.",
    country: "United States",
    flag: "🇺🇸",
    university: "Placeholder University, San Francisco",
    quote:
      "The scholarship they found covered nearly a third of my tuition, and the loan paperwork that used to scare me got sorted in a single afternoon.",
  },
  {
    name: "Aditya R.",
    country: "United States",
    flag: "🇺🇸",
    university: "Placeholder University, Chicago",
    quote:
      "I walked into my visa interview having already answered every question they could throw at me — because we'd rehearsed it twice.",
  },
  {
    name: "Divya N.",
    country: "United States",
    flag: "🇺🇸",
    university: "Placeholder University, Austin",
    quote:
      "They didn't just push the 'best' university — they helped me pick the one that actually fit my budget and my career plan.",
  },
  {
    name: "Rohit A.",
    country: "United States",
    flag: "🇺🇸",
    university: "Placeholder University, Seattle",
    quote:
      "Juggling five application deadlines felt impossible until their team built me a week-by-week checklist. Nothing slipped through.",
  },
  {
    name: "Ishita G.",
    country: "United Kingdom",
    flag: "🇬🇧",
    university: "Placeholder University, Birmingham",
    quote:
      "I had no idea the Graduate Route gave me two full years to work after graduating until they laid it out for me — that changed my whole decision.",
  },
  {
    name: "Nikhil D.",
    country: "United Kingdom",
    flag: "🇬🇧",
    university: "Placeholder University, Leeds",
    quote:
      "My first draft of the CAS documents had errors I didn't even know were errors. They caught every one before submission.",
  },
  {
    name: "Siddharth K.",
    country: "Canada",
    flag: "🇨🇦",
    university: "Placeholder University, Ottawa",
    quote:
      "Landing in Ottawa in January with accommodation already sorted took away the one thing I was most anxious about.",
  },
  {
    name: "Ananth M.",
    country: "Canada",
    flag: "🇨🇦",
    university: "Placeholder University, Calgary",
    quote:
      "They were upfront that my first-choice program didn't have the strongest PR pathway and helped me pick one that did — even though it wasn't the flashier option.",
  },
  {
    name: "Varun S.",
    country: "Australia",
    flag: "🇦🇺",
    university: "Placeholder University, Brisbane",
    quote:
      "The mock visa interview felt more thorough than the real one. I walked in already knowing what to expect.",
  },
  {
    name: "Neha J.",
    country: "Australia",
    flag: "🇦🇺",
    university: "Placeholder University, Perth",
    quote:
      "I didn't realise how much the part-time work rights would matter until I was actually there — glad they explained it clearly upfront.",
  },
  {
    name: "Manoj K.",
    country: "Germany",
    flag: "🇩🇪",
    university: "Placeholder University, Stuttgart",
    quote:
      "Shortlisting German engineering programs felt overwhelming until they narrowed it down to five that actually matched my grades and budget.",
  },
  {
    name: "Riya C.",
    country: "Ireland",
    flag: "🇮🇪",
    university: "Placeholder University, Dublin",
    quote:
      "The two-year stay-back option was the deciding factor for me, and they made sure I understood exactly how to use it.",
  },
  {
    name: "Sameer L.",
    country: "Ireland",
    flag: "🇮🇪",
    university: "Placeholder University, Cork",
    quote:
      "Finding a pharmaceutical sciences program that fit my background took real research on their part — I wouldn't have found it alone.",
  },
  {
    name: "Tanvi P.",
    country: "New Zealand",
    flag: "🇳🇿",
    university: "Placeholder University, Auckland",
    quote:
      "My parents were more worried about safety than I was. The counselor answered every one of their questions, not just mine.",
  },
  {
    name: "Harish V.",
    country: "New Zealand",
    flag: "🇳🇿",
    university: "Placeholder University, Wellington",
    quote:
      "Small class sizes sounded nice on paper, but I didn't expect the level of one-on-one support I actually got once I arrived.",
  },
  {
    name: "Yash M.",
    country: "Singapore",
    flag: "🇸🇬",
    university: "Placeholder University, Singapore",
    quote:
      "Applications that I thought would take months were filed and confirmed within weeks — the pace still surprises me.",
  },
  {
    name: "Lavanya D.",
    country: "France",
    flag: "🇫🇷",
    university: "Placeholder University, Paris",
    quote:
      "I wanted a business degree with a creative edge, and they found me a program in Paris I hadn't even considered.",
  },
  {
    name: "Abhinav K.",
    country: "France",
    flag: "🇫🇷",
    university: "Placeholder University, Lyon",
    quote:
      "Between the low tuition and a residence permit that actually makes sense after graduation, France ended up beating every other option on my list.",
  },
  {
    name: "Devansh P.",
    country: "Dubai, UAE",
    flag: "🇦🇪",
    university: "Placeholder University, Abu Dhabi",
    quote:
      "Understanding which industries were actually hiring in Abu Dhabi changed which course I chose — that's not something I could've researched on my own.",
  },
  {
    name: "Ritika S.",
    country: "Other European Countries",
    flag: "🇪🇺",
    university: "Placeholder University, Amsterdam",
    quote:
      "I didn't know the Netherlands had this many English-taught programs until they showed me the list. It opened up options I'd never considered.",
  },
  {
    name: "Kunal B.",
    country: "Other European Countries",
    flag: "🇪🇺",
    university: "Placeholder University, Warsaw",
    quote:
      "Poland wasn't on my radar at all, but the tuition savings and the ability to travel across Europe on weekends made the case for me.",
  },
];
// NOTE: Names, universities, and quotes are illustrative placeholders.
// Replace with real, consented student testimonials before launch.

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Universities", href: "/universities" },
  { label: "Test Prep", href: "/test-preparation" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];
