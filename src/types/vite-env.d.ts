/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string;
  readonly VITE_KAKAO_INTEGRITY_VALUE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
