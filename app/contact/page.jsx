import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sadaf Constructions and Renovations for a free consultation and written quote. Call, WhatsApp or fill out our contact form to start your project in Bengaluru.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Sadaf Constructions and Renovations',
    description: 'Let\'s build something better together. Reach out for a free consultation and quote on your renovation, repair or new project.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
