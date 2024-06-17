import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TouchableOpacity, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Linking } from 'react-native';

export default function TabTwoScreen() {
  return (
<ParallaxScrollView
  style={styles.parallaxScrollView}
  headerBackgroundColor={{}}
  headerImage={
    <Image
      source={require('@/assets/images/eu2.png')}
      style={styles.reactLogo}
    />
  
  }
>
      <ThemedText style={styles.text}>Geovana Rocha, 3º INFO, RM 07708</ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
      </ThemedView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => Linking.openURL('https://github.com/geor16')}>
          <Image
            source={require('@/assets/images/1.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => Linking.openURL('https://www.linkedin.com/in/geovana-rocha-carvalho-de-farias-575091311')}>
          <Image
            source={require('@/assets/images/link.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => Linking.openURL('tel: +55 18 99718-7937')}>
          <Image
            source={require('@/assets/images/tele.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Telefone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCjbnYRAqJ71BAM5b47OAK7A')}>
          <Image
            source={require('@/assets/images/yt.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>YouTube</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button5} onPress={() => Linking.openURL('https://x.com/gege_jjkg?t=8_t8Yp0Ah9oAy59sW3Lhyg&s=09')}>
          <Image
            source={require('@/assets/images/twt.png')}
            style={styles.logo2}
          />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button6} onPress={() => Linking.openURL('https://www.instagram.com/_gerocha16?igsh=NWpxbGI5em5pdzIz')}>
          <Image
            source={require('@/assets/images/insta2.png')}
            style={styles.logo3}
          />
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button7} onPress={() => Linking.openURL('https://pin.it/q6e1wHMru')}>
          <Image
            source={require('@/assets/images/pin.png')}
            style={styles.logo3}
          />
          <Text style={styles.buttonText}>Pinterest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button8} onPress={() => Linking.openURL('https://www.facebook.com/geovana.rocha.5477?mibextid=ZbWKwL')}>
          <Image
            source={require('@/assets/images/face.png')}
            style={styles.logo2}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button9} onPress={() => Linking.openURL('https://www.tiktok.com/@gegejjkg?_t=8nC0h1geCec&_r=1')}>
          <Image
            source={require('@/assets/images/ttk.png')}
            style={styles.logo3}
          />
          <Text style={styles.buttonText}>TikTok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10} onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/#inbox')}>
          <Image
            source={require('@/assets/images/pngegg.png')}
            style={styles.logo2}
          />
          <Text style={styles.buttonText}>Gmail</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
  },
  reactLogo: {
    height: 230,
    width: 230,
    top: 17,
    left: 75,
    alignItems: 'center',
    borderRadius: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: "#24A1DE"
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#017AB4',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#36C736',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D9BF0',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FA56A7',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BD081C',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button8: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3B5A9D',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  button10: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    borderRadius: 50,
    marginBottom: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logo2: {
    width: 60,
    height: 70,
    marginRight: 10,
  },
  logo3: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  parallaxScrollView: {
    backgroundColor: '#F7F7F7', // adicionei um background color branco
  },
});