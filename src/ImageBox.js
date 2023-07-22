import React from 'react';
import { TouchableOpacity, Image } from "react-native";

const ImageBox = ({ card, uri, headerImageStyle = {}, headerImageTag, headerImagePress, headerImagePressability }) => {
    const handlePress = () => {
        if (headerImagePress) {
            headerImagePress(card);
        }
    };

    const imageSource = headerImageTag && { uri };
    const resizeMode = headerImageStyle.resizeMode || 'cover';

    return (
        <TouchableOpacity disabled={!headerImagePressability} style={[{ width: 42, height: 42, borderRadius: 50, overflow: 'hidden' }, headerImageStyle]} onPress={handlePress}>
            <Image
                source={imageSource}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode,
                }}
            />
        </TouchableOpacity>
    );
};

export default React.memo(ImageBox);
