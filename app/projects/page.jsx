import ProjectsContent from './ProjectsContent';

export const metadata = {
  title: 'Our Projects',
  description: 'Browse recent renovation, kitchen, bathroom and security installation projects completed by Sadaf Constructions and Renovations across Dubai and the UAE.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Recent Renovation Projects in Dubai | Sadaf Constructions',
    description: 'Real homes, real transformations — see our portfolio of completed renovation, kitchen, bathroom and security projects across Dubai.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
