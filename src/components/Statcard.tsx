import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  className,
  trend,
  trendValue,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-blue-600">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center gap-1 text-xs">
            <div
              className={cn(
                "rounded-full px-1 py-0.5",
                trend === "up"
                  ? "bg-emerald-100 text-emerald-800"
                  : trend === "down"
                  ? "bg-rose-100 text-rose-800"
                  : "bg-gray-100 text-gray-800"
              )}
            >
              {trend === "up" ? "▲" : trend === "down" ? "▼" : "■"} {trendValue}
            </div>
            <span className="text-muted-foreground">tendencia</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
