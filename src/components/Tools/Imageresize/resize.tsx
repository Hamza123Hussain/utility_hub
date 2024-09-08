import React, { useRef, useState } from 'react'
import pica from 'pica'
const ImageUploader: React.FC = () => {
  const [resizedImage, setResizedImage] = useState<string | null>(null)
  const [width, setWidth] = useState<number>(800) // State for width input
  const [height, setHeight] = useState<number>(600) // State for height input
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const handleResize = async () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0]
      const img = document.createElement('img')
      img.src = URL.createObjectURL(file)

      img.onload = async () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (ctx) {
          canvas.width = width // New width from input
          canvas.height = height // New height from input
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

          try {
            const resizedBlob = await pica().toBlob(canvas, 'image/jpeg')
            const resizedImageUrl = URL.createObjectURL(resizedBlob)
            setResizedImage(resizedImageUrl)
          } catch (error) {
            console.error('Error resizing image:', error)
          }
        }
      }
    }
  }
  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="mb-4 p-2 border border-gray-300 rounded w-[50vw]"
      />
      <div className="mb-4">
        <label className="block text-white font-extrabold mb-2">Width</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded w-[50vw]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-extrabold mb-2">Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded w-[50vw]"
        />
      </div>
      <button
        onClick={handleResize}
        className="p-2 bg-[#FF9A8B] text-white rounded mb-4"
      >
        Resize Image
      </button>
      {resizedImage && (
        <div className="flex flex-col items-center">
          <img
            src={resizedImage}
            alt="Resized"
            className="mb-4 border border-gray-300 rounded w-[50vw]"
          />
          <a
            href={resizedImage}
            download="resized.jpg"
            className="p-2 bg-[#FF9A8B] text-white rounded"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  )
}
export default ImageUploader
