import PageHeader from '@/app/blog/components/PageHeader';
import { fetchAPI } from '@/app/blog/utils/fetch-api';
import PostList from '@/app/blog/components/PostList';
import Navbar from '@/components/blog/Navbar';

async function fetchPostsByCategory(filter: string) {
    try {
        const path = `/articles`;
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };
        const responseData = await fetchAPI(path, urlParamsObject);
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export default async function CategoryRoute({ params }: { params: { category: string } }) {
    const filter = params.category;
    const { data } = await fetchPostsByCategory(filter);

    if (data.length === 0) return <div>Not Posts In this category</div>;

    const { name, description } = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <Navbar />

            <PageHeader heading={name} text={description} />
            <PostList data={data} />
        </div>
    );
}

export async function generateStaticParams() {
    return [];
}