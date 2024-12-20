import React, { useState } from "react";

export default function WOKu() {
  // State untuk daftar pesanan WO
  const [orders, setOrders] = useState([
    {
      id: 1,
      paket: "Paket Silver",
      tanggal: "2024-12-20",
      status: "Diproses",
      penyelenggara: "WO A",
    },
    {
      id: 2,
      paket: "Paket Gold",
      tanggal: "2024-12-25",
      status: "Dikonfirmasi",
      penyelenggara: "WO B",
    },
  ]);

  // State untuk input form (menambah/edit pesanan)
  const [form, setForm] = useState({
    id: null,
    paket: "",
    tanggal: "",
    status: "Diproses",
    penyelenggara: "",
  });

  // Fungsi untuk menambah atau mengedit pesanan
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Edit pesanan
      setOrders(
        orders.map((order) => (order.id === form.id ? { ...form } : order))
      );
    } else {
      // Tambah pesanan baru
      const newOrder = { ...form, id: Date.now() };
      setOrders([...orders, newOrder]);
    }
    resetForm();
  };

  // Fungsi untuk menghapus pesanan
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Fungsi untuk memuat data pesanan ke form (edit)
  const loadOrderToForm = (order) => {
    setForm({ ...order });
  };

  // Fungsi untuk mereset form
  const resetForm = () => {
    setForm({
      id: null,
      paket: "",
      tanggal: "",
      status: "Diproses",
      penyelenggara: "",
    });
  };

  const communicateWithOrganizer = (penyelenggara) => {
    alert(`Menghubungi ${penyelenggara}...`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Kelola Pesanan WO</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-gray-100 p-4 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold mb-4">
          {form.id ? "Edit Pesanan" : "Tambah Pesanan"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Paket WO</label>
            <input
              type="text"
              placeholder="Contoh: Paket Platinum"
              value={form.paket}
              onChange={(e) => setForm({ ...form, paket: e.target.value })}
              className="w-full p-2 border rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tanggal Acara</label>
            <input
              type="date"
              value={form.tanggal}
              onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
              className="w-full p-2 border rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Penyelenggara</label>
            <input
              type="text"
              placeholder="Nama Penyelenggara"
              value={form.penyelenggara}
              onChange={(e) =>
                setForm({ ...form, penyelenggara: e.target.value })
              }
              className="w-full p-2 border rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full p-2 border rounded focus:outline-blue-500"
            >
              <option value="Diproses">Diproses</option>
              <option value="Dikonfirmasi">Dikonfirmasi</option>
              <option value="Selesai">Selesai</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
          >
            {form.id ? "Simpan Perubahan" : "Tambah Pesanan"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">No</th>
              <th className="border p-2">Paket</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Penyelenggara</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-100 text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{order.paket}</td>
                  <td className="border p-2">{order.tanggal}</td>
                  <td className="border p-2">{order.penyelenggara}</td>
                  <td className="border p-2">{order.status}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => loadOrderToForm(order)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() =>
                        communicateWithOrganizer(order.penyelenggara)
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                    >
                      Hubungi
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-600 p-4">
                  Tidak ada pesanan WO.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
