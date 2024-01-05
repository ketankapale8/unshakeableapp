import { Image, StyleSheet, View, Text , Pressable , TextInput, Button , TouchableOpacity, ScrollView} from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontFamily, Color, Padding, FontSize, Border  } from "../styles/GlobalStyles";

export default function PaymentInfo({navigation}) {
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
                <Text style={styles.title}>Payment Information</Text>
            </View>

            <View style={styles.singleInputs}>
            <TextInput placeholderTextColor="#000" placeholder="Cardholder Name" style={styles.longInputs}></TextInput>
            <TextInput placeholderTextColor="#000" placeholder="Card Number" style={styles.longInputs}></TextInput>
            </View>

            <View style={styles.multipleInputs}>
                <TextInput placeholderTextColor="#000" placeholder="Exp.Date" style={[styles.shortInputs]}></TextInput>
                <TextInput placeholderTextColor="#000" placeholder="CVV" style={[styles.shortInputs, styles.shortInputs1]}></TextInput>
                <TextInput placeholderTextColor="#000" placeholder="Zip Code" style={styles.shortInputs}></TextInput>

            </View>

            <View style={styles.multipleInputsBox}>
                <View style={styles.boxContainer}>
                    <TextInput placeholderTextColor="#000" >$27.99/Year</TextInput>
                    <TextInput placeholderTextColor="#000">(67% Better Value)</TextInput>
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholderTextColor="#000">$7.99/Month</TextInput>
                    <TextInput placeholderTextColor="#000">($95.88 Annually)</TextInput>

                </View>
                

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

    shadowProp: {  
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        
        elevation: 3,
      },  
    boxContainer:{
        borderRadius: 15,
        elevation: 14,
        width: 140,
        backgroundColor: Color.colorGray,
        borderStyle:'solid',
        borderColor:'black',
        border: 4,
        lineHeight:0,
        gap: 0,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        fontSize:FontSize.size_mini
        
        
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

      multipleInputsBox:{
        borderRadius: 20,
        gap: 25,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
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
        width: 103.1,
        height: 50,
        borderColor: Color.colorDarkslategray,
        borderStyle: "solid",
        backgroundColor: Color.colorGray,
        alignItems: "center",
        borderRadius: Border.br_5xs,
      },



      shortInputs1:{
        paddingLeft: 13,
        width: 73.1,
        height: 50,
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