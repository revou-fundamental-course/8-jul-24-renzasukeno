// Menunggu sampai DOM terisi penuh sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen form dan output dari DOM
    const form = document.getElementById('Form-BMI');
    const output = document.getElementById('output');

    // Menambahkan event listener untuk submit form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari reload halaman

        // Mengambil nilai dari input berat badan tinggi badan dan umur
        const weight = parseFloat(document.getElementById('Weight').value);
        const height = parseFloat(document.getElementById('Height').value) / 100; // Konversi tinggi dari cm ke meter
        const age = parseInt(document.getElementById('Age').value);

        // Validasi input berat badan
        if (isNaN(weight) || weight <= 0) {
            output.innerHTML = '<p class="error-message">Mohon masukkan berat badan yang valid.</p>';
            output.classList.add('output-visible'); // Menampilkan pesan kesalahan dan validasi agar memasukkan data yang valid
            return; // Keluar dari fungsi jika input tidak valid
        }

        // Validasi input tinggi badan
        if (isNaN(height) || height <= 0) {
            output.innerHTML = '<p class="error-message">Mohon masukkan tinggi badan yang valid.</p>';
            output.classList.add('output-visible'); // Menampilkan pesan kesalahan dan validasi agar memasukkan data yang valid
            return; // Keluar dari fungsi jika input tidak valid
        }

        // Validasi input umur
        if (isNaN(age) || age < 18) {
            output.innerHTML = '<p class="error-message">Mohon masukkan umur yang valid (18 tahun atau lebih).</p>';
            output.classList.add('output-visible'); // Menampilkan pesan kesalahan dan validasi agar memasukkan data yang valid
            return; // Keluar dari fungsi jika input tidak valid
        }

        // Menghitung BMI
        const bmi = weight / (height * height);
        let interpretation;
        let advice;

        // Menentukan interpretasi hasil dan juga saran atau advice berdasarkan nilai BMI
        if (bmi < 18.5) {
            interpretation = 'Kurus';
            advice = 'Yahh, Berat badan anda kurang ideal, Anda dianjurkan untuk makan lebih banyak dan memilih makanan yang bergizi serta berkalori tinggi.';
        } else if (bmi < 24.9) {
            interpretation = 'Normal';
            advice = 'Wahh, kerennn Berat badan anda ideal. Terus pertahankan dengan atur pola makan sehat dan rutin berolahraga.';
        } else if (bmi < 29.9) {
            interpretation = 'Berat badan berlebih';
            advice = 'Waduhh, Berat badan anda berlebih, Anda dianjurkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik seperti olahraga teratur.';
        } else {
            interpretation = 'Obesitas';
            advice = 'Bahaya nihh, anda mengalami obesitas, Anda dianjurkan untuk berkonsultasi dengan ahli gizi dan melakukan program penurunan berat badan secara sehat.';
        }

        // Menghitung berat badan ideal minimal dan max nya
        const idealWeightMin = 18.5 * (height * height);
        const idealWeightMax = 24.9 * (height * height);

        // Menampilkan hasil BMI, interpretasi, saran dan informasi tambahan dalam bentuk innfer HTML (outputnya ada di section right dalam indexhtml)
        output.innerHTML = `
            <h3>Hasil BMI Anda</h3>
                <p id="Result-Number">${bmi.toFixed(2)}</p> 
                <p id="Result-Interpretation">${interpretation}</p>
                <p id="BMI-advice">${advice}</p>
            <h4>Informasi Berat Badan Ideal</h4>
             <p>Untuk tinggi ${height.toFixed(2)} meter dan umur ${age} tahun:</p>
             <ul>
                <li>Berat badan ideal minimum: ${idealWeightMin.toFixed(2)} kg</li>
                <li>Berat badan ideal maksimum: ${idealWeightMax.toFixed(2)} kg</li>
             </ul>
             <h4>Penjelasan Tentang BMI</h4>
             <p>Berikut adalah kategori BMI yang umum digunakan:</p>
             <ul>
                <li>< 18.5: Kurus</li>
                <li>18.5 - 24.9: Normal</li>
                <li>25 - 29.9: Berat badan berlebih</li>
                <li>> 30: Obesitas</li>
             </ul>      
         `;

        // Menambahkan kelas CSS untuk menampilkan hasil dengan transisi dan tampilan visual yang lebih menarik
        output.classList.add('output-visible');
    });

    // Menambahkan event listener untuk reset form
    form.addEventListener('reset', function() {
        // Mengosongkan hasil output dan menghapus kelas CSS
        output.innerHTML = '';
        output.classList.remove('output-visible');
    });
});
// Selesai