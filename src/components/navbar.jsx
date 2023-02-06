import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { link } from "react-router-dom"


const navbar = () => {
    const menu =[
        {name:"panel", link:'/', icon: RiDashboardFill },
        {name:"contact", link:'/', icon: AiFillPhone },
        {name:"user", link:'/', icon: TiUserAdd },
        {name:"carrito", link:'/', icon: FaCartPlus },
        {name:"panel", link:'/', icon: RiDashboardFill },
    ];
    const [open, setOpen] = useState(true);
    return (
        <section className="flex gap-6">
            <div className={'bg-[black] min-h-screen ${ open ? " w-72" : "w-16"} duration-500 text-green-100 px-4'}></div>
                <div className="py-3 flex justify-end">
                    <HiMenu size={25} className="cursor-pointer" 
                    onClick={()=>setOpen(!open)} />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                {
                    menu?.map((menu,i)=>(
                        <link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-green-90">
                            
                            <div>{React.createElement(menu?.icon,{size:"20"})} </div> 
                            <h3 className= {'whitespace-pre duration-500 ${!open && "opacity-0 translate-x-26 overflow-hidden"}'}>
                                {menu?.name}
                            </h3>
                        </link>
                    ))
                }    
                </div>    


            <div className="m-3 text-xl text-green-900 font-semibold">
                MI APP DE COMPONENTES DE PC
            </div>
        </section>
    );
};

export default navbar;