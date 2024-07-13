import React from 'react';
import styles from "./Styles";
import {Image, Text} from "react-native";
import batLogo from "../../assets/bat-logo.png";

export type BatLogoProps = {}

export default function BatLogo({}: BatLogoProps) {
    return (
        <>
            <Text style={styles.title}>
                BAT PASS GENERATOR
            </Text>
            <Image
                source={batLogo}
                style={{resizeMode: 'contain', height: 180}}
            />
        </>
    );
}
