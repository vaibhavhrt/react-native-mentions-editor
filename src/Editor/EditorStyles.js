import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  mainContainer: {
  },
  input: {
    flex: 1,
    minWidth: 250,
  },
  mention: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#244dc9"
  },
  leftIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10
  },
  inputWrapper: {
    flexDirection: 'row',
    maxHeight: 120,
    alignItems: 'center',
    padding: 10,
    ...Platform.select({
      android: {
        paddingTop: 0,
        paddingBottom: 0,
      }
    })
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 1
  },
  // iconWrapper: {
  //   flexDirection: 'row', 
  //   justifyContent: 'space-around', 
  //   borderTopWidth: StyleSheet.hairlineWidth,
  //   padding: 10,
  //   borderTopColor: 'gray',
  // },
  icon: {
    fontSize: 20
  }
});
