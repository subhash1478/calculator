import React, {Component} from 'react';
import {Text, AppRegistry,View} from 'react-native';
 import {Container, StyleProvider} from 'native-base';


 import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
import Calculator from './src/components/calculator';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class MyProject extends Component {
render() {
return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <AppHeader/>
        <Calculator/>
        <AppFooter/>
      </Container>
      </StyleProvider >
);
}
}

AppRegistry.registerComponent('MyProject', () => MyProject);