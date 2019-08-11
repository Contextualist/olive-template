document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowUp') {
    slide.goPrev()
  } else if (e.key === 'ArrowDown') {
    slide.goNext()
  }
});

let mouseTimer = null, cursorVisible = true;
document.onmousemove = function() {
  if (mouseTimer) {
    window.clearTimeout(mouseTimer);
  }
  if (!cursorVisible) {
    document.body.style.cursor = "default";
    cursorVisible = true;
  }
  mouseTimer = window.setTimeout(() => { 
    mouseTimer = null;
    document.body.style.cursor = "none";
    cursorVisible = false;
  }, 5000);
};

async function initWakeLock() {
  try {
    let wakeLock = await navigator.getWakeLock('screen')
    wakeLock.createRequest()
    console.log('screen wakeLock enabled')
  } catch (err) {
    console.error('navigator.getWakeLock failed', err)
  }
}
if ('getWakeLock' in navigator) {
  console.log('navigator.getWakeLock is supported')
  initWakeLock()
}
