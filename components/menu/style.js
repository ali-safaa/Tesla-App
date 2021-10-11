import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    icon: {
        color: "white"
    },
    menuTextBox: {
        flexGrow: 1,
    },
    menuText: {
        color: "white",
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    subTitle: {
        color: "gray",
        marginLeft: 10,
        fontWeight: "bold"
    },
    arrowIcon: {
        color: "#4d4d4e"
    }
})

export default styles;