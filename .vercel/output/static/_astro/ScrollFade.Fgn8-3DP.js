import{j as c}from"./jsx-runtime.D_zvdyIk.js";import{r as t}from"./index.Dy6lLLXr.js";const l=({children:o,className:n})=>{const[r,a]=t.useState(!1),e=t.useRef();return t.useEffect(()=>{const s=new IntersectionObserver(([i])=>a(i.isIntersecting),{threshold:.2});return e.current&&s.observe(e.current),()=>{e.current&&s.unobserve(e.current)}},[]),c.jsx("div",{ref:e,className:n,style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(50px)",transition:"opacity 0.8s ease-out, transform 0.8s ease-out"},children:o})};export{l as default};
