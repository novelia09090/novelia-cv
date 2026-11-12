import { StyleSheet, Text, View } from "react-native";

type InterestItem = {
  id: string;
  icon: string;
  judul: string;
  deskripsi: string;
};

type InterestSectionProps = {
  data: InterestItem[];
};

export default function InterestSection({ data }: InterestSectionProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>My Interest</Text>

      {data.map((item) => (
        <View key={item.id} style={styles.itemRow}>
          <Text style={styles.itemIcon}>{item.icon}</Text>

          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{item.judul}</Text>
            <Text style={styles.itemDescription}>{item.deskripsi}</Text>
          </View>
        </View>
      ))}
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
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  itemIcon: {
    fontSize: 27,
    marginRight: 13,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    color: "#315C85",
    fontSize: 14,
    fontWeight: "bold",
  },
  itemDescription: {
    color: "#7890A8",
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
});
