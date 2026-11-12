import { useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = () => {
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      Alert.alert("Perhatian", "Semua kolom harus diisi terlebih dahulu.");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
      Alert.alert(
        "Email Tidak Valid",
        "Silakan masukkan alamat email yang benar.",
      );
      return;
    }

    Alert.alert("Berhasil", "Pesan berhasil dikirim! Terima kasih.");

    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Contact Me</Text>
      <Text style={styles.formSubtitle}>Feel free to send me a message!</Text>

      <Text style={styles.inputLabel}>Nama</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama kamu"
        placeholderTextColor="#8AA2BB"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email kamu"
        placeholderTextColor="#8AA2BB"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.inputLabel}>Pesan</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Tulis pesan kamu di sini..."
        placeholderTextColor="#8AA2BB"
        multiline
        textAlignVertical="top"
        value={pesan}
        onChangeText={setPesan}
      />

      <Pressable style={styles.sendButton} onPress={handleSubmit}>
        <Text style={styles.sendButtonText}>Send Message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#7898B8",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  sectionTitle: {
    color: "#234B78",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 13,
  },
  formSubtitle: {
    color: "#7890A8",
    fontSize: 13,
    marginBottom: 15,
  },
  inputLabel: {
    color: "#315C85",
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 7,
    marginTop: 9,
  },
  input: {
    backgroundColor: "#F4F8FF",
    borderWidth: 1,
    borderColor: "#D6E6F7",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#315C85",
  },
  messageInput: {
    height: 100,
    paddingTop: 12,
  },
  sendButton: {
    backgroundColor: "#4D8CCB",
    padding: 14,
    borderRadius: 13,
    alignItems: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
