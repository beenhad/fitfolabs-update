import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePreviousRoute = () => {
  const router = useRouter();
  const [previousRoute, setPreviousRoute] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPreviousRoute(router.asPath);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return previousRoute;
};

export default usePreviousRoute;
