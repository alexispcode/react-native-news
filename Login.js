import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';
import { Button } from 'react-native-elements';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleEmailInputChange = () => {};
  handlePasswordInputChange = () => {};

  render() {
    return (
        <View>
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.handleEmailInputChange} />
        <FormLabel>Contraseña</FormLabel>
        <FormInput onChangeText={this.handlePasswordInputChange} />
        <Button title="Ingresar" />
      </View>
    );
  }
}

export default LoginScreen;
