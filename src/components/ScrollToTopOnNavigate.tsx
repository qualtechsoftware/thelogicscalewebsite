"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reset window scroll on App Router navigations (e.g. catalog → course detail). */
export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
