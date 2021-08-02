import { useEffect, useState } from "react";

const useBootstrap = () => {
  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    getSubdomain();
  }, []);

  const getSubdomain = () => {
    const domain = process.env.REACT_APP_PLATFORM_DOMAIN;
    if (!domain) {
      return alert("You must add the PLATFORM_DOMAIN env var");
    }
    const { hostname } = window.location;

    let parts = hostname.split("." + domain);
    if (parts.length === 1) {
      return;
    } else {
      parts[0].split(".").length === 2
        ? (window.location.hostname = domain)
        : setSubdomain(parts[0]);
    }
  };

  return { subdomain, getSubdomain };
};

export default useBootstrap;
