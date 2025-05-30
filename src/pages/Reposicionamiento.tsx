import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';

const definicionData = [
  { name: 'Empresa que da oportunidades a todos', value: 45 },
  { name: 'Empresa con diversidad e inclusión', value: 38 },
  { name: 'Empresa con crecimiento profesional', value: 32 },
  { name: 'Empresa estable y formal', value: 28 },
  { name: 'Call center tradicional', value: 15 }
];

export default function Reposicionamiento() {
  return (
    <Layout title="ACT.7 - Credibilidad de Reposicionamiento">
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Definición Actual de Teleperformance</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={definicionData} keys={['value']} colors={['#1e40af']} height={300} />
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">Credibilidad de Reposicionamiento</h4>
              <p className="text-blue-700 text-sm">
                La percepción mayoritaria como "empresa de oportunidades" (45%) y "diversidad e inclusión" (38%) 
                proporciona base sólida para evolucionar hacia posicionamiento de transformación digital y consultoría.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}