// 获取最近几天时间段信息
// 参数：数字
function getRecentDays(days) {
  const now = new Date().getTime()
  const oneDayMs = 24 * 60 * 60 * 1000
  let array = []
  let tempIndex = days
  while (tempIndex > 0) {
    tempIndex -= 1
    array.push(now - oneDayMs * tempIndex)
  }
  return timeTranslate(array)
}

// 日期格式化 https://www.jianshu.com/p/49fb78bca621
function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

// 格式化时间
// 参数：时间戳数组
function timeTranslate(timeArray) {
  let tempTimeArray = []
  timeArray.forEach(item => {
    const date = new Date(item)
    const year = date.getFullYear()
    const tempMonth = date.getMonth() + 1
    const month = String(tempMonth)[1]
      ? String(tempMonth)[1]
      : '0' + tempMonth
    const tempDays = date.getDate()
    const days = String(tempDays)[1] ? String(tempDays) : '0' + tempDays
    tempTimeArray.push(`${year}-${month}-${days}`)
  })
  return tempTimeArray
}

// 获取最近时间端段内的时间
// 参数：开始时间，结束时间
function getRangeDays(start, end) {
const startDate = new Date(start).getTime()
const endDate = new Date(end).getTime()
const oneDayMs = 24 * 60 * 60 * 1000
let array = []
while (startDate <= endDate) {
    array.push(startDate)
    startDate += oneDayMs
}
return timeTranslate(array)
}