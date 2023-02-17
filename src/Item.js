import { StyleSheet, View, Text } from "react-native";

export function Item({ text, itemNumber }) {
  return (
    <View style={styles.item}>
      <Text>{`${itemNumber}. ${text}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    justifyContent: "center",
  },
});
