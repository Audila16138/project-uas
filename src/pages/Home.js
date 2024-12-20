import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const paketUnggulanRef = useRef(null);

  // State to manage selected packages
  const [selectedPackages, setSelectedPackages] = useState([]);

  // Function to handle adding a package to the selected list
  const addPackage = (pkg) => {
    setSelectedPackages((prevSelected) => [...prevSelected, pkg]);
  };

  // Function to handle removing a package from the selected list
  const removePackage = (pkg) => {
    setSelectedPackages((prevSelected) =>
      prevSelected.filter((item) => item !== pkg)
    );
  };

  // Function to handle editing a package (changing its name for simplicity)
  const editPackage = (oldPkg, newPkg) => {
    setSelectedPackages((prevSelected) =>
      prevSelected.map((item) => (item === oldPkg ? newPkg : item))
    );
  };

  // Function to scroll to the package section
  const scrollToPaket = () => {
    paketUnggulanRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-6">
      {/* Teks Sambutan */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-4">
          Selamat Datang di <span className="text-blue-500">WedEase</span>
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          WedEase adalah aplikasi web yang dirancang untuk mempermudah
          pengelolaan acara pernikahan. Kami menawarkan berbagai paket unggulan
          untuk memenuhi kebutuhan Anda.
        </p>
        <button
          onClick={scrollToPaket}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Lihat Paket Unggulan
        </button>
      </section>

      {/* Bagian Paket Unggulan */}
      <section
        ref={paketUnggulanRef}
        className="mt-16 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Paket Unggulan</h3>

        {/* List Paket */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Paket Silver */}
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-2xl font-bold mb-2 text-gray-800">
              Paket Silver
            </h4>
            <ul className="text-gray-600 mb-4">
              <li>- Dekorasi Sederhana</li>
              <li>- Dokumentasi Foto</li>
              <li>- Catering 100 Porsi</li>
              <li>- MC Profesional</li>
            </ul>
            <p className="text-lg font-semibold mb-2 text-blue-500">
              Harga: Rp 10.000.000
            </p>
            <button
              onClick={() => addPackage("Paket Silver")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
            >
              Tambah ke Pesanan
            </button>
            {selectedPackages.includes("Paket Silver") && (
              <button
                onClick={() => removePackage("Paket Silver")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block text-center mt-2"
              >
                Hapus dari Pesanan
              </button>
            )}
          </div>

          {/* Paket Gold */}
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-2xl font-bold mb-2 text-gray-800">
              Paket Gold
            </h4>
            <ul className="text-gray-600 mb-4">
              <li>- Dekorasi Elegan</li>
              <li>- Dokumentasi Foto & Video</li>
              <li>- Catering 300 Porsi</li>
              <li>- Hiburan Musik</li>
              <li>- MC Profesional</li>
            </ul>
            <p className="text-lg font-semibold mb-2 text-blue-500">
              Harga: Rp 20.000.000
            </p>
            <button
              onClick={() => addPackage("Paket Gold")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
            >
              Tambah ke Pesanan
            </button>
            {selectedPackages.includes("Paket Gold") && (
              <button
                onClick={() => removePackage("Paket Gold")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block text-center mt-2"
              >
                Hapus dari Pesanan
              </button>
            )}
          </div>

          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-2xl font-bold mb-2 text-gray-800">
              Paket Platinum
            </h4>
            <ul className="text-gray-600 mb-4">
              <li>- Dekorasi Mewah</li>
              <li>- Dokumentasi Full HD (Foto & Video)</li>
              <li>- Catering 500 Porsi</li>
              <li>- Live Band</li>
              <li>- MC & Entertainment</li>
            </ul>
            <p className="text-lg font-semibold mb-2 text-blue-500">
              Harga: Rp 30.000.000
            </p>
            <button
              onClick={() => addPackage("Paket Platinum")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
            >
              Tambah ke Pesanan
            </button>
            {selectedPackages.includes("Paket Platinum") && (
              <button
                onClick={() => removePackage("Paket Platinum")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block text-center mt-2"
              >
                Hapus dari Pesanan
              </button>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-4">Pesanan Anda:</h4>
          <ul>
            {selectedPackages.map((pkg, index) => (
              <li key={index} className="text-lg text-gray-700">
                {pkg}{" "}
                <button
                  onClick={() => removePackage(pkg)}
                  className="text-red-500 ml-2"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          {selectedPackages.length > 0 && (
            <Link
              to="/pesan-wo"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 block text-center"
            >
              Lanjut ke Pemesanan
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
