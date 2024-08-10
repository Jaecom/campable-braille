import React from "react";
import BrfPageIcon from "@/public/icons/upload-file-txt-icon.svg";

type Props = {
	file: { file: File | null; filename: string };
	onNewFileUpload: () => void;
};

const DownloadScreen = ({ file, onNewFileUpload }: Props) => {
	const onDownloadClick = () => {
		if (!file.file) return;

		const { file: fileData, filename } = file;
		const url = window.URL.createObjectURL(new Blob([fileData]));
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", `${filename}_converted`);
		const empty = document.querySelector(".empty")!;
		empty.appendChild(link);
		link.click();
		empty.removeChild(link);
	};

	return (
		<div className="w-[500px] flex flex-col items-center gap-y-5 text-center">
			<h2>파일 변환 완료!</h2>
			<p>
				{file.filename} 파일 변환이 성공적으로 완성되었습니다. <br />
				파일 다운로드 버튼을 눌러 점자 파일을 받아보세요!
			</p>
			<div className="flex flex-col items-center">
				<BrfPageIcon />
				<p className="mt-2 ml-[-5%]">{file.filename}.txt</p>
			</div>
			<div className="empty hidden"></div>

			<div className="mt-5 flex flex-col gap-y-5">
				<button className="bg-primary text-white w-[320px] h-[50px]" onClick={onDownloadClick}>
					점자 파일 다운로드하기
				</button>
				<button className="border-solid border-black border-[1px] w-[320px] h-[50px]" onClick={onNewFileUpload}>
					새 파일 변환하기
				</button>
			</div>
		</div>
	);
};

export default DownloadScreen;
