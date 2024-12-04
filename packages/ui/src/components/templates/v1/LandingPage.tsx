"use client"
import Navbar from '../../organisms/custom/landing/Navbar';
import Hero from '../../organisms/custom/landing/Hero';
import Features from '../../organisms/custom/landing/Features';
import Testimonials from '../../organisms/custom/landing/Testimonials';
import Pricing from '../../organisms/custom/landing/Pricing';
import FAQ from '../../organisms/custom/landing/FAQ';
import Footer from '../../organisms/custom/landing/Footer';

interface RouteProps {
  href: string;
  label: string;
}

interface LandingPageProps {
  routeList: RouteProps[];
  githubLink: string;
  documentationLink: string;
  title: string;
  logo: string;
  darkLogo: string;
  loginFunction: () => void;
  tagline: string;
  description: string;
  featuresWithDescription: any;
  featureList: string[];
}

const LandingPage = ({routeList,githubLink,loginFunction,documentationLink,title,logo,darkLogo,tagline,description}: LandingPageProps) => {
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar routeList={routeList} githubLink={githubLink} title={title} logo={logo} 
      darkLogo={darkLogo} />
      <Hero loginFunction={loginFunction} documentationLink={documentationLink}
      tagline={tagline} description={description} />
      {/* <Features featureList={fea}/> */}
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default LandingPage