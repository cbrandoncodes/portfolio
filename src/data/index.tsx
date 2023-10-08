import { Work } from "@/types";
import { Github, Linkedin, MailIcon } from "lucide-react";

export const navLinks = [
  /*{
    name: "expertise",
    href: "#expertise",
  },*/
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const works: Work[] = [
  {
    name: "Venturous Group",
    overview: "Creating urban evolution through tech innovation",
    link: "https://venturousgroup.com",
    image: "/assets/images/venturous-group.png",
    images: [
      "/assets/images/venturous-group-1.png",
      "/assets/images/venturous-group-2.png",
    ],
    details: [
      `Venturous Group is an investment firm that invests in early-stage technology companies.`,
      `This website was built with Next.js 13, Tailwind CSS and Payload CMS. It is responsive and accessible across different browsers and devices.`,
      `Other tools and technologies used inlcude: TypeScript, Playwright, HubSpot, and Vercel.`,
    ],
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "SASS",
    ],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
  {
    name: "Sunny Side Up",
    details: [
      `Sunny Side Up is a brand agency based in Singapore.`,
      `This is a fully responsive webiste for Sunny Side Up, built with Next.js 13, Payload CMS, Three.js, and Tailwind CSS.`,
    ],
    overview: "Future-ready brands, today.",
    link: "https://sunnysideup.sg",
    image: "/assets/images/ssu.png",
    images: [
      "/assets/images/ssu-1.png",
      "/assets/images/ssu-2.png",
      "/assets/images/ssu-3.png",
    ],
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
  /*{
    name: "Manners and Groove",
    meta: {
      description: "Manners and Groove is a streetwear clothing brand.",
      url: "https://mannersandgroove.com",
      image: "/assets/images/manners-and-groove.png",
      technologies: [
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "TypeScript",
        "Flutterwave",
      ],
    },
  },*/
  /*{
    name: "Wrcked",
    meta: {
      description: "Wrcked is a lithograph art company.",
      url: "https://wrcked.com",
      image: "/assets/images/wrcked.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
    },
  },*/
  {
    name: "Chavalit Tsao",
    details: [
      `This is a website for Chavalit Tsao, a family business steward and chairman of IMC Pan Asia Alliance Group.`,
    ],
    link: "https://chavalittsao.vercel.app",
    image: "/assets/images/chavalit-tsao.png",
    images: [
      "/assets/images/chavalit-tsao-1.png",
      "/assets/images/chavalit-tsao-2.png",
      "/assets/images/chavalit-tsao-3.png",
      "/assets/images/chavalit-tsao-4.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    scope: [
      "Full-Stack Development",
      "Front-End Development",
      "CMS Integration",
      "Responsive Design",
      "SEO",
    ],
    year: 2023,
  },
];

export const testimonials = [
  {
    name: "Cherly Boon",
    role: "Creative, Sunny Side Up",
    // image: "/assets/images/cherly-boon.png",
    testimonial: `Brandon is efficient and great at what he does, and was able to effectively communicate and guide on the best alternative steps when we needed a solution. He is also quick and fast! Would definitely work together again, many thanks!`,
  },
  {
    name: "Johan Riddergard",
    role: "Co-Founder, Venturous Group",
    // image: "/assets/images/johan-riddergard.png",
    testimonial: `Brandon did a great job with our website. He was very knowledgeable and easy to work with. Would definitely recommend him if you want someone reliable and does high quality work.`,
  },
  {
    name: "Edgar Hambaryan",
    role: "CTO, TheFlowOps",
    // image: "/assets/images/edgar-hambaryan.png",
    testimonial: `I am extremely satisfied with the work done by Brandon. He is an excellent and highly professional programmer, completing the tasks assigned to him quickly and with great expertise. I will certainly collaborate with him again.`,
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/brandon30067308",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/brandon-chikezie-31708823b",
  },
  {
    name: "Telegram",
    url: "https://t.me/chikezie_1",
  },
  // { name: "Upwork", url: "https://www.upwork.com/freelancers/~010506150fd44bc884" }
];

export const contactLinks = [
  {
    name: "Email",
    link: "mailto:brandon.chikezie@outlook.com",
    icon: () => <MailIcon size={20} strokeWidth={2} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/brandon30067308",
    icon: () => <Github size={20} strokeWidth={2} />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/brandon-chikezie-31708823b",
    icon: () => <Linkedin size={20} strokeWidth={2} />,
  },
];

export const footerLinks = [
  {
    name: "home",
    href: "/home",
  },
  {
    name: "projects",
    href: "/#projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
