import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";

type ProfileHeaderProps = {
  data: {
    nama: string;
    nim: string;
    jurusan: string;
    pekerjaan: string;
    semester: string;
  };
  foto: ImageSourcePropType;
};

export default function ProfileHeader({ data, foto }: ProfileHeaderProps) {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileTop}>
        <View style={styles.imageBorder}>
          <Image source={foto} style={styles.profileImage} />
        </View>

        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{data.nama}</Text>
          <Text style={styles.profileRole}>{data.pekerjaan}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>✦ Creative Learner</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.identityRow}>
        <View style={styles.identityItem}>
          <Text style={styles.identityLabel}>NIM</Text>
          <Text style={styles.identityValue}>{data.nim}</Text>
        </View>

        <View style={styles.verticalDivider} />

        <View style={styles.identityItem}>
          <Text style={styles.identityLabel}>PROGRAM</Text>
          <Text style={styles.identityValue}>{data.jurusan}</Text>
        </View>
      </View>

      <Text style={styles.semester}>{data.semester}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    elevation: 4,
    shadowColor: "#5279A3",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 18,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  imageBorder: {
    padding: 4,
    borderWidth: 3,
    borderColor: "#C7DFFF",
    borderRadius: 100,
  },
  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 100,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#234B78",
  },
  profileRole: {
    fontSize: 11,
    color: "#8298B2",
    marginTop: 6,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#E5F1FF",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
  },
  badgeText: {
    fontSize: 10,
    color: "#3975B1",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5EDF7",
    marginVertical: 20,
  },
  identityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  identityItem: {
    flex: 1,
    gap: 6,
  },
  identityLabel: {
    fontSize: 10,
    color: "#91A6BF",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  identityValue: {
    fontSize: 12,
    color: "#315D8C",
    fontWeight: "bold",
  },
  verticalDivider: {
    width: 1,
    height: 35,
    backgroundColor: "#E5EDF7",
    marginHorizontal: 15,
  },
  semester: {
    fontSize: 11,
    color: "#8298B2",
    marginTop: 14,
  },
});
