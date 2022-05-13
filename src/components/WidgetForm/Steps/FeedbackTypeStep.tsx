import React from 'react';
import { FeedbackType, feedbackTypes } from '..';

interface FeedbackTypeStepProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | undefined>>
}

export default function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>
      <div className="flex py-8 gap-2 w-full justify-center">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            type="button"
            className="card"
            key={key}
            onClick={() => setFeedbackType(key as FeedbackType)}
          >
            <img src={value.image.src} alt={value.image.alt} className="w-10" />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
