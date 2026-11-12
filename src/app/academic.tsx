import { useCallback, useEffect, useState } from "react";

import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

import BackHomeButton from "../components/BackHomeButton";
import ScoreSection from "../components/ScoreSection";
import ScreenState from "../components/ScreenState";

import { getAcademicData } from "../services/academicService";

export default function AcademicScreen() {
  const [academicData, setAcademicData] = useState<Awaited<
    ReturnType<typeof getAcademicData>
  > | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mengambil data akademik
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAcademicData();

      if (
        !data.academicIdentity?.nama ||
        !Array.isArray(data.courses) ||
        data.courses.length === 0
      ) {
        setAcademicData(null);
        return;
      }

      setAcademicData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Gagal mengambil data akademik.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Memanggil data saat halaman dibuka
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Tampilan Loading
  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScreenState type="loading" message="Sedang memuat data akademik..." />
      </View>
    );
  }

  // Tampilan Error
  if (error) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScreenState type="error" message={error} onRetry={loadData} />
      </View>
    );
  }

  // Tampilan Empty
  if (!academicData) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScreenState type="empty" message="Data akademik belum tersedia." />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <BackHomeButton />

        <View style={styles.content}>
          <ScoreSection
            academicIdentity={academicData.academicIdentity}
            currentScore={academicData.currentScore}
            learningPoints={academicData.learningPoints}
            learningProgress={academicData.learningProgress}
            courses={academicData.courses}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF3FF",
  },
  content: {
    width: "100%",
    maxWidth: 650,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
