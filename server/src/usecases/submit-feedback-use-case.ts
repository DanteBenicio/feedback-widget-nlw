/* eslint-disable no-empty-function */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { FeedbacksRepository } from '../repositories/feedbacks-repository';
import { MailAdapter } from '../services/mail-service';

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required!');
    }

    if (!comment) {
      throw new Error('Comment is required!');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 1rem; color: #111;">',
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"/>` : null,
        '</div>',
      ].join('\n'),
    });
  }
}
