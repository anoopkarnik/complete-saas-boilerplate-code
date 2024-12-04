"use client"
import LandingPage from "@repo/ui/templates/v1/LandingPage";
import { routeList,featuresWithDescription,featureList} from "../lib/constants/landing-page";
import { useRouter } from "next/navigation";

export default function Home() {


  const githubLink = "https://github.com/anoopkarnik/complete-saas-boilerplate-code"
  const loginPath= "/login"
  const title = "COMPLETE SAAS BOILERPLATE CODE"
  const logo = "/logo.png"
  const darkLogo = "/logo.png"
  const documentationLink = "http://localhost:3001"
  const router = useRouter()
  const tagline = "Best Monorepo Complete SAAS Boilerplate Code"
  const description = "Build your Complete Microsaas Application effortlessly by keeping and modifying the required components,packages and apps to your project."
  
  const  loginFunction = () => {
      router.push(loginPath)
  }

  return (
    <div>
      <LandingPage 
        routeList={routeList} 
        githubLink={githubLink} 
        documentationLink={documentationLink}
        title={title}
        logo={logo}
        darkLogo={darkLogo}
        loginFunction={loginFunction}
        tagline={tagline}
        description={description}
        featuresWithDescription={featuresWithDescription}
        featureList={featureList}
      />
    </div>
  );
}
