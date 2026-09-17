import ProjectsContent from './ProjectsContent';

export const metadata = {
  title: 'Our Projects',
  description: 'Browse recent renovation, kitchen, bathroom and security installation projects completed by Sadaf Constructions and Renovations across Bengaluru and Karnataka.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Recent Renovation Projects in Bengaluru | Sadaf Constructions',
    description: 'Real homes, real transformations — see our portfolio of completed renovation, kitchen, bathroom and security projects across Bengaluru.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
