import ProjectHero from "./project-hero";
import ProjectDetails from "./project-details";
import { works } from "@/data";
import { baseMetadata } from "@/utils/base-metadata";
import slug from "slug";
import { notFound } from "next/navigation";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: projectSlug } = await params;
  const work = works.find(({ name }) => slug(name) === projectSlug);

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: projectSlug } = await params;
  const work = works.find(({ name }) => slug(name) === projectSlug);

  return baseMetadata({
    title: work?.name ? `${work?.name} - Brandon` : "Project",
    description: work?.overview ?? "Brandon - Project",
    slug: `/project/${projectSlug}`,
  });
}

export function generateStaticParams() {
  return works.map(({ name }) => ({ slug: slug(name) }));
}
