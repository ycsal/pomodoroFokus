import { Pressable, StyleSheet, Text } from "react-native";
export const FokusButton = ({ onPress, title }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>   
    )
} 

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#BB72FF",
        padding: 8,
        borderRadius: 32
    },
    buttonText: {
        color: "#021123",
        fontSize: 18,
        textAlign: "center"
    }  
}); 