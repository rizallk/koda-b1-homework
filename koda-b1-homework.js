const jumlahBaris = 3;

console.log(''); // console.log 1 baris kosong paling awal agar rapih

// ========== FOR LOOP ==========
for (let i = 0; i < jumlahBaris; i++) {
  // Bintang sebelah kiri
  // Looping untuk bagian kosong
  for (let j = jumlahBaris - 1; j > i; j--) {
    process.stdout.write(' '); // print string kosong
  }
  // Looping untuk bagian bintang
  for (let k = 0; k <= i; k++) {
    process.stdout.write('*');
  }

  // Bintang sebelah kanan
  for (let l = 0; l < i; l++) {
    process.stdout.write('*');
  }

  process.stdout.write('\n'); // Pindah baris baru
}

// ========== WHILE ==========
// let i = 0;

// while (i < jumlahBaris) {
//   // Reset ulang j, k, dan l di setiap iterasi ke i
//   let j = jumlahBaris - 1;
//   let k = 0;
//   let l = 0;

//   // Bintang sebelah kiri
//   // Looping untuk bagian kosong
//   while (j > i) {
//     process.stdout.write(' '); // print string kosong
//     j--;
//   }
//   // Looping untuk bagian bintang
//   while (k <= i) {
//     process.stdout.write('*');
//     k++;
//   }

//   // Bintang sebelah kanan
//   while (l < i) {
//     process.stdout.write('*');
//     l++;
//   }

//   process.stdout.write('\n'); // Pindah baris baru
//   i++;
// }

// ========== DO WHILE ==========
// let i = 0;

// do {
//   let j = jumlahBaris;
//   let k = 0;
//   let l = 0;

//   // Bintang sebelah kiri
//   // Looping untuk bagian kosong
//   do {
//     process.stdout.write(' '); // print string kosong
//     j--;
//   } while (j > i);
//   // Looping untuk bagian bintang
//   do {
//     process.stdout.write('*');
//     k++;
//   } while (k <= i);

//   // Bintang sebelah kanan
//   if (i > 0) {
//     // hilangkan baris pertama
//     do {
//       l++;
//       process.stdout.write('*');
//     } while (l < i);
//   }

//   process.stdout.write('\n'); // Pindah baris baru
//   i++;
// } while (i < jumlahBaris);
