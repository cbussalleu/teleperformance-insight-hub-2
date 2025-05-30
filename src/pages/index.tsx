import React from 'react';
import { Layout } from '@/components/Layout';
import { StatCard } from '@/components/StatCard';
import { BarChart } from '@/components/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Datos para gráficos de resumen
const keyFindingsData = [
  { name: 'Transformación social', value: 79 },
  { name: 'Inclusión genuina', value: 77 },
  { name: 'Capacidad digital', value: 25 },
  { name: 'Plan B → Proyecto', value: 58 },
];

const diversityData = [
  { name: 'Cuidadores', value: 63 },
  { name: 'Estudiantes', value: 13.6 },
  { name: 'Discapacidades', value: 11 },
  { name: 'Minorías étnicas', value: 6 },
];

export default function Index() {
  return (
    <Layout 
      title="Análisis de Trabajadores - Framework de Actividades"
      description="Sistema de Transformación Social Teleperformance - 685 empleados analizados"
    >
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">Resumen Ejecutivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <StatCard 
                title="Total Empleados" 
                value="685" 
                description="Base de análisis completa" 
                trend="up"
                trendValue="100% participación"
              />
              <StatCard 
                title="Tenure Promedio" 
                value="2.9 años" 
                description="Estabilidad laboral consolidada" 
                trend="up"
                trendValue="58% retención post-año"
              />
              <StatCard 
                title="Satisfacción General" 
                value="79%" 
                description="Experiencia muy buena/excelente" 
                trend="up"
                trendValue="46% muy buena"
              />
              <StatCard 
                title="Diversidad Operativa" 
                value="19%" 
                description="Poblaciones específicas" 
                trend="up"
                trendValue="63% cuidadores"
              />
              <StatCard 
                title="Cloud Campus" 
                value="33%" 
                description="Modalidad remota adoptada" 
                trend="up"
                trendValue="227 empleados"
              />
              <StatCard 
                title="Capacidad Digital" 
                value="25%" 
                description="Percepción transformación" 
                trend="up"
                trendValue="Evolución reconocida"
              />
            </div>
            
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
              <BarChart 
                data={keyFindingsData} 
                keys={['value']}
                colors={['#1e40af']}
                title="Hallazgos Clave del Sistema" 
                subtitle="Indicadores de transformación social (%)" 
                height={400}
              />
              
              <BarChart 
                data={diversityData} 
                keys={['value']}
                colors={['#059669']}
                title="Diversidad como Ventaja Operativa" 
                subtitle="Poblaciones incluidas en TP (%)" 
                height={400}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Insights Cualitativos Destacados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Plan B → Proyecto Principal</h4>
                <p className="text-sm text-blue-700 italic">"Jamás dije me voy a quedar mucho tiempo... ya me adapté, me gusta"</p>
                <p className="text-xs text-blue-600 mt-2">Transformación documentada de necesidad a satisfacción</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Inclusión Genuina</h4>
                <p className="text-sm text-green-700 italic">"Aquí no se discrimina a nadie"</p>
                <p className="text-xs text-green-600 mt-2">Lealtad emocional generada por ambiente inclusivo</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Gap Comunicacional</h4>
                <p className="text-sm text-amber-700">"Entre la espada y la pared"</p>
                <p className="text-xs text-amber-600 mt-2">Capacidad real vs comunicación interna - Oportunidad crítica</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Transformación Social No Reconocido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold mb-2">Impacto Social Documentado</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2 rounded border">
                    <div className="font-semibold text-blue-800">434</div>
                    <div className="text-blue-600">Cuidadores</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <div className="font-semibold text-green-800">75</div>
                    <div className="text-green-600">Discapacidades</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <div className="font-semibold text-purple-800">93</div>
                    <div className="text-purple-600">Estudiantes</div>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <div className="font-semibold text-orange-800">55</div>
                    <div className="text-orange-600">Minorías</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tensión Sistémica Crítica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Gap Identificado</h4>
                <p className="text-sm text-red-700 mb-2">
                  <strong>Capacidad real de transformación social</strong> vs. 
                  <strong> comunicación interna limitada</strong>
                </p>
                <div className="text-xs text-red-600">
                  79% satisfacción + 25% percepción digital = Oportunidad inmediata
                </div>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Oportunidad</h4>
                <p className="text-sm text-green-700">
                  Reposicionamiento interno hacia narrativa de transformación social y capacidades digitales
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
