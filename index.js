import { StyleSheet, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default ({ color = "rgba(0, 0, 0, 0)", paddingBottom = 0, textColor = "dark" }) => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    const notchHeight = Platform.OS === 'ios' ? 30 : 0;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            width: "100%",
            height: notchHeight + paddingBottom,
            position: 'absolute',
            top: 0,
        },
    });

    return (
        <>
            <StatusBar style={textColor} />
            <View style={styles.container}></View>
        </>
    );
};