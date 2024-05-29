import { MetadataRoute } from "next";
import { fetchAPI } from "./utils/fetch-api";

interface Article {
    id: number,
    attributes: {
      title:string,
      description: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
    },
}

export default async function sitemap({
}): Promise<MetadataRoute.Sitemap> {


  const path = `/articles`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      "filters[$and][0][category][name][$eq]": "articles",
    };

    const responseData = await fetchAPI(path, urlParamsObject);

  return responseData.data.map((posts: Article) => ({
    url: `https://www.bautistahome.com/blog/articles/${posts.attributes.slug}`, //${posts.category.data.attributes.slug}
    lastModified: new Date(posts.attributes.updatedAt),
  }))
}

export const revalidate = 3600;