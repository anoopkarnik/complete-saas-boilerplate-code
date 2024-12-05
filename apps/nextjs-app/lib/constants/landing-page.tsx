import { RouteProps, FeatureWithDescriptionProps,
    TestimonialProps, 
    PricingProps,
    FAQProps,
    FooterListProps,
    TeamProps} from "@repo/ts-types/landing-page/v1";



export const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    }
]

export const featuresWithDescription: FeatureWithDescriptionProps[] = [
    {
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
    {
      title: "Intuitive user interface",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
    {
      title: "AI-Powered insights",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
  ];
  
  export const featureList: string[] = [
    "Dark/Light theme",
    "Reviews",
    "Features",
    "Pricing",
    "Contact form",
    "Our team",
    "Responsive design",
    "Newsletter",
    "Minimalist",
  ];

  export const testimonials: TestimonialProps[] = [
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe",
      comment: "This landing page is awesome!",
    },
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe1",
      comment:
        "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe2",
      comment:
        "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe4",
      comment:
        "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe React",
      userName: "@john_Doe5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  

export const pricingList: PricingProps[] = [
    {
      title: "Free",
      popular: 1,
      price: 0,
      description:
        "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      buttonText: "Get Started",
      benefitList: [
        "1 Team member",
        "2 GB Storage",
        "Upto 4 pages",
        "Community support",
        "lorem ipsum dolor",
      ],
    },
    {
      title: "Premium",
      popular: 0,
      price: 5,
      description:
        "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      buttonText: "Start Free Trial",
      benefitList: [
        "4 Team member",
        "4 GB Storage",
        "Upto 6 pages",
        "Priority support",
        "lorem ipsum dolor",
      ],
    },
    {
      title: "Enterprise",
      popular: 0,
      price: 40,
      description:
        "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      buttonText: "Contact US",
      benefitList: [
        "10 Team member",
        "8 GB Storage",
        "Upto 10 pages",
        "Priority support",
        "lorem ipsum dolor",
      ],
    },
  ];

    
  export const FAQList: FAQProps[] = [
    {
      question: "Is this template free?",
      answer: "Yes. It is a free ChadcnUI template.",
      value: "item-1",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
      value: "item-2",
    },
    {
      question:
        "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
      value: "item-3",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      value: "item-4",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
      value: "item-5",
    },
  ];

  export const footerList: FooterListProps = {
    "Follow Us": [
        {
            label: "Twitter",
            href: "https://x.com/anooplegend1992"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/anoopkarnik/"
        },
        {
            label: "Github",
            href: "https://github.com/anoopkarnik"
        }
    ],
    "Documentation": [
        {
            label: "Overview",
            href: "https://docs.bsamaritan.com/docs/overview/"
        },
        {
            label: "Getting Started",
            href: "https://docs.bsamaritan.com/docs/category/getting-started"
        },
        {
            label: "Deployment",
            href: "https://docs.bsamaritan.com/docs/category/deployment"
        },
        {
            label: "Troubleshooting",
            href: "https://docs.bsamaritan.com/docs/troubleshooting"
        },
        {
            label: "FAQs",
            href: "https://docs.bsamaritan.com/docs/faqs"
        }
    ],
    "Legal": [
        {
            label: "Terms of Service",
            href: "https://www.termsofusegenerator.net/live.php?token=saSU4fpQYzVVm0jLgtV88ty1x4tEHMA7"
        },
        {
            label: "Privacy Policy",
            href: "https://www.termsfeed.com/live/f7faf120-c351-422d-bd3a-cb7a2c931284"
        }
    ],
  }

  export const teamList: TeamProps[] = [
    {
      imageUrl: "https://i.pravatar.cc/150?img=35",
      name: "Emma Smith",
      position: "Product Manager",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=60",
      name: "John Doe",
      position: "Tech Lead",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=36",
      name: "Ashley Ross",
      position: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
  
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=17",
      name: "Bruce Rogers",
      position: "Backend Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
      ],
    },
  ];