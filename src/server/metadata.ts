import { Metadata } from 'next';

import { OG_URL, getCanonicalUrl } from '@/const/url';
import { formatDescLength, formatTitleLength } from '@/utils/genOG';

export class Meta {
  public generate({
    description = 'Mr.🆖 AI offers you the best ChatGPT, OLLaMA, Gemini, Claude WebUI user experience',
    title,
    image = OG_URL,
    url,
    type = 'website',
    tags,
  }: {
    description?: string;
    image?: string;
    tags?: string[];
    title: string;
    type?: 'website' | 'article';
    url: string;
  }): Metadata {
    // eslint-disable-next-line no-param-reassign
    const formatedTitle = formatTitleLength(title, 21);
    // eslint-disable-next-line no-param-reassign
    const formatedDescription = formatDescLength(description, tags);
    const siteTitle = title.includes('Mr.🆖 AI') ? title : title + ' · Mr.🆖 AI';
    return {
      alternates: { canonical: getCanonicalUrl(url) },
      description: formatedDescription,
      openGraph: this.genOpenGraph({
        description,
        image,
        title: siteTitle,
        type,
        url,
      }),
      other: {
        robots: 'index,follow',
      },
      title: formatedTitle,
      twitter: this.genTwitter({ description, image, title: siteTitle, url }),
    };
  }

  private genTwitter({
    description,
    title,
    image,
    url,
  }: {
    description: string;
    image: string;
    title: string;
    url: string;
  }) {
    return {
      card: 'summary_large_image',
      description,
      images: [image],
      site: '@mrng',
      title,
      url,
    };
  }

  private genOpenGraph({
    description,
    title,
    image,
    url,
    type = 'website',
  }: {
    description: string;
    image: string;
    title: string;
    type?: 'website' | 'article';
    url: string;
  }) {
    return {
      description,
      images: [
        {
          alt: title,
          url: image,
        },
      ],
      locale: 'en-US',
      siteName: 'Mr.🆖 AI',
      title,
      type,
      url,
    };
  }
}

export const metadataModule = new Meta();
