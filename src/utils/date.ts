/**
 * 时间格式化
 * @param fmt 
 * @param date 
 */
export function dateFormat(fmt, date) {
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}
/**
 * 处理特殊符号
 * @param value 
 */
export function dateReplace(value, icon="/") {
  if(!value){
    return 0
  }
  const ctime = value.replace(/-/g, icon);
  return ctime
}
/**
 * 倒计时处理
 * @param value 
 * @param hour 
 */
export function changeTime(value, hour=1) {
  if(!value){
    return 0
  }
  const ctime = dateReplace(value)
  const startTime =  new Date(ctime).getTime() + (hour * 60 * 60 * 1000)
  const newTime = new Date().getTime()
  const time = Math.floor((startTime - newTime) / 1000)
  return time > 0 ? time : 0
}