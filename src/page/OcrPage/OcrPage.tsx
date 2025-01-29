"use client";
import React, { useState } from "react";
import ConvertImageScreen from "./ConvertImageScreen";
import DownloadScreen from "../ConvertPage/screens/DownloadScreen";
import { processOcr } from "@/src/api/request";
import Loading from "@/src/components/atoms/Loading";

const OcrPage = () => {
	const [stage, setStage] = useState<"convert" | "download">("convert");
	const [isLoading, setIsLoading] = useState(false);
	const [convertedFile, setConvertedFile] = useState<{ file: File | null; filename: string }>({
		file: null,
		filename: "",
	});
	const onFileConfirm = async (file: File) => {
		setIsLoading(true);
		const formData = new FormData();
		formData.append("image", file);

		const { data } = await processOcr(formData);

		const filename = file.name.includes(".") ? file.name.split(".")[0] : file.name;
		setConvertedFile({ file: data, filename });
		setIsLoading(false);
		setStage("download");
	};

	return (
		<div className="flex flex-col justify-center items-center">
			{isLoading && <Loading />}
			{stage === "convert" && <ConvertImageScreen onFileConfirm={onFileConfirm} />}
			{stage === "download" && <DownloadScreen file={convertedFile!} onNewFileUpload={() => setStage("convert")} />}
		</div>
	);
};

export default OcrPage;
