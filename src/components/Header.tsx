import React from 'react'
import Colors from '../constants/Colors'
import { StyleSheet, StatusBar, Text, View } from 'react-native'

export function Header() {
  const currentDate = new Date().toLocaleDateString()

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          John Doe
        </Text>
        <Text style={styles.subTitle}>
          {currentDate}
        </Text>
      </View>
    </React.Fragment>
  )
}

const statusBarHeight = StatusBar.currentHeight ?? 0

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + 16,
    paddingBottom: 16,
    backgroundColor: Colors.general.lightRed,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    color: Colors.general.textColor
  },
  subTitle: {
    fontSize: 12,
    color: Colors.general.textBlur
  }
})
