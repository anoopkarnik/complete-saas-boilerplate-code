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
  }

  interface FeatureWithDescriptionProps {
    title: string;
    description: string;
  }
  
  interface FeaturesProps {
    features: FeatureWithDescriptionProps[];
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
  }
  