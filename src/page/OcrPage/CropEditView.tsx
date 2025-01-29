import React, { useState, useCallback, useEffect } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Image from "next/image";

type Props = {
	imgRef: any;
	imageSrc: any;
	setCroppedImage: (image: string) => void;
};

const CropEditView = ({ imgRef, imageSrc, setCroppedImage }: Props) => {
	const [crop, setCrop] = useState<Crop>({ unit: "%", width: 50, height: 50, x: 25, y: 25 });

	const handleCropComplete = useCallback((crop: Crop) => {
		if (!imgRef.current || !crop.width || !crop.height) return;

		const image = imgRef.current;
		const canvas = document.createElement("canvas");
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width * scaleX;
		canvas.height = crop.height * scaleY;
		const ctx = canvas.getContext("2d");

		if (ctx) {
			ctx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				canvas.width,
				canvas.height
			);

			canvas.toBlob((blob) => {
				if (blob) {
					const previewUrl = URL.createObjectURL(blob);
					setCroppedImage(previewUrl);
				}
			});
		}
	}, []);

	return (
		<div>
			<ReactCrop crop={crop} onChange={(newCrop) => setCrop(newCrop)} onComplete={handleCropComplete}>
				<img ref={imgRef} src={imageSrc} alt="uploaded file" style={{ maxHeight: "400px", width: "auto" }} />
			</ReactCrop>
		</div>
	);
};

export default CropEditView;
