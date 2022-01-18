window.onload = game;

function game() {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);
    ctx.fillStyle = "rgb(53, 112, 112)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //snake, apple, etc.
    var key;
    var arr = [];

    var apple = {
        eaten: false,
        //first is x and second is y
        place: []
    };
    var snake = {
        //coordinates of each body part, first being the head
        body: [
            [9, 10],
            [9, 11],
            [9, 12]
        ]
    };


    function firstIteration() {
        apple.place[0] = Math.floor(Math.random() * 20);
        apple.place[1] = Math.floor(Math.random() * 20);
        for (let i = 0; i < snake.body.length; i++) {
            if (apple.place[0] == snake.body[i][0] && apple.place[1] == snake.body[i][1]) {
                firstIteration();
            }
        }
    }
    firstIteration();


    document.addEventListener("keypress", function(event) {
        if (event.code === "KeyA" || event.code === "KeyW" || event.code === "KeyS" || event.code === "KeyD") {
            key = event.key;
            arr.unshift(key);
            console.log(arr[1]);
        }
    })

    function setApple() {
        if (apple.eaten) {
            apple.place[0] = Math.floor(Math.random() * 20);
            apple.place[1] = Math.floor(Math.random() * 20);
            for (let i = 0; i < snake.body.length; i++) {
                if (apple.place[0] == snake.body[i][0] && apple.place[1] == snake.body[i][1]) {
                    setApple();
                }
            }
            apple.eaten = false;
        }
    }

    function up() {
        for (let i = 0; i < snake.body.length - 1; i++) {
            snake.body[snake.body.length - 1 - i][1] = snake.body[snake.body.length - 1 - i - 1][1];
            snake.body[snake.body.length - 1 - i][0] = snake.body[snake.body.length - 1 - i - 1][0];
        }
        snake.body[0][1]--;
    }

    function down() {
        for (let i = 0; i < snake.body.length - 1; i++) {
            snake.body[snake.body.length - 1 - i][1] = snake.body[snake.body.length - 1 - i - 1][1];
            snake.body[snake.body.length - 1 - i][0] = snake.body[snake.body.length - 1 - i - 1][0];
        }
        snake.body[0][1]++;
    }

    function left() {
        for (let i = 0; i < snake.body.length - 1; i++) {
            snake.body[snake.body.length - 1 - i][0] = snake.body[snake.body.length - 1 - i - 1][0];
            snake.body[snake.body.length - 1 - i][1] = snake.body[snake.body.length - 1 - i - 1][1];
        }
        snake.body[0][0]--;
    }

    function right() {
        for (let i = 0; i < snake.body.length - 1; i++) {
            snake.body[snake.body.length - 1 - i][0] = snake.body[snake.body.length - 1 - i - 1][0];
            snake.body[snake.body.length - 1 - i][1] = snake.body[snake.body.length - 1 - i - 1][1];
        }
        snake.body[0][0]++;
    }

    function drawApple() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(apple.place[0] * 30, apple.place[1] * 30, 20, 20);
    }

    function drawSnake() {
        ctx.fillStyle = "rgb(53, 112, 112)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        for (let i = 0; i < snake.body.length; i++) {
            ctx.fillRect(snake.body[i][0] * 30, snake.body[i][1] * 30, 20, 20);
        }
        setApple();
        drawApple();
    }

    function checkBody() {
        if (key == "w") {
            for (let i = 1; i < snake.body.length; i++) {
                let temp = snake.body[0][1];
                if (temp-- == snake.body[i][1] && snake.body[0][0] == snake.body[i][0]) {
                    key = arr[1];
                    // return false;
                }
            }
        } else if (key == "d") {
            for (let i = 1; i < snake.body.length; i++) {
                let temp = snake.body[0][0];
                if (temp++ == snake.body[i][0] && snake.body[0][1] == snake.body[i][1]) {
                    key = arr[1];
                    // return false;
                }
            }
        } else if (key == "a") {
            for (let i = 1; i < snake.body.length; i++) {
                let temp = snake.body[0][0];
                if (temp-- == snake.body[i][0] && snake.body[0][1] == snake.body[i][1]) {
                    key = arr[1];
                    // return false;
                }
            }
        } else if (key == "s") {
            for (let i = 1; i < snake.body.length; i++) {
                let temp = snake.body[0][1];
                if (temp++ == snake.body[i][1] && snake.body[0][0] == snake.body[i][0]) {
                    key = arr[1];

                    // return false;
                }
            }
        }
        // return true;
    }

    function checkLost() {
        let tempx = snake.body[0][0];
        let tempy = snake.body[0][1];
        if (tempx == 20 || tempx == -1 || tempy == 20 || tempy == -1) {
            return true;
        } else {
            if (key == "w") {
                for (let i = 3; i < snake.body.length; i++) {
                    let temp = snake.body[0][1];
                    if (temp-- == snake.body[i][1] && snake.body[0][0] == snake.body[i][0]) {
                        return true;
                    }
                }
            } else if (key == "d") {
                for (let i = 3; i < snake.body.length; i++) {
                    let temp = snake.body[0][0];
                    if (temp++ == snake.body[i][0] && snake.body[0][1] == snake.body[i][1]) {
                        return true;
                    }
                }
            } else if (key == "a") {
                for (let i = 3; i < snake.body.length; i++) {
                    let temp = snake.body[0][0];
                    if (temp-- == snake.body[i][0] && snake.body[0][1] == snake.body[i][1]) {
                        return true;
                    }
                }
            } else if (key == "s") {
                for (let i = 3; i < snake.body.length; i++) {
                    let temp = snake.body[0][1];
                    if (temp++ == snake.body[i][1] && snake.body[0][0] == snake.body[i][0]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }


    let intervalId = setInterval(interval, 115);


    function interval() {
        if (key == "d") {
            right();
            checkBody();
        }
        if (key == "w") {
            up();
            checkBody();
        }
        if (key == "a") {
            left();
            checkBody();
        }
        if (key == "s") {
            down();
            checkBody();
        }
        if (snake.body[0][0] * 30 == apple.place[0] * 30 && snake.body[0][1] * 30 == apple.place[1] * 30) {
            apple.eaten = true;
        }
        if (apple.eaten) {
            snake.body.push([snake.body[snake.body.length - 1][0], snake.body[snake.body.length - 1][1]]);
        }
        if (checkLost() == true) {
            lost();
        }
        console.log(snake.body[0][0]);
        drawSnake();
    }


    function lost() {
        let alpha = 0.1;
        var i = 0;
        clearInterval(intervalId);
        let deathAnimation = setInterval(() => {
            ctx.globalAlpha = alpha;
            i += 0.2;
            alpha += 0.01;
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (i > 0.8) {
                finish();
            }
        }, 50);

        function finish() {
            clearInterval(deathAnimation);
            ctx.font = "50px Arial";
            ctx.fillStyle = "black";
            ctx.globalAlpha = 1;
            ctx.fillText("YOU HAVE DIED.", 100, 250);
            ctx.fillStyle = "black";
            ctx.globalAlpha = 1;
            ctx.font = "19px Arial";
            ctx.fillText("Click anywhere to restart.", 185, 327);
            let score = String(snake.body.length);
            ctx.fillText(`Your score: ${score}`, 240, 500);
            canvas.addEventListener("click", () => {
                canvas.remove();
                game();
            })
        }
    }
}
