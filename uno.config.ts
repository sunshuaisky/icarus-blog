// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: {
        'bgColor': 'dark:bg-[#16171a] bg-[#e0e5ec]',
        'fontColor': 'dark:color-[#c7c7c7] color-[#16171a]',
        'menuBorderBottom': 'border-b-1px border-b-solid dark:border-b-#303133 border-b-#fafafa',
        'flexCenterCenter': 'flex items-center justify-center',
        'menuTextFont': 'text-13px tracking-[0.07em] m-b-[24px] cursor-pointer',
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                sans: 'Odibee Sans',
            },
        }),
    ],
    rules: [
        [/^bg-img-\[(.+)\]$/, ([, value]) => {
            // 替换下划线为正常的路径分隔符
            const path = value.replace(/_/g, '/');
            return {'background-image': `url(${path})`};
        }],
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})