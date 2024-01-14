import { works } from "@/data";
import { appUrl } from "@/utils";
import slug from "slug";

function removeForwardSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, url.length - 1) : url;
}

export default async function sitemap() {
  const mainLinks = ["/", "/contact"].map((link) => ({
    url: removeForwardSlash(`${appUrl}${link}`),
    lastModified: new Date(),
  }));
  const projectLinks = works.map(({ name }) => ({
    url: `${appUrl}/project/${slug(name)}`,
    lastModified: new Date(),
  }));

  return [...mainLinks, ...projectLinks];
}
