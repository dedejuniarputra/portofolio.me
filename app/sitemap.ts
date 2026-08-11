import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dedejuniarputra.me';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'id-ID': baseUrl,
          'en-US': baseUrl,
          'x-default': baseUrl,
        },
      },
    },
  ];
}