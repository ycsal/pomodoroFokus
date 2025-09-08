import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short rest.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long rest.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
          <Pressable 
            key={p.id} 
            style={timerType.id === p.id ? styles.contextButtonActive : null}
            onPress={() => setTimerType(p)}
          >
            <Text style={styles.contextButtonText}>{p.display}</Text>
          </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          { new Date(timerType.initialValue*1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
        </Text>
        <FokusButton />
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
  context: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  contextButtonText: {
    color: "#FFF",
    fontSize: 12.5,
    padding: 8
  },
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
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
