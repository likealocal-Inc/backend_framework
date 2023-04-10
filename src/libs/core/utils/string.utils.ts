export const StringUtils = {
  /**
   * 스트링이값이 있는지 확인
   * @param str
   * @returns
   */
  isNotEmpty: (str: string): boolean => {
    if (str === undefined || str === null || str.trim() === '') {
      return false;
    }
    return true;
  },
  /**
   * 널/공백 체크
   * @param str
   * @returns
   */
  isEmpty: (str: string): boolean => {
    return !StringUtils.isNotEmpty(str);
  },
};
