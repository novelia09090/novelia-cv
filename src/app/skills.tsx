import { ScrollView, StyleSheet, View } from "react-native";

import BackHomeButton from "../components/BackHomeButton";
import SkillsSection from "../components/SkillsSection";

import profileJson from "../data/profile.json";

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackHomeButton />

        <View style={styles.content}>
          <SkillsSection data={profileJson.skillsData} />
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
