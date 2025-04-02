import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">De-Anime</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            De-Anime adalah platform streaming anime untuk para pecinta anime di
            seluruh dunia. yang pastinya tanpa iklan dan gratis.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-orange-500 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="/recent" className="hover:text-orange-500 transition">
                Episode Terbaru
              </a>
            </li>
            <li>
              <a href="/populer" className="hover:text-orange-500 transition">
                Anime Populer
              </a>
            </li>
            <li>
              <a href="/completed" className="hover:text-orange-500 transition">
                Tamat
              </a>
            </li>
            <li>
              <a href="/movie" className="hover:text-orange-500 transition">
                Anime Movie
              </a>
            </li>
            <li>
              <a href="/schedule" className="hover:text-orange-500 transition">
                Jadwal Rilis
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:muhammadfarhaan911@gmail.com"
                className="hover:text-orange-500 transition"
              >
                muhammadfarhaan911@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Hann-arc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                Hann-arc
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/muhamad-farhaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                muhamad-farhaan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Informasi</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Project ini terinspirasi dari{" "}
            <span className="text-orange-500">
              <a href="https://www.crunchyroll.com">Churchroll</a>
            </span>{" "}
            dan bertujuan untuk memperluas kemampuan dalam membangun aplikasi
            berbasis web.
            <br />
            {/* Untuk info lebih detail silahkan lihat disini. */}
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © MUHAMMAD FARHAAN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
