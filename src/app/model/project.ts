import { Section } from './section';

export interface Project {
  id: number;
  Project_thumbnail: string;
  Project_title: string;
  Project_short_description: string;
  Project_favorite: boolean;
  Detail_header_image?: string;
  Sections: Section[];
}
