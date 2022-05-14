import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import React, { useState } from 'react';
import Loading from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string
  onScreenshotTook: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  return screenshot ? (
    <button
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={() => onScreenshotTook(null)}
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 150,
      }}
    >
      <Trash weight="fill" />
    </button>
  ) : (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="w-12 bg-surface-secondary p-1 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
    >
      { isTakingScreenshot ? <Loading /> : <Camera className="block mx-auto text-3xl" />}
    </button>
  );
}
