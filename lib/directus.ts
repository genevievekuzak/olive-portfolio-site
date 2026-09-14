import { createDirectus, rest } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
}

type Author = {
  name: string
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Post = {
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string
  slug: string;
}

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
}

const directus = createDirectus<Schema>('https://goldfish-app-9olw7.ondigitalocean.app/').with(rest());

export default directus;