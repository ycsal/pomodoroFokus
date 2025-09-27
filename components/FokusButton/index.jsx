import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline }) => {
    return (
        <Pressable 
            style={[styles.button, outline && styles.outlineButton]} 
            onPress={onPress}
        >
            {icon}
            <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
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
    outlineButton:{
        backgroundColor: 'transparent',
        borderColor: "#BB72FF",
        borderWidth: 2
    },
    buttonText: {
        color: "#021123",
        fontSize: 18,
        textAlign: "center"
    },
    outlineButtonText:{
        color: "#BB72FF"
    }
}); 