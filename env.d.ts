/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly VITE_PORT: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}