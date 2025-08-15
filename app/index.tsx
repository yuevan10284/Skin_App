import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const skinScore = 77;
  const skinMetrics = [
    { name: 'HYDRATION', score: 75 },
    { name: 'COMPLEXION', score: 73 },
    { name: 'ACNE & TEXTURE', score: 70 },
    { name: 'WRINKLES', score: 90 },
    { name: 'DARK CIRCLES', score: 78 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981'; // Green
    if (score >= 70) return '#f59e0b'; // Orange
    return '#ef4444'; // Red
  };

  return (
    <SafeAreaView style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#ec4899" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Gently</Text>
        <View style={styles.weatherPill}>
          <Text style={styles.weatherText}>☁️ 95° C</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Skin Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreDate}>AUG 7 • SKIN SCORE</Text>
          <Text style={styles.scoreNumber}>{skinScore}/100</Text>
          
          <View style={styles.metricsContainer}>
            {skinMetrics.map((metric, index) => (
              <View key={index} style={styles.metricTag}>
                <Text style={styles.metricName}>{metric.name}</Text>
                <Text style={[styles.metricScore, { color: getScoreColor(metric.score) }]}>
                  {metric.score}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => router.push('/camera')}
            activeOpacity={0.8}
          >
            <Text style={styles.checkInIcon}>📷</Text>
            <Text style={styles.checkInText}>Check-in</Text>
          </TouchableOpacity>
        </View>

        {/* Products Section */}
        <View style={styles.productsSection}>
          <Text style={styles.productsTitle}>Products for you</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
            <View style={styles.productCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop' }}
                style={styles.productImage}
              />
              <View style={styles.productOverlay}>
                <Text style={styles.productTitle}>Hydrating Face Serum with Hyaluronic Acid</Text>
                <Text style={styles.productAuthor}>Recommended by Dr. Sarah Chen</Text>
              </View>
              <View style={styles.authorAvatar}>
                <Text style={styles.avatarText}>SC</Text>
              </View>
            </View>

            <View style={styles.productCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=200&fit=crop' }}
                style={styles.productImage}
              />
              <View style={styles.productOverlay}>
                <Text style={styles.productTitle}>Gentle Exfoliating Cleanser</Text>
                <Text style={styles.productAuthor}>Recommended by Dr. Maria Rodriguez</Text>
              </View>
              <View style={styles.authorAvatar}>
                <Text style={styles.avatarText}>MR</Text>
              </View>
            </View>

            <View style={styles.productCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop' }}
                style={styles.productImage}
              />
              <View style={styles.productOverlay}>
                <Text style={styles.productTitle}>Vitamin C Brightening Cream</Text>
                <Text style={styles.productAuthor}>Recommended by Dr. James Wilson</Text>
              </View>
              <View style={styles.authorAvatar}>
                <Text style={styles.avatarText}>JW</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNav]}>🏠</Text>
          <Text style={[styles.navText, styles.activeNav]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📖</Text>
          <Text style={styles.navText}>Routine</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ec4899',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'serif',
  },
  weatherPill: {
    backgroundColor: '#be185d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  weatherText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scoreCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  scoreDate: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 10,
  },
  scoreNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 25,
  },
  metricTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metricName: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
  },
  metricScore: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkInButton: {
    backgroundColor: '#1f2937',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'center',
    gap: 8,
  },
  checkInIcon: {
    fontSize: 16,
  },
  checkInText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  productsSection: {
    marginTop: 30,
    marginBottom: 20,
  },
  productsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  productsScroll: {
    paddingLeft: 0,
  },
  productCard: {
    width: 280,
    height: 200,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
  },
  productTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  productAuthor: {
    color: '#d1d5db',
    fontSize: 14,
  },
  authorAvatar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ec4899',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#9ca3af',
  },
  navText: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
  },
  activeNav: {
    color: '#ec4899',
  },
});
