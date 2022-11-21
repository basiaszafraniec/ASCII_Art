window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = document.getElementById('angler')
    const canvas_width = canvas.width = image.width;
    const canvas_height = canvas.height = image.height;
    ctx.drawImage(image,0,0)
})
