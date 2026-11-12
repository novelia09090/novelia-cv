import profileJson from "../data/profile.json";

// Simulasi pengambilan data profil
export const getProfileData = async () => {
  try {
    const response = await new Promise<typeof profileJson>((resolve) => {
      setTimeout(() => {
        resolve(profileJson);
      }, 700);
    });

    return response;
  } catch (error) {
    throw new Error("Gagal mengambil data profil.");
  }
};
