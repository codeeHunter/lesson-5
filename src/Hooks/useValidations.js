import { useEffect, useState } from "react";

export const useValidations = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [input, setInput] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? setEmailError(false)
            : setEmailError(true);
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLength || emailError) {
      setInput(false);
    } else {
      setInput(true);
    }
  }, [isEmpty, minLength, emailError]);

  return {
    isEmpty,
    minLength,
    emailError,
    input,
  };
};
