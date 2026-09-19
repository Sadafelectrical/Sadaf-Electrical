import './globals.css';
import FloatingContact from '../components/FloatingContact';

const siteUrl = 'https://www.sadafconstructions.com';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0a6fdb',
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sadaf Constructions and Renovations | Build · Renovate · Improve',
    template: '%s | Sadaf Constructions and Renovations',
  },
  description: 'Sadaf Constructions and Renovations – plumbing, electrical, carpentry, home renovation, construction, fabrication and CCTV installation in Bengaluru, Karnataka. Free on-site quote, 1-year workmanship warranty.',
  keywords: [
    'home renovation Bengaluru',
    'construction company Bengaluru',
    'plumbing services Bengaluru',
    'electrical services Bengaluru',
    'carpentry Bengaluru',
    'CCTV installation Bengaluru',
    'villa renovation Karnataka',
    'apartment renovation Bengaluru',
    'Sadaf Constructions',
  ],
  authors: [{ name: 'Sadaf Constructions and Renovations' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/sadaf-logo-new.png',
    shortcut: '/sadaf-logo-new.png',
    apple: '/sadaf-logo-new.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Sadaf Constructions and Renovations',
    title: 'Sadaf Constructions and Renovations | Build · Renovate · Improve',
    description: 'Plumbing, electrical, carpentry, home renovation, construction, fabrication and CCTV installation in Bengaluru, Karnataka. Free on-site quote, 1-year workmanship warranty.',
    images: [
      {
        url: '/sadaf-logo-new.png',
        width: 1200,
        height: 630,
        alt: 'Sadaf Constructions and Renovations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadaf Constructions and Renovations | Build · Renovate · Improve',
    description: 'Plumbing, electrical, carpentry, home renovation, construction, fabrication and CCTV installation in Bengaluru, Karnataka.',
    images: ['/sadaf-logo-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Sadaf Constructions and Renovations',
  image: `${siteUrl}/sadaf-logo-new.png`,
  url: siteUrl,
  telephone: '+919742255503',
  email: 'sadafelectrical786@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, No. 632, 19th Cross, L R Nagar',
    addressLocality: 'Koramangala, Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560030',
    addressCountry: 'IN',
  },
  areaServed: 'Bengaluru Urban, Karnataka',
  priceRange: '$$',
  openingHours: 'Mo-Sa 08:00-18:00',
  sameAs: [
    'https://www.facebook.com/share/19MSNnnddi/',
    'https://www.instagram.com/mohammed1682000',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
