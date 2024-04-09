import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const html = `
    <html>
    <body>
    <h1>HI</h1>
    </body>
    </html>
    `

const MyWebView = () => {
    const webViewRef = useRef(null);
    /**
     * @function handleMessage
     * @param {String} message
     * @description this is the message from the react PWA. Need to handle it here
     */

    const handleMessage = (message = null) => {
        // provide a switch case statament here handling all the helia events
        console.log(message?.nativeEvent?.data);
    }
    /**
     * @function sendMsgToPWA
     * @description send a message from the react native app to the PWA app inside the webview
     * @description this method will also be fired when the web view loaded successfully - did 
     * mount first time - onLoad property in <WebView>
     * 
     */

    const sendMsgToPWA = () => {
        if (webViewRef?.current) {
            webViewRef?.current?.postMessage("Hi to React - from React Native");
        }
    }

    return (
        <WebView
            ref={webViewRef}
            source={{ html }}
            startInLoadingState
            javaScriptEnabled
            domStorageEnabled
            onMessage={handleMessage}
        />
    )
}

export default MyWebView;