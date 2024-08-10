"use client";

import React from "react";
import PageIcon from "@/public/icons/upload-file-icon.svg";
import UploadCompleteIcon from "@/public/icons/upload-file-complete-icon.svg";
import { useState, useRef } from "react";

type Props = {
	onFileConfirm: (file: File) => void;
};

const UploadScreen = ({ onFileConfirm }: Props) => {
	const [file, setFile] = useState<File | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setFile(file);
	};

	const handleUploadClick = () => {
		inputRef.current?.click();
	};

	const handleConfirmClick = () => {
		if (!file) return;
		onFileConfirm(file);
	};

	return (
		<div className="w-[500px] flex flex-col items-center gap-y-5 text-center">
			<h2>{file ? "파일 변환하기" : "파일 업로드하기"}</h2>
			<p>
				{file ? (
					<>
						{file.name} 파일이 성공적으로 업로드 되었습니다. <br /> 파일을 BRF 형식으로 변환하기 위해 변환 버튼을
						눌러주세요.
					</>
				) : (
					<>
						원하는 교육 자료 파일을 Braille Camp에 업로드해 점자로 변환해보세요. <br />
						변환된 파일을 다운로드해 점자정보단말기에 읽힐 수 있습니다.
					</>
				)}
			</p>

			{file ? (
				<div className="flex flex-col items-center">
					<UploadCompleteIcon />
					<p className="mt-[15px]">{file.name}</p>
				</div>
			) : (
				<PageIcon />
			)}

			<div className="mt-5 flex flex-col gap-y-5">
				{!file && (
					<button className="bg-primary text-white w-[320px] h-[50px]" onClick={handleUploadClick}>
						파일 업로드하기
					</button>
				)}

				{file && (
					<>
						<button className="bg-primary text-white w-[320px] h-[50px]" onClick={handleConfirmClick}>
							파일 변환하기
						</button>
						<button className="border-solid border-black border-[1px] w-[320px] h-[50px]" onClick={handleUploadClick}>
							파일 재업로드하기
						</button>
					</>
				)}
			</div>

			<input className="hidden" ref={inputRef} type="file" onChange={handleFileChange} />

			{!file && <p className="font-light">워드 파일을 업로드해주세요</p>}
		</div>
	);
};

export default UploadScreen;
