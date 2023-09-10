class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="car-container">
    <img src="${this.image}" alt="${this.manufacture}" width="270px" height="160px" style="object-fit: cover; margin-bottom: 16px; border-radius: 2%;">
    <h4>${this.manufacture} ${this.model}</h4>
    <p><b>Rp ${this.rentPerDay.toLocaleString('id-ID')} / hari</b></p>
    <div style="height:120px";"><p>${this.description}</p></div>
    <p><img src="./images/fi_users.png" style="margin-right: 8px;">${this.capacity} orang</p>
    <p><img src="./images/fi_settings.png" style="margin-right: 8px;">${this.transmission}</p>
    <p><img src="./images/fi_calendar.png" style="margin-right: 8px;">${this.year}</p>
    <button type="button" class="btn text-light col-12" style="background-color: #5CB85F;">Pilih Mobil</button>
    </div>
    `;
  }
}
