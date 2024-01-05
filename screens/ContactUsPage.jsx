import { Image, StyleSheet, View, Text , Pressable , TextInput, Button , TouchableOpacity, ScrollView} from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontFamily, Color, Padding, FontSize, Border  } from "../styles/GlobalStyles";
export default function ContactUs({navigation}) {
    return (
      <SafeAreaView>
          <ScrollView>
              <View style={styles.mainContainer}>
                  {/* <Text>CreateAccountPage</Text> */}
                      <Image
                          style={styles.unshakeableFullColorLogomar}
                          resizeMode="cover"
                          source={require("../assets/Logo.png")}
                      />
              <View>
                  <Text style={styles.title}>Contact Us</Text>
              </View>
  
              <View style={styles.multipleInputs}>
                  <TextInput placeholderTextColor="#000" placeholder="FirstName" style={styles.shortInputs}></TextInput>
                  <TextInput placeholderTextColor="#000" placeholder="LastName" style={styles.shortInputs}></TextInput>
  
  
              </View>
  
              <View style={styles.singleInputs}>
              <TextInput placeholderTextColor="#000" placeholder="Email" style={styles.longInputs}></TextInput>
              <TextInput placeholderTextColor="#000" placeholder="Subject" style={styles.longInputs}></TextInput>
              <TextInput placeholderTextColor="#000" placeholder="Message" 
                multiline={true}
                numberOfLines={5}
              style={styles.longInputsTextArea}></TextInput>
              

  
  
  
              </View>
  
              <View style={styles.singleInputs}>
                  <View style={styles.buttonInput} >
                      <Text style={{alignSelf:'center', color:Color.colorWhite, fontSize:FontSize.size_high}}>Submit</Text>
                  </View>
              </View>
  
              <View style={styles.singleInputsText}>
                  <Text style={styles.singleInputsStyling}>Need Help?</Text>
                  <TouchableOpacity
                       onPress={() => navigation.navigate("ContactUs")}
                  >
  
                  <Text style={[styles.singleInputsStyling,styles.singleInputsStylingColor]} >Contact Us</Text>
                  </TouchableOpacity>
  
              </View>
  
  
  
  
              </View>
  
          </ScrollView>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
    mainContainer :{
        // display:'flex',
        // flex : 1,
        paddingTop: 50,
        paddingBottom: 50,
        gap: 15,
        flexDirection :'column',
        justifyContent:'center',
        alignItems:'center'


    },
    unshakeableFullColorLogomarWrapper: {
        top: 47,
        left: 87,
        padding: Padding.p_3xs,
        flexDirection: "row",
        position: "absolute",
      },

      unshakeableFullColorLogomar: {
        width: 199,
        height: 199,
      },

      title :{
        color : '#000',
        fontFamily: FontFamily.openSansRegular,
        fontSize :FontSize.size_mid,
        fontWeight: '600'

      },
      multipleInputs:{
        paddingTop:20,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        
        gap: 10
      },

      singleInputs:{
        display: 'flex',
        gap: 15,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
      },

      singleInputsText:{
        display: 'flex',
        gap: 5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
      },
      singleInputsStyling:{
        fontSize: FontSize.size_mid,
        color : Color.colorBlack
      },

      singleInputsStylingColor:{
        color: Color.colorSteelblue
      },



      shortInputs:{
        paddingLeft: 13,
        width: 143.1,
        height: 50,
        color: Color.colorBlack,
        borderColor: Color.colorDarkslategray,
        borderStyle: "solid",
        backgroundColor: Color.colorGray,

        alignItems: "center",
        borderRadius: Border.br_5xs,
      },

      longInputs:{
        paddingLeft: 13,
        width: 293.1,
        height: 50,
        borderColor: Color.colorDarkslategray,
        borderStyle: "solid",
        color: Color.colorBlack,
        backgroundColor: Color.colorGray,
        alignItems: "center",
        borderRadius: Border.br_5xs,
      },

      longInputsTextArea:{
        paddingLeft: 13,
        width: 293.1,
        height: 'auto',
        borderColor: Color.colorDarkslategray,
        borderStyle: "solid",
        backgroundColor: Color.colorGray,
        alignItems: "center",
        borderRadius: Border.br_5xs,

      },

      buttonInput: {
        width: 293.1 ,
        height: 50,
        borderColor: Color.colorSteelblue,
        borderStyle: "solid",
        backgroundColor: Color.colorSteelblue,
        alignItems: "center",
        borderRadius: Border.br_5xs,
        alignContent:'center',
        justifyContent:'center'

      }
      
})