import factory from "./smokeCode";
let smokeScript = document.querySelector("#smoke");
if (!smokeScript) {
  let smokeElement = document.createElement("script");
  smokeElement.src = { factory };
  smokeElement.id = "smoke";
  window.top.document.body.appendChild(smokeElement);
}

var defaultSmokeColor = [0, 0, 0];

var smokeDesktop = (color, yOffset, amount) => {
  var canvas = document.querySelector("#CanvasMiddle");
  var ctx = canvas.getContext("2d");
  var machine = SmokeMachine(ctx, color || defaultSmokeColor);
  machine.start();

  machine.setPreDrawCallback(() => {
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    machine.addSmoke(w / 2, h - yOffset, amount);

    canvas.width = w;
    canvas.height = h;
  });
  return machine;
};

var smokeMobile = (color, yOffset, amount) => {
  var canvas = document.querySelector("#CanvasMiddle");
  var ctx = canvas.getContext("2d");
  var machine = SmokeMachine(ctx, color || defaultSmokeColor);
  machine.start();

  machine.setPreDrawCallback(() => {
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    machine.addSmoke(w / 2, h - yOffset, amount);
    canvas.width = w;
    canvas.height = h;
  });
  return machine;
};

const addMiddleCanvas = function () {
  let topContainer = document.querySelector(".TopContainer");

  // add middle canvas
  let middleCanvasElement = window.document.createElement("canvas");
  middleCanvasElement.id = "CanvasMiddle";
  middleCanvasElement.classList.add("CanvasMiddle");
  middleCanvasElement.style.setProperty("z-index", "-1");
  middleCanvasElement.style.setProperty("pointer-events", "none");
  topContainer.appendChild(middleCanvasElement);
};

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const smokeMachineSetup = function (
  color,
  mobileYOffset,
  desktopYOffset,
  amount
) {
  addMiddleCanvas();
  var desktopMachine = smokeDesktop(color, desktopYOffset, amount);

  var mobileMachine = smokeMobile(color, mobileYOffset, amount);

  let functionToCall;
  // starts the next machine
  return function () {
    var largeScreen = window.innerWidth >= 800;
    if (window.innerWidth < 800) {
      desktopMachine.clear();
      mobileMachine.start();
    } else if (window.innerWidth >= 800) {
      desktopMachine.start();
      mobileMachine.clear();
    }

    var adjustMachines = function () {
      if (window.innerWidth < 800 && largeScreen) {
        desktopMachine.clear();
        mobileMachine.start();
        largeScreen = false;
      } else if (window.innerWidth >= 800 && !largeScreen) {
        desktopMachine.start();
        mobileMachine.clear();
        largeScreen = true;
      }
    };

    adjustMachines();
    if (functionToCall) {
      window.removeEventListener("resize", functionToCall);
    }
    functionToCall = debounce(adjustMachines, 500);
    window.addEventListener("resize", functionToCall);
  };
};

resolve();
