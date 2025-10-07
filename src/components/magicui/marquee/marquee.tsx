import Image from "next/image";
import Link from "next/link";
import styles from "./marquee.module.css";
import type { ClientLogo } from "@/data/clients";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export default function Marquee({
  items,
  itemClassName,
  speed = 30,
  ariaLabel = "logos marquee",
}: {
  items: ClientLogo[];
  itemClassName?: string;
  speed?: number;
  ariaLabel?: string;
}) {
  const track = [...items, ...items];
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border bg-card/50"
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      <ul
        className={cn(
          "flex items-center gap-8 py-4 will-change-transform motion-reduce:animate-none",
          styles.track
        )}
        style={{ ["--marquee-duration" as any]: `${speed}s` }}
      >
        {track.map((item, idx) => {
          // inside your map()
          const content = (
            <div
              className={cn(
                "flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity",
                itemClassName
              )}
            >
              <span className="h-6 sm:h-8 w-auto">
                <Logo
                  name={item.name}
                  src={item.logo} /* darkSrc={item.darkLogo} */
                />
              </span>
              {/*  <span className="text-sm text-muted-foreground hidden sm:inline">{item.name}</span> */}{" "}
            </div>
          );

          return (
            <li key={`${item.name}-${idx}`} className="shrink-0">
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
