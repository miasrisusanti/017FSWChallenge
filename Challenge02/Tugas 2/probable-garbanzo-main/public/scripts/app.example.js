class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    
    this.dateInput = document.getElementById('dateInput');
    this.timeInput = document.getElementById('timeInput');
    this.passangerInput = document.getElementById('passangerInput');
  }
  
  async init() {
    await this.load();
    
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }
  
  run = async () => {
    this.clear();
    const tanggal = this.dateInput.value;
    const waktu = this.timeInput.value;
    const penumpang = this.passangerInput.value;
    
    const fullDateTime = new Date (`${tanggal} ${waktu}`);
    
    const condition = (i) => i.available && i.capacity >= penumpang && new Date(i.availableAt).getTime() >= fullDateTime;
    const cars = await Binar.listCars(condition);
    
    if(cars.length === 0){
      const node = document.createElement("div");
      node.innerHTML = 'Maaf, tidak ada data mobil. Coba lagi.';
      this.carContainerElement.appendChild(node);
      return;
    }
    
    Car.init(cars);
    
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };
  
  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
  
  clear = () => {
    let child = this.carContainerElement.firstElementChild;
    
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
