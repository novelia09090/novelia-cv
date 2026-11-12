import { useState } from "react";
import {
    Alert,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import BackHomeButton from "../components/BackHomeButton";
import { validateContactForm } from "../utils/validation";

export default function ContactScreen() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Fungsi mengirim form
  const handleSubmit = () => {
    const errorMessage = validateContactForm(nama, email, pesan);

    if (errorMessage) {
      Alert.alert("Perhatian", errorMessage);
      return;
    }

    setShowSuccess(true);
    setNama("");
    setEmail("");
    setPesan("");
  };

  // Fungsi membuka WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = "6283174798921";
    const message = "Halo Novelia, saya ingin menghubungi kamu.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert("Gagal", "Tidak dapat membuka WhatsApp.");
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.page}>
          <BackHomeButton />

          <View style={styles.content}>
            {/* HEADER */}
            <View style={styles.header}>
              <Text style={styles.label}>LET'S CONNECT</Text>
              <Text style={styles.title}>Contact Me 💌</Text>
              <Text style={styles.subtitle}>
                Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk
                menghubungi saya melalui form di bawah ini.
              </Text>
            </View>

            {/* CONTACT FORM */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Kirim Pesan ✉️</Text>
              <Text style={styles.cardSubtitle}>
                Silakan isi data berikut untuk menghubungi saya.
              </Text>

              <Text style={styles.inputLabel}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama kamu"
                placeholderTextColor="#91A8C0"
                value={nama}
                onChangeText={(value) => {
                  setNama(value);
                  setShowSuccess(false);
                }}
                accessibilityLabel="Nama lengkap"
              />

              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan email kamu"
                placeholderTextColor="#91A8C0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(value) => {
                  setEmail(value);
                  setShowSuccess(false);
                }}
                accessibilityLabel="Alamat email"
              />

              <Text style={styles.inputLabel}>Pesan</Text>
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Tulis pesan kamu di sini..."
                placeholderTextColor="#91A8C0"
                multiline
                textAlignVertical="top"
                value={pesan}
                onChangeText={(value) => {
                  setPesan(value);
                  setShowSuccess(false);
                }}
                accessibilityLabel="Isi pesan"
              />

              <Pressable
                style={({ pressed }) => [
                  styles.submitButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={handleSubmit}
                accessibilityRole="button"
                accessibilityLabel="Kirim pesan"
              >
                <Text style={styles.submitButtonText}>Kirim Pesan ✨</Text>
              </Pressable>

              {/* SUCCESS MESSAGE */}
              {showSuccess && (
                <View style={styles.successBox} accessibilityRole="alert">
                  <Text style={styles.successTitle}>✓ Pesan Berhasil!</Text>
                  <Text style={styles.successText}>
                    Terima kasih sudah menghubungi saya. Pesan kamu berhasil
                    dicatat pada tampilan ini. 💙
                  </Text>
                </View>
              )}
            </View>

            {/* WHATSAPP */}
            <View style={styles.whatsappCard}>
              <Text style={styles.whatsappEmoji}>💬</Text>

              <Text style={styles.whatsappTitle}>
                Hubungi Saya via WhatsApp
              </Text>

              <Text style={styles.whatsappDescription}>
                Kamu juga bisa menghubungi saya secara langsung melalui
                WhatsApp.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.whatsappButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={handleWhatsApp}
                accessibilityRole="button"
                accessibilityLabel="Buka WhatsApp"
              >
                <Text style={styles.whatsappButtonText}>Buka WhatsApp 💚</Text>
              </Pressable>
            </View>

            <Text style={styles.footer}>
              Thank you for visiting my portfolio! 💙
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
  },
  page: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingBottom: 35,
  },
  header: {
    marginTop: 15,
    marginBottom: 22,
  },
  label: {
    color: "#6094C8",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: "#234B78",
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 9,
  },
  subtitle: {
    color: "#66809D",
    fontSize: 13,
    lineHeight: 21,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#D5E7FA",
    elevation: 3,
  },
  cardTitle: {
    color: "#234B78",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardSubtitle: {
    color: "#8299B2",
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 20,
  },
  inputLabel: {
    color: "#345C83",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#F3F8FF",
    borderWidth: 1,
    borderColor: "#D3E4F6",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 13,
    color: "#234B78",
  },
  messageInput: {
    height: 115,
  },
  submitButton: {
    backgroundColor: "#609BD5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 22,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  successBox: {
    backgroundColor: "#DDF5E6",
    borderWidth: 1,
    borderColor: "#BCE8CB",
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
  },
  successTitle: {
    color: "#176B3A",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  successText: {
    color: "#287348",
    fontSize: 13,
    lineHeight: 20,
  },
  whatsappCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5E7FA",
    elevation: 3,
  },
  whatsappEmoji: {
    fontSize: 35,
    marginBottom: 10,
  },
  whatsappTitle: {
    color: "#234B78",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  whatsappDescription: {
    color: "#8299B2",
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 8,
  },
  phoneNumber: {
    color: "#345C83",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 14,
  },
  whatsappButton: {
    backgroundColor: "#DDF5E6",
    borderWidth: 1,
    borderColor: "#BCE8CB",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  whatsappButtonText: {
    color: "#176B3A",
    fontSize: 13,
    fontWeight: "bold",
  },
  footer: {
    color: "#8299B2",
    fontSize: 11,
    textAlign: "center",
    marginTop: 25,
  },
});
