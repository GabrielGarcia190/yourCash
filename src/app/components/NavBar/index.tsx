"use client"
import { Globe } from "@phosphor-icons/react";
import { CustomSelect } from "../Select";
import Image from 'next/image'


export function NavBar() {
    return (
        <nav className="w-full h-10 flex flex-row rela fixed top-0 left-0">
            <div className="flex items-start">
                <div className="pr-2 pl-4 h-full flex items-center">
                    <Image 
                    src={"/yourCashLogo.svg"}
                    height={25}
                    width={27.5}
                    alt="Logo do site"
                    />  
                </div>
                <div className="flex items-center h-full ">
                <div className="border-r border-[#37353326] h-6 mx-4"/>
                </div>
                <div className="flex items-center text-center h-full">
                    <Globe size={20} />
                    <CustomSelect/>
                </div>
            </div>
        </nav>
    )
}

<div className="w-0.5 h-24 bg-black mx-auto"></div>