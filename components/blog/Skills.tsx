import React from "react";
import Title from "./Title";
import Card from "@/components/ui/small-card";
import {
	SiCplusplus,
	SiDocker,
	SiHtml5,
	SiJavascript,
	SiProxmox,
	SiPython,
	SiUnrealengine,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import Image from "next/image";

export const Skills = () => {
	const skill = [
		{
			text: "Python",
			icon: SiPython,
			value: 70,
		},
		{
			text: "Java",
			icon: FaJava,
			value: 50,
		},
		{
			text: "C++",
			icon: SiCplusplus,
			value: 50,
		},
		{
			text: "Javascript",
			icon: SiJavascript,
			value: 60,
		},
		{
			text: "HTML/CSS",
			icon: SiHtml5,
			value: 70,
		},
		{
			text: "Unreal Engine",
			icon: SiUnrealengine,
			value: 40,
		},
		{
			text: "Game Dev",
			icon: IoGameController,
			value: 50,
		},
		{
			text: "Docker",
			icon: SiDocker,
			value: 60,
		},
		{
			text: "Proxmox",
			icon: SiProxmox,
			value: 60,
		},

		// { Not Fully
		//   text: 'Next.JS',
		//   icon: SiNextdotjs
		// },
	];

	return (
		<div className="mt-16 text-center py-20 text-2xl lg:text-3xl">
			<Title text="Skills ✏️" />
			<div className="mt-36  lg:h-[60vh] lg:max-h-[498px] background-6728671a2426">
				<div className="flex flex-row gap-15 lg:justify-between align-middle px-[15vw] 2xl:px-[20vw] justify-center lg:h-[60vh] lg:max-h-[498px] pb-3 lg:pb-0">
					<Image
						src="/Me-Pointing.png"
						alt="Photo of Miguel Pointing to Skills"
						height="502"
						width="533"
						className="object-contain w-[25vw] lg:block hidden"
					/>
					<div className="grid lg:grid-cols-2 gap-4 text-2xl xl:text-3xl pt-3">
						<Card items={skill} />
					</div>
				</div>
			</div>
		</div>
	);
};
