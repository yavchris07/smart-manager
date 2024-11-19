import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import TextInput from '../components/TextInput';
import { Theme } from '../constant/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootParamList } from '../../App';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    paddingTop:80
  },
  txt1: { 
    color: Theme.colors.primary, 
    marginVertical: 30, 
    fontSize: 26, 
    fontWeight: 'bold' 
  },
  txt2: {
    color: Theme.colors.gray,
    maxWidth: '70%',
    textAlign: 'center',
    padding:10
  },
  input: {
    fontSize: 15,
    backgroundColor: Theme.colors.lightBackground,
    padding: 14,
    marginVertical: 10,
    borderRadius: 5,
  },
  btn: {
    padding: 5,
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: Theme.colors.primary,

  },
  textBtn: {
    textAlign: 'center',
    color: Theme.colors.white,
    padding: 10
  },
  footer:{
    textAlign:'center',
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:13,
    // backgroundColor:'red'
  }
});

const Login = () => {

  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const nav =()=>{
    navigation.navigate('MainTabs');
  }

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <View style={{ padding: 2 }}>
        <View style={styles.container}>
          <Text style={styles.txt1}>Connexion ici</Text>
          <Text style={styles.txt2}>Connectez vous pour voir toutes les fonctionnalités de <Text style={{color:Theme.colors.primary}}>Smart Manager</Text></Text>
          {/* <TextInput icon='' placeholder='Votre identifiant' validate={} /> */}
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput placeholder='E-mail' style={styles.input} placeholderTextColor={Theme.colors.gray} />
        <TextInput placeholder='Password' secureTextEntry style={styles.input} placeholderTextColor={Theme.colors.gray} />
      </View>
      <View>
        <Text style={{ alignSelf: 'flex-end', color: Theme.colors.primary }}>Mot de passe oublie ?</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={nav}>
        <Text style={styles.textBtn}>Se Connecter</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{color:Theme.colors.grey}}>Besoin d'un compte ? Contacter</Text>
        <Text style={{color:Theme.colors.primary}}>l'administrateur</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login