import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_101_2112} />
      <View style={styles.View_101_2118} />
      <View style={styles.View_101_2119} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4a/bb4c/b2082e4dc0965523643f9f80b22521a2"
        }}
        style={styles.ImageBackground_101_2120}
      />
      <View style={styles.View_101_2121}>
        <View style={styles.View_101_2122}>
          <Text style={styles.Text_101_2122}>12:30 PM</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
        }}
        style={styles.ImageBackground_101_2123}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
        }}
        style={styles.ImageBackground_101_2128}
      />
      <View style={styles.View_101_2132}>
        <View style={styles.View_101_2133} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
          }}
          style={styles.ImageBackground_101_2134}
        />
        <View style={styles.View_101_2135} />
      </View>
      <View style={styles.View_101_2136}>
        <Text style={styles.Text_101_2136}>Electricity Bill (Yangon)</Text>
      </View>
      <View style={styles.View_101_2137} />
      <View style={styles.View_101_2138} />
      <View style={styles.View_101_2139}>
        <Text style={styles.Text_101_2139}>Barcode/ CNP No.</Text>
      </View>
      <View style={styles.View_101_2140}>
        <Text style={styles.Text_101_2140}>281-001066</Text>
      </View>
      <View style={styles.View_101_2141}>
        <Text style={styles.Text_101_2141}>Meter No.</Text>
      </View>
      <View style={styles.View_101_2142} />
      <View style={styles.View_101_2143}>
        <Text style={styles.Text_101_2143}>M-111009</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_101_2144}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_2148"))
        }
      >
        <View style={styles.View_101_2145} />
        <View style={styles.View_101_2146}>
          <Text style={styles.Text_101_2146}>Next</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_101_2147}>
        <Text style={styles.Text_101_2147}>Need help?</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 246, 246, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_101_2112: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_101_2118: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("6.967213114754098%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_101_2119: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  ImageBackground_101_2120: {
    width: wp("4.830917874396135%"),
    height: hp("2.8115251676632407%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  View_101_2121: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("1.639344262295082%")
  },
  View_101_2122: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_101_2122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2123: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%")
  },
  ImageBackground_101_2128: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.02415458937197%")
  },
  View_101_2132: {
    width: wp("5.555992310749735%"),
    minWidth: wp("5.555992310749735%"),
    height: hp("1.4604989296751596%"),
    minHeight: hp("1.4604989296751596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%"),
    top: hp("1.912568306010929%")
  },
  View_101_2133: {
    width: wp("5.0239254311087045%"),
    height: hp("1.4604989296751596%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_101_2134: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252738620923921%")
  },
  View_101_2135: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4567316764794782%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_101_2136: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.285024154589372%"),
    top: hp("8.060109289617486%"),
    justifyContent: "center"
  },
  Text_101_2136: {
    color: "rgba(246, 246, 246, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2137: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("35.79234972677596%"),
    minHeight: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_2138: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_101_2139: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("18.852459016393443%"),
    justifyContent: "center"
  },
  Text_101_2139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2140: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("24.863387978142075%"),
    justifyContent: "center"
  },
  Text_101_2140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2141: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("32.10382513661202%"),
    justifyContent: "center"
  },
  Text_101_2141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2142: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("36.47540983606557%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_101_2143: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("38.114754098360656%"),
    justifyContent: "center"
  },
  Text_101_2143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_101_2144: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.231884057971016%"),
    top: hp("44.80874316939891%")
  },
  View_101_2145: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_2146: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "center"
  },
  Text_101_2146: {
    color: "rgba(246, 246, 246, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2147: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.85507246376812%"),
    top: hp("54.09836065573771%"),
    justifyContent: "center"
  },
  Text_101_2147: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
