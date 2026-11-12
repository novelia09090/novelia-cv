import { useState } from "react";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Portfolio = {
  id: string;
  judul: string;
  kategori: string;
  icon: string;
  deskripsi: string;
  teknologi: string;
};

type PortfolioSectionProps = {
  data: Portfolio[];
};

export default function PortfolioSection({ data }: PortfolioSectionProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Mobile Application", "Web Application"];

  const filteredPortfolio = data.filter((project) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      project.judul.toLowerCase().includes(keyword) ||
      project.deskripsi.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === "Semua" || project.kategori === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio</Text>

      <Text style={styles.subtitle}>
        Beberapa proyek yang pernah saya kerjakan
      </Text>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama atau deskripsi proyek..."
          placeholderTextColor="#8AA2BB"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* FILTER CATEGORY */}
      <Text style={styles.filterTitle}>Kategori Proyek</Text>

      <View style={styles.categoryContainer}>
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <Pressable
              key={category}
              style={[styles.categoryButton, isActive && styles.activeCategory]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* JUMLAH HASIL */}
      <Text style={styles.resultText}>
        Menampilkan {filteredPortfolio.length} proyek
      </Text>

      {/* PORTFOLIO LIST */}
      {filteredPortfolio.length > 0 ? (
        filteredPortfolio.map((project) => (
          <View key={project.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{project.icon}</Text>
              </View>

              <View style={styles.projectInfo}>
                <Text style={styles.projectTitle}>{project.judul}</Text>

                <Text style={styles.category}>{project.kategori}</Text>
              </View>
            </View>

            <Text style={styles.description}>{project.deskripsi}</Text>

            <View style={styles.techContainer}>
              <Text style={styles.techLabel}>Teknologi yang digunakan</Text>

              <Text style={styles.techText}>{project.teknologi}</Text>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🔎</Text>

          <Text style={styles.emptyTitle}>Proyek tidak ditemukan</Text>

          <Text style={styles.emptyText}>
            Coba kata kunci atau kategori lainnya.
          </Text>
        </View>
      )}
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

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCEBFA",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  searchIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    height: 45,
    color: "#234B78",
    fontSize: 12,
  },

  filterTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#315C85",
    marginBottom: 9,
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 13,
  },

  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },

  activeCategory: {
    backgroundColor: "#4D8CCB",
    borderColor: "#4D8CCB",
  },

  categoryText: {
    color: "#5685B5",
    fontSize: 11,
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#FFFFFF",
  },

  resultText: {
    fontSize: 11,
    color: "#7189A5",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  icon: {
    fontSize: 25,
  },

  projectInfo: {
    flex: 1,
  },

  projectTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#234B78",
  },

  category: {
    fontSize: 12,
    color: "#5685B5",
    marginTop: 4,
  },

  description: {
    fontSize: 13,
    color: "#7189A5",
    lineHeight: 20,
  },

  techContainer: {
    backgroundColor: "#F1F7FF",
    padding: 11,
    borderRadius: 10,
    marginTop: 13,
  },

  techLabel: {
    fontSize: 11,
    color: "#8AA2BB",
    marginBottom: 5,
  },

  techText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#315C85",
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCEBFA",
  },

  emptyIcon: {
    fontSize: 30,
    marginBottom: 8,
  },

  emptyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#234B78",
  },

  emptyText: {
    fontSize: 12,
    color: "#7189A5",
    marginTop: 5,
    textAlign: "center",
  },
});
