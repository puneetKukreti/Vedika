import type { LucideIcon } from 'lucide-react';
import { BookText, FileText, UsersRound, Landmark, BriefcaseBusiness, BadgeIndianRupee, MapPin, Cpu, Gift, Phone, Mail, MessageCircle, Search } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/locations', label: 'Locations' },
  { href: '/quote', label: 'Get AI Quote' },
  { href: '/contact', label: 'Contact Us' },
];

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  imageHint?: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    shortDescription: 'Accurate and timely bookkeeping services to keep your finances in order.',
    icon: BookText,
    overview: 'Our comprehensive bookkeeping services ensure your financial records are meticulously maintained, providing you with a clear picture of your business\'s financial health. We handle everything from data entry to financial statement preparation.',
    benefits: ['Accurate financial records', 'Informed business decisions', 'Compliance with regulations', 'Time and cost savings'],
    process: ['Initial consultation and setup', 'Regular data entry and reconciliation', 'Monthly financial reporting', 'Year-end review and adjustments'],
    faqs: [
      { question: 'How often will my books be updated?', answer: 'We offer flexible update schedules, including daily, weekly, or monthly, based on your business needs.' },
      { question: 'What accounting software do you use?', answer: 'We are proficient in various popular accounting software like Tally, QuickBooks, Zoho Books, and Xero.' },
    ],
    imageHint: 'accounting books',
  },
  {
    id: 'gst-tds',
    title: 'GST & TDS Filing',
    shortDescription: 'Hassle-free GST and TDS filing, ensuring full compliance.',
    icon: FileText,
    overview: 'Navigate the complexities of Goods and Services Tax (GST) and Tax Deducted at Source (TDS) with our expert assistance. We ensure timely and accurate filings to keep you compliant and avoid penalties.',
    benefits: ['Timely compliance', 'Avoidance of penalties', 'Accurate tax calculations', 'Expert guidance on GST & TDS matters'],
    process: ['Documentation collection', 'Return preparation and review', 'Filing with government portals', 'Acknowledgement and record keeping'],
    faqs: [
      { question: 'What are the due dates for GST returns?', answer: 'Due dates vary based on the type of GST return. We keep you informed and ensure timely filings.' },
      { question: 'Can you help with TDS on salary?', answer: 'Yes, we manage all aspects of TDS, including TDS on salary, contractor payments, rent, etc.' },
    ],
    imageHint: 'tax documents',
  },
  {
    id: 'payroll',
    title: 'Payroll',
    shortDescription: 'Efficient payroll processing tailored to your business needs.',
    icon: UsersRound,
    overview: 'Streamline your payroll processes with our reliable and efficient services. We handle salary calculations, statutory deductions, payslip generation, and compliance, allowing you to focus on your core business.',
    benefits: ['Accurate salary processing', 'Compliance with labor laws', 'Timely payments to employees', 'Reduced administrative burden'],
    process: ['Employee data management', 'Monthly salary calculation', 'Deduction and compliance management', 'Payslip generation and distribution'],
    faqs: [
      { question: 'How do you ensure payroll data confidentiality?', answer: 'We use secure systems and follow strict data privacy protocols to ensure the confidentiality of your payroll information.' },
      { question: 'Can you handle variable pay components?', answer: 'Yes, our payroll system can handle various pay components, including bonuses, incentives, and reimbursements.' },
    ],
    imageHint: 'payroll management',
  },
  {
    id: 'it-returns',
    title: 'IT Returns',
    shortDescription: 'Expert assistance for individual and corporate income tax returns.',
    icon: Landmark,
    overview: 'Simplify your income tax filing process with our expert services. We cater to both individuals and businesses, ensuring accurate calculations, maximum eligible deductions, and timely filing of IT returns.',
    benefits: ['Accurate tax computation', 'Maximizing tax savings', 'Timely e-filing', 'Expert advice on tax planning'],
    process: ['Income and deduction data collection', 'Tax computation and review', 'IT return preparation and e-filing', 'Support for post-filing queries'],
    faqs: [
      { question: 'What documents are needed for IT return filing?', answer: 'Common documents include PAN card, Aadhaar card, bank statements, Form 16/16A, investment proofs, etc. We provide a checklist based on your profile.' },
      { question: 'Do you help with tax planning?', answer: 'Yes, we offer tax planning advice to help you legally minimize your tax liabilities.' },
    ],
    imageHint: 'income tax',
  },
  {
    id: 'business-registration',
    title: 'Business Registration',
    shortDescription: 'Seamless business registration services to kickstart your venture.',
    icon: BriefcaseBusiness,
    overview: 'Launch your business smoothly with our end-to-end registration services. We assist with various business structures like Private Limited Company, LLP, Partnership Firm, and Sole Proprietorship, handling all legal formalities.',
    benefits: ['Hassle-free registration process', 'Guidance on choosing the right business structure', 'Compliance with all legal requirements', 'Quick turnaround time'],
    process: ['Consultation and structure finalization', 'Documentation and name approval', 'Filing applications with ROC/relevant authorities', 'Obtaining registration certificates and licenses'],
    faqs: [
      { question: 'How long does business registration take?', answer: 'The timeline varies depending on the business structure and government processing times, typically ranging from a few days to a few weeks.' },
      { question: 'What are the post-registration compliances?', answer: 'We guide you on all post-registration compliances, such as bank account opening, GST registration, and other statutory requirements.' },
    ],
    imageHint: 'business startup',
  },
];

export interface PricingPlan {
  service: string;
  planType: 'Monthly' | 'Quarterly' | 'Yearly' | 'Per Return' | 'One-time';
  startingPrice: string;
  features: string[];
  ctaLink?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  { service: 'Bookkeeping', planType: 'Monthly', startingPrice: '₹1,999', features: ['Up to 50 transactions', 'Bank reconciliation', 'Basic reporting'] },
  { service: 'GST Filing', planType: 'Per Return', startingPrice: '₹499', features: ['GSTR-1 & GSTR-3B', 'Reconciliation', 'Error checking'] },
  { service: 'Payroll', planType: 'Monthly', startingPrice: '₹99 /employee', features: ['Salary processing', 'Payslip generation', 'Basic compliance'] },
  { service: 'Business Registration', planType: 'One-time', startingPrice: '₹3,999', features: ['Company/LLP/Firm', 'Documentation support', 'Basic consultation'] },
  { service: 'IT Returns (Individual)', planType: 'One-time', startingPrice: '₹799', features: ['Salary/Business Income', 'Capital Gains', 'Tax planning advice'] },
  { service: 'IT Returns (Corporate)', planType: 'One-time', startingPrice: '₹4,999', features: ['Company ITR Filing', 'Balance Sheet/P&L', 'Tax audit support'] },
];

export interface LocationData {
  city: string;
  slug: string;
  address: string;
  phone: string;
  mapImageHint: string;
  mapEmbedUrl?: string; // For actual map embed if ever implemented
}

export const LOCATIONS_DATA: LocationData[] = [
  { city: 'Hyderabad', slug: 'hyderabad', address: '123 Financial District, Gachibowli, Hyderabad, Telangana 500032', phone: '+91 98765 43210', mapImageHint: 'Hyderabad map' },
  { city: 'Noida', slug: 'noida', address: '456 Sector 62, Noida, Uttar Pradesh 201301', phone: '+91 98765 43211', mapImageHint: 'Noida map' },
  { city: 'Bengaluru', slug: 'bengaluru', address: '789 MG Road, Bengaluru, Karnataka 560001', phone: '+91 98765 43212', mapImageHint: 'Bengaluru map' },
  { city: 'Chennai', slug: 'chennai', address: '101 Anna Salai, Chennai, Tamil Nadu 600002', phone: '+91 98765 43213', mapImageHint: 'Chennai map' },
  { city: 'Pune', slug: 'pune', address: '202 Hinjewadi Phase 1, Pune, Maharashtra 411057', phone: '+91 98765 43214', mapImageHint: 'Pune map' },
  { city: 'Mumbai', slug: 'mumbai', address: '303 Bandra Kurla Complex, Mumbai, Maharashtra 400051', phone: '+91 98765 43215', mapImageHint: 'Mumbai map' },
  { city: 'Delhi', slug: 'delhi', address: '404 Connaught Place, New Delhi, Delhi 110001', phone: '+91 98765 43216', mapImageHint: 'Delhi map' },
];

export interface USP {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WHY_CHOOSE_US_DATA: USP[] = [
  { title: 'Affordable & Transparent', description: 'Clear pricing with no hidden costs. Quality services at competitive rates.', icon: BadgeIndianRupee },
  { title: 'Metro City Presence', description: 'Serving clients across major Indian metro cities with localized expertise.', icon: MapPin },
  { title: 'Tech-Enabled Operations', description: 'Utilizing modern technology for efficient service delivery and client communication.', icon: Cpu },
  { title: 'Referral Incentives', description: 'Earn rewards by referring new clients to Vedika Vista. Grow with us!', icon: Gift },
];

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  imageHint: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Priya Sharma', role: 'Founder & CEO', imageUrl: 'https://placehold.co/300x300.png', bio: 'Priya is a seasoned chartered accountant with over 15 years of experience...', imageHint: 'female professional' },
  { name: 'Rajesh Kumar', role: 'Head of GST Compliance', imageUrl: 'https://placehold.co/300x300.png', bio: 'Rajesh specializes in GST matters and indirect taxation, helping businesses navigate complex tax laws.', imageHint: 'male professional' },
  { name: 'Anita Singh', role: 'Client Relations Manager', imageUrl: 'https://placehold.co/300x300.png', bio: 'Anita ensures seamless client onboarding and satisfaction, fostering long-term partnerships.', imageHint: 'professional woman' },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/careers', label: 'Careers (Soon)' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog (Soon)' },
      { href: '/faq', label: 'FAQs' },
      { href: '/contact', label: 'Support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy (Soon)' },
      { href: '/terms-of-service', label: 'Terms of Service (Soon)' },
    ],
  },
];

export const CONTACT_DETAILS = {
  email: 'support@vedikaconsulting.in',
  phone: '+91 900 000 0000', // Placeholder
  whatsapp: '+91 900 000 0001', // Placeholder
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
  address: 'Main Office: 123 Vedika Towers, Financial Hub, India' // Placeholder
};

export const SOCIAL_LINKS: { name: string; icon: LucideIcon; href: string }[] = [
    // Add social links here if needed, e.g. LinkedIn, Twitter
];

export const SERVICE_CATEGORIES_FOR_FORM = SERVICES_DATA.map(service => service.title);

// Icon mapping for general use
export const ICONS = {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Search,
};
