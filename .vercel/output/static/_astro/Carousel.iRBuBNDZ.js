import{j as o}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.Dy6lLLXr.js";const u=({images:r})=>{const[e,t]=a.useState(0),l=()=>{console.log("goToPrevious"),t(s=>s===0?r.length-1:s-1)},c=()=>{console.log("goToNext"),t(s=>s===r.length-1?0:s+1)};return o.jsxs("div",{className:"carousel",children:[o.jsx("button",{className:"arrow left-arrow",onClick:l,children:"←"}),o.jsx("div",{className:"carousel-images",children:o.jsx("img",{src:r[e],alt:`Slide ${e+1}`})}),o.jsx("button",{className:"arrow right-arrow",onClick:c,children:"→"}),o.jsxs("div",{className:"carousel-indicator",children:[e+1," / ",r.length]})]})};export{u as default};