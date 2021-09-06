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
      <View style={styles.View_101_2848} />
      <View style={styles.View_101_2854} />
      <View style={styles.View_101_2855} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59c1/7ff4/ea270c4ff0f509de34fc54318bea1ebd"
        }}
        style={styles.ImageBackground_101_2856}
      />
      <View style={styles.View_101_2857}>
        <View style={styles.View_101_2858}>
          <Text style={styles.Text_101_2858}>12:30 PM</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
        }}
        style={styles.ImageBackground_101_2859}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
        }}
        style={styles.ImageBackground_101_2864}
      />
      <View style={styles.View_101_2868}>
        <View style={styles.View_101_2869} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
          }}
          style={styles.ImageBackground_101_2870}
        />
        <View style={styles.View_101_2871} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d027/c055/237e6e6547836d83ddf76158cea9e258"
        }}
        style={styles.ImageBackground_101_2872}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d027/c055/237e6e6547836d83ddf76158cea9e258"
        }}
        style={styles.ImageBackground_101_2873}
      />
      <View style={styles.View_101_2874}>
        <Text style={styles.Text_101_2874}>Customer Name</Text>
      </View>
      <View style={styles.View_101_2875}>
        <Text style={styles.Text_101_2875}>Meter No.</Text>
      </View>
      <View style={styles.View_101_2876}>
        <Text style={styles.Text_101_2876}>Barcode.</Text>
      </View>
      <View style={styles.View_101_2877}>
        <Text style={styles.Text_101_2877}>Su Su</Text>
      </View>
      <View style={styles.View_101_2878}>
        <Text style={styles.Text_101_2878}>M-111009</Text>
      </View>
      <View style={styles.View_101_2879}>
        <Text style={styles.Text_101_2879}>281-001066</Text>
      </View>
      <View style={styles.View_101_2880}>
        <Text style={styles.Text_101_2880}>Service Month</Text>
      </View>
      <View style={styles.View_101_2881}>
        <Text style={styles.Text_101_2881}>Township</Text>
      </View>
      <View style={styles.View_101_2882}>
        <Text style={styles.Text_101_2882}>Bill Amount</Text>
      </View>
      <View style={styles.View_101_2883}>
        <Text style={styles.Text_101_2883}>Service fees</Text>
      </View>
      <View style={styles.View_101_2884}>
        <Text style={styles.Text_101_2884}>36,400 Ks</Text>
      </View>
      <View style={styles.View_101_2885}>
        <Text style={styles.Text_101_2885}>March, 2020</Text>
      </View>
      <View style={styles.View_101_2886}>
        <Text style={styles.Text_101_2886}>Mayangone</Text>
      </View>
      <View style={styles.View_101_2887}>
        <Text style={styles.Text_101_2887}>36,200 Ks</Text>
      </View>
      <View style={styles.View_101_2888}>
        <Text style={styles.Text_101_2888}>200 Ks</Text>
      </View>
      <View style={styles.View_101_2889}>
        <Text style={styles.Text_101_2889}>Total Amount</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d027/c055/237e6e6547836d83ddf76158cea9e258"
        }}
        style={styles.ImageBackground_101_2890}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_101_2891}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_2897"))
        }
      >
        <View style={styles.View_101_2892} />
        <View style={styles.View_101_2893}>
          <Text style={styles.Text_101_2893}>Pay</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_101_2894}>
        <Text style={styles.Text_101_2894}>Bill Payment Detail</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d027/c055/237e6e6547836d83ddf76158cea9e258"
        }}
        style={styles.ImageBackground_101_2895}
      />
      <View style={styles.View_101_2896}>
        <Text style={styles.Text_101_2896}>Electricity Bill (Yangon)</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_101_2848: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_101_2854: {
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
  View_101_2855: {
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
  ImageBackground_101_2856: {
    width: wp("4.830917874396135%"),
    height: hp("2.8115251676632407%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  View_101_2857: {
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
  View_101_2858: {
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
  Text_101_2858: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2859: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%")
  },
  ImageBackground_101_2864: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.02415458937197%")
  },
  View_101_2868: {
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
  View_101_2869: {
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
  ImageBackground_101_2870: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252679649758463%")
  },
  View_101_2871: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4566727053140198%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_101_2872: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("43.5792349726776%")
  },
  ImageBackground_101_2873: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("53.825136612021865%")
  },
  View_101_2874: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("32.37704918032787%"),
    justifyContent: "flex-start"
  },
  Text_101_2874: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2875: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("28.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_101_2875: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2876: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("25.273224043715846%"),
    justifyContent: "flex-start"
  },
  Text_101_2876: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2877: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("32.37704918032787%"),
    justifyContent: "flex-start"
  },
  Text_101_2877: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2878: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22705314009661%"),
    top: hp("28.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_101_2878: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2879: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("25.273224043715846%"),
    justifyContent: "flex-start"
  },
  Text_101_2879: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2880: {
    width: wp("45.65217391304348%"),
    minWidth: wp("45.65217391304348%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("35.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_101_2880: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2881: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("39.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_101_2881: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2882: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_101_2882: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2883: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("49.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_101_2883: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2884: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.08212560386472%"),
    top: hp("55.46448087431693%"),
    justifyContent: "flex-start"
  },
  Text_101_2884: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2885: {
    width: wp("20.048309178743963%"),
    minWidth: wp("20.048309178743963%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.60386473429952%"),
    top: hp("36.0655737704918%"),
    justifyContent: "flex-start"
  },
  Text_101_2885: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2886: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("39.61748633879781%"),
    justifyContent: "flex-start"
  },
  Text_101_2886: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2887: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.072463768115945%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_101_2887: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2888: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.072463768115945%"),
    top: hp("49.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_101_2888: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2889: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("55.60109289617486%"),
    justifyContent: "center"
  },
  Text_101_2889: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2890: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("60.92896174863388%")
  },
  TouchableOpacity_101_2891: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("63.114754098360656%")
  },
  View_101_2892: {
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
  View_101_2893: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.69565217391304%"),
    top: hp("1.092896174863391%"),
    justifyContent: "center"
  },
  Text_101_2893: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_2894: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("17.349726775956285%"),
    justifyContent: "flex-start"
  },
  Text_101_2894: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_2895: {
    width: wp("91.54621068982111%"),
    minWidth: wp("91.54621068982111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347649173460145%"),
    top: hp("22.882513661202186%")
  },
  View_101_2896: {
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
  Text_101_2896: {
    color: "rgba(246, 246, 246, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
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
