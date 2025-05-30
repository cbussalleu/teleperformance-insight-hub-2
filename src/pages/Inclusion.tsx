import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';

const diversidadData = [
  { name: 'Cuidadores', value: 63, count: 434 },
  { name: 'Estudiantes', value: 13.6, count: 93 },
  { name: 'Discapacidades', value: 11, count: 75 },
  { name: 'Minorías étnicas', value: 6, count: 40 },
  { name: 'LGBT+', value: 2, count: 15 }
];

export default function Inclusion() {
  return (
    <Layout title="ACT.5 - Inclusión, Diversidad y RSE">
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Sistema de Transformación Social No Reconocido</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={diversidadData} keys={['value']} colors={['#059669']} height={300} />
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Impacto Social Documentado</h4>
              <p className="text-green-700 text-sm mb-3">
                TP funciona como sistema de transformación social, proporcionando oportunidades 
                laborales a poblaciones tradicionalmente excluidas del mercado formal.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-white p-2 rounded border">
                  <div className="font-semibold text-green-800">434</div>
                  <div className="text-green-600">Cuidadores</div>
                </div>
                <div className="bg-white p-2 rounded border">
                  <div className="font-semibold text-green-800">75</div>
                  <div className="text-green-600">Discapacidades</div>
                </div>
                <div className="bg-white p-2 rounded border">
                  <div className="font-semibold text-green-800">93</div>
                  <div className="text-green-600">Estudiantes</div>
                </div>
                <div className="bg-white p-2 rounded border">
                  <div className="font-semibold text-green-800">55</div>
                  <div className="text-green-600">Minorías</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}