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
      <View style={styles.View_101_1037} />
      <View style={styles.View_101_1038} />
      <View style={styles.View_101_1039} />
      <View style={styles.View_101_1040} />
      <View style={styles.View_101_1041} />
      <View style={styles.View_101_1043}>
        <Text style={styles.Text_101_1043}>YESC Bill</Text>
      </View>
      <View style={styles.View_101_1044}>
        <Text style={styles.Text_101_1044}>YESC Bill</Text>
      </View>
      <View style={styles.View_101_1045}>
        <Text style={styles.Text_101_1045}>YESC Bill</Text>
      </View>
      <View style={styles.View_101_1046}>
        <Text style={styles.Text_101_1046}>Myanmar Net Bill</Text>
      </View>
      <View style={styles.View_101_1048}>
        <Text style={styles.Text_101_1048}>Meter No : M-111009</Text>
      </View>
      <View style={styles.View_101_1049}>
        <Text style={styles.Text_101_1049}>Meter No : M-111009</Text>
      </View>
      <View style={styles.View_101_1050}>
        <Text style={styles.Text_101_1050}>Meter No : M-111009</Text>
      </View>
      <View style={styles.View_101_1051}>
        <Text style={styles.Text_101_1051}>CPE No : CG133722</Text>
      </View>
      <View style={styles.View_101_1053}>
        <Text style={styles.Text_101_1053}>- 36,400 Kyats</Text>
      </View>
      <View style={styles.View_101_1054}>
        <Text style={styles.Text_101_1054}>- 38,900 Kyats</Text>
      </View>
      <View style={styles.View_101_1055}>
        <Text style={styles.Text_101_1055}>- 35,100 Kyats</Text>
      </View>
      <View style={styles.View_101_1056}>
        <Text style={styles.Text_101_1056}>- 20,000 Kyats</Text>
      </View>
      <View style={styles.View_101_1058}>
        <Text style={styles.Text_101_1058}>Customer Name : Su Su</Text>
      </View>
      <View style={styles.View_101_1059}>
        <Text style={styles.Text_101_1059}>Customer Name : Su Su</Text>
      </View>
      <View style={styles.View_101_1060}>
        <Text style={styles.Text_101_1060}>Customer Name : Su Su</Text>
      </View>
      <View style={styles.View_101_1061}>
        <Text style={styles.Text_101_1061}>Customer Name : Su Su</Text>
      </View>
      <View style={styles.View_101_1063}>
        <Text style={styles.Text_101_1063}>Service Month : March, 2020</Text>
      </View>
      <View style={styles.View_101_1064}>
        <Text style={styles.Text_101_1064}>Service Month : February, 2020</Text>
      </View>
      <View style={styles.View_101_1065}>
        <Text style={styles.Text_101_1065}>Service Month : January, 2020</Text>
      </View>
      <View style={styles.View_101_1066}>
        <Text style={styles.Text_101_1066}>Service Month : February, 2020</Text>
      </View>
      <View style={styles.View_101_1068}>
        <Text style={styles.Text_101_1068}>Date : 05.04.2020</Text>
      </View>
      <View style={styles.View_101_1069}>
        <Text style={styles.Text_101_1069}>Date : 10.03.2020</Text>
      </View>
      <View style={styles.View_101_1070}>
        <Text style={styles.Text_101_1070}>Date : 11.02.2020</Text>
      </View>
      <View style={styles.View_101_1071}>
        <Text style={styles.Text_101_1071}>Date : 07.03.2020</Text>
      </View>
      <View style={styles.View_101_1073} />
      <View style={styles.View_101_1074}>
        <View style={styles.View_101_1075}>
          <Text style={styles.Text_101_1075}>Bill Payment History</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_101_1076}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("101_1095"))
          }
        >
          <View style={styles.View_101_1077} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74df/fb67/997f91068bfe60ddbe0e3d65f980d27b"
            }}
            style={styles.ImageBackground_101_1078}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_101_1079}>
        <View style={styles.View_101_1080}>
          <View style={styles.View_101_1081}>
            <Text style={styles.Text_101_1081}>12:30 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
          }}
          style={styles.ImageBackground_101_1082}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
          }}
          style={styles.ImageBackground_101_1087}
        />
        <View style={styles.View_101_1091}>
          <View style={styles.View_101_1092} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_101_1093}
          />
          <View style={styles.View_101_1094} />
        </View>
      </View>
      <View style={styles.View_111_356}>
        <View style={styles.View_111_357} />
        <View style={styles.View_111_358}>
          <Text style={styles.Text_111_358}>
            Canal Plus Monthly Subscription
          </Text>
        </View>
        <View style={styles.View_111_359}>
          <Text style={styles.Text_111_359}>Device ID : ABC12345</Text>
        </View>
        <View style={styles.View_111_360}>
          <Text style={styles.Text_111_360}>- 12,000 Kyats</Text>
        </View>
        <View style={styles.View_111_361}>
          <Text style={styles.Text_111_361}>Customer Name : Su Su</Text>
        </View>
        <View style={styles.View_111_362}>
          <Text style={styles.Text_111_362}>
            Service Month : February, 2020
          </Text>
        </View>
        <View style={styles.View_111_363}>
          <Text style={styles.Text_111_363}>Date : 07.02.2020</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.54098360655739%") },
  View_101_1037: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_101_1038: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_1039: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_1040: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("85.38251366120218%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_1041: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("62.295081967213115%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_101_1043: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("18.30601092896175%"),
    justifyContent: "flex-start"
  },
  Text_101_1043: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1044: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("41.39344262295082%"),
    justifyContent: "flex-start"
  },
  Text_101_1044: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1045: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("87.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_101_1045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1046: {
    width: wp("29.951690821256037%"),
    minWidth: wp("29.951690821256037%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("64.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_101_1046: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1048: {
    width: wp("36.473429951690825%"),
    minWidth: wp("36.473429951690825%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_101_1048: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1049: {
    width: wp("36.473429951690825%"),
    minWidth: wp("36.473429951690825%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("45.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_101_1049: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1050: {
    width: wp("36.473429951690825%"),
    minWidth: wp("36.473429951690825%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("91.2568306010929%"),
    justifyContent: "flex-start"
  },
  Text_101_1050: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1051: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("68.16939890710383%"),
    justifyContent: "flex-start"
  },
  Text_101_1051: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1053: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("18.30601092896175%"),
    justifyContent: "flex-start"
  },
  Text_101_1053: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1054: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("41.39344262295082%"),
    justifyContent: "flex-start"
  },
  Text_101_1054: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1055: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("87.56830601092896%"),
    justifyContent: "flex-start"
  },
  Text_101_1055: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1056: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("64.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_101_1056: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1058: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("25.683060109289617%"),
    justifyContent: "flex-start"
  },
  Text_101_1058: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1059: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("48.77049180327869%"),
    justifyContent: "flex-start"
  },
  Text_101_1059: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1060: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("94.94535519125684%"),
    justifyContent: "flex-start"
  },
  Text_101_1060: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1061: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("71.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_101_1061: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1063: {
    width: wp("48.792270531400966%"),
    minWidth: wp("48.792270531400966%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("29.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_101_1063: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1064: {
    width: wp("52.89855072463768%"),
    minWidth: wp("52.89855072463768%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("52.459016393442624%"),
    justifyContent: "flex-start"
  },
  Text_101_1064: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1065: {
    width: wp("51.690821256038646%"),
    minWidth: wp("51.690821256038646%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("98.63387978142076%"),
    justifyContent: "flex-start"
  },
  Text_101_1065: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1066: {
    width: wp("52.89855072463768%"),
    minWidth: wp("52.89855072463768%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("75.5464480874317%"),
    justifyContent: "flex-start"
  },
  Text_101_1066: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1068: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("33.060109289617486%"),
    justifyContent: "flex-start"
  },
  Text_101_1068: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1069: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("56.14754098360656%"),
    justifyContent: "flex-start"
  },
  Text_101_1069: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1070: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("102.32240437158471%"),
    justifyContent: "flex-start"
  },
  Text_101_1070: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1071: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("79.23497267759562%"),
    justifyContent: "flex-start"
  },
  Text_101_1071: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1073: {
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
  View_101_1074: {
    width: wp("53.62318840579711%"),
    minWidth: wp("53.62318840579711%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("8.19672131147541%")
  },
  View_101_1075: {
    width: wp("43.96135265700483%"),
    minWidth: wp("43.96135265700483%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1075: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_101_1076: {
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
  View_101_1077: {
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
  ImageBackground_101_1078: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594204%")
  },
  View_101_1079: {
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
  View_101_1080: {
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
  View_101_1081: {
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
  Text_101_1081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1082: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%")
  },
  ImageBackground_101_1087: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497584%")
  },
  View_101_1091: {
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
  View_101_1092: {
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
  ImageBackground_101_1093: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252738620923921%")
  },
  View_101_1094: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4567316764794782%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_111_356: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("108.46994535519126%")
  },
  View_111_357: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_111_358: {
    width: wp("56.28019323671497%"),
    minWidth: wp("56.28019323671497%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_111_358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_359: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("5.874316939890704%"),
    justifyContent: "flex-start"
  },
  Text_111_359: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_360: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.2512077294686%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_111_360: {
    color: "rgba(193, 0, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_361: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("9.56284153005464%"),
    justifyContent: "flex-start"
  },
  Text_111_361: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_362: {
    width: wp("52.89855072463768%"),
    minWidth: wp("52.89855072463768%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("13.251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_111_362: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_363: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("16.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_111_363: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
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
