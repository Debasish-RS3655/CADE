// the context provider for gun.js
// Debashish Buragohain
import React, {
    createContext,
    useEffect,
    useState,
    useRef,
} from 'react'
import PropTypes from 'prop-types';

import PolyfillCrypto from 'react-native-webview-crypto';
import * as Crypto from 'expo-crypto';
window.crypto.getRandomBytes = Crypto.getRandomBytes;
window.crypto.getRandomBytesAsync = Crypto.getRandomBytesAsync;
window.crypto.getRandomValues = Crypto.getRandomValues;
import 'gun/lib/mobile';
import Gun from 'gun';
import 'gun/sea';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStore from 'gun/lib/ras';

// create the gun context now
export const GunContext = createContext({
    gun: null,
    error: null,
    loading: false
});

// provider for the Gun context
export const GunProvider = ({ children }) => {
    const [gunState, setGun] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // gun creatd here itself
    var gun = (gun_ref => {
        if (gun_ref.current == null) {
            gun_ref.current = Gun({
                peers: [],          // currently setting up without any peers
                store: asyncStore({ AsyncStorage })
            });
        }
        return gun_ref.current;
    })(useRef(null));

    // we set the state variables here itself
    useEffect(function () {
        (async function () {
            if (gunState) {
                console.info('Found a running instance of Gun.');
                setLoading(false);
            }
            else {
                try {
                    console.info('Starting Gun...');
                    const sleep = ms => new Promise(res => setTimeout(res, ms));
                    while (gun == undefined) {
                        // wait for gun to be activated before doing anything
                        await sleep(50);
                    }
                    setGun(gun);
                    setLoading(false);
                    console.log('Gun started successfully.');
                }
                catch (err) {
                    console.error('Error starting Gun:', err);
                    setError(true);
                }
            }
        })();
    }, []);

    return (
        <>
            <PolyfillCrypto />
            <GunContext.Provider
                value={{ gun: gunState, error, loading }}>
                {children}
            </GunContext.Provider>
        </>
    )
}

// all type of children allowed
GunProvider.propTypes = {
    children: PropTypes.any
}