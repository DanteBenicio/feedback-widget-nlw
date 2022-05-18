/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import CloseButton from '../CloseButton';

import './styles.css';

import bugImage from '../../assets/figmoji-bug.svg';
import ideaImage from '../../assets/figmoji-idea.svg';
import thoughtImage from '../../assets/figmoji-thought.svg';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImage,
      alt: 'Bug image',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImage,
      alt: 'Light buld image',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImage,
      alt: 'Thought image',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | undefined>();
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  function handleFeedbackRestart() {
    setFeedbackType(undefined);
    setFeedbackSent(false);
  }

  return (
    <div className="widget_form">
      <CloseButton />

      { feedbackSent ? (
        <FeedbackSuccessStep onResendFeedback={handleFeedbackRestart} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType!} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleFeedbackRestart}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Feito com ♥ pela <a href="https://rocketseat.com" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  );
}
