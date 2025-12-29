'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const themeColor = resolvedTheme === 'dark' ? '#030712' : '#ffffff';
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = themeColor;
      document.head.appendChild(meta);
    }
  }, [resolvedTheme]);

  return null;
}
