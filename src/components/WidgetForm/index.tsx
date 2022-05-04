import CloseButton from '../CloseButton'

import './styles.css'

import bugImage from '../../assets/figmoji-bug.svg'
import ideaImage from '../../assets/figmoji-idea.svg'
import thoughtImage from '../../assets/figmoji-thought.svg'
import { useState } from 'react'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImage,
      alt: 'Bug image'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImage,
      alt: 'Light buld image'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImage,
      alt: 'Thought image'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>()

  return (
    <div className="widget_form">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>
      <CloseButton />

      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType}/>
      ) : (
        <p>{feedbackType}</p>
      )}

      <footer>
        Feito com ♥ pela <a href="https://rocketseat.com" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}
