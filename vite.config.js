import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"pt","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/"}]},"es/":{"outputDir":"./es/","lang":"es","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/"}]},"sucess":{"outputDir":"./sucess","lang":"pt","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/sucess/"}]},"es/sucess":{"outputDir":"./es/sucess","lang":"es","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/sucess/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/sucess/"}]},"canceled":{"outputDir":"./canceled","lang":"pt","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/canceled/"}]},"es/canceled":{"outputDir":"./es/canceled","lang":"es","cacheVersion":64,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n.gradient-text {\r\nbackground: linear-gradient(45deg, #f3ec78, #af4261);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n</style>","body":"<script>\r\n    !function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '844990142033425');\r\nfbq('track', 'PageView');\r\n</script>\r\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\r\nsrc=\"https://www.facebook.com/tr?id=844990142033425&ev=PageView&noscript=1\"\r\n/></noscript>\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"pt","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/canceled/"},{"rel":"alternate","hreflang":"es","href":"https://dafb521e-e198-4fdc-9c64-84f9aeb646f8.weweb-preview.io/es/canceled/"}]}};

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
