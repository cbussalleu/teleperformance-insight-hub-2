import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Filter } from 'lucide-react';

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-4 border-b bg-white">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Filter className="h-4 w-4" />
          <span>Filtrar</span>
        </Button>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          <span>Descargar CSV</span>
        </Button>
      </div>
    </div>
  );
}