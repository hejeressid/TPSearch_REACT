import React from "react"
import {StyleSheet, Image, FlatList} from 'react-native';
import View from 'react-native-web/dist/vendor/react-native/Animated/components/AnimatedView';

const DATA = [
    require("../assets/0.png"),
    require("../assets/1.png"),
    require("../assets/2.png"),
    require("../assets/3.png"),
    require("../assets/4.png"),
    require("../assets/5.png"),
    require("../assets/6.png"),
    require("../assets/7.png"),
    require("../assets/8.png"),
   
]

export default function Album(props) {
    return (

        <View Style={styles.container}>
            <Image style={styles.image}
                   source={DATA[props.name]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 50,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: 'black',

    },
});
