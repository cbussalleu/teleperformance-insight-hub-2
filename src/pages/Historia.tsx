import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';
import { StatCard } from '@/components/StatCard';

const tenureData = [
  { name: 'Rookies (≤1 año)', value: 41.85, count: 285 },
  { name: 'Privates (1.1-3 años)', value: 24.96, count: 170 },
  { name: 'Mid (3.1-7 años)', value: 21, count: 143 },
  { name: 'Veterans (7.1-20 años)', value: 12.48, count: 85 }
];

const edadData = [
  { name: '18-25 años', value: 16.3, count: 111 },
  { name: '26-35 años', value: 42.7, count: 291 },
  { name: '36-45 años', value: 24.5, count: 167 },
  { name: '46+ años', value: 16.5, count: 112 }
];

const rolesData = [
  { name: 'Agentes', value: 72.05, count: 500 },
  { name: 'Líderes/Coordinadores', value: 8.07, count: 56 },
  { name: 'Calidad', value: 4.47, count: 31 },
  { name: 'Entrenadores', value: 0.86, count: 6 },
  { name: 'Otros', value: 13.26, count: 92 }
];

const modalidadData = [
  { name: 'Presencial', value: 67, count: 457 },
  { name: 'Cloud Campus', value: 33, count: 227 }
];

export default function Historia() {
  return (
    <Layout title="ACT.1 - Historia de la Relación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Rookies" 
            value="41.85%" 
            description="≤1 año de tenure (285 empleados)" 
            trend="neutral"
            trendValue="Alta rotación inicial"
          />
          <StatCard 
            title="Grupo Central" 
            value="42.7%" 
            description="26-35 años (291 empleados)" 
            trend="up"
            trendValue="Demográfico productivo"
          />
          <StatCard 
            title="Cloud Campus" 
            value="33%" 
            description="Modalidad remota (227 empleados)" 
            trend="up"
            trendValue="Adaptación digital"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Tenure</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={tenureData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>41.85% Rookies:</strong> Alta rotación inicial requiere atención</p>
                <p><strong>33% Post-primer año:</strong> Estabilización significativa del talento</p>
                <p><strong>12.48% Veterans:</strong> Núcleo de experiencia consolidado</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Edad</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={edadData} keys={['value']} colors={['#1e40af']} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>42.7% entre 26-35 años:</strong> Grupo demográfico central productivo</p>
                <p><strong>59.2% mayores de 26:</strong> Fuerza laboral madura y estable</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={rolesData} keys={['value']} colors={['#059669']} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>72% Agentes:</strong> Base operativa sólida</p>
                <p><strong>8% Liderazgo:</strong> Estructura de desarrollo presente</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Modalidad de Trabajo</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={modalidadData} height={300} colors={['#1e40af', '#dc2626']} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>67% Presencial:</strong> Modalidad tradicional predominante</p>
                <p><strong>33% Cloud Campus:</strong> Adopción significativa del trabajo remoto</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Análisis Demográfico Integral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Perfil del Empleado Típico TP</h4>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Edad:</strong> 26-35 años (42.7%)</li>
                    <li>• <strong>Rol:</strong> Agente operativo (72%)</li>
                    <li>• <strong>Tenure:</strong> Primera experiencia o estabilizándose</li>
                    <li>• <strong>Modalidad:</strong> Presencial con apertura a remoto</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Insights de Retención</h4>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Barrera del primer año:</strong> 41.85% abandonan</li>
                    <li>• <strong>Estabilización post-año:</strong> 58.15% se mantienen</li>
                    <li>• <strong>Veteranos (7+ años):</strong> 12.48% núcleo leal</li>
                    <li>• <strong>Oportunidad Cloud:</strong> 33% exitosa adopción</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Implicación Estratégica</h4>
              <p className="text-amber-700 text-sm">
                La alta rotación inicial (41.85% Rookies) contrasta con la estabilización post-primer año, 
                sugiriendo que las estrategias de retención deben enfocarse en los primeros 12 meses. 
                El éxito del Cloud Campus (33%) indica capacidad de adaptación organizacional.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}