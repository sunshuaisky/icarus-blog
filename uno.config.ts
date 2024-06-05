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
        'bg_color': 'dark:bg-[#16171a] bg-[#e0e5ec]',
        'font-color': 'dark:color-[#c7c7c7] color-[#16171a]',
        'menu_border_bottom': 'border-b-1px border-b-solid dark:border-b-#303133 border-b-#fafafa',
        'flex_center_center': 'flex items-center justify-center',
        'menu_text_font': 'text-13px tracking-[0.07em] m-b-[24px]',
        'blog_title_styles': 'text-24px font-700 m-[32px_0_21px] dark:color-[#cbd5e1] color-[#334155] line-height-relaxed',
        'blog_name_styles': 'text-18px dark:color-white color-[#0F172A] decoration-underline font-500 hover:color-[#69b1ff] hover:decoration-none hover:outline-0 cursor-pointer line-height-relaxed transition-color transition-duration-300'
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