export default async function handler(req, res) {
  try {
    // Menangkap parameter opsional dari request (jika ada)
    const { id_grup, kode_produk } = req.query;

    // URL API yang baru
    const baseUrl = 'https://apistokakrab.my.id/api.php';
    const url = new URL(baseUrl);

    // Menambahkan parameter ke URL jika klien mengirimkannya
    if (id_grup) url.searchParams.append('id_grup', id_grup);
    if (kode_produk) url.searchParams.append('kode_produk', kode_produk);

    // Fetch data dengan header Accept JSON
    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data stok" });
  }
}
