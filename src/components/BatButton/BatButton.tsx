import React, {useState} from 'react';
import styles from "./Styles";
import {Pressable, Text} from "react-native";
import BatTextInput from "../BatTextInput/BatTextInput";

export type BatButtonProps = {}

export default function BatButton({}: BatButtonProps) {
    const [password, setPassword] = useState<string>('');

    function handleGenerateButton() {
        setPassword('Ola!')
    }

    return (
        <>
            <BatTextInput password={password}/>
            <Pressable onPress={handleGenerateButton} style={styles.button}>
                <Text style={styles.text}>Generate</Text>
            </Pressable>
            <Pressable onPress={() => console.log('Copy')} style={styles.button}>
                <Text style={styles.text}>Copy</Text>
            </Pressable>
        </>
    );
}
