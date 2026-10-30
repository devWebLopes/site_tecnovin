/**
 * SeoHead.tsx — Componente padronizado para gerenciamento de Meta Tags,
 * Canonical, Open Graph, Twitter Card e Dados Estruturados (JSON-LD) por rota.
 */

import JsonLd from "./JsonLd";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  schema?: object | object[];
}

export default function SeoHead({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  keywords,
  schema,
}: SeoHeadProps) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl =
    normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
  const ogImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : DEFAULT_OG_IMAGE;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {schema && <JsonLd data={schema} />}
    </>
  );
}

