/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-service';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'd9d48789dd3351',
    pass: '9bfe5713928969',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <feedget@gmail.com>',
      to: 'Dante Benicio <dantecosta79@gmail.com>',
      subject,
      html: body,
    });
  }
}
