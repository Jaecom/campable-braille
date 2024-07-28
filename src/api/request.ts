import axios from "axios";

const baseUrl = process.env.NODE_ENV === "production" ? "https://api.campable.io" : "http://localhost:8000";

axios.defaults.baseURL = baseUrl;

export const convertFile = async (formData: FormData) =>
	await axios.post("/braille/convert-file", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		responseType: "blob",
	});
