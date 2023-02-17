import { StyleSheet, View } from "react-native";

export function PageContainer({ children }) {
  return <View style={styles.pageContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  pageContainer: { backgroundColor: "#3399ff", flex: 1 },
});
