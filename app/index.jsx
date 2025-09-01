import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')}/>
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício sem fins comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido pela Yasmin Salgado em aula da Alura</Text>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#BB72FF",
    padding: 8,
    borderRadius: 32
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    textAlign: "center"
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: "center"
  }
});
