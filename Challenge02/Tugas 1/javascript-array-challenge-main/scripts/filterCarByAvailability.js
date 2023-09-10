function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // loop dilakukan dari 0 hingga akhir panjang array cars
  for(let i = 0; i < cars.length; i++){
    // periksa kondisi apakah ada mobil yg tersedia
    if(cars[i].available){
        // jika ada, data dipush ke result
        result.push(cars[i]);
    }
}

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
