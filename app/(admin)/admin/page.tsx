"use client";

import React, {useEffect, useState} from "react";
import {useUser} from "@clerk/nextjs";
import {UserBox} from "@/components/user-box";
import dynamic from "next/dynamic";

const OverviewDashboard = dynamic(() => import("../_components/overview-dashboard"), { ssr: false });


const AdminPage = () => {

    const {user} = useUser()

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="p-4 sm:p-6 w-full">
                <div className={"p-6 flex items-center justify-between"}>
                    <div>
                        {user && (
                            <p className={"text-2xl font-bold"}>Olá {user.fullName}, bem-vindo de volta 👋</p>
                        )}
                    </div>
                    <UserBox/>
                </div>
                <OverviewDashboard/>
            </div>
        </div>
    );
};

export default AdminPage;