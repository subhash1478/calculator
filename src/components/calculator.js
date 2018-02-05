import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class Calculator extends Component {
  constructor(props) {
    super(props);
      const currencySymbol=["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR",
      "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"]
    this.state = {
      currency1: undefined,
      currency2: undefined,
      symbol:[]
    };

  }
  currency1(value) {
    this.setState({
      currency1: value
    });
  }  currency2(value) {
    this.setState({
      currency2: value
    });
  }

  componentDidMount(){
    //this.setState({symbol:currencySymbol})

  }
  render() {

    let currencyList = this.state.symbol.map(function (symbol, index) {
      console.log(symbol,index)
      return (

        <Item label={symbol} value="{index}" />

          
          
      )
  });      



    return (
      <Container>
      
      <Content>
      <Form>
      <Picker
      mode="dropdown"
      placeholder="Select One"
      selectedValue={this.state.currency1}
      onValueChange={this.currency1.bind(this)}
      >
      {currencyList}
      </Picker>
      <Picker
      mode="dropdown"
      placeholder="Select One"
      selectedValue={this.state.currency2}
      onValueChange={this.currency2.bind(this)}
      >
{currencyList}
      </Picker>
      </Form>
      </Content>
      </Container>
    );
  }
}