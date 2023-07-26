&nbsp;
# react-native-slide-cards

"react-native-slide-cards" is an easy-to-use React Native package that allows you to turn your data into animated sliding cards. It is suitable for simple and medium-sized projects, and simplifies the process of creating interactive cards.

This package is simply built by me using [expo] and [Moti] with function-based components.

![gif1](https://i.ibb.co/m6F7jRw/slide1.gif) ![gif2](https://i.ibb.co/mCjN7Bm/slide2.gif)

&nbsp;
## Installation

To use "react-native-slide-cards," you can install it using [npm]:

```bash
npm install react-native-slide-cards
```
&nbsp;
## Properties

| Property             | Description                                   | Type              | Default    |
|----------------------|-----------------------------------------------|-------------------|------------|
| cards                | The data array used to create the cards (required) | `array`             | -          |
| closeness            | The closeness level of the cards             | `number`            | _1.5_        |
| cardHeight           | The height of the cards                       | `number`            | _230_        |
| radius               | The border radius of the cards                | `number`            | _50_         |
| damping              | dumping rate                                  | `number`            | _15_         |
| mass                 | mass rate                                     | `number`            | _1_          |
| duration             | The animation duration                        | `number`            | _300_        |
| gap                  | The distance between cards when opened        | `number`            | -          |
| headerImagePressability | Whether the image in the header is clickable  | `boolean`           | _true_       |
| cardPress            | The function triggered when a card is pressed | `function`          | -          |
| headerAppearance     | The appearance layout of the header          | `object`            | _{ left: ['image', 'title'], middle: [], right: ['icon'] }_ |
| cardBackgroundTag   | The data array key for the background image in the card | `string`            | -          |
| cardBackgroundBlur  | The blur level of the card background (0-100) | `number`            | -          |
| headerTextTag       | The data array key for the header text       | `string`            | -          |
| headerImageTag      | The data array key for the header image      | `string`            | -          |
| headerIconTag       | The data array key for the header icon       | `string`            | -          |
| headerIconPress     | The function triggered when the header icon is pressed | `function`          | -          |
| headerImagePress    | The function triggered when the header image is pressed | `function`          | -          |
| headerIconVisibility| The visibility of the header icon             | `boolean`           | _true_       |
| headerImageStyle    | The style of the header image                 | `object`            | -          |
| headerTextStyle     | The style of the header text                  | `object`            | -          |
| headerIconStyle     | The style of the header icon                  | `object`            | -          |
| mode                | The view mode ('light' or 'dark')             | `string`            | _'light'_          |
| cardColor           | The background color(s) of the cards          | `array`             | -          |
| mainContent         | The main content of the card                  | `function`          | -          |
| cardBackgroundUrl  | The URL for the card background image         | `string`            | -          |
| headerIcon          | Custom icon view                              | -             | -          |

&nbsp;
## Example

```jsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SlidingCards } from 'react-native-slide-cards'
import React from "react";

export default function App() {
  const myData = [
    { id: 15412678, name: 'John Doe', phoneNum: '+1 (555) 123-4567', address: '1234 Dummy Street, Springfield, CA 12345', email: 'john.doe@example.com' },
    { id: 69273842, name: 'Olivia Martinez', phoneNum: '+61 2 9876 5432', address: '5432 Dummy Road, Sydney, Australia 2000', email: 'olivia.martinez@example.com' },
    { id: 37294815, name: 'Alex Johnson', phoneNum: '+49 (0)30 9876 5432', address: '9876 Dummy Lane, Berlin, Germany 10115', email: 'alex.johnson@example.com' },
    { id: 49027486, name: 'Emily Brown ', phoneNum: '+33 (0)1 2345 6789', address: '3456 Dummy Street, Paris, France 75001', email: 'emily.brown@example.com' },
    { id: 51284759, name: 'William Wilson', phoneNum: '+81 3-1234-5678', address: '1234 Dummy Blossom Lane, Tokyo, Japan 100-0001', email: 'william.wilson@example.com' }
  ]

  const mainContent = (data) => {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Text>{data.phoneNum}</Text>
        <Text>{data.email}</Text>
        <Text>{data.address}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <SlidingCards
          cards={myData}
          headerTextTag={'name'}
          mainContent={mainContent}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
});
```
&nbsp;
## Dependencies
> [moti][motiNpm]
>
> [expo-linear-gradient][exlNpm]
>
> [react-native-gesture-handler][ghNpm]
>
> [react-native-reanimated][raNpm]

&nbsp;
## Notes
Make sure the `dependencies` required for this package are compatible with your react-native and expo version.

This package is using [react-native-reanimated][raNpm]. Update your `babel.config` file as follows

```bash
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], <-- add this
  };
};

```
&nbsp;

[expo]: <https://expo.dev>
[Moti]: <https://moti.fyi>
[npm]: <https://www.npmjs.com/package/react-native-slide-cards?activeTab=readme>
[motiNpm]: <https://www.npmjs.com/package/moti>
[ghNpm]: <https://www.npmjs.com/package/react-native-gesture-handler>
[raNpm]: <https://www.npmjs.com/package/react-native-reanimated>
[exlNpm]: <https://www.npmjs.com/package/expo-linear-gradient> 
[github]: <https://github.com/gzdgul/react-native-slide-cards> 

 
