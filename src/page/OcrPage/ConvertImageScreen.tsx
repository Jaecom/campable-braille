"use client";

import React, { useState, useRef } from "react";
import PageIcon from "@/public/icons/upload-file-icon.svg";
import "react-image-crop/dist/ReactCrop.css";
import CropEditView from "./CropEditView";

type Props = {
	onFileConfirm: (file: File) => void;
};

const ConvertImageScreen = ({ onFileConfirm }: Props) => {
	const [file, setFile] = useState<File | null>(null);
	const [imageSrc, setImageSrc] = useState<string | null>(null);
	const [croppedImage, setCroppedImage] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		setFile(file);
		const reader = new FileReader();
		reader.onload = () => {
			setImageSrc(reader.result as string);
		};
		reader.readAsDataURL(file);
	};

	const handleUploadClick = () => {
		inputRef.current?.click();
	};

	const handleConfirmClick = async () => {
		if (!croppedImage) return;

		const response = await fetch(croppedImage);
		const blob = await response.blob();

		const croppedFile = new File([blob], file?.name || "cropped_image.jpg", {
			type: blob.type,
		});

		onFileConfirm(croppedFile);
	};
	return (
		<div className="md:w-[500px] flex flex-col items-center gap-y-5 text-center">
			<h2 className="text-primary">{file ? "이미지 변환하기" : "이미지 업로드하기"}</h2>
			<p className="text-white">
				{file ? (
					<>
						{file.name}
						<br />
						수식만 보이게 영역을 설정해주세요.
					</>
				) : (
					<>
						원하는 교육 자료 이미지를 Braille Camp에 업로드해 점자로 변환해보세요. <br />
						변환된 이미지를 OCR로 처리해 점자정보단말기에 읽힐 수 있습니다.
					</>
				)}
			</p>

			{file && imageSrc ? (
				<div className="flex flex-col items-center w-full">
					<div className="w-full flex justify-center p-4 items-center border-[1px] border-white border-solid">
						<CropEditView imgRef={imgRef} imageSrc={imageSrc} setCroppedImage={setCroppedImage} />
					</div>
					<div className="w-full flex justify-center p-4 items-center border-[1px] border-white border-solid ">
						{croppedImage && (
							<img
								className="object-contain"
								src={croppedImage}
								alt="Cropped preview"
								style={{ maxHeight: "400px", width: "auto" }}
							/>
						)}
					</div>
				</div>
			) : (
				<PageIcon />
			)}

			<div className="mt-5 flex flex-col gap-y-5">
				{!file && (
					<button className="bg-primary text-dark-grey w-[320px] h-[50px]" onClick={handleUploadClick}>
						이미지 업로드하기
					</button>
				)}

				{file && (
					<>
						<button className="bg-primary text-dark-grey w-[320px] h-[50px]" onClick={handleConfirmClick}>
							이미지 변환하기
						</button>
						<button
							className="border-solid border-white text-white border-[1px] w-[320px] h-[50px]"
							onClick={handleUploadClick}
						>
							이미지 재업로드하기
						</button>
					</>
				)}
			</div>

			<input className="hidden" ref={inputRef} type="file" onChange={handleFileChange} accept="image/*" />
			{!file && <p className="font-light text-primary">이미지를 업로드해주세요</p>}
		</div>
	);
};

export default ConvertImageScreen;
