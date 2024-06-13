import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TouchableOpacity, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="people-sharp" style={styles.headerImage} />}>
      <ThemedText style={styles.text}>Geovana Rocha, 3º INFO, RM 07708</ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
      </ThemedView>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao}>
              <Image
                source={require('@/assets/images/1.png')}
                style={styles.logo1}
              />
               <Text style={styles.botaoTexto}>GitHub</Text>
            </TouchableOpacity>
        </ThemedText>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao2}>
              <Image
                source={require('@/assets/images/link.png')}
                style={styles.logo2}
              />
               <Text style={styles.botaoTexto}>Link</Text>
            </TouchableOpacity>
        </ThemedText>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao3}>
              <Image
                source={require('@/assets/images/yt.png')}
                style={styles.logo3}
              />
               <Text style={styles.botaoTexto}>You</Text>
            </TouchableOpacity>
        </ThemedText>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao4}>
              <Image
                source={require('@/assets/images/twt.png')}
                style={styles.logo4}
              />
               <Text style={styles.botaoTexto}>Twitter</Text>
            </TouchableOpacity>
        </ThemedText>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao5}>
              <Image
                source={require('@/assets/images/insta2.png')}
                style={styles.logo5}
              />
               <Text style={styles.botaoTexto}>Instagram</Text>
            </TouchableOpacity>
        </ThemedText>
        <ThemedText style={styles.tudo}>
            <TouchableOpacity style={styles.botao6}>
              <Image
                source={require('@/assets/images/pin.png')}
                style={styles.logo6}
              />
               <Text style={styles.botaoTexto}>Pinterest</Text>
            </TouchableOpacity>
        </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 50,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    fontSize: 18,
    color: "#24A1DE"
  }, 
  logo1: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  botao:{
    width: 320,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    marginLeft: 10,
    fontSize: 40,
    textAlign: 'center'
  },
  logo2: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  botao2:{
    width: 320,
    height: 60,
    backgroundColor: '#017AB4',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  logo3: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  botao3:{
    width: 320,
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  logo4: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  botao4:{
    width: 320,
    height: 60,
    backgroundColor: '#1D9BF0',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  logo5: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  botao5:{
    width: 320,
    height: 60,
    backgroundColor: '#F91887',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  logo6: {
    width: 60, 
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  botao6:{
    width: 320,
    height: 60,
    backgroundColor: '#D2252D',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row', 
    alignItems: 'center',
  },


});
