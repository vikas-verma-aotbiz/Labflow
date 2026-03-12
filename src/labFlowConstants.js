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
  { label: "Reports", href: "#reports" },
  { label: "Features", href: "#features" },
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
    description: "Instantly see your daily patient count. Select the exact test with a single click and eliminate manual entry errors."
  },
  {
    icon: CreditCard,
    title: "Flexible & Custom Pricing",
    description: "You control the pricing. Set custom rates for individual tests, create discounted health packages, or adjust pricing for specific patients."
  },
  {
    icon: FileText,
    title: "Perfectly Formatted Reports",
    description: "Stop struggling with printer alignments. Our system generates beautiful, professional reports with custom formatting that perfectly matches your lab's letterhead."
  }
];

export const REPORT_EXPLAIN_CONTENT = {
  badge: "Smart Report Preview",
  title: "Reports Doctors Can Understand Instantly.",
  description:
    "Exactly the format your lab needs: clean layout, auto-flagged abnormal values, and clear interpretation notes before print.",
  highlights: [
    {
      title: "Abnormal Value Highlighting",
      description:
        "Low/High markers appear automatically, so critical results stand out instantly.",
    },
    {
      title: "Interpretation Notes Ready",
      description:
        "Each test can include prefilled notes, making report reading easier for doctors and patients.",
    },
    {
      title: "Print-Perfect Structure",
      description:
        "Lab logo, patient details, reference range, and signature block stay aligned on every report.",
    },
    {
      title: "Doctor-Friendly Summary",
      description:
        "A concise interpretation block gives doctors quick clinical context without scanning the full table.",
    },
  ],
  sampleReport: {
    patientName: "Ravi Sharma",
    patientId: "LF-2026-0182",
    ageSex: "38 / Male",
    testName: "Complete Blood Count (CBC)",
    collectedOn: "12 Mar 2026",
    reportedOn: "12 Mar 2026",
    results: [
      { parameter: "Hemoglobin", value: "11.2 g/dL", range: "13.0 - 17.0", flag: "Low" },
      { parameter: "WBC", value: "10,900 /uL", range: "4,000 - 10,000", flag: "High" },
      { parameter: "Platelets", value: "245,000 /uL", range: "150,000 - 450,000", flag: "Normal" },
      { parameter: "RBC", value: "4.9 M/uL", range: "4.5 - 5.9", flag: "Normal" },
    ],
    interpretation:
      "Mild anemia pattern observed. Correlate with iron profile if clinically indicated.",
  },
};

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
