import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import onboarding1 from '../styles/images/onboarding-1.png'
import onboarding2 from '../styles/images/onboarding-2.png'
import onboarding3 from '../styles/images/onboarding-3.png'
import COLORS from '../styles/color/colors';
const data=[
  {id: '1', title: "let's traveling",desc:"Travel far enough, you meet yourself.– ...",img:onboarding1},
  {id: '2', title: 'Navigation',desc:"Can we just skip to the part of my life where I travel the world?",img:onboarding2},
  {id: '3', title: 'Destination',desc:"I’ve been to almost as many places as my luggage.",img:onboarding3},
]

const HomeScreen = () => {
  const navigation = useNavigation();
  const width =Dimensions.get('window').width;
  const height =Dimensions.get('window').height;
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
  })


  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled   //like swipe to see next  
        scrollable
        snapToAlignment="center"
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <View style={{width:width}}>
          <View style={styles.container}>
            <Image source={item.img} style={{width:'100%',height:'100%'}} resizeMode="cover" />
          </View>
            <View style={styles.info}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
        )
  }
      />
      <View style={styles.dotContainer}>
      {
        data.map((item,index)=>{
          return(
            <View key={index} style={[styles.dot,{backgroundColor:index===0?'#ff9000':'grey'}]}>

            </View>
          )
        })
      }
      </View>
      <View style={styles.skip}>
        <Text style={styles.skiptxt}>Skip</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    fontWeight: '600',
    color:'grey',
    paddingVertical:10,
    textTransform:'capitalize'
  },
  info:{
    position:'absolute',
    bottom:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  desc:{
    fontSize:20,
    fontWeight: '600',
    color:'#ff5864',
  },
  dot:{
    width:20,
    height:20,  
    borderRadius:10,
    marginHorizontal:10,
  },
  dotContainer:{
    position:'absolute',
    bottom:'23%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  skip:{
    position:'absolute',
    bottom:'2%',
    backgroundColor:COLORS.blue,
    paddingHorizontal:20,
    paddingVertical:10,
    width:150,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    height:60,
    right:0
  },
  skiptxt:{
    color:'white',
    fontSize:25,
    fontWeight: '700',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:4,
  }
})