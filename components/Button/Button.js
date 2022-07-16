import React, { forwardRef } from "react";

import * as Styles from "./Button.styles";

const Button = forwardRef(
  ({ onChange, onFocus, onBlur, name, children, ...restProps }, ref) => {
    return (
      <Styles.Button ref={ref}>
        <Styles.ButtonTag
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...restProps}
        >
          {children}
        </Styles.ButtonTag>
      </Styles.Button>
    );
  }
);

export default Button;

Button.displayName = "Button";
