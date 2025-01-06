import { appUrl } from ".";
import { Metadata } from "next";

export function baseMetadata({
  title,
  description,
  slug,
  image,
}: {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
}): Metadata {
  const defTitle = "Brandon";
  const defDescription =
    "Hi, I'm Brandon Chikezie. I am a Full-Stack Developer. I build accessible and scalable applications.";
  const pageTitle = title || defTitle;
  const pageDescription = description || defDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(appUrl),
    keywords: [
      "Brandon Chikezie",
      "Obinna Chikezie",
      "Brandon Obinna Chikezie",
      "Brandon",
      "Chikezie",
      "Obinna",
      "Software Engineer",
      "Software Developer",
      "Full Stack Developer",
      "Full-Stack Developer",
      "Programmer",
      "Web Developer",
      "Coding",
      "Coder",
      "Web Development",
      "Software Development",
      "Scalable Web Applications",
    ],
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      images: [
        {
          url: "/assets/images/base.jpg",
          width: 2295,
          height: 1523,
        },
      ],
    },
    openGraph: {
      siteName: defTitle,
      type: "website",
      title: pageTitle,
      description: pageDescription,
      ...(!!slug && { slug: `${appUrl}${slug ?? ""}` }),
      images: [
        {
          url: "/assets/images/base.jpg",
          width: 2295,
          height: 1523,
        },
        ...(!!image
          ? [
              {
                url: image,
              },
            ]
          : []),
      ],
    },
  };
}
