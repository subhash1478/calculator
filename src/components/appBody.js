import React, {Component} from 'react';
import {Text,View,StyleSheet,ScrollView,ActivityIndicator} from 'react-native';
import {Content, Card, CardItem, Body,Icon,Right, Form, Item,Container,Header, Input, Label, Button} from 'native-base';
import {PostData} from '../services/webservices';
import { error } from 'util';
export default class AppBody extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            data:[],
            spinner:false
        }
        this.login=this.login.bind(this)
    }
    componentDidMount(){
        this.getCurrency();
    }
    getCurrency(){
        this.setState({spinner:true})

        PostData('login',this.state).then((result) => {
            //   console.log(result)
            this.setState({spinner:false})

            this.setState({data:result})
            console.log(this.state.data)
        },(error)=>{
            console.log(error)
        });
    }
    login(){
        console.log(this.state)
    }
    render() {

        let articles = this.state.data.map(function (articleData, index) {
            console.log(articleData,index)
            return (

                <Card key={index}>
                <CardItem >
                <Text > {articleData.id}</Text>
                <Text > {articleData.price_usd}</Text>
                
                </CardItem>
                </Card>
                
                
            )
        });      
        return (
            <Content>

            <Text style={{textAlign: 'center'}}>Login  </Text>
            <Item stackedLabel>
            <Label>Username</Label>
            <Input placeholder='' name="username" value={this.state.username} onChangeText={(username) => this.setState({username})} />
            </Item>
            <Item stackedLabel>
            <Label>Password</Label>
            <Input  secureTextEntry={true}  placeholder='' name="password" value={this.state.password} onChangeText={(password) => this.setState({password})} />
            </Item>
            <Button block onPress={this.login}><Text >Login</Text></Button>
            <ActivityIndicator  size="large" color="#0000ff" animating={this.state.spinner} />
            

            {articles}
            </Content>
        );
    }
}
module.export = AppBody;