/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Cbs_mLla.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_13XlaZQ_.mjs';
import { S as ScrollFade, $ as $$ContactCTA } from '../chunks/ContactCTA_CaBThM_H.mjs';
import { FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Career = createComponent(($$result, $$props, $$slots) => {
  const timelineData = [
    {
      year: "February 2024 - May 2024",
      title: "Full Stack Developer internship",
      business_url: "https://eviden.com/",
      business_name: "Eviden",
      description: "Interned as a full stack developer, doing a 4-week training with the company's technologies such as Spring Boot and Angular, their company policies with Git, and the work methodology 'Agile' they use for teamwork. and a month and a half of feedback doing a group project with the technologies learned, which include aws, keycloak, docker among them.",
      icon: FaCode
    },
    {
      year: "May 2024 - Present",
      title: "Full Stack Developer",
      business_url: "https://eviden.com/",
      business_name: "Eviden",
      description: "I am currently working as a Junior Full-Stack Developer at Eviden, a company that specializes in developing software solutions for the healthcare industry. My role involves working on the development of web applications using as main technologies like Angular, Spring Boot, and PostgreSQL.",
      icon: FaBriefcase
    },
    {
      year: "Present - Future",
      title: "Senior Developer",
      business_url: "https://novadevs-eu.netlify.app",
      business_name: "Nova Devs",
      description: "My goal is to continue growing as a developer and become a Senior Developer in the near future. I am passionate about learning new technologies and improving my skills to become a better developer. And I am working separately in an organisation called Nova Devs in which I am involved, creating both individual and group projects, and growing as a programmer.",
      icon: FaGraduationCap
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Career | Ceradev", "description": "Learn about the career trajectory of C\xE9sar A. Su\xE1rez Orizondo", "data-astro-cid-gdqbjplb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-32" data-astro-cid-gdqbjplb> <main class="wrapper stack gap-20 lg:gap-32" data-astro-cid-gdqbjplb> ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "intro", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-gdqbjplb": true }, { "default": ($$result3) => renderTemplate` <section class="intro" data-astro-cid-gdqbjplb> <header data-astro-cid-gdqbjplb> ${renderComponent($$result3, "Hero", $$Hero, { "title": "My Career", "tagline": "Explore my career journey and experience in the tech industry.", "align": "start", "data-astro-cid-gdqbjplb": true })} </header> </section> ` })} ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "timeline", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-gdqbjplb": true }, { "default": ($$result3) => renderTemplate` <section class="timeline" data-astro-cid-gdqbjplb> ${timelineData.map((item, index) => renderTemplate`${renderComponent($$result3, "ScrollFade", ScrollFade, { "client:visible": true, "className": "timeline-item", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-gdqbjplb": true }, { "default": ($$result4) => renderTemplate` <div${addAttribute(`timeline-item  ${index % 2 === 0 ? "left" : "right"}`, "class")}${addAttribute(`timeline-item-${index}`, "id")} data-astro-cid-gdqbjplb> <div class="timeline-icon" data-astro-cid-gdqbjplb>${renderTemplate`${renderComponent($$result4, "item.icon", item.icon, { "size": "2em", "data-astro-cid-gdqbjplb": true })}`}</div> <div class="timeline-content" data-astro-cid-gdqbjplb> <h3 data-astro-cid-gdqbjplb>${item.title}</h3> <span class="timeline-year" data-astro-cid-gdqbjplb>${item.year}</span> <h4 data-astro-cid-gdqbjplb><a${addAttribute(item.business_url, "href")} target="_blank" data-astro-cid-gdqbjplb>${item.business_name}</a></h4> <p data-astro-cid-gdqbjplb>${item.description}</p> </div> </div> ` })}`)} </section> ` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-gdqbjplb": true })} </div> ` })} `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/career.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Career,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
