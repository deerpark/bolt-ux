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
var import_remix7 = __toESM(require_remix());
var import_react_router_dom = require("react-router-dom");
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

// app/lib/config.ts
init_react();

// app/components/Icon/Logo.tsx
init_react();
function Logo({ className = "w-15 h-11" }) {
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
    children: [
      {
        pathname: "/blog",
        title: "\uACF5\uC9C0\uC0AC\uD56D",
        desc: "\uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        Icon: notice
      },
      {
        pathname: "/blog/news",
        title: "\uC0C8\uC18C\uC2DD",
        desc: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD",
        Icon: news
      }
    ]
  },
  {
    title: "\uC11C\uBE44\uC2A4",
    children: [
      {
        pathname: "/service/homaepage",
        title: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
        desc: "\uD64D\uBCF4\uB97C \uC704\uD55C \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uCD95",
        Icon: homepage
      },
      {
        pathname: "/service/singlepage",
        title: "\uC2F1\uAE00 \uD398\uC774\uC9C0 \uC81C\uC791",
        desc: "\uC774\uBCA4\uD2B8, \uB79C\uB529 \uB2E8\uC77C \uD398\uC774\uC9C0 \uAD6C\uCD95",
        Icon: singlepage
      },
      {
        pathname: "/service/publishing",
        title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
        desc: "\uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
        Icon: publishing
      },
      {
        pathname: "/service/appdesign",
        title: "\uC571 \uB514\uC790\uC778",
        desc: "\uBAA8\uBC14\uC77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778",
        Icon: appdesign
      },
      {
        pathname: "/service/consulting",
        title: "\uB514\uC790\uC778 \uCEE8\uC124\uD305",
        desc: "\uB85C\uACE0 \uBA85\uD568 \uAC04\uD310 \uBA54\uB274\uD310 \uD15C\uD50C\uB9BF \uCEE8\uC124\uD305",
        Icon: consulting
      }
    ]
  }
];
function useNav(pathname) {
  const matchedRoute = nav.reduce((acc, cur) => acc.concat(cur.children), []).find((route) => route.pathname === pathname);
  return matchedRoute || nav[0].children[0];
}

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
  }, children, /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }));
}

// app/components/Hero/index.tsx
function Hero({ heroString = [["", ""]], desc, links: links2 }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero-logo"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null))), /* @__PURE__ */ React.createElement("div", {
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
var import_remix5 = __toESM(require_remix());
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
      }, navSubItem.pathname ? /* @__PURE__ */ React.createElement(import_remix5.Link, {
        className: "bx-nav-item",
        to: navSubItem.pathname
      }, (navSubItem == null ? void 0 : navSubItem.Icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, /* @__PURE__ */ React.createElement(navSubItem.Icon, null)), /* @__PURE__ */ React.createElement("span", {
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
      }, /* @__PURE__ */ React.createElement(navSubItem.Icon, null)), /* @__PURE__ */ React.createElement("span", {
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
var import_remix6 = __toESM(require_remix());
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-logo"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
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

// app/styles/app.css
var app_default = "/build/_assets/app-JRC4WHAF.css";

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
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix7.useLoaderData)();
  const isRoot = pathname === "/";
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
  }), /* @__PURE__ */ React.createElement(import_remix7.Meta, null), /* @__PURE__ */ React.createElement(import_remix7.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `bx-section ${isRoot ? "" : "hidden md:flex"}`
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
  }), /* @__PURE__ */ React.createElement(Nav, {
    nav
  }), /* @__PURE__ */ React.createElement("div", {
    className: `${isRoot ? "hidden md:flex" : ""}`
  }, /* @__PURE__ */ React.createElement(Footer, null))), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React.createElement(import_remix7.LiveReload, null)));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/preview/start.ts
var start_exports = {};
__export(start_exports, {
  action: () => action
});
init_react();
var import_remix8 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix8.redirect)("/", {
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
var import_remix9 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix9.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/start.ts
var start_exports2 = {};
__export(start_exports2, {
  action: () => action3
});
init_react();
var import_remix10 = __toESM(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix10.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/stop.ts
var stop_exports2 = {};
__export(stop_exports2, {
  action: () => action4
});
init_react();
var import_remix11 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix11.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_react_router_dom2 = require("react-router-dom");
var import_remix12 = __toESM(require_remix());
var import_react_datocms2 = require("react-datocms");

// app/components/Header/index.tsx
init_react();
function Header({ title, Icon, desc }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-meta"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-title"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-desc"
  }, desc)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-icon"
  }, Icon && /* @__PURE__ */ React.createElement(Icon, null)));
}

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
    className: "bx-post-image",
    dateTime: dateString
  }, (0, import_date_fns.format)(date, "LLLL	d, yyyy"));
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/index.tsx
var loader2 = async ({ request, params }) => {
  const querySubscription = await datoQuerySubscription({
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
    `
  });
  return __spreadValues({}, querySubscription);
};
function Index() {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix12.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts],
      promotion
    }
  } = (0, import_react_datocms2.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement(Header, __spreadValues({}, { title, Icon, desc })), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement("section", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
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
  })), /* @__PURE__ */ React.createElement("ul", null, otherPosts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
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
  }))))), /* @__PURE__ */ React.createElement("section", {
    className: "section flex md:hidden"
  }, /* @__PURE__ */ React.createElement(Footer, null))), /* @__PURE__ */ React.createElement(import_remix12.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts
});
init_react();
var import_remix13 = __toESM(require_remix());
function Posts() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix13.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/blog/posts/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react_datocms3 = require("react-datocms");
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
  const {
    data: { post, morePosts }
  } = (0, import_react_datocms3.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: post.author.name,
    picture: post.author.picture
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-header"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "bx-post-title"
  }, post.title), /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
    className: "bx-post-image",
    data: post.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement(Date, {
    dateString: post.date
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-body"
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
  })))), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section__title"
  }, "More posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "grid"
  }, morePosts.map((post2) => /* @__PURE__ */ React.createElement("li", {
    key: post2.slug,
    className: "grid__item"
  }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
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
  default: () => Index2,
  loader: () => loader4
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_react_datocms4 = require("react-datocms");
var loader4 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: `
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
    `
  });
};
function Index2() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix15.useLoaderData)();
  const {
    data: { promotions }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: promotion.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
    className: "bx-promotion_image",
    data: promotion.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  }))))))), /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row flex md:hidden items-start"
  }, /* @__PURE__ */ React.createElement(Footer, null))), /* @__PURE__ */ React.createElement(import_remix15.Outlet, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "735d0d6f", "entry": { "module": "/build/entry.client-G2G24WCW.js", "imports": ["/build/_shared/chunk-LVKRFRJT.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QAPNJVPB.js", "imports": ["/build/_shared/chunk-TUKNGYS6.js", "/build/_shared/chunk-GCCPJXBY.js", "/build/_shared/chunk-O2M45XT3.js", "/build/_shared/chunk-D35AIDI6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-LXMO5NJB.js", "imports": ["/build/_shared/chunk-FMXJRVB3.js", "/build/_shared/chunk-JXOPY2GH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts": { "id": "routes/blog/posts", "parentId": "root", "path": "blog/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts-F7WHHI4E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog/posts", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-Q3EH7K3J.js", "imports": ["/build/_shared/chunk-TUKNGYS6.js", "/build/_shared/chunk-FMXJRVB3.js", "/build/_shared/chunk-JXOPY2GH.js", "/build/_shared/chunk-D35AIDI6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/start": { "id": "routes/blog/preview/start", "parentId": "root", "path": "blog/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/start-5CVCIUL5.js", "imports": ["/build/_shared/chunk-UNICDER6.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/stop": { "id": "routes/blog/preview/stop", "parentId": "root", "path": "blog/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/stop-XPHKZOG3.js", "imports": ["/build/_shared/chunk-UNICDER6.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BK2V2IID.js", "imports": ["/build/_shared/chunk-JXOPY2GH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-RSXLNDGM.js", "imports": ["/build/_shared/chunk-UNICDER6.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-NSBOLS7F.js", "imports": ["/build/_shared/chunk-UNICDER6.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-735D0D6F.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvbGliL2ZyYWdtZW50cy50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcnJvd1JpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1B1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXBwZGVzaWduLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0NvbnN1bHRpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ob3RpY2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQmFubmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1lvdXR1YmUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vVHdpdHRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9JbnN0YWdyYW0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcHJldmlldy9zdGFydC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LnRzIiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0F2YXRhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGF0ZS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLmpzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnQudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcHJldmlldy9zdGFydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcG9zdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2cvcG9zdHNcIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyBuYXYgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgeyBOYXYgfSBmcm9tICd+L2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcblxuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJ1xuaW1wb3J0IGJsb2dTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYmxvZy5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBibG9nU3R5bGVzIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgICAge1xuICAgICAgICAgIHNpdGU6IF9zaXRlIHtcbiAgICAgICAgICAgIGZhdmljb246IGZhdmljb25NZXRhVGFncyh2YXJpYW50czogW2ljb24sIG1zQXBwbGljYXRpb24sIGFwcGxlVG91Y2hJY29uXSkge1xuICAgICAgICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2cge1xuICAgICAgICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICR7bWV0YVRhZ3NGcmFnbWVudH1cbiAgICAgIGAsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgYmxvZywgc2l0ZSB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKFsuLi5ibG9nLnNlbywgLi4uc2l0ZS5mYXZpY29uXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgaXNSb290ID0gcGF0aG5hbWUgPT09ICcvJ1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNpdGUgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zaXRlLndlYm1hbmlmZXN0P3Y9MjAyMjAzMTMnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nbWFzay1pY29uJyBocmVmPScvaW1hZ2VzL3NhZmFyaS1waW5uZWQtdGFiLnN2Zz92PTIwMjIwMzEzJyBjb2xvcj0nIzI1NjNlYicgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvZmF2aWNvbi5pY28/dj0yMDIyMDMxMycgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0JPTFQgVVgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J2FwcGxpY2F0aW9uLW5hbWUnIGNvbnRlbnQ9J0JPTFQgVVgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMjU2M2ViJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2Y4ZmFmYycgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtyZW5kZXJNZXRhVGFncyhbLi4uc2l0ZS5mYXZpY29uXSl9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BieC1zZWN0aW9uICR7aXNSb290ID8gJycgOiAnaGlkZGVuIG1kOmZsZXgnfWB9PlxuICAgICAgICAgICAgPEhlcm9cbiAgICAgICAgICAgICAgaGVyb1N0cmluZz17W1xuICAgICAgICAgICAgICAgIFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsICdcdUJEODBcdUQxMzAnXSxcbiAgICAgICAgICAgICAgICBbJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxMjRcdUQzMDUnLCAnXHVBRTRDXHVDOUMwJ10sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIGRlc2M9J1x1QjM1NCBcdUIwOThcdUM3NDAgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QUNCRFx1RDVEOFx1Qzc0NCBcdUMwRERcdUFDMDFcdUQ1NThcdUJBNzAgXHVBRjNDXHVBRjNDXHVENTU4XHVBQzhDIFx1QjlDQ1x1QjRFNFx1QzVCNCBcdUI0RENcdUI4MjRcdUM2OTQuJ1xuICAgICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICAgIHsgdXJsOiAnL2Jsb2cnLCBsYWJlbDogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1x1QzY5NFx1QUUwOFx1RDQ1QyBcdUQ2NTVcdUM3NzgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE5hdiBuYXY9e25hdn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc1Jvb3QgPyAnaGlkZGVuIG1kOmZsZXgnIDogJyd9YH0+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHRpbnkgZnJvbSAndGlueS1qc29uLWh0dHAnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQoeyBxdWVyeSwgdmFyaWFibGVzLCBwcmV2aWV3IH06IGFueSkge1xuICBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tJ1xuXG4gIGlmIChwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UKSB7XG4gICAgZW5kcG9pbnQgKz0gYC9lbnZpcm9ubWVudHMvJHtwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UfWBcbiAgfVxuXG4gIGlmIChwcmV2aWV3KSB7XG4gICAgZW5kcG9pbnQgKz0gYC9wcmV2aWV3YFxuICB9XG5cbiAgY29uc3QgeyBib2R5IH0gPSBhd2FpdCB0aW55LnBvc3Qoe1xuICAgIHVybDogZW5kcG9pbnQsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBVE9DTVNfUkVBRE9OTFlfVE9LRU59YCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGJvZHkuZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcignT3VjaCEgVGhlIHF1ZXJ5IGhhcyBzb21lIGVycm9ycyEnLCBib2R5LmVycm9ycylcbiAgICB0aHJvdyBib2R5LmVycm9yc1xuICB9XG5cbiAgcmV0dXJuIGJvZHkuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHsgcmVxdWVzdCwgLi4uZ3FsUmVxdWVzdCB9OiBhbnkpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG4gIGNvbnN0IHByZXZpZXdFbmFibGVkID0gc2Vzc2lvbi5nZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiBwcmV2aWV3RW5hYmxlZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uZ3FsUmVxdWVzdCxcbiAgICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKHsgLi4uZ3FsUmVxdWVzdCwgcHJldmlldzogdHJ1ZSB9KSxcbiAgICAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTixcbiAgICAgICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVCB8fCBudWxsLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsRGF0YTogYXdhaXQgbG9hZChncWxSZXF1ZXN0KSxcbiAgICAgICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19fc2Vzc2lvbicsXG4gICAgbWF4QWdlOiA2MDRfODAwLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH1cbiIsICIvLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudDogc3RyaW5nID0gYFxuICBmcmFnbWVudCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCBvbiBSZXNwb25zaXZlSW1hZ2Uge1xuICAgIHNyY1NldFxuICAgIHdlYnBTcmNTZXRcbiAgICBzaXplc1xuICAgIHNyY1xuICAgIHdpZHRoXG4gICAgaGVpZ2h0XG4gICAgYXNwZWN0UmF0aW9cbiAgICBhbHRcbiAgICB0aXRsZVxuICAgIGJhc2U2NFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBtZXRhVGFnc0ZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IG1ldGFUYWdzRnJhZ21lbnQgb24gVGFnIHtcbiAgICBhdHRyaWJ1dGVzXG4gICAgY29udGVudFxuICAgIHRhZ1xuICB9XG5gXG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IHR5cGUgUm91dGUgPSB7XG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBkZXNjPzogc3RyaW5nLFxuICBJY29uPzogKCkgPT4gSlNYLkVsZW1lbnQsXG59XG5cbmV4cG9ydCB0eXBlIFJvdXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgY2hpbGRyZW46IFJvdXRlW10sXG59XG5cbmV4cG9ydCBjb25zdCBuYXY6IFJvdXRlc1tdID0gW1xuICB7XG4gICAgdGl0bGU6ICdcdUJFMTRcdUI4NUNcdUFERjgnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL2Jsb2cnLFxuICAgICAgICB0aXRsZTogJ1x1QUNGNVx1QzlDMFx1QzBBQ1x1RDU2RCcsXG4gICAgICAgIGRlc2M6ICdcdUM1NENcdUI4MjRcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5ub3RpY2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9ibG9nL25ld3MnLFxuICAgICAgICB0aXRsZTogJ1x1QzBDOFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIGRlc2M6ICdcdUMwQzhcdUI4NUNcdUM2QjQgXHVDMThDXHVDMkREJyxcbiAgICAgICAgSWNvbjogSWNvbi5uZXdzLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUMxMUNcdUJFNDRcdUMyQTQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2UvaG9tYWVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uaG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL3NpbmdsZXBhZ2UnLFxuICAgICAgICB0aXRsZTogJ1x1QzJGMVx1QUUwMCBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGVzYzogJ1x1Qzc3NFx1QkNBNFx1RDJCOCwgXHVCNzlDXHVCNTI5IFx1QjJFOFx1Qzc3QyBcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1JyxcbiAgICAgICAgSWNvbjogSWNvbi5zaW5nbGVwYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9wdWJsaXNoaW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUQzN0NcdUJFMTRcdUI5QUNcdUMyRjEgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgZGVzYzogJ1x1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBJY29uOiBJY29uLnB1Ymxpc2hpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL2FwcGRlc2lnbicsXG4gICAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIEljb246IEljb24uYXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9jb25zdWx0aW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgZGVzYzogJ1x1Qjg1Q1x1QUNFMCBcdUJBODVcdUQ1NjggXHVBQzA0XHVEMzEwIFx1QkE1NFx1QjI3NFx1RDMxMCBcdUQxNUNcdUQ1MENcdUI5QkYgXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgSWNvbjogSWNvbi5jb25zdWx0aW5nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2KHBhdGhuYW1lPzogc3RyaW5nKTogUm91dGUge1xuICBjb25zdCBtYXRjaGVkUm91dGUgPSBuYXYucmVkdWNlPFJvdXRlW10+KChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuY2hpbGRyZW4pLCBbXSkuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRobmFtZSA9PT0gcGF0aG5hbWUpXG4gIHJldHVybiBtYXRjaGVkUm91dGUgfHwgbmF2WzBdLmNoaWxkcmVuWzBdXG59XG4iLCAidHlwZSBMb2dvUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oeyBjbGFzc05hbWUgPSAndy0xNSBoLTExJyB9OiBMb2dvUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PScwIDAgNjAgNDQnPlxuICAgICAgPGcgc3Ryb2tlPSdub25lJyBzdHJva2VXaWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbFJ1bGU9J2V2ZW5vZGQnPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTguMDAwMDAwLCAtMjYuMDAwMDAwKScgZmlsbFJ1bGU9J25vbnplcm8nPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE4LjAwMDAwMCwgMjYuMDAwMDAwKSc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBDMC4zMTIyMTA5NDUsMzEuMDA0MjE5NCAwLDMwLjY5MTE1NTggMCwzMC4wNjUwMjg1IEwwLDE1Ljk3NzE2NTUgQzAsMTUuMzUxMDM4MyAwLjMxMjIxMDk0NSwxNS4wMzc5NzQ3IDAuOTM2NjMyODM1LDE1LjAzNzk3NDcgTDkuMzY2MzI4MzUsMTUuMDM3OTc0NyBDMTEuMTE0NzA5NiwxNS4wMzc5NzQ3IDEyLjQ4ODQzNzgsMTUuNDcyMzUwNSAxMy40ODc1MTI4LDE2LjM0MTEwMiBDMTQuNDg2NTg3OSwxNy4yMDk4NTM2IDE0Ljk4NjEyNTQsMTguNDE5MDYxOCAxNC45ODYxMjU0LDE5Ljk2ODcyNjcgQzE0Ljk4NjEyNTQsMjAuMzc1NzA5NCAxNC45Mjc1ODU4LDIwLjc0MzU1OTIgMTQuODEwNTA2NywyMS4wNzIyNzYgQzE0LjY5MzQyNzYsMjEuNDAwOTkyOCAxNC41NzI0NDU5LDIxLjY3NDkyMzUgMTQuNDQ3NTYxNSwyMS44OTQwNjggQzE0LjI5MTQ1NiwyMi4xNjAxNzIxIDE0LjExOTc0LDIyLjM5NDk2OTggMTMuOTMyNDEzNCwyMi41OTg0NjEyIEMxNC4yMjkwMTM4LDIyLjc3MDY0NjEgMTQuNTAyMTk4NCwyMy4wMTMyNzA1IDE0Ljc1MTk2NzIsMjMuMzI2MzM0MSBDMTQuOTcwNTE0OCwyMy41OTI0MzgyIDE1LjE2NTY0NjcsMjMuOTQ4NTQ4IDE1LjMzNzM2MjcsMjQuMzk0NjYzNyBDMTUuNTA5MDc4NywyNC44NDA3NzkzIDE1LjU5NDkzNjcsMjUuNDAwMzgwNiAxNS41OTQ5MzY3LDI2LjA3MzQ2NzQgQzE1LjU5NDkzNjcsMjYuNzc3ODYwNSAxNS40OTczNzA4LDI3LjQzMTM4MDggMTUuMzAyMjM4OSwyOC4wMzQwMjgzIEMxNS4xMDcxMDcxLDI4LjYzNjY3NTggMTQuNzcxNDgwMywyOS4xNTcxNDQgMTQuMjk1MzU4NiwyOS41OTU0MzMxIEMxMy44MTkyMzcsMzAuMDMzNzIyMiAxMy4xODMxMDcyLDMwLjM3ODA5MjIgMTIuMzg2OTY5MiwzMC42Mjg1NDMxIEMxMS41OTA4MzEzLDMwLjg3ODk5NCAxMC41ODM5NTEsMzEuMDA0MjE5NCA5LjM2NjMyODM1LDMxLjAwNDIxOTQgTDAuOTM2NjMyODM1LDMxLjAwNDIxOTQgWiBNOC4zMTI2MTY0MSwyMS4xNDI3MTUzIEM4LjUzMTE2NDA4LDIxLjE0MjcxNTMgOC43MjIzOTMyOCwyMS4wNjA1MzYxIDguODg2MzA0MDMsMjAuODk2MTc3NyBDOS4wNTAyMTQ3NywyMC43MzE4MTkzIDkuMTMyMTcwMTQsMjAuNTQwMDY3OCA5LjEzMjE3MDE0LDIwLjMyMDkyMzMgQzkuMTMyMTcwMTQsMjAuMTAxNzc4OCA5LjA1MDIxNDc3LDE5LjkxMDAyNzMgOC44ODYzMDQwMywxOS43NDU2Njg5IEM4LjcyMjM5MzI4LDE5LjU4MTMxMDUgOC41MzExNjQwOCwxOS40OTkxMzEzIDguMzEyNjE2NDEsMTkuNDk5MTMxMyBMNi4wODgxMTM0MywxOS40OTkxMzEzIEM1LjkzMjAwNzk2LDE5LjQ5OTEzMTMgNS44NTM5NTUyMiwxOS41NzczOTcyIDUuODUzOTU1MjIsMTkuNzMzOTI5IEw1Ljg1Mzk1NTIyLDIwLjkwNzkxNzYgQzUuODUzOTU1MjIsMjEuMDY0NDQ5NCA1LjkzMjAwNzk2LDIxLjE0MjcxNTMgNi4wODgxMTM0MywyMS4xNDI3MTUzIEw4LjMxMjYxNjQxLDIxLjE0MjcxNTMgWiBNOC41NDY3NzQ2MiwyNi41NDMwNjI4IEM4Ljc2NTMyMjI4LDI2LjU0MzA2MjggOC45NTY1NTE0OSwyNi40NjA4ODM2IDkuMTIwNDYyMjMsMjYuMjk2NTI1MiBDOS4yODQzNzI5OCwyNi4xMzIxNjY4IDkuMzY2MzI4MzUsMjUuOTQwNDE1MyA5LjM2NjMyODM1LDI1LjcyMTI3MDggQzkuMzY2MzI4MzUsMjUuNTAyMTI2MyA5LjI4NDM3Mjk4LDI1LjMxMDM3NDggOS4xMjA0NjIyMywyNS4xNDYwMTY0IEM4Ljk1NjU1MTQ5LDI0Ljk4MTY1OCA4Ljc2NTMyMjI4LDI0Ljg5OTQ3ODggOC41NDY3NzQ2MiwyNC44OTk0Nzg4IEw2LjA4ODExMzQzLDI0Ljg5OTQ3ODggQzUuOTMyMDA3OTYsMjQuODk5NDc4OCA1Ljg1Mzk1NTIyLDI0Ljk3Nzc0NDcgNS44NTM5NTUyMiwyNS4xMzQyNzY1IEw1Ljg1Mzk1NTIyLDI2LjMwODI2NTEgQzUuODUzOTU1MjIsMjYuNDY0Nzk2OSA1LjkzMjAwNzk2LDI2LjU0MzA2MjggNi4wODgxMTM0MywyNi41NDMwNjI4IEw4LjU0Njc3NDYyLDI2LjU0MzA2MjggWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tYidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTE2LjMzNzU1MjcsMjMuMDIxMDk3IEMxNi4zMzc1NTI3LDIxLjg2OTgzNDggMTYuNTUzMjQ0MSwyMC43ODQ2OTIzIDE2Ljk4NDYyNjgsMTkuNzY1NjY5NiBDMTcuNDE2MDA5NSwxOC43NDY2NDY5IDE4LjAwODE4MDIsMTcuODU5ODYzOCAxOC43NjExMzkxLDE3LjEwNTMyMDIgQzE5LjUxNDA5OCwxNi4zNTA3NzY3IDIwLjQwNDMxNSwxNS43NTU2OTg2IDIxLjQzMTc5MDEsMTUuMzIwMDg1OCBDMjIuNDU5MjY1MywxNC44ODQ0NzMgMjMuNTc2OTM4NiwxNC42NjY2NjY3IDI0Ljc4NDgxMDEsMTQuNjY2NjY2NyBDMjUuOTc2OTk1LDE0LjY2NjY2NjcgMjcuMDkwNzQ2NywxNC44ODQ0NzMgMjguMTI2MDY1MSwxNS4zMjAwODU4IEMyOS4xNjEzODM2LDE1Ljc1NTY5ODYgMzAuMDU1NTIyMywxNi4zNTA3NzY3IDMwLjgwODQ4MTEsMTcuMTA1MzIwMiBDMzEuNTYxNDQsMTcuODU5ODYzOCAzMi4xNTM2MTA4LDE4Ljc0NjY0NjkgMzIuNTg0OTkzNSwxOS43NjU2Njk2IEMzMy4wMTYzNzYyLDIwLjc4NDY5MjMgMzMuMjMyMDY3NSwyMS44Njk4MzQ4IDMzLjIzMjA2NzUsMjMuMDIxMDk3IEMzMy4yMzIwNjc1LDI0LjE3MjM1OTMgMzMuMDE2Mzc2MiwyNS4yNTc1MDE4IDMyLjU4NDk5MzUsMjYuMjc2NTI0NSBDMzIuMTUzNjEwOCwyNy4yOTU1NDcyIDMxLjU2MTQ0LDI4LjE4MjMzMDMgMzAuODA4NDgxMSwyOC45MzY4NzM5IEMzMC4wNTU1MjIzLDI5LjY5MTQxNzQgMjkuMTYxMzgzNiwzMC4yODY0OTU1IDI4LjEyNjA2NTEsMzAuNzIyMTA4MyBDMjcuMDkwNzQ2NywzMS4xNTc3MjEgMjUuOTc2OTk1LDMxLjM3NTUyNzQgMjQuNzg0ODEwMSwzMS4zNzU1Mjc0IEMyMy41NzY5Mzg2LDMxLjM3NTUyNzQgMjIuNDU5MjY1MywzMS4xNTc3MjEgMjEuNDMxNzkwMSwzMC43MjIxMDgzIEMyMC40MDQzMTUsMzAuMjg2NDk1NSAxOS41MTQwOTgsMjkuNjkxNDE3NCAxOC43NjExMzkxLDI4LjkzNjg3MzkgQzE4LjAwODE4MDIsMjguMTgyMzMwMyAxNy40MTYwMDk1LDI3LjI5NTU0NzIgMTYuOTg0NjI2OCwyNi4yNzY1MjQ1IEMxNi41NTMyNDQxLDI1LjI1NzUwMTggMTYuMzM3NTUyNywyNC4xNzIzNTkzIDE2LjMzNzU1MjcsMjMuMDIxMDk3IFogTTIyLjQzMTgxMzYsMjMuMDIxMDk3IEMyMi40MzE4MTM2LDIzLjc1MjMwNDIgMjIuNjMxODE4MywyNC4zNTUxNjExIDIzLjAzMTgyNzcsMjQuODI5NjY3OSBDMjMuNDMxODM3MSwyNS4zMDQxNzQ2IDI0LjAxNjE2NDYsMjUuNTQxNDI4IDI0Ljc4NDgxMDEsMjUuNTQxNDI4IEMyNS41Mzc3NjksMjUuNTQxNDI4IDI2LjExNDI1MzEsMjUuMzA0MTc0NiAyNi41MTQyNjI1LDI0LjgyOTY2NzkgQzI2LjkxNDI3MTksMjQuMzU1MTYxMSAyNy4xMTQyNzY2LDIzLjc1MjMwNDIgMjcuMTE0Mjc2NiwyMy4wMjEwOTcgQzI3LjExNDI3NjYsMjIuMjg5ODg5OSAyNi45MTQyNzE5LDIxLjY4NzAzMyAyNi41MTQyNjI1LDIxLjIxMjUyNjIgQzI2LjExNDI1MzEsMjAuNzM4MDE5NSAyNS41Mzc3NjksMjAuNTAwNzY2MSAyNC43ODQ4MTAxLDIwLjUwMDc2NjEgQzI0LjAxNjE2NDYsMjAuNTAwNzY2MSAyMy40MzE4MzcxLDIwLjczODAxOTUgMjMuMDMxODI3NywyMS4yMTI1MjYyIEMyMi42MzE4MTgzLDIxLjY4NzAzMyAyMi40MzE4MTM2LDIyLjI4OTg4OTkgMjIuNDMxODEzNiwyMy4wMjEwOTcgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ0LjU1Njk2MiwyNS42MDM4NzE5IEM0NS4xNzU4MDg3LDI1LjYwMzg3MTkgNDUuNDg1MjMyMSwyNS45MTY5MzU2IDQ1LjQ4NTIzMjEsMjYuNTQzMDYyOCBMNDUuNDg1MjMyMSwzMC4wNjUwMjg1IEM0NS40ODUyMzIxLDMwLjY5MTE1NTggNDUuMTc1ODA4NywzMS4wMDQyMTk0IDQ0LjU1Njk2MiwzMS4wMDQyMTk0IEwzNS4yNzQyNjE2LDMxLjAwNDIxOTQgQzM0LjY1NTQxNDksMzEuMDA0MjE5NCAzNC4zNDU5OTE2LDMwLjY5MTE1NTggMzQuMzQ1OTkxNiwzMC4wNjUwMjg1IEwzNC4zNDU5OTE2LDE1Ljk3NzE2NTUgQzM0LjM0NTk5MTYsMTUuMzUxMDM4MyAzNC42NTU0MTQ5LDE1LjAzNzk3NDcgMzUuMjc0MjYxNiwxNS4wMzc5NzQ3IEwzOS4yMTk0MDkzLDE1LjAzNzk3NDcgQzM5LjgzODI1NiwxNS4wMzc5NzQ3IDQwLjE0NzY3OTMsMTUuMzUxMDM4MyA0MC4xNDc2NzkzLDE1Ljk3NzE2NTUgTDQwLjE0NzY3OTMsMjQuODk5NDc4OCBDNDAuMTQ3Njc5MywyNS4xOTY4ODkyIDQwLjE5MDIyNSwyNS4zODg2NDA3IDQwLjI3NTMxNjUsMjUuNDc0NzMzMiBDNDAuMzYwNDA3OSwyNS41NjA4MjU3IDQwLjU0OTkyOTcsMjUuNjAzODcxOSA0MC44NDM4ODE5LDI1LjYwMzg3MTkgTDQ0LjU1Njk2MiwyNS42MDM4NzE5IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J000Ny4zNDgxNzQsMjAuNDM4MzIyMiBDNDYuNzI1MDU5NCwyMC40MzgzMjIyIDQ2LjQxMzUwMjEsMjAuMTI1MjU4NSA0Ni40MTM1MDIxLDE5LjQ5OTEzMTMgTDQ2LjQxMzUwMjEsMTUuOTc3MTY1NSBDNDYuNDEzNTAyMSwxNS4zNTEwMzgzIDQ2LjcyNTA1OTQsMTUuMDM3OTc0NyA0Ny4zNDgxNzQsMTUuMDM3OTc0NyBMNTkuMDMxNTcyOCwxNS4wMzc5NzQ3IEM1OS42NTQ2ODc0LDE1LjAzNzk3NDcgNTkuOTY2MjQ0NywxNS4zNTEwMzgzIDU5Ljk2NjI0NDcsMTUuOTc3MTY1NSBMNTkuOTY2MjQ0NywxOS40OTkxMzEzIEM1OS45NjYyNDQ3LDIwLjEyNTI1ODUgNTkuNjU0Njg3NCwyMC40MzgzMjIyIDU5LjAzMTU3MjgsMjAuNDM4MzIyMiBMNTYuODExNzI3LDIwLjQzODMyMjIgQzU2LjUxNTc0NzYsMjAuNDM4MzIyMiA1Ni4zMjQ5MTg4LDIwLjQ4MTM2ODQgNTYuMjM5MjQwNSwyMC41Njc0NjA5IEM1Ni4xNTM1NjIyLDIwLjY1MzU1MzQgNTYuMTEwNzIzMSwyMC44NDUzMDQ5IDU2LjExMDcyMzEsMjEuMTQyNzE1MyBMNTYuMTEwNzIzMSwzMC4wNjUwMjg1IEM1Ni4xMTA3MjMxLDMwLjY5MTE1NTggNTUuNzk5MTY1OCwzMS4wMDQyMTk0IDU1LjE3NjA1MTIsMzEuMDA0MjE5NCBMNTEuMjAzNjk1NiwzMS4wMDQyMTk0IEM1MC41ODA1ODEsMzEuMDA0MjE5NCA1MC4yNjkwMjM3LDMwLjY5MTE1NTggNTAuMjY5MDIzNywzMC4wNjUwMjg1IEw1MC4yNjkwMjM3LDIxLjE0MjcxNTMgQzUwLjI2OTAyMzcsMjAuODQ1MzA0OSA1MC4yMjYxODQ2LDIwLjY1MzU1MzQgNTAuMTQwNTA2MywyMC41Njc0NjA5IEM1MC4wNTQ4MjgxLDIwLjQ4MTM2ODQgNDkuODYzOTk5MiwyMC40MzgzMjIyIDQ5LjU2ODAxOTgsMjAuNDM4MzIyMiBMNDcuMzQ4MTc0LDIwLjQzODMyMjIgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tdCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTIzLjgzNTExODUsMzkuMTQ4NTI1NiBDMjMuODM1MTE4NSwzOS40MTEzMTM4IDIzLjg3Mjk2MzMsMzkuNjIzNTY1OCAyMy45NDg2NTMsMzkuNzg1MjgxNiBDMjQuMDI0MzQyNywzOS45NDY5OTc0IDI0LjEyMDIxNjQsNDAuMDcwODExMSAyNC4yMzYyNzM5LDQwLjE1NjcyMjYgQzI0LjM1MjMzMTUsNDAuMjQyNjM0MiAyNC40NzM0MzUsNDAuMjk4MjI0IDI0LjU5OTU4NDYsNDAuMzIzNDkyMSBDMjQuNzI1NzM0MSw0MC4zNDg3NjAyIDI0Ljg0NDMxNDYsNDAuMzYxMzk0MiAyNC45NTUzMjYyLDQwLjM2MTM5NDIgQzI1LjA2NjMzNzgsNDAuMzYxMzk0MiAyNS4xODk5NjQzLDQwLjM0ODc2MDIgMjUuMzI2MjA1OCw0MC4zMjM0OTIxIEMyNS40NjI0NDczLDQwLjI5ODIyNCAyNS41ODg1OTY4LDQwLjI0MjYzNDIgMjUuNzA0NjU0Myw0MC4xNTY3MjI2IEMyNS44MjA3MTE5LDQwLjA3MDgxMTEgMjUuOTE2NTg1NSwzOS45NDY5OTc0IDI1Ljk5MjI3NTIsMzkuNzg1MjgxNiBDMjYuMDY3OTY0OSwzOS42MjM1NjU4IDI2LjEwNTgwOTgsMzkuNDExMzEzOCAyNi4xMDU4MDk4LDM5LjE0ODUyNTYgTDI2LjEwNTgwOTgsMzQuMDI0MTU1OCBDMjYuMTA1ODA5OCwzMy42MTk4NjYzIDI2LjMwNzY0OSwzMy40MTc3MjE1IDI2LjcxMTMyNzUsMzMuNDE3NzIxNSBMMjkuMjg0Nzc3NywzMy40MTc3MjE1IEMyOS42ODg0NTYxLDMzLjQxNzcyMTUgMjkuODkwMjk1NCwzMy42MTk4NjYzIDI5Ljg5MDI5NTQsMzQuMDI0MTU1OCBMMjkuODkwMjk1NCwzOS4xNzg4NDczIEMyOS44OTAyOTU0LDM5Ljg5NjQ2MTMgMjkuNzk0NDIxNyw0MC41NTA5MDQ5IDI5LjYwMjY3NDUsNDEuMTQyMTc4NCBDMjkuNDEwOTI3Miw0MS43MzM0NTE4IDI5LjExMzIxNDMsNDIuMjQxMzQwNSAyOC43MDk1MzU5LDQyLjY2NTg0NDUgQzI4LjMwNTg1NzQsNDMuMDkwMzQ4NiAyNy43OTM2OTA0LDQzLjQxODgzMzggMjcuMTczMDM0Nyw0My42NTEzMDAzIEMyNi41NTIzNzkxLDQzLjg4Mzc2NjggMjUuODE4MTg4OSw0NCAyNC45NzA0NjQxLDQ0IEMyNC4xMjI3Mzk0LDQ0IDIzLjM4ODU0OTIsNDMuODgzNzY2OCAyMi43Njc4OTM1LDQzLjY1MTMwMDMgQzIyLjE0NzIzNzksNDMuNDE4ODMzOCAyMS42MzUwNzA5LDQzLjA5MDM0ODYgMjEuMjMxMzkyNCw0Mi42NjU4NDQ1IEMyMC44Mjc3MTM5LDQyLjI0MTM0MDUgMjAuNTMwMDAxMSw0MS43MzM0NTE4IDIwLjMzODI1MzgsNDEuMTQyMTc4NCBDMjAuMTQ2NTA2NSw0MC41NTA5MDQ5IDIwLjA1MDYzMjksMzkuODk2NDYxMyAyMC4wNTA2MzI5LDM5LjE3ODg0NzMgTDIwLjA1MDYzMjksMzQuMDI0MTU1OCBDMjAuMDUwNjMyOSwzMy42MTk4NjYzIDIwLjI1MjQ3MjEsMzMuNDE3NzIxNSAyMC42NTYxNTA2LDMzLjQxNzcyMTUgTDIzLjIyOTYwMDgsMzMuNDE3NzIxNSBDMjMuNjMzMjc5MiwzMy40MTc3MjE1IDIzLjgzNTExODUsMzMuNjE5ODY2MyAyMy44MzUxMTg1LDM0LjAyNDE1NTggTDIzLjgzNTExODUsMzkuMTQ4NTI1NiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby11J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zMS4yNDcxNzcyLDM0LjM5Mzc3MDIgQzMxLjE3ODIwNTIsMzQuMjkzNjYyNiAzMS4xNDM3MTkyLDM0LjE2ODUyODIgMzEuMTQzNzE5MiwzNC4wMTgzNjY4IEMzMS4xNDM3MTkyLDMzLjYxNzkzNjYgMzEuMzQwNzgyMSwzMy40MTc3MjE1IDMxLjczNDkwOCwzMy40MTc3MjE1IEwzNC45NzE2NjYzLDMzLjQxNzcyMTUgQzM1LjE1ODg3NjEsMzMuNDE3NzIxNSAzNS4zMDE3NDY3LDMzLjQ3NTI4MzQgMzUuNDAwMjc4MiwzMy41OTA0MDcgQzM1LjQ5ODgwOTYsMzMuNzA1NTMwNyAzNS41OTI0MTQ1LDMzLjg0ODE4NCAzNS42ODEwOTI4LDM0LjAxODM2NjggTDM2LjI3MjI4MTUsMzUuMTE0NTQ0NiBMMzYuOTY2OTI4MywzNC4wMTgzNjY4IEMzNy4wNzUzMTI5LDMzLjg0ODE4NCAzNy4xNzg3NzA5LDMzLjcwNTUzMDcgMzcuMjc3MzAyNCwzMy41OTA0MDcgQzM3LjM3NTgzMzksMzMuNDc1MjgzNCAzNy40OTg5OTgyLDMzLjQxNzcyMTUgMzcuNjQ2Nzk1NCwzMy40MTc3MjE1IEw0MC42MzIyOTg1LDMzLjQxNzcyMTUgQzQxLjAyNjQyNDMsMzMuNDE3NzIxNSA0MS4yMjM0ODczLDMzLjYxNzkzNjYgNDEuMjIzNDg3MywzNC4wMTgzNjY4IEM0MS4yMjM0ODczLDM0LjE2ODUyODIgNDEuMTg5MDAxMiwzNC4yOTM2NjI2IDQxLjEyMDAyOTIsMzQuMzkzNzcwMiBMMzguNjk2MTU1NCwzOC4xMTc3NzEyIEw0MS4zMTIxNjU2LDQyLjY2NzY1OTUgQzQxLjM3MTI4NDQsNDIuNzc3Nzc3OCA0MS40MDA4NDM5LDQyLjg5NzkwNjggNDEuNDAwODQzOSw0My4wMjgwNDY3IEM0MS40MDA4NDM5LDQzLjQyODQ3NjkgNDEuMjAzNzgxLDQzLjYyODY5MiA0MC44MDk2NTUxLDQzLjYyODY5MiBMMzcuNzk0NTkyNiw0My42Mjg2OTIgQzM3LjYyNzA4OTEsNDMuNjI4NjkyIDM3LjQ4OTE0NSw0My41Njg2Mjc1IDM3LjM4MDc2MDQsNDMuNDQ4NDk4NCBDMzcuMjcyMzc1OCw0My4zMjgzNjkzIDM3LjE2Mzk5MTIsNDMuMTg4MjE4NyAzNy4wNTU2MDY2LDQzLjAyODA0NjcgTDM2LjA4MDE0NTIsNDEuMzMxMjIzNiBMMzUuMTYzODAyNyw0My4wMjgwNDY3IEMzNS4wNTU0MTgxLDQzLjE4ODIxODcgMzQuOTU0NDIzMyw0My4zMjgzNjkzIDM0Ljg2MDgxODQsNDMuNDQ4NDk4NCBDMzQuNzY3MjEzNSw0My41Njg2Mjc1IDM0LjYyMTg3OTYsNDMuNjI4NjkyIDM0LjQyNDgxNjcsNDMuNjI4NjkyIEwzMS40MDk3NTQxLDQzLjYyODY5MiBDMzEuMDE1NjI4Myw0My42Mjg2OTIgMzAuODE4NTY1NCw0My40Mjg0NzY5IDMwLjgxODU2NTQsNDMuMDI4MDQ2NyBDMzAuODE4NTY1NCw0Mi45MDc5MTc2IDMwLjg0MzE5ODMsNDIuNzk3Nzk5MyAzMC44OTI0NjQsNDIuNjk3NjkxNyBMMzMuNjU2MjcxNCwzOC4xMDI3NTUgTDMxLjI0NzE3NzIsMzQuMzkzNzcwMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby14J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zNS41NTY0OTAyLDUuMzg4NjA3NTkgQzM1LjQyNTY1OTIsNS4xNDIyNTM0MyAzNS4xNjM5OTcxLDQuOTg5NDUxNDggMzQuODc5OTk4MSw0Ljk4OTQ1MTQ4IEwyOS44ODI4OTE1LDQuOTg5NDUxNDggTDMxLjUwNTE5NjEsMS4wMjU5NTU5NiBDMzEuNTk5OTM2OSwwLjc5NTk3MzQzMSAzMS41NzA5OTQ1LDAuNTMzODcxMzA4IDMxLjQyODQyMDYsMC4zMjgwNTY0MzUgQzMxLjI4NTg0NjcsMC4xMjIyNDE1NjEgMzEuMDIyMDc4NywwIDMwLjc5NTUxNzYsMCBMMjUuMTc5MzU3LDAgQzI0Ljc5NTQ3OTYsMCAyNC40NzEyNzQsMC4yNzc3MjUzNDMgMjQuNDIwNTM3MSwwLjY0OTg3NjA1NSBMMjMuMzk5NDE3LDguMTM0MDUzMjcgQzIzLjM2OTQ4ODYsOC4zNDc5NzYgMjMuNDM2MzA0OSw4LjU2MzE0NjEgMjMuNTgxODc4NCw4LjcyNTMwMzI3IEMyMy43Mjc0NTE4LDguODg3NDYwNDQgMjMuOTM3NzM4Nyw4Ljk4MTAxMjY2IDI0LjE1ODIzNjksOC45ODEwMTI2NiBMMjguODI2NjcwNCw4Ljk4MTAxMjY2IEwyNy40OTM0NzA0LDE1LjAzMzg0MSBDMjcuNDE2Njk1LDE1LjM4MzcyNjMgMjcuNjA0MTY2MiwxNS43MzczNTM2IDI3Ljk0MDIxMDUsMTUuODc4NjE3NSBDMjguMDM4NDkzMywxNS45NDc1MzQzIDI4LjE0MDYwNTMsMTUuOTY2MjQ0NyAyOC4yNDI3MTczLDE1Ljk2NjI0NDcgQzI4LjQ4OTAzMDYsMTUuOTY2MjQ0NyAyOC43MjgzODc2LDE1Ljg0OTMwNDUgMjguODc0ODU0NSwxNS42NDA2ODMgTDM1LjUxMjEzNTMsNi4xNjA3MjUyMSBDMzUuNjcxMzY2Miw1LjkzMTIxMDQ0IDM1LjY5MDUxMjIsNS42MzQ5NjE3NiAzNS41NTY0OTAyLDUuMzg4NjA3NTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28taWNvbidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNjQwIDQ2NHYzMmExNiAxNiAwIDAgMS0xNiAxNkgxNmExNiAxNiAwIDAgMS0xNi0xNnYtMzJhMTYgMTYgMCAwIDEgMTYtMTZoNjA4YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNDAuNjggNDQ4bDIzOS43OS0zMzAuMjUtNTMuNDEtNzMuNTVhMTYgMTYgMCAwIDEgMy41NC0yMi4zNWwyNS44OC0xOC44YTE2IDE2IDAgMCAxIDIyLjM1IDMuNTVMMzIwIDYzLjNsNDEuMTYtNTYuNjlhMTYgMTYgMCAwIDEgMjIuMzUtMy41NWwyNS45IDE4Ljc5QTE2IDE2IDAgMCAxIDQxMyA0NC4ybC01My40MSA3My41NUw1OTkuMzIgNDQ4aC0xNjNMMzIwIDI4OCAyMDMuNjQgNDQ4eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zNTIgMjU2YTI0IDI0IDAgMSAwIDI0IDI0IDI0IDI0IDAgMCAwLTI0LTI0em0tMTk0LjQ4IDE2aDM3TDE3NiAyMTguNzh6TTQ2NCA2NEg0OGE0OCA0OCAwIDAgMC00OCA0OHYyODhhNDggNDggMCAwIDAgNDggNDhoNDE2YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjExMmE0OCA0OCAwIDAgMC00OC00OHpNMjUwLjU4IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMTAuNzVMMjExLjE1IDMyMGgtNzAuMjlsLTcuMzggMjEuMjVBMTYgMTYgMCAwIDEgMTE4LjM2IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMjEuMjVMMTQwIDE3Ni4xMkEyNCAyNCAwIDAgMSAxNjIuNjcgMTYwaDI2LjY2QTI0IDI0IDAgMCAxIDIxMiAxNzYuMTNsNTMuNjkgMTU0LjYyQTE2IDE2IDAgMCAxIDI1MC41OCAzNTJ6TTQyNCAzMzZhMTYgMTYgMCAwIDEtMTYgMTZoLTE2YTE1Ljc0IDE1Ljc0IDAgMCAxLTEyLTUuNjhBNzIgNzIgMCAxIDEgMzUyIDIwOGE3MS4wNSA3MS4wNSAwIDAgMSAyNCA0LjQyVjE3NmExNiAxNiAwIDAgMSAxNi0xNmgxNmExNiAxNiAwIDAgMSAxNiAxNnonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIxMiAxNzYuMTNBMjQgMjQgMCAwIDAgMTg5LjMzIDE2MGgtMjYuNjZBMjQgMjQgMCAwIDAgMTQwIDE3Ni4xMkw4Ni4zIDMzMC43NUExNiAxNiAwIDAgMCAxMDEuNDIgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjEyLTEwLjc1bDcuMzgtMjEuMjVoNzAuMjlsNy4zNyAyMS4yNUExNiAxNiAwIDAgMCAyMzMuNjQgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjExLTIxLjI1ek0xNTcuNTIgMjcyTDE3NiAyMTguNzggMTk0LjQ4IDI3MnpNNDA4IDE2MGgtMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzYuNDJhNzEuMDUgNzEuMDUgMCAwIDAtMjQtNC40MiA3MiA3MiAwIDEgMCAyOCAxMzguMzIgMTUuNzQgMTUuNzQgMCAwIDAgMTIgNS42OGgxNmExNiAxNiAwIDAgMCAxNi0xNlYxNzZhMTYgMTYgMCAwIDAtMTYtMTZ6bS01NiAxNDRhMjQgMjQgMCAxIDEgMjQtMjQgMjQgMjQgMCAwIDEtMjQgMjR6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXJyb3dSaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyMCA1MTInPlxuICAgICAgPHBhdGggZD0nTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gcHVibGlzaGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yNTYgMHYxMjhoMTI4TDI1NiAwek0xNTQuMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMGwtNDggNDhjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMWw0OCA0OEMxMjkuOCAzODYuMSAxMzQuOSAzODggMTQwIDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMTIwLjMgMzIwbDMzLjg2LTMzLjg0QzE2MS4xIDI3OC4zIDE2MS4xIDI2NS43IDE1NC4xIDI1Ny44ek0yNTguMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMHMtNy44MTIgMjAuNSAwIDI4LjMxTDI2My43IDMyMGwtMzMuODYgMzMuODRjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMUMyMzMuOCAzODYuMSAyMzguOSAzODggMjQ0IDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGw0OC00OGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMjU4LjEgMjU3Ljh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yNTYgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDE2QzAgNDkwLjUgMjEuNDkgNTEyIDQ4IDUxMmgyODhjMjYuNTEgMCA0OC0yMS40OSA0OC00OFYxMjhIMjU2ek0xNTQuMSAzNTMuOGM3LjgxMiA3LjgxMiA3LjgxMiAyMC41IDAgMjguMzFDMTUwLjIgMzg2LjEgMTQ1LjEgMzg4IDE0MCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0bC00OC00OGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxbDQ4LTQ4YzcuODEyLTcuODEyIDIwLjQ3LTcuODEyIDI4LjI4IDBzNy44MTIgMjAuNSAwIDI4LjMxTDEyMC4zIDMyMEwxNTQuMSAzNTMuOHpNMzA2LjEgMzM0LjJsLTQ4IDQ4QzI1NC4yIDM4Ni4xIDI0OS4xIDM4OCAyNDQgMzg4cy0xMC4yMy0xLjkzOC0xNC4xNC01Ljg0NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxTDI2My43IDMyMGwtMzMuODYtMzMuODRjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMXMyMC40Ny03LjgxMiAyOC4yOCAwbDQ4IDQ4QzMxMy4xIDMxMy43IDMxMy4xIDMyNi4zIDMwNi4xIDMzNC4yeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gYXBwZGVzaWduKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTQxMi43IDI1Ni4xQzM4Ny4xIDI4MC4zIDM1Ny43IDI5OC44IDMyNC4xIDMwOS41TDI1NiAxOTJIMjU1LjFMOTguNjUgNDYzLjdDOTMuOTUgNDcxLjggODYuOTcgNDc4LjQgNzguNTggNDgyLjZMMjMuMTYgNTEwLjNDMTguMiA1MTIuOCAxMi4zMSA1MTIuNSA3LjU4OCA1MDkuNkMyLjg3MSA1MDYuNyAwIDUwMS41IDAgNDk2VjQ0MC42QzAgNDMyLjIgMi4yMjggNDIzLjkgNi40NiA0MTYuNUwxNjguOCAxMzYuMkMxNjMuMSAxMjMuOSAxNjAgMTEwLjMgMTYwIDk2QzE2MCA0Mi45OCAyMDIuMSAwIDI1NiAwQzMwOSAwIDM1MiA0Mi45OCAzNTIgOTZDMzUyIDExMC4zIDM0OC45IDEyMy45IDM0My4yIDEzNi4yTDQxMi43IDI1Ni4xek0yNTUuMSA2NEMyMzguMyA2NCAyMjMuMSA3OC4zMyAyMjMuMSA5NkMyMjMuMSAxMTMuNyAyMzguMyAxMjggMjU1LjEgMTI4QzI3My43IDEyOCAyODggMTEzLjcgMjg4IDk2QzI4OCA3OC4zMyAyNzMuNyA2NCAyNTUuMSA2NHpNMzU2LjcgMzY1LjlDMzg5LjYgMzUzLjYgNDE5LjYgMzM1LjUgNDQ1LjUgMzEyLjlMNTA1LjUgNDE2LjVDNTA5LjggNDIzLjkgNTEyIDQzMi4yIDUxMiA0NDAuNlY0OTZDNTEyIDUwMS41IDUwOS4xIDUwNi43IDUwNC40IDUwOS42QzQ5OS43IDUxMi41IDQ5My44IDUxMi44IDQ4OC44IDUxMC4zTDQzMy40IDQ4Mi42QzQyNSA0NzguNCA0MTggNDcxLjggNDEzLjMgNDYzLjdMMzU2LjcgMzY1Ljl6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J002Ni40OSAzMTIuOUM1My42NiAzMDEuNiA0MS44NCAyODkuMyAzMS4xOCAyNzZDMjAuMTMgMjYyLjIgMjIuMzQgMjQyLjEgMzYuMTMgMjMxQzQ5LjkyIDIxOS4xIDcwLjA2IDIyMi4yIDgxLjEyIDIzNS4xQzg2Ljc5IDI0My4xIDkyLjg3IDI0OS44IDk5LjM0IDI1Ni4xTDY2LjQ5IDMxMi45ek0xNTUuMyAzNjUuOUwxODcuOSAzMDkuNUMyMDkuNCAzMTYuMyAyMzIuMyAzMjAgMjU1LjEgMzIwQzMyNi43IDMyMCAzODkuOCAyODcuMyA0MzAuOSAyMzUuMUM0NDEuOSAyMjIuMiA0NjIuMSAyMTkuMSA0NzUuOSAyMzFDNDg5LjcgMjQyLjEgNDkxLjkgMjYyLjIgNDgwLjggMjc2QzQyOC4xIDM0MS44IDM0Ni4xIDM4NCAyNTUuMSAzODRDMjIwLjYgMzg0IDE4Ni42IDM3Ny42IDE1NS4zIDM2NS45SDE1NS4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY29uc3VsdGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yODggOTZDMjg4IDExMy43IDI3My43IDEyOCAyNTYgMTI4QzIzOC4zIDEyOCAyMjQgMTEzLjcgMjI0IDk2QzIyNCA3OC4zMyAyMzguMyA2NCAyNTYgNjRDMjczLjcgNjQgMjg4IDc4LjMzIDI4OCA5NnpNOTYgMTYwQzk2IDE0Mi4zIDExMC4zIDEyOCAxMjggMTI4QzE0NS43IDEyOCAxNjAgMTQyLjMgMTYwIDE2MEMxNjAgMTc3LjcgMTQ1LjcgMTkyIDEyOCAxOTJDMTEwLjMgMTkyIDk2IDE3Ny43IDk2IDE2MHpNNjQgMjg4QzY0IDI3MC4zIDc4LjMzIDI1NiA5NiAyNTZDMTEzLjcgMjU2IDEyOCAyNzAuMyAxMjggMjg4QzEyOCAzMDUuNyAxMTMuNyAzMjAgOTYgMzIwQzc4LjMzIDMyMCA2NCAzMDUuNyA2NCAyODh6TTM1MiAxNjBDMzUyIDE0Mi4zIDM2Ni4zIDEyOCAzODQgMTI4QzQwMS43IDEyOCA0MTYgMTQyLjMgNDE2IDE2MEM0MTYgMTc3LjcgNDAxLjcgMTkyIDM4NCAxOTJDMzY2LjMgMTkyIDM1MiAxNzcuNyAzNTIgMTYweidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNTEyIDI1NS4xQzUxMiAyNTYuOSA1MTEuMSAyNTcuOCA1MTEuMSAyNTguN0M1MTEuNiAyOTUuMiA0NzguNCAzMTkuMSA0NDEuOSAzMTkuMUgzNDRDMzE3LjUgMzE5LjEgMjk2IDM0MS41IDI5NiAzNjhDMjk2IDM3MS40IDI5Ni40IDM3NC43IDI5NyAzNzcuOUMyOTkuMiAzODguMSAzMDMuNSAzOTcuMSAzMDcuOSA0MDcuOEMzMTMuOSA0MjEuNiAzMjAgNDM1LjMgMzIwIDQ0OS44QzMyMCA0ODEuNyAyOTguNCA1MTAuNSAyNjYuNiA1MTEuOEMyNjMuMSA1MTEuOSAyNTkuNSA1MTIgMjU2IDUxMkMxMTQuNiA1MTIgMCAzOTcuNCAwIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NlYyNTUuMXpNOTYgMjU1LjFDNzguMzMgMjU1LjEgNjQgMjcwLjMgNjQgMjg3LjFDNjQgMzA1LjcgNzguMzMgMzE5LjEgOTYgMzE5LjFDMTEzLjcgMzE5LjEgMTI4IDMwNS43IDEyOCAyODcuMUMxMjggMjcwLjMgMTEzLjcgMjU1LjEgOTYgMjU1LjF6TTEyOCAxOTEuMUMxNDUuNyAxOTEuMSAxNjAgMTc3LjcgMTYwIDE1OS4xQzE2MCAxNDIuMyAxNDUuNyAxMjcuMSAxMjggMTI3LjFDMTEwLjMgMTI3LjEgOTYgMTQyLjMgOTYgMTU5LjFDOTYgMTc3LjcgMTEwLjMgMTkxLjEgMTI4IDE5MS4xek0yNTYgNjMuMUMyMzguMyA2My4xIDIyNCA3OC4zMyAyMjQgOTUuMUMyMjQgMTEzLjcgMjM4LjMgMTI3LjEgMjU2IDEyNy4xQzI3My43IDEyNy4xIDI4OCAxMTMuNyAyODggOTUuMUMyODggNzguMzMgMjczLjcgNjMuMSAyNTYgNjMuMXpNMzg0IDE5MS4xQzQwMS43IDE5MS4xIDQxNiAxNzcuNyA0MTYgMTU5LjFDNDE2IDE0Mi4zIDQwMS43IDEyNy4xIDM4NCAxMjcuMUMzNjYuMyAxMjcuMSAzNTIgMTQyLjMgMzUyIDE1OS4xQzM1MiAxNzcuNyAzNjYuMyAxOTEuMSAzODQgMTkxLjF6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBuZXdzKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTAgMTI4djMwNEMwIDQ1OC41IDIxLjQ5IDQ4MCA0OCA0ODBTOTYgNDU4LjUgOTYgNDMyVjk2SDMyQzE0LjMzIDk2IDAgMTEwLjMgMCAxMjh6TTI3MiAyODhoLTk2QzE2Ny4yIDI4OCAxNjAgMjk1LjIgMTYwIDMwNEMxNjAgMzEyLjggMTY3LjIgMzIwIDE3NiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMjk1LjIgMjgwLjggMjg4IDI3MiAyODh6TTMzNiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMjk1LjIgNDQwLjggMjg4IDQzMiAyODhoLTk2QzMyNy4yIDI4OCAzMjAgMjk1LjIgMzIwIDMwNEMzMjAgMzEyLjggMzI3LjIgMzIwIDMzNiAzMjB6TTI3MiAzODRoLTk2QzE2Ny4yIDM4NCAxNjAgMzkxLjIgMTYwIDQwMEMxNjAgNDA4LjggMTY3LjIgNDE2IDE3NiA0MTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMzkxLjIgMjgwLjggMzg0IDI3MiAzODR6TTQzMiAzODRoLTk2Yy04LjgzNiAwLTE2IDcuMTYyLTE2IDE2YzAgOC44MzYgNy4xNjQgMTYgMTYgMTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMzkxLjIgNDQwLjggMzg0IDQzMiAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J000ODAgMzJIMTI4QzExMC4zIDMyIDk2IDQ2LjMzIDk2IDY0djM2OEM5NiA0NTguNSA3NC41MSA0ODAgNDggNDgwSDQ0OGMzNS4zNSAwIDY0LTI4LjY1IDY0LTY0VjY0QzUxMiA0Ni4zMyA0OTcuNyAzMiA0ODAgMzJ6TTI3MiA0MTZoLTk2QzE2Ny4yIDQxNiAxNjAgNDA4LjggMTYwIDQwMEMxNjAgMzkxLjIgMTY3LjIgMzg0IDE3NiAzODRoOTZjOC44MzYgMCAxNiA3LjE2MiAxNiAxNkMyODggNDA4LjggMjgwLjggNDE2IDI3MiA0MTZ6TTI3MiAzMjBoLTk2QzE2Ny4yIDMyMCAxNjAgMzEyLjggMTYwIDMwNEMxNjAgMjk1LjIgMTY3LjIgMjg4IDE3NiAyODhoOTZDMjgwLjggMjg4IDI4OCAyOTUuMiAyODggMzA0QzI4OCAzMTIuOCAyODAuOCAzMjAgMjcyIDMyMHpNNDMyIDQxNmgtOTZjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZjMC04LjgzOCA3LjE2NC0xNiAxNi0xNmg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzQ0OCA0MDguOCA0NDAuOCA0MTYgNDMyIDQxNnpNNDMyIDMyMGgtOTZDMzI3LjIgMzIwIDMyMCAzMTIuOCAzMjAgMzA0QzMyMCAyOTUuMiAzMjcuMiAyODggMzM2IDI4OGg5NkM0NDAuOCAyODggNDQ4IDI5NS4yIDQ0OCAzMDRDNDQ4IDMxMi44IDQ0MC44IDMyMCA0MzIgMzIwek00NDggMjA4QzQ0OCAyMTYuOCA0NDAuOCAyMjQgNDMyIDIyNGgtMjU2QzE2Ny4yIDIyNCAxNjAgMjE2LjggMTYwIDIwOHYtOTZDMTYwIDEwMy4yIDE2Ny4yIDk2IDE3NiA5NmgyNTZDNDQwLjggOTYgNDQ4IDEwMy4yIDQ0OCAxMTJWMjA4eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbm90aWNlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE5MiAyMjRjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtMTEyQzIxNiA3NC43NSAyMDUuMyA2NCAxOTIgNjRTMTY4IDc0Ljc1IDE2OCA4OHYxMTJDMTY4IDIxMy4zIDE3OC44IDIyNCAxOTIgMjI0ek0xOTIgMzIwYzE3LjY3IDAgMzItMTQuMzMgMzItMzJzLTE0LjMzLTMyLTMyLTMyUzE2MCAyNzAuMyAxNjAgMjg4UzE3NC4zIDMyMCAxOTIgMzIwek0xMTIuMyAzODRsLS4wOTA2IDcwLjM1YzAgNi4yOTcgMS44ODYgMTIuNDMgNS4zNTUgMTcuNjhsMTcuMDggMjUuNjlDMTM5LjggNTA1LjYgMTUxLjggNTEyIDE2MS4yIDUxMmg2MS42N2M5LjQzOCAwIDIxLjM2LTYuMzk1IDI2LjYxLTE0LjI3bDE3LjM0LTI1LjdjMi45MzgtNC40MzggNS4wOTctMTIuMzUgNS4wOTctMTcuNjhsLjIxNTYtNzAuMzVMMTEyLjMgMzg0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMTkxLjUgLjAxMjdDODkuNDcgLjI2MjcgMTYgODIuMSAxNiAxNzUuMWMwIDQ0LjM4IDE2LjUyIDg0Ljg5IDQzLjUyIDExNS44YzE2LjYyIDE4Ljg4IDQyLjM2IDU4LjIzIDUyLjI0IDkxLjQ4YzAgLjI1IC4xMTQ2IC41MTA0IC4xMTQ2IC43NjA0bDE2MC4zIC4wMDA2YzAtLjI1IC4wODMzLS41MTExIC4wODMzLS43NjExYzkuODc1LTMzLjI1IDM1LjYxLTcyLjYxIDUyLjI0LTkxLjQ4QzM1MS41IDI2MC45IDM2OCAyMjAuNCAzNjggMTc1LjFDMzY4IDc4LjYyIDI4OC44LS4yMzczIDE5MS41IC4wMTI3ek0xNjggODhDMTY4IDc0Ljc1IDE3OC44IDY0IDE5MiA2NHMyNCAxMC43NSAyNCAyNHYxMTJDMjE2IDIxMy4zIDIwNS4zIDIyNCAxOTIgMjI0UzE2OCAyMTMuMyAxNjggMjAwVjg4ek0xOTIgMzIwYy0xNy42NyAwLTMyLTE0LjMzLTMyLTMyczE0LjMzLTMyIDMyLTMyczMyIDE0LjMzIDMyIDMyUzIwOS43IDMyMCAxOTIgMzIweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI5OC45IDMwOS42bC00NS42NC02LjY4OGwtMjAuMzYtNDEuNGMtMy42MjUtNy4zNzUtMTQuMTYtNy41LTE3LjkxIDBMMTk0LjcgMzAyLjlMMTQ5IDMwOS42Yy04LjI1IDEuMTI1LTExLjM3IDExLjIyLTUuNDkxIDE3LjFsMzIuOTQgMzIuMWwtNy43NzIgNDUuNTVjLTEuNSA4LjI1IDcuMjY0IDE0LjM3IDE0LjUxIDEwLjQ5bDQwLjc3LTIxLjUzbDQwLjc3IDIxLjUzYzcuMzc1IDMuODc1IDE2LjAxLTIuMjQyIDE0LjUxLTEwLjQ5bC03Ljc3My00NS41NWwzMi4xLTMyLjFDMzEwLjQgMzIwLjggMzA3LjIgMzEwLjcgMjk4LjkgMzA5LjZ6TTQyNCAxNDMuMUwxMjcuNCAxNDMuMWM2LjM3NS0zMC44OCAzMC43NS01NS4yNSA2Mi43NS02MS4xQzE5OC44IDkwLjYyIDIxMC44IDk1LjEgMjI0IDk1LjFsNjIuMiAuMDAwMWMyMy4yMSAwIDQ0LjUtMTUuNjkgNDguODktMzguNDhDMzQwLjEgMjYuODUgMzE3LjYgMCAyODggMGgtNjRjLTIyIDAtNDAuNSAxNS00Ni4xMyAzNS4yNWMtNTIgMTEuNjItOTEuNzUgNTUtOTguNSAxMDguOEwyMy4xIDE0My4xQzEwLjc1IDE0My4xIDAgMTU0LjcgMCAxNjcuMWMwIDEzLjI1IDEwLjc1IDI0IDIzLjEgMjRoNDAwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjRDNDQ4IDE1NC43IDQzNy4zIDE0My4xIDQyNCAxNDMuMXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4IDE5MS4xbDI5LjEyIDI5MS4yYzEuNjM2IDE2LjM2IDE1LjI0IDI4LjgyIDMxLjY4IDI4LjgyaDIzMC40YzE2LjQ0IDAgMzAuMDUtMTIuNDYgMzEuNjgtMjguODJMNDAwIDE5MS4xSDQ4ek0zMDQuNSAzMjYuN2wtMzIuMSAzMi4xbDcuNzczIDQ1LjU1YzEuNSA4LjI1LTcuMTM5IDE0LjM3LTE0LjUxIDEwLjQ5TDIyMy4xIDM5My4zbC00MC43NyAyMS41M2MtNy4yNSAzLjg3NS0xNi4wMS0yLjI0Mi0xNC41MS0xMC40OWw3Ljc3Mi00NS41NWwtMzIuOTQtMzIuMUMxMzcuNyAzMjAuOCAxNDAuOCAzMTAuNyAxNDkgMzA5LjZMMTk0LjcgMzAyLjlsMjAuMzYtNDEuNGMzLjc1LTcuNSAxNC4yOS03LjM3NSAxNy45MSAwbDIwLjM2IDQxLjRsNDUuNjQgNi42ODhDMzA3LjIgMzEwLjcgMzEwLjQgMzIwLjggMzA0LjUgMzI2Ljd6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBZb3V0dWJlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNNTQ5LjY1NSAxMjQuMDgzYy02LjI4MS0yMy42NS0yNC43ODctNDIuMjc2LTQ4LjI4NC00OC41OTdDNDU4Ljc4MSA2NCAyODggNjQgMjg4IDY0UzExNy4yMiA2NCA3NC42MjkgNzUuNDg2Yy0yMy40OTcgNi4zMjItNDIuMDAzIDI0Ljk0Ny00OC4yODQgNDguNTk3LTExLjQxMiA0Mi44NjctMTEuNDEyIDEzMi4zMDUtMTEuNDEyIDEzMi4zMDVzMCA4OS40MzggMTEuNDEyIDEzMi4zMDVjNi4yODEgMjMuNjUgMjQuNzg3IDQxLjUgNDguMjg0IDQ3LjgyMUMxMTcuMjIgNDQ4IDI4OCA0NDggMjg4IDQ0OHMxNzAuNzggMCAyMTMuMzcxLTExLjQ4NmMyMy40OTctNi4zMjEgNDIuMDAzLTI0LjE3MSA0OC4yODQtNDcuODIxIDExLjQxMi00Mi44NjcgMTEuNDEyLTEzMi4zMDUgMTEuNDEyLTEzMi4zMDVzMC04OS40MzgtMTEuNDEyLTEzMi4zMDV6bS0zMTcuNTEgMjEzLjUwOFYxNzUuMTg1bDE0Mi43MzkgODEuMjA1LTE0Mi43MzkgODEuMjAxeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBUd2l0dGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aCBkPSdNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBJbnN0YWdyYW0oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgSGVyb1Byb3BzID0ge1xuICBoZXJvU3RyaW5nOiBbc3RyaW5nLCBzdHJpbmddW10sXG4gIGRlc2M/OiBzdHJpbmcsXG4gIGxpbmtzPzogeyB1cmw/OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGhhbmRsZXI/OiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkIH1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oeyBoZXJvU3RyaW5nID0gW1snJywgJyddXSwgZGVzYywgbGlua3MgfTogSGVyb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAge2hlcm9TdHJpbmcubWFwKGhlYWRpbmcgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aGVhZGluZ1swXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggZ2FwLXgtMC41IHRleHQtMnhsIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS03MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBldmVuOm1sLTUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJsYWNrJz57aGVhZGluZ1swXX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtdGhpbic+e2hlYWRpbmdbMV19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Rlc2MgJiYgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG1heC13LVsyMDBweF0gdGV4dC14cyBtdC0zIHRleHQtY2VudGVyJz57ZGVzY308L2Rpdj59XG4gICAgICB7bGlua3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVyby1saW5rcyc+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICB7bGlua3MubWFwKGxpbmsgPT5cbiAgICAgICAgICAgICAgbGluay51cmwgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsubGFiZWx9IG9uQ2xpY2s9e2xpbmsuaGFuZGxlcn0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbnR5cGUgQnV0dG9uUHJvcHMgPSB7XG4gIGljb24/OiBzdHJpbmcsXG4gIGhyZWY/OiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRbXSB8IHN0cmluZyxcbiAgc2l6ZT86ICdzbWFsbCcgfCAnZGVmYXVsdCcgfCAnbGFyZ2UnLFxuICB0eXBlPzogJ3N1Ym1pdCcgfCAnYnV0dG9uJyxcbiAgb25DbGljaz86ICgpID0+IHZvaWQsXG59XG5cbnR5cGUgQnV0dG9uR3JvdXBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdIHwgc3RyaW5nLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmNvbnN0IHNpemVzID0ge1xuICBtaW5XaWR0aDoge1xuICAgIHNtYWxsOiAnbWluLXctWzI0cHhdJyxcbiAgICBkZWZhdWx0OiAnbWluLXctWzMycHhdJyxcbiAgICBsYXJnZTogJ21pbi13LVs0MHB4XScsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHNtYWxsOiAnaC02JyxcbiAgICBkZWZhdWx0OiAnaC04JyxcbiAgICBsYXJnZTogJ2gtMTAnLFxuICB9LFxuICBmb250U2l6ZToge1xuICAgIHNtYWxsOiAndGV4dC14cycsXG4gICAgZGVmYXVsdDogJ3RleHQtc20nLFxuICAgIGxhcmdlOiAndGV4dC1iYXNlJyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUgPSAnYnV0dG9uJywgc2l6ZSA9ICdkZWZhdWx0JywgaHJlZiwgb25DbGljaywgaWNvbiwgY2hpbGRyZW4gfTogQnV0dG9uUHJvcHMpIHtcbiAgcmV0dXJuIGhyZWYgPyAoXG4gICAgPExpbmsga2V5PXtocmVmfSB0bz17aHJlZn0+XG4gICAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbiAke3NpemVzLmhlaWdodFtzaXplXX0gJHtzaXplcy5taW5XaWR0aFtzaXplXX19YH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfWB9PlxuICAgICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWljb24nPntpY29ufTwvc3Bhbj59XG4gICAgICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICkgOiBvbkNsaWNrID8gKFxuICAgIDxidXR0b24gdHlwZT17dHlwZX0gY2xhc3NOYW1lPSdieC1idXR0b24nIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24taWNvbic+e2ljb259PC9zcGFuPn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfWB9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICkgOiAoXG4gICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9J2J4LWJ1dHRvbic+XG4gICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1pY29uJz57aWNvbn08L3NwYW4+fVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWxhYmVsICR7c2l6ZXMuZm9udFNpemVbc2l6ZV19YH0+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uR3JvdXAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH06IEJ1dHRvbkdyb3VwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1ncm91cCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgTmF2UHJvcHMgPSB7XG4gIG5hdj86IFJvdXRlc1tdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KHsgbmF2IH06IE5hdlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT0nYngtbmF2Jz5cbiAgICAgIHtuYXYgPyAoXG4gICAgICAgIG5hdi5tYXAobmF2SXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e25hdkl0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdieC1uYXYtY2F0ZWdvcnknPntuYXZJdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIHtuYXZJdGVtPy5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nYngtbmF2LWNoaWxkcmVuJz5cbiAgICAgICAgICAgICAgICAgIHtuYXZJdGVtLmNoaWxkcmVuLm1hcChuYXZTdWJJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtuYXZTdWJJdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtLnBhdGhuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J4LW5hdi1pdGVtJyB0bz17bmF2U3ViSXRlbS5wYXRobmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/Lkljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZTdWJJdGVtLkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPntuYXZTdWJJdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtYXJyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uQXJyb3dSaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/Lkljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZTdWJJdGVtLkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPntuYXZTdWJJdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPGxpPlx1QjRGMVx1Qjg1RFx1QjQxQyBcdUI3N0NcdUM2QjBcdUQyQjggXHVCQUE5XHVCODVEXHVDNzc0IFx1Qzg3NFx1QzdBQ1x1RDU1OFx1QzlDMCBcdUM1NEFcdUMyQjVcdUIyQzhcdUIyRTQuPC9saT5cbiAgICAgICl9XG4gICAgPC91bD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWxvZ28nPlxuICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgPEljb24uTG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItY29udGFjdCc+XG4gICAgICAgIDxhIGhyZWY9J3RlbDoxNTg4OTk5OSc+MTU4OC05OTk5PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWNvbnRhY3QtZGVzYyc+XG4gICAgICAgICAgXHVEM0M5XHVDNzdDIDEwOjAwIC0gMTg6MDBcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAoXHVDODEwXHVDMkVDXHVDMkRDXHVBQzA0IDEzOjAwIC0gMTQ6MDAgXHVDODFDXHVDNjc4IFx1MDBCNyBcdUM4RkNcdUI5RDAvXHVBQ0Y1XHVENzM0XHVDNzdDIFx1QzgxQ1x1QzY3OClcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2J4LWZvb3Rlci1zbnMnPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZGVlcnBhcms4MjEwJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nWW91VHViZSc+XG4gICAgICAgICAgICA8SWNvbi5Zb3V0dWJlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cudHdpdHRlci5jb20vZGVlcnBhcms3JyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nVHdpdHRlcic+XG4gICAgICAgICAgICA8SWNvbi5Ud2l0dGVyIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kZWVycGFyaycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J0luc3RhZ3JhbSc+XG4gICAgICAgICAgICA8SWNvbi5JbnN0YWdyYW0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi51bnNldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24uc2V0KCdwcmV2aWV3JywgJ3llcycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyB1c2VOYXYsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgIHtcbiAgICAgICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIwKSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvbW90aW9uOiBwcm9tb3Rpb24ob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgbG9jYWxlOiBrb19LUikge1xuICAgICAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgY29sb3Ige1xuICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICBncmVlblxuICAgICAgICAgICAgYmx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICAgICAgaGV4XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICAgYCxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICAgIHByb21vdGlvbixcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3Jz5cbiAgICAgICAgICB7cHJldmlld0VuYWJsZWQgPyAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL2Jsb2cvcHJldmlldy9zdG9wJz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgZHJhZnQgY29udGVudC4gPGJ1dHRvbj5DbGljayBoZXJlPC9idXR0b24+IHRvIGV4aXQgcHJldmlldyBtb2RlLlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL2Jsb2cvcHJldmlldy9zdGFydCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIHB1Ymxpc2hlZCBjb250ZW50LiA8YnV0dG9uPkNsaWNrIGhlcmU8L2J1dHRvbj4gdG8gZW50ZXIgcHJldmlldyBtb2RlIVxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPEhlYWRlciB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYyB9fSAvPlxuICAgICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtcG9zdCc+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgL2Jsb2cvcG9zdHMvJHtmaXJzdFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXBvc3QtdGh1bWInIGRhdGE9e2ZpcnN0UG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1tZXRhJz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57Zmlyc3RQb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGF0ZSc+XG4gICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtmaXJzdFBvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWF2YXRhcic+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtmaXJzdFBvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e2ZpcnN0UG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1wb3N0LWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge290aGVyUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtcG9zdCc+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdieC1wb3N0LXRodW1iJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LW1ldGEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2J4LXBvc3QtdGl0bGUnPntwb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGF0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1wb3N0LWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uIGZsZXggbWQ6aGlkZGVuJz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1tZXRhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci10aXRsZSc+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWRlc2MnPntkZXNjfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWljb24nPntJY29uICYmIDxJY29uIC8+fTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAidHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwaWN0dXJlOiB7XG4gICAgdXJsPzogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17cGljdHVyZS51cmx9IGNsYXNzTmFtZT0nYXZhdGFyX19waWN0dXJlJyBhbHQ9e25hbWV9IC8+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fbmFtZSc+e25hbWV9PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG50eXBlIERhdGVQcm9wcyA9IHtcbiAgZGF0ZVN0cmluZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfTogRGF0ZVByb3BzKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT0nYngtcG9zdC1pbWFnZScgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9PlxuICAgICAge2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfVxuICAgIDwvdGltZT5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuXG50eXBlIFByb21vdGlvbiA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgdXJsPzogc3RyaW5nLFxuICBsYWJlbD86IHN0cmluZyxcbiAgY29sb3I6IHtcbiAgICByZWQ6IG51bWJlcixcbiAgICBibHVlOiBudW1iZXIsXG4gICAgZ3JlZW46IG51bWJlcixcbiAgfSxcbiAgdGV4dGNvbG9yOiB7XG4gICAgaGV4OiBzdHJpbmcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYW5uZXIoeyB0aXRsZSwgdXJsLCBjb2xvcjogeyByZWQsIGJsdWUsIGdyZWVuIH0sIHRleHRjb2xvcjogeyBoZXggfSwgbGFiZWwgfTogUHJvbW90aW9uKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lcicgc3R5bGU9e3tcbiAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBgcmdiKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0pYCxcbiAgICAgICctLXR3LXNoYWRvdy1jb2xvcic6IGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sIC41KWAsXG4gICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lci1pY29uJz5cbiAgICAgICAgPEljb24uQmFubmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItdGl0bGUnPjxzcGFuPnt0aXRsZX08L3NwYW4+PC9kaXY+XG4gICAgICB7dXJsICYmIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItbGluayc+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGhyZWY9e3VybH0+e2xhYmVsIHx8ICdcdUJDMTRcdUI4NUNcdUFDMDBcdUFFMzAnfTwvQnV0dG9uPlxuICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IFN0cnVjdHVyZWRUZXh0LCBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5OiBgXG4gICAgICBxdWVyeSBQb3N0QnlTbHVnKCRzbHVnOiBTdHJpbmcpIHtcbiAgICAgICAgcG9zdChmaWx0ZXI6IHtzbHVnOiB7ZXE6ICRzbHVnfX0pIHtcbiAgICAgICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgICAgLi4ub24gSW1hZ2VCbG9ja1JlY29yZCB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRlXG4gICAgICAgICAgb2dJbWFnZTogY292ZXJJbWFnZXtcbiAgICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbW9yZVBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyLCBmaWx0ZXI6IHtzbHVnOiB7bmVxOiAkc2x1Z319KSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICAgICAke21ldGFUYWdzRnJhZ21lbnR9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59KSA9PiB7XG4gIHJldHVybiB0b1JlbWl4TWV0YShwb3N0LnNlbylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0LCBtb3JlUG9zdHMgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaGVhZGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXBvc3QtaW1hZ2UnIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtYm9keSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb3NlIHByb3NlLWxnIHByb3NlLWJsdWUnPlxuICAgICAgICAgICAgPFN0cnVjdHVyZWRUZXh0XG4gICAgICAgICAgICAgIGRhdGE9e3Bvc3QuY29udGVudH1cbiAgICAgICAgICAgICAgcmVuZGVyQmxvY2s9eyh7IHJlY29yZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5fX3R5cGVuYW1lID09PSAnSW1hZ2VCbG9ja1JlY29yZCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3Qga25vdyBob3cgdG8gcmVuZGVyIGEgYmxvY2shPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX190aXRsZSc+TW9yZSBwb3N0czwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdncmlkJz5cbiAgICAgICAgICB7bW9yZVBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30gY2xhc3NOYW1lPSdncmlkX19pdGVtJz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPSdncmlkX19saW5rJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nZ3JpZF9faW1hZ2UnIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2dyaWRfX3RpdGxlJz57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RhdGUnPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9ICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgIHtcbiAgICAgICAgcHJvbW90aW9uczogYWxsUHJvbW90aW9ucyhvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBmaXJzdDogMjApIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNvbG9yIHtcbiAgICAgICAgICAgIGJsdWVcbiAgICAgICAgICAgIGdyZWVuXG4gICAgICAgICAgICByZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJsXG4gICAgICAgICAgZXhwaXJlZGF0XG4gICAgICAgICAgYmFubmVyIHtcbiAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogNzc2LCBoOiA3MjYgfSkge1xuICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgICBgLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbnMgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtc2VjdGlvbi1yb3cnPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2J4LXByb21vdGlvbnMnPlxuICAgICAgICAgICAge3Byb21vdGlvbnMubWFwKChwcm9tb3Rpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9tb3Rpb24udGl0bGV9IGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWl0ZW0nPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwcm9tb3Rpb24udXJsIHx8ICcuLyd9IGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1wcm9tb3Rpb25faW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvbW90aW9uLmJhbm5lci5yZXNwb25zaXZlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXR3LXNoYWRvdy1jb2xvcic6IGByZ2JhKCR7cHJvbW90aW9uLmNvbG9yLnJlZH0sICR7cHJvbW90aW9uLmNvbG9yLmdyZWVufSwgJHtwcm9tb3Rpb24uY29sb3IuYmx1ZX0sIC41KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtc2VjdGlvbi1yb3cgZmxleCBtZDpoaWRkZW4gaXRlbXMtc3RhcnQnPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic3MzVkMGQ2ZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRzJHMjRXQ1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxWS1JGUkpULmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1RQVBOSlZQQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVLTkdZUzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HQ0NQSlhCWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8yTTQ1WFQzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRDM1QUlESTYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtTFhNTzVOSkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZNWEpSVkIzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlhPUFkyR0guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wb3N0cyc6eydpZCc6J3JvdXRlcy9ibG9nL3Bvc3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy1GN1dISEk0RS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cvcG9zdHMnLCdwYXRoJzonOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy1RM0VIN0szSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVLTkdZUzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GTVhKUlZCMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpYT1BZMkdILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRDM1QUlESTYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0Jzp7J2lkJzoncm91dGVzL2Jsb2cvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL3ByZXZpZXcvc3RhcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0LTVDVkNJVUw1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VTklDREVSNi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL3ByZXZpZXcvc3RvcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcC1YUEhLWk9HMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVU5JQ0RFUjYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQksyVjJJSUQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpYT1BZMkdILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmV2aWV3L3N0YXJ0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RhcnQtUlNYTE5ER00uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVVOSUNERVI2LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9wcmV2aWV3L3N0b3AnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RvcC1OU0JPTFM3Ri5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVU5JQ0RFUjYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTczNUQwRDZGLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxv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
