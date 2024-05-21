"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
// import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Title from "@/components/blog/Title";
import { SiDiscogs, SiDiscord, SiGithub, SiLinkedin } from "react-icons/si";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

// interface CategoryLink {
//   id: string;
//   attributes: {
//     name: string;
//     slug: string;
//   };
// }

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

// function CategoryLink({ attributes }: CategoryLink) {
//   return (
//     <li className="flex">
//       <Link
//         href={`/${attributes.slug}`}
//         className="hover:dark:text-violet-400"
//       >
//         {attributes.name}
//       </Link>
//     </li>
//   );
// }

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite size={25}/>;
    case "TWITTER":
      return <AiFillTwitterCircle size={25}/>;
    case "YOUTUBE":
      return <AiFillYoutube size={25}/>;
    case "DISCORD":
      return <SiDiscord size={25}/>;
    case "GITHUB":
      return <SiGithub size={25}/>;
    case "LINKEDIN":
      return <SiLinkedin size={25}/>;
    default:
      return null;
  }
}

export default function Footer({
  // logoUrl,
  // logoText,
  // menuLinks,
  // categoryLinks,
  // legalLinks,
  socialLinks,
}: {
  // logoUrl: string | null;
  // logoText: string | null;
  // menuLinks: Array<FooterLink>;
  // categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {

  return (
    <footer className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="lg:pb-6 col-span-full md:pb-0 md:col-span-6">
            {/* <Logo src={logoUrl}>
              {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
            </Logo> */}
            <Link href="/">
              <Title text=" Miguel Bautista 😁" className='-rotate-2'/>
            </Link>
          </div>
          {/* === Categories ===  */}
          {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Categories</p>
            <ul>
              {categoryLinks.map((link: CategoryLink) => (
                <CategoryLink key={link.id} {...link} />
              ))}
            </ul>
          </div> */}

          {/* === Menu ===  */}
          {/* <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Menu</p>
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div> */}
        </div>
        <div className="flex justify-center pt-6 lg:justify-between lg:flex-row lg:gap-0 flex-col items-center gap-5">
          <div className="">
            <span className="mr-2 text-gray-300">
              ©{new Date().getFullYear()} Miguel Angelo Bautista.
            </span>
            {/*=== Legal Links ===*/}
            {/* <ul className="flex">
              {legalLinks.map((link: FooterLink) => (
                <Link
                  href={link.url}
                  className="text-gray-400 hover:text-gray-300 mr-2"
                  key={link.id}
                >
                  {link.text}
                </Link>
              ))}
            </ul> */}
          </div>
          <div className="flex items-center space-x-4 lg:pt-0 lg:col-end-13 gap-5">
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel="noopener noreferrer"
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="flex items-center justify-center rounded-full lg:hover:scale-125 transition-all"
                > 
                {/* dark:bg-violet-400 dark:text-gray-900 */}
                  <RenderSocialIcon social={link.social}/>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}