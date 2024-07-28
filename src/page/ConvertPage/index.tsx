"use client";
import React, { useState } from "react";
import UploadScreen from "./screens/UploadScreen";
import DownloadScreen from "./screens/DownloadScreen";
import axios from "axios";
import { convertFile } from "@/src/api/request";

const ConvertPage = () => {
	const [stage, setStage] = useState<"upload" | "convert" | "download">("upload");
	const [convertedFile, setConvertedFile] = useState<File | null>(null);

	const onFileConfirm = async (file: File) => {
		const formData = new FormData();
		formData.append("file", file);

		try {
			const { data } = await convertFile(formData);
			setConvertedFile(data);
			setStage("download");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="h-full flex flex-col justify-center items-center">
			{stage === "upload" && <UploadScreen onFileConfirm={onFileConfirm} />}
			{stage === "download" && <DownloadScreen file={convertedFile!} onNewFileUpload={() => setStage("upload")} />}
		</div>
	);
};

export default ConvertPage;
