import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run react-naver-map-sdk:serve',
        production: 'nx run react-naver-map-sdk:preview',
      },
      ciWebServerCommand: 'nx run react-naver-map-sdk:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
