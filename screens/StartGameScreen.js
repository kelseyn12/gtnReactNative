//This will hold component that will act as start screen where we pick the number that should be guessed and where we start the game

import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return (
    <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
)}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#E6E6FA',
        borderRadius: 8,
        elevation: 4, //android shadow
        shadowColor: 'black', //ios shadow
        shadowOffset: { width: 0, height: 2 }, //ios shadow
        shadowRadius: 6, //ios shadow
        shadowOpacity: 0.25, //ios shadow
    }
})