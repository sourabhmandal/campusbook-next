import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

function generateRandomThreeDigitNumbers(count: number) {
  const numbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNumber);
  }

  return numbers;
}

const imageIds = generateRandomThreeDigitNumbers(10);

export function UploadsPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="flex gap-4">
      <div className="w-3/5 aspect-[5/3] relative">
        {selectedImage && (
          <Image
            src={`https://picsum.photos/id/${selectedImage}/800/500`}
            alt="preview"
            layout="fill"
            className="border object-cover hover:object-contain bg-orange-100 rounded-sm"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 w-2/5 h-80 scroll-m-0 overflow-y-auto  p-4 pl-1">
        {imageIds.map((num, index) => (
          <div key={index} className="relative">
            {selectedImage == num && (
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 z-10 bg-white text-black border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100"
                aria-label="Deselect image"
              >
                <Cross1Icon className="w-3 h-3" />
              </button>
            )}

            <Image
              key={index}
              src={`https://picsum.photos/id/${num}/100/100`}
              alt="preview"
              width={100}
              height={100}
              className={`rounded-sm w-full object-cover cursor-pointer ${
                selectedImage == num ? "ring-2 ring-offset-1 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(num)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
