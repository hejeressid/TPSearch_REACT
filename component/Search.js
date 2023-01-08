import React, {useState} from "react"
import {StyleSheet, Text, Image,View, TextInput, TouchableOpacity,Alert} from 'react-native';
import Album2 from "./Album";


const src = "../assets/1.jpg";
export default function Search() {
    const [item, setItem] = useState("")
    let [recherche,setRecherche]=useState(0);

    const onPress =()=>{
        recherche=item;
        if(recherche!=""){
        setRecherche(recherche);
        }else{
            Alert.alert("saisir  un chiffre !")
        }
     

    }
    return (
        <View style={styles.container}>
                 <Image
                style={styles.image}
                source={require("../assets/0.png")}/>
            <TextInput style={[styles.TextInput]}
                       placeholder="saisir  nombre entre 1 et 8"
                       placeholderTextColor="#c5bde2"
                       keyboardType="numeric"
                       onChangeText={(item)=>setItem(item)}
                       value={item}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Chercher</Text>
            </TouchableOpacity>
            <Album2 name={recherche}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'blue',
        padding: 20,
        backgroundColor: 'blue',
        marginBottom: 80
    },
    TextInput: {
        marginTop: 90,
        borderColor: 'blue',
        borderWidth: 3,
        width: '17%',
        padding: 10,
        borderRadius: 25
    },
});
