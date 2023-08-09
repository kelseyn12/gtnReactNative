//This will hold component that will act as start screen where we pick the number that should be guessed and where we start the game

import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} />
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
        backgroundColor: '#C2BBF0',
        borderRadius: 8,
        elevation: 4, //android shadow
        shadowColor: 'black', //ios shadow
        shadowOffset: { width: 0, height: 2 }, //ios shadow
        shadowRadius: 6, //ios shadow
        shadowOpacity: 0.25, //ios shadow
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#FFFDD0',
        borderBottomWidth: 2,
        color: '#FFFDD0',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})