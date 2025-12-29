import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `Primetech | ${title}`;
  }, [title]);
  
}


export default usePageTitle
