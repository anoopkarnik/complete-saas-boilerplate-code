export interface RouteProps {
    href: string;
    label: string;
  }

export interface NavbarProps {
    routeList: RouteProps[];
    githubLink: string;
    title: string;
    logo: string;
    darkLogo: string;
  }
export interface HeroProps {
    loginFunction: () => void;
    documentationLink: string;
    tagline: string;
    description: string;
    testimonials: TestimonialProps[];
    pricingList: PricingProps[];
    teamList: TeamProps[];
    featuresWithDescription: FeatureWithDescriptionProps[];
  }

export interface FeatureWithDescriptionProps {
    title: string;
    description: string;
  }
  
export interface FeaturesProps {
    featuresWithDescription: FeatureWithDescriptionProps[];
    featureList: string[];
  }
  
export interface LandingPageProps {
    routeList: RouteProps[];
    githubLink: string;
    documentationLink: string;
    title: string;
    logo: string;
    darkLogo: string;
    loginFunction: () => void;
    tagline: string;
    description: string;
    featuresWithDescription: FeatureWithDescriptionProps[];
    featureList: string[];
    testimonials: TestimonialProps[];
    pricingList: PricingProps[];
    FAQList: FAQProps[];
    footerList: FooterListProps;
    creator: string;
    creatorLink: string;
    teamList: TeamProps[];
  }

export interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

export enum PopularPlanType {
  NO = 0,
  YES = 1,
}

export interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export interface FooterListProps {
  [key: string]: FooterProps[];
}

export interface FooterProps {
  label: string;
  href: string;
}

export interface FooterComponentProps {
  footerList: FooterListProps;
  creator: string;
  creatorLink: string;
  title: string;
  logo: string;
  darkLogo: string;
}

export interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

export interface SociaNetworkslProps {
  name: string;
  url: string;
}

export interface HeroCardsProps {
  testimonials: TestimonialProps[];
  pricingList: PricingProps[];
  featuresWithDescription: FeatureWithDescriptionProps[];
  teamList: TeamProps[];
}