const emptySquare = { left: 300, top: 300 };
const initialPosition = [];
let btnClick = false;

$(function () {
    init();
    shuffle();
});


init = function () {
    $("#puzzlearea").children().each(function (idx) {
        // calculate x and y for this piece
        const x = ((idx % 4) * 100);
        const y = (Math.floor(idx / 4) * 100);

        // set basic style and background
        $(this).addClass("puzzlepiece");
        $(this).css({
            "background-image": "url('images/background.jpg')",
            "left": x + "px",
            "top": y + "px",
            "background-position": -x + "px " + (-y) + "px"
        });

        initialPosition.push({ "top": y, "left": x });

    });
}

movePuzzle = function () {
    $("#puzzlearea").children().on({
        click: function () {
            swap($(this));
            if (isWining()) {
                $("div").css({ "border-color": "green", "color": "green" });
            } else {
                $("div").css("border-color", "normal");
            }
        },
        hover: function () {
            isMovable($(this).position()) ?
                $(this).addClass("movablepiece") :
                $(this).removeClass("movablepiece");
        }
    })
}

swap = function (self) {
    const curPos = $(self).position();
    if (isMovable(curPos)) {
        $(self).css({
            "left": emptySquare.left + "px",
            "top": emptySquare.top + "px"
        });
        emptySquareLocation(curPos);
    }
}

emptySquareLocation = function (curPos) {
    emptySquare.left = curPos.left;
    emptySquare.top = curPos.top;
}

isMovable = function (curPos) {
    const leftMove = Math.abs(curPos.left - emptySquare.left);
    const topMove = Math.abs(curPos.top - emptySquare.top);
    if ((leftMove > 100 || topMove > 100)
        || (leftMove === topMove)) {
        return false;
    }
    return true;
}

shuffle = function () {
    $("#shufflebutton").click(function () {
        const movablePiece = [];
        let count = 50;
        btnClick = !btnClick;
        if (btnClick) {
            do {
                $("#puzzlearea").children().each(function () {
                    if (isMovable($(this).position())) {
                        movablePiece.push($(this));
                    }
                });

                const randomPiece = movablePiece[Math.floor(Math.random() * movablePiece.length)];
                swap($(randomPiece));
                count--;
            } while (count > 0);
            movePuzzle();
        } else {
            location.reload();
        }


    });
}

isWining = function () {
    const newPos = []
    $("#puzzlearea").children().each(function (idx) {
        const { top, left } = $(this).position();
        newPos.push({ "top": top, "left": left });
    })
    if (JSON.stringify(newPos) !=
        JSON.stringify(initialPosition)) {
        return false;
    } else {
        return true;
    }
}

