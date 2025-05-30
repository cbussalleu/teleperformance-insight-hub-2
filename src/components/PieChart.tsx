import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { cn } from '@/lib/utils';

interface PieChartProps {
  data: any[];
  className?: string;
  title?: string;
  subtitle?: string;
  height?: number;
  showLegend?: boolean;
  colors?: string[];
}

export function PieChart({
  data,
  className,
  title,
  subtitle,
  height = 300,
  showLegend = true,
  colors = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#059669', '#0891b2', '#eab308', '#dc2626', '#64748b']
}: PieChartProps) {
  
  return (
    <div className={cn("w-full rounded-lg border bg-card p-4", className)}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value}%`}
            contentStyle={{ borderRadius: '8px', padding: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
          {showLegend && <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}