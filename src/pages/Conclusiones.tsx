import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Conclusiones() {
  return (
    <Layout title="Conclusiones Estratégicas">
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Transformación del Discurso Corporativo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Nueva Narrativa</h4>
              <p className="text-gray-700 text-sm">
                <strong>De:</strong> "Somos un call center que ayuda a las empresas" 
                <br />
                <strong>A:</strong> "Somos un sistema de transformación social que genera oportunidades 
                laborales inclusivas mientras desarrollamos capacidades digitales avanzadas para nuestros clientes y empleados"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}