import React from 'react';
import { Button } from '~/components/ui/Button';
import { Card, CardContent } from '~/components/ui/Card';
import { Cable, Server, ArrowLeft } from 'lucide-react';
import { useLocalModelHealth } from '~/lib/hooks/useLocalModelHealth';
import HealthStatusBadge from './HealthStatusBadge';
import { PROVIDER_ICONS } from './types';

// Status Dashboard Component
function StatusDashboard({ onBack }: { onBack: () => void }) {
  const { healthStatuses } = useLocalModelHealth();

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="bg-transparent hover:bg-transparent text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary transition-all duration-200 p-2"
          aria-label="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold text-bolt-elements-textPrimary">Provider Status</h2>
          <p className="text-sm text-bolt-elements-textSecondary">Monitor the health of your local AI providers</p>
        </div>
      </div>

      {healthStatuses.length === 0 ? (
        <Card className="bg-bolt-elements-background-depth-2">
          <CardContent className="p-8 text-center">
            <Cable className="w-16 h-16 mx-auto text-bolt-elements-textTertiary mb-4" />
            <h3 className="text-lg font-medium text-bolt-elements-textPrimary mb-2">No Endpoints Configured</h3>
            <p className="text-sm text-bolt-elements-textSecondary">
              Configure and enable local providers to see their endpoint status here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {healthStatuses.map((status) => (
            <Card key={`${status.provider}-${status.baseUrl}`} className="bg-bolt-elements-background-depth-2">
              <CardContent className="p-6">
                <div className="min-h-[96px] flex items-center">
                  <div className="grid grid-cols-5 gap-6 text-sm w-full">
                    <div className="space-y-1">
                      <div className="text-bolt-elements-textSecondary">Название провайдера</div>
                      <div className="text-lg font-semibold text-bolt-elements-textPrimary">{status.provider}</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-bolt-elements-textSecondary">Количество моделей</div>
                      <div className="text-lg font-semibold text-bolt-elements-textPrimary">
                        {status.availableModels?.length || 0}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-bolt-elements-textSecondary">Версия</div>
                      <div className="text-lg font-semibold text-bolt-elements-textPrimary">
                        {status.version || 'Неизвестно'}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-bolt-elements-textSecondary">Последняя проверка</div>
                      <div className="text-lg font-semibold text-bolt-elements-textPrimary">
                        {status.lastChecked ? new Date(status.lastChecked).toLocaleTimeString() : 'Никогда'}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-bolt-elements-textSecondary">Статус</div>
                      <div className="mt-1">
                        <HealthStatusBadge status={status.status} responseTime={status.responseTime} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusDashboard;
