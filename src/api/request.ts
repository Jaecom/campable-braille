import axios from "axios"

const baseUrl = process.env.NODE_ENV === "production" ? "https://api.campable.io" : "http://localhost:8000"

axios.defaults.baseURL = baseUrl

export const convertFile = async (formData: FormData) =>
	await axios.post("/braille/convert-file", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		responseType: "blob",
	})

export const processOcr = async (formData: FormData) =>
	await axios.post("/braille/ocr", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		responseType: "blob",
	})

export const testOcr = async (formData: FormData) =>
	await axios.post("/braille/test/ocr", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	})
