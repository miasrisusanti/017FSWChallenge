import '../App.css'

const Car = ({ car }) => {
  return (
    <div className="car-container">
      <img src={car.image} alt={car.manufacture} width="270px" height="160px" style={{ objectFit: 'cover', marginBottom: '16px', borderRadius: '2%' }} />
      <h4>{`${car.manufacture} ${car.model}`}</h4>
      <p><b>{`Rp ${car.rentPerDay.toLocaleString('id-ID')} / hari`}</b></p>
      <div style={{ height: '120px' }}><p>{car.description}</p></div>
      <div>
        <img src="./img/icon/fi_users.png" alt="" className="mb-2" style={{ marginRight: '8px' }} />
        {`${car.capacity} orang`}
        </div>
        <div>
        <img src="./img/icon/fi_settings.png" alt="" className="mb-2" style={{ marginRight: '8px' }} />
        {car.transmission}
        </div>
        <div>
        <img src="./img/icon/fi_calendar.png" alt="" className="mb-2" style={{ marginRight: '8px' }} />
        {car.year}
        </div>
      <button type="button" className="mt-5 btn text-light col-12" style={{ backgroundColor: '#5CB85F' }}>Pilih Mobil</button>
    </div>
  );
}

export default Car;
