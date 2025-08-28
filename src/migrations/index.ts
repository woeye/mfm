import * as migration_20250825_094952 from './20250825_094952';

export const migrations = [
  {
    up: migration_20250825_094952.up,
    down: migration_20250825_094952.down,
    name: '20250825_094952'
  },
];
