import { ActionIcon } from '@bentwnghk/ui';
import isEqual from 'fast-deep-equal';
import { PackageSearch } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DevModal from '@/features/PluginDevModal';
import { useToolStore } from '@/store/tool';
import { pluginSelectors } from '@/store/tool/slices/plugin/selectors';

const EditCustomPlugin = memo<{ identifier: string }>(({ identifier }) => {
  const { t } = useTranslation('plugin');
  const [showModal, setModal] = useState(false);

  const [installCustomPlugin, updateNewDevPlugin] = useToolStore((s) => [
    s.installCustomPlugin,
    s.updateNewCustomPlugin,
  ]);

  const customPlugin = useToolStore(pluginSelectors.getCustomPluginById(identifier), isEqual);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DevModal
        mode={'edit'}
        onOpenChange={setModal}
        onSave={async (devPlugin) => {
          await installCustomPlugin(devPlugin);
          // toggleAgentPlugin(devPlugin.identifier);
        }}
        onValueChange={updateNewDevPlugin}
        open={showModal}
        value={customPlugin}
      />
      <ActionIcon
        icon={PackageSearch}
        onClick={() => {
          setModal(true);
        }}
        title={t('store.actions.manifest')}
      />
    </div>
  );
});

export default EditCustomPlugin;