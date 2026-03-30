import React from "react";
import projects from "../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import CaseStudyHero from "../../components/CaseStudyHero";
import CaseStudySections from "../../components/CaseStudySections";
import LazyImage from "../../components/LazyImage";
import CountUpNumber from "../../components/CountUpNumber";
import UseLenisClient from "../../components/UseLenisClient";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const project = projects[slug] || null;
  if (!project) return { title: 'Case study' };
  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }) {
  const slug = params.slug;
  const project = projects[slug];

  if (!project) {
    return (
      <CaseStudyLayout>
        <div className="py-24 text-center">Project not found</div>
      </CaseStudyLayout>
    );
  }

  // Prefer project-defined sections (with images and imagePosition). Fallback to a minimal set.
  const sections = project.sections && project.sections.length > 0 ? project.sections : [
    { title: 'Project Overview', body: project.overview, image: project.heroImage, imagePosition: 'top' },
    { title: 'Problem Statement', body: 'Fragmented systems, manual reconciliation and scale challenges causing operational risk.' },
    { title: 'Solution & Architecture', body: 'Microservices, event-driven pipelines, RAG-enabled AI integrations and secure payments.' },
    { title: 'Implementation & Results', body: 'Iterative delivery, observability and measurable uplift in key metrics.' }
  ];

  return (
    <CaseStudyLayout project={project}>
      <UseLenisClient />
      <CaseStudyHero title={project.title} subtitle={project.subtitle} image={project.heroImage} />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <CaseStudySections sections={sections} />
        </div>

        <aside className="col-span-1 space-y-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="font-semibold mb-2">Key Metrics</h4>
            {project.metrics.map((m, i) => (
              <div key={i} className="flex justify-between items-baseline py-2">
                <div className="text-sm text-muted">{m.label}</div>
                <div className="text-2xl font-bold">
                  <CountUpNumber value={m.value} />{m.suffix || ''}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <ul className="text-sm text-muted space-y-2">
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mb-24">
        <h3 className="section-title mb-6">Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* collect gallery images: heroImage + any section images */}
          {([project.heroImage].concat((project.sections || []).map(s => s.image).filter(Boolean))).map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <LazyImage src={img} alt={`${project.title} screenshot ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </CaseStudyLayout>
  );
}
