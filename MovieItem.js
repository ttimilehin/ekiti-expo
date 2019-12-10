import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const MovieItem = props => {
  return (
    <View>
      <TouchableOpacity style={styles.posterWrapper}>
        <Image
          style={styles.poster}
          source={{ uri: `http://image.tmdb.org/t/p/w185/${props.image}` }}
        />
      </TouchableOpacity>
      <Text style={styles.movieTitle}>{props.title}</Text>
      {/* <Text>{props.rating}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  posterWrapper: {
    marginRight: 20
  },
  poster: {
    width: 130,
    height: 130,
    borderRadius: 10
  },
  movieTitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 30
  }
});

export default MovieItem;
