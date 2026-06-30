import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';

/**
 * Reusable SEO component for managing document head tags
 * Uses react-helmet-async to inject tags into the <head>
 */
const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = BRAND.logo,
  type = 'website',
  schemaData = null
}) => {
  const siteTitle = `${title} | ${BRAND.name}`;
  const fullCanonicalUrl = canonicalUrl ? `https://${BRAND.domain}${canonicalUrl}` : `https://${BRAND.domain}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://${BRAND.domain}${ogImage}`;

  // Default LocalBusiness schema if none provided
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    image: fullOgImage,
    '@id': fullCanonicalUrl,
    url: fullCanonicalUrl,
    telephone: BRAND.phoneClean,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.city,
      addressRegion: BRAND.state,
      addressCountry: BRAND.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND.geo.lat,
      longitude: BRAND.geo.lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '20:00'
    },
    sameAs: [
      `https://${BRAND.domain}`
    ]
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={BRAND.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content={BRAND.city} />
      <meta name="geo.position" content={`${BRAND.geo.lat};${BRAND.geo.lng}`} />
      <meta name="ICBM" content={`${BRAND.geo.lat}, ${BRAND.geo.lng}`} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-in" />
      
      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
