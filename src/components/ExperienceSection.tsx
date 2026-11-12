import { StyleSheet, Text, View } from "react-native";

type Experience = {
  id: string;
  tahun: string;
  judul: string;
  tempat: string;
  kategori: string;
  icon: string;
  deskripsi: string;
};

type ExperienceSectionProps = {
  data: Experience[];
};

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Experience</Text>

      <Text style={styles.subtitle}>
        Perjalanan pendidikan dan pengalaman belajar saya
      </Text>

      {data.map((item, index) => (
        <View key={item.id} style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            {index !== data.length - 1 && <View style={styles.timelineLine} />}
          </View>

          <View style={styles.card}>
            <Text style={styles.year}>{item.tahun}</Text>

            <Text style={styles.experienceTitle}>{item.judul}</Text>

            <Text style={styles.place}>{item.tempat}</Text>

            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.kategori}</Text>
            </View>

            <Text style={styles.description}>{item.deskripsi}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 22,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#234B78",
  },
  subtitle: {
    fontSize: 13,
    color: "#7189A5",
    marginTop: 5,
    marginBottom: 18,
  },
  timelineItem: {
    flexDirection: "row",
  },
  timelineLeft: {
    width: 48,
    alignItems: "center",
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#DCEBFA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  icon: {
    fontSize: 20,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    minHeight: 20,
    backgroundColor: "#B8D5F2",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 18,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },
  year: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#4D8CCB",
    marginBottom: 6,
  },
  experienceTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#234B78",
  },
  place: {
    fontSize: 12,
    color: "#6885A4",
    marginTop: 4,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EAF3FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#4D8CCB",
  },
  description: {
    fontSize: 12,
    color: "#7189A5",
    lineHeight: 19,
    marginTop: 10,
  },
});
