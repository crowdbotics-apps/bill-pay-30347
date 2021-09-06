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
      <View style={styles.View_101_1561} />
      <View style={styles.View_101_1562}>
        <View style={styles.View_101_1563}>
          <View style={styles.View_101_1564}>
            <Text style={styles.Text_101_1564}>12:30 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
          }}
          style={styles.ImageBackground_101_1565}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
          }}
          style={styles.ImageBackground_101_1570}
        />
        <View style={styles.View_101_1574}>
          <View style={styles.View_101_1575} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_101_1576}
          />
          <View style={styles.View_101_1577} />
        </View>
      </View>
      <View style={styles.View_101_1578}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ad/ce98/4bbd1224c4db2ef5c083f3d3abaa3aaa"
          }}
          style={styles.ImageBackground_101_1579}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c89/10d7/54908e9837fa89492f3c96bbac1b07af"
          }}
          style={styles.ImageBackground_101_1587}
        />
      </View>
      <View style={styles.View_101_1591}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d1/70e9/83a95f70b7cab3f2d6ef562c17767f49"
          }}
          style={styles.ImageBackground_101_1592}
        />
      </View>
      <View style={styles.View_101_1594}>
        <View style={styles.View_101_1595} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0448/a657/9adf2331b7a3e9ae49071612b15bf0d2"
          }}
          style={styles.ImageBackground_101_1596}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d4/9c52/3e494704032ad7cde700e1422e23d077"
        }}
        style={styles.ImageBackground_101_1721}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5b/1530/51d385ae059775a0cae7ab4de372e8f2"
        }}
        style={styles.ImageBackground_101_1722}
      />
      <View style={styles.View_101_1727} />
      <View style={styles.View_101_1728}>
        <Text style={styles.Text_101_1728}>Purchased Services</Text>
      </View>
      <View style={styles.View_101_1729}>
        <Text style={styles.Text_101_1729}>Game</Text>
      </View>
      <View style={styles.View_101_1730} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d898/5fd4/ee8510cb01b69730fba665c4f76f04cd"
        }}
        style={styles.ImageBackground_101_1731}
      />
      <View style={styles.View_101_1732} />
      <View style={styles.View_101_1733}>
        <Text style={styles.Text_101_1733}>Balance : 5,000,000 Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1af6/065f/5fb057a88f830e8d59f304b4b9d760fa"
        }}
        style={styles.ImageBackground_101_1734}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_101_1735}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_3214"))
        }
      >
        <View style={styles.View_101_1736}>
          <View style={styles.View_101_1737} />
          <View style={styles.View_101_1738}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f220/36d2/89009d3834d3d6bff3fb187561e11cb6"
              }}
              style={styles.ImageBackground_101_1739}
            />
          </View>
        </View>
        <View style={styles.View_101_1747}>
          <Text style={styles.Text_101_1747}>Bill Pay</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_101_1748}>
        <View style={styles.View_101_1749}>
          <Text style={styles.Text_101_1749}>History</Text>
        </View>
        <View style={styles.View_101_1750}>
          <View style={styles.View_101_1751} />
          <View style={styles.View_101_1752}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ea4/ef0a/c96c52bc099c1a072d4fbc09df6ccb01"
              }}
              style={styles.ImageBackground_101_1753}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_101_1760}>
        <Text style={styles.Text_101_1760}>Scan</Text>
      </View>
      <View style={styles.View_101_1761}>
        <View style={styles.View_101_1762}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0be/9be8/ac76efebb1777d4e22ff0b8f5c91339e"
            }}
            style={styles.ImageBackground_101_1763}
          />
          <View style={styles.View_101_1764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f253/bb3a/059062f88b980f9841bdbc4fab9ca70c"
              }}
              style={styles.ImageBackground_101_1765}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ab2/57b5/7bc76be3c24bb439ba901e75107b5d29"
              }}
              style={styles.ImageBackground_101_1770}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_101_1771}>
        <View style={styles.View_101_1772} />
        <View style={styles.View_101_1773}>
          <View style={styles.View_101_1774}>
            <Text style={styles.Text_101_1774}>Home</Text>
          </View>
          <View style={styles.View_101_1775}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I101_1775_101_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb55/2fc1/f3af598915cf0a69c72638e55d3fb8ee"
              }}
              style={styles.ImageBackground_I101_1775_101_10}
            />
          </View>
        </View>
        <View style={styles.View_101_1776}>
          <View style={styles.View_101_1777}>
            <Text style={styles.Text_101_1777}>Packages</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d845/3595/73aa1d50a9ada52c746ee0fe55b90321"
            }}
            style={styles.ImageBackground_101_1778}
          />
        </View>
        <View style={styles.View_101_1779}>
          <View style={styles.View_101_1780}>
            <Text style={styles.Text_101_1780}>Account</Text>
          </View>
          <View style={styles.View_101_1781}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I101_1781_101_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc2/fec6/9520456cf2960d1a0e12b780c82d2198"
              }}
              style={styles.ImageBackground_I101_1781_101_18}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_101_1782}>
        <View style={styles.View_101_1783} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4865/cd2d/008c02bb5683c2814b6da62aad4c3677"
          }}
          style={styles.ImageBackground_101_1784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d11/218e/6f86d694a9145f97cc4a87f0caa7dd27"
          }}
          style={styles.ImageBackground_101_1785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d11/218e/6f86d694a9145f97cc4a87f0caa7dd27"
          }}
          style={styles.ImageBackground_101_1786}
        />
        <View style={styles.View_101_1787}>
          <Text style={styles.Text_101_1787}>Internet</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a966/da06/3949c3a144ae7c8171078e697a925b3b"
          }}
          style={styles.ImageBackground_101_1788}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d39c/9f59/3bedc1370f2afa7c028a65989316a6e1"
          }}
          style={styles.ImageBackground_101_1789}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942d/acda/b810f54053fbd522f2fecf5cbdde3a73"
          }}
          style={styles.ImageBackground_101_1790}
        />
        <View style={styles.View_101_1791}>
          <View style={styles.View_101_1792} />
          <View style={styles.View_101_1793}>
            <Text style={styles.Text_101_1793}>Buy</Text>
          </View>
        </View>
        <View style={styles.View_101_1794}>
          <View style={styles.View_101_1795} />
          <View style={styles.View_101_1796}>
            <Text style={styles.Text_101_1796}>Buy</Text>
          </View>
        </View>
        <View style={styles.View_101_1797}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6481/1904/bbc26699cc8c4c974bcb6da5543f548f"
            }}
            style={styles.ImageBackground_101_1798}
          />
          <View style={styles.View_101_1799}>
            <Text style={styles.Text_101_1799}>B</Text>
          </View>
        </View>
        <View style={styles.View_101_1800}>
          <View style={styles.View_101_1801}>
            <Text style={styles.Text_101_1801}>Active Packs :</Text>
          </View>
          <View style={styles.View_101_1802}>
            <Text style={styles.Text_101_1802}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9d/c631/8aeb31ed20d39a31e914435b0560fcd5"
            }}
            style={styles.ImageBackground_101_1803}
          />
        </View>
        <View style={styles.View_101_1804}>
          <View style={styles.View_101_1805}>
            <Text style={styles.Text_101_1805}>Recommendations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9d/c631/8aeb31ed20d39a31e914435b0560fcd5"
            }}
            style={styles.ImageBackground_101_1806}
          />
        </View>
        <View style={styles.View_101_1807}>
          <View style={styles.View_101_1808}>
            <Text style={styles.Text_101_1808}>Maximum Speed</Text>
          </View>
          <View style={styles.View_101_1809}>
            <Text style={styles.Text_101_1809}>10Mbps</Text>
          </View>
          <View style={styles.View_101_1810}>
            <View style={styles.View_101_1811} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292a/12fc/ed5ff0e8613e8031115409fdad12ca35"
              }}
              style={styles.ImageBackground_101_1812}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 246, 246, 1)" },
  View_2: { height: hp("125.95628415300546%") },
  View_101_1561: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 60, 145, 1)"
  },
  View_101_1562: {
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
  View_101_1563: {
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
  View_101_1564: {
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
  Text_101_1564: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1565: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%")
  },
  ImageBackground_101_1570: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497584%")
  },
  View_101_1574: {
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
  View_101_1575: {
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
  ImageBackground_101_1576: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252709135341192%")
  },
  View_101_1577: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.456702190896749%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_101_1578: {
    width: wp("31.401378981733092%"),
    minWidth: wp("31.401378981733092%"),
    height: hp("2.5925305371727445%"),
    minHeight: hp("2.5925305371727445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_101_1579: {
    width: wp("21.986300703408062%"),
    height: hp("2.5925305371727445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_1587: {
    width: wp("7.694070235542629%"),
    height: hp("2.0824461035389716%"),
    top: hp("0.004002305327868605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.70732256755737%")
  },
  View_101_1591: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_101_1592: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_1594: {
    width: wp("5.797277441347279%"),
    minWidth: wp("5.797277441347279%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("7.240437158469945%")
  },
  View_101_1595: {
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
  ImageBackground_101_1596: {
    width: wp("5.797277441347279%"),
    height: hp("3.158698837613799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_1721: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_101_1722: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("133.19672131147541%")
  },
  View_101_1727: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("140.43715846994536%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_101_1728: {
    width: wp("36.473429951690825%"),
    minWidth: wp("36.473429951690825%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("142.21311475409837%"),
    justifyContent: "flex-start"
  },
  Text_101_1728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1729: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("154.91803278688525%"),
    justifyContent: "flex-start"
  },
  Text_101_1729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1730: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("147.1311475409836%"),
    backgroundColor: "rgba(87, 162, 232, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_101_1731: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("148.0874316939891%"),
    resizeMode: "cover"
  },
  View_101_1732: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("13.524590163934427%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_101_1733: {
    width: wp("49.275362318840585%"),
    minWidth: wp("49.275362318840585%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("15.710382513661203%"),
    justifyContent: "center"
  },
  Text_101_1733: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1734: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("21.03825136612022%")
  },
  TouchableOpacity_101_1735: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("23.224043715846996%")
  },
  View_101_1736: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584556%"),
    top: hp("0%")
  },
  View_101_1737: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1738: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_101_1739: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_1747: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "center"
  },
  Text_101_1747: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1748: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.28019323671497%"),
    top: hp("23.497267759562842%")
  },
  View_101_1749: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "center"
  },
  Text_101_1749: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1750: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%"),
    top: hp("0%")
  },
  View_101_1751: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1752: {
    width: wp("6.211179926775504%"),
    minWidth: wp("6.211179926775504%"),
    height: hp("3.5128804503894244%"),
    minHeight: hp("3.5128804503894244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4140660382699224%"),
    top: hp("0.35126899760928865%")
  },
  ImageBackground_101_1753: {
    width: wp("6.211179926775504%"),
    height: hp("3.5128804503894244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_1760: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("28.415300546448087%"),
    justifyContent: "center"
  },
  Text_101_1760: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1761: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("23.224043715846996%")
  },
  View_101_1762: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_101_1763: {
    width: wp("0.5383035411005435%"),
    height: hp("0.3278688980581982%"),
    top: hp("0.12874082137977894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-23.726724080993357%")
  },
  View_101_1764: {
    width: wp("7.1014487225076435%"),
    height: hp("3.571428757547681%"),
    top: hp("0.25761505293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062126122810990836%")
  },
  ImageBackground_101_1765: {
    width: wp("6.252587359884511%"),
    height: hp("3.571428757547681%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4347944029287447%")
  },
  ImageBackground_101_1770: {
    width: wp("7.1014487225076435%"),
    height: hp("0.21077270716265903%"),
    top: hp("1.6744311390027278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_1771: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118.30601092896175%")
  },
  View_101_1772: {
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
  View_101_1773: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("1.092896174863398%")
  },
  View_101_1774: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "center"
  },
  Text_101_1774: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1775: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584556%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_1775_101_9: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_1775_101_10: {
    flexGrow: 1,
    width: wp("5.041541684652872%"),
    height: hp("2.5788507826341305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38166138285023976%"),
    top: hp("0.35967383879780357%")
  },
  View_101_1776: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("1.092896174863398%")
  },
  View_101_1777: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "center"
  },
  Text_101_1777: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1778: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%")
  },
  View_101_1779: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("1.092896174863398%")
  },
  View_101_1780: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "center"
  },
  Text_101_1780: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1781: {
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
  View_I101_1781_101_17: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_1781_101_18: {
    flexGrow: 1,
    width: wp("4.1062801932367154%"),
    height: hp("2.5026894657989667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8454106280193088%"),
    top: hp("0.39209251195353545%")
  },
  View_101_1782: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("34.42622950819672%")
  },
  View_101_1783: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("57.786885245901644%"),
    minHeight: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 214, 214, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_101_1784: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.15300546448088%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_101_1785: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("12.704918032786892%")
  },
  ImageBackground_101_1786: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("20.3551912568306%")
  },
  View_101_1787: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_101_1787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1788: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("28.005464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_101_1789: {
    width: wp("30.917874396135264%"),
    minWidth: wp("30.917874396135264%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.647342995169076%"),
    top: hp("28.005464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_101_1790: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.42995169082126%"),
    top: hp("28.005464480874316%")
  },
  View_101_1791: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("51.22950819672132%")
  },
  View_101_1792: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_101_1793: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_101_1793: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1794: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072464%"),
    top: hp("51.22950819672132%")
  },
  View_101_1795: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 60, 145, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_101_1796: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.0048309178743935%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_101_1796: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1797: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.64251207729468%"),
    top: hp("51.22950819672132%")
  },
  ImageBackground_101_1798: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1799: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.840953587333928%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_101_1799: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1800: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("14.89071038251366%")
  },
  View_101_1801: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_101_1801: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1802: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.570048309178745%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "center"
  },
  Text_101_1802: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1803: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%")
  },
  View_101_1804: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("22.540983606557383%")
  },
  View_101_1805: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737636%"),
    justifyContent: "flex-start"
  },
  Text_101_1805: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_1806: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%")
  },
  View_101_1807: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("7.240437158469952%")
  },
  View_101_1808: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_101_1808: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1809: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28985507246377%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "center"
  },
  Text_101_1809: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1810: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("0%")
  },
  View_101_1811: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_101_1812: {
    width: wp("5.134575608847798%"),
    height: hp("2.529274049352427%"),
    top: hp("0.37474918886611874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33127052196557827%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
