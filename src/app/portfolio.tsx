import { ScrollView, StyleSheet, View } from "react-native";

import BackHomeButton from "../components/BackHomeButton";
import PortfolioSection from "../components/PortfolioSection";

import profileJson from "../data/profile.json";

export default function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackHomeButton />

        <View style={styles.content}>
          <PortfolioSection data={profileJson.portfolioData} />
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
