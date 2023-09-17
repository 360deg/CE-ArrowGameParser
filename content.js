var canvas = document.querySelector('canvas');
if (!canvas.hasClickListener) {
    canvas.addEventListener('click', (e) => {
        setTimeout(() => {
            window.requestAnimationFrame(() => {
                downloadCanvasImage(canvas);
            });
        }, 300);
    });
    canvas.hasClickListener = true;
}
runNewGame()

function runNewGame() {
    window.requestAnimationFrame(() => {
        downloadCanvasImage(canvas, 1);
    });
}

function downloadCanvasImage(canvas, newGame = 0) {
    let url = "http://localhost:5000/test?newGame="+newGame;
    const dataUrl = canvas.toDataURL("image/png");

    fetch(dataUrl)
        .then(res => res.blob())
        .then(blobData => {
            fetch(url, {
                method: "POST",
                body: blobData
            })
                .then(response => response.json())
                .then(resp => {
                    console.log(resp.result);
                    if (resp.result === 'the_end') {
                        w8aMinute()
                    }
                })
                .catch(error => console.log('Error:', error));
        })
        .catch(error => console.log('Error:', error));
}

function w8aMinute() {
    setTimeout(() => {
        var button = document.querySelector('.styles__Button-sc-1tfs2h7-0.kHrBTK');
        button.click();

        setTimeout(() => {
            runNewGame();
        }, 200)
    }, 2000)
}
