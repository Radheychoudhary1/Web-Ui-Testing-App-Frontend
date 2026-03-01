// src/plugins/vuetify.ts
// import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const lightTheme = {
  dark: false,
  colors: {
    background: '#0F172A', // dark navy background
    surface: '#020617',
    primary: '#38BDF8',    // cyan
    secondary: '#A855F7',  // violet
    accent: '#F59E0B',
    info: '#0EA5E9',
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
  },
};

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});
