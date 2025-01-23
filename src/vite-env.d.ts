/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLERK_PUBLISHABLE_KEY: string;
    readonly VITE_IMAGE_KIT_END_POINT: string;
    readonly VITE_IMAGEKIT_PUBLIC_KEY: string;
    // Add other environment variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  