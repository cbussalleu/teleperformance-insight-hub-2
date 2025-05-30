import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';

const experienciaData = [
  { name: 'Excelente', value: 33, color: '#059669' },
  { name: 'Muy buena', value: 46, color: '#0891b2' },
  { name: 'Buena', value: 19, color: '#eab308' },
  { name: 'Regular', value: 2, color: '#dc2626' }
];

const motivacionData = [
  { name: 'Salario/beneficios', value: 45 },
  { name: 'Oportunidad crecimiento', value: 28 },
  { name: 'Estabilidad laboral', value: 15 },
  { name: 'Ambiente trabajo', value: 12 }
];

export default function Percepcion() {
  return (
    <Layout title="ACT.3 - Percepción de Valor y Motivación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiencia General Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={experienciaData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>79% Muy buena/Excelente:</strong> Alta satisfacción confirma efectividad del modelo TP</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Motivación Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={motivacionData} keys={['value']} colors={['#1e40af']} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>45% Salario/beneficios:</strong> Factor inicial de atracción predominante</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Testimonios del Proceso de Transformación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Proceso de Adaptación</h4>
                <p className="text-sm text-blue-700 italic">"Entre la espada y la pared... pero ya me adapté, me gusta"</p>
                <p className="text-xs text-blue-600 mt-1">Refleja transformación de necesidad a satisfacción</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Cambio de Perspectiva</h4>
                <p className="text-sm text-green-700 italic">"Jamás dije me voy a quedar mucho tiempo"</p>
                <p className="text-xs text-green-600 mt-1">Plan B evolucionando hacia proyecto principal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}