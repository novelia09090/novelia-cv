import { ScrollView, StyleSheet, View } from "react-native";

import AboutSection from "../components/AboutSection";
import BackHomeButton from "../components/BackHomeButton";
import ExperienceSection from "../components/ExperienceSection";
import HobbySection from "../components/HobbySection";
import InterestSection from "../components/InterestSection";

import profileJson from "../data/profile.json";

export default function AboutScreen() {
  const { profileData, interestData, hobbyData, experienceData } = profileJson;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackHomeButton />

        <View style={styles.content}>
          <AboutSection
            deskripsi={profileData.deskripsi}
            semester={profileData.semester}
          />

          <InterestSection data={interestData} />

          <HobbySection data={hobbyData} />

          <ExperienceSection data={experienceData} />
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
