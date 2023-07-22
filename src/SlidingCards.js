import React from 'react';
import Box from "./Box";
import { View as MotiView } from "moti/build/components/view";

const SlidingCards = ({
                          cards,
                          closeness = 1.5,
                          cardHeight = 230,
                          radius,
                          damping = 15,
                          mass = 1,
                          duration = 300,
                          gap,
                          headerImagePressability = true,
                          cardPress,
                          headerAppearance = { left: ['image', 'title'], middle: [], right: ['icon'] },
                          cardBackgroundTag,
                          cardBackgroundBlur,
                          headerTextTag,
                          headerImageTag,
                          headerIconTag,
                          headerIconPress,
                          headerIconVisibility = true,
                          headerImagePress,
                          headerImageStyle,
                          mode,
                          cardColor,
                          headerTextStyle,
                          headerIconStyle,
                          mainContent,
                          cardBackgroundUrl,
                          headerIcon,
                      }) => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    const numCards = cards.length;

    return (
        <MotiView
            transition={{ delay: 0, damping: damping, mass: mass }}
            animate={{
                height: selectedCard !== null
                    ? selectedCard === numCards - 1
                        ? closeness * 50 * numCards + (cardHeight - closeness * 50)
                        : closeness * 50 * numCards + (cardHeight - closeness * 50) * 2 + (gap ? gap : 0)
                    : closeness * 50 * numCards + cardHeight - closeness * 50,
            }}
            exitTransition={{
                type: 'timing',
                duration: duration,
            }}
            style={{ width: '100%' }}
        >
            {cards.map((x, index) => (
                <Box
                    key={x.id}
                    id={index}
                    card={x}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                    height={cardHeight}
                    closeness={closeness}
                    radius={radius}
                    gap={gap}
                    damping={damping}
                    mass={mass}
                    duration={duration}
                    headerTextTag={headerTextTag}
                    mode={mode}
                    cardColor={cardColor}
                    headerTextStyle={headerTextStyle}
                    headerIconStyle={headerIconStyle}
                    mainContent={mainContent}
                    headerImageTag={headerImageTag}
                    headerImageStyle={headerImageStyle}
                    headerImagePress={headerImagePress}
                    headerIconTag={headerIconTag}
                    headerIconVisibility={headerIconVisibility}
                    headerAppearance={headerAppearance}
                    headerIconPress={headerIconPress}
                    cardPress={cardPress}
                    cardBackgroundTag={cardBackgroundTag}
                    cardBackgroundBlur={cardBackgroundBlur}
                    headerImagePressability={headerImagePressability}
                    cardBackgroundUrl={cardBackgroundUrl}
                    headerIcon={headerIcon}
                />
            ))}
        </MotiView>
    );
};

export default React.memo(SlidingCards);
