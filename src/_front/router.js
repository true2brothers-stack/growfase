import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"dafb521e-e198-4fdc-9c64-84f9aeb646f8","homePageId":"19d5d470-de0f-404b-838e-12b57f833b8f","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"pt","default":true},{"lang":"es","default":false,"isDefaultPath":false}],"background":{},"workflows":[],"pages":[{"id":"f89ff214-e618-4e78-a095-63d30cb410b7","linkId":"f89ff214-e618-4e78-a095-63d30cb410b7","name":"admin","folder":null,"paths":{"pt":"admin/{{param|adm}}","default":"admin/{{param|adm}}"},"langs":["en","pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"255fb2f8-941e-4cde-872b-e4e2b9a8195b","sectionTitle":"Section","linkId":"ae9b6875-9d61-433a-a650-50043edd4c9b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4b5070c6-20a4-469b-95b5-308a3d15d592","linkId":"4b5070c6-20a4-469b-95b5-308a3d15d592","name":"bio","folder":null,"paths":{"pt":"bio","default":"bio"},"langs":["es"],"cmsDataSetPath":null,"sections":[{"uid":"2c25ef8f-f4ba-4456-8abb-69ad9958cfb3","sectionTitle":"Section","linkId":"df77a304-0af5-4799-832e-34a84211c7a3"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"55015bbe-1c10-4d10-a33a-1ca3d0cb11ef","linkId":"55015bbe-1c10-4d10-a33a-1ca3d0cb11ef","name":"50.000Reelspack","folder":null,"paths":{"en":"home","pt":"50000reelspack","default":"50000reelspack"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"ca2a3549-acbd-4b4d-9bbe-6abbf0cd81af","sectionTitle":"bottonFixed","linkId":"b39239c1-2921-4b33-a32f-06bb19f6149e"},{"uid":"7d0015db-40a4-4b5a-9e41-f09a6a7dae25","sectionTitle":"header","linkId":"64cf9813-9368-4ecc-b2f8-08cae18e4892"},{"uid":"64e199ac-2fbb-4575-a284-d4a5404cbede","sectionTitle":"Hero Section","linkId":"46beee72-1826-43cf-85bf-bcf77e502b39"},{"uid":"8da4ccfc-89a7-484e-9f27-468afabf235a","sectionTitle":"howtoPurchase","linkId":"a627c91a-f5b1-4a80-be67-a01156061908"},{"uid":"a9d316d8-b9fe-4b17-8eb3-691ef8827dbf","sectionTitle":"3_100x","linkId":"865bd998-e1c0-444d-8068-ee61fc6f8605"},{"uid":"f65ed22b-07af-4e2a-a2a5-cd11a6a96c8d","sectionTitle":"Problem Solution Section","linkId":"ee6eb530-1c78-435f-b54d-0c9be38ddf81"},{"uid":"96ba1a00-536e-4ee7-815c-04f3600a1da3","sectionTitle":"qualidade","linkId":"a4d90763-97da-4bcc-87b5-974d7e77f930"},{"uid":"82b3e620-b9b4-4d02-b4c5-d0199b9a6600","sectionTitle":"Problem Solution Section - Copy","linkId":"48b16d51-37d7-4bd3-be5e-b07b35f39b58"},{"uid":"c95a72cc-4a29-41b6-9742-261a06d8ee52","sectionTitle":"FAQ Section","linkId":"0e025a7e-e763-491d-8629-690f10f2fc54"},{"uid":"e87069ab-9298-439e-858a-3ba3c3a6291a","sectionTitle":"Footer Section","linkId":"cc8b3a39-fbc8-4118-98c9-b58b8423965a"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"50.000 Reels pack | -70% 0FF"},"meta":{"desc":{"pt":"🔥 Más de 50.000 Reels de alta calidad, listos para usar en tus redes AHORA."},"keywords":{"pt":"reels, pack de reels, reels de qualidad, editar reels, editar, reels listos"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/luxury_pack_edited.png?_wwcv=88"},{"id":"b07a6ad3-53cf-4e49-bf3c-7f81ac14abbc","linkId":"b07a6ad3-53cf-4e49-bf3c-7f81ac14abbc","name":"sucess","folder":null,"paths":{"en":"success","pt":"sucess","default":"sucess"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"65f75caf-3643-4d13-812b-5683f3787bf7","sectionTitle":"Section","linkId":"bd4a6c38-4d88-45de-b5f6-de2efcb8befb"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"19d5d470-de0f-404b-838e-12b57f833b8f","linkId":"19d5d470-de0f-404b-838e-12b57f833b8f","name":"grow","folder":null,"paths":{"pt":"grow","default":"grow"},"langs":["en","pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"db67b9ea-76d1-4589-9662-2f26bb0d94ff","sectionTitle":"Section","linkId":"b131ddd1-37b1-4740-a63d-5ce078e802f4"}],"pageUserGroups":[],"title":{"pt":"GrowFase | Começa e cresce no digital com sistemas de alta performance!"},"meta":{"desc":{"pt":"A GrowFase ajuda negócios ambiciosos a começar e crescer no digital com sistemas focados em conversão, performance e resultados mensuráveis. Estratégia, design e tecnologia integrados."},"keywords":{"pt":"growfase, agência digital portugal, crescimento digital, sistemas digitais, landing pages, web apps, performance marketing, conversão"},"__typename":"PageMeta","socialDesc":{"pt":"Estruturámos sistemas digitais orientados a performance para negócios que querem crescer no digital de forma estruturada, previsível e mensurável."},"socialTitle":{"pt":"GrowFase | Começa e cresce no digital com estratégia e sistemas!"},"structuredData":{}},"metaImage":"images/logo1000px.png?_wwcv=88"},{"id":"dded9630-5839-414d-b0f2-bc146a18e8d2","linkId":"dded9630-5839-414d-b0f2-bc146a18e8d2","name":"canceled","folder":null,"paths":{"en":"canceled","pt":"canceled","default":"canceled"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"d4b9b24b-da04-441f-821c-a34e258eedaa","sectionTitle":"Section","linkId":"a2b49e09-4e14-4b28-8a6f-68d98d551a91"},{"uid":"b6697433-b75d-4d06-8001-aa71879894e5","sectionTitle":"Offer Section","linkId":"e4c966c9-d909-44ad-9466-a9f8dc64bee0"},{"uid":"cd2efb00-10e6-4af1-9b1d-363684cf0658","sectionTitle":"FAQ Section","linkId":"72fbd9fe-ee9e-4029-8b13-7af020414f74"},{"uid":"308626e7-80e7-44f4-a0d5-e496a02c48c9","sectionTitle":"Footer Section","linkId":"dea4a517-b2df-49bd-b297-8c6873bc31bd"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24","name":"Vimeo","namespace":"vimeo"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 88;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = true;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
