import { fetchAPI } from '@/app/blog/utils/fetch-api';
import Post from '@/components/blog/Post';
import type { Metadata } from 'next';

async function getPostBySlug(slug: string) {
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
        },
    };
    const response = await fetchAPI(path, urlParamsObject);
    return response;
}

async function getMetaData(slug: string) {
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { 
            seo: { populate: '*' },
            category: { fields: ['name'] },
        },
    };
    const response = await fetchAPI(path, urlParamsObject);
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    const metadata = meta[0]?.attributes?.seo;
    if (!metadata) {
        // throw new Error('Metadata not found');
        return {
            title: "Miguel's Portfolio",
            description: "Miguel's Portfolio - showcasing my projects, interests and skills. Welcome to my portfolio website! I hope you can learn more about me and my work here. Feel free to reach out to me if you have any questions or would like to work together. ",
        };
    }

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        openGraph: {
            // type: "website",
            locale: "en_US",
            title: `Miguel's Portfolio | ${metadata.metaTitle}`,
            description: meta[0].attributes.description,
            url: `/blog/${meta[0].attributes.category.data.attributes.name}/${meta[0].attributes.slug}`,
            siteName: "Miguel's Portfolio",
            images: [
                {
                    url: "/og-optimal.png",
                    width: 1200,
                    height: 630,
                    alt: "Miguel's Portfolio",
                },
            ],
        },
    };
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);
    if (data.data.length === 0) return <h2>no post found</h2>;
    return <Post data={data.data[0]} />;
}

export async function generateStaticParams() {
    const path = `/articles`;
    const articleResponse = await fetchAPI(
        path,
        {
            populate: ['category'],
        },
        // options
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}