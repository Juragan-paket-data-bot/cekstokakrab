export default async function handler(req, res) {
  try {
    const response = await fetch('https://zainstore.id/api/system/stok-akrab');
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data stok" });
  }
}
