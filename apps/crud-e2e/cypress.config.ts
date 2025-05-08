import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run crud:serve:development',
        production: 'nx run crud:serve:production',
      },
      ciWebServerCommand: 'nx run crud:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
