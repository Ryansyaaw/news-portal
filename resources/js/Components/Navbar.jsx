import React, { useState } from "react";
import ButtonNav from "./ButtonNav";

const Navbar = () => {
    const Links = [
        { name: "Beranda", href: "#" },
        { name: "Tentang Kami", href: "#" },
        { name: "Divisi", href: "#" },
        { name: "Prestasi", href: "#" },
        { name: "Hubungi Kami", href: "#" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-sm bg-slate-100 fixed w-full top-0 left-0">
            <div className="md:flex py-4 md:px-10 px-7 justify-between items-center">
                <div className="flex items-center">
                    <a href="">
                        <span className="text-2xl font-bold">EEPROM</span>
                    </a>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-2xl absolute right-5 top-4 cursor-pointer md:hidden"
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>
                <ul
                    className={open ? "top-14 md:flex md:items-center absolute md:static bg-slate-100 md:z-auto -z-10 md:w-auto w-full left-0 md:pl-0 pl-4 block" : "md:flex md:items-center absolute md:static bg-slate-100 md:z-auto z-[-1] md:w-auto w-full left-0 md:pl-0 pl-4 hidden"
                    }
                >
                    {Links.map((link) => (
                        <li className="mx-3 md:my-0 my-5" key={link.name}>
                            <a className="nav" href={link.href}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
