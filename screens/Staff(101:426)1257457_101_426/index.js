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
      <View style={styles.View_101_427} />
      <View style={styles.View_101_428}>
        <View style={styles.View_101_429}>
          <View style={styles.View_101_430}>
            <Text style={styles.Text_101_430}>12:30 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9b/d6bc/b21e0a8bf4d01c37384318b9c8a011b0"
          }}
          style={styles.ImageBackground_101_431}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebd/7b9e/7ff15bbdf5320a843a2c798abbeaff22"
          }}
          style={styles.ImageBackground_101_436}
        />
        <View style={styles.View_101_440}>
          <View style={styles.View_101_441} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_101_442}
          />
          <View style={styles.View_101_443} />
        </View>
      </View>
      <View style={styles.View_101_444}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ad/ce98/4bbd1224c4db2ef5c083f3d3abaa3aaa"
          }}
          style={styles.ImageBackground_101_445}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c89/10d7/54908e9837fa89492f3c96bbac1b07af"
          }}
          style={styles.ImageBackground_101_453}
        />
      </View>
      <View style={styles.View_101_457}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d1/70e9/83a95f70b7cab3f2d6ef562c17767f49"
          }}
          style={styles.ImageBackground_101_458}
        />
      </View>
      <View style={styles.View_101_460}>
        <View style={styles.View_101_461} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b272/2313/b81fa62bae20123b26072797f4d599c9"
          }}
          style={styles.ImageBackground_101_462}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d4/9c52/3e494704032ad7cde700e1422e23d077"
        }}
        style={styles.ImageBackground_101_587}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5b/1530/51d385ae059775a0cae7ab4de372e8f2"
        }}
        style={styles.ImageBackground_101_588}
      />
      <View style={styles.View_101_593} />
      <View style={styles.View_101_594}>
        <Text style={styles.Text_101_594}>Purchased Services</Text>
      </View>
      <View style={styles.View_101_595}>
        <Text style={styles.Text_101_595}>Game</Text>
      </View>
      <View style={styles.View_101_596} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d898/5fd4/ee8510cb01b69730fba665c4f76f04cd"
        }}
        style={styles.ImageBackground_101_597}
      />
      <View style={styles.View_101_598} />
      <View style={styles.View_101_599}>
        <Text style={styles.Text_101_599}>Balance : 5,000,000 Ks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1af6/065f/5fb057a88f830e8d59f304b4b9d760fa"
        }}
        style={styles.ImageBackground_101_600}
      />
      <View style={styles.View_101_601}>
        <View style={styles.View_101_602}>
          <View style={styles.View_101_603} />
          <View style={styles.View_101_604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f220/36d2/89009d3834d3d6bff3fb187561e11cb6"
              }}
              style={styles.ImageBackground_101_605}
            />
          </View>
        </View>
        <View style={styles.View_101_613}>
          <Text style={styles.Text_101_613}>Bill Pay</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_101_614}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1234"))
        }
      >
        <View style={styles.View_101_615}>
          <Text style={styles.Text_101_615}>History</Text>
        </View>
        <View style={styles.View_101_616}>
          <View style={styles.View_101_617} />
          <View style={styles.View_101_618}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ea4/ef0a/c96c52bc099c1a072d4fbc09df6ccb01"
              }}
              style={styles.ImageBackground_101_619}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_101_626}>
        <Text style={styles.Text_101_626}>Scan</Text>
      </View>
      <View style={styles.View_101_627}>
        <View style={styles.View_101_628}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0be/9be8/ac76efebb1777d4e22ff0b8f5c91339e"
            }}
            style={styles.ImageBackground_101_629}
          />
          <View style={styles.View_101_630}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f253/bb3a/059062f88b980f9841bdbc4fab9ca70c"
              }}
              style={styles.ImageBackground_101_631}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ab2/57b5/7bc76be3c24bb439ba901e75107b5d29"
              }}
              style={styles.ImageBackground_101_636}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_101_637}>
        <View style={styles.View_101_638} />
        <View style={styles.View_101_639}>
          <View style={styles.View_101_640}>
            <Text style={styles.Text_101_640}>Home</Text>
          </View>
          <View style={styles.View_101_641}>
            <View source={{ uri: "null" }} style={styles.View_I101_641_101_9} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb55/2fc1/f3af598915cf0a69c72638e55d3fb8ee"
              }}
              style={styles.ImageBackground_I101_641_101_10}
            />
          </View>
        </View>
        <View style={styles.View_101_642}>
          <View style={styles.View_101_643}>
            <Text style={styles.Text_101_643}>Packages</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d845/3595/73aa1d50a9ada52c746ee0fe55b90321"
            }}
            style={styles.ImageBackground_101_644}
          />
        </View>
        <View style={styles.View_101_645}>
          <View style={styles.View_101_646}>
            <Text style={styles.Text_101_646}>Account</Text>
          </View>
          <View style={styles.View_101_647}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I101_647_101_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc2/fec6/9520456cf2960d1a0e12b780c82d2198"
              }}
              style={styles.ImageBackground_I101_647_101_18}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_101_648}>
        <View style={styles.View_101_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4865/cd2d/008c02bb5683c2814b6da62aad4c3677"
          }}
          style={styles.ImageBackground_101_650}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d11/218e/6f86d694a9145f97cc4a87f0caa7dd27"
          }}
          style={styles.ImageBackground_101_651}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d11/218e/6f86d694a9145f97cc4a87f0caa7dd27"
          }}
          style={styles.ImageBackground_101_652}
        />
        <View style={styles.View_101_653}>
          <Text style={styles.Text_101_653}>Internet</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a966/da06/3949c3a144ae7c8171078e697a925b3b"
          }}
          style={styles.ImageBackground_101_654}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d39c/9f59/3bedc1370f2afa7c028a65989316a6e1"
          }}
          style={styles.ImageBackground_101_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942d/acda/b810f54053fbd522f2fecf5cbdde3a73"
          }}
          style={styles.ImageBackground_101_656}
        />
        <View style={styles.View_101_657}>
          <View style={styles.View_101_658} />
          <View style={styles.View_101_659}>
            <Text style={styles.Text_101_659}>Buy</Text>
          </View>
        </View>
        <View style={styles.View_101_660}>
          <View style={styles.View_101_661} />
          <View style={styles.View_101_662}>
            <Text style={styles.Text_101_662}>Buy</Text>
          </View>
        </View>
        <View style={styles.View_101_663}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6481/1904/bbc26699cc8c4c974bcb6da5543f548f"
            }}
            style={styles.ImageBackground_101_664}
          />
          <View style={styles.View_101_665}>
            <Text style={styles.Text_101_665}>B</Text>
          </View>
        </View>
        <View style={styles.View_101_666}>
          <View style={styles.View_101_667}>
            <Text style={styles.Text_101_667}>Active Packs :</Text>
          </View>
          <View style={styles.View_101_668}>
            <Text style={styles.Text_101_668}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9d/c631/8aeb31ed20d39a31e914435b0560fcd5"
            }}
            style={styles.ImageBackground_101_669}
          />
        </View>
        <View style={styles.View_101_670}>
          <View style={styles.View_101_671}>
            <Text style={styles.Text_101_671}>Recommendations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c9d/c631/8aeb31ed20d39a31e914435b0560fcd5"
            }}
            style={styles.ImageBackground_101_672}
          />
        </View>
        <View style={styles.View_101_673}>
          <View style={styles.View_101_674}>
            <Text style={styles.Text_101_674}>Maximum Speed</Text>
          </View>
          <View style={styles.View_101_675}>
            <Text style={styles.Text_101_675}>10Mbps</Text>
          </View>
          <View style={styles.View_101_676}>
            <View style={styles.View_101_677} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292a/12fc/ed5ff0e8613e8031115409fdad12ca35"
              }}
              style={styles.ImageBackground_101_678}
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
  View_101_427: {
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
  View_101_428: {
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
  View_101_429: {
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
  View_101_430: {
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
  Text_101_430: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_431: {
    width: wp("3.8643790903874637%"),
    height: hp("1.3684943725502556%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%")
  },
  ImageBackground_101_436: {
    width: wp("3.3816425120772946%"),
    height: hp("1.3689463255835361%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497584%")
  },
  View_101_440: {
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
  View_101_441: {
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
  ImageBackground_101_442: {
    width: wp("0.3032700163154786%"),
    height: hp("0.5154697947163399%"),
    top: hp("0.4725388490437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252709135341192%")
  },
  View_101_443: {
    width: wp("4.1104841923368145%"),
    height: hp("0.9450290372462872%"),
    top: hp("0.25761505293715836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.456702190896749%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_101_444: {
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
  ImageBackground_101_445: {
    width: wp("21.986300703408062%"),
    height: hp("2.5925305371727445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_453: {
    width: wp("7.694070235542629%"),
    height: hp("2.0824461035389716%"),
    top: hp("0.0040690104166660745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.70732256755737%")
  },
  View_101_457: {
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
  ImageBackground_101_458: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_460: {
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
  View_101_461: {
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
  ImageBackground_101_462: {
    width: wp("5.797277441347279%"),
    height: hp("3.158698837613799%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_587: {
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
  ImageBackground_101_588: {
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
  View_101_593: {
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
  View_101_594: {
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
  Text_101_594: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_595: {
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
  Text_101_595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_596: {
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
  ImageBackground_101_597: {
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
  View_101_598: {
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
  View_101_599: {
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
  Text_101_599: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_600: {
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
  View_101_601: {
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
  View_101_602: {
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
  View_101_603: {
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
  View_101_604: {
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
  ImageBackground_101_605: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_613: {
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
  Text_101_613: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_101_614: {
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
  View_101_615: {
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
  Text_101_615: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_616: {
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
  View_101_617: {
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
  View_101_618: {
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
  ImageBackground_101_619: {
    width: wp("6.211179926775504%"),
    height: hp("3.5128804503894244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_626: {
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
  Text_101_626: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_627: {
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
  View_101_628: {
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
  ImageBackground_101_629: {
    width: wp("0.5383035411005435%"),
    height: hp("0.3278688980581982%"),
    top: hp("0.1288075264685773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-23.726724080993357%")
  },
  View_101_630: {
    width: wp("7.1014487225076435%"),
    height: hp("3.571428757547681%"),
    top: hp("0.25761505293715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062126122810990836%")
  },
  ImageBackground_101_631: {
    width: wp("6.252587359884511%"),
    height: hp("3.571428757547681%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4347944029287447%")
  },
  ImageBackground_101_636: {
    width: wp("7.1014487225076435%"),
    height: hp("0.21077270716265903%"),
    top: hp("1.6744978440915297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_637: {
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
  View_101_638: {
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
  View_101_639: {
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
  View_101_640: {
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
  Text_101_640: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_641: {
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
  View_I101_641_101_9: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_641_101_10: {
    flexGrow: 1,
    width: wp("5.041541684652872%"),
    height: hp("2.5788507826341305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38166138285023976%"),
    top: hp("0.35967383879780357%")
  },
  View_101_642: {
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
  View_101_643: {
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
  Text_101_643: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_644: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%")
  },
  View_101_645: {
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
  View_101_646: {
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
  Text_101_646: {
    color: "rgba(130, 131, 132, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_647: {
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
  View_I101_647_101_17: {
    flexGrow: 1,
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I101_647_101_18: {
    flexGrow: 1,
    width: wp("4.1062801932367154%"),
    height: hp("2.5026894657989667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8454106280193088%"),
    top: hp("0.39209251195353545%")
  },
  View_101_648: {
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
  View_101_649: {
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
  ImageBackground_101_650: {
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
  ImageBackground_101_651: {
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
  ImageBackground_101_652: {
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
  View_101_653: {
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
  Text_101_653: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_654: {
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
  ImageBackground_101_655: {
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
  ImageBackground_101_656: {
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
  View_101_657: {
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
  View_101_658: {
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
  View_101_659: {
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
  Text_101_659: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_660: {
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
  View_101_661: {
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
  View_101_662: {
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
  Text_101_662: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_663: {
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
  ImageBackground_101_664: {
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
  View_101_665: {
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
  Text_101_665: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_666: {
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
  View_101_667: {
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
  Text_101_667: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_668: {
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
  Text_101_668: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_669: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%")
  },
  View_101_670: {
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
  View_101_671: {
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
  Text_101_671: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_672: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.743961352657%")
  },
  View_101_673: {
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
  View_101_674: {
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
  Text_101_674: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_675: {
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
  Text_101_675: {
    color: "rgba(38, 60, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_676: {
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
  View_101_677: {
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
  ImageBackground_101_678: {
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
