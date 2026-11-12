import { Slot, usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const menus = [
  { nama: "Home", path: "/", icon: "🏠" },
  { nama: "About", path: "/about", icon: "👤" },
  { nama: "Skills", path: "/skills", icon: "💡" },
  { nama: "Portfolio", path: "/portfolio", icon: "📁" },
  { nama: "My Score", path: "/academic", icon: "🎓" },
  { nama: "Contact", path: "/contact", icon: "✉️" },
];

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.tabList}>
        {menus.map((menu) => {
          const active = pathname === menu.path;

          return (
            <Pressable
              key={menu.path}
              style={[styles.tab, active && styles.activeTab]}
              onPress={() => router.push(menu.path as any)}
            >
              <Text style={styles.icon}>{menu.icon}</Text>
              <Text style={[styles.tabText, active && styles.activeText]}>
                {menu.nama}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#EAF3FF",
  },
  content: {
    flex: 1,
  },
  tabList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DCEBFA",
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 8,
  },
  tab: {
    minWidth: 90,
    flex: 1,
    maxWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F1F6FC",
    cursor: "pointer",
  },
  activeTab: {
    backgroundColor: "#D6E9FF",
  },
  icon: {
    fontSize: 17,
    marginBottom: 3,
  },
  tabText: {
    color: "#7189A5",
    fontSize: 12,
    fontWeight: "600",
  },
  activeText: {
    color: "#234B78",
    fontWeight: "bold",
  },
});
