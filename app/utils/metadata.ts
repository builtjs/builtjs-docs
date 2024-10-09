import type { Metadata } from 'next/types';
// import { createMetadataImage } from 'fumadocs-core/server';
import { source } from '@/app/source';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    // openGraph: {
    //   title: override.title ?? undefined,
    //   description: override.description ?? undefined,
    //   url: 'https://builtjs.com',
    //   // images: '/banner.png',
    //   siteName: 'Built.js',
    //   ...override.openGraph,
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   creator: '@money_is_shark',
    //   title: override.title ?? undefined,
    //   description: override.description ?? undefined,
    //   images: '/banner.png',
    //   ...override.twitter,
    // },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);

// export const metadataImage = createMetadataImage({
//   source,
//   imageRoute: 'og',
// });
