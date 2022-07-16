import React, { forwardRef, useCallback, useState } from "react";

import * as Styles from "./Input.styles";

const Input = forwardRef(({ label, ...restProps }, ref) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleOnBlur = useCallback((e) => {
    setIsInputFocused(false);

    if (restProps?.onBlur && typeof restProps.onBlur === "function")
      restProps?.onBlur(e);
  });

  const handleOnChange = useCallback((e) => {
    if (restProps?.onChange && typeof restProps.onChange === "function")
      restProps?.onChange(e);
  });

  const handleOnFocus = useCallback((e) => {
    setIsInputFocused(true);

    if (restProps?.onFocus && typeof restProps.onFocus === "function")
      restProps?.onFocus(e);
  });

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
        {...restProps}
        name={restProps?.name}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      />
    </Styles.Input>
  );
});

export default Input;

Input.displayName = "Input"