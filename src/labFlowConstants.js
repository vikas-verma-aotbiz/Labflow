import { 
  Stethoscope, 
  ClipboardCheck, 
  FileText, 
  Users, 
  Activity, 
  CreditCard,
  CheckCircle2,
  PlayCircle
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Why Us", href: "#why-us" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const HERO_CONTENT = {
  badge: "Trusted by 500+ Diagnostic Centers",
  headline: {
    main: "Run Your Diagnostic Lab",
    highlight: "with Absolute Precision."
  },
  subheadline: "The smartest way to manage patient counts, track daily tests, and print perfectly formatted reports. Say goodbye to messy paperwork and delayed results.",
  primaryCTA: "Start Your Free Trial",
  secondaryCTA: "Watch How It Works"
};

export const WHY_US_CONTENT = {
  title: "Stop Fighting with Your Software.",
  description: "Most lab software is clunky and outdated. Aotbiz LabFlow is designed to be visually clean and incredibly fast. Whether you are handling 10 patients a day or 500, you get a bird's-eye view of your entire pathology operation instantly."
};

export const FEATURE_BLOCKS = [
  {
    icon: Users,
    title: "Total Patient & Test Control",
    description: "Instantly see your daily patient count. Select exactly konsa test (which test) needs to be done with a single click, completely eliminating manual entry errors."
  },
  {
    icon: CreditCard,
    title: "Flexible & Custom Pricing",
    description: "Kya price? You decide. Easily set custom pricing for individual tests, create discounted health packages, or adjust rates on the fly for specific patients."
  },
  {
    icon: FileText,
    title: "Perfectly Formatted Reports",
    description: "Stop struggling with printer alignments. Our system generates beautiful, professional reports with custom formatting that perfectly matches your lab's letterhead."
  }
];

export const CLOSING_CONTENT = {
  headline: "Modernize your lab.",
  subheadline: "Impress your patients. Simplify your day.",
  cta: "Upgrade Your Lab Today"
};

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Support", href: "#" },
];
