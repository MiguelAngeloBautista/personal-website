// ./frontend/stc/app/[lang]/utils/fetch-api.tsx
"use server";
import qs from "qs";
import { getStrapiURL } from "./api-helpers";
import "server-only";

export async function fetchAPI(
	path: string,
	urlParamsObject = {},
	options = {}
) {
	try {
		const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

		// const daoptions = { headers: { Authorization: `Bearer ${token}` } };
		// const options = { Authorization: `Bearer ${token}` };

		// Merge default and user options
		const mergedOptions = {
			next: { revalidate: 60 },
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			...options,
		};

		// Build request URL
		const queryString = qs.stringify(urlParamsObject);
		const requestUrl = `${getStrapiURL(
			`/api${path}${queryString ? `?${queryString}` : ""}`
		)}`;

		// Trigger API call
		const response = await fetch(requestUrl, mergedOptions);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(
			`Please check if your server is running and you set all the required tokens.`
		);
	}
}
