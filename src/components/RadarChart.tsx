import React from 'react';
import { RadarChart as RechartsRadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Legend,
  Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface RadarChartProps {
  data: any[];
  className?: string;
  dataKeys: string[];
  colors?: string[];
  angleDataKey?: string;
  title?: string;
  subtitle?: string;
  height?: number;
  showLegend?: boolean;
}

export function RadarChart({
  data,
  className,
  dataKeys,
  colors = ['#1e40af', '#dc2626'],
  angleDataKey = 'subject',
  title,
  subtitle,
  height = 300,
  showLegend = true,
}: RadarChartProps) {
  return (
    <div className={cn("w-full rounded-lg", className)}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart outerRadius={90} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={angleDataKey} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', padding: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            formatter={(value) => [`${value}`]}
          />
          {showLegend && <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />}
          
          {dataKeys.map((key, index) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.3}
            />
          ))}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}