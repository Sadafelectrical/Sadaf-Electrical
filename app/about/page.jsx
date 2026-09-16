import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Us',
  description: 'Since 2019, Sadaf Constructions and Renovations has helped hundreds of homeowners across Dubai transform their living spaces with our in-house team of plumbers, electricians, carpenters and tilers.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Sadaf Constructions and Renovations',
    description: 'Trusted Dubai renovation team delivering honest pricing, daily communication and a 1-year workmanship warranty on every project.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
