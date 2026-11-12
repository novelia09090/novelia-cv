import academicJson from "../data/academic.json";

// Simulasi pengambilan data akademik
export const getAcademicData = async () => {
  try {
    const response = await new Promise<typeof academicJson>((resolve) => {
      setTimeout(() => {
        resolve(academicJson);
      }, 700);
    });

    return response;
  } catch (error) {
    throw new Error("Gagal mengambil data akademik.");
  }
};
