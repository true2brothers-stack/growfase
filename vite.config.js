import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"pt","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/"}]},"es/":{"outputDir":"./es/","lang":"es","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/"}]},"sucess":{"outputDir":"./sucess","lang":"pt","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/sucess/"}]},"es/sucess":{"outputDir":"./es/sucess","lang":"es","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/sucess/"}]},"canceled":{"outputDir":"./canceled","lang":"pt","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/canceled/"}]},"es/canceled":{"outputDir":"./es/canceled","lang":"es","cacheVersion":69,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<!-- Google Tag Manager -->\r\n<script>\r\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-TK3CKXGX');\r\n</script>\r\n<!-- End Google Tag Manager -->\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TK3CKXGX\" height=\"0\" width=\"0\"\r\n        style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/canceled/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
