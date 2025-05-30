import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';
import { StatCard } from '@/components/StatCard';

const fuentesData = [
  { name: 'Referencias/conocidos', value: 44 },
  { name: 'Redes sociales', value: 25 },
  { name: 'Búsqueda activa', value: 18 },
  { name: 'Otros', value: 13 }
];

const redesData = [
  { name: 'Facebook', value: 42 },
  { name: 'Instagram', value: 23 },
  { name: 'LinkedIn', value: 15 },
  { name: 'Otras', value: 20 }
];

const percepcionPreviaData = [
  { name: 'Muy positiva', value: 25, color: '#059669' },
  { name: 'Positiva', value: 32, color: '#0891b2' },
  { name: 'Neutral', value: 28, color: '#eab308' },
  { name: 'Negativa', value: 8, color: '#dc2626' },
  { name: 'No conocía', value: 7, color: '#64748b' }
];

const conocimientoData = [
  { name: 'Muy familiarizado', value: 15 },
  { name: 'Algo familiarizado', value: 42 },
  { name: 'Poco familiarizado', value: 28 },
  { name: 'No conocía', value: 15 }
];

export default function Expectativas() {
  return (
    <Layout title="ACT.2 - Expectativas Iniciales, Conocimiento y Reputación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Referencias Personales" 
            value="44%" 
            description="Principal fuente de información" 
            trend="up"
            trendValue="Credibilidad por recomendación"
          />
          <StatCard 
            title="Percepción Positiva" 
            value="57%" 
            description="Muy positiva + Positiva previa" 
            trend="up"
            trendValue="Reputación favorable"
          />
          <StatCard 
            title="Redes Sociales" 
            value="25%" 
            description="Presencia digital efectiva" 
            trend="up"
            trendValue="Facebook lidera 42%"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fuentes de Información</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={fuentesData} keys={['value']} colors={['#1e40af']} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>44% Referencias:</strong> Credibilidad por recomendación personal</p>
                <p><strong>25% Redes sociales:</strong> Presencia digital efectiva</p>
                <p><strong>18% Búsqueda activa:</strong> Interés proactivo en la empresa</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociales Específicas</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={redesData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Facebook (42%):</strong> Principal plataforma de alcance</p>
                <p><strong>Instagram (23%):</strong> Segundo canal más efectivo</p>
                <p><strong>LinkedIn (15%):</strong> Presencia profesional</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Percepción Previa de Teleperformance</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={percepcionPreviaData} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>57% Percepción positiva/muy positiva:</strong> Reputación favorable en el mercado</p>
                <p><strong>28% Neutral:</strong> Sin prejuicios negativos</p>
                <p><strong>8% Negativa:</strong> Percepción minoritaria a superar</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Nivel de Conocimiento Previo</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={conocimientoData} keys={['value']} colors={['#059669']} height={300} />
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>57% Algún conocimiento:</strong> Familiaridad básica o avanzada</p>
                <p><strong>15% No conocía:</strong> Marca por descubrir</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Análisis de Expectativas y Reputación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Fortalezas Identificadas</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• <strong>Recomendación personal (44%):</strong> Confianza establecida</li>
                  <li>• <strong>Percepción positiva (57%):</strong> Reputación sólida</li>
                  <li>• <strong>Presencia digital (25%):</strong> Alcance efectivo en redes</li>
                  <li>• <strong>Neutralidad (28%):</strong> Sin resistencia previa</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Canales Efectivos</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Facebook:</strong> Principal red social (42%)</li>
                  <li>• <strong>Referencias:</strong> Credibilidad máxima (44%)</li>
                  <li>• <strong>Instagram:</strong> Alcance visual (23%)</li>
                  <li>• <strong>Búsqueda activa:</strong> Interés genuino (18%)</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-amber-50">
                <h4 className="font-semibold text-amber-800 mb-2">Oportunidades</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• <strong>LinkedIn:</strong> Potencial profesional (15% actual)</li>
                  <li>• <strong>Conocimiento profundo:</strong> Solo 15% muy familiarizado</li>
                  <li>• <strong>Percepción negativa:</strong> Revertir 8% negativos</li>
                  <li>• <strong>Nuevos talentos:</strong> 15% no conocía la marca</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Estrategia de Atracción de Talento</h4>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Base sólida:</strong> 57% percepción positiva + 44% referencias personales = 
                Fundamento robusto para estrategias de reclutamiento.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Multiplicador de confianza:</strong> Las referencias personales como principal fuente (44%) 
                sugieren que los empleados actuales son embajadores efectivos de la marca empleadora.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}