export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ManualStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  initials: string;
  platform: 'iOS' | 'Android';
  rating: number;
}

export interface PrivacyRow {
  dataType: string;
  stored: boolean;
  transmitted: boolean;
  purpose: string;
}
