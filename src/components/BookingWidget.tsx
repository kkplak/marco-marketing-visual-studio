import React from 'react';

export interface BookingWidgetProps {
  url?: string;
}

/**
 * Simple embed wrapper for a booking widget (e.g. Calendly). Pass the
 * booking URL via environment variable NEXT_PUBLIC_CALENDLY_URL. When no
 * URL is provided a placeholder message is displayed.
 */
export function BookingWidget({ url }: BookingWidgetProps) {
  if (!url) {
    return <p className="text-sm text-gray-600">Booking widget coming soon…</p>;
  }
  return (
    <div className="w-full overflow-hidden rounded-md" style={{ minHeight: '650px' }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="fullscreen"
      />
    </div>
  );
}