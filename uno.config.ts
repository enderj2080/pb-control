import {defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives
 } from 'unocss'

export default defineConfig({
    presets:[
        presetAttributify(),
        presetIcons(),
        presetIcons()
    ],
    transformers:[
        transformerDirectives()
    ]
})