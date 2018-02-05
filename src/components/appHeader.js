import React, {Component} from 'react';
import {Text,Image} from 'react-native';
import {Header,Container, Left, Button, Icon, Title, Body, Right} from 'native-base';
export default class AppHeader extends Component {
    render() {
        return (
             <Header>
             <Body>
            <Title>
           Calculator</Title>
            </Body>
             </Header>
         );
    }
}
module.export = AppHeader;
