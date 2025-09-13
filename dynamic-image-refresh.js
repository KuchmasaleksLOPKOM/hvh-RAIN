setInterval(() => {
  const img = document.getElementById('dynamic-image');
  if (img) {
    const src = img.src.split('?')[0];
    img.src = src + '?t=' + new Date().getTime();
  }
}, 500);
