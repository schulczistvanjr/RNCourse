import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

interface Goal {
  id: string;
  value: string;
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: uuidv4(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    setIsModalVisible(false);
  }

  function deleteGoalHandler(goalId: string) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="green"
        onPress={() => setIsModalVisible((prev) => !prev)}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/goal.jpg")}
          />
          <TextInput
            placeholder="Your goals"
            style={styles.textInput}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add goal" disabled={enteredGoal === ""} onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.goalsContainer}>
        {goals.length !== 0 ? (
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem}>
                  <Pressable
                    android_ripple={{ color: "black" }}
                    style={({ pressed }) => pressed && { opacity: 0.2 }}
                    onPress={() => deleteGoalHandler(itemData.item.id)}
                  >
                    <Text style={styles.goalItemText}>
                      {itemData.item.value}
                    </Text>
                  </Pressable>
                </View>
              );
            }}
          />
        ) : (
          <Text style={styles.goalPlaceholder}>Add your first goal!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "green",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
  goalPlaceholder: {
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});
