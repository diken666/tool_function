
// 判断是否是受限制的（目标）浏览器
// 返回：BOOLEAN
function isLimitAgent() {
  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf("Opera") > -1;
  const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
  const isEdge = userAgent.indexOf("Edge") > -1;
  return isOpera || isIE || isEdge
}

// 页面平滑滚动到某处
// 参数：数字，传入的window.scrollY的值
function scrollToY(y) {
  if (isLimitAgent()) {
    window.scrollTo(0, y);
  } else {
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}