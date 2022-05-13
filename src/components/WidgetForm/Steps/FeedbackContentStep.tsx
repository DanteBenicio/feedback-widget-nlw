import { ArrowLeft, Camera } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from '..';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | undefined>>
}

// eslint-disable-next-line max-len
export default function FeedbackContentStep({ feedbackType, setFeedbackType }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header className="flex items-center gap-2 mb-4">
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={() => setFeedbackType(undefined)}
        >
          <ArrowLeft weight="bold" />
        </button>

        <span className="flex justify-center items-center text-xl leading-6 gap-2">
          <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} width={25} />
          {feedbackTypeInfo?.title}
        </span>
      </header>

      <form action="">
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 border-[1px] bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none p-2 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        />
        <footer className="flex justify-center items-center gap-2 mb-4">
          <button type="button" className="w-12 bg-surface-secondary p-1 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <Camera className="block mx-auto text-3xl" />
          </button>
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent text-center flex-1 font-medium transition-all hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
