import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Globe,
  Code,
  Database,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Zap,
  Shield,
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  Settings,
  ShoppingCart,
  TrendingUp,
  Palette,
  Rocket,
  CheckCircle,
  DollarSign,
  HeartHandshake,
  Sparkles,
  Target,
  BarChart3,
  Search
} from 'lucide-react'
import { SiteConfig, Project, Experience, SkillCategory, Testimonial, Service, SocialLink } from './types'

export const siteConfig: SiteConfig = {
  name: "Zaltex",
  description: "Premium web design & development agency focused on modern eCommerce experiences. We transform outdated online stores into conversion-optimized, visually stunning platforms.",
  url: "https://zaltex.online",
  author: {
    name: "Zaltex",
    email: "hello@zaltex.online",
    twitter: "@zaltex",
    linkedin: "zaltex",
    github: "zaltex"
  },
  keywords: [
    "eCommerce Design",
    "Web Development Agency", 
    "Shopify Development",
    "Online Store Design",
    "Conversion Optimization",
    "WooCommerce",
    "React eCommerce",
    "Modern Web Design",
    "Digital Agency",
    "Sales Optimization"
  ],
  nav: [
    { title: "Work", href: "#work" },
    { title: "Process", href: "#process" },
    { title: "Services", href: "#services" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" }
  ],
  social: [
    {
      platform: "github",
      url: "https://github.com/zaltex-agency",
      username: "zaltex-agency",
      icon: Github
    },
    {
      platform: "linkedin", 
      url: "https://linkedin.com/company/zaltex-agency",
      username: "zaltex-agency",
      icon: Linkedin
    },
    {
      platform: "twitter",
      url: "https://twitter.com/zaltexagency", 
      username: "@zaltexagency",
      icon: Twitter
    },
    {
      platform: "email",
      url: "mailto:hello@zaltex.agency",
      icon: Mail
    }
  ]
}

export const workflowSteps = [
  {
    title: "Kick-off Call",
    description: "We dive deep into your business goals and current challenges",
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Strategy & Wireframes",
    description: "Custom strategy focused on conversion optimization",
    icon: Palette,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Design",
    description: "Beautiful, conversion-focused designs that reflect your brand",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Development",
    description: "Clean, fast code built for performance and SEO",
    icon: Code,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Launch",
    description: "Seamless deployment with thorough testing",
    icon: Rocket,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Post-launch Support",
    description: "Ongoing optimization and performance monitoring",
    icon: TrendingUp,
    color: "from-pink-500 to-pink-600"
  }
]

export const valuePropositions = [
  {
    title: "Work directly with developers",
    description: "No middlemen, just expert developers who understand your vision",
    icon: Code,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Post-launch performance support",
    description: "We monitor and optimize your store's performance after launch",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "SEO & copywriting included",
    description: "Complete optimization for search engines and conversions",
    icon: Search,
    color: "from-purple-500 to-violet-600"
  },
  {
    title: "Sales-focused design",
    description: "Every element designed to maximize your conversion rates",
    icon: Target,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Lightning-fast loading",
    description: "Optimized for speed to reduce bounce rates and improve SEO",
    icon: Zap,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Mobile-first approach",
    description: "Perfect experience across all devices and screen sizes",
    icon: Smartphone,
    color: "from-pink-500 to-rose-600"
  }
]

export const projects: Project[] = [
  {
    id: "luxe-fashion",
    title: "Luxe Fashion Co.",
    description: "Premium fashion eCommerce platform with advanced filtering and AR try-on features",
    longDescription: "Complete redesign and development of a luxury fashion brand's online presence, featuring advanced product filtering, AR try-on capabilities, and personalized recommendations.",
    technologies: ["Shopify Plus", "React", "TypeScript", "Tailwind CSS", "AR.js"],
    category: "web",
    status: "completed",
    featured: true,
    image: "/placeholder.jpg",
    demoUrl: "https://demo.luxefashion.example.com",
    metrics: [
      { label: "Conversion Rate", value: "+48%", improvement: "vs. previous site" },
      { label: "Mobile Sales", value: "+65%", improvement: "mobile optimization" },
      { label: "Page Speed", value: "92/100", improvement: "Google PageSpeed" }
    ],
    challenges: [
      "Poor mobile experience with 3+ second load times",
      "Complex product catalog with 10K+ items",
      "Low conversion rate of 1.2%"
    ],
    solutions: [
      "Implemented progressive web app architecture",
      "Added advanced filtering and search functionality",
      "Redesigned checkout flow reducing steps from 6 to 3"
    ],
    results: [
      "Increased mobile conversions by 48%",
      "Reduced bounce rate by 35%",
      "Achieved 92/100 Google PageSpeed score"
    ],
    teamSize: 4,
    duration: "6 weeks",
    year: 2023,
    client: "Luxury Fashion Retailer"
  },
  {
    id: "artisan-coffee",
    title: "Artisan Coffee Co.",
    description: "Subscription-based coffee eCommerce with custom roast profiles and delivery optimization",
    longDescription: "Built a comprehensive subscription platform for a specialty coffee roaster, featuring custom roast profiles, delivery scheduling, and customer loyalty programs.",
    technologies: ["WooCommerce", "React", "Node.js", "Stripe", "Custom API"],
    category: "web",
    status: "completed", 
    featured: true,
    image: "/placeholder.jpg",
    demoUrl: "https://demo.artisancoffee.example.com",
    metrics: [
      { label: "Subscription Growth", value: "+120%", improvement: "new subscribers" },
      { label: "Revenue", value: "+85%", improvement: "monthly recurring" },
      { label: "Customer Retention", value: "94%", improvement: "vs 78% industry avg" }
    ],
    challenges: [
      "Complex subscription management system needed",
      "Integration with roasting schedule and inventory",
      "Customer retention below industry average"
    ],
    solutions: [
      "Built custom subscription management dashboard",
      "Integrated with roasting calendar and inventory system",
      "Implemented loyalty rewards and referral program"
    ],
    results: [
      "120% increase in new subscribers",
      "85% growth in monthly recurring revenue",
      "94% customer retention rate"
    ],
    teamSize: 3,
    duration: "8 weeks",
    year: 2023,
    client: "Specialty Coffee Roaster"
  },
  {
    id: "tech-accessories",
    title: "TechGear Pro",
    description: "B2B electronics marketplace with bulk ordering and custom pricing tiers",
    longDescription: "Developed a comprehensive B2B marketplace for electronics and tech accessories, featuring bulk ordering, tiered pricing, and custom quote requests.",
    technologies: ["Magento 2", "Vue.js", "PHP", "MySQL", "ElasticSearch"],
    category: "web",
    status: "completed",
    featured: true,
    image: "/placeholder.jpg",
    metrics: [
      { label: "B2B Orders", value: "+200%", improvement: "bulk orders" },
      { label: "Average Order", value: "+150%", improvement: "order value" },
      { label: "Processing Time", value: "-60%", improvement: "order processing" }
    ],
    challenges: [
      "Manual quote process taking 24+ hours",
      "No bulk ordering capabilities",
      "Complex pricing tiers for different customer segments"
    ],
    solutions: [
      "Automated quote generation system",
      "Built advanced bulk ordering interface",
      "Implemented dynamic pricing engine"
    ],
    results: [
      "200% increase in B2B orders",
      "150% higher average order value",
      "60% faster order processing"
    ],
    teamSize: 5,
    duration: "10 weeks", 
    year: 2023,
    client: "Electronics Distributor"
  },
  {
    id: "wellness-store",
    title: "Pure Wellness",
    description: "Health & wellness eCommerce with personalized product recommendations",
    longDescription: "Created a personalized wellness platform with AI-driven product recommendations, subscription boxes, and health tracking integration.",
    technologies: ["Shopify Plus", "React Native", "Python", "TensorFlow", "Stripe"],
    category: "web",
    status: "completed",
    featured: true,
    image: "/placeholder.jpg",
    metrics: [
      { label: "Personalization CTR", value: "+180%", improvement: "vs generic products" },
      { label: "Subscription Revenue", value: "+90%", improvement: "recurring revenue" },
      { label: "Customer LTV", value: "+75%", improvement: "lifetime value" }
    ],
    teamSize: 4,
    duration: "12 weeks",
    year: 2022,
    client: "Wellness Brand"
  }
]

export const experience: Experience[] = [
  {
    id: "agency-founder",
    company: "Zaltex Agency",
    position: "Founder & Lead Developer",
    location: "Remote",
    type: "full-time",
    startDate: "2022-01",
    current: true,
    description: "Founded premium eCommerce development agency specializing in conversion optimization and modern web experiences. Led 50+ successful projects with focus on Shopify Plus, WooCommerce, and custom React applications.",
    achievements: [
      "Built agency from 0 to $500K ARR in 18 months",
      "Delivered 50+ eCommerce projects with average 45% conversion improvement",
      "Established partnerships with major platforms (Shopify Plus, Magento)",
      "Built team of 8 specialized eCommerce developers and designers"
    ],
    technologies: ["Shopify Plus", "React", "Next.js", "WooCommerce", "Magento", "TypeScript", "Node.js"],
    companyUrl: "https://zaltex.agency"
  },
  {
    id: "ecommerce-specialist",
    company: "DigitalCraft Studios",
    position: "Senior eCommerce Developer",
    location: "San Francisco, CA",
    type: "full-time", 
    startDate: "2020-03",
    endDate: "2021-12",
    current: false,
    description: "Specialized in high-conversion eCommerce development for enterprise clients. Led technical architecture for platforms processing $10M+ annual revenue.",
    achievements: [
      "Architected Shopify Plus solutions for Fortune 500 clients",
      "Improved client conversion rates by average of 35%",
      "Led development of custom checkout flows and payment integrations",
      "Mentored junior developers on eCommerce best practices"
    ],
    technologies: ["Shopify Plus", "Liquid", "React", "GraphQL", "AWS", "Stripe", "Klaviyo"],
    companyUrl: "https://digitalcraft.example.com"
  },
  {
    id: "fullstack-developer",
    company: "EcomTech Solutions",
    position: "Full-Stack Developer",
    location: "Austin, TX",
    type: "full-time",
    startDate: "2018-06",
    endDate: "2020-02",
    current: false,
    description: "Full-stack development of eCommerce platforms and integrations. Focused on performance optimization and third-party API integrations.",
    achievements: [
      "Built custom WooCommerce solutions for 20+ clients",
      "Integrated payment gateways, shipping APIs, and inventory systems",
      "Optimized site performance achieving 90+ PageSpeed scores",
      "Developed custom WordPress plugins for eCommerce functionality"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL", "React"],
    companyUrl: "https://ecomtech.example.com"
  }
]

export const skills: SkillCategory[] = [
  {
    name: "eCommerce Platforms",
    icon: ShoppingCart,
    skills: [
      { name: "Shopify Plus", category: "frontend", level: "expert", years: 5 },
      { name: "WooCommerce", category: "frontend", level: "expert", years: 6 },
      { name: "Magento 2", category: "frontend", level: "advanced", years: 3 },
      { name: "BigCommerce", category: "frontend", level: "advanced", years: 2 },
      { name: "Custom React Stores", category: "frontend", level: "expert", years: 4 }
    ]
  },
  {
    name: "Frontend Development", 
    icon: Monitor,
    skills: [
      { name: "React", category: "frontend", level: "expert", years: 6 },
      { name: "Next.js", category: "frontend", level: "expert", years: 4 },
      { name: "TypeScript", category: "frontend", level: "expert", years: 5 },
      { name: "Tailwind CSS", category: "frontend", level: "expert", years: 3 },
      { name: "Framer Motion", category: "frontend", level: "advanced", years: 2 }
    ]
  },
  {
    name: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", category: "backend", level: "expert", years: 6 },
      { name: "GraphQL", category: "backend", level: "advanced", years: 3 },
      { name: "Stripe Integration", category: "backend", level: "expert", years: 5 },
      { name: "Shopify APIs", category: "backend", level: "expert", years: 4 },
      { name: "REST APIs", category: "backend", level: "expert", years: 7 }
    ]
  },
  {
    name: "Optimization & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Conversion Rate Optimization", category: "tools", level: "expert", years: 5 },
      { name: "Google Analytics 4", category: "tools", level: "advanced", years: 4 },
      { name: "A/B Testing", category: "tools", level: "advanced", years: 3 },
      { name: "Performance Optimization", category: "tools", level: "expert", years: 6 },
      { name: "SEO Optimization", category: "tools", level: "advanced", years: 4 }
    ]
  }
]

export const testimonials: Testimonial[] = [
  {
    id: "sarah-chen-luxe",
    name: "Sarah Chen",
    position: "Founder & CEO",
    company: "Luxe Fashion Co.", 
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Zaltex transformed our entire online presence. The new design increased our conversion rate by 48% in the first month, and our mobile sales have never been better. Their attention to detail and understanding of eCommerce is exceptional.",
    featured: true,
    linkedinUrl: "https://linkedin.com/in/sarah-chen"
  },
  {
    id: "mike-rodriguez-coffee",
    name: "Mike Rodriguez",
    position: "Co-Founder",
    company: "Artisan Coffee Co.",
    image: "/placeholder-user.jpg", 
    rating: 5,
    text: "Working with Zaltex was a game-changer for our subscription business. They built exactly what we needed - a platform that our customers love and that scales with our growth. Revenue is up 85% since launch.",
    featured: true,
    linkedinUrl: "https://linkedin.com/in/mike-rodriguez"
  },
  {
    id: "emma-thompson-tech",
    name: "Emma Thompson",
    position: "Head of Digital",
    company: "TechGear Pro",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "The B2B marketplace Zaltex built for us has revolutionized how we handle bulk orders. What used to take days now happens in minutes. Our efficiency has increased dramatically and our clients are thrilled.",
    featured: true,
    linkedinUrl: "https://linkedin.com/in/emma-thompson"
  }
]

export const services: Service[] = [
  {
    id: "shopify-development",
    title: "Shopify Plus Development",
    description: "Custom Shopify Plus stores designed for high-volume merchants and enterprise brands",
    features: [
      "Custom theme development",
      "Advanced app integrations", 
      "Multi-channel selling setup",
      "Performance optimization",
      "Conversion rate optimization",
      "Ongoing maintenance & support"
    ],
    technologies: ["Shopify Plus", "Liquid", "React", "TypeScript", "GraphQL"],
    deliverables: [
      "Fully custom Shopify Plus store",
      "Mobile-optimized responsive design", 
      "App integrations (CRM, Email, Analytics)",
      "Training documentation & videos"
    ],
    timeline: "4-8 weeks",
    pricing: {
      type: "project",
      range: "$8,000 - $25,000"
    },
    icon: ShoppingCart,
    popular: true
  },
  {
    id: "custom-ecommerce",
    title: "Custom eCommerce Development",
    description: "Bespoke eCommerce solutions built with modern technologies for unique business requirements",
    features: [
      "Custom React/Next.js development",
      "Headless commerce architecture",
      "Third-party integrations",
      "Custom payment solutions",
      "Advanced analytics & reporting",
      "Scalable cloud infrastructure"
    ],
    technologies: ["React", "Next.js", "Node.js", "Stripe", "AWS", "Vercel"],
    deliverables: [
      "Custom-built eCommerce platform",
      "Admin dashboard & CMS", 
      "Payment & shipping integrations",
      "Performance monitoring setup"
    ],
    timeline: "8-16 weeks",
    pricing: {
      type: "project",
      range: "$15,000 - $50,000"
    },
    icon: Code
  },
  {
    id: "store-optimization",
    title: "Conversion Rate Optimization",
    description: "Data-driven optimization to increase sales and improve user experience on existing stores",
    features: [
      "Comprehensive UX audit",
      "A/B testing implementation",
      "Performance optimization",
      "Mobile experience enhancement",
      "Checkout flow optimization",
      "Analytics & reporting setup"
    ],
    technologies: ["Google Analytics", "Hotjar", "Optimizely", "PageSpeed Tools"],
    deliverables: [
      "Detailed audit report",
      "Implementation roadmap", 
      "A/B testing results",
      "Performance improvements"
    ],
    timeline: "2-4 weeks",
    pricing: {
      type: "project", 
      range: "$3,000 - $12,000"
    },
    icon: TrendingUp
  }
] 