import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { Item } from "./Item";

export function DataList({ loadMoreData, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data :</Text>
      <ScrollView>
        {data.map((item, index) => (
          <Item text={item.value} key={item.id} itemNumber={index} />
        ))}
        <Button color={"black"} title="Load more data" onPress={loadMoreData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom: 5,
  },
  container: {
    paddingVertical: 30,
  },
});
