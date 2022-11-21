window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = document.getElementById('angler')
    const canvas_width = canvas.width = image.width;
    const canvas_height = canvas.height = image.height;
    const resolution = document.getElementById('resolution');
    const resLabel = document.getElementById('resLabel');

    class Cell {
        constructor(context, x, y, symbol, color) {
            context.fillStyle = color;
            context.fillText(symbol, x, y);
        }
    }

    class AsciiEffect {
        #imageCellArray = [];
        #pixels = [];
        #context;
        #width;
        #height;
        constructor(context, width, height) {
            this.#context = context;
            this.#width = width;
            this.#height = height;
            this.#context.drawImage(image, 0, 0, this.#width, this.#height);
            this.#pixels = this.#context.getImageData(0, 0, this.#width, this.#height).data;
        }
        #convertToSymbol(color) {
            if (color > 240) return '*';
            if (color > 220) return '-';
            if (color > 200) return '^';
            if (color > 180) return '+';
            if (color > 160) return '!';
            if (color > 140) return '/';
            if (color > 120) return '§';
            if (color > 100) return 'X';
            if (color > 80) return '&';
            if (color > 60) return '%';
            if (color > 40) return '@';
            if (color > 20) return '#';
            else return '';

        }
        #scanImage(cellSize) {
            for (let y = 0; y < this.#height; y += cellSize) {
                for (let x = 0; x < this.#width; x += cellSize) {
                    const index = (y * this.#width + x) * 4;
                    if (this.#pixels[index + 3] > 0) {
                        const red = this.#pixels[index];
                        const green = this.#pixels[index + 1];
                        const blue = this.#pixels[index + 2];
                        const averageColorValue = (red + green + blue) / 3
                        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                        const symbol = this.#convertToSymbol(averageColorValue);
                        this.#imageCellArray.push(new Cell(this.#context, x, y, symbol, color))
                    }
                }
            }
        }
        draw(cellSize) {
            this.#scanImage(cellSize);
        }
    }

    resolution.addEventListener('change', () => {
        ctx.clearRect(0, 0, canvas_width, canvas_height);
        ctx.font = parseInt(resolution.value) + 'px Verdana';
        effect.draw(parseInt(resolution.value));
        resLabel.innerHTML = 'Resolution ' + resolution.value + 'px';
    })

    const effect = new AsciiEffect(ctx, canvas_width, canvas_height);
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    effect.draw(parseInt(resolution.value));
})
