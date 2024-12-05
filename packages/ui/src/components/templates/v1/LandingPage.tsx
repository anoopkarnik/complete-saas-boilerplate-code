"use client"
import Navbar from '../../organisms/custom/landing/Navbar';
import Hero from '../../organisms/custom/landing/Hero';
import Features from '../../organisms/custom/landing/Features';
import Testimonials from '../../organisms/custom/landing/Testimonials';
import Pricing from '../../organisms/custom/landing/Pricing';
import FAQ from '../../organisms/custom/landing/FAQ';
import Footer from '../../organisms/custom/landing/Footer';
import { LandingPageProps} from '@repo/ts-types/src/landing-page/v1';
import { useEffect } from 'react';
import { Team } from '../../organisms/custom/landing/Team';

const LandingPage = ({routeList,githubLink,loginFunction,documentationLink,title,logo,
  darkLogo,tagline,description,featuresWithDescription,featureList,testimonials,pricingList,
  FAQList, footerList, creator, creatorLink, teamList}: LandingPageProps) => {
    

  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar routeList={routeList} githubLink={githubLink} title={title} logo={logo} 
      darkLogo={darkLogo} />
      <Hero loginFunction={loginFunction} documentationLink={documentationLink}
      tagline={tagline} description={description} testimonials={testimonials}
       pricingList={pricingList} teamList={teamList}
       featuresWithDescription={featuresWithDescription} />
      <Features featureList={featureList} featuresWithDescription={featuresWithDescription} />
      <Testimonials testimonials={testimonials} />
      <Team teamList={teamList} />
      <Pricing pricingList={pricingList} />
      <FAQ FAQList={FAQList} />
      <Footer footerList={footerList} creator={creator} creatorLink={creatorLink} title={title} logo={logo}
       darkLogo={darkLogo} />

    </div>
  );
};

export default LandingPage