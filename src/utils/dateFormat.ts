/**
 * 时间戳转日期
 * @author kongbai
 * @param { number } timeStamp
 * @returns { string } 格式化后的日期
 */
function timeStampToDate(timeStamp: number): string {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? (date.getMonth() + 1).toString().padStart(2, "0") : date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

/**
 * 日期转时间戳
 * @author kongbai
 * @param { string } date
 * @returns { number } 转换得到的时间戳
 */
function dateToTimeStamp(date: string): number {
  return new Date(date).valueOf();
}
