import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignUp, Welcome } from '../screens'

type Props = {}

const AuthStack = (props: Props) => {
    return (
        <View>
            <Text>AuthStack</Text>
            <Welcome />
            <SignUp />
        </View>
    )
}

export default AuthStack

const styles = StyleSheet.create({})