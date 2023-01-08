import Search from "./component/Search"
import Album from "./component/Album"
import { ScrollView, StyleSheet} from 'react-native';
import React from "react"
export default function App() {
  return (
      <ScrollView contentContainerStyle={styles.container} c>
        <Search/>
  
      </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    width:"100%",
  },
})
