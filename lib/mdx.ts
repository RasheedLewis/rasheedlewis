import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Schema for Frontmatter
export interface PostMeta {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    [key: string]: any;
}

export interface Post {
    slug: string;
    meta: PostMeta;
    content: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(directory: string) {
    const dirPath = path.join(contentDirectory, directory);
    if (!fs.existsSync(dirPath)) {
        return [];
    }
    return fs.readdirSync(dirPath).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(directory: string, slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, directory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data as PostMeta,
        content,
    };
}

export function getAllPosts(directory: string): Post[] {
    const slugs = getPostSlugs(directory);
    const posts = slugs
        .map((slug) => getPostBySlug(directory, slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
    return posts;
}
