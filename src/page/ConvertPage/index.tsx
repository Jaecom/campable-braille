"use client";
import React, { useRef, useState } from "react";
import UploadScreen from "./screens/UploadScreen";
import DownloadScreen from "./screens/DownloadScreen";

const ConvertPage = () => {
	const [stage, setStage] = useState<"upload" | "convert" | "download">("upload");
	const [convertedFile, setConvertedFile] = useState<File | null>(null);

	const onFileConfirm = (file: File) => {
		//convert file

		setConvertedFile(file);
		setStage("download");
	};

	return (
		<div className="h-full flex flex-col justify-center items-center">
			{stage === "upload" && <UploadScreen onFileConfirm={onFileConfirm} />}
			{stage === "download" && <DownloadScreen file={convertedFile!} onNewFileUpload={() => setStage("upload")} />}
		</div>
	);
};

export default ConvertPage;
