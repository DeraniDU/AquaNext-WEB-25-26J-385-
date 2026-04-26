"use client";

import { useEffect } from "react";

export default function ResearchRedirectPage() {
  useEffect(() => {
    window.location.replace("/#project-scope");
  }, []);

  return <p>Redirecting to Project Scope section...</p>;
}
