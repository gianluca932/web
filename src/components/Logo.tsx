// src/components/Logo.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  src: string;
  darkSrc?: string; // optional: if provided, we’ll swap in dark mode
  className?: string; // controls the HEIGHT, e.g. "h-6 sm:h-8"
  desaturateLight?: boolean; // grayscale in light mode for neutral look
};

export function Logo({
  name,
  src,
  darkSrc,
  className = "h-6 sm:h-8",
  desaturateLight = false,
}: Props) {
  // wrapper sets the visual height; images stretch to wrapper height
  const wrapper = cn("inline-flex items-center w-auto", className);

  if (darkSrc) {
    // If you *do* provide a dark asset, we’ll use that
    return (
      <span className={wrapper}>
        <Image
          src={src}
          alt={name}
          width={160}
          height={40}
          className={cn(
            "h-full w-auto object-contain dark:hidden",
            desaturateLight && "grayscale opacity-90"
          )}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 120px, 160px"
        />
        <Image
          src={darkSrc}
          alt={name}
          width={160}
          height={40}
          className="hidden dark:inline h-full w-auto object-contain"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 120px, 160px"
        />
      </span>
    );
  }

  // No darkSrc → do dark-mode via CSS filters (white in dark mode)
  return (
    <Image
      src={src}
      alt={name}
      width={160}
      height={40}
      className={cn(
        "h-full w-auto object-contain", // fill wrapper height
        desaturateLight && "grayscale opacity-90",
        "dark:grayscale-0 dark:opacity-100 dark:brightness-0 dark:invert"
      )}
      loading="lazy"
      decoding="async"
      sizes="(max-width: 640px) 120px, 160px"
    />
  );
}
