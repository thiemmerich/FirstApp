import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class Main extends Component {
    
    static navigationOptions = {
        title: "FirstApp"
    };
    
    render() {
        return(
            <View>
                <Text>
                    Eu sou o Batman!
                </Text>
            </View>
        );
    }
}