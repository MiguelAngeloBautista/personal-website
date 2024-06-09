"use client";
import React, { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "@/app/blog/utils/fetch-api";
import PostList from "@/app/blog/components/PostList";
import Title from "./Title";
import CardSkeleton from "./CardSkeleton";

interface Meta {
	pagination: {
		start: number;
		limit: number;
		total: number;
	};
}

export default function Projects(
	{
		limit,
		loadMore,
	}: {
		limit: number;
		loadMore?: boolean;
	} = {
		limit: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT),
	}
) {
	const [meta, setMeta] = useState<Meta | undefined>();
	const [data, setData] = useState<any>([]);
	const [isLoading, setLoading] = useState(true);

	const fetchData = useCallback(async (start: number, limit: number) => {
		setLoading(true);
		try {
			const path = `/articles`;
			const urlParamsObject = {
				sort: { createdAt: "desc" },
				populate: {
					cover: { fields: ["url"] },
					category: { populate: "*" },
					authorsBio: {
						populate: "*",
					},
				},
				pagination: {
					start: start,
					limit: limit,
				},
				"filters[$and][0][category][name][$eq]": "projects",
			};
			const responseData = await fetchAPI(path, urlParamsObject);

			if (start === 0) {
				setData(responseData.data);
			} else {
				setData((prevData: any[]) => [
					...prevData,
					...responseData.data,
				]);
			}

			setMeta(responseData.meta);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	function loadMorePosts(): void {
		const nextPosts = meta!.pagination.start + meta!.pagination.limit;
		fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
	}

	useEffect(() => {
		fetchData(0, limit);
	}, [fetchData, limit]);

	// ========================= Loading =========================
	if (isLoading && loadMore) {
		return (
			<div className="text-center mx-auto text-2xl lg:text-3xl py-20 xl:w-[1400px]">
				<CardSkeleton />
			</div>
		);
	}
	if (isLoading) {
		return (
			<div className="text-2xl lg:text-3xl py-20 mx-auto  2xl:w-[1400px]">
				<Title text="Projects" className="pb-10" />
				{/* <Loader /> */}
				<CardSkeleton />
			</div>
		);
	}
	// ========================= Main Content =========================
	if (loadMore) {
		return (
			// max-w-sm lg:max-w-[60vw]
			<div className="text-center mx-auto  text-2xl  lg:text-3xl py-20  bg-white dark:bg-black text:black dark:text-white xl:w-[1400px]">
				<PostList data={data}>
					{meta!.pagination.start + meta!.pagination.limit <
						meta!.pagination.total && (
						<div className="flex justify-center">
							<button
								type="button"
								className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
								onClick={loadMorePosts}
							>
								Load more posts...
							</button>
						</div>
					)}
				</PostList>
			</div>
		);
	}

	return (
		<div className="text-2xl lg:text-3xl py-20 mx-auto 2xl:w-[1400px]">
			<Title text="Projects" className="pb-10" />

			<PostList data={data}></PostList>
		</div>
	);
}
