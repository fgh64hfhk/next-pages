import React from "react";

function withDebounce(options = {}) {
  const { message = "debounced!", delay = 300 } = options;

  return function (WrappedComponent) {
    return function Enhanced(props) {
      const timerRef = React.useRef(null);

      function debounceHandler(...args) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        console.log('debounce handler:', message);

        timerRef.current = setTimeout(() => {
          const onChange = props.onChange;
          if (typeof onChange === "function") {
            onChange(...args);
          }
        }, delay);
      }

      return <WrappedComponent {...props} onChange={debounceHandler} />;
    };
  };
}

export default withDebounce;