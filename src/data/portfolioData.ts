export interface Project {
  slug: string;
  title: string;
  cardTitle: string;
  subtitle: string;
  heroImage: string;
  cardImage: string;
  capabilities: string[];
  credits?: { role: string; name: string }[];
  date: string;
  synopsis: string;
  sections: {
    heading?: string;
    subheading?: string;
    description?: string;
    media?: {
      type: "image" | "video";
      url: string;
      caption?: string;
      aspect?: "video" | "square" | "wide" | "tall";
    }[];
  }[];
}

export const FEATURED_PROJECTS = [
  {
    slug: "somna",
    title: "Somna (CPAP Machine)",
    cardTitle: "Somna",
    category: "CPAP Machine",
    subtitle: "Designed as an object for the home, with a separable motor unit for travel.",
    image: "/media/images/Somna_side_thumbnail.png",
    route: "/somna",
  },
  {
    slug: "shift",
    title: "Shift",
    cardTitle: "Shift",
    category: "Ambient Stress Relief",
    subtitle: "Ambient stress awareness device responding with gentle physical movement.",
    image: "/media/images/Yellow_onehand.png",
    route: "/shift",
  },
  {
    slug: "pocketto",
    title: "Pocketto",
    cardTitle: "Pocketto",
    category: "Crypto Cold Wallet",
    subtitle: "Crypto cold wallet simplifying digital asset management with playful tactile interaction.",
    image: "/media/images/hero_bottom_45-6.png",
    route: "/pocketto",
  },
  {
    slug: "cnc-wallet",
    title: "CNC Cardholder",
    cardTitle: "CNC Cardholder",
    category: "Precision Machining",
    subtitle: "Minimalistic modern cardholder holding 3–4 cards fabricated with CNC machining.",
    image: "/media/images/White_cncwallet-2.png",
    route: "/cnc-wallet",
  },
];

export const ARCHIVE_ITEMS = [
  {
    id: 1,
    title: "Unity Stool",
    description: "Parametric CNC bent-plywood stool exploded rendering",
    image: "/media/images/Unity-Stool-re-rendered.27.jpg",
  },
  {
    id: 2,
    title: "Monitor Riser",
    description: "Minimalist aluminum desk monitor riser with laptop & phone slot",
    image: "/media/images/Monitor-Riser-v2.36.png",
  },
  {
    id: 3,
    title: "Tabletop Game Playtesting",
    description: "Custom board game physical playtesting and rules design",
    image: "/media/images/1O9A2774.jpg",
  },
  {
    id: 4,
    title: "Machining Lathe",
    description: "Turning metal on an engine lathe in the machine shop",
    image: "/media/images/IMG_3809.jpeg",
  },
  {
    id: 5,
    title: "Digital Sketch Sheet",
    description: "Ideation & form development sketches",
    image: "/media/images/Untitled_Artwork-11.jpg",
  },
  {
    id: 6,
    title: "Bent Woodworking",
    description: "Steam bending and lamination wood jig",
    image: "/media/images/IMG_4056.jpg",
  },
  {
    id: 7,
    title: "Electronics Workshop",
    description: "Breadboarding and multimeter testing for interactive hardware",
    image: "/media/images/DSC_7664-2.jpg",
  },
  {
    id: 8,
    title: "Memento",
    description: "Tangible hardware device printing chat receipts",
    image: "/media/images/Memento_thumbnail_white.png",
  },
  {
    id: 9,
    title: "Sketch Collection",
    description: "Hardware form factor exploration and line work",
    image: "/media/images/Untitled_Artwork-17.jpg",
  },
  {
    id: 10,
    title: "B&O Watering Can Study",
    description: "Bang & Olufsen design language exploration on household object",
    image: "/media/images/Bang-Olufsen-Watering-Can-.5.png",
  },
  {
    id: 11,
    title: "Hero Label Packaging",
    description: "Beverage branding and graphic design",
    image: "/media/images/Hero_label_Black.jpg",
  },
  {
    id: 12,
    title: "Machined Wallet Prototype",
    description: "Physical CNC prototype testing and tactile tolerance check",
    image: "/media/images/Hardwallet.10_vertical.jpg",
  },
];

export const INFO_DATA = {
  name: "Sam Zhan",
  location: "San Francisco",
  bio: [
    "Hey, I’m Sam Zhan.",
    "I’m an Industrial Designer based in San Francisco. I love bringing ideas into life and solving complex problems.",
    "I’m excited about designing for the future and integrating technologies into physical products.",
    "Beyond design, I also love to explore new sports and hobbies such as basketball, snowboarding, podcasting, travelling, motorcycling and entrepreneurship.",
  ],
  resumeUrl: "/resume.pdf",
  email: "samzhan1209@gmail.com",
  instagram: "https://www.instagram.com/zytprojects?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  podcast: "https://creators.spotify.com/pod/show/thesemitalkpodcast",
  experience: [
    {
      company: "Newcloth",
      role: "CMF Intern",
      period: "June 2023 - Sep 2023",
    },
    {
      company: "Neolix Autonomous Vehicles",
      role: "Industrial Design Intern",
      period: "Oct 2022 - Dec 2022",
    },
    {
      company: "WOW Interior Design",
      role: "Industrial Design Intern",
      period: "Aug 2022 - Sep 2022",
    },
  ],
  education: [
    {
      institution: "Rhode Island School of Design (RISD)",
      degree: "Industrial Design, BFA",
      year: "Class of 2026",
    },
    {
      institution: "Dulwich College of Beijing",
      degree: "High School Diploma",
      year: "Class of 2020",
    },
  ],
  gallery: [
    {
      url: "/media/images/Website-heroshot.jpg",
      alt: "Sam Zhan Portrait",
    },
    {
      url: "/media/images/IMG_9304.jpg",
      alt: "Lifestyle studio photo",
    },
    {
      url: "/media/images/Motorcycle_pic.jpg",
      alt: "Motorcycle outdoor ride",
    },
  ],
};
