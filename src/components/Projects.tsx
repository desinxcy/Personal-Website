import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
        Projects
      </h3>

      {/* === Project 1: CRUD Laravel === */}
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 items-start">
        <div className="relative w-full md:max-w-sm aspect-[16/9] rounded-3xl overflow-hidden">
          <Image
            src="/daftar_mahasiswa_full.jpg"
            alt="Tampilan tabel daftar mahasiswa (CRUD Laravel)"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="w-full">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
            CRUD Daftar Mahasiswa (Laravel 11 + Bootstrap)
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
            Aplikasi manajemen data mahasiswa dengan fitur{" "}
            <em>search</em> (nama/NIM/email), pagination, edit &amp; hapus, serta{" "}
            <strong>export</strong> ke PDF/Excel. Tampilan menggunakan Bootstrap
            agar rapih dan responsif.
          </p>
          <div className="flex items-center gap-x-2.5 mt-2 flex-wrap">
            <Tag text="Laravel" />
            <Tag text="CRUD" />
            <Tag text="Pagination" />
            <Tag text="Export PDF/Excel" />
            <Tag text="Bootstrap" />
          </div>
        </div>
      </div>

      {/* === Project 2: BonekaKu === */}
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 items-start">
        <div className="relative w-full md:max-w-sm aspect-[16/9] rounded-3xl overflow-hidden">
          <Image
            src="/bonekaku_home.jpg"
            alt="Halaman utama BonekaKu E-commerce"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="w-full">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
            BonekaKu – E-Commerce Plush Toy (React + Node.js)
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
            Website e-commerce yang menjual berbagai boneka lucu dan menggemaskan.
            Dibangun menggunakan <strong>React (Vite)</strong> untuk frontend dan{" "}
            <strong>Node.js + Express + MySQL</strong> untuk backend.  
            Fitur meliputi katalog produk, keranjang belanja, checkout, dan halaman admin CRUD.
          </p>
          <div className="flex items-center gap-x-2.5 mt-2 flex-wrap">
            <Tag text="React" />
            <Tag text="Vite" />
            <Tag text="Node.js" />
            <Tag text="Express" />
            <Tag text="MySQL" />
          </div>
        </div>
      </div>
    </section>
  );
}
/* Komponen kecil untuk tag */
function Tag({ text }: { text: string }) {
  return (
    <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-600 dark:text-zinc-300 text-xs">
      {text}
    </span>
  );
}
