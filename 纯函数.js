
// 等待*秒
// 参数：秒数
function waitMonment(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

// 从url中提取参数
// 参数：字符串
function getParamsFromUrl(url = '') {
  const sUrl = url || window.location.href
  let params = {}
  let index = sUrl.indexOf("?")
  if (index !== -1) {
      const str = sUrl.substr(index + 1);
      const strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        params[strs[i].split("=")[0]] = decodeURIComponent(
          strs[i].split("=")[1]
        );
      }
    }
  return params
}