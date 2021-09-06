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
      <View style={styles.View_101_1096} />
      <View style={styles.View_101_1097} />
      <TouchableOpacity
        style={styles.TouchableOpacity_101_1098}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1031"))
        }
      />
      <View style={styles.View_101_1099}>
        <Text style={styles.Text_101_1099}>Packs History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/969e/8dc5/db05beb41a9e597b30c9790ba35dbf20"
        }}
        style={styles.ImageBackground_101_1100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/969e/8dc5/db05beb41a9e597b30c9790ba35dbf20"
        }}
        style={styles.ImageBackground_101_1101}
      />
      <View style={styles.View_101_1102}>
        <Text style={styles.Text_101_1102}>
          Entertainment Only Pack History
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1103}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1104}
      />
      <View style={styles.View_101_1105}>
        <Text style={styles.Text_101_1105}>Transaction History</Text>
      </View>
      <View style={styles.View_101_1106}>
        <Text style={styles.Text_101_1106}>Bill Payment History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/969e/8dc5/db05beb41a9e597b30c9790ba35dbf20"
        }}
        style={styles.ImageBackground_101_1107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/969e/8dc5/db05beb41a9e597b30c9790ba35dbf20"
        }}
        style={styles.ImageBackground_101_1108}
      />
      <View style={styles.View_101_1109}>
        <Text style={styles.Text_101_1109}>Usage History</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/969e/8dc5/db05beb41a9e597b30c9790ba35dbf20"
        }}
        style={styles.ImageBackground_101_1110}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/5406/fa6eca804e3eb0cd71bf07162e63cbf1"
        }}
        style={styles.ImageBackground_101_1114}
      />
      <View style={styles.View_101_1120}>
        <Text style={styles.Text_101_1120}>Top Up History</Text>
      </View>
      <View style={styles.View_101_1121} />
      <View style={styles.View_101_1122}>
        <View style={styles.View_101_1123}>
          <Text style={styles.Text_101_1123}>History</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_101_1124}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("101_679"))
          }
        >
          <View style={styles.View_101_1125} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74df/fb67/997f91068bfe60ddbe0e3d65f980d27b"
            }}
            style={styles.ImageBackground_101_1126}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_101_1127}>
        <View style={styles.View_101_1128}>
          <View style={styles.View_101_1129}>
            <Text style={styles.Text_101_1129}>12:30 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
          }}
          style={styles.ImageBackground_101_1130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
          }}
          style={styles.ImageBackground_101_1135}
        />
        <View style={styles.View_101_1139}>
          <View style={styles.View_101_1140} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_101_1141}
          />
          <View style={styles.View_101_1142} />
        </View>
      </View>
      <View style={styles.View_101_1143}>
        <View style={styles.View_101_1144} />
        <View style={styles.View_101_1145}>
          <View style={styles.View_101_1146}>
            <Text style={styles.Text_101_1146}>Home</Text>
          </View>
          <View style={styles.View_101_1147}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I101_1147_101_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/852a/fe5c/f52abb49581cf90057f2f193ec153a71"
              }}
              style={styles.ImageBackground_I101_1147_101_10}
            />
          </View>
        </View>
        <View style={styles.View_101_1148}>
          <View style={styles.View_101_1149}>
            <Text style={styles.Text_101_1149}>Packages</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d845/3595/73aa1d50a9ada52c746ee0fe55b90321"
            }}
            style={styles.ImageBackground_101_1150}
          />
        </View>
        <View style={styles.View_101_1151}>
          <View style={styles.View_101_1152}>
            <Text style={styles.Text_101_1152}>Account</Text>
          </View>
          <View style={styles.View_101_1153}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I101_1153_101_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b9/865c/a8cdb46b520eca3746845fac03d34f8c"
              }}
              style={styles.ImageBackground_I101_1153_101_18}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_101_1096: {
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
  View_101_1097: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("15.573770491803279%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TouchableOpacity_101_1098: {
    width: wp("83.57487922705315%"),
    minWidth: wp("83.57487922705315%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("22.814207650273225%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_101_1099: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("32.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_101_1099: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1100: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("37.295081967213115%")
  },
  ImageBackground_101_1101: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("44.53551912568306%")
  },
  View_101_1102: {
    width: wp("59.17874396135265%"),
    minWidth: wp("59.17874396135265%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("46.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_101_1102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1103: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%")
  },
  ImageBackground_101_1104: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%")
  },
  View_101_1105: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("17.89617486338798%"),
    justifyContent: "flex-start"
  },
  Text_101_1105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1106: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("24.863387978142075%"),
    justifyContent: "flex-start"
  },
  Text_101_1106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1107: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("22.814207650273225%")
  },
  ImageBackground_101_1108: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("30.05464480874317%")
  },
  View_101_1109: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("53.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_101_1109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1110: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("51.775956284153004%")
  },
  ImageBackground_101_1111: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%")
  },
  ImageBackground_101_1112: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%")
  },
  ImageBackground_101_1113: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%")
  },
  ImageBackground_101_1114: {
    width: wp("1.7898550356067897%"),
    height: hp("1.639344262295082%"),
    top: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%")
  },
  View_101_1120: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("39.07103825136612%"),
    justifyContent: "flex-start"
  },
  Text_101_1120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1121: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_101_1122: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("8.19672131147541%")
  },
  View_101_1123: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1123: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_101_1124: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1125: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_101_1126: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594204%")
  },
  View_101_1127: {
    width: wp("90.5801450572728%"),
    minWidth: wp("90.5801450572728%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("1.639344262295082%")
  },
  View_101_1128: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1129: {
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
  Text_101_1129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1130: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%")
  },
  ImageBackground_101_1135: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497584%")
  },
  View_101_1139: {
    width: wp("5.555992310749735%"),
    minWidth: wp("5.555992310749735%"),
    height: hp("1.4604989296751596%"),
    minHeight: hp("1.4604989296751596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.02415458937197%"),
    top: hp("0.2732240437158471%")
  },
  View_101_1140: {
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
  ImageBackground_101_1141: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252738620923921%")
  },
  View_101_1142: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4567316764794782%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_101_1143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.75409836065573%")
  },
  View_101_1144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_101_1145: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("1.0928961748633839%")
  },
  View_101_1146: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_101_1146: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1147: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_1147_101_9: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_1147_101_10: {
    flexGrow: 1,
    width: wp("5.041541684652872%"),
    height: hp("2.5788507826341305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38166138285024154%"),
    top: hp("0.359673838797832%")
  },
  View_101_1148: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("1.0928961748633839%")
  },
  View_101_1149: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_101_1149: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1150: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%")
  },
  View_101_1151: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("1.0928961748633839%")
  },
  View_101_1152: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_101_1152: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1153: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971087%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_1153_101_17: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_1153_101_18: {
    flexGrow: 1,
    width: wp("4.1062801932367154%"),
    height: hp("2.5026894657989667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8454106280193088%"),
    top: hp("0.39209251195356387%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
