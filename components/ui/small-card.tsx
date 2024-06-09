import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Progress } from "./progress";
import { progress } from "framer-motion";
import ProgressAnimated from "./ProgressAnimated";

export default function Card({
	items,
}: {
	items: {
		text: string;
		icon: IconType;
		value: number;
	}[];
}) {
	return items.map((item, index) => {
		const Icon = item.icon;
		return (
			<div key={index}>
				<div className="flex items-center justify-start gap-3 text-white p-2 rounded-md">
					<Icon size={30} aria-hidden="true" />
					<p>{item.text}</p>
				</div>
				<ProgressAnimated value={item.value} />
			</div>
		);
	});
}
