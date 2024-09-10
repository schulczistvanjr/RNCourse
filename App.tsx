import "react-native-get-random-values";
import { useState } from "react";
import { styles } from "./App.styles";
import { v4 as uuidv4 } from "uuid";
import { Button, View } from "react-native";
import { AddGoalModal } from "./components/Modal";
import { Goals } from "./components/Goals";
import { Goal } from "./App.types";

export const App = () => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleGoalInputChange = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: uuidv4(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    setIsModalVisible(false);
  };

  const handleGoalDelete = (goalId: string) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const handleModalVisibility = () => {
    setIsModalVisible((prev) => !prev);
  }

  return (
    <View style={styles.appContainer}>
      <AddGoalModal
        enteredGoal={enteredGoal}
        isModalVisible={isModalVisible}
        addGoalHandler={handleAddGoal}
        goalInputHandler={handleGoalInputChange}
        handleModalVisibility={handleModalVisibility}
      />
      <Goals goals={goals} onPress={handleGoalDelete} />
      <View style={styles.addNewGoalButton}>
        <Button
          title="Add new goal"
          color="green"
          onPress={handleModalVisibility}
        />
      </View>
    </View>
  );
};

export default App;
