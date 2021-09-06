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
      <View style={styles.View_111_341}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8af3/4ea1/b17ac1bf50b9ebaf26bd313579252edf"
          }}
          style={styles.ImageBackground_111_342}
        />
        <View style={styles.View_111_343} />
        <View style={styles.View_111_344}>
          <View style={styles.View_111_345} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a9/8428/eb51e3ccd29e8e33d2101563b755b1b8"
            }}
            style={styles.ImageBackground_111_346}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_111_347}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1560"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.54098360655739%") },
  View_111_341: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.54098360655739%"),
    minHeight: hp("122.54098360655739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_111_342: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.54098360655739%"),
    minHeight: hp("122.54098360655739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_111_343: {
    width: wp("75.37036840466486%"),
    minWidth: wp("75.37036840466486%"),
    height: hp("76.2477270240992%"),
    minHeight: hp("76.2477270240992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333286156400966%"),
    top: hp("11.311448727800547%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_111_344: {
    width: wp("67.03703507133152%"),
    minWidth: wp("67.03703507133152%"),
    height: hp("22.046903182900017%"),
    minHeight: hp("22.046903182900017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.462970825785024%"),
    top: hp("88.18759605532787%")
  },
  View_111_345: {
    width: wp("67.03703507133152%"),
    minWidth: wp("67.03703507133152%"),
    height: hp("22.046903182900017%"),
    minHeight: hp("22.046903182900017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_111_346: {
    width: wp("55.94183880349865%"),
    minWidth: wp("55.94183880349865%"),
    height: hp("17.34892631489071%"),
    minHeight: hp("17.34892631489071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.783033288043479%"),
    top: hp("2.48796640198087%")
  },
  TouchableOpacity_111_347: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("6.693989071038252%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
