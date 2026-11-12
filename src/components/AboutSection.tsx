import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AboutSectionProps = {
  deskripsi: string;
  semester: string;
};

export default function AboutSection({
  deskripsi,
  semester,
}: AboutSectionProps) {
  const [showMore, setShowMore] = useState(false);

  const fullDescription =
    deskripsi +
    ` Saat ini saya sedang menempuh pendidikan ${semester} dan terus berusaha mengembangkan kemampuan di bidang teknologi informasi.`;

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>About Me</Text>

      <Text style={styles.description}>
        {showMore ? fullDescription : deskripsi.slice(0, 125) + "..."}
      </Text>

      <Pressable
        style={styles.readMoreButton}
        onPress={() => setShowMore(!showMore)}
      >
        <Text style={styles.readMoreText}>
          {showMore ? "Show Less" : "Read More"}
        </Text>
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
  description: {
    color: "#607D99",
    fontSize: 14,
    lineHeight: 23,
  },
  readMoreButton: {
    alignSelf: "flex-start",
    marginTop: 12,
    backgroundColor: "#E3F0FF",
    paddingVertical: 9,
    paddingHorizontal: 17,
    borderRadius: 20,
  },
  readMoreText: {
    color: "#3474AE",
    fontSize: 13,
    fontWeight: "bold",
  },
});
