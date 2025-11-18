import { useState, useRef, useEffect, type ReactNode } from "react";

interface DropdownProps {
  button: ReactNode;
  children: ReactNode;
  align: "left" | "right";
}

function MapStyleDropdown({
  button,
  children,
  align = "right",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen(!open)} className="contents">
        {button}
      </button>

      {open && (
        <div
          className={`absolute mt-2 w-48 rounded-lg bg-white border shadow-lg p-2 z-3 ${
            align === "right" ? "right-14" : "left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default MapStyleDropdown;
