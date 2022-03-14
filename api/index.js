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

// route:/Users/deerpark/Dev/bolt-ux/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix5 = __toESM(require_remix());
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

// app/components/Hero/index.tsx
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
  fontSize: {
    small: "text-xs",
    default: "text-sm",
    large: "text-base"
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
    className: `bx-button-label ${sizes.fontSize[size]}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-icon"
  }, icon), /* @__PURE__ */ React.createElement("span", null, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }))) : onClick ? /* @__PURE__ */ React.createElement("button", {
    type,
    className: "bx-button",
    onClick
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-icon"
  }, icon), /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]}`
  }, children), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  })) : /* @__PURE__ */ React.createElement("button", {
    type,
    className: "bx-button"
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-icon"
  }, icon), /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]}`
  }, children), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }));
}
function ButtonGroup({ children, className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `bx-button-group ${className}`
  }, children);
}

// app/components/Hero/index.tsx
function Hero({ heroString = [["", ""]], desc, links: links6 }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "bx-hero-logo",
    to: "/"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "60px",
    height: "44px",
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
    className: "fill-blue-600 dark:fill-white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.3375527,23.021097 C16.3375527,21.8698348 16.5532441,20.7846923 16.9846268,19.7656696 C17.4160095,18.7466469 18.0081802,17.8598638 18.7611391,17.1053202 C19.514098,16.3507767 20.404315,15.7556986 21.4317901,15.3200858 C22.4592653,14.884473 23.5769386,14.6666667 24.7848101,14.6666667 C25.976995,14.6666667 27.0907467,14.884473 28.1260651,15.3200858 C29.1613836,15.7556986 30.0555223,16.3507767 30.8084811,17.1053202 C31.56144,17.8598638 32.1536108,18.7466469 32.5849935,19.7656696 C33.0163762,20.7846923 33.2320675,21.8698348 33.2320675,23.021097 C33.2320675,24.1723593 33.0163762,25.2575018 32.5849935,26.2765245 C32.1536108,27.2955472 31.56144,28.1823303 30.8084811,28.9368739 C30.0555223,29.6914174 29.1613836,30.2864955 28.1260651,30.7221083 C27.0907467,31.157721 25.976995,31.3755274 24.7848101,31.3755274 C23.5769386,31.3755274 22.4592653,31.157721 21.4317901,30.7221083 C20.404315,30.2864955 19.514098,29.6914174 18.7611391,28.9368739 C18.0081802,28.1823303 17.4160095,27.2955472 16.9846268,26.2765245 C16.5532441,25.2575018 16.3375527,24.1723593 16.3375527,23.021097 Z M22.4318136,23.021097 C22.4318136,23.7523042 22.6318183,24.3551611 23.0318277,24.8296679 C23.4318371,25.3041746 24.0161646,25.541428 24.7848101,25.541428 C25.537769,25.541428 26.1142531,25.3041746 26.5142625,24.8296679 C26.9142719,24.3551611 27.1142766,23.7523042 27.1142766,23.021097 C27.1142766,22.2898899 26.9142719,21.687033 26.5142625,21.2125262 C26.1142531,20.7380195 25.537769,20.5007661 24.7848101,20.5007661 C24.0161646,20.5007661 23.4318371,20.7380195 23.0318277,21.2125262 C22.6318183,21.687033 22.4318136,22.2898899 22.4318136,23.021097 Z",
    id: "logo-o",
    className: "fill-blue-600 dark:fill-white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M44.556962,25.6038719 C45.1758087,25.6038719 45.4852321,25.9169356 45.4852321,26.5430628 L45.4852321,30.0650285 C45.4852321,30.6911558 45.1758087,31.0042194 44.556962,31.0042194 L35.2742616,31.0042194 C34.6554149,31.0042194 34.3459916,30.6911558 34.3459916,30.0650285 L34.3459916,15.9771655 C34.3459916,15.3510383 34.6554149,15.0379747 35.2742616,15.0379747 L39.2194093,15.0379747 C39.838256,15.0379747 40.1476793,15.3510383 40.1476793,15.9771655 L40.1476793,24.8994788 C40.1476793,25.1968892 40.190225,25.3886407 40.2753165,25.4747332 C40.3604079,25.5608257 40.5499297,25.6038719 40.8438819,25.6038719 L44.556962,25.6038719 Z",
    id: "logo-l",
    className: "fill-blue-600 dark:fill-white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M47.348174,20.4383222 C46.7250594,20.4383222 46.4135021,20.1252585 46.4135021,19.4991313 L46.4135021,15.9771655 C46.4135021,15.3510383 46.7250594,15.0379747 47.348174,15.0379747 L59.0315728,15.0379747 C59.6546874,15.0379747 59.9662447,15.3510383 59.9662447,15.9771655 L59.9662447,19.4991313 C59.9662447,20.1252585 59.6546874,20.4383222 59.0315728,20.4383222 L56.811727,20.4383222 C56.5157476,20.4383222 56.3249188,20.4813684 56.2392405,20.5674609 C56.1535622,20.6535534 56.1107231,20.8453049 56.1107231,21.1427153 L56.1107231,30.0650285 C56.1107231,30.6911558 55.7991658,31.0042194 55.1760512,31.0042194 L51.2036956,31.0042194 C50.580581,31.0042194 50.2690237,30.6911558 50.2690237,30.0650285 L50.2690237,21.1427153 C50.2690237,20.8453049 50.2261846,20.6535534 50.1405063,20.5674609 C50.0548281,20.4813684 49.8639992,20.4383222 49.5680198,20.4383222 L47.348174,20.4383222 Z",
    id: "logo-t",
    className: "fill-blue-600 dark:fill-white"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M23.8351185,39.1485256 C23.8351185,39.4113138 23.8729633,39.6235658 23.948653,39.7852816 C24.0243427,39.9469974 24.1202164,40.0708111 24.2362739,40.1567226 C24.3523315,40.2426342 24.473435,40.298224 24.5995846,40.3234921 C24.7257341,40.3487602 24.8443146,40.3613942 24.9553262,40.3613942 C25.0663378,40.3613942 25.1899643,40.3487602 25.3262058,40.3234921 C25.4624473,40.298224 25.5885968,40.2426342 25.7046543,40.1567226 C25.8207119,40.0708111 25.9165855,39.9469974 25.9922752,39.7852816 C26.0679649,39.6235658 26.1058098,39.4113138 26.1058098,39.1485256 L26.1058098,34.0241558 C26.1058098,33.6198663 26.307649,33.4177215 26.7113275,33.4177215 L29.2847777,33.4177215 C29.6884561,33.4177215 29.8902954,33.6198663 29.8902954,34.0241558 L29.8902954,39.1788473 C29.8902954,39.8964613 29.7944217,40.5509049 29.6026745,41.1421784 C29.4109272,41.7334518 29.1132143,42.2413405 28.7095359,42.6658445 C28.3058574,43.0903486 27.7936904,43.4188338 27.1730347,43.6513003 C26.5523791,43.8837668 25.8181889,44 24.9704641,44 C24.1227394,44 23.3885492,43.8837668 22.7678935,43.6513003 C22.1472379,43.4188338 21.6350709,43.0903486 21.2313924,42.6658445 C20.8277139,42.2413405 20.5300011,41.7334518 20.3382538,41.1421784 C20.1465065,40.5509049 20.0506329,39.8964613 20.0506329,39.1788473 L20.0506329,34.0241558 C20.0506329,33.6198663 20.2524721,33.4177215 20.6561506,33.4177215 L23.2296008,33.4177215 C23.6332792,33.4177215 23.8351185,33.6198663 23.8351185,34.0241558 L23.8351185,39.1485256 Z",
    id: "logo-u",
    className: "fill-slate-400 dark:fill-white dark:opacity-50"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M31.2471772,34.3937702 C31.1782052,34.2936626 31.1437192,34.1685282 31.1437192,34.0183668 C31.1437192,33.6179366 31.3407821,33.4177215 31.734908,33.4177215 L34.9716663,33.4177215 C35.1588761,33.4177215 35.3017467,33.4752834 35.4002782,33.590407 C35.4988096,33.7055307 35.5924145,33.848184 35.6810928,34.0183668 L36.2722815,35.1145446 L36.9669283,34.0183668 C37.0753129,33.848184 37.1787709,33.7055307 37.2773024,33.590407 C37.3758339,33.4752834 37.4989982,33.4177215 37.6467954,33.4177215 L40.6322985,33.4177215 C41.0264243,33.4177215 41.2234873,33.6179366 41.2234873,34.0183668 C41.2234873,34.1685282 41.1890012,34.2936626 41.1200292,34.3937702 L38.6961554,38.1177712 L41.3121656,42.6676595 C41.3712844,42.7777778 41.4008439,42.8979068 41.4008439,43.0280467 C41.4008439,43.4284769 41.203781,43.628692 40.8096551,43.628692 L37.7945926,43.628692 C37.6270891,43.628692 37.489145,43.5686275 37.3807604,43.4484984 C37.2723758,43.3283693 37.1639912,43.1882187 37.0556066,43.0280467 L36.0801452,41.3312236 L35.1638027,43.0280467 C35.0554181,43.1882187 34.9544233,43.3283693 34.8608184,43.4484984 C34.7672135,43.5686275 34.6218796,43.628692 34.4248167,43.628692 L31.4097541,43.628692 C31.0156283,43.628692 30.8185654,43.4284769 30.8185654,43.0280467 C30.8185654,42.9079176 30.8431983,42.7977993 30.892464,42.6976917 L33.6562714,38.102755 L31.2471772,34.3937702 Z",
    id: "logo-x",
    className: "fill-slate-400 dark:fill-white dark:opacity-50"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M35.5564902,5.38860759 C35.4256592,5.14225343 35.1639971,4.98945148 34.8799981,4.98945148 L29.8828915,4.98945148 L31.5051961,1.02595596 C31.5999369,0.795973431 31.5709945,0.533871308 31.4284206,0.328056435 C31.2858467,0.122241561 31.0220787,0 30.7955176,0 L25.179357,0 C24.7954796,0 24.471274,0.277725343 24.4205371,0.649876055 L23.399417,8.13405327 C23.3694886,8.347976 23.4363049,8.5631461 23.5818784,8.72530327 C23.7274518,8.88746044 23.9377387,8.98101266 24.1582369,8.98101266 L28.8266704,8.98101266 L27.4934704,15.033841 C27.416695,15.3837263 27.6041662,15.7373536 27.9402105,15.8786175 C28.0384933,15.9475343 28.1406053,15.9662447 28.2427173,15.9662447 C28.4890306,15.9662447 28.7283876,15.8493045 28.8748545,15.640683 L35.5121353,6.16072521 C35.6713662,5.93121044 35.6905122,5.63496176 35.5564902,5.38860759 Z",
    id: "logo-icon",
    className: "fill-blue-600 dark:fill-white"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, heroString.map((heading) => /* @__PURE__ */ React.createElement("div", {
    key: heading[0],
    className: "inline-flex gap-x-0.5 text-2xl leading-tight text-slate-700 dark:text-slate-200 even:ml-5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-black"
  }, heading[0]), /* @__PURE__ */ React.createElement("span", {
    className: "font-thin"
  }, heading[1])))), desc && /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex max-w-[200px] text-xs mt-3 text-center"
  }, desc), links6 && /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero-links"
  }, /* @__PURE__ */ React.createElement(ButtonGroup, {
    className: "flex"
  }, links6.map((link) => link.url ? /* @__PURE__ */ React.createElement(Button, {
    key: link.url,
    href: link.url,
    size: "large"
  }, link.label) : /* @__PURE__ */ React.createElement(Button, {
    key: link.label,
    onClick: link.handler,
    size: "large"
  }, link.label)))));
}

// app/styles/app.css
var app_default = "/build/_assets/app-C73PQCR4.css";

// app/styles/blog.css
var blog_default = "/build/_assets/blog-OZB25IZJ.css";

// route:/Users/deerpark/Dev/bolt-ux/app/root.tsx
function links() {
  return [
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
      initialData: { blog, site }
    }
  }
}) => {
  return (0, import_react_datocms.toRemixMeta)([...blog.seo, ...site.favicon]);
};
function App() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix5.useLoaderData)();
  const {
    data: { site }
  } = (0, import_react_datocms.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
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
  }), /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement(Hero, {
    heroString: [
      ["\uD648\uD398\uC774\uC9C0 \uC81C\uC791", "\uBD80\uD130"],
      ["\uB514\uC790\uC778 \uCEE8\uC124\uD305", "\uAE4C\uC9C0"]
    ],
    desc: "\uB354 \uB098\uC740 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC0DD\uAC01\uD558\uBA70 \uAF3C\uAF3C\uD558\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB824\uC694.",
    links: [
      { url: "/blog", label: "\uBB34\uB8CC \uC0C1\uB2F4" },
      {
        handler: () => {
        },
        label: "\uC694\uAE08\uD45C \uD655\uC778"
      }
    ]
  }), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/blog"
  }, /* @__PURE__ */ React.createElement("p", null, "BLOG"))), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/preview/start.ts
var start_exports = {};
__export(start_exports, {
  action: () => action
});
init_react();
var import_remix6 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix6.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/preview/stop.ts
var stop_exports = {};
__export(stop_exports, {
  action: () => action2
});
init_react();
var import_remix7 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix7.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index,
  links: () => links4,
  loader: () => loader2
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_react_datocms2 = require("react-datocms");

// app/components/Avatar/index.tsx
init_react();

// app/components/Avatar/styles.css
var styles_default = "/build/_assets/styles-GOU7VHTV.css";

// app/components/Avatar/index.tsx
var links2 = () => [{ rel: "stylesheet", href: styles_default }];
function Avatar({ name, picture }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "avatar__container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: picture.url,
    className: "avatar__picture",
    alt: name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "avatar__name"
  }, name));
}

// app/components/Date/index.tsx
init_react();
var import_date_fns = require("date-fns");

// app/components/Date/styles.css
var styles_default2 = "/build/_assets/styles-ZTC5ADNP.css";

// app/components/Date/index.tsx
var links3 = () => [{ rel: "stylesheet", href: styles_default2 }];
function Date({ dateString }) {
  const date = (0, import_date_fns.parseISO)(dateString);
  return /* @__PURE__ */ React.createElement("time", {
    className: "date",
    dateTime: dateString
  }, (0, import_date_fns.format)(date, "LLLL	d, yyyy"));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/index.tsx
function links4() {
  return [...links2(), ...links3()];
}
var loader2 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: `
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
      }
      ${responsiveImageFragment}
    `
  });
};
function Index() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix8.useLoaderData)();
  const previewEnabled = datoQuerySubscription2.enabled === void 0 || datoQuerySubscription2.enabled === true;
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms2.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "preview"
  }, previewEnabled ? /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    action: "/blog/preview/stop"
  }, "This is page is showing draft content. ", /* @__PURE__ */ React.createElement("button", null, "Click here"), " to exit preview mode.") : /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    action: "/blog/preview/start"
  }, "This is page is showing published content. ", /* @__PURE__ */ React.createElement("button", null, "Click here"), " to enter preview mode!")), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
    className: "grid__image",
    data: firstPost.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/blog/posts/${firstPost.slug}`
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "grid__title"
  }, firstPost.title)), /* @__PURE__ */ React.createElement(Date, {
    dateString: firstPost.date
  }), /* @__PURE__ */ React.createElement(Avatar, {
    name: firstPost.author.name,
    picture: firstPost.author.picture
  })), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "grid"
  }, otherPosts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug,
    className: "grid__item"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/blog/posts/${post.slug}`,
    className: "grid__link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
    className: "grid__image",
    data: post.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("p", {
    className: "grid__title"
  }, post.title), /* @__PURE__ */ React.createElement(Date, {
    dateString: post.date
  }), /* @__PURE__ */ React.createElement("p", {
    className: "date"
  }, post.excerpt), /* @__PURE__ */ React.createElement(Avatar, {
    name: post.author.name,
    picture: post.author.picture
  })))))))), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts
});
init_react();
var import_remix9 = __toESM(require_remix());
function Posts() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix9.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/posts/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react_datocms3 = require("react-datocms");
function links5() {
  return [...links2(), ...links3()];
}
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
  return (0, import_react_datocms3.toRemixMeta)(post.seo);
};
function PostSlug() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix10.useLoaderData)();
  const {
    data: { post, morePosts }
  } = (0, import_react_datocms3.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, post.title)), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: post.author.name,
    picture: post.author.picture
  })), /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
    className: "grid__image",
    data: post.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("section", {
    className: "section--narrow"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: post.date
  })), /* @__PURE__ */ React.createElement("section", {
    className: "section--narrow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-lg prose-blue"
  }, /* @__PURE__ */ React.createElement(import_react_datocms3.StructuredText, {
    data: post.content,
    renderBlock: ({ record }) => {
      if (record.__typename === "ImageBlockRecord") {
        return /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
          className: "grid__image",
          data: record.image.responsiveImage
        });
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Don't know how to render a block!"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(record, null, 2)));
    }
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section__title"
  }, "More posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "grid"
  }, morePosts.map((post2) => /* @__PURE__ */ React.createElement("li", {
    key: post2.slug,
    className: "grid__item"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: `/posts/${post2.slug}`,
    className: "grid__link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
    className: "grid__image",
    data: post2.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("p", {
    className: "grid__title"
  }, post2.title), /* @__PURE__ */ React.createElement(Date, {
    dateString: post2.date
  }), /* @__PURE__ */ React.createElement("p", {
    className: "date"
  }, post2.excerpt), /* @__PURE__ */ React.createElement(Avatar, {
    name: post2.author.name,
    picture: post2.author.picture
  }))))))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
var import_remix11 = __toESM(require_remix());
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, "dad"), /* @__PURE__ */ React.createElement(import_remix11.Outlet, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "602d63a6", "entry": { "module": "/build/entry.client-6MIS6AJX.js", "imports": ["/build/_shared/chunk-TZO7SWD4.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Y5WAACLO.js", "imports": ["/build/_shared/chunk-2GRWV5YR.js", "/build/_shared/chunk-LAZLC4JO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-TBSIYKOC.js", "imports": ["/build/_shared/chunk-HBJ4OURW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts": { "id": "routes/blog/posts", "parentId": "root", "path": "blog/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts-OU2W4ALG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog/posts", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-ET4M5TES.js", "imports": ["/build/_shared/chunk-2GRWV5YR.js", "/build/_shared/chunk-HBJ4OURW.js", "/build/_shared/chunk-LAZLC4JO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/start": { "id": "routes/blog/preview/start", "parentId": "root", "path": "blog/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/start-VP24JSWZ.js", "imports": ["/build/_shared/chunk-LQPBNQX3.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/stop": { "id": "routes/blog/preview/stop", "parentId": "root", "path": "blog/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/stop-YNLBY5BU.js", "imports": ["/build/_shared/chunk-LQPBNQX3.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IUQKDRKK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-602D63A6.js" };

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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvbGliL2ZyYWdtZW50cy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcHJldmlldy9zdGFydC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BdmF0YXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0RhdGUvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcG9zdHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcuanN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcHJldmlldy9zdGFydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvcHJldmlldy9zdGFydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3BcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcHJldmlldy9zdG9wXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvcHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2dcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvcG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcG9zdHMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nL3Bvc3RzXCIsXG4gICAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmssIExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyByZW5kZXJNZXRhVGFncywgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJ34vY29tcG9uZW50cy9IZXJvJ1xuXG5pbXBvcnQgYXBwU3R5bGVzIGZyb20gJy4vc3R5bGVzL2FwcC5jc3MnXG5pbXBvcnQgYmxvZ1N0eWxlcyBmcm9tICcuL3N0eWxlcy9ibG9nLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGJsb2dTdHlsZXMgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeTogYFxuICAgICAgICB7XG4gICAgICAgICAgc2l0ZTogX3NpdGUge1xuICAgICAgICAgICAgZmF2aWNvbjogZmF2aWNvbk1ldGFUYWdzKHZhcmlhbnRzOiBbaWNvbiwgbXNBcHBsaWNhdGlvbiwgYXBwbGVUb3VjaEljb25dKSB7XG4gICAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvZyB7XG4gICAgICAgICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJHttZXRhVGFnc0ZyYWdtZW50fVxuICAgICAgYCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBibG9nLCBzaXRlIH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEoWy4uLmJsb2cuc2VvLCAuLi5zaXRlLmZhdmljb25dKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBzaXRlIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc2l0ZS53ZWJtYW5pZmVzdD92PTIwMjIwMzEzJyAvPlxuICAgICAgICA8bGluayByZWw9J21hc2staWNvbicgaHJlZj0nL2ltYWdlcy9zYWZhcmktcGlubmVkLXRhYi5zdmc/dj0yMDIyMDMxMycgY29sb3I9JyMyNTYzZWInIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL2Zhdmljb24uaWNvP3Y9MjAyMjAzMTMnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdhcHBsaWNhdGlvbi1uYW1lJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nIzI1NjNlYicgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmOGZhZmMnIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7cmVuZGVyTWV0YVRhZ3MoWy4uLnNpdGUuZmF2aWNvbl0pfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICAgIGhlcm9TdHJpbmc9e1tcbiAgICAgICAgICAgICAgICBbJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLCAnXHVCRDgwXHVEMTMwJ10sXG4gICAgICAgICAgICAgICAgWydcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JywgJ1x1QUU0Q1x1QzlDMCddLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBkZXNjPSdcdUIzNTQgXHVCMDk4XHVDNzQwIFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUFDQkRcdUQ1RDhcdUM3NDQgXHVDMEREXHVBQzAxXHVENTU4XHVCQTcwIFx1QUYzQ1x1QUYzQ1x1RDU1OFx1QUM4QyBcdUI5Q0NcdUI0RTRcdUM1QjQgXHVCNERDXHVCODI0XHVDNjk0LidcbiAgICAgICAgICAgICAgbGlua3M9e1tcbiAgICAgICAgICAgICAgICB7IHVybDogJy9ibG9nJywgbGFiZWw6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdcdUM2OTRcdUFFMDhcdUQ0NUMgXHVENjU1XHVDNzc4JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvYmxvZyc+XG4gICAgICAgICAgICAgIDxwPkJMT0c8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgdGlueSBmcm9tICd0aW55LWpzb24taHR0cCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfTogYW55KSB7XG4gIGxldCBlbmRwb2ludCA9ICdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20nXG5cbiAgaWYgKHByb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlQpIHtcbiAgICBlbmRwb2ludCArPSBgL2Vudmlyb25tZW50cy8ke3Byb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlR9YFxuICB9XG5cbiAgaWYgKHByZXZpZXcpIHtcbiAgICBlbmRwb2ludCArPSBgL3ByZXZpZXdgXG4gIH1cblxuICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHRpbnkucG9zdCh7XG4gICAgdXJsOiBlbmRwb2ludCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTn1gLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoYm9keS5lcnJvcnMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdPdWNoISBUaGUgcXVlcnkgaGFzIHNvbWUgZXJyb3JzIScsIGJvZHkuZXJyb3JzKVxuICAgIHRocm93IGJvZHkuZXJyb3JzXG4gIH1cblxuICByZXR1cm4gYm9keS5kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oeyByZXF1ZXN0LCAuLi5ncWxSZXF1ZXN0IH06IGFueSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcbiAgY29uc3QgcHJldmlld0VuYWJsZWQgPSBzZXNzaW9uLmdldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHByZXZpZXdFbmFibGVkXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5ncWxSZXF1ZXN0LFxuICAgICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGF3YWl0IGxvYWQoeyAuLi5ncWxSZXF1ZXN0LCBwcmV2aWV3OiB0cnVlIH0pLFxuICAgICAgICAgIHRva2VuOiBwcm9jZXNzLmVudi5EQVRPQ01TX1JFQURPTkxZX1RPS0VOLFxuICAgICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UIHx8IG51bGwsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKGdxbFJlcXVlc3QpLFxuICAgICAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICBtYXhBZ2U6IDYwNF84MDAsXG4gICAgcGF0aDogJy8nLFxuICB9LFxufSlcblxuZXhwb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfVxuIiwgIi8vIFNlZTogaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vYmxvZy9vZmZlci1yZXNwb25zaXZlLXByb2dyZXNzaXZlLWxxaXAtaW1hZ2VzLWluLTIwMjBcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gICAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmFzZTY0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzRnJhZ21lbnQ6IHN0cmluZyA9IGBcbiAgZnJhZ21lbnQgbWV0YVRhZ3NGcmFnbWVudCBvbiBUYWcge1xuICAgIGF0dHJpYnV0ZXNcbiAgICBjb250ZW50XG4gICAgdGFnXG4gIH1cbmBcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcblxudHlwZSBIZXJvUHJvcHMgPSB7XG4gIGhlcm9TdHJpbmc6IFtzdHJpbmcsIHN0cmluZ11bXSxcbiAgZGVzYz86IHN0cmluZyxcbiAgbGlua3M/OiB7IHVybD86IHN0cmluZywgbGFiZWw6IHN0cmluZywgaGFuZGxlcj86ICgpID0+IHZvaWQgfCB1bmRlZmluZWQgfVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVybyh7IGhlcm9TdHJpbmcgPSBbWycnLCAnJ11dLCBkZXNjLCBsaW5rcyB9OiBIZXJvUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVybyc+XG4gICAgICA8TGluayBjbGFzc05hbWU9J2J4LWhlcm8tbG9nbycgdG89Jy8nPlxuICAgICAgICA8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzQ0cHgnIHZpZXdCb3g9JzAgMCA2MCA0NCc+XG4gICAgICAgICAgPGcgc3Ryb2tlPSdub25lJyBzdHJva2VXaWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbFJ1bGU9J2V2ZW5vZGQnPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE4LjAwMDAwMCwgLTI2LjAwMDAwMCknIGZpbGxSdWxlPSdub256ZXJvJz5cbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTguMDAwMDAwLCAyNi4wMDAwMDApJz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD0nTTAuOTM2NjMyODM1LDMxLjAwNDIxOTQgQzAuMzEyMjEwOTQ1LDMxLjAwNDIxOTQgMCwzMC42OTExNTU4IDAsMzAuMDY1MDI4NSBMMCwxNS45NzcxNjU1IEMwLDE1LjM1MTAzODMgMC4zMTIyMTA5NDUsMTUuMDM3OTc0NyAwLjkzNjYzMjgzNSwxNS4wMzc5NzQ3IEw5LjM2NjMyODM1LDE1LjAzNzk3NDcgQzExLjExNDcwOTYsMTUuMDM3OTc0NyAxMi40ODg0Mzc4LDE1LjQ3MjM1MDUgMTMuNDg3NTEyOCwxNi4zNDExMDIgQzE0LjQ4NjU4NzksMTcuMjA5ODUzNiAxNC45ODYxMjU0LDE4LjQxOTA2MTggMTQuOTg2MTI1NCwxOS45Njg3MjY3IEMxNC45ODYxMjU0LDIwLjM3NTcwOTQgMTQuOTI3NTg1OCwyMC43NDM1NTkyIDE0LjgxMDUwNjcsMjEuMDcyMjc2IEMxNC42OTM0Mjc2LDIxLjQwMDk5MjggMTQuNTcyNDQ1OSwyMS42NzQ5MjM1IDE0LjQ0NzU2MTUsMjEuODk0MDY4IEMxNC4yOTE0NTYsMjIuMTYwMTcyMSAxNC4xMTk3NCwyMi4zOTQ5Njk4IDEzLjkzMjQxMzQsMjIuNTk4NDYxMiBDMTQuMjI5MDEzOCwyMi43NzA2NDYxIDE0LjUwMjE5ODQsMjMuMDEzMjcwNSAxNC43NTE5NjcyLDIzLjMyNjMzNDEgQzE0Ljk3MDUxNDgsMjMuNTkyNDM4MiAxNS4xNjU2NDY3LDIzLjk0ODU0OCAxNS4zMzczNjI3LDI0LjM5NDY2MzcgQzE1LjUwOTA3ODcsMjQuODQwNzc5MyAxNS41OTQ5MzY3LDI1LjQwMDM4MDYgMTUuNTk0OTM2NywyNi4wNzM0Njc0IEMxNS41OTQ5MzY3LDI2Ljc3Nzg2MDUgMTUuNDk3MzcwOCwyNy40MzEzODA4IDE1LjMwMjIzODksMjguMDM0MDI4MyBDMTUuMTA3MTA3MSwyOC42MzY2NzU4IDE0Ljc3MTQ4MDMsMjkuMTU3MTQ0IDE0LjI5NTM1ODYsMjkuNTk1NDMzMSBDMTMuODE5MjM3LDMwLjAzMzcyMjIgMTMuMTgzMTA3MiwzMC4zNzgwOTIyIDEyLjM4Njk2OTIsMzAuNjI4NTQzMSBDMTEuNTkwODMxMywzMC44Nzg5OTQgMTAuNTgzOTUxLDMxLjAwNDIxOTQgOS4zNjYzMjgzNSwzMS4wMDQyMTk0IEwwLjkzNjYzMjgzNSwzMS4wMDQyMTk0IFogTTguMzEyNjE2NDEsMjEuMTQyNzE1MyBDOC41MzExNjQwOCwyMS4xNDI3MTUzIDguNzIyMzkzMjgsMjEuMDYwNTM2MSA4Ljg4NjMwNDAzLDIwLjg5NjE3NzcgQzkuMDUwMjE0NzcsMjAuNzMxODE5MyA5LjEzMjE3MDE0LDIwLjU0MDA2NzggOS4xMzIxNzAxNCwyMC4zMjA5MjMzIEM5LjEzMjE3MDE0LDIwLjEwMTc3ODggOS4wNTAyMTQ3NywxOS45MTAwMjczIDguODg2MzA0MDMsMTkuNzQ1NjY4OSBDOC43MjIzOTMyOCwxOS41ODEzMTA1IDguNTMxMTY0MDgsMTkuNDk5MTMxMyA4LjMxMjYxNjQxLDE5LjQ5OTEzMTMgTDYuMDg4MTEzNDMsMTkuNDk5MTMxMyBDNS45MzIwMDc5NiwxOS40OTkxMzEzIDUuODUzOTU1MjIsMTkuNTc3Mzk3MiA1Ljg1Mzk1NTIyLDE5LjczMzkyOSBMNS44NTM5NTUyMiwyMC45MDc5MTc2IEM1Ljg1Mzk1NTIyLDIxLjA2NDQ0OTQgNS45MzIwMDc5NiwyMS4xNDI3MTUzIDYuMDg4MTEzNDMsMjEuMTQyNzE1MyBMOC4zMTI2MTY0MSwyMS4xNDI3MTUzIFogTTguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBDOC43NjUzMjIyOCwyNi41NDMwNjI4IDguOTU2NTUxNDksMjYuNDYwODgzNiA5LjEyMDQ2MjIzLDI2LjI5NjUyNTIgQzkuMjg0MzcyOTgsMjYuMTMyMTY2OCA5LjM2NjMyODM1LDI1Ljk0MDQxNTMgOS4zNjYzMjgzNSwyNS43MjEyNzA4IEM5LjM2NjMyODM1LDI1LjUwMjEyNjMgOS4yODQzNzI5OCwyNS4zMTAzNzQ4IDkuMTIwNDYyMjMsMjUuMTQ2MDE2NCBDOC45NTY1NTE0OSwyNC45ODE2NTggOC43NjUzMjIyOCwyNC44OTk0Nzg4IDguNTQ2Nzc0NjIsMjQuODk5NDc4OCBMNi4wODgxMTM0MywyNC44OTk0Nzg4IEM1LjkzMjAwNzk2LDI0Ljg5OTQ3ODggNS44NTM5NTUyMiwyNC45Nzc3NDQ3IDUuODUzOTU1MjIsMjUuMTM0Mjc2NSBMNS44NTM5NTUyMiwyNi4zMDgyNjUxIEM1Ljg1Mzk1NTIyLDI2LjQ2NDc5NjkgNS45MzIwMDc5NiwyNi41NDMwNjI4IDYuMDg4MTEzNDMsMjYuNTQzMDYyOCBMOC41NDY3NzQ2MiwyNi41NDMwNjI4IFonXG4gICAgICAgICAgICAgICAgICBpZD0nbG9nby1iJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxsLWJsdWUtNjAwIGRhcms6ZmlsbC13aGl0ZSdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPSdNMTYuMzM3NTUyNywyMy4wMjEwOTcgQzE2LjMzNzU1MjcsMjEuODY5ODM0OCAxNi41NTMyNDQxLDIwLjc4NDY5MjMgMTYuOTg0NjI2OCwxOS43NjU2Njk2IEMxNy40MTYwMDk1LDE4Ljc0NjY0NjkgMTguMDA4MTgwMiwxNy44NTk4NjM4IDE4Ljc2MTEzOTEsMTcuMTA1MzIwMiBDMTkuNTE0MDk4LDE2LjM1MDc3NjcgMjAuNDA0MzE1LDE1Ljc1NTY5ODYgMjEuNDMxNzkwMSwxNS4zMjAwODU4IEMyMi40NTkyNjUzLDE0Ljg4NDQ3MyAyMy41NzY5Mzg2LDE0LjY2NjY2NjcgMjQuNzg0ODEwMSwxNC42NjY2NjY3IEMyNS45NzY5OTUsMTQuNjY2NjY2NyAyNy4wOTA3NDY3LDE0Ljg4NDQ3MyAyOC4xMjYwNjUxLDE1LjMyMDA4NTggQzI5LjE2MTM4MzYsMTUuNzU1Njk4NiAzMC4wNTU1MjIzLDE2LjM1MDc3NjcgMzAuODA4NDgxMSwxNy4xMDUzMjAyIEMzMS41NjE0NCwxNy44NTk4NjM4IDMyLjE1MzYxMDgsMTguNzQ2NjQ2OSAzMi41ODQ5OTM1LDE5Ljc2NTY2OTYgQzMzLjAxNjM3NjIsMjAuNzg0NjkyMyAzMy4yMzIwNjc1LDIxLjg2OTgzNDggMzMuMjMyMDY3NSwyMy4wMjEwOTcgQzMzLjIzMjA2NzUsMjQuMTcyMzU5MyAzMy4wMTYzNzYyLDI1LjI1NzUwMTggMzIuNTg0OTkzNSwyNi4yNzY1MjQ1IEMzMi4xNTM2MTA4LDI3LjI5NTU0NzIgMzEuNTYxNDQsMjguMTgyMzMwMyAzMC44MDg0ODExLDI4LjkzNjg3MzkgQzMwLjA1NTUyMjMsMjkuNjkxNDE3NCAyOS4xNjEzODM2LDMwLjI4NjQ5NTUgMjguMTI2MDY1MSwzMC43MjIxMDgzIEMyNy4wOTA3NDY3LDMxLjE1NzcyMSAyNS45NzY5OTUsMzEuMzc1NTI3NCAyNC43ODQ4MTAxLDMxLjM3NTUyNzQgQzIzLjU3NjkzODYsMzEuMzc1NTI3NCAyMi40NTkyNjUzLDMxLjE1NzcyMSAyMS40MzE3OTAxLDMwLjcyMjEwODMgQzIwLjQwNDMxNSwzMC4yODY0OTU1IDE5LjUxNDA5OCwyOS42OTE0MTc0IDE4Ljc2MTEzOTEsMjguOTM2ODczOSBDMTguMDA4MTgwMiwyOC4xODIzMzAzIDE3LjQxNjAwOTUsMjcuMjk1NTQ3MiAxNi45ODQ2MjY4LDI2LjI3NjUyNDUgQzE2LjU1MzI0NDEsMjUuMjU3NTAxOCAxNi4zMzc1NTI3LDI0LjE3MjM1OTMgMTYuMzM3NTUyNywyMy4wMjEwOTcgWiBNMjIuNDMxODEzNiwyMy4wMjEwOTcgQzIyLjQzMTgxMzYsMjMuNzUyMzA0MiAyMi42MzE4MTgzLDI0LjM1NTE2MTEgMjMuMDMxODI3NywyNC44Mjk2Njc5IEMyMy40MzE4MzcxLDI1LjMwNDE3NDYgMjQuMDE2MTY0NiwyNS41NDE0MjggMjQuNzg0ODEwMSwyNS41NDE0MjggQzI1LjUzNzc2OSwyNS41NDE0MjggMjYuMTE0MjUzMSwyNS4zMDQxNzQ2IDI2LjUxNDI2MjUsMjQuODI5NjY3OSBDMjYuOTE0MjcxOSwyNC4zNTUxNjExIDI3LjExNDI3NjYsMjMuNzUyMzA0MiAyNy4xMTQyNzY2LDIzLjAyMTA5NyBDMjcuMTE0Mjc2NiwyMi4yODk4ODk5IDI2LjkxNDI3MTksMjEuNjg3MDMzIDI2LjUxNDI2MjUsMjEuMjEyNTI2MiBDMjYuMTE0MjUzMSwyMC43MzgwMTk1IDI1LjUzNzc2OSwyMC41MDA3NjYxIDI0Ljc4NDgxMDEsMjAuNTAwNzY2MSBDMjQuMDE2MTY0NiwyMC41MDA3NjYxIDIzLjQzMTgzNzEsMjAuNzM4MDE5NSAyMy4wMzE4Mjc3LDIxLjIxMjUyNjIgQzIyLjYzMTgxODMsMjEuNjg3MDMzIDIyLjQzMTgxMzYsMjIuMjg5ODg5OSAyMi40MzE4MTM2LDIzLjAyMTA5NyBaJ1xuICAgICAgICAgICAgICAgICAgaWQ9J2xvZ28tbydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmlsbC1ibHVlLTYwMCBkYXJrOmZpbGwtd2hpdGUnXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD0nTTQ0LjU1Njk2MiwyNS42MDM4NzE5IEM0NS4xNzU4MDg3LDI1LjYwMzg3MTkgNDUuNDg1MjMyMSwyNS45MTY5MzU2IDQ1LjQ4NTIzMjEsMjYuNTQzMDYyOCBMNDUuNDg1MjMyMSwzMC4wNjUwMjg1IEM0NS40ODUyMzIxLDMwLjY5MTE1NTggNDUuMTc1ODA4NywzMS4wMDQyMTk0IDQ0LjU1Njk2MiwzMS4wMDQyMTk0IEwzNS4yNzQyNjE2LDMxLjAwNDIxOTQgQzM0LjY1NTQxNDksMzEuMDA0MjE5NCAzNC4zNDU5OTE2LDMwLjY5MTE1NTggMzQuMzQ1OTkxNiwzMC4wNjUwMjg1IEwzNC4zNDU5OTE2LDE1Ljk3NzE2NTUgQzM0LjM0NTk5MTYsMTUuMzUxMDM4MyAzNC42NTU0MTQ5LDE1LjAzNzk3NDcgMzUuMjc0MjYxNiwxNS4wMzc5NzQ3IEwzOS4yMTk0MDkzLDE1LjAzNzk3NDcgQzM5LjgzODI1NiwxNS4wMzc5NzQ3IDQwLjE0NzY3OTMsMTUuMzUxMDM4MyA0MC4xNDc2NzkzLDE1Ljk3NzE2NTUgTDQwLjE0NzY3OTMsMjQuODk5NDc4OCBDNDAuMTQ3Njc5MywyNS4xOTY4ODkyIDQwLjE5MDIyNSwyNS4zODg2NDA3IDQwLjI3NTMxNjUsMjUuNDc0NzMzMiBDNDAuMzYwNDA3OSwyNS41NjA4MjU3IDQwLjU0OTkyOTcsMjUuNjAzODcxOSA0MC44NDM4ODE5LDI1LjYwMzg3MTkgTDQ0LjU1Njk2MiwyNS42MDM4NzE5IFonXG4gICAgICAgICAgICAgICAgICBpZD0nbG9nby1sJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxsLWJsdWUtNjAwIGRhcms6ZmlsbC13aGl0ZSdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPSdNNDcuMzQ4MTc0LDIwLjQzODMyMjIgQzQ2LjcyNTA1OTQsMjAuNDM4MzIyMiA0Ni40MTM1MDIxLDIwLjEyNTI1ODUgNDYuNDEzNTAyMSwxOS40OTkxMzEzIEw0Ni40MTM1MDIxLDE1Ljk3NzE2NTUgQzQ2LjQxMzUwMjEsMTUuMzUxMDM4MyA0Ni43MjUwNTk0LDE1LjAzNzk3NDcgNDcuMzQ4MTc0LDE1LjAzNzk3NDcgTDU5LjAzMTU3MjgsMTUuMDM3OTc0NyBDNTkuNjU0Njg3NCwxNS4wMzc5NzQ3IDU5Ljk2NjI0NDcsMTUuMzUxMDM4MyA1OS45NjYyNDQ3LDE1Ljk3NzE2NTUgTDU5Ljk2NjI0NDcsMTkuNDk5MTMxMyBDNTkuOTY2MjQ0NywyMC4xMjUyNTg1IDU5LjY1NDY4NzQsMjAuNDM4MzIyMiA1OS4wMzE1NzI4LDIwLjQzODMyMjIgTDU2LjgxMTcyNywyMC40MzgzMjIyIEM1Ni41MTU3NDc2LDIwLjQzODMyMjIgNTYuMzI0OTE4OCwyMC40ODEzNjg0IDU2LjIzOTI0MDUsMjAuNTY3NDYwOSBDNTYuMTUzNTYyMiwyMC42NTM1NTM0IDU2LjExMDcyMzEsMjAuODQ1MzA0OSA1Ni4xMTA3MjMxLDIxLjE0MjcxNTMgTDU2LjExMDcyMzEsMzAuMDY1MDI4NSBDNTYuMTEwNzIzMSwzMC42OTExNTU4IDU1Ljc5OTE2NTgsMzEuMDA0MjE5NCA1NS4xNzYwNTEyLDMxLjAwNDIxOTQgTDUxLjIwMzY5NTYsMzEuMDA0MjE5NCBDNTAuNTgwNTgxLDMxLjAwNDIxOTQgNTAuMjY5MDIzNywzMC42OTExNTU4IDUwLjI2OTAyMzcsMzAuMDY1MDI4NSBMNTAuMjY5MDIzNywyMS4xNDI3MTUzIEM1MC4yNjkwMjM3LDIwLjg0NTMwNDkgNTAuMjI2MTg0NiwyMC42NTM1NTM0IDUwLjE0MDUwNjMsMjAuNTY3NDYwOSBDNTAuMDU0ODI4MSwyMC40ODEzNjg0IDQ5Ljg2Mzk5OTIsMjAuNDM4MzIyMiA0OS41NjgwMTk4LDIwLjQzODMyMjIgTDQ3LjM0ODE3NCwyMC40MzgzMjIyIFonXG4gICAgICAgICAgICAgICAgICBpZD0nbG9nby10J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxsLWJsdWUtNjAwIGRhcms6ZmlsbC13aGl0ZSdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPSdNMjMuODM1MTE4NSwzOS4xNDg1MjU2IEMyMy44MzUxMTg1LDM5LjQxMTMxMzggMjMuODcyOTYzMywzOS42MjM1NjU4IDIzLjk0ODY1MywzOS43ODUyODE2IEMyNC4wMjQzNDI3LDM5Ljk0Njk5NzQgMjQuMTIwMjE2NCw0MC4wNzA4MTExIDI0LjIzNjI3MzksNDAuMTU2NzIyNiBDMjQuMzUyMzMxNSw0MC4yNDI2MzQyIDI0LjQ3MzQzNSw0MC4yOTgyMjQgMjQuNTk5NTg0Niw0MC4zMjM0OTIxIEMyNC43MjU3MzQxLDQwLjM0ODc2MDIgMjQuODQ0MzE0Niw0MC4zNjEzOTQyIDI0Ljk1NTMyNjIsNDAuMzYxMzk0MiBDMjUuMDY2MzM3OCw0MC4zNjEzOTQyIDI1LjE4OTk2NDMsNDAuMzQ4NzYwMiAyNS4zMjYyMDU4LDQwLjMyMzQ5MjEgQzI1LjQ2MjQ0NzMsNDAuMjk4MjI0IDI1LjU4ODU5NjgsNDAuMjQyNjM0MiAyNS43MDQ2NTQzLDQwLjE1NjcyMjYgQzI1LjgyMDcxMTksNDAuMDcwODExMSAyNS45MTY1ODU1LDM5Ljk0Njk5NzQgMjUuOTkyMjc1MiwzOS43ODUyODE2IEMyNi4wNjc5NjQ5LDM5LjYyMzU2NTggMjYuMTA1ODA5OCwzOS40MTEzMTM4IDI2LjEwNTgwOTgsMzkuMTQ4NTI1NiBMMjYuMTA1ODA5OCwzNC4wMjQxNTU4IEMyNi4xMDU4MDk4LDMzLjYxOTg2NjMgMjYuMzA3NjQ5LDMzLjQxNzcyMTUgMjYuNzExMzI3NSwzMy40MTc3MjE1IEwyOS4yODQ3Nzc3LDMzLjQxNzcyMTUgQzI5LjY4ODQ1NjEsMzMuNDE3NzIxNSAyOS44OTAyOTU0LDMzLjYxOTg2NjMgMjkuODkwMjk1NCwzNC4wMjQxNTU4IEwyOS44OTAyOTU0LDM5LjE3ODg0NzMgQzI5Ljg5MDI5NTQsMzkuODk2NDYxMyAyOS43OTQ0MjE3LDQwLjU1MDkwNDkgMjkuNjAyNjc0NSw0MS4xNDIxNzg0IEMyOS40MTA5MjcyLDQxLjczMzQ1MTggMjkuMTEzMjE0Myw0Mi4yNDEzNDA1IDI4LjcwOTUzNTksNDIuNjY1ODQ0NSBDMjguMzA1ODU3NCw0My4wOTAzNDg2IDI3Ljc5MzY5MDQsNDMuNDE4ODMzOCAyNy4xNzMwMzQ3LDQzLjY1MTMwMDMgQzI2LjU1MjM3OTEsNDMuODgzNzY2OCAyNS44MTgxODg5LDQ0IDI0Ljk3MDQ2NDEsNDQgQzI0LjEyMjczOTQsNDQgMjMuMzg4NTQ5Miw0My44ODM3NjY4IDIyLjc2Nzg5MzUsNDMuNjUxMzAwMyBDMjIuMTQ3MjM3OSw0My40MTg4MzM4IDIxLjYzNTA3MDksNDMuMDkwMzQ4NiAyMS4yMzEzOTI0LDQyLjY2NTg0NDUgQzIwLjgyNzcxMzksNDIuMjQxMzQwNSAyMC41MzAwMDExLDQxLjczMzQ1MTggMjAuMzM4MjUzOCw0MS4xNDIxNzg0IEMyMC4xNDY1MDY1LDQwLjU1MDkwNDkgMjAuMDUwNjMyOSwzOS44OTY0NjEzIDIwLjA1MDYzMjksMzkuMTc4ODQ3MyBMMjAuMDUwNjMyOSwzNC4wMjQxNTU4IEMyMC4wNTA2MzI5LDMzLjYxOTg2NjMgMjAuMjUyNDcyMSwzMy40MTc3MjE1IDIwLjY1NjE1MDYsMzMuNDE3NzIxNSBMMjMuMjI5NjAwOCwzMy40MTc3MjE1IEMyMy42MzMyNzkyLDMzLjQxNzcyMTUgMjMuODM1MTE4NSwzMy42MTk4NjYzIDIzLjgzNTExODUsMzQuMDI0MTU1OCBMMjMuODM1MTE4NSwzOS4xNDg1MjU2IFonXG4gICAgICAgICAgICAgICAgICBpZD0nbG9nby11J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxsLXNsYXRlLTQwMCBkYXJrOmZpbGwtd2hpdGUgZGFyazpvcGFjaXR5LTUwJ1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9J00zMS4yNDcxNzcyLDM0LjM5Mzc3MDIgQzMxLjE3ODIwNTIsMzQuMjkzNjYyNiAzMS4xNDM3MTkyLDM0LjE2ODUyODIgMzEuMTQzNzE5MiwzNC4wMTgzNjY4IEMzMS4xNDM3MTkyLDMzLjYxNzkzNjYgMzEuMzQwNzgyMSwzMy40MTc3MjE1IDMxLjczNDkwOCwzMy40MTc3MjE1IEwzNC45NzE2NjYzLDMzLjQxNzcyMTUgQzM1LjE1ODg3NjEsMzMuNDE3NzIxNSAzNS4zMDE3NDY3LDMzLjQ3NTI4MzQgMzUuNDAwMjc4MiwzMy41OTA0MDcgQzM1LjQ5ODgwOTYsMzMuNzA1NTMwNyAzNS41OTI0MTQ1LDMzLjg0ODE4NCAzNS42ODEwOTI4LDM0LjAxODM2NjggTDM2LjI3MjI4MTUsMzUuMTE0NTQ0NiBMMzYuOTY2OTI4MywzNC4wMTgzNjY4IEMzNy4wNzUzMTI5LDMzLjg0ODE4NCAzNy4xNzg3NzA5LDMzLjcwNTUzMDcgMzcuMjc3MzAyNCwzMy41OTA0MDcgQzM3LjM3NTgzMzksMzMuNDc1MjgzNCAzNy40OTg5OTgyLDMzLjQxNzcyMTUgMzcuNjQ2Nzk1NCwzMy40MTc3MjE1IEw0MC42MzIyOTg1LDMzLjQxNzcyMTUgQzQxLjAyNjQyNDMsMzMuNDE3NzIxNSA0MS4yMjM0ODczLDMzLjYxNzkzNjYgNDEuMjIzNDg3MywzNC4wMTgzNjY4IEM0MS4yMjM0ODczLDM0LjE2ODUyODIgNDEuMTg5MDAxMiwzNC4yOTM2NjI2IDQxLjEyMDAyOTIsMzQuMzkzNzcwMiBMMzguNjk2MTU1NCwzOC4xMTc3NzEyIEw0MS4zMTIxNjU2LDQyLjY2NzY1OTUgQzQxLjM3MTI4NDQsNDIuNzc3Nzc3OCA0MS40MDA4NDM5LDQyLjg5NzkwNjggNDEuNDAwODQzOSw0My4wMjgwNDY3IEM0MS40MDA4NDM5LDQzLjQyODQ3NjkgNDEuMjAzNzgxLDQzLjYyODY5MiA0MC44MDk2NTUxLDQzLjYyODY5MiBMMzcuNzk0NTkyNiw0My42Mjg2OTIgQzM3LjYyNzA4OTEsNDMuNjI4NjkyIDM3LjQ4OTE0NSw0My41Njg2Mjc1IDM3LjM4MDc2MDQsNDMuNDQ4NDk4NCBDMzcuMjcyMzc1OCw0My4zMjgzNjkzIDM3LjE2Mzk5MTIsNDMuMTg4MjE4NyAzNy4wNTU2MDY2LDQzLjAyODA0NjcgTDM2LjA4MDE0NTIsNDEuMzMxMjIzNiBMMzUuMTYzODAyNyw0My4wMjgwNDY3IEMzNS4wNTU0MTgxLDQzLjE4ODIxODcgMzQuOTU0NDIzMyw0My4zMjgzNjkzIDM0Ljg2MDgxODQsNDMuNDQ4NDk4NCBDMzQuNzY3MjEzNSw0My41Njg2Mjc1IDM0LjYyMTg3OTYsNDMuNjI4NjkyIDM0LjQyNDgxNjcsNDMuNjI4NjkyIEwzMS40MDk3NTQxLDQzLjYyODY5MiBDMzEuMDE1NjI4Myw0My42Mjg2OTIgMzAuODE4NTY1NCw0My40Mjg0NzY5IDMwLjgxODU2NTQsNDMuMDI4MDQ2NyBDMzAuODE4NTY1NCw0Mi45MDc5MTc2IDMwLjg0MzE5ODMsNDIuNzk3Nzk5MyAzMC44OTI0NjQsNDIuNjk3NjkxNyBMMzMuNjU2MjcxNCwzOC4xMDI3NTUgTDMxLjI0NzE3NzIsMzQuMzkzNzcwMiBaJ1xuICAgICAgICAgICAgICAgICAgaWQ9J2xvZ28teCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmlsbC1zbGF0ZS00MDAgZGFyazpmaWxsLXdoaXRlIGRhcms6b3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPSdNMzUuNTU2NDkwMiw1LjM4ODYwNzU5IEMzNS40MjU2NTkyLDUuMTQyMjUzNDMgMzUuMTYzOTk3MSw0Ljk4OTQ1MTQ4IDM0Ljg3OTk5ODEsNC45ODk0NTE0OCBMMjkuODgyODkxNSw0Ljk4OTQ1MTQ4IEwzMS41MDUxOTYxLDEuMDI1OTU1OTYgQzMxLjU5OTkzNjksMC43OTU5NzM0MzEgMzEuNTcwOTk0NSwwLjUzMzg3MTMwOCAzMS40Mjg0MjA2LDAuMzI4MDU2NDM1IEMzMS4yODU4NDY3LDAuMTIyMjQxNTYxIDMxLjAyMjA3ODcsMCAzMC43OTU1MTc2LDAgTDI1LjE3OTM1NywwIEMyNC43OTU0Nzk2LDAgMjQuNDcxMjc0LDAuMjc3NzI1MzQzIDI0LjQyMDUzNzEsMC42NDk4NzYwNTUgTDIzLjM5OTQxNyw4LjEzNDA1MzI3IEMyMy4zNjk0ODg2LDguMzQ3OTc2IDIzLjQzNjMwNDksOC41NjMxNDYxIDIzLjU4MTg3ODQsOC43MjUzMDMyNyBDMjMuNzI3NDUxOCw4Ljg4NzQ2MDQ0IDIzLjkzNzczODcsOC45ODEwMTI2NiAyNC4xNTgyMzY5LDguOTgxMDEyNjYgTDI4LjgyNjY3MDQsOC45ODEwMTI2NiBMMjcuNDkzNDcwNCwxNS4wMzM4NDEgQzI3LjQxNjY5NSwxNS4zODM3MjYzIDI3LjYwNDE2NjIsMTUuNzM3MzUzNiAyNy45NDAyMTA1LDE1Ljg3ODYxNzUgQzI4LjAzODQ5MzMsMTUuOTQ3NTM0MyAyOC4xNDA2MDUzLDE1Ljk2NjI0NDcgMjguMjQyNzE3MywxNS45NjYyNDQ3IEMyOC40ODkwMzA2LDE1Ljk2NjI0NDcgMjguNzI4Mzg3NiwxNS44NDkzMDQ1IDI4Ljg3NDg1NDUsMTUuNjQwNjgzIEwzNS41MTIxMzUzLDYuMTYwNzI1MjEgQzM1LjY3MTM2NjIsNS45MzEyMTA0NCAzNS42OTA1MTIyLDUuNjM0OTYxNzYgMzUuNTU2NDkwMiw1LjM4ODYwNzU5IFonXG4gICAgICAgICAgICAgICAgICBpZD0nbG9nby1pY29uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaWxsLWJsdWUtNjAwIGRhcms6ZmlsbC13aGl0ZSdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIHtoZXJvU3RyaW5nLm1hcChoZWFkaW5nID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmdbMF19XG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGdhcC14LTAuNSB0ZXh0LTJ4bCBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0yMDAgZXZlbjptbC01J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+e2hlYWRpbmdbMF19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXRoaW4nPntoZWFkaW5nWzFdfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZXNjICYmIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBtYXgtdy1bMjAwcHhdIHRleHQteHMgbXQtMyB0ZXh0LWNlbnRlcic+e2Rlc2N9PC9kaXY+fVxuICAgICAge2xpbmtzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbGlua3MnPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+XG4gICAgICAgICAgICAgIGxpbmsudXJsID8gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLnVybH0gaHJlZj17bGluay51cmx9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLmxhYmVsfSBvbkNsaWNrPXtsaW5rLmhhbmRsZXJ9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBpY29uPzogc3RyaW5nLFxuICBocmVmPzogc3RyaW5nLFxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50W10gfCBzdHJpbmcsXG4gIHNpemU/OiAnc21hbGwnIHwgJ2RlZmF1bHQnIHwgJ2xhcmdlJyxcbiAgdHlwZT86ICdzdWJtaXQnIHwgJ2J1dHRvbicsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxufVxuXG50eXBlIEJ1dHRvbkdyb3VwUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IHN0cmluZyxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5jb25zdCBzaXplcyA9IHtcbiAgbWluV2lkdGg6IHtcbiAgICBzbWFsbDogJ21pbi13LVsyNHB4XScsXG4gICAgZGVmYXVsdDogJ21pbi13LVszMnB4XScsXG4gICAgbGFyZ2U6ICdtaW4tdy1bNDBweF0nLFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBzbWFsbDogJ2gtNicsXG4gICAgZGVmYXVsdDogJ2gtOCcsXG4gICAgbGFyZ2U6ICdoLTEwJyxcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBzbWFsbDogJ3RleHQteHMnLFxuICAgIGRlZmF1bHQ6ICd0ZXh0LXNtJyxcbiAgICBsYXJnZTogJ3RleHQtYmFzZScsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlID0gJ2J1dHRvbicsIHNpemUgPSAnZGVmYXVsdCcsIGhyZWYsIG9uQ2xpY2ssIGljb24sIGNoaWxkcmVuIH06IEJ1dHRvblByb3BzKSB7XG4gIHJldHVybiBocmVmID8gKFxuICAgIDxMaW5rIGtleT17aHJlZn0gdG89e2hyZWZ9PlxuICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX1gfT5cbiAgICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1pY29uJz57aWNvbn08L3NwYW4+fVxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9MaW5rPlxuICApIDogb25DbGljayA/IChcbiAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT0nYngtYnV0dG9uJyBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWljb24nPntpY29ufTwvc3Bhbj59XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX1gfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApIDogKFxuICAgIDxidXR0b24gdHlwZT17dHlwZX0gY2xhc3NOYW1lPSdieC1idXR0b24nPlxuICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24taWNvbic+e2ljb259PC9zcGFuPn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfWB9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9OiBCdXR0b25Hcm91cFByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1ncm91cCAke2NsYXNzTmFtZX1gfT57Y2hpbGRyZW59PC9kaXY+XG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi51bnNldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IExpbmssIEZvcm0sIHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcbmltcG9ydCB7IEF2YXRhciwgbGlua3MgYXMgYXZhdGFyTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSwgbGlua3MgYXMgZGF0ZUxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5hdmF0YXJMaW5rcygpLCAuLi5kYXRlTGlua3MoKV1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9ICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgIHtcbiAgICAgICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIwKSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICAgYCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCBwcmV2aWV3RW5hYmxlZCA9IGRhdG9RdWVyeVN1YnNjcmlwdGlvbi5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uLmVuYWJsZWQgPT09IHRydWVcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJldmlldyc+XG4gICAgICAgICAge3ByZXZpZXdFbmFibGVkID8gKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9ibG9nL3ByZXZpZXcvc3RvcCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9ibG9nL3ByZXZpZXcvc3RhcnQnPlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgc2hvd2luZyBwdWJsaXNoZWQgY29udGVudC4gPGJ1dHRvbj5DbGljayBoZXJlPC9idXR0b24+IHRvIGVudGVyIHByZXZpZXcgbW9kZSFcbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17Zmlyc3RQb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgIDxMaW5rIHRvPXtgL2Jsb2cvcG9zdHMvJHtmaXJzdFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2dyaWRfX3RpdGxlJz57Zmlyc3RQb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17Zmlyc3RQb3N0LmRhdGV9IC8+XG4gICAgICAgICAgPEF2YXRhciBuYW1lPXtmaXJzdFBvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e2ZpcnN0UG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQnPlxuICAgICAgICAgICAge290aGVyUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9J2dyaWRfX2l0ZW0nPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPSdncmlkX19saW5rJz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2dyaWRfX2ltYWdlJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2dyaWRfX3RpdGxlJz57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkYXRlJz57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcydcblxudHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwaWN0dXJlOiB7XG4gICAgdXJsPzogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG5cbmV4cG9ydCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH06IEF2YXRhclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLnVybH0gY2xhc3NOYW1lPSdhdmF0YXJfX3BpY3R1cmUnIGFsdD17bmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX25hbWUnPntuYW1lfTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnXG5cbnR5cGUgRGF0ZVByb3BzID0ge1xuICBkYXRlU3RyaW5nOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGUoeyBkYXRlU3RyaW5nIH06IERhdGVQcm9wcykge1xuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZylcbiAgcmV0dXJuIChcbiAgICA8dGltZSBjbGFzc05hbWU9J2RhdGUnIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT5cbiAgICAgIHtmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX1cbiAgICA8L3RpbWU+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyBBdmF0YXIsIGxpbmtzIGFzIGF2YXRhckxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUsIGxpbmtzIGFzIGRhdGVMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgU3RydWN0dXJlZFRleHQsIEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYXZhdGFyTGlua3MoKSwgLi4uZGF0ZUxpbmtzKCldXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeTogYFxuICAgICAgcXVlcnkgUG9zdEJ5U2x1Zygkc2x1ZzogU3RyaW5nKSB7XG4gICAgICAgIHBvc3QoZmlsdGVyOiB7c2x1Zzoge2VxOiAkc2x1Z319KSB7XG4gICAgICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICBibG9ja3Mge1xuICAgICAgICAgICAgICBfX3R5cGVuYW1lXG4gICAgICAgICAgICAgIC4uLm9uIEltYWdlQmxvY2tSZWNvcmQge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0ZVxuICAgICAgICAgIG9nSW1hZ2U6IGNvdmVySW1hZ2V7XG4gICAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vcmVQb3N0czogYWxsUG9zdHMob3JkZXJCeTogZGF0ZV9ERVNDLCBmaXJzdDogMiwgZmlsdGVyOiB7c2x1Zzoge25lcTogJHNsdWd9fSkge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGV4Y2VycHRcbiAgICAgICAgICBkYXRlXG4gICAgICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuICAgICAgJHttZXRhVGFnc0ZyYWdtZW50fVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbWV0YSA9ICh7XG4gIGRhdGE6IHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHtcbiAgICAgIGluaXRpYWxEYXRhOiB7IHBvc3QgfSxcbiAgICB9LFxuICB9LFxufSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcG9zdCwgbW9yZVBvc3RzIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2dyaWRfX2ltYWdlJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uLS1uYXJyb3cnPlxuICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24tLW5hcnJvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9zZSBwcm9zZS1sZyBwcm9zZS1ibHVlJz5cbiAgICAgICAgICA8U3RydWN0dXJlZFRleHRcbiAgICAgICAgICAgIGRhdGE9e3Bvc3QuY29udGVudH1cbiAgICAgICAgICAgIHJlbmRlckJsb2NrPXsoeyByZWNvcmQgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLl9fdHlwZW5hbWUgPT09ICdJbWFnZUJsb2NrUmVjb3JkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxwPkRvbid0IGtub3cgaG93IHRvIHJlbmRlciBhIGJsb2NrITwvcD5cbiAgICAgICAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHJlY29yZCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl9fdGl0bGUnPk1vcmUgcG9zdHM8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAge21vcmVQb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9IGNsYXNzTmFtZT0nZ3JpZF9faXRlbSc+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IGNsYXNzTmFtZT0nZ3JpZF9fbGluayc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2dyaWRfX2ltYWdlJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdncmlkX190aXRsZSc+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkYXRlJz57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPmRhZDwvZGl2PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNjAyZDYzYTYnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTZNSVM2QUpYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UWk83U1dENC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWTVXQUFDTE8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJHUldWNVlSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTEFaTEM0Sk8uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtVEJTSVlLT0MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhCSjRPVVJXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL3Bvc3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvcG9zdHMtT1UyVzRBTEcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnJzp7J2lkJzoncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nL3Bvc3RzJywncGF0aCc6JzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvcG9zdHMvJHNsdWctRVQ0TTVURVMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJHUldWNVlSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEJKNE9VUlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MQVpMQzRKTy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcHJldmlldy9zdGFydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQtVlAyNEpTV1ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxRUEJOUVgzLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcHJldmlldy9zdG9wJzp7J2lkJzoncm91dGVzL2Jsb2cvcHJldmlldy9zdG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvcHJldmlldy9zdG9wLVlOTEJZNUJVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MUVBCTlFYMy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1JVVFLRFJLSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC02MDJENjNBNi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7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
