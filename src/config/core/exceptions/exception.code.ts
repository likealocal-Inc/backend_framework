export class ExceptionCode {
  constructor(
    private readonly code: string,
    private readonly message: string,
  ) {}
  getCode = () => this.code;
  getMessage = () => this.message;
}

export const ExceptionCodeList = {
  AUTH: {
    WRONG_PASSWORD: new ExceptionCode('WRONG_PASSWORD', '패스워드 오류'),
    NO_SESSION_KEY: new ExceptionCode('NO_SESSION_KEY', '세션키가 없음'),
    WRONG_SESSION_KEY: new ExceptionCode('WRONG_SESSION_KEY', '세션키가 오류'),
    WRONG_ROLE: new ExceptionCode('WRONG_ROLE', '권한 오류'),
    TOKEN_FAIL: new ExceptionCode('TOKEN_FAIL', '토큰 오류'),
  },
  USER: {
    NOT_EXIST_EMAIL: new ExceptionCode('NOT_EXIST_EMAIL', '이메일 존재'),
    ALREADY_EXIST_USER: new ExceptionCode(
      'ALREADY_EXIST_USER',
      '이미 사용자 존재',
    ),
  },
  COMMON: {
    WRONG_REQUEST: new ExceptionCode('WRONG_REQUEST', '요청 오류'),
  },
};
