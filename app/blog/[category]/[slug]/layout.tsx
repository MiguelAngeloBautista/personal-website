import React from "react";

import { fetchAPI } from "@/app/blog/utils/fetch-api";
import Navbar from "@/components/blog/Navbar";

async function fetchSideMenuData(filter: string) {
	try {
		const categoriesResponse = await fetchAPI(
			"/categories",
			{ populate: "*" }
			// options
		);

		const articlesResponse = await fetchAPI(
			"/articles",
			filter
				? {
						filters: {
							category: {
								name: filter,
							},
						},
				  }
				: {}
			// options
		);

		return {
			articles: articlesResponse.data,
			categories: categoriesResponse.data,
		};
	} catch (error) {
		console.error(error);
	}
}

interface Category {
	id: number;
	attributes: {
		name: string;
		slug: string;
		articles: {
			data: Array<{}>;
		};
	};
}

interface Article {
	id: number;
	attributes: {
		title: string;
		slug: string;
	};
}

interface Data {
	articles: Article[];
	categories: Category[];
}

export default async function LayoutRoute({
	params,
	children,
}: {
	children: React.ReactNode;
	params: {
		slug: string;
		category: string;
	};
}) {
	const { category } = params;
	const { categories, articles } = (await fetchSideMenuData(
		category
	)) as Data;

	return (
		<div className="bg-white dark:bg-black text:black dark:text-white">
			<div>
				<Navbar />
			</div>
			<section className="md:pl-[7%] lg:pl-[10%] 3xl:pl-[10%] container pt-8 pb-8 space-y-6 sm:space-y-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
					<div className="md:col-span-3 lg:col-span-2 ">
						{children}
					</div>
					{/* <aside>
          <ArticleSelect
            categories={categories}
            articles={articles}
            params={params}
          />
        </aside> */}
				</div>
			</section>
		</div>
	);
}

export async function generateStaticParams() {
	const path = `/articles`;
	const articleResponse = await fetchAPI(
		path,
		{
			populate: ["category"],
		}
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
		}) => ({
			slug: article.attributes.slug,
			category: article.attributes.slug,
		})
	);
}
