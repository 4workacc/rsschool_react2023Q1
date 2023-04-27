import { defineConfig } from "cypress";
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,  
  e2e: {    
    experimentalRunAllSpecs: true,    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      coverage(on, config);
      return config;
    },
  },
});
