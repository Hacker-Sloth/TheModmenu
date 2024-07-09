javascript:(function() {
        function invertColors() {
        (function() {
            function invert(o, t) {
                if ("rgb(0, 0, 0)" == o) return "rgb(255, 255, 255)";
                if ("rgb(255, 255, 255)" == o) return "rgb(0, 0, 0)";
                var n = o.slice(o.indexOf("(") + 1, o.indexOf(")")).split(",");
                n = n.map(function(o) {
                    return "back" == t ? 255 - parseInt(o) : 120 > parseInt(o) ? 255 : 255 - parseInt(o)
                }), n = n.join(","), r[0] + "(" + n + ")"
            }
            document.querySelectorAll("*:not([invTouch])").forEach(function(o) {
                var t = window.getComputedStyle(o);
                o.style.backgroundColor = invert(t.backgroundColor, "back"), o.style.color = invert(t.color, "color"), o.setAttribute("invTouch", "true")
            });
        })();
    }

    function vortex() {
        (function() {
            var x = document.getElementsByTagName("*");
            for (i = 0; i < x.length; i++) {
                x[i].style.position = "absolute";
                x[i].style.top = "50%";
                x[i].style.left = "50%";
                x[i].style.transition = "5s";
                x[i].style.transform = "translate(-50%, -50%)"
            }
        })();
    }

    function documentOscillate() {
        (function() {
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
                Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el) {
                    el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
                });
            });
        })();
    }

    function keyboardMasher() {
        (function() {
            var TEXT = prompt("Text? ");
            Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el) {
                el.onkeypress = function(evt) {
                    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
                    if (charCode && charCode > 31) {
                        var start = this.selectionStart,
                            end = this.selectionEnd;
                        this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
                        this.selectionStart = this.selectionEnd = start + 1;
                    }
                    return false;
                };
            });
        })();
    }

    function screenRotate() {
        setTimeout(function() {
            document.onmousemove = document.onkeypress = function() {
                ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
                    document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
                    document.body.style[prefix + 'transform'] = 'rotate(180deg)';
                });
            };
        }, 5000);
    }

    function openProductivity() {
        window.open("https://drive.google.com/drive/my-drive", '_blank').focus();
        window.open("https://outlook.office.com/mail/", '_blank').focus();
        window.open("https://lakesideschool.instructure.com", '_blank').focus();
    }

    function autoBrowse() {
        (function() {
            var url = prompt("Paste the link yo");
            window.location.replace(url);
        })();
    }

    function startGame() {
        (function() {
            var xpos = Math.random() * 500;
            var ypos = Math.random() * 500;
            var scorecount = 0;
            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.background = "green";
            div.style.left = xpos + "px";
            div.style.top = ypos + "px";
            div.style.height = "120px";
            div.style.width = "120px";
            div.id = "you";
            document.body.appendChild(div);
            var score = document.createElement("div");
            score.style.position = "absolute";
            score.style.left = "10px";
            score.style.top = "10px";
            score.style.color = "white";
            score.id = "score";
            score.innerHTML = "Score: 0";
            document.body.appendChild(score);
            var bg = document.createElement("div");
            bg.style.position = "absolute";
            bg.style.left = "0";
            bg.style.top = "0";
            bg.style.width = "100%";
            bg.style.height = "100%";
            bg.style.background = "black";
            bg.id = "bg";
            document.body.appendChild(bg);
            document.onkeydown = function(e) {
                if (e.keyCode == 37) xpos -= 10;
                if (e.keyCode == 38) ypos -= 10;
                if (e.keyCode == 39) xpos += 10;
                if (e.keyCode == 40) ypos += 10;
                document.getElementById("you").style.left = xpos + "px";
                document.getElementById("you").style.top = ypos + "px";
                scorecount++;
                document.getElementById("score").innerHTML = "Score: " + scorecount;
            };
            var enemy = document.createElement("div");
            enemy.style.position = "absolute";
            enemy.style.background = "red";
            enemy.style.height = "120px";
            enemy.style.width = "120px";
            enemy.style.left = Math.random() * 500 + "px";
            enemy.style.top = Math.random() * 500 + "px";
            enemy.id = "enemy";
            document.body.appendChild(enemy);
            function colliding() {
                var enemyxpos = parseInt(enemy.style.left),
                    enemyypos = parseInt(enemy.style.top);
                if (xpos < enemyxpos + 120 && xpos + 120 > enemyxpos && ypos < enemyypos + 120 && ypos + 120 > enemyypos) {
                    clearInterval(colliding);
                    document.getElementById("enemy").remove();
                    document.getElementById("you").remove();
                    document.getElementById("bg").remove();
                    document.getElementById("score").remove();
                    alert("Game over! Your score was " + scorecount + ".");
                }
            }
            setInterval(colliding, 5);
        })();
    }

    function colorDrop() {
        (function() {
            var el = document.createElement('script');
            el.type = 'text/javascript';
            el.src = 'https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js';
            el.onerror = function() {
                alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js\"\n\ninto your console instead\n\n(link is in console already)");
                console.log("https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js");
            };
            document.getElementsByTagName('body')[0].appendChild(el);
        })();
    }

        let modMenu = document.createElement('div');
    modMenu.innerHTML = `<div id="modmenu" style="display:none; position: fixed; top: 50px; right: 50px; background: #f9f9f9; border: 1px solid #ccc; padding: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); z-index: 10000; border-radius: 10px; width: 300px;">
        <div id="modmenu-header" style="cursor: move; background: #e0e0e0; padding: 10px; border-bottom: 1px solid #ccc; border-radius: 10px 10px 0 0; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold; color: #333;"><img src="https://www.freepnglogos.com/uploads/panda-png/panda-face-icon-noto-emoji-animals-nature-iconset-google-21.png" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">The Modmenu</span>
            <div>
                <button id="minimize-modmenu" style="background: yellow; border: 1px solid lightgray; font-size: 10px; cursor: pointer; border-radius: 50%; width: 15px; height: 15px;"></button>
                <button id="close-modmenu" style="background: red; border: 1px solid lightgray; font-size: 10px; cursor: pointer; border-radius: 50%; width: 15px; height: 15px;"></button>
            </div>
        </div>
        <div id="modmenu-content" style="padding: 10px;">
            <ul style="padding: 0; margin: 0;">
                <li><a href="#" id="changeBgColor" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Change Background Color</a></li>
                <li><a href="#" id="toggleImages" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Toggle Images</a></li>
                <li><a href="#" id="getInfo" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Get Page Info</a></li>
                <li><a href="#" id="highlightText" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Highlight Text</a></li>
                <li><a href="#" id="playTicTacToe" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Play Tic Tac Toe</a></li>
                <li><a href="#" id="playTomatoSmash" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Play Tomato Smash</a></li>
                <li><a href="#" id="playSpaceshipGame" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Play Spaceship Game</a></li>
                <li><a href="#" id="invertColors" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Invert Colors</a></li>
                <li><a href="#" id="vortex" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Vortex</a></li>
                <li><a href="#" id="documentOscillate" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Document Oscillate</a></li>
                <li><a href="#" id="keyboardMasher" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Keyboard Masher</a></li>
                <li><a href="#" id="screenRotate" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Screen Rotate</a></li>
                <li><a href="#" id="openProductivity" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Open Productivity</a></li>
                <li><a href="#" id="autoBrowse" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Auto Browse</a></li>
                <li><a href="#" id="startGame" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Start Game</a></li>
                <li><a href="#" id="colorDrop" style="color: #666; text-decoration: none; border: 1px solid lightgray; padding: 5px; display: block; border-radius: 5px; margin-bottom: 5px;">Color Drop</a></li>
                <p style="color: gray; font-size: small;">
                Made by Hacker-Sloth 
                <span style="font-size: x-small;">
                    Copyright © 2023 by Isaac Wong.
                </span>
            </p>

            </ul>
        </div>
    </div>`;

    document.body.appendChild(modMenu);

    let modMenuDiv = document.getElementById('modmenu');
    let modMenuHeader = document.getElementById('modmenu-header');
    let modMenuContent = document.getElementById('modmenu-content');
    modMenuDiv.style.display = 'block';

        document.getElementById('changeBgColor').addEventListener('click', function() {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });

    document.getElementById('toggleImages').addEventListener('click', function() {
        let images = document.getElementsByTagName('img');
        for (let img of images) {
            img.style.display = (img.style.display == 'none' ? 'block' : 'none');
        }
    });

    document.getElementById('getInfo').addEventListener('click', function() {
        alert('Title: ' + document.title + '\nURL: ' + window.location.href);
    });

    document.getElementById('highlightText').addEventListener('click', function() {
        let color = prompt('Enter highlight color (e.g., yellow, #FF0):', 'yellow');
        if (color) {
            let selection = window.getSelection();
            if (selection.rangeCount > 0) {
                let range = selection.getRangeAt(0);
                let span = document.createElement('span');
                span.style.backgroundColor = color;
                range.surroundContents(span);
            }
        }
    });

    	    document.getElementById('playTicTacToe').addEventListener('click', function() {
        let ticTacToe = document.createElement('div');
        ticTacToe.style.position = 'fixed';
        ticTacToe.style.top = '50%';
        ticTacToe.style.left = '50%';
        ticTacToe.style.transform = 'translate(-50%, -50%)';
        ticTacToe.style.backgroundColor = '#fff';
        ticTacToe.style.border = '1px solid #ccc';
        ticTacToe.style.padding = '20px';
        ticTacToe.style.zIndex = '10001';
        ticTacToe.style.borderRadius = '10px';
        ticTacToe.innerHTML = `
            <h3 style="text-align: center;">Tic Tac Toe</h3>
            <div id="ticTacToeBoard" style="display: grid; grid-template-columns: repeat(3, 50px); gap: 5px; justify-content: center; margin-bottom: 10px;">
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
                <div class="ticTacToeCell" style="width: 50px; height: 50px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;"></div>
            </div>
            <button id="closeTicTacToe" style="display: block; margin: 0 auto; background: red; border: none; color: white; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Close</button>
        `;

        document.body.appendChild(ticTacToe);

        let cells = ticTacToe.getElementsByClassName('ticTacToeCell');
        let currentPlayer = 'X';

        for (let cell of cells) {
            cell.addEventListener('click', function() {
                if (cell.textContent === '') {
                    cell.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            });
        }

        document.getElementById('closeTicTacToe').addEventListener('click', function() {
            ticTacToe.remove();
        });
    });

    document.getElementById('playTomatoSmash').addEventListener('click', function() {
        let script = document.createElement('script');
        script.src = 'https://quinten.github.io/tomato-smash/index.js';
        script.onload = function() {
            new TomatoSmash.Game();
        };
        document.body.appendChild(script);
    });

    document.getElementById('playSpaceshipGame').addEventListener('click', function() {
        let script = document.createElement('script');
        script.src = 'http://hi.kickassapp.com/kickass.js';
        document.body.appendChild(script);
    });

        document.getElementById('invertColors').addEventListener('click', invertColors);
    document.getElementById('vortex').addEventListener('click', vortex);
    document.getElementById('documentOscillate').addEventListener('click', documentOscillate);
    document.getElementById('keyboardMasher').addEventListener('click', keyboardMasher);
    document.getElementById('screenRotate').addEventListener('click', screenRotate);
    document.getElementById('openProductivity').addEventListener('click', openProductivity);
    document.getElementById('autoBrowse').addEventListener('click', autoBrowse);
    document.getElementById('startGame').addEventListener('click', startGame);
    document.getElementById('colorDrop').addEventListener('click', colorDrop);

    document.getElementById('close-modmenu').addEventListener('click', function() {
        modMenuDiv.style.display = 'none';
    });

    document.getElementById('minimize-modmenu').addEventListener('click', function() {
        modMenuContent.style.display = (modMenuContent.style.display == 'none' ? 'block' : 'none');
    });

    let isDragging = false;

    modMenuHeader.onmousedown = function(event) {
        isDragging = true;
        let shiftX = event.clientX - modMenuDiv.getBoundingClientRect().left;
        let shiftY = event.clientY - modMenuDiv.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            modMenuDiv.style.left = pageX - shiftX + 'px';
            modMenuDiv.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            if (isDragging) {
                moveAt(event.pageX, event.pageY);
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    modMenuHeader.ondragstart = function() {
        return false;
    };
})();


