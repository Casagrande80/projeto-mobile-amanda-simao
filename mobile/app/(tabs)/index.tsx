import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/alice.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">oii</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Formação e História</ThemedText>
        <ThemedText>
Fundação: A banda foi formada pelo guitarrista Rudolf Schenker. Os membros fundadores incluíam também o vocalista Klaus Meine, que se juntou à banda em 1969.
Mudanças de Formação: Ao longo dos anos, a formação da banda passou por várias mudanças. Os membros mais conhecidos incluem Klaus Meine (vocal), Rudolf Schenker (guitarra), Matthias Jabs (guitarra solo), Francis Buchholz (baixo) e Herman Rarebell (bateria).
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"> Estilo Musical</ThemedText>
        <ThemedText>
Gênero: Os Scorpions são frequentemente associados ao hard rock e heavy metal, mas também incorporam elementos de rock progressivo e rock alternativo em algumas de suas músicas.
Influências: A banda foi influenciada por bandas de rock dos anos 60 e 70, como The Beatles, The Rolling Stones e Led Zeppelin.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});