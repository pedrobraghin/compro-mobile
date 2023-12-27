import Colors from '../constants/Colors';

import { Fragment } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

export function Header() {
  const currentDate = new Date().toLocaleDateString()

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          John Doe
        </Text>
        <Text style={styles.subTitle}>
          {currentDate}
        </Text>
      </View>
    </Fragment>
  )
}

const statusBarHeight = StatusBar.currentHeight ?? 0;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + 16,
    paddingBottom: 16,
    backgroundColor: Colors.general.lightRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.general.textColor
  },
  subTitle: {
    fontSize: 12,
    color: Colors.general.textBlur
  }
});