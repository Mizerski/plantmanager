import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TextInputProps,
} from "react-native";

import colors from "../../../styles/colors";
import { t } from "i18next";

interface MainInputProps extends TextInputProps {
    text: string;
}

export function DefaultInput({ text, ...rest }: MainInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handlerInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handlerInputFocus() {
        setIsFilled(true);
    }
    function handleInputChanges(value: string) {
        setIsFilled(!!value);
        setName(value);
    }
    function translate(ph: string) {
        return ph
        // return t("Digite seu nome")
    }

    return (
        <TextInput
            style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
            ]}
            placeholder={translate(text)}
            onBlur={handlerInputBlur}
            onFocus={handlerInputFocus}
            onChangeText={handleInputChanges}
            {...rest} />

    );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center",
    },
});

