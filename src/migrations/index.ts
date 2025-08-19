import * as migration_20250819_133415 from './20250819_133415';

export const migrations = [
  {
    up: migration_20250819_133415.up,
    down: migration_20250819_133415.down,
    name: '20250819_133415'
  },
];
