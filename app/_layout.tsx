import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#fdf2f8', // Light pink background matching logo
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Welcome' }} />
        <Stack.Screen name="camera" options={{ title: 'Camera' }} />
        <Stack.Screen name="result" options={{ title: 'Result' }} />
      </Stack>
    </>
  );
}
