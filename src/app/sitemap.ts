import { works } from "@/data";
import { appUrl } from "@/utils";
import slug from "slug";

export default async function sitemap() {
  const mainLinks = ["/", "/contact"].map((link) => ({
    url: `${appUrl}${link}`,
    lastModified: new Date(),
  }));
  const projectLinks = works.map(({ name }) => ({
    url: `${appUrl}/project/${slug(name)}`,
    lastModified: new Date(),
  }));

  return [...mainLinks, ...projectLinks];
}
