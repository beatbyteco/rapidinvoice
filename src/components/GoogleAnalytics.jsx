'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-4ZBYFEW08H";

export default function GoogleAnalytics () {
const pathname = usePathname();

  useEffect(() => {
    window.gtag("config", GA_TRACKING_ID, {
    page_path: pathname,
  });
  }, [pathname]);
  
    return null;
}
