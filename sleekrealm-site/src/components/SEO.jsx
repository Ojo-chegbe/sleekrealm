import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { CORE_ROUTES, PROJECTS_DATA, SERVICES_DATA, SITE } from '../data/siteData';

const ensureMeta = (selector, create) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  return element;
};

const setMeta = (name, content) => {
  if (!content) return;
  const element = ensureMeta(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    return meta;
  });
  element.setAttribute('content', content);
};

const setProperty = (property, content) => {
  if (!content) return;
  const element = ensureMeta(`meta[property="${property}"]`, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    return meta;
  });
  element.setAttribute('content', content);
};

const setLink = (rel, href) => {
  const element = ensureMeta(`link[rel="${rel}"]`, () => {
    const link = document.createElement('link');
    link.setAttribute('rel', rel);
    return link;
  });
  element.setAttribute('href', href);
};

const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();

const imageUrl = (image) => {
  if (!image) return absoluteUrl('/favicon.svg');
  if (/^https?:\/\//.test(image)) return image;
  return absoluteUrl(image);
};

const getPageMeta = (pathname) => {
  const serviceMatch = matchPath('/services/:id', pathname);
  if (serviceMatch) {
    const service = SERVICES_DATA.find((item) => item.id === serviceMatch.params.id);
    if (service) {
      return {
        path: `/services/${service.id}`,
        title: `${service.seoTitle} | Sleekrealm Interiors`,
        description: `${service.intro} Book Sleekrealm Interiors for ${service.keyword} and premium interior styling in Jos, Plateau State.`,
        image: service.cover,
        service,
      };
    }
  }

  const project = PROJECTS_DATA.find((item) => item.path === pathname);
  if (project) {
    return {
      path: project.path,
      title: `${project.title} | Sleekrealm Interiors`,
      description: project.description,
      image: project.image,
      project,
    };
  }

  return CORE_ROUTES.find((item) => item.path === pathname) || {
    path: pathname,
    title: `Page Not Found | ${SITE.name}`,
    description: 'This Sleekrealm Interiors page could not be found. Explore interior design services, portfolio projects, and contact details for our Jos studio.',
    image: SITE.defaultImage,
    notFound: true,
  };
};

const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  image: imageUrl(SITE.defaultImage),
  logo: imageUrl(SITE.logoImage),
  email: SITE.email,
  telephone: SITE.phonePrimary,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 15 Hest P Plaza, Lamingo Road',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Jos' },
    { '@type': 'AdministrativeArea', name: 'Plateau State' },
    { '@type': 'Country', name: 'Nigeria' },
  ],
  sameAs: [SITE.instagram, SITE.facebook, SITE.tiktok, SITE.whatsapp],
  priceRange: '$$',
  makesOffer: SERVICES_DATA.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.desc,
      areaServed: 'Jos, Plateau State, Nigeria',
    },
  })),
});

const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/services/${service.id}#service`,
  name: service.seoTitle,
  serviceType: service.title,
  description: service.intro,
  image: imageUrl(service.cover),
  areaServed: {
    '@type': 'City',
    name: 'Jos',
  },
  provider: {
    '@id': `${SITE.url}/#business`,
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: absoluteUrl(`/services/${service.id}`),
  },
});

const faqSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: service.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

const projectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  '@id': `${SITE.url}${project.path}#project`,
  name: project.title,
  description: project.description,
  image: imageUrl(project.image),
  creator: {
    '@id': `${SITE.url}/#business`,
  },
  about: project.type,
});

const breadcrumbSchema = (pathname, meta) => {
  const parts = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE.url,
    },
  ];

  parts.forEach((part, index) => {
    const path = `/${parts.slice(0, index + 1).join('/')}`;
    const name = index === parts.length - 1 ? meta.title.replace(` | ${SITE.name}`, '') : part.replace(/-/g, ' ');
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: absoluteUrl(path),
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

const updateJsonLd = (schemas) => {
  document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((script) => script.remove());
  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    const canonical = absoluteUrl(meta.path || location.pathname);
    const title = meta.title;
    const description = meta.description;
    const previewImage = imageUrl(meta.image);

    document.title = title;
    document.documentElement.lang = 'en-NG';
    setMeta('description', description);
    setMeta('robots', meta.notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('author', SITE.name);
    setMeta('geo.region', 'NG-PL');
    setMeta('geo.placename', 'Jos, Plateau State');
    setMeta('geo.position', '9.8965;8.8583');
    setMeta('ICBM', '9.8965, 8.8583');
    setLink('canonical', canonical);

    setProperty('og:site_name', SITE.name);
    setProperty('og:type', meta.project ? 'article' : 'website');
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:url', canonical);
    setProperty('og:image', previewImage);
    setProperty('og:locale', 'en_NG');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', previewImage);

    const schemas = [localBusinessSchema(), breadcrumbSchema(meta.path || location.pathname, meta)];
    if (meta.service) {
      schemas.push(serviceSchema(meta.service), faqSchema(meta.service));
    }
    if (meta.project) {
      schemas.push(projectSchema(meta.project));
    }
    updateJsonLd(schemas);
  }, [location.pathname]);

  return null;
}
