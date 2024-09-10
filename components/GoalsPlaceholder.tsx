import { Text, View } from "react-native";
import { styles } from "../App.styles";

interface GoalsPlaceholderProps {
  title: string;
}

export const GoalsPlaceholder = ({ title }: GoalsPlaceholderProps) => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.goalPlaceholder}>{title}</Text>
    </View>
  );
};
