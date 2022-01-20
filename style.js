import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },

    button_top: {
        marginTop: 15,
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    landing_text: {
        marginBottom: 25,
        color: "#000",
        fontSize: 42,
        fontWeight: "normal",
        fontFamily: "American Typewriter",
        textAlign: "center",
        textShadowColor: '#d3d3d3',
        textShadowOffset: { width: 2.5, height: 5 },
        textShadowRadius: 1,
    },
    main_font_family: {
        fontWeight: "normal",
        fontFamily: "American Typewriter",
    },
    clickable_button: {
        backgroundColor: ""
    },
    round_img: {
        width: 150,
        height: 150,
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 150 / 2,
        overflow: "hidden",
        alignSelf: 'center',
    }, 
    img_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
    }
});