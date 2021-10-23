import './App.css';
import { View, FlatList, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default class App extends React.Component {

  /*constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handler = this.handler.bind(this)
  }*/

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
      }
    ]
  }

  render() {
    
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    );
  }
}

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedImage: false
    }
  }

  changeColor() {
    this.setState({ selectedImage: !this.state.selectedImage })
  }

  render() {
    return (
      <View style={styles.listItem} >
        <ImageBackground
          source={{ uri: this.props.item.photo }}
          style={[this.state.selectedImage ? styles.imageSelected : styles.imageNotSelected]}
          onClick={this.changeColor.bind(this)} >
          <Text style={styles.paragraph}>
            {this.props.item.name}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const win = Dimensions.get('window');

const ratio = win.width / 541;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FS',
    marginTop: 60,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  imageSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    width: win.width / 1.5,
    height: 30 * ratio,
    resizeMode: 'cover',
    filter: "grayscale(100%)"
  },
  imageNotSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    width: win.width / 1.5,
    height: 30 * ratio,
    resizeMode: 'cover',
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
    justifyContent: 'center'
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 45
  }
});