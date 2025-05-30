import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  title: string;
  href: string;
  number: string;
};

const navItems: NavItem[] = [
  { title: "Resumen Ejecutivo", href: "/", number: "0" },
  { title: "Historia Relación", href: "/historia", number: "1" },
  { title: "Expectativas Iniciales", href: "/expectativas", number: "2" },
  { title: "Percepción Valor", href: "/percepcion", number: "3" },
  { title: "Ciclo de Vida", href: "/ciclo-vida", number: "4" },
  { title: "Inclusión & RSE", href: "/inclusion", number: "5" },
  { title: "Competencia", href: "/competencia", number: "6" },
  { title: "Credibilidad Reposicionamiento", href: "/reposicionamiento", number: "7" },
  { title: "Conclusiones Estratégicas", href: "/conclusiones", number: "8" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72",
        className
      )}
    >
      <div className="flex items-center justify-between border-b p-4">
        <div className={cn("flex items-center", collapsed ? "hidden" : "")}>
          <div className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Análisis Trabajadores
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                item.href === location.pathname
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <span className={cn("flex h-7 w-7 items-center justify-center rounded-full bg-white/10",
                item.href === location.pathname
                  ? "text-white"
                  : "text-gray-500 bg-gray-100"
              )}>
                {item.number}
              </span>
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}