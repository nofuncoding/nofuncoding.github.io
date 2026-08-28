import { defineConfig, presetWind4, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
        provider: 'google',
        fonts: {
            sans: 'Inter',
            mono: 'Fira Code',
        }, 
    }),
  ],
})