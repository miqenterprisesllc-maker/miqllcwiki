"use client";

import { MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const BUTTON_SIZE = 56;
const MARGIN = 16;
const DRAG_THRESHOLD = 6;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function WhatsAppHelpButton() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    const place = () => {
      setPosition((current) => {
        const maxX = Math.max(MARGIN, window.innerWidth - BUTTON_SIZE - MARGIN);
        const maxY = Math.max(MARGIN, window.innerHeight - BUTTON_SIZE - MARGIN);
        if (!current) {
          return {
            x: maxX,
            y: clamp((window.innerHeight - BUTTON_SIZE) / 2, MARGIN, maxY),
          };
        }
        return {
          x: clamp(current.x, MARGIN, maxX),
          y: clamp(current.y, MARGIN, maxY),
        };
      });
    };

    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  const openWhatsApp = useCallback(() => {
    const text = encodeURIComponent(
      "Hi MIQ Enterprises, I need help with your services. Please share the next steps.",
    );
    window.open(`${siteConfig.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!position) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      drag.moved = true;
    }
    if (!drag.moved) return;
    const maxX = Math.max(MARGIN, window.innerWidth - BUTTON_SIZE - MARGIN);
    const maxY = Math.max(MARGIN, window.innerHeight - BUTTON_SIZE - MARGIN);
    setPosition({
      x: clamp(drag.originX + dx, MARGIN, maxX),
      y: clamp(drag.originY + dy, MARGIN, maxY),
    });
  };

  const onPointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (!drag.moved) {
      openWhatsApp();
    }
    dragRef.current = null;
  };

  if (!position) return null;

  return (
    <button
      type="button"
      aria-label="Get help on WhatsApp"
      title="Help (drag to move, click to chat on WhatsApp)"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        dragRef.current = null;
      }}
      className="fixed z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-1 ring-white/20 transition-[transform,box-shadow,background-color] hover:bg-[#1fb257] hover:shadow-xl active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{
        left: position.x,
        top: position.y,
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        touchAction: "none",
        cursor: dragRef.current?.moved ? "grabbing" : "grab",
      }}
    >
      <MessageCircle aria-hidden="true" size={26} />
      <span className="sr-only">Chat with MIQ Enterprises on WhatsApp</span>
    </button>
  );
}
