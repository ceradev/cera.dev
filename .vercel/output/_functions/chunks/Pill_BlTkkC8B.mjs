import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot } from './astro/server_Cbs_mLla.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Pill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/Pill.astro", void 0);

export { $$Pill as $ };
