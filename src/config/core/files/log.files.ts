import { Files } from './files';

/**
 * 로그파일처리 유틸
 */
export class LogFiles {
  // 로그파일 저장 경로
  file: Files;
  constructor() {
    this.file = new Files();
  }
  /**
   * 로그파일 저장
   * @param data
   * @param fileName
   */
  async save(path: string, fileName: string, data: string) {
    await this.file.write(path, fileName, `${data}\n`);
  }

  /**
   * 해당 경로페 파일 리스트가져오기
   * @param path
   * @returns
   */
  async getLogFileList(path) {
    return await this.file.getFiles(path);
  }
}
