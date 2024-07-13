import React from 'react';
import styles from "./Styles";
import {TextInput} from "react-native";

interface BatTextInputProps {
    password: string
}

export default function BatTextInput(props: BatTextInputProps) {
    return (
        <TextInput
            placeholder='BAT PASS'
            style={styles.inputer}
            value={props.password}
        />
    );
}
