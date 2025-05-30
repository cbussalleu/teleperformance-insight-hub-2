import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { RadarChart } from '@/components/RadarChart';

const competenciaRadar = [
  { subject: 'Inclusión', TP: 90, Competencia: 60, fullMark: 100 },
  { subject: 'Ambiente Laboral', TP: 85, Competencia: 65, fullMark: 100 },
  { subject: 'Desarrollo', TP: 80, Competencia: 70, fullMark: 100 },
  { subject: 'Estabilidad', TP: 85, Competencia: 75, fullMark: 100 },
  { subject: 'Salarios', TP: 60, Competencia: 75, fullMark: 100 },
  { subject: 'Tecnología', TP: 65, Competencia: 80, fullMark: 100 }
];

export default function Competencia() {
  return (
    <Layout title="ACT.6 - Análisis Competitivo">
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Fortalezas vs Competencia</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart data={competenciaRadar} dataKeys={['TP', 'Competencia']} height={400} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}