import { describe, expect, test } from "@jest/globals";
import { validateContactForm } from "../src/utils/validation";

describe("Pengujian Validasi Contact Form", () => {
  test("Menolak form yang kosong", () => {
    expect(validateContactForm("", "", "")).toBe("Semua kolom wajib diisi.");
  });

  test("Menolak email dengan format salah", () => {
    expect(validateContactForm("Novelia", "noveliaemail", "Halo")).toBe(
      "Format email tidak valid.",
    );
  });

  test("Menolak nama yang kosong", () => {
    expect(validateContactForm("", "novelia@gmail.com", "Halo")).toBe(
      "Semua kolom wajib diisi.",
    );
  });

  test("Menolak pesan yang kosong", () => {
    expect(validateContactForm("Novelia", "novelia@gmail.com", "")).toBe(
      "Semua kolom wajib diisi.",
    );
  });

  test("Menerima data yang lengkap dan valid", () => {
    expect(
      validateContactForm(
        "Novelia",
        "novelia@gmail.com",
        "Halo, saya ingin bertanya.",
      ),
    ).toBeNull();
  });
});
