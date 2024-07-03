import React from "react";
import BigBrailleIcon from "@/public/icons/braille-big-icon.svg";
import BrailleLong from "@/public/icons/braille-long-icon.svg";
import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<section className="h-[500px] bg-primary flex items-center relative overflow-hidden">
				<div className="absolute right-0 top-20">
					<BigBrailleIcon />
				</div>
				<div className="w-[600px] flex flex-col ml-[200px] gap-y-[5px] relative z-10">
					<h1>SUNNY BRAILLE</h1>
					<div className="text-[20px] font-bold">
						Sunny Braille은 해바라기팀이 개발한 교육용 웹 점역 소프트웨어 입니다.{" "}
					</div>
					<p>
						Sunny Braille은 텍스트 뿐만 수식도 점역해 낼 수 있는 수학에 특화된 점역 프로그램입니다. <br />
						해바라기 팀은 고객님이 쉽고 빠르게 원하는 교육 자료를 점역하고 더 많은 교육 자료의 접근성을 높이려 노력하고
						있습니다.
					</p>
				</div>
			</section>
			<section className="h-[500px]  flex flex-col items-center justify-center relative bg-white">
				<h2>CONVERT TO BRF</h2>
				<p>
					원하는 교육 자료 파일을 Sunny Braille에 업로드해 점자로 변환해보세요. <br />
					변환된 파일을 다운로드해 점자정보단말기에 읽힐 수 있습니다.
				</p>
				<Link href="/convert" className="mt-[22px] text-[15px] font-medium px-[12px] py-[6px] bg-black text-white">
					파일 변환하기
				</Link>

				<div className="absolute left-10 bottom-10">
					<BrailleLong />
				</div>
			</section>
		</div>
	);
};

export default HomePage;
