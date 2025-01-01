import React from "react";
import {
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image, FlatList,
  StyleSheet
} from "react-native";

import { Colors } from "@/constants/Colors";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";


export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const seperatorComponent = <View style={styles.seperator} />;
  //const headerComp = <Text>Top of list</Text>;
  const footerComp = <Text style={styles.menuItemText}>Bottom of Menu</Text>;

  return (

    <Container>

      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComponent}
        //ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<><View><Text>Sorry Nothing to see here</Text></View></>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
             
            </View>
            <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>

  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    footerComp: {
      marginHorizontal: 'auto',
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    }
  })
}