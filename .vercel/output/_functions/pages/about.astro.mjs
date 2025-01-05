/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, e as createAstro } from '../chunks/astro/server_Cbs_mLla.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_13XlaZQ_.mjs';
import { S as ScrollFade, $ as $$ContactCTA } from '../chunks/ContactCTA_CaBThM_H.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SkillsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsGrid;
  const skills = {
    "Front-End": [
      { name: "FaHtml5", library: "fa" },
      { name: "FaCss3Alt", library: "fa" },
      { name: "FaJs", library: "fa" },
      { name: "FaReact", library: "fa" },
      { name: "FaAngular", library: "fa" },
      { name: "SiAstro", library: "si" },
      { name: "FaVuejs", library: "fa" }
    ],
    "Back-End": [
      { name: "FaNodeJs", library: "fa" },
      { name: "SiSpringboot", library: "si" },
      { name: "SiExpress", library: "si" },
      { name: "SiPhp", library: "si" },
      { name: "SiMongodb", library: "si" },
      { name: "SiMysql", library: "si" },
      { name: "SiPostgresql", library: "si" }
    ],
    "Dev-Ops": [
      { name: "FaDocker", library: "fa" },
      { name: "SiKubernetes", library: "si" },
      { name: "FaAws", library: "fa" },
      { name: "FaGithub", library: "fa" },
      { name: "FaGitlab", library: "fa" }
    ],
    "UI/UX": [
      { name: "SiFigma", library: "si" },
      { name: "SiTailwindcss", library: "si" },
      { name: "SiBootstrap", library: "si" },
      { name: "SiMaterialUi", library: "si" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<div class="skills-grid" data-astro-cid-blvdc6do> ${Object.entries(skills).map(([category, items]) => renderTemplate`<div class="skill-category" data-astro-cid-blvdc6do> <h3 data-astro-cid-blvdc6do>${category}</h3> <ul data-astro-cid-blvdc6do> ${items.map(({ name, library }) => renderTemplate`<li data-astro-cid-blvdc6do> ${renderComponent($$result, "Icon", $$Icon, { "icon": name, "library": library, "size": "2rem", "data-astro-cid-blvdc6do": true })} </li>`)} </ul> </div>`)} </div> `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/SkillsGrid.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Ceradev", "description": "Learn more about C\xE9sar A. Su\xE1rez Orizondo", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-30 lg:gap-48" data-astro-cid-kh7btl4r> <main class="wrapper stack gap-8 lg:gap-20" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "intro", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <section class="intro" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Hero", $$Hero, { "title": "About Me", "tagline": "Know more about myself, my skills, and my education.", "align": "start", "data-astro-cid-kh7btl4r": true })} </section> ` })} ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:load": true, "className": "about", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <section class="about" data-astro-cid-kh7btl4r> <div class="content stack gap-8 lg:gap-20" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "ScrollFade", ScrollFade, { "client:load": true, "className": "about-section", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate` <div class="about-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Who I Am</h2> <p data-astro-cid-kh7btl4r>
My name is César A. Suárez Orizondo but you can call me <strong data-astro-cid-kh7btl4r>Ceradev</strong>, and I'm a passionate web developer based in Tenerife,
                  Spain. I specialize in building fast, responsive, and
                  accessible websites and web applications, my dream is to be a
                  full-stack developer but can expand to other areas like mobile
                  development or UI/UX.
</p> </div> ` })} ${renderComponent($$result3, "ScrollFade", ScrollFade, { "client:load": true, "className": "about-section", "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate` <div class="about-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>What I Do</h2> <p data-astro-cid-kh7btl4r>
I have experience working with a wide range of technologies,
                  from front-end frameworks like React and Angular to back-end
                  technologies like Node.js and Spring Boot. My goal is to
                  deliver quality solutions that meet client expectations while
                  ensuring optimal performance and design.
</p> </div> ` })} ${renderComponent($$result3, "ScrollFade", ScrollFade, { "client:visible": true, "className": "about-section", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate` <div class="about-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Always Learning</h2> <p data-astro-cid-kh7btl4r>
I'm always eager to learn and grow, staying up-to-date with
                  the latest industry trends and technologies. Let's work
                  together to bring your ideas to life!
</p> </div> ` })} ${renderComponent($$result3, "ScrollFade", ScrollFade, { "client:visible": true, "className": "about-section", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate` <div class="about-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Where to Find Me</h2> <p data-astro-cid-kh7btl4r>
You can find me on GitHub and LinkedIn, where you can see my
                  latest projects and work experience. I am always open to new
                  opportunities and collaborations, so feel free to reach out to
                  me!
</p> </div> ` })} </div> </section> ` })} ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:visible": true, "className": "skills", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <section class="skills with-background" data-astro-cid-kh7btl4r> <header class="section-header stack gap-4" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Technical Skills</h2> <p data-astro-cid-kh7btl4r>A list of technologies and tools I’m proficient in:</p> </header> ${renderComponent($$result3, "SkillsGrid", $$SkillsGrid, { "data-astro-cid-kh7btl4r": true })} </section> ` })} ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:visible": true, "className": "education", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <section class="education" data-astro-cid-kh7btl4r> <header class="section-header stack gap-4" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Education</h2> <p data-astro-cid-kh7btl4r>My academic journey and certifications:</p> </header> <div class="content stack gap-8 lg:gap-20" data-astro-cid-kh7btl4r> <ul data-astro-cid-kh7btl4r> <li class="education-item" data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Bachelor's Degree in Technological Science</strong> <span data-astro-cid-kh7btl4r>I.E.S San Miguel (2020 - 2022)</span> <p data-astro-cid-kh7btl4r>
Graduated with honors, specializing in computer science and
                  software development. Completed a final project on building a
                  web application for managing student records.
</p> </li> <li class="education-item" data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>Graduate Web Application Developer</strong> <span data-astro-cid-kh7btl4r>I.E.S Las Galletas (2022- May 2024)</span> <p data-astro-cid-kh7btl4r>
Currently studying to become a full-stack web developer,
                  focusing on front-end and back-end technologies like PHP,
                  Java, and JavaScript. Learning about web design, databases,
                  and server-side programming. Completed a final project on
                  building a web application for managing student records.
</p> </li> </ul> </div> </section> ` })} </main> ${renderComponent($$result2, "ScrollFade", ScrollFade, { "client:visible": true, "className": "contact", "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ScrollFade", "client:component-export": "default", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} ` })} </div> ` })} `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/about.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
