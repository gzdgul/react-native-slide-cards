import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View, Pressable, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { View as MotiView } from 'moti';
import { dark, light } from "./COLORS";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import IconBox from "./IconBox";

const Box = ({
                 id,
                 card,
                 selectedCard,
                 setSelectedCard,
                 closeness,
                 height,
                 radius,
                 gap,
                 damping,
                 mass,
                 duration,
                 headerTextTag,
                 headerTextStyle,
                 headerIconStyle,
                 mainContent,
                 mode,
                 cardColor,
                 cardBackgroundTag,
                 headerImageTag,
                 headerImageStyle,
                 headerImagePress,
                 headerIconTag,
                 headerIconVisibility,
                 headerAppearance,
                 headerIconPress,
                 cardPress,
                 headerImagePressability,
                 cardBackgroundBlur,
                 cardBackgroundUrl,
                 headerIcon,
             }) => {
    const theme = useMemo(() => (mode === 'dark' ? dark : light), [mode]);
    const headerHeight = closeness * 50;
    const mainContentHeight = height - headerHeight;
    const bgUri = cardBackgroundUrl ? cardBackgroundUrl : card[cardBackgroundTag];
    const handlePress = () => {
        if (cardPress) {
            cardPress(card);
        }
        if (selectedCard === id) {
            setSelectedCard(null);
        } else {
            setSelectedCard(id);
        }
    };

    return (
        <>
            <Pressable onPress={handlePress} style={{ width: '100%' }}>
                <MotiView
                    transition={{ delay: 0, damping: damping, mass: mass }}
                    animate={{
                        top:
                            selectedCard !== null && selectedCard < id
                                ? closeness * 50 * id + height - closeness * 50 + (gap ? gap : 0)
                                : closeness * 50 * id,
                        scale: selectedCard === id ? 1 : 0.95,
                        height: height,
                        borderRadius: radius,
                    }}
                    exitTransition={{
                        type: 'timing',
                        duration: duration,
                    }}
                    style={styles.boxContainer}
                >
                    <ImageBackground source={{ uri: bgUri }} resizeMode="cover" style={[styles.image]} blurRadius={cardBackgroundBlur}>
                        {!bgUri && (
                            <LinearGradient
                                style={{ width: '100%', height: '100%', position: 'absolute' }}
                                colors={
                                    cardColor?.length > 0
                                        ? cardColor?.length > 1
                                            ? cardColor
                                            : [cardColor[0], cardColor[0]]
                                        : [theme.primary, theme.backgroundColor]
                                }
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                pointerEvents="none"
                            />
                        )}
                        <View style={[styles.headerContainer, { height: headerHeight }]}>
                            {['left', 'middle', 'right'].map((alignment) => {
                                const alignmentItems = headerAppearance?.[alignment];

                                return (
                                    <View
                                        key={alignment}
                                        style={{
                                            flexDirection: 'row',
                                            gap: 20,
                                            justifyContent:
                                                alignment === 'middle'
                                                    ? 'center'
                                                    : alignment === 'left'
                                                        ? 'flex-start'
                                                        : 'flex-end',
                                            alignItems: 'center',
                                            flexShrink: 1,
                                            flexGrow: 1,
                                        }}
                                    >
                                        {renderHeaderItems(alignmentItems, {
                                            card,
                                            headerImageTag,
                                            headerImagePress,
                                            headerImageStyle,
                                            headerImagePressability,
                                            headerTextTag,
                                            headerTextStyle,
                                            theme,
                                            headerIconVisibility,
                                            headerIconTag,
                                            headerIconStyle,
                                            headerIconPress,
                                            headerIcon,
                                        })}
                                    </View>
                                );
                            })}
                        </View>

                        <View style={[styles.mainContent, { height: mainContentHeight }]}>
                            {mainContent && mainContent(card)}
                        </View>
                        <LinearGradient
                            style={{ width: '100%', height: '100%', borderRadius: radius, position: 'absolute' }}
                            colors={[theme.shadowColor, 'transparent']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            pointerEvents="none"
                        />
                    </ImageBackground>
                </MotiView>
            </Pressable>
        </>
    );
};

// Separate function for rendering header items
const renderHeaderItems = (items, { card, headerImageTag, headerImagePress, headerImageStyle, headerImagePressability, headerTextTag, headerTextStyle, theme, headerIconVisibility, headerIconTag, headerIconStyle, headerIconPress, headerIcon }) => {
    return items?.map((item, index) => {
        if (item === 'image' && headerImageTag) {
            return (
                <ImageBox
                    key={index}
                    card={card}
                    uri={card[headerImageTag]}
                    headerImageStyle={headerImageStyle}
                    headerImageTag={headerImageTag}
                    headerImagePress={headerImagePress}
                    headerImagePressability={headerImagePressability}
                />
            );
        } else if (item === 'title' && headerTextTag) {
            return <TextBox key={index} text={card[headerTextTag]} headerTextStyle={headerTextStyle} theme={theme} />;
        } else if (item === 'icon' && headerIconVisibility) {
            return (
                <IconBox
                    key={index}
                    card={card}
                    headerIconStyle={headerIconStyle}
                    uri={card[headerIconTag]}
                    theme={theme}
                    headerIconPress={headerIconPress}
                    headerIcon={headerIcon}
                />
            );
        } else {
            return null;
        }
    });
};

export default Box;

const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: 250,
        borderRadius: 50,
        position: "absolute",
        overflow: "hidden",
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 22,
    },
    headerText: {
        fontSize: 17,
        fontWeight: '500',
    },
    mainContent: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 22,
        paddingVertical: 10,
        overflow: "hidden",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    }
});
