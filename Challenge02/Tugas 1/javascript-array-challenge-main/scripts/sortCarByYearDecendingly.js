function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const n = result.length;
  
  // implementasi bubble sort
  // loop pertama untuk menentukan seberapa banyak proses perulangan dalam membandingkan elemen akan dilakukan
  for (let i = 0; i < n - 1; i++) {
    // loop kedua sebagai proses untuk membandingkan dan menukar elemen di dalam array
    for (let j = 0; j < n - i - 1; j++) {
      // kondisi untuk memeriksa apakah elemen mobil di posisi kiri (j) lebih kecil daripada elemen mobil selanjutnya
      if (result[j].year < result[j + 1].year) {
        // jika kondisi benar, maka elemen ditukar dengan menggunakan bantuan variabel titip
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
