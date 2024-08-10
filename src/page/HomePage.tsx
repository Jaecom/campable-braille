import React from "react";
import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<section className="h-[500px] bg-primary flex items-center relative overflow-hidden">
				<div className="w-[600px] flex flex-col ml-[200px] gap-y-[5px] relative z-10 text-[#E0E0E0]">
					<h1>Braille Camp</h1>
					<div className="text-[20px] font-bold">
						Braille Camp은 해바라기팀이 개발한 교육용 웹 점역 소프트웨어 입니다.{" "}
					</div>
					<p>
						Braille Camp은 텍스트 뿐만 수식도 점역해 낼 수 있는 수학에 특화된 점역 프로그램입니다. <br />
						해바라기 팀은 고객님이 쉽고 빠르게 원하는 교육 자료를 점역하고 더 많은 교육 자료의 접근성을 높이려 노력하고
						있습니다.
					</p>
				</div>
			</section>
			<section className="h-[500px] flex flex-col items-center justify-center relative bg-[white] text-center">
				<h2 className="text-primary">CONVERT TO BRAILLE</h2>
				<p className="text-primary">
					원하는 교육 자료 파일을 Braille Camp에 업로드해 점자로 변환해보세요. <br />
					변환된 파일을 다운로드해 점자정보단말기에 읽힐 수 있습니다.
				</p>
				<Link href="/convert" className="mt-[22px] text-[15px] font-medium px-[12px] py-[6px] bg-primary text-white">
					파일 변환하기
				</Link>
			</section>
		</div>
	);
};

export default HomePage;
