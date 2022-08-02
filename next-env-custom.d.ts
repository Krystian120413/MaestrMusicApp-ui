/// <reference types="next" />
// image-types/global has been replaced, beacuse of mismatched SVG type
type AppProps = import('next/app').AppProps;
type NextPage = import('next').NextPage;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
}

interface Window {
  dataLayer: unknown[][];
}

declare type NextPageWithLayout = NextPage & {
  getLayout?: (props: { children: React.ReactNode }) => React.ReactElement;
};

declare type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

declare module '*.png' {
  const content: StaticImageData;

  export default content;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.jpeg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.gif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: StaticImageData;

  export default content;
}

declare module '*.avif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.ico' {
  const content: StaticImageData;

  export default content;
}

declare module '*.bmp' {
  const content: StaticImageData;

  export default content;
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
