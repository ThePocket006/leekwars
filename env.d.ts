/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly NODE_ENV: string
    readonly VITE_BASE_REF: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
