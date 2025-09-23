import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function Index(){
  return(
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View>
        <Text style={styles.title}>
          Otimize sua {'\n'}produtividade,
          <Text style={styles.bold}>
            mergulhe no que {'\n'}importa
          </Text>
        </Text>
        <Image source={require('../assets/images/telaInicial.png')} />
        <FokusButton title="Quero iniciar!"/> 
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>Projeto fictício sem fins comerciais.</Text>
          <Text style={styles.footerText}>Desenvolvido pela Yasmin Salgado em aula da Alura</Text>      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
    backgroundColor: "#021123",
    gap: 40
  },
  title: {
    color: '#FFF',
    textAlign: center,
    fontSize: 26
  },
  bold: {
    fontWeight: bold
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: center
  }
});
