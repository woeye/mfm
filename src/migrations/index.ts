import * as migration_20250825_094952 from './20250825_094952';
import * as migration_20251015_082042 from './20251015_082042';
import * as migration_20251015_082911 from './20251015_082911';
import * as migration_20251201_094358 from './20251201_094358';
import * as migration_20251201_121017 from './20251201_121017';
import * as migration_20251203_144457 from './20251203_144457';
import * as migration_20251220_164645 from './20251220_164645';
import * as migration_20251222_183340 from './20251222_183340';
import * as migration_20251225_144057 from './20251225_144057';
import * as migration_20251226_124535 from './20251226_124535';

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
    name: '20251201_094358',
  },
  {
    up: migration_20251201_121017.up,
    down: migration_20251201_121017.down,
    name: '20251201_121017',
  },
  {
    up: migration_20251203_144457.up,
    down: migration_20251203_144457.down,
    name: '20251203_144457',
  },
  {
    up: migration_20251220_164645.up,
    down: migration_20251220_164645.down,
    name: '20251220_164645',
  },
  {
    up: migration_20251222_183340.up,
    down: migration_20251222_183340.down,
    name: '20251222_183340',
  },
  {
    up: migration_20251225_144057.up,
    down: migration_20251225_144057.down,
    name: '20251225_144057',
  },
  {
    up: migration_20251226_124535.up,
    down: migration_20251226_124535.down,
    name: '20251226_124535'
  },
];
