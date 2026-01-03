function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

// SIMPAN & TAMPILKAN PESAN
const form = document.getElementById("formPesan");
const pesanBox = document.getElementById("pesanMasuk");

let dataPesan = JSON.parse(localStorage.getItem("pesan")) || [];

function renderPesan() {
    pesanBox.innerHTML = "";

    dataPesan.forEach((p, index) => {
        pesanBox.innerHTML += `
            <div class="pesan-item">
                <b>${p.nama}</b> (${p.email})<br>
                <i>${p.subjek}</i>
                <p>${p.isi}</p>
                <button onclick="hapusPesan(${index})">Hapus</button>
            </div>
        `;
    });
}

function hapusPesan(index) {
    if (confirm("Yakin ingin menghapus pesan ini?")) {
        dataPesan.splice(index, 1);
        localStorage.setItem("pesan", JSON.stringify(dataPesan));
        renderPesan();
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const pesanBaru = {
        nama: nama.value,
        email: email.value,
        subjek: subjek.value,
        isi: pesanText.value
    };

    dataPesan.push(pesanBaru);
    localStorage.setItem("pesan", JSON.stringify(dataPesan));
    form.reset();
    alert("Pesan berhasil dikirim");
    renderPesan();
});

renderPesan();