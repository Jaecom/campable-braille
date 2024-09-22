import React from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const CampAblePage = () => {
	return (
		<div className="h-full flex flex-col items-center justify-center">
			<div className={`text-primary ${lora.className} font-bold text-[30px] md:text-[60px]`}>CampAble</div>
			<div className="text-center px-[16px]">
				<p className={`text-white font-bold ${lora.className} text-[18px] md:text-[20px]`}>
					Empowering people with disability to believe in their ability
				</p>
				<p className="text-white max-w-[650px] mt-[10px]">
					Team CampAble은 기술을 활용하여 고품질 솔루션/프로덕트를 만들어, 장애로 인해 할 수 없다고 생각하기보다는
					장애가 있어도 무엇이든 할 수 있다는 자신감을 사람들에게 심어주기 위해 존재합니다.
				</p>
				<div className="mt-[50px]">
					<a
						href="https://campable.io"
						target="_blank"
						className="px-[40px] py-[10px] text-primary border-primary border-[2px] border-solid rounded-full underline font-bold"
					>
						Visit campable.io
					</a>
				</div>
			</div>
			<div className="mt-[200px] text-center text-primary">
				<h4>Contact Us</h4>
				<a className="underline" href="mailto:campable.io@gmail.com">
					campable.io@gmail.com
				</a>
			</div>
		</div>
	);
};

export default CampAblePage;
