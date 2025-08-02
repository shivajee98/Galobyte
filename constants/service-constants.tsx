import { Service } from "@/lib/types";
import { Brain, Cloud, Code, GraduationCap, Search, Settings, Smartphone, Wrench } from "lucide-react";

export const services: Service[] = [
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Stellar mobile applications that transcend digital boundaries.",
      details:
        "iOS, Android, React Native, Flutter, Progressive Web Apps (PWA).",
      benefits: [
        "Native & cross-platform solutions for maximum reach.",
        "Premium UI/UX design to captivate and engage users.",
        "Scalable architecture designed for future growth.",
        "App Store optimization and seamless deployment.",
      ],
      /* optional demo data – prevents “undefined” reads */
      technologies: ["React Native", "Flutter"],
      metrics: [
        { value: "99%", label: "Crash-free" },
        { value: "2.5×", label: "Faster Dev" },
      ],
      features: [
        "Offline-first architecture",
        "Push-notification engine",
        "A/B testing built-in",
      ],
    },
    /* --- trim below data for brevity – keep the same structure --- */
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Complete solutions from frontend nebulae to backend black holes.",
      details: "React, Node.js, Python, Database Design, API Dev.",
      benefits: [
        "End-to-end development with unified architecture.",
        "Modern frameworks ensuring peak performance.",
        "RESTful and GraphQL API development.",
        "Database optimization and security implementation.",
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL"],
      metrics: [
        { value: "50%", label: "Faster Dev" },
        { value: "99.9%", label: "Uptime" },
      ],
      features: [
        "Microservices architecture",
        "Real-time data synchronization",
        "Advanced security protocols",
      ],
    },
    {
        icon: Smartphone,
        title: "E-commerce Development",
        description: "Stellar online stores & marketplace solutions",
        details: "Custom E-commerce, Multi-vendor Platforms",
        benefits: [
            "Mobile-responsive design optimized for conversions",
            "Secure payment gateway integration with multiple options",
            "Inventory management and order tracking systems",
            "SEO-optimized product pages for maximum visibility",
        ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Infinite scalability in the digital cosmos.",
      details: "AWS, Azure, Google Cloud, Serverless Architecture.",
      benefits: [
        "99.9% uptime with enterprise-grade reliability.",
        "Auto-scaling infrastructure that grows with demand.",
        "Cost optimization through intelligent resource management.",
        "Advanced security and compliance protocols.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Learning Management Systems",
      description: "Educational platforms that expand minds across galaxies.",
      details: "Custom LMS, E-learning Solutions, Training Portals.",
      benefits: [
        "Interactive learning experiences with gamification.",
        "Advanced analytics and progress tracking.",
        "Multi-device accessibility for seamless learning.",
        "Integration with existing educational tools.",
      ],
    },
    {
      icon: Settings,
      title: "DevOps Excellence",
      description: "Automated workflows orbiting in perfect harmony.",
      details: "CI/CD, Docker, Kubernetes, IaC.",
      benefits: [
        "Reduced deployment time by up to 90%.",
        "Automated testing and quality assurance.",
        "Zero-downtime deployments and rollbacks.",
        "Enhanced collaboration between development teams.",
      ],
    },
    {
      icon: Brain,
      title: "AI-Driven Solutions",
      description: "Intelligent systems powered by cosmic algorithms.",
      details:
        "Machine Learning, Natural Language Processing, Computer Vision.",
      benefits: [
        "Predictive analytics for data-driven decisions.",
        "Automated processes reducing operational costs.",
        "Custom AI models tailored to your business needs.",
        "Integration with existing systems and workflows.",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Visibility that outshines distant stars.",
      details: "Technical SEO, Content Strategy, Performance Optimization.",
      benefits: [
        "Increased organic traffic by up to 300%.",
        "Higher search engine rankings and visibility.",
        "Improved website performance and user experience.",
        "Comprehensive analytics and reporting.",
      ],
    },
    {
      icon: Wrench,
      title: "Application Maintenance",
      description: "Continuous support keeping systems in perfect orbit.",
      details: "Bug Fixes, Updates, Performance Monitoring, 24/7 Support.",
      benefits: [
        "Proactive monitoring preventing critical issues.",
        "Regular updates ensuring security and performance.",
        "Dedicated support team available around the clock.",
        "Performance optimization and scaling recommendations.",
      ],
    },
  ];
