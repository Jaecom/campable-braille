import React from "react";
import Image from "next/image";

type Props = {
	imageSrc: string;
	imageLabel: string;
	paragraph: string;
	reverse?: boolean;
};

const UserFeedbackItem = ({ imageSrc, imageLabel, paragraph, reverse }: Props) => {
	return (
		<div
			className={`flex ${
				reverse ? "flex-row-reverse" : ""
			} items-center justify-center gap-x-[65px] px-[100px] bg-dark-grey w-full border-solid border-b-[1px] border-primary`}
		>
			<div className="relative flex-shrink-0">
				<Image src={imageSrc} width={350} height={170} alt="feedback_image_1" style={{ objectFit: "cover" }} />
				<div className="absolute bottom-2 right-2 bg-black px-[10px] py-[5px] text-white">{imageLabel}</div>
			</div>
			<p className="text-primary max-w-[700px]">{`“${paragraph}”`}</p>
		</div>
	);
};

export default UserFeedbackItem;
