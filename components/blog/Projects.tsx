"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { fetchAPI } from '@/app/blog/utils/fetch-api';
import PostList from '@/app/blog/components/PostList';
import Loader from '@/app/blog/components/Loader';
import Title from './Title';

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Projects({
  limit,
  loadMore,
  loadTitle,
}: {
  limit: number,
  loadMore?: boolean,
  loadTitle?: boolean
} = {
  limit: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
}) {
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
        'filters[$and][0][category][name][$eq]': 'projects'
      };
      const responseData = await fetchAPI(path, urlParamsObject);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[] ) => [...prevData, ...responseData.data]);
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

  if (isLoading) return <Loader />;
  if (loadMore) {
    return (
      <div className='text-center mx-auto max-w-sm text-2xl lg:max-w-[60vw] lg:text-3xl py-20'>
        {loadTitle && <Title text="Projects" className='text-3xl'/>}

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
    )
  }

  return (
    <div className='text-center mx-auto max-w-sm text-2xl lg:max-w-[60vw] lg:text-3xl py-20'>
      {loadTitle && <Title text="Projects"/>}

      <PostList data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
              <div className="flex justify-center">
            </div>
        )}
      </PostList>
    </div>
  )
}
