import { CapacitorConfig } from '@capacitor/cli';

export const APP_VERSION = '15'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'AmazonasErpPOS',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
