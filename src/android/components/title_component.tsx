import React from "react";

import {
    Text,
    StyleSheet,
    StyleProp,
    TextStyle
} from "react-native"
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

interface MainTitleProps {
    text: string;
    style?: StyleProp<TextStyle>;
}

export function TitleComponent({text, style}: MainTitleProps) {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: "center",
        color: colors.heading,
        lineHeight: 32,
    }
})
