import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import ScreenshotButton from '../ScreenshotButton';
import { api } from '../../../lib/api';
import Loading from '../../Loading';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

// eslint-disable-next-line max-len
export default function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState<string>('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header className="flex items-center gap-2 mb-4">
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" />
        </button>

        <span className="flex justify-center items-center text-xl leading-6 gap-2">
          <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} width={25} />
          {feedbackTypeInfo?.title}
        </span>
      </header>

      <form onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder={'Conte com detalhes o que está \nacontecendo...'}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 border-[1px] bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none p-2 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin placeholder:font-medium"
          onChange={e => setComment(e.target.value)}
        />
        <footer className="flex justify-center items-center gap-2 mb-4">
          <ScreenshotButton screenshot={screenshot!} onScreenshotTook={setScreenshot} />

          <button
            type="submit"
            disabled={comment?.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent text-center cursor-pointer flex-1 font-medium transition-all hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
