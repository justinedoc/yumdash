interface ImportMetaEnv {
  readonly VITE_REVERSE_GEOLOCATION_API_KEY: string;
  // other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
