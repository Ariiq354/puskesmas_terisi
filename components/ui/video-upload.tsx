"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

interface VideoUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onChange, value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpdate = (link: string) => {
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9_-]{11})/;
    const match = link.match(regex);
    if (match) {
      const videoId = match[5];
      const normalLink = `https://www.youtube.com/embed/${videoId}`;
      onChange(normalLink);
    } else {
      onChange("");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value && (
          <div className="relative rounded-md overflow-hidden">
            <iframe src={value} width={300} height={169} />
          </div>
        )}
      </div>
      <Input
        onChange={(e) => onUpdate(e.target.value)}
        type="text"
        placeholder="Enter youtube link"
        value={value}
      ></Input>
    </div>
  );
};

export default VideoUpload;
