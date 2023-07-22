import React from 'react';
import { StyleSheet, Text } from "react-native";

const TextBox = ({ text, theme, headerTextStyle }) => {
    const combinedStyles = {
        ...styles.headerText,
        color: theme.textColor,
        ...headerTextStyle,
    };

    return <Text style={combinedStyles}>{text}</Text>;
};

export default React.memo(TextBox);

const styles = StyleSheet.create({
    headerText: {
        fontSize: 17,
        fontWeight: '500',
        paddingHorizontal: 20,
    },
});
