import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vancouverhooddoctors.ca'),
  title: {
    default: 'Vancouver Hood Doctors | Commercial Kitchen Exhaust Cleaning',
    template: '%s | Vancouver Hood Doctors'
  },
  description: 'Professional commercial kitchen exhaust cleaning and certification services in Vancouver. ASTTBC certified technicians ensuring clean and safe commercial kitchens.',
  keywords: [
    'vent cleaning',
    'exhaust cleaning',
    'kitchen cleaning',
    'commercial kitchen',
    'Vancouver',
    'certification',
    'ASTTBC',
    'hood cleaning',
    'restaurant cleaning',
    'kitchen exhaust system',
    'commercial exhaust cleaning',
    'hood doctor',
    'kitchen maintenance',
    'fire safety',
    'NFPA 96',
    'kitchen inspection'
  ],
  authors: [{ name: 'Vancouver Hood Doctors' }],
  creator: 'Vancouver Hood Doctors',
  publisher: 'Vancouver Hood Doctors',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vancouver Hood Doctors | Commercial Kitchen Exhaust Cleaning',
    description: 'Professional commercial kitchen exhaust cleaning and certification services in Vancouver. ASTTBC certified technicians ensuring clean and safe commercial kitchens.',
    url: 'https://vancouverhooddoctors.ca',
    siteName: 'Vancouver Hood Doctors',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Vancouver Hood Doctors Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vancouver Hood Doctors | Commercial Kitchen Exhaust Cleaning',
    description: 'Professional commercial kitchen exhaust cleaning and certification services in Vancouver. ASTTBC certified technicians ensuring clean and safe commercial kitchens.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Commercial Kitchen Services',
  other: {
    'google-site-verification': 'uBY82mI9pZfD9GfO4QTX78ldjNF2I6aO5pGa7xyDsg8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vancouver Hood Doctors',
    image: '/logo.png',
    description: 'Professional commercial kitchen exhaust cleaning and certification services in Vancouver. ASTTBC certified technicians ensuring clean and safe commercial kitchens.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.2827', 
      longitude: '-123.1207', 
    },
    areaServed: [
      'Vancouver, BC',
      'Surrey, BC',
      'Burnaby, BC',
      'Richmond, BC',
      'Delta, BC',
      'New Westminster, BC',
      'Coquitlam, BC',
      'Port Coquitlam, BC',
      'Port Moody, BC',
      'Maple Ridge, BC',
      'Pitt Meadows, BC',
      'West Vancouver, BC',
      'North Vancouver, BC',
      'North Vancouver District, BC',
      'West Vancouver District, BC',
      'North Shore, BC',
      'Lower Mainland, BC',
    ],
    url: 'https://vancouverhooddoctors.ca',
    telephone: '604-273-8717',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://vancouverhooddoctors.ca'
    },
    sameAs: [
      "https://maps.app.goo.gl/quNmkwsoVvWfYVhz9",
    ],
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [
          {
            '@type': 'EntryPoint',
            urlTemplate: 'https://vancouverhooddoctors.ca/#services'
          }
        ]
      },
      {
        '@type': 'QuoteAction',
        target: [
          {
            '@type': 'EntryPoint',
            urlTemplate: 'https://vancouverhooddoctors.ca/#contact'
          }
        ]
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kitchen Exhaust Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exhaust Hood Cleaning',
            description: 'Professional commercial kitchen exhaust system cleaning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ASTTBC Certification',
            description: 'Official kitchen exhaust system certification'
          }
        }
      ]
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vancouverhooddoctors.ca'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://vancouverhooddoctors.ca/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Exhaust Cleaning',
        item: 'https://vancouverhooddoctors.ca/#exhaust-cleaning'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Certification',
        item: 'https://vancouverhooddoctors.ca/#certification'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Our Clients',
        item: 'https://vancouverhooddoctors.ca/#clients'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://vancouverhooddoctors.ca/#contact'
      }
    ]
  };

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
