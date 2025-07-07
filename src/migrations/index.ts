import * as migration_20250703_080934 from './20250703_080934';

export const migrations = [
  {
    up: migration_20250703_080934.up,
    down: migration_20250703_080934.down,
    name: '20250703_080934'
  },
];
