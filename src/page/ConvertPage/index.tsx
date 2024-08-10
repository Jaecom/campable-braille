"use client";
import React, { useState } from "react";
import UploadScreen from "./screens/UploadScreen";
import DownloadScreen from "./screens/DownloadScreen";
import { convertFile } from "@/src/api/request";

const ConvertPage = () => {
	const [stage, setStage] = useState<"upload" | "convert" | "download">("upload");
	const [convertedFile, setConvertedFile] = useState<{ file: File | null; filename: string }>({
		file: null,
		filename: "",
	});

	const onFileConfirm = async (file: File) => {
		const formData = new FormData();
		formData.append("file", file);

		try {
			const { data } = await convertFile(formData);
			const filename = file.name.includes(".") ? file.name.split(".")[0] : file.name;
			setConvertedFile({ file: data, filename });
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
