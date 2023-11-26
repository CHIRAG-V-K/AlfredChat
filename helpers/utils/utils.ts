import { useColorScheme } from "react-native"

export const getTextColor = () => {
    const colorScheme = useColorScheme()
    if (colorScheme == "dark") {
        return { color: "#FFFFFF" }; //white for dark mode
    }
    else if (colorScheme == "light") {
        return { color: "#000000" }; //black for light mode
    }
    return { color: "#FFFFFF" };
}

export const getBackgroundColor = () => {
    const colorScheme = useColorScheme()
    if (colorScheme == "dark") {
        return { backgroundColor: "#000000" }; //black for light mode
    }
    else if (colorScheme == "light") {
        return { backgroundColor: "#FFFFFF" }; //white for dark mode
    }
    return { backgroundColor: "#FFFFFF" };
}

export const checkMode = () => {
    const colorScheme = useColorScheme()
    return colorScheme
}
