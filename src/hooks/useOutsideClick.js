import { useEffect, useRef } from "react";

function useOutsideClick(callback, listenerCapture = true) {
const ref = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick, listenerCapture);
    return () => {
      document.removeEventListener("click", handleClick, listenerCapture);
    };
  }, [ callback]);

  return ref;
}
export default useOutsideClick
