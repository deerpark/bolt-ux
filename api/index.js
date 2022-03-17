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

// app/queries/root.ts
init_react();

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

// app/queries/root.ts
var root = `
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
`;

// app/queries/posts.ts
init_react();
var post = `
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
      category {
        id
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
`;
var posts = `
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
var news = `
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
var notice = `
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

// app/lib/config.ts
init_react();

// app/components/Icon/SettingsLight.tsx
init_react();
function SettingsLight() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 416C0 407.2 7.164 400 16 400H81.6C89.01 363.5 121.3 336 160 336C198.7 336 230.1 363.5 238.4 400H496C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H238.4C230.1 468.5 198.7 496 160 496C121.3 496 89.01 468.5 81.6 432H16C7.164 432 0 424.8 0 416V416zM208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416zM352 176C390.7 176 422.1 203.5 430.4 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H430.4C422.1 308.5 390.7 336 352 336C313.3 336 281 308.5 273.6 272H16C7.164 272 0 264.8 0 256C0 247.2 7.164 240 16 240H273.6C281 203.5 313.3 176 352 176zM400 256C400 229.5 378.5 208 352 208C325.5 208 304 229.5 304 256C304 282.5 325.5 304 352 304C378.5 304 400 282.5 400 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H270.4C262.1 148.5 230.7 176 192 176C153.3 176 121 148.5 113.6 112H16C7.164 112 0 104.8 0 96C0 87.16 7.164 80 16 80H113.6C121 43.48 153.3 16 192 16C230.7 16 262.1 43.48 270.4 80H496zM144 96C144 122.5 165.5 144 192 144C218.5 144 240 122.5 240 96C240 69.49 218.5 48 192 48C165.5 48 144 69.49 144 96z"
  }));
}

// app/components/Icon/HomeLight.tsx
init_react();
function HomeLight() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7zM240 320V480H336V320H240z"
  }));
}

// app/components/Icon/ArrowLeftLight.tsx
init_react();
function ArrowLeftLight() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M203.9 405.3c5.877 6.594 5.361 16.69-1.188 22.62c-6.562 5.906-16.69 5.375-22.59-1.188L36.1 266.7c-5.469-6.125-5.469-15.31 0-21.44l144-159.1c5.906-6.562 16.03-7.094 22.59-1.188c6.918 6.271 6.783 16.39 1.188 22.62L69.53 256L203.9 405.3z"
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
function news2() {
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
function notice2() {
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

// app/components/Icon/Contact.tsx
init_react();
function Contact() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M159.1 192L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224C191.1 206.3 177.6 192 159.1 192zM368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368h16c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0z"
  }));
}

// app/components/Icon/Price.tsx
init_react();
function Price() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M96 152C96 138.7 106.7 128 120 128C133.3 128 144 138.7 144 152V360C144 373.3 133.3 384 120 384C106.7 384 96 373.3 96 360V152zM176 144C176 135.2 183.2 128 192 128C200.8 128 208 135.2 208 144V368C208 376.8 200.8 384 192 384C183.2 384 176 376.8 176 368V144zM288 152V360C288 373.3 277.3 384 264 384C250.7 384 240 373.3 240 360V152C240 138.7 250.7 128 264 128C277.3 128 288 138.7 288 152zM352 152C352 138.7 362.7 128 376 128C389.3 128 400 138.7 400 152V360C400 373.3 389.3 384 376 384C362.7 384 352 373.3 352 360V152zM480 144V368C480 376.8 472.8 384 464 384C455.2 384 448 376.8 448 368V144C448 135.2 455.2 128 464 128C472.8 128 480 135.2 480 144z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM120 128C106.7 128 96 138.7 96 152V360C96 373.3 106.7 384 120 384C133.3 384 144 373.3 144 360V152C144 138.7 133.3 128 120 128zM176 368C176 376.8 183.2 384 192 384C200.8 384 208 376.8 208 368V144C208 135.2 200.8 128 192 128C183.2 128 176 135.2 176 144V368zM264 128C250.7 128 240 138.7 240 152V360C240 373.3 250.7 384 264 384C277.3 384 288 373.3 288 360V152C288 138.7 277.3 128 264 128zM352 360C352 373.3 362.7 384 376 384C389.3 384 400 373.3 400 360V152C400 138.7 389.3 128 376 128C362.7 128 352 138.7 352 152V360zM464 128C455.2 128 448 135.2 448 144V368C448 376.8 455.2 384 464 384C472.8 384 480 376.8 480 368V144C480 135.2 472.8 128 464 128z"
  }));
}

// app/components/Icon/Settings.tsx
init_react();
function Settings() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M160 496C115.8 496 80 460.2 80 416C80 371.8 115.8 336 160 336C204.2 336 240 371.8 240 416C240 460.2 204.2 496 160 496zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 336C307.8 336 272 300.2 272 256C272 211.8 307.8 176 352 176C396.2 176 432 211.8 432 256C432 300.2 396.2 336 352 336zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM192 16C236.2 16 272 51.82 272 96C272 140.2 236.2 176 192 176C147.8 176 112 140.2 112 96C112 51.82 147.8 16 192 16zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M0 416C0 398.3 14.33 384 32 384H86.66C82.38 393.8 80 404.6 80 416C80 427.4 82.38 438.2 86.66 448H32C14.33 448 0 433.7 0 416zM240 416C240 404.6 237.6 393.8 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C237.6 438.2 240 427.4 240 416V416zM0 256C0 238.3 14.33 224 32 224H278.7C274.4 233.8 272 244.6 272 256C272 267.4 274.4 278.2 278.7 288H32C14.33 288 0 273.7 0 256V256zM432 256C432 244.6 429.6 233.8 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C429.6 278.2 432 267.4 432 256zM118.7 64C114.4 73.8 112 84.62 112 96C112 107.4 114.4 118.2 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7zM265.3 128C269.6 118.2 272 107.4 272 96C272 84.62 269.6 73.8 265.3 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3z"
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
        Icon: notice2
      },
      {
        pathname: "/news",
        title: "\uC0C8\uC18C\uC2DD",
        id: "116679079",
        display: true,
        desc: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD",
        Icon: news2
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
        pathname: "/contact",
        title: "\uBB34\uB8CC \uC0C1\uB2F4",
        display: true,
        desc: "\uBB34\uC5C7\uC774\uB4E0 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        Icon: Contact
      },
      {
        pathname: "/plan",
        title: "\uC11C\uBE44\uC2A4 \uC694\uAE08\uD45C",
        display: true,
        desc: "\uC11C\uBE44\uC2A4 \uBCC4 \uAC00\uACA9\uC744 \uC548\uB0B4\uD574 \uB4DC\uB824\uC694.",
        Icon: Price
      },
      {
        pathname: "/privacy",
        title: "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uC815\uCC45",
        display: true,
        desc: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC744 \uC218\uB9BD\xB7\uACF5\uAC1C\uD569\uB2C8\uB2E4.",
        Icon: Privacy
      }
    ]
  },
  {
    title: "\uC124\uC815",
    display: true,
    children: [
      {
        pathname: "/settings",
        title: "\uD658\uACBD\uC124\uC815",
        display: true,
        desc: "\uAC1C\uC778\uD654 \uC124\uC815\uC744 \uBCC0\uACBD\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        Icon: Settings
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
  }, /* @__PURE__ */ React.createElement(HomeLight, null))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-logo"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, {
    className: "w-16 h-10"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-settings"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/settings"
  }, /* @__PURE__ */ React.createElement(SettingsLight, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-section"
  }, cover && /* @__PURE__ */ React.createElement("div", {
    className: "bx-cover"
  }, cover), prevRoute && prevRoute !== "/" && /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-history-back"
  }, /* @__PURE__ */ React.createElement(Button, {
    href: prevRoute,
    icon: /* @__PURE__ */ React.createElement(ArrowLeftLight, null)
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
function Nav({ nav: nav2, pathname, categoryId }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-nav"
  }, nav2 ? nav2.filter((n) => n.display).map((navItem) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: navItem.title
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "bx-nav-category"
    }, navItem.title), (navItem == null ? void 0 : navItem.children) && /* @__PURE__ */ React.createElement("ul", {
      className: "bx-nav-children"
    }, navItem.children.filter((n) => n.display).map((navSubItem) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: navSubItem.title
      }, navSubItem.pathname ? /* @__PURE__ */ React.createElement(import_remix6.Link, {
        className: `bx-nav-item ${pathname && pathname !== "/" && pathname.indexOf(navSubItem.pathname) !== -1 || navSubItem.pathname === categoryId ? "bx-nav-item-active" : ""}`,
        to: navSubItem.pathname
      }, (navSubItem == null ? void 0 : navSubItem.Icon) && /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-icon"
      }, typeof navSubItem.Icon === "function" && /* @__PURE__ */ React.createElement(navSubItem.Icon, null)), /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-label"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "bx-nav-name"
      }, categoryId, navSubItem.title), (navSubItem == null ? void 0 : navSubItem.desc) && /* @__PURE__ */ React.createElement("span", {
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
  }, /* @__PURE__ */ React.createElement(Header, __spreadValues({}, { title, Icon, desc, prevRoute, cover, date })), promotion2 && /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion2)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-contents"
  }, children), /* @__PURE__ */ React.createElement("section", {
    className: "section flex md:hidden"
  }, /* @__PURE__ */ React.createElement(Footer, null)));
}
function RootLayout({ isRoot, children, pathname }) {
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
  }), /* @__PURE__ */ React.createElement(Nav, __spreadValues({}, { nav, pathname })), /* @__PURE__ */ React.createElement("div", {
    className: `${isRoot ? "px-3 md:px-0" : ""}`
  }, /* @__PURE__ */ React.createElement(Footer, null))), children);
}

// app/styles/app.css
var app_default = "/build/_assets/app-ONSCQJ3S.css";

// route:/Users/deerpark/Dev/bolt-ux/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
    },
    { rel: "stylesheet", href: app_default }
  ];
}
var loader = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: root
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
function CatchBoundary() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { status, statusText } = (0, import_remix8.useCatch)();
  const prevRoute = usePrevRoute(pathname);
  const isRoot = pathname === "/";
  (0, import_react.useEffect)(() => {
    GA.trackPageView({ path: pathname });
    GA.trackErrorEvent({ action: status.toString() });
  }, [pathname, status]);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname }), /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title: status.toString(), Icon: NotFound, desc: statusText, prevRoute, pathname }), /* @__PURE__ */ React.createElement("div", {
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
    console.log(pathname);
  }, [pathname]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Meta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix8.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React.createElement(import_remix8.LiveReload, null)));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/preview/start.ts
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/preview/stop.ts
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/start.ts
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notice/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_react_router_dom2 = require("react-router-dom");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react_datocms4 = require("react-datocms");

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
init_react();
var import_remix12 = __toESM(require_remix());
var import_react_datocms3 = require("react-datocms");

// app/components/Posts/Post.tsx
init_react();
var import_react_datocms2 = require("react-datocms");
function Post({ post: post2 }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-slate dark:prose-invert"
  }, /* @__PURE__ */ React.createElement(import_react_datocms2.StructuredText, {
    data: post2.content,
    renderBlock: ({ record }) => {
      if (record.__typename === "ImageBlockRecord") {
        return /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
          className: "bx-article-image",
          data: record.image.responsiveImage
        });
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Don't know how to render a block!"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(record, null, 2)));
    }
  })))));
}

// app/components/Posts/index.tsx
function Posts({ firstPost, otherPosts, category }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post aspect-video"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${firstPost.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
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
  }, otherPosts.map((post2) => /* @__PURE__ */ React.createElement("li", {
    key: post2.slug
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post aspect-video"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${post2.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
    className: "bx-post-thumb",
    data: post2.coverImage.responsiveImage
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-meta"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "bx-post-title"
  }, post2.title), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-date"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: post2.date
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-avatar"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: post2.author.name,
    picture: post2.author.picture
  })))), /* @__PURE__ */ React.createElement("span", {
    className: "bx-post-background"
  }))))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notice/$slug.tsx
var loader2 = async ({ request, params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  return datoQuerySubscription({
    request,
    query: post,
    variables: {
      slug: params.slug
    }
  });
};
var meta2 = ({
  data: {
    datoQuerySubscription: {
      initialData: { post: post2 }
    }
  }
}) => {
  return (0, import_react_datocms4.toRemixMeta)(post2.seo);
};
function PostSlug() {
  var _a;
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix13.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion: promotion2 }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion: promotion2,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id
  }), /* @__PURE__ */ React.createElement(Post, __spreadValues({}, { post: post2 })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notice/index.tsx
var notice_exports = {};
__export(notice_exports, {
  default: () => Index,
  loader: () => loader3
});
init_react();
var import_react_router_dom3 = require("react-router-dom");
var import_remix14 = __toESM(require_remix());
var import_react_datocms5 = require("react-datocms");
var loader3 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: notice
  });
  return __spreadValues({}, querySubscription);
};
function Index() {
  const { pathname } = (0, import_react_router_dom3.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms5.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "notice" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/stop.ts
var stop_exports2 = {};
__export(stop_exports2, {
  action: () => action4
});
init_react();
var import_remix15 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix15.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => PostSlug2,
  loader: () => loader4,
  meta: () => meta3
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_react_router_dom4 = require("react-router-dom");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_react_datocms6 = require("react-datocms");
var loader4 = async ({ request, params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return datoQuerySubscription({
    request,
    query: post,
    variables: {
      slug: params.slug
    }
  });
};
var meta3 = ({
  data: {
    datoQuerySubscription: {
      initialData: { post: post2 }
    }
  }
}) => {
  return (0, import_react_datocms6.toRemixMeta)(post2.seo);
};
function PostSlug2() {
  var _a;
  const { pathname } = (0, import_react_router_dom4.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix16.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion: promotion2 }
  } = (0, import_react_datocms6.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion: promotion2,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms6.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id
  }), /* @__PURE__ */ React.createElement(Post, {
    post: post2
  }));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Index2,
  loader: () => loader5
});
init_react();
var import_react_router_dom5 = require("react-router-dom");
var import_remix17 = __toESM(require_remix());
var import_react_datocms7 = require("react-datocms");
var loader5 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: posts
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
  } = (0, import_react_datocms7.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts })), /* @__PURE__ */ React.createElement(import_remix17.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/posts.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => Posts2
});
init_react();
var import_remix18 = __toESM(require_remix());
function Posts2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix18.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  default: () => PostSlug3,
  loader: () => loader6,
  meta: () => meta4
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_react_router_dom6 = require("react-router-dom");
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_react_datocms8 = require("react-datocms");
var loader6 = async ({ request, params }) => {
  (0, import_tiny_invariant3.default)(params.slug, "expected params.slug");
  return datoQuerySubscription({
    request,
    query: post,
    variables: {
      slug: params.slug
    }
  });
};
var meta4 = ({
  data: {
    datoQuerySubscription: {
      initialData: { post: post2 }
    }
  }
}) => {
  return (0, import_react_datocms8.toRemixMeta)(post2.seo);
};
function PostSlug3() {
  var _a;
  const { pathname } = (0, import_react_router_dom6.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix19.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion: promotion2 }
  } = (0, import_react_datocms8.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion: promotion2,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms8.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id
  }), /* @__PURE__ */ React.createElement(Post, __spreadValues({}, { post: post2 })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/index.tsx
var news_exports = {};
__export(news_exports, {
  default: () => Index3,
  loader: () => loader7
});
init_react();
var import_react_router_dom7 = require("react-router-dom");
var import_remix20 = __toESM(require_remix());
var import_react_datocms9 = require("react-datocms");
var loader7 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: news
  });
  return __spreadValues({}, querySubscription);
};
function Index3() {
  const { pathname } = (0, import_react_router_dom7.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix20.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms9.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "news" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings2
});
init_react();
var import_react_router_dom8 = require("react-router-dom");
function Settings2() {
  const { pathname } = (0, import_react_router_dom8.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-row"
  }));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact2
});
init_react();
var import_react_router_dom9 = require("react-router-dom");
function Contact2() {
  const { pathname } = (0, import_react_router_dom9.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-row"
  }));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy2
});
init_react();
var import_react_router_dom10 = require("react-router-dom");
function Privacy2() {
  const { pathname } = (0, import_react_router_dom10.useLocation)();
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4,
  loader: () => loader8
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_react_datocms10 = require("react-datocms");
var loader8 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: promotion
  });
};
function Index4() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix21.useLoaderData)();
  const {
    data: { promotions }
  } = (0, import_react_datocms10.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section max-w-112"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row hidden md:flex"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions.map((promotion2) => /* @__PURE__ */ React.createElement("li", {
    key: promotion2.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: promotion2.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms10.Image, {
    className: "bx-promotion-image",
    data: promotion2.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion2.color.red}, ${promotion2.color.green}, ${promotion2.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  })))))))), /* @__PURE__ */ React.createElement(import_remix21.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/plan.tsx
var plan_exports = {};
__export(plan_exports, {
  default: () => Plan
});
init_react();
var import_react_router_dom11 = require("react-router-dom");
function Plan() {
  const { pathname } = (0, import_react_router_dom11.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-row"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5fd3c055", "entry": { "module": "/build/entry.client-EST2KWKK.js", "imports": ["/build/_shared/chunk-GRPLXFEZ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-GVEHFXLD.js", "imports": ["/build/_shared/chunk-IGZHELKK.js", "/build/_shared/chunk-XT24M2C5.js", "/build/_shared/chunk-B74232DM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-XWSLCRKX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PIXE7BW6.js", "imports": ["/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug": { "id": "routes/news/$slug", "parentId": "root", "path": "news/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug-UYOLRRUM.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/index": { "id": "routes/news/index", "parentId": "root", "path": "news", "index": true, "caseSensitive": void 0, "module": "/build/routes/news/index-SIMA4YVU.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notice/$slug": { "id": "routes/notice/$slug", "parentId": "root", "path": "notice/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notice/$slug-S5OO7AT5.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notice/index": { "id": "routes/notice/index", "parentId": "root", "path": "notice", "index": true, "caseSensitive": void 0, "module": "/build/routes/notice/index-JV3C5MWM.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan": { "id": "routes/plan", "parentId": "root", "path": "plan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan-XJI5PZ4T.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-FCIM5P6B.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-RVPXFTNO.js", "imports": ["/build/_shared/chunk-KVW2SOGX.js", "/build/_shared/chunk-SAZTDNC6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/posts": { "id": "routes/posts/posts", "parentId": "root", "path": "posts/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/posts-D5VKEOJE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/start": { "id": "routes/posts/preview/start", "parentId": "root", "path": "posts/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/start-NXE7NXR5.js", "imports": ["/build/_shared/chunk-3X6UENMT.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/stop": { "id": "routes/posts/preview/stop", "parentId": "root", "path": "posts/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/stop-6X7BHUU5.js", "imports": ["/build/_shared/chunk-3X6UENMT.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-QVNQXLUT.js", "imports": ["/build/_shared/chunk-3X6UENMT.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-DQN774G2.js", "imports": ["/build/_shared/chunk-3X6UENMT.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-GZ4BFU4N.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-QJO56UXT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5FD3C055.js" };

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
  "routes/posts/preview/start": {
    id: "routes/posts/preview/start",
    parentId: "root",
    path: "posts/preview/start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports
  },
  "routes/posts/preview/stop": {
    id: "routes/posts/preview/stop",
    parentId: "root",
    path: "posts/preview/stop",
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
  "routes/notice/$slug": {
    id: "routes/notice/$slug",
    parentId: "root",
    path: "notice/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/notice/index": {
    id: "routes/notice/index",
    parentId: "root",
    path: "notice",
    index: true,
    caseSensitive: void 0,
    module: notice_exports
  },
  "routes/preview/stop": {
    id: "routes/preview/stop",
    parentId: "root",
    path: "preview/stop",
    index: void 0,
    caseSensitive: void 0,
    module: stop_exports2
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: true,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/posts": {
    id: "routes/posts/posts",
    parentId: "root",
    path: "posts/posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/news/$slug": {
    id: "routes/news/$slug",
    parentId: "root",
    path: "news/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports3
  },
  "routes/news/index": {
    id: "routes/news/index",
    parentId: "root",
    path: "news",
    index: true,
    caseSensitive: void 0,
    module: news_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/plan": {
    id: "routes/plan",
    parentId: "root",
    path: "plan",
    index: void 0,
    caseSensitive: void 0,
    module: plan_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvcXVlcmllcy9yb290LnRzIiwgIi4uL2FwcC9saWIvZnJhZ21lbnRzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Bvc3RzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25ld3MudHMiLCAiLi4vYXBwL3F1ZXJpZXMvbm90aWNlLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Byb21vdGlvbi50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzTGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZUxpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93TGVmdExpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcnJvd1JpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1B1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXBwZGVzaWduLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0NvbnN1bHRpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ob3RpY2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQmFubmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1ByaXZhY3kudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQ29udGFjdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9QcmljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9TZXR0aW5ncy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ob3RGb3VuZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Zb3V0dWJlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1R3aXR0ZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSW5zdGFncmFtLnRzeCIsICIuLi9hcHAvbGliL2dhLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYW5uZXIvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wLnRzIiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlLyRzbHVnLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BdmF0YXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0RhdGUvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3RzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0cy9Qb3N0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ub3RpY2UvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3Bvc3RzLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXR0aW5ncy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ub3RpY2UvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdG9wLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByaXZhY3kudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9ub3RpY2UvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGljZS8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJub3RpY2UvOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL25vdGljZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90aWNlL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5vdGljZVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3ByZXZpZXcvc3RvcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJldmlldy9zdG9wXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByZXZpZXcvc3RvcFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wb3N0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHMvcG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL25ld3MvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL25ld3MvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9zZXR0aW5nc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2V0dGluZ3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9wcml2YWN5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcml2YWN5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByaXZhY3lcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTRcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvcGxhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGxhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgcmVuZGVyTWV0YVRhZ3MsIHRvUmVtaXhNZXRhLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcm9vdCBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZVByZXZSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IEdBIH0gZnJvbSAnfi9saWIvZ2EnXG5pbXBvcnQgeyBSb290TGF5b3V0LCBMYXlvdXQsIFNpdGVNZXRhIH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmltcG9ydCBhcHBTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYXBwLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zdW5uLXVzL1NVSVQvZm9udHMvc3RhdGljL3dvZmYyL1NVSVQuY3NzJyxcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbWV0YSA9ICh7XG4gIGRhdGE6IHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHtcbiAgICAgIGluaXRpYWxEYXRhOiB7IGJsb2csIHNpdGUgfSxcbiAgICB9LFxuICB9LFxufTogYW55KSA9PiB7XG4gIHJldHVybiB0b1JlbWl4TWV0YShbLi4uYmxvZy5zZW8sIC4uLnNpdGUuZmF2aWNvbl0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSB1c2VDYXRjaCgpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcbiAgY29uc3QgaXNSb290ID0gcGF0aG5hbWUgPT09ICcvJ1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgR0EudHJhY2tQYWdlVmlldyh7IHBhdGg6IHBhdGhuYW1lIH0pXG4gICAgR0EudHJhY2tFcnJvckV2ZW50KHsgYWN0aW9uOiBzdGF0dXMudG9TdHJpbmcoKSB9KVxuICB9LCBbcGF0aG5hbWUsIHN0YXR1c10pXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSB9fT5cbiAgICAgICAgICA8TGF5b3V0IHsuLi57IHRpdGxlOiBzdGF0dXMudG9TdHJpbmcoKSwgSWNvbjogSWNvbi5Ob3RGb3VuZCwgZGVzYzogc3RhdHVzVGV4dCwgcHJldlJvdXRlLCBwYXRobmFtZSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1lcnJvcic+XG4gICAgICAgICAgICAgIDxoMT5cdUQzOThcdUM3NzRcdUM5QzBcdUI5N0MgXHVDQzNFXHVDNzQ0IFx1QzIxOCBcdUM1QzZcdUMyQjVcdUIyQzhcdUIyRTQuPC9oMT5cbiAgICAgICAgICAgICAgPHA+XHVDNzc0XHVDODA0XHVDNzNDXHVCODVDIFx1QjNDQ1x1QzU0NCBcdUFDMDBcdUMyRENcdUFDNzBcdUIwOTggXHVCMkU0XHVDMkRDIFx1QzJEQ1x1QjNDNFx1RDU3NCBcdUM4RkNcdUMxMzhcdUM2OTQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgaXNSb290ID0gcGF0aG5hbWUgPT09ICcvJ1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNpdGUgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdBLnRyYWNrUGFnZVZpZXcoeyBwYXRoOiBwYXRobmFtZSB9KVxuICAgIGNvbnNvbGUubG9nKHBhdGhuYW1lKVxuICB9LCBbcGF0aG5hbWVdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxTaXRlTWV0YSAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3JlbmRlck1ldGFUYWdzKFsuLi5zaXRlLmZhdmljb25dKX1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8Um9vdExheW91dCB7Li4ueyBpc1Jvb3QsIHBhdGhuYW1lIH19PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9Sb290TGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB0aW55IGZyb20gJ3RpbnktanNvbi1odHRwJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkKHsgcXVlcnksIHZhcmlhYmxlcywgcHJldmlldyB9OiBhbnkpIHtcbiAgbGV0IGVuZHBvaW50ID0gJ2h0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbSdcblxuICBpZiAocHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVCkge1xuICAgIGVuZHBvaW50ICs9IGAvZW52aXJvbm1lbnRzLyR7cHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVH1gXG4gIH1cblxuICBpZiAocHJldmlldykge1xuICAgIGVuZHBvaW50ICs9IGAvcHJldmlld2BcbiAgfVxuXG4gIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgdGlueS5wb3N0KHtcbiAgICB1cmw6IGVuZHBvaW50LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5EQVRPQ01TX1JFQURPTkxZX1RPS0VOfWAsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBxdWVyeSxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChib2R5LmVycm9ycykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ091Y2ghIFRoZSBxdWVyeSBoYXMgc29tZSBlcnJvcnMhJywgYm9keS5lcnJvcnMpXG4gICAgdGhyb3cgYm9keS5lcnJvcnNcbiAgfVxuXG4gIHJldHVybiBib2R5LmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7IHJlcXVlc3QsIC4uLmdxbFJlcXVlc3QgfTogYW55KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuICBjb25zdCBwcmV2aWV3RW5hYmxlZCA9IHNlc3Npb24uZ2V0KCdwcmV2aWV3JylcblxuICByZXR1cm4ge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjogcHJldmlld0VuYWJsZWRcbiAgICAgID8ge1xuICAgICAgICAgIC4uLmdxbFJlcXVlc3QsXG4gICAgICAgICAgcHJldmlldzogdHJ1ZSxcbiAgICAgICAgICBpbml0aWFsRGF0YTogYXdhaXQgbG9hZCh7IC4uLmdxbFJlcXVlc3QsIHByZXZpZXc6IHRydWUgfSksXG4gICAgICAgICAgdG9rZW46IHByb2Nlc3MuZW52LkRBVE9DTVNfUkVBRE9OTFlfVE9LRU4sXG4gICAgICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlQgfHwgbnVsbCxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGF3YWl0IGxvYWQoZ3FsUmVxdWVzdCksXG4gICAgICAgIH0sXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6ICdfX3Nlc3Npb24nLFxuICAgIG1heEFnZTogNjA0XzgwMCxcbiAgICBwYXRoOiAnLycsXG4gIH0sXG59KVxuXG5leHBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9XG4iLCAiaW1wb3J0IHsgbWV0YVRhZ3NGcmFnbWVudCB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IHJvb3QgPSBgXG4gIHtcbiAgICBzaXRlOiBfc2l0ZSB7XG4gICAgICBmYXZpY29uOiBmYXZpY29uTWV0YVRhZ3ModmFyaWFudHM6IFtpY29uLCBtc0FwcGxpY2F0aW9uLCBhcHBsZVRvdWNoSWNvbl0pIHtcbiAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgICBibG9nIHtcbiAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcbiAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke21ldGFUYWdzRnJhZ21lbnR9XG5gXG4iLCAiLy8gU2VlOiBodHRwczovL3d3dy5kYXRvY21zLmNvbS9ibG9nL29mZmVyLXJlc3BvbnNpdmUtcHJvZ3Jlc3NpdmUtbHFpcC1pbWFnZXMtaW4tMjAyMFxuXG5leHBvcnQgY29uc3QgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQ6IHN0cmluZyA9IGBcbiAgZnJhZ21lbnQgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgb24gUmVzcG9uc2l2ZUltYWdlIHtcbiAgICBzcmNTZXRcbiAgICB3ZWJwU3JjU2V0XG4gICAgc2l6ZXNcbiAgICBzcmNcbiAgICB3aWR0aFxuICAgIGhlaWdodFxuICAgIGFzcGVjdFJhdGlvXG4gICAgYWx0XG4gICAgdGl0bGVcbiAgICBiYXNlNjRcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgbWV0YVRhZ3NGcmFnbWVudDogc3RyaW5nID0gYFxuICBmcmFnbWVudCBtZXRhVGFnc0ZyYWdtZW50IG9uIFRhZyB7XG4gICAgYXR0cmlidXRlc1xuICAgIGNvbnRlbnRcbiAgICB0YWdcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgY292ZXJJbWFnZSA9IGBjb3ZlckltYWdlIHtcbiAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICB9XG59YFxuXG5leHBvcnQgY29uc3QgYXV0aG9yID0gYGF1dGhvciB7XG4gIG5hbWVcbiAgcGljdHVyZSB7XG4gICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgfVxufWBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCwgbWV0YVRhZ3NGcmFnbWVudCB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSBgXG4gIHF1ZXJ5IFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZykge1xuICAgIHBvc3QoZmlsdGVyOiB7c2x1Zzoge2VxOiAkc2x1Z319KSB7XG4gICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgIH1cbiAgICAgIHRpdGxlXG4gICAgICBleGNlcnB0XG4gICAgICBzbHVnXG4gICAgICBjb250ZW50IHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgYmxvY2tzIHtcbiAgICAgICAgICBfX3R5cGVuYW1lXG4gICAgICAgICAgLi4ub24gSW1hZ2VCbG9ja1JlY29yZCB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGRhdGVcbiAgICAgIG9nSW1hZ2U6IGNvdmVySW1hZ2V7XG4gICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KVxuICAgICAgfVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1vcmVQb3N0czogYWxsUG9zdHMob3JkZXJCeTogZGF0ZV9ERVNDLCBmaXJzdDogMiwgZmlsdGVyOiB7c2x1Zzoge25lcTogJHNsdWd9fSkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwcm9tb3Rpb246IHByb21vdGlvbihvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBsb2NhbGU6IGtvX0tSKSB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICR7bWV0YVRhZ3NGcmFnbWVudH1cbmBcblxuZXhwb3J0IGNvbnN0IHBvc3RzID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHByb21vdGlvbjogcHJvbW90aW9uKG9yZGVyQnk6IGV4cGlyZWRhdF9BU0MsIGxvY2FsZToga29fS1IpIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCwgY292ZXJJbWFnZSwgYXV0aG9yIH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgbmV3cyA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBfY3JlYXRlZEF0X0RFU0MsIGZpbHRlcjoge2NhdGVnb3J5OiB7ZXE6IFwiMTE2Njc5MDc5XCJ9fSwgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgJHtjb3ZlckltYWdlfVxuICAgICAgJHthdXRob3J9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIGNvdmVySW1hZ2UsIGF1dGhvciB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IG5vdGljZSA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBfY3JlYXRlZEF0X0RFU0MsIGZpbHRlcjoge2NhdGVnb3J5OiB7ZXE6IFwiMTE2Njc2ODQ1XCJ9fSwgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgJHtjb3ZlckltYWdlfVxuICAgICAgJHthdXRob3J9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBwcm9tb3Rpb24gPSBgXG4gIHtcbiAgICBwcm9tb3Rpb25zOiBhbGxQcm9tb3Rpb25zKG9yZGVyQnk6IGV4cGlyZWRhdF9BU0MsIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgYmx1ZVxuICAgICAgICBncmVlblxuICAgICAgICByZWRcbiAgICAgIH1cbiAgICAgIHVybFxuICAgICAgZXhwaXJlZGF0XG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDc3NiwgaDogNzI2IH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IHR5cGUgUm91dGUgPSB7XG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBpZD86IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGRlc2M/OiBzdHJpbmcsXG4gIEljb24/OiBKU1guRWxlbWVudCB8ICgoKSA9PiBKU1guRWxlbWVudCksXG59XG5cbmV4cG9ydCB0eXBlIFJvdXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGNoaWxkcmVuOiBSb3V0ZVtdLFxufVxuXG5leHBvcnQgY29uc3QgbmF2OiBSb3V0ZXNbXSA9IFtcbiAge1xuICAgIHRpdGxlOiAnXHVCRTE0XHVCODVDXHVBREY4JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25vdGljZScsXG4gICAgICAgIHRpdGxlOiAnXHVBQ0Y1XHVDOUMwXHVDMEFDXHVENTZEJyxcbiAgICAgICAgaWQ6ICcxMTY2NzY4NDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNTRDXHVCODI0XHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24ubm90aWNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbmV3cycsXG4gICAgICAgIHRpdGxlOiAnXHVDMEM4XHVDMThDXHVDMkREJyxcbiAgICAgICAgaWQ6ICcxMTY2NzkwNzknLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDMEM4XHVCODVDXHVDNkI0IFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIEljb246IEljb24ubmV3cyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2UvaG9tYWVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uaG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL3NpbmdsZXBhZ2UnLFxuICAgICAgICB0aXRsZTogJ1x1QzJGMVx1QUUwMCBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1Qzc3NFx1QkNBNFx1RDJCOCwgXHVCNzlDXHVCNTI5IFx1QjJFOFx1Qzc3QyBcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1JyxcbiAgICAgICAgSWNvbjogSWNvbi5zaW5nbGVwYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9wdWJsaXNoaW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUQzN0NcdUJFMTRcdUI5QUNcdUMyRjEgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBJY29uOiBJY29uLnB1Ymxpc2hpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlL2FwcGRlc2lnbicsXG4gICAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIEljb246IEljb24uYXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZS9jb25zdWx0aW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1Qjg1Q1x1QUNFMCBcdUJBODVcdUQ1NjggXHVBQzA0XHVEMzEwIFx1QkE1NFx1QjI3NFx1RDMxMCBcdUQxNUNcdUQ1MENcdUI5QkYgXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgSWNvbjogSWNvbi5jb25zdWx0aW5nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUFFMzBcdUQwQzAnLFxuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL2NvbnRhY3QnLFxuICAgICAgICB0aXRsZTogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVCQjM0XHVDNUM3XHVDNzc0XHVCNEUwIFx1QzU0Q1x1QjgyNFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLkNvbnRhY3QsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9wbGFuJyxcbiAgICAgICAgdGl0bGU6ICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNjk0XHVBRTA4XHVENDVDJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUJDQzQgXHVBQzAwXHVBQ0E5XHVDNzQ0IFx1QzU0OFx1QjBCNFx1RDU3NCBcdUI0RENcdUI4MjRcdUM2OTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5QcmljZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3ByaXZhY3knLFxuICAgICAgICB0aXRsZTogJ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUM4MTVcdUNDNDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0NCBcdUMyMThcdUI5QkRcdTAwQjdcdUFDRjVcdUFDMUNcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5Qcml2YWN5LFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1x1QzEyNFx1QzgxNScsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXR0aW5ncycsXG4gICAgICAgIHRpdGxlOiAnXHVENjU4XHVBQ0JEXHVDMTI0XHVDODE1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QUMxQ1x1Qzc3OFx1RDY1NCBcdUMxMjRcdUM4MTVcdUM3NDQgXHVCQ0MwXHVBQ0JEXHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5TZXR0aW5ncyxcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuXVxuXG5jb25zdCBleGNlcHRSb3V0ZSA9IFsncG9zdHMnXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2KHBhdGhuYW1lPzogc3RyaW5nKTogUm91dGUge1xuICBjb25zdCBtYXRjaGVkUm91dGUgPSBuYXYucmVkdWNlPFJvdXRlW10+KChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuY2hpbGRyZW4pLCBbXSkuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRobmFtZSA9PT0gcGF0aG5hbWUpXG4gIHJldHVybiBtYXRjaGVkUm91dGUgfHwgbmF2WzBdLmNoaWxkcmVuWzBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmV2Um91dGUocGF0aG5hbWUgOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXBhdGhuYW1lKSByZXR1cm4gJy8nXG4gIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuICBwYXRocy5wb3AoKVxuICBjb25zdCBwcmV2Um91dGUgPSBwYXRocy5maWx0ZXIocCA9PiAhZXhjZXB0Um91dGUuaW5jbHVkZXMocCkpLmpvaW4oJy8nKVxuICByZXR1cm4gIXByZXZSb3V0ZSB8fCBwcmV2Um91dGUgPT09ICcnID8gJy8nIDogcHJldlJvdXRlXG59XG5cbmV4cG9ydCB0eXBlIEhlcm9TdHJpbmcgPSBbc3RyaW5nLCBzdHJpbmddW11cblxuZXhwb3J0IGNvbnN0IGhlcm9TdHJpbmc6IEhlcm9TdHJpbmcgPSBbXG4gIFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsICdcdUJEODBcdUQxMzAnXSxcbiAgWydcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JywgJ1x1QUU0Q1x1QzlDMCddLFxuXSIsICJleHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGggZD0nTTAgNDE2QzAgNDA3LjIgNy4xNjQgNDAwIDE2IDQwMEg4MS42Qzg5LjAxIDM2My41IDEyMS4zIDMzNiAxNjAgMzM2QzE5OC43IDMzNiAyMzAuMSAzNjMuNSAyMzguNCA0MDBINDk2QzUwNC44IDQwMCA1MTIgNDA3LjIgNTEyIDQxNkM1MTIgNDI0LjggNTA0LjggNDMyIDQ5NiA0MzJIMjM4LjRDMjMwLjEgNDY4LjUgMTk4LjcgNDk2IDE2MCA0OTZDMTIxLjMgNDk2IDg5LjAxIDQ2OC41IDgxLjYgNDMySDE2QzcuMTY0IDQzMiAwIDQyNC44IDAgNDE2VjQxNnpNMjA4IDQxNkMyMDggMzg5LjUgMTg2LjUgMzY4IDE2MCAzNjhDMTMzLjUgMzY4IDExMiAzODkuNSAxMTIgNDE2QzExMiA0NDIuNSAxMzMuNSA0NjQgMTYwIDQ2NEMxODYuNSA0NjQgMjA4IDQ0Mi41IDIwOCA0MTZ6TTM1MiAxNzZDMzkwLjcgMTc2IDQyMi4xIDIwMy41IDQzMC40IDI0MEg0OTZDNTA0LjggMjQwIDUxMiAyNDcuMiA1MTIgMjU2QzUxMiAyNjQuOCA1MDQuOCAyNzIgNDk2IDI3Mkg0MzAuNEM0MjIuMSAzMDguNSAzOTAuNyAzMzYgMzUyIDMzNkMzMTMuMyAzMzYgMjgxIDMwOC41IDI3My42IDI3MkgxNkM3LjE2NCAyNzIgMCAyNjQuOCAwIDI1NkMwIDI0Ny4yIDcuMTY0IDI0MCAxNiAyNDBIMjczLjZDMjgxIDIwMy41IDMxMy4zIDE3NiAzNTIgMTc2ek00MDAgMjU2QzQwMCAyMjkuNSAzNzguNSAyMDggMzUyIDIwOEMzMjUuNSAyMDggMzA0IDIyOS41IDMwNCAyNTZDMzA0IDI4Mi41IDMyNS41IDMwNCAzNTIgMzA0QzM3OC41IDMwNCA0MDAgMjgyLjUgNDAwIDI1NnpNNDk2IDgwQzUwNC44IDgwIDUxMiA4Ny4xNiA1MTIgOTZDNTEyIDEwNC44IDUwNC44IDExMiA0OTYgMTEySDI3MC40QzI2Mi4xIDE0OC41IDIzMC43IDE3NiAxOTIgMTc2QzE1My4zIDE3NiAxMjEgMTQ4LjUgMTEzLjYgMTEySDE2QzcuMTY0IDExMiAwIDEwNC44IDAgOTZDMCA4Ny4xNiA3LjE2NCA4MCAxNiA4MEgxMTMuNkMxMjEgNDMuNDggMTUzLjMgMTYgMTkyIDE2QzIzMC43IDE2IDI2Mi4xIDQzLjQ4IDI3MC40IDgwSDQ5NnpNMTQ0IDk2QzE0NCAxMjIuNSAxNjUuNSAxNDQgMTkyIDE0NEMyMTguNSAxNDQgMjQwIDEyMi41IDI0MCA5NkMyNDAgNjkuNDkgMjE4LjUgNDggMTkyIDQ4QzE2NS41IDQ4IDE0NCA2OS40OSAxNDQgOTZ6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEhvbWVMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTI3Ny40IDQuMDAyQzI4My41LTEuMzM0IDI5Mi41LTEuMzM0IDI5OC42IDQuMDAyTDM4NCA3OS4zN1Y1NkMzODQgNDIuNzUgMzk0LjcgMzEuMSA0MDggMzEuMUg0ODhDNTAxLjMgMzEuMSA1MTIgNDIuNzUgNTEyIDU2VjE5Mi4zTDU3MC42IDI0NEM1NzcuMiAyNDkuOCA1NzcuOCAyNTkuMSA1NzEuMSAyNjYuNkM1NjYuMiAyNzMuMiA1NTYgMjczLjggNTQ5LjQgMjY3LjFMNTEyIDIzNC4xVjQzMkM1MTIgNDc2LjIgNDc2LjIgNTEyIDQzMiA1MTJIMTQ0Qzk5LjgyIDUxMiA2NCA0NzYuMiA2NCA0MzJWMjM0LjFMMjYuNTkgMjY3LjFDMTkuOTYgMjczLjggOS44NDkgMjczLjIgNC4wMDMgMjY2LjZDLTEuODQ0IDI1OS4xLTEuMjEyIDI0OS44IDUuNDE0IDI0NEwyNzcuNCA0LjAwMnpNNDgwIDE2NC4xVjY0SDQxNlYxMDcuNkw0ODAgMTY0LjF6TTk2IDIwNi43VjQzMkM5NiA0NTguNSAxMTcuNSA0ODAgMTQ0IDQ4MEgyMDhWMzIwQzIwOCAzMDIuMyAyMjIuMyAyODggMjQwIDI4OEgzMzZDMzUzLjcgMjg4IDM2OCAzMDIuMyAzNjggMzIwVjQ4MEg0MzJDNDU4LjUgNDgwIDQ4MCA0NTguNSA0ODAgNDMyVjIwNi43TDI4OCAzNy4zNEw5NiAyMDYuN3pNMjQwIDMyMFY0ODBIMzM2VjMyMEgyNDB6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEFycm93TGVmdExpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjAzLjkgNDA1LjNjNS44NzcgNi41OTQgNS4zNjEgMTYuNjktMS4xODggMjIuNjJjLTYuNTYyIDUuOTA2LTE2LjY5IDUuMzc1LTIyLjU5LTEuMTg4TDM2LjEgMjY2LjdjLTUuNDY5LTYuMTI1LTUuNDY5LTE1LjMxIDAtMjEuNDRsMTQ0LTE1OS4xYzUuOTA2LTYuNTYyIDE2LjAzLTcuMDk0IDIyLjU5LTEuMTg4YzYuOTE4IDYuMjcxIDYuNzgzIDE2LjM5IDEuMTg4IDIyLjYyTDY5LjUzIDI1NkwyMDMuOSA0MDUuM3onIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJ0eXBlIExvZ29Qcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9nbyh7IGNsYXNzTmFtZSA9ICd3LTE2IGgtMTEnIH06IExvZ29Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9JzAgMCA2MCA0NCc+XG4gICAgICA8ZyBzdHJva2U9J25vbmUnIHN0cm9rZVdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsUnVsZT0nZXZlbm9kZCc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xOC4wMDAwMDAsIC0yNi4wMDAwMDApJyBmaWxsUnVsZT0nbm9uemVybyc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTguMDAwMDAwLCAyNi4wMDAwMDApJz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00wLjkzNjYzMjgzNSwzMS4wMDQyMTk0IEMwLjMxMjIxMDk0NSwzMS4wMDQyMTk0IDAsMzAuNjkxMTU1OCAwLDMwLjA2NTAyODUgTDAsMTUuOTc3MTY1NSBDMCwxNS4zNTEwMzgzIDAuMzEyMjEwOTQ1LDE1LjAzNzk3NDcgMC45MzY2MzI4MzUsMTUuMDM3OTc0NyBMOS4zNjYzMjgzNSwxNS4wMzc5NzQ3IEMxMS4xMTQ3MDk2LDE1LjAzNzk3NDcgMTIuNDg4NDM3OCwxNS40NzIzNTA1IDEzLjQ4NzUxMjgsMTYuMzQxMTAyIEMxNC40ODY1ODc5LDE3LjIwOTg1MzYgMTQuOTg2MTI1NCwxOC40MTkwNjE4IDE0Ljk4NjEyNTQsMTkuOTY4NzI2NyBDMTQuOTg2MTI1NCwyMC4zNzU3MDk0IDE0LjkyNzU4NTgsMjAuNzQzNTU5MiAxNC44MTA1MDY3LDIxLjA3MjI3NiBDMTQuNjkzNDI3NiwyMS40MDA5OTI4IDE0LjU3MjQ0NTksMjEuNjc0OTIzNSAxNC40NDc1NjE1LDIxLjg5NDA2OCBDMTQuMjkxNDU2LDIyLjE2MDE3MjEgMTQuMTE5NzQsMjIuMzk0OTY5OCAxMy45MzI0MTM0LDIyLjU5ODQ2MTIgQzE0LjIyOTAxMzgsMjIuNzcwNjQ2MSAxNC41MDIxOTg0LDIzLjAxMzI3MDUgMTQuNzUxOTY3MiwyMy4zMjYzMzQxIEMxNC45NzA1MTQ4LDIzLjU5MjQzODIgMTUuMTY1NjQ2NywyMy45NDg1NDggMTUuMzM3MzYyNywyNC4zOTQ2NjM3IEMxNS41MDkwNzg3LDI0Ljg0MDc3OTMgMTUuNTk0OTM2NywyNS40MDAzODA2IDE1LjU5NDkzNjcsMjYuMDczNDY3NCBDMTUuNTk0OTM2NywyNi43Nzc4NjA1IDE1LjQ5NzM3MDgsMjcuNDMxMzgwOCAxNS4zMDIyMzg5LDI4LjAzNDAyODMgQzE1LjEwNzEwNzEsMjguNjM2Njc1OCAxNC43NzE0ODAzLDI5LjE1NzE0NCAxNC4yOTUzNTg2LDI5LjU5NTQzMzEgQzEzLjgxOTIzNywzMC4wMzM3MjIyIDEzLjE4MzEwNzIsMzAuMzc4MDkyMiAxMi4zODY5NjkyLDMwLjYyODU0MzEgQzExLjU5MDgzMTMsMzAuODc4OTk0IDEwLjU4Mzk1MSwzMS4wMDQyMTk0IDkuMzY2MzI4MzUsMzEuMDA0MjE5NCBMMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBaIE04LjMxMjYxNjQxLDIxLjE0MjcxNTMgQzguNTMxMTY0MDgsMjEuMTQyNzE1MyA4LjcyMjM5MzI4LDIxLjA2MDUzNjEgOC44ODYzMDQwMywyMC44OTYxNzc3IEM5LjA1MDIxNDc3LDIwLjczMTgxOTMgOS4xMzIxNzAxNCwyMC41NDAwNjc4IDkuMTMyMTcwMTQsMjAuMzIwOTIzMyBDOS4xMzIxNzAxNCwyMC4xMDE3Nzg4IDkuMDUwMjE0NzcsMTkuOTEwMDI3MyA4Ljg4NjMwNDAzLDE5Ljc0NTY2ODkgQzguNzIyMzkzMjgsMTkuNTgxMzEwNSA4LjUzMTE2NDA4LDE5LjQ5OTEzMTMgOC4zMTI2MTY0MSwxOS40OTkxMzEzIEw2LjA4ODExMzQzLDE5LjQ5OTEzMTMgQzUuOTMyMDA3OTYsMTkuNDk5MTMxMyA1Ljg1Mzk1NTIyLDE5LjU3NzM5NzIgNS44NTM5NTUyMiwxOS43MzM5MjkgTDUuODUzOTU1MjIsMjAuOTA3OTE3NiBDNS44NTM5NTUyMiwyMS4wNjQ0NDk0IDUuOTMyMDA3OTYsMjEuMTQyNzE1MyA2LjA4ODExMzQzLDIxLjE0MjcxNTMgTDguMzEyNjE2NDEsMjEuMTQyNzE1MyBaIE04LjU0Njc3NDYyLDI2LjU0MzA2MjggQzguNzY1MzIyMjgsMjYuNTQzMDYyOCA4Ljk1NjU1MTQ5LDI2LjQ2MDg4MzYgOS4xMjA0NjIyMywyNi4yOTY1MjUyIEM5LjI4NDM3Mjk4LDI2LjEzMjE2NjggOS4zNjYzMjgzNSwyNS45NDA0MTUzIDkuMzY2MzI4MzUsMjUuNzIxMjcwOCBDOS4zNjYzMjgzNSwyNS41MDIxMjYzIDkuMjg0MzcyOTgsMjUuMzEwMzc0OCA5LjEyMDQ2MjIzLDI1LjE0NjAxNjQgQzguOTU2NTUxNDksMjQuOTgxNjU4IDguNzY1MzIyMjgsMjQuODk5NDc4OCA4LjU0Njc3NDYyLDI0Ljg5OTQ3ODggTDYuMDg4MTEzNDMsMjQuODk5NDc4OCBDNS45MzIwMDc5NiwyNC44OTk0Nzg4IDUuODUzOTU1MjIsMjQuOTc3NzQ0NyA1Ljg1Mzk1NTIyLDI1LjEzNDI3NjUgTDUuODUzOTU1MjIsMjYuMzA4MjY1MSBDNS44NTM5NTUyMiwyNi40NjQ3OTY5IDUuOTMyMDA3OTYsMjYuNTQzMDYyOCA2LjA4ODExMzQzLDI2LjU0MzA2MjggTDguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1iJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMTYuMzM3NTUyNywyMy4wMjEwOTcgQzE2LjMzNzU1MjcsMjEuODY5ODM0OCAxNi41NTMyNDQxLDIwLjc4NDY5MjMgMTYuOTg0NjI2OCwxOS43NjU2Njk2IEMxNy40MTYwMDk1LDE4Ljc0NjY0NjkgMTguMDA4MTgwMiwxNy44NTk4NjM4IDE4Ljc2MTEzOTEsMTcuMTA1MzIwMiBDMTkuNTE0MDk4LDE2LjM1MDc3NjcgMjAuNDA0MzE1LDE1Ljc1NTY5ODYgMjEuNDMxNzkwMSwxNS4zMjAwODU4IEMyMi40NTkyNjUzLDE0Ljg4NDQ3MyAyMy41NzY5Mzg2LDE0LjY2NjY2NjcgMjQuNzg0ODEwMSwxNC42NjY2NjY3IEMyNS45NzY5OTUsMTQuNjY2NjY2NyAyNy4wOTA3NDY3LDE0Ljg4NDQ3MyAyOC4xMjYwNjUxLDE1LjMyMDA4NTggQzI5LjE2MTM4MzYsMTUuNzU1Njk4NiAzMC4wNTU1MjIzLDE2LjM1MDc3NjcgMzAuODA4NDgxMSwxNy4xMDUzMjAyIEMzMS41NjE0NCwxNy44NTk4NjM4IDMyLjE1MzYxMDgsMTguNzQ2NjQ2OSAzMi41ODQ5OTM1LDE5Ljc2NTY2OTYgQzMzLjAxNjM3NjIsMjAuNzg0NjkyMyAzMy4yMzIwNjc1LDIxLjg2OTgzNDggMzMuMjMyMDY3NSwyMy4wMjEwOTcgQzMzLjIzMjA2NzUsMjQuMTcyMzU5MyAzMy4wMTYzNzYyLDI1LjI1NzUwMTggMzIuNTg0OTkzNSwyNi4yNzY1MjQ1IEMzMi4xNTM2MTA4LDI3LjI5NTU0NzIgMzEuNTYxNDQsMjguMTgyMzMwMyAzMC44MDg0ODExLDI4LjkzNjg3MzkgQzMwLjA1NTUyMjMsMjkuNjkxNDE3NCAyOS4xNjEzODM2LDMwLjI4NjQ5NTUgMjguMTI2MDY1MSwzMC43MjIxMDgzIEMyNy4wOTA3NDY3LDMxLjE1NzcyMSAyNS45NzY5OTUsMzEuMzc1NTI3NCAyNC43ODQ4MTAxLDMxLjM3NTUyNzQgQzIzLjU3NjkzODYsMzEuMzc1NTI3NCAyMi40NTkyNjUzLDMxLjE1NzcyMSAyMS40MzE3OTAxLDMwLjcyMjEwODMgQzIwLjQwNDMxNSwzMC4yODY0OTU1IDE5LjUxNDA5OCwyOS42OTE0MTc0IDE4Ljc2MTEzOTEsMjguOTM2ODczOSBDMTguMDA4MTgwMiwyOC4xODIzMzAzIDE3LjQxNjAwOTUsMjcuMjk1NTQ3MiAxNi45ODQ2MjY4LDI2LjI3NjUyNDUgQzE2LjU1MzI0NDEsMjUuMjU3NTAxOCAxNi4zMzc1NTI3LDI0LjE3MjM1OTMgMTYuMzM3NTUyNywyMy4wMjEwOTcgWiBNMjIuNDMxODEzNiwyMy4wMjEwOTcgQzIyLjQzMTgxMzYsMjMuNzUyMzA0MiAyMi42MzE4MTgzLDI0LjM1NTE2MTEgMjMuMDMxODI3NywyNC44Mjk2Njc5IEMyMy40MzE4MzcxLDI1LjMwNDE3NDYgMjQuMDE2MTY0NiwyNS41NDE0MjggMjQuNzg0ODEwMSwyNS41NDE0MjggQzI1LjUzNzc2OSwyNS41NDE0MjggMjYuMTE0MjUzMSwyNS4zMDQxNzQ2IDI2LjUxNDI2MjUsMjQuODI5NjY3OSBDMjYuOTE0MjcxOSwyNC4zNTUxNjExIDI3LjExNDI3NjYsMjMuNzUyMzA0MiAyNy4xMTQyNzY2LDIzLjAyMTA5NyBDMjcuMTE0Mjc2NiwyMi4yODk4ODk5IDI2LjkxNDI3MTksMjEuNjg3MDMzIDI2LjUxNDI2MjUsMjEuMjEyNTI2MiBDMjYuMTE0MjUzMSwyMC43MzgwMTk1IDI1LjUzNzc2OSwyMC41MDA3NjYxIDI0Ljc4NDgxMDEsMjAuNTAwNzY2MSBDMjQuMDE2MTY0NiwyMC41MDA3NjYxIDIzLjQzMTgzNzEsMjAuNzM4MDE5NSAyMy4wMzE4Mjc3LDIxLjIxMjUyNjIgQzIyLjYzMTgxODMsMjEuNjg3MDMzIDIyLjQzMTgxMzYsMjIuMjg5ODg5OSAyMi40MzE4MTM2LDIzLjAyMTA5NyBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1vJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNNDQuNTU2OTYyLDI1LjYwMzg3MTkgQzQ1LjE3NTgwODcsMjUuNjAzODcxOSA0NS40ODUyMzIxLDI1LjkxNjkzNTYgNDUuNDg1MjMyMSwyNi41NDMwNjI4IEw0NS40ODUyMzIxLDMwLjA2NTAyODUgQzQ1LjQ4NTIzMjEsMzAuNjkxMTU1OCA0NS4xNzU4MDg3LDMxLjAwNDIxOTQgNDQuNTU2OTYyLDMxLjAwNDIxOTQgTDM1LjI3NDI2MTYsMzEuMDA0MjE5NCBDMzQuNjU1NDE0OSwzMS4wMDQyMTk0IDM0LjM0NTk5MTYsMzAuNjkxMTU1OCAzNC4zNDU5OTE2LDMwLjA2NTAyODUgTDM0LjM0NTk5MTYsMTUuOTc3MTY1NSBDMzQuMzQ1OTkxNiwxNS4zNTEwMzgzIDM0LjY1NTQxNDksMTUuMDM3OTc0NyAzNS4yNzQyNjE2LDE1LjAzNzk3NDcgTDM5LjIxOTQwOTMsMTUuMDM3OTc0NyBDMzkuODM4MjU2LDE1LjAzNzk3NDcgNDAuMTQ3Njc5MywxNS4zNTEwMzgzIDQwLjE0NzY3OTMsMTUuOTc3MTY1NSBMNDAuMTQ3Njc5MywyNC44OTk0Nzg4IEM0MC4xNDc2NzkzLDI1LjE5Njg4OTIgNDAuMTkwMjI1LDI1LjM4ODY0MDcgNDAuMjc1MzE2NSwyNS40NzQ3MzMyIEM0MC4zNjA0MDc5LDI1LjU2MDgyNTcgNDAuNTQ5OTI5NywyNS42MDM4NzE5IDQwLjg0Mzg4MTksMjUuNjAzODcxOSBMNDQuNTU2OTYyLDI1LjYwMzg3MTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ3LjM0ODE3NCwyMC40MzgzMjIyIEM0Ni43MjUwNTk0LDIwLjQzODMyMjIgNDYuNDEzNTAyMSwyMC4xMjUyNTg1IDQ2LjQxMzUwMjEsMTkuNDk5MTMxMyBMNDYuNDEzNTAyMSwxNS45NzcxNjU1IEM0Ni40MTM1MDIxLDE1LjM1MTAzODMgNDYuNzI1MDU5NCwxNS4wMzc5NzQ3IDQ3LjM0ODE3NCwxNS4wMzc5NzQ3IEw1OS4wMzE1NzI4LDE1LjAzNzk3NDcgQzU5LjY1NDY4NzQsMTUuMDM3OTc0NyA1OS45NjYyNDQ3LDE1LjM1MTAzODMgNTkuOTY2MjQ0NywxNS45NzcxNjU1IEw1OS45NjYyNDQ3LDE5LjQ5OTEzMTMgQzU5Ljk2NjI0NDcsMjAuMTI1MjU4NSA1OS42NTQ2ODc0LDIwLjQzODMyMjIgNTkuMDMxNTcyOCwyMC40MzgzMjIyIEw1Ni44MTE3MjcsMjAuNDM4MzIyMiBDNTYuNTE1NzQ3NiwyMC40MzgzMjIyIDU2LjMyNDkxODgsMjAuNDgxMzY4NCA1Ni4yMzkyNDA1LDIwLjU2NzQ2MDkgQzU2LjE1MzU2MjIsMjAuNjUzNTUzNCA1Ni4xMTA3MjMxLDIwLjg0NTMwNDkgNTYuMTEwNzIzMSwyMS4xNDI3MTUzIEw1Ni4xMTA3MjMxLDMwLjA2NTAyODUgQzU2LjExMDcyMzEsMzAuNjkxMTU1OCA1NS43OTkxNjU4LDMxLjAwNDIxOTQgNTUuMTc2MDUxMiwzMS4wMDQyMTk0IEw1MS4yMDM2OTU2LDMxLjAwNDIxOTQgQzUwLjU4MDU4MSwzMS4wMDQyMTk0IDUwLjI2OTAyMzcsMzAuNjkxMTU1OCA1MC4yNjkwMjM3LDMwLjA2NTAyODUgTDUwLjI2OTAyMzcsMjEuMTQyNzE1MyBDNTAuMjY5MDIzNywyMC44NDUzMDQ5IDUwLjIyNjE4NDYsMjAuNjUzNTUzNCA1MC4xNDA1MDYzLDIwLjU2NzQ2MDkgQzUwLjA1NDgyODEsMjAuNDgxMzY4NCA0OS44NjM5OTkyLDIwLjQzODMyMjIgNDkuNTY4MDE5OCwyMC40MzgzMjIyIEw0Ny4zNDgxNzQsMjAuNDM4MzIyMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby10J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMjMuODM1MTE4NSwzOS4xNDg1MjU2IEMyMy44MzUxMTg1LDM5LjQxMTMxMzggMjMuODcyOTYzMywzOS42MjM1NjU4IDIzLjk0ODY1MywzOS43ODUyODE2IEMyNC4wMjQzNDI3LDM5Ljk0Njk5NzQgMjQuMTIwMjE2NCw0MC4wNzA4MTExIDI0LjIzNjI3MzksNDAuMTU2NzIyNiBDMjQuMzUyMzMxNSw0MC4yNDI2MzQyIDI0LjQ3MzQzNSw0MC4yOTgyMjQgMjQuNTk5NTg0Niw0MC4zMjM0OTIxIEMyNC43MjU3MzQxLDQwLjM0ODc2MDIgMjQuODQ0MzE0Niw0MC4zNjEzOTQyIDI0Ljk1NTMyNjIsNDAuMzYxMzk0MiBDMjUuMDY2MzM3OCw0MC4zNjEzOTQyIDI1LjE4OTk2NDMsNDAuMzQ4NzYwMiAyNS4zMjYyMDU4LDQwLjMyMzQ5MjEgQzI1LjQ2MjQ0NzMsNDAuMjk4MjI0IDI1LjU4ODU5NjgsNDAuMjQyNjM0MiAyNS43MDQ2NTQzLDQwLjE1NjcyMjYgQzI1LjgyMDcxMTksNDAuMDcwODExMSAyNS45MTY1ODU1LDM5Ljk0Njk5NzQgMjUuOTkyMjc1MiwzOS43ODUyODE2IEMyNi4wNjc5NjQ5LDM5LjYyMzU2NTggMjYuMTA1ODA5OCwzOS40MTEzMTM4IDI2LjEwNTgwOTgsMzkuMTQ4NTI1NiBMMjYuMTA1ODA5OCwzNC4wMjQxNTU4IEMyNi4xMDU4MDk4LDMzLjYxOTg2NjMgMjYuMzA3NjQ5LDMzLjQxNzcyMTUgMjYuNzExMzI3NSwzMy40MTc3MjE1IEwyOS4yODQ3Nzc3LDMzLjQxNzcyMTUgQzI5LjY4ODQ1NjEsMzMuNDE3NzIxNSAyOS44OTAyOTU0LDMzLjYxOTg2NjMgMjkuODkwMjk1NCwzNC4wMjQxNTU4IEwyOS44OTAyOTU0LDM5LjE3ODg0NzMgQzI5Ljg5MDI5NTQsMzkuODk2NDYxMyAyOS43OTQ0MjE3LDQwLjU1MDkwNDkgMjkuNjAyNjc0NSw0MS4xNDIxNzg0IEMyOS40MTA5MjcyLDQxLjczMzQ1MTggMjkuMTEzMjE0Myw0Mi4yNDEzNDA1IDI4LjcwOTUzNTksNDIuNjY1ODQ0NSBDMjguMzA1ODU3NCw0My4wOTAzNDg2IDI3Ljc5MzY5MDQsNDMuNDE4ODMzOCAyNy4xNzMwMzQ3LDQzLjY1MTMwMDMgQzI2LjU1MjM3OTEsNDMuODgzNzY2OCAyNS44MTgxODg5LDQ0IDI0Ljk3MDQ2NDEsNDQgQzI0LjEyMjczOTQsNDQgMjMuMzg4NTQ5Miw0My44ODM3NjY4IDIyLjc2Nzg5MzUsNDMuNjUxMzAwMyBDMjIuMTQ3MjM3OSw0My40MTg4MzM4IDIxLjYzNTA3MDksNDMuMDkwMzQ4NiAyMS4yMzEzOTI0LDQyLjY2NTg0NDUgQzIwLjgyNzcxMzksNDIuMjQxMzQwNSAyMC41MzAwMDExLDQxLjczMzQ1MTggMjAuMzM4MjUzOCw0MS4xNDIxNzg0IEMyMC4xNDY1MDY1LDQwLjU1MDkwNDkgMjAuMDUwNjMyOSwzOS44OTY0NjEzIDIwLjA1MDYzMjksMzkuMTc4ODQ3MyBMMjAuMDUwNjMyOSwzNC4wMjQxNTU4IEMyMC4wNTA2MzI5LDMzLjYxOTg2NjMgMjAuMjUyNDcyMSwzMy40MTc3MjE1IDIwLjY1NjE1MDYsMzMuNDE3NzIxNSBMMjMuMjI5NjAwOCwzMy40MTc3MjE1IEMyMy42MzMyNzkyLDMzLjQxNzcyMTUgMjMuODM1MTE4NSwzMy42MTk4NjYzIDIzLjgzNTExODUsMzQuMDI0MTU1OCBMMjMuODM1MTE4NSwzOS4xNDg1MjU2IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTMxLjI0NzE3NzIsMzQuMzkzNzcwMiBDMzEuMTc4MjA1MiwzNC4yOTM2NjI2IDMxLjE0MzcxOTIsMzQuMTY4NTI4MiAzMS4xNDM3MTkyLDM0LjAxODM2NjggQzMxLjE0MzcxOTIsMzMuNjE3OTM2NiAzMS4zNDA3ODIxLDMzLjQxNzcyMTUgMzEuNzM0OTA4LDMzLjQxNzcyMTUgTDM0Ljk3MTY2NjMsMzMuNDE3NzIxNSBDMzUuMTU4ODc2MSwzMy40MTc3MjE1IDM1LjMwMTc0NjcsMzMuNDc1MjgzNCAzNS40MDAyNzgyLDMzLjU5MDQwNyBDMzUuNDk4ODA5NiwzMy43MDU1MzA3IDM1LjU5MjQxNDUsMzMuODQ4MTg0IDM1LjY4MTA5MjgsMzQuMDE4MzY2OCBMMzYuMjcyMjgxNSwzNS4xMTQ1NDQ2IEwzNi45NjY5MjgzLDM0LjAxODM2NjggQzM3LjA3NTMxMjksMzMuODQ4MTg0IDM3LjE3ODc3MDksMzMuNzA1NTMwNyAzNy4yNzczMDI0LDMzLjU5MDQwNyBDMzcuMzc1ODMzOSwzMy40NzUyODM0IDM3LjQ5ODk5ODIsMzMuNDE3NzIxNSAzNy42NDY3OTU0LDMzLjQxNzcyMTUgTDQwLjYzMjI5ODUsMzMuNDE3NzIxNSBDNDEuMDI2NDI0MywzMy40MTc3MjE1IDQxLjIyMzQ4NzMsMzMuNjE3OTM2NiA0MS4yMjM0ODczLDM0LjAxODM2NjggQzQxLjIyMzQ4NzMsMzQuMTY4NTI4MiA0MS4xODkwMDEyLDM0LjI5MzY2MjYgNDEuMTIwMDI5MiwzNC4zOTM3NzAyIEwzOC42OTYxNTU0LDM4LjExNzc3MTIgTDQxLjMxMjE2NTYsNDIuNjY3NjU5NSBDNDEuMzcxMjg0NCw0Mi43Nzc3Nzc4IDQxLjQwMDg0MzksNDIuODk3OTA2OCA0MS40MDA4NDM5LDQzLjAyODA0NjcgQzQxLjQwMDg0MzksNDMuNDI4NDc2OSA0MS4yMDM3ODEsNDMuNjI4NjkyIDQwLjgwOTY1NTEsNDMuNjI4NjkyIEwzNy43OTQ1OTI2LDQzLjYyODY5MiBDMzcuNjI3MDg5MSw0My42Mjg2OTIgMzcuNDg5MTQ1LDQzLjU2ODYyNzUgMzcuMzgwNzYwNCw0My40NDg0OTg0IEMzNy4yNzIzNzU4LDQzLjMyODM2OTMgMzcuMTYzOTkxMiw0My4xODgyMTg3IDM3LjA1NTYwNjYsNDMuMDI4MDQ2NyBMMzYuMDgwMTQ1Miw0MS4zMzEyMjM2IEwzNS4xNjM4MDI3LDQzLjAyODA0NjcgQzM1LjA1NTQxODEsNDMuMTg4MjE4NyAzNC45NTQ0MjMzLDQzLjMyODM2OTMgMzQuODYwODE4NCw0My40NDg0OTg0IEMzNC43NjcyMTM1LDQzLjU2ODYyNzUgMzQuNjIxODc5Niw0My42Mjg2OTIgMzQuNDI0ODE2Nyw0My42Mjg2OTIgTDMxLjQwOTc1NDEsNDMuNjI4NjkyIEMzMS4wMTU2MjgzLDQzLjYyODY5MiAzMC44MTg1NjU0LDQzLjQyODQ3NjkgMzAuODE4NTY1NCw0My4wMjgwNDY3IEMzMC44MTg1NjU0LDQyLjkwNzkxNzYgMzAuODQzMTk4Myw0Mi43OTc3OTkzIDMwLjg5MjQ2NCw0Mi42OTc2OTE3IEwzMy42NTYyNzE0LDM4LjEwMjc1NSBMMzEuMjQ3MTc3MiwzNC4zOTM3NzAyIFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXgnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTM1LjU1NjQ5MDIsNS4zODg2MDc1OSBDMzUuNDI1NjU5Miw1LjE0MjI1MzQzIDM1LjE2Mzk5NzEsNC45ODk0NTE0OCAzNC44Nzk5OTgxLDQuOTg5NDUxNDggTDI5Ljg4Mjg5MTUsNC45ODk0NTE0OCBMMzEuNTA1MTk2MSwxLjAyNTk1NTk2IEMzMS41OTk5MzY5LDAuNzk1OTczNDMxIDMxLjU3MDk5NDUsMC41MzM4NzEzMDggMzEuNDI4NDIwNiwwLjMyODA1NjQzNSBDMzEuMjg1ODQ2NywwLjEyMjI0MTU2MSAzMS4wMjIwNzg3LDAgMzAuNzk1NTE3NiwwIEwyNS4xNzkzNTcsMCBDMjQuNzk1NDc5NiwwIDI0LjQ3MTI3NCwwLjI3NzcyNTM0MyAyNC40MjA1MzcxLDAuNjQ5ODc2MDU1IEwyMy4zOTk0MTcsOC4xMzQwNTMyNyBDMjMuMzY5NDg4Niw4LjM0Nzk3NiAyMy40MzYzMDQ5LDguNTYzMTQ2MSAyMy41ODE4Nzg0LDguNzI1MzAzMjcgQzIzLjcyNzQ1MTgsOC44ODc0NjA0NCAyMy45Mzc3Mzg3LDguOTgxMDEyNjYgMjQuMTU4MjM2OSw4Ljk4MTAxMjY2IEwyOC44MjY2NzA0LDguOTgxMDEyNjYgTDI3LjQ5MzQ3MDQsMTUuMDMzODQxIEMyNy40MTY2OTUsMTUuMzgzNzI2MyAyNy42MDQxNjYyLDE1LjczNzM1MzYgMjcuOTQwMjEwNSwxNS44Nzg2MTc1IEMyOC4wMzg0OTMzLDE1Ljk0NzUzNDMgMjguMTQwNjA1MywxNS45NjYyNDQ3IDI4LjI0MjcxNzMsMTUuOTY2MjQ0NyBDMjguNDg5MDMwNiwxNS45NjYyNDQ3IDI4LjcyODM4NzYsMTUuODQ5MzA0NSAyOC44NzQ4NTQ1LDE1LjY0MDY4MyBMMzUuNTEyMTM1Myw2LjE2MDcyNTIxIEMzNS42NzEzNjYyLDUuOTMxMjEwNDQgMzUuNjkwNTEyMiw1LjYzNDk2MTc2IDM1LjU1NjQ5MDIsNS4zODg2MDc1OSBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1pY29uJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J002NDAgNDY0djMyYTE2IDE2IDAgMCAxLTE2IDE2SDE2YTE2IDE2IDAgMCAxLTE2LTE2di0zMmExNiAxNiAwIDAgMSAxNi0xNmg2MDhhMTYgMTYgMCAwIDEgMTYgMTZ6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J000MC42OCA0NDhsMjM5Ljc5LTMzMC4yNS01My40MS03My41NWExNiAxNiAwIDAgMSAzLjU0LTIyLjM1bDI1Ljg4LTE4LjhhMTYgMTYgMCAwIDEgMjIuMzUgMy41NUwzMjAgNjMuM2w0MS4xNi01Ni42OWExNiAxNiAwIDAgMSAyMi4zNS0zLjU1bDI1LjkgMTguNzlBMTYgMTYgMCAwIDEgNDEzIDQ0LjJsLTUzLjQxIDczLjU1TDU5OS4zMiA0NDhoLTE2M0wzMjAgMjg4IDIwMy42NCA0NDh6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gc2luZ2xlcGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM1MiAyNTZhMjQgMjQgMCAxIDAgMjQgMjQgMjQgMjQgMCAwIDAtMjQtMjR6bS0xOTQuNDggMTZoMzdMMTc2IDIxOC43OHpNNDY0IDY0SDQ4YTQ4IDQ4IDAgMCAwLTQ4IDQ4djI4OGE0OCA0OCAwIDAgMCA0OCA0OGg0MTZhNDggNDggMCAwIDAgNDgtNDhWMTEyYTQ4IDQ4IDAgMCAwLTQ4LTQ4ek0yNTAuNTggMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0xMC43NUwyMTEuMTUgMzIwaC03MC4yOWwtNy4zOCAyMS4yNUExNiAxNiAwIDAgMSAxMTguMzYgMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0yMS4yNUwxNDAgMTc2LjEyQTI0IDI0IDAgMCAxIDE2Mi42NyAxNjBoMjYuNjZBMjQgMjQgMCAwIDEgMjEyIDE3Ni4xM2w1My42OSAxNTQuNjJBMTYgMTYgMCAwIDEgMjUwLjU4IDM1MnpNNDI0IDMzNmExNiAxNiAwIDAgMS0xNiAxNmgtMTZhMTUuNzQgMTUuNzQgMCAwIDEtMTItNS42OEE3MiA3MiAwIDEgMSAzNTIgMjA4YTcxLjA1IDcxLjA1IDAgMCAxIDI0IDQuNDJWMTc2YTE2IDE2IDAgMCAxIDE2LTE2aDE2YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjEyIDE3Ni4xM0EyNCAyNCAwIDAgMCAxODkuMzMgMTYwaC0yNi42NkEyNCAyNCAwIDAgMCAxNDAgMTc2LjEyTDg2LjMgMzMwLjc1QTE2IDE2IDAgMCAwIDEwMS40MiAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTItMTAuNzVsNy4zOC0yMS4yNWg3MC4yOWw3LjM3IDIxLjI1QTE2IDE2IDAgMCAwIDIzMy42NCAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTEtMjEuMjV6TTE1Ny41MiAyNzJMMTc2IDIxOC43OCAxOTQuNDggMjcyek00MDggMTYwaC0xNmExNiAxNiAwIDAgMC0xNiAxNnYzNi40MmE3MS4wNSA3MS4wNSAwIDAgMC0yNC00LjQyIDcyIDcyIDAgMSAwIDI4IDEzOC4zMiAxNS43NCAxNS43NCAwIDAgMCAxMiA1LjY4aDE2YTE2IDE2IDAgMCAwIDE2LTE2VjE3NmExNiAxNiAwIDAgMC0xNi0xNnptLTU2IDE0NGEyNCAyNCAwIDEgMSAyNC0yNCAyNCAyNCAwIDAgMS0yNCAyNHonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBBcnJvd1JpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIwIDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjg1LjQ3NiAyNzIuOTcxTDkxLjEzMiA0NjcuMzE0Yy05LjM3MyA5LjM3My0yNC41NjkgOS4zNzMtMzMuOTQxIDBsLTIyLjY2Ny0yMi42NjdjLTkuMzU3LTkuMzU3LTkuMzc1LTI0LjUyMi0uMDQtMzMuOTAxTDE4OC41MDUgMjU2IDM0LjQ4NCAxMDEuMjU1Yy05LjMzNS05LjM3OS05LjMxNy0yNC41NDQuMDQtMzMuOTAxbDIyLjY2Ny0yMi42NjdjOS4zNzMtOS4zNzMgMjQuNTY5LTkuMzczIDMzLjk0MSAwTDI4NS40NzUgMjM5LjAzYzkuMzczIDkuMzcyIDkuMzczIDI0LjU2OC4wMDEgMzMuOTQxeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI1NiAwdjEyOGgxMjhMMjU2IDB6TTE1NC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwbC00OCA0OGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxbDQ4IDQ4QzEyOS44IDM4Ni4xIDEzNC45IDM4OCAxNDAgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwxMjAuMyAzMjBsMzMuODYtMzMuODRDMTYxLjEgMjc4LjMgMTYxLjEgMjY1LjcgMTU0LjEgMjU3Ljh6TTI1OC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwcy03LjgxMiAyMC41IDAgMjguMzFMMjYzLjcgMzIwbC0zMy44NiAzMy44NGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxQzIzMy44IDM4Ni4xIDIzOC45IDM4OCAyNDQgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0bDQ4LTQ4YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwyNTguMSAyNTcuOHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OHY0MTZDMCA0OTAuNSAyMS40OSA1MTIgNDggNTEyaDI4OGMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjEyOEgyNTZ6TTE1NC4xIDM1My44YzcuODEyIDcuODEyIDcuODEyIDIwLjUgMCAyOC4zMUMxNTAuMiAzODYuMSAxNDUuMSAzODggMTQwIDM4OHMtMTAuMjMtMS45MzgtMTQuMTQtNS44NDRsLTQ4LTQ4Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFsNDgtNDhjNy44MTItNy44MTIgMjAuNDctNy44MTIgMjguMjggMHM3LjgxMiAyMC41IDAgMjguMzFMMTIwLjMgMzIwTDE1NC4xIDM1My44ek0zMDYuMSAzMzQuMmwtNDggNDhDMjU0LjIgMzg2LjEgMjQ5LjEgMzg4IDI0NCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFMMjYzLjcgMzIwbC0zMy44Ni0zMy44NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxczIwLjQ3LTcuODEyIDI4LjI4IDBsNDggNDhDMzEzLjEgMzEzLjcgMzEzLjEgMzI2LjMgMzA2LjEgMzM0LjJ6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBhcHBkZXNpZ24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNDEyLjcgMjU2LjFDMzg3LjEgMjgwLjMgMzU3LjcgMjk4LjggMzI0LjEgMzA5LjVMMjU2IDE5MkgyNTUuMUw5OC42NSA0NjMuN0M5My45NSA0NzEuOCA4Ni45NyA0NzguNCA3OC41OCA0ODIuNkwyMy4xNiA1MTAuM0MxOC4yIDUxMi44IDEyLjMxIDUxMi41IDcuNTg4IDUwOS42QzIuODcxIDUwNi43IDAgNTAxLjUgMCA0OTZWNDQwLjZDMCA0MzIuMiAyLjIyOCA0MjMuOSA2LjQ2IDQxNi41TDE2OC44IDEzNi4yQzE2My4xIDEyMy45IDE2MCAxMTAuMyAxNjAgOTZDMTYwIDQyLjk4IDIwMi4xIDAgMjU2IDBDMzA5IDAgMzUyIDQyLjk4IDM1MiA5NkMzNTIgMTEwLjMgMzQ4LjkgMTIzLjkgMzQzLjIgMTM2LjJMNDEyLjcgMjU2LjF6TTI1NS4xIDY0QzIzOC4zIDY0IDIyMy4xIDc4LjMzIDIyMy4xIDk2QzIyMy4xIDExMy43IDIzOC4zIDEyOCAyNTUuMSAxMjhDMjczLjcgMTI4IDI4OCAxMTMuNyAyODggOTZDMjg4IDc4LjMzIDI3My43IDY0IDI1NS4xIDY0ek0zNTYuNyAzNjUuOUMzODkuNiAzNTMuNiA0MTkuNiAzMzUuNSA0NDUuNSAzMTIuOUw1MDUuNSA0MTYuNUM1MDkuOCA0MjMuOSA1MTIgNDMyLjIgNTEyIDQ0MC42VjQ5NkM1MTIgNTAxLjUgNTA5LjEgNTA2LjcgNTA0LjQgNTA5LjZDNDk5LjcgNTEyLjUgNDkzLjggNTEyLjggNDg4LjggNTEwLjNMNDMzLjQgNDgyLjZDNDI1IDQ3OC40IDQxOCA0NzEuOCA0MTMuMyA0NjMuN0wzNTYuNyAzNjUuOXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTY2LjQ5IDMxMi45QzUzLjY2IDMwMS42IDQxLjg0IDI4OS4zIDMxLjE4IDI3NkMyMC4xMyAyNjIuMiAyMi4zNCAyNDIuMSAzNi4xMyAyMzFDNDkuOTIgMjE5LjEgNzAuMDYgMjIyLjIgODEuMTIgMjM1LjFDODYuNzkgMjQzLjEgOTIuODcgMjQ5LjggOTkuMzQgMjU2LjFMNjYuNDkgMzEyLjl6TTE1NS4zIDM2NS45TDE4Ny45IDMwOS41QzIwOS40IDMxNi4zIDIzMi4zIDMyMCAyNTUuMSAzMjBDMzI2LjcgMzIwIDM4OS44IDI4Ny4zIDQzMC45IDIzNS4xQzQ0MS45IDIyMi4yIDQ2Mi4xIDIxOS4xIDQ3NS45IDIzMUM0ODkuNyAyNDIuMSA0OTEuOSAyNjIuMiA0ODAuOCAyNzZDNDI4LjEgMzQxLjggMzQ2LjEgMzg0IDI1NS4xIDM4NEMyMjAuNiAzODQgMTg2LjYgMzc3LjYgMTU1LjMgMzY1LjlIMTU1LjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBjb25zdWx0aW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI4OCA5NkMyODggMTEzLjcgMjczLjcgMTI4IDI1NiAxMjhDMjM4LjMgMTI4IDIyNCAxMTMuNyAyMjQgOTZDMjI0IDc4LjMzIDIzOC4zIDY0IDI1NiA2NEMyNzMuNyA2NCAyODggNzguMzMgMjg4IDk2ek05NiAxNjBDOTYgMTQyLjMgMTEwLjMgMTI4IDEyOCAxMjhDMTQ1LjcgMTI4IDE2MCAxNDIuMyAxNjAgMTYwQzE2MCAxNzcuNyAxNDUuNyAxOTIgMTI4IDE5MkMxMTAuMyAxOTIgOTYgMTc3LjcgOTYgMTYwek02NCAyODhDNjQgMjcwLjMgNzguMzMgMjU2IDk2IDI1NkMxMTMuNyAyNTYgMTI4IDI3MC4zIDEyOCAyODhDMTI4IDMwNS43IDExMy43IDMyMCA5NiAzMjBDNzguMzMgMzIwIDY0IDMwNS43IDY0IDI4OHpNMzUyIDE2MEMzNTIgMTQyLjMgMzY2LjMgMTI4IDM4NCAxMjhDNDAxLjcgMTI4IDQxNiAxNDIuMyA0MTYgMTYwQzQxNiAxNzcuNyA0MDEuNyAxOTIgMzg0IDE5MkMzNjYuMyAxOTIgMzUyIDE3Ny43IDM1MiAxNjB6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J001MTIgMjU1LjFDNTEyIDI1Ni45IDUxMS4xIDI1Ny44IDUxMS4xIDI1OC43QzUxMS42IDI5NS4yIDQ3OC40IDMxOS4xIDQ0MS45IDMxOS4xSDM0NEMzMTcuNSAzMTkuMSAyOTYgMzQxLjUgMjk2IDM2OEMyOTYgMzcxLjQgMjk2LjQgMzc0LjcgMjk3IDM3Ny45QzI5OS4yIDM4OC4xIDMwMy41IDM5Ny4xIDMwNy45IDQwNy44QzMxMy45IDQyMS42IDMyMCA0MzUuMyAzMjAgNDQ5LjhDMzIwIDQ4MS43IDI5OC40IDUxMC41IDI2Ni42IDUxMS44QzI2My4xIDUxMS45IDI1OS41IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2VjI1NS4xek05NiAyNTUuMUM3OC4zMyAyNTUuMSA2NCAyNzAuMyA2NCAyODcuMUM2NCAzMDUuNyA3OC4zMyAzMTkuMSA5NiAzMTkuMUMxMTMuNyAzMTkuMSAxMjggMzA1LjcgMTI4IDI4Ny4xQzEyOCAyNzAuMyAxMTMuNyAyNTUuMSA5NiAyNTUuMXpNMTI4IDE5MS4xQzE0NS43IDE5MS4xIDE2MCAxNzcuNyAxNjAgMTU5LjFDMTYwIDE0Mi4zIDE0NS43IDEyNy4xIDEyOCAxMjcuMUMxMTAuMyAxMjcuMSA5NiAxNDIuMyA5NiAxNTkuMUM5NiAxNzcuNyAxMTAuMyAxOTEuMSAxMjggMTkxLjF6TTI1NiA2My4xQzIzOC4zIDYzLjEgMjI0IDc4LjMzIDIyNCA5NS4xQzIyNCAxMTMuNyAyMzguMyAxMjcuMSAyNTYgMTI3LjFDMjczLjcgMTI3LjEgMjg4IDExMy43IDI4OCA5NS4xQzI4OCA3OC4zMyAyNzMuNyA2My4xIDI1NiA2My4xek0zODQgMTkxLjFDNDAxLjcgMTkxLjEgNDE2IDE3Ny43IDQxNiAxNTkuMUM0MTYgMTQyLjMgNDAxLjcgMTI3LjEgMzg0IDEyNy4xQzM2Ni4zIDEyNy4xIDM1MiAxNDIuMyAzNTIgMTU5LjFDMzUyIDE3Ny43IDM2Ni4zIDE5MS4xIDM4NCAxOTEuMXonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5ld3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMCAxMjh2MzA0QzAgNDU4LjUgMjEuNDkgNDgwIDQ4IDQ4MFM5NiA0NTguNSA5NiA0MzJWOTZIMzJDMTQuMzMgOTYgMCAxMTAuMyAwIDEyOHpNMjcyIDI4OGgtOTZDMTY3LjIgMjg4IDE2MCAyOTUuMiAxNjAgMzA0QzE2MCAzMTIuOCAxNjcuMiAzMjAgMTc2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAyOTUuMiAyODAuOCAyODggMjcyIDI4OHpNMzM2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAyOTUuMiA0NDAuOCAyODggNDMyIDI4OGgtOTZDMzI3LjIgMjg4IDMyMCAyOTUuMiAzMjAgMzA0QzMyMCAzMTIuOCAzMjcuMiAzMjAgMzM2IDMyMHpNMjcyIDM4NGgtOTZDMTY3LjIgMzg0IDE2MCAzOTEuMiAxNjAgNDAwQzE2MCA0MDguOCAxNjcuMiA0MTYgMTc2IDQxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAzOTEuMiAyODAuOCAzODQgMjcyIDM4NHpNNDMyIDM4NGgtOTZjLTguODM2IDAtMTYgNy4xNjItMTYgMTZjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAzOTEuMiA0NDAuOCAzODQgNDMyIDM4NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4MCAzMkgxMjhDMTEwLjMgMzIgOTYgNDYuMzMgOTYgNjR2MzY4Qzk2IDQ1OC41IDc0LjUxIDQ4MCA0OCA0ODBINDQ4YzM1LjM1IDAgNjQtMjguNjUgNjQtNjRWNjRDNTEyIDQ2LjMzIDQ5Ny43IDMyIDQ4MCAzMnpNMjcyIDQxNmgtOTZDMTY3LjIgNDE2IDE2MCA0MDguOCAxNjAgNDAwQzE2MCAzOTEuMiAxNjcuMiAzODQgMTc2IDM4NGg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzI4OCA0MDguOCAyODAuOCA0MTYgMjcyIDQxNnpNMjcyIDMyMGgtOTZDMTY3LjIgMzIwIDE2MCAzMTIuOCAxNjAgMzA0QzE2MCAyOTUuMiAxNjcuMiAyODggMTc2IDI4OGg5NkMyODAuOCAyODggMjg4IDI5NS4yIDI4OCAzMDRDMjg4IDMxMi44IDI4MC44IDMyMCAyNzIgMzIwek00MzIgNDE2aC05NmMtOC44MzYgMC0xNi03LjE2NC0xNi0xNmMwLTguODM4IDcuMTY0LTE2IDE2LTE2aDk2YzguODM2IDAgMTYgNy4xNjIgMTYgMTZDNDQ4IDQwOC44IDQ0MC44IDQxNiA0MzIgNDE2ek00MzIgMzIwaC05NkMzMjcuMiAzMjAgMzIwIDMxMi44IDMyMCAzMDRDMzIwIDI5NS4yIDMyNy4yIDI4OCAzMzYgMjg4aDk2QzQ0MC44IDI4OCA0NDggMjk1LjIgNDQ4IDMwNEM0NDggMzEyLjggNDQwLjggMzIwIDQzMiAzMjB6TTQ0OCAyMDhDNDQ4IDIxNi44IDQ0MC44IDIyNCA0MzIgMjI0aC0yNTZDMTY3LjIgMjI0IDE2MCAyMTYuOCAxNjAgMjA4di05NkMxNjAgMTAzLjIgMTY3LjIgOTYgMTc2IDk2aDI1NkM0NDAuOCA5NiA0NDggMTAzLjIgNDQ4IDExMlYyMDh6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBub3RpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTkyIDIyNGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di0xMTJDMjE2IDc0Ljc1IDIwNS4zIDY0IDE5MiA2NFMxNjggNzQuNzUgMTY4IDg4djExMkMxNjggMjEzLjMgMTc4LjggMjI0IDE5MiAyMjR6TTE5MiAzMjBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnMtMTQuMzMtMzItMzItMzJTMTYwIDI3MC4zIDE2MCAyODhTMTc0LjMgMzIwIDE5MiAzMjB6TTExMi4zIDM4NGwtLjA5MDYgNzAuMzVjMCA2LjI5NyAxLjg4NiAxMi40MyA1LjM1NSAxNy42OGwxNy4wOCAyNS42OUMxMzkuOCA1MDUuNiAxNTEuOCA1MTIgMTYxLjIgNTEyaDYxLjY3YzkuNDM4IDAgMjEuMzYtNi4zOTUgMjYuNjEtMTQuMjdsMTcuMzQtMjUuN2MyLjkzOC00LjQzOCA1LjA5Ny0xMi4zNSA1LjA5Ny0xNy42OGwuMjE1Ni03MC4zNUwxMTIuMyAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00xOTEuNSAuMDEyN0M4OS40NyAuMjYyNyAxNiA4Mi4xIDE2IDE3NS4xYzAgNDQuMzggMTYuNTIgODQuODkgNDMuNTIgMTE1LjhjMTYuNjIgMTguODggNDIuMzYgNTguMjMgNTIuMjQgOTEuNDhjMCAuMjUgLjExNDYgLjUxMDQgLjExNDYgLjc2MDRsMTYwLjMgLjAwMDZjMC0uMjUgLjA4MzMtLjUxMTEgLjA4MzMtLjc2MTFjOS44NzUtMzMuMjUgMzUuNjEtNzIuNjEgNTIuMjQtOTEuNDhDMzUxLjUgMjYwLjkgMzY4IDIyMC40IDM2OCAxNzUuMUMzNjggNzguNjIgMjg4LjgtLjIzNzMgMTkxLjUgLjAxMjd6TTE2OCA4OEMxNjggNzQuNzUgMTc4LjggNjQgMTkyIDY0czI0IDEwLjc1IDI0IDI0djExMkMyMTYgMjEzLjMgMjA1LjMgMjI0IDE5MiAyMjRTMTY4IDIxMy4zIDE2OCAyMDBWODh6TTE5MiAzMjBjLTE3LjY3IDAtMzItMTQuMzMtMzItMzJzMTQuMzMtMzIgMzItMzJzMzIgMTQuMzMgMzIgMzJTMjA5LjcgMzIwIDE5MiAzMjB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjk4LjkgMzA5LjZsLTQ1LjY0LTYuNjg4bC0yMC4zNi00MS40Yy0zLjYyNS03LjM3NS0xNC4xNi03LjUtMTcuOTEgMEwxOTQuNyAzMDIuOUwxNDkgMzA5LjZjLTguMjUgMS4xMjUtMTEuMzcgMTEuMjItNS40OTEgMTcuMWwzMi45NCAzMi4xbC03Ljc3MiA0NS41NWMtMS41IDguMjUgNy4yNjQgMTQuMzcgMTQuNTEgMTAuNDlsNDAuNzctMjEuNTNsNDAuNzcgMjEuNTNjNy4zNzUgMy44NzUgMTYuMDEtMi4yNDIgMTQuNTEtMTAuNDlsLTcuNzczLTQ1LjU1bDMyLjEtMzIuMUMzMTAuNCAzMjAuOCAzMDcuMiAzMTAuNyAyOTguOSAzMDkuNnpNNDI0IDE0My4xTDEyNy40IDE0My4xYzYuMzc1LTMwLjg4IDMwLjc1LTU1LjI1IDYyLjc1LTYxLjFDMTk4LjggOTAuNjIgMjEwLjggOTUuMSAyMjQgOTUuMWw2Mi4yIC4wMDAxYzIzLjIxIDAgNDQuNS0xNS42OSA0OC44OS0zOC40OEMzNDAuMSAyNi44NSAzMTcuNiAwIDI4OCAwaC02NGMtMjIgMC00MC41IDE1LTQ2LjEzIDM1LjI1Yy01MiAxMS42Mi05MS43NSA1NS05OC41IDEwOC44TDIzLjEgMTQzLjFDMTAuNzUgMTQzLjEgMCAxNTQuNyAwIDE2Ny4xYzAgMTMuMjUgMTAuNzUgMjQgMjMuMSAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNEM0NDggMTU0LjcgNDM3LjMgMTQzLjEgNDI0IDE0My4xeidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNDggMTkxLjFsMjkuMTIgMjkxLjJjMS42MzYgMTYuMzYgMTUuMjQgMjguODIgMzEuNjggMjguODJoMjMwLjRjMTYuNDQgMCAzMC4wNS0xMi40NiAzMS42OC0yOC44Mkw0MDAgMTkxLjFINDh6TTMwNC41IDMyNi43bC0zMi4xIDMyLjFsNy43NzMgNDUuNTVjMS41IDguMjUtNy4xMzkgMTQuMzctMTQuNTEgMTAuNDlMMjIzLjEgMzkzLjNsLTQwLjc3IDIxLjUzYy03LjI1IDMuODc1LTE2LjAxLTIuMjQyLTE0LjUxLTEwLjQ5bDcuNzcyLTQ1LjU1bC0zMi45NC0zMi4xQzEzNy43IDMyMC44IDE0MC44IDMxMC43IDE0OSAzMDkuNkwxOTQuNyAzMDIuOWwyMC4zNi00MS40YzMuNzUtNy41IDE0LjI5LTcuMzc1IDE3LjkxIDBsMjAuMzYgNDEuNGw0NS42NCA2LjY4OEMzMDcuMiAzMTAuNyAzMTAuNCAzMjAuOCAzMDQuNSAzMjYuN3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFByaXZhY3koKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNjIyLjMgMjcxLjFsLTExNS4xLTQ1LjAxYy00LjEyNS0xLjYyOS0xMi42Mi0zLjc1NC0yMi4yNSAwTDM2OS44IDI3MS4xQzM1OSAyNzUuMiAzNTIgMjg1LjEgMzUyIDI5NS4xYzAgMTExLjYgNjguNzUgMTg4LjggMTMyLjkgMjEzLjljOS42MjUgMy43NSAxOCAxLjYyNSAyMi4yNSAwQzU1OC40IDQ4OS45IDY0MCA0MjAuNSA2NDAgMjk1LjFDNjQwIDI4NS4xIDYzMyAyNzUuMiA2MjIuMyAyNzEuMXpNNDk2IDQ2Mi40VjI3My4ybDk1LjUgMzcuMzhDNTg1LjkgMzk3LjggNTMwLjYgNDQ2IDQ5NiA0NjIuNHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4UzI5NC43IDAgMjI0IDBDMTUzLjMgMCA5NiA1Ny4zMSA5NiAxMjhTMTUzLjMgMjU2IDIyNCAyNTZ6TTMyMC42IDMxMC4zQzMwNS45IDMwNi4zIDI5MC42IDMwNCAyNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjcgMCA0NzcuNEMwIDQ5Ni41IDE1LjUyIDUxMiAzNC42NiA1MTJINDEzLjNjMy4xNDMgMCA1Ljk2Ny0xLjAwNCA4Ljg2MS0xLjc4OUMzNjkuNyA0NjkuOCAzMjQuMSA0MDAuMyAzMjAuNiAzMTAuM3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTU5LjEgMTkyTDE0NCAxOTJjLTM1LjM0IDAtNjQgMjguNjYtNjQgNjQuMDh2NDcuNzlDODAgMzM5LjMgMTA4LjcgMzY4IDE0NCAzNjhIMTYwYzE3LjY2IDAgMzItMTQuMzYgMzItMzIuMDZMMTkxLjEgMjI0QzE5MS4xIDIwNi4zIDE3Ny42IDE5MiAxNTkuMSAxOTJ6TTM2OCAxOTJsLTE2IDBjLTE3LjY2IDAtMzIgMTQuMzQtMzIgMzIuMDRMMzIwIDMzNS45QzMyMCAzNTMuNyAzMzQuMyAzNjggMzUyIDM2OGgxNmMzNS4zNCAwIDY0LTI4LjcgNjQtNjQuMTNWMjU2LjFDNDMyIDIyMC43IDQwMy4zIDE5MiAzNjggMTkyeidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjU2IDBDMTEyLjkgMCA0LjU4MyAxMTkuMSAuMDIwOCAyNTZMMCAyOTZDMCAzMDkuMyAxMC43NSAzMjAgMjMuMSAzMjBTNDggMzA5LjMgNDggMjk2VjI1NmMwLTExNC43IDkzLjM0LTIwNy44IDIwOC0yMDcuOEMzNzAuNyA0OC4yIDQ2NCAxNDEuMyA0NjQgMjU2djE0NGMwIDIyLjA5LTE3LjkxIDQwLTQwIDQwaC0xMTAuN0MzMDUgNDI1LjcgMjg5LjcgNDE2IDI3MiA0MTZIMjQxLjhjLTIzLjIxIDAtNDQuNSAxNS42OS00OC44NyAzOC40OUMxODcgNDg1LjIgMjEwLjQgNTEyIDIzOS4xIDUxMkgyNzJjMTcuNzIgMCAzMy4wMy05LjcxMSA0MS4zNC0yNEg0MjRjNDguNiAwIDg4LTM5LjQgODgtODhWMjU2QzUwNy40IDExOS4xIDM5OS4xIDAgMjU2IDB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBQcmljZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J005NiAxNTJDOTYgMTM4LjcgMTA2LjcgMTI4IDEyMCAxMjhDMTMzLjMgMTI4IDE0NCAxMzguNyAxNDQgMTUyVjM2MEMxNDQgMzczLjMgMTMzLjMgMzg0IDEyMCAzODRDMTA2LjcgMzg0IDk2IDM3My4zIDk2IDM2MFYxNTJ6TTE3NiAxNDRDMTc2IDEzNS4yIDE4My4yIDEyOCAxOTIgMTI4QzIwMC44IDEyOCAyMDggMTM1LjIgMjA4IDE0NFYzNjhDMjA4IDM3Ni44IDIwMC44IDM4NCAxOTIgMzg0QzE4My4yIDM4NCAxNzYgMzc2LjggMTc2IDM2OFYxNDR6TTI4OCAxNTJWMzYwQzI4OCAzNzMuMyAyNzcuMyAzODQgMjY0IDM4NEMyNTAuNyAzODQgMjQwIDM3My4zIDI0MCAzNjBWMTUyQzI0MCAxMzguNyAyNTAuNyAxMjggMjY0IDEyOEMyNzcuMyAxMjggMjg4IDEzOC43IDI4OCAxNTJ6TTM1MiAxNTJDMzUyIDEzOC43IDM2Mi43IDEyOCAzNzYgMTI4QzM4OS4zIDEyOCA0MDAgMTM4LjcgNDAwIDE1MlYzNjBDNDAwIDM3My4zIDM4OS4zIDM4NCAzNzYgMzg0QzM2Mi43IDM4NCAzNTIgMzczLjMgMzUyIDM2MFYxNTJ6TTQ4MCAxNDRWMzY4QzQ4MCAzNzYuOCA0NzIuOCAzODQgNDY0IDM4NEM0NTUuMiAzODQgNDQ4IDM3Ni44IDQ0OCAzNjhWMTQ0QzQ0OCAxMzUuMiA0NTUuMiAxMjggNDY0IDEyOEM0NzIuOCAxMjggNDgwIDEzNS4yIDQ4MCAxNDR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J001MTIgMzJDNTQ3LjMgMzIgNTc2IDYwLjY1IDU3NiA5NlY0MTZDNTc2IDQ1MS4zIDU0Ny4zIDQ4MCA1MTIgNDgwSDY0QzI4LjY1IDQ4MCAwIDQ1MS4zIDAgNDE2Vjk2QzAgNjAuNjUgMjguNjUgMzIgNjQgMzJINTEyek0xMjAgMTI4QzEwNi43IDEyOCA5NiAxMzguNyA5NiAxNTJWMzYwQzk2IDM3My4zIDEwNi43IDM4NCAxMjAgMzg0QzEzMy4zIDM4NCAxNDQgMzczLjMgMTQ0IDM2MFYxNTJDMTQ0IDEzOC43IDEzMy4zIDEyOCAxMjAgMTI4ek0xNzYgMzY4QzE3NiAzNzYuOCAxODMuMiAzODQgMTkyIDM4NEMyMDAuOCAzODQgMjA4IDM3Ni44IDIwOCAzNjhWMTQ0QzIwOCAxMzUuMiAyMDAuOCAxMjggMTkyIDEyOEMxODMuMiAxMjggMTc2IDEzNS4yIDE3NiAxNDRWMzY4ek0yNjQgMTI4QzI1MC43IDEyOCAyNDAgMTM4LjcgMjQwIDE1MlYzNjBDMjQwIDM3My4zIDI1MC43IDM4NCAyNjQgMzg0QzI3Ny4zIDM4NCAyODggMzczLjMgMjg4IDM2MFYxNTJDMjg4IDEzOC43IDI3Ny4zIDEyOCAyNjQgMTI4ek0zNTIgMzYwQzM1MiAzNzMuMyAzNjIuNyAzODQgMzc2IDM4NEMzODkuMyAzODQgNDAwIDM3My4zIDQwMCAzNjBWMTUyQzQwMCAxMzguNyAzODkuMyAxMjggMzc2IDEyOEMzNjIuNyAxMjggMzUyIDEzOC43IDM1MiAxNTJWMzYwek00NjQgMTI4QzQ1NS4yIDEyOCA0NDggMTM1LjIgNDQ4IDE0NFYzNjhDNDQ4IDM3Ni44IDQ1NS4yIDM4NCA0NjQgMzg0QzQ3Mi44IDM4NCA0ODAgMzc2LjggNDgwIDM2OFYxNDRDNDgwIDEzNS4yIDQ3Mi44IDEyOCA0NjQgMTI4eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTYwIDQ5NkMxMTUuOCA0OTYgODAgNDYwLjIgODAgNDE2QzgwIDM3MS44IDExNS44IDMzNiAxNjAgMzM2QzIwNC4yIDMzNiAyNDAgMzcxLjggMjQwIDQxNkMyNDAgNDYwLjIgMjA0LjIgNDk2IDE2MCA0OTZ6TTE5MiA0MTZDMTkyIDM5OC4zIDE3Ny43IDM4NCAxNjAgMzg0QzE0Mi4zIDM4NCAxMjggMzk4LjMgMTI4IDQxNkMxMjggNDMzLjcgMTQyLjMgNDQ4IDE2MCA0NDhDMTc3LjcgNDQ4IDE5MiA0MzMuNyAxOTIgNDE2ek0zNTIgMzM2QzMwNy44IDMzNiAyNzIgMzAwLjIgMjcyIDI1NkMyNzIgMjExLjggMzA3LjggMTc2IDM1MiAxNzZDMzk2LjIgMTc2IDQzMiAyMTEuOCA0MzIgMjU2QzQzMiAzMDAuMiAzOTYuMiAzMzYgMzUyIDMzNnpNMzg0IDI1NkMzODQgMjM4LjMgMzY5LjcgMjI0IDM1MiAyMjRDMzM0LjMgMjI0IDMyMCAyMzguMyAzMjAgMjU2QzMyMCAyNzMuNyAzMzQuMyAyODggMzUyIDI4OEMzNjkuNyAyODggMzg0IDI3My43IDM4NCAyNTZ6TTE5MiAxNkMyMzYuMiAxNiAyNzIgNTEuODIgMjcyIDk2QzI3MiAxNDAuMiAyMzYuMiAxNzYgMTkyIDE3NkMxNDcuOCAxNzYgMTEyIDE0MC4yIDExMiA5NkMxMTIgNTEuODIgMTQ3LjggMTYgMTkyIDE2ek0xNjAgOTZDMTYwIDExMy43IDE3NC4zIDEyOCAxOTIgMTI4QzIwOS43IDEyOCAyMjQgMTEzLjcgMjI0IDk2QzIyNCA3OC4zMyAyMDkuNyA2NCAxOTIgNjRDMTc0LjMgNjQgMTYwIDc4LjMzIDE2MCA5NnonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTAgNDE2QzAgMzk4LjMgMTQuMzMgMzg0IDMyIDM4NEg4Ni42NkM4Mi4zOCAzOTMuOCA4MCA0MDQuNiA4MCA0MTZDODAgNDI3LjQgODIuMzggNDM4LjIgODYuNjYgNDQ4SDMyQzE0LjMzIDQ0OCAwIDQzMy43IDAgNDE2ek0yNDAgNDE2QzI0MCA0MDQuNiAyMzcuNiAzOTMuOCAyMzMuMyAzODRINDgwQzQ5Ny43IDM4NCA1MTIgMzk4LjMgNTEyIDQxNkM1MTIgNDMzLjcgNDk3LjcgNDQ4IDQ4MCA0NDhIMjMzLjNDMjM3LjYgNDM4LjIgMjQwIDQyNy40IDI0MCA0MTZWNDE2ek0wIDI1NkMwIDIzOC4zIDE0LjMzIDIyNCAzMiAyMjRIMjc4LjdDMjc0LjQgMjMzLjggMjcyIDI0NC42IDI3MiAyNTZDMjcyIDI2Ny40IDI3NC40IDI3OC4yIDI3OC43IDI4OEgzMkMxNC4zMyAyODggMCAyNzMuNyAwIDI1NlYyNTZ6TTQzMiAyNTZDNDMyIDI0NC42IDQyOS42IDIzMy44IDQyNS4zIDIyNEg0ODBDNDk3LjcgMjI0IDUxMiAyMzguMyA1MTIgMjU2QzUxMiAyNzMuNyA0OTcuNyAyODggNDgwIDI4OEg0MjUuM0M0MjkuNiAyNzguMiA0MzIgMjY3LjQgNDMyIDI1NnpNMTE4LjcgNjRDMTE0LjQgNzMuOCAxMTIgODQuNjIgMTEyIDk2QzExMiAxMDcuNCAxMTQuNCAxMTguMiAxMTguNyAxMjhIMzJDMTQuMzMgMTI4IDAgMTEzLjcgMCA5NkMwIDc4LjMzIDE0LjMzIDY0IDMyIDY0SDExOC43ek0yNjUuMyAxMjhDMjY5LjYgMTE4LjIgMjcyIDEwNy40IDI3MiA5NkMyNzIgODQuNjIgMjY5LjYgNzMuOCAyNjUuMyA2NEg0ODBDNDk3LjcgNjQgNTEyIDc4LjMzIDUxMiA5NkM1MTIgMTEzLjcgNDk3LjcgMTI4IDQ4MCAxMjhIMjY1LjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xMTYgMjA1LjFDMTE2IDE5Ni4yIDEyNS42IDE5MC40IDEzMy41IDE5NC43TDIyMy40IDI0Mi42QzIzNC4xIDI0OC4zIDIzNC4xIDI2My43IDIyMy40IDI2OS40TDEzMy41IDMxNy4zQzEyNS42IDMyMS42IDExNiAzMTUuOCAxMTYgMzA2LjlDMTE2IDMwNC4xIDExNi4xIDMwMS40IDExOC44IDI5OS4yTDE1NC44IDI1NkwxMTguOCAyMTIuOEMxMTYuMSAyMTAuNiAxMTYgMjA3LjkgMTE2IDIwNS4xVjIwNS4xek0zOTMuMiAyMTIuOEwzNTcuMiAyNTZMMzkzLjIgMjk5LjJDMzk1IDMwMS40IDM5NiAzMDQuMSAzOTYgMzA2LjlDMzk2IDMxNS44IDM4Ni40IDMyMS42IDM3OC41IDMxNy4zTDI4OC42IDI2OS40QzI3Ny45IDI2My43IDI3Ny45IDI0OC4zIDI4OC42IDI0Mi42TDM3OC41IDE5NC43QzM4Ni40IDE5MC40IDM5NiAxOTYuMiAzOTYgMjA1LjFDMzk2IDIwNy45IDM5NSAyMTAuNiAzOTMuMiAyMTIuOHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2QzUxMiAzOTcuNCAzOTcuNCA1MTIgMjU2IDUxMkMxMTQuNiA1MTIgMCAzOTcuNCAwIDI1NnpNMTE4LjggMjEyLjhMMTU0LjggMjU2TDExOC44IDI5OS4yQzExNi4xIDMwMS40IDExNiAzMDQuMSAxMTYgMzA2LjlDMTE2IDMxNS44IDEyNS42IDMyMS42IDEzMy41IDMxNy4zTDIyMy40IDI2OS40QzIzNC4xIDI2My43IDIzNC4xIDI0OC4zIDIyMy40IDI0Mi42TDEzMy41IDE5NC43QzEyNS42IDE5MC40IDExNiAxOTYuMiAxMTYgMjA1LjFDMTE2IDIwNy45IDExNi4xIDIxMC42IDExOC44IDIxMi44VjIxMi44ek0yODguNiAyNDIuNkMyNzcuOSAyNDguMyAyNzcuOSAyNjMuNyAyODguNiAyNjkuNEwzNzguNSAzMTcuM0MzODYuNCAzMjEuNiAzOTYgMzE1LjggMzk2IDMwNi45QzM5NiAzMDQuMSAzOTUgMzAxLjQgMzkzLjIgMjk5LjJMMzU3LjIgMjU2TDM5My4yIDIxMi44QzM5NSAyMTAuNiAzOTYgMjA3LjkgMzk2IDIwNS4xQzM5NiAxOTYuMiAzODYuNCAxOTAuNCAzNzguNSAxOTQuN0wyODguNiAyNDIuNnpNMjE2LjkgMzU0LjdDMjExLjUgMzUxLjEgMjA0LjUgMzUxLjEgMTk5LjEgMzU0LjdMMTU4LjkgMzgxLjVMMTM1LjIgMzY5LjdDMTI3LjMgMzY1LjcgMTE3LjYgMzY4LjkgMTEzLjcgMzc2LjhDMTA5LjcgMzg0LjcgMTEyLjkgMzk0LjQgMTIwLjggMzk4LjNMMTUyLjggNDE0LjNDMTU3LjEgNDE2LjkgMTY0LjEgNDE2LjUgMTY4LjkgNDEzLjNMMjA4IDM4Ny4yTDI0Ny4xIDQxMy4zQzI1Mi41IDQxNi45IDI1OS41IDQxNi45IDI2NC45IDQxMy4zTDMwNCAzODcuMkwzNDMuMSA0MTMuM0MzNDcuOSA0MTYuNSAzNTQgNDE2LjkgMzU5LjIgNDE0LjNMMzkxLjIgMzk4LjNDMzk5LjEgMzk0LjQgNDAyLjMgMzg0LjcgMzk4LjMgMzc2LjhDMzk0LjQgMzY4LjkgMzg0LjcgMzY1LjcgMzc2LjggMzY5LjdMMzUzLjEgMzgxLjVMMzEyLjkgMzU0LjdDMzA3LjUgMzUxLjEgMzAwLjUgMzUxLjEgMjk1LjEgMzU0LjdMMjU2IDM4MC44TDIxNi45IDM1NC43eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gWW91dHViZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTU0OS42NTUgMTI0LjA4M2MtNi4yODEtMjMuNjUtMjQuNzg3LTQyLjI3Ni00OC4yODQtNDguNTk3QzQ1OC43ODEgNjQgMjg4IDY0IDI4OCA2NFMxMTcuMjIgNjQgNzQuNjI5IDc1LjQ4NmMtMjMuNDk3IDYuMzIyLTQyLjAwMyAyNC45NDctNDguMjg0IDQ4LjU5Ny0xMS40MTIgNDIuODY3LTExLjQxMiAxMzIuMzA1LTExLjQxMiAxMzIuMzA1czAgODkuNDM4IDExLjQxMiAxMzIuMzA1YzYuMjgxIDIzLjY1IDI0Ljc4NyA0MS41IDQ4LjI4NCA0Ny44MjFDMTE3LjIyIDQ0OCAyODggNDQ4IDI4OCA0NDhzMTcwLjc4IDAgMjEzLjM3MS0xMS40ODZjMjMuNDk3LTYuMzIxIDQyLjAwMy0yNC4xNzEgNDguMjg0LTQ3LjgyMSAxMS40MTItNDIuODY3IDExLjQxMi0xMzIuMzA1IDExLjQxMi0xMzIuMzA1czAtODkuNDM4LTExLjQxMi0xMzIuMzA1em0tMzE3LjUxIDIxMy41MDhWMTc1LjE4NWwxNDIuNzM5IDgxLjIwNS0xNDIuNzM5IDgxLjIwMXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gVHdpdHRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGggZD0nTTQ1OS4zNyAxNTEuNzE2Yy4zMjUgNC41NDguMzI1IDkuMDk3LjMyNSAxMy42NDUgMCAxMzguNzItMTA1LjU4MyAyOTguNTU4LTI5OC41NTggMjk4LjU1OC01OS40NTIgMC0xMTQuNjgtMTcuMjE5LTE2MS4xMzctNDcuMTA2IDguNDQ3Ljk3NCAxNi41NjggMS4yOTkgMjUuMzQgMS4yOTkgNDkuMDU1IDAgOTQuMjEzLTE2LjU2OCAxMzAuMjc0LTQ0LjgzMi00Ni4xMzItLjk3NS04NC43OTItMzEuMTg4LTk4LjExMi03Mi43NzIgNi40OTguOTc0IDEyLjk5NSAxLjYyNCAxOS44MTggMS42MjQgOS40MjEgMCAxOC44NDMtMS4zIDI3LjYxNC0zLjU3My00OC4wODEtOS43NDctODQuMTQzLTUxLjk4LTg0LjE0My0xMDIuOTg1di0xLjI5OWMxMy45NjkgNy43OTcgMzAuMjE0IDEyLjY3IDQ3LjQzMSAxMy4zMTktMjguMjY0LTE4Ljg0My00Ni43ODEtNTEuMDA1LTQ2Ljc4MS04Ny4zOTEgMC0xOS40OTIgNS4xOTctMzcuMzYgMTQuMjk0LTUyLjk1NCA1MS42NTUgNjMuNjc1IDEyOS4zIDEwNS4yNTggMjE2LjM2NSAxMDkuODA3LTEuNjI0LTcuNzk3LTIuNTk5LTE1LjkxOC0yLjU5OS0yNC4wNCAwLTU3LjgyOCA0Ni43ODItMTA0LjkzNCAxMDQuOTM0LTEwNC45MzQgMzAuMjEzIDAgNTcuNTAyIDEyLjY3IDc2LjY3IDMzLjEzNyAyMy43MTUtNC41NDggNDYuNDU2LTEzLjMyIDY2LjU5OS0yNS4zNC03Ljc5OCAyNC4zNjYtMjQuMzY2IDQ0LjgzMy00Ni4xMzIgNTcuODI3IDIxLjExNy0yLjI3MyA0MS41ODQtOC4xMjIgNjAuNDI2LTE2LjI0My0xNC4yOTIgMjAuNzkxLTMyLjE2MSAzOS4zMDgtNTIuNjI4IDU0LjI1M3onIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XG5cbmludGVyZmFjZSBUcmFja1BhZ2VWaWV3UGFyYW1zIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVHJhY2tFdmVudFBhcmFtcyB7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUcmFja0Vycm9yRXZlbnRQYXJhbXMgZXh0ZW5kcyBPbWl0PFRyYWNrRXZlbnRQYXJhbXMsIFwiY2F0ZWdvcnlcIj4ge31cblxuY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSAnRy1OVFpEQ1RIRFg1J1xuXG5jbGFzcyBHQVNlcnZpY2Uge1xuICBwcml2YXRlIGVudjogXCJkZXZlbG9wbWVudFwiIHwgXCJwcm9kdWN0aW9uXCIgfCBcInRlc3RcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmICh0aGlzLmlzUHJvZHVjdGlvbikge1xuICAgICAgUmVhY3RHQS5pbml0aWFsaXplKEdBX1RSQUNLSU5HX0lEKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBpc1Byb2R1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZW52ID09PSBcInByb2R1Y3Rpb25cIjtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja1BhZ2VWaWV3KHsgcGF0aCB9OiBUcmFja1BhZ2VWaWV3UGFyYW1zKSB7XG4gICAgY29uc3QgZGVjb2RlZFBhdGggPSBkZWNvZGVVUklDb21wb25lbnQocGF0aCk7XG5cbiAgICBpZiAoIXRoaXMuaXNQcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUGFnZSBWaWV3ZWQ6ICR7ZGVjb2RlZFBhdGh9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgUmVhY3RHQS5wYWdldmlldyhkZWNvZGVkUGF0aCk7XG4gIH1cblxuICBwcml2YXRlIHRyYWNrRXZlbnQocGFyYW1zOiBUcmFja0V2ZW50UGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLmlzUHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBSZWFjdEdBLmV2ZW50KHBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tFcnJvckV2ZW50KHBhcmFtczogVHJhY2tFcnJvckV2ZW50UGFyYW1zKSB7XG4gICAgdGhpcy50cmFja0V2ZW50KHsgY2F0ZWdvcnk6IFwiRXJyb3JcIiwgLi4ucGFyYW1zIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHQSA9IG5ldyBHQVNlcnZpY2UoKTsiLCAiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgaGVyb1N0cmluZywgbmF2IH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IEhlcm8gfSBmcm9tICd+L2NvbXBvbmVudHMvSGVybydcbmltcG9ydCB7IE5hdiB9IGZyb20gJ34vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHsgQmFubmVyLCBQcm9tb3Rpb24gfSBmcm9tICd+L2NvbXBvbmVudHMvQmFubmVyJ1xuXG50eXBlIExheW91dFByb3BzID0gUm91dGUgJiB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSxcbiAgcHJvbW90aW9uPzogUHJvbW90aW9uLFxuICBwcmV2Um91dGU/OiBzdHJpbmcsXG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICBjb3Zlcj86IEpTWC5FbGVtZW50LFxuICBkYXRlPzogSlNYLkVsZW1lbnQsXG4gIGNhdGVnb3J5SWQ/OiBzdHJpbmcsXG59XG5cbnR5cGUgUm9vdExheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICBpc1Jvb3Q6IGJvb2xlYW4sXG4gIGNhdGVnb3J5SWQ/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaXRlTWV0YSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zaXRlLndlYm1hbmlmZXN0P3Y9MjAyMjAzMTMnIC8+XG4gICAgICA8bGluayByZWw9J21hc2staWNvbicgaHJlZj0nL2ltYWdlcy9zYWZhcmktcGlubmVkLXRhYi5zdmc/dj0yMDIyMDMxMycgY29sb3I9JyMyNTYzZWInIC8+XG4gICAgICA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9mYXZpY29uLmljbz92PTIwMjIwMzEzJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0JPTFQgVVgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdhcHBsaWNhdGlvbi1uYW1lJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyMyNTYzZWInIC8+XG4gICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2Y4ZmFmYycgLz5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgc3JjPSdodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qcz9jbGllbnQ9Y2EtcHViLTEzMTUyMzg4NjA3MTg1NDknXG4gICAgICAgIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSwgSWNvbiwgZGVzYywgcHJvbW90aW9uLCBwcmV2Um91dGUsIGNvdmVyLCBkYXRlIH06IExheW91dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3Jz5cbiAgICAgICAgICB7cHJldmlld0VuYWJsZWQgPyAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL3Bvc3RzL3ByZXZpZXcvc3RvcCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9wb3N0cy9wcmV2aWV3L3N0YXJ0Jz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgcHVibGlzaGVkIGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBlbnRlciBwcmV2aWV3IG1vZGUhXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPEhlYWRlciB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlLCBjb3ZlciwgZGF0ZSB9fSAvPlxuICAgICAge3Byb21vdGlvbiAmJiA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzJz57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24gZmxleCBtZDpoaWRkZW4nPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoeyBpc1Jvb3QsIGNoaWxkcmVuLCBwYXRobmFtZSB9OiBSb290TGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtc2VjdGlvbiAke2lzUm9vdCA/ICcnIDogJ2hpZGRlbiBtZDpmbGV4J31gfT5cbiAgICAgICAgPEhlcm9cbiAgICAgICAgICBoZXJvU3RyaW5nPXtoZXJvU3RyaW5nfVxuICAgICAgICAgIGRlc2M9J1x1QjM1NCBcdUIwOThcdUM3NDAgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QUNCRFx1RDVEOFx1Qzc0NCBcdUMwRERcdUFDMDFcdUQ1NThcdUJBNzAgXHVBRjNDXHVBRjNDXHVENTU4XHVBQzhDIFx1QjlDQ1x1QjRFNFx1QzVCNCBcdUI0RENcdUI4MjRcdUM2OTQuJ1xuICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICB7IHVybDogJy9jb250YWN0JywgbGFiZWw6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6ICcvcGxhbicsXG4gICAgICAgICAgICAgIGxhYmVsOiAnXHVDNjk0XHVBRTA4XHVENDVDIFx1RDY1NVx1Qzc3OCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxOYXYgey4uLnsgbmF2LCBwYXRobmFtZSB9fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNSb290ID8gJ3B4LTMgbWQ6cHgtMCcgOiAnJ31gfT5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7XG4gIHRpdGxlLFxuICBJY29uLFxuICBkZXNjLFxuICBwcmV2Um91dGUsXG4gIGNvdmVyLFxuICBkYXRlLFxufTogUm91dGUgJiB7IHByZXZSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBjb3Zlcj86IEpTWC5FbGVtZW50LCBkYXRlPzogSlNYLkVsZW1lbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1uYXYnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWhvbWUnPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29ucy5Ib21lTGlnaHQgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWxvZ28nPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29ucy5Mb2dvIGNsYXNzTmFtZT0ndy0xNiBoLTEwJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtc2V0dGluZ3MnPlxuICAgICAgICAgIDxMaW5rIHRvPScvc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEljb25zLlNldHRpbmdzTGlnaHQgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXNlY3Rpb24nPlxuICAgICAgICB7Y292ZXIgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWNvdmVyJz57Y292ZXJ9PC9kaXY+fVxuICAgICAgICB7cHJldlJvdXRlICYmIHByZXZSb3V0ZSAhPT0gJy8nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWhpc3RvcnktYmFjayc+XG4gICAgICAgICAgICA8QnV0dG9uIGhyZWY9e3ByZXZSb3V0ZX0gaWNvbj17PEljb25zLkFycm93TGVmdExpZ2h0IC8+fT48L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLW1ldGEnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci10aXRsZSc+XG4gICAgICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyc+e2Rlc2N9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWRlc2MnPntkYXRlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItaWNvbic+e0ljb24gJiYgdHlwZW9mIEljb24gPT09ICdmdW5jdGlvbicgPyA8SWNvbiAvPiA6IEljb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxudHlwZSBCdXR0b25Qcm9wcyA9IHtcbiAgaWNvbj86IFJlYWN0RWxlbWVudCB8IEVsZW1lbnQgfCBzdHJpbmcsXG4gIGhyZWY/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10gfCBFbGVtZW50IHwgRWxlbWVudFtdIHwgc3RyaW5nLFxuICBzaXplPzogJ3NtYWxsJyB8ICdkZWZhdWx0JyB8ICdsYXJnZScsXG4gIHR5cGU/OiAnc3VibWl0JyB8ICdidXR0b24nLFxuICBvbkNsaWNrPzogKCkgPT4gdm9pZCxcbn1cblxudHlwZSBCdXR0b25Hcm91cFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10gfCBzdHJpbmcsXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuY29uc3Qgc2l6ZXMgPSB7XG4gIG1pbldpZHRoOiB7XG4gICAgc21hbGw6ICdtaW4tdy1bMjRweF0nLFxuICAgIGRlZmF1bHQ6ICdtaW4tdy1bMzJweF0nLFxuICAgIGxhcmdlOiAnbWluLXctWzQwcHhdJyxcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgc21hbGw6ICdoLTYnLFxuICAgIGRlZmF1bHQ6ICdoLTgnLFxuICAgIGxhcmdlOiAnaC0xMCcsXG4gIH0sXG4gIGljb25TaXplOiB7XG4gICAgc21hbGw6ICd3LTMgaC0zJyxcbiAgICBkZWZhdWx0OiAndy00IGgtNCcsXG4gICAgbGFyZ2U6ICd3LTYgaC02JyxcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBzbWFsbDogJ3RleHQteHMnLFxuICAgIGRlZmF1bHQ6ICd0ZXh0LXNtJyxcbiAgICBsYXJnZTogJ3RleHQtYmFzZScsXG4gIH0sXG4gIGdhcDoge1xuICAgIHNtYWxsOiAnZ2FwLXgtMScsXG4gICAgZGVmYXVsdDogJ2dhcC14LTInLFxuICAgIGxhcmdlOiAnZ2FwLXgtMycsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlID0gJ2J1dHRvbicsIHNpemUgPSAnZGVmYXVsdCcsIGhyZWYsIG9uQ2xpY2ssIGljb24sIGNoaWxkcmVuIH06IEJ1dHRvblByb3BzKSB7XG4gIHJldHVybiBocmVmID8gKFxuICAgIDxMaW5rIGtleT17aHJlZn0gdG89e2hyZWZ9PlxuICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX0gJHtzaXplcy5nYXBbc2l6ZV19YH0+XG4gICAgICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWljb24gJHtzaXplcy5pY29uU2l6ZVtzaXplXX1gfT57aWNvbn08L3NwYW4+fVxuICAgICAgICAgIHtjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi10ZXh0Jz57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICkgOiBvbkNsaWNrID8gKFxuICAgIDxidXR0b24gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtgYngtYnV0dG9uICR7c2l6ZXMuaGVpZ2h0W3NpemVdfSAke3NpemVzLm1pbldpZHRoW3NpemVdfX1gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfSAke3NpemVzLmdhcFtzaXplXX1gfT5cbiAgICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWljb24gJHtzaXplcy5pY29uU2l6ZVtzaXplXX1gfT57aWNvbn08L3NwYW4+fVxuICAgICAgICB7Y2hpbGRyZW4gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tdGV4dCc+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICkgOiAoXG4gICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWxhYmVsICR7c2l6ZXMuZm9udFNpemVbc2l6ZV19ICR7c2l6ZXMuZ2FwW3NpemVdfWB9PlxuICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24taWNvbiAke3NpemVzLmljb25TaXplW3NpemVdfWB9PntpY29ufTwvc3Bhbj59XG4gICAgICAgIHtjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi10ZXh0Jz57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uR3JvdXAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH06IEJ1dHRvbkdyb3VwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1ncm91cCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgSGVyb1N0cmluZyB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgSGVyb1Byb3BzID0ge1xuICBoZXJvU3RyaW5nOiBIZXJvU3RyaW5nLFxuICBkZXNjPzogc3RyaW5nLFxuICBsaW5rcz86IHsgdXJsPzogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBoYW5kbGVyPzogKCkgPT4gdm9pZCB8IHVuZGVmaW5lZCB9W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZXJvKHsgaGVyb1N0cmluZyA9IFtbJycsICcnXV0sIGRlc2MsIGxpbmtzIH06IEhlcm9Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvLWxvZ28nPlxuICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgPEljb24uTG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIHtoZXJvU3RyaW5nLm1hcChoZWFkaW5nID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmdbMF19XG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGdhcC14LTAuNSB0ZXh0LTJ4bCBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0yMDAgZXZlbjptbC01J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+e2hlYWRpbmdbMF19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXRoaW4nPntoZWFkaW5nWzFdfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZXNjICYmIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBtYXgtdy1bMjAwcHhdIHRleHQteHMgbXQtMyB0ZXh0LWNlbnRlcic+e2Rlc2N9PC9kaXY+fVxuICAgICAge2xpbmtzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbGlua3MnPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+XG4gICAgICAgICAgICAgIGxpbmsudXJsID8gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLnVybH0gaHJlZj17bGluay51cmx9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLmxhYmVsfSBvbkNsaWNrPXtsaW5rLmhhbmRsZXJ9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgTmF2UHJvcHMgPSB7XG4gIG5hdj86IFJvdXRlc1tdLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgY2F0ZWdvcnlJZD86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdih7IG5hdiwgcGF0aG5hbWUsIGNhdGVnb3J5SWQgfTogTmF2UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPSdieC1uYXYnPlxuICAgICAge25hdiA/IChcbiAgICAgICAgbmF2XG4gICAgICAgICAgLmZpbHRlcihuID0+IG4uZGlzcGxheSlcbiAgICAgICAgICAubWFwKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17bmF2SXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYngtbmF2LWNhdGVnb3J5Jz57bmF2SXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIHtuYXZJdGVtPy5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC1uYXYtY2hpbGRyZW4nPlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobiA9PiBuLmRpc3BsYXkpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChuYXZTdWJJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hdlN1Ykl0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtLnBhdGhuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYngtbmF2LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF0aG5hbWUgJiYgcGF0aG5hbWUgIT09ICcvJyAmJiBwYXRobmFtZS5pbmRleE9mKG5hdlN1Ykl0ZW0ucGF0aG5hbWUpICE9PSAtMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZTdWJJdGVtLnBhdGhuYW1lID09PSBjYXRlZ29yeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdieC1uYXYtaXRlbS1hY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17bmF2U3ViSXRlbS5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/Lkljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBuYXZTdWJJdGVtLkljb24gPT09ICdmdW5jdGlvbicgJiYgPG5hdlN1Ykl0ZW0uSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1uYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1hcnJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24uQXJyb3dSaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uSWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIG5hdlN1Ykl0ZW0uSWNvbiA9PT0gJ2Z1bmN0aW9uJyAmJiA8bmF2U3ViSXRlbS5JY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPntuYXZTdWJJdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uZGVzYyAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1kZXNjJz57bmF2U3ViSXRlbS5kZXNjfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8bGk+XHVCNEYxXHVCODVEXHVCNDFDIFx1Qjc3Q1x1QzZCMFx1RDJCOCBcdUJBQTlcdUI4NURcdUM3NzQgXHVDODc0XHVDN0FDXHVENTU4XHVDOUMwIFx1QzU0QVx1QzJCNVx1QjJDOFx1QjJFNC48L2xpPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0Jz5cbiAgICAgICAgPGEgaHJlZj0ndGVsOjE1ODg5OTk5Jz4xNTg4LTk5OTk8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItY29udGFjdC1kZXNjJz5cbiAgICAgICAgICBcdUQzQzlcdUM3N0MgMTA6MDAgLSAxODowMFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIChcdUM4MTBcdUMyRUNcdUMyRENcdUFDMDQgMTM6MDAgLSAxNDowMCBcdUM4MUNcdUM2NzggXHUwMEI3IFx1QzhGQ1x1QjlEMC9cdUFDRjVcdUQ3MzRcdUM3N0MgXHVDODFDXHVDNjc4KVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nYngtZm9vdGVyLXNucyc+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9kZWVycGFyazgyMTAnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdZb3VUdWJlJz5cbiAgICAgICAgICAgIDxJY29uLllvdXR1YmUgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy50d2l0dGVyLmNvbS9kZWVycGFyazcnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdUd2l0dGVyJz5cbiAgICAgICAgICAgIDxJY29uLlR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RlZXJwYXJrJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nSW5zdGFncmFtJz5cbiAgICAgICAgICAgIDxJY29uLkluc3RhZ3JhbSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcblxuZXhwb3J0IHR5cGUgUHJvbW90aW9uID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICB1cmw/OiBzdHJpbmcsXG4gIGxhYmVsPzogc3RyaW5nLFxuICBjb2xvcjoge1xuICAgIHJlZDogbnVtYmVyLFxuICAgIGJsdWU6IG51bWJlcixcbiAgICBncmVlbjogbnVtYmVyLFxuICB9LFxuICB0ZXh0Y29sb3I6IHtcbiAgICBoZXg6IHN0cmluZyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhbm5lcih7IHRpdGxlLCB1cmwsIGNvbG9yOiB7IHJlZCwgYmx1ZSwgZ3JlZW4gfSwgdGV4dGNvbG9yOiB7IGhleCB9LCBsYWJlbCB9OiBQcm9tb3Rpb24pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyJyBzdHlsZT17e1xuICAgICAgJ2JhY2tncm91bmRDb2xvcic6IGByZ2IoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSlgLFxuICAgICAgJy0tdHctc2hhZG93LWNvbG9yJzogYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgLjUpYCxcbiAgICAgICctLXR3LXNoYWRvdyc6ICd2YXIoLS10dy1zaGFkb3ctY29sb3JlZCknLFxuICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLWljb24nPlxuICAgICAgICA8SWNvbi5CYW5uZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lci10aXRsZSc+PHNwYW4+e3RpdGxlfTwvc3Bhbj48L2Rpdj5cbiAgICAgIHt1cmwgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lci1saW5rJz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgaHJlZj17dXJsfT57bGFiZWwgfHwgJ1x1QkMxNFx1Qjg1Q1x1QUMwMFx1QUUzMCd9PC9CdXR0b24+XG4gICAgICA8L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnNldCgncHJldmlldycsICd5ZXMnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnVuc2V0KCdwcmV2aWV3JylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgLyogTGluaywgKi8gdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QsIC8qIG1vcmVQb3N0cywgKi8gcHJvbW90aW9uIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJvbW90aW9uLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3Qgey4uLnsgcG9zdCB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAidHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwaWN0dXJlOiB7XG4gICAgdXJsPzogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17cGljdHVyZS51cmx9IGNsYXNzTmFtZT0nYXZhdGFyX19waWN0dXJlJyBhbHQ9e25hbWV9IC8+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fbmFtZSc+e25hbWV9PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG50eXBlIERhdGVQcm9wcyA9IHtcbiAgZGF0ZVN0cmluZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfTogRGF0ZVByb3BzKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX08L3RpbWU+XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IFBvc3RzUHJvcHMgfSBmcm9tICd+L3R5cGVzJ1xuXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzL1Bvc3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0cyh7IGZpcnN0UG9zdCwgb3RoZXJQb3N0cywgY2F0ZWdvcnkgfTogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2J4LXBvc3QgYXNwZWN0LXZpZGVvJz5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgJ3Bvc3RzJ30vJHtmaXJzdFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdieC1wb3N0LXRodW1iJyBkYXRhPXtmaXJzdFBvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaW5mbyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1tZXRhJz5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nYngtcG9zdC10aXRsZSc+e2ZpcnN0UG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kYXRlJz5cbiAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtmaXJzdFBvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWF2YXRhcic+XG4gICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17Zmlyc3RQb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtmaXJzdFBvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LXBvc3QtYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nYngtb3RoZXItcG9zdHMnPlxuICAgICAgICB7b3RoZXJQb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2J4LXBvc3QgYXNwZWN0LXZpZGVvJz5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgJ3Bvc3RzJ30vJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYicgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1pbmZvJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LW1ldGEnPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57cG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LXBvc3QtYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFN0cnVjdHVyZWRUZXh0LCBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBQb3N0IGFzIFBvc3RUeXBlIH0gZnJvbSAnfi90eXBlcydcblxudHlwZSBQb3N0UHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlLFxuICBtb3JlUG9zdHM/OiBQb3N0VHlwZVtdLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgLyogLCBtb3JlUG9zdHMgICovIH06IFBvc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYXJ0aWNsZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1hcnRpY2xlLWJvZHknPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9zZSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgICAgICA8U3RydWN0dXJlZFRleHRcbiAgICAgICAgICAgICAgZGF0YT17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICByZW5kZXJCbG9jaz17KHsgcmVjb3JkIH06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuX190eXBlbmFtZSA9PT0gJ0ltYWdlQmxvY2tSZWNvcmQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT0nYngtYXJ0aWNsZS1pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3Qga25vdyBob3cgdG8gcmVuZGVyIGEgYmxvY2shPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl9fdGl0bGUnPk1vcmUgcG9zdHM8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAge21vcmVQb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9J2dyaWRfX2l0ZW0nPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9J2dyaWRfX2xpbmsnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZ3JpZF9fdGl0bGUnPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGF0ZSc+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG5vdGljZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5OiAnbm90aWNlJyB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi51bnNldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IC8qIExpbmssICovIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0LCAvKiBtb3JlUG9zdHMsICovIHByb21vdGlvbiB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgey4uLntcbiAgICAgICAgdGl0bGU6IHBvc3Q/LnRpdGxlIHx8IHRpdGxlLFxuICAgICAgICBJY29uOiA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+LFxuICAgICAgICBkZXNjOiBwb3N0Py5leGNlcnB0IHx8IGRlc2MsXG4gICAgICAgIHByb21vdGlvbixcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0cyBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMgfX0gLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgLyogTGluaywgKi8gdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QsIC8qIG1vcmVQb3N0cywgKi8gcHJvbW90aW9uIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJvbW90aW9uLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3Qgey4uLnsgcG9zdCB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG5ld3MgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUgfX0+XG4gICAgICA8UG9zdHMgey4uLnsgZmlyc3RQb3N0LCBvdGhlclBvc3RzLCBjYXRlZ29yeTogJ25ld3MnIH19IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24tcm93Jz48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyc+PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcHJpdmFjeSBwcm9zZS1zbSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyIGxoNiBiczUgdHM0Jz5cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7KCdodHRwczovL3d3dy5ib2x0LXV4LmNvbSdcdUM3NzRcdUQ1NTggJ0JPTFQtVVgnKTwvZW0+XHVDNzQwKFx1QjI5NCkgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XG4gICAgICAgICAgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzMwXHVDODcwXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNGNFx1RDYzOFx1RDU1OFx1QUNFMCBcdUM3NzRcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUNFMFx1Q0RBOVx1Qzc0NCBcdUMyRTBcdUMxOERcdUQ1NThcdUFDRTAgXHVDNkQwXHVENjVDXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1RDU2MCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEXG4gICAgICAgICAgXHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDQgXHVDMjE4XHVCOUJEXHUwMEI3XHVBQ0Y1XHVBQzFDXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICBcdTI1Q0IgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MjAyMjwvZW0+XHVCMTQ0IDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4zPC9lbT5cdUM2RDR7JyAnfVxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4xNzwvZW0+XHVCRDgwXHVEMTMwIFx1QzgwMVx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzFcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQyBcdUJBQTlcdUM4MDEpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OygnaHR0cHM6Ly93d3cuYm9sdC11eC5jb20nXHVDNzc0XHVENTU4ICdCT0xULVVYJyk8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUJBQTlcdUM4MDFcdUM3NDRcbiAgICAgICAgICBcdUM3MDRcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU2OVx1QjJDOFx1QjJFNC4gXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUIyOTQgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QkFBOVx1QzgwMSBcdUM3NzRcdUM2NzhcdUM3NTggXHVDNkE5XHVCM0M0XHVCODVDXHVCMjk0IFx1Qzc3NFx1QzZBOVx1QjQxOFx1QzlDMCBcdUM1NEFcdUM3M0NcdUJBNzAgXHVDNzc0XHVDNkE5IFx1QkFBOVx1QzgwMVx1Qzc3NFxuICAgICAgICAgIFx1QkNDMFx1QUNCRFx1QjQxOFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMxOFx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVCQ0M0XHVCM0M0XHVDNzU4IFx1QjNEOVx1Qzc1OFx1Qjk3QyBcdUJDMUJcdUIyOTQgXHVCNEYxIFx1RDU0NFx1QzY5NFx1RDU1QyBcdUM4NzBcdUNFNThcdUI5N0MgXHVDNzc0XHVENTg5XHVENTYwIFx1QzYwOFx1QzgxNVx1Qzc4NVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4xLiBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1Q0Y1OFx1RDE1MFx1Q0UyMCBcdUM4MUNcdUFDRjUsIFx1QjlERVx1Q0RBNFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4yLiBcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTk8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgICAgXHVDNzc4XHVBRDZDXHVEMUI1XHVBQ0M0XHVENTU5XHVDODAxIFx1RDJCOVx1QzEzMVx1QzVEMCBcdUI1MzBcdUI5NzggXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSBcdUJDMEYgXHVBRDExXHVBQ0UwIFx1QUM4Q1x1QzdBQyAsIFx1QzExQ1x1QkU0NFx1QzJBNFx1Qzc1OCBcdUM3MjBcdUQ2QThcdUMxMzEgXHVENjU1XHVDNzc4LCBcdUM4MTFcdUMxOERcdUJFNDhcdUIzQzQgXHVEMzBDXHVDNTQ1IFx1QjYxMFx1QjI5NCBcdUQ2OENcdUM2RDBcdUM3NTggXHVDMTFDXHVCRTQ0XHVDMkE0XG4gICAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM1RDAgXHVCMzAwXHVENTVDIFx1RDFCNVx1QUNDNCBcdUI0RjFcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMyXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUMgXHVCQzBGIFx1QkNGNFx1QzcyMCBcdUFFMzBcdUFDMDQpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDs8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QkM5NVx1QjgzOVx1QzVEMCBcdUI1MzBcdUI5NzggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1MDBCN1x1Qzc3NFx1QzZBOVx1QUUzMFx1QUMwNCBcdUI2MTBcdUIyOTRcbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUI4NUNcdUJEODBcdUQxMzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzIxOFx1QzlEMSBcdUMyRENcdUM1RDAgXHVCM0Q5XHVDNzU4XHVCQzFCXHVDNzQwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdTAwQjdcdUM3NzRcdUM2QTlcdUFFMzBcdUFDMDQgXHVCMEI0XHVDNUQwXHVDMTFDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdTAwQjdcdUJDRjRcdUM3MjBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QUMwMVx1QUMwMVx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUJDRjRcdUM3MjAgXHVBRTMwXHVBQzA0XHVDNzQwIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+MS4mbHQ7XHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5Jmd0OzwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlxuICAgICAgICAgICAgJmx0O1x1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOSZndDtcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QjI5NCBcdUMyMThcdUM5RDEuXHVDNzc0XHVDNkE5XHVDNUQwIFx1QUQwMFx1RDU1QyBcdUIzRDlcdUM3NThcdUM3N0NcdUI4NUNcdUJEODBcdUQxMzAmbHQ7XHVDOUMwXHVDQ0I0XHVDNUM2XHVDNzc0IFx1RDMwQ1x1QUUzMCZndDtcdUFFNENcdUM5QzBcbiAgICAgICAgICAgIFx1QzcwNCBcdUM3NzRcdUM2QTlcdUJBQTlcdUM4MDFcdUM3NDQgXHVDNzA0XHVENTU4XHVDNUVDIFx1QkNGNFx1QzcyMC5cdUM3NzRcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XHVCQ0Y0XHVDNzIwXHVBREZDXHVBQzcwIDogXHVBRDExXHVBQ0UwPC9saT5cbiAgICAgICAgICA8bGk+XHVBRDAwXHVCODI4XHVCQzk1XHVCODM5IDogXHVENDVDXHVDMkRDL1x1QUQxMVx1QUNFMFx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVBRTMwXHVCODVEIDogNlx1QUMxQ1x1QzZENDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzYwOFx1QzY3OFx1QzBBQ1x1QzcyMCA6IDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzNcdUM4NzAoXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNjQwIFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc1OCBcdUFEOENcdUI5QUNcdTAwQjdcdUM3NThcdUJCMzQgXHVCQzBGIFx1QURGOCBcdUQ1ODlcdUMwQUNcdUJDMjlcdUJDOTUpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM1QjhcdUM4MUNcdUI0RTBcdUM5QzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1MDBCN1x1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1MDBCN1x1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUM2OTRcdUFENkMgXHVCNEYxXHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1Qjk3QyBcdUQ1ODlcdUMwQUNcdUQ1NjAgXHVDMjE4XG4gICAgICAgICAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MSBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFEOENcdUI5QUMgXHVENTg5XHVDMEFDXHVCMjk0ICZsdDtCT0xULVVYJmd0O1x1QzVEMCBcdUIzMDBcdUQ1NzQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUMyRENcdUQ1ODlcdUI4MzkgXHVDODFDNDFcdUM4NzBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUMxMUNcdUJBNzQsXG4gICAgICAgICAgXHVDODA0XHVDNzkwXHVDNkIwXHVEM0I4LCBcdUJBQThcdUMwQUNcdUM4MDRcdUMxQTEoRkFYKSBcdUI0RjFcdUM3NDQgXHVEMUI1XHVENTU4XHVDNUVDIFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDNzNDXHVCQTcwICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1Qzc3NFx1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDOUMwXHVDQ0I0IFx1QzVDNlx1Qzc3NCBcdUM4NzBcdUNFNThcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDYyIFx1QzgxQzFcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUQ4Q1x1QjlBQyBcdUQ1ODlcdUMwQUNcdUIyOTQgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3NFx1QjA5OCBcdUM3MDRcdUM3ODRcdUM3NDQgXHVCQzFCXHVDNzQwIFx1Qzc5MCBcdUI0RjEgXHVCMzAwXHVCOUFDXHVDNzc4XHVDNzQ0IFx1RDFCNVx1RDU1OFx1QzVFQyBcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cdUM3NzRcbiAgICAgICAgICBcdUFDQkRcdUM2QjAgXHUyMDFDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQyBcdUJDMjlcdUJDOTVcdUM1RDAgXHVBRDAwXHVENTVDIFx1QUNFMFx1QzJEQyhcdUM4MUMyMDIwLTdcdUQ2MzgpXHUyMDFEIFx1QkNDNFx1QzlDMCBcdUM4MUMxMVx1RDYzOCBcdUMxMUNcdUMyRERcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzcwNFx1Qzc4NFx1QzdBNVx1Qzc0NCBcdUM4MUNcdUNEOUNcdUQ1NThcdUMxNTRcdUM1N0MgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDIFx1QkMwRiBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVDNjk0XHVBRDZDXHVCMjk0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMzVcdUM4NzAgXHVDODFDNFx1RDU2RCwgXHVDODFDMzdcdUM4NzAgXHVDODFDMlx1RDU2RFx1QzVEMCBcdUM3NThcdUQ1NThcdUM1RUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1QUMwMFxuICAgICAgICAgIFx1QzgxQ1x1RDU1QyBcdUI0MjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzgxNVx1QzgxNSBcdUJDMEYgXHVDMEFEXHVDODFDIFx1QzY5NFx1QUQ2Q1x1QjI5NCBcdUIyRTRcdUI5NzggXHVCQzk1XHVCODM5XHVDNUQwXHVDMTFDIFx1QURGOCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVDMjE4XHVDOUQxIFx1QjMwMFx1QzBDMVx1QzczQ1x1Qjg1QyBcdUJBODVcdUMyRENcdUI0MThcdUM1QjQgXHVDNzg4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCBcdUFERjggXHVDMEFEXHVDODFDXHVCOTdDXG4gICAgICAgICAgXHVDNjk0XHVBRDZDXHVENTYwIFx1QzIxOCBcdUM1QzZcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDY1ICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNCBcdUFEOENcdUI5QUNcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzVGNFx1Qjc4Q1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMFx1Qzc1OCBcdUM2OTRcdUFENkMgXHVDMkRDIFx1QzVGNFx1Qjc4QyBcdUI0RjEgXHVDNjk0XHVBRDZDXHVCOTdDXG4gICAgICAgICAgXHVENTVDIFx1Qzc5MFx1QUMwMCBcdUJDRjhcdUM3NzhcdUM3NzRcdUFDNzBcdUIwOTggXHVDODE1XHVCMkY5XHVENTVDIFx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3OFx1QzlDMFx1Qjk3QyBcdUQ2NTVcdUM3NzhcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNFx1Qzg3MChcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1RDU2RFx1QkFBOSBcdUM3OTFcdUMxMzEpIDwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPiBcdTI0NjAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OzwvZW0+XHVDNzQwKFx1QjI5NCkgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQ1NkRcdUJBQTlcdUM3NDQgXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz4xJmx0OyBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUgJmd0OzwvbGk+XG4gICAgICAgICAgPGxpPlx1RDU0NFx1QzIxOFx1RDU2RFx1QkFBOSA6IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTkgXHVBRTMwXHVCODVELCBcdUM4MTFcdUMxOEQgXHVCODVDXHVBREY4LCBcdUNGRTBcdUQwQTQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMjBcdUQwRERcdUQ1NkRcdUJBQTkgOiBcdUM4MTFcdUMxOEQgSVAgXHVDODE1XHVCQ0Y0PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVEMzBDXHVBRTMwKTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdUFFMzBcdUFDMDRcdUM3NTggXHVBQ0JEXHVBQ0ZDLCBcdUNDOThcdUI5QUNcdUJBQTlcdUM4MDEgXHVCMkVDXHVDMTMxIFx1QjRGMSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVCRDg4XHVENTQ0XHVDNjk0XHVENTU4XHVBQzhDIFx1QjQxOFx1QzVDOFx1Qzc0NCBcdUI1NENcdUM1RDBcdUIyOTRcbiAgICAgICAgICBcdUM5QzBcdUNDQjRcdUM1QzZcdUM3NzQgXHVENTc0XHVCMkY5IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUQzMENcdUFFMzBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUIzRDlcdUM3NThcdUJDMUJcdUM3NDAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1QUUzMFx1QUMwNFx1Qzc3NCBcdUFDQkRcdUFDRkNcdUQ1NThcdUFDNzBcdUIwOTggXHVDQzk4XHVCOUFDXHVCQUE5XHVDODAxXHVDNzc0IFx1QjJFQ1x1QzEzMVx1QjQxOFx1QzVDOFx1Qzc0Q1x1QzVEMFx1QjNDNCBcdUJEODhcdUFENkNcdUQ1NThcdUFDRTAgXHVCMkU0XHVCOTc4IFx1QkM5NVx1QjgzOVx1QzVEMFxuICAgICAgICAgIFx1QjUzMFx1Qjc3QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBQ0M0XHVDMThEIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QzVFQ1x1QzU3QyBcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0LCBcdUQ1NzRcdUIyRjkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNDNFx1QjNDNFx1Qzc1OCBcdUIzNzBcdUM3NzRcdUQxMzBcdUJDQTBcdUM3NzRcdUMyQTQoREIpXHVCODVDIFx1QzYyRVx1QUUzMFx1QUM3MFx1QjA5OCBcdUJDRjRcdUFEMDBcdUM3QTVcdUMxOENcdUI5N0NcbiAgICAgICAgICBcdUIyRUNcdUI5QUNcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDODc0XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1QkM5NVx1QjgzOSBcdUFERkNcdUFDNzAgOjxiciAvPlxuICAgICAgICAgIDIuIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVENTZEXHVCQUE5IDogXHVBQ0M0XHVDODhDXHVDODE1XHVCQ0Y0LCBcdUFDNzBcdUI3OThcdUIwQTBcdUM5RENcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjIgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDMwQ1x1QUUzMFx1Qzc1OCBcdUM4MDhcdUNDMjggXHVCQzBGIFx1QkMyOVx1QkM5NVx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1RDMwQ1x1QUUzMFx1QzgwOFx1Q0MyOFxuICAgICAgICAgIDxiciAvPiAmbHQ7IEJMVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVEMzBDXHVBRTMwIFx1QzBBQ1x1QzcyMFx1QUMwMCBcdUJDMUNcdUMwRERcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzEyMFx1QzgxNVx1RDU1OFx1QUNFMCwgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVDNzU4XG4gICAgICAgICAgXHVDMkI5XHVDNzc4XHVDNzQ0IFx1QkMxQlx1QzU0NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVEMzBDXHVBRTMwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPjIuIFx1RDMwQ1x1QUUzMFx1QkMyOVx1QkM5NTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHVDODA0XHVDNzkwXHVDODAxIFx1RDMwQ1x1Qzc3QyBcdUQ2MTVcdUQwRENcdUM3NTggXHVDODE1XHVCQ0Y0XHVCMjk0IFx1QUUzMFx1Qjg1RFx1Qzc0NCBcdUM3QUNcdUMwRERcdUQ1NjAgXHVDMjE4IFx1QzVDNlx1QjI5NCBcdUFFMzBcdUMyMjBcdUM4MDEgXHVCQzI5XHVCQzk1XHVDNzQ0IFx1QzBBQ1x1QzZBOVx1RDU2OVx1QjJDOFx1QjJFNDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICBcdUM4MUM2XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1NDhcdUM4MDRcdUMxMzEgXHVENjU1XHVCQ0Y0IFx1Qzg3MFx1Q0U1OClcbiAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAmbHQ7IEJMVC1VWCZndDtcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNTQ4XHVDODA0XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc0MCBcdUM4NzBcdUNFNThcdUI5N0MgXHVDREU4XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz5cbiAgICAgICAgICAxLiBcdUM4MTVcdUFFMzBcdUM4MDFcdUM3NzggXHVDNzkwXHVDQ0I0IFx1QUMxMFx1QzBBQyBcdUMyRTRcdUMyRENcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUFEMDBcdUI4MjggXHVDNTQ4XHVDODE1XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVDODE1XHVBRTMwXHVDODAxKFx1QkQ4NFx1QUUzMCAxXHVENjhDKVx1QzczQ1x1Qjg1QyBcdUM3OTBcdUNDQjQgXHVBQzEwXHVDMEFDXHVCOTdDIFx1QzJFNFx1QzJEQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMi4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUM5QzFcdUM2RDBcdUM3NTggXHVDRDVDXHVDMThDXHVENjU0IFx1QkMwRiBcdUFENTBcdUM3MjFcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0RFOFx1QUUwOVx1RDU1OFx1QjI5NCBcdUM5QzFcdUM2RDBcdUM3NDQgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1QjJGNFx1QjJGOVx1Qzc5MFx1QzVEMCBcdUQ1NUNcdUM4MTVcdUMyRENcdUNGMUMgXHVDRDVDXHVDMThDXHVENjU0IFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBRDAwXHVCOUFDXHVENTU4XHVCMjk0IFx1QjMwMFx1Q0M0NVx1Qzc0NCBcdUMyRENcdUQ1ODlcdUQ1NThcdUFDRTBcbiAgICAgICAgICBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMy4gXHVENTc0XHVEMEI5IFx1QjRGMVx1QzVEMCBcdUIzMDBcdUJFNDRcdUQ1NUMgXHVBRTMwXHVDMjIwXHVDODAxIFx1QjMwMFx1Q0M0NVxuICAgICAgICAgIDxiciAvPiAmbHQ7PGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPkJPTFQtVVg8L2VtPiZndDsoJzxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5CT0xULVVYPC9lbT4nKVx1Qzc0MCBcdUQ1NzRcdUQwQjlcdUM3NzRcdUIwOThcbiAgICAgICAgICBcdUNFRjRcdUQ0RThcdUQxMzAgXHVCQzE0XHVDNzc0XHVCN0VDXHVDMkE0IFx1QjRGMVx1QzVEMCBcdUM3NThcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzcyMFx1Q0Q5QyBcdUJDMEYgXHVENkZDXHVDMTkwXHVDNzQ0IFx1QjlDOVx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDNTQ4XHVENTA0XHVCODVDXHVBREY4XHVCN0E4XHVDNzQ0IFx1QzEyNFx1Q0U1OFx1RDU1OFx1QUNFMCBcdUM4RkNcdUFFMzBcdUM4MDFcdUM3NzggXHVBQzMxXHVDMkUwXHUwMEI3XHVDODEwXHVBQzgwXHVDNzQ0XG4gICAgICAgICAgXHVENTU4XHVCQTcwIFx1QzY3OFx1QkQ4MFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUM4MTFcdUFERkNcdUM3NzQgXHVEMUI1XHVDODFDXHVCNDFDIFx1QUQ2Q1x1QzVFRFx1QzVEMCBcdUMyRENcdUMyQTRcdUQxNUNcdUM3NDQgXHVDMTI0XHVDRTU4XHVENTU4XHVBQ0UwIFx1QUUzMFx1QzIyMFx1QzgwMS9cdUJCM0NcdUI5QUNcdUM4MDFcdUM3M0NcdUI4NUMgXHVBQzEwXHVDMkRDIFx1QkMwRiBcdUNDMjhcdUIyRThcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDQuIFx1QzgxMVx1QzE4RFx1QUUzMFx1Qjg1RFx1Qzc1OCBcdUJDRjRcdUFEMDAgXHVCQzBGIFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMjlcdUM5QzBcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDQzk4XHVCOUFDXHVDMkRDXHVDMkE0XHVEMTVDXHVDNUQwIFx1QzgxMVx1QzE4RFx1RDU1QyBcdUFFMzBcdUI4NURcdUM3NDQgXHVDRDVDXHVDMThDIDFcdUIxNDQgXHVDNzc0XHVDMEMxIFx1QkNGNFx1QUQwMCwgXHVBRDAwXHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzczQ1x1QkE3MCxcdUIyRTRcdUI5Q0MsIDVcdUI5Q0NcdUJBODUgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QzVEMFxuICAgICAgICAgIFx1QUQwMFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDRDk0XHVBQzAwXHVENTU4XHVBQzcwXHVCMDk4LCBcdUFDRTBcdUM3MjBcdUMyRERcdUJDQzRcdUM4MTVcdUJDRjQgXHVCNjEwXHVCMjk0IFx1QkJGQ1x1QUMxMFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IDJcdUIxNDRcdUM3NzRcdUMwQzEgXHVCQ0Y0XHVBRDAwLCBcdUFEMDBcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QjYxMFx1RDU1QywgXHVDODExXHVDMThEXHVBRTMwXHVCODVEXHVDNzc0IFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMEYgXHVCM0M0XHVCMDlDLCBcdUJEODRcdUMyRTRcdUI0MThcdUM5QzAgXHVDNTRBXHVCM0M0XHVCODVEIFx1QkNGNFx1QzU0OFx1QUUzMFx1QjJBNVx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Qzc5MFx1QjNEOSBcdUMyMThcdUM5RDEgXHVDN0E1XHVDRTU4XHVDNzU4IFx1QzEyNFx1Q0U1OFx1MjAyMlx1QzZCNFx1QzYwMSBcdUJDMEYgXHVBQzcwXHVCRDgwXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkQpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCAmbHQ7Qk9MVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNUQwXHVBQzhDIFx1QUMxQ1x1QkNDNFx1QzgwMVx1Qzc3OCBcdUI5REVcdUNEQTRcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0MgXHVDODFDXHVBQ0Y1XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU3NCBcdUM3NzRcdUM2QTlcdUM4MTVcdUJDRjRcdUI5N0MgXHVDODAwXHVDN0E1XHVENTU4XHVBQ0UwIFx1QzIxOFx1QzJEQ1x1Qjg1Q1xuICAgICAgICAgIFx1QkQ4OFx1QjdFQ1x1QzYyNFx1QjI5NCBcdTIwMThcdUNGRTBcdUQwQTQoY29va2llKVx1MjAxOVx1Qjk3QyBcdUMwQUNcdUM2QTlcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1Q0ZFMFx1RDBBNFx1QjI5NCBcdUM2RjlcdUMwQUNcdUM3NzRcdUQyQjhcdUI5N0MgXHVDNkI0XHVDNjAxXHVENTU4XHVCMjk0XHVCMzcwIFx1Qzc3NFx1QzZBOVx1QjQxOFx1QjI5NCBcdUMxMUNcdUJDODQoaHR0cClcdUFDMDAgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNzU4IFx1Q0VGNFx1RDRFOFx1RDEzMCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDBcdUM1RDBcdUFDOEMgXHVCQ0Y0XHVCMEI0XHVCMjk0IFx1QzE4Q1x1QjdDOVx1Qzc1OCBcdUM4MTVcdUJDRjRcdUM3NzRcdUJBNzBcbiAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM3OTBcdUI0RTRcdUM3NTggUEMgXHVDRUY0XHVENEU4XHVEMTMwXHVCMEI0XHVDNzU4IFx1RDU1OFx1QjREQ1x1QjUxNFx1QzJBNFx1RDA2Q1x1QzVEMCBcdUM4MDBcdUM3QTVcdUI0MThcdUFFMzBcdUIzQzQgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QUMwMC4gXHVDRkUwXHVEMEE0XHVDNzU4IFx1QzBBQ1x1QzZBOSBcdUJBQTlcdUM4MDEgOiBcdUM3NzRcdUM2QTlcdUM3OTBcdUFDMDAgXHVCQzI5XHVCQjM4XHVENTVDIFx1QUMwMSBcdUMxMUNcdUJFNDRcdUMyQTRcdUM2NDAgXHVDNkY5IFx1QzBBQ1x1Qzc3NFx1RDJCOFx1QjRFNFx1QzVEMCBcdUIzMDBcdUQ1NUMgXHVCQzI5XHVCQjM4IFx1QkMwRiBcdUM3NzRcdUM2QTlcdUQ2MTVcdUQwREMsIFx1Qzc3OFx1QUUzMCBcdUFDODBcdUMwQzlcdUM1QjQsIFx1QkNGNFx1QzU0OFx1QzgxMVx1QzE4RFxuICAgICAgICAgIFx1QzVFQ1x1QkQ4MCwgXHVCNEYxXHVDNzQ0IFx1RDMwQ1x1QzU0NVx1RDU1OFx1QzVFQyBcdUM3NzRcdUM2QTlcdUM3OTBcdUM1RDBcdUFDOEMgXHVDRDVDXHVDODAxXHVENjU0XHVCNDFDIFx1QzgxNVx1QkNGNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVDNzA0XHVENTc0IFx1QzBBQ1x1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUIwOTguIFx1Q0ZFMFx1RDBBNFx1Qzc1OCBcdUMxMjRcdUNFNThcdTIwMjJcdUM2QjRcdUM2MDEgXHVCQzBGIFx1QUM3MFx1QkQ4MCA6IFx1QzZGOVx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCBcdUMwQzFcdUIyRThcdUM3NTggXHVCM0M0XHVBRDZDJmd0O1x1Qzc3OFx1RDEzMFx1QjEzNyBcdUM2MzVcdUMxNTgmZ3Q7XHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkE1NFx1QjI3NFx1Qzc1OCBcdUM2MzVcdUMxNTggXHVDMTI0XHVDODE1XHVDNzQ0IFx1RDFCNVx1RDU3NCBcdUNGRTBcdUQwQTRcbiAgICAgICAgICBcdUM4MDBcdUM3QTVcdUM3NDQgXHVBQzcwXHVCRDgwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiBcdUNGRTBcdUQwQTQgXHVDODAwXHVDN0E1XHVDNzQ0IFx1QUM3MFx1QkQ4MFx1RDU2MCBcdUFDQkRcdUM2QjAgXHVCOURFXHVDREE0XHVENjE1IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTlcdUM1RDAgXHVDNUI0XHVCODI0XHVDNkMwXHVDNzc0IFx1QkMxQ1x1QzBERFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MzAnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDOFx1Qzg3MCAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCkgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+XG4gICAgICAgICAgXHUyNDYwIDxzcGFuIGNsYXNzTmFtZT0nY29sb3JMaWdodEJsdWUnPiZsdDtCT0xULVVYJmd0Ozwvc3Bhbj4gXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDNUM1XHVCQjM0XHVCOTdDIFx1Q0QxRFx1QUQwNFx1RDU3NFx1QzExQ1xuICAgICAgICAgIFx1Q0M0NVx1Qzc4NFx1QzlDMFx1QUNFMCwgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzY0MCBcdUFEMDBcdUI4MjhcdUQ1NUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkQ4OFx1QjlDQ1x1Q0M5OFx1QjlBQyBcdUJDMEYgXHVENTNDXHVENTc0XHVBRDZDXHVDODFDIFx1QjRGMVx1Qzc0NCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVDNTQ0XHVCNzk4XHVDNjQwIFx1QUMxOVx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVCOTdDXG4gICAgICAgICAgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCA8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMzFcdUJBODUgOlx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgPGxpPlx1QzlDMVx1Q0M0NSA6XHVBRDAwXHVCOUFDXHVDNzkwPC9saT5cbiAgICAgICAgICA8bGk+XHVDOUMxXHVBRTA5IDpcdUIzMDBcdUQ0NUM8L2xpPlxuICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjAzQiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQ1x1Qjg1QyBcdUM1RjBcdUFDQjBcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPHAgLz57JyAnfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM2QjRcdUM2MDE8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QjJGNFx1QjJGOVx1Qzc5MCA6XHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICAgIFx1MjQ2MSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUFFRDhcdUMxMUNcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7IFx1Qzc1OCBcdUMxMUNcdUJFNDRcdUMyQTQoXHVCNjEwXHVCMjk0IFx1QzBBQ1x1QzVDNSlcdUM3NDQgXHVDNzc0XHVDNkE5XHVENTU4XHVDMkRDXHVCQTc0XHVDMTFDIFx1QkMxQ1x1QzBERFx1RDU1QyBcdUJBQThcdUI0RTAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUFEMDBcdUI4MjggXHVCQjM4XHVDNzU4LFxuICAgICAgICAgICAgXHVCRDg4XHVCOUNDXHVDQzk4XHVCOUFDLCBcdUQ1M0NcdUQ1NzRcdUFENkNcdUM4MUMgXHVCNEYxXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCBcdUJDMEYgXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDXHVCODVDIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiAmbHQ7Qk9MVC1VWCZndDtcbiAgICAgICAgICAgIFx1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJCMzhcdUM3NThcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzlDMFx1Q0NCNCBcdUM1QzZcdUM3NzQgXHVCMkY1XHVCQ0MwIFx1QkMwRiBcdUNDOThcdUI5QUNcdUQ1NzRcdUI0RENcdUI5QjQgXHVBQzgzXHVDNzg1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDMwJz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzlcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2QylcbiAgICAgICAgICAgICAgPGJyIC8+IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QjI5NCBcdUZGNjJcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHVGRjYzIFx1QzgxQzM1XHVDODcwXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNUY0XHVCNzhDIFx1Q0NBRFx1QUQ2Q1x1Qjk3QyBcdUM1NDRcdUI3OThcdUM3NTggXHVCRDgwXHVDMTFDXHVDNUQwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJmx0OyBCTFQtVVgmZ3Q7XHVDNzQwKFx1QjI5NCkgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkNcdUFDMDAgXHVDMkUwXHVDMThEXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1QjQxOFx1QjNDNFx1Qjg1RCBcdUIxNzhcdUI4MjVcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQueycgJ31cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDIFx1QzgxMVx1QzIxOFx1MDBCN1x1Q0M5OFx1QjlBQyBcdUJEODBcdUMxMUMgPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOiBcdUMxMUNcdUJFNDRcdUMyQTQgXHVBRDAwXHVCOUFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUIyRjRcdUIyRjlcdUM3OTAgOiBcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QzVGMFx1Qjc3RFx1Q0M5OCA6IDAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDMTBcdUM4NzAoXHVBRDhDXHVDNzc1XHVDRTY4XHVENTc0IFx1QUQ2Q1x1QzgxQ1x1QkMyOVx1QkM5NSk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVCODVDIFx1Qzc3OFx1RDU1QyBcdUFENkNcdUM4MUNcdUI5N0MgXHVCQzFCXHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJEODRcdUM3QzFcdUM4NzBcdUM4MTVcdUM3MDRcdUM2RDBcdUQ2OEMsIFx1RDU1Q1x1QUQ2RFx1Qzc3OFx1RDEzMFx1QjEzN1x1QzlDNFx1RDc2NVx1QzZEMFxuICAgICAgICAgIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCBcdUI0RjFcdUM1RDAgXHVCRDg0XHVDN0MxXHVENTc0XHVBQ0IwXHVDNzc0XHVCMDk4IFx1QzBDMVx1QjJGNCBcdUI0RjFcdUM3NDQgXHVDMkUwXHVDQ0FEXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIFx1Qzc3NCBcdUJDMTZcdUM1RDAgXHVBRTMwXHVEMEMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1Qzc1OCBcdUMyRTBcdUFDRTAsIFx1QzBDMVx1QjJGNFx1QzVEMFxuICAgICAgICAgIFx1QjMwMFx1RDU1OFx1QzVFQ1x1QjI5NCBcdUM1NDRcdUI3OThcdUM3NTggXHVBRTMwXHVBRDAwXHVDNUQwIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJEQ1x1QUUzMCBcdUJDMTRcdUI3OERcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMS4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCRDg0XHVDN0MxXHVDODcwXHVDODE1XHVDNzA0XHVDNkQwXHVENjhDIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgzMy02OTcyICh3d3cua29waWNvLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDIuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDExOCAocHJpdmFjeS5raXNhLm9yLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDMuIFx1QjMwMFx1QUM4MFx1Q0MzMFx1Q0NBRCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDEzMDEgKHd3dy5zcG8uZ28ua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgNC4gXHVBQ0JEXHVDQzMwXHVDQ0FEIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgyIChlY3JtLmN5YmVyLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRFx1QzgxQzM1XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1RjRcdUI3OEMpLCBcdUM4MUMzNlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDODE1XHVDODE1XHUwMEI3XHVDMEFEXHVDODFDKSwgXHVDODFDMzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUI0RjEpXHVDNzU4XG4gICAgICAgICAgXHVBRERDXHVDODE1XHVDNUQwIFx1Qzc1OFx1RDU1QyBcdUM2OTRcdUFENkNcdUM1RDAgXHVCMzAwIFx1RDU1OFx1QzVFQyBcdUFDRjVcdUFDRjVcdUFFMzBcdUFEMDBcdUM3NTggXHVDN0E1XHVDNzc0IFx1RDU4OVx1RDU1QyBcdUNDOThcdUJEODQgXHVCNjEwXHVCMjk0IFx1QkQ4MFx1Qzc5MVx1QzcwNFx1Qjg1QyBcdUM3NzhcdUQ1NThcdUM1RUMgXHVBRDhDXHVCOUFDIFx1QjYxMFx1QjI5NCBcdUM3NzRcdUM3NzVcdUM3NTggXHVDRTY4XHVENTc0XHVCOTdDIFx1QkMxQlx1Qzc0MCBcdUM3OTBcdUIyOTRcbiAgICAgICAgICBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUJDOTVcdUM3NzQgXHVDODE1XHVENTU4XHVCMjk0IFx1QkMxNFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzQ0IFx1Q0NBRFx1QUQ2Q1x1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MjAzQiBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUM1RDAgXHVCMzAwXHVENTc0IFx1Qzc5MFx1QzEzOFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDAgXHVDOTExXHVDNTU5XHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzA0XHVDNkQwXHVENjhDKHd3dy5zaW1wYW4uZ28ua3IpIFx1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDMzhcdUFDRTBcdUQ1NThcdUMyRENcdUFFMzAgXHVCQzE0XHVCNzhEXHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUMxMVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4IFx1QkNDMFx1QUNCRCk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdTI0NjAgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCAyMDIyXHVCMTQ0IDNcdUM2RDQgMTdcdUJEODBcdUQxMzAgXHVDODAxXHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1MjQ2MSBcdUM3NzRcdUM4MDRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCBcdUM1NDRcdUI3OThcdUM1RDBcdUMxMUMgXHVENjU1XHVDNzc4XHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIDwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1QzYwOFx1QzJEQyApIC0gMjBYWC4gMy4gMTcgfiAyMFhYLiBYLiBYIFx1QzgwMVx1QzZBOSAoXHVEMDc0XHVCOUFEKSA8L3A+ICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHByb21vdGlvbiBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9ICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9ucyB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uIG1heC13LTExMic+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtc2VjdGlvbi1yb3cgaGlkZGVuIG1kOmZsZXgnPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2J4LXByb21vdGlvbnMnPlxuICAgICAgICAgICAge3Byb21vdGlvbnMubWFwKChwcm9tb3Rpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9tb3Rpb24udGl0bGV9IGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWl0ZW0nPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwcm9tb3Rpb24udXJsIHx8ICcuLyd9IGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1wcm9tb3Rpb24taW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvbW90aW9uLmJhbm5lci5yZXNwb25zaXZlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXR3LXNoYWRvdy1jb2xvcic6IGByZ2JhKCR7cHJvbW90aW9uLmNvbG9yLnJlZH0sICR7cHJvbW90aW9uLmNvbG9yLmdyZWVufSwgJHtwcm9tb3Rpb24uY29sb3IuYmx1ZX0sIC41KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYW4oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyc+PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic1ZmQzYzA1NScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRVNUMktXS0suanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdSUExYRkVaLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1HVkVIRlhMRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSUdaSEVMS0suanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YVDI0TTJDNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUI3NDIzMkRNLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29udGFjdCc6eydpZCc6J3JvdXRlcy9jb250YWN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbnRhY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29udGFjdC1YV1NMQ1JLWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVBJWEU3Qlc2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TQVpURE5DNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9uZXdzLyRzbHVnJzp7J2lkJzoncm91dGVzL25ld3MvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzLyRzbHVnLVVZT0xSUlVNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVlcyU09HWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNBWlRETkM2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25ld3MvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbmV3cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOiduZXdzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzL2luZGV4LVNJTUE0WVZVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVlcyU09HWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNBWlRETkM2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZS8kc2x1Zyc6eydpZCc6J3JvdXRlcy9ub3RpY2UvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbm90aWNlLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZS8kc2x1Zy1TNU9PN0FUNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1ZXMlNPR1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TQVpURE5DNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ub3RpY2UvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbm90aWNlL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J25vdGljZScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbm90aWNlL2luZGV4LUpWM0M1TVdNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVlcyU09HWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNBWlRETkM2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYW4nOnsnaWQnOidyb3V0ZXMvcGxhbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwbGFuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4tWEpJNVBaNFQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy8kc2x1Zy1GQ0lNNVA2Qi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1ZXMlNPR1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TQVpURE5DNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb3N0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvaW5kZXgtUlZQWEZUTk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtWVzJTT0dYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0FaVEROQzYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvcG9zdHMnOnsnaWQnOidyb3V0ZXMvcG9zdHMvcG9zdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMvcG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvcG9zdHMtRDVWS0VPSkUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0Jzp7J2lkJzoncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMvcHJldmlldy9zdGFydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0LU5YRTdOWFI1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWDZVRU5NVC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AnOnsnaWQnOidyb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzL3ByZXZpZXcvc3RvcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AtNlg3QkhVVTUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNlVFTk1ULmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmV2aWV3L3N0YXJ0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RhcnQtUVZOUVhMVVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNYNlVFTk1ULmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9wcmV2aWV3L3N0b3AnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByZXZpZXcvc3RvcC1EUU43NzRHMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1g2VUVOTVQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJpdmFjeSc6eydpZCc6J3JvdXRlcy9wcml2YWN5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByaXZhY3knLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJpdmFjeS1HWjRCRlU0Ti5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL3NldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzLVFKTzU2VVhULmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTVGRDNDMDU1LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxT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LElBQU0sTUFBZ0I7QUFBQSxFQUMzQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87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
