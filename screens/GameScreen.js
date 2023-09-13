//Will be responsible for actual game- guesses by phone and where we let phone know if guess is too high or low

import { View, Text, StyleSheet, } from 'react-native';
import Title from '../components/Title';

function GameScreen () {
    return (
    <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        {/* GUESS */}
        <View>
            <Text>Higher or lower?</Text>
            {/* +
            - */}
        </View>
        <View>
            {/* LOG ROUNDS */}
        </View>
    </View>
)}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 60
    },
  
})