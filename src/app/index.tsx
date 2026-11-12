import { useCallback, useEffect, useState } from "react";

import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import ProfileHeader from "../components/ProfileHeader";
import ScreenState from "../components/ScreenState";
import { getProfileData } from "../services/profileService";

const profilePhoto = require("../../assets/hallo 2.jpeg");

const menus = [
  { label: "Home", emoji: "🏠", route: "/" },
  { label: "About", emoji: "👤", route: "/about" },
  { label: "Skills", emoji: "💡", route: "/skills" },
  { label: "Portfolio", emoji: "📁", route: "/portfolio" },
  { label: "My Score", emoji: "🎓", route: "/academic" },
  { label: "Contact", emoji: "✉️", route: "/contact" },
];

export default function HomeScreen() {
  const router = useRouter();

  const [profileData, setProfileData] = useState<
    Awaited<ReturnType<typeof getProfileData>>["profileData"] | null
  >(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mengambil data profil
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getProfileData();

      if (!data.profileData?.nama) {
        setProfileData(null);
        return;
      }

      setProfileData(data.profileData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Gagal mengambil data profil.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Menjalankan pengambilan data saat halaman dibuka
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Tampilan Loading
  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScreenState
          type="loading"
          message="Sedang mengambil data profil kamu..."
        />
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
  if (!profileData) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScreenState type="empty" message="Data profil belum tersedia." />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerLabel}>PERSONAL CV APPLICATION</Text>

            <Text style={styles.headerTitle}>Welcome to My Profile!</Text>

            <Text style={styles.headerSubtitle}>
              Kenali saya lebih dekat melalui aplikasi CV pribadi ini.
            </Text>
          </View>

          <ProfileHeader data={profileData} foto={profilePhoto} />

          {/* NAVIGASI MENU */}
          <View style={styles.navigationSection}>
            <Text style={styles.navigationTitle}>Explore My Pages ✨</Text>

            <View style={styles.menuGrid}>
              {menus.map((menu) => (
                <Pressable
                  key={menu.label}
                  style={({ pressed }) => [
                    styles.menuButton,
                    pressed && styles.menuPressed,
                  ]}
                  onPress={() => router.push(menu.route as any)}
                  accessibilityRole="button"
                  accessibilityLabel={`Buka halaman ${menu.label}`}
                >
                  <Text style={styles.menuEmoji}>{menu.emoji}</Text>

                  <Text style={styles.menuText}>{menu.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* WELCOME CARD */}
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>
              Hello, I'm {profileData.nama}! 💙
            </Text>

            <Text style={styles.welcomeText}>
              Saya mahasiswa {profileData.jurusan} yang sedang menempuh{" "}
              {profileData.semester}. Selamat datang di aplikasi CV pribadi
              saya!
            </Text>
          </View>

          {/* INFORMATION CARD */}
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Explore My Application</Text>

            <Text style={styles.infoText}>
              Gunakan menu navigasi di atas untuk melihat informasi tentang diri
              saya, keterampilan, proyek, pencapaian akademik, dan kontak.
            </Text>
          </View>

          <Text style={styles.footer}>Made with love by Novelia 💙</Text>
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
    paddingTop: 25,
    paddingBottom: 30,
  },
  header: {
    marginBottom: 22,
  },
  headerLabel: {
    color: "#5685B5",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 8,
  },
  headerTitle: {
    color: "#234B78",
    fontSize: 27,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#6885A4",
    fontSize: 13,
    marginTop: 7,
    lineHeight: 20,
  },
  navigationSection: {
    marginTop: 25,
    marginBottom: 5,
  },
  navigationTitle: {
    color: "#234B78",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 13,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  menuButton: {
    width: "31%",
    minHeight: 90,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DCEBFA",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  menuPressed: {
    backgroundColor: "#D6E9FF",
    transform: [{ scale: 0.97 }],
  },
  menuEmoji: {
    fontSize: 25,
    marginBottom: 7,
  },
  menuText: {
    color: "#234B78",
    fontSize: 12,
    fontWeight: "bold",
  },
  welcomeCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#234B78",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 13,
    lineHeight: 22,
    color: "#6885A4",
  },
  infoCard: {
    backgroundColor: "#DCEBFA",
    padding: 20,
    borderRadius: 18,
    marginTop: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#234B78",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 21,
    color: "#526B86",
  },
  footer: {
    textAlign: "center",
    color: "#8AA2BB",
    fontSize: 12,
    marginTop: 25,
  },
});
