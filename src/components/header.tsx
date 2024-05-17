'use client'
import { Separator } from "@radix-ui/react-separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";
import { ModeToggle } from './theme/theme-toggle'
import { AccountMenu } from "./account-menu";

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <Pizza className="h-6 w-6" />

                <Separator orientation="vertical" className="h-6"/>

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink href="/">
                        <Home className="h- w-4" />
                        Inicio
                    </NavLink>
                    <NavLink href="/app/orders">
                        <UtensilsCrossed className="h- w-4" />
                        Pedidos
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ModeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    )
}