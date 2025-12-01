import * as migration_20250825_094952 from './20250825_094952';
import * as migration_20251015_082042 from './20251015_082042';
import * as migration_20251015_082911 from './20251015_082911';
import * as migration_20251201_094358 from './20251201_094358';

export const migrations = [
  {
    up: migration_20250825_094952.up,
    down: migration_20250825_094952.down,
    name: '20250825_094952',
  },
  {
    up: migration_20251015_082042.up,
    down: migration_20251015_082042.down,
    name: '20251015_082042',
  },
  {
    up: migration_20251015_082911.up,
    down: migration_20251015_082911.down,
    name: '20251015_082911',
  },
  {
    up: migration_20251201_094358.up,
    down: migration_20251201_094358.down,
    name: '20251201_094358'
  },
];
