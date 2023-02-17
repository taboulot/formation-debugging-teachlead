import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { PageContainer } from "./src/PageContainer";
import { fetchData } from "./src/fetcher";
import { ErrorMessage } from "./src/ErrorMessage";
import { DataList } from "./src/DataList";

export default function App() {
  const [requestFailed, setRequestFailed] = useState(false);
  const [data, setData] = useState([]);

  const loadMore = () => {
    try {
      const newData = fetchData();
      console.log(newData);
      setData((prev) => [...prev, ...newData]);
      setRequestFailed(false);
    } catch (error) {
      setRequestFailed(true);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <PageContainer>
        {requestFailed ? <ErrorMessage /> : null}
        <DataList data={data} loadMoreData={loadMore} />
      </PageContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: "#1474ca",
  },
});
