var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/yonne/Dev/bolt-ux/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react = require("react");
var import_react_router_dom = require("react-router-dom");
var import_remix8 = __toESM(require_remix());
var import_react_datocms = require("react-datocms");

// app/lib/datocms.ts
init_react();
var import_tiny_json_http = __toESM(require("tiny-json-http"));

// app/sessions.ts
init_react();
var import_remix2 = __toESM(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    maxAge: 604800,
    path: "/"
  }
});

// app/lib/datocms.ts
async function load({ query, variables, preview }) {
  let endpoint = "https://graphql.datocms.com";
  if (process.env.DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.DATOCMS_ENVIRONMENT}`;
  }
  if (preview) {
    endpoint += `/preview`;
  }
  const { body } = await import_tiny_json_http.default.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`
    },
    data: {
      query,
      variables
    }
  });
  if (body.errors) {
    console.error("Ouch! The query has some errors!", body.errors);
    throw body.errors;
  }
  return body.data;
}
async function datoQuerySubscription(_a) {
  var _b = _a, { request } = _b, gqlRequest = __objRest(_b, ["request"]);
  const session = await getSession(request.headers.get("Cookie"));
  const previewEnabled = session.get("preview");
  return {
    datoQuerySubscription: previewEnabled ? __spreadProps(__spreadValues({}, gqlRequest), {
      preview: true,
      initialData: await load(__spreadProps(__spreadValues({}, gqlRequest), { preview: true })),
      token: process.env.DATOCMS_READONLY_TOKEN,
      environment: process.env.DATOCMS_ENVIRONMENT || null
    }) : {
      enabled: false,
      initialData: await load(gqlRequest)
    }
  };
}

// app/lib/fragments.ts
init_react();
var responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;
var metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;
var coverImage = `coverImage {
  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
    ...responsiveImageFragment
  }
}`;
var author = `author {
  name
  picture {
    url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
  }
}`;

// app/lib/config.ts
init_react();

// app/components/Icon/Settings.tsx
init_react();
function Settings() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 416C0 407.2 7.164 400 16 400H81.6C89.01 363.5 121.3 336 160 336C198.7 336 230.1 363.5 238.4 400H496C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H238.4C230.1 468.5 198.7 496 160 496C121.3 496 89.01 468.5 81.6 432H16C7.164 432 0 424.8 0 416V416zM208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416zM352 176C390.7 176 422.1 203.5 430.4 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H430.4C422.1 308.5 390.7 336 352 336C313.3 336 281 308.5 273.6 272H16C7.164 272 0 264.8 0 256C0 247.2 7.164 240 16 240H273.6C281 203.5 313.3 176 352 176zM400 256C400 229.5 378.5 208 352 208C325.5 208 304 229.5 304 256C304 282.5 325.5 304 352 304C378.5 304 400 282.5 400 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H270.4C262.1 148.5 230.7 176 192 176C153.3 176 121 148.5 113.6 112H16C7.164 112 0 104.8 0 96C0 87.16 7.164 80 16 80H113.6C121 43.48 153.3 16 192 16C230.7 16 262.1 43.48 270.4 80H496zM144 96C144 122.5 165.5 144 192 144C218.5 144 240 122.5 240 96C240 69.49 218.5 48 192 48C165.5 48 144 69.49 144 96z"
  }));
}

// app/components/Icon/Home.tsx
init_react();
function Home() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7zM240 320V480H336V320H240z"
  }));
}

// app/components/Icon/ArrowLeft.tsx
init_react();
function ArrowLeft() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z"
  }));
}

// app/components/Icon/Logo.tsx
init_react();
function Logo({ className = "w-16 h-11" }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className,
    viewBox: "0 0 60 44"
  }, /* @__PURE__ */ React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-18.000000, -26.000000)",
    fillRule: "nonzero"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(18.000000, 26.000000)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0.936632835,31.0042194 C0.312210945,31.0042194 0,30.6911558 0,30.0650285 L0,15.9771655 C0,15.3510383 0.312210945,15.0379747 0.936632835,15.0379747 L9.36632835,15.0379747 C11.1147096,15.0379747 12.4884378,15.4723505 13.4875128,16.341102 C14.4865879,17.2098536 14.9861254,18.4190618 14.9861254,19.9687267 C14.9861254,20.3757094 14.9275858,20.7435592 14.8105067,21.072276 C14.6934276,21.4009928 14.5724459,21.6749235 14.4475615,21.894068 C14.291456,22.1601721 14.11974,22.3949698 13.9324134,22.5984612 C14.2290138,22.7706461 14.5021984,23.0132705 14.7519672,23.3263341 C14.9705148,23.5924382 15.1656467,23.948548 15.3373627,24.3946637 C15.5090787,24.8407793 15.5949367,25.4003806 15.5949367,26.0734674 C15.5949367,26.7778605 15.4973708,27.4313808 15.3022389,28.0340283 C15.1071071,28.6366758 14.7714803,29.157144 14.2953586,29.5954331 C13.819237,30.0337222 13.1831072,30.3780922 12.3869692,30.6285431 C11.5908313,30.878994 10.583951,31.0042194 9.36632835,31.0042194 L0.936632835,31.0042194 Z M8.31261641,21.1427153 C8.53116408,21.1427153 8.72239328,21.0605361 8.88630403,20.8961777 C9.05021477,20.7318193 9.13217014,20.5400678 9.13217014,20.3209233 C9.13217014,20.1017788 9.05021477,19.9100273 8.88630403,19.7456689 C8.72239328,19.5813105 8.53116408,19.4991313 8.31261641,19.4991313 L6.08811343,19.4991313 C5.93200796,19.4991313 5.85395522,19.5773972 5.85395522,19.733929 L5.85395522,20.9079176 C5.85395522,21.0644494 5.93200796,21.1427153 6.08811343,21.1427153 L8.31261641,21.1427153 Z M8.54677462,26.5430628 C8.76532228,26.5430628 8.95655149,26.4608836 9.12046223,26.2965252 C9.28437298,26.1321668 9.36632835,25.9404153 9.36632835,25.7212708 C9.36632835,25.5021263 9.28437298,25.3103748 9.12046223,25.1460164 C8.95655149,24.981658 8.76532228,24.8994788 8.54677462,24.8994788 L6.08811343,24.8994788 C5.93200796,24.8994788 5.85395522,24.9777447 5.85395522,25.1342765 L5.85395522,26.3082651 C5.85395522,26.4647969 5.93200796,26.5430628 6.08811343,26.5430628 L8.54677462,26.5430628 Z",
    id: "logo-b",
    className: "bx-logo-primary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.3375527,23.021097 C16.3375527,21.8698348 16.5532441,20.7846923 16.9846268,19.7656696 C17.4160095,18.7466469 18.0081802,17.8598638 18.7611391,17.1053202 C19.514098,16.3507767 20.404315,15.7556986 21.4317901,15.3200858 C22.4592653,14.884473 23.5769386,14.6666667 24.7848101,14.6666667 C25.976995,14.6666667 27.0907467,14.884473 28.1260651,15.3200858 C29.1613836,15.7556986 30.0555223,16.3507767 30.8084811,17.1053202 C31.56144,17.8598638 32.1536108,18.7466469 32.5849935,19.7656696 C33.0163762,20.7846923 33.2320675,21.8698348 33.2320675,23.021097 C33.2320675,24.1723593 33.0163762,25.2575018 32.5849935,26.2765245 C32.1536108,27.2955472 31.56144,28.1823303 30.8084811,28.9368739 C30.0555223,29.6914174 29.1613836,30.2864955 28.1260651,30.7221083 C27.0907467,31.157721 25.976995,31.3755274 24.7848101,31.3755274 C23.5769386,31.3755274 22.4592653,31.157721 21.4317901,30.7221083 C20.404315,30.2864955 19.514098,29.6914174 18.7611391,28.9368739 C18.0081802,28.1823303 17.4160095,27.2955472 16.9846268,26.2765245 C16.5532441,25.2575018 16.3375527,24.1723593 16.3375527,23.021097 Z M22.4318136,23.021097 C22.4318136,23.7523042 22.6318183,24.3551611 23.0318277,24.8296679 C23.4318371,25.3041746 24.0161646,25.541428 24.7848101,25.541428 C25.537769,25.541428 26.1142531,25.3041746 26.5142625,24.8296679 C26.9142719,24.3551611 27.1142766,23.7523042 27.1142766,23.021097 C27.1142766,22.2898899 26.9142719,21.687033 26.5142625,21.2125262 C26.1142531,20.7380195 25.537769,20.5007661 24.7848101,20.5007661 C24.0161646,20.5007661 23.4318371,20.7380195 23.0318277,21.2125262 C22.6318183,21.687033 22.4318136,22.2898899 22.4318136,23.021097 Z",
    id: "logo-o",
    className: "bx-logo-primary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M44.556962,25.6038719 C45.1758087,25.6038719 45.4852321,25.9169356 45.4852321,26.5430628 L45.4852321,30.0650285 C45.4852321,30.6911558 45.1758087,31.0042194 44.556962,31.0042194 L35.2742616,31.0042194 C34.6554149,31.0042194 34.3459916,30.6911558 34.3459916,30.0650285 L34.3459916,15.9771655 C34.3459916,15.3510383 34.6554149,15.0379747 35.2742616,15.0379747 L39.2194093,15.0379747 C39.838256,15.0379747 40.1476793,15.3510383 40.1476793,15.9771655 L40.1476793,24.8994788 C40.1476793,25.1968892 40.190225,25.3886407 40.2753165,25.4747332 C40.3604079,25.5608257 40.5499297,25.6038719 40.8438819,25.6038719 L44.556962,25.6038719 Z",
    id: "logo-l",
    className: "bx-logo-primary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M47.348174,20.4383222 C46.7250594,20.4383222 46.4135021,20.1252585 46.4135021,19.4991313 L46.4135021,15.9771655 C46.4135021,15.3510383 46.7250594,15.0379747 47.348174,15.0379747 L59.0315728,15.0379747 C59.6546874,15.0379747 59.9662447,15.3510383 59.9662447,15.9771655 L59.9662447,19.4991313 C59.9662447,20.1252585 59.6546874,20.4383222 59.0315728,20.4383222 L56.811727,20.4383222 C56.5157476,20.4383222 56.3249188,20.4813684 56.2392405,20.5674609 C56.1535622,20.6535534 56.1107231,20.8453049 56.1107231,21.1427153 L56.1107231,30.0650285 C56.1107231,30.6911558 55.7991658,31.0042194 55.1760512,31.0042194 L51.2036956,31.0042194 C50.580581,31.0042194 50.2690237,30.6911558 50.2690237,30.0650285 L50.2690237,21.1427153 C50.2690237,20.8453049 50.2261846,20.6535534 50.1405063,20.5674609 C50.0548281,20.4813684 49.8639992,20.4383222 49.5680198,20.4383222 L47.348174,20.4383222 Z",
    id: "logo-t",
    className: "bx-logo-primary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M23.8351185,39.1485256 C23.8351185,39.4113138 23.8729633,39.6235658 23.948653,39.7852816 C24.0243427,39.9469974 24.1202164,40.0708111 24.2362739,40.1567226 C24.3523315,40.2426342 24.473435,40.298224 24.5995846,40.3234921 C24.7257341,40.3487602 24.8443146,40.3613942 24.9553262,40.3613942 C25.0663378,40.3613942 25.1899643,40.3487602 25.3262058,40.3234921 C25.4624473,40.298224 25.5885968,40.2426342 25.7046543,40.1567226 C25.8207119,40.0708111 25.9165855,39.9469974 25.9922752,39.7852816 C26.0679649,39.6235658 26.1058098,39.4113138 26.1058098,39.1485256 L26.1058098,34.0241558 C26.1058098,33.6198663 26.307649,33.4177215 26.7113275,33.4177215 L29.2847777,33.4177215 C29.6884561,33.4177215 29.8902954,33.6198663 29.8902954,34.0241558 L29.8902954,39.1788473 C29.8902954,39.8964613 29.7944217,40.5509049 29.6026745,41.1421784 C29.4109272,41.7334518 29.1132143,42.2413405 28.7095359,42.6658445 C28.3058574,43.0903486 27.7936904,43.4188338 27.1730347,43.6513003 C26.5523791,43.8837668 25.8181889,44 24.9704641,44 C24.1227394,44 23.3885492,43.8837668 22.7678935,43.6513003 C22.1472379,43.4188338 21.6350709,43.0903486 21.2313924,42.6658445 C20.8277139,42.2413405 20.5300011,41.7334518 20.3382538,41.1421784 C20.1465065,40.5509049 20.0506329,39.8964613 20.0506329,39.1788473 L20.0506329,34.0241558 C20.0506329,33.6198663 20.2524721,33.4177215 20.6561506,33.4177215 L23.2296008,33.4177215 C23.6332792,33.4177215 23.8351185,33.6198663 23.8351185,34.0241558 L23.8351185,39.1485256 Z",
    id: "logo-u",
    className: "bx-logo-secondary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M31.2471772,34.3937702 C31.1782052,34.2936626 31.1437192,34.1685282 31.1437192,34.0183668 C31.1437192,33.6179366 31.3407821,33.4177215 31.734908,33.4177215 L34.9716663,33.4177215 C35.1588761,33.4177215 35.3017467,33.4752834 35.4002782,33.590407 C35.4988096,33.7055307 35.5924145,33.848184 35.6810928,34.0183668 L36.2722815,35.1145446 L36.9669283,34.0183668 C37.0753129,33.848184 37.1787709,33.7055307 37.2773024,33.590407 C37.3758339,33.4752834 37.4989982,33.4177215 37.6467954,33.4177215 L40.6322985,33.4177215 C41.0264243,33.4177215 41.2234873,33.6179366 41.2234873,34.0183668 C41.2234873,34.1685282 41.1890012,34.2936626 41.1200292,34.3937702 L38.6961554,38.1177712 L41.3121656,42.6676595 C41.3712844,42.7777778 41.4008439,42.8979068 41.4008439,43.0280467 C41.4008439,43.4284769 41.203781,43.628692 40.8096551,43.628692 L37.7945926,43.628692 C37.6270891,43.628692 37.489145,43.5686275 37.3807604,43.4484984 C37.2723758,43.3283693 37.1639912,43.1882187 37.0556066,43.0280467 L36.0801452,41.3312236 L35.1638027,43.0280467 C35.0554181,43.1882187 34.9544233,43.3283693 34.8608184,43.4484984 C34.7672135,43.5686275 34.6218796,43.628692 34.4248167,43.628692 L31.4097541,43.628692 C31.0156283,43.628692 30.8185654,43.4284769 30.8185654,43.0280467 C30.8185654,42.9079176 30.8431983,42.7977993 30.892464,42.6976917 L33.6562714,38.102755 L31.2471772,34.3937702 Z",
    id: "logo-x",
    className: "bx-logo-secondary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M35.5564902,5.38860759 C35.4256592,5.14225343 35.1639971,4.98945148 34.8799981,4.98945148 L29.8828915,4.98945148 L31.5051961,1.02595596 C31.5999369,0.795973431 31.5709945,0.533871308 31.4284206,0.328056435 C31.2858467,0.122241561 31.0220787,0 30.7955176,0 L25.179357,0 C24.7954796,0 24.471274,0.277725343 24.4205371,0.649876055 L23.399417,8.13405327 C23.3694886,8.347976 23.4363049,8.5631461 23.5818784,8.72530327 C23.7274518,8.88746044 23.9377387,8.98101266 24.1582369,8.98101266 L28.8266704,8.98101266 L27.4934704,15.033841 C27.416695,15.3837263 27.6041662,15.7373536 27.9402105,15.8786175 C28.0384933,15.9475343 28.1406053,15.9662447 28.2427173,15.9662447 C28.4890306,15.9662447 28.7283876,15.8493045 28.8748545,15.640683 L35.5121353,6.16072521 C35.6713662,5.93121044 35.6905122,5.63496176 35.5564902,5.38860759 Z",
    id: "logo-icon",
    className: "bx-logo-primary"
  })))));
}

// app/components/Icon/Homepage.tsx
init_react();
function homepage() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M640 464v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h608a16 16 0 0 1 16 16z",
    className: "bx-icon-secondary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M40.68 448l239.79-330.25-53.41-73.55a16 16 0 0 1 3.54-22.35l25.88-18.8a16 16 0 0 1 22.35 3.55L320 63.3l41.16-56.69a16 16 0 0 1 22.35-3.55l25.9 18.79A16 16 0 0 1 413 44.2l-53.41 73.55L599.32 448h-163L320 288 203.64 448z",
    className: "bx-icon-primary"
  }));
}

// app/components/Icon/Singlepage.tsx
init_react();
function singlepage() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M352 256a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm-194.48 16h37L176 218.78zM464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM250.58 352h-16.94a16 16 0 0 1-15.12-10.75L211.15 320h-70.29l-7.38 21.25A16 16 0 0 1 118.36 352h-16.94a16 16 0 0 1-15.12-21.25L140 176.12A24 24 0 0 1 162.67 160h26.66A24 24 0 0 1 212 176.13l53.69 154.62A16 16 0 0 1 250.58 352zM424 336a16 16 0 0 1-16 16h-16a15.74 15.74 0 0 1-12-5.68A72 72 0 1 1 352 208a71.05 71.05 0 0 1 24 4.42V176a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z",
    className: "bx-icon-secondary"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M212 176.13A24 24 0 0 0 189.33 160h-26.66A24 24 0 0 0 140 176.12L86.3 330.75A16 16 0 0 0 101.42 352h16.94a16 16 0 0 0 15.12-10.75l7.38-21.25h70.29l7.37 21.25A16 16 0 0 0 233.64 352h16.94a16 16 0 0 0 15.11-21.25zM157.52 272L176 218.78 194.48 272zM408 160h-16a16 16 0 0 0-16 16v36.42a71.05 71.05 0 0 0-24-4.42 72 72 0 1 0 28 138.32 15.74 15.74 0 0 0 12 5.68h16a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16zm-56 144a24 24 0 1 1 24-24 24 24 0 0 1-24 24z",
    className: "bx-icon-primary"
  }));
}

// app/components/Icon/ArrowRight.tsx
init_react();
function ArrowRight() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
  }));
}

// app/components/Icon/Publishing.tsx
init_react();
function publishing() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M256 0v128h128L256 0zM154.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C129.8 386.1 134.9 388 140 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L120.3 320l33.86-33.84C161.1 278.3 161.1 265.7 154.1 257.8zM258.1 257.8c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31L263.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C233.8 386.1 238.9 388 244 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31L258.1 257.8z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 334.2l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0l48 48C313.1 313.7 313.1 326.3 306.1 334.2z"
  }));
}

// app/components/Icon/Appdesign.tsx
init_react();
function appdesign() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M412.7 256.1C387.1 280.3 357.7 298.8 324.1 309.5L256 192H255.1L98.65 463.7C93.95 471.8 86.97 478.4 78.58 482.6L23.16 510.3C18.2 512.8 12.31 512.5 7.588 509.6C2.871 506.7 0 501.5 0 496V440.6C0 432.2 2.228 423.9 6.46 416.5L168.8 136.2C163.1 123.9 160 110.3 160 96C160 42.98 202.1 0 256 0C309 0 352 42.98 352 96C352 110.3 348.9 123.9 343.2 136.2L412.7 256.1zM255.1 64C238.3 64 223.1 78.33 223.1 96C223.1 113.7 238.3 128 255.1 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 255.1 64zM356.7 365.9C389.6 353.6 419.6 335.5 445.5 312.9L505.5 416.5C509.8 423.9 512 432.2 512 440.6V496C512 501.5 509.1 506.7 504.4 509.6C499.7 512.5 493.8 512.8 488.8 510.3L433.4 482.6C425 478.4 418 471.8 413.3 463.7L356.7 365.9z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M66.49 312.9C53.66 301.6 41.84 289.3 31.18 276C20.13 262.2 22.34 242.1 36.13 231C49.92 219.1 70.06 222.2 81.12 235.1C86.79 243.1 92.87 249.8 99.34 256.1L66.49 312.9zM155.3 365.9L187.9 309.5C209.4 316.3 232.3 320 255.1 320C326.7 320 389.8 287.3 430.9 235.1C441.9 222.2 462.1 219.1 475.9 231C489.7 242.1 491.9 262.2 480.8 276C428.1 341.8 346.1 384 255.1 384C220.6 384 186.6 377.6 155.3 365.9H155.3z"
  }));
}

// app/components/Icon/Consulting.tsx
init_react();
function consulting() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M288 96C288 113.7 273.7 128 256 128C238.3 128 224 113.7 224 96C224 78.33 238.3 64 256 64C273.7 64 288 78.33 288 96zM96 160C96 142.3 110.3 128 128 128C145.7 128 160 142.3 160 160C160 177.7 145.7 192 128 192C110.3 192 96 177.7 96 160zM64 288C64 270.3 78.33 256 96 256C113.7 256 128 270.3 128 288C128 305.7 113.7 320 96 320C78.33 320 64 305.7 64 288zM352 160C352 142.3 366.3 128 384 128C401.7 128 416 142.3 416 160C416 177.7 401.7 192 384 192C366.3 192 352 177.7 352 160z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"
  }));
}

// app/components/Icon/News.tsx
init_react();
function news() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M0 128v304C0 458.5 21.49 480 48 480S96 458.5 96 432V96H32C14.33 96 0 110.3 0 128zM272 288h-96C167.2 288 160 295.2 160 304C160 312.8 167.2 320 176 320h96c8.836 0 16-7.164 16-16C288 295.2 280.8 288 272 288zM336 320h96c8.836 0 16-7.164 16-16C448 295.2 440.8 288 432 288h-96C327.2 288 320 295.2 320 304C320 312.8 327.2 320 336 320zM272 384h-96C167.2 384 160 391.2 160 400C160 408.8 167.2 416 176 416h96c8.836 0 16-7.164 16-16C288 391.2 280.8 384 272 384zM432 384h-96c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16C448 391.2 440.8 384 432 384z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M480 32H128C110.3 32 96 46.33 96 64v368C96 458.5 74.51 480 48 480H448c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"
  }));
}

// app/components/Icon/Notice.tsx
init_react();
function notice() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M192 224c13.25 0 24-10.75 24-24v-112C216 74.75 205.3 64 192 64S168 74.75 168 88v112C168 213.3 178.8 224 192 224zM192 320c17.67 0 32-14.33 32-32s-14.33-32-32-32S160 270.3 160 288S174.3 320 192 320zM112.3 384l-.0906 70.35c0 6.297 1.886 12.43 5.355 17.68l17.08 25.69C139.8 505.6 151.8 512 161.2 512h61.67c9.438 0 21.36-6.395 26.61-14.27l17.34-25.7c2.938-4.438 5.097-12.35 5.097-17.68l.2156-70.35L112.3 384z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M191.5 .0127C89.47 .2627 16 82.1 16 175.1c0 44.38 16.52 84.89 43.52 115.8c16.62 18.88 42.36 58.23 52.24 91.48c0 .25 .1146 .5104 .1146 .7604l160.3 .0006c0-.25 .0833-.5111 .0833-.7611c9.875-33.25 35.61-72.61 52.24-91.48C351.5 260.9 368 220.4 368 175.1C368 78.62 288.8-.2373 191.5 .0127zM168 88C168 74.75 178.8 64 192 64s24 10.75 24 24v112C216 213.3 205.3 224 192 224S168 213.3 168 200V88zM192 320c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32S209.7 320 192 320z"
  }));
}

// app/components/Icon/Banner.tsx
init_react();
function Banner() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M298.9 309.6l-45.64-6.688l-20.36-41.4c-3.625-7.375-14.16-7.5-17.91 0L194.7 302.9L149 309.6c-8.25 1.125-11.37 11.22-5.491 17.1l32.94 32.1l-7.772 45.55c-1.5 8.25 7.264 14.37 14.51 10.49l40.77-21.53l40.77 21.53c7.375 3.875 16.01-2.242 14.51-10.49l-7.773-45.55l32.1-32.1C310.4 320.8 307.2 310.7 298.9 309.6zM424 143.1L127.4 143.1c6.375-30.88 30.75-55.25 62.75-61.1C198.8 90.62 210.8 95.1 224 95.1l62.2 .0001c23.21 0 44.5-15.69 48.89-38.48C340.1 26.85 317.6 0 288 0h-64c-22 0-40.5 15-46.13 35.25c-52 11.62-91.75 55-98.5 108.8L23.1 143.1C10.75 143.1 0 154.7 0 167.1c0 13.25 10.75 24 23.1 24h400c13.25 0 24-10.75 24-24C448 154.7 437.3 143.1 424 143.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M48 191.1l29.12 291.2c1.636 16.36 15.24 28.82 31.68 28.82h230.4c16.44 0 30.05-12.46 31.68-28.82L400 191.1H48zM304.5 326.7l-32.1 32.1l7.773 45.55c1.5 8.25-7.139 14.37-14.51 10.49L223.1 393.3l-40.77 21.53c-7.25 3.875-16.01-2.242-14.51-10.49l7.772-45.55l-32.94-32.1C137.7 320.8 140.8 310.7 149 309.6L194.7 302.9l20.36-41.4c3.75-7.5 14.29-7.375 17.91 0l20.36 41.4l45.64 6.688C307.2 310.7 310.4 320.8 304.5 326.7z"
  }));
}

// app/components/Icon/Privacy.tsx
init_react();
function Privacy() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M622.3 271.1l-115.1-45.01c-4.125-1.629-12.62-3.754-22.25 0L369.8 271.1C359 275.2 352 285.1 352 295.1c0 111.6 68.75 188.8 132.9 213.9c9.625 3.75 18 1.625 22.25 0C558.4 489.9 640 420.5 640 295.1C640 285.1 633 275.2 622.3 271.1zM496 462.4V273.2l95.5 37.38C585.9 397.8 530.6 446 496 462.4z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM320.6 310.3C305.9 306.3 290.6 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512H413.3c3.143 0 5.967-1.004 8.861-1.789C369.7 469.8 324.1 400.3 320.6 310.3z"
  }));
}

// app/components/Icon/NotFound.tsx
init_react();
function NotFound() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M116 205.1C116 196.2 125.6 190.4 133.5 194.7L223.4 242.6C234.1 248.3 234.1 263.7 223.4 269.4L133.5 317.3C125.6 321.6 116 315.8 116 306.9C116 304.1 116.1 301.4 118.8 299.2L154.8 256L118.8 212.8C116.1 210.6 116 207.9 116 205.1V205.1zM393.2 212.8L357.2 256L393.2 299.2C395 301.4 396 304.1 396 306.9C396 315.8 386.4 321.6 378.5 317.3L288.6 269.4C277.9 263.7 277.9 248.3 288.6 242.6L378.5 194.7C386.4 190.4 396 196.2 396 205.1C396 207.9 395 210.6 393.2 212.8z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM118.8 212.8L154.8 256L118.8 299.2C116.1 301.4 116 304.1 116 306.9C116 315.8 125.6 321.6 133.5 317.3L223.4 269.4C234.1 263.7 234.1 248.3 223.4 242.6L133.5 194.7C125.6 190.4 116 196.2 116 205.1C116 207.9 116.1 210.6 118.8 212.8V212.8zM288.6 242.6C277.9 248.3 277.9 263.7 288.6 269.4L378.5 317.3C386.4 321.6 396 315.8 396 306.9C396 304.1 395 301.4 393.2 299.2L357.2 256L393.2 212.8C395 210.6 396 207.9 396 205.1C396 196.2 386.4 190.4 378.5 194.7L288.6 242.6zM216.9 354.7C211.5 351.1 204.5 351.1 199.1 354.7L158.9 381.5L135.2 369.7C127.3 365.7 117.6 368.9 113.7 376.8C109.7 384.7 112.9 394.4 120.8 398.3L152.8 414.3C157.1 416.9 164.1 416.5 168.9 413.3L208 387.2L247.1 413.3C252.5 416.9 259.5 416.9 264.9 413.3L304 387.2L343.1 413.3C347.9 416.5 354 416.9 359.2 414.3L391.2 398.3C399.1 394.4 402.3 384.7 398.3 376.8C394.4 368.9 384.7 365.7 376.8 369.7L353.1 381.5L312.9 354.7C307.5 351.1 300.5 351.1 295.1 354.7L256 380.8L216.9 354.7z"
  }));
}

// app/components/Icon/Youtube.tsx
init_react();
function Youtube() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  }));
}

// app/components/Icon/Twitter.tsx
init_react();
function Twitter() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  }));
}

// app/components/Icon/Instagram.tsx
init_react();
function Instagram() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  }));
}

// app/lib/config.ts
var nav = [
  {
    title: "\uBE14\uB85C\uADF8",
    display: true,
    children: [
      {
        pathname: "/notice",
        title: "\uACF5\uC9C0\uC0AC\uD56D",
        id: "116676845",
        display: true,
        desc: "\uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        Icon: notice
      },
      {
        pathname: "/news",
        title: "\uC0C8\uC18C\uC2DD",
        id: "116679079",
        display: true,
        desc: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD",
        Icon: news
      }
    ]
  },
  {
    title: "\uC11C\uBE44\uC2A4",
    display: true,
    children: [
      {
        pathname: "/service/homaepage",
        title: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
        display: true,
        desc: "\uD64D\uBCF4\uB97C \uC704\uD55C \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uCD95",
        Icon: homepage
      },
      {
        pathname: "/service/singlepage",
        title: "\uC2F1\uAE00 \uD398\uC774\uC9C0 \uC81C\uC791",
        display: true,
        desc: "\uC774\uBCA4\uD2B8, \uB79C\uB529 \uB2E8\uC77C \uD398\uC774\uC9C0 \uAD6C\uCD95",
        Icon: singlepage
      },
      {
        pathname: "/service/publishing",
        title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
        display: true,
        desc: "\uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
        Icon: publishing
      },
      {
        pathname: "/service/appdesign",
        title: "\uC571 \uB514\uC790\uC778",
        display: true,
        desc: "\uBAA8\uBC14\uC77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778",
        Icon: appdesign
      },
      {
        pathname: "/service/consulting",
        title: "\uB514\uC790\uC778 \uCEE8\uC124\uD305",
        display: true,
        desc: "\uB85C\uACE0 \uBA85\uD568 \uAC04\uD310 \uBA54\uB274\uD310 \uD15C\uD50C\uB9BF \uCEE8\uC124\uD305",
        Icon: consulting
      }
    ]
  },
  {
    title: "\uAE30\uD0C0",
    display: false,
    children: [
      {
        pathname: "/privacy",
        title: "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uC815\uCC45",
        display: true,
        desc: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC744 \uC218\uB9BD\xB7\uACF5\uAC1C\uD569\uB2C8\uB2E4.",
        Icon: Privacy
      }
    ]
  }
];
var exceptRoute = ["posts"];
function useNav(pathname) {
  const matchedRoute = nav.reduce((acc, cur) => acc.concat(cur.children), []).find((route) => route.pathname === pathname);
  return matchedRoute || nav[0].children[0];
}
function usePrevRoute(pathname) {
  if (!pathname)
    return "/";
  const paths = pathname.split("/");
  paths.pop();
  const prevRoute = paths.filter((p) => !exceptRoute.includes(p)).join("/");
  return !prevRoute || prevRoute === "" ? "/" : prevRoute;
}
var heroString = [
  ["\uD648\uD398\uC774\uC9C0 \uC81C\uC791", "\uBD80\uD130"],
  ["\uB514\uC790\uC778 \uCEE8\uC124\uD305", "\uAE4C\uC9C0"]
];

// app/lib/ga.ts
init_react();
var import_react_ga = __toESM(require("react-ga"));
var GA_TRACKING_ID = "G-NTZDCTHDX5";
var GAService = class {
  constructor() {
    this.env = "development";
    if (this.isProduction) {
      import_react_ga.default.initialize(GA_TRACKING_ID);
    }
  }
  get isProduction() {
    return this.env === "production";
  }
  trackPageView({ path }) {
    const decodedPath = decodeURIComponent(path);
    if (!this.isProduction) {
      console.log(`Page Viewed: ${decodedPath}`);
      return;
    }
    import_react_ga.default.pageview(decodedPath);
  }
  trackEvent(params) {
    if (!this.isProduction) {
      console.log(params);
      return;
    }
    import_react_ga.default.event(params);
  }
  trackErrorEvent(params) {
    this.trackEvent(__spreadValues({ category: "Error" }, params));
  }
};
var GA = new GAService();

// app/components/Layout/index.tsx
init_react();

// app/components/Header/index.tsx
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/Button/index.tsx
init_react();
var import_remix3 = __toESM(require_remix());
var sizes = {
  minWidth: {
    small: "min-w-[24px]",
    default: "min-w-[32px]",
    large: "min-w-[40px]"
  },
  height: {
    small: "h-6",
    default: "h-8",
    large: "h-10"
  },
  iconSize: {
    small: "w-3 h-3",
    default: "w-4 h-4",
    large: "w-6 h-6"
  },
  fontSize: {
    small: "text-xs",
    default: "text-sm",
    large: "text-base"
  },
  gap: {
    small: "gap-x-1",
    default: "gap-x-2",
    large: "gap-x-3"
  }
};
function Button({ type = "button", size = "default", href, onClick, icon, children }) {
  return href ? /* @__PURE__ */ React.createElement(import_remix3.Link, {
    key: href,
    to: href
  }, /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-icon ${sizes.iconSize[size]}`
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-text"
  }, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }))) : onClick ? /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}}`,
    onClick
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-icon ${sizes.iconSize[size]}`
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-text"
  }, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  })) : /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-icon ${sizes.iconSize[size]}`
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-text"
  }, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }));
}
function ButtonGroup({ children, className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `bx-button-group ${className}`
  }, children, /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }));
}

// app/components/Header/index.tsx
function Header({
  title,
  Icon,
  desc,
  prevRoute,
  cover,
  date
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-home"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Home, null))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-logo"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, {
    className: "w-16 h-10"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-settings"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/settings"
  }, /* @__PURE__ */ React.createElement(Settings, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-section"
  }, cover && /* @__PURE__ */ React.createElement("div", {
    className: "bx-cover"
  }, cover), prevRoute && prevRoute !== "/" && /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-history-back"
  }, /* @__PURE__ */ React.createElement(Button, {
    href: prevRoute,
    icon: /* @__PURE__ */ React.createElement(ArrowLeft, null)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-meta"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-title"
  }, /* @__PURE__ */ React.createElement("span", null, title)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-desc"
  }, desc), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-desc"
  }, date)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-icon"
  }, Icon && typeof Icon === "function" ? /* @__PURE__ */ React.createElement(Icon, null) : Icon))));
}

// app/components/Hero/index.tsx
init_react();
var import_remix5 = __toESM(require_remix());
function Hero({ heroString: heroString2 = [["", ""]], desc, links: links2 }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero-logo"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, heroString2.map((heading) => /* @__PURE__ */ React.createElement("div", {
    key: heading[0],
    className: "inline-flex gap-x-0.5 text-2xl leading-tight text-slate-700 dark:text-slate-200 even:ml-5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-black"
  }, heading[0]), /* @__PURE__ */ React.createElement("span", {
    className: "font-thin"
  }, heading[1])))), desc && /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex max-w-[200px] text-xs mt-3 text-center"
  }, desc), links2 && /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero-links"
  }, /* @__PURE__ */ React.createElement(ButtonGroup, {
    className: "flex"
  }, links2.map((link) => link.url ? /* @__PURE__ */ React.createElement(Button, {
    key: link.url,
    href: link.url,
    size: "large"
  }, link.label) : /* @__PURE__ */ React.createElement(Button, {
    key: link.label,
    onClick: link.handler,
    size: "large"
  }, link.label)))));
}

// app/components/Nav/index.tsx
init_react();
var import_remix6 = __toESM(require_remix());
function Nav({ nav: nav2 }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-nav"
  }, nav2 ? nav2.map((navItem) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: navItem.title
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "bx-nav-category"
    }, navItem.title), (navItem == null ? void 0 : navItem.children) && /* @__PURE__ */ React.createElement("ul", {
      className: "bx-nav-children"
    }, navItem.children.map((navSubItem) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: navSubItem.title
      }, navSubItem.pathname ? /* @__PURE__ */ React.createElement(import_remix6.Link, {
        className: "bx-nav-item",
        to: navSubItem.pathname
      }, (navSubItem == null ? void 0 : navSubItem.Icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, typeof navSubItem.Icon === "function" && /* @__PURE__ */ React.createElement(navSubItem.Icon, null)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-label"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-name"
      }, navSubItem.title), (navSubItem == null ? void 0 : navSubItem.desc) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-desc"
      }, navSubItem.desc)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-arrow"
      }, /* @__PURE__ */ React.createElement(ArrowRight, null))) : /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-item"
      }, (navSubItem == null ? void 0 : navSubItem.Icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, typeof navSubItem.Icon === "function" && /* @__PURE__ */ React.createElement(navSubItem.Icon, null)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-label"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-name"
      }, navSubItem.title), (navSubItem == null ? void 0 : navSubItem.desc) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-desc"
      }, navSubItem.desc))));
    })));
  }) : /* @__PURE__ */ React.createElement("li", null, "\uB4F1\uB85D\uB41C \uB77C\uC6B0\uD2B8 \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
}

// app/components/Footer/index.tsx
init_react();
var import_remix7 = __toESM(require_remix());
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-logo"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-contact"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "tel:15889999"
  }, "1588-9999"), /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-contact-desc"
  }, "\uD3C9\uC77C 10:00 - 18:00", /* @__PURE__ */ React.createElement("br", null), "(\uC810\uC2EC\uC2DC\uAC04 13:00 - 14:00 \uC81C\uC678 \xB7 \uC8FC\uB9D0/\uACF5\uD734\uC77C \uC81C\uC678)")), /* @__PURE__ */ React.createElement("ul", {
    className: "bx-footer-sns"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/deerpark8210",
    target: "_blank",
    rel: "noreferrer",
    title: "YouTube"
  }, /* @__PURE__ */ React.createElement(Youtube, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.twitter.com/deerpark7",
    target: "_blank",
    rel: "noreferrer",
    title: "Twitter"
  }, /* @__PURE__ */ React.createElement(Twitter, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/deerpark",
    target: "_blank",
    rel: "noreferrer",
    title: "Instagram"
  }, /* @__PURE__ */ React.createElement(Instagram, null)))));
}

// app/components/Banner/index.tsx
init_react();
function Banner2({ title, url, color: { red, blue, green }, textcolor: { hex }, label }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-banner",
    style: {
      "backgroundColor": `rgb(${red}, ${green}, ${blue})`,
      "--tw-shadow-color": `rgba(${red}, ${green}, ${blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-banner-icon"
  }, /* @__PURE__ */ React.createElement(Banner, null)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-banner-title"
  }, /* @__PURE__ */ React.createElement("span", null, title)), url && /* @__PURE__ */ React.createElement("div", {
    className: "bx-banner-link"
  }, /* @__PURE__ */ React.createElement(Button, {
    size: "small",
    href: url
  }, label || "\uBC14\uB85C\uAC00\uAE30")));
}

// app/components/Layout/index.tsx
function SiteMeta() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest?v=20220313"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "mask-icon",
    href: "/images/safari-pinned-tab.svg?v=20220313",
    color: "#2563eb"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "shortcut icon",
    href: "/favicon.ico?v=20220313"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "BOLT UX"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "application-name",
    content: "BOLT UX"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#2563eb"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#f8fafc"
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1315238860718549",
    crossOrigin: "anonymous"
  }));
}
function Layout({ children, title, Icon, desc, promotion: promotion2, prevRoute, cover, date }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement(Header, __spreadValues({}, { title, Icon, desc, prevRoute, cover, date })), promotion2 && /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion2)), children, /* @__PURE__ */ React.createElement("section", {
    className: "section flex md:hidden"
  }, /* @__PURE__ */ React.createElement(Footer, null)));
}
function RootLayout({ isRoot, children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `bx-section ${isRoot ? "" : "hidden md:flex"}`
  }, /* @__PURE__ */ React.createElement(Hero, {
    heroString,
    desc: "\uB354 \uB098\uC740 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC0DD\uAC01\uD558\uBA70 \uAF3C\uAF3C\uD558\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB824\uC694.",
    links: [
      { url: "/contact", label: "\uBB34\uB8CC \uC0C1\uB2F4" },
      {
        url: "/plan",
        label: "\uC694\uAE08\uD45C \uD655\uC778"
      }
    ]
  }), /* @__PURE__ */ React.createElement(Nav, {
    nav
  }), /* @__PURE__ */ React.createElement("div", {
    className: `${isRoot ? "px-3 md:px-0" : ""}`
  }, /* @__PURE__ */ React.createElement(Footer, null))), children);
}

// app/styles/app.css
var app_default = "/build/_assets/app-2QQFLIIE.css";

// app/styles/blog.css
var blog_default = "/build/_assets/blog-OZB25IZJ.css";

// route:/Users/yonne/Dev/bolt-ux/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
    },
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: blog_default }
  ];
}
var loader = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: `
        {
          site: _site {
            favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
              ...metaTagsFragment
            }
          }
          blog {
            seo: _seoMetaTags {
              ...metaTagsFragment
            }
          }
        }
        ${metaTagsFragment}
      `
  });
};
var meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { blog: blog2, site }
    }
  }
}) => {
  return (0, import_react_datocms.toRemixMeta)([...blog2.seo, ...site.favicon]);
};
function CatchBoundary() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { status, statusText } = (0, import_remix8.useCatch)();
  const prevRoute = usePrevRoute(pathname);
  const isRoot = pathname === "/";
  (0, import_react.useEffect)(() => {
    GA.trackPageView({ path: pathname });
    GA.trackErrorEvent({ action: status.toString() });
  }, [pathname, status]);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot }), /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title: status.toString(), Icon: NotFound, desc: statusText, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-error"
  }, /* @__PURE__ */ React.createElement("h1", null, "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uC774\uC804\uC73C\uB85C \uB3CC\uC544 \uAC00\uC2DC\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")))), /* @__PURE__ */ React.createElement(import_remix8.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React.createElement(import_remix8.LiveReload, null)));
}
function App() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix8.useLoaderData)();
  const isRoot = pathname === "/";
  const {
    data: { site }
  } = (0, import_react_datocms.useQuerySubscription)(datoQuerySubscription2);
  (0, import_react.useEffect)(() => {
    GA.trackPageView({ path: pathname });
  }, [pathname]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Meta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix8.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React.createElement(import_remix8.LiveReload, null)));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/preview/start.ts
var start_exports = {};
__export(start_exports, {
  action: () => action
});
init_react();
var import_remix9 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix9.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/preview/stop.ts
var stop_exports = {};
__export(stop_exports, {
  action: () => action2
});
init_react();
var import_remix10 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix10.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/yonne/Dev/bolt-ux/app/routes/preview/start.ts
var start_exports2 = {};
__export(start_exports2, {
  action: () => action3
});
init_react();
var import_remix11 = __toESM(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix11.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/yonne/Dev/bolt-ux/app/routes/preview/stop.ts
var stop_exports2 = {};
__export(stop_exports2, {
  action: () => action4
});
init_react();
var import_remix12 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix12.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_react_router_dom2 = require("react-router-dom");
var import_remix14 = __toESM(require_remix());
var import_react_datocms3 = require("react-datocms");

// app/queries/blog.ts
init_react();
var blog = `
  {
    posts: allPosts(orderBy: date_DESC, first: 20) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
    promotion: promotion(orderBy: expiredat_ASC, locale: ko_KR) {
      title(locale: ko_KR)
      url
      color {
        red
        green
        blue
      }
      textcolor {
        hex
      }
      label(locale: ko_KR)
    }
  }
  ${responsiveImageFragment}
`;

// app/queries/news.ts
init_react();
var news2 = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "116679079"}}, first: 20) {
      title
      slug
      excerpt
      date
      ${coverImage}
      ${author}
    }
  }
  ${responsiveImageFragment}
`;

// app/queries/notice.ts
init_react();
var notice2 = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "116676845"}}, first: 20) {
      title
      slug
      excerpt
      date
      ${coverImage}
      ${author}
    }
  }
  ${responsiveImageFragment}
`;

// app/queries/promotion.ts
init_react();
var promotion = `
  {
    promotions: allPromotions(orderBy: expiredat_ASC, first: 20) {
      title
      color {
        blue
        green
        red
      }
      url
      expiredat
      banner {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 776, h: 726 }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

// app/components/Posts/index.tsx
init_react();
var import_remix13 = __toESM(require_remix());
var import_react_datocms2 = require("react-datocms");

// app/components/Avatar/index.tsx
init_react();
function Avatar({ name, picture }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "avatar__container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: picture.url,
    className: "avatar__picture",
    alt: name
  }));
}

// app/components/Date/index.tsx
init_react();
var import_date_fns = require("date-fns");
function Date({ dateString }) {
  const date = (0, import_date_fns.parseISO)(dateString);
  return /* @__PURE__ */ React.createElement("time", {
    dateTime: dateString
  }, (0, import_date_fns.format)(date, "LLLL	d, yyyy"));
}

// app/components/Posts/index.tsx
function Posts({ firstPost, otherPosts }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post aspect-video"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    className: "bx-post-link",
    to: `/blog/posts/${firstPost.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
    className: "bx-post-thumb",
    data: firstPost.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-meta"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "bx-post-title"
  }, firstPost.title), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-date"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: firstPost.date
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-avatar"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: firstPost.author.name,
    picture: firstPost.author.picture
  })))), /* @__PURE__ */ React.createElement("span", {
    className: "bx-post-background"
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "bx-other-posts"
  }, otherPosts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post aspect-video"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    className: "bx-post-link",
    to: `/blog/posts/${post.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
    className: "bx-post-thumb",
    data: post.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-meta"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "bx-post-title"
  }, post.title), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-date"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: post.date
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-avatar"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: post.author.name,
    picture: post.author.picture
  })))), /* @__PURE__ */ React.createElement("span", {
    className: "bx-post-background"
  }))))));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/index.tsx
var loader2 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: blog
  });
  return __spreadValues({}, querySubscription);
};
function Index() {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms3.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts })), /* @__PURE__ */ React.createElement(import_remix14.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts2
});
init_react();
var import_remix15 = __toESM(require_remix());
function Posts2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix15.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_react_router_dom3 = require("react-router-dom");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react_datocms4 = require("react-datocms");
var loader3 = async ({ request, params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  return datoQuerySubscription({
    request,
    query: `
      query PostBySlug($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          excerpt
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
        promotion: promotion(orderBy: expiredat_ASC, locale: ko_KR) {
          title(locale: ko_KR)
          url
          color {
            red
            green
            blue
          }
          textcolor {
            hex
          }
          label(locale: ko_KR)
        }
      }
      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    variables: {
      slug: params.slug
    }
  });
};
var meta2 = ({
  data: {
    datoQuerySubscription: {
      initialData: { post }
    }
  }
}) => {
  return (0, import_react_datocms4.toRemixMeta)(post.seo);
};
function PostSlug() {
  const { pathname } = (0, import_react_router_dom3.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix16.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post, promotion: promotion2 }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post == null ? void 0 : post.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post.author.name,
      picture: post.author.picture
    }),
    desc: (post == null ? void 0 : post.excerpt) || desc,
    promotion: promotion2,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
      data: post.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post.date
    })
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-article"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-slate dark:prose-invert"
  }, /* @__PURE__ */ React.createElement(import_react_datocms4.StructuredText, {
    data: post.content,
    renderBlock: ({ record }) => {
      if (record.__typename === "ImageBlockRecord") {
        return /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
          className: "bx-article-image",
          data: record.image.responsiveImage
        });
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Don't know how to render a block!"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(record, null, 2)));
    }
  })))));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy2
});
init_react();
var import_react_router_dom4 = require("react-router-dom");
function Privacy2() {
  const { pathname } = (0, import_react_router_dom4.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-privacy prose-sm prose-slate dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ls2 lh6 bs5 ts4"
  }, /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "<BOLT-UX>('https://www.bolt-ux.com'\uC774\uD558 'BOLT-UX')"), "\uC740(\uB294) \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C30\uC870\uC5D0 \uB530\uB77C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0 \uC774\uC640 \uAD00\uB828\uD55C \uACE0\uCDA9\uC744 \uC2E0\uC18D\uD558\uACE0 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC744 \uC218\uB9BD\xB7\uACF5\uAC1C\uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, "\u25CB \uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 ", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "2022"), "\uB144 ", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "3"), "\uC6D4", " ", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "17"), "\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C1\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "<BOLT-UX>('https://www.bolt-ux.com'\uC774\uD558 'BOLT-UX')"), "\uC740(\uB294) \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD558\uACE0 \uC788\uB294 \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC774\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C18\uC870\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uC758 \uB3D9\uC758\uB97C \uBC1B\uB294 \uB4F1 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uC774\uD589\uD560 \uC608\uC815\uC785\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, "1. \uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5"), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, "\uC11C\uBE44\uC2A4 \uC81C\uACF5, \uCF58\uD150\uCE20 \uC81C\uACF5, \uB9DE\uCDA4\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, "2. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9"), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, "\uC778\uAD6C\uD1B5\uACC4\uD559\uC801 \uD2B9\uC131\uC5D0 \uB530\uB978 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC , \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uD68C\uC6D0\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C2\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2460 ", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "<BOLT-UX>"), "\uC740(\uB294) \uBC95\uB839\uC5D0 \uB530\uB978 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\xB7\uC774\uC6A9\uAE30\uAC04 \uB610\uB294 \uC815\uBCF4\uC8FC\uCCB4\uB85C\uBD80\uD130 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uC2DC\uC5D0 \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\xB7\uC774\uC6A9\uAE30\uAC04 \uB0B4\uC5D0\uC11C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\xB7\uBCF4\uC720\uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2461 \uAC01\uAC01\uC758 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "1.<\uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9>"), /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "<\uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9>\uC640 \uAD00\uB828\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uC218\uC9D1.\uC774\uC6A9\uC5D0 \uAD00\uD55C \uB3D9\uC758\uC77C\uB85C\uBD80\uD130<\uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30>\uAE4C\uC9C0 \uC704 \uC774\uC6A9\uBAA9\uC801\uC744 \uC704\uD558\uC5EC \uBCF4\uC720.\uC774\uC6A9\uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("li", null, "\uBCF4\uC720\uADFC\uAC70 : \uAD11\uACE0"), /* @__PURE__ */ React.createElement("li", null, "\uAD00\uB828\uBC95\uB839 : \uD45C\uC2DC/\uAD11\uACE0\uC5D0 \uAD00\uD55C \uAE30\uB85D : 6\uAC1C\uC6D4"), /* @__PURE__ */ React.createElement("li", null, "\uC608\uC678\uC0AC\uC720 : ")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C3\uC870(\uC815\uBCF4\uC8FC\uCCB4\uC640 \uBC95\uC815\uB300\uB9AC\uC778\uC758 \uAD8C\uB9AC\xB7\uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95)")), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2460 \uC815\uBCF4\uC8FC\uCCB4\uB294 <BOLT-UX>\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\xB7\uC815\uC815\xB7\uC0AD\uC81C\xB7\uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB4F1\uC758 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2461 \uC81C1\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 <BOLT-UX>\uC5D0 \uB300\uD574 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC2DC\uD589\uB839 \uC81C41\uC870\uC81C1\uD56D\uC5D0 \uB530\uB77C \uC11C\uBA74, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 <BOLT-UX>\uC740(\uB294) \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2462 \uC81C1\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\uC774 \uACBD\uC6B0 \u201C\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC29\uBC95\uC5D0 \uAD00\uD55C \uACE0\uC2DC(\uC81C2020-7\uD638)\u201D \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2463 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C \uBC0F \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C35\uC870 \uC81C4\uD56D, \uC81C37\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC\uAC00 \uC81C\uD55C \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2464 \uAC1C\uC778\uC815\uBCF4\uC758 \uC815\uC815 \uBC0F \uC0AD\uC81C \uC694\uAD6C\uB294 \uB2E4\uB978 \uBC95\uB839\uC5D0\uC11C \uADF8 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC218\uC9D1 \uB300\uC0C1\uC73C\uB85C \uBA85\uC2DC\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2465 <BOLT-UX>\uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4 \uAD8C\uB9AC\uC5D0 \uB530\uB978 \uC5F4\uB78C\uC758 \uC694\uAD6C, \uC815\uC815\xB7\uC0AD\uC81C\uC758 \uC694\uAD6C, \uCC98\uB9AC\uC815\uC9C0\uC758 \uC694\uAD6C \uC2DC \uC5F4\uB78C \uB4F1 \uC694\uAD6C\uB97C \uD55C \uC790\uAC00 \uBCF8\uC778\uC774\uAC70\uB098 \uC815\uB2F9\uD55C \uB300\uB9AC\uC778\uC778\uC9C0\uB97C \uD655\uC778\uD569\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C4\uC870(\uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9 \uC791\uC131) "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " \u2460 ", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "<BOLT-UX>"), "\uC740(\uB294) \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "1< \uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5 >"), /* @__PURE__ */ React.createElement("li", null, "\uD544\uC218\uD56D\uBAA9 : \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uC811\uC18D \uB85C\uADF8, \uCFE0\uD0A4"), /* @__PURE__ */ React.createElement("li", null, "\uC120\uD0DD\uD56D\uBAA9 : \uC811\uC18D IP \uC815\uBCF4")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C5\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30)")), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, /* @__PURE__ */ React.createElement("br", null), "\u2460 < BLT-UX> \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778\uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2461 \uC815\uBCF4\uC8FC\uCCB4\uB85C\uBD80\uD130 \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC774 \uACBD\uACFC\uD558\uAC70\uB098 \uCC98\uB9AC\uBAA9\uC801\uC774 \uB2EC\uC131\uB418\uC5C8\uC74C\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0 \uB2E4\uB978 \uBC95\uB839\uC5D0 \uB530\uB77C \uAC1C\uC778\uC815\uBCF4\uB97C \uACC4\uC18D \uBCF4\uC874\uD558\uC5EC\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294, \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCC4\uB3C4\uC758 \uB370\uC774\uD130\uBCA0\uC774\uC2A4(DB)\uB85C \uC62E\uAE30\uAC70\uB098 \uBCF4\uAD00\uC7A5\uC18C\uB97C \uB2EC\uB9AC\uD558\uC5EC \uBCF4\uC874\uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "1. \uBC95\uB839 \uADFC\uAC70 :", /* @__PURE__ */ React.createElement("br", null), "2. \uBCF4\uC874\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9 : \uACC4\uC88C\uC815\uBCF4, \uAC70\uB798\uB0A0\uC9DC", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2462 \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "1. \uD30C\uAE30\uC808\uCC28", /* @__PURE__ */ React.createElement("br", null), " < BLT-UX> \uC740(\uB294) \uD30C\uAE30 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC120\uC815\uD558\uACE0, < BLT-UX> \uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uC758 \uC2B9\uC778\uC744 \uBC1B\uC544 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p mgt10"
  }, "2. \uD30C\uAE30\uBC29\uBC95"), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\uC804\uC790\uC801 \uD30C\uC77C \uD615\uD0DC\uC758 \uC815\uBCF4\uB294 \uAE30\uB85D\uC744 \uC7AC\uC0DD\uD560 \uC218 \uC5C6\uB294 \uAE30\uC220\uC801 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C6\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58)", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "< BLT-UX>"), "\uC740(\uB294) \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uB97C \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC870\uCE58\uB97C \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p mgt10"
  }, "1. \uC815\uAE30\uC801\uC778 \uC790\uCCB4 \uAC10\uC0AC \uC2E4\uC2DC", /* @__PURE__ */ React.createElement("br", null), " \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uAD00\uB828 \uC548\uC815\uC131 \uD655\uBCF4\uB97C \uC704\uD574 \uC815\uAE30\uC801(\uBD84\uAE30 1\uD68C)\uC73C\uB85C \uC790\uCCB4 \uAC10\uC0AC\uB97C \uC2E4\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "2. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uC9C1\uC6D0\uC758 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721", /* @__PURE__ */ React.createElement("br", null), " \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uB294 \uC9C1\uC6D0\uC744 \uC9C0\uC815\uD558\uACE0 \uB2F4\uB2F9\uC790\uC5D0 \uD55C\uC815\uC2DC\uCF1C \uCD5C\uC18C\uD654 \uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB9AC\uD558\uB294 \uB300\uCC45\uC744 \uC2DC\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "3. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uAE30\uC220\uC801 \uB300\uCC45", /* @__PURE__ */ React.createElement("br", null), " <", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "BOLT-UX"), ">('", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }, "BOLT-UX"), "')\uC740 \uD574\uD0B9\uC774\uB098 \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1\uC5D0 \uC758\uD55C \uAC1C\uC778\uC815\uBCF4 \uC720\uCD9C \uBC0F \uD6FC\uC190\uC744 \uB9C9\uAE30 \uC704\uD558\uC5EC \uBCF4\uC548\uD504\uB85C\uADF8\uB7A8\uC744 \uC124\uCE58\uD558\uACE0 \uC8FC\uAE30\uC801\uC778 \uAC31\uC2E0\xB7\uC810\uAC80\uC744 \uD558\uBA70 \uC678\uBD80\uB85C\uBD80\uD130 \uC811\uADFC\uC774 \uD1B5\uC81C\uB41C \uAD6C\uC5ED\uC5D0 \uC2DC\uC2A4\uD15C\uC744 \uC124\uCE58\uD558\uACE0 \uAE30\uC220\uC801/\uBB3C\uB9AC\uC801\uC73C\uB85C \uAC10\uC2DC \uBC0F \uCC28\uB2E8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "4. \uC811\uC18D\uAE30\uB85D\uC758 \uBCF4\uAD00 \uBC0F \uC704\uBCC0\uC870 \uBC29\uC9C0", /* @__PURE__ */ React.createElement("br", null), " \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC2DC\uC2A4\uD15C\uC5D0 \uC811\uC18D\uD55C \uAE30\uB85D\uC744 \uCD5C\uC18C 1\uB144 \uC774\uC0C1 \uBCF4\uAD00, \uAD00\uB9AC\uD558\uACE0 \uC788\uC73C\uBA70,\uB2E4\uB9CC, 5\uB9CC\uBA85 \uC774\uC0C1\uC758 \uC815\uBCF4\uC8FC\uCCB4\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCD94\uAC00\uD558\uAC70\uB098, \uACE0\uC720\uC2DD\uBCC4\uC815\uBCF4 \uB610\uB294 \uBBFC\uAC10\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 2\uB144\uC774\uC0C1 \uBCF4\uAD00, \uAD00\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "\uB610\uD55C, \uC811\uC18D\uAE30\uB85D\uC774 \uC704\uBCC0\uC870 \uBC0F \uB3C4\uB09C, \uBD84\uC2E4\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBCF4\uC548\uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C7\uC870(\uAC1C\uC778\uC815\uBCF4 \uC790\uB3D9 \uC218\uC9D1 \uC7A5\uCE58\uC758 \uC124\uCE58\u2022\uC6B4\uC601 \uBC0F \uAC70\uBD80\uC5D0 \uAD00\uD55C \uC0AC\uD56D)")), /* @__PURE__ */ React.createElement("p", {
    className: "ls2"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u2460 <BOLT-UX> \uC740(\uB294) \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uB9DE\uCDA4\uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uC774\uC6A9\uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uACE0 \uC218\uC2DC\uB85C \uBD88\uB7EC\uC624\uB294 \u2018\uCFE0\uD0A4(cookie)\u2019\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "\u2461 \uCFE0\uD0A4\uB294 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uC6B4\uC601\uD558\uB294\uB370 \uC774\uC6A9\uB418\uB294 \uC11C\uBC84(http)\uAC00 \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uC18C\uB7C9\uC758 \uC815\uBCF4\uC774\uBA70 \uC774\uC6A9\uC790\uB4E4\uC758 PC \uCEF4\uD4E8\uD130\uB0B4\uC758 \uD558\uB4DC\uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uB418\uAE30\uB3C4 \uD569\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "\uAC00. \uCFE0\uD0A4\uC758 \uC0AC\uC6A9 \uBAA9\uC801 : \uC774\uC6A9\uC790\uAC00 \uBC29\uBB38\uD55C \uAC01 \uC11C\uBE44\uC2A4\uC640 \uC6F9 \uC0AC\uC774\uD2B8\uB4E4\uC5D0 \uB300\uD55C \uBC29\uBB38 \uBC0F \uC774\uC6A9\uD615\uD0DC, \uC778\uAE30 \uAC80\uC0C9\uC5B4, \uBCF4\uC548\uC811\uC18D \uC5EC\uBD80, \uB4F1\uC744 \uD30C\uC545\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uCD5C\uC801\uD654\uB41C \uC815\uBCF4 \uC81C\uACF5\uC744 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "\uB098. \uCFE0\uD0A4\uC758 \uC124\uCE58\u2022\uC6B4\uC601 \uBC0F \uAC70\uBD80 : \uC6F9\uBE0C\uB77C\uC6B0\uC800 \uC0C1\uB2E8\uC758 \uB3C4\uAD6C>\uC778\uD130\uB137 \uC635\uC158>\uAC1C\uC778\uC815\uBCF4 \uBA54\uB274\uC758 \uC635\uC158 \uC124\uC815\uC744 \uD1B5\uD574 \uCFE0\uD0A4 \uC800\uC7A5\uC744 \uAC70\uBD80 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCFE0\uD0A4 \uC800\uC7A5\uC744 \uAC70\uBD80\uD560 \uACBD\uC6B0 \uB9DE\uCDA4\uD615 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p mgt30"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C8\uC870 (\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790) ")), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p mgt10"
  }, "\u2460 ", /* @__PURE__ */ React.createElement("span", {
    className: "colorLightBlue"
  }, "<BOLT-UX>"), " \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 "), /* @__PURE__ */ React.createElement("li", null, "\uC131\uBA85 :\uAE40\uC6A9\uB9CC"), /* @__PURE__ */ React.createElement("li", null, "\uC9C1\uCC45 :\uAD00\uB9AC\uC790"), /* @__PURE__ */ React.createElement("li", null, "\uC9C1\uAE09 :\uB300\uD45C"), /* @__PURE__ */ React.createElement("li", null, "\uC5F0\uB77D\uCC98 :010-8300-8210, deerpark8210@gmail.com, ")), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u203B \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uB2F4\uB2F9\uBD80\uC11C\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("p", null), " ", /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uB2F4\uB2F9\uBD80\uC11C"), /* @__PURE__ */ React.createElement("li", null, "\uBD80\uC11C\uBA85 :\uC11C\uBE44\uC2A4 \uC6B4\uC601"), /* @__PURE__ */ React.createElement("li", null, "\uB2F4\uB2F9\uC790 :\uAE40\uC6A9\uB9CC"), /* @__PURE__ */ React.createElement("li", null, "\uC5F0\uB77D\uCC98 :010-8300-8210, deerpark8210@gmail.com, ")), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2461 \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 <BOLT-UX> \uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <BOLT-UX> \uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p mgt30"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C9\uC870(\uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\uCCAD\uAD6C)", /* @__PURE__ */ React.createElement("br", null), " \uC815\uBCF4\uC8FC\uCCB4\uB294 \uFF62\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\uFF63 \uC81C35\uC870\uC5D0 \uB530\uB978 \uAC1C\uC778\uC815\uBCF4\uC758 \uC5F4\uB78C \uCCAD\uAD6C\uB97C \uC544\uB798\uC758 \uBD80\uC11C\uC5D0 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), "< BLT-UX>\uC740(\uB294) \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\uCCAD\uAD6C\uAC00 \uC2E0\uC18D\uD558\uAC8C \uCC98\uB9AC\uB418\uB3C4\uB85D \uB178\uB825\uD558\uACA0\uC2B5\uB2C8\uB2E4.", " ")), /* @__PURE__ */ React.createElement("ul", {
    className: "list_indent2 mgt10"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "tt"
  }, "\u25B6 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\uCCAD\uAD6C \uC811\uC218\xB7\uCC98\uB9AC \uBD80\uC11C "), /* @__PURE__ */ React.createElement("li", null, "\uBD80\uC11C\uBA85 : \uC11C\uBE44\uC2A4 \uAD00\uB9AC"), /* @__PURE__ */ React.createElement("li", null, "\uB2F4\uB2F9\uC790 : \uAE40\uC6A9\uB9CC"), /* @__PURE__ */ React.createElement("li", null, "\uC5F0\uB77D\uCC98 : 010-8300-8210, deerpark8210@gmail.com, ")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C10\uC870(\uAD8C\uC775\uCE68\uD574 \uAD6C\uC81C\uBC29\uBC95)", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uB85C \uC778\uD55C \uAD6C\uC81C\uB97C \uBC1B\uAE30 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uBD84\uC7C1\uC870\uC815\uC704\uC6D0\uD68C, \uD55C\uAD6D\uC778\uD130\uB137\uC9C4\uD765\uC6D0 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC2E0\uACE0\uC13C\uD130 \uB4F1\uC5D0 \uBD84\uC7C1\uD574\uACB0\uC774\uB098 \uC0C1\uB2F4 \uB4F1\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBC16\uC5D0 \uAE30\uD0C0 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC758 \uC2E0\uACE0, \uC0C1\uB2F4\uC5D0 \uB300\uD558\uC5EC\uB294 \uC544\uB798\uC758 \uAE30\uAD00\uC5D0 \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "1. \uAC1C\uC778\uC815\uBCF4\uBD84\uC7C1\uC870\uC815\uC704\uC6D0\uD68C : (\uAD6D\uBC88\uC5C6\uC774) 1833-6972 (www.kopico.go.kr)", /* @__PURE__ */ React.createElement("br", null), "2. \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC2E0\uACE0\uC13C\uD130 : (\uAD6D\uBC88\uC5C6\uC774) 118 (privacy.kisa.or.kr)", /* @__PURE__ */ React.createElement("br", null), "3. \uB300\uAC80\uCC30\uCCAD : (\uAD6D\uBC88\uC5C6\uC774) 1301 (www.spo.go.kr)", /* @__PURE__ */ React.createElement("br", null), "4. \uACBD\uCC30\uCCAD : (\uAD6D\uBC88\uC5C6\uC774) 182 (ecrm.cyber.go.kr)", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u300C\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95\u300D\uC81C35\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC5F4\uB78C), \uC81C36\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC815\uC815\xB7\uC0AD\uC81C), \uC81C37\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC\uC815\uC9C0 \uB4F1)\uC758 \uADDC\uC815\uC5D0 \uC758\uD55C \uC694\uAD6C\uC5D0 \uB300 \uD558\uC5EC \uACF5\uACF5\uAE30\uAD00\uC758 \uC7A5\uC774 \uD589\uD55C \uCC98\uBD84 \uB610\uB294 \uBD80\uC791\uC704\uB85C \uC778\uD558\uC5EC \uAD8C\uB9AC \uB610\uB294 \uC774\uC775\uC758 \uCE68\uD574\uB97C \uBC1B\uC740 \uC790\uB294 \uD589\uC815\uC2EC\uD310\uBC95\uC774 \uC815\uD558\uB294 \uBC14\uC5D0 \uB530\uB77C \uD589\uC815\uC2EC\uD310\uC744 \uCCAD\uAD6C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u203B \uD589\uC815\uC2EC\uD310\uC5D0 \uB300\uD574 \uC790\uC138\uD55C \uC0AC\uD56D\uC740 \uC911\uC559\uD589\uC815\uC2EC\uD310\uC704\uC6D0\uD68C(www.simpan.go.kr) \uD648\uD398\uC774\uC9C0\uB97C \uCC38\uACE0\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "lh6 bs4"
  }, /* @__PURE__ */ React.createElement("strong", null, "\uC81C11\uC870(\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD)", /* @__PURE__ */ React.createElement("em", {
    className: "emphasis"
  }))), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2460 \uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 2022\uB144 3\uC6D4 17\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }, "\u2461 \uC774\uC804\uC758 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC740 \uC544\uB798\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "sub_p"
  })));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/notice.tsx
var notice_exports = {};
__export(notice_exports, {
  default: () => Index2,
  loader: () => loader4
});
init_react();
var import_react_router_dom5 = require("react-router-dom");
var import_remix17 = __toESM(require_remix());
var import_react_datocms5 = require("react-datocms");
var loader4 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: notice2
  });
  return __spreadValues({}, querySubscription);
};
function Index2() {
  const { pathname } = (0, import_react_router_dom5.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix17.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms5.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts })), /* @__PURE__ */ React.createElement(import_remix17.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader5
});
init_react();
var import_remix18 = __toESM(require_remix());
var import_react_datocms6 = require("react-datocms");
var loader5 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: promotion
  });
};
function Index3() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix18.useLoaderData)();
  const {
    data: { promotions }
  } = (0, import_react_datocms6.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section max-w-112"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row hidden md:flex"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions.map((promotion2) => /* @__PURE__ */ React.createElement("li", {
    key: promotion2.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix18.Link, {
    to: promotion2.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms6.Image, {
    className: "bx-promotion-image",
    data: promotion2.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion2.color.red}, ${promotion2.color.green}, ${promotion2.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  })))))))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/news.tsx
var news_exports = {};
__export(news_exports, {
  default: () => Index4,
  loader: () => loader6
});
init_react();
var import_react_router_dom6 = require("react-router-dom");
var import_remix19 = __toESM(require_remix());
var import_react_datocms7 = require("react-datocms");
var loader6 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: news2
  });
  return __spreadValues({}, querySubscription);
};
function Index4() {
  const { pathname } = (0, import_react_router_dom6.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix19.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms7.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts })), /* @__PURE__ */ React.createElement(import_remix19.Outlet, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "65891599", "entry": { "module": "/build/entry.client-6SZES5LW.js", "imports": ["/build/_shared/chunk-VRSGBMBT.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-M2IUHSHU.js", "imports": ["/build/_shared/chunk-I3ENVWE4.js", "/build/_shared/chunk-5N46NBVF.js", "/build/_shared/chunk-HX2O4VTY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-ZKYZLZMP.js", "imports": ["/build/_shared/chunk-ZHDUNNG6.js", "/build/_shared/chunk-OLLD5Y6Y.js", "/build/_shared/chunk-TTYP4H2X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts": { "id": "routes/blog/posts", "parentId": "root", "path": "blog/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts-37NTFQ7O.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog/posts", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-PTADV2MP.js", "imports": ["/build/_shared/chunk-I3ENVWE4.js", "/build/_shared/chunk-OLLD5Y6Y.js", "/build/_shared/chunk-TTYP4H2X.js", "/build/_shared/chunk-5N46NBVF.js", "/build/_shared/chunk-HX2O4VTY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/start": { "id": "routes/blog/preview/start", "parentId": "root", "path": "blog/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/start-HE5CACRN.js", "imports": ["/build/_shared/chunk-RBSISSYY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/stop": { "id": "routes/blog/preview/stop", "parentId": "root", "path": "blog/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/stop-GTI7BIIO.js", "imports": ["/build/_shared/chunk-RBSISSYY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KDMEP2R2.js", "imports": ["/build/_shared/chunk-TTYP4H2X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news": { "id": "routes/news", "parentId": "root", "path": "news", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news-6QSWIYBI.js", "imports": ["/build/_shared/chunk-ZHDUNNG6.js", "/build/_shared/chunk-OLLD5Y6Y.js", "/build/_shared/chunk-TTYP4H2X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notice": { "id": "routes/notice", "parentId": "root", "path": "notice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notice-3XNOFW6F.js", "imports": ["/build/_shared/chunk-ZHDUNNG6.js", "/build/_shared/chunk-OLLD5Y6Y.js", "/build/_shared/chunk-TTYP4H2X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-UT3O6AUQ.js", "imports": ["/build/_shared/chunk-RBSISSYY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-ONZOEHWX.js", "imports": ["/build/_shared/chunk-RBSISSYY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-BHHFKRRZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-65891599.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/preview/start": {
    id: "routes/blog/preview/start",
    parentId: "root",
    path: "blog/preview/start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports
  },
  "routes/blog/preview/stop": {
    id: "routes/blog/preview/stop",
    parentId: "root",
    path: "blog/preview/stop",
    index: void 0,
    caseSensitive: void 0,
    module: stop_exports
  },
  "routes/preview/start": {
    id: "routes/preview/start",
    parentId: "root",
    path: "preview/start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports2
  },
  "routes/preview/stop": {
    id: "routes/preview/stop",
    parentId: "root",
    path: "preview/stop",
    index: void 0,
    caseSensitive: void 0,
    module: stop_exports2
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/posts": {
    id: "routes/blog/posts",
    parentId: "root",
    path: "blog/posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/blog/posts/$slug": {
    id: "routes/blog/posts/$slug",
    parentId: "routes/blog/posts",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/notice": {
    id: "routes/notice",
    parentId: "root",
    path: "notice",
    index: void 0,
    caseSensitive: void 0,
    module: notice_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/news": {
    id: "routes/news",
    parentId: "root",
    path: "news",
    index: void 0,
    caseSensitive: void 0,
    module: news_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvbGliL2ZyYWdtZW50cy50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0hvbWUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXJyb3dMZWZ0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcnJvd1JpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1B1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXBwZGVzaWduLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0NvbnN1bHRpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ob3RpY2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQmFubmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1ByaXZhY3kudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTm90Rm91bmQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vWW91dHViZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ud2l0dGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0luc3RhZ3JhbS50c3giLCAiLi4vYXBwL2xpYi9nYS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXYvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3AudHMiLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50cyIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHMiLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3giLCAiLi4vYXBwL3F1ZXJpZXMvYmxvZy50cyIsICIuLi9hcHAvcXVlcmllcy9uZXdzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25vdGljZS50cyIsICIuLi9hcHAvcXVlcmllcy9wcm9tb3Rpb24udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdHMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0F2YXRhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGF0ZS9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlLnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3ByZXZpZXcvc3RhcnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdGFydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2dcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvcG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcG9zdHMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nL3Bvc3RzXCIsXG4gICAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9wcml2YWN5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcml2YWN5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByaXZhY3lcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL25vdGljZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90aWNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5vdGljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL25ld3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyB1c2VQcmV2Um91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBHQSB9IGZyb20gJ34vbGliL2dhJ1xuaW1wb3J0IHsgUm9vdExheW91dCwgTGF5b3V0LCBTaXRlTWV0YSB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5pbXBvcnQgYXBwU3R5bGVzIGZyb20gJy4vc3R5bGVzL2FwcC5jc3MnXG5pbXBvcnQgYmxvZ1N0eWxlcyBmcm9tICcuL3N0eWxlcy9ibG9nLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zdW5uLXVzL1NVSVQvZm9udHMvc3RhdGljL3dvZmYyL1NVSVQuY3NzJyxcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGJsb2dTdHlsZXMgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeTogYFxuICAgICAgICB7XG4gICAgICAgICAgc2l0ZTogX3NpdGUge1xuICAgICAgICAgICAgZmF2aWNvbjogZmF2aWNvbk1ldGFUYWdzKHZhcmlhbnRzOiBbaWNvbiwgbXNBcHBsaWNhdGlvbiwgYXBwbGVUb3VjaEljb25dKSB7XG4gICAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvZyB7XG4gICAgICAgICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJHttZXRhVGFnc0ZyYWdtZW50fVxuICAgICAgYCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBibG9nLCBzaXRlIH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEoWy4uLmJsb2cuc2VvLCAuLi5zaXRlLmZhdmljb25dKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHN0YXR1cywgc3RhdHVzVGV4dCB9ID0gdXNlQ2F0Y2goKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIGNvbnN0IGlzUm9vdCA9IHBhdGhuYW1lID09PSAnLydcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdBLnRyYWNrUGFnZVZpZXcoeyBwYXRoOiBwYXRobmFtZSB9KVxuICAgIEdBLnRyYWNrRXJyb3JFdmVudCh7IGFjdGlvbjogc3RhdHVzLnRvU3RyaW5nKCkgfSlcbiAgfSwgW3BhdGhuYW1lLCBzdGF0dXNdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPFNpdGVNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxSb290TGF5b3V0IHsuLi57IGlzUm9vdCB9fT5cbiAgICAgICAgICA8TGF5b3V0IHsuLi57IHRpdGxlOiBzdGF0dXMudG9TdHJpbmcoKSwgSWNvbjogSWNvbi5Ob3RGb3VuZCwgZGVzYzogc3RhdHVzVGV4dCwgcHJldlJvdXRlIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWVycm9yJz5cbiAgICAgICAgICAgICAgPGgxPlx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDM0VcdUM3NDQgXHVDMjE4IFx1QzVDNlx1QzJCNVx1QjJDOFx1QjJFNC48L2gxPlxuICAgICAgICAgICAgICA8cD5cdUM3NzRcdUM4MDRcdUM3M0NcdUI4NUMgXHVCM0NDXHVDNTQ0IFx1QUMwMFx1QzJEQ1x1QUM3MFx1QjA5OCBcdUIyRTRcdUMyREMgXHVDMkRDXHVCM0M0XHVENTc0IFx1QzhGQ1x1QzEzOFx1QzY5NC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Sb290TGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCBpc1Jvb3QgPSBwYXRobmFtZSA9PT0gJy8nXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgc2l0ZSB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgR0EudHJhY2tQYWdlVmlldyh7IHBhdGg6IHBhdGhuYW1lIH0pXG4gIH0sIFtwYXRobmFtZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPFNpdGVNZXRhIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7cmVuZGVyTWV0YVRhZ3MoWy4uLnNpdGUuZmF2aWNvbl0pfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxSb290TGF5b3V0IHsuLi57IGlzUm9vdCB9fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgdGlueSBmcm9tICd0aW55LWpzb24taHR0cCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfTogYW55KSB7XG4gIGxldCBlbmRwb2ludCA9ICdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20nXG5cbiAgaWYgKHByb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlQpIHtcbiAgICBlbmRwb2ludCArPSBgL2Vudmlyb25tZW50cy8ke3Byb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlR9YFxuICB9XG5cbiAgaWYgKHByZXZpZXcpIHtcbiAgICBlbmRwb2ludCArPSBgL3ByZXZpZXdgXG4gIH1cblxuICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHRpbnkucG9zdCh7XG4gICAgdXJsOiBlbmRwb2ludCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTn1gLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoYm9keS5lcnJvcnMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdPdWNoISBUaGUgcXVlcnkgaGFzIHNvbWUgZXJyb3JzIScsIGJvZHkuZXJyb3JzKVxuICAgIHRocm93IGJvZHkuZXJyb3JzXG4gIH1cblxuICByZXR1cm4gYm9keS5kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oeyByZXF1ZXN0LCAuLi5ncWxSZXF1ZXN0IH06IGFueSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcbiAgY29uc3QgcHJldmlld0VuYWJsZWQgPSBzZXNzaW9uLmdldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHByZXZpZXdFbmFibGVkXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5ncWxSZXF1ZXN0LFxuICAgICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGF3YWl0IGxvYWQoeyAuLi5ncWxSZXF1ZXN0LCBwcmV2aWV3OiB0cnVlIH0pLFxuICAgICAgICAgIHRva2VuOiBwcm9jZXNzLmVudi5EQVRPQ01TX1JFQURPTkxZX1RPS0VOLFxuICAgICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UIHx8IG51bGwsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKGdxbFJlcXVlc3QpLFxuICAgICAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICBtYXhBZ2U6IDYwNF84MDAsXG4gICAgcGF0aDogJy8nLFxuICB9LFxufSlcblxuZXhwb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfVxuIiwgIi8vIFNlZTogaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vYmxvZy9vZmZlci1yZXNwb25zaXZlLXByb2dyZXNzaXZlLWxxaXAtaW1hZ2VzLWluLTIwMjBcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gICAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmFzZTY0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzRnJhZ21lbnQ6IHN0cmluZyA9IGBcbiAgZnJhZ21lbnQgbWV0YVRhZ3NGcmFnbWVudCBvbiBUYWcge1xuICAgIGF0dHJpYnV0ZXNcbiAgICBjb250ZW50XG4gICAgdGFnXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGNvdmVySW1hZ2UgPSBgY292ZXJJbWFnZSB7XG4gIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgfVxufWBcblxuZXhwb3J0IGNvbnN0IGF1dGhvciA9IGBhdXRob3Ige1xuICBuYW1lXG4gIHBpY3R1cmUge1xuICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gIH1cbn1gXG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IHR5cGUgUm91dGUgPSB7XG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBpZD86IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGRlc2M/OiBzdHJpbmcsXG4gIEljb24/OiBKU1guRWxlbWVudCB8ICgoKSA9PiBKU1guRWxlbWVudCksXG59XG5cbmV4cG9ydCB0eXBlIFJvdXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGNoaWxkcmVuOiBSb3V0ZVtdLFxufVxuXG5leHBvcnQgY29uc3QgbmF2OiBSb3V0ZXNbXSA9IFtcbiAge1xuICAgIHRpdGxlOiAnXHVCRTE0XHVCODVDXHVBREY4JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25vdGljZScsXG4gICAgICAgIHRpdGxlOiAnXHVBQ0Y1XHVDOUMwXHVDMEFDXHVENTZEJyxcbiAgICAgICAgaWQ6ICcxMTY2NzY4NDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNTRDXHVCODI0XHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24ubm90aWNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbmV3cycsXG4gICAgICAgIHRpdGxlOiAnXHVDMEM4XHVDMThDXHVDMkREJyxcbiAgICAgICAgaWQ6ICcxMTY2NzkwNzknLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDMEM4XHVCODVDXHVDNkI0IFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIEljb246IEljb24ubmV3cyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2UvaG9tYWVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uaG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL3NpbmdsZXBhZ2UnLFxuICAgICAgICB0aXRsZTogJ1x1QzJGMVx1QUUwMCBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1Qzc3NFx1QkNBNFx1RDJCOCwgXHVCNzlDXHVCNTI5IFx1QjJFOFx1Qzc3QyBcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1JyxcbiAgICAgICAgSWNvbjogSWNvbi5zaW5nbGVwYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9wdWJsaXNoaW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUQzN0NcdUJFMTRcdUI5QUNcdUMyRjEgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBJY29uOiBJY29uLnB1Ymxpc2hpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL2FwcGRlc2lnbicsXG4gICAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIEljb246IEljb24uYXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9jb25zdWx0aW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1Qjg1Q1x1QUNFMCBcdUJBODVcdUQ1NjggXHVBQzA0XHVEMzEwIFx1QkE1NFx1QjI3NFx1RDMxMCBcdUQxNUNcdUQ1MENcdUI5QkYgXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgSWNvbjogSWNvbi5jb25zdWx0aW5nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUFFMzBcdUQwQzAnLFxuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3ByaXZhY3knLFxuICAgICAgICB0aXRsZTogJ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUM4MTVcdUNDNDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0NCBcdUMyMThcdUI5QkRcdTAwQjdcdUFDRjVcdUFDMUNcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5Qcml2YWN5LFxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5jb25zdCBleGNlcHRSb3V0ZSA9IFsncG9zdHMnXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2KHBhdGhuYW1lPzogc3RyaW5nKTogUm91dGUge1xuICBjb25zdCBtYXRjaGVkUm91dGUgPSBuYXYucmVkdWNlPFJvdXRlW10+KChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuY2hpbGRyZW4pLCBbXSkuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRobmFtZSA9PT0gcGF0aG5hbWUpXG4gIHJldHVybiBtYXRjaGVkUm91dGUgfHwgbmF2WzBdLmNoaWxkcmVuWzBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmV2Um91dGUocGF0aG5hbWUgOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXBhdGhuYW1lKSByZXR1cm4gJy8nXG4gIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuICBwYXRocy5wb3AoKVxuICBjb25zdCBwcmV2Um91dGUgPSBwYXRocy5maWx0ZXIocCA9PiAhZXhjZXB0Um91dGUuaW5jbHVkZXMocCkpLmpvaW4oJy8nKVxuICByZXR1cm4gIXByZXZSb3V0ZSB8fCBwcmV2Um91dGUgPT09ICcnID8gJy8nIDogcHJldlJvdXRlXG59XG5cbmV4cG9ydCB0eXBlIEhlcm9TdHJpbmcgPSBbc3RyaW5nLCBzdHJpbmddW11cblxuZXhwb3J0IGNvbnN0IGhlcm9TdHJpbmc6IEhlcm9TdHJpbmcgPSBbXG4gIFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsICdcdUJEODBcdUQxMzAnXSxcbiAgWydcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JywgJ1x1QUU0Q1x1QzlDMCddLFxuXSIsICJleHBvcnQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00wIDQxNkMwIDQwNy4yIDcuMTY0IDQwMCAxNiA0MDBIODEuNkM4OS4wMSAzNjMuNSAxMjEuMyAzMzYgMTYwIDMzNkMxOTguNyAzMzYgMjMwLjEgMzYzLjUgMjM4LjQgNDAwSDQ5NkM1MDQuOCA0MDAgNTEyIDQwNy4yIDUxMiA0MTZDNTEyIDQyNC44IDUwNC44IDQzMiA0OTYgNDMySDIzOC40QzIzMC4xIDQ2OC41IDE5OC43IDQ5NiAxNjAgNDk2QzEyMS4zIDQ5NiA4OS4wMSA0NjguNSA4MS42IDQzMkgxNkM3LjE2NCA0MzIgMCA0MjQuOCAwIDQxNlY0MTZ6TTIwOCA0MTZDMjA4IDM4OS41IDE4Ni41IDM2OCAxNjAgMzY4QzEzMy41IDM2OCAxMTIgMzg5LjUgMTEyIDQxNkMxMTIgNDQyLjUgMTMzLjUgNDY0IDE2MCA0NjRDMTg2LjUgNDY0IDIwOCA0NDIuNSAyMDggNDE2ek0zNTIgMTc2QzM5MC43IDE3NiA0MjIuMSAyMDMuNSA0MzAuNCAyNDBINDk2QzUwNC44IDI0MCA1MTIgMjQ3LjIgNTEyIDI1NkM1MTIgMjY0LjggNTA0LjggMjcyIDQ5NiAyNzJINDMwLjRDNDIyLjEgMzA4LjUgMzkwLjcgMzM2IDM1MiAzMzZDMzEzLjMgMzM2IDI4MSAzMDguNSAyNzMuNiAyNzJIMTZDNy4xNjQgMjcyIDAgMjY0LjggMCAyNTZDMCAyNDcuMiA3LjE2NCAyNDAgMTYgMjQwSDI3My42QzI4MSAyMDMuNSAzMTMuMyAxNzYgMzUyIDE3NnpNNDAwIDI1NkM0MDAgMjI5LjUgMzc4LjUgMjA4IDM1MiAyMDhDMzI1LjUgMjA4IDMwNCAyMjkuNSAzMDQgMjU2QzMwNCAyODIuNSAzMjUuNSAzMDQgMzUyIDMwNEMzNzguNSAzMDQgNDAwIDI4Mi41IDQwMCAyNTZ6TTQ5NiA4MEM1MDQuOCA4MCA1MTIgODcuMTYgNTEyIDk2QzUxMiAxMDQuOCA1MDQuOCAxMTIgNDk2IDExMkgyNzAuNEMyNjIuMSAxNDguNSAyMzAuNyAxNzYgMTkyIDE3NkMxNTMuMyAxNzYgMTIxIDE0OC41IDExMy42IDExMkgxNkM3LjE2NCAxMTIgMCAxMDQuOCAwIDk2QzAgODcuMTYgNy4xNjQgODAgMTYgODBIMTEzLjZDMTIxIDQzLjQ4IDE1My4zIDE2IDE5MiAxNkMyMzAuNyAxNiAyNjIuMSA0My40OCAyNzAuNCA4MEg0OTZ6TTE0NCA5NkMxNDQgMTIyLjUgMTY1LjUgMTQ0IDE5MiAxNDRDMjE4LjUgMTQ0IDI0MCAxMjIuNSAyNDAgOTZDMjQwIDY5LjQ5IDIxOC41IDQ4IDE5MiA0OEMxNjUuNSA0OCAxNDQgNjkuNDkgMTQ0IDk2eicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjc3LjQgNC4wMDJDMjgzLjUtMS4zMzQgMjkyLjUtMS4zMzQgMjk4LjYgNC4wMDJMMzg0IDc5LjM3VjU2QzM4NCA0Mi43NSAzOTQuNyAzMS4xIDQwOCAzMS4xSDQ4OEM1MDEuMyAzMS4xIDUxMiA0Mi43NSA1MTIgNTZWMTkyLjNMNTcwLjYgMjQ0QzU3Ny4yIDI0OS44IDU3Ny44IDI1OS4xIDU3MS4xIDI2Ni42QzU2Ni4yIDI3My4yIDU1NiAyNzMuOCA1NDkuNCAyNjcuMUw1MTIgMjM0LjFWNDMyQzUxMiA0NzYuMiA0NzYuMiA1MTIgNDMyIDUxMkgxNDRDOTkuODIgNTEyIDY0IDQ3Ni4yIDY0IDQzMlYyMzQuMUwyNi41OSAyNjcuMUMxOS45NiAyNzMuOCA5Ljg0OSAyNzMuMiA0LjAwMyAyNjYuNkMtMS44NDQgMjU5LjEtMS4yMTIgMjQ5LjggNS40MTQgMjQ0TDI3Ny40IDQuMDAyek00ODAgMTY0LjFWNjRINDE2VjEwNy42TDQ4MCAxNjQuMXpNOTYgMjA2LjdWNDMyQzk2IDQ1OC41IDExNy41IDQ4MCAxNDQgNDgwSDIwOFYzMjBDMjA4IDMwMi4zIDIyMi4zIDI4OCAyNDAgMjg4SDMzNkMzNTMuNyAyODggMzY4IDMwMi4zIDM2OCAzMjBWNDgwSDQzMkM0NTguNSA0ODAgNDgwIDQ1OC41IDQ4MCA0MzJWMjA2LjdMMjg4IDM3LjM0TDk2IDIwNi43ek0yNDAgMzIwVjQ4MEgzMzZWMzIwSDI0MHonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXJyb3dMZWZ0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aCBkPSdNNDQ4IDI1NkM0NDggMjY0LjggNDQwLjYgMjcyIDQzMS40IDI3Mkg1NC4xMWwxNDAuNyAxNDkuM2M2LjE1NyA2LjUzMSA1LjY1NSAxNi42Ni0xLjExOCAyMi41OUMxOTAuNSA0NDYuNiAxODYuNSA0NDggMTgyLjUgNDQ4Yy00LjUwNSAwLTkuMDA5LTEuNzUtMTIuMjgtNS4yNWwtMTY1LjktMTc2Yy01Ljc1Mi02LjA5NC01Ljc1Mi0xNS40MSAwLTIxLjVsMTY1LjktMTc2YzYuMTktNi41NjIgMTYuNjktNyAyMy40NS0xLjA5NGM2Ljc3MyA1LjkzOCA3LjI3NSAxNi4wNiAxLjExOCAyMi41OUw1NC4xMSAyNDBoMzc3LjNDNDQwLjYgMjQwIDQ0OCAyNDcuMiA0NDggMjU2eicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgInR5cGUgTG9nb1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dvKHsgY2xhc3NOYW1lID0gJ3ctMTYgaC0xMScgfTogTG9nb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD0nMCAwIDYwIDQ0Jz5cbiAgICAgIDxnIHN0cm9rZT0nbm9uZScgc3Ryb2tlV2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGxSdWxlPSdldmVub2RkJz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE4LjAwMDAwMCwgLTI2LjAwMDAwMCknIGZpbGxSdWxlPSdub256ZXJvJz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxOC4wMDAwMDAsIDI2LjAwMDAwMCknPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTAuOTM2NjMyODM1LDMxLjAwNDIxOTQgQzAuMzEyMjEwOTQ1LDMxLjAwNDIxOTQgMCwzMC42OTExNTU4IDAsMzAuMDY1MDI4NSBMMCwxNS45NzcxNjU1IEMwLDE1LjM1MTAzODMgMC4zMTIyMTA5NDUsMTUuMDM3OTc0NyAwLjkzNjYzMjgzNSwxNS4wMzc5NzQ3IEw5LjM2NjMyODM1LDE1LjAzNzk3NDcgQzExLjExNDcwOTYsMTUuMDM3OTc0NyAxMi40ODg0Mzc4LDE1LjQ3MjM1MDUgMTMuNDg3NTEyOCwxNi4zNDExMDIgQzE0LjQ4NjU4NzksMTcuMjA5ODUzNiAxNC45ODYxMjU0LDE4LjQxOTA2MTggMTQuOTg2MTI1NCwxOS45Njg3MjY3IEMxNC45ODYxMjU0LDIwLjM3NTcwOTQgMTQuOTI3NTg1OCwyMC43NDM1NTkyIDE0LjgxMDUwNjcsMjEuMDcyMjc2IEMxNC42OTM0Mjc2LDIxLjQwMDk5MjggMTQuNTcyNDQ1OSwyMS42NzQ5MjM1IDE0LjQ0NzU2MTUsMjEuODk0MDY4IEMxNC4yOTE0NTYsMjIuMTYwMTcyMSAxNC4xMTk3NCwyMi4zOTQ5Njk4IDEzLjkzMjQxMzQsMjIuNTk4NDYxMiBDMTQuMjI5MDEzOCwyMi43NzA2NDYxIDE0LjUwMjE5ODQsMjMuMDEzMjcwNSAxNC43NTE5NjcyLDIzLjMyNjMzNDEgQzE0Ljk3MDUxNDgsMjMuNTkyNDM4MiAxNS4xNjU2NDY3LDIzLjk0ODU0OCAxNS4zMzczNjI3LDI0LjM5NDY2MzcgQzE1LjUwOTA3ODcsMjQuODQwNzc5MyAxNS41OTQ5MzY3LDI1LjQwMDM4MDYgMTUuNTk0OTM2NywyNi4wNzM0Njc0IEMxNS41OTQ5MzY3LDI2Ljc3Nzg2MDUgMTUuNDk3MzcwOCwyNy40MzEzODA4IDE1LjMwMjIzODksMjguMDM0MDI4MyBDMTUuMTA3MTA3MSwyOC42MzY2NzU4IDE0Ljc3MTQ4MDMsMjkuMTU3MTQ0IDE0LjI5NTM1ODYsMjkuNTk1NDMzMSBDMTMuODE5MjM3LDMwLjAzMzcyMjIgMTMuMTgzMTA3MiwzMC4zNzgwOTIyIDEyLjM4Njk2OTIsMzAuNjI4NTQzMSBDMTEuNTkwODMxMywzMC44Nzg5OTQgMTAuNTgzOTUxLDMxLjAwNDIxOTQgOS4zNjYzMjgzNSwzMS4wMDQyMTk0IEwwLjkzNjYzMjgzNSwzMS4wMDQyMTk0IFogTTguMzEyNjE2NDEsMjEuMTQyNzE1MyBDOC41MzExNjQwOCwyMS4xNDI3MTUzIDguNzIyMzkzMjgsMjEuMDYwNTM2MSA4Ljg4NjMwNDAzLDIwLjg5NjE3NzcgQzkuMDUwMjE0NzcsMjAuNzMxODE5MyA5LjEzMjE3MDE0LDIwLjU0MDA2NzggOS4xMzIxNzAxNCwyMC4zMjA5MjMzIEM5LjEzMjE3MDE0LDIwLjEwMTc3ODggOS4wNTAyMTQ3NywxOS45MTAwMjczIDguODg2MzA0MDMsMTkuNzQ1NjY4OSBDOC43MjIzOTMyOCwxOS41ODEzMTA1IDguNTMxMTY0MDgsMTkuNDk5MTMxMyA4LjMxMjYxNjQxLDE5LjQ5OTEzMTMgTDYuMDg4MTEzNDMsMTkuNDk5MTMxMyBDNS45MzIwMDc5NiwxOS40OTkxMzEzIDUuODUzOTU1MjIsMTkuNTc3Mzk3MiA1Ljg1Mzk1NTIyLDE5LjczMzkyOSBMNS44NTM5NTUyMiwyMC45MDc5MTc2IEM1Ljg1Mzk1NTIyLDIxLjA2NDQ0OTQgNS45MzIwMDc5NiwyMS4xNDI3MTUzIDYuMDg4MTEzNDMsMjEuMTQyNzE1MyBMOC4zMTI2MTY0MSwyMS4xNDI3MTUzIFogTTguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBDOC43NjUzMjIyOCwyNi41NDMwNjI4IDguOTU2NTUxNDksMjYuNDYwODgzNiA5LjEyMDQ2MjIzLDI2LjI5NjUyNTIgQzkuMjg0MzcyOTgsMjYuMTMyMTY2OCA5LjM2NjMyODM1LDI1Ljk0MDQxNTMgOS4zNjYzMjgzNSwyNS43MjEyNzA4IEM5LjM2NjMyODM1LDI1LjUwMjEyNjMgOS4yODQzNzI5OCwyNS4zMTAzNzQ4IDkuMTIwNDYyMjMsMjUuMTQ2MDE2NCBDOC45NTY1NTE0OSwyNC45ODE2NTggOC43NjUzMjIyOCwyNC44OTk0Nzg4IDguNTQ2Nzc0NjIsMjQuODk5NDc4OCBMNi4wODgxMTM0MywyNC44OTk0Nzg4IEM1LjkzMjAwNzk2LDI0Ljg5OTQ3ODggNS44NTM5NTUyMiwyNC45Nzc3NDQ3IDUuODUzOTU1MjIsMjUuMTM0Mjc2NSBMNS44NTM5NTUyMiwyNi4zMDgyNjUxIEM1Ljg1Mzk1NTIyLDI2LjQ2NDc5NjkgNS45MzIwMDc5NiwyNi41NDMwNjI4IDYuMDg4MTEzNDMsMjYuNTQzMDYyOCBMOC41NDY3NzQ2MiwyNi41NDMwNjI4IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWInXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00xNi4zMzc1NTI3LDIzLjAyMTA5NyBDMTYuMzM3NTUyNywyMS44Njk4MzQ4IDE2LjU1MzI0NDEsMjAuNzg0NjkyMyAxNi45ODQ2MjY4LDE5Ljc2NTY2OTYgQzE3LjQxNjAwOTUsMTguNzQ2NjQ2OSAxOC4wMDgxODAyLDE3Ljg1OTg2MzggMTguNzYxMTM5MSwxNy4xMDUzMjAyIEMxOS41MTQwOTgsMTYuMzUwNzc2NyAyMC40MDQzMTUsMTUuNzU1Njk4NiAyMS40MzE3OTAxLDE1LjMyMDA4NTggQzIyLjQ1OTI2NTMsMTQuODg0NDczIDIzLjU3NjkzODYsMTQuNjY2NjY2NyAyNC43ODQ4MTAxLDE0LjY2NjY2NjcgQzI1Ljk3Njk5NSwxNC42NjY2NjY3IDI3LjA5MDc0NjcsMTQuODg0NDczIDI4LjEyNjA2NTEsMTUuMzIwMDg1OCBDMjkuMTYxMzgzNiwxNS43NTU2OTg2IDMwLjA1NTUyMjMsMTYuMzUwNzc2NyAzMC44MDg0ODExLDE3LjEwNTMyMDIgQzMxLjU2MTQ0LDE3Ljg1OTg2MzggMzIuMTUzNjEwOCwxOC43NDY2NDY5IDMyLjU4NDk5MzUsMTkuNzY1NjY5NiBDMzMuMDE2Mzc2MiwyMC43ODQ2OTIzIDMzLjIzMjA2NzUsMjEuODY5ODM0OCAzMy4yMzIwNjc1LDIzLjAyMTA5NyBDMzMuMjMyMDY3NSwyNC4xNzIzNTkzIDMzLjAxNjM3NjIsMjUuMjU3NTAxOCAzMi41ODQ5OTM1LDI2LjI3NjUyNDUgQzMyLjE1MzYxMDgsMjcuMjk1NTQ3MiAzMS41NjE0NCwyOC4xODIzMzAzIDMwLjgwODQ4MTEsMjguOTM2ODczOSBDMzAuMDU1NTIyMywyOS42OTE0MTc0IDI5LjE2MTM4MzYsMzAuMjg2NDk1NSAyOC4xMjYwNjUxLDMwLjcyMjEwODMgQzI3LjA5MDc0NjcsMzEuMTU3NzIxIDI1Ljk3Njk5NSwzMS4zNzU1Mjc0IDI0Ljc4NDgxMDEsMzEuMzc1NTI3NCBDMjMuNTc2OTM4NiwzMS4zNzU1Mjc0IDIyLjQ1OTI2NTMsMzEuMTU3NzIxIDIxLjQzMTc5MDEsMzAuNzIyMTA4MyBDMjAuNDA0MzE1LDMwLjI4NjQ5NTUgMTkuNTE0MDk4LDI5LjY5MTQxNzQgMTguNzYxMTM5MSwyOC45MzY4NzM5IEMxOC4wMDgxODAyLDI4LjE4MjMzMDMgMTcuNDE2MDA5NSwyNy4yOTU1NDcyIDE2Ljk4NDYyNjgsMjYuMjc2NTI0NSBDMTYuNTUzMjQ0MSwyNS4yNTc1MDE4IDE2LjMzNzU1MjcsMjQuMTcyMzU5MyAxNi4zMzc1NTI3LDIzLjAyMTA5NyBaIE0yMi40MzE4MTM2LDIzLjAyMTA5NyBDMjIuNDMxODEzNiwyMy43NTIzMDQyIDIyLjYzMTgxODMsMjQuMzU1MTYxMSAyMy4wMzE4Mjc3LDI0LjgyOTY2NzkgQzIzLjQzMTgzNzEsMjUuMzA0MTc0NiAyNC4wMTYxNjQ2LDI1LjU0MTQyOCAyNC43ODQ4MTAxLDI1LjU0MTQyOCBDMjUuNTM3NzY5LDI1LjU0MTQyOCAyNi4xMTQyNTMxLDI1LjMwNDE3NDYgMjYuNTE0MjYyNSwyNC44Mjk2Njc5IEMyNi45MTQyNzE5LDI0LjM1NTE2MTEgMjcuMTE0Mjc2NiwyMy43NTIzMDQyIDI3LjExNDI3NjYsMjMuMDIxMDk3IEMyNy4xMTQyNzY2LDIyLjI4OTg4OTkgMjYuOTE0MjcxOSwyMS42ODcwMzMgMjYuNTE0MjYyNSwyMS4yMTI1MjYyIEMyNi4xMTQyNTMxLDIwLjczODAxOTUgMjUuNTM3NzY5LDIwLjUwMDc2NjEgMjQuNzg0ODEwMSwyMC41MDA3NjYxIEMyNC4wMTYxNjQ2LDIwLjUwMDc2NjEgMjMuNDMxODM3MSwyMC43MzgwMTk1IDIzLjAzMTgyNzcsMjEuMjEyNTI2MiBDMjIuNjMxODE4MywyMS42ODcwMzMgMjIuNDMxODEzNiwyMi4yODk4ODk5IDIyLjQzMTgxMzYsMjMuMDIxMDk3IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLW8nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J000NC41NTY5NjIsMjUuNjAzODcxOSBDNDUuMTc1ODA4NywyNS42MDM4NzE5IDQ1LjQ4NTIzMjEsMjUuOTE2OTM1NiA0NS40ODUyMzIxLDI2LjU0MzA2MjggTDQ1LjQ4NTIzMjEsMzAuMDY1MDI4NSBDNDUuNDg1MjMyMSwzMC42OTExNTU4IDQ1LjE3NTgwODcsMzEuMDA0MjE5NCA0NC41NTY5NjIsMzEuMDA0MjE5NCBMMzUuMjc0MjYxNiwzMS4wMDQyMTk0IEMzNC42NTU0MTQ5LDMxLjAwNDIxOTQgMzQuMzQ1OTkxNiwzMC42OTExNTU4IDM0LjM0NTk5MTYsMzAuMDY1MDI4NSBMMzQuMzQ1OTkxNiwxNS45NzcxNjU1IEMzNC4zNDU5OTE2LDE1LjM1MTAzODMgMzQuNjU1NDE0OSwxNS4wMzc5NzQ3IDM1LjI3NDI2MTYsMTUuMDM3OTc0NyBMMzkuMjE5NDA5MywxNS4wMzc5NzQ3IEMzOS44MzgyNTYsMTUuMDM3OTc0NyA0MC4xNDc2NzkzLDE1LjM1MTAzODMgNDAuMTQ3Njc5MywxNS45NzcxNjU1IEw0MC4xNDc2NzkzLDI0Ljg5OTQ3ODggQzQwLjE0NzY3OTMsMjUuMTk2ODg5MiA0MC4xOTAyMjUsMjUuMzg4NjQwNyA0MC4yNzUzMTY1LDI1LjQ3NDczMzIgQzQwLjM2MDQwNzksMjUuNTYwODI1NyA0MC41NDk5Mjk3LDI1LjYwMzg3MTkgNDAuODQzODgxOSwyNS42MDM4NzE5IEw0NC41NTY5NjIsMjUuNjAzODcxOSBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1sJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNNDcuMzQ4MTc0LDIwLjQzODMyMjIgQzQ2LjcyNTA1OTQsMjAuNDM4MzIyMiA0Ni40MTM1MDIxLDIwLjEyNTI1ODUgNDYuNDEzNTAyMSwxOS40OTkxMzEzIEw0Ni40MTM1MDIxLDE1Ljk3NzE2NTUgQzQ2LjQxMzUwMjEsMTUuMzUxMDM4MyA0Ni43MjUwNTk0LDE1LjAzNzk3NDcgNDcuMzQ4MTc0LDE1LjAzNzk3NDcgTDU5LjAzMTU3MjgsMTUuMDM3OTc0NyBDNTkuNjU0Njg3NCwxNS4wMzc5NzQ3IDU5Ljk2NjI0NDcsMTUuMzUxMDM4MyA1OS45NjYyNDQ3LDE1Ljk3NzE2NTUgTDU5Ljk2NjI0NDcsMTkuNDk5MTMxMyBDNTkuOTY2MjQ0NywyMC4xMjUyNTg1IDU5LjY1NDY4NzQsMjAuNDM4MzIyMiA1OS4wMzE1NzI4LDIwLjQzODMyMjIgTDU2LjgxMTcyNywyMC40MzgzMjIyIEM1Ni41MTU3NDc2LDIwLjQzODMyMjIgNTYuMzI0OTE4OCwyMC40ODEzNjg0IDU2LjIzOTI0MDUsMjAuNTY3NDYwOSBDNTYuMTUzNTYyMiwyMC42NTM1NTM0IDU2LjExMDcyMzEsMjAuODQ1MzA0OSA1Ni4xMTA3MjMxLDIxLjE0MjcxNTMgTDU2LjExMDcyMzEsMzAuMDY1MDI4NSBDNTYuMTEwNzIzMSwzMC42OTExNTU4IDU1Ljc5OTE2NTgsMzEuMDA0MjE5NCA1NS4xNzYwNTEyLDMxLjAwNDIxOTQgTDUxLjIwMzY5NTYsMzEuMDA0MjE5NCBDNTAuNTgwNTgxLDMxLjAwNDIxOTQgNTAuMjY5MDIzNywzMC42OTExNTU4IDUwLjI2OTAyMzcsMzAuMDY1MDI4NSBMNTAuMjY5MDIzNywyMS4xNDI3MTUzIEM1MC4yNjkwMjM3LDIwLjg0NTMwNDkgNTAuMjI2MTg0NiwyMC42NTM1NTM0IDUwLjE0MDUwNjMsMjAuNTY3NDYwOSBDNTAuMDU0ODI4MSwyMC40ODEzNjg0IDQ5Ljg2Mzk5OTIsMjAuNDM4MzIyMiA0OS41NjgwMTk4LDIwLjQzODMyMjIgTDQ3LjM0ODE3NCwyMC40MzgzMjIyIFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00yMy44MzUxMTg1LDM5LjE0ODUyNTYgQzIzLjgzNTExODUsMzkuNDExMzEzOCAyMy44NzI5NjMzLDM5LjYyMzU2NTggMjMuOTQ4NjUzLDM5Ljc4NTI4MTYgQzI0LjAyNDM0MjcsMzkuOTQ2OTk3NCAyNC4xMjAyMTY0LDQwLjA3MDgxMTEgMjQuMjM2MjczOSw0MC4xNTY3MjI2IEMyNC4zNTIzMzE1LDQwLjI0MjYzNDIgMjQuNDczNDM1LDQwLjI5ODIyNCAyNC41OTk1ODQ2LDQwLjMyMzQ5MjEgQzI0LjcyNTczNDEsNDAuMzQ4NzYwMiAyNC44NDQzMTQ2LDQwLjM2MTM5NDIgMjQuOTU1MzI2Miw0MC4zNjEzOTQyIEMyNS4wNjYzMzc4LDQwLjM2MTM5NDIgMjUuMTg5OTY0Myw0MC4zNDg3NjAyIDI1LjMyNjIwNTgsNDAuMzIzNDkyMSBDMjUuNDYyNDQ3Myw0MC4yOTgyMjQgMjUuNTg4NTk2OCw0MC4yNDI2MzQyIDI1LjcwNDY1NDMsNDAuMTU2NzIyNiBDMjUuODIwNzExOSw0MC4wNzA4MTExIDI1LjkxNjU4NTUsMzkuOTQ2OTk3NCAyNS45OTIyNzUyLDM5Ljc4NTI4MTYgQzI2LjA2Nzk2NDksMzkuNjIzNTY1OCAyNi4xMDU4MDk4LDM5LjQxMTMxMzggMjYuMTA1ODA5OCwzOS4xNDg1MjU2IEwyNi4xMDU4MDk4LDM0LjAyNDE1NTggQzI2LjEwNTgwOTgsMzMuNjE5ODY2MyAyNi4zMDc2NDksMzMuNDE3NzIxNSAyNi43MTEzMjc1LDMzLjQxNzcyMTUgTDI5LjI4NDc3NzcsMzMuNDE3NzIxNSBDMjkuNjg4NDU2MSwzMy40MTc3MjE1IDI5Ljg5MDI5NTQsMzMuNjE5ODY2MyAyOS44OTAyOTU0LDM0LjAyNDE1NTggTDI5Ljg5MDI5NTQsMzkuMTc4ODQ3MyBDMjkuODkwMjk1NCwzOS44OTY0NjEzIDI5Ljc5NDQyMTcsNDAuNTUwOTA0OSAyOS42MDI2NzQ1LDQxLjE0MjE3ODQgQzI5LjQxMDkyNzIsNDEuNzMzNDUxOCAyOS4xMTMyMTQzLDQyLjI0MTM0MDUgMjguNzA5NTM1OSw0Mi42NjU4NDQ1IEMyOC4zMDU4NTc0LDQzLjA5MDM0ODYgMjcuNzkzNjkwNCw0My40MTg4MzM4IDI3LjE3MzAzNDcsNDMuNjUxMzAwMyBDMjYuNTUyMzc5MSw0My44ODM3NjY4IDI1LjgxODE4ODksNDQgMjQuOTcwNDY0MSw0NCBDMjQuMTIyNzM5NCw0NCAyMy4zODg1NDkyLDQzLjg4Mzc2NjggMjIuNzY3ODkzNSw0My42NTEzMDAzIEMyMi4xNDcyMzc5LDQzLjQxODgzMzggMjEuNjM1MDcwOSw0My4wOTAzNDg2IDIxLjIzMTM5MjQsNDIuNjY1ODQ0NSBDMjAuODI3NzEzOSw0Mi4yNDEzNDA1IDIwLjUzMDAwMTEsNDEuNzMzNDUxOCAyMC4zMzgyNTM4LDQxLjE0MjE3ODQgQzIwLjE0NjUwNjUsNDAuNTUwOTA0OSAyMC4wNTA2MzI5LDM5Ljg5NjQ2MTMgMjAuMDUwNjMyOSwzOS4xNzg4NDczIEwyMC4wNTA2MzI5LDM0LjAyNDE1NTggQzIwLjA1MDYzMjksMzMuNjE5ODY2MyAyMC4yNTI0NzIxLDMzLjQxNzcyMTUgMjAuNjU2MTUwNiwzMy40MTc3MjE1IEwyMy4yMjk2MDA4LDMzLjQxNzcyMTUgQzIzLjYzMzI3OTIsMzMuNDE3NzIxNSAyMy44MzUxMTg1LDMzLjYxOTg2NjMgMjMuODM1MTE4NSwzNC4wMjQxNTU4IEwyMy44MzUxMTg1LDM5LjE0ODUyNTYgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tdSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXNlY29uZGFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMzEuMjQ3MTc3MiwzNC4zOTM3NzAyIEMzMS4xNzgyMDUyLDM0LjI5MzY2MjYgMzEuMTQzNzE5MiwzNC4xNjg1MjgyIDMxLjE0MzcxOTIsMzQuMDE4MzY2OCBDMzEuMTQzNzE5MiwzMy42MTc5MzY2IDMxLjM0MDc4MjEsMzMuNDE3NzIxNSAzMS43MzQ5MDgsMzMuNDE3NzIxNSBMMzQuOTcxNjY2MywzMy40MTc3MjE1IEMzNS4xNTg4NzYxLDMzLjQxNzcyMTUgMzUuMzAxNzQ2NywzMy40NzUyODM0IDM1LjQwMDI3ODIsMzMuNTkwNDA3IEMzNS40OTg4MDk2LDMzLjcwNTUzMDcgMzUuNTkyNDE0NSwzMy44NDgxODQgMzUuNjgxMDkyOCwzNC4wMTgzNjY4IEwzNi4yNzIyODE1LDM1LjExNDU0NDYgTDM2Ljk2NjkyODMsMzQuMDE4MzY2OCBDMzcuMDc1MzEyOSwzMy44NDgxODQgMzcuMTc4NzcwOSwzMy43MDU1MzA3IDM3LjI3NzMwMjQsMzMuNTkwNDA3IEMzNy4zNzU4MzM5LDMzLjQ3NTI4MzQgMzcuNDk4OTk4MiwzMy40MTc3MjE1IDM3LjY0Njc5NTQsMzMuNDE3NzIxNSBMNDAuNjMyMjk4NSwzMy40MTc3MjE1IEM0MS4wMjY0MjQzLDMzLjQxNzcyMTUgNDEuMjIzNDg3MywzMy42MTc5MzY2IDQxLjIyMzQ4NzMsMzQuMDE4MzY2OCBDNDEuMjIzNDg3MywzNC4xNjg1MjgyIDQxLjE4OTAwMTIsMzQuMjkzNjYyNiA0MS4xMjAwMjkyLDM0LjM5Mzc3MDIgTDM4LjY5NjE1NTQsMzguMTE3NzcxMiBMNDEuMzEyMTY1Niw0Mi42Njc2NTk1IEM0MS4zNzEyODQ0LDQyLjc3Nzc3NzggNDEuNDAwODQzOSw0Mi44OTc5MDY4IDQxLjQwMDg0MzksNDMuMDI4MDQ2NyBDNDEuNDAwODQzOSw0My40Mjg0NzY5IDQxLjIwMzc4MSw0My42Mjg2OTIgNDAuODA5NjU1MSw0My42Mjg2OTIgTDM3Ljc5NDU5MjYsNDMuNjI4NjkyIEMzNy42MjcwODkxLDQzLjYyODY5MiAzNy40ODkxNDUsNDMuNTY4NjI3NSAzNy4zODA3NjA0LDQzLjQ0ODQ5ODQgQzM3LjI3MjM3NTgsNDMuMzI4MzY5MyAzNy4xNjM5OTEyLDQzLjE4ODIxODcgMzcuMDU1NjA2Niw0My4wMjgwNDY3IEwzNi4wODAxNDUyLDQxLjMzMTIyMzYgTDM1LjE2MzgwMjcsNDMuMDI4MDQ2NyBDMzUuMDU1NDE4MSw0My4xODgyMTg3IDM0Ljk1NDQyMzMsNDMuMzI4MzY5MyAzNC44NjA4MTg0LDQzLjQ0ODQ5ODQgQzM0Ljc2NzIxMzUsNDMuNTY4NjI3NSAzNC42MjE4Nzk2LDQzLjYyODY5MiAzNC40MjQ4MTY3LDQzLjYyODY5MiBMMzEuNDA5NzU0MSw0My42Mjg2OTIgQzMxLjAxNTYyODMsNDMuNjI4NjkyIDMwLjgxODU2NTQsNDMuNDI4NDc2OSAzMC44MTg1NjU0LDQzLjAyODA0NjcgQzMwLjgxODU2NTQsNDIuOTA3OTE3NiAzMC44NDMxOTgzLDQyLjc5Nzc5OTMgMzAuODkyNDY0LDQyLjY5NzY5MTcgTDMzLjY1NjI3MTQsMzguMTAyNzU1IEwzMS4yNDcxNzcyLDM0LjM5Mzc3MDIgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28teCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXNlY29uZGFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMzUuNTU2NDkwMiw1LjM4ODYwNzU5IEMzNS40MjU2NTkyLDUuMTQyMjUzNDMgMzUuMTYzOTk3MSw0Ljk4OTQ1MTQ4IDM0Ljg3OTk5ODEsNC45ODk0NTE0OCBMMjkuODgyODkxNSw0Ljk4OTQ1MTQ4IEwzMS41MDUxOTYxLDEuMDI1OTU1OTYgQzMxLjU5OTkzNjksMC43OTU5NzM0MzEgMzEuNTcwOTk0NSwwLjUzMzg3MTMwOCAzMS40Mjg0MjA2LDAuMzI4MDU2NDM1IEMzMS4yODU4NDY3LDAuMTIyMjQxNTYxIDMxLjAyMjA3ODcsMCAzMC43OTU1MTc2LDAgTDI1LjE3OTM1NywwIEMyNC43OTU0Nzk2LDAgMjQuNDcxMjc0LDAuMjc3NzI1MzQzIDI0LjQyMDUzNzEsMC42NDk4NzYwNTUgTDIzLjM5OTQxNyw4LjEzNDA1MzI3IEMyMy4zNjk0ODg2LDguMzQ3OTc2IDIzLjQzNjMwNDksOC41NjMxNDYxIDIzLjU4MTg3ODQsOC43MjUzMDMyNyBDMjMuNzI3NDUxOCw4Ljg4NzQ2MDQ0IDIzLjkzNzczODcsOC45ODEwMTI2NiAyNC4xNTgyMzY5LDguOTgxMDEyNjYgTDI4LjgyNjY3MDQsOC45ODEwMTI2NiBMMjcuNDkzNDcwNCwxNS4wMzM4NDEgQzI3LjQxNjY5NSwxNS4zODM3MjYzIDI3LjYwNDE2NjIsMTUuNzM3MzUzNiAyNy45NDAyMTA1LDE1Ljg3ODYxNzUgQzI4LjAzODQ5MzMsMTUuOTQ3NTM0MyAyOC4xNDA2MDUzLDE1Ljk2NjI0NDcgMjguMjQyNzE3MywxNS45NjYyNDQ3IEMyOC40ODkwMzA2LDE1Ljk2NjI0NDcgMjguNzI4Mzg3NiwxNS44NDkzMDQ1IDI4Ljg3NDg1NDUsMTUuNjQwNjgzIEwzNS41MTIxMzUzLDYuMTYwNzI1MjEgQzM1LjY3MTM2NjIsNS45MzEyMTA0NCAzNS42OTA1MTIyLDUuNjM0OTYxNzYgMzUuNTU2NDkwMiw1LjM4ODYwNzU5IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWljb24nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTY0MCA0NjR2MzJhMTYgMTYgMCAwIDEtMTYgMTZIMTZhMTYgMTYgMCAwIDEtMTYtMTZ2LTMyYTE2IDE2IDAgMCAxIDE2LTE2aDYwOGExNiAxNiAwIDAgMSAxNiAxNnonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTQwLjY4IDQ0OGwyMzkuNzktMzMwLjI1LTUzLjQxLTczLjU1YTE2IDE2IDAgMCAxIDMuNTQtMjIuMzVsMjUuODgtMTguOGExNiAxNiAwIDAgMSAyMi4zNSAzLjU1TDMyMCA2My4zbDQxLjE2LTU2LjY5YTE2IDE2IDAgMCAxIDIyLjM1LTMuNTVsMjUuOSAxOC43OUExNiAxNiAwIDAgMSA0MTMgNDQuMmwtNTMuNDEgNzMuNTVMNTk5LjMyIDQ0OGgtMTYzTDMyMCAyODggMjAzLjY0IDQ0OHonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBzaW5nbGVwYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzUyIDI1NmEyNCAyNCAwIDEgMCAyNCAyNCAyNCAyNCAwIDAgMC0yNC0yNHptLTE5NC40OCAxNmgzN0wxNzYgMjE4Ljc4ek00NjQgNjRINDhhNDggNDggMCAwIDAtNDggNDh2Mjg4YTQ4IDQ4IDAgMCAwIDQ4IDQ4aDQxNmE0OCA0OCAwIDAgMCA0OC00OFYxMTJhNDggNDggMCAwIDAtNDgtNDh6TTI1MC41OCAzNTJoLTE2Ljk0YTE2IDE2IDAgMCAxLTE1LjEyLTEwLjc1TDIxMS4xNSAzMjBoLTcwLjI5bC03LjM4IDIxLjI1QTE2IDE2IDAgMCAxIDExOC4zNiAzNTJoLTE2Ljk0YTE2IDE2IDAgMCAxLTE1LjEyLTIxLjI1TDE0MCAxNzYuMTJBMjQgMjQgMCAwIDEgMTYyLjY3IDE2MGgyNi42NkEyNCAyNCAwIDAgMSAyMTIgMTc2LjEzbDUzLjY5IDE1NC42MkExNiAxNiAwIDAgMSAyNTAuNTggMzUyek00MjQgMzM2YTE2IDE2IDAgMCAxLTE2IDE2aC0xNmExNS43NCAxNS43NCAwIDAgMS0xMi01LjY4QTcyIDcyIDAgMSAxIDM1MiAyMDhhNzEuMDUgNzEuMDUgMCAwIDEgMjQgNC40MlYxNzZhMTYgMTYgMCAwIDEgMTYtMTZoMTZhMTYgMTYgMCAwIDEgMTYgMTZ6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMTIgMTc2LjEzQTI0IDI0IDAgMCAwIDE4OS4zMyAxNjBoLTI2LjY2QTI0IDI0IDAgMCAwIDE0MCAxNzYuMTJMODYuMyAzMzAuNzVBMTYgMTYgMCAwIDAgMTAxLjQyIDM1MmgxNi45NGExNiAxNiAwIDAgMCAxNS4xMi0xMC43NWw3LjM4LTIxLjI1aDcwLjI5bDcuMzcgMjEuMjVBMTYgMTYgMCAwIDAgMjMzLjY0IDM1MmgxNi45NGExNiAxNiAwIDAgMCAxNS4xMS0yMS4yNXpNMTU3LjUyIDI3MkwxNzYgMjE4Ljc4IDE5NC40OCAyNzJ6TTQwOCAxNjBoLTE2YTE2IDE2IDAgMCAwLTE2IDE2djM2LjQyYTcxLjA1IDcxLjA1IDAgMCAwLTI0LTQuNDIgNzIgNzIgMCAxIDAgMjggMTM4LjMyIDE1Ljc0IDE1Ljc0IDAgMCAwIDEyIDUuNjhoMTZhMTYgMTYgMCAwIDAgMTYtMTZWMTc2YTE2IDE2IDAgMCAwLTE2LTE2em0tNTYgMTQ0YTI0IDI0IDAgMSAxIDI0LTI0IDI0IDI0IDAgMCAxLTI0IDI0eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEFycm93UmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMjAgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yODUuNDc2IDI3Mi45NzFMOTEuMTMyIDQ2Ny4zMTRjLTkuMzczIDkuMzczLTI0LjU2OSA5LjM3My0zMy45NDEgMGwtMjIuNjY3LTIyLjY2N2MtOS4zNTctOS4zNTctOS4zNzUtMjQuNTIyLS4wNC0zMy45MDFMMTg4LjUwNSAyNTYgMzQuNDg0IDEwMS4yNTVjLTkuMzM1LTkuMzc5LTkuMzE3LTI0LjU0NC4wNC0zMy45MDFsMjIuNjY3LTIyLjY2N2M5LjM3My05LjM3MyAyNC41NjktOS4zNzMgMzMuOTQxIDBMMjg1LjQ3NSAyMzkuMDNjOS4zNzMgOS4zNzIgOS4zNzMgMjQuNTY4LjAwMSAzMy45NDF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjU2IDB2MTI4aDEyOEwyNTYgMHpNMTU0LjEgMjU3LjhjLTcuODEyLTcuODEyLTIwLjQ3LTcuODEyLTI4LjI4IDBsLTQ4IDQ4Yy03LjgxMiA3LjgxMi03LjgxMiAyMC41IDAgMjguMzFsNDggNDhDMTI5LjggMzg2LjEgMTM0LjkgMzg4IDE0MCAzODhzMTAuMjMtMS45MzggMTQuMTQtNS44NDRjNy44MTItNy44MTIgNy44MTItMjAuNSAwLTI4LjMxTDEyMC4zIDMyMGwzMy44Ni0zMy44NEMxNjEuMSAyNzguMyAxNjEuMSAyNjUuNyAxNTQuMSAyNTcuOHpNMjU4LjEgMjU3LjhjLTcuODEyLTcuODEyLTIwLjQ3LTcuODEyLTI4LjI4IDBzLTcuODEyIDIwLjUgMCAyOC4zMUwyNjMuNyAzMjBsLTMzLjg2IDMzLjg0Yy03LjgxMiA3LjgxMi03LjgxMiAyMC41IDAgMjguMzFDMjMzLjggMzg2LjEgMjM4LjkgMzg4IDI0NCAzODhzMTAuMjMtMS45MzggMTQuMTQtNS44NDRsNDgtNDhjNy44MTItNy44MTIgNy44MTItMjAuNSAwLTI4LjMxTDI1OC4xIDI1Ny44eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjU2IDEyOFYwSDQ4QzIxLjQ5IDAgMCAyMS40OSAwIDQ4djQxNkMwIDQ5MC41IDIxLjQ5IDUxMiA0OCA1MTJoMjg4YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMTI4SDI1NnpNMTU0LjEgMzUzLjhjNy44MTIgNy44MTIgNy44MTIgMjAuNSAwIDI4LjMxQzE1MC4yIDM4Ni4xIDE0NS4xIDM4OCAxNDAgMzg4cy0xMC4yMy0xLjkzOC0xNC4xNC01Ljg0NGwtNDgtNDhjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMWw0OC00OGM3LjgxMi03LjgxMiAyMC40Ny03LjgxMiAyOC4yOCAwczcuODEyIDIwLjUgMCAyOC4zMUwxMjAuMyAzMjBMMTU0LjEgMzUzLjh6TTMwNi4xIDMzNC4ybC00OCA0OEMyNTQuMiAzODYuMSAyNDkuMSAzODggMjQ0IDM4OHMtMTAuMjMtMS45MzgtMTQuMTQtNS44NDRjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMUwyNjMuNyAzMjBsLTMzLjg2LTMzLjg0Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFzMjAuNDctNy44MTIgMjguMjggMGw0OCA0OEMzMTMuMSAzMTMuNyAzMTMuMSAzMjYuMyAzMDYuMSAzMzQuMnonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGFwcGRlc2lnbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J000MTIuNyAyNTYuMUMzODcuMSAyODAuMyAzNTcuNyAyOTguOCAzMjQuMSAzMDkuNUwyNTYgMTkySDI1NS4xTDk4LjY1IDQ2My43QzkzLjk1IDQ3MS44IDg2Ljk3IDQ3OC40IDc4LjU4IDQ4Mi42TDIzLjE2IDUxMC4zQzE4LjIgNTEyLjggMTIuMzEgNTEyLjUgNy41ODggNTA5LjZDMi44NzEgNTA2LjcgMCA1MDEuNSAwIDQ5NlY0NDAuNkMwIDQzMi4yIDIuMjI4IDQyMy45IDYuNDYgNDE2LjVMMTY4LjggMTM2LjJDMTYzLjEgMTIzLjkgMTYwIDExMC4zIDE2MCA5NkMxNjAgNDIuOTggMjAyLjEgMCAyNTYgMEMzMDkgMCAzNTIgNDIuOTggMzUyIDk2QzM1MiAxMTAuMyAzNDguOSAxMjMuOSAzNDMuMiAxMzYuMkw0MTIuNyAyNTYuMXpNMjU1LjEgNjRDMjM4LjMgNjQgMjIzLjEgNzguMzMgMjIzLjEgOTZDMjIzLjEgMTEzLjcgMjM4LjMgMTI4IDI1NS4xIDEyOEMyNzMuNyAxMjggMjg4IDExMy43IDI4OCA5NkMyODggNzguMzMgMjczLjcgNjQgMjU1LjEgNjR6TTM1Ni43IDM2NS45QzM4OS42IDM1My42IDQxOS42IDMzNS41IDQ0NS41IDMxMi45TDUwNS41IDQxNi41QzUwOS44IDQyMy45IDUxMiA0MzIuMiA1MTIgNDQwLjZWNDk2QzUxMiA1MDEuNSA1MDkuMSA1MDYuNyA1MDQuNCA1MDkuNkM0OTkuNyA1MTIuNSA0OTMuOCA1MTIuOCA0ODguOCA1MTAuM0w0MzMuNCA0ODIuNkM0MjUgNDc4LjQgNDE4IDQ3MS44IDQxMy4zIDQ2My43TDM1Ni43IDM2NS45eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNjYuNDkgMzEyLjlDNTMuNjYgMzAxLjYgNDEuODQgMjg5LjMgMzEuMTggMjc2QzIwLjEzIDI2Mi4yIDIyLjM0IDI0Mi4xIDM2LjEzIDIzMUM0OS45MiAyMTkuMSA3MC4wNiAyMjIuMiA4MS4xMiAyMzUuMUM4Ni43OSAyNDMuMSA5Mi44NyAyNDkuOCA5OS4zNCAyNTYuMUw2Ni40OSAzMTIuOXpNMTU1LjMgMzY1LjlMMTg3LjkgMzA5LjVDMjA5LjQgMzE2LjMgMjMyLjMgMzIwIDI1NS4xIDMyMEMzMjYuNyAzMjAgMzg5LjggMjg3LjMgNDMwLjkgMjM1LjFDNDQxLjkgMjIyLjIgNDYyLjEgMjE5LjEgNDc1LjkgMjMxQzQ4OS43IDI0Mi4xIDQ5MS45IDI2Mi4yIDQ4MC44IDI3NkM0MjguMSAzNDEuOCAzNDYuMSAzODQgMjU1LjEgMzg0QzIyMC42IDM4NCAxODYuNiAzNzcuNiAxNTUuMyAzNjUuOUgxNTUuM3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bHRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjg4IDk2QzI4OCAxMTMuNyAyNzMuNyAxMjggMjU2IDEyOEMyMzguMyAxMjggMjI0IDExMy43IDIyNCA5NkMyMjQgNzguMzMgMjM4LjMgNjQgMjU2IDY0QzI3My43IDY0IDI4OCA3OC4zMyAyODggOTZ6TTk2IDE2MEM5NiAxNDIuMyAxMTAuMyAxMjggMTI4IDEyOEMxNDUuNyAxMjggMTYwIDE0Mi4zIDE2MCAxNjBDMTYwIDE3Ny43IDE0NS43IDE5MiAxMjggMTkyQzExMC4zIDE5MiA5NiAxNzcuNyA5NiAxNjB6TTY0IDI4OEM2NCAyNzAuMyA3OC4zMyAyNTYgOTYgMjU2QzExMy43IDI1NiAxMjggMjcwLjMgMTI4IDI4OEMxMjggMzA1LjcgMTEzLjcgMzIwIDk2IDMyMEM3OC4zMyAzMjAgNjQgMzA1LjcgNjQgMjg4ek0zNTIgMTYwQzM1MiAxNDIuMyAzNjYuMyAxMjggMzg0IDEyOEM0MDEuNyAxMjggNDE2IDE0Mi4zIDQxNiAxNjBDNDE2IDE3Ny43IDQwMS43IDE5MiAzODQgMTkyQzM2Ni4zIDE5MiAzNTIgMTc3LjcgMzUyIDE2MHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTUxMiAyNTUuMUM1MTIgMjU2LjkgNTExLjEgMjU3LjggNTExLjEgMjU4LjdDNTExLjYgMjk1LjIgNDc4LjQgMzE5LjEgNDQxLjkgMzE5LjFIMzQ0QzMxNy41IDMxOS4xIDI5NiAzNDEuNSAyOTYgMzY4QzI5NiAzNzEuNCAyOTYuNCAzNzQuNyAyOTcgMzc3LjlDMjk5LjIgMzg4LjEgMzAzLjUgMzk3LjEgMzA3LjkgNDA3LjhDMzEzLjkgNDIxLjYgMzIwIDQzNS4zIDMyMCA0NDkuOEMzMjAgNDgxLjcgMjk4LjQgNTEwLjUgMjY2LjYgNTExLjhDMjYzLjEgNTExLjkgMjU5LjUgNTEyIDI1NiA1MTJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZDMCAxMTQuNiAxMTQuNiAwIDI1NiAwQzM5Ny40IDAgNTEyIDExNC42IDUxMiAyNTZWMjU1LjF6TTk2IDI1NS4xQzc4LjMzIDI1NS4xIDY0IDI3MC4zIDY0IDI4Ny4xQzY0IDMwNS43IDc4LjMzIDMxOS4xIDk2IDMxOS4xQzExMy43IDMxOS4xIDEyOCAzMDUuNyAxMjggMjg3LjFDMTI4IDI3MC4zIDExMy43IDI1NS4xIDk2IDI1NS4xek0xMjggMTkxLjFDMTQ1LjcgMTkxLjEgMTYwIDE3Ny43IDE2MCAxNTkuMUMxNjAgMTQyLjMgMTQ1LjcgMTI3LjEgMTI4IDEyNy4xQzExMC4zIDEyNy4xIDk2IDE0Mi4zIDk2IDE1OS4xQzk2IDE3Ny43IDExMC4zIDE5MS4xIDEyOCAxOTEuMXpNMjU2IDYzLjFDMjM4LjMgNjMuMSAyMjQgNzguMzMgMjI0IDk1LjFDMjI0IDExMy43IDIzOC4zIDEyNy4xIDI1NiAxMjcuMUMyNzMuNyAxMjcuMSAyODggMTEzLjcgMjg4IDk1LjFDMjg4IDc4LjMzIDI3My43IDYzLjEgMjU2IDYzLjF6TTM4NCAxOTEuMUM0MDEuNyAxOTEuMSA0MTYgMTc3LjcgNDE2IDE1OS4xQzQxNiAxNDIuMyA0MDEuNyAxMjcuMSAzODQgMTI3LjFDMzY2LjMgMTI3LjEgMzUyIDE0Mi4zIDM1MiAxNTkuMUMzNTIgMTc3LjcgMzY2LjMgMTkxLjEgMzg0IDE5MS4xeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbmV3cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00wIDEyOHYzMDRDMCA0NTguNSAyMS40OSA0ODAgNDggNDgwUzk2IDQ1OC41IDk2IDQzMlY5NkgzMkMxNC4zMyA5NiAwIDExMC4zIDAgMTI4ek0yNzIgMjg4aC05NkMxNjcuMiAyODggMTYwIDI5NS4yIDE2MCAzMDRDMTYwIDMxMi44IDE2Ny4yIDMyMCAxNzYgMzIwaDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDMjg4IDI5NS4yIDI4MC44IDI4OCAyNzIgMjg4ek0zMzYgMzIwaDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDNDQ4IDI5NS4yIDQ0MC44IDI4OCA0MzIgMjg4aC05NkMzMjcuMiAyODggMzIwIDI5NS4yIDMyMCAzMDRDMzIwIDMxMi44IDMyNy4yIDMyMCAzMzYgMzIwek0yNzIgMzg0aC05NkMxNjcuMiAzODQgMTYwIDM5MS4yIDE2MCA0MDBDMTYwIDQwOC44IDE2Ny4yIDQxNiAxNzYgNDE2aDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDMjg4IDM5MS4yIDI4MC44IDM4NCAyNzIgMzg0ek00MzIgMzg0aC05NmMtOC44MzYgMC0xNiA3LjE2Mi0xNiAxNmMwIDguODM2IDcuMTY0IDE2IDE2IDE2aDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDNDQ4IDM5MS4yIDQ0MC44IDM4NCA0MzIgMzg0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNDgwIDMySDEyOEMxMTAuMyAzMiA5NiA0Ni4zMyA5NiA2NHYzNjhDOTYgNDU4LjUgNzQuNTEgNDgwIDQ4IDQ4MEg0NDhjMzUuMzUgMCA2NC0yOC42NSA2NC02NFY2NEM1MTIgNDYuMzMgNDk3LjcgMzIgNDgwIDMyek0yNzIgNDE2aC05NkMxNjcuMiA0MTYgMTYwIDQwOC44IDE2MCA0MDBDMTYwIDM5MS4yIDE2Ny4yIDM4NCAxNzYgMzg0aDk2YzguODM2IDAgMTYgNy4xNjIgMTYgMTZDMjg4IDQwOC44IDI4MC44IDQxNiAyNzIgNDE2ek0yNzIgMzIwaC05NkMxNjcuMiAzMjAgMTYwIDMxMi44IDE2MCAzMDRDMTYwIDI5NS4yIDE2Ny4yIDI4OCAxNzYgMjg4aDk2QzI4MC44IDI4OCAyODggMjk1LjIgMjg4IDMwNEMyODggMzEyLjggMjgwLjggMzIwIDI3MiAzMjB6TTQzMiA0MTZoLTk2Yy04LjgzNiAwLTE2LTcuMTY0LTE2LTE2YzAtOC44MzggNy4xNjQtMTYgMTYtMTZoOTZjOC44MzYgMCAxNiA3LjE2MiAxNiAxNkM0NDggNDA4LjggNDQwLjggNDE2IDQzMiA0MTZ6TTQzMiAzMjBoLTk2QzMyNy4yIDMyMCAzMjAgMzEyLjggMzIwIDMwNEMzMjAgMjk1LjIgMzI3LjIgMjg4IDMzNiAyODhoOTZDNDQwLjggMjg4IDQ0OCAyOTUuMiA0NDggMzA0QzQ0OCAzMTIuOCA0NDAuOCAzMjAgNDMyIDMyMHpNNDQ4IDIwOEM0NDggMjE2LjggNDQwLjggMjI0IDQzMiAyMjRoLTI1NkMxNjcuMiAyMjQgMTYwIDIxNi44IDE2MCAyMDh2LTk2QzE2MCAxMDMuMiAxNjcuMiA5NiAxNzYgOTZoMjU2QzQ0MC44IDk2IDQ0OCAxMDMuMiA0NDggMTEyVjIwOHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5vdGljZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xOTIgMjI0YzEzLjI1IDAgMjQtMTAuNzUgMjQtMjR2LTExMkMyMTYgNzQuNzUgMjA1LjMgNjQgMTkyIDY0UzE2OCA3NC43NSAxNjggODh2MTEyQzE2OCAyMTMuMyAxNzguOCAyMjQgMTkyIDIyNHpNMTkyIDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMycy0xNC4zMy0zMi0zMi0zMlMxNjAgMjcwLjMgMTYwIDI4OFMxNzQuMyAzMjAgMTkyIDMyMHpNMTEyLjMgMzg0bC0uMDkwNiA3MC4zNWMwIDYuMjk3IDEuODg2IDEyLjQzIDUuMzU1IDE3LjY4bDE3LjA4IDI1LjY5QzEzOS44IDUwNS42IDE1MS44IDUxMiAxNjEuMiA1MTJoNjEuNjdjOS40MzggMCAyMS4zNi02LjM5NSAyNi42MS0xNC4yN2wxNy4zNC0yNS43YzIuOTM4LTQuNDM4IDUuMDk3LTEyLjM1IDUuMDk3LTE3LjY4bC4yMTU2LTcwLjM1TDExMi4zIDM4NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTE5MS41IC4wMTI3Qzg5LjQ3IC4yNjI3IDE2IDgyLjEgMTYgMTc1LjFjMCA0NC4zOCAxNi41MiA4NC44OSA0My41MiAxMTUuOGMxNi42MiAxOC44OCA0Mi4zNiA1OC4yMyA1Mi4yNCA5MS40OGMwIC4yNSAuMTE0NiAuNTEwNCAuMTE0NiAuNzYwNGwxNjAuMyAuMDAwNmMwLS4yNSAuMDgzMy0uNTExMSAuMDgzMy0uNzYxMWM5Ljg3NS0zMy4yNSAzNS42MS03Mi42MSA1Mi4yNC05MS40OEMzNTEuNSAyNjAuOSAzNjggMjIwLjQgMzY4IDE3NS4xQzM2OCA3OC42MiAyODguOC0uMjM3MyAxOTEuNSAuMDEyN3pNMTY4IDg4QzE2OCA3NC43NSAxNzguOCA2NCAxOTIgNjRzMjQgMTAuNzUgMjQgMjR2MTEyQzIxNiAyMTMuMyAyMDUuMyAyMjQgMTkyIDIyNFMxNjggMjEzLjMgMTY4IDIwMFY4OHpNMTkyIDMyMGMtMTcuNjcgMC0zMi0xNC4zMy0zMi0zMnMxNC4zMy0zMiAzMi0zMnMzMiAxNC4zMyAzMiAzMlMyMDkuNyAzMjAgMTkyIDMyMHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yOTguOSAzMDkuNmwtNDUuNjQtNi42ODhsLTIwLjM2LTQxLjRjLTMuNjI1LTcuMzc1LTE0LjE2LTcuNS0xNy45MSAwTDE5NC43IDMwMi45TDE0OSAzMDkuNmMtOC4yNSAxLjEyNS0xMS4zNyAxMS4yMi01LjQ5MSAxNy4xbDMyLjk0IDMyLjFsLTcuNzcyIDQ1LjU1Yy0xLjUgOC4yNSA3LjI2NCAxNC4zNyAxNC41MSAxMC40OWw0MC43Ny0yMS41M2w0MC43NyAyMS41M2M3LjM3NSAzLjg3NSAxNi4wMS0yLjI0MiAxNC41MS0xMC40OWwtNy43NzMtNDUuNTVsMzIuMS0zMi4xQzMxMC40IDMyMC44IDMwNy4yIDMxMC43IDI5OC45IDMwOS42ek00MjQgMTQzLjFMMTI3LjQgMTQzLjFjNi4zNzUtMzAuODggMzAuNzUtNTUuMjUgNjIuNzUtNjEuMUMxOTguOCA5MC42MiAyMTAuOCA5NS4xIDIyNCA5NS4xbDYyLjIgLjAwMDFjMjMuMjEgMCA0NC41LTE1LjY5IDQ4Ljg5LTM4LjQ4QzM0MC4xIDI2Ljg1IDMxNy42IDAgMjg4IDBoLTY0Yy0yMiAwLTQwLjUgMTUtNDYuMTMgMzUuMjVjLTUyIDExLjYyLTkxLjc1IDU1LTk4LjUgMTA4LjhMMjMuMSAxNDMuMUMxMC43NSAxNDMuMSAwIDE1NC43IDAgMTY3LjFjMCAxMy4yNSAxMC43NSAyNCAyMy4xIDI0aDQwMGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0QzQ0OCAxNTQuNyA0MzcuMyAxNDMuMSA0MjQgMTQzLjF6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J000OCAxOTEuMWwyOS4xMiAyOTEuMmMxLjYzNiAxNi4zNiAxNS4yNCAyOC44MiAzMS42OCAyOC44MmgyMzAuNGMxNi40NCAwIDMwLjA1LTEyLjQ2IDMxLjY4LTI4LjgyTDQwMCAxOTEuMUg0OHpNMzA0LjUgMzI2LjdsLTMyLjEgMzIuMWw3Ljc3MyA0NS41NWMxLjUgOC4yNS03LjEzOSAxNC4zNy0xNC41MSAxMC40OUwyMjMuMSAzOTMuM2wtNDAuNzcgMjEuNTNjLTcuMjUgMy44NzUtMTYuMDEtMi4yNDItMTQuNTEtMTAuNDlsNy43NzItNDUuNTVsLTMyLjk0LTMyLjFDMTM3LjcgMzIwLjggMTQwLjggMzEwLjcgMTQ5IDMwOS42TDE5NC43IDMwMi45bDIwLjM2LTQxLjRjMy43NS03LjUgMTQuMjktNy4zNzUgMTcuOTEgMGwyMC4zNiA0MS40bDQ1LjY0IDYuNjg4QzMwNy4yIDMxMC43IDMxMC40IDMyMC44IDMwNC41IDMyNi43eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J002MjIuMyAyNzEuMWwtMTE1LjEtNDUuMDFjLTQuMTI1LTEuNjI5LTEyLjYyLTMuNzU0LTIyLjI1IDBMMzY5LjggMjcxLjFDMzU5IDI3NS4yIDM1MiAyODUuMSAzNTIgMjk1LjFjMCAxMTEuNiA2OC43NSAxODguOCAxMzIuOSAyMTMuOWM5LjYyNSAzLjc1IDE4IDEuNjI1IDIyLjI1IDBDNTU4LjQgNDg5LjkgNjQwIDQyMC41IDY0MCAyOTUuMUM2NDAgMjg1LjEgNjMzIDI3NS4yIDYyMi4zIDI3MS4xek00OTYgNDYyLjRWMjczLjJsOTUuNSAzNy4zOEM1ODUuOSAzOTcuOCA1MzAuNiA0NDYgNDk2IDQ2Mi40eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMxIDEyOC0xMjhTMjk0LjcgMCAyMjQgMEMxNTMuMyAwIDk2IDU3LjMxIDk2IDEyOFMxNTMuMyAyNTYgMjI0IDI1NnpNMzIwLjYgMzEwLjNDMzA1LjkgMzA2LjMgMjkwLjYgMzA0IDI3NC43IDMwNEgxNzMuM0M3Ny42MSAzMDQgMCAzODEuNyAwIDQ3Ny40QzAgNDk2LjUgMTUuNTIgNTEyIDM0LjY2IDUxMkg0MTMuM2MzLjE0MyAwIDUuOTY3LTEuMDA0IDguODYxLTEuNzg5QzM2OS43IDQ2OS44IDMyNC4xIDQwMC4zIDMyMC42IDMxMC4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTE2IDIwNS4xQzExNiAxOTYuMiAxMjUuNiAxOTAuNCAxMzMuNSAxOTQuN0wyMjMuNCAyNDIuNkMyMzQuMSAyNDguMyAyMzQuMSAyNjMuNyAyMjMuNCAyNjkuNEwxMzMuNSAzMTcuM0MxMjUuNiAzMjEuNiAxMTYgMzE1LjggMTE2IDMwNi45QzExNiAzMDQuMSAxMTYuMSAzMDEuNCAxMTguOCAyOTkuMkwxNTQuOCAyNTZMMTE4LjggMjEyLjhDMTE2LjEgMjEwLjYgMTE2IDIwNy45IDExNiAyMDUuMVYyMDUuMXpNMzkzLjIgMjEyLjhMMzU3LjIgMjU2TDM5My4yIDI5OS4yQzM5NSAzMDEuNCAzOTYgMzA0LjEgMzk2IDMwNi45QzM5NiAzMTUuOCAzODYuNCAzMjEuNiAzNzguNSAzMTcuM0wyODguNiAyNjkuNEMyNzcuOSAyNjMuNyAyNzcuOSAyNDguMyAyODguNiAyNDIuNkwzNzguNSAxOTQuN0MzODYuNCAxOTAuNCAzOTYgMTk2LjIgMzk2IDIwNS4xQzM5NiAyMDcuOSAzOTUgMjEwLjYgMzkzLjIgMjEyLjh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00wIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NkM1MTIgMzk3LjQgMzk3LjQgNTEyIDI1NiA1MTJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZ6TTExOC44IDIxMi44TDE1NC44IDI1NkwxMTguOCAyOTkuMkMxMTYuMSAzMDEuNCAxMTYgMzA0LjEgMTE2IDMwNi45QzExNiAzMTUuOCAxMjUuNiAzMjEuNiAxMzMuNSAzMTcuM0wyMjMuNCAyNjkuNEMyMzQuMSAyNjMuNyAyMzQuMSAyNDguMyAyMjMuNCAyNDIuNkwxMzMuNSAxOTQuN0MxMjUuNiAxOTAuNCAxMTYgMTk2LjIgMTE2IDIwNS4xQzExNiAyMDcuOSAxMTYuMSAyMTAuNiAxMTguOCAyMTIuOFYyMTIuOHpNMjg4LjYgMjQyLjZDMjc3LjkgMjQ4LjMgMjc3LjkgMjYzLjcgMjg4LjYgMjY5LjRMMzc4LjUgMzE3LjNDMzg2LjQgMzIxLjYgMzk2IDMxNS44IDM5NiAzMDYuOUMzOTYgMzA0LjEgMzk1IDMwMS40IDM5My4yIDI5OS4yTDM1Ny4yIDI1NkwzOTMuMiAyMTIuOEMzOTUgMjEwLjYgMzk2IDIwNy45IDM5NiAyMDUuMUMzOTYgMTk2LjIgMzg2LjQgMTkwLjQgMzc4LjUgMTk0LjdMMjg4LjYgMjQyLjZ6TTIxNi45IDM1NC43QzIxMS41IDM1MS4xIDIwNC41IDM1MS4xIDE5OS4xIDM1NC43TDE1OC45IDM4MS41TDEzNS4yIDM2OS43QzEyNy4zIDM2NS43IDExNy42IDM2OC45IDExMy43IDM3Ni44QzEwOS43IDM4NC43IDExMi45IDM5NC40IDEyMC44IDM5OC4zTDE1Mi44IDQxNC4zQzE1Ny4xIDQxNi45IDE2NC4xIDQxNi41IDE2OC45IDQxMy4zTDIwOCAzODcuMkwyNDcuMSA0MTMuM0MyNTIuNSA0MTYuOSAyNTkuNSA0MTYuOSAyNjQuOSA0MTMuM0wzMDQgMzg3LjJMMzQzLjEgNDEzLjNDMzQ3LjkgNDE2LjUgMzU0IDQxNi45IDM1OS4yIDQxNC4zTDM5MS4yIDM5OC4zQzM5OS4xIDM5NC40IDQwMi4zIDM4NC43IDM5OC4zIDM3Ni44QzM5NC40IDM2OC45IDM4NC43IDM2NS43IDM3Ni44IDM2OS43TDM1My4xIDM4MS41TDMxMi45IDM1NC43QzMwNy41IDM1MS4xIDMwMC41IDM1MS4xIDI5NS4xIDM1NC43TDI1NiAzODAuOEwyMTYuOSAzNTQuN3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFlvdXR1YmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J001NDkuNjU1IDEyNC4wODNjLTYuMjgxLTIzLjY1LTI0Ljc4Ny00Mi4yNzYtNDguMjg0LTQ4LjU5N0M0NTguNzgxIDY0IDI4OCA2NCAyODggNjRTMTE3LjIyIDY0IDc0LjYyOSA3NS40ODZjLTIzLjQ5NyA2LjMyMi00Mi4wMDMgMjQuOTQ3LTQ4LjI4NCA0OC41OTctMTEuNDEyIDQyLjg2Ny0xMS40MTIgMTMyLjMwNS0xMS40MTIgMTMyLjMwNXMwIDg5LjQzOCAxMS40MTIgMTMyLjMwNWM2LjI4MSAyMy42NSAyNC43ODcgNDEuNSA0OC4yODQgNDcuODIxQzExNy4yMiA0NDggMjg4IDQ0OCAyODggNDQ4czE3MC43OCAwIDIxMy4zNzEtMTEuNDg2YzIzLjQ5Ny02LjMyMSA0Mi4wMDMtMjQuMTcxIDQ4LjI4NC00Ny44MjEgMTEuNDEyLTQyLjg2NyAxMS40MTItMTMyLjMwNSAxMS40MTItMTMyLjMwNXMwLTg5LjQzOC0xMS40MTItMTMyLjMwNXptLTMxNy41MSAyMTMuNTA4VjE3NS4xODVsMTQyLjczOSA4MS4yMDUtMTQyLjczOSA4MS4yMDF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J000NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgICAgPHBhdGggZD0nTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuXG5pbnRlcmZhY2UgVHJhY2tQYWdlVmlld1BhcmFtcyB7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRyYWNrRXZlbnRQYXJhbXMge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBhY3Rpb246IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVHJhY2tFcnJvckV2ZW50UGFyYW1zIGV4dGVuZHMgT21pdDxUcmFja0V2ZW50UGFyYW1zLCBcImNhdGVnb3J5XCI+IHt9XG5cbmNvbnN0IEdBX1RSQUNLSU5HX0lEID0gJ0ctTlRaRENUSERYNSdcblxuY2xhc3MgR0FTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlbnY6IFwiZGV2ZWxvcG1lbnRcIiB8IFwicHJvZHVjdGlvblwiIHwgXCJ0ZXN0XCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBpZiAodGhpcy5pc1Byb2R1Y3Rpb24pIHtcbiAgICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShHQV9UUkFDS0lOR19JRCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaXNQcm9kdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVudiA9PT0gXCJwcm9kdWN0aW9uXCI7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tQYWdlVmlldyh7IHBhdGggfTogVHJhY2tQYWdlVmlld1BhcmFtcykge1xuICAgIGNvbnN0IGRlY29kZWRQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhdGgpO1xuXG4gICAgaWYgKCF0aGlzLmlzUHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS5sb2coYFBhZ2UgVmlld2VkOiAke2RlY29kZWRQYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFJlYWN0R0EucGFnZXZpZXcoZGVjb2RlZFBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFja0V2ZW50KHBhcmFtczogVHJhY2tFdmVudFBhcmFtcykge1xuICAgIGlmICghdGhpcy5pc1Byb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgUmVhY3RHQS5ldmVudChwYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIHRyYWNrRXJyb3JFdmVudChwYXJhbXM6IFRyYWNrRXJyb3JFdmVudFBhcmFtcykge1xuICAgIHRoaXMudHJhY2tFdmVudCh7IGNhdGVnb3J5OiBcIkVycm9yXCIsIC4uLnBhcmFtcyB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgR0EgPSBuZXcgR0FTZXJ2aWNlKCk7IiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIGhlcm9TdHJpbmcsIG5hdiB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgeyBOYXYgfSBmcm9tICd+L2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IEJhbm5lciwgUHJvbW90aW9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcblxudHlwZSBMYXlvdXRQcm9wcyA9IFJvdXRlICYge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIHByb21vdGlvbj86IFByb21vdGlvbixcbiAgcHJldlJvdXRlPzogc3RyaW5nLFxuICBjb3Zlcj86IEpTWC5FbGVtZW50LFxuICBkYXRlPzogSlNYLkVsZW1lbnQsXG59XG5cbnR5cGUgUm9vdExheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIGlzUm9vdDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpdGVNZXRhKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3NpdGUud2VibWFuaWZlc3Q/dj0yMDIyMDMxMycgLz5cbiAgICAgIDxsaW5rIHJlbD0nbWFzay1pY29uJyBocmVmPScvaW1hZ2VzL3NhZmFyaS1waW5uZWQtdGFiLnN2Zz92PTIwMjIwMzEzJyBjb2xvcj0nIzI1NjNlYicgLz5cbiAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL2Zhdmljb24uaWNvP3Y9MjAyMjAzMTMnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxpY2F0aW9uLW5hbWUnIGNvbnRlbnQ9J0JPTFQgVVgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nIzI1NjNlYicgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZjhmYWZjJyAvPlxuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBzcmM9J2h0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzP2NsaWVudD1jYS1wdWItMTMxNTIzODg2MDcxODU0OSdcbiAgICAgICAgY3Jvc3NPcmlnaW49J2Fub255bW91cydcbiAgICAgID48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHRpdGxlLCBJY29uLCBkZXNjLCBwcm9tb3Rpb24sIHByZXZSb3V0ZSwgY292ZXIsIGRhdGUgfTogTGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3ByZXZpZXcnPlxuICAgICAgICAgIHtwcmV2aWV3RW5hYmxlZCA/IChcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvYmxvZy9wcmV2aWV3L3N0b3AnPlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgc2hvd2luZyBkcmFmdCBjb250ZW50LiA8YnV0dG9uPkNsaWNrIGhlcmU8L2J1dHRvbj4gdG8gZXhpdCBwcmV2aWV3IG1vZGUuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvYmxvZy9wcmV2aWV3L3N0YXJ0Jz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgcHVibGlzaGVkIGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBlbnRlciBwcmV2aWV3IG1vZGUhXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPEhlYWRlciB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlLCBjb3ZlciwgZGF0ZSB9fSAvPlxuICAgICAge3Byb21vdGlvbiAmJiA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+fVxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uIGZsZXggbWQ6aGlkZGVuJz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb290TGF5b3V0KHsgaXNSb290LCBjaGlsZHJlbiB9OiBSb290TGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtc2VjdGlvbiAke2lzUm9vdCA/ICcnIDogJ2hpZGRlbiBtZDpmbGV4J31gfT5cbiAgICAgICAgPEhlcm9cbiAgICAgICAgICBoZXJvU3RyaW5nPXtoZXJvU3RyaW5nfVxuICAgICAgICAgIGRlc2M9J1x1QjM1NCBcdUIwOThcdUM3NDAgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QUNCRFx1RDVEOFx1Qzc0NCBcdUMwRERcdUFDMDFcdUQ1NThcdUJBNzAgXHVBRjNDXHVBRjNDXHVENTU4XHVBQzhDIFx1QjlDQ1x1QjRFNFx1QzVCNCBcdUI0RENcdUI4MjRcdUM2OTQuJ1xuICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICB7IHVybDogJy9jb250YWN0JywgbGFiZWw6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6ICcvcGxhbicsXG4gICAgICAgICAgICAgIGxhYmVsOiAnXHVDNjk0XHVBRTA4XHVENDVDIFx1RDY1NVx1Qzc3OCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxOYXYgbmF2PXtuYXZ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc1Jvb3QgPyAncHgtMyBtZDpweC0wJyA6ICcnfWB9PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcbiAgdGl0bGUsXG4gIEljb24sXG4gIGRlc2MsXG4gIHByZXZSb3V0ZSxcbiAgY292ZXIsXG4gIGRhdGUsXG59OiBSb3V0ZSAmIHsgcHJldlJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGNvdmVyPzogSlNYLkVsZW1lbnQsIGRhdGU/OiBKU1guRWxlbWVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLW5hdic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtaG9tZSc+XG4gICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgPEljb25zLkhvbWUgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWxvZ28nPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29ucy5Mb2dvIGNsYXNzTmFtZT0ndy0xNiBoLTEwJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtc2V0dGluZ3MnPlxuICAgICAgICAgIDxMaW5rIHRvPScvc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEljb25zLlNldHRpbmdzIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1zZWN0aW9uJz5cbiAgICAgICAge2NvdmVyICYmIDxkaXYgY2xhc3NOYW1lPSdieC1jb3Zlcic+e2NvdmVyfTwvZGl2Pn1cbiAgICAgICAge3ByZXZSb3V0ZSAmJiBwcmV2Um91dGUgIT09ICcvJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1oaXN0b3J5LWJhY2snPlxuICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtwcmV2Um91dGV9IGljb249ezxJY29ucy5BcnJvd0xlZnQgLz59PjwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItbWV0YSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXRpdGxlJz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1kZXNjJz57ZGVzY308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyc+e2RhdGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1pY29uJz57SWNvbiAmJiB0eXBlb2YgSWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IDxJY29uIC8+IDogSWNvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBpY29uPzogUmVhY3RFbGVtZW50IHwgRWxlbWVudCB8IHN0cmluZyxcbiAgaHJlZj86IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IEVsZW1lbnQgfCBFbGVtZW50W10gfCBzdHJpbmcsXG4gIHNpemU/OiAnc21hbGwnIHwgJ2RlZmF1bHQnIHwgJ2xhcmdlJyxcbiAgdHlwZT86ICdzdWJtaXQnIHwgJ2J1dHRvbicsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxufVxuXG50eXBlIEJ1dHRvbkdyb3VwUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IHN0cmluZyxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5jb25zdCBzaXplcyA9IHtcbiAgbWluV2lkdGg6IHtcbiAgICBzbWFsbDogJ21pbi13LVsyNHB4XScsXG4gICAgZGVmYXVsdDogJ21pbi13LVszMnB4XScsXG4gICAgbGFyZ2U6ICdtaW4tdy1bNDBweF0nLFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBzbWFsbDogJ2gtNicsXG4gICAgZGVmYXVsdDogJ2gtOCcsXG4gICAgbGFyZ2U6ICdoLTEwJyxcbiAgfSxcbiAgaWNvblNpemU6IHtcbiAgICBzbWFsbDogJ3ctMyBoLTMnLFxuICAgIGRlZmF1bHQ6ICd3LTQgaC00JyxcbiAgICBsYXJnZTogJ3ctNiBoLTYnLFxuICB9LFxuICBmb250U2l6ZToge1xuICAgIHNtYWxsOiAndGV4dC14cycsXG4gICAgZGVmYXVsdDogJ3RleHQtc20nLFxuICAgIGxhcmdlOiAndGV4dC1iYXNlJyxcbiAgfSxcbiAgZ2FwOiB7XG4gICAgc21hbGw6ICdnYXAteC0xJyxcbiAgICBkZWZhdWx0OiAnZ2FwLXgtMicsXG4gICAgbGFyZ2U6ICdnYXAteC0zJyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUgPSAnYnV0dG9uJywgc2l6ZSA9ICdkZWZhdWx0JywgaHJlZiwgb25DbGljaywgaWNvbiwgY2hpbGRyZW4gfTogQnV0dG9uUHJvcHMpIHtcbiAgcmV0dXJuIGhyZWYgPyAoXG4gICAgPExpbmsga2V5PXtocmVmfSB0bz17aHJlZn0+XG4gICAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbiAke3NpemVzLmhlaWdodFtzaXplXX0gJHtzaXplcy5taW5XaWR0aFtzaXplXX19YH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfSAke3NpemVzLmdhcFtzaXplXX1gfT5cbiAgICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24taWNvbiAke3NpemVzLmljb25TaXplW3NpemVdfWB9PntpY29ufTwvc3Bhbj59XG4gICAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLXRleHQnPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKSA6IG9uQ2xpY2sgPyAoXG4gICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWxhYmVsICR7c2l6ZXMuZm9udFNpemVbc2l6ZV19ICR7c2l6ZXMuZ2FwW3NpemVdfWB9PlxuICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24taWNvbiAke3NpemVzLmljb25TaXplW3NpemVdfWB9PntpY29ufTwvc3Bhbj59XG4gICAgICAgIHtjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi10ZXh0Jz57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKSA6IChcbiAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbiAke3NpemVzLmhlaWdodFtzaXplXX0gJHtzaXplcy5taW5XaWR0aFtzaXplXX19YH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX0gJHtzaXplcy5nYXBbc2l6ZV19YH0+XG4gICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1pY29uICR7c2l6ZXMuaWNvblNpemVbc2l6ZV19YH0+e2ljb259PC9zcGFuPn1cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLXRleHQnPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfTogQnV0dG9uR3JvdXBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtYnV0dG9uLWdyb3VwICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgeyBIZXJvU3RyaW5nIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBIZXJvUHJvcHMgPSB7XG4gIGhlcm9TdHJpbmc6IEhlcm9TdHJpbmcsXG4gIGRlc2M/OiBzdHJpbmcsXG4gIGxpbmtzPzogeyB1cmw/OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGhhbmRsZXI/OiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkIH1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oeyBoZXJvU3RyaW5nID0gW1snJywgJyddXSwgZGVzYywgbGlua3MgfTogSGVyb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAge2hlcm9TdHJpbmcubWFwKGhlYWRpbmcgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aGVhZGluZ1swXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggZ2FwLXgtMC41IHRleHQtMnhsIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS03MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBldmVuOm1sLTUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJsYWNrJz57aGVhZGluZ1swXX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtdGhpbic+e2hlYWRpbmdbMV19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Rlc2MgJiYgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG1heC13LVsyMDBweF0gdGV4dC14cyBtdC0zIHRleHQtY2VudGVyJz57ZGVzY308L2Rpdj59XG4gICAgICB7bGlua3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVyby1saW5rcyc+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICB7bGlua3MubWFwKGxpbmsgPT5cbiAgICAgICAgICAgICAgbGluay51cmwgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsubGFiZWx9IG9uQ2xpY2s9e2xpbmsuaGFuZGxlcn0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBOYXZQcm9wcyA9IHtcbiAgbmF2PzogUm91dGVzW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXYoeyBuYXYgfTogTmF2UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPSdieC1uYXYnPlxuICAgICAge25hdiA/IChcbiAgICAgICAgbmF2Lm1hcChuYXZJdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17bmF2SXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2J4LW5hdi1jYXRlZ29yeSc+e25hdkl0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAge25hdkl0ZW0/LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC1uYXYtY2hpbGRyZW4nPlxuICAgICAgICAgICAgICAgICAge25hdkl0ZW0uY2hpbGRyZW4ubWFwKG5hdlN1Ykl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hdlN1Ykl0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0ucGF0aG5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtbmF2LWl0ZW0nIHRvPXtuYXZTdWJJdGVtLnBhdGhuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uSWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBuYXZTdWJJdGVtLkljb24gPT09ICdmdW5jdGlvbicgJiYgPG5hdlN1Ykl0ZW0uSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPntuYXZTdWJJdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtYXJyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uQXJyb3dSaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/Lkljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgbmF2U3ViSXRlbS5JY29uID09PSAnZnVuY3Rpb24nICYmIDxuYXZTdWJJdGVtLkljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1uYW1lJz57bmF2U3ViSXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uZGVzYyAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1kZXNjJz57bmF2U3ViSXRlbS5kZXNjfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxsaT5cdUI0RjFcdUI4NURcdUI0MUMgXHVCNzdDXHVDNkIwXHVEMkI4IFx1QkFBOVx1Qjg1RFx1Qzc3NCBcdUM4NzRcdUM3QUNcdUQ1NThcdUM5QzAgXHVDNTRBXHVDMkI1XHVCMkM4XHVCMkU0LjwvbGk+XG4gICAgICApfVxuICAgIDwvdWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1sb2dvJz5cbiAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgIDxJY29uLkxvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWNvbnRhY3QnPlxuICAgICAgICA8YSBocmVmPSd0ZWw6MTU4ODk5OTknPjE1ODgtOTk5OTwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0LWRlc2MnPlxuICAgICAgICAgIFx1RDNDOVx1Qzc3QyAxMDowMCAtIDE4OjAwXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgKFx1QzgxMFx1QzJFQ1x1QzJEQ1x1QUMwNCAxMzowMCAtIDE0OjAwIFx1QzgxQ1x1QzY3OCBcdTAwQjcgXHVDOEZDXHVCOUQwL1x1QUNGNVx1RDczNFx1Qzc3QyBcdUM4MUNcdUM2NzgpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdieC1mb290ZXItc25zJz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2RlZXJwYXJrODIxMCcgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1lvdVR1YmUnPlxuICAgICAgICAgICAgPEljb24uWW91dHViZSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2RlZXJwYXJrNycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1R3aXR0ZXInPlxuICAgICAgICAgICAgPEljb24uVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGVlcnBhcmsnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdJbnN0YWdyYW0nPlxuICAgICAgICAgICAgPEljb24uSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5leHBvcnQgdHlwZSBQcm9tb3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHVybD86IHN0cmluZyxcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yOiB7XG4gICAgcmVkOiBudW1iZXIsXG4gICAgYmx1ZTogbnVtYmVyLFxuICAgIGdyZWVuOiBudW1iZXIsXG4gIH0sXG4gIHRleHRjb2xvcjoge1xuICAgIGhleDogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFubmVyKHsgdGl0bGUsIHVybCwgY29sb3I6IHsgcmVkLCBibHVlLCBncmVlbiB9LCB0ZXh0Y29sb3I6IHsgaGV4IH0sIGxhYmVsIH06IFByb21vdGlvbikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXInIHN0eWxlPXt7XG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWAsXG4gICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAuNSlgLFxuICAgICAgJy0tdHctc2hhZG93JzogJ3ZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKScsXG4gICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItaWNvbic+XG4gICAgICAgIDxJY29uLkJhbm5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLXRpdGxlJz48c3Bhbj57dGl0bGV9PC9zcGFuPjwvZGl2PlxuICAgICAge3VybCAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLWxpbmsnPlxuICAgICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBocmVmPXt1cmx9PntsYWJlbCB8fCAnXHVCQzE0XHVCODVDXHVBQzAwXHVBRTMwJ308L0J1dHRvbj5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24uc2V0KCdwcmV2aWV3JywgJ3llcycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnNldCgncHJldmlldycsICd5ZXMnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnVuc2V0KCdwcmV2aWV3JylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgYmxvZyBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMgfX0gLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgYmxvZyA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwcm9tb3Rpb246IHByb21vdGlvbihvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBsb2NhbGU6IGtvX0tSKSB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIGNvdmVySW1hZ2UsIGF1dGhvciB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IG5ld3MgPSBgXG4gIHtcbiAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogX2NyZWF0ZWRBdF9ERVNDLCBmaWx0ZXI6IHtjYXRlZ29yeToge2VxOiBcIjExNjY3OTA3OVwifX0sIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgICR7Y292ZXJJbWFnZX1cbiAgICAgICR7YXV0aG9yfVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBjb3ZlckltYWdlLCBhdXRob3IgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBub3RpY2UgPSBgXG4gIHtcbiAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogX2NyZWF0ZWRBdF9ERVNDLCBmaWx0ZXI6IHtjYXRlZ29yeToge2VxOiBcIjExNjY3Njg0NVwifX0sIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgICR7Y292ZXJJbWFnZX1cbiAgICAgICR7YXV0aG9yfVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgcHJvbW90aW9uID0gYFxuICB7XG4gICAgcHJvbW90aW9uczogYWxsUHJvbW90aW9ucyhvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBjb2xvciB7XG4gICAgICAgIGJsdWVcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgcmVkXG4gICAgICB9XG4gICAgICB1cmxcbiAgICAgIGV4cGlyZWRhdFxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiA3NzYsIGg6IDcyNiB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5pbXBvcnQgeyBQb3N0c1Byb3BzIH0gZnJvbSAnfi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RzKHsgZmlyc3RQb3N0LCBvdGhlclBvc3RzIH06IFBvc3RzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1wb3N0IGFzcGVjdC12aWRlbyc+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtcG9zdC1saW5rJyB0bz17YC9ibG9nL3Bvc3RzLyR7Zmlyc3RQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYicgZGF0YT17Zmlyc3RQb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtbWV0YSc+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2J4LXBvc3QtdGl0bGUnPntmaXJzdFBvc3QudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGF0ZSc+XG4gICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17Zmlyc3RQb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e2ZpcnN0UG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17Zmlyc3RQb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1wb3N0LWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2J4LW90aGVyLXBvc3RzJz5cbiAgICAgICAge290aGVyUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1wb3N0IGFzcGVjdC12aWRlbyc+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtcG9zdC1saW5rJyB0bz17YC9ibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXBvc3QtdGh1bWInIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1tZXRhJz5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nYngtcG9zdC10aXRsZSc+e3Bvc3QudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGF0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtYXZhdGFyJz5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1wb3N0LWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gIClcbn1cbiIsICJ0eXBlIEF2YXRhclByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIHBpY3R1cmU6IHtcbiAgICB1cmw/OiBzdHJpbmcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH06IEF2YXRhclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLnVybH0gY2xhc3NOYW1lPSdhdmF0YXJfX3BpY3R1cmUnIGFsdD17bmFtZX0gLz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyX19uYW1lJz57bmFtZX08L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbnR5cGUgRGF0ZVByb3BzID0ge1xuICBkYXRlU3RyaW5nOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9OiBEYXRlUHJvcHMpIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfTwvdGltZT5cbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IC8qIExpbmssICovIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBTdHJ1Y3R1cmVkVGV4dCwgSW1hZ2UsIHRvUmVtaXhNZXRhLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCAnZXhwZWN0ZWQgcGFyYW1zLnNsdWcnKVxuXG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgIHF1ZXJ5IFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZykge1xuICAgICAgICBwb3N0KGZpbHRlcjoge3NsdWc6IHtlcTogJHNsdWd9fSkge1xuICAgICAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcbiAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBleGNlcnB0XG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgICAgLi4ub24gSW1hZ2VCbG9ja1JlY29yZCB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRlXG4gICAgICAgICAgb2dJbWFnZTogY292ZXJJbWFnZXtcbiAgICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbW9yZVBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyLCBmaWx0ZXI6IHtzbHVnOiB7bmVxOiAkc2x1Z319KSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvbW90aW9uOiBwcm9tb3Rpb24ob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgbG9jYWxlOiBrb19LUikge1xuICAgICAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgY29sb3Ige1xuICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICBncmVlblxuICAgICAgICAgICAgYmx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICAgICAgaGV4XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICAgICAke21ldGFUYWdzRnJhZ21lbnR9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0LCAvKiBtb3JlUG9zdHMsICovIHByb21vdGlvbiB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgey4uLntcbiAgICAgICAgdGl0bGU6IHBvc3Q/LnRpdGxlIHx8IHRpdGxlLFxuICAgICAgICBJY29uOiA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+LFxuICAgICAgICBkZXNjOiBwb3N0Py5leGNlcnB0IHx8IGRlc2MsXG4gICAgICAgIHByb21vdGlvbixcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYXJ0aWNsZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1hcnRpY2xlLWJvZHknPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9zZSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgICAgICA8U3RydWN0dXJlZFRleHRcbiAgICAgICAgICAgICAgZGF0YT17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICByZW5kZXJCbG9jaz17KHsgcmVjb3JkIH06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuX190eXBlbmFtZSA9PT0gJ0ltYWdlQmxvY2tSZWNvcmQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT0nYngtYXJ0aWNsZS1pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3Qga25vdyBob3cgdG8gcmVuZGVyIGEgYmxvY2shPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl9fdGl0bGUnPk1vcmUgcG9zdHM8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAge21vcmVQb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9J2dyaWRfX2l0ZW0nPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9J2dyaWRfX2xpbmsnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZ3JpZF9fdGl0bGUnPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGF0ZSc+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXByaXZhY3kgcHJvc2Utc20gcHJvc2Utc2xhdGUgZGFyazpwcm9zZS1pbnZlcnQnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMiBsaDYgYnM1IHRzNCc+XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OygnaHR0cHM6Ly93d3cuYm9sdC11eC5jb20nXHVDNzc0XHVENTU4ICdCT0xULVVYJyk8L2VtPlx1Qzc0MChcdUIyOTQpIFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFxuICAgICAgICAgIFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMzMFx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUJDRjRcdUQ2MzhcdUQ1NThcdUFDRTAgXHVDNzc0XHVDNjQwIFx1QUQwMFx1QjgyOFx1RDU1QyBcdUFDRTBcdUNEQTlcdUM3NDQgXHVDMkUwXHVDMThEXHVENTU4XHVBQ0UwIFx1QzZEMFx1RDY1Q1x1RDU1OFx1QUM4QyBcdUNDOThcdUI5QUNcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QjNDNFx1Qjg1RFxuICAgICAgICAgIFx1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQ0IFx1QzIxOFx1QjlCRFx1MDBCN1x1QUNGNVx1QUMxQ1x1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgXHUyNUNCIFx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjIwMjI8L2VtPlx1QjE0NCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MzwvZW0+XHVDNkQ0eycgJ31cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MTc8L2VtPlx1QkQ4MFx1RDEzMCBcdUM4MDFcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMxXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUMgXHVCQUE5XHVDODAxKTwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDsoJ2h0dHBzOi8vd3d3LmJvbHQtdXguY29tJ1x1Qzc3NFx1RDU1OCAnQk9MVC1VWCcpPC9lbT5cdUM3NDAoXHVCMjk0KSBcdUIyRTRcdUM3NENcdUM3NTggXHVCQUE5XHVDODAxXHVDNzQ0XG4gICAgICAgICAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuIFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCMjk0IFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUJBQTlcdUM4MDEgXHVDNzc0XHVDNjc4XHVDNzU4IFx1QzZBOVx1QjNDNFx1Qjg1Q1x1QjI5NCBcdUM3NzRcdUM2QTlcdUI0MThcdUM5QzAgXHVDNTRBXHVDNzNDXHVCQTcwIFx1Qzc3NFx1QzZBOSBcdUJBQTlcdUM4MDFcdUM3NzRcbiAgICAgICAgICBcdUJDQzBcdUFDQkRcdUI0MThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMThcdUM4NzBcdUM1RDAgXHVCNTMwXHVCNzdDIFx1QkNDNFx1QjNDNFx1Qzc1OCBcdUIzRDlcdUM3NThcdUI5N0MgXHVCQzFCXHVCMjk0IFx1QjRGMSBcdUQ1NDRcdUM2OTRcdUQ1NUMgXHVDODcwXHVDRTU4XHVCOTdDIFx1Qzc3NFx1RDU4OVx1RDU2MCBcdUM2MDhcdUM4MTVcdUM3ODVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+MS4gXHVDN0FDXHVENjU0IFx1QjYxMFx1QjI5NCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1LCBcdUNGNThcdUQxNTBcdUNFMjAgXHVDODFDXHVBQ0Y1LCBcdUI5REVcdUNEQTRcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1XHVDNzQ0IFx1QkFBOVx1QzgwMVx1QzczQ1x1Qjg1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTY5XHVCMkM4XHVCMkU0LjwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+Mi4gXHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICAgIFx1Qzc3OFx1QUQ2Q1x1RDFCNVx1QUNDNFx1RDU1OVx1QzgwMSBcdUQyQjlcdUMxMzFcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUgXHVCQzBGIFx1QUQxMVx1QUNFMCBcdUFDOENcdUM3QUMgLCBcdUMxMUNcdUJFNDRcdUMyQTRcdUM3NTggXHVDNzIwXHVENkE4XHVDMTMxIFx1RDY1NVx1Qzc3OCwgXHVDODExXHVDMThEXHVCRTQ4XHVCM0M0IFx1RDMwQ1x1QzU0NSBcdUI2MTBcdUIyOTQgXHVENjhDXHVDNkQwXHVDNzU4IFx1QzExQ1x1QkU0NFx1QzJBNFxuICAgICAgICAgICAgXHVDNzc0XHVDNkE5XHVDNUQwIFx1QjMwMFx1RDU1QyBcdUQxQjVcdUFDQzQgXHVCNEYxXHVDNzQ0IFx1QkFBOVx1QzgwMVx1QzczQ1x1Qjg1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDMlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUJDRjRcdUM3MjAgXHVBRTMwXHVBQzA0KTwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7PC9lbT5cdUM3NDAoXHVCMjk0KSBcdUJDOTVcdUI4MzlcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdTAwQjdcdUM3NzRcdUM2QTlcdUFFMzBcdUFDMDQgXHVCNjEwXHVCMjk0XG4gICAgICAgICAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCODVDXHVCRDgwXHVEMTMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUMyMThcdUM5RDEgXHVDMkRDXHVDNUQwIFx1QjNEOVx1Qzc1OFx1QkMxQlx1Qzc0MCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHUwMEI3XHVDNzc0XHVDNkE5XHVBRTMwXHVBQzA0IFx1QjBCNFx1QzVEMFx1QzExQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHUwMEI3XHVCQ0Y0XHVDNzIwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUFDMDFcdUFDMDFcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQyBcdUJDMEYgXHVCQ0Y0XHVDNzIwIFx1QUUzMFx1QUMwNFx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPjEuJmx0O1x1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOSZndDs8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cbiAgICAgICAgICAgICZsdDtcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTkmZ3Q7XHVDNjQwIFx1QUQwMFx1QjgyOFx1RDU1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUIyOTQgXHVDMjE4XHVDOUQxLlx1Qzc3NFx1QzZBOVx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVCM0Q5XHVDNzU4XHVDNzdDXHVCODVDXHVCRDgwXHVEMTMwJmx0O1x1QzlDMFx1Q0NCNFx1QzVDNlx1Qzc3NCBcdUQzMENcdUFFMzAmZ3Q7XHVBRTRDXHVDOUMwXG4gICAgICAgICAgICBcdUM3MDQgXHVDNzc0XHVDNkE5XHVCQUE5XHVDODAxXHVDNzQ0IFx1QzcwNFx1RDU1OFx1QzVFQyBcdUJDRjRcdUM3MjAuXHVDNzc0XHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlx1QkNGNFx1QzcyMFx1QURGQ1x1QUM3MCA6IFx1QUQxMVx1QUNFMDwvbGk+XG4gICAgICAgICAgPGxpPlx1QUQwMFx1QjgyOFx1QkM5NVx1QjgzOSA6IFx1RDQ1Q1x1QzJEQy9cdUFEMTFcdUFDRTBcdUM1RDAgXHVBRDAwXHVENTVDIFx1QUUzMFx1Qjg1RCA6IDZcdUFDMUNcdUM2RDQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUM2MDhcdUM2NzhcdUMwQUNcdUM3MjAgOiA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMzXHVDODcwKFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QzY0MCBcdUJDOTVcdUM4MTVcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NTggXHVBRDhDXHVCOUFDXHUwMEI3XHVDNzU4XHVCQjM0IFx1QkMwRiBcdUFERjggXHVENTg5XHVDMEFDXHVCQzI5XHVCQzk1KTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCMjk0ICZsdDtCT0xULVVYJmd0O1x1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDNUI4XHVDODFDXHVCNEUwXHVDOUMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdTAwQjdcdUM4MTVcdUM4MTVcdTAwQjdcdUMwQURcdUM4MUNcdTAwQjdcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVDNjk0XHVBRDZDIFx1QjRGMVx1Qzc1OCBcdUFEOENcdUI5QUNcdUI5N0MgXHVENTg5XHVDMEFDXHVENTYwIFx1QzIxOFxuICAgICAgICAgIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjEgXHVDODFDMVx1RDU2RFx1QzVEMCBcdUI1MzBcdUI5NzggXHVBRDhDXHVCOUFDIFx1RDU4OVx1QzBBQ1x1QjI5NCAmbHQ7Qk9MVC1VWCZndDtcdUM1RDAgXHVCMzAwXHVENTc0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDMkRDXHVENTg5XHVCODM5IFx1QzgxQzQxXHVDODcwXHVDODFDMVx1RDU2RFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDMTFDXHVCQTc0LFxuICAgICAgICAgIFx1QzgwNFx1Qzc5MFx1QzZCMFx1RDNCOCwgXHVCQUE4XHVDMEFDXHVDODA0XHVDMUExKEZBWCkgXHVCNEYxXHVDNzQ0IFx1RDFCNVx1RDU1OFx1QzVFQyBcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzczQ1x1QkE3MCAmbHQ7Qk9MVC1VWCZndDtcdUM3NDAoXHVCMjk0KSBcdUM3NzRcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzlDMFx1Q0NCNCBcdUM1QzZcdUM3NzQgXHVDODcwXHVDRTU4XHVENTU4XHVBQ0EwXHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MiBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFEOENcdUI5QUMgXHVENTg5XHVDMEFDXHVCMjk0IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJDOTVcdUM4MTVcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NzRcdUIwOTggXHVDNzA0XHVDNzg0XHVDNzQ0IFx1QkMxQlx1Qzc0MCBcdUM3OTAgXHVCNEYxIFx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc0NCBcdUQxQjVcdUQ1NThcdUM1RUMgXHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXHVDNzc0XG4gICAgICAgICAgXHVBQ0JEXHVDNkIwIFx1MjAxQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUMgXHVCQzI5XHVCQzk1XHVDNUQwIFx1QUQwMFx1RDU1QyBcdUFDRTBcdUMyREMoXHVDODFDMjAyMC03XHVENjM4KVx1MjAxRCBcdUJDQzRcdUM5QzAgXHVDODFDMTFcdUQ2MzggXHVDMTFDXHVDMkREXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUM3MDRcdUM3ODRcdUM3QTVcdUM3NDQgXHVDODFDXHVDRDlDXHVENTU4XHVDMTU0XHVDNTdDIFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4QyBcdUJDMEYgXHVDQzk4XHVCOUFDXHVDODE1XHVDOUMwIFx1QzY5NFx1QUQ2Q1x1QjI5NCBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzM1XHVDODcwIFx1QzgxQzRcdUQ1NkQsIFx1QzgxQzM3XHVDODcwIFx1QzgxQzJcdUQ1NkRcdUM1RDAgXHVDNzU4XHVENTU4XHVDNUVDIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUFEOENcdUI5QUNcdUFDMDBcbiAgICAgICAgICBcdUM4MUNcdUQ1NUMgXHVCNDIwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDY0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM4MTVcdUM4MTUgXHVCQzBGIFx1QzBBRFx1QzgxQyBcdUM2OTRcdUFENkNcdUIyOTQgXHVCMkU0XHVCOTc4IFx1QkM5NVx1QjgzOVx1QzVEMFx1QzExQyBcdUFERjggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVBQzAwIFx1QzIxOFx1QzlEMSBcdUIzMDBcdUMwQzFcdUM3M0NcdUI4NUMgXHVCQTg1XHVDMkRDXHVCNDE4XHVDNUI0IFx1Qzc4OFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgXHVBREY4IFx1QzBBRFx1QzgxQ1x1Qjk3Q1xuICAgICAgICAgIFx1QzY5NFx1QUQ2Q1x1RDU2MCBcdUMyMTggXHVDNUM2XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2NSAmbHQ7Qk9MVC1VWCZndDtcdUM3NDAoXHVCMjk0KSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjQgXHVBRDhDXHVCOUFDXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUM1RjRcdUI3OENcdUM3NTggXHVDNjk0XHVBRDZDLCBcdUM4MTVcdUM4MTVcdTAwQjdcdUMwQURcdUM4MUNcdUM3NTggXHVDNjk0XHVBRDZDLCBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzBcdUM3NTggXHVDNjk0XHVBRDZDIFx1QzJEQyBcdUM1RjRcdUI3OEMgXHVCNEYxIFx1QzY5NFx1QUQ2Q1x1Qjk3Q1xuICAgICAgICAgIFx1RDU1QyBcdUM3OTBcdUFDMDAgXHVCQ0Y4XHVDNzc4XHVDNzc0XHVBQzcwXHVCMDk4IFx1QzgxNVx1QjJGOVx1RDU1QyBcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NzhcdUM5QzBcdUI5N0MgXHVENjU1XHVDNzc4XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzRcdUM4NzAoXHVDQzk4XHVCOUFDXHVENTU4XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUQ1NkRcdUJBQTkgXHVDNzkxXHVDMTMxKSA8L3N0cm9uZz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz4gXHUyNDYwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDs8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVENTZEXHVCQUE5XHVDNzQ0IFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+MSZsdDsgXHVDN0FDXHVENjU0IFx1QjYxMFx1QjI5NCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1ICZndDs8L2xpPlxuICAgICAgICAgIDxsaT5cdUQ1NDRcdUMyMThcdUQ1NkRcdUJBQTkgOiBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNzc0XHVDNkE5IFx1QUUzMFx1Qjg1RCwgXHVDODExXHVDMThEIFx1Qjg1Q1x1QURGOCwgXHVDRkUwXHVEMEE0PC9saT5cbiAgICAgICAgICA8bGk+XHVDMTIwXHVEMEREXHVENTZEXHVCQUE5IDogXHVDODExXHVDMThEIElQIFx1QzgxNVx1QkNGNDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzVcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1RDMwQ1x1QUUzMCk8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwICZsdDsgQkxULVVYJmd0OyBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHVBRTMwXHVBQzA0XHVDNzU4IFx1QUNCRFx1QUNGQywgXHVDQzk4XHVCOUFDXHVCQUE5XHVDODAxIFx1QjJFQ1x1QzEzMSBcdUI0RjEgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVBQzAwIFx1QkQ4OFx1RDU0NFx1QzY5NFx1RDU1OFx1QUM4QyBcdUI0MThcdUM1QzhcdUM3NDQgXHVCNTRDXHVDNUQwXHVCMjk0XG4gICAgICAgICAgXHVDOUMwXHVDQ0I0XHVDNUM2XHVDNzc0IFx1RDU3NFx1QjJGOSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVEMzBDXHVBRTMwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUI4NUNcdUJEODBcdUQxMzAgXHVCM0Q5XHVDNzU4XHVCQzFCXHVDNzQwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdUFFMzBcdUFDMDRcdUM3NzQgXHVBQ0JEXHVBQ0ZDXHVENTU4XHVBQzcwXHVCMDk4IFx1Q0M5OFx1QjlBQ1x1QkFBOVx1QzgwMVx1Qzc3NCBcdUIyRUNcdUMxMzFcdUI0MThcdUM1QzhcdUM3NENcdUM1RDBcdUIzQzQgXHVCRDg4XHVBRDZDXHVENTU4XHVBQ0UwIFx1QjJFNFx1Qjk3OCBcdUJDOTVcdUI4MzlcdUM1RDBcbiAgICAgICAgICBcdUI1MzBcdUI3N0MgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QUNDNFx1QzE4RCBcdUJDRjRcdUM4NzRcdUQ1NThcdUM1RUNcdUM1N0MgXHVENTU4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCwgXHVENTc0XHVCMkY5IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUJDQzRcdUIzQzRcdUM3NTggXHVCMzcwXHVDNzc0XHVEMTMwXHVCQ0EwXHVDNzc0XHVDMkE0KERCKVx1Qjg1QyBcdUM2MkVcdUFFMzBcdUFDNzBcdUIwOTggXHVCQ0Y0XHVBRDAwXHVDN0E1XHVDMThDXHVCOTdDXG4gICAgICAgICAgXHVCMkVDXHVCOUFDXHVENTU4XHVDNUVDIFx1QkNGNFx1Qzg3NFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAxLiBcdUJDOTVcdUI4MzkgXHVBREZDXHVBQzcwIDo8YnIgLz5cbiAgICAgICAgICAyLiBcdUJDRjRcdUM4NzRcdUQ1NThcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDU2RFx1QkFBOSA6IFx1QUNDNFx1Qzg4Q1x1QzgxNVx1QkNGNCwgXHVBQzcwXHVCNzk4XHVCMEEwXHVDOURDXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYyIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQzMENcdUFFMzBcdUM3NTggXHVDODA4XHVDQzI4IFx1QkMwRiBcdUJDMjlcdUJDOTVcdUM3NDAgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAxLiBcdUQzMENcdUFFMzBcdUM4MDhcdUNDMjhcbiAgICAgICAgICA8YnIgLz4gJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1RDMwQ1x1QUUzMCBcdUMwQUNcdUM3MjBcdUFDMDAgXHVCQzFDXHVDMEREXHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUMxMjBcdUM4MTVcdUQ1NThcdUFDRTAsICZsdDsgQkxULVVYJmd0OyBcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MFx1Qzc1OFxuICAgICAgICAgIFx1QzJCOVx1Qzc3OFx1Qzc0NCBcdUJDMUJcdUM1NDQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1RDMwQ1x1QUUzMFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz4yLiBcdUQzMENcdUFFMzBcdUJDMjlcdUJDOTU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1QzgwNFx1Qzc5MFx1QzgwMSBcdUQzMENcdUM3N0MgXHVENjE1XHVEMERDXHVDNzU4IFx1QzgxNVx1QkNGNFx1QjI5NCBcdUFFMzBcdUI4NURcdUM3NDQgXHVDN0FDXHVDMEREXHVENTYwIFx1QzIxOCBcdUM1QzZcdUIyOTQgXHVBRTMwXHVDMjIwXHVDODAxIFx1QkMyOVx1QkM5NVx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NjlcdUIyQzhcdUIyRTQ8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgXHVDODFDNlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNTQ4XHVDODA0XHVDMTMxIFx1RDY1NVx1QkNGNCBcdUM4NzBcdUNFNTgpXG4gICAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJmx0OyBCTFQtVVgmZ3Q7XG4gICAgICAgICAgICA8L2VtPlxuICAgICAgICAgICAgXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzU0OFx1QzgwNFx1QzEzMSBcdUQ2NTVcdUJDRjRcdUI5N0MgXHVDNzA0XHVENTc0IFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUM3NDAgXHVDODcwXHVDRTU4XHVCOTdDIFx1Q0RFOFx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+XG4gICAgICAgICAgMS4gXHVDODE1XHVBRTMwXHVDODAxXHVDNzc4IFx1Qzc5MFx1Q0NCNCBcdUFDMTBcdUMwQUMgXHVDMkU0XHVDMkRDXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNERThcdUFFMDkgXHVBRDAwXHVCODI4IFx1QzU0OFx1QzgxNVx1QzEzMSBcdUQ2NTVcdUJDRjRcdUI5N0MgXHVDNzA0XHVENTc0IFx1QzgxNVx1QUUzMFx1QzgwMShcdUJEODRcdUFFMzAgMVx1RDY4QylcdUM3M0NcdUI4NUMgXHVDNzkwXHVDQ0I0IFx1QUMxMFx1QzBBQ1x1Qjk3QyBcdUMyRTRcdUMyRENcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDIuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNERThcdUFFMDkgXHVDOUMxXHVDNkQwXHVDNzU4IFx1Q0Q1Q1x1QzE4Q1x1RDY1NCBcdUJDMEYgXHVBRDUwXHVDNzIxXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNERThcdUFFMDlcdUQ1NThcdUIyOTQgXHVDOUMxXHVDNkQwXHVDNzQ0IFx1QzlDMFx1QzgxNVx1RDU1OFx1QUNFMCBcdUIyRjRcdUIyRjlcdUM3OTBcdUM1RDAgXHVENTVDXHVDODE1XHVDMkRDXHVDRjFDIFx1Q0Q1Q1x1QzE4Q1x1RDY1NCBcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QUQwMFx1QjlBQ1x1RDU1OFx1QjI5NCBcdUIzMDBcdUNDNDVcdUM3NDQgXHVDMkRDXHVENTg5XHVENTU4XHVBQ0UwXG4gICAgICAgICAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDMuIFx1RDU3NFx1RDBCOSBcdUI0RjFcdUM1RDAgXHVCMzAwXHVCRTQ0XHVENTVDIFx1QUUzMFx1QzIyMFx1QzgwMSBcdUIzMDBcdUNDNDVcbiAgICAgICAgICA8YnIgLz4gJmx0OzxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5CT0xULVVYPC9lbT4mZ3Q7KCc8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Qk9MVC1VWDwvZW0+JylcdUM3NDAgXHVENTc0XHVEMEI5XHVDNzc0XHVCMDk4XG4gICAgICAgICAgXHVDRUY0XHVENEU4XHVEMTMwIFx1QkMxNFx1Qzc3NFx1QjdFQ1x1QzJBNCBcdUI0RjFcdUM1RDAgXHVDNzU4XHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM3MjBcdUNEOUMgXHVCQzBGIFx1RDZGQ1x1QzE5MFx1Qzc0NCBcdUI5QzlcdUFFMzAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QkNGNFx1QzU0OFx1RDUwNFx1Qjg1Q1x1QURGOFx1QjdBOFx1Qzc0NCBcdUMxMjRcdUNFNThcdUQ1NThcdUFDRTAgXHVDOEZDXHVBRTMwXHVDODAxXHVDNzc4IFx1QUMzMVx1QzJFMFx1MDBCN1x1QzgxMFx1QUM4MFx1Qzc0NFxuICAgICAgICAgIFx1RDU1OFx1QkE3MCBcdUM2NzhcdUJEODBcdUI4NUNcdUJEODBcdUQxMzAgXHVDODExXHVBREZDXHVDNzc0IFx1RDFCNVx1QzgxQ1x1QjQxQyBcdUFENkNcdUM1RURcdUM1RDAgXHVDMkRDXHVDMkE0XHVEMTVDXHVDNzQ0IFx1QzEyNFx1Q0U1OFx1RDU1OFx1QUNFMCBcdUFFMzBcdUMyMjBcdUM4MDEvXHVCQjNDXHVCOUFDXHVDODAxXHVDNzNDXHVCODVDIFx1QUMxMFx1QzJEQyBcdUJDMEYgXHVDQzI4XHVCMkU4XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA0LiBcdUM4MTFcdUMxOERcdUFFMzBcdUI4NURcdUM3NTggXHVCQ0Y0XHVBRDAwIFx1QkMwRiBcdUM3MDRcdUJDQzBcdUM4NzAgXHVCQzI5XHVDOUMwXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QzJEQ1x1QzJBNFx1RDE1Q1x1QzVEMCBcdUM4MTFcdUMxOERcdUQ1NUMgXHVBRTMwXHVCODVEXHVDNzQ0IFx1Q0Q1Q1x1QzE4QyAxXHVCMTQ0IFx1Qzc3NFx1QzBDMSBcdUJDRjRcdUFEMDAsIFx1QUQwMFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUM3M0NcdUJBNzAsXHVCMkU0XHVCOUNDLCA1XHVCOUNDXHVCQTg1IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM1RDBcbiAgICAgICAgICBcdUFEMDBcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0Q5NFx1QUMwMFx1RDU1OFx1QUM3MFx1QjA5OCwgXHVBQ0UwXHVDNzIwXHVDMkREXHVCQ0M0XHVDODE1XHVCQ0Y0IFx1QjYxMFx1QjI5NCBcdUJCRkNcdUFDMTBcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTU4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCAyXHVCMTQ0XHVDNzc0XHVDMEMxIFx1QkNGNFx1QUQwMCwgXHVBRDAwXHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUI2MTBcdUQ1NUMsIFx1QzgxMVx1QzE4RFx1QUUzMFx1Qjg1RFx1Qzc3NCBcdUM3MDRcdUJDQzBcdUM4NzAgXHVCQzBGIFx1QjNDNFx1QjA5QywgXHVCRDg0XHVDMkU0XHVCNDE4XHVDOUMwIFx1QzU0QVx1QjNDNFx1Qjg1RCBcdUJDRjRcdUM1NDhcdUFFMzBcdUIyQTVcdUM3NDQgXHVDMEFDXHVDNkE5XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUM3XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM3OTBcdUIzRDkgXHVDMjE4XHVDOUQxIFx1QzdBNVx1Q0U1OFx1Qzc1OCBcdUMxMjRcdUNFNThcdTIwMjJcdUM2QjRcdUM2MDEgXHVCQzBGIFx1QUM3MFx1QkQ4MFx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDMEFDXHVENTZEKTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgJmx0O0JPTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1QzVEMFx1QUM4QyBcdUFDMUNcdUJDQzRcdUM4MDFcdUM3NzggXHVCOURFXHVDREE0XHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDIFx1QzgxQ1x1QUNGNVx1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NzQgXHVDNzc0XHVDNkE5XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzgwMFx1QzdBNVx1RDU1OFx1QUNFMCBcdUMyMThcdUMyRENcdUI4NUNcbiAgICAgICAgICBcdUJEODhcdUI3RUNcdUM2MjRcdUIyOTQgXHUyMDE4XHVDRkUwXHVEMEE0KGNvb2tpZSlcdTIwMTlcdUI5N0MgXHVDMEFDXHVDNkE5XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUNGRTBcdUQwQTRcdUIyOTQgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4XHVCOTdDIFx1QzZCNFx1QzYwMVx1RDU1OFx1QjI5NFx1QjM3MCBcdUM3NzRcdUM2QTlcdUI0MThcdUIyOTQgXHVDMTFDXHVCQzg0KGh0dHApXHVBQzAwIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1Qzc1OCBcdUNFRjRcdUQ0RThcdUQxMzAgXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwXHVDNUQwXHVBQzhDIFx1QkNGNFx1QjBCNFx1QjI5NCBcdUMxOENcdUI3QzlcdUM3NTggXHVDODE1XHVCQ0Y0XHVDNzc0XHVCQTcwXG4gICAgICAgICAgXHVDNzc0XHVDNkE5XHVDNzkwXHVCNEU0XHVDNzU4IFBDIFx1Q0VGNFx1RDRFOFx1RDEzMFx1QjBCNFx1Qzc1OCBcdUQ1NThcdUI0RENcdUI1MTRcdUMyQTRcdUQwNkNcdUM1RDAgXHVDODAwXHVDN0E1XHVCNDE4XHVBRTMwXHVCM0M0IFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUFDMDAuIFx1Q0ZFMFx1RDBBNFx1Qzc1OCBcdUMwQUNcdUM2QTkgXHVCQUE5XHVDODAxIDogXHVDNzc0XHVDNkE5XHVDNzkwXHVBQzAwIFx1QkMyOVx1QkIzOFx1RDU1QyBcdUFDMDEgXHVDMTFDXHVCRTQ0XHVDMkE0XHVDNjQwIFx1QzZGOSBcdUMwQUNcdUM3NzRcdUQyQjhcdUI0RTRcdUM1RDAgXHVCMzAwXHVENTVDIFx1QkMyOVx1QkIzOCBcdUJDMEYgXHVDNzc0XHVDNkE5XHVENjE1XHVEMERDLCBcdUM3NzhcdUFFMzAgXHVBQzgwXHVDMEM5XHVDNUI0LCBcdUJDRjRcdUM1NDhcdUM4MTFcdUMxOERcbiAgICAgICAgICBcdUM1RUNcdUJEODAsIFx1QjRGMVx1Qzc0NCBcdUQzMENcdUM1NDVcdUQ1NThcdUM1RUMgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNUQwXHVBQzhDIFx1Q0Q1Q1x1QzgwMVx1RDY1NFx1QjQxQyBcdUM4MTVcdUJDRjQgXHVDODFDXHVBQ0Y1XHVDNzQ0IFx1QzcwNFx1RDU3NCBcdUMwQUNcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVCMDk4LiBcdUNGRTBcdUQwQTRcdUM3NTggXHVDMTI0XHVDRTU4XHUyMDIyXHVDNkI0XHVDNjAxIFx1QkMwRiBcdUFDNzBcdUJEODAgOiBcdUM2RjlcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAgXHVDMEMxXHVCMkU4XHVDNzU4IFx1QjNDNFx1QUQ2QyZndDtcdUM3NzhcdUQxMzBcdUIxMzcgXHVDNjM1XHVDMTU4Jmd0O1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJBNTRcdUIyNzRcdUM3NTggXHVDNjM1XHVDMTU4IFx1QzEyNFx1QzgxNVx1Qzc0NCBcdUQxQjVcdUQ1NzQgXHVDRkUwXHVEMEE0XG4gICAgICAgICAgXHVDODAwXHVDN0E1XHVDNzQ0IFx1QUM3MFx1QkQ4MCBcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gXHVDRkUwXHVEMEE0IFx1QzgwMFx1QzdBNVx1Qzc0NCBcdUFDNzBcdUJEODBcdUQ1NjAgXHVBQ0JEXHVDNkIwIFx1QjlERVx1Q0RBNFx1RDYxNSBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNzc0XHVDNkE5XHVDNUQwIFx1QzVCNFx1QjgyNFx1QzZDMFx1Qzc3NCBcdUJDMUNcdUMwRERcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDMwJz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzhcdUM4NzAgKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTApIDwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPlxuICAgICAgICAgIFx1MjQ2MCA8c3BhbiBjbGFzc05hbWU9J2NvbG9yTGlnaHRCbHVlJz4mbHQ7Qk9MVC1VWCZndDs8L3NwYW4+IFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUM1RDAgXHVBRDAwXHVENTVDIFx1QzVDNVx1QkIzNFx1Qjk3QyBcdUNEMURcdUFEMDRcdUQ1NzRcdUMxMUNcbiAgICAgICAgICBcdUNDNDVcdUM3ODRcdUM5QzBcdUFDRTAsIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJEODhcdUI5Q0NcdUNDOThcdUI5QUMgXHVCQzBGIFx1RDUzQ1x1RDU3NFx1QUQ2Q1x1QzgxQyBcdUI0RjFcdUM3NDQgXHVDNzA0XHVENTU4XHVDNUVDIFx1QzU0NFx1Qjc5OFx1QzY0MCBcdUFDMTlcdUM3NzQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MFx1Qjk3Q1xuICAgICAgICAgIFx1QzlDMFx1QzgxNVx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTAgPC9saT5cbiAgICAgICAgICA8bGk+XHVDMTMxXHVCQTg1IDpcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUM5QzFcdUNDNDUgOlx1QUQwMFx1QjlBQ1x1Qzc5MDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzlDMVx1QUUwOSA6XHVCMzAwXHVENDVDPC9saT5cbiAgICAgICAgICA8bGk+XHVDNUYwXHVCNzdEXHVDQzk4IDowMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTIwM0IgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUIyRjRcdUIyRjlcdUJEODBcdUMxMUNcdUI4NUMgXHVDNUYwXHVBQ0IwXHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxwIC8+eycgJ31cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCRDgwXHVDMTFDXHVCQTg1IDpcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNkI0XHVDNjAxPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUIyRjRcdUIyRjlcdUM3OTAgOlx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVDNUYwXHVCNzdEXHVDQzk4IDowMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgICBcdTI0NjEgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVBRUQ4XHVDMTFDXHVCMjk0ICZsdDtCT0xULVVYJmd0OyBcdUM3NTggXHVDMTFDXHVCRTQ0XHVDMkE0KFx1QjYxMFx1QjI5NCBcdUMwQUNcdUM1QzUpXHVDNzQ0IFx1Qzc3NFx1QzZBOVx1RDU1OFx1QzJEQ1x1QkE3NFx1QzExQyBcdUJDMUNcdUMwRERcdUQ1NUMgXHVCQUE4XHVCNEUwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVBRDAwXHVCODI4IFx1QkIzOFx1Qzc1OCxcbiAgICAgICAgICAgIFx1QkQ4OFx1QjlDQ1x1Q0M5OFx1QjlBQywgXHVENTNDXHVENTc0XHVBRDZDXHVDODFDIFx1QjRGMVx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDMEFDXHVENTZEXHVDNzQ0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTAgXHVCQzBGIFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQ1x1Qjg1QyBcdUJCMzhcdUM3NThcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gJmx0O0JPTFQtVVgmZ3Q7XG4gICAgICAgICAgICBcdUM3NDAoXHVCMjk0KSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVCQjM4XHVDNzU4XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM5QzBcdUNDQjQgXHVDNUM2XHVDNzc0IFx1QjJGNVx1QkNDMCBcdUJDMEYgXHVDQzk4XHVCOUFDXHVENTc0XHVCNERDXHVCOUI0IFx1QUM4M1x1Qzc4NVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QzMCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUM5XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkMpXG4gICAgICAgICAgICAgIDxiciAvPiBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgXHVGRjYyXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1RkY2MyBcdUM4MUMzNVx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI5NzggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzVGNFx1Qjc4QyBcdUNDQURcdUFENkNcdUI5N0MgXHVDNTQ0XHVCNzk4XHVDNzU4IFx1QkQ4MFx1QzExQ1x1QzVEMCBcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICZsdDsgQkxULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDXHVBQzAwIFx1QzJFMFx1QzE4RFx1RDU1OFx1QUM4QyBcdUNDOThcdUI5QUNcdUI0MThcdUIzQzRcdUI4NUQgXHVCMTc4XHVCODI1XHVENTU4XHVBQ0EwXHVDMkI1XHVCMkM4XHVCMkU0LnsnICd9XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2QyBcdUM4MTFcdUMyMThcdTAwQjdcdUNDOThcdUI5QUMgXHVCRDgwXHVDMTFDIDwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCRDgwXHVDMTFDXHVCQTg1IDogXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QUQwMFx1QjlBQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCMkY0XHVCMkY5XHVDNzkwIDogXHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOiAwMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzEwXHVDODcwKFx1QUQ4Q1x1Qzc3NVx1Q0U2OFx1RDU3NCBcdUFENkNcdUM4MUNcdUJDMjlcdUJDOTUpPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjwvZW0+XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1Qjg1QyBcdUM3NzhcdUQ1NUMgXHVBRDZDXHVDODFDXHVCOTdDIFx1QkMxQlx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCRDg0XHVDN0MxXHVDODcwXHVDODE1XHVDNzA0XHVDNkQwXHVENjhDLCBcdUQ1NUNcdUFENkRcdUM3NzhcdUQxMzBcdUIxMzdcdUM5QzRcdUQ3NjVcdUM2RDBcbiAgICAgICAgICBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUMyRTBcdUFDRTBcdUMxM0NcdUQxMzAgXHVCNEYxXHVDNUQwIFx1QkQ4NFx1QzdDMVx1RDU3NFx1QUNCMFx1Qzc3NFx1QjA5OCBcdUMwQzFcdUIyRjQgXHVCNEYxXHVDNzQ0IFx1QzJFMFx1Q0NBRFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiBcdUM3NzQgXHVCQzE2XHVDNUQwIFx1QUUzMFx1RDBDMCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUM3NTggXHVDMkUwXHVBQ0UwLCBcdUMwQzFcdUIyRjRcdUM1RDBcbiAgICAgICAgICBcdUIzMDBcdUQ1NThcdUM1RUNcdUIyOTQgXHVDNTQ0XHVCNzk4XHVDNzU4IFx1QUUzMFx1QUQwMFx1QzVEMCBcdUJCMzhcdUM3NThcdUQ1NThcdUMyRENcdUFFMzAgXHVCQzE0XHVCNzhEXHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkQ4NFx1QzdDMVx1Qzg3MFx1QzgxNVx1QzcwNFx1QzZEMFx1RDY4QyA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDE4MzMtNjk3MiAod3d3LmtvcGljby5nby5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAyLiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUMyRTBcdUFDRTBcdUMxM0NcdUQxMzAgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxMTggKHByaXZhY3kua2lzYS5vci5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAzLiBcdUIzMDBcdUFDODBcdUNDMzBcdUNDQUQgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxMzAxICh3d3cuc3BvLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDQuIFx1QUNCRFx1Q0MzMFx1Q0NBRCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDE4MiAoZWNybS5jeWJlci5nby5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMERcdUM4MUMzNVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNUY0XHVCNzhDKSwgXHVDODFDMzZcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQyksIFx1QzgxQzM3XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVCNEYxKVx1Qzc1OFxuICAgICAgICAgIFx1QUREQ1x1QzgxNVx1QzVEMCBcdUM3NThcdUQ1NUMgXHVDNjk0XHVBRDZDXHVDNUQwIFx1QjMwMCBcdUQ1NThcdUM1RUMgXHVBQ0Y1XHVBQ0Y1XHVBRTMwXHVBRDAwXHVDNzU4IFx1QzdBNVx1Qzc3NCBcdUQ1ODlcdUQ1NUMgXHVDQzk4XHVCRDg0IFx1QjYxMFx1QjI5NCBcdUJEODBcdUM3OTFcdUM3MDRcdUI4NUMgXHVDNzc4XHVENTU4XHVDNUVDIFx1QUQ4Q1x1QjlBQyBcdUI2MTBcdUIyOTQgXHVDNzc0XHVDNzc1XHVDNzU4IFx1Q0U2OFx1RDU3NFx1Qjk3QyBcdUJDMUJcdUM3NDAgXHVDNzkwXHVCMjk0XG4gICAgICAgICAgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVCQzk1XHVDNzc0IFx1QzgxNVx1RDU1OFx1QjI5NCBcdUJDMTRcdUM1RDAgXHVCNTMwXHVCNzdDIFx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1Qzc0NCBcdUNDQURcdUFENkNcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdTIwM0IgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM3OTBcdUMxMzhcdUQ1NUMgXHVDMEFDXHVENTZEXHVDNzQwIFx1QzkxMVx1QzU1OVx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1QzcwNFx1QzZEMFx1RDY4Qyh3d3cuc2ltcGFuLmdvLmtyKSBcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzBcdUI5N0MgXHVDQzM4XHVBQ0UwXHVENTU4XHVDMkRDXHVBRTMwIFx1QkMxNFx1Qjc4RFx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDMTFcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OCBcdUJDQzBcdUFDQkQpPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjwvZW0+XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHUyNDYwIFx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgMjAyMlx1QjE0NCAzXHVDNkQ0IDE3XHVCRDgwXHVEMTMwIFx1QzgwMVx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdTI0NjEgXHVDNzc0XHVDODA0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgXHVDNTQ0XHVCNzk4XHVDNUQwXHVDMTFDIFx1RDY1NVx1Qzc3OFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiA8L3A+XG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdUM2MDhcdUMyREMgKSAtIDIwWFguIDMuIDE3IH4gMjBYWC4gWC4gWCBcdUM4MDFcdUM2QTkgKFx1RDA3NFx1QjlBRCkgPC9wPiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG5vdGljZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMgfX0gLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBwcm9tb3Rpb24gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbnMgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbiBtYXgtdy0xMTInPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2J4LXNlY3Rpb24tcm93IGhpZGRlbiBtZDpmbGV4Jz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC1wcm9tb3Rpb25zJz5cbiAgICAgICAgICAgIHtwcm9tb3Rpb25zLm1hcCgocHJvbW90aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cHJvbW90aW9uLnRpdGxlfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1pdGVtJz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17cHJvbW90aW9uLnVybCB8fCAnLi8nfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1saW5rJz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb21vdGlvbi5iYW5uZXIucmVzcG9uc2l2ZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3Byb21vdGlvbi5jb2xvci5yZWR9LCAke3Byb21vdGlvbi5jb2xvci5ncmVlbn0sICR7cHJvbW90aW9uLmNvbG9yLmJsdWV9LCAuNSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdHctc2hhZG93JzogJ3ZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKScsXG4gICAgICAgICAgICAgICAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBuZXdzIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnlTdWJzY3JpcHRpb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPFBvc3RzIHsuLi57IGZpcnN0UG9zdCwgb3RoZXJQb3N0cyB9fSAvPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNjU4OTE1OTknLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTZTWkVTNUxXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WUlNHQk1CVC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTTJJVUhTSFUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzRU5WV0U0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNU40Nk5CVkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IWDJPNFZUWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2luZGV4LVpLWVpMWk1QLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aSERVTk5HNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU9MTEQ1WTZZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFRZUDRIMlguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wb3N0cyc6eydpZCc6J3JvdXRlcy9ibG9nL3Bvc3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy0zN05URlE3Ty5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cvcG9zdHMnLCdwYXRoJzonOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy1QVEFEVjJNUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSTNFTlZXRTQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PTExENVk2WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRUWVA0SDJYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNU40Nk5CVkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IWDJPNFZUWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcHJldmlldy9zdGFydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQtSEU1Q0FDUk4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJCU0lTU1lZLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcHJldmlldy9zdG9wJzp7J2lkJzoncm91dGVzL2Jsb2cvcHJldmlldy9zdG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvcHJldmlldy9zdG9wLUdUSTdCSUlPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SQlNJU1NZWS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LRE1FUDJSMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFRZUDRIMlguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3cyc6eydpZCc6J3JvdXRlcy9uZXdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J25ld3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3cy02UVNXSVlCSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWkhEVU5ORzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PTExENVk2WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRUWVA0SDJYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZSc6eydpZCc6J3JvdXRlcy9ub3RpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbm90aWNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZS0zWE5PRlc2Ri5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWkhEVU5ORzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PTExENVk2WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRUWVA0SDJYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmV2aWV3L3N0YXJ0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RhcnQtVVQzTzZBVVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJCU0lTU1lZLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9wcmV2aWV3L3N0b3AnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RvcC1PTlpPRUhXWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUkJTSVNTWVkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJpdmFjeSc6eydpZCc6J3JvdXRlcy9wcml2YWN5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByaXZhY3knLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJpdmFjeS1CSEhGS1JSWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC02NTg5MTU5OS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFB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QVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJakI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJakI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7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
