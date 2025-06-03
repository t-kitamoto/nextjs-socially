'use client';

import { UploadDropzone } from '@/lib/uploadthing';
import { XIcon } from 'lucide-react';

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: 'postImage';
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img
          src={value}
          alt="Upload"
          className="rounded-md size-40 object-cover"
        />
        <button
          onClick={() => onChange('')}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[300px]">
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(error: Error) => {
            console.log(error);
          }}
          appearance={{
            container:
              'flex flex-col items-center justify-center text-center space-y-2',
            button:
              'bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600',
            label: 'text-sm text-gray-500 text-center',
          }}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
