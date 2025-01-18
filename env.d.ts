/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly VITE_PORT: number;
    readonly VITE_API_URL: string;
    readonly VITE_BASE_URL: string
    readonly VITE_TOKEN_LABEL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}