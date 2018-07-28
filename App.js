import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    this.setState({ feeds: [{ key: "hola", key: "hola2" }] });
    /*
    fetch("http://13.59.225.126:8081/news")
      .then(response => response.json())
      .then(feeds => this.setState([{ key: 1, key: 2 }]));*/
  }

  render() {
    const feeds = [{ key: "hola" }, { key: "daniel" }];
    return (
      <View style={styles.container}>
        <FlatList
          data={feeds}
          style={styles.list}
          renderItem={item => (
            <Text style={{ color: "red" }}>Item: {item.key}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d0d0",
    paddingTop: 30
    /*alignItems: "start",
    justifyContent: "center"*/
  },
  list: {
    padding: 10
  }
});
