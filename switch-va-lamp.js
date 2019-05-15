let SwitchButton = function () {

  this.status = false;
  this.lamp = new ElectricLamp();

  this.connectToLamp = function (ElectricLamp) {
      this.lamp = ElectricLamp;
  }
  ;

  this.switchOff = function () {
      this.status = false;
      this.lamp.turnOff();
  };

  this.switchOn = function () {
      this.status = true;
      this.lamp.turnOn();
  };

};

let ElectricLamp = function () {
  this.status = false;

  this.turnOff = function () {
      this.status = false;
      document.getElementById("display").innerHTML += "Den dang tat<br>";
  };

  this.turnOn = function () {
      this.status = true;
      document.getElementById("display").innerHTML += "Den dang bat<br>";
  };

};

// Chay kich ban
let switchButton = new SwitchButton();
let electricLamp = new ElectricLamp();
switchButton.connectToLamp(electricLamp);

for (let i = 0; i < 10; i++) {
    switchButton.switchOn();
    switchButton.switchOff();
}

document.getElementById("result").innerHTML = switchButton.status;