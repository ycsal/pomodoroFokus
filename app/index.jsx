import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function Index(){
  return(
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {'\n'}produtividade, {'\n'}
          <Text style={styles.bold}>
            mergulhe no que {'\n'}importa
          </Text>
        </Text>
        <Image source={require('../assets/images/telaInicial.png')} />
        <FokusButton title="Quero iniciar!" onPress={()=> router.navigate('/pomodoro') }/> 
        {/*<FokusButton title="Quero iniciar!" onPress={()=> router.replace('/pomodoro') }/>  para ir pra tela e nao voltar
        e o .navigate é = ao .push*/}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#021123",
    gap: 40
  },
  inner: {
    gap: 30
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26
  },
  bold: {
    fontWeight: 'bold'
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: 'center'
  }
});
