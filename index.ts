import { useEffect, useState } from "react";

const useWindowInactivity = (delay: number = 5) => {
  const [inactive, setInactive] = useState(false);
  const millisenconds = delay * 1000;

  const events = ["mousemove", "touchstart"];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      setInactive(true);
    }, 5000);
    events.forEach((event) =>
      window.addEventListener(event, () => {
        clearTimeout(timeout);
        setInactive(false);
        timeout = setTimeout(() => {
          setInactive(true);
        }, millisenconds);
      })
    );

    return () =>
      events.forEach((event) =>
        window.removeEventListener(event, () => {
          clearTimeout(timeout);
          setInactive(false);
          timeout = setTimeout(() => {
            setInactive(true);
          }, millisenconds);
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inactive;
};

export default useWindowInactivity;
