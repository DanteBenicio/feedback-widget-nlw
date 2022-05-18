/* eslint-disable no-undef */
/* eslint-disable max-len */
import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy }, // Mock de dependecia
  { sendMail: sendMailSpy }, // Mock de dependecia
);

/* eslint-disable no-undef */
describe('submit feedback', () => {
  it('Should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({ // Espero que o methodo "execute" funcione e não lance nenhum error
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('Should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({ // Espero que o methodo "execute" falhe e lance um error
      type: '',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow();
  });

  it('Should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({ // Espero que o methodo "execute" falhe e lançe um error
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow();
  });

  it('Should not be able to submit a feedback without base64 image format', async () => {
    await expect(submitFeedback.execute({ // Espero que o methodo "execute" falhe e lançe um error
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });
});
