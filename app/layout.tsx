import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "../components/ui/Footer";
import { fetchAPI } from "./blog/utils/fetch-api";

const inter = Inter({ subsets: ["latin"] });

const FALLBACK_SEO: Metadata = {
	metadataBase: new URL("https://www.bautistahome.com"),
	title: {
		template: "%s | Miguel's Portfolio",
		default: "Miguel's Portfolio",
	},
	verification: {
		google: "rilua_WRIkTHb1M3piXYOUKSUWDrMxkc7oabf-oARUQ"
	},
	icons: {
		icon: "/favicon.ico"
	},
	description: "Miguel's Portfolio - showcasing my projects and skills. Welcome to my portfolio website! I hope you can learn more about me and my work here. Feel free to reach out to me if you have any questions or would like to work together.",
	keywords: [
		"portfolio",
		"web development",
		"React",
		"tailwindcss",
		"nextjs",
		"typescript",
		"Miguel Bautista",
		"Miguel",
		"Bautista",
		"Miguel Bautista Portfolio",
		"Miguel Portfolio",
		"Miguel Bautista Web Development",
		"Miguel Web Development",
		"Miguel Bautista NextJS",
		"Miguel NextJS",
	],
	category: "Technology",
	authors: [{ name: "Miguel Bautista" }],
	creator: "Miguel Bautista",
	publisher: "Miguel Bautista",
	formatDetection: {
		telephone: false,
		address: false,
		email: true,
	},
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Miguel's Portfolio",
		description: "Miguel's Portfolio - showcasing my projects and skills",
		url: "/",
		siteName: "Miguel's Portfolio",
		images: [
			{
				url: "/og.png",
				width: 288,
				height: 288,
				alt: "Miguel's Portfolio",
			},
		],
	},
};

export async function generateMetadata(): Promise<Metadata> {
	const meta = await getGlobal();

	if (!meta.data) return FALLBACK_SEO;

	const { metadata, favicon } = meta.data.attributes;
	const { url } = favicon.data.attributes;

	return {
		metadataBase: new URL("https://www.bautistahome.com"),
		title: metadata.metaTitle,
		description: metadata.metaDescription,
		verification: {
			google: "rilua_WRIkTHb1M3piXYOUKSUWDrMxkc7oabf-oARUQ"
		},
		icons: {
			icon: "/favicon.ico"
		},
		// icons: {
		//   icon: [new URL(url, getStrapiURL())],
		// },
		authors: [{ name: "Miguel Bautista" }],
		creator: "Miguel Bautista",
		publisher: "Miguel Bautista",
		referrer: "origin-when-cross-origin",
		openGraph: {
			type: "website",
			locale: "en_US",
			title: "Miguel's Portfolio",
			description:
				"Miguel's Portfolio - showcasing my projects and skills",
			url: "/",
			siteName: "Miguel's Portfolio",
			images: [
				{
					url: "/og.png",
					width: 288,
					height: 288,
					alt: "Miguel's Portfolio",
				},
			],
		},
	};
}

async function getGlobal(): Promise<any> {
	const path = `/global`;

	const urlParamsObject = {
		populate: [
			"metadata.shareImage",
			"favicon",
			// "navbar.links",
			// "navbar.navbarLogo.logoImg",
			// "footer.footerLogo.logoImg",
			// "footer.menuLinks",
			"footer.legalLinks",
			"footer.socialLinks",
			// "footer.categories",
		],
	};

	const response = await fetchAPI(path, urlParamsObject);
	return response;
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const global = await getGlobal();
	// TODO: CREATE A CUSTOM ERROR PAGE
	if (!global.data) return null;

	const { navbar, footer } = global.data.attributes;

	// const navbarLogoUrl = getStrapiMedia(
	//   navbar.navbarLogo.logoImg.data.attributes.url
	// );

	// const footerLogoUrl = getStrapiMedia(
	//   footer.footerLogo.logoImg.data.attributes.url
	// );

	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}

					<Footer
						legalLinks={footer.legalLinks}
						socialLinks={footer.socialLinks}
					/>
				</ThemeProvider>
			</body>
		</html>
	);
}
