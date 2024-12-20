import React from "react";

export default function PesanWO() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Formulir Pemesanan</h2>
      <p className="text-gray-600 mb-6">
        Silakan lengkapi formulir berikut untuk memesan paket layanan Wedding
        Organizer.
      </p>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Nama Lengkap
          </label>
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-2 border rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Nomor Telepon
          </label>
          <input
            type="tel"
            placeholder="08xxxxxxxxxx"
            className="w-full p-2 border rounded focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Pilih Paket
          </label>
          <select className="w-full p-2 border rounded focus:outline-blue-500">
            <option value="silver">Paket Silver</option>
            <option value="gold">Paket Gold</option>
            <option value="platinum">Paket Platinum</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Tanggal Acara
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded focus:outline-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
}
