import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import checkmark from '../../assets/checkmark.png';

export default class CheckBox extends Component {
  state = {
    visible: false,
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render = () => (
    <TouchableOpacity onPress={this.toggleVisibility} style={this.props.styleOptions}>
      <Image
        opacity={this.state.visible ? 100 : 0}
        style={{ width: 15, height: 15 }}
        source={checkmark}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

});