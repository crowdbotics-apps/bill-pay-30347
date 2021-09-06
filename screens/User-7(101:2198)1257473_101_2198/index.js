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
      <View style={styles.View_101_2199} />
      <View style={styles.View_101_2205} />
      <View style={styles.View_101_2206} />
      <View style={styles.View_101_2207}>
        <View style={styles.View_101_2208}>
          <Text style={styles.Text_101_2208}>12:30 PM</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
        }}
        style={styles.ImageBackground_101_2209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
        }}
        style={styles.ImageBackground_101_2214}
      />
      <View style={styles.View_101_2218}>
        <View style={styles.View_101_2219} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
          }}
          style={styles.ImageBackground_101_2220}
        />
        <View style={styles.View_101_2221} />
      </View>
      <View style={styles.View_101_2222}>
        <Text style={styles.Text_101_2222}>Pay</Text>
      </View>
      <View style={styles.View_101_2223} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3067/fa5e/c42bdb1e7918225d2966921409f315e8"
        }}
        style={styles.ImageBackground_101_2224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3067/fa5e/c42bdb1e7918225d2966921409f315e8"
        }}
        style={styles.ImageBackground_101_2225}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_101_2226}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("111_137"))
        }
      />
      <View style={styles.View_101_2227} />
      <View style={styles.View_101_2228}>
        <Text style={styles.Text_101_2228}>09</Text>
      </View>
      <View style={styles.View_101_2229}>
        <Text style={styles.Text_101_2229}>Send</Text>
      </View>
      <View style={styles.View_101_2230}>
        <Text style={styles.Text_101_2230}>Send SMS Receipt</Text>
      </View>
      <View style={styles.View_101_2231}>
        <Text style={styles.Text_101_2231}>Successfully Paid!</Text>
      </View>
      <View style={styles.View_101_2232}>
        <Text style={styles.Text_101_2232}>36,400 Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70ec/e09c/50ccc4e10f2a9cbdf36924687dbfaf57"
        }}
        style={styles.ImageBackground_101_2233}
      />
      <View style={styles.View_101_2234}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dfe/b844/4ab0df9065976d9bce2eeef761b388f1"
          }}
          style={styles.ImageBackground_101_2235}
        />
      </View>
      <View style={styles.View_101_2238}>
        <Text style={styles.Text_101_2238}>Bill Pay</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d05b/7c20/afe13d8a4c44420488190bda8c0b1c05"
        }}
        style={styles.ImageBackground_101_2239}
      />
      <View style={styles.View_101_2240}>
        <Text style={styles.Text_101_2240}>Service Month</Text>
      </View>
      <View style={styles.View_101_2241}>
        <Text style={styles.Text_101_2241}>March, 2020</Text>
      </View>
      <View style={styles.View_101_2242}>
        <Text style={styles.Text_101_2242}>Paid By</Text>
      </View>
      <View style={styles.View_101_2243}>
        <Text style={styles.Text_101_2243}>Tin Ko Ko Win</Text>
      </View>
      <View style={styles.View_101_2244}>
        <Text style={styles.Text_101_2244}>Date</Text>
      </View>
      <View style={styles.View_101_2245}>
        <Text style={styles.Text_101_2245}>2020-04-05</Text>
      </View>
      <View style={styles.View_101_2246}>
        <Text style={styles.Text_101_2246}>Barcode</Text>
      </View>
      <View style={styles.View_101_2247}>
        <Text style={styles.Text_101_2247}>Customer Name</Text>
      </View>
      <View style={styles.View_101_2248}>
        <Text style={styles.Text_101_2248}>Meter No.</Text>
      </View>
      <View style={styles.View_101_2249}>
        <Text style={styles.Text_101_2249}>281-001066</Text>
      </View>
      <View style={styles.View_101_2250}>
        <Text style={styles.Text_101_2250}>Su Su</Text>
      </View>
      <View style={styles.View_101_2251}>
        <Text style={styles.Text_101_2251}>M-111009</Text>
      </View>
      <View style={styles.View_101_2252}>
        <Text style={styles.Text_101_2252}>Bill Amount</Text>
      </View>
      <View style={styles.View_101_2253}>
        <Text style={styles.Text_101_2253}>Service Fees</Text>
      </View>
      <View style={styles.View_101_2254}>
        <Text style={styles.Text_101_2254}>36,200 Ks</Text>
      </View>
      <View style={styles.View_101_2255}>
        <Text style={styles.Text_101_2255}>200 Ks</Text>
      </View>
      <View style={styles.View_101_2256} />
      <TouchableOpacity
        style={styles.TouchableOpacity_101_2736}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1307"))
        }
      />
      <View style={styles.View_101_2257}>
        <Text style={styles.Text_101_2257}>Next Payment</Text>
      </View>
      <View style={styles.View_101_2258}>
        <Text style={styles.Text_101_2258}>Back to Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fd/d670/6c44435eda433df98591ac1882b933a3"
        }}
        style={styles.ImageBackground_101_2259}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_101_2199: {
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
  View_101_2205: {
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
  View_101_2206: {
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
  View_101_2207: {
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
  View_101_2208: {
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
  Text_101_2208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2209: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%")
  },
  ImageBackground_101_2214: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.02415458937197%")
  },
  View_101_2218: {
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
  View_101_2219: {
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
  ImageBackground_101_2220: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252679649758463%")
  },
  View_101_2221: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4566727053140198%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_101_2222: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.3768115942029%"),
    top: hp("56.4207650273224%"),
    justifyContent: "center"
  },
  Text_101_2222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2223: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_101_2224: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("52.732240437158474%")
  },
  ImageBackground_101_2225: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("66.12021857923497%")
  },
  TouchableOpacity_101_2226: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("58.46994535519126%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_101_2227: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.63768115942028%"),
    top: hp("58.46994535519126%"),
    backgroundColor: "rgba(38, 60, 145, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_101_2228: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("59.56284153005464%"),
    justifyContent: "center"
  },
  Text_101_2228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2229: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("59.42622950819673%"),
    justifyContent: "center"
  },
  Text_101_2229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2230: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("55.05464480874317%"),
    justifyContent: "center"
  },
  Text_101_2230: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2231: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.193236714975846%"),
    top: hp("40.02732240437158%"),
    justifyContent: "flex-start"
  },
  Text_101_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2232: {
    width: wp("32.367149758454104%"),
    minWidth: wp("32.367149758454104%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("44.39890710382514%"),
    justifyContent: "center"
  },
  Text_101_2232: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2233: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("18.71584699453552%"),
    resizeMode: "cover"
  },
  View_101_2234: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.13043478260869%"),
    top: hp("8.333333333333332%")
  },
  ImageBackground_101_2235: {
    width: wp("5.555555555555555%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_2238: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("8.19672131147541%"),
    justifyContent: "center"
  },
  Text_101_2238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2239: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("83.33333333333334%")
  },
  View_101_2240: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("71.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_101_2240: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2241: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%"),
    top: hp("71.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_101_2241: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2242: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("96.58469945355192%"),
    justifyContent: "flex-start"
  },
  Text_101_2242: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2243: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.32367149758454%"),
    top: hp("96.31147540983606%"),
    justifyContent: "flex-start"
  },
  Text_101_2243: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2244: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("68.30601092896174%"),
    justifyContent: "flex-start"
  },
  Text_101_2244: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2245: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.67149758454107%"),
    top: hp("68.30601092896174%"),
    justifyContent: "flex-start"
  },
  Text_101_2245: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2246: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("88.79781420765028%"),
    justifyContent: "flex-start"
  },
  Text_101_2246: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2247: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("85.24590163934425%"),
    justifyContent: "flex-start"
  },
  Text_101_2247: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2248: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("92.34972677595628%"),
    justifyContent: "flex-start"
  },
  Text_101_2248: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2249: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("88.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_101_2249: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2250: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%"),
    top: hp("85.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_101_2250: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2251: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.36231884057972%"),
    top: hp("92.34972677595628%"),
    justifyContent: "flex-start"
  },
  Text_101_2251: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2252: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("75.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_101_2252: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2253: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("78.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_101_2253: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2254: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.79710144927537%"),
    top: hp("75.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_101_2254: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2255: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.79710144927537%"),
    top: hp("78.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_101_2255: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2256: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.66120218579235%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  TouchableOpacity_101_2736: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.66120218579235%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  View_101_2257: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.971014492753625%"),
    top: hp("116.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_101_2257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2258: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("116.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_101_2258: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2259: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("113.66120218579235%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
