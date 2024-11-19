import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../constant/colors';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    txt1: {
        color: Theme.colors.primary,
        marginVertical: 2,
        fontSize: 15,
        fontWeight: '400',
    },
    txt2: {
        color: Theme.colors.gray,
        fontSize: 12,
    },
    input: {
        fontSize: 15,
        backgroundColor: Theme.colors.lightBackground,
        padding: 10,
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
        color: Theme.colors.lightBackground,
        padding: 7
    }
});


            {/* id: number,
    idMag:number,
    nomProduit:string,
    idType:number,
    quantiteStock:number,
    prix:number,
    image:string,
    desc:string,
    tag:number */}

const Create = () => {

    const [name,setName] = React.useState()
    const [type,setType] = React.useState()
    const [quant,setQuant] = React.useState()
    const [price,setPrice] = React.useState()
    const [image,setImage] = React.useState()
    const [des,setDesc] = React.useState()

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 2 }}>
                <View style={styles.container}>
                    <Text style={styles.txt1}>Ajout Produit</Text>
                    <Text style={styles.txt2}>Votre produit sera visible partout au monde</Text>
                    {/* <TextInput icon='' placeholder='Votre identifiant' validate={} /> */}
                </View>
            </View>
            <View style={{ marginVertical: 15 }}>
                <TextInput placeholder='Nom du produit' style={styles.input} placeholderTextColor={Theme.colors.gray} />
                <TextInput placeholder='Le type du produit' secureTextEntry style={styles.input} placeholderTextColor={Theme.colors.gray} />
                <TextInput placeholder='Quantite en stock' style={styles.input} placeholderTextColor={Theme.colors.gray} />
                <TextInput placeholder='Prix du produit' secureTextEntry style={styles.input} placeholderTextColor={Theme.colors.gray} />
                <TextInput placeholder='Image' style={styles.input} placeholderTextColor={Theme.colors.gray} />
                <TextInput placeholder='La description' secureTextEntry style={styles.input} placeholderTextColor={Theme.colors.gray} />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Ajouter le produit</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Create