import { Injectable } from '@nestjs/common';

import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';
import { DefaultConfig } from 'src/config/default.config';
import { CustomException } from 'src/config/core/exceptions/custom.exception';
import { ExceptionCodeList } from 'src/config/core/exceptions/exception.code';

export class EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class CEmailService {
  private mail: Mail;

  constructor() {
    this.mail = nodemailer.createTransport(DefaultConfig.email.getInfo());
  }

  /**
   * 메일 전송
   * @param emailOption
   * @returns
   */
  async send(emailOption: EmailOptions): Promise<any> {
    try {
      return await this.mail.sendMail(emailOption);
    } catch (err) {
      console.log(err);
      throw new CustomException(ExceptionCodeList.COMMON.EMAIL_SEND_ERROR, err);
    }
  }
}
