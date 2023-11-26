import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getTextColor } from '../../helpers'

type Props = {}

const Welcome = (props: Props) => {
    return (
        <View>
            <Text style={getTextColor()}>Welcome</Text>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})
