export type SocialLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
};

export type OpeningHours = {
  weekdays: string;
  saturday: string;
  sunday: string;
  emergencyNote: string;
};

export type BrandConfig = {
  brandName: string;
  domain: string;
  primaryLocation: string;
  serviceAreaLabel: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  postcode: string;
  companyNumber?: string;
  primaryColour: string;
  secondaryColour: string;
  accentColour: string;
  logoUrl?: string;
  tagline: string;
  emergencyAvailable: boolean;
  socialLinks: SocialLinks;
  openingHours: OpeningHours;
  showMobileCallBar: boolean;
};

export const BRAND: BrandConfig = {
  brandName: "Block Drains Swindon",
  domain: "exampledrainheroes.co.uk",
  primaryLocation: "Swindon",
  serviceAreaLabel: "Swindon and surrounding areas",
  phone: "01793 487489",
  email: "info@exampledrainheroes.co.uk",
  addressLine1: "Unit Z25, The Pembroke Center",
  addressLine2: "Cheney Manor Industrial Estate, Swindon",
  postcode: "SN2 2PQ",
  companyNumber: "",
  primaryColour: "#005BBB",
  secondaryColour: "#FFD500",
  accentColour: "#111827",
  logoUrl: "",
  tagline: "Fast, Reliable Drainage Solutions",
  emergencyAvailable: true,
  showMobileCallBar: true,
  socialLinks: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  openingHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Emergency only",
    emergencyNote: "24/7 Emergency Callouts Available",
  },
};
