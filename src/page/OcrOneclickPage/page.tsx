"use client"

import React, { useRef, useState } from "react"
import { processOcr } from "@/src/api/request"
import PageIcon from "@/public/icons/upload-file-icon.svg"

const OcrOneclickPage = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [loading, setLoading] = useState(false)

	const handleButtonClick = () => {
		inputRef.current?.click()
	}

	const downloadFile = async (file: File) => {
		const formData = new FormData()
		formData.append("image", file)
		const filename = file.name.includes(".") ? file.name.split(".")[0] : file.name

		try {
			const { data } = await processOcr(formData)
			const url = window.URL.createObjectURL(new Blob([data]))
			const link = document.createElement("a")
			link.href = url
			link.setAttribute("download", `${filename}_converted.txt`)
			const empty = document.querySelector(".empty")!
			empty.appendChild(link)
			link.click()
			empty.removeChild(link)
		} catch (error) {
			alert("OCR 처리 중 오류가 발생했습니다.")
			console.error(error)
		}

		setLoading(false)
	}

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setLoading(true)
			await downloadFile(file)
			e.target.value = ""
		}
		setLoading(false)
	}

	return (
		<div className="h-full flex flex-col justify-center items-center">
			<div className="flex flex-col items-center gap-3">
				<h2 className="text-primary">OCR 원클릭</h2>
				<p className="text-white text-center">
					파일 업로드 동시에 점자로 변환되어 별도의 이미지 영역 지정 없이
					<br /> 바로 다운로드 받을수 있는 OCR 원클릭 서비스입니다.
				</p>
				<PageIcon />
				<button
					aria-label="이미지 업로드 및 점역"
					onClick={handleButtonClick}
					className="bg-primary text-dark-grey w-[320px] h-[50px] text-center disabled:opacity-50 mt-5"
					disabled={loading}
				>
					{loading ? "처리 중..." : "이미지 업로드 및 점역"}
				</button>
				<p className="font-light text-primary">점자 변환 후 자동 다운로드 됩니다</p>
				<div className="hidden">
					<input ref={inputRef} type="file" accept="image/*" onChange={handleChange} />
					<div className="empty"></div>
				</div>
			</div>
		</div>
	)
}

export default OcrOneclickPage
