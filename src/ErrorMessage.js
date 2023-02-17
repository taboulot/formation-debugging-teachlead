import { StyleSheet, View, Text } from "react-native";

export function ErrorMessage() {
  return (
    <View style={styles.errorContainer}>
      <Text>An error occured. You are going to die.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
});
