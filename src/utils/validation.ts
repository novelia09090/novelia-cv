export const validateContactForm = (
  nama: string,
  email: string,
  pesan: string,
): string | null => {
  // Memeriksa apakah semua kolom sudah diisi
  if (!nama.trim() || !email.trim() || !pesan.trim()) {
    return "Semua kolom wajib diisi.";
  }

  // Memeriksa format email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return "Format email tidak valid.";
  }

  // Jika semua data benar
  return null;
};
