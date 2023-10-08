import { works } from "@/data";
import ProjectHero from "./project-hero";
import ProjectDetails from "./project-details";
import slug from "slug";
import { notFound } from "next/navigation";

export default function Project({ params }: { params: { slug: string } }) {
  const work = works.find(({ name }) => slug(name) === params.slug);

  if (!work) {
    return notFound();
  }

  const { name, overview, details, images, year, scope, technologies, link } =
    work;

  return (
    <>
      <ProjectHero
        name={name}
        overview={overview}
        year={year}
        details={details}
        scope={scope}
        technologies={technologies}
        link={link}
      />
      <ProjectDetails images={images} name={name} />
    </>
  );
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const work = works.find(({ name }) => slug(name) === params.slug);

  return {
    title: `${work?.name} - Brandon` ?? "Project - Brandon",
    description: work?.overview ?? "Project - Brandon",
  };
}

export function generateStaticParams() {
  return works.map(({ name }) => ({ slug: slug(name) }));
}
