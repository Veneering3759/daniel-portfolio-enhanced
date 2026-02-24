import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://daniel-aryee.vercel.app'
  const now = new Date()

  return [
    { url: base,                                  lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/case-study/revenue-intel`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-study/leadmanager`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-study/evently`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
