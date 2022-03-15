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
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix7 = __toESM(require_remix());
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
  }, children, /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }));
}

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

// app/components/Hero/index.tsx
function Hero({ heroString = [["", ""]], desc, links: links6 }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "bx-hero-logo",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement("div", {
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

// app/components/Nav/index.tsx
init_react();
var import_remix5 = __toESM(require_remix());
function Nav({ nav: nav2 }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-nav"
  }, nav2 ? nav2.map((navItem) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: navItem.name
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "bx-nav-category"
    }, navItem.name), (navItem == null ? void 0 : navItem.children) && /* @__PURE__ */ React.createElement("ul", {
      className: "bx-nav-children"
    }, navItem.children.map((navSubItem) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: navSubItem.name
      }, navSubItem.route ? /* @__PURE__ */ React.createElement(import_remix5.Link, {
        className: "bx-nav-item",
        to: navSubItem.route
      }, (navSubItem == null ? void 0 : navSubItem.icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, /* @__PURE__ */ React.createElement(navSubItem.icon, null)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-label"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-name"
      }, navSubItem.name), (navSubItem == null ? void 0 : navSubItem.desc) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-desc"
      }, navSubItem.desc)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-arrow"
      }, /* @__PURE__ */ React.createElement(ArrowRight, null))) : /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-item"
      }, (navSubItem == null ? void 0 : navSubItem.icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, /* @__PURE__ */ React.createElement(navSubItem.icon, null)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-label"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-name"
      }, navSubItem.name), (navSubItem == null ? void 0 : navSubItem.desc) && /* @__PURE__ */ React.createElement("span", {
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
var app_default = "/build/_assets/app-4ZL6ARM2.css";

// app/styles/blog.css
var blog_default = "/build/_assets/blog-OZB25IZJ.css";

// route:/Users/yonne/Dev/bolt-ux/app/root.tsx
var nav = [
  {
    name: "\uBE14\uB85C\uADF8",
    children: [
      {
        route: "/blog",
        name: "\uACF5\uC9C0\uC0AC\uD56D",
        desc: "\uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        icon: notice
      },
      {
        route: "/blog/news",
        name: "\uC0C8\uC18C\uC2DD",
        desc: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD",
        icon: news
      }
    ]
  },
  {
    name: "\uC11C\uBE44\uC2A4",
    children: [
      {
        route: "/service/homaepage",
        name: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
        desc: "\uD64D\uBCF4\uB97C \uC704\uD55C \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uCD95",
        icon: homepage
      },
      {
        route: "/service/singlepage",
        name: "\uC2F1\uAE00 \uD398\uC774\uC9C0 \uC81C\uC791",
        desc: "\uC774\uBCA4\uD2B8, \uB79C\uB529 \uB2E8\uC77C \uD398\uC774\uC9C0 \uAD6C\uCD95",
        icon: singlepage
      },
      {
        route: "/service/publishing",
        name: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
        desc: "\uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
        icon: publishing
      },
      {
        route: "/service/appdesign",
        name: "\uC571 \uB514\uC790\uC778",
        desc: "\uBAA8\uBC14\uC77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778",
        icon: appdesign
      },
      {
        route: "/service/consulting",
        name: "\uB514\uC790\uC778 \uCEE8\uC124\uD305",
        desc: "\uB85C\uACE0 \uBA85\uD568 \uAC04\uD310 \uBA54\uB274\uD310 \uD15C\uD50C\uB9BF \uCEE8\uC124\uD305",
        icon: consulting
      }
    ]
  }
];
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix7.useLoaderData)();
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
  }), /* @__PURE__ */ React.createElement(Nav, {
    nav
  }), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React.createElement(import_remix7.LiveReload, null)));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/preview/start.ts
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/preview/stop.ts
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index,
  links: () => links4,
  loader: () => loader2
});
init_react();
var import_remix10 = __toESM(require_remix());
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/index.tsx
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix10.useLoaderData)();
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
  }), /* @__PURE__ */ React.createElement("section", {
    className: "section"
  }, /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
    className: "grid__image",
    data: firstPost.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement(import_remix10.Link, {
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
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
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
  })))))))), /* @__PURE__ */ React.createElement(import_remix10.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts
});
init_react();
var import_remix11 = __toESM(require_remix());
function Posts() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix11.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/blog/posts/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix12 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix12.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader4
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_react_datocms4 = require("react-datocms");
var loader4 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: `
      {
        promotions: allPromotions(orderBy: expiredat_DESC, first: 20) {
          title
          color {
            hex
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix13.useLoaderData)();
  const previewEnabled = datoQuerySubscription2.enabled === void 0 || datoQuerySubscription2.enabled === true;
  const {
    data: { promotions }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "promotions"
  }, promotions.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "promotion_item"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: promotion.url || "./",
    className: "promotion_link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
    className: "promotion_image",
    data: promotion.banner.responsiveImage
  })))))))), /* @__PURE__ */ React.createElement(import_remix13.Outlet, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "8143b75e", "entry": { "module": "/build/entry.client-QWZO3RY3.js", "imports": ["/build/_shared/chunk-26JMOZXH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-B6G7V7PI.js", "imports": ["/build/_shared/chunk-SHAZD6UH.js", "/build/_shared/chunk-QMG5QHR6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-2UUBQDG6.js", "imports": ["/build/_shared/chunk-RCDWUUV7.js", "/build/_shared/chunk-UBURYNSO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts": { "id": "routes/blog/posts", "parentId": "root", "path": "blog/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts-H5EBIEQO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog/posts", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-CZWXDG5D.js", "imports": ["/build/_shared/chunk-SHAZD6UH.js", "/build/_shared/chunk-RCDWUUV7.js", "/build/_shared/chunk-UBURYNSO.js", "/build/_shared/chunk-QMG5QHR6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/start": { "id": "routes/blog/preview/start", "parentId": "root", "path": "blog/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/start-W357ZYT7.js", "imports": ["/build/_shared/chunk-3S2RPMOD.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/preview/stop": { "id": "routes/blog/preview/stop", "parentId": "root", "path": "blog/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/preview/stop-RZFTW2EZ.js", "imports": ["/build/_shared/chunk-3S2RPMOD.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-RMAWCSX3.js", "imports": ["/build/_shared/chunk-UBURYNSO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8143B75E.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvbGliL2ZyYWdtZW50cy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTG9nby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ib21lcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9TaW5nbGVwYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93UmlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHVibGlzaGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcHBkZXNpZ24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQ29uc3VsdGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9OZXdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdGljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Zb3V0dWJlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1R3aXR0ZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSW5zdGFncmFtLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXYvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0LnRzIiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcHJldmlldy9zdG9wLnRzIiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0F2YXRhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGF0ZS9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy5qc3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcHJldmlldy9zdG9wLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvcG9zdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9wb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2cvcG9zdHNcIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgeyBOYXYsIFJvdXRlcyB9IGZyb20gJ34vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJ1xuaW1wb3J0IGJsb2dTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYmxvZy5jc3MnXG5cbmNvbnN0IG5hdjogUm91dGVzW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnXHVCRTE0XHVCODVDXHVBREY4JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICByb3V0ZTogJy9ibG9nJyxcbiAgICAgICAgbmFtZTogJ1x1QUNGNVx1QzlDMFx1QzBBQ1x1RDU2RCcsXG4gICAgICAgIGRlc2M6ICdcdUM1NENcdUI4MjRcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgaWNvbjogSWNvbi5ub3RpY2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJy9ibG9nL25ld3MnLFxuICAgICAgICBuYW1lOiAnXHVDMEM4XHVDMThDXHVDMkREJyxcbiAgICAgICAgZGVzYzogJ1x1QzBDOFx1Qjg1Q1x1QzZCNCBcdUMxOENcdUMyREQnLFxuICAgICAgICBpY29uOiBJY29uLm5ld3MsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnXHVDMTFDXHVCRTQ0XHVDMkE0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICByb3V0ZTogJy9zZXJ2aWNlL2hvbWFlcGFnZScsXG4gICAgICAgIG5hbWU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIGljb246IEljb24uaG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJy9zZXJ2aWNlL3NpbmdsZXBhZ2UnLFxuICAgICAgICBuYW1lOiAnXHVDMkYxXHVBRTAwIFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLFxuICAgICAgICBkZXNjOiAnXHVDNzc0XHVCQ0E0XHVEMkI4LCBcdUI3OUNcdUI1MjkgXHVCMkU4XHVDNzdDIFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUFENkNcdUNEOTUnLFxuICAgICAgICBpY29uOiBJY29uLnNpbmdsZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJy9zZXJ2aWNlL3B1Ymxpc2hpbmcnLFxuICAgICAgICBuYW1lOiAnXHVEMzdDXHVCRTE0XHVCOUFDXHVDMkYxIFx1QUMxQ1x1QkMxQycsXG4gICAgICAgIGRlc2M6ICdcdUI5QzhcdUQwNkNcdUM1QzUgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgaWNvbjogSWNvbi5wdWJsaXNoaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICcvc2VydmljZS9hcHBkZXNpZ24nLFxuICAgICAgICBuYW1lOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGljb246IEljb24uYXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICcvc2VydmljZS9jb25zdWx0aW5nJyxcbiAgICAgICAgbmFtZTogJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxMjRcdUQzMDUnLFxuICAgICAgICBkZXNjOiAnXHVCODVDXHVBQ0UwIFx1QkE4NVx1RDU2OCBcdUFDMDRcdUQzMTAgXHVCQTU0XHVCMjc0XHVEMzEwIFx1RDE1Q1x1RDUwQ1x1QjlCRiBcdUNFRThcdUMxMjRcdUQzMDUnLFxuICAgICAgICBpY29uOiBJY29uLmNvbnN1bHRpbmcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBibG9nU3R5bGVzIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgICAge1xuICAgICAgICAgIHNpdGU6IF9zaXRlIHtcbiAgICAgICAgICAgIGZhdmljb246IGZhdmljb25NZXRhVGFncyh2YXJpYW50czogW2ljb24sIG1zQXBwbGljYXRpb24sIGFwcGxlVG91Y2hJY29uXSkge1xuICAgICAgICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2cge1xuICAgICAgICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICR7bWV0YVRhZ3NGcmFnbWVudH1cbiAgICAgIGAsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgYmxvZywgc2l0ZSB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKFsuLi5ibG9nLnNlbywgLi4uc2l0ZS5mYXZpY29uXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgc2l0ZSB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3NpdGUud2VibWFuaWZlc3Q/dj0yMDIyMDMxMycgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdtYXNrLWljb24nIGhyZWY9Jy9pbWFnZXMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnP3Y9MjAyMjAzMTMnIGNvbG9yPScjMjU2M2ViJyAvPlxuICAgICAgICA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9mYXZpY29uLmljbz92PTIwMjIwMzEzJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyMyNTYzZWInIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZjhmYWZjJyAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3JlbmRlck1ldGFUYWdzKFsuLi5zaXRlLmZhdmljb25dKX1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICAgICAgICA8SGVyb1xuICAgICAgICAgICAgICBoZXJvU3RyaW5nPXtbXG4gICAgICAgICAgICAgICAgWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJywgJ1x1QkQ4MFx1RDEzMCddLFxuICAgICAgICAgICAgICAgIFsnXHVCNTE0XHVDNzkwXHVDNzc4IFx1Q0VFOFx1QzEyNFx1RDMwNScsICdcdUFFNENcdUM5QzAnXSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgZGVzYz0nXHVCMzU0IFx1QjA5OFx1Qzc0MCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVBQ0JEXHVENUQ4XHVDNzQ0IFx1QzBERFx1QUMwMVx1RDU1OFx1QkE3MCBcdUFGM0NcdUFGM0NcdUQ1NThcdUFDOEMgXHVCOUNDXHVCNEU0XHVDNUI0IFx1QjREQ1x1QjgyNFx1QzY5NC4nXG4gICAgICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICAgICAgeyB1cmw6ICcvYmxvZycsIGxhYmVsOiAnXHVCQjM0XHVCOENDIFx1QzBDMVx1QjJGNCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnXHVDNjk0XHVBRTA4XHVENDVDIFx1RDY1NVx1Qzc3OCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TmF2IG5hdj17bmF2fSAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHRpbnkgZnJvbSAndGlueS1qc29uLWh0dHAnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQoeyBxdWVyeSwgdmFyaWFibGVzLCBwcmV2aWV3IH06IGFueSkge1xuICBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tJ1xuXG4gIGlmIChwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UKSB7XG4gICAgZW5kcG9pbnQgKz0gYC9lbnZpcm9ubWVudHMvJHtwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UfWBcbiAgfVxuXG4gIGlmIChwcmV2aWV3KSB7XG4gICAgZW5kcG9pbnQgKz0gYC9wcmV2aWV3YFxuICB9XG5cbiAgY29uc3QgeyBib2R5IH0gPSBhd2FpdCB0aW55LnBvc3Qoe1xuICAgIHVybDogZW5kcG9pbnQsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBVE9DTVNfUkVBRE9OTFlfVE9LRU59YCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGJvZHkuZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcignT3VjaCEgVGhlIHF1ZXJ5IGhhcyBzb21lIGVycm9ycyEnLCBib2R5LmVycm9ycylcbiAgICB0aHJvdyBib2R5LmVycm9yc1xuICB9XG5cbiAgcmV0dXJuIGJvZHkuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHsgcmVxdWVzdCwgLi4uZ3FsUmVxdWVzdCB9OiBhbnkpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG4gIGNvbnN0IHByZXZpZXdFbmFibGVkID0gc2Vzc2lvbi5nZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiBwcmV2aWV3RW5hYmxlZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uZ3FsUmVxdWVzdCxcbiAgICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKHsgLi4uZ3FsUmVxdWVzdCwgcHJldmlldzogdHJ1ZSB9KSxcbiAgICAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTixcbiAgICAgICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVCB8fCBudWxsLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsRGF0YTogYXdhaXQgbG9hZChncWxSZXF1ZXN0KSxcbiAgICAgICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19fc2Vzc2lvbicsXG4gICAgbWF4QWdlOiA2MDRfODAwLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH1cbiIsICIvLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudDogc3RyaW5nID0gYFxuICBmcmFnbWVudCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCBvbiBSZXNwb25zaXZlSW1hZ2Uge1xuICAgIHNyY1NldFxuICAgIHdlYnBTcmNTZXRcbiAgICBzaXplc1xuICAgIHNyY1xuICAgIHdpZHRoXG4gICAgaGVpZ2h0XG4gICAgYXNwZWN0UmF0aW9cbiAgICBhbHRcbiAgICB0aXRsZVxuICAgIGJhc2U2NFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBtZXRhVGFnc0ZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IG1ldGFUYWdzRnJhZ21lbnQgb24gVGFnIHtcbiAgICBhdHRyaWJ1dGVzXG4gICAgY29udGVudFxuICAgIHRhZ1xuICB9XG5gXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG50eXBlIEhlcm9Qcm9wcyA9IHtcbiAgaGVyb1N0cmluZzogW3N0cmluZywgc3RyaW5nXVtdLFxuICBkZXNjPzogc3RyaW5nLFxuICBsaW5rcz86IHsgdXJsPzogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBoYW5kbGVyPzogKCkgPT4gdm9pZCB8IHVuZGVmaW5lZCB9W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZXJvKHsgaGVyb1N0cmluZyA9IFtbJycsICcnXV0sIGRlc2MsIGxpbmtzIH06IEhlcm9Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvJz5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtaGVyby1sb2dvJyB0bz0nLyc+XG4gICAgICAgIDxJY29uLkxvZ28gLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIHtoZXJvU3RyaW5nLm1hcChoZWFkaW5nID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmdbMF19XG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGdhcC14LTAuNSB0ZXh0LTJ4bCBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0yMDAgZXZlbjptbC01J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+e2hlYWRpbmdbMF19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXRoaW4nPntoZWFkaW5nWzFdfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZXNjICYmIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBtYXgtdy1bMjAwcHhdIHRleHQteHMgbXQtMyB0ZXh0LWNlbnRlcic+e2Rlc2N9PC9kaXY+fVxuICAgICAge2xpbmtzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbGlua3MnPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+XG4gICAgICAgICAgICAgIGxpbmsudXJsID8gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLnVybH0gaHJlZj17bGluay51cmx9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLmxhYmVsfSBvbkNsaWNrPXtsaW5rLmhhbmRsZXJ9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBpY29uPzogc3RyaW5nLFxuICBocmVmPzogc3RyaW5nLFxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50W10gfCBzdHJpbmcsXG4gIHNpemU/OiAnc21hbGwnIHwgJ2RlZmF1bHQnIHwgJ2xhcmdlJyxcbiAgdHlwZT86ICdzdWJtaXQnIHwgJ2J1dHRvbicsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxufVxuXG50eXBlIEJ1dHRvbkdyb3VwUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IHN0cmluZyxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5jb25zdCBzaXplcyA9IHtcbiAgbWluV2lkdGg6IHtcbiAgICBzbWFsbDogJ21pbi13LVsyNHB4XScsXG4gICAgZGVmYXVsdDogJ21pbi13LVszMnB4XScsXG4gICAgbGFyZ2U6ICdtaW4tdy1bNDBweF0nLFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBzbWFsbDogJ2gtNicsXG4gICAgZGVmYXVsdDogJ2gtOCcsXG4gICAgbGFyZ2U6ICdoLTEwJyxcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBzbWFsbDogJ3RleHQteHMnLFxuICAgIGRlZmF1bHQ6ICd0ZXh0LXNtJyxcbiAgICBsYXJnZTogJ3RleHQtYmFzZScsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlID0gJ2J1dHRvbicsIHNpemUgPSAnZGVmYXVsdCcsIGhyZWYsIG9uQ2xpY2ssIGljb24sIGNoaWxkcmVuIH06IEJ1dHRvblByb3BzKSB7XG4gIHJldHVybiBocmVmID8gKFxuICAgIDxMaW5rIGtleT17aHJlZn0gdG89e2hyZWZ9PlxuICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX1gfT5cbiAgICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1pY29uJz57aWNvbn08L3NwYW4+fVxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9MaW5rPlxuICApIDogb25DbGljayA/IChcbiAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT0nYngtYnV0dG9uJyBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWljb24nPntpY29ufTwvc3Bhbj59XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX1gfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApIDogKFxuICAgIDxidXR0b24gdHlwZT17dHlwZX0gY2xhc3NOYW1lPSdieC1idXR0b24nPlxuICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24taWNvbic+e2ljb259PC9zcGFuPn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfWB9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9OiBCdXR0b25Hcm91cFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BieC1idXR0b24tZ3JvdXAgJHtjbGFzc05hbWV9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJ0eXBlIExvZ29Qcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9nbyh7IGNsYXNzTmFtZSA9ICd3LTE1IGgtMTEnIH06IExvZ29Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9JzAgMCA2MCA0NCc+XG4gICAgICA8ZyBzdHJva2U9J25vbmUnIHN0cm9rZVdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsUnVsZT0nZXZlbm9kZCc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xOC4wMDAwMDAsIC0yNi4wMDAwMDApJyBmaWxsUnVsZT0nbm9uemVybyc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTguMDAwMDAwLCAyNi4wMDAwMDApJz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00wLjkzNjYzMjgzNSwzMS4wMDQyMTk0IEMwLjMxMjIxMDk0NSwzMS4wMDQyMTk0IDAsMzAuNjkxMTU1OCAwLDMwLjA2NTAyODUgTDAsMTUuOTc3MTY1NSBDMCwxNS4zNTEwMzgzIDAuMzEyMjEwOTQ1LDE1LjAzNzk3NDcgMC45MzY2MzI4MzUsMTUuMDM3OTc0NyBMOS4zNjYzMjgzNSwxNS4wMzc5NzQ3IEMxMS4xMTQ3MDk2LDE1LjAzNzk3NDcgMTIuNDg4NDM3OCwxNS40NzIzNTA1IDEzLjQ4NzUxMjgsMTYuMzQxMTAyIEMxNC40ODY1ODc5LDE3LjIwOTg1MzYgMTQuOTg2MTI1NCwxOC40MTkwNjE4IDE0Ljk4NjEyNTQsMTkuOTY4NzI2NyBDMTQuOTg2MTI1NCwyMC4zNzU3MDk0IDE0LjkyNzU4NTgsMjAuNzQzNTU5MiAxNC44MTA1MDY3LDIxLjA3MjI3NiBDMTQuNjkzNDI3NiwyMS40MDA5OTI4IDE0LjU3MjQ0NTksMjEuNjc0OTIzNSAxNC40NDc1NjE1LDIxLjg5NDA2OCBDMTQuMjkxNDU2LDIyLjE2MDE3MjEgMTQuMTE5NzQsMjIuMzk0OTY5OCAxMy45MzI0MTM0LDIyLjU5ODQ2MTIgQzE0LjIyOTAxMzgsMjIuNzcwNjQ2MSAxNC41MDIxOTg0LDIzLjAxMzI3MDUgMTQuNzUxOTY3MiwyMy4zMjYzMzQxIEMxNC45NzA1MTQ4LDIzLjU5MjQzODIgMTUuMTY1NjQ2NywyMy45NDg1NDggMTUuMzM3MzYyNywyNC4zOTQ2NjM3IEMxNS41MDkwNzg3LDI0Ljg0MDc3OTMgMTUuNTk0OTM2NywyNS40MDAzODA2IDE1LjU5NDkzNjcsMjYuMDczNDY3NCBDMTUuNTk0OTM2NywyNi43Nzc4NjA1IDE1LjQ5NzM3MDgsMjcuNDMxMzgwOCAxNS4zMDIyMzg5LDI4LjAzNDAyODMgQzE1LjEwNzEwNzEsMjguNjM2Njc1OCAxNC43NzE0ODAzLDI5LjE1NzE0NCAxNC4yOTUzNTg2LDI5LjU5NTQzMzEgQzEzLjgxOTIzNywzMC4wMzM3MjIyIDEzLjE4MzEwNzIsMzAuMzc4MDkyMiAxMi4zODY5NjkyLDMwLjYyODU0MzEgQzExLjU5MDgzMTMsMzAuODc4OTk0IDEwLjU4Mzk1MSwzMS4wMDQyMTk0IDkuMzY2MzI4MzUsMzEuMDA0MjE5NCBMMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBaIE04LjMxMjYxNjQxLDIxLjE0MjcxNTMgQzguNTMxMTY0MDgsMjEuMTQyNzE1MyA4LjcyMjM5MzI4LDIxLjA2MDUzNjEgOC44ODYzMDQwMywyMC44OTYxNzc3IEM5LjA1MDIxNDc3LDIwLjczMTgxOTMgOS4xMzIxNzAxNCwyMC41NDAwNjc4IDkuMTMyMTcwMTQsMjAuMzIwOTIzMyBDOS4xMzIxNzAxNCwyMC4xMDE3Nzg4IDkuMDUwMjE0NzcsMTkuOTEwMDI3MyA4Ljg4NjMwNDAzLDE5Ljc0NTY2ODkgQzguNzIyMzkzMjgsMTkuNTgxMzEwNSA4LjUzMTE2NDA4LDE5LjQ5OTEzMTMgOC4zMTI2MTY0MSwxOS40OTkxMzEzIEw2LjA4ODExMzQzLDE5LjQ5OTEzMTMgQzUuOTMyMDA3OTYsMTkuNDk5MTMxMyA1Ljg1Mzk1NTIyLDE5LjU3NzM5NzIgNS44NTM5NTUyMiwxOS43MzM5MjkgTDUuODUzOTU1MjIsMjAuOTA3OTE3NiBDNS44NTM5NTUyMiwyMS4wNjQ0NDk0IDUuOTMyMDA3OTYsMjEuMTQyNzE1MyA2LjA4ODExMzQzLDIxLjE0MjcxNTMgTDguMzEyNjE2NDEsMjEuMTQyNzE1MyBaIE04LjU0Njc3NDYyLDI2LjU0MzA2MjggQzguNzY1MzIyMjgsMjYuNTQzMDYyOCA4Ljk1NjU1MTQ5LDI2LjQ2MDg4MzYgOS4xMjA0NjIyMywyNi4yOTY1MjUyIEM5LjI4NDM3Mjk4LDI2LjEzMjE2NjggOS4zNjYzMjgzNSwyNS45NDA0MTUzIDkuMzY2MzI4MzUsMjUuNzIxMjcwOCBDOS4zNjYzMjgzNSwyNS41MDIxMjYzIDkuMjg0MzcyOTgsMjUuMzEwMzc0OCA5LjEyMDQ2MjIzLDI1LjE0NjAxNjQgQzguOTU2NTUxNDksMjQuOTgxNjU4IDguNzY1MzIyMjgsMjQuODk5NDc4OCA4LjU0Njc3NDYyLDI0Ljg5OTQ3ODggTDYuMDg4MTEzNDMsMjQuODk5NDc4OCBDNS45MzIwMDc5NiwyNC44OTk0Nzg4IDUuODUzOTU1MjIsMjQuOTc3NzQ0NyA1Ljg1Mzk1NTIyLDI1LjEzNDI3NjUgTDUuODUzOTU1MjIsMjYuMzA4MjY1MSBDNS44NTM5NTUyMiwyNi40NjQ3OTY5IDUuOTMyMDA3OTYsMjYuNTQzMDYyOCA2LjA4ODExMzQzLDI2LjU0MzA2MjggTDguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1iJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMTYuMzM3NTUyNywyMy4wMjEwOTcgQzE2LjMzNzU1MjcsMjEuODY5ODM0OCAxNi41NTMyNDQxLDIwLjc4NDY5MjMgMTYuOTg0NjI2OCwxOS43NjU2Njk2IEMxNy40MTYwMDk1LDE4Ljc0NjY0NjkgMTguMDA4MTgwMiwxNy44NTk4NjM4IDE4Ljc2MTEzOTEsMTcuMTA1MzIwMiBDMTkuNTE0MDk4LDE2LjM1MDc3NjcgMjAuNDA0MzE1LDE1Ljc1NTY5ODYgMjEuNDMxNzkwMSwxNS4zMjAwODU4IEMyMi40NTkyNjUzLDE0Ljg4NDQ3MyAyMy41NzY5Mzg2LDE0LjY2NjY2NjcgMjQuNzg0ODEwMSwxNC42NjY2NjY3IEMyNS45NzY5OTUsMTQuNjY2NjY2NyAyNy4wOTA3NDY3LDE0Ljg4NDQ3MyAyOC4xMjYwNjUxLDE1LjMyMDA4NTggQzI5LjE2MTM4MzYsMTUuNzU1Njk4NiAzMC4wNTU1MjIzLDE2LjM1MDc3NjcgMzAuODA4NDgxMSwxNy4xMDUzMjAyIEMzMS41NjE0NCwxNy44NTk4NjM4IDMyLjE1MzYxMDgsMTguNzQ2NjQ2OSAzMi41ODQ5OTM1LDE5Ljc2NTY2OTYgQzMzLjAxNjM3NjIsMjAuNzg0NjkyMyAzMy4yMzIwNjc1LDIxLjg2OTgzNDggMzMuMjMyMDY3NSwyMy4wMjEwOTcgQzMzLjIzMjA2NzUsMjQuMTcyMzU5MyAzMy4wMTYzNzYyLDI1LjI1NzUwMTggMzIuNTg0OTkzNSwyNi4yNzY1MjQ1IEMzMi4xNTM2MTA4LDI3LjI5NTU0NzIgMzEuNTYxNDQsMjguMTgyMzMwMyAzMC44MDg0ODExLDI4LjkzNjg3MzkgQzMwLjA1NTUyMjMsMjkuNjkxNDE3NCAyOS4xNjEzODM2LDMwLjI4NjQ5NTUgMjguMTI2MDY1MSwzMC43MjIxMDgzIEMyNy4wOTA3NDY3LDMxLjE1NzcyMSAyNS45NzY5OTUsMzEuMzc1NTI3NCAyNC43ODQ4MTAxLDMxLjM3NTUyNzQgQzIzLjU3NjkzODYsMzEuMzc1NTI3NCAyMi40NTkyNjUzLDMxLjE1NzcyMSAyMS40MzE3OTAxLDMwLjcyMjEwODMgQzIwLjQwNDMxNSwzMC4yODY0OTU1IDE5LjUxNDA5OCwyOS42OTE0MTc0IDE4Ljc2MTEzOTEsMjguOTM2ODczOSBDMTguMDA4MTgwMiwyOC4xODIzMzAzIDE3LjQxNjAwOTUsMjcuMjk1NTQ3MiAxNi45ODQ2MjY4LDI2LjI3NjUyNDUgQzE2LjU1MzI0NDEsMjUuMjU3NTAxOCAxNi4zMzc1NTI3LDI0LjE3MjM1OTMgMTYuMzM3NTUyNywyMy4wMjEwOTcgWiBNMjIuNDMxODEzNiwyMy4wMjEwOTcgQzIyLjQzMTgxMzYsMjMuNzUyMzA0MiAyMi42MzE4MTgzLDI0LjM1NTE2MTEgMjMuMDMxODI3NywyNC44Mjk2Njc5IEMyMy40MzE4MzcxLDI1LjMwNDE3NDYgMjQuMDE2MTY0NiwyNS41NDE0MjggMjQuNzg0ODEwMSwyNS41NDE0MjggQzI1LjUzNzc2OSwyNS41NDE0MjggMjYuMTE0MjUzMSwyNS4zMDQxNzQ2IDI2LjUxNDI2MjUsMjQuODI5NjY3OSBDMjYuOTE0MjcxOSwyNC4zNTUxNjExIDI3LjExNDI3NjYsMjMuNzUyMzA0MiAyNy4xMTQyNzY2LDIzLjAyMTA5NyBDMjcuMTE0Mjc2NiwyMi4yODk4ODk5IDI2LjkxNDI3MTksMjEuNjg3MDMzIDI2LjUxNDI2MjUsMjEuMjEyNTI2MiBDMjYuMTE0MjUzMSwyMC43MzgwMTk1IDI1LjUzNzc2OSwyMC41MDA3NjYxIDI0Ljc4NDgxMDEsMjAuNTAwNzY2MSBDMjQuMDE2MTY0NiwyMC41MDA3NjYxIDIzLjQzMTgzNzEsMjAuNzM4MDE5NSAyMy4wMzE4Mjc3LDIxLjIxMjUyNjIgQzIyLjYzMTgxODMsMjEuNjg3MDMzIDIyLjQzMTgxMzYsMjIuMjg5ODg5OSAyMi40MzE4MTM2LDIzLjAyMTA5NyBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1vJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNNDQuNTU2OTYyLDI1LjYwMzg3MTkgQzQ1LjE3NTgwODcsMjUuNjAzODcxOSA0NS40ODUyMzIxLDI1LjkxNjkzNTYgNDUuNDg1MjMyMSwyNi41NDMwNjI4IEw0NS40ODUyMzIxLDMwLjA2NTAyODUgQzQ1LjQ4NTIzMjEsMzAuNjkxMTU1OCA0NS4xNzU4MDg3LDMxLjAwNDIxOTQgNDQuNTU2OTYyLDMxLjAwNDIxOTQgTDM1LjI3NDI2MTYsMzEuMDA0MjE5NCBDMzQuNjU1NDE0OSwzMS4wMDQyMTk0IDM0LjM0NTk5MTYsMzAuNjkxMTU1OCAzNC4zNDU5OTE2LDMwLjA2NTAyODUgTDM0LjM0NTk5MTYsMTUuOTc3MTY1NSBDMzQuMzQ1OTkxNiwxNS4zNTEwMzgzIDM0LjY1NTQxNDksMTUuMDM3OTc0NyAzNS4yNzQyNjE2LDE1LjAzNzk3NDcgTDM5LjIxOTQwOTMsMTUuMDM3OTc0NyBDMzkuODM4MjU2LDE1LjAzNzk3NDcgNDAuMTQ3Njc5MywxNS4zNTEwMzgzIDQwLjE0NzY3OTMsMTUuOTc3MTY1NSBMNDAuMTQ3Njc5MywyNC44OTk0Nzg4IEM0MC4xNDc2NzkzLDI1LjE5Njg4OTIgNDAuMTkwMjI1LDI1LjM4ODY0MDcgNDAuMjc1MzE2NSwyNS40NzQ3MzMyIEM0MC4zNjA0MDc5LDI1LjU2MDgyNTcgNDAuNTQ5OTI5NywyNS42MDM4NzE5IDQwLjg0Mzg4MTksMjUuNjAzODcxOSBMNDQuNTU2OTYyLDI1LjYwMzg3MTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ3LjM0ODE3NCwyMC40MzgzMjIyIEM0Ni43MjUwNTk0LDIwLjQzODMyMjIgNDYuNDEzNTAyMSwyMC4xMjUyNTg1IDQ2LjQxMzUwMjEsMTkuNDk5MTMxMyBMNDYuNDEzNTAyMSwxNS45NzcxNjU1IEM0Ni40MTM1MDIxLDE1LjM1MTAzODMgNDYuNzI1MDU5NCwxNS4wMzc5NzQ3IDQ3LjM0ODE3NCwxNS4wMzc5NzQ3IEw1OS4wMzE1NzI4LDE1LjAzNzk3NDcgQzU5LjY1NDY4NzQsMTUuMDM3OTc0NyA1OS45NjYyNDQ3LDE1LjM1MTAzODMgNTkuOTY2MjQ0NywxNS45NzcxNjU1IEw1OS45NjYyNDQ3LDE5LjQ5OTEzMTMgQzU5Ljk2NjI0NDcsMjAuMTI1MjU4NSA1OS42NTQ2ODc0LDIwLjQzODMyMjIgNTkuMDMxNTcyOCwyMC40MzgzMjIyIEw1Ni44MTE3MjcsMjAuNDM4MzIyMiBDNTYuNTE1NzQ3NiwyMC40MzgzMjIyIDU2LjMyNDkxODgsMjAuNDgxMzY4NCA1Ni4yMzkyNDA1LDIwLjU2NzQ2MDkgQzU2LjE1MzU2MjIsMjAuNjUzNTUzNCA1Ni4xMTA3MjMxLDIwLjg0NTMwNDkgNTYuMTEwNzIzMSwyMS4xNDI3MTUzIEw1Ni4xMTA3MjMxLDMwLjA2NTAyODUgQzU2LjExMDcyMzEsMzAuNjkxMTU1OCA1NS43OTkxNjU4LDMxLjAwNDIxOTQgNTUuMTc2MDUxMiwzMS4wMDQyMTk0IEw1MS4yMDM2OTU2LDMxLjAwNDIxOTQgQzUwLjU4MDU4MSwzMS4wMDQyMTk0IDUwLjI2OTAyMzcsMzAuNjkxMTU1OCA1MC4yNjkwMjM3LDMwLjA2NTAyODUgTDUwLjI2OTAyMzcsMjEuMTQyNzE1MyBDNTAuMjY5MDIzNywyMC44NDUzMDQ5IDUwLjIyNjE4NDYsMjAuNjUzNTUzNCA1MC4xNDA1MDYzLDIwLjU2NzQ2MDkgQzUwLjA1NDgyODEsMjAuNDgxMzY4NCA0OS44NjM5OTkyLDIwLjQzODMyMjIgNDkuNTY4MDE5OCwyMC40MzgzMjIyIEw0Ny4zNDgxNzQsMjAuNDM4MzIyMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby10J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMjMuODM1MTE4NSwzOS4xNDg1MjU2IEMyMy44MzUxMTg1LDM5LjQxMTMxMzggMjMuODcyOTYzMywzOS42MjM1NjU4IDIzLjk0ODY1MywzOS43ODUyODE2IEMyNC4wMjQzNDI3LDM5Ljk0Njk5NzQgMjQuMTIwMjE2NCw0MC4wNzA4MTExIDI0LjIzNjI3MzksNDAuMTU2NzIyNiBDMjQuMzUyMzMxNSw0MC4yNDI2MzQyIDI0LjQ3MzQzNSw0MC4yOTgyMjQgMjQuNTk5NTg0Niw0MC4zMjM0OTIxIEMyNC43MjU3MzQxLDQwLjM0ODc2MDIgMjQuODQ0MzE0Niw0MC4zNjEzOTQyIDI0Ljk1NTMyNjIsNDAuMzYxMzk0MiBDMjUuMDY2MzM3OCw0MC4zNjEzOTQyIDI1LjE4OTk2NDMsNDAuMzQ4NzYwMiAyNS4zMjYyMDU4LDQwLjMyMzQ5MjEgQzI1LjQ2MjQ0NzMsNDAuMjk4MjI0IDI1LjU4ODU5NjgsNDAuMjQyNjM0MiAyNS43MDQ2NTQzLDQwLjE1NjcyMjYgQzI1LjgyMDcxMTksNDAuMDcwODExMSAyNS45MTY1ODU1LDM5Ljk0Njk5NzQgMjUuOTkyMjc1MiwzOS43ODUyODE2IEMyNi4wNjc5NjQ5LDM5LjYyMzU2NTggMjYuMTA1ODA5OCwzOS40MTEzMTM4IDI2LjEwNTgwOTgsMzkuMTQ4NTI1NiBMMjYuMTA1ODA5OCwzNC4wMjQxNTU4IEMyNi4xMDU4MDk4LDMzLjYxOTg2NjMgMjYuMzA3NjQ5LDMzLjQxNzcyMTUgMjYuNzExMzI3NSwzMy40MTc3MjE1IEwyOS4yODQ3Nzc3LDMzLjQxNzcyMTUgQzI5LjY4ODQ1NjEsMzMuNDE3NzIxNSAyOS44OTAyOTU0LDMzLjYxOTg2NjMgMjkuODkwMjk1NCwzNC4wMjQxNTU4IEwyOS44OTAyOTU0LDM5LjE3ODg0NzMgQzI5Ljg5MDI5NTQsMzkuODk2NDYxMyAyOS43OTQ0MjE3LDQwLjU1MDkwNDkgMjkuNjAyNjc0NSw0MS4xNDIxNzg0IEMyOS40MTA5MjcyLDQxLjczMzQ1MTggMjkuMTEzMjE0Myw0Mi4yNDEzNDA1IDI4LjcwOTUzNTksNDIuNjY1ODQ0NSBDMjguMzA1ODU3NCw0My4wOTAzNDg2IDI3Ljc5MzY5MDQsNDMuNDE4ODMzOCAyNy4xNzMwMzQ3LDQzLjY1MTMwMDMgQzI2LjU1MjM3OTEsNDMuODgzNzY2OCAyNS44MTgxODg5LDQ0IDI0Ljk3MDQ2NDEsNDQgQzI0LjEyMjczOTQsNDQgMjMuMzg4NTQ5Miw0My44ODM3NjY4IDIyLjc2Nzg5MzUsNDMuNjUxMzAwMyBDMjIuMTQ3MjM3OSw0My40MTg4MzM4IDIxLjYzNTA3MDksNDMuMDkwMzQ4NiAyMS4yMzEzOTI0LDQyLjY2NTg0NDUgQzIwLjgyNzcxMzksNDIuMjQxMzQwNSAyMC41MzAwMDExLDQxLjczMzQ1MTggMjAuMzM4MjUzOCw0MS4xNDIxNzg0IEMyMC4xNDY1MDY1LDQwLjU1MDkwNDkgMjAuMDUwNjMyOSwzOS44OTY0NjEzIDIwLjA1MDYzMjksMzkuMTc4ODQ3MyBMMjAuMDUwNjMyOSwzNC4wMjQxNTU4IEMyMC4wNTA2MzI5LDMzLjYxOTg2NjMgMjAuMjUyNDcyMSwzMy40MTc3MjE1IDIwLjY1NjE1MDYsMzMuNDE3NzIxNSBMMjMuMjI5NjAwOCwzMy40MTc3MjE1IEMyMy42MzMyNzkyLDMzLjQxNzcyMTUgMjMuODM1MTE4NSwzMy42MTk4NjYzIDIzLjgzNTExODUsMzQuMDI0MTU1OCBMMjMuODM1MTE4NSwzOS4xNDg1MjU2IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTMxLjI0NzE3NzIsMzQuMzkzNzcwMiBDMzEuMTc4MjA1MiwzNC4yOTM2NjI2IDMxLjE0MzcxOTIsMzQuMTY4NTI4MiAzMS4xNDM3MTkyLDM0LjAxODM2NjggQzMxLjE0MzcxOTIsMzMuNjE3OTM2NiAzMS4zNDA3ODIxLDMzLjQxNzcyMTUgMzEuNzM0OTA4LDMzLjQxNzcyMTUgTDM0Ljk3MTY2NjMsMzMuNDE3NzIxNSBDMzUuMTU4ODc2MSwzMy40MTc3MjE1IDM1LjMwMTc0NjcsMzMuNDc1MjgzNCAzNS40MDAyNzgyLDMzLjU5MDQwNyBDMzUuNDk4ODA5NiwzMy43MDU1MzA3IDM1LjU5MjQxNDUsMzMuODQ4MTg0IDM1LjY4MTA5MjgsMzQuMDE4MzY2OCBMMzYuMjcyMjgxNSwzNS4xMTQ1NDQ2IEwzNi45NjY5MjgzLDM0LjAxODM2NjggQzM3LjA3NTMxMjksMzMuODQ4MTg0IDM3LjE3ODc3MDksMzMuNzA1NTMwNyAzNy4yNzczMDI0LDMzLjU5MDQwNyBDMzcuMzc1ODMzOSwzMy40NzUyODM0IDM3LjQ5ODk5ODIsMzMuNDE3NzIxNSAzNy42NDY3OTU0LDMzLjQxNzcyMTUgTDQwLjYzMjI5ODUsMzMuNDE3NzIxNSBDNDEuMDI2NDI0MywzMy40MTc3MjE1IDQxLjIyMzQ4NzMsMzMuNjE3OTM2NiA0MS4yMjM0ODczLDM0LjAxODM2NjggQzQxLjIyMzQ4NzMsMzQuMTY4NTI4MiA0MS4xODkwMDEyLDM0LjI5MzY2MjYgNDEuMTIwMDI5MiwzNC4zOTM3NzAyIEwzOC42OTYxNTU0LDM4LjExNzc3MTIgTDQxLjMxMjE2NTYsNDIuNjY3NjU5NSBDNDEuMzcxMjg0NCw0Mi43Nzc3Nzc4IDQxLjQwMDg0MzksNDIuODk3OTA2OCA0MS40MDA4NDM5LDQzLjAyODA0NjcgQzQxLjQwMDg0MzksNDMuNDI4NDc2OSA0MS4yMDM3ODEsNDMuNjI4NjkyIDQwLjgwOTY1NTEsNDMuNjI4NjkyIEwzNy43OTQ1OTI2LDQzLjYyODY5MiBDMzcuNjI3MDg5MSw0My42Mjg2OTIgMzcuNDg5MTQ1LDQzLjU2ODYyNzUgMzcuMzgwNzYwNCw0My40NDg0OTg0IEMzNy4yNzIzNzU4LDQzLjMyODM2OTMgMzcuMTYzOTkxMiw0My4xODgyMTg3IDM3LjA1NTYwNjYsNDMuMDI4MDQ2NyBMMzYuMDgwMTQ1Miw0MS4zMzEyMjM2IEwzNS4xNjM4MDI3LDQzLjAyODA0NjcgQzM1LjA1NTQxODEsNDMuMTg4MjE4NyAzNC45NTQ0MjMzLDQzLjMyODM2OTMgMzQuODYwODE4NCw0My40NDg0OTg0IEMzNC43NjcyMTM1LDQzLjU2ODYyNzUgMzQuNjIxODc5Niw0My42Mjg2OTIgMzQuNDI0ODE2Nyw0My42Mjg2OTIgTDMxLjQwOTc1NDEsNDMuNjI4NjkyIEMzMS4wMTU2MjgzLDQzLjYyODY5MiAzMC44MTg1NjU0LDQzLjQyODQ3NjkgMzAuODE4NTY1NCw0My4wMjgwNDY3IEMzMC44MTg1NjU0LDQyLjkwNzkxNzYgMzAuODQzMTk4Myw0Mi43OTc3OTkzIDMwLjg5MjQ2NCw0Mi42OTc2OTE3IEwzMy42NTYyNzE0LDM4LjEwMjc1NSBMMzEuMjQ3MTc3MiwzNC4zOTM3NzAyIFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXgnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTM1LjU1NjQ5MDIsNS4zODg2MDc1OSBDMzUuNDI1NjU5Miw1LjE0MjI1MzQzIDM1LjE2Mzk5NzEsNC45ODk0NTE0OCAzNC44Nzk5OTgxLDQuOTg5NDUxNDggTDI5Ljg4Mjg5MTUsNC45ODk0NTE0OCBMMzEuNTA1MTk2MSwxLjAyNTk1NTk2IEMzMS41OTk5MzY5LDAuNzk1OTczNDMxIDMxLjU3MDk5NDUsMC41MzM4NzEzMDggMzEuNDI4NDIwNiwwLjMyODA1NjQzNSBDMzEuMjg1ODQ2NywwLjEyMjI0MTU2MSAzMS4wMjIwNzg3LDAgMzAuNzk1NTE3NiwwIEwyNS4xNzkzNTcsMCBDMjQuNzk1NDc5NiwwIDI0LjQ3MTI3NCwwLjI3NzcyNTM0MyAyNC40MjA1MzcxLDAuNjQ5ODc2MDU1IEwyMy4zOTk0MTcsOC4xMzQwNTMyNyBDMjMuMzY5NDg4Niw4LjM0Nzk3NiAyMy40MzYzMDQ5LDguNTYzMTQ2MSAyMy41ODE4Nzg0LDguNzI1MzAzMjcgQzIzLjcyNzQ1MTgsOC44ODc0NjA0NCAyMy45Mzc3Mzg3LDguOTgxMDEyNjYgMjQuMTU4MjM2OSw4Ljk4MTAxMjY2IEwyOC44MjY2NzA0LDguOTgxMDEyNjYgTDI3LjQ5MzQ3MDQsMTUuMDMzODQxIEMyNy40MTY2OTUsMTUuMzgzNzI2MyAyNy42MDQxNjYyLDE1LjczNzM1MzYgMjcuOTQwMjEwNSwxNS44Nzg2MTc1IEMyOC4wMzg0OTMzLDE1Ljk0NzUzNDMgMjguMTQwNjA1MywxNS45NjYyNDQ3IDI4LjI0MjcxNzMsMTUuOTY2MjQ0NyBDMjguNDg5MDMwNiwxNS45NjYyNDQ3IDI4LjcyODM4NzYsMTUuODQ5MzA0NSAyOC44NzQ4NTQ1LDE1LjY0MDY4MyBMMzUuNTEyMTM1Myw2LjE2MDcyNTIxIEMzNS42NzEzNjYyLDUuOTMxMjEwNDQgMzUuNjkwNTEyMiw1LjYzNDk2MTc2IDM1LjU1NjQ5MDIsNS4zODg2MDc1OSBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1pY29uJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J002NDAgNDY0djMyYTE2IDE2IDAgMCAxLTE2IDE2SDE2YTE2IDE2IDAgMCAxLTE2LTE2di0zMmExNiAxNiAwIDAgMSAxNi0xNmg2MDhhMTYgMTYgMCAwIDEgMTYgMTZ6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J000MC42OCA0NDhsMjM5Ljc5LTMzMC4yNS01My40MS03My41NWExNiAxNiAwIDAgMSAzLjU0LTIyLjM1bDI1Ljg4LTE4LjhhMTYgMTYgMCAwIDEgMjIuMzUgMy41NUwzMjAgNjMuM2w0MS4xNi01Ni42OWExNiAxNiAwIDAgMSAyMi4zNS0zLjU1bDI1LjkgMTguNzlBMTYgMTYgMCAwIDEgNDEzIDQ0LjJsLTUzLjQxIDczLjU1TDU5OS4zMiA0NDhoLTE2M0wzMjAgMjg4IDIwMy42NCA0NDh6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gc2luZ2xlcGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM1MiAyNTZhMjQgMjQgMCAxIDAgMjQgMjQgMjQgMjQgMCAwIDAtMjQtMjR6bS0xOTQuNDggMTZoMzdMMTc2IDIxOC43OHpNNDY0IDY0SDQ4YTQ4IDQ4IDAgMCAwLTQ4IDQ4djI4OGE0OCA0OCAwIDAgMCA0OCA0OGg0MTZhNDggNDggMCAwIDAgNDgtNDhWMTEyYTQ4IDQ4IDAgMCAwLTQ4LTQ4ek0yNTAuNTggMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0xMC43NUwyMTEuMTUgMzIwaC03MC4yOWwtNy4zOCAyMS4yNUExNiAxNiAwIDAgMSAxMTguMzYgMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0yMS4yNUwxNDAgMTc2LjEyQTI0IDI0IDAgMCAxIDE2Mi42NyAxNjBoMjYuNjZBMjQgMjQgMCAwIDEgMjEyIDE3Ni4xM2w1My42OSAxNTQuNjJBMTYgMTYgMCAwIDEgMjUwLjU4IDM1MnpNNDI0IDMzNmExNiAxNiAwIDAgMS0xNiAxNmgtMTZhMTUuNzQgMTUuNzQgMCAwIDEtMTItNS42OEE3MiA3MiAwIDEgMSAzNTIgMjA4YTcxLjA1IDcxLjA1IDAgMCAxIDI0IDQuNDJWMTc2YTE2IDE2IDAgMCAxIDE2LTE2aDE2YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjEyIDE3Ni4xM0EyNCAyNCAwIDAgMCAxODkuMzMgMTYwaC0yNi42NkEyNCAyNCAwIDAgMCAxNDAgMTc2LjEyTDg2LjMgMzMwLjc1QTE2IDE2IDAgMCAwIDEwMS40MiAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTItMTAuNzVsNy4zOC0yMS4yNWg3MC4yOWw3LjM3IDIxLjI1QTE2IDE2IDAgMCAwIDIzMy42NCAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTEtMjEuMjV6TTE1Ny41MiAyNzJMMTc2IDIxOC43OCAxOTQuNDggMjcyek00MDggMTYwaC0xNmExNiAxNiAwIDAgMC0xNiAxNnYzNi40MmE3MS4wNSA3MS4wNSAwIDAgMC0yNC00LjQyIDcyIDcyIDAgMSAwIDI4IDEzOC4zMiAxNS43NCAxNS43NCAwIDAgMCAxMiA1LjY4aDE2YTE2IDE2IDAgMCAwIDE2LTE2VjE3NmExNiAxNiAwIDAgMC0xNi0xNnptLTU2IDE0NGEyNCAyNCAwIDEgMSAyNC0yNCAyNCAyNCAwIDAgMS0yNCAyNHonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBBcnJvd1JpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIwIDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjg1LjQ3NiAyNzIuOTcxTDkxLjEzMiA0NjcuMzE0Yy05LjM3MyA5LjM3My0yNC41NjkgOS4zNzMtMzMuOTQxIDBsLTIyLjY2Ny0yMi42NjdjLTkuMzU3LTkuMzU3LTkuMzc1LTI0LjUyMi0uMDQtMzMuOTAxTDE4OC41MDUgMjU2IDM0LjQ4NCAxMDEuMjU1Yy05LjMzNS05LjM3OS05LjMxNy0yNC41NDQuMDQtMzMuOTAxbDIyLjY2Ny0yMi42NjdjOS4zNzMtOS4zNzMgMjQuNTY5LTkuMzczIDMzLjk0MSAwTDI4NS40NzUgMjM5LjAzYzkuMzczIDkuMzcyIDkuMzczIDI0LjU2OC4wMDEgMzMuOTQxeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI1NiAwdjEyOGgxMjhMMjU2IDB6TTE1NC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwbC00OCA0OGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxbDQ4IDQ4QzEyOS44IDM4Ni4xIDEzNC45IDM4OCAxNDAgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwxMjAuMyAzMjBsMzMuODYtMzMuODRDMTYxLjEgMjc4LjMgMTYxLjEgMjY1LjcgMTU0LjEgMjU3Ljh6TTI1OC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwcy03LjgxMiAyMC41IDAgMjguMzFMMjYzLjcgMzIwbC0zMy44NiAzMy44NGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxQzIzMy44IDM4Ni4xIDIzOC45IDM4OCAyNDQgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0bDQ4LTQ4YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwyNTguMSAyNTcuOHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OHY0MTZDMCA0OTAuNSAyMS40OSA1MTIgNDggNTEyaDI4OGMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjEyOEgyNTZ6TTE1NC4xIDM1My44YzcuODEyIDcuODEyIDcuODEyIDIwLjUgMCAyOC4zMUMxNTAuMiAzODYuMSAxNDUuMSAzODggMTQwIDM4OHMtMTAuMjMtMS45MzgtMTQuMTQtNS44NDRsLTQ4LTQ4Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFsNDgtNDhjNy44MTItNy44MTIgMjAuNDctNy44MTIgMjguMjggMHM3LjgxMiAyMC41IDAgMjguMzFMMTIwLjMgMzIwTDE1NC4xIDM1My44ek0zMDYuMSAzMzQuMmwtNDggNDhDMjU0LjIgMzg2LjEgMjQ5LjEgMzg4IDI0NCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFMMjYzLjcgMzIwbC0zMy44Ni0zMy44NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxczIwLjQ3LTcuODEyIDI4LjI4IDBsNDggNDhDMzEzLjEgMzEzLjcgMzEzLjEgMzI2LjMgMzA2LjEgMzM0LjJ6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBhcHBkZXNpZ24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNDEyLjcgMjU2LjFDMzg3LjEgMjgwLjMgMzU3LjcgMjk4LjggMzI0LjEgMzA5LjVMMjU2IDE5MkgyNTUuMUw5OC42NSA0NjMuN0M5My45NSA0NzEuOCA4Ni45NyA0NzguNCA3OC41OCA0ODIuNkwyMy4xNiA1MTAuM0MxOC4yIDUxMi44IDEyLjMxIDUxMi41IDcuNTg4IDUwOS42QzIuODcxIDUwNi43IDAgNTAxLjUgMCA0OTZWNDQwLjZDMCA0MzIuMiAyLjIyOCA0MjMuOSA2LjQ2IDQxNi41TDE2OC44IDEzNi4yQzE2My4xIDEyMy45IDE2MCAxMTAuMyAxNjAgOTZDMTYwIDQyLjk4IDIwMi4xIDAgMjU2IDBDMzA5IDAgMzUyIDQyLjk4IDM1MiA5NkMzNTIgMTEwLjMgMzQ4LjkgMTIzLjkgMzQzLjIgMTM2LjJMNDEyLjcgMjU2LjF6TTI1NS4xIDY0QzIzOC4zIDY0IDIyMy4xIDc4LjMzIDIyMy4xIDk2QzIyMy4xIDExMy43IDIzOC4zIDEyOCAyNTUuMSAxMjhDMjczLjcgMTI4IDI4OCAxMTMuNyAyODggOTZDMjg4IDc4LjMzIDI3My43IDY0IDI1NS4xIDY0ek0zNTYuNyAzNjUuOUMzODkuNiAzNTMuNiA0MTkuNiAzMzUuNSA0NDUuNSAzMTIuOUw1MDUuNSA0MTYuNUM1MDkuOCA0MjMuOSA1MTIgNDMyLjIgNTEyIDQ0MC42VjQ5NkM1MTIgNTAxLjUgNTA5LjEgNTA2LjcgNTA0LjQgNTA5LjZDNDk5LjcgNTEyLjUgNDkzLjggNTEyLjggNDg4LjggNTEwLjNMNDMzLjQgNDgyLjZDNDI1IDQ3OC40IDQxOCA0NzEuOCA0MTMuMyA0NjMuN0wzNTYuNyAzNjUuOXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTY2LjQ5IDMxMi45QzUzLjY2IDMwMS42IDQxLjg0IDI4OS4zIDMxLjE4IDI3NkMyMC4xMyAyNjIuMiAyMi4zNCAyNDIuMSAzNi4xMyAyMzFDNDkuOTIgMjE5LjEgNzAuMDYgMjIyLjIgODEuMTIgMjM1LjFDODYuNzkgMjQzLjEgOTIuODcgMjQ5LjggOTkuMzQgMjU2LjFMNjYuNDkgMzEyLjl6TTE1NS4zIDM2NS45TDE4Ny45IDMwOS41QzIwOS40IDMxNi4zIDIzMi4zIDMyMCAyNTUuMSAzMjBDMzI2LjcgMzIwIDM4OS44IDI4Ny4zIDQzMC45IDIzNS4xQzQ0MS45IDIyMi4yIDQ2Mi4xIDIxOS4xIDQ3NS45IDIzMUM0ODkuNyAyNDIuMSA0OTEuOSAyNjIuMiA0ODAuOCAyNzZDNDI4LjEgMzQxLjggMzQ2LjEgMzg0IDI1NS4xIDM4NEMyMjAuNiAzODQgMTg2LjYgMzc3LjYgMTU1LjMgMzY1LjlIMTU1LjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBjb25zdWx0aW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI4OCA5NkMyODggMTEzLjcgMjczLjcgMTI4IDI1NiAxMjhDMjM4LjMgMTI4IDIyNCAxMTMuNyAyMjQgOTZDMjI0IDc4LjMzIDIzOC4zIDY0IDI1NiA2NEMyNzMuNyA2NCAyODggNzguMzMgMjg4IDk2ek05NiAxNjBDOTYgMTQyLjMgMTEwLjMgMTI4IDEyOCAxMjhDMTQ1LjcgMTI4IDE2MCAxNDIuMyAxNjAgMTYwQzE2MCAxNzcuNyAxNDUuNyAxOTIgMTI4IDE5MkMxMTAuMyAxOTIgOTYgMTc3LjcgOTYgMTYwek02NCAyODhDNjQgMjcwLjMgNzguMzMgMjU2IDk2IDI1NkMxMTMuNyAyNTYgMTI4IDI3MC4zIDEyOCAyODhDMTI4IDMwNS43IDExMy43IDMyMCA5NiAzMjBDNzguMzMgMzIwIDY0IDMwNS43IDY0IDI4OHpNMzUyIDE2MEMzNTIgMTQyLjMgMzY2LjMgMTI4IDM4NCAxMjhDNDAxLjcgMTI4IDQxNiAxNDIuMyA0MTYgMTYwQzQxNiAxNzcuNyA0MDEuNyAxOTIgMzg0IDE5MkMzNjYuMyAxOTIgMzUyIDE3Ny43IDM1MiAxNjB6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J001MTIgMjU1LjFDNTEyIDI1Ni45IDUxMS4xIDI1Ny44IDUxMS4xIDI1OC43QzUxMS42IDI5NS4yIDQ3OC40IDMxOS4xIDQ0MS45IDMxOS4xSDM0NEMzMTcuNSAzMTkuMSAyOTYgMzQxLjUgMjk2IDM2OEMyOTYgMzcxLjQgMjk2LjQgMzc0LjcgMjk3IDM3Ny45QzI5OS4yIDM4OC4xIDMwMy41IDM5Ny4xIDMwNy45IDQwNy44QzMxMy45IDQyMS42IDMyMCA0MzUuMyAzMjAgNDQ5LjhDMzIwIDQ4MS43IDI5OC40IDUxMC41IDI2Ni42IDUxMS44QzI2My4xIDUxMS45IDI1OS41IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2VjI1NS4xek05NiAyNTUuMUM3OC4zMyAyNTUuMSA2NCAyNzAuMyA2NCAyODcuMUM2NCAzMDUuNyA3OC4zMyAzMTkuMSA5NiAzMTkuMUMxMTMuNyAzMTkuMSAxMjggMzA1LjcgMTI4IDI4Ny4xQzEyOCAyNzAuMyAxMTMuNyAyNTUuMSA5NiAyNTUuMXpNMTI4IDE5MS4xQzE0NS43IDE5MS4xIDE2MCAxNzcuNyAxNjAgMTU5LjFDMTYwIDE0Mi4zIDE0NS43IDEyNy4xIDEyOCAxMjcuMUMxMTAuMyAxMjcuMSA5NiAxNDIuMyA5NiAxNTkuMUM5NiAxNzcuNyAxMTAuMyAxOTEuMSAxMjggMTkxLjF6TTI1NiA2My4xQzIzOC4zIDYzLjEgMjI0IDc4LjMzIDIyNCA5NS4xQzIyNCAxMTMuNyAyMzguMyAxMjcuMSAyNTYgMTI3LjFDMjczLjcgMTI3LjEgMjg4IDExMy43IDI4OCA5NS4xQzI4OCA3OC4zMyAyNzMuNyA2My4xIDI1NiA2My4xek0zODQgMTkxLjFDNDAxLjcgMTkxLjEgNDE2IDE3Ny43IDQxNiAxNTkuMUM0MTYgMTQyLjMgNDAxLjcgMTI3LjEgMzg0IDEyNy4xQzM2Ni4zIDEyNy4xIDM1MiAxNDIuMyAzNTIgMTU5LjFDMzUyIDE3Ny43IDM2Ni4zIDE5MS4xIDM4NCAxOTEuMXonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5ld3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMCAxMjh2MzA0QzAgNDU4LjUgMjEuNDkgNDgwIDQ4IDQ4MFM5NiA0NTguNSA5NiA0MzJWOTZIMzJDMTQuMzMgOTYgMCAxMTAuMyAwIDEyOHpNMjcyIDI4OGgtOTZDMTY3LjIgMjg4IDE2MCAyOTUuMiAxNjAgMzA0QzE2MCAzMTIuOCAxNjcuMiAzMjAgMTc2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAyOTUuMiAyODAuOCAyODggMjcyIDI4OHpNMzM2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAyOTUuMiA0NDAuOCAyODggNDMyIDI4OGgtOTZDMzI3LjIgMjg4IDMyMCAyOTUuMiAzMjAgMzA0QzMyMCAzMTIuOCAzMjcuMiAzMjAgMzM2IDMyMHpNMjcyIDM4NGgtOTZDMTY3LjIgMzg0IDE2MCAzOTEuMiAxNjAgNDAwQzE2MCA0MDguOCAxNjcuMiA0MTYgMTc2IDQxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAzOTEuMiAyODAuOCAzODQgMjcyIDM4NHpNNDMyIDM4NGgtOTZjLTguODM2IDAtMTYgNy4xNjItMTYgMTZjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAzOTEuMiA0NDAuOCAzODQgNDMyIDM4NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4MCAzMkgxMjhDMTEwLjMgMzIgOTYgNDYuMzMgOTYgNjR2MzY4Qzk2IDQ1OC41IDc0LjUxIDQ4MCA0OCA0ODBINDQ4YzM1LjM1IDAgNjQtMjguNjUgNjQtNjRWNjRDNTEyIDQ2LjMzIDQ5Ny43IDMyIDQ4MCAzMnpNMjcyIDQxNmgtOTZDMTY3LjIgNDE2IDE2MCA0MDguOCAxNjAgNDAwQzE2MCAzOTEuMiAxNjcuMiAzODQgMTc2IDM4NGg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzI4OCA0MDguOCAyODAuOCA0MTYgMjcyIDQxNnpNMjcyIDMyMGgtOTZDMTY3LjIgMzIwIDE2MCAzMTIuOCAxNjAgMzA0QzE2MCAyOTUuMiAxNjcuMiAyODggMTc2IDI4OGg5NkMyODAuOCAyODggMjg4IDI5NS4yIDI4OCAzMDRDMjg4IDMxMi44IDI4MC44IDMyMCAyNzIgMzIwek00MzIgNDE2aC05NmMtOC44MzYgMC0xNi03LjE2NC0xNi0xNmMwLTguODM4IDcuMTY0LTE2IDE2LTE2aDk2YzguODM2IDAgMTYgNy4xNjIgMTYgMTZDNDQ4IDQwOC44IDQ0MC44IDQxNiA0MzIgNDE2ek00MzIgMzIwaC05NkMzMjcuMiAzMjAgMzIwIDMxMi44IDMyMCAzMDRDMzIwIDI5NS4yIDMyNy4yIDI4OCAzMzYgMjg4aDk2QzQ0MC44IDI4OCA0NDggMjk1LjIgNDQ4IDMwNEM0NDggMzEyLjggNDQwLjggMzIwIDQzMiAzMjB6TTQ0OCAyMDhDNDQ4IDIxNi44IDQ0MC44IDIyNCA0MzIgMjI0aC0yNTZDMTY3LjIgMjI0IDE2MCAyMTYuOCAxNjAgMjA4di05NkMxNjAgMTAzLjIgMTY3LjIgOTYgMTc2IDk2aDI1NkM0NDAuOCA5NiA0NDggMTAzLjIgNDQ4IDExMlYyMDh6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBub3RpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTkyIDIyNGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di0xMTJDMjE2IDc0Ljc1IDIwNS4zIDY0IDE5MiA2NFMxNjggNzQuNzUgMTY4IDg4djExMkMxNjggMjEzLjMgMTc4LjggMjI0IDE5MiAyMjR6TTE5MiAzMjBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnMtMTQuMzMtMzItMzItMzJTMTYwIDI3MC4zIDE2MCAyODhTMTc0LjMgMzIwIDE5MiAzMjB6TTExMi4zIDM4NGwtLjA5MDYgNzAuMzVjMCA2LjI5NyAxLjg4NiAxMi40MyA1LjM1NSAxNy42OGwxNy4wOCAyNS42OUMxMzkuOCA1MDUuNiAxNTEuOCA1MTIgMTYxLjIgNTEyaDYxLjY3YzkuNDM4IDAgMjEuMzYtNi4zOTUgMjYuNjEtMTQuMjdsMTcuMzQtMjUuN2MyLjkzOC00LjQzOCA1LjA5Ny0xMi4zNSA1LjA5Ny0xNy42OGwuMjE1Ni03MC4zNUwxMTIuMyAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00xOTEuNSAuMDEyN0M4OS40NyAuMjYyNyAxNiA4Mi4xIDE2IDE3NS4xYzAgNDQuMzggMTYuNTIgODQuODkgNDMuNTIgMTE1LjhjMTYuNjIgMTguODggNDIuMzYgNTguMjMgNTIuMjQgOTEuNDhjMCAuMjUgLjExNDYgLjUxMDQgLjExNDYgLjc2MDRsMTYwLjMgLjAwMDZjMC0uMjUgLjA4MzMtLjUxMTEgLjA4MzMtLjc2MTFjOS44NzUtMzMuMjUgMzUuNjEtNzIuNjEgNTIuMjQtOTEuNDhDMzUxLjUgMjYwLjkgMzY4IDIyMC40IDM2OCAxNzUuMUMzNjggNzguNjIgMjg4LjgtLjIzNzMgMTkxLjUgLjAxMjd6TTE2OCA4OEMxNjggNzQuNzUgMTc4LjggNjQgMTkyIDY0czI0IDEwLjc1IDI0IDI0djExMkMyMTYgMjEzLjMgMjA1LjMgMjI0IDE5MiAyMjRTMTY4IDIxMy4zIDE2OCAyMDBWODh6TTE5MiAzMjBjLTE3LjY3IDAtMzItMTQuMzMtMzItMzJzMTQuMzMtMzIgMzItMzJzMzIgMTQuMzMgMzIgMzJTMjA5LjcgMzIwIDE5MiAzMjB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBZb3V0dWJlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNNTQ5LjY1NSAxMjQuMDgzYy02LjI4MS0yMy42NS0yNC43ODctNDIuMjc2LTQ4LjI4NC00OC41OTdDNDU4Ljc4MSA2NCAyODggNjQgMjg4IDY0UzExNy4yMiA2NCA3NC42MjkgNzUuNDg2Yy0yMy40OTcgNi4zMjItNDIuMDAzIDI0Ljk0Ny00OC4yODQgNDguNTk3LTExLjQxMiA0Mi44NjctMTEuNDEyIDEzMi4zMDUtMTEuNDEyIDEzMi4zMDVzMCA4OS40MzggMTEuNDEyIDEzMi4zMDVjNi4yODEgMjMuNjUgMjQuNzg3IDQxLjUgNDguMjg0IDQ3LjgyMUMxMTcuMjIgNDQ4IDI4OCA0NDggMjg4IDQ0OHMxNzAuNzggMCAyMTMuMzcxLTExLjQ4NmMyMy40OTctNi4zMjEgNDIuMDAzLTI0LjE3MSA0OC4yODQtNDcuODIxIDExLjQxMi00Mi44NjcgMTEuNDEyLTEzMi4zMDUgMTEuNDEyLTEzMi4zMDVzMC04OS40MzgtMTEuNDEyLTEzMi4zMDV6bS0zMTcuNTEgMjEzLjUwOFYxNzUuMTg1bDE0Mi43MzkgODEuMjA1LTE0Mi43MzkgODEuMjAxeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBUd2l0dGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aCBkPSdNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBJbnN0YWdyYW0oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgdHlwZSBSb3V0ZSA9IHtcbiAgcm91dGU/OiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgZGVzYz86IHN0cmluZyxcbiAgaWNvbj86ICgpID0+IEpTWC5FbGVtZW50LFxufVxuXG5leHBvcnQgdHlwZSBSb3V0ZXMgPSBSb3V0ZSAmIHtcbiAgY2hpbGRyZW4/OiBSb3V0ZVtdLFxufVxuXG50eXBlIE5hdlByb3BzID0ge1xuICBuYXY/OiBSb3V0ZXNbXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdih7IG5hdiB9OiBOYXZQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J2J4LW5hdic+XG4gICAgICB7bmF2ID8gKFxuICAgICAgICBuYXYubWFwKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtuYXZJdGVtLm5hbWV9PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdieC1uYXYtY2F0ZWdvcnknPntuYXZJdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAge25hdkl0ZW0/LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC1uYXYtY2hpbGRyZW4nPlxuICAgICAgICAgICAgICAgICAge25hdkl0ZW0uY2hpbGRyZW4ubWFwKG5hdlN1Ykl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hdlN1Ykl0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbS5yb3V0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1uYXYtaXRlbScgdG89e25hdlN1Ykl0ZW0ucm91dGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5pY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2U3ViSXRlbS5pY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1uYW1lJz57bmF2U3ViSXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtYXJyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uQXJyb3dSaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/Lmljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZTdWJJdGVtLmljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPntuYXZTdWJJdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/LmRlc2MgJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtZGVzYyc+e25hdlN1Ykl0ZW0uZGVzY308L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8bGk+XHVCNEYxXHVCODVEXHVCNDFDIFx1Qjc3Q1x1QzZCMFx1RDJCOCBcdUJBQTlcdUI4NURcdUM3NzQgXHVDODc0XHVDN0FDXHVENTU4XHVDOUMwIFx1QzU0QVx1QzJCNVx1QjJDOFx1QjJFNC48L2xpPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0Jz5cbiAgICAgICAgPGEgaHJlZj0ndGVsOjE1ODg5OTk5Jz4xNTg4LTk5OTk8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItY29udGFjdC1kZXNjJz5cbiAgICAgICAgICBcdUQzQzlcdUM3N0MgMTA6MDAgLSAxODowMFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIChcdUM4MTBcdUMyRUNcdUMyRENcdUFDMDQgMTM6MDAgLSAxNDowMCBcdUM4MUNcdUM2NzggXHUwMEI3IFx1QzhGQ1x1QjlEMC9cdUFDRjVcdUQ3MzRcdUM3N0MgXHVDODFDXHVDNjc4KVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nYngtZm9vdGVyLXNucyc+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9kZWVycGFyazgyMTAnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdZb3VUdWJlJz5cbiAgICAgICAgICAgIDxJY29uLllvdXR1YmUgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy50d2l0dGVyLmNvbS9kZWVycGFyazcnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdUd2l0dGVyJz5cbiAgICAgICAgICAgIDxJY29uLlR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RlZXJwYXJrJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nSW5zdGFncmFtJz5cbiAgICAgICAgICAgIDxJY29uLkluc3RhZ3JhbSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnNldCgncHJldmlldycsICd5ZXMnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnVuc2V0KCdwcmV2aWV3JylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgTGluaywgRm9ybSwgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuaW1wb3J0IHsgQXZhdGFyLCBsaW5rcyBhcyBhdmF0YXJMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlLCBsaW5rcyBhcyBkYXRlTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLmF2YXRhckxpbmtzKCksIC4uLmRhdGVMaW5rcygpXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeTogYFxuICAgICAge1xuICAgICAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogZGF0ZV9ERVNDLCBmaXJzdDogMjApIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBleGNlcnB0XG4gICAgICAgICAgZGF0ZVxuICAgICAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgICBgLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHByZXZpZXdFbmFibGVkID0gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uLmVuYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRvUXVlcnlTdWJzY3JpcHRpb24uZW5hYmxlZCA9PT0gdHJ1ZVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3Jz5cbiAgICAgICAgICB7Lyoge3ByZXZpZXdFbmFibGVkID8gKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9ibG9nL3ByZXZpZXcvc3RvcCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9ibG9nL3ByZXZpZXcvc3RhcnQnPlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgc2hvd2luZyBwdWJsaXNoZWQgY29udGVudC4gPGJ1dHRvbj5DbGljayBoZXJlPC9idXR0b24+IHRvIGVudGVyIHByZXZpZXcgbW9kZSFcbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nZ3JpZF9faW1hZ2UnIGRhdGE9e2ZpcnN0UG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICA8TGluayB0bz17YC9ibG9nL3Bvc3RzLyR7Zmlyc3RQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdncmlkX190aXRsZSc+e2ZpcnN0UG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2ZpcnN0UG9zdC5kYXRlfSAvPlxuICAgICAgICAgIDxBdmF0YXIgbmFtZT17Zmlyc3RQb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtmaXJzdFBvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdncmlkJz5cbiAgICAgICAgICAgIHtvdGhlclBvc3RzLm1hcCgocG9zdDogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30gY2xhc3NOYW1lPSdncmlkX19pdGVtJz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IGNsYXNzTmFtZT0nZ3JpZF9fbGluayc+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdncmlkX190aXRsZSc+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGF0ZSc+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnXG5cbnR5cGUgQXZhdGFyUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGljdHVyZToge1xuICAgIHVybD86IHN0cmluZyxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17cGljdHVyZS51cmx9IGNsYXNzTmFtZT0nYXZhdGFyX19waWN0dXJlJyBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyX19uYW1lJz57bmFtZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJ1xuXG50eXBlIERhdGVQcm9wcyA9IHtcbiAgZGF0ZVN0cmluZzogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9OiBEYXRlUHJvcHMpIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXG4gIHJldHVybiAoXG4gICAgPHRpbWUgY2xhc3NOYW1lPSdkYXRlJyBkYXRlVGltZT17ZGF0ZVN0cmluZ30+XG4gICAgICB7Zm9ybWF0KGRhdGUsICdMTExMXHRkLCB5eXl5Jyl9XG4gICAgPC90aW1lPlxuICApXG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuaW1wb3J0IHsgQXZhdGFyLCBsaW5rcyBhcyBhdmF0YXJMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlLCBsaW5rcyBhcyBkYXRlTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IFN0cnVjdHVyZWRUZXh0LCBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLmF2YXRhckxpbmtzKCksIC4uLmRhdGVMaW5rcygpXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCAnZXhwZWN0ZWQgcGFyYW1zLnNsdWcnKVxuXG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnk6IGBcbiAgICAgIHF1ZXJ5IFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZykge1xuICAgICAgICBwb3N0KGZpbHRlcjoge3NsdWc6IHtlcTogJHNsdWd9fSkge1xuICAgICAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcbiAgICAgICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgYmxvY2tzIHtcbiAgICAgICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgICAgICAuLi5vbiBJbWFnZUJsb2NrUmVjb3JkIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGVcbiAgICAgICAgICBvZ0ltYWdlOiBjb3ZlckltYWdle1xuICAgICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtb3JlUG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIsIGZpbHRlcjoge3NsdWc6IHtuZXE6ICRzbHVnfX0pIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBleGNlcnB0XG4gICAgICAgICAgZGF0ZVxuICAgICAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgICAgICR7bWV0YVRhZ3NGcmFnbWVudH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn0pID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QsIG1vcmVQb3N0cyB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbi0tbmFycm93Jz5cbiAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uLS1uYXJyb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvc2UgcHJvc2UtbGcgcHJvc2UtYmx1ZSc+XG4gICAgICAgICAgPFN0cnVjdHVyZWRUZXh0XG4gICAgICAgICAgICBkYXRhPXtwb3N0LmNvbnRlbnR9XG4gICAgICAgICAgICByZW5kZXJCbG9jaz17KHsgcmVjb3JkIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5fX3R5cGVuYW1lID09PSAnSW1hZ2VCbG9ja1JlY29yZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT0nZ3JpZF9faW1hZ2UnIGRhdGE9e3JlY29yZC5pbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8cD5Eb24ndCBrbm93IGhvdyB0byByZW5kZXIgYSBibG9jayE8L3A+XG4gICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fX3RpdGxlJz5Nb3JlIHBvc3RzPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQnPlxuICAgICAgICAgIHttb3JlUG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9J2dyaWRfX2l0ZW0nPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9J2dyaWRfX2xpbmsnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZ3JpZF9fdGl0bGUnPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGF0ZSc+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCBGb3JtLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5OiBgXG4gICAgICB7XG4gICAgICAgIHByb21vdGlvbnM6IGFsbFByb21vdGlvbnMob3JkZXJCeTogZXhwaXJlZGF0X0RFU0MsIGZpcnN0OiAyMCkge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgY29sb3Ige1xuICAgICAgICAgICAgaGV4XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybFxuICAgICAgICAgIGV4cGlyZWRhdFxuICAgICAgICAgIGJhbm5lciB7XG4gICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDc3NiwgaDogNzI2IH0pIHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICAgYCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCBwcmV2aWV3RW5hYmxlZCA9IGRhdG9RdWVyeVN1YnNjcmlwdGlvbi5lbmFibGVkID09PSB1bmRlZmluZWQgfHwgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uLmVuYWJsZWQgPT09IHRydWVcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb25zIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgICB7Lyoge3ByZXZpZXdFbmFibGVkID8gKFxuICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvcHJldmlldy9zdG9wJz5cbiAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9wcmV2aWV3L3N0YXJ0Jz5cbiAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIHB1Ymxpc2hlZCBjb250ZW50LiA8YnV0dG9uPkNsaWNrIGhlcmU8L2J1dHRvbj4gdG8gZW50ZXIgcHJldmlldyBtb2RlIVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX0gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtc2VjdGlvbi1yb3cnPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3Byb21vdGlvbnMnPlxuICAgICAgICAgICAge3Byb21vdGlvbnMubWFwKChwcm9tb3Rpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9tb3Rpb24udGl0bGV9IGNsYXNzTmFtZT0ncHJvbW90aW9uX2l0ZW0nPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwcm9tb3Rpb24udXJsIHx8ICcuLyd9IGNsYXNzTmFtZT0ncHJvbW90aW9uX2xpbmsnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0ncHJvbW90aW9uX2ltYWdlJyBkYXRhPXtwcm9tb3Rpb24uYmFubmVyLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonODE0M2I3NWUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVFXWk8zUlkzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yNkpNT1pYSC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtQjZHN1Y3UEkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNIQVpENlVILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU1HNVFIUjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9pbmRleCc6eydpZCc6J3JvdXRlcy9ibG9nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvaW5kZXgtMlVVQlFERzYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJDRFdVVVY3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUJVUllOU08uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wb3N0cyc6eydpZCc6J3JvdXRlcy9ibG9nL3Bvc3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvcG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy1INUVCSUVRTy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cvcG9zdHMnLCdwYXRoJzonOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy1DWldYREc1RC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hBWkQ2VUguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SQ0RXVVVWNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVCVVJZTlNPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUU1HNVFIUjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0Jzp7J2lkJzoncm91dGVzL2Jsb2cvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL3ByZXZpZXcvc3RhcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wcmV2aWV3L3N0YXJ0LVczNTdaWVQ3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zUzJSUE1PRC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nL3ByZXZpZXcvc3RvcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3ByZXZpZXcvc3RvcC1SWkZUVzJFWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1MyUlBNT0QuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtUk1BV0NTWDMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVVCVVJZTlNPLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04MTQzQjc1RS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFl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
