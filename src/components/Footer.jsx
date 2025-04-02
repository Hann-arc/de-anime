import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/" className="hover:text-orange-500 transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/recent" className="hover:text-orange-500 transition">
                Episode Terbaru
              </Link>
            </li>
            <li>
              <Link to="/populer" className="hover:text-orange-500 transition">
                Anime Populer
              </Link>
            </li>
            <li>
              <Link to="/completed" className="hover:text-orange-500 transition">
                Tamat
              </Link>
            </li>
            <li>
              <Link to="/movie" className="hover:text-orange-500 transition">
                Anime Movie
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="hover:text-orange-500 transition">
                Jadwal Rilis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <Link to="mailto:muhammadfarhaan911@gmail.com"
                className="hover:text-orange-500 transition"
              >
                muhammadfarhaan911@gmail.com
              </Link>
            </li>
            <li>
              GitHub:{" "}
              <Link to="https://github.com/Hann-arc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                Hann-arc
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <Link to="https://www.linkedin.com/in/muhamad-farhaan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                muhamad-farhaan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Informasi</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Project ini terinspirasi dari{" "}
            <span className="text-orange-500">
              <Link to="https://www.crunchyroll.com">Churchroll</Link>
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
