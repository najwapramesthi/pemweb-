document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen input dan display area
    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const kelasInput = document.getElementById('kelas');
    const alamatInput = document.getElementById('alamat');

    const displayNama = document.getElementById('displayNama');
    const displayNIM = document.getElementById('displayNIM');
    const displayKelas = document.getElementById('displayKelas');
    const displayAlamat = document.getElementById('displayAlamat');

    // Event 1: Tampilkan data Nama secara real-time
    namaInput.addEventListener('input', function() {
        displayNama.textContent = namaInput.value || "-";
    });

    // Event 2: Tampilkan data NIM secara real-time
    nimInput.addEventListener('input', function() {
        displayNIM.textContent = nimInput.value || "-";
    });

    // Event 3: Tampilkan data Kelas secara real-time
    kelasInput.addEventListener('input', function() {
        displayKelas.textContent = kelasInput.value || "-";
    });

    // Event 4: Tampilkan data Alamat secara real-time
    alamatInput.addEventListener('input', function() {
        displayAlamat.textContent = alamatInput.value || "-";
    });

    // Event 5: Mengubah warna input field saat pengguna mengetik
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = 'blue';  // Ubah warna border ketika mengetik
        });
    });
});
