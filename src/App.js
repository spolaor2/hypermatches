import './App.css';
import { View, FlatList, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default class App extends React.Component {

  state = {
    data: [
      {
        "name": "Ancient",
        "photo": '/images/ancient.png'
      },
      {
        "name": "Cache",
        "photo": '/images/cache.png'
      },
      {
        "name": "Dust 2",
        "photo": '/images/dust2.png'
      },
      {
        "name": "Inferno",
        "photo": '/images/inferno.png'
      },
      {
        "name": "Mirage",
        "photo": '/images/mirage.png'
      },
      {
        "name": "Nuke",
        "photo": '/images/nuke.png'
      },
      {
        "name": "Overpass",
        "photo": '/images/overpass.png'
      },
      {
        "name": "Train",
        "photo": '/images/train.png'
      },
      {
        "name": "Vertigo",
        "photo": '/images/vertigo.png'
      },

    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <ImageBackground source={{ uri: item.photo }} style={styles.image}>
        <Text style={styles.paragraph}>
          {item.name}
        </Text>
      </ImageBackground>
      
    </View>
  );
}

const win = Dimensions.get('window');

const ratio = win.width/541;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FS',
    marginTop: 60,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  image: {
    alignItems: 'center',
    justifyContent:'center',
    width: win.width/1.5,
    height: 30 * ratio,
    resizeMode: "cover"
  },
  listItem: {
    margin: 10,
    padding: 0,
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center'
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 45
  }
});