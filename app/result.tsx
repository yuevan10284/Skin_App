import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { fakeSkinScore } from '../utils/fakeSkinScore';

export default function ResultScreen() {
  const [skinData, setSkinData] = useState<{ score: number; description: string } | null>(null);
  const params = useLocalSearchParams();
  const photo = params.photo ? JSON.parse(params.photo as string) : null;

  useEffect(() => {
    // Generate skin score when component mounts
    const result = fakeSkinScore();
    setSkinData(result);
  }, []);

  const getScoreColor = (score: number) => {
    if (score > 85) return '#10b981'; // Green for excellent
    if (score > 70) return '#f59e0b'; // Orange for good
    return '#ef4444'; // Red for needs care
  };

  const getScoreEmoji = (score: number) => {
    if (score > 85) return '🌟';
    if (score > 70) return '👍';
    return '💧';
  };

  if (!skinData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Analyzing your skin...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdf2f8" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Skin Health Score</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image
            source={{ uri: photo?.uri }}
            style={styles.photo}
            resizeMode="cover"
          />
        </View>

        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={[styles.scoreText, { color: getScoreColor(skinData.score) }]}>
              {skinData.score}
            </Text>
            <Text style={styles.scoreEmoji}>{getScoreEmoji(skinData.score)}</Text>
          </View>
          <Text style={styles.scoreLabel}>Skin Health Score</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{skinData.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf2f8', // Light pink background
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#be185d', // Darker pink matching logo
    textAlign: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#ec4899', // Pink border
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fce7f3', // Very light pink background
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#ec4899',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scoreEmoji: {
    fontSize: 24,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#9d174d', // Medium pink
    fontWeight: '500',
  },
  descriptionContainer: {
    backgroundColor: '#fce7f3', // Very light pink background
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#fbcfe8', // Light pink border
  },
  descriptionText: {
    fontSize: 18,
    color: '#be185d', // Darker pink
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
  },
  buttonContainer: {
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#ec4899', // Pink button
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#ec4899',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#9d174d',
  },
});
