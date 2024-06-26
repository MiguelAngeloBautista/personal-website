// ./frontend/src/app/[lang]/components/PostList.tsx

import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Article {
	id: 4;
	attributes: {
		title: string;
		description: string;
		slug: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		cover: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		category: {
			data: {
				attributes: {
					name: string;
					slug: string;
				};
			};
		};
		authorsBio: {
			data: {
				attributes: {
					name: string;
					avatar: {
						data: {
							attributes: {
								url: string;
							};
						};
					};
				};
			};
		};
	};
}

export default function PostList({
	data: articles,
	children,
}: {
	data: Article[];
	children?: React.ReactNode;
}) {
	return (
		<section className="">
			{/*grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  xl:gap-0*/}
			<div className="text-left grid grid-cols-1 xl:grid-cols-3 gap-10 lg:gap-5">
				{articles.map((article) => {
					const imageUrl = getStrapiMedia(
						article.attributes.cover.data?.attributes.url
					);

					const category =
						article.attributes.category.data?.attributes;
					const authorsBio =
						article.attributes.authorsBio.data?.attributes;

					// const avatarUrl = getStrapiMedia(
					//   authorsBio?.avatar.data.attributes.url
					// );

					return (
						<Link
							href={`/blog/${category?.slug}/${article.attributes.slug}`}
							key={article.id}
							className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg text-ellipsis text-pretty
              md:min-w-[360px] md:max-w-[360px] min-w-[80%] max-w-[80%] md:min-h-[450px] md:max-h-[450px] min-h-[400px]" //min-w-[350px] max-w-[350px]
						>
							{imageUrl && (
								<Image
									alt="presentation"
									width="240"
									height="240"
									className="object-cover w-full h-44 "
									src={imageUrl}
									priority={true}
								/>
							)}
							<div className="p-6 space-y-2 relative">
								{/* {avatarUrl && (
                  <Image
                    alt="avatar"
                    width="80"
                    height="80"
                    src={avatarUrl}
                    className="rounded-full h-16 w-16 object-cover absolute -top-8 right-4"
                  />
                )} */}

								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									{article.attributes.title}
								</h3>

								<div className="flex justify-between items-center">
									<span className="text-xs dark:text-gray-400">
										{formatDate(
											article.attributes.publishedAt
										)}
									</span>
									{authorsBio && (
										<span className="text-xs dark:text-gray-400">
											{authorsBio.name}
										</span>
									)}
								</div>
								<p className="py-4 text-base text-left">
									{article.attributes.description}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
			{children && children}
		</section>
	);
}
