import { UserConfig } from 'vitest/config'
import config from './vitest.config'

export default {
  ...config,
  test: {
    ...config.test,
    environment: 'node',
    setupFiles: ['./scripts/vitest.setup.ts'],
    include: ['./e2e/**/*.spec.ts'],
    maxWorkers: 1,
    minWorkers: 1
  }
} satisfies UserConfig
