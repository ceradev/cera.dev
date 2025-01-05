import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderSlot, e as createAstro, b as renderComponent } from './astro/server_Cbs_mLla.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { b as $$Icon } from './BaseLayout_13XlaZQ_.mjs';

const ScrollFade = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      },
      children
    }
  );
};

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")} rel="noopener noreferrer" data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:suarezorizondocesararamis@gmail.com", "target": "_blank", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/Usuario/Desktop/Files/Work/Github proyects/portfolio-astro-react/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $, ScrollFade as S, $$CallToAction as a };
