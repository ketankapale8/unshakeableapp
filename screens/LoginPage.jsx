import * as React from "react";
import { Image, StyleSheet, View, Text , Pressable , TextInput, Button , TouchableOpacity} from "react-native";
// import LinearGradient from "react-native-linear-gradient";r
import { FontFamily, Color, Padding, FontSize, Border  } from "../styles/GlobalStyles";

const LoginPage = ({navigation}) => {
  return (

        <View style={styles.loginPage}>
         {/* <Image
            style={[styles.image1Icon, styles.image1IconPosition]}
            resizeMode="cover"
            source={require("../assets/Logo.png")}
          /> */}
          <View style={styles.unshakeableFullColorLogomarWrapper}>
            <Image
              style={styles.unshakeableFullColorLogomar}
              resizeMode="cover"
              source={require("../assets/Logo.png")}
            />
          </View>
          <View style={[styles.inputFields, styles.wrapperFlexBox]}>
            <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
              <TextInput placeholder=" Email" placeholderTextColor="#000"  style={styles.email}></TextInput>
            </View>
          </View>
          <View style={[styles.component2, styles.wrapperFlexBox]}>
            <View style={[styles.emailWrapper, styles.wrapperFlexBox]}>
              <TextInput placeholder=" Password"  placeholderTextColor="#000"  style={styles.email}></TextInput>
            </View>
          </View>

            <View>

                <Text style={[styles.forgotYourPassword, styles.signUpClr]}>
                    Forgot your password?
                </Text>

            </View>

            <View style={[styles.loginBtnContainer]}>
                    <View style={[styles.loginBtn]} >
                        <Text style={styles.loginBtnTxt} >Login</Text>
                    </View>

            </View>

            

          <View
            style={[styles.dontHaveAnAccountParent, styles.signUpWrapperLayout]}
          >
            <Text style={[styles.dontHaveAn, styles.timeClr]}>
              Don’t have an account?
            </Text>
            <View style={[styles.signUpWrapper, styles.signUpWrapperLayout]}>
            <TouchableOpacity
            
            onPress={() => navigation.navigate("CreateAccount")}
            >

              <Text style={[styles.signUp, styles.signUpClr]}>Sign up</Text>
            </TouchableOpacity>
            </View>
      
          </View>

   
        </View>
  );
};

const styles = StyleSheet.create({

    loginBtnContainer : {
    top: '76%',

    
}, 
loginBtn:{
      width : 120,
      height: 45,
      left:'36%',
      position:'absolute',
      backgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 8,
      backgroundColor: Color.colorSteelblue, 
      color: Color.colorWhite,// linear gradient will be set as the background
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,

// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
// backgroundColor: var(--System-Background-Base-Primary, #FFF);
},

loginBtnTxt :{
    color: Color.colorWhite,
    fontSize: FontSize.size_high,
    fontWeight : 'bold'
},

  image1IconPosition: {
    width: 393,
    top: 0,
    // position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  loginTypo: {
    fontFamily: FontFamily.openSansBold,
    color: 'black',
    fontWeight: "700",
  },
  signUpWrapperLayout: {
    height: 20,
    // position: "absolute",
  },
  timeClr: {
    color: Color.colorBlack,
    // position: "absolute",
  },
  signUpClr: {
    color: Color.colorSteelblue,
    textAlign: "left",
    position: "absolute",
  },
  percentBg: {
    backgroundColor: Color.colorBlack,
    // position: "absolute",
  },
  image1Icon: {
    left: 0,
    height: 852,
  },
  unshakeableFullColorLogomar: {
    width: 199,
    height: 199,
  },
  unshakeableFullColorLogomarWrapper: {
    top: 47,
    left: 87,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  email: {
    fontFamily: FontFamily.openSansRegular,
    // placeholderTextColor: Color.colorBlack,
   
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  emailWrapper: {
    padding: Padding.p_11xs,
  },
  inputFields: {
    top: 336,
    width: 319,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
    marginLeft: -159,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    left: "50%",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  component2: {
    top: 402,
    marginTop: 30,
    width: 319,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
    marginLeft: -159,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    left: "50%",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  login: {
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: "left",
  },
  loginWrapper: {
    marginLeft: -54.5,
    top: 414,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  dontHaveAn: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    marginLeft: -113.5,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: "90%",
  },
  signUp: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 0,
    top: -2,
  },
  signUpWrapper: {
    left: 172,
    width: 55,
    top: 0,
  },
  dontHaveAnAccountParent: {
    top: "88%",
    width: 227,
    // display : 'flex',
    // flexDirection:'row',
    marginLeft: -153.5,
    left: "63%",
  },
  forgotYourPassword: {
    top: 520,
    left: 202,
    fontSize: 14,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
//   eyeOffIcon: {
//     top: 564,
//     left: 320,
//     width: 24,
//     height: 24,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   layer1Icon: {
//     top: 372,
//     left: 38,
//     width: 328,
//     height: 22,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   cellularIcon: {
//     width: 19,
//     height: 12,
//   },
//   wifiIcon: {
//     width: 17,
//     marginLeft: 7.33,
//     height: 12,
//   },
//   percent: {
//     marginTop: -4.5,
//     left: 2,
//     borderRadius: 3,
//     width: 10,
//     height: 9,
//     top: "50%",
//   },
//   batteryIcon: {
//     marginTop: -6.5,
//     height: 13,
//     opacity: 0.4,
//     width: 27,
//     top: "50%",
//     left: 0,
//     position: "absolute",
//   },
//   batterypercentage: {
//     height: 14,
//     width: 27,
//     marginLeft: 7.33,
//   },
//   statuspro: {
//     marginTop: -6.84,
//     right: 33,
//     top: "50%",
//     position: "absolute",
//   },
//   dynamicIsland: {
//     marginLeft: -62.5,
//     top: 11,
//     borderRadius: Border.br_lg,
//     width: 125,
//     height: 37,
//     left: "50%",
//   },
//   time: {
//     marginTop: -10.1,
//     left: 45,
//     fontSize: FontSize.size_mid,
//     letterSpacing: 0,
//     fontFamily: FontFamily.sFProText,
//     textAlign: "center",
//     width: 54,
//     top: "50%",
//     fontWeight: "700",
//     color: Color.colorBlack,
//   },
//   statusBarpro: {
//     marginLeft: -196.5,
//     height: 59,
//     left: "50%",
//   },
  loginPage: {
    borderRadius: 32,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default LoginPage;