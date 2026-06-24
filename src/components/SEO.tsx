import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const SEO = ({
  title,
  description,
  keywords,
  ogType = "website",
  ogImage = "/opengraph-image.png",
  schema
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    const prevTitle = document.title;
    document.title = `${title} | Dr. Faiyaz Ahmad - Neurologist Patna`;

    // Helper to create or update meta tag
    const setMetaTag = (nameAttr: string, nameValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Set Standard Meta Tags
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }
    setMetaTag("name", "author", "Dr. Faiyaz Ahmad");

    // 3. Set Open Graph (OG) Tags
    const currentUrl = window.location.href;
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:image", ogImage.startsWith("http") ? ogImage : `${window.location.origin}${ogImage}`);

    // 4. Set Twitter Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage.startsWith("http") ? ogImage : `${window.location.origin}${ogImage}`);

    // 5. Manage Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 6. Inject Schema JSON-LD
    let scriptTags: HTMLScriptElement[] = [];
    if (schema) {
      const schemasArray = Array.isArray(schema) ? schema : [schema];
      schemasArray.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(s);
        document.head.appendChild(script);
        scriptTags.push(script);
      });
    }

    // Cleanup function when component unmounts
    return () => {
      document.title = prevTitle;
      scriptTags.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [title, description, keywords, ogType, ogImage, schema]);

  return null;
};

export default SEO;
