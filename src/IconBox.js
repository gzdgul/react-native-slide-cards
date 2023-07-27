import React from 'react';
import { Image, TouchableOpacity } from "react-native";

const fourDotsIcon = require('./assets/fourDotsIcon.png');

const IconBox = ({ card, headerIconStyle = {}, theme, uri, headerIconPress, headerIcon }) => {
    const handlePress = () => {
        if (headerIconPress) {
            headerIconPress(card);
        }
    };

    const iconSource = uri ? { uri } : headerIcon ? headerIcon : fourDotsIcon;
    const iconTintColor = headerIconStyle.color || (uri ? undefined : theme.textColor);

    return (
        <TouchableOpacity style={[{ width: 20, height: 20, overflow: 'hidden' }, headerIconStyle]} onPress={handlePress}>
            <Image
                source={iconSource}
                style={{
                    width: '100%',
                    height: '100%',
                    tintColor: iconTintColor,
                }}
            />
        </TouchableOpacity>
    );
};

export default IconBox;
