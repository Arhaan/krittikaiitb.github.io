// See https://nextjs.org/learn/basics/data-fetching/blog-data
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html'
import remarkUnwrapImages from 'remark-unwrap-images'
import {remark} from 'remark'


const postsDirectory = path.join(process.cwd(), 'eventsMarkdown');
export function getAllEventsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data with the id
    return {
      slug: slug,
      ...matterResult.data,
    };
  });
  
  return allPostsData
}

export function getEventBySlug(slug: string){
  const RealSlug = slug.replace(/\.md$/, ''); // If the name had .md

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, `${RealSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const content = remark().use(remarkUnwrapImages).use(html).processSync(matterResult.content).toString()
  // const content = matterResult.content
  // Combine the data with the id
  return {
    content: content,
    slug: slug,
    ...matterResult.data,
    
  };

}