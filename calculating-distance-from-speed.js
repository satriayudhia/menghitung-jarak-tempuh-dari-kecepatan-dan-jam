//FUngsi mengubah jumlah data jam, menit, detik ke total detik
function convertToSecond(str) {
    var splitStart = str.split(":");
    var hour = splitStart[0];
    var minute = splitStart[1];
    var second = splitStart[2];
	
  return hour*60*60 + minute*60 + second*1;
}

//Inisialisasi nilai awal jarak, awal waktu. 11 menit setelah awal waktu
//Dan nilai akhir waktu
//Mengkonversi masing2 waktu ke dalam detik
//Mengambil data selisih dari waktu kedua dgn waktu pertama
//Mendapatkan jarak 11 menit pertama dgn selisih waktu dikali jarak
var jarak = 6;
var first = "10:25:21", 
    second = "10:36:21", 
    end = "12:00:00";
var jamPertama = convertToSecond(first), 
    jamKedua = convertToSecond(second), 
    jamTerakhir = convertToSecond(end);
var firstDiff = jamKedua - jamPertama;
var totalJarak = firstDiff * jarak;

//Melakukan perulangan untuk mendapatkan jarak ditambah 1 setiap 600 detik(10 menit)
var i=jamKedua;
while((i+600) < jamTerakhir){
  jarak++;
  totalJarak += 600 * jarak;
  i+=600;
}
//Menghitung total jarak yang ditempuh
totalJarak += (jamTerakhir - i) * (jarak + 1);
console.log("total jarak tempuh: " + totalJarak + " meter");