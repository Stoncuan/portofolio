// ====== DATA PROYEK — edit/tambah di sini ======
// t: judul, v: versi, y: tahun, d: deskripsi, s: stack, i: gambar, u: link demo (kosongkan bila tidak ada)
const PROJECTS = [
  {
    t: "E-NADIN UPA TIK UNIPA",
    v: "v2.0.0",
    y: 2026,
    i: "Img/eNadinUpaTIk.png",
    u: "https://enadin-tik.unipa.ac.id/login",
    d: "Manajemen dokumen dan persuratan elektronik: surat masuk, keluar, keterangan, dan arsip dengan penomoran otomatis, hak akses berbasis peran, dan log aktivitas.",
    s: ["Laravel", "Livewire", "Bootstrap"],
  },
  {
    t: "SIMKATMAWA UNIPA",
    v: "v1.0.0",
    y: 2026,
    i: "Img/simkatmawa-unipa.png",
    u: "https://simkatmawa.unipa.ac.id/",
    d: "Mencatat prestasi, rekognisi, sertifikasi, dan ajang kemahasiswaan, lengkap dengan unggahan sertifikat, foto kegiatan, dan surat tugas.",
    s: ["Laravel", "Livewire", "Bootstrap"],
  },
  {
    t: "SIMDUK WONDAMA",
    v: "v1.0.2",
    y: 2026,
    i: "Img/simduk.png",
    u: "https://wondama-dev.unipa.ac.id/",
    d: "Pendataan penduduk untuk pemerintah daerah Wondama, dengan manajemen hak akses, log aktivitas, dan dashboard statistik.",
    s: ["Laravel", "Livewire", "Bootstrap", "Chart.js"],
  },
  {
    t: "Perpustakaan UNIPA",
    v: "v1.0.0",
    y: 2026,
    i: "Img/perpustakaan-unipa.png",
    u: "https://perpustakaan.unipa.ac.id/",
    d: "Katalog koleksi, keanggotaan, buku tamu, dan peminjaman. Awalnya INLISLite, lalu saya kembangkan ulang dengan struktur modular.",
    s: ["CodeIgniter 4", "Bootstrap"],
  },
  {
    t: "Kerjasama UNIPA",
    v: "v5.1.0",
    y: 2026,
    i: "Img/kerjasama.png",
    u: "https://kerjasama.unipa.ac.id/login",
    d: "Mengelola dokumen MoU/MoA dengan mitra: ruang lingkup, masa berlaku, dan status kerjasama.",
    s: ["Laravel", "Bootstrap", "Chart.js"],
  },
  {
    t: "Validasi Surat Rektor UNIPA",
    v: "v3.2.0",
    y: 2026,
    i: "Img/validasi.png",
    u: "https://validasi.unipa.ac.id/",
    d: "Verifikasi keaslian surat bertanda tangan Rektor lewat QR Code.",
    s: ["CodeIgniter", "Bootstrap"],
  },
  {
    t: "Validasi Surat WR1 UNIPA",
    v: "v1.0.0",
    y: 2026,
    i: "Img/validasi-wr1.png",
    u: "https://wr1-validasi.unipa.ac.id/",
    d: "Pindai QR Code pada surat untuk melihat nomor, tanggal, perihal, penandatangan, dan status keabsahannya.",
    s: ["CodeIgniter", "Bootstrap"],
  },
  {
    t: "Validasi Surat UPA TIK UNIPA",
    v: "v1.0.0",
    y: 2026,
    i: "Img/validasi-surat-upa-tik.png",
    u: "https://tik-validasi.unipa.ac.id/auth",
    d: "Validasi surat resmi UPA TIK dengan QR Code unik pada setiap dokumen.",
    s: ["CodeIgniter", "Bootstrap"],
  },
  {
    t: "Aplikasi Surat Elektronik UNIPA",
    v: "v1.1.0",
    y: 2026,
    i: "Img/eNadinUnipa.png",
    u: "https://enadin.unipa.ac.id/login",
    d: "Digitalisasi surat masuk, keluar, dan keterangan dengan penomoran otomatis dan penyimpanan file privat.",
    s: ["Laravel", "Livewire", "Bootstrap"],
  },
  {
    t: "Aplikasi Surat Elektronik FKIP UNIPA",
    v: "v1.0.0",
    y: 2026,
    i: "Img/eNadinFkip.png",
    u: "https://enadin-fkip.unipa.ac.id/login",
    d: "Manajemen surat dengan penyimpanan privat, autentikasi berbasis sesi, dan pratinjau dokumen langsung di browser.",
    s: ["Laravel", "Livewire", "Bootstrap"],
  },
  {
    t: "Landing Page Simunipa",
    v: "v1.0.0",
    y: 2026,
    i: "Img/landing_page_simunipa.png",
    u: "https://simunipa.unipa.ac.id/",
    d: "Landing page untuk sistem Simunipa.",
    s: ["HTML", "CSS", "JavaScript"],
  },
  {
    t: "SIKAT UNIPA",
    v: "v5.1.0",
    y: 2025,
    i: "Img/sikat.png",
    u: "https://sikat.unipa.ac.id/login",
    d: "Sistem Informasi Keuangan dan Akuntansi Terpadu: pencatatan, pelaporan, dan pengelolaan keuangan kampus.",
    s: ["Laravel", "Bootstrap", "Chart.js"],
  },
  {
    t: "SIBARA UNIPA",
    v: "v2.0.0",
    y: 2025,
    i: "Img/sibara.png",
    u: "https://sibara.unipa.ac.id/login",
    d: "Peminjaman proyektor, laptop, kabel, dan perangkat jaringan kantor secara digital.",
    s: ["Laravel", "Bootstrap"],
  },
  {
    t: "Pengumuman Data Center UNIPA",
    v: "v3.0.0",
    y: 2025,
    i: "Img/pengumuman.png",
    u: "",
    d: "Pengumuman maintenance dan gangguan data center.",
    s: ["CodeIgniter", "Bootstrap"],
  },
  {
    t: "Lapor Diri PPG",
    v: "v3.2.0",
    y: 2024,
    i: "Img/laporDiri.png",
    u: "https://lapordiri-ppg.unipa.ac.id/login",
    d: "Registrasi ulang dan validasi berkas awal calon peserta PPG yang lolos seleksi.",
    s: ["Laravel", "Bootstrap", "Chart.js"],
  },
  {
    t: "Portal Registrasi & Pengaduan Mahasiswa",
    v: "v7.1.0",
    y: 2024,
    i: "Img/registrasi.png",
    u: "https://registrasi.unipa.ac.id/",
    d: "Registrasi layanan kampus (internet, email, e-learning) dengan tiket pengaduan dan notifikasi email.",
    s: ["CodeIgniter 4", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    t: "Web Login Unipenet",
    v: "v1.0.1",
    y: 2024,
    i: "Img/login_unipenet.png",
    u: "",
    d: "Halaman login untuk sistem Unipenet.",
    s: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

const $ = (s) => document.querySelector(s);
const host = (u) => (u ? new URL(u).host : "belum tersedia online");
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

// ====== Animasi muncul saat discroll ======
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target;
            io.unobserve(el);
            el.classList.add("in");
            // Lepas kelas animasi setelah selesai agar efek hover kartu tidak ikut tertunda
            const wait =
              700 + parseInt(el.style.getPropertyValue("--d") || 0, 10);
            setTimeout(() => {
              el.classList.remove("rv", "in");
              el.style.removeProperty("--d");
            }, wait);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      )
    : null;
// Elemen dalam satu kelompok muncul berurutan (stagger)
function reveal(els, step = 80, cap = 6) {
  [...els].forEach((el, i) => {
    el.classList.add("rv");
    el.style.setProperty("--d", (i % cap) * step + "ms");
    io ? io.observe(el) : el.classList.add("in");
  });
}

// ====== Hero: tampilkan proyek unggulan ======
const slidesEl = $("#slides");
slidesEl.innerHTML = PROJECTS.map(
  (p, i) =>
    `<img src="${esc(p.i)}" alt="Tampilan ${esc(p.t)}" ${i ? 'loading="lazy"' : ""} />`,
).join("");
const imgs = [...slidesEl.children];
const bar = $("#bar");
let cur = 0;
function go(n) {
  cur = (n + PROJECTS.length) % PROJECTS.length;
  imgs.forEach((im, i) => im.classList.toggle("on", i === cur));
  const p = PROJECTS[cur];
  $("#heroHost").textContent = host(p.u);
  $("#heroCap").innerHTML =
    (p.u
      ? `<a href="${esc(p.u)}" target="_blank" rel="noopener">${esc(p.t)}</a>`
      : esc(p.t)) + `<small>${esc(p.v)} · ${p.y}</small>`;
  $("#count").textContent = `${cur + 1} / ${PROJECTS.length}`;
  // Mulai ulang progress bar; saat animasinya selesai, slide berpindah otomatis
  bar.classList.remove("run");
  void bar.offsetWidth;
  bar.classList.add("run");
}
bar.addEventListener("animationend", () => go(cur + 1));
$("#next").addEventListener("click", () => go(cur + 1));
$("#prev").addEventListener("click", () => go(cur - 1));
$("#carousel").addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") go(cur + 1);
  if (e.key === "ArrowLeft") go(cur - 1);
});
// Geser (swipe) di layar sentuh
let sx = null;
slidesEl.addEventListener("pointerdown", (e) => (sx = e.clientX));
slidesEl.addEventListener("pointerup", (e) => {
  if (sx !== null && Math.abs(e.clientX - sx) > 40)
    go(cur + (e.clientX < sx ? 1 : -1));
  sx = null;
});
go(0);

// ====== Partikel latar hero ======
(function () {
  const cv = $("#particles"),
    ctx = cv.getContext("2d"),
    hero = $("#home");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W,
    H,
    dots = [],
    rgb = "36,67,212",
    raf = 0;
  const mouse = { x: -999, y: -999 };

  function readColor() {
    const h = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim()
      .replace("#", "");
    if (h.length === 6)
      rgb = [0, 2, 4].map((i) => parseInt(h.substr(i, 2), 16)).join(",");
  }
  function size() {
    const r = hero.getBoundingClientRect(),
      d = Math.min(devicePixelRatio || 1, 2);
    W = r.width;
    H = r.height;
    cv.width = W * d;
    cv.height = H * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    const n = Math.min(70, Math.round((W * H) / 15000));
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.6,
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const p of dots) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x,
        dy = p.y - mouse.y,
        dist = Math.hypot(dx, dy);
      if (dist < 110) {
        p.x += (dx / dist) * 1.2;
        p.y += (dy / dist) * 1.2;
      } // titik menjauh dari kursor
    }
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      ctx.fillStyle = `rgba(${rgb},0.6)`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, 6.283);
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j],
          d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(${rgb},${0.22 * (1 - d / 120)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 150) {
        ctx.strokeStyle = `rgba(${rgb},${0.4 * (1 - md / 150)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
  function loop() {
    frame();
    raf = requestAnimationFrame(loop);
  }

  readColor();
  size();
  if (reduce) {
    frame();
  } // pengguna kurangi-gerakan: gambar diam satu kali
  else {
    // Jalan hanya saat hero terlihat, hemat baterai
    new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting) loop();
    }).observe(hero);
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    hero.addEventListener("pointerleave", () => {
      mouse.x = mouse.y = -999;
    });
  }
  // Warna partikel ikut berganti saat tema diubah
  new MutationObserver(() => {
    readColor();
    if (reduce) frame();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  let t;
  addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      size();
      if (reduce) frame();
    }, 150);
  });
})();

// ====== Filter & daftar proyek ======
const FILTERS = {
  Semua: () => true,
  Laravel: (p) => p.s.includes("Laravel"),
  CodeIgniter: (p) => p.s.some((x) => x.startsWith("CodeIgniter")),
  "HTML/JS": (p) => p.s.includes("HTML"),
};
function card(p) {
  const img = `<div class="frame-bar"><i></i><i></i><i></i><span>${esc(host(p.u))}</span></div>
    <img src="${esc(p.i)}" alt="Tampilan ${esc(p.t)}" loading="lazy" />`;
  const body = `<div class="body">
      <h3>${esc(p.t)}</h3>
      <div class="meta">${esc(p.v)} · ${p.y}</div>
      <p>${esc(p.d)}</p>
      <div class="tags">${p.s.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    </div>`;
  return p.u
    ? `<a class="frame proj" href="${esc(p.u)}" target="_blank" rel="noopener">${img}${body}</a>`
    : `<article class="frame proj">${img}${body}</article>`;
}
function render(name) {
  $("#grid").innerHTML = PROJECTS.filter(FILTERS[name]).map(card).join("");
  document
    .querySelectorAll(".chip")
    .forEach((c) => c.setAttribute("aria-pressed", c.dataset.f === name));
  reveal($("#grid").children, 70, 3);
}
$("#filters").innerHTML = Object.keys(FILTERS)
  .map((f) => `<button class="chip" type="button" data-f="${f}">${f}</button>`)
  .join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (b) render(b.dataset.f);
});
render("Semua");

// ====== Mode gelap / terang ======
const root = document.documentElement;
const themeBtn = $("#themeBtn");
function syncBtn() {
  const dark = root.getAttribute("data-theme") === "dark";
  themeBtn.setAttribute(
    "aria-label",
    dark ? "Ganti ke mode terang" : "Ganti ke mode gelap",
  );
}
function setTheme(t) {
  root.setAttribute("data-theme", t);
  try {
    localStorage.setItem("theme", t);
  } catch (e) {}
  syncBtn();
}
themeBtn.addEventListener("click", () =>
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"),
);
// Ikuti pengaturan sistem selama pengunjung belum memilih sendiri
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (err) {}
  if (!saved) {
    root.setAttribute("data-theme", e.matches ? "dark" : "light");
    syncBtn();
  }
});
syncBtn();

// ====== Dokumentasi foto — ISI DI SINI ======
// 1) Taruh foto di folder Img/dokumentasi/
// 2) Daftarkan satu baris per foto: { src: "Img/dokumentasi/nama-file.jpg", cap: "Keterangan singkat (opsional)" }
const DOCS = {
  jaringan: {
    label: "Jaringan & instalasi",
    photos: [
      {
        src: "Img/dokumentasi/instalasi_jaringan1.jpg",
        cap: "Instalasi jaringan",
      },
      {
        src: "Img/dokumentasi/instalasi_jaringan2.jpg",
        cap: "Instalasi jaringan",
      },
      {
        src: "Img/dokumentasi/instalasi_jaringan3.jpg",
        cap: "Instalasi jaringan",
      },
      {
        src: "Img/dokumentasi/instalasi_jaringan4.jpg",
        cap: "Instalasi jaringan",
      },
      {
        src: "Img/dokumentasi/instalasi_jaringan5.jpg",
        cap: "Instalasi jaringan",
      },
      {
        src: "Img/dokumentasi/instalasi_jaringan6.jpg",
        cap: "Instalasi jaringan",
      },
    ],
  },
  perbaikan: {
    label: "Perbaikan hardware & software",
    photos: [
      {
        src: "Img/dokumentasi/Perbaikan_hardware1.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware2.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware3.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware4.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware5.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware6.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_hardware7.jpg",
        cap: "Perbaikan hardware",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software1.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software2.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software3.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software4.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software5.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software6.jpg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software7.jpeg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software8.jpeg",
        cap: "Perbaikan software",
      },
      {
        src: "Img/dokumentasi/Perbaikan_software9.jpg",
        cap: "Perbaikan software",
      },
    ],
  },
};

let docKey = "jaringan";
function showDoc(key) {
  docKey = key;
  const list = DOCS[key].photos;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.setAttribute("aria-pressed", t.dataset.k === key));
  $("#docGrid").innerHTML = list.length
    ? list
        .map(
          (p, i) =>
            `<button class="doc" type="button" data-i="${i}" aria-label="Perbesar foto${p.cap ? ": " + esc(p.cap) : ""}">
           <img src="${esc(p.src)}" alt="${esc(p.cap || DOCS[key].label)}" loading="lazy" />${p.cap ? `<span>${esc(p.cap)}</span>` : ""}
         </button>`,
        )
        .join("")
    : `<div class="doc-empty"><i class="bi bi-camera"></i><p>Dokumentasi foto segera ditambahkan.</p></div>`;
  reveal($("#docGrid").children, 60, 4);
}
$("#docTabs").innerHTML = Object.keys(DOCS)
  .map(
    (k) =>
      `<button class="tab" type="button" data-k="${k}">${esc(DOCS[k].label)}</button>`,
  )
  .join("");
$("#docTabs").addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (b) showDoc(b.dataset.k);
});
// Tombol "Lihat dokumentasi" pada kartu keahlian membuka tab yang sesuai
document
  .querySelectorAll("[data-tab]")
  .forEach((a) => a.addEventListener("click", () => showDoc(a.dataset.tab)));
showDoc("jaringan");

// Lightbox foto
const lb = $("#lb");
let lbI = 0;
function lbShow(i) {
  const list = DOCS[docKey].photos;
  lbI = (i + list.length) % list.length;
  const p = list[lbI];
  $("#lbImg").src = p.src;
  $("#lbImg").alt = p.cap || DOCS[docKey].label;
  $("#lbCap").textContent =
    (p.cap ? p.cap + " · " : "") + (lbI + 1) + " / " + list.length;
}
$("#docGrid").addEventListener("click", (e) => {
  const b = e.target.closest(".doc");
  if (!b) return;
  lbShow(+b.dataset.i);
  lb.showModal();
});
$("#lbPrev").addEventListener("click", () => lbShow(lbI - 1));
$("#lbNext").addEventListener("click", () => lbShow(lbI + 1));
$("#lbX").addEventListener("click", () => lb.close());
lb.addEventListener("click", (e) => {
  if (e.target === lb) lb.close();
});
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") lbShow(lbI + 1);
  if (e.key === "ArrowLeft") lbShow(lbI - 1);
});

// ====== Menu hamburger (mobile) ======
const navBtn = $("#navBtn");
const menu = $("#menu");
function setMenu(open) {
  menu.classList.toggle("open", open);
  navBtn.setAttribute("aria-expanded", open);
  navBtn.setAttribute(
    "aria-label",
    open ? "Tutup menu navigasi" : "Buka menu navigasi",
  );
  navBtn.firstElementChild.className = open ? "bi bi-x-lg" : "bi bi-list";
}
navBtn.addEventListener("click", () =>
  setMenu(!menu.classList.contains("open")),
);
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".top")) setMenu(false);
});
matchMedia("(min-width: 861px)").addEventListener("change", () =>
  setMenu(false),
);

// ====== Pasang animasi pada elemen statis ======
reveal(document.querySelectorAll(".hero-text > *"), 90);
reveal(document.querySelectorAll(".sec h2, .sec .sub, .filters"), 0);
reveal(document.querySelectorAll(".photo, .about p"), 90);
reveal(document.querySelectorAll(".stats div"), 100);
reveal(document.querySelectorAll(".skills .card"), 100);
reveal(document.querySelectorAll(".job"), 0);
reveal(document.querySelectorAll(".contact .social, .form"), 100);

// ====== Form kontak -> WhatsApp ======
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const teks =
    "Halo, saya ingin menghubungi Anda lewat form portofolio.\n\n" +
    "Nama: " +
    $("#cName").value.trim() +
    "\n" +
    "Email: " +
    $("#cEmail").value.trim() +
    "\n" +
    "Pesan: " +
    $("#cMsg").value.trim();
  window.open(
    "https://wa.me/6285244209946?text=" + encodeURIComponent(teks),
    "_blank",
    "noopener",
  );
});

$("#yr").textContent = new Date().getFullYear();
