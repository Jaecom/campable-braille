import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrailleGroup from "@/public/icons/home_braille.svg";
import SmallArrow from "@/public/icons/arrow_small.svg";
import BigArrow from "@/public/icons/arrow_big.svg";
import UserFeedbackItem from "./UserFeedbackItem";

const HomePage = () => {
	return (
		<div className="w-full">
			<section className="h-[500px] px-[16px] md:px-[100px] flex items-center relative overflow-hidden justify-between">
				<div className="w-[600px] flex flex-col gap-y-[5px] relative z-10 text-primary">
					<h1>Braille Camp</h1>
					<div className="text-[20px] font-bold">
						Braille Camp은 Campable 팀이 개발한 교육용 웹 점역 소프트웨어 입니다.
					</div>
					<p>
						Braille Camp은 텍스트 뿐만 수식도 점역해 낼 수 있는 수학에 특화된 점역 프로그램입니다.
						<br className="hidden md:block" />
						Campable 팀은 고객님이 쉽고 빠르게 원하는 교육 자료를 점역하고 더 많은 교육 자료의 접근성을 높이려 노력하고
						있습니다.
					</p>
				</div>
				<div className="hidden md:block">
					<div className="mb-[100px]">
						<Image
							src="/images/home_equation.png"
							height={188}
							width={430}
							alt="equation"
							style={{ objectFit: "cover" }}
						/>
						<div className="ml-[200px] mt-[40px]">
							<BrailleGroup />
						</div>
					</div>
				</div>
			</section>
			<section className="h-[500px] flex flex-col items-center justify-center relative bg-primary text-center">
				<h2 className="text-dark-grey">CONVERT TO BRAILLE</h2>
				<p className="text-dark-grey">
					원하는 교육 자료 파일을 Braille Camp에 업로드해 점자로 변환해보세요. <br className="hidden md:block" />
					변환된 파일을 다운로드해 점자정보단말기에 읽힐 수 있습니다.
				</p>
				<Link
					href="/convert"
					className="mt-[22px] text-[15px] font-medium px-[12px] py-[6px] bg-[#FFEC82] text-dark-grey border-dark-grey border-solid border-[1px]"
				>
					파일 변환하기
				</Link>
			</section>

			<section className="flex flex-col justify-center items-center bg-dark-grey py-[80px] gap-y-[20px]">
				<h2 className="text-primary">Quick & Easy</h2>
				<p className="text-white text-center md:text-left">
					텍스트와 수식을 점자정보단말기에 읽을 수 있는 점자 형식으로 빠르게 변환합니다 :)
				</p>
				<div className="mt-[50px] flex flex-col md:flex-row items-center gap-x-[20px] gap-y-[20px]">
					<Image
						src="/images/home_braille_1.png"
						width={284}
						height={220}
						alt="image_1"
						style={{ objectFit: "cover" }}
					/>
					<div className="rotate-90 md:rotate-0">
						<SmallArrow />
					</div>
					<Image
						src="/images/home_braille_2.png"
						width={284}
						height={220}
						alt="image_1"
						style={{ objectFit: "cover" }}
					/>
					<div className="rotate-90 md:rotate-0 py-[20px] md:py-0">
						<BigArrow />
					</div>
					<Image
						src="/images/home_braille_3.png"
						width={540}
						height={300}
						alt="image_1"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center bg-primary py-[30px]">
				<div className="mb-[30px]">
					<h3>User Feedback</h3>
					<p>2023년도 11월 MVP 사용자 테스트 피드백</p>
				</div>
				<UserFeedbackItem
					imageSrc="/images/home_feedback_1.png"
					imageLabel="시각장애인 대학생 A (여 20)"
					paragraph="사실 지금까지 PDF를 BRF로 바로 변환한다는 건 제가 학생 때 수학 공부를 하면서 한 번도 생각해 보지 못했던 프로그램이었어서 너무 편리할 것 같다는 생각을 많이 했습니다."
				/>
				<UserFeedbackItem
					imageSrc="/images/home_feedback_2.png"
					imageLabel="시각장애인 수학교사 (남)"
					paragraph="훌륭하네요. 기존에 안 했던 시도들인데 이제 새롭게 한 거잖아요. 실제 사용하는 학생이 또 필요에 의해서 한 거니까 굉장히 실용적인 걸 잘 만든 것 같고 완성도도 비교적 있는 것 같아요."
					reverse
				/>
				<UserFeedbackItem
					imageSrc="/images/home_feedback_3.png"
					imageLabel="시각장애인 고등학생 A (남 17)"
					paragraph="웹 같은 거 구성이 되게 너무 직관적으로 잘 돼 있어가지고 쓰기 편했던 것 같고 아직 문제밖에 안 된다고 하시긴 하셨는데 그래도 PDF 딱 찍어서 바로 되는게 이전엔 없었던거라 좋았습니다."
				/>
				<UserFeedbackItem
					imageSrc="/images/home_feedback_4.png"
					imageLabel="시각장애인 대학생 (남 20)"
					paragraph="일단 BRF라는 확장자로 뭔가를 변환한다는 걸 프로그램 통해서 할 수 있는 경로는 없다고 알고 있거든요. 근데 그런 시도 자체가 너무 그냥 좋았다고 생각하고 유용한 프로그램 같아요."
					reverse
				/>
			</section>
		</div>
	);
};

export default HomePage;
