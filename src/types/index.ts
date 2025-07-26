// Core data types for the Bali retreat landing page

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Facilitator {
  name: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface PricingOption {
  price: number;
  deadline?: Date;
  currency: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface NewsletterFormData {
  email: string;
  source?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}