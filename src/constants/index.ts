import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";

export const navigationLinks = [
  { id: 1, title: "About Me", href: "#about" },
  { id: 2, title: "Services", href: "#services" },
  { id: 3, title: "Testimonials", href: "#testimonials" },
  { id: 4, title: "Contact", href: "#contact" },
];

export const firstName = "John";
export const lastName = "Doe";
export const fullName = `${firstName} ${lastName}`;
export const slogan = "Personal Life Coach";

export const hero = {
  title: "Unlock Your Full Potential",
  subTitle:
    "High-impact coaching for entrepreneurs, leaders, and changemakers.",
  action: "Book a Discovery Call",
};

export const about = {
  title: "About Me",
  subtitle: "Certified Life Coach & Wellness Expert",
  name: fullName,
  bio: "With over 10 years of experience helping clients achieve personal breakthroughs, I specialize in transformational coaching that addresses mind, body, and spirit. My approach combines evidence-based techniques with intuitive guidance to help you unlock your full potential.",
  imageUrl: "/about-me.jpg",
  qualifications: [
    "Certified Professional Coach (CPC)",
    "Master's in Psychology",
    "NLP Practitioner Certification",
    "500-hour Yoga Teacher Training",
  ],
  signature: "/signature.png",
};

export const services = [
  {
    id: 1,
    title: "Breakthrough Session",
    desc: "A single intensive coaching session to identify your biggest challenge and create an action plan.",
    price: 197,
    features: [
      "90-minute deep dive session",
      "Personalized action plan",
      "Follow-up email support",
      "Resource toolkit",
    ],
  },
  {
    id: 2,
    title: "3-Month Transformation",
    desc: "Comprehensive coaching package for sustainable change and measurable results.",
    price: 997,
    priceSuffix: "or 3 payments of $350",
    popular: true,
    features: [
      "12 weekly 1:1 sessions",
      "Personalized roadmap",
      "Unlimited messaging support",
      "Accountability tracking",
      "Bonus meditation series",
    ],
  },
  {
    id: 3,
    title: "Elite Year-Long Program",
    desc: "Premium coaching experience for complete life transformation in all areas.",
    price: 4997,
    priceSuffix: "or 12 payments of $450",
    features: [
      "52 weekly sessions",
      "24/7 VIP support",
      "Quarterly in-person retreats",
      "Personalized resources",
      "Exclusive mastermind access",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    desc: "Working with my coach completely transformed my mindset and business. I doubled my income within 3 months while working fewer hours.",
    author: "Sarah Johnson",
    business: "Entrepreneur",
    avatar: "/avatars/sarah.jpg",
    results: [
      "Doubled business revenue",
      "Reduced work hours by 30%",
      "Improved work-life balance",
      "Increased confidence",
    ],
  },
  {
    id: 2,
    desc: "The coaching program helped me overcome decade-long limiting beliefs. I finally launched my dream business and feel empowered daily.",
    author: "Michael Chen",
    business: "Startup Founder",
    avatar: "/avatars/michael.jpg",
    results: [
      "Launched successful business",
      "Overcome impostor syndrome",
      "Developed leadership skills",
      "Improved relationships",
    ],
  },
  {
    id: 3,
    desc: "I went from constant burnout to thriving in both my career and personal life. The tools I learned continue to serve me every day.",
    author: "Jessica Williams",
    business: "Marketing Director",
    avatar: "/avatars/jessica.jpg",
    results: [
      "Eliminated chronic stress",
      "Promoted to director role",
      "Better sleep and health",
      "Renewed passion for life",
    ],
  },
];

export const callToAction = {
  title: "Start Your Transformation Today",
  subtitle: "Take the first step toward the life you truly desire",
  description:
    "Book your complimentary discovery session to explore how coaching can help you:",
  action: "Schedule Free Session",
  email: "coach@example.com",
  benefits: [
    "Clarify your vision and purpose",
    "Overcome limiting beliefs",
    "Develop actionable strategies",
    "Create lasting positive change",
    "Achieve your goals faster",
  ],
};

export const footer = {
  tagline:
    "Empowering individuals to live their fullest potential through transformative coaching.",
  quickLinks: [
    { id: 1, title: "About Me", href: "#about" },
    { id: 2, title: "Services", href: "#services" },
    { id: 3, title: "Testimonials", href: "#testimonials" },
    { id: 4, title: "Contact", href: "#contact" },
  ],
  contact: {
    email: "coach@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Wellness Ave, Suite 100, San Francisco, CA",
  },
  contactIcons: {
    mail: MailIcon,
    phone: PhoneIcon,
    mapPin: MapPinIcon,
  },
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      url: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://instagram.com",
      icon: InstagramIcon,
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      id: 4,
      name: "Twitter",
      url: "https://twitter.com",
      icon: TwitterIcon,
    },
  ],
  newsletterText:
    "Get monthly inspiration and coaching tips straight to your inbox.",
  legal: "© 2023 Your Coaching Business. All rights reserved.",
  legalLinks: [
    { id: 1, title: "Privacy Policy", href: "#" },
    { id: 2, title: "Terms of Service", href: "#" },
    { id: 3, title: "Cookie Policy", href: "#" },
  ],
};
