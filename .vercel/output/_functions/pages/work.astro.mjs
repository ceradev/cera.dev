/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cbs_mLla.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content__2-yWyTy.mjs';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_13XlaZQ_.mjs';
import { S as ScrollFade, $ as $$ContactCTA } from '../chunks/ContactCTA_CaBThM_H.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from '../chunks/Grid_Dd2Smw5y.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Ceradev", "description": "Explore C\xE9sar A. Su\xE1rez Orizondo's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-32"> <main class="wrapper stack gap-20 lg:gap-32"> ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "intro", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <section class="intro stack gap-8 lg:gap-12"> ${renderComponent($$result3, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} </section> ` })} ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "work", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result4) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result4, "ScrollFade", ScrollFade, { "client:load": true, "className": "work-preview", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PortfolioPreview", $$PortfolioPreview, { "project": project })} ` })} </li>`)}` })} ` })} </main> ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "contact", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContactCTA", $$ContactCTA, {})} ` })} </div> ` })}`;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/work.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
