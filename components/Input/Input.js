import { FileSearch } from "phosphor-react";
import React, { forwardRef, useCallback, useState } from "react";

import * as Styles from "./Input.styles";

const Input = forwardRef(({ label, placeholder, icon, ...restProps }, ref) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleOnBlur = useCallback((e) => {
    setIsInputFocused(false);

    if (restProps?.onBlur && typeof restProps.onBlur === "function")
      restProps?.onBlur(e);
  }, [restProps]);

  const handleOnChange = useCallback((e) => {
    if (restProps?.onChange && typeof restProps.onChange === "function")
      restProps?.onChange(e);
  }, [restProps]);

  const handleOnFocus = useCallback((e) => {
    setIsInputFocused(true);

    if (restProps?.onFocus && typeof restProps.onFocus === "function")
      restProps?.onFocus(e);
  }, [restProps]);

  return (
    <Styles.Input hasLabel={label}>
      {label && (
        <Styles.InputLabel
          isInputFocused={isInputFocused}
          isInputDisabled={restProps?.disabled}
        >
          {label}
        </Styles.InputLabel>
      )}
      <Styles.InputTag
        ref={ref}
        placeholder={placeholder}
        {...restProps}
        name={restProps?.name}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
      {icon && (
        icon
      )}
    </Styles.Input>
  );
});

export default Input;

Input.displayName = "Input";
