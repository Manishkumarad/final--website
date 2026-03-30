"use client";
import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    let lenis;
    let mounted = true;
    (async () => {
      try {
        const mod = await import('lenis');
        if (!mounted) return;
        lenis = new mod.Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        // lenis not installed — skip silently
      }
    })();

    return () => { mounted = false; };
  }, []);
}
