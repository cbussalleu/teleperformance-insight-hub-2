import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';

const metasData = [
  { name: 'Muy de acuerdo', value: 35, color: '#059669' },
  { name: 'De acuerdo', value: 28, color: '#0891b2' },
  { name: 'Neutral', value: 25, color: '#eab308' },
  { name: 'En desacuerdo', value: 8, color: '#dc2626' },
  { name: 'Muy en desacuerdo', value: 4, color: '#b91c1c' }
];

const expectativasData = [
  { name: 'Superó expectativas', value: 31, color: '#059669' },
  { name: 'Cumplió expectativas', value: 52, color: '#0891b2' },
  { name: 'Debajo expectativas', value: 17, color: '#dc2626' }
];

export default function CicloVida() {
  return (
    <Layout title="ACT.4 - Ciclo de Vida y Evolución">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contribución a Metas Organizacionales</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={metasData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>63% Acuerdo:</strong> Alta identificación con objetivos corporativos</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Expectativas vs Realidad</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={expectativasData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>83% Cumplió/Superó:</strong> Validación del modelo de empleabilidad</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}