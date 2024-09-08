import React, { useRef, useState } from 'react'
import pica from 'pica'

const ImageUploader: React.FC = () => {
  // State to store the resized image URL or null
  const [resizedImage, setResizedImage] = useState<string | null>(null)

  // State to store the width and height inputs, default values are 800x600
  const [width, setWidth] = useState<number>(800) // Width input state
  const [height, setHeight] = useState<number>(600) // Height input state

  // Reference to the file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Function to handle image resizing
  const handleResize = async () => {
    // Check if a file is selected from the input
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0] // Get the first selected file
      const img = document.createElement('img') // Create an image element
      img.src = URL.createObjectURL(file) // Set the image source to the selected file's URL

      // When the image is loaded, proceed with resizing
      img.onload = async () => {
        const canvas = document.createElement('canvas') // Create a canvas element
        const ctx = canvas.getContext('2d') // Get the 2D drawing context

        // Check if context is available
        if (ctx) {
          // Set canvas dimensions to user-specified width and height
          canvas.width = width
          canvas.height = height

          // Draw the image on the canvas with the new dimensions
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

          try {
            // Use the pica library to resize the image and convert it to a Blob
            const resizedBlob = await pica().toBlob(canvas, 'image/jpeg')
            // Create a URL for the resized image Blob
            const resizedImageUrl = URL.createObjectURL(resizedBlob)
            // Update the state with the new resized image URL
            setResizedImage(resizedImageUrl)
          } catch (error) {
            // Log any errors that occur during resizing
            console.error('Error resizing image:', error)
          }
        }
      }
    }
  }

  return (
    <div className="p-4 flex flex-col items-center">
      {/* File input for selecting an image */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*" // Accept only image file types
        className="mb-4 p-2 border border-gray-300 rounded w-[50vw]"
      />

      {/* Input field for width */}
      <div className="mb-4">
        <label className="block text-white font-extrabold mb-2">Width</label>
        <input
          type="number" // Only allow number input
          value={width} // Bind input value to width state
          onChange={(e) => setWidth(Number(e.target.value))} // Update width state on change
          className="p-2 border border-gray-300 rounded w-[50vw]"
        />
      </div>

      {/* Input field for height */}
      <div className="mb-4">
        <label className="block text-white font-extrabold mb-2">Height</label>
        <input
          type="number" // Only allow number input
          value={height} // Bind input value to height state
          onChange={(e) => setHeight(Number(e.target.value))} // Update height state on change
          className="p-2 border border-gray-300 rounded w-[50vw]"
        />
      </div>

      {/* Button to trigger the resize function */}
      <button
        onClick={handleResize}
        className="p-2 bg-[#FF9A8B] text-white rounded mb-4"
      >
        Resize Image
      </button>

      {/* Display the resized image and download link if an image is available */}
      {resizedImage && (
        <div className="flex flex-col items-center">
          {/* Display the resized image */}
          <img
            src={resizedImage}
            alt="Resized"
            className="mb-4 border border-gray-300 rounded w-[50vw]"
          />
          {/* Provide a link to download the resized image */}
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
