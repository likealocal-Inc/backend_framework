export const ExceptionCode = {
  Auth: {
    ALREADY_EXIST_USER: {
      code: 'ALREADY_EXIST_USER',
      desc: '이미 사용자 존재',
    },
    WRONG_PASSWORD: { code: 'WRONG_PASSWORD', desc: '패스워드 오류' },
    NOT_EXIST_EMAIL: { code: 'NOT_EXIST_EMAIL', desc: '이메일 존재' },
  },
  COMMON: {
    WRONG_REQUEST: { code: 'WRONG_REQUEST', desc: '요청 오류' },
  },
};
