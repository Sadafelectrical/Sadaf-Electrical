import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Our Services',
  description: 'Complete home renovation services in Dubai — plumbing, electrical, carpentry, civil construction, metal fabrication and CCTV installation, delivered by our own in-house team with a 1-year warranty.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Home Renovation Services in Dubai | Sadaf Constructions',
    description: 'Browse our full range of home services: renovation, plumbing, electrical, carpentry, construction, fabrication and CCTV installation.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
