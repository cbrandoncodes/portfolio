import { LucideIcon } from "lucide-react";

export type Work = {
  name: string;
  overview?: string;
  link: string;
  image: string;
  images: string[];
  details: string[];
  scope?: string[];
  technologies: string[];
  year: number;
};

export type IconType = LucideIcon;
