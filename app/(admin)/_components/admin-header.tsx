"use client";

import {Button} from "@/components/ui/button";
import {TransitionLink} from "@/components/ui/transition-link";
import {Home} from "lucide-react";
import {UserBox} from "@/components/user-box";
import {AdminHeaderBreadcrumb} from "@/app/(admin)/_components/admin-header-breadcrumb";

export const AdminHeader = () => {
    return (
        <header className="bg-muted/40 h-[3.75rem] border-b w-full">
            <div className="w-full h-full flex justify-between items-center p-4 sm:p-6">
                <AdminHeaderBreadcrumb/>
                <div className="flex gap-x-4 items-center justify-center">
                    <TransitionLink href="/">
                        <Button size="sm" className="ml-4 mt-2 gap-x-2">
                            <Home size={20}/>
                            <span className="hidden sm:inline text-sm">
                              Voltar para home
                            </span>
                        </Button>
                    </TransitionLink>
                    <UserBox/>
                </div>
            </div>
        </header>
    );
};
