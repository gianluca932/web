export default function sitemap() {
  const base = "https://giordanogianluca.com";
  return [
    {
      url: `${base}/en`,
      changefreq: "monthly",
      priority: 1,
      alternates: { languages: { en: `${base}/en`, it: `${base}/it` } },
    },
    {
      url: `${base}/it`,
      changefreq: "monthly",
      priority: 1,
      alternates: { languages: { en: `${base}/en`, it: `${base}/it` } },
    },
  ];
}
