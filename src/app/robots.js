export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/invoice/',
    },
    sitemap: 'https://rapidinvoice.online/sitemap.xml',
  }
}