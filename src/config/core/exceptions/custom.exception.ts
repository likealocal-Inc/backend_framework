import { HttpException } from '@nestjs/common';
import { ExceptionCode } from './exception.code';

/**
 * Core 에외
 */
export class CustomException extends HttpException {
  constructor(codeInfo: ExceptionCode, status: number) {
    const code = codeInfo.getCode();
    const message = codeInfo.getMessage();

    super({ code, message }, status);
  }
}
