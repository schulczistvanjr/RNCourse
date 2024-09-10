import { Pressable, Text, View } from "react-native";
import { styles } from "../App.styles";

interface GoalItemProps {
  itemData: { item: { value: string } };
  onPress: () => void;
}

export const GoalItem = ({ itemData, onPress }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "black" }}
        style={({ pressed }) => pressed && { opacity: 0.2 }}
        onPress={onPress}
      >
        <Text style={styles.goalItemText}>{itemData.item.value}</Text>
      </Pressable>
    </View>
  );
};
