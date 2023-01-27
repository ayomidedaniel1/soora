import React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { theme } from './theme';

export default function App () {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <View style={styles.container} theme={theme}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F6F2F5" />
      <View style={{
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image source={require('./assets/images/logo.png')} resizeMode='cover' style={{ width: 74, height: 15.82, }} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0B0B0B',
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: 4,
          width: 97.07,
          height: 32,
        }}>
          <Text style={{
            fontFamily: 'Inter_700Bold',
            fontSize: 10,
            lineHeight: 12,
            color: '#fff',
            // paddingRight: 8,
          }}>Contact Us</Text>
          <Image source={require('./assets/images/contact.png')} resizeMode='cover' style={{ width: 10, height: 8, }} />
        </View>
      </View>

      <ScrollView
        style={{
          paddingTop: 60,
          paddingBottom: 40,
        }}>
        <Text style={{
          color: '#0B0B0B',
          fontFamily: 'Inter_500Medium',
          fontSize: 12,
          lineHeight: 15,
          textAlign: 'center',
          paddingVertical: 10,
        }}>-- Coming Soon</Text>
        <Text style={{
          color: '#0B0B0B',
          fontFamily: 'Inter_700Bold',
          fontSize: 36,
          lineHeight: 44,
          textAlign: 'center',
          paddingVertical: 10,
          textTransform: 'capitalize',
        }}>Bringing Muslims together</Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}>
          <Image source={require('./assets/images/google-play.png')} resizeMode='cover' style={{ width: 134.19, height: 33.8, borderRadius: 4.85, marginHorizontal: 3, }} />
          <Image source={require('./assets/images/apple-store.png')} resizeMode='cover' style={{ width: 118.83, height: 38.8, borderRadius: 4.85, marginHorizontal: 3, }} />
        </View>

        <Image source={require('./assets/images/landing-image-2.png')} resizeMode='cover' style={{ width: 350, height: 395.89, marginTop: 10, marginBottom: 50, }} />


        <Text style={{
          color: '#0B0B0B',
          fontFamily: 'Inter_500Medium',
          fontSize: 12,
          lineHeight: 15,
          textAlign: 'center',
          paddingVertical: 10,
        }}>-- Coming Soon</Text>
        <Text style={{
          color: '#0B0B0B',
          fontFamily: 'Inter_700Bold',
          fontSize: 36,
          lineHeight: 44,
          textAlign: 'center',
          paddingVertical: 10,
          textTransform: 'capitalize',
          paddingHorizontal: 40,
        }}>Get Notified When we Launch</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0B0B0B',
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: 4,
          width: 97.07,
          height: 32,
        }}>
          <Text style={{
            fontFamily: 'Inter_700Bold',
            fontSize: 10,
            lineHeight: 12,
            color: '#fff',
            // paddingRight: 8,
          }}>Contact Us</Text>
          <Image source={require('./assets/images/contact.png')} resizeMode='cover' style={{ width: 10, height: 8, }} />
        </View>

        <Text style={{
          color: '#0B0B0B',
          fontFamily: 'Inter_400Regular',
          fontSize: 12,
          lineHeight: 15,
          textAlign: 'center',
          paddingBottom: 20,
        }}>Don’t worry, we won’t spam you :)</Text>

        <Image source={require('./assets/images/landing-image-1.png')} resizeMode='cover' style={{ width: 350, height: 395.89, marginVertical: 10, }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2F5',
    paddingHorizontal: 20,
  },
});
