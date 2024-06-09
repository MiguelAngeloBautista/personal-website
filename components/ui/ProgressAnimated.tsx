"use client";
import React, { useEffect, useRef, useState } from "react";
import { Progress } from "./progress";
import { useInView } from "framer-motion";

export default function ProgressAnimated({ value }: { value: number }) {
	const [progress, setProgress] = useState(0);

	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			setProgress(value);
		} else {
			setProgress(0);
		}
	}, [value, isInView]);

	return (
		<div ref={ref}>
			<Progress value={progress} />
		</div>
	);
}
