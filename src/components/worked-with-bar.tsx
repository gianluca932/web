import Marquee from "@/components/magicui/marquee/marquee";
import type { ClientLogo } from "@/data/clients";

export default function WorkedWithBar({
  label,
  clients,
}: {
  label: string;
  clients: ClientLogo[];
}) {
  return (
    <div className="w-full">
      <div className="mb-2 inline-block rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background">
        {label}
      </div>
      <Marquee items={clients} ariaLabel={label} speed={28} />
    </div>
  );
}
