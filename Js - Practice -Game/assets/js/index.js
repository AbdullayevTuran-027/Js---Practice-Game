const area = document.querySelector(".game-area");
const areaId = document.getElementById("game-area")
const gameObject = document.getElementById("game-object");
const body = document.getElementById("body");
const input = document.getElementById("inputNumber");
const moveBtn = document.querySelectorAll(".movebtn");
const inputBtn = document.querySelector(".inputbtn")
let t = 1;
let ObjectTop = gameObject.offsetTop;
let ObjectLeft = gameObject.offsetLeft;
let x;
let AreaWith;
let AreaHeiht;
let inputNumber;
let btnValue;

inputBtn.addEventListener("click", function () {
  inputNumber = input.value;
  console.log(inputNumber);
});
function Up(inputValue) {
  console.log("up funk isledi ve deyeri:" + inputValue);
  if (gameObject.offsetTop > 0) {
    x = ObjectTop - inputValue;
    if (x > 0 ) {
      gameObject.style.top = x + "px";
    }
    if(x <= 0 && inputValue!=undefined)  {
      console.log("elgunb")
      gameObject.style.top = 0 + "px";
    }
    ObjectTop = gameObject.offsetTop;
  }
}
function Down(inputValue) {
  if (gameObject.offsetTop < MaxHeiht) {
    x = ObjectTop + Number(inputValue);
    if (x < MaxHeiht) {
      gameObject.style.top = x + "px";
    }
    if(x>=MaxHeiht && inputValue!=undefined)  {
      gameObject.style.top = MaxHeiht + "px";
    }
    ObjectTop = gameObject.offsetTop;
    console.log("down:" + ObjectTop);
  }
}
function Left(inputValue) {
  if (gameObject.offsetLeft > 0) {
    x = ObjectLeft - inputValue;
    if (x > 0) {
      gameObject.style.left = x + "px";
    } 
    if(x<=0 && inputValue!=undefined) {
      gameObject.style.left = 0 + "px";
    }
    ObjectLeft = gameObject.offsetLeft;
  }
}
function Right(inputValue) {
  if (gameObject.offsetLeft < MaxWith) {
    x = ObjectLeft + Number(inputValue);
    if (x < MaxWith) {
      gameObject.style.left = x + "px";
    } 
    if(x>=MaxWith && inputValue!=undefined) {
      gameObject.style.left = MaxWith + "px";
    }
    ObjectLeft = gameObject.offsetLeft;
  }
}

moveBtn.forEach((element) => {
  element.addEventListener("mouseup", function (event) {
    MaxWith = area.clientWidth - gameObject.offsetWidth;
    MaxHeiht = area.clientHeight - gameObject.offsetHeight;
    console.log(event.target.id);
    btnValue = event.target.id;
    if (btnValue == "top") {
      Up(inputNumber);
    }
    if (btnValue == "bottom") {
      Down(inputNumber);
    }
    if (btnValue == "left") {
      Left(inputNumber);
    }
    if (btnValue == "right") {
      Right(inputNumber);
    }
    if (btnValue == "top-left") {
      Up(inputNumber);
      Left(inputNumber);
    }
    if (btnValue == "top-right") {
      Up(inputNumber);
      Right(inputNumber);
    }
    if (btnValue == "bottom-right") {
      Down(inputNumber);
      Right(inputNumber);
    }
    if (btnValue == "bottom-left") {
      Down(inputNumber);
      Left(inputNumber);
    }
  });
});

body.addEventListener("keydown", function (e) {
  let btn = e.key;
  MaxWith = area.clientWidth - gameObject.offsetWidth;
  MaxHeiht = area.clientHeight - gameObject.offsetHeight;
  if (btn == "ArrowUp" || btn.toLowerCase() == "w" || btn == "8") {
    Up(inputNumber);
  }

  if (btn == "ArrowDown" || btn.toLowerCase() == "s" || btn == "2") {
    Down(inputNumber);
  }

  if (btn == "ArrowRight" || btn.toLowerCase() == "d" || btn == "6") {
    Right(inputNumber);
  }

  if (btn == "ArrowLeft" || btn.toLowerCase() == "a" || btn == "4") {
    Left(inputNumber);
  }

  if (btn == "7" || btn.toLowerCase() == "q") {
    Left(inputNumber);
    Up(inputNumber);
  }

  if (btn == "9" || btn.toLowerCase() == "e") {
    Up(inputNumber);
    Right(inputNumber);
  }

  if (btn == "1" || btn.toLowerCase() == "z") {
    Down(inputNumber);
    Left(inputNumber);
  }

  if (btn == "3" || btn.toLowerCase() == "c") {
    Down(inputNumber);
    Right(inputNumber);
  }
});