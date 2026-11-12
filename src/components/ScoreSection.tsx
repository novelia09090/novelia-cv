import { StyleSheet, Text, View } from "react-native";
import ProgressCard from "./ProgressCard";
import ScoreCard from "./ScoreCard";

type AcademicIdentity = {
  nama: string;
  nim: string;
  programStudi: string;
  mataKuliah: string;
  dosen: string;
};

type ScoreData = {
  nilai: number;
  grade: string;
};

type ProgressData = {
  id: string;
  nama: string;
  persentase: number;
};

type CourseData = {
  id: string;
  nama: string;
};

type ScoreSectionProps = {
  academicIdentity: AcademicIdentity;
  currentScore: ScoreData;
  learningPoints: number;
  learningProgress: ProgressData[];
  courses: CourseData[];
};

export default function ScoreSection({
  academicIdentity,
  currentScore,
  learningPoints,
  learningProgress,
  courses,
}: ScoreSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Academic Dashboard</Text>
      <Text style={styles.description}>
        Informasi akademik dan pencapaian belajar saya
      </Text>

      <View style={styles.identityCard}>
        <Text style={styles.cardTitle}>Academic Identity</Text>

        <Text style={styles.identityText}>Nama: {academicIdentity.nama}</Text>
        <Text style={styles.identityText}>NIM: {academicIdentity.nim}</Text>
        <Text style={styles.identityText}>
          Program Studi: {academicIdentity.programStudi}
        </Text>
        <Text style={styles.identityText}>
          Mata Kuliah: {academicIdentity.mataKuliah}
        </Text>
        <Text style={styles.identityText}>Dosen: {academicIdentity.dosen}</Text>
      </View>

      <View style={styles.scoreRow}>
        <ScoreCard
          title="Current Score"
          value={currentScore.nilai}
          subtitle={`Grade ${currentScore.grade}`}
          icon="🏆"
        />

        <ScoreCard
          title="Learning Points"
          value={learningPoints.toLocaleString("id-ID")}
          subtitle="Total Learning Points"
          icon="⭐"
        />
      </View>

      <Text style={styles.sectionTitle}>Learning Progress</Text>

      {learningProgress.map((item) => (
        <ProgressCard
          key={item.id}
          nama={item.nama}
          persentase={item.persentase}
        />
      ))}

      <Text style={styles.sectionTitle}>My Courses</Text>

      <View style={styles.courseCard}>
        {courses.map((course, index) => (
          <View key={course.id} style={styles.courseItem}>
            <Text style={styles.courseNumber}>{index + 1}.</Text>
            <Text style={styles.courseName}>{course.nama}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#234B78",
  },
  description: {
    fontSize: 12,
    color: "#7189A5",
    marginTop: 5,
    marginBottom: 18,
  },
  identityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#DCEBFA",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#234B78",
    marginBottom: 12,
  },
  identityText: {
    fontSize: 13,
    color: "#526B86",
    marginBottom: 8,
  },
  scoreRow: {
    flexDirection: "row",
    marginHorizontal: -5,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#234B78",
    marginTop: 12,
    marginBottom: 13,
  },
  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },
  courseItem: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF3FA",
  },
  courseNumber: {
    width: 25,
    fontSize: 13,
    fontWeight: "bold",
    color: "#5685B5",
  },
  courseName: {
    flex: 1,
    fontSize: 13,
    color: "#526B86",
  },
});
