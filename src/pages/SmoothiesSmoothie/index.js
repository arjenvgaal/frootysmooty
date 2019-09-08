import React, {useState} from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.smoothies.smoothie.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet, View} from "react-native";
import BackButton from "../../components/BackButton";
import YouTube from 'react-native-youtube';

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 60,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const secondaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 5,
    left: 70,
  },
  size: {
    width: 240,
    height: 40,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const SmoothiesSmoothie = ({ navigation }) => {
  return (
    <PageBackground source={screen}>
      <BackButton onPress={() => navigation.navigate('Smoothies')} />

    <View style={{alignSelf: "center", marginTop: 150}}>
        <YouTube
          apiKey="AIzaSyCApm0j3T1VLEGthWk1ejG01hTdm-mU7oc"
          videoId="_0Xy0RiIN5w"   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={false}             // control whether the video should loop when ended
          // onReady={e => this.setState({ isReady: true })}
          // onChangeState={e => this.setState({ status: e.state })}
          // onChangeQuality={e => this.setState({ quality: e.quality })}
          // onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'center', width: 285, height: 200 }}
        />
      </View>


      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => navigation.navigate('SmoothiesSmoothieComplete')}
      />
      <StyledButton
        style={[secondaryButtonStyles.position, secondaryButtonStyles.size]}
        onPress={() => navigation.navigate('Smoothies')}
      />
    </PageBackground>
  );
};

export default withNavigation(SmoothiesSmoothie);
