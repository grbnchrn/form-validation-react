import { useState } from "react";

export function useInput(defaultValue, valFunction) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [edited, setEdited] = useState(false);

    function handleInputBlur() {
        setEdited(true);
    }

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setEdited(false);
    }

    const valueValid = valFunction(enteredValue);

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: edited && !valueValid
    }
}
