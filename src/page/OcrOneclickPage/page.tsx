"use client"

import React, { useRef, useState } from "react"
import { processOcr } from "@/src/api/request"

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
		<div className="bg-dark-grey h-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-3">
				<button
					aria-label="이미지 업로드"
					onClick={handleButtonClick}
					className="bg-primary text-dark-grey w-[320px] h-[50px] text-center disabled:opacity-50"
					disabled={loading}
				>
					{loading ? "처리 중..." : "이미지 업로드하기"}
				</button>
				<input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
				<div className="empty hidden"></div>
			</div>
		</div>
	)
}

export default OcrOneclickPage
