import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
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
        borderRadius: 32,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#021123",
        fontSize: 18,
        textAlign: "center"
    }  
}); 