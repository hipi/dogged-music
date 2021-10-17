// * 复制到剪贴板
export const copyToClipboard = (text) => navigator.clipboard.writeText(text)

// * 检查用户的设备是否处于暗模式
export const checkDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const changeAppearance = (appearance = 'auto') => {
  if (appearance === 'auto') {
    appearance = checkDarkMode() ? 'dark' : 'light'
  }
  document.body.setAttribute('data-theme', appearance)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', appearance === 'dark' ? '#222' : '#fff')
}

// * 字节数转大小
export const bytesToSize = (nBytes) => {
  // 默认1000进制
  let marker = 1000
  if (/windows|win32/i.test(navigator.userAgent)) {
    // Win 文件大小1024进制
    marker = 1024
  }
  let size = nBytes + ' Bytes'
  for (let aMultiples = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], nMultiple = 0, nApprox = nBytes / marker; nApprox > 1; nApprox /= marker, nMultiple++) {
    size = Math.floor(nApprox * 100) / 100 + ' ' + aMultiples[nMultiple]
  }
  return size
}
