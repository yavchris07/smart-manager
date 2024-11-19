import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../constant/colors'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 20,

  },
  header: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txt1: { color: Theme.colors.primary, fontWeight: 'bold', fontSize: 20 },
  icon: {
    backgroundColor: Theme.colors.lightGray,
    borderRadius: 50,
    padding: 5
  },
  infos: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
    borderRadius: 3,
    padding: 3,
    // borderStyle:'solid'
  },
  child: {
    color: Theme.colors.white
  },
  list: {
    flex: 1,
    padding: 16,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3, // Ajoute une ombre sous Android
    shadowColor: '#000', // Pour les ombres sous iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

const data = [
  { id: '1', title: 'Card 1', color: '#FFCDD2', icon: 'home' },
  { id: '2', title: 'Card 2', color: '#F8BBD0', icon: 'star' },
  { id: '3', title: 'Card 3', color: '#E1BEE7', icon: 'bell' },
  { id: '4', title: 'Card 4', color: '#D1C4E9', icon: 'heart' },
  { id: '5', title: 'Card 5', color: '#BBDEFB', icon: 'user' },
  { id: '6', title: 'Card 6', color: '#B3E5FC', icon: 'flag' },
  { id: '7', title: 'Card 7', color: '#B2DFDB', icon: 'check' },
];

type cardProps = {
  title: string,
  color: string,
  icon: string
}

const Card = ({ title, color, icon }: cardProps) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    {/* <Ionicons name={icon} size={30} color="#333" /> */}
    <Ionicons name="notifications-outline" size={24} color="black" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 5 }}>
        <View style={styles.header}>
          <Text style={styles.txt1}>Nom Boutique</Text>
          {/* <Image source={img} /> */}
          <TouchableOpacity onPress={() => alert('ok')} style={styles.icon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 12, color: Theme.colors.gray }}>
            Nombre d'articles en stock : 100
          </Text>
        </View>
        <View style={styles.infos}>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
          <Text style={styles.child}>RCCM</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>Mes types d'articles</Text>
        </View>

        <View style={styles.list}>
          {/* <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card title={item.title} color={item.color} icon={item.icon} />
            )}
          /> */}
        </View>

      </View>

    </ScrollView>
  )
}

export default Home