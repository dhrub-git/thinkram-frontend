"use client";

import { useState, useEffect } from "react";

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  orientation: 'portrait' | 'landscape';
  os: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'unknown';
  browser: 'chrome' | 'firefox' | 'safari' | 'edge' | 'unknown';
}

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouch: false,
    screenSize: 'lg',
    orientation: 'landscape',
    os: 'unknown',
    browser: 'unknown',
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Screen size detection
      let screenSize: DeviceInfo['screenSize'] = 'xs';
      if (width >= BREAKPOINTS['2xl']) screenSize = '2xl';
      else if (width >= BREAKPOINTS.xl) screenSize = 'xl';
      else if (width >= BREAKPOINTS.lg) screenSize = 'lg';
      else if (width >= BREAKPOINTS.md) screenSize = 'md';
      else if (width >= BREAKPOINTS.sm) screenSize = 'sm';

      // Device type detection
      const isMobile = width < BREAKPOINTS.md;
      const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
      const isDesktop = width >= BREAKPOINTS.lg;

      // Touch detection
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Orientation detection
      const orientation = height > width ? 'portrait' : 'landscape';

      // OS detection
      let os: DeviceInfo['os'] = 'unknown';
      if (/iphone|ipad|ipod/.test(userAgent)) os = 'ios';
      else if (/android/.test(userAgent)) os = 'android';
      else if (/windows/.test(userAgent)) os = 'windows';
      else if (/macintosh|mac os x/.test(userAgent)) os = 'macos';
      else if (/linux/.test(userAgent)) os = 'linux';

      // Browser detection
      let browser: DeviceInfo['browser'] = 'unknown';
      if (/chrome/.test(userAgent) && !/edge/.test(userAgent)) browser = 'chrome';
      else if (/firefox/.test(userAgent)) browser = 'firefox';
      else if (/safari/.test(userAgent) && !/chrome/.test(userAgent)) browser = 'safari';
      else if (/edge/.test(userAgent)) browser = 'edge';

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        screenSize,
        orientation,
        os,
        browser,
      });
    };

    // Initial detection
    updateDeviceInfo();

    // Listen for resize and orientation changes
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

// Utility hooks for specific checks
export function useIsMobile() {
  const { isMobile } = useDevice();
  return isMobile;
}

export function useIsTablet() {
  const { isTablet } = useDevice();
  return isTablet;
}

export function useIsDesktop() {
  const { isDesktop } = useDevice();
  return isDesktop;
}

export function useIsTouch() {
  const { isTouch } = useDevice();
  return isTouch;
}

export function useScreenSize() {
  const { screenSize } = useDevice();
  return screenSize;
}

export function useOrientation() {
  const { orientation } = useDevice();
  return orientation;
} 