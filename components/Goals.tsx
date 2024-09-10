import { FlatList, View } from "react-native";
import { styles } from "../App.styles";
import { GoalItem } from "./GoalItem";
import { GoalsPlaceholder } from "./GoalsPlaceholder";
import { Goal } from "../App.types";

interface GoalProps {
    goals: Goal[];
    onPress: (id: string) => void;
}

export const Goals = ({ goals, onPress }: GoalProps) => {
  return (
    <View style={styles.goalsContainer}>
      {goals.length !== 0 ? (
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                onPress={() => onPress(itemData.item.id)}
              />
            );
          }}
        />
      ) : (
        <GoalsPlaceholder title="Add your first goal!" />
      )}
    </View>
  );
};
