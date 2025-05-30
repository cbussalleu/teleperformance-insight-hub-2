import React from 'react';
import { BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface BarChartProps {
  data: any[];
  className?: string;
  keys: string[];
  colors?: string[];
  xAxisKey?: string;
  title?: string;
  subtitle?: string;
  height?: number;
  showLegend?: boolean;
  tooltipFormatter?: (value: number) => string;
  valueScale?: [number, number];
  isPercentage?: boolean;
}

export function BarChart({
  data,
  className,
  keys,
  colors = ['#1e40af', '#dc2626'],
  xAxisKey = 'name',
  title,
  subtitle,
  height = 300,
  showLegend = true,
  tooltipFormatter,
  valueScale,
  isPercentage = true,
}: BarChartProps) {
  
  const defaultFormatter = (value: number) => {
    if (isPercentage) {
      return `${value}%`;
    }
    return `${value}`;
  };
  
  const formatter = tooltipFormatter || defaultFormatter;
  
  return (
    <div className={cn("w-full rounded-lg border bg-card p-4", className)}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey={xAxisKey} 
            tick={{ fontSize: 12 }} 
            axisLine={false} 
            tickLine={false}
          />
          <YAxis 
            tickFormatter={(value) => isPercentage ? `${value}%` : `${value}`} 
            domain={valueScale || (isPercentage ? [0, 100] : [0, 'dataMax'])}
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={formatter}
            contentStyle={{ borderRadius: '8px', padding: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
          {showLegend && <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />}
          {keys.map((key, index) => (
            <Bar 
              key={key} 
              dataKey={key} 
              fill={colors[index % colors.length]} 
              radius={[4, 4, 0, 0]}
              name={key}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}