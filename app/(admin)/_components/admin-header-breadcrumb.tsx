import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/app/(admin)/_components/ui/breadcrumb";

import { usePathname } from "next/navigation";

export const AdminHeaderBreadcrumb = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {segments.map((segment, i) => {
                    const isLast = i === segments.length - 1;
                    const href = `/${segments.slice(0, i + 1).join("/")}`;

                    return (
                        <BreadcrumbItem key={i}>
                            {!isLast ? (
                                <>
                                    <BreadcrumbLink href={href}>
                                        {segment}
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                <span>{segment}</span>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

