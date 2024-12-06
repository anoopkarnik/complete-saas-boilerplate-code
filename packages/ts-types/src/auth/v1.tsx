export interface QuoteProps {
    quote: string,
    author: string,
    credential: string
}

export interface LoginCardProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    forgotPasswordFunction?: any;
    backFunction?:()=>void;
    errorMessage?:string;
  }
  
export interface LoadingCardProps {
    title: string;
    description: string;
}

export interface RegisterCardProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    backFunction?:() => void;
    errorMessage?:string;
  }

export interface VerificationCardProps {
    error?:string;  
    success?:string;
    backFunction?:() => void;
}

export interface FormResultProps{
    type: 'error' | 'success',
    message?: string;
}

export interface ForgotPasswordCardProps {
    errorMessage?:string;  
    successMessage?:string;
    resetFunction?:any; 
    backFunction?:any;
  }

 export interface ErrorCardProps {
    errorMessage?:string;
    backFunction?:any
  }

export interface LoginPageProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    forgotPasswordFunction?: any;
    backFunction?:()=>void;
    errorMessage?:string;
    title: string;
    description: string;
    quote: string,
    author: string,
    credential: string
}

export interface RegisterPageProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    backFunction?:() => void;
    errorMessage?:string;
    title: string;
    description: string;
    quote: string,
    author: string,
    credential: string
}