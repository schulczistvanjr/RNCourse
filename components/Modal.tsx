import { Modal, View, Image, TextInput, Button } from "react-native";
import { styles } from "../App.styles";

interface ModalProps {
  isModalVisible: boolean;
  enteredGoal: string;
  addGoalHandler: () => void;
  handleModalVisibility: () => void;
  goalInputHandler: (enteredText: string) => void;
}

export const AddGoalModal = ({
  isModalVisible,
  handleModalVisibility,
  enteredGoal,
  goalInputHandler,
  addGoalHandler,
}: ModalProps) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.jpg")}
        />
        <TextInput
          autoFocus
          placeholder="Your goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              disabled={enteredGoal === ""}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModalVisibility} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
