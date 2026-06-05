'use client';

import { useSyncExternalStore } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates provided
const position: [number, number] = [23.3943464, 85.3342253];

// Create a custom SVG icon to match the site's branding (#B85C38)
const customIcon = new L.DivIcon({
  html: `
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#B85C38" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="9" r="3" fill="white"/>
    </svg>
    <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Anvi Paints Location</span>
  `,
  className: '', // Removes the default leaflet div background
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

// Hydration-safe mounted check using useSyncExternalStore
function subscribe() { return () => {}; }
function getSnapshot() { return true; }
function getServerSnapshot() { return false; }

function useHydrated() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function LocationMap() {
  const mounted = useHydrated();

  if (!mounted) {
    return (
      <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-[#F7F7F5] rounded-xl border border-[#EAEAEA]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#B85C38] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="h-full min-h-[300px] w-full overflow-hidden rounded-xl border border-[#EAEAEA] shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] z-0 relative">
      <MapContainer 
        center={position} 
        zoom={16} 
        scrollWheelZoom={false}
        className="h-full w-full absolute inset-0 z-0"
        style={{ background: '#F7F7F5' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="font-semibold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
              Anvi Paints & Hardware
            </div>
            <div className="text-sm text-[#5A5A5A] mt-1">
              Near SBI Bank, Tetartoli,<br />Morabadi, Ranchi
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
