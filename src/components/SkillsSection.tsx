import { StyleSheet, Text, View } from "react-native";

type Skill = {
  id: string;
  nama: string;
  icon: string;
  level: number;
  deskripsi: string;
};

type SkillsSectionProps = {
  data: Skill[];
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Skills</Text>
      <Text style={styles.subtitle}>
        Beberapa keterampilan yang sedang saya pelajari
      </Text>

      {data.map((skill) => (
        <View key={skill.id} style={styles.card}>
          <View style={styles.header}>
            <View style={styles.skillInfo}>
              <Text style={styles.icon}>{skill.icon}</Text>
              <Text style={styles.skillName}>{skill.nama}</Text>
            </View>

            <Text style={styles.percentage}>{skill.level}%</Text>
          </View>

          <View style={styles.progressBackground}>
            <View style={[styles.progressBar, { width: `${skill.level}%` }]} />
          </View>

          <Text style={styles.description}>{skill.deskripsi}</Text>
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
    marginBottom: 13,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  skillInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 21,
    marginRight: 10,
  },
  skillName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#234B78",
  },
  percentage: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#4D8CCB",
  },
  progressBackground: {
    height: 9,
    backgroundColor: "#EAF3FF",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: 9,
    backgroundColor: "#4D8CCB",
    borderRadius: 10,
  },
  description: {
    fontSize: 12,
    color: "#7189A5",
    marginTop: 10,
    lineHeight: 18,
  },
});
