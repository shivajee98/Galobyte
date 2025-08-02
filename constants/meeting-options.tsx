import { Calendar, Phone, Video } from "lucide-react";

export const meetingOptions = [
    {
      title: "Discovery Call",
      duration: "30 minutes",
      description:
        "Perfect for initial project discussions and understanding your vision",
      icon: Phone,
      calendlyUrl: "https://calendly.com/info-galobyte/discovery-call",
    },
    {
      title: "Strategy Session",
      duration: "60 minutes",
      description:
        "Deep dive into your project requirements and strategic planning",
      icon: Video,
      calendlyUrl: "https://calendly.com/galobyte/strategy-session",
    },
    {
      title: "Technical Consultation",
      duration: "45 minutes",
      description: "Technical architecture review and implementation planning",
      icon: Calendar,
      calendlyUrl: "https://calendly.com/galobyte/technical-consultation",
    },
  ];
