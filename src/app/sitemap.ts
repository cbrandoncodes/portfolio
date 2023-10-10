import { works } from "@/data";
import { appUrl } from "@/utils";
import slug from "slug";

function addForwardSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default async function sitemap() {
  const mainLinks = ["/", "/contact"].map((link) => ({
    url: addForwardSlash(`${appUrl}${link}`),
    lastModified: new Date(),
  }));
  const projectLinks = works.map(({ name }) => ({
    url: addForwardSlash(`${appUrl}/project/${slug(name)}`),
    lastModified: new Date(),
  }));

  return [...mainLinks, ...projectLinks];
}
