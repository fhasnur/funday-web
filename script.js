const tabelPendidikan = {
    pendidikan: ["TK", "SD", "SMP", "SMA", "PT"],
    namaInstansi: ["TK Nur Ikhsan", "SDN 1 Bone-bone", "SMPN 4 Baubau", "SMAN 2 Baubau", "Universitas Negeri Makassar"]
};
const daftarPendidikan = document.querySelector("#daftarPendidikan");

for (let i = 0; i < 5; i++) {
    let row = document.createElement('tr');

    row.innerHTML = "<td>" + (i + 1) + "</td>";
    row.innerHTML += "<td>" + tabelPendidikan.pendidikan[i] + "</td>";
    row.innerHTML += "<td>" + tabelPendidikan.namaInstansi[i] + "</td>";

    daftarPendidikan.appendChild(row);
}