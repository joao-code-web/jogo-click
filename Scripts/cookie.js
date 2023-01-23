// Person
const personClick = window.document.querySelector(".person");
const person = window.document.querySelector(".person img");
// Money
const money = window.document.querySelector(".points h1.money");
const moneyUp = window.document.querySelector(".upgrades h1.money");
// Story
const story = window.document.querySelectorAll(".single-storys");
// Upgrades
const upgrades = window.document.querySelectorAll(".single-upgrades");
const priceAutoClick = window.document.querySelector("h1#autoClickPrice");
// Guy
const guyError = window.document.querySelector(".recusePay");
const guyErrorClose = window.document.querySelector(".recusePay .close i");
// Relogio
const relogio = window.document.querySelector(".relogio");
const relogioTime = window.document.querySelector(".relogio .numberRelogio h1");
const relogioAnimate = window.document.querySelector(".relogio img");

// currents
var formatMoney = 1; // Contador do dinheiro acumulado
var currentMoney = localStorage.money; //Variavel que mostra quanto de dinheiro tem o player
// Values itens(variaveis usadas para medir o preço de derteminado item)
const valueJotaro = 10;
const valueGrava = 10;
var autoClickValue = 10;
const valueDoubleClick = 1500;
const valueTimeClick = 2000;

const save = () => {
  localStorage.money = formatMoney;
  localStorage.person = personClick.innerHTML;
  localStorage.AutoClick = autoClickValue;
};

setTimeout(() => {
  save();
}, 1000);

const inicial = () => {
  var moneySave = localStorage.money;
  var personImgSave = localStorage.person;
  var SaveAutoClick = localStorage.AutoClick;
  money.innerHTML = `${moneySave}$`;
  moneyUp.innerHTML = `${moneySave}$`;
  personClick.innerHTML = `${personImgSave}`;
  priceAutoClick.innerHTML = `${SaveAutoClick}`;
};

inicial();

const systemMoney = (formatMoney) => {
  money.innerHTML = `${formatMoney}$`;
  moneyUp.innerHTML = `${formatMoney}$`;
  if (personClick.style.transform === "scale(1)") {
    personClick.style.transform = "scale(1.1)";
  } else {
    personClick.style.transform = "scale(1)";
  }
};

const systemGuyError = () => {
  guyError.style.display = "block";
  guyErrorClose.addEventListener("click", () => {
    guyError.style.display = "none";
  });
};

const systemClick = () => {
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
  personClick.click();
};

const guyChapeu = (moneyPaySto) => {
  if (moneyPaySto >= valueJotaro) {
    personClick.innerHTML = `<img src="./imgs/person/jotarro.png" alt="">`;
    currentMoney = moneyPaySto - valueJotaro;
    personClick.click();
  } else {
    systemGuyError();
  }
};

const autoClick = (moneyPayUp) => {
  if (moneyPayUp >= autoClickValue) {
    currentMoney = moneyPayUp - autoClickValue;
    autoClickValue = autoClickValue * 1.5;
    priceAutoClick.innerHTML = `${autoClickValue}`;
    personClick.click();
    setInterval(() => {
      personClick.click();
    }, 8000);
  } else {
    systemGuyError();
  }
};

const autoDoubleClick = (moneyPayUp) => {
  if (moneyPayUp >= valueDoubleClick) {
    currentMoney = moneyPayUp - valueDoubleClick;
    personClick.click();
    setInterval(() => {
      personClick.click();
      personClick.click();
    }, 8000);
  } else {
    systemGuyError();
  }
};

const timeClick = (moneyPayUp) => {
  if (moneyPayUp >= valueTimeClick) {
    currentMoney = moneyPayUp - valueTimeClick;
    relogio.style.display = `block`;
    personClick.click();
    relogioTime.innerHTML = `${currentTime++}`;
    setTimeout(() => {
      systemClick();
      relogio.style.display = `none`;
    }, 1000);
  } else {
    systemGuyError();
  }
};

personClick.addEventListener("click", () => {
  formatMoney = currentMoney++;
  systemMoney(formatMoney);
  save();
});

for (let sto = 0; sto < story.length; sto++) {
  story[sto].addEventListener("click", () => {
    const moneyPaySto = currentMoney - 1;

    const guyGrava = () => {
      if (moneyPaySto >= valueGrava) {
        console.log("Compra aprovada");
        currentMoney = moneyPaySto - valueGrava;
        personClick.click();
      } else {
        console.log("Compra recusada");
      }
    };

    switch (sto) {
      case 0:
        guyChapeu(moneyPaySto);
        break;
      case 1:
        guyGrava();
        break;
      case 2:
        console.log(i);
        break;
      case 3:
        console.log(i);
        break;
      case 4:
        console.log(i);
        break;
      case 5:
        console.log(i);
        break;
      case 6:
        console.log(i);
        break;
      case 7:
        console.log(i);
        break;
      case 8:
        console.log(i);
        break;

      default:
        break;
    }
  });
}

for (let up = 0; up < upgrades.length; up++) {
  upgrades[up].addEventListener("click", () => {
    const moneyPayUp = currentMoney - 1;

    switch (up) {
      case 0:
        autoClick(moneyPayUp);
        break;
      case 1:
        autoDoubleClick(moneyPayUp);
        break;
      case 2:
        timeClick(moneyPayUp);
        break;

      default:
        break;
    }
  });
}
