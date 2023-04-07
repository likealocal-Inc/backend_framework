import { HttpException } from '@nestjs/common';

/**
 * Core 에외
 */
export class CoreException extends HttpException {
  constructor(code: string, message: string, status: number) {
    super({ code, message }, status);
  }
}
