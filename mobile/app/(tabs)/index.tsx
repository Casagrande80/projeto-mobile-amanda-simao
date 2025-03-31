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
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
        "Alice no País das Maravilhas" é um filme de 2010 dirigido por Tim Burton, que traz uma nova perspectiva sobre a clássica história de Lewis Carroll. A trama segue Alice, agora com 19 anos, que retorna ao mundo fantástico que visitou na infância, onde encontra personagens icônicos e enfrenta desafios em sua jornada de autodescoberta.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre o Livro</ThemedText>
        <ThemedText>
        O livro conta a história de uma menina chamada Alice que cai numa toca de coelho que a transporta para um lugar fantástico povoado por criaturas peculiares e antropomórficas, revelando uma lógica do absurdo, característica dos sonhos. Este está repleto de alusões satíricas dirigidas tanto aos amigos como aos inimigos de Carroll, de paródias a poemas populares infantis ingleses ensinados no século XIX e também de referências linguísticas e matemáticas frequentemente através de enigmas que contribuíram para a sua popularidade. É assim uma obra de difícil interpretação pois contém dois livros num só texto: um para crianças e outro para adultos.
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
