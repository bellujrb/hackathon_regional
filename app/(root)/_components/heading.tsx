import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Syne } from "next/font/google";

interface HeadingProps {
  classNameBadge?: string;
  classNameTitle?: string;
  title: string;
  badge: string;
  id: string
}

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const Heading = ({classNameBadge,classNameTitle, title, badge, id}: HeadingProps) => {
  return (
    <div>
      {badge && (
        <div className={classNameBadge}>
          <Badge className="mb-3">
            <p className="text-xs font-bold text-black tracking-wider uppercase">
              {badge}
            </p>
          </Badge>
        </div>
      )}

      <h1
        className={cn(
          "scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight transition-colors first:mt-0",
          syne.className,
          classNameTitle
        )}
        id={id}
      >
        {title}
      </h1>
    </div>
  );
};
