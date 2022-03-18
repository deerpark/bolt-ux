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

// app/queries/notices.ts
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

// app/queries/promotions.ts
init_react();
var promotions = `
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

// app/queries/services/homepage.ts
init_react();
var homepage = `
  query Homepage {
    promotion {
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
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      homepage {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/queries/services/singlepage.ts
init_react();
var singlepage = `
  query Singlepage {
    promotion {
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
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      singlepage {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/queries/services/publishing.ts
init_react();
var publishing = `
  query Publishing {
    promotion {
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
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      publishing {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/queries/services/appdesign.ts
init_react();
var appdesign = `
  query Appdesign {
    promotion {
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
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      appdesign {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/queries/services/consulting.ts
init_react();
var consulting = `
  query Consulting {
    promotion {
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
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      consulting {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/queries/services/plan.ts
init_react();
var plan = `
  query Plan {
    photo {
      plan {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`;

// app/lib/config.ts
init_react();

// app/components/Icon/BulletSolid.tsx
init_react();
function BulletSolid() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M381.2 172.8C377.1 164.9 368.9 160 360 160h-156.6l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0h-176C43.97 0 33.81 8.906 32.22 20.84l-32 240C-.7179 267.7 1.376 274.6 5.938 279.8C10.5 285 17.09 288 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09C145.6 511.4 148.8 512 152 512c7.719 0 15.22-3.75 19.81-10.44l208-304C384.8 190.2 385.4 180.7 381.2 172.8z"
  }));
}

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
function Homepage() {
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
function Singlepage() {
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
function Publishing() {
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
function appdesign2() {
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
function consulting2() {
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
        pathname: "/notices",
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
        pathname: "/services/homepage",
        title: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
        display: true,
        desc: "\uD64D\uBCF4\uB97C \uC704\uD55C \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uCD95",
        Icon: Homepage
      },
      {
        pathname: "/services/singlepage",
        title: "\uC2F1\uAE00 \uD398\uC774\uC9C0 \uC81C\uC791",
        display: true,
        desc: "\uC774\uBCA4\uD2B8, \uB79C\uB529 \uB2E8\uC77C \uD398\uC774\uC9C0 \uAD6C\uCD95",
        Icon: Singlepage
      },
      {
        pathname: "/services/publishing",
        title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
        display: true,
        desc: "\uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
        Icon: Publishing
      },
      {
        pathname: "/services/appdesign",
        title: "\uC571 \uB514\uC790\uC778",
        display: true,
        desc: "\uBAA8\uBC14\uC77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778",
        Icon: appdesign2
      },
      {
        pathname: "/services/consulting",
        title: "\uB514\uC790\uC778 \uCEE8\uC124\uD305",
        display: true,
        desc: "\uB85C\uACE0 \uBA85\uD568 \uAC04\uD310 \uBA54\uB274\uD310 \uD15C\uD50C\uB9BF \uCEE8\uC124\uD305",
        Icon: consulting2
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
var exceptRoute = ["posts", "services", "events"];
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
    className: "inline-flex gap-x-0.5 text-2xl leading-tight text-slate-600 dark:text-slate-300 even:ml-5"
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
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-NTZDCTHDX5"
  }), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTZDCTHDX5');
      `
    }
  }), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `(function() {
          var w = window;
          if (w.ChannelIO) {
            return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
          }
          var ch = function() {
            ch.c(arguments);
          };
          ch.q = [];
          ch.c = function(args) {
            ch.q.push(args);
          };
          w.ChannelIO = ch;
          function l() {
            if (w.ChannelIOInitialized) {
              return;
            }
            w.ChannelIOInitialized = true;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
            s.charset = 'UTF-8';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
          if (document.readyState === 'complete') {
            l();
          } else if (window.attachEvent) {
            window.attachEvent('onload', l);
          } else {
            window.addEventListener('DOMContentLoaded', l, false);
            window.addEventListener('load', l, false);
          }
        })();
        ChannelIO('boot', {
          "pluginKey": "baffea9f-5cfd-4d5d-935a-73409641e1f6"
        });`
    }
  }));
}
function Layout({ children, title, Icon, desc, promotion, prevRoute, cover, date }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement(Header, __spreadValues({}, { title, Icon, desc, prevRoute, cover, date })), promotion && /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement("div", {
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
var app_default = "/build/_assets/app-WPWOB46M.css";

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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.consulting.tsx
var services_consulting_exports = {};
__export(services_consulting_exports, {
  default: () => Consulting,
  loader: () => loader2
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_react_router_dom2 = require("react-router-dom");
var import_react_datocms3 = require("react-datocms");

// app/components/Services/Recommend.tsx
init_react();

// app/components/Row/index.tsx
init_react();

// app/components/List/index.tsx
init_react();
function List({ list }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-list"
  }, list && list.length && list.map((listItem, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index.toString(),
      className: "bx-contents-card"
    }, listItem.thumb && /* @__PURE__ */ React.createElement("div", {
      className: "bx-contents-card-thumbnail"
    }, listItem.thumb), /* @__PURE__ */ React.createElement("div", {
      className: "bx-contents-card-body"
    }, listItem.title && /* @__PURE__ */ React.createElement("div", {
      className: "bx-contents-card-title"
    }, listItem.title), listItem.contents && listItem.contents.map((content, contentIndex) => /* @__PURE__ */ React.createElement("div", {
      key: contentIndex,
      className: "bx-contents-card-desc"
    }, content))));
  }));
}

// app/components/Row/index.tsx
function Row({ icon, title, list, className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `bx-contents-row bx-contents-row-extend ${className}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-contents-row pb-1 md:pb-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "bx-contents-h2"
  }, /* @__PURE__ */ React.createElement("span", null, icon && icon || /* @__PURE__ */ React.createElement(BulletSolid, null)), /* @__PURE__ */ React.createElement("span", null, title))), /* @__PURE__ */ React.createElement(List, {
    list
  }));
}

// app/components/Services/Recommend.tsx
function Recommend({ list, className }) {
  const props = { title: "\uC774\uB7F0\uBD84\uAED8 \uCD94\uCC9C \uB4DC\uB824\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// app/components/Services/Tech.tsx
init_react();
function Tech({ list, className }) {
  const props = { title: "\uD56D\uC0C1 \uCD5C\uC2E0\uC758 \uAE30\uC220\uC744 \uC120\uB3C4\uD574\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// app/components/Services/Flow.tsx
init_react();
function Flow({ className }) {
  const list = [
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "1"),
      title: "\uACC4\uC57D\uAE08 10% \uC785\uAE08",
      contents: ["\uD504\uB85C\uC81D\uD2B8\uAC00 \uC2DC\uC791\uB418\uAE30 \uC804 \uBBF8\uB9AC \uACC4\uC57D\uAE08\uC744 \uBC1B\uACE0 \uC2DC\uC791\uD574\uC694."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "2"),
      title: "\uAE30\uCD08 \uC0C1\uB2F4",
      contents: ["\uD648\uD398\uC774\uC9C0 \uCEE8\uC149, \uC6D0\uD558\uB294 \uAE30\uB2A5\uB4E4\uC744 \uACE0\uAC1D\uB2D8\uB4E4\uACFC \uD568\uAED8 \uC0AC\uC804\uC5D0 \uC8FC\uACE0 \uBC1B\uC544\uC694."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "3"),
      title: "\uC758\uB8B0\uC5D0 \uAD00\uB828\uB41C \uC790\uB8CC \uC218\uC2E0",
      contents: ["\uD648\uD398\uC774\uC9C0 \uAD6C\uCD95 \uC804 \uD544\uC694\uD55C \uC790\uB8CC\uB4E4\uC744 \uB118\uACA8\uBC1B\uC544\uC694. (\uB85C\uACE0, \uC544\uC774\uB514\uC5B4, \uC81C\uD488 \uC815\uBCF4\uAD00\uB828 \uC0AC\uC9C4)"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "4"),
      title: "\uB514\uC790\uC778 \uC2DC\uC548 \uAC80\uD1A0",
      contents: ["\uB514\uC790\uC778 \uCEE8\uC149\uC758 \uC2DC\uC548\uC744 \uBBF8\uB9AC \uACE0\uAC1D\uB2D8\uB4E4\uACFC \uD611\uC758\uD574\uC694."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "5"),
      title: "\uC218\uC815\uC0AC\uD56D \uBC18\uC601 \uBC0F \uAC1C\uBC1C \uC9C4\uD589",
      contents: ["\uBE60\uB974\uAC8C \uAC1C\uBC1C \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "6"),
      title: "\uB370\uBAA8",
      contents: ["\uCCAB \uC2DC\uC5F0 \uD6C4 \uC218\uC815\uC0AC\uD56D \uBC18\uC601"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "7"),
      title: "\uCD5C\uC885 \uC11C\uBE44\uC2A4 \uC624\uD508",
      contents: ["\uC624\uD508 \uD6C4 \uBAA8\uB2C8\uD130\uB9C1"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement("span", {
        className: "bx-contents-card-icon"
      }, "8"),
      title: "\uC794\uAE08 90% \uC785\uAE08",
      contents: ["\uD504\uB85C\uC81D\uD2B8 \uC644\uB8CC"]
    }
  ];
  const props = { title: "\uC11C\uBE44\uC2A4 \uC81C\uACF5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC774\uB904\uC838\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// app/components/Services/Crews.tsx
init_react();
var import_react_datocms2 = require("react-datocms");
function Crews({ photos, className }) {
  const [crews1Thumb, crews2Thumb, crews3Thumb] = photos;
  const list = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
        data: crews1Thumb
      }),
      title: '\uB514\uC790\uC778/\uAC1C\uBC1C "\uC6A9\uC6A9"',
      contents: ["IT\uCD5C\uC804\uC120\uC5D0\uC11C \uC2F8\uC6CC\uC628 \uACBD\uB825 10\uB144 \uC774\uC0C1\uC758 \uC804\uBB38\uAC00"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
        data: crews2Thumb
      }),
      title: '\uD504\uB860\uD2B8\uC5D4\uB4DC/\uBC31\uC5D4\uB4DC \uAC1C\uBC1C "\uB69C\uC2DD\uC774"',
      contents: ["IT\uCD5C\uC804\uC120\uC5D0\uC11C \uC2F8\uC6CC\uC628 \uACBD\uB825 10\uB144 \uC774\uC0C1\uC758 \uC804\uBB38\uAC00"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms2.Image, {
        data: crews3Thumb
      }),
      title: '\uB370\uC774\uD130/\uC778\uD504\uB77C \uAC1C\uBC1C "\uBA85\uC790"',
      contents: ["IT\uCD5C\uC804\uC120\uC5D0\uC11C \uC2F8\uC6CC\uC628 \uACBD\uB825 10\uB144 \uC774\uC0C1\uC758 \uC804\uBB38\uAC00"]
    }
  ];
  const props = { title: "\uC800\uD76C \uD300\uC740 \uC804\uBB38\uAC00\uB4E4\uB85C \uAD6C\uC131 \uB418\uC5B4\uC788\uC5B4\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// app/components/Services/FAQ.tsx
init_react();
function FAQ({ className }) {
  const list = [
    {
      title: "\uC791\uC5C5 \uAE30\uAC04\uC740 \uBCF4\uD1B5 \uC5BC\uB9C8\uB098 \uAC78\uB9AC\uB098\uC694?",
      contents: [
        /* @__PURE__ */ React.createElement("ul", {
          key: "service-faq-0",
          className: "bx-list-items"
        }, /* @__PURE__ */ React.createElement("li", null, "\uD64D\uBCF4\uC6A9 \uC6F9\uD398\uC774\uC9C0\uB294 3\uC77C"), /* @__PURE__ */ React.createElement("li", null, "\uAE30\uC5C5 \uD648\uD398\uC774\uC9C0\uB294 5\uC77C"), /* @__PURE__ */ React.createElement("li", null, "\uBE0C\uB79C\uB529 \uCEE8\uC124\uD305\uC740 10\uC77C"))
      ]
    },
    {
      title: "1\uB144 \uBB34\uC0C1 A/S\uC758 \uBC94\uC704\uB294 \uC5B4\uB514\uAE4C\uC9C0 \uC778\uAC00\uC694?",
      contents: [
        /* @__PURE__ */ React.createElement("ul", {
          key: "service-faq-1",
          className: "bx-list-items"
        }, /* @__PURE__ */ React.createElement("li", null, "\uD14D\uC2A4\uD2B8 \uC218\uC815"), /* @__PURE__ */ React.createElement("li", null, "\uC774\uBBF8\uC9C0 \uAD50\uCCB4 \uBC0F \uCD94\uAC00, \uC0AD\uC81C"), /* @__PURE__ */ React.createElement("li", null, "\uBE0C\uB79C\uB529 \uCEEC\uB7EC \uBCC0\uACBD"), /* @__PURE__ */ React.createElement("li", null, "\uD398\uC774\uC9C0 \uCD94\uAC00 \uC791\uC5C5\uC740 \uCD94\uAC00 \uC694\uAE08\uC774 \uBC1C\uC0DD \uD569\uB2C8\uB2E4.(\uBCC4\uB3C4 \uD611\uC758)"))
      ]
    }
  ];
  const props = { title: "\uC790\uC8FC\uC788\uB294 \uC9C8\uBB38\uB4E4\uC774\uC608\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// app/components/Services/Refund.tsx
init_react();
function Refund({ className }) {
  const list = [
    {
      title: "\uAE30\uBCF8 \uD658\uBD88 \uADDC\uC815",
      contents: [
        "\uC804\uBB38\uAC00\uC640 \uC758\uB8B0\uC778\uC758 \uC0C1\uD638 \uD611\uC758\uD558\uC5D0 \uCCAD\uC57D \uCCA0\uD68C \uBC0F \uD658\uBD88\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
        "\uC791\uC5C5\uC774 \uC644\uB8CC\uB41C \uC774\uD6C4 \uB610\uB294 \uC790\uB8CC, \uD504\uB85C\uADF8\uB7A8 \uB4F1 \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB41C \uC774\uD6C4\uC5D0\uB294 \uD658\uBD88\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4. ( \uC18C\uBE44\uC790\uBCF4\uD638\uBC95 17\uC870 2\uD56D\uC758 5\uC870. \uC6A9\uC5ED \uB610\uB294 \u300C\uBB38\uD654\uC0B0\uC5C5\uC9C4\uD765 \uAE30\uBCF8\uBC95\u300D \uC81C2\uC870 \uC81C5\uD638\uC758 \uB514\uC9C0\uD138\uCF58\uD150\uCE20\uC758 \uC81C\uACF5\uC774 \uAC1C\uC2DC\uB41C \uACBD\uC6B0\uC5D0 \uD574\uB2F9)"
      ]
    },
    {
      title: "\uC804\uBB38\uAC00 \uCC45\uC784 \uC0AC\uC720",
      contents: [
        "\uC804\uBB38\uAC00\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uB2F9\uCD08 \uC57D\uC815\uD588\uB358 \uC11C\uBE44\uC2A4 \uBBF8\uC774\uD589 \uD639\uC740 \uBCF4\uD3B8\uC801\uC778 \uAD00\uC810\uC5D0\uC11C \uC2EC\uAC01\uD558\uAC8C \uC798\uBABB \uC774\uD589\uD55C \uACBD\uC6B0 \uACB0\uC81C \uAE08\uC561 \uC804\uCCB4 \uD658\uBD88\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      title: "\uC758\uB8B0\uC778 \uCC45\uC784 \uC0AC\uC720",
      contents: [
        "\uC11C\uBE44\uC2A4 \uC9C4\uD589 \uB3C4\uC911 \uC758\uB8B0\uC778\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uD658\uBD88\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0, \uC0AC\uC6A9 \uAE08\uC561\uC744 \uC544\uB798\uC640 \uAC19\uC774 \uACC4\uC0B0 \uD6C4 \uCD1D \uAE08\uC561\uC758 10%\uB97C \uACF5\uC81C\uD558\uC5EC \uD658\uBD88\uD569\uB2C8\uB2E4.",
        /* @__PURE__ */ React.createElement("ul", {
          key: "service-refund-2",
          className: "bx-list-items"
        }, /* @__PURE__ */ React.createElement("li", null, "\uCD1D \uC791\uC5C5\uB7C9\uC758 1/3 \uACBD\uACFC \uC804 : \uC774\uBBF8 \uB0A9\uBD80\uD55C \uC694\uAE08\uC758 2/3\uD574\uB2F9\uC561"), /* @__PURE__ */ React.createElement("li", null, "\uCD1D \uC791\uC5C5\uB7C9\uC758 1/2 \uACBD\uACFC \uC804 : \uC774\uBBF8 \uB0A9\uBD80\uD55C \uC694\uAE08\uC758 1/2\uD574\uB2F9\uC561"), /* @__PURE__ */ React.createElement("li", null, "\uCD1D \uC791\uC5C5\uB7C9\uC758 1/2 \uACBD\uACFC \uD6C4 : \uBC18\uD658\uD558\uC9C0 \uC54A\uC74C"))
      ]
    }
  ];
  const props = { title: "\uCDE8\uC18C \uBC0F \uD658\uBD88\uADDC\uC815\uC744 \uC54C\uB824\uB4DC\uB9B4\uAC8C\uC694.", list, className };
  return /* @__PURE__ */ React.createElement(Row, __spreadValues({}, props));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.consulting.tsx
var loader2 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: consulting
  });
};
function Consulting() {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix10.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms3.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.publishing.tsx
var services_publishing_exports = {};
__export(services_publishing_exports, {
  default: () => Publishing2,
  loader: () => loader3
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_react_router_dom3 = require("react-router-dom");
var import_react_datocms4 = require("react-datocms");
var loader3 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: publishing
  });
};
function Publishing2() {
  const { pathname } = (0, import_react_router_dom3.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix11.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  const recommendList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[0].responsiveImage
      }),
      title: "\uC778\uD130\uB137 \uC0AC\uC5C5\uC790 \uB300\uD45C\uB2D8",
      contents: ["\uD504\uB85C\uC81D\uD2B8\uC5D0 \uB9C8\uD06C\uC5C5 \uAC1C\uBC1C \uBC0F UI \uAC1C\uBC1C \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uD134\uD0A4 \uACC4\uC57D"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[1].responsiveImage
      }),
      title: "\uB300\uAE30\uC5C5 SI \uB2F4\uB2F9\uC790\uB2D8",
      contents: ["\uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8 \uB9C8\uD06C\uC5C5, UI \uAC1C\uBC1C \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC0C1\uC8FC \uBD88\uAC00, \uD134\uD0A4 \uACC4\uC57D"]
    }
  ];
  const techList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[2].responsiveImage
      }),
      title: "TailwindCSS \uC9C0\uC6D0",
      contents: [
        "\uC694\uC998 \uAC01\uAD11\uBC1B\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4 \uD504\uB808\uC784\uC6CC\uD06C\uC778 TailwindCSS\uB85C \uAC1C\uBC1C \uAC00\uB2A5\uD558\uBA70 \uB2E4\uC591\uD55C CSS \uBC29\uBC95\uB860\uC73C\uB85C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[3].responsiveImage
      }),
      title: "\uC2DC\uB9E8\uD2F1 \uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
      contents: ["\uBB38\uC11C\uC5D0 \uAD6C\uC870\uC801\uC778 \uC758\uBBF8\uB97C \uBD80\uC5EC\uD558\uC5EC \uCD5C\uB300\uD55C \uC2DC\uB9E8\uD2F1\uD55C \uAC1C\uBC1C\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[4].responsiveImage
      }),
      title: "\uC6F9 \uC811\uADFC\uC131 \uC900\uC218",
      contents: ["\uC694\uAD6C\uC0AC\uD56D\uC5D0 \uB530\uB77C \uC811\uADFC\uC131\uC744 \uC900\uC218\uD558\uC5EC \uC778\uC99D \uB9C8\uD06C\uB97C \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.publishing[5].responsiveImage
      }),
      title: "\uBC18\uC751\uD615 \uD398\uC774\uC9C0\uB85C \uC81C\uC791",
      contents: ["\uB2E4\uC591\uD55C PC \uD06C\uB85C\uC2A4, \uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uC5D0\uC11C \uAC01\uAC01 \uD06C\uAE30\uC5D0 \uCD5C\uC801\uD654 \uB418\uB3C4\uB85D \uB9DE\uCDA4 \uC81C\uC791 \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
    list: recommendList
  }), /* @__PURE__ */ React.createElement(Tech, {
    className: "bx-contents-row-bg",
    list: techList
  }), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.singlepage.tsx
var services_singlepage_exports = {};
__export(services_singlepage_exports, {
  default: () => Singlepage2,
  loader: () => loader4
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_react_router_dom4 = require("react-router-dom");
var import_react_datocms5 = require("react-datocms");
var loader4 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: singlepage
  });
};
function Singlepage2() {
  const { pathname } = (0, import_react_router_dom4.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix12.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms5.useQuerySubscription)(datoQuerySubscription2);
  const list = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.singlepage[0].responsiveImage
      }),
      title: "IT \uAE30\uC5C5 \uB9C8\uCF00\uD305 \uB2F4\uB2F9\uC790\uB2D8",
      contents: ["\uB8F0\uB81B \uC774\uBCA4\uD2B8 \uAE4C\uC9C0 \uC778\uD130\uB809\uC158 \uAC1C\uBC1C \uD3EC\uD568 \uC694\uAD6C\uC0AC\uD56D\uC744 \uCD5C\uB300\uD55C \uB9DE\uCDA4 \uC81C\uACF5"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.singlepage[1].responsiveImage
      }),
      title: "\uC1FC\uD551\uBAB0 \uC0AC\uC7A5\uB2D8",
      contents: ["\uC2E0\uADDC \uC720\uC785, \uB9AC\uD150\uC158\uB4F1 \uB9C8\uCF00\uD305\uC5D0 \uD65C\uC6A9\uD558\uACE0 \uC2F6\uC740 \uAC04\uB2E8\uD55C \uC774\uBCA4\uD2B8 \uD398\uC774\uC9C0 \uC81C\uACF5"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.singlepage[2].responsiveImage
      }),
      title: "\uC778\uD14C\uB9AC\uC5B4 \uAC00\uAC8C \uC0AC\uC7A5\uB2D8",
      contents: ["\uC0AC\uC5C5\uC744 \uAC04\uB2E8\uD558\uAC8C \uC18C\uAC1C\uD558\uACE0 \uC778\uD130\uB137\uC5D0 \uD64D\uBCF4\uD560 \uC218 \uC788\uB3C4\uB85D \uB79C\uB529 \uD398\uC774\uC9C0 \uC81C\uACF5"]
    }
  ];
  const techList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.common[0].responsiveImage
      }),
      title: "\uCD5C\uC2E0 \uD14C\uD06C \uD2B8\uB9AC",
      contents: [
        "NextJS/Remix React \uD504\uB808\uC784\uC6CC\uD06C, NodeJS, PostgreSQL\uAE30\uBC18 \uCD5C\uC2E0 \uAE30\uC220\uB85C \uAC1C\uBC1C \uD568\uC73C\uB85C\uC368 \uBE60\uB974\uACE0 \uAC00\uBCBC\uC6B4 \uC11C\uBE44\uC2A4\uB97C\uC81C\uACF5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.common[1].responsiveImage
      }),
      title: "SEO \uB3C4\uC785",
      contents: [
        "\uAD6C\uAE00, \uB124\uC774\uBC84 \uAC80\uC0C9\uC5D4\uC9C4\uC5D0 \uCD5C\uC801\uD654\uD558\uC5EC \uC791\uC5C5\uD574 \uB4DC\uB9BD\uB2C8\uB2E4. \uAC80\uC0C9\uC740 \uC5B4\uB514\uC5D0\uC11C\uB098 \uC27D\uACE0 \uBE60\uB974\uACE0 \uAC00\uC7A5 \uC0C1\uC704\uC5D0 \uB7AD\uD06C\uB420 \uC218\uC788\uB3C4\uB85D \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms5.Image, {
        data: photo.common[2].responsiveImage
      }),
      title: "\uBC18\uC751\uD615 \uD398\uC774\uC9C0\uB85C \uC81C\uC791",
      contents: ["\uB2E4\uC591\uD55C PC \uD06C\uB85C\uC2A4, \uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uC5D0\uC11C \uAC01\uAC01 \uD06C\uAE30\uC5D0 \uCD5C\uC801\uD654 \uB418\uB3C4\uB85D \uB9DE\uCDA4 \uC81C\uC791 \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
    list
  }), /* @__PURE__ */ React.createElement(Tech, {
    list: techList,
    className: "bx-contents-row-bg"
  }), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/preview/stop.ts
var stop_exports = {};
__export(stop_exports, {
  action: () => action2
});
init_react();
var import_remix13 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix13.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.appdesign.tsx
var services_appdesign_exports = {};
__export(services_appdesign_exports, {
  default: () => Appdesign,
  loader: () => loader5
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_react_router_dom5 = require("react-router-dom");
var import_react_datocms6 = require("react-datocms");
var loader5 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: appdesign
  });
};
function Appdesign() {
  const { pathname } = (0, import_react_router_dom5.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms6.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.homepage.tsx
var services_homepage_exports = {};
__export(services_homepage_exports, {
  default: () => Homepage2,
  loader: () => loader6
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_react_router_dom6 = require("react-router-dom");
var import_react_datocms7 = require("react-datocms");
var loader6 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: homepage
  });
};
function Homepage2() {
  const { pathname } = (0, import_react_router_dom6.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix15.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms7.useQuerySubscription)(datoQuerySubscription2);
  const list = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.homepage[0].responsiveImage
      }),
      title: "\uC778\uD14C\uB9AC\uC5B4 \uAC00\uAC8C \uC0AC\uC7A5\uB2D8",
      contents: ["\uAC04\uB2E8\uD788 \uC0AC\uC5C5\uC744 \uC18C\uAC1C\uD558\uACE0 \uD64D\uBCF4\uD558\uACE0 \uC2F6\uC740 \uC0AC\uC7A5\uB2D8\uB4E4\uC744 \uC704\uD55C \uC6F9\uD398\uC774\uC9C0 \uC81C\uC791"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.homepage[1].responsiveImage
      }),
      title: "\uC911\uC18C\uAE30\uC5C5 \uB300\uD45C\uB2D8",
      contents: ["\uAE30\uC5C5\uC744 \uC18C\uAC1C\uD558\uACE0 \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD55C \uD648\uD398\uC774\uC9C0 \uB9DE\uCDA4 \uC81C\uC791"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.homepage[2].responsiveImage
      }),
      title: "\uC2DD\uB2F9 \uC0AC\uC7A5\uB2D8",
      contents: ["\uC0C8\uB85C\uC6B4 \uAC00\uAC8C \uB610\uB294 \uBC95\uC778\uC744 \uC2DC\uC791\uD558\uAE30 \uC804 \uAC04\uD310, \uB85C\uACE0, \uBA54\uB274\uD310\uB4F1\uC758 \uBE0C\uB79C\uB529 \uB514\uC790\uC778 \uCEE8\uC124\uD305 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5"]
    }
  ];
  const techList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.common[0].responsiveImage
      }),
      title: "\uCD5C\uC2E0 \uD14C\uD06C \uD2B8\uB9AC",
      contents: [
        "NextJS/Remix React \uD504\uB808\uC784\uC6CC\uD06C, NodeJS, PostgreSQL\uAE30\uBC18 \uCD5C\uC2E0 \uAE30\uC220\uB85C \uAC1C\uBC1C \uD568\uC73C\uB85C\uC368 \uBE60\uB974\uACE0 \uAC00\uBCBC\uC6B4 \uC11C\uBE44\uC2A4\uB97C\uC81C\uACF5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.common[1].responsiveImage
      }),
      title: "SEO \uB3C4\uC785",
      contents: [
        "\uAD6C\uAE00, \uB124\uC774\uBC84 \uAC80\uC0C9\uC5D4\uC9C4\uC5D0 \uCD5C\uC801\uD654\uD558\uC5EC \uC791\uC5C5\uD574 \uB4DC\uB9BD\uB2C8\uB2E4. \uAC80\uC0C9\uC740 \uC5B4\uB514\uC5D0\uC11C\uB098 \uC27D\uACE0 \uBE60\uB974\uACE0 \uAC00\uC7A5 \uC0C1\uC704\uC5D0 \uB7AD\uD06C\uB420 \uC218\uC788\uB3C4\uB85D \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms7.Image, {
        data: photo.common[2].responsiveImage
      }),
      title: "\uBC18\uC751\uD615 \uD398\uC774\uC9C0\uB85C \uC81C\uC791",
      contents: ["\uB2E4\uC591\uD55C PC \uD06C\uB85C\uC2A4, \uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uC5D0\uC11C \uAC01\uAC01 \uD06C\uAE30\uC5D0 \uCD5C\uC801\uD654 \uB418\uB3C4\uB85D \uB9DE\uCDA4 \uC81C\uC791 \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
    list
  }), /* @__PURE__ */ React.createElement(Tech, {
    list: techList,
    className: "bx-contents-row-bg"
  }), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader7,
  meta: () => meta2
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_react_router_dom7 = require("react-router-dom");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react_datocms10 = require("react-datocms");

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
var import_remix16 = __toESM(require_remix());
var import_react_datocms9 = require("react-datocms");

// app/components/Posts/Post.tsx
init_react();
var import_react_datocms8 = require("react-datocms");
function Post({ post: post2 }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-slate dark:prose-invert"
  }, /* @__PURE__ */ React.createElement(import_react_datocms8.StructuredText, {
    data: post2.content,
    renderBlock: ({ record }) => {
      if (record.__typename === "ImageBlockRecord") {
        return /* @__PURE__ */ React.createElement(import_react_datocms8.Image, {
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
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix16.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${firstPost.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms9.Image, {
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
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix16.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${post2.slug}`
  }, /* @__PURE__ */ React.createElement(import_react_datocms9.Image, {
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/$slug.tsx
var loader7 = async ({ request, params }) => {
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
  return (0, import_react_datocms10.toRemixMeta)(post2.seo);
};
function PostSlug() {
  var _a;
  const { pathname } = (0, import_react_router_dom7.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix17.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion }
  } = (0, import_react_datocms10.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms10.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id
  }), /* @__PURE__ */ React.createElement(Post, __spreadValues({}, { post: post2 })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/index.tsx
var notices_exports = {};
__export(notices_exports, {
  default: () => Index,
  loader: () => loader8
});
init_react();
var import_react_router_dom8 = require("react-router-dom");
var import_remix18 = __toESM(require_remix());
var import_react_datocms11 = require("react-datocms");
var loader8 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: notice
  });
  return __spreadValues({}, querySubscription);
};
function Index() {
  const { pathname } = (0, import_react_router_dom8.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix18.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms11.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "notices" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/start.ts
var start_exports2 = {};
__export(start_exports2, {
  action: () => action3
});
init_react();
var import_remix19 = __toESM(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix19.redirect)("/", {
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
var import_remix20 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix20.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => PostSlug2,
  loader: () => loader9,
  meta: () => meta3
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_react_router_dom9 = require("react-router-dom");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_react_datocms12 = require("react-datocms");
var loader9 = async ({ request, params }) => {
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
  return (0, import_react_datocms12.toRemixMeta)(post2.seo);
};
function PostSlug2() {
  var _a;
  const { pathname } = (0, import_react_router_dom9.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix21.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion }
  } = (0, import_react_datocms12.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms12.Image, {
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
  loader: () => loader10
});
init_react();
var import_react_router_dom10 = require("react-router-dom");
var import_remix22 = __toESM(require_remix());
var import_react_datocms13 = require("react-datocms");
var loader10 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: posts
  });
  return __spreadValues({}, querySubscription);
};
function Index2() {
  const { pathname } = (0, import_react_router_dom10.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix22.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms13.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts })), /* @__PURE__ */ React.createElement(import_remix22.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/posts.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => Posts2
});
init_react();
var import_remix23 = __toESM(require_remix());
function Posts2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix23.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  default: () => PostSlug3,
  loader: () => loader11,
  meta: () => meta4
});
init_react();
var import_remix24 = __toESM(require_remix());
var import_react_router_dom11 = require("react-router-dom");
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_react_datocms14 = require("react-datocms");
var loader11 = async ({ request, params }) => {
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
  return (0, import_react_datocms14.toRemixMeta)(post2.seo);
};
function PostSlug3() {
  var _a;
  const { pathname } = (0, import_react_router_dom11.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix24.useLoaderData)();
  const { title, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2, promotion }
  } = (0, import_react_datocms14.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    promotion,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms14.Image, {
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
  loader: () => loader12
});
init_react();
var import_react_router_dom12 = require("react-router-dom");
var import_remix25 = __toESM(require_remix());
var import_react_datocms15 = require("react-datocms");
var loader12 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: news
  });
  return __spreadValues({}, querySubscription);
};
function Index3() {
  const { pathname } = (0, import_react_router_dom12.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix25.useLoaderData)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms15.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "news" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings2
});
init_react();
var import_react_router_dom13 = require("react-router-dom");
function Settings2() {
  const { pathname } = (0, import_react_router_dom13.useLocation)();
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
var import_react_router_dom14 = require("react-router-dom");
var import_lottie_react = __toESM(require("lottie-react"));

// app/lotties/cowboy-hat-face.json
var v = "5.5.7";
var meta5 = { g: "LottieFiles AE 0.1.20", a: "", k: "", d: "", tc: "" };
var fr = 60;
var ip = 0;
var op = 121;
var w = 2e3;
var h = 2e3;
var nm = "Cowboy Hat Face";
var ddd = 0;
var assets = [];
var layers = [{ ddd: 0, ind: 1, ty: 3, nm: "Hat 3", parent: 9, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 0.988 }, o: { x: 0.333, y: 0 }, t: 2, s: [600, 499.182, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.573, y: 0.983 }, o: { x: 0.168, y: 0.107 }, t: 17, s: [600, 467.703, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.1, y: 1 }, o: { x: 0.347, y: 2e-3 }, t: 38, s: [600, 465.215, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 0.667 }, o: { x: 0.333, y: 0.333 }, t: 72, s: [600, 499.182, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 120, s: [600, 499.182, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 2, s: [50.102, 52.519, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 17, s: [54.102, 43.519, 100] }, { t: 38, s: [50.102, 52.519, 100] }], ix: 6 } }, ao: 0, ip: 0, op: 121, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Hat 2", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.48, -624.33, 0], ix: 2 }, a: { a: 0, k: [441.394, 156.318, 0], ix: 1 }, s: { a: 0, k: [195, 195, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-16.059, 16.801], [0.043, 1e-3], [0, 0], [120.509, 64.417], [-42.24, -14.149], [-3.233, 2.34], [-100.02, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-2.724, -2.237], [-10.181, 3.662]], o: [[-120.51, 64.417], [0, 0], [-0.044, 1e-3], [21.33, 22.447], [3.134, -2.62], [0, 0], [0, 0], [0, 0], [0, 0], [100.02, 0], [2.797, 2.025], [10.696, -3.285], [28.387, -12.15]], v: [[360.777, -32.846], [0, 25.695], [-1e-3, 25.695], [-360.777, -32.846], [-263.043, 22.046], [-253.494, 14.593], [-6.021, 32.846], [-1e-3, 32.846], [0.01, 32.846], [6.03, 32.846], [253.505, 14.593], [261.783, 21.003], [293.108, 10.577]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.317999985639, 0.263000009574, 0.211999990426, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [442.495, 253.301], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.031, -0.225], [17.368, -13.389], [19.586, -10.428], [74.225, 0], [84.573, 51.21], [14.007, 10.757], [5.869, 2.95], [17.862, 0], [23.426, -25.041], [-3.385, -2.599], [-31.713, 0], [-16.891, -12.982], [-92.247, -0.659], [-99.549, 76.51], [-22.907, 0], [-20.133, -19.926], [-3.185, 2.701], [32.786, 0]], o: [[-21.24, 1.58], [-20.564, 15.794], [-77.155, 41.106], [-80.231, 0], [-13.53, -8.187], [-5.319, -4.101], [-16.034, -8.05], [-33.835, 0], [3.211, 2.663], [20.214, -21.221], [22.907, 0], [99.548, 76.51], [92.247, -0.659], [16.891, -12.982], [30.614, 0], [3.363, -2.638], [-23.335, -23.588], [-3.046, 0]], v: [[342.79, -59.076], [283.445, -36.96], [223.301, 2.096], [1.103, 46.911], [-239.95, -8.637], [-281.228, -36.96], [-298.06, -47.507], [-349.703, -59.413], [-441.137, -20.581], [-431.242, -12.688], [-349.703, -46.868], [-288.869, -27.024], [1.103, 59.413], [291.077, -27.024], [351.91, -46.868], [431.317, -14.868], [441.137, -22.877], [351.91, -59.413]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [441.391, 206.069], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-21.24, 1.58], [17.407, -13.38], [19.576, -10.429], [-20.564, 15.794]], o: [[-21.259, 1.578], [-20.551, 15.795], [19.586, -10.428], [17.368, -13.389]], v: [[59.745, -30.586], [0.365, -8.473], [-59.745, 30.586], [0.4, -8.47]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [724.436, 177.579], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-13.529, -8.187], [13.998, 10.759], [5.873, 2.95], [-5.32, -4.101]], o: [[-13.522, -8.188], [-5.332, -4.099], [5.868, 2.95], [14.006, 10.757]], v: [[29.055, 19.435], [-12.2, -8.891], [-29.055, -19.435], [-12.223, -8.888]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [172.386, 177.997], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.038, -0.226], [-3.046, 0], [-23.335, -23.588], [-3e-3, 3e-3], [32.785, 0]], o: [[3.031, -0.225], [32.786, 0], [3e-3, -3e-3], [-23.334, -23.582], [-3.051, 0]], v: [[-49.179, -17.931], [-40.059, -18.268], [49.169, 18.268], [49.178, 18.259], [-40.041, -18.268]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [833.359, 164.924], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 2, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[21.33, 22.447], [-0.044, 1e-3], [-120.51, 64.417], [28.386, -12.15], [-36.328, 28.498], [30.614, 0], [16.891, -12.981], [92.246, -0.658], [99.548, 76.511], [22.907, 0], [20.214, -21.22], [-67.702, -20.41], [-0.023, 0.019]], o: [[120.509, 64.417], [0.043, 1e-3], [-16.059, 16.801], [54.165, -19.486], [-20.134, -19.926], [-22.907, 0], [-99.549, 76.511], [-92.247, -0.658], [-16.891, -12.981], [-31.713, 0], [43.615, 33.495], [0.023, -0.019], [-42.24, -14.149]], v: [[-359.711, -1.582], [1.066, 56.959], [361.844, -1.582], [294.175, 41.841], [431.28, -30.836], [351.872, -62.836], [291.039, -42.992], [1.066, 43.444], [-288.907, -42.992], [-349.741, -62.836], [-431.28, -28.656], [-262.046, 53.365], [-261.977, 53.31]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [441.429, 222.037], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 2, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-33.835, 0], [-16.034, -8.051], [17.845, 0], [23.425, -25.039], [-1e-3, -1e-3]], o: [[17.862, 0], [-16.035, -8.057], [-33.836, 0], [1e-3, 1e-3], [23.426, -25.041]], v: [[19.898, -19.416], [71.54, -7.51], [19.891, -19.417], [-71.54, 19.414], [-71.536, 19.417]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [71.79, 166.072], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 2, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-77.154, 41.106], [74.21, 0], [84.596, 51.191], [-80.231, 0]], o: [[-77.169, 41.088], [-80.215, 0], [84.573, 51.21], [74.225, 0]], v: [[231.625, -17.041], [9.433, 27.76], [-231.626, -27.773], [9.428, 27.773]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [433.066, 225.206], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 2, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-3.303, 49.702], [-11.098, 1.299], [-25.772, -29.994], [3.195, -22.468], [-1.732, -10.936]], o: [[10.341, -3.411], [47.32, -3.627], [14.78, 17.217], [-2.653, 18.733], [-159.987, 0]], v: [[-83.567, -75.879], [-51.083, -84.65], [65.701, -18.327], [83.675, 44.26], [82.754, 88.277]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.372999991623, 0.282000014361, 0.20800000359, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [549.568, 97.363], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 2, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.356, 49.702], [11.099, 1.299], [25.772, -29.994], [-3.195, -22.468], [1.733, -10.936]], o: [[-10.341, -3.411], [-47.319, -3.627], [-14.78, 17.217], [2.653, 18.733], [160.042, 0]], v: [[83.541, -75.879], [51.055, -84.65], [-65.727, -18.327], [-83.701, 44.26], [-82.781, 88.277]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.372999991623, 0.282000014361, 0.20800000359, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [335.791, 97.363], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 2, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-16.026, 1.841], [-22.956, -18.192], [2.599, -45.208], [-8.88, -7.255]], o: [[0, 0], [13.859, -3.032], [28.966, -2.219], [35.572, 28.099], [-1.84, 32.214], [-258.687, 21.873]], v: [[-64.374, -98.159], [-64.319, -98.213], [-18.462, -110.719], [61.07, -80.671], [114.4, 36.274], [129.344, 91.065]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.4, 0.310000011968, 0.243000000598, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [518.139, 123.486], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 2, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [16.026, 1.841], [22.956, -18.192], [-2.599, -45.208], [8.879, -7.255]], o: [[0, 0], [-13.86, -3.032], [-28.965, -2.219], [-35.517, 28.045], [1.84, 32.214], [258.687, 21.927]], v: [[64.374, -98.159], [64.32, -98.213], [18.461, -110.719], [-61.071, -80.671], [-114.4, 36.22], [-129.343, 91.011]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.4, 0.310000011968, 0.243000000598, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [368.384, 123.486], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 2, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-6.01, 72.819], [25.392, 24.851], [37.628, -2.87], [15.755, 0], [19.978, 2.274], [25.826, -25.284], [-2.924, -35.355], [0, 0], [-182.348, 0]], o: [[0, 0], [2.924, -35.355], [-25.879, -25.284], [-19.979, 2.328], [-15.755, 0], [-37.628, -2.87], [-25.392, 24.851], [6.009, 72.874], [0, 0], [182.348, 0]], v: [[224.415, 82.782], [189.007, 17.488], [154.519, -77.963], [55.766, -124.957], [0, -111.151], [-55.766, -124.957], [-154.52, -77.963], [-189.007, 17.488], [-224.415, 82.782], [0, 127.827]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.426999978458, 0.337000020345, 0.275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [442.666, 137.671], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 2, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[9.803, 7.886], [-0.365, 0.031], [-1.866, 32.237], [0.164, 4.287], [-0.254, 1.776], [14.806, 17.222], [6.793, 6.628], [6.434, 5.087], [26.081, 0.592], [0.156, 5e-3], [0.447, 0], [0.127, 1e-3], [0.628, -0.018], [1.676, -0.129], [2.67, -0.589], [0.654, -0.158], [1.994, -0.582], [0.959, -0.296], [1.713, -0.564], [1.994, -0.665], [7.713, 0], [3.449, 0.752], [0, 0], [10.184, 3.009], [0.303, 0.087], [0.133, 0.038], [0.365, 0.103], [1.634, 0.385], [0.549, 0.12], [0.306, 0.064], [2.337, 0.269], [2.115, -8e-3], [0.57, -0.014], [0.473, -0.02], [1.108, -0.092], [0.673, -0.072], [0.736, -0.098], [0.466, -0.069], [0.47, -0.078], [0.408, -0.074], [1.492, -0.347], [0.247, -0.059], [0.3, -0.075], [0.534, -0.143], [1.51, -0.482], [0.362, -0.12], [0.276, -0.094], [0.019, -7e-3], [1.468, -0.569], [0.533, -0.217], [0.391, -0.164], [0.346, -0.148], [1.203, -0.562], [0.34, -0.163], [0.652, -0.325], [0.362, -0.184], [0.575, -0.303], [0.605, -0.331], [1.102, -0.638], [0.385, -0.227], [0.425, -0.256], [1.666, -1.09], [0.142, -0.093], [0.087, -0.058], [0.18, -0.12], [1.498, -1.066], [0.529, -0.385], [0.033, -0.024], [0.403, -0.298], [0.804, -0.614], [0.554, -0.433], [0.364, -0.289], [0.196, -0.156], [0.602, -0.49], [1.546, -1.33], [0.5, -0.437], [1.928, -1.797], [0.439, -0.415], [1.086, -1.062], [0.183, -0.181], [5.156, -5.998], [-3.21, -22.469], [-0.296, -5.816], [-7e-3, -0.143], [-0.029, -1.557], [-4e-3, -0.206], [0.031, -1.546], [5e-3, -0.18], [0.092, -1.48], [6e-3, -0.104], [0.154, -1.431], [2e-3, -0.016], [0.212, -1.361], [0, 0], [0.068, -0.4], [0.124, -0.631], [0.16, -0.7], [0.151, -0.586], [0.185, -0.634], [0.173, -0.536], [0.206, -0.571], [0.96, -1.81], [0.189, -0.333], [0.303, -0.482], [0.198, -0.295], [0.322, -0.434], [0.204, -0.259], [0.338, -0.389], [0.205, -0.222], [0.355, -0.348], [0.2, -0.186], [0.373, -0.312], [0, 0], [-182.309, 0], [0, 0]], o: [[0.364, -0.03], [-8.863, -7.208], [0.251, -4.328], [0.205, -1.698], [3.21, -22.469], [-5.369, -6.246], [-5.396, -6.022], [-20.868, -16.499], [-0.156, -6e-3], [-0.448, -8e-3], [-0.127, -2e-3], [-0.627, 3e-3], [-1.666, 0.022], [-2.678, 0.308], [-0.656, 0.145], [-2.013, 0.485], [-0.964, 0.281], [-1.736, 0.537], [-2.036, 0.67], [-9.259, 3.088], [-3.142, 0], [0, 0], [-8.959, -1.953], [-0.303, -0.089], [-0.132, -0.039], [-0.365, -0.105], [-1.622, -0.451], [-0.548, -0.13], [-0.306, -0.067], [-2.329, -0.485], [-2.131, -0.164], [-0.571, 2e-3], [-0.474, 0.012], [-1.114, 0.048], [-0.676, 0.056], [-0.739, 0.079], [-0.467, 0.063], [-0.471, 0.071], [-0.41, 0.068], [-1.506, 0.272], [-0.247, 0.057], [-0.3, 0.072], [-0.535, 0.134], [-1.526, 0.41], [-0.364, 0.116], [-0.276, 0.092], [-0.019, 7e-3], [-1.484, 0.506], [-0.536, 0.208], [-0.391, 0.158], [-0.346, 0.144], [-1.215, 0.521], [-0.34, 0.159], [-0.656, 0.313], [-0.364, 0.181], [-0.578, 0.295], [-0.608, 0.32], [-1.115, 0.608], [-0.386, 0.224], [-0.426, 0.253], [-1.701, 1.028], [-0.142, 0.093], [-0.087, 0.057], [-0.18, 0.119], [-1.53, 1.02], [-0.534, 0.38], [-0.033, 0.023], [-0.405, 0.295], [-0.814, 0.602], [-0.56, 0.427], [-0.367, 0.286], [-0.197, 0.155], [-0.609, 0.485], [-1.594, 1.299], [-0.506, 0.435], [-2.018, 1.765], [-0.443, 0.414], [-1.119, 1.057], [-0.185, 0.18], [-6.475, 6.368], [-14.806, 17.222], [0.999, 6.994], [7e-3, 0.143], [0.08, 1.646], [4e-3, 0.208], [0.023, 1.644], [-3e-3, 0.181], [-0.037, 1.58], [-6e-3, 0.104], [-0.099, 1.535], [-2e-3, 0.016], [-0.158, 1.467], [0, 0], [-0.064, 0.41], [-0.112, 0.656], [-0.144, 0.732], [-0.139, 0.609], [-0.171, 0.665], [-0.164, 0.56], [-0.194, 0.6], [-0.802, 2.219], [-0.184, 0.347], [-0.292, 0.515], [-0.194, 0.308], [-0.313, 0.466], [-0.2, 0.271], [-0.33, 0.419], [-0.203, 0.233], [-0.35, 0.379], [-0.199, 0.195], [-0.368, 0.341], [-9.907, 8.279], [0, 0], [182.31, 0], [0, 0]], v: [[203.717, 75.535], [204.793, 75.457], [189.858, 20.688], [189.918, 7.768], [190.583, 2.595], [172.619, -59.966], [154.273, -79.513], [136.523, -96.232], [64.871, -126.436], [64.403, -126.448], [63.064, -126.482], [62.683, -126.491], [60.796, -126.431], [55.79, -126.27], [47.767, -124.881], [45.808, -124.387], [39.795, -122.814], [36.923, -121.933], [31.748, -120.301], [25.718, -118.303], [-1e-3, -112.445], [-9.942, -113.741], [-9.944, -113.742], [-38.952, -122.589], [-39.861, -122.844], [-40.261, -122.957], [-41.353, -123.265], [-46.236, -124.512], [-47.876, -124.908], [-48.793, -125.097], [-55.791, -126.27], [-62.158, -126.475], [-63.868, -126.438], [-65.29, -126.396], [-68.621, -126.179], [-70.645, -125.996], [-72.858, -125.737], [-74.254, -125.523], [-75.666, -125.306], [-76.897, -125.117], [-81.392, -124.173], [-82.134, -124.015], [-83.035, -123.788], [-84.632, -123.351], [-89.188, -122.019], [-90.282, -121.689], [-91.103, -121.389], [-91.158, -121.369], [-95.585, -119.753], [-97.193, -119.133], [-98.367, -118.652], [-99.398, -118.2], [-103.031, -116.595], [-104.048, -116.097], [-106.009, -115.136], [-107.103, -114.6], [-108.829, -113.698], [-110.645, -112.717], [-113.972, -110.851], [-115.129, -110.18], [-116.406, -109.418], [-121.459, -106.245], [-121.888, -105.973], [-122.147, -105.799], [-122.683, -105.433], [-127.225, -102.305], [-128.814, -101.151], [-128.912, -101.08], [-130.127, -100.197], [-132.549, -98.371], [-134.221, -97.084], [-135.329, -96.232], [-135.903, -95.751], [-137.717, -94.29], [-142.423, -90.346], [-143.946, -89.048], [-149.866, -83.703], [-151.171, -82.458], [-154.502, -79.281], [-155.037, -78.727], [-172.569, -59.966], [-190.533, 2.595], [-188.619, 21.779], [-188.602, 22.201], [-188.442, 27.001], [-188.425, 27.634], [-188.442, 32.41], [-188.45, 32.959], [-188.646, 37.547], [-188.664, 37.861], [-189.043, 42.312], [-189.049, 42.361], [-189.605, 46.604], [-189.602, 46.604], [-189.798, 47.823], [-190.142, 49.775], [-190.608, 51.901], [-191.03, 53.72], [-191.576, 55.645], [-192.067, 57.321], [-192.68, 59.046], [-195.329, 65.086], [-195.88, 66.133], [-196.781, 67.604], [-197.362, 68.529], [-198.319, 69.861], [-198.921, 70.669], [-199.927, 71.869], [-200.537, 72.562], [-201.596, 73.646], [-202.193, 74.222], [-203.305, 75.199], [-224.403, 81.464], [-1e-3, 126.491], [224.403, 81.464]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "st", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 5, ix: 5 }, lc: 1, lj: 1, ml: 10, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: false }, { ty: "tr", p: { a: 0, k: [442.494, 138.991], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 2, cix: 2, bm: 0, ix: 14, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.798, 2.024], [100.021, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.133, -2.619], [-0.79, -0.26], [-61.113, -5.394], [-44.196, 1.662], [-65.31, 20.058]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [-100.019, 0], [-3.233, 2.339], [0.784, 0.263], [51.799, 15.422], [43.322, 3.561], [79.747, -3.515], [-2.723, -2.236]], v: [[254.135, -22.246], [6.66, -3.993], [0.641, -3.993], [0.63, -3.993], [-5.391, -3.993], [-252.865, -22.246], [-262.413, -14.794], [-260.056, -14.007], [-89.686, 17.73], [42.77, 20.584], [262.413, -15.837]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.317999985639, 0.263000009574, 0.211999990426, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [441.865, 290.14], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 15", np: 2, cix: 2, bm: 0, ix: 15, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[10.696, -3.285], [-0.396, -0.331], [-9.49, 4.062]], o: [[0.397, 0.327], [10.574, -3.543], [-10.18, 3.663]], v: [[-15.662, 4.723], [-14.469, 5.703], [15.662, -5.703]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.317999985639, 0.263000009574, 0.211999990426, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [719.941, 269.58], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 16", np: 2, cix: 2, bm: 0, ix: 16, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[79.747, -3.515], [-61.433, 20.583], [0.397, 0.327]], o: [[80.957, -3.044], [-0.397, -0.331], [-65.311, 20.058]], v: [[-110.419, 18.21], [110.418, -17.23], [109.225, -18.21]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.317999985639, 0.263000009574, 0.211999990426, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [595.053, 292.514], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 17", np: 2, cix: 2, bm: 0, ix: 17, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-62.529, -5.141], [51.799, 15.421]], o: [[-61.113, -5.394], [48.684, 16.016]], v: [[85.185, 15.868], [-85.185, -15.868]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.317999985639, 0.263000009574, 0.211999990426, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [266.994, 292.002], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 18", np: 2, cix: 2, bm: 0, ix: 18, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 3, nm: "All_CTRL", parent: 9, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 1 }, o: { x: 0.302, y: 0 }, t: 0, s: [600, 548.416, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.2, y: 1 }, o: { x: 0.302, y: 0 }, t: 12, s: [600, 645.416, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.302, y: 0.302 }, t: 40, s: [600, 548.416, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 1 }, o: { x: 0.302, y: 0 }, t: 75, s: [600, 548.416, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.2, y: 1 }, o: { x: 0.302, y: 0 }, t: 87, s: [600, 573.416, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 115, s: [600, 548.416, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [50.016, 52.614, 100], ix: 6 } }, ao: 0, ip: 0, op: 121, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Eye 2", parent: 3, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [300.115, -147.526, 0], ix: 2 }, a: { a: 0, k: [449.895, 505.669, 0], ix: 1 }, s: { a: 0, k: [-212.56, 202.064, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -49.413], [-28.206, 0], [0, 49.413], [28.206, 0]], o: [[0, 49.413], [28.206, 0], [0, -49.413], [-28.206, 0]], v: [[-51.071, 0], [0, 89.471], [51.071, 0], [0, -89.471]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.395999983245, 0.184000007779, 0.004000000393, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [449.895, 505.669], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 121, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Eye", parent: 3, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-300.115, -147.526, 0], ix: 2 }, a: { a: 0, k: [449.895, 505.669, 0], ix: 1 }, s: { a: 0, k: [212.56, 202.064, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -49.413], [-28.206, 0], [0, 49.413], [28.206, 0]], o: [[0, 49.413], [28.206, 0], [0, -49.413], [-28.206, 0]], v: [[-51.071, 0], [0, 89.471], [51.071, 0], [0, -89.471]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.395999983245, 0.184000007779, 0.004000000393, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [449.895, 505.669], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 121, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Mouth 2", parent: 3, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-4.083, 319.931, 0], ix: 2 }, a: { a: 0, k: [295.967, 123.552, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [199.936, 199.567, 100] }, { i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 12, s: [199.936, 180.561, 100] }, { t: 40, s: [199.936, 199.567, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 4, s: [{ i: [[72.638, 0], [66.229, 16.837], [-2.101, -6.129], [-104.443, 0], [-27.922, 81.446], [7.171, -1.823]], o: [[-72.637, 0], [-7.171, -1.823], [27.917, 81.447], [104.443, 0], [2.101, -6.129], [-66.229, 16.836]], v: [[0, -40.561], [-208.98, -66.527], [-220.454, -56.597], [0, 68.35], [220.454, -56.597], [208.98, -66.527]], c: true }] }, { i: { x: 0.2, y: 1 }, o: { x: 0.333, y: 0 }, t: 19, s: [{ i: [[91.422, 0], [83.355, 26.25], [-2.644, -9.556], [-131.452, 0], [-35.143, 126.978], [9.025, -2.842]], o: [[-91.421, 0], [-9.026, -2.842], [35.137, 126.979], [131.452, 0], [2.645, -9.556], [-83.355, 26.247]], v: [[0, -46.494], [-263.021, -86.976], [-277.462, -71.494], [0, 123.302], [277.462, -71.494], [263.021, -86.976]], c: true }] }, { i: { x: 0.2, y: 1 }, o: { x: 0.167, y: 0 }, t: 41, s: [{ i: [[96.517, 0], [88.001, 30.371], [-2.792, -11.057], [-138.778, 0], [-37.096, 146.929], [9.528, -3.289]], o: [[-96.516, 0], [-9.529, -3.289], [37.095, 146.929], [138.778, 0], [2.792, -11.057], [-88.001, 30.371]], v: [[0, -73.171], [-277.679, -120.013], [-292.925, -102.099], [0, 123.302], [292.925, -102.099], [277.679, -120.013]], c: true }] }, { i: { x: 0.833, y: 1 }, o: { x: 0.167, y: 0 }, t: 83, s: [{ i: [[96.517, 0], [88.001, 30.371], [-2.792, -11.057], [-138.778, 0], [-37.096, 146.929], [9.528, -3.289]], o: [[-96.516, 0], [-9.529, -3.289], [37.095, 146.929], [138.778, 0], [2.792, -11.057], [-88.001, 30.371]], v: [[0, -73.171], [-277.679, -120.013], [-292.925, -102.099], [0, 123.302], [292.925, -102.099], [277.679, -120.013]], c: true }] }, { t: 96, s: [{ i: [[72.638, 0], [66.229, 16.837], [-2.101, -6.129], [-104.443, 0], [-27.922, 81.446], [7.171, -1.823]], o: [[-72.637, 0], [-7.171, -1.823], [27.917, 81.447], [104.443, 0], [2.101, -6.129], [-66.229, 16.836]], v: [[0, -40.561], [-208.98, -66.527], [-220.454, -56.597], [0, 68.35], [220.454, -56.597], [208.98, -66.527]], c: true }] }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "tr", p: { a: 0, k: [295.967, 123.552], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 1, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 34, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: false }], ip: 0, op: 121, st: -30, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Teeth", parent: 3, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-3.983, 227.717, 0], ix: 2 }, a: { a: 0, k: [273.784, 56.006, 0], ix: 1 }, s: { a: 0, k: [195, 213.485, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [{ i: [[72.428, 13.758], [-124.771, 0], [-35.426, 25.493], [95.023, 0]], o: [[35.427, 25.493], [124.771, 0], [-72.43, 13.758], [-95.023, 0]], v: [[-228.259, -17.503], [0, 64.887], [228.259, -17.503], [0, -1.03]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 12, s: [{ i: [[86.794, 29.474], [-124.771, 0], [-42.453, 54.614], [95.023, 0]], o: [[42.454, 54.614], [124.771, 0], [-86.796, 29.474], [-95.023, 0]], v: [[-273.534, -35.145], [0, 61.379], [273.534, -35.145], [0, 2.954]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 40, s: [{ i: [[86.794, 29.474], [-124.771, 0], [-42.453, 54.614], [95.023, 0]], o: [[42.454, 54.614], [124.771, 0], [-86.796, 29.474], [-95.023, 0]], v: [[-273.534, -46.624], [0, 64.887], [273.534, -46.624], [0, -1.03]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 75, s: [{ i: [[86.794, 29.474], [-124.771, 0], [-42.453, 54.614], [95.023, 0]], o: [[42.454, 54.614], [124.771, 0], [-86.796, 29.474], [-95.023, 0]], v: [[-273.534, -46.624], [0, 64.887], [273.534, -46.624], [0, -1.03]], c: true }] }, { t: 105, s: [{ i: [[72.428, 13.758], [-124.771, 0], [-35.426, 25.493], [95.023, 0]], o: [[35.427, 25.493], [124.771, 0], [-72.43, 13.758], [-95.023, 0]], v: [[-228.259, -17.503], [0, 64.887], [228.259, -17.503], [0, -1.03]], c: true }] }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [273.784, 56.005], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 121, st: -30, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Mouth", parent: 3, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-4.083, 319.931, 0], ix: 2 }, a: { a: 0, k: [295.967, 123.552, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [199.936, 199.567, 100] }, { i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 12, s: [199.936, 180.561, 100] }, { t: 40, s: [199.936, 199.567, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 4, s: [{ i: [[72.638, 0], [66.229, 16.837], [-2.101, -6.129], [-104.443, 0], [-27.922, 81.446], [7.171, -1.823]], o: [[-72.637, 0], [-7.171, -1.823], [27.917, 81.447], [104.443, 0], [2.101, -6.129], [-66.229, 16.836]], v: [[0, -40.561], [-208.98, -66.527], [-220.454, -56.597], [0, 68.35], [220.454, -56.597], [208.98, -66.527]], c: true }] }, { i: { x: 0.2, y: 1 }, o: { x: 0.333, y: 0 }, t: 19, s: [{ i: [[91.422, 0], [83.355, 26.25], [-2.644, -9.556], [-131.452, 0], [-35.143, 126.978], [9.025, -2.842]], o: [[-91.421, 0], [-9.026, -2.842], [35.137, 126.979], [131.452, 0], [2.645, -9.556], [-83.355, 26.247]], v: [[0, -46.494], [-263.021, -86.976], [-277.462, -71.494], [0, 123.302], [277.462, -71.494], [263.021, -86.976]], c: true }] }, { i: { x: 0.2, y: 1 }, o: { x: 0.167, y: 0 }, t: 41, s: [{ i: [[96.517, 0], [88.001, 30.371], [-2.792, -11.057], [-138.778, 0], [-37.096, 146.929], [9.528, -3.289]], o: [[-96.516, 0], [-9.529, -3.289], [37.095, 146.929], [138.778, 0], [2.792, -11.057], [-88.001, 30.371]], v: [[0, -73.171], [-277.679, -120.013], [-292.925, -102.099], [0, 123.302], [292.925, -102.099], [277.679, -120.013]], c: true }] }, { i: { x: 0.833, y: 1 }, o: { x: 0.167, y: 0 }, t: 83, s: [{ i: [[96.517, 0], [88.001, 30.371], [-2.792, -11.057], [-138.778, 0], [-37.096, 146.929], [9.528, -3.289]], o: [[-96.516, 0], [-9.529, -3.289], [37.095, 146.929], [138.778, 0], [2.792, -11.057], [-88.001, 30.371]], v: [[0, -73.171], [-277.679, -120.013], [-292.925, -102.099], [0, 123.302], [292.925, -102.099], [277.679, -120.013]], c: true }] }, { t: 96, s: [{ i: [[72.638, 0], [66.229, 16.837], [-2.101, -6.129], [-104.443, 0], [-27.922, 81.446], [7.171, -1.823]], o: [[-72.637, 0], [-7.171, -1.823], [27.917, 81.447], [104.443, 0], [2.101, -6.129], [-66.229, 16.836]], v: [[0, -40.561], [-208.98, -66.527], [-220.454, -56.597], [0, 68.35], [220.454, -56.597], [208.98, -66.527]], c: true }] }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.395999983245, 0.184000007779, 0.004000000393, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [295.967, 123.552], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 121, st: -30, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "Head 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [1e3, 2e3, 0], ix: 2 }, a: { a: 0, k: [600, 1006.516, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.4, 0.4, 0.667], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.333], y: [0, 0, 0] }, t: 0, s: [195, 195, 100] }, { i: { x: [0.4, 0.4, 0.667], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.333], y: [0, 0, 0] }, t: 12, s: [200, 190, 100] }, { i: { x: [0.4, 0.4, 0.667], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.333], y: [0, 0, 0] }, t: 40, s: [195, 195, 100] }, { i: { x: [0.4, 0.4, 0.667], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.333], y: [0, 0, 0] }, t: 69, s: [195, 195, 100] }, { i: { x: [0.4, 0.4, 0.667], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.333], y: [0, 0, 0] }, t: 81, s: [200, 190, 100] }, { t: 109, s: [195, 195, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -2.066], [16.418, 0], [0, 2.066], [-16.419, 0]], o: [[0, 2.066], [-16.419, 0], [0, -2.066], [16.418, 0]], v: [[29.73, 0], [1e-3, 3.741], [-29.729, 0], [1e-3, -3.741]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [595.314, 241.309], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.526, -1.998], [8.073, -2.125], [0.526, 1.998], [-8.073, 2.125]], o: [[0.526, 1.999], [-8.072, 2.125], [-0.526, -1.998], [8.072, -2.125]], v: [[14.617, -3.848], [0.952, 3.618], [-14.617, 3.848], [-0.952, -3.618]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [514.709, 250.76], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-43.382, -5.817], [71.738, 0], [-31.171, 4.179]], o: [[0, 0], [31.171, 4.179], [-71.738, 0], [43.382, -5.817]], v: [[0, 7.19], [103.568, 12.522], [0, -16.702], [-103.568, 12.522]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 0.987999949736, 0.795999983245, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 248.499], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[157.856, 0], [0, 0], [-35.153, -4.546], [-148.647, 0], [-25.794, 3.336]], o: [[0, 0], [-157.857, 0], [25.795, 3.336], [148.646, 0], [35.153, -4.546]], v: [[0, -55.784], [0, -55.784], [-200.512, 52.448], [0, 28.051], [200.511, 52.448]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 0.980000035903, 0.638999968884, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 287.582], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[151.303, 0], [-35.586, -128.684], [-151.303, 0], [-17.243, 62.357]], o: [[-151.303, 0], [17.243, 62.357], [151.303, 0], [35.586, -128.684]], v: [[0, -150.188], [-273.958, 87.831], [0, 80.382], [273.958, 87.831]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 0.969000004787, 0.419999994016, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 386.101], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 2, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -182.075], [182.075, 0], [0, 182.075], [-182.074, 0]], o: [[0, 182.075], [-182.074, 0], [0, -182.075], [182.075, 0]], v: [[329.676, 0], [0, 329.675], [-329.675, 0], [0, -329.675]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 0.834999952129, 0.204000001795, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 565.537], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 2, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -200.91], [200.91, 0], [0, 200.91], [-200.91, 0]], o: [[0, 200.91], [-200.91, 0], [0, -200.91], [200.91, 0]], v: [[363.78, 0], [0, 363.78], [-363.78, 0], [0, -363.78]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [1, 0.685999971278, 0.039000002543, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 574.632], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 2, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -213.467], [213.467, 0], [0, 213.467], [-213.466, 0]], o: [[0, 213.467], [-213.466, 0], [0, -213.467], [213.467, 0]], v: [[386.516, 0], [0, 386.516], [-386.516, 0], [0, -386.516]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.929000016755, 0.477999997606, 0.105999995213, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 586], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 2, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -224.513], [224.513, 0], [0, 224.513], [-224.512, 0]], o: [[0, 224.513], [-224.512, 0], [0, -224.513], [224.513, 0]], v: [[406.516, 0], [0, 406.516], [-406.516, 0], [0, -406.516]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.638999968884, 0.26699999641, 0.122000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [600, 600], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 2, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 121, st: 0, bm: 0 }, { ddd: 0, ind: 10, ty: 4, nm: "Hat", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-1.861, -275.26, 0], ix: 2 }, a: { a: 0, k: [504.896, 152.386, 0], ix: 1 }, s: { a: 0, k: [195, 195, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-63.829, 55.005], [-3.362, -2.637], [5.01, -12.343], [-176.329, -68.469], [0, 0], [0.038, -0.097]], o: [[3.184, 2.701], [-9.427, 9.328], [-13.016, 32.075], [0, 0], [-0.319, 0.803], [-179.757, -53.388]], v: [[-44.191, -151.333], [-34.372, -143.323], [-56.373, -110.609], [107.982, 136.713], [107.982, 150.529], [107.982, 150.529]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [108.27, 153.19], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-13.016, 32.075], [-9.427, 9.328], [-54.165, -19.485], [-10.573, -3.542], [5.192, -13.073], [0, 0]], o: [[5.01, -12.343], [36.328, 28.498], [9.491, 4.062], [-61.678, 51.516], [0, 0], [-176.467, -71.864]], v: [[-131.047, -112.715], [-109.046, -145.43], [28.059, -72.755], [148.408, -46.926], [63.918, 145.43], [28.059, 132.749]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [182.944, 155.297], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[63.829, 55.005], [3.362, -2.637], [-5.01, -12.343], [176.329, -68.469], [0, 0], [-0.038, -0.097]], o: [[-3.185, 2.701], [9.426, 9.328], [13.015, 32.075], [0, 0], [0.32, 0.803], [179.758, -53.388]], v: [[44.192, -151.333], [34.372, -143.323], [56.373, -110.609], [-107.982, 136.713], [-107.982, 150.529], [-107.982, 150.529]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.510000011968, 0.416000007181, 0.322000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [901.521, 151.583], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: false }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[13.016, 32.075], [9.427, 9.328], [54.165, -19.485], [10.573, -3.542], [-5.192, -13.073], [0, 0]], o: [[-5.01, -12.343], [-36.328, 28.498], [-9.491, 4.062], [61.679, 51.516], [0, 0], [176.467, -71.864]], v: [[131.047, -112.715], [109.046, -145.43], [-28.059, -72.755], [-148.408, -46.926], [-63.918, 145.43], [-28.059, 132.749]], c: true }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "fl", c: { a: 0, k: [0.234999997008, 0.172999991623, 0.102000000898, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [826.847, 153.69], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 180, st: 0, bm: 0 }];
var markers = [];
var cowboy_hat_face_default = { v, meta: meta5, fr, ip, op, w, h, nm, ddd, assets, layers, markers };

// route:/Users/deerpark/Dev/bolt-ux/app/routes/contact.tsx
function Contact2() {
  const { pathname } = (0, import_react_router_dom14.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-row pb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-40 pt-20"
  }, /* @__PURE__ */ React.createElement(import_lottie_react.default, {
    loop: true,
    autoplay: true,
    animationData: cowboy_hat_face_default
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-5xl md:text-7xl font-thin mb-5"
  }, "1588-9999"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm md:text-base opacity-80"
  }, "\uD3C9\uC77C 10:00 - 18:00"), /* @__PURE__ */ React.createElement("span", {
    className: "text-xs md:text-sm opacity-50"
  }, "(\uC810\uC2EC\uC2DC\uAC04 13:00 - 14:00 \uC81C\uC678 \xB7 \uC8FC\uB9D0/\uACF5\uD734\uC77C \uC81C\uC678)"))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy2
});
init_react();
var import_react_router_dom15 = require("react-router-dom");
function Privacy2() {
  const { pathname } = (0, import_react_router_dom15.useLocation)();
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
  loader: () => loader13
});
init_react();
var import_remix26 = __toESM(require_remix());
var import_react_datocms16 = require("react-datocms");
var loader13 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: promotions
  });
};
function Index4() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix26.useLoaderData)();
  const {
    data: { promotions: promotions2 }
  } = (0, import_react_datocms16.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section max-w-112"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-section-row hidden md:flex"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions2.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix26.Link, {
    to: promotion.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms16.Image, {
    className: "bx-promotion-image",
    data: promotion.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  })))))))), /* @__PURE__ */ React.createElement(import_remix26.Outlet, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/plan.tsx
var plan_exports = {};
__export(plan_exports, {
  default: () => Plan,
  loader: () => loader14
});
init_react();
var import_remix27 = __toESM(require_remix());
var import_react_router_dom16 = require("react-router-dom");
var import_react_datocms18 = require("react-datocms");

// app/components/Card/ShadowCard.tsx
init_react();
var import_react_datocms17 = require("react-datocms");
function ShadowCard({ item }) {
  const { title, icon, photo, contents, extra } = item;
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-thumb"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-thumb-cover"
  }, /* @__PURE__ */ React.createElement(import_react_datocms17.Image, {
    className: "bx-shadow-card-thumb-img",
    data: photo.responsiveImage
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-contents"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-title"
  }, icon && icon, /* @__PURE__ */ React.createElement("span", null, title)), contents && /* @__PURE__ */ React.createElement("ul", {
    className: "bx-list-items"
  }, contents.map((content, index) => /* @__PURE__ */ React.createElement("li", {
    key: index.toString()
  }, content))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-desc-extra"
  }, extra)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-extra"
  }, extra)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-shadow1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-shadow-card-shadow2"
  })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/plan.tsx
var loader14 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: plan
  });
};
function Plan() {
  const { pathname } = (0, import_react_router_dom16.useLocation)();
  const { title, Icon, desc } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix27.useLoaderData)();
  const {
    data: { photo }
  } = (0, import_react_datocms18.useQuerySubscription)(datoQuerySubscription2);
  const list = [
    {
      title: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
      icon: /* @__PURE__ */ React.createElement(Homepage, null),
      photo: photo.plan[0],
      contents: [
        "PC, \uBAA8\uBC14\uC77C \uBC18\uC751\uD615\uC73C\uB85C \uC81C\uC791",
        "\uAC80\uC0C9\uC5D4\uC9C4 \uCD5C\uC801\uD654 \uB300\uC751",
        "1\uB144\uAC04 \uB3C4\uBA54\uC778 / \uD638\uC2A4\uD305 \uBB34\uB8CC \uC81C\uACF5",
        "5\uD398\uC774\uC9C0\uAE4C\uC9C0 \uBB34\uB8CC (\uD398\uC774\uC9C0 \uCD94\uAC00\uC2DC \uC694\uAE08 \uBCC4\uB3C4)"
      ],
      extra: /* @__PURE__ */ React.createElement("span", {
        className: "bx-shadow-card-badge"
      }, /* @__PURE__ */ React.createElement("span", null, "50\uB9CC\uC6D0"))
    },
    {
      title: "\uC2F1\uAE00\uD398\uC774\uC9C0 \uC81C\uC791",
      icon: /* @__PURE__ */ React.createElement(Singlepage, null),
      photo: photo.plan[1],
      contents: [
        "PC, \uBAA8\uBC14\uC77C \uBC18\uC751\uD615\uC73C\uB85C \uC81C\uC791",
        "\uAC80\uC0C9\uC5D4\uC9C4 \uCD5C\uC801\uD654 \uB300\uC751",
        "1\uB144\uAC04 \uB3C4\uBA54\uC778 / \uD638\uC2A4\uD305 \uBB34\uB8CC \uC81C\uACF5",
        "5\uD398\uC774\uC9C0\uAE4C\uC9C0 \uBB34\uB8CC (\uD398\uC774\uC9C0 \uCD94\uAC00\uC2DC \uC694\uAE08 \uBCC4\uB3C4)"
      ],
      extra: /* @__PURE__ */ React.createElement("span", {
        className: "bx-shadow-card-badge"
      }, /* @__PURE__ */ React.createElement("span", null, "20\uB9CC\uC6D0"))
    },
    {
      title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
      icon: /* @__PURE__ */ React.createElement(Publishing, null),
      photo: photo.plan[2],
      contents: [
        "PC, \uBAA8\uBC14\uC77C \uBC18\uC751\uD615\uC73C\uB85C \uAC1C\uBC1C",
        "\uC6F9 \uC811\uADFC\uC131 \uC900\uC218",
        "10\uD398\uC774\uC9C0 \uC774\uC0C1 \uC694\uAE08 \uBCC4\uB3C4",
        "\uC6F9 \uC811\uADFC\uC131 \uC778\uC99D \uB9C8\uD06C \uD68D\uB4DD \uAC00\uB2A5 (\uC694\uAE08 \uBCC4\uB3C4)"
      ],
      extra: /* @__PURE__ */ React.createElement("span", {
        className: "bx-shadow-card-badge"
      }, /* @__PURE__ */ React.createElement("span", null, "50\uB9CC\uC6D0"))
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-row pt-3"
  }, list.map((listItem) => /* @__PURE__ */ React.createElement(ShadowCard, {
    key: listItem.title,
    item: listItem
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "05f43285", "entry": { "module": "/build/entry.client-M7KO4KFG.js", "imports": ["/build/_shared/chunk-MKHN7Y6S.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-O2V2KBOE.js", "imports": ["/build/_shared/chunk-5QQHE74C.js", "/build/_shared/chunk-VGUNYXGW.js", "/build/_shared/chunk-457TPCSV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-KXYGO24O.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-E4YX55EP.js", "imports": ["/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug": { "id": "routes/news/$slug", "parentId": "root", "path": "news/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug-SHYVVGSE.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/index": { "id": "routes/news/index", "parentId": "root", "path": "news", "index": true, "caseSensitive": void 0, "module": "/build/routes/news/index-3LDEU7E4.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/$slug": { "id": "routes/notices/$slug", "parentId": "root", "path": "notices/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/$slug-4KE4QBYY.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/index": { "id": "routes/notices/index", "parentId": "root", "path": "notices", "index": true, "caseSensitive": void 0, "module": "/build/routes/notices/index-UEJYGFTC.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan": { "id": "routes/plan", "parentId": "root", "path": "plan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan-5Q6EKJJX.js", "imports": ["/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-4IHARAIC.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-MEU5U2CL.js", "imports": ["/build/_shared/chunk-DNC4WCKW.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/posts": { "id": "routes/posts/posts", "parentId": "root", "path": "posts/posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/posts-C4UZEQRM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/start": { "id": "routes/posts/preview/start", "parentId": "root", "path": "posts/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/start-VB7JK5J2.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/stop": { "id": "routes/posts/preview/stop", "parentId": "root", "path": "posts/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/stop-Y44W5L7E.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-AN6WXB5B.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-XYL7BS5X.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-M4ANFQUR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.appdesign": { "id": "routes/services.appdesign", "parentId": "root", "path": "services/appdesign", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.appdesign-QPDUYCXR.js", "imports": ["/build/_shared/chunk-BA74VEAD.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.consulting": { "id": "routes/services.consulting", "parentId": "root", "path": "services/consulting", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.consulting-JGACF3YV.js", "imports": ["/build/_shared/chunk-BA74VEAD.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.homepage": { "id": "routes/services.homepage", "parentId": "root", "path": "services/homepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.homepage-NMYVFSB2.js", "imports": ["/build/_shared/chunk-EEGKDDWS.js", "/build/_shared/chunk-BA74VEAD.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.publishing": { "id": "routes/services.publishing", "parentId": "root", "path": "services/publishing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.publishing-DZCYIVLR.js", "imports": ["/build/_shared/chunk-EEGKDDWS.js", "/build/_shared/chunk-BA74VEAD.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.singlepage": { "id": "routes/services.singlepage", "parentId": "root", "path": "services/singlepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.singlepage-NI656CO2.js", "imports": ["/build/_shared/chunk-EEGKDDWS.js", "/build/_shared/chunk-BA74VEAD.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-EUDRPBXS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-05F43285.js" };

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
  "routes/services.consulting": {
    id: "routes/services.consulting",
    parentId: "root",
    path: "services/consulting",
    index: void 0,
    caseSensitive: void 0,
    module: services_consulting_exports
  },
  "routes/services.publishing": {
    id: "routes/services.publishing",
    parentId: "root",
    path: "services/publishing",
    index: void 0,
    caseSensitive: void 0,
    module: services_publishing_exports
  },
  "routes/services.singlepage": {
    id: "routes/services.singlepage",
    parentId: "root",
    path: "services/singlepage",
    index: void 0,
    caseSensitive: void 0,
    module: services_singlepage_exports
  },
  "routes/posts/preview/stop": {
    id: "routes/posts/preview/stop",
    parentId: "root",
    path: "posts/preview/stop",
    index: void 0,
    caseSensitive: void 0,
    module: stop_exports
  },
  "routes/services.appdesign": {
    id: "routes/services.appdesign",
    parentId: "root",
    path: "services/appdesign",
    index: void 0,
    caseSensitive: void 0,
    module: services_appdesign_exports
  },
  "routes/services.homepage": {
    id: "routes/services.homepage",
    parentId: "root",
    path: "services/homepage",
    index: void 0,
    caseSensitive: void 0,
    module: services_homepage_exports
  },
  "routes/notices/$slug": {
    id: "routes/notices/$slug",
    parentId: "root",
    path: "notices/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/notices/index": {
    id: "routes/notices/index",
    parentId: "root",
    path: "notices",
    index: true,
    caseSensitive: void 0,
    module: notices_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvcXVlcmllcy9yb290LnRzIiwgIi4uL2FwcC9saWIvZnJhZ21lbnRzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Bvc3RzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25ld3MudHMiLCAiLi4vYXBwL3F1ZXJpZXMvbm90aWNlcy50cyIsICIuLi9hcHAvcXVlcmllcy9wcm9tb3Rpb25zLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL2hvbWVwYWdlLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL3NpbmdsZXBhZ2UudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcHVibGlzaGluZy50cyIsICIuLi9hcHAvcXVlcmllcy9zZXJ2aWNlcy9hcHBkZXNpZ24udHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvY29uc3VsdGluZy50cyIsICIuLi9hcHAvcXVlcmllcy9zZXJ2aWNlcy9wbGFuLnRzIiwgIi4uL2FwcC9saWIvY29uZmlnLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQnVsbGV0U29saWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2V0dGluZ3NMaWdodC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ib21lTGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXJyb3dMZWZ0TGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTG9nby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ib21lcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9TaW5nbGVwYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93UmlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHVibGlzaGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcHBkZXNpZ24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQ29uc3VsdGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9OZXdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdGljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9CYW5uZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHJpdmFjeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Db250YWN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1ByaWNlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdEZvdW5kLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1lvdXR1YmUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vVHdpdHRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9JbnN0YWdyYW0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYW5uZXIvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuY29uc3VsdGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvUmVjb21tZW5kLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Sb3cvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xpc3QvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL1RlY2gudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL0Zsb3cudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL0NyZXdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9GQVEudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL1JlZnVuZC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMucHVibGlzaGluZy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZS50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wLnRzIiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnbi50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0F2YXRhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGF0ZS9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdHMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3RzL1Bvc3QudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdG9wLnRzIiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcG9zdHMudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25ld3MvJHNsdWcudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25ld3MvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9jb250YWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcml2YWN5LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcGxhbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ2FyZC9TaGFkb3dDYXJkLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuY29uc3VsdGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMucHVibGlzaGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wb3N0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25ld3MvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9jb250YWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcGxhbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHMvcHJldmlldy9zdGFydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuY29uc3VsdGluZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuY29uc3VsdGluZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9jb25zdWx0aW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL3B1Ymxpc2hpbmdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvc2luZ2xlcGFnZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHMvcHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9hcHBkZXNpZ25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9ob21lcGFnZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90aWNlcy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90aWNlcy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJub3RpY2VzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9ub3RpY2VzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ub3RpY2VzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5vdGljZXNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByZXZpZXcvc3RhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHMvOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvcG9zdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL3Bvc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL3Bvc3RzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3cy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbmV3cy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJuZXdzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbmV3cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJuZXdzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL3NldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXR0aW5nc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXR0aW5nc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH0sXG4gIFwicm91dGVzL2NvbnRhY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvbnRhY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL3ByaXZhY3lcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ByaXZhY3lcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJpdmFjeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjBcbiAgICB9LFxuICBcInJvdXRlcy9wbGFuXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wbGFuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBsYW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjFcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgcmVuZGVyTWV0YVRhZ3MsIHRvUmVtaXhNZXRhLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcm9vdCBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZVByZXZSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IFJvb3RMYXlvdXQsIExheW91dCwgU2l0ZU1ldGEgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3N1bm4tdXMvU1VJVC9mb250cy9zdGF0aWMvd29mZjIvU1VJVC5jc3MnLFxuICAgIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYXBwU3R5bGVzIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgYmxvZywgc2l0ZSB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKFsuLi5ibG9nLnNlbywgLi4uc2l0ZS5mYXZpY29uXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IHVzZUNhdGNoKClcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICBjb25zdCBpc1Jvb3QgPSBwYXRobmFtZSA9PT0gJy8nXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSB9fT5cbiAgICAgICAgICA8TGF5b3V0IHsuLi57IHRpdGxlOiBzdGF0dXMudG9TdHJpbmcoKSwgSWNvbjogSWNvbi5Ob3RGb3VuZCwgZGVzYzogc3RhdHVzVGV4dCwgcHJldlJvdXRlLCBwYXRobmFtZSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1lcnJvcic+XG4gICAgICAgICAgICAgIDxoMT5cdUQzOThcdUM3NzRcdUM5QzBcdUI5N0MgXHVDQzNFXHVDNzQ0IFx1QzIxOCBcdUM1QzZcdUMyQjVcdUIyQzhcdUIyRTQuPC9oMT5cbiAgICAgICAgICAgICAgPHA+XHVDNzc0XHVDODA0XHVDNzNDXHVCODVDIFx1QjNDQ1x1QzU0NCBcdUFDMDBcdUMyRENcdUFDNzBcdUIwOTggXHVCMkU0XHVDMkRDIFx1QzJEQ1x1QjNDNFx1RDU3NCBcdUM4RkNcdUMxMzhcdUM2OTQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgaXNSb290ID0gcGF0aG5hbWUgPT09ICcvJ1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNpdGUgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtyZW5kZXJNZXRhVGFncyhbLi4uc2l0ZS5mYXZpY29uXSl9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSB9fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgdGlueSBmcm9tICd0aW55LWpzb24taHR0cCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfTogYW55KSB7XG4gIGxldCBlbmRwb2ludCA9ICdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20nXG5cbiAgaWYgKHByb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlQpIHtcbiAgICBlbmRwb2ludCArPSBgL2Vudmlyb25tZW50cy8ke3Byb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlR9YFxuICB9XG5cbiAgaWYgKHByZXZpZXcpIHtcbiAgICBlbmRwb2ludCArPSBgL3ByZXZpZXdgXG4gIH1cblxuICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHRpbnkucG9zdCh7XG4gICAgdXJsOiBlbmRwb2ludCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTn1gLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoYm9keS5lcnJvcnMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdPdWNoISBUaGUgcXVlcnkgaGFzIHNvbWUgZXJyb3JzIScsIGJvZHkuZXJyb3JzKVxuICAgIHRocm93IGJvZHkuZXJyb3JzXG4gIH1cblxuICByZXR1cm4gYm9keS5kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oeyByZXF1ZXN0LCAuLi5ncWxSZXF1ZXN0IH06IGFueSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcbiAgY29uc3QgcHJldmlld0VuYWJsZWQgPSBzZXNzaW9uLmdldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHByZXZpZXdFbmFibGVkXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5ncWxSZXF1ZXN0LFxuICAgICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGF3YWl0IGxvYWQoeyAuLi5ncWxSZXF1ZXN0LCBwcmV2aWV3OiB0cnVlIH0pLFxuICAgICAgICAgIHRva2VuOiBwcm9jZXNzLmVudi5EQVRPQ01TX1JFQURPTkxZX1RPS0VOLFxuICAgICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UIHx8IG51bGwsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKGdxbFJlcXVlc3QpLFxuICAgICAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICBtYXhBZ2U6IDYwNF84MDAsXG4gICAgcGF0aDogJy8nLFxuICB9LFxufSlcblxuZXhwb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfVxuIiwgImltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCByb290ID0gYFxuICB7XG4gICAgc2l0ZTogX3NpdGUge1xuICAgICAgZmF2aWNvbjogZmF2aWNvbk1ldGFUYWdzKHZhcmlhbnRzOiBbaWNvbiwgbXNBcHBsaWNhdGlvbiwgYXBwbGVUb3VjaEljb25dKSB7XG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gICAgYmxvZyB7XG4gICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHttZXRhVGFnc0ZyYWdtZW50fVxuYFxuIiwgIi8vIFNlZTogaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vYmxvZy9vZmZlci1yZXNwb25zaXZlLXByb2dyZXNzaXZlLWxxaXAtaW1hZ2VzLWluLTIwMjBcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gICAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmFzZTY0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzRnJhZ21lbnQ6IHN0cmluZyA9IGBcbiAgZnJhZ21lbnQgbWV0YVRhZ3NGcmFnbWVudCBvbiBUYWcge1xuICAgIGF0dHJpYnV0ZXNcbiAgICBjb250ZW50XG4gICAgdGFnXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGNvdmVySW1hZ2UgPSBgY292ZXJJbWFnZSB7XG4gIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgfVxufWBcblxuZXhwb3J0IGNvbnN0IGF1dGhvciA9IGBhdXRob3Ige1xuICBuYW1lXG4gIHBpY3R1cmUge1xuICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gIH1cbn1gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gYFxuICBxdWVyeSBQb3N0QnlTbHVnKCRzbHVnOiBTdHJpbmcpIHtcbiAgICBwb3N0KGZpbHRlcjoge3NsdWc6IHtlcTogJHNsdWd9fSkge1xuICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgICB0aXRsZVxuICAgICAgZXhjZXJwdFxuICAgICAgc2x1Z1xuICAgICAgY29udGVudCB7XG4gICAgICAgIHZhbHVlXG4gICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgIC4uLm9uIEltYWdlQmxvY2tSZWNvcmQge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBkYXRlXG4gICAgICBvZ0ltYWdlOiBjb3ZlckltYWdle1xuICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSlcbiAgICAgIH1cbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtb3JlUG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIsIGZpbHRlcjoge3NsdWc6IHtuZXE6ICRzbHVnfX0pIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHJvbW90aW9uOiBwcm9tb3Rpb24ob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgbG9jYWxlOiBrb19LUikge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuICAke21ldGFUYWdzRnJhZ21lbnR9XG5gXG5cbmV4cG9ydCBjb25zdCBwb3N0cyA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwcm9tb3Rpb246IHByb21vdGlvbihvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBsb2NhbGU6IGtvX0tSKSB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIGNvdmVySW1hZ2UsIGF1dGhvciB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IG5ld3MgPSBgXG4gIHtcbiAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogX2NyZWF0ZWRBdF9ERVNDLCBmaWx0ZXI6IHtjYXRlZ29yeToge2VxOiBcIjExNjY3OTA3OVwifX0sIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgICR7Y292ZXJJbWFnZX1cbiAgICAgICR7YXV0aG9yfVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBjb3ZlckltYWdlLCBhdXRob3IgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBub3RpY2UgPSBgXG4gIHtcbiAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogX2NyZWF0ZWRBdF9ERVNDLCBmaWx0ZXI6IHtjYXRlZ29yeToge2VxOiBcIjExNjY3Njg0NVwifX0sIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgICR7Y292ZXJJbWFnZX1cbiAgICAgICR7YXV0aG9yfVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgcHJvbW90aW9ucyA9IGBcbiAge1xuICAgIHByb21vdGlvbnM6IGFsbFByb21vdGlvbnMob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgY29sb3Ige1xuICAgICAgICBibHVlXG4gICAgICAgIGdyZWVuXG4gICAgICAgIHJlZFxuICAgICAgfVxuICAgICAgdXJsXG4gICAgICBleHBpcmVkYXRcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogNzc2LCBoOiA3MjYgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJleHBvcnQgY29uc3QgaG9tZXBhZ2UgPSBgXG4gIHF1ZXJ5IEhvbWVwYWdlIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBob21lcGFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBzaW5nbGVwYWdlID0gYFxuICBxdWVyeSBTaW5nbGVwYWdlIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaW5nbGVwYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IHB1Ymxpc2hpbmcgPSBgXG4gIHF1ZXJ5IFB1Ymxpc2hpbmcge1xuICAgIHByb21vdGlvbiB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGFsdFxuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwaG90byB7XG4gICAgICBjb21tb24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1Ymxpc2hpbmcge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3QgYXBwZGVzaWduID0gYFxuICBxdWVyeSBBcHBkZXNpZ24ge1xuICAgIHByb21vdGlvbiB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGFsdFxuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwaG90byB7XG4gICAgICBjb21tb24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFwcGRlc2lnbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBjb25zdWx0aW5nID0gYFxuICBxdWVyeSBDb25zdWx0aW5nIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdWx0aW5nIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IHBsYW4gPSBgXG4gIHF1ZXJ5IFBsYW4ge1xuICAgIHBob3RvIHtcbiAgICAgIHBsYW4ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJpbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgdHlwZSBSb3V0ZSA9IHtcbiAgcGF0aG5hbWU/OiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGlkPzogc3RyaW5nLFxuICBkaXNwbGF5PzogYm9vbGVhbixcbiAgZGVzYz86IHN0cmluZyxcbiAgSWNvbj86IEpTWC5FbGVtZW50IHwgKCgpID0+IEpTWC5FbGVtZW50KSxcbn1cblxuZXhwb3J0IHR5cGUgUm91dGVzID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBkaXNwbGF5PzogYm9vbGVhbixcbiAgY2hpbGRyZW46IFJvdXRlW10sXG59XG5cbmV4cG9ydCBjb25zdCBuYXY6IFJvdXRlc1tdID0gW1xuICB7XG4gICAgdGl0bGU6ICdcdUJFMTRcdUI4NUNcdUFERjgnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbm90aWNlcycsXG4gICAgICAgIHRpdGxlOiAnXHVBQ0Y1XHVDOUMwXHVDMEFDXHVENTZEJyxcbiAgICAgICAgaWQ6ICcxMTY2NzY4NDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNTRDXHVCODI0XHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24ubm90aWNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbmV3cycsXG4gICAgICAgIHRpdGxlOiAnXHVDMEM4XHVDMThDXHVDMkREJyxcbiAgICAgICAgaWQ6ICcxMTY2NzkwNzknLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDMEM4XHVCODVDXHVDNkI0IFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIEljb246IEljb24ubmV3cyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL2hvbWVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uSG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9zaW5nbGVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUMyRjFcdUFFMDAgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUM3NzRcdUJDQTRcdUQyQjgsIFx1Qjc5Q1x1QjUyOSBcdUIyRThcdUM3N0MgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uU2luZ2xlcGFnZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL3B1Ymxpc2hpbmcnLFxuICAgICAgICB0aXRsZTogJ1x1RDM3Q1x1QkUxNFx1QjlBQ1x1QzJGMSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQycsXG4gICAgICAgIEljb246IEljb24uUHVibGlzaGluZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL2FwcGRlc2lnbicsXG4gICAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIEljb246IEljb24uYXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvY29uc3VsdGluZycsXG4gICAgICAgIHRpdGxlOiAnXHVCNTE0XHVDNzkwXHVDNzc4IFx1Q0VFOFx1QzEyNFx1RDMwNScsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUI4NUNcdUFDRTAgXHVCQTg1XHVENTY4IFx1QUMwNFx1RDMxMCBcdUJBNTRcdUIyNzRcdUQzMTAgXHVEMTVDXHVENTBDXHVCOUJGIFx1Q0VFOFx1QzEyNFx1RDMwNScsXG4gICAgICAgIEljb246IEljb24uY29uc3VsdGluZyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVBRTMwXHVEMEMwJyxcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9jb250YWN0JyxcbiAgICAgICAgdGl0bGU6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QkIzNFx1QzVDN1x1Qzc3NFx1QjRFMCBcdUM1NENcdUI4MjRcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5Db250YWN0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvcGxhbicsXG4gICAgICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzY5NFx1QUUwOFx1RDQ1QycsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVCQ0M0IFx1QUMwMFx1QUNBOVx1Qzc0NCBcdUM1NDhcdUIwQjRcdUQ1NzQgXHVCNERDXHVCODI0XHVDNjk0LicsXG4gICAgICAgIEljb246IEljb24uUHJpY2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9wcml2YWN5JyxcbiAgICAgICAgdGl0bGU6ICdcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDODE1XHVDQzQ1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDQgXHVDMjE4XHVCOUJEXHUwMEI3XHVBQ0Y1XHVBQzFDXHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24uUHJpdmFjeSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUMxMjRcdUM4MTUnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2V0dGluZ3MnLFxuICAgICAgICB0aXRsZTogJ1x1RDY1OFx1QUNCRFx1QzEyNFx1QzgxNScsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUFDMUNcdUM3NzhcdUQ2NTQgXHVDMTI0XHVDODE1XHVDNzQ0IFx1QkNDMFx1QUNCRFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24uU2V0dGluZ3MsXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbl1cblxuY29uc3QgZXhjZXB0Um91dGUgPSBbJ3Bvc3RzJywgJ3NlcnZpY2VzJywgJ2V2ZW50cyddXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXYocGF0aG5hbWU/OiBzdHJpbmcpOiBSb3V0ZSB7XG4gIGNvbnN0IG1hdGNoZWRSb3V0ZSA9IG5hdi5yZWR1Y2U8Um91dGVbXT4oKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ci5jaGlsZHJlbiksIFtdKS5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGhuYW1lID09PSBwYXRobmFtZSlcbiAgcmV0dXJuIG1hdGNoZWRSb3V0ZSB8fCBuYXZbMF0uY2hpbGRyZW5bMF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZSb3V0ZShwYXRobmFtZSA6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghcGF0aG5hbWUpIHJldHVybiAnLydcbiAgY29uc3QgcGF0aHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG4gIHBhdGhzLnBvcCgpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHBhdGhzLmZpbHRlcihwID0+ICFleGNlcHRSb3V0ZS5pbmNsdWRlcyhwKSkuam9pbignLycpXG4gIHJldHVybiAhcHJldlJvdXRlIHx8IHByZXZSb3V0ZSA9PT0gJycgPyAnLycgOiBwcmV2Um91dGVcbn1cblxuZXhwb3J0IHR5cGUgSGVyb1N0cmluZyA9IFtzdHJpbmcsIHN0cmluZ11bXVxuXG5leHBvcnQgY29uc3QgaGVyb1N0cmluZzogSGVyb1N0cmluZyA9IFtcbiAgWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJywgJ1x1QkQ4MFx1RDEzMCddLFxuICBbJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxMjRcdUQzMDUnLCAnXHVBRTRDXHVDOUMwJ10sXG5dIiwgImV4cG9ydCBmdW5jdGlvbiBCdWxsZXRTb2xpZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGggZD0nTTM4MS4yIDE3Mi44QzM3Ny4xIDE2NC45IDM2OC45IDE2MCAzNjAgMTYwaC0xNTYuNmw1MC44NC0xMjcuMWMyLjk2OS03LjM3NSAyLjA2Mi0xNS43OC0yLjQwNi0yMi4zOFMyMzkuMSAwIDIzMiAwaC0xNzZDNDMuOTcgMCAzMy44MSA4LjkwNiAzMi4yMiAyMC44NGwtMzIgMjQwQy0uNzE3OSAyNjcuNyAxLjM3NiAyNzQuNiA1LjkzOCAyNzkuOEMxMC41IDI4NSAxNy4wOSAyODggMjQgMjg4aDE0Ni4zbC00MS43OCAxOTQuMWMtMi40MDYgMTEuMjIgMy40NjkgMjIuNTYgMTQgMjcuMDlDMTQ1LjYgNTExLjQgMTQ4LjggNTEyIDE1MiA1MTJjNy43MTkgMCAxNS4yMi0zLjc1IDE5LjgxLTEwLjQ0bDIwOC0zMDRDMzg0LjggMTkwLjIgMzg1LjQgMTgwLjcgMzgxLjIgMTcyLjh6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzTGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00wIDQxNkMwIDQwNy4yIDcuMTY0IDQwMCAxNiA0MDBIODEuNkM4OS4wMSAzNjMuNSAxMjEuMyAzMzYgMTYwIDMzNkMxOTguNyAzMzYgMjMwLjEgMzYzLjUgMjM4LjQgNDAwSDQ5NkM1MDQuOCA0MDAgNTEyIDQwNy4yIDUxMiA0MTZDNTEyIDQyNC44IDUwNC44IDQzMiA0OTYgNDMySDIzOC40QzIzMC4xIDQ2OC41IDE5OC43IDQ5NiAxNjAgNDk2QzEyMS4zIDQ5NiA4OS4wMSA0NjguNSA4MS42IDQzMkgxNkM3LjE2NCA0MzIgMCA0MjQuOCAwIDQxNlY0MTZ6TTIwOCA0MTZDMjA4IDM4OS41IDE4Ni41IDM2OCAxNjAgMzY4QzEzMy41IDM2OCAxMTIgMzg5LjUgMTEyIDQxNkMxMTIgNDQyLjUgMTMzLjUgNDY0IDE2MCA0NjRDMTg2LjUgNDY0IDIwOCA0NDIuNSAyMDggNDE2ek0zNTIgMTc2QzM5MC43IDE3NiA0MjIuMSAyMDMuNSA0MzAuNCAyNDBINDk2QzUwNC44IDI0MCA1MTIgMjQ3LjIgNTEyIDI1NkM1MTIgMjY0LjggNTA0LjggMjcyIDQ5NiAyNzJINDMwLjRDNDIyLjEgMzA4LjUgMzkwLjcgMzM2IDM1MiAzMzZDMzEzLjMgMzM2IDI4MSAzMDguNSAyNzMuNiAyNzJIMTZDNy4xNjQgMjcyIDAgMjY0LjggMCAyNTZDMCAyNDcuMiA3LjE2NCAyNDAgMTYgMjQwSDI3My42QzI4MSAyMDMuNSAzMTMuMyAxNzYgMzUyIDE3NnpNNDAwIDI1NkM0MDAgMjI5LjUgMzc4LjUgMjA4IDM1MiAyMDhDMzI1LjUgMjA4IDMwNCAyMjkuNSAzMDQgMjU2QzMwNCAyODIuNSAzMjUuNSAzMDQgMzUyIDMwNEMzNzguNSAzMDQgNDAwIDI4Mi41IDQwMCAyNTZ6TTQ5NiA4MEM1MDQuOCA4MCA1MTIgODcuMTYgNTEyIDk2QzUxMiAxMDQuOCA1MDQuOCAxMTIgNDk2IDExMkgyNzAuNEMyNjIuMSAxNDguNSAyMzAuNyAxNzYgMTkyIDE3NkMxNTMuMyAxNzYgMTIxIDE0OC41IDExMy42IDExMkgxNkM3LjE2NCAxMTIgMCAxMDQuOCAwIDk2QzAgODcuMTYgNy4xNjQgODAgMTYgODBIMTEzLjZDMTIxIDQzLjQ4IDE1My4zIDE2IDE5MiAxNkMyMzAuNyAxNiAyNjIuMSA0My40OCAyNzAuNCA4MEg0OTZ6TTE0NCA5NkMxNDQgMTIyLjUgMTY1LjUgMTQ0IDE5MiAxNDRDMjE4LjUgMTQ0IDI0MCAxMjIuNSAyNDAgOTZDMjQwIDY5LjQ5IDIxOC41IDQ4IDE5MiA0OEMxNjUuNSA0OCAxNDQgNjkuNDkgMTQ0IDk2eicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBIb21lTGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yNzcuNCA0LjAwMkMyODMuNS0xLjMzNCAyOTIuNS0xLjMzNCAyOTguNiA0LjAwMkwzODQgNzkuMzdWNTZDMzg0IDQyLjc1IDM5NC43IDMxLjEgNDA4IDMxLjFINDg4QzUwMS4zIDMxLjEgNTEyIDQyLjc1IDUxMiA1NlYxOTIuM0w1NzAuNiAyNDRDNTc3LjIgMjQ5LjggNTc3LjggMjU5LjEgNTcxLjEgMjY2LjZDNTY2LjIgMjczLjIgNTU2IDI3My44IDU0OS40IDI2Ny4xTDUxMiAyMzQuMVY0MzJDNTEyIDQ3Ni4yIDQ3Ni4yIDUxMiA0MzIgNTEySDE0NEM5OS44MiA1MTIgNjQgNDc2LjIgNjQgNDMyVjIzNC4xTDI2LjU5IDI2Ny4xQzE5Ljk2IDI3My44IDkuODQ5IDI3My4yIDQuMDAzIDI2Ni42Qy0xLjg0NCAyNTkuMS0xLjIxMiAyNDkuOCA1LjQxNCAyNDRMMjc3LjQgNC4wMDJ6TTQ4MCAxNjQuMVY2NEg0MTZWMTA3LjZMNDgwIDE2NC4xek05NiAyMDYuN1Y0MzJDOTYgNDU4LjUgMTE3LjUgNDgwIDE0NCA0ODBIMjA4VjMyMEMyMDggMzAyLjMgMjIyLjMgMjg4IDI0MCAyODhIMzM2QzM1My43IDI4OCAzNjggMzAyLjMgMzY4IDMyMFY0ODBINDMyQzQ1OC41IDQ4MCA0ODAgNDU4LjUgNDgwIDQzMlYyMDYuN0wyODggMzcuMzRMOTYgMjA2Ljd6TTI0MCAzMjBWNDgwSDMzNlYzMjBIMjQweicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBBcnJvd0xlZnRMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTIwMy45IDQwNS4zYzUuODc3IDYuNTk0IDUuMzYxIDE2LjY5LTEuMTg4IDIyLjYyYy02LjU2MiA1LjkwNi0xNi42OSA1LjM3NS0yMi41OS0xLjE4OEwzNi4xIDI2Ni43Yy01LjQ2OS02LjEyNS01LjQ2OS0xNS4zMSAwLTIxLjQ0bDE0NC0xNTkuMWM1LjkwNi02LjU2MiAxNi4wMy03LjA5NCAyMi41OS0xLjE4OGM2LjkxOCA2LjI3MSA2Ljc4MyAxNi4zOSAxLjE4OCAyMi42Mkw2OS41MyAyNTZMMjAzLjkgNDA1LjN6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAidHlwZSBMb2dvUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oeyBjbGFzc05hbWUgPSAndy0xNiBoLTExJyB9OiBMb2dvUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PScwIDAgNjAgNDQnPlxuICAgICAgPGcgc3Ryb2tlPSdub25lJyBzdHJva2VXaWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbFJ1bGU9J2V2ZW5vZGQnPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTguMDAwMDAwLCAtMjYuMDAwMDAwKScgZmlsbFJ1bGU9J25vbnplcm8nPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE4LjAwMDAwMCwgMjYuMDAwMDAwKSc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBDMC4zMTIyMTA5NDUsMzEuMDA0MjE5NCAwLDMwLjY5MTE1NTggMCwzMC4wNjUwMjg1IEwwLDE1Ljk3NzE2NTUgQzAsMTUuMzUxMDM4MyAwLjMxMjIxMDk0NSwxNS4wMzc5NzQ3IDAuOTM2NjMyODM1LDE1LjAzNzk3NDcgTDkuMzY2MzI4MzUsMTUuMDM3OTc0NyBDMTEuMTE0NzA5NiwxNS4wMzc5NzQ3IDEyLjQ4ODQzNzgsMTUuNDcyMzUwNSAxMy40ODc1MTI4LDE2LjM0MTEwMiBDMTQuNDg2NTg3OSwxNy4yMDk4NTM2IDE0Ljk4NjEyNTQsMTguNDE5MDYxOCAxNC45ODYxMjU0LDE5Ljk2ODcyNjcgQzE0Ljk4NjEyNTQsMjAuMzc1NzA5NCAxNC45Mjc1ODU4LDIwLjc0MzU1OTIgMTQuODEwNTA2NywyMS4wNzIyNzYgQzE0LjY5MzQyNzYsMjEuNDAwOTkyOCAxNC41NzI0NDU5LDIxLjY3NDkyMzUgMTQuNDQ3NTYxNSwyMS44OTQwNjggQzE0LjI5MTQ1NiwyMi4xNjAxNzIxIDE0LjExOTc0LDIyLjM5NDk2OTggMTMuOTMyNDEzNCwyMi41OTg0NjEyIEMxNC4yMjkwMTM4LDIyLjc3MDY0NjEgMTQuNTAyMTk4NCwyMy4wMTMyNzA1IDE0Ljc1MTk2NzIsMjMuMzI2MzM0MSBDMTQuOTcwNTE0OCwyMy41OTI0MzgyIDE1LjE2NTY0NjcsMjMuOTQ4NTQ4IDE1LjMzNzM2MjcsMjQuMzk0NjYzNyBDMTUuNTA5MDc4NywyNC44NDA3NzkzIDE1LjU5NDkzNjcsMjUuNDAwMzgwNiAxNS41OTQ5MzY3LDI2LjA3MzQ2NzQgQzE1LjU5NDkzNjcsMjYuNzc3ODYwNSAxNS40OTczNzA4LDI3LjQzMTM4MDggMTUuMzAyMjM4OSwyOC4wMzQwMjgzIEMxNS4xMDcxMDcxLDI4LjYzNjY3NTggMTQuNzcxNDgwMywyOS4xNTcxNDQgMTQuMjk1MzU4NiwyOS41OTU0MzMxIEMxMy44MTkyMzcsMzAuMDMzNzIyMiAxMy4xODMxMDcyLDMwLjM3ODA5MjIgMTIuMzg2OTY5MiwzMC42Mjg1NDMxIEMxMS41OTA4MzEzLDMwLjg3ODk5NCAxMC41ODM5NTEsMzEuMDA0MjE5NCA5LjM2NjMyODM1LDMxLjAwNDIxOTQgTDAuOTM2NjMyODM1LDMxLjAwNDIxOTQgWiBNOC4zMTI2MTY0MSwyMS4xNDI3MTUzIEM4LjUzMTE2NDA4LDIxLjE0MjcxNTMgOC43MjIzOTMyOCwyMS4wNjA1MzYxIDguODg2MzA0MDMsMjAuODk2MTc3NyBDOS4wNTAyMTQ3NywyMC43MzE4MTkzIDkuMTMyMTcwMTQsMjAuNTQwMDY3OCA5LjEzMjE3MDE0LDIwLjMyMDkyMzMgQzkuMTMyMTcwMTQsMjAuMTAxNzc4OCA5LjA1MDIxNDc3LDE5LjkxMDAyNzMgOC44ODYzMDQwMywxOS43NDU2Njg5IEM4LjcyMjM5MzI4LDE5LjU4MTMxMDUgOC41MzExNjQwOCwxOS40OTkxMzEzIDguMzEyNjE2NDEsMTkuNDk5MTMxMyBMNi4wODgxMTM0MywxOS40OTkxMzEzIEM1LjkzMjAwNzk2LDE5LjQ5OTEzMTMgNS44NTM5NTUyMiwxOS41NzczOTcyIDUuODUzOTU1MjIsMTkuNzMzOTI5IEw1Ljg1Mzk1NTIyLDIwLjkwNzkxNzYgQzUuODUzOTU1MjIsMjEuMDY0NDQ5NCA1LjkzMjAwNzk2LDIxLjE0MjcxNTMgNi4wODgxMTM0MywyMS4xNDI3MTUzIEw4LjMxMjYxNjQxLDIxLjE0MjcxNTMgWiBNOC41NDY3NzQ2MiwyNi41NDMwNjI4IEM4Ljc2NTMyMjI4LDI2LjU0MzA2MjggOC45NTY1NTE0OSwyNi40NjA4ODM2IDkuMTIwNDYyMjMsMjYuMjk2NTI1MiBDOS4yODQzNzI5OCwyNi4xMzIxNjY4IDkuMzY2MzI4MzUsMjUuOTQwNDE1MyA5LjM2NjMyODM1LDI1LjcyMTI3MDggQzkuMzY2MzI4MzUsMjUuNTAyMTI2MyA5LjI4NDM3Mjk4LDI1LjMxMDM3NDggOS4xMjA0NjIyMywyNS4xNDYwMTY0IEM4Ljk1NjU1MTQ5LDI0Ljk4MTY1OCA4Ljc2NTMyMjI4LDI0Ljg5OTQ3ODggOC41NDY3NzQ2MiwyNC44OTk0Nzg4IEw2LjA4ODExMzQzLDI0Ljg5OTQ3ODggQzUuOTMyMDA3OTYsMjQuODk5NDc4OCA1Ljg1Mzk1NTIyLDI0Ljk3Nzc0NDcgNS44NTM5NTUyMiwyNS4xMzQyNzY1IEw1Ljg1Mzk1NTIyLDI2LjMwODI2NTEgQzUuODUzOTU1MjIsMjYuNDY0Nzk2OSA1LjkzMjAwNzk2LDI2LjU0MzA2MjggNi4wODgxMTM0MywyNi41NDMwNjI4IEw4LjU0Njc3NDYyLDI2LjU0MzA2MjggWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tYidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTE2LjMzNzU1MjcsMjMuMDIxMDk3IEMxNi4zMzc1NTI3LDIxLjg2OTgzNDggMTYuNTUzMjQ0MSwyMC43ODQ2OTIzIDE2Ljk4NDYyNjgsMTkuNzY1NjY5NiBDMTcuNDE2MDA5NSwxOC43NDY2NDY5IDE4LjAwODE4MDIsMTcuODU5ODYzOCAxOC43NjExMzkxLDE3LjEwNTMyMDIgQzE5LjUxNDA5OCwxNi4zNTA3NzY3IDIwLjQwNDMxNSwxNS43NTU2OTg2IDIxLjQzMTc5MDEsMTUuMzIwMDg1OCBDMjIuNDU5MjY1MywxNC44ODQ0NzMgMjMuNTc2OTM4NiwxNC42NjY2NjY3IDI0Ljc4NDgxMDEsMTQuNjY2NjY2NyBDMjUuOTc2OTk1LDE0LjY2NjY2NjcgMjcuMDkwNzQ2NywxNC44ODQ0NzMgMjguMTI2MDY1MSwxNS4zMjAwODU4IEMyOS4xNjEzODM2LDE1Ljc1NTY5ODYgMzAuMDU1NTIyMywxNi4zNTA3NzY3IDMwLjgwODQ4MTEsMTcuMTA1MzIwMiBDMzEuNTYxNDQsMTcuODU5ODYzOCAzMi4xNTM2MTA4LDE4Ljc0NjY0NjkgMzIuNTg0OTkzNSwxOS43NjU2Njk2IEMzMy4wMTYzNzYyLDIwLjc4NDY5MjMgMzMuMjMyMDY3NSwyMS44Njk4MzQ4IDMzLjIzMjA2NzUsMjMuMDIxMDk3IEMzMy4yMzIwNjc1LDI0LjE3MjM1OTMgMzMuMDE2Mzc2MiwyNS4yNTc1MDE4IDMyLjU4NDk5MzUsMjYuMjc2NTI0NSBDMzIuMTUzNjEwOCwyNy4yOTU1NDcyIDMxLjU2MTQ0LDI4LjE4MjMzMDMgMzAuODA4NDgxMSwyOC45MzY4NzM5IEMzMC4wNTU1MjIzLDI5LjY5MTQxNzQgMjkuMTYxMzgzNiwzMC4yODY0OTU1IDI4LjEyNjA2NTEsMzAuNzIyMTA4MyBDMjcuMDkwNzQ2NywzMS4xNTc3MjEgMjUuOTc2OTk1LDMxLjM3NTUyNzQgMjQuNzg0ODEwMSwzMS4zNzU1Mjc0IEMyMy41NzY5Mzg2LDMxLjM3NTUyNzQgMjIuNDU5MjY1MywzMS4xNTc3MjEgMjEuNDMxNzkwMSwzMC43MjIxMDgzIEMyMC40MDQzMTUsMzAuMjg2NDk1NSAxOS41MTQwOTgsMjkuNjkxNDE3NCAxOC43NjExMzkxLDI4LjkzNjg3MzkgQzE4LjAwODE4MDIsMjguMTgyMzMwMyAxNy40MTYwMDk1LDI3LjI5NTU0NzIgMTYuOTg0NjI2OCwyNi4yNzY1MjQ1IEMxNi41NTMyNDQxLDI1LjI1NzUwMTggMTYuMzM3NTUyNywyNC4xNzIzNTkzIDE2LjMzNzU1MjcsMjMuMDIxMDk3IFogTTIyLjQzMTgxMzYsMjMuMDIxMDk3IEMyMi40MzE4MTM2LDIzLjc1MjMwNDIgMjIuNjMxODE4MywyNC4zNTUxNjExIDIzLjAzMTgyNzcsMjQuODI5NjY3OSBDMjMuNDMxODM3MSwyNS4zMDQxNzQ2IDI0LjAxNjE2NDYsMjUuNTQxNDI4IDI0Ljc4NDgxMDEsMjUuNTQxNDI4IEMyNS41Mzc3NjksMjUuNTQxNDI4IDI2LjExNDI1MzEsMjUuMzA0MTc0NiAyNi41MTQyNjI1LDI0LjgyOTY2NzkgQzI2LjkxNDI3MTksMjQuMzU1MTYxMSAyNy4xMTQyNzY2LDIzLjc1MjMwNDIgMjcuMTE0Mjc2NiwyMy4wMjEwOTcgQzI3LjExNDI3NjYsMjIuMjg5ODg5OSAyNi45MTQyNzE5LDIxLjY4NzAzMyAyNi41MTQyNjI1LDIxLjIxMjUyNjIgQzI2LjExNDI1MzEsMjAuNzM4MDE5NSAyNS41Mzc3NjksMjAuNTAwNzY2MSAyNC43ODQ4MTAxLDIwLjUwMDc2NjEgQzI0LjAxNjE2NDYsMjAuNTAwNzY2MSAyMy40MzE4MzcxLDIwLjczODAxOTUgMjMuMDMxODI3NywyMS4yMTI1MjYyIEMyMi42MzE4MTgzLDIxLjY4NzAzMyAyMi40MzE4MTM2LDIyLjI4OTg4OTkgMjIuNDMxODEzNiwyMy4wMjEwOTcgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ0LjU1Njk2MiwyNS42MDM4NzE5IEM0NS4xNzU4MDg3LDI1LjYwMzg3MTkgNDUuNDg1MjMyMSwyNS45MTY5MzU2IDQ1LjQ4NTIzMjEsMjYuNTQzMDYyOCBMNDUuNDg1MjMyMSwzMC4wNjUwMjg1IEM0NS40ODUyMzIxLDMwLjY5MTE1NTggNDUuMTc1ODA4NywzMS4wMDQyMTk0IDQ0LjU1Njk2MiwzMS4wMDQyMTk0IEwzNS4yNzQyNjE2LDMxLjAwNDIxOTQgQzM0LjY1NTQxNDksMzEuMDA0MjE5NCAzNC4zNDU5OTE2LDMwLjY5MTE1NTggMzQuMzQ1OTkxNiwzMC4wNjUwMjg1IEwzNC4zNDU5OTE2LDE1Ljk3NzE2NTUgQzM0LjM0NTk5MTYsMTUuMzUxMDM4MyAzNC42NTU0MTQ5LDE1LjAzNzk3NDcgMzUuMjc0MjYxNiwxNS4wMzc5NzQ3IEwzOS4yMTk0MDkzLDE1LjAzNzk3NDcgQzM5LjgzODI1NiwxNS4wMzc5NzQ3IDQwLjE0NzY3OTMsMTUuMzUxMDM4MyA0MC4xNDc2NzkzLDE1Ljk3NzE2NTUgTDQwLjE0NzY3OTMsMjQuODk5NDc4OCBDNDAuMTQ3Njc5MywyNS4xOTY4ODkyIDQwLjE5MDIyNSwyNS4zODg2NDA3IDQwLjI3NTMxNjUsMjUuNDc0NzMzMiBDNDAuMzYwNDA3OSwyNS41NjA4MjU3IDQwLjU0OTkyOTcsMjUuNjAzODcxOSA0MC44NDM4ODE5LDI1LjYwMzg3MTkgTDQ0LjU1Njk2MiwyNS42MDM4NzE5IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J000Ny4zNDgxNzQsMjAuNDM4MzIyMiBDNDYuNzI1MDU5NCwyMC40MzgzMjIyIDQ2LjQxMzUwMjEsMjAuMTI1MjU4NSA0Ni40MTM1MDIxLDE5LjQ5OTEzMTMgTDQ2LjQxMzUwMjEsMTUuOTc3MTY1NSBDNDYuNDEzNTAyMSwxNS4zNTEwMzgzIDQ2LjcyNTA1OTQsMTUuMDM3OTc0NyA0Ny4zNDgxNzQsMTUuMDM3OTc0NyBMNTkuMDMxNTcyOCwxNS4wMzc5NzQ3IEM1OS42NTQ2ODc0LDE1LjAzNzk3NDcgNTkuOTY2MjQ0NywxNS4zNTEwMzgzIDU5Ljk2NjI0NDcsMTUuOTc3MTY1NSBMNTkuOTY2MjQ0NywxOS40OTkxMzEzIEM1OS45NjYyNDQ3LDIwLjEyNTI1ODUgNTkuNjU0Njg3NCwyMC40MzgzMjIyIDU5LjAzMTU3MjgsMjAuNDM4MzIyMiBMNTYuODExNzI3LDIwLjQzODMyMjIgQzU2LjUxNTc0NzYsMjAuNDM4MzIyMiA1Ni4zMjQ5MTg4LDIwLjQ4MTM2ODQgNTYuMjM5MjQwNSwyMC41Njc0NjA5IEM1Ni4xNTM1NjIyLDIwLjY1MzU1MzQgNTYuMTEwNzIzMSwyMC44NDUzMDQ5IDU2LjExMDcyMzEsMjEuMTQyNzE1MyBMNTYuMTEwNzIzMSwzMC4wNjUwMjg1IEM1Ni4xMTA3MjMxLDMwLjY5MTE1NTggNTUuNzk5MTY1OCwzMS4wMDQyMTk0IDU1LjE3NjA1MTIsMzEuMDA0MjE5NCBMNTEuMjAzNjk1NiwzMS4wMDQyMTk0IEM1MC41ODA1ODEsMzEuMDA0MjE5NCA1MC4yNjkwMjM3LDMwLjY5MTE1NTggNTAuMjY5MDIzNywzMC4wNjUwMjg1IEw1MC4yNjkwMjM3LDIxLjE0MjcxNTMgQzUwLjI2OTAyMzcsMjAuODQ1MzA0OSA1MC4yMjYxODQ2LDIwLjY1MzU1MzQgNTAuMTQwNTA2MywyMC41Njc0NjA5IEM1MC4wNTQ4MjgxLDIwLjQ4MTM2ODQgNDkuODYzOTk5MiwyMC40MzgzMjIyIDQ5LjU2ODAxOTgsMjAuNDM4MzIyMiBMNDcuMzQ4MTc0LDIwLjQzODMyMjIgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tdCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTIzLjgzNTExODUsMzkuMTQ4NTI1NiBDMjMuODM1MTE4NSwzOS40MTEzMTM4IDIzLjg3Mjk2MzMsMzkuNjIzNTY1OCAyMy45NDg2NTMsMzkuNzg1MjgxNiBDMjQuMDI0MzQyNywzOS45NDY5OTc0IDI0LjEyMDIxNjQsNDAuMDcwODExMSAyNC4yMzYyNzM5LDQwLjE1NjcyMjYgQzI0LjM1MjMzMTUsNDAuMjQyNjM0MiAyNC40NzM0MzUsNDAuMjk4MjI0IDI0LjU5OTU4NDYsNDAuMzIzNDkyMSBDMjQuNzI1NzM0MSw0MC4zNDg3NjAyIDI0Ljg0NDMxNDYsNDAuMzYxMzk0MiAyNC45NTUzMjYyLDQwLjM2MTM5NDIgQzI1LjA2NjMzNzgsNDAuMzYxMzk0MiAyNS4xODk5NjQzLDQwLjM0ODc2MDIgMjUuMzI2MjA1OCw0MC4zMjM0OTIxIEMyNS40NjI0NDczLDQwLjI5ODIyNCAyNS41ODg1OTY4LDQwLjI0MjYzNDIgMjUuNzA0NjU0Myw0MC4xNTY3MjI2IEMyNS44MjA3MTE5LDQwLjA3MDgxMTEgMjUuOTE2NTg1NSwzOS45NDY5OTc0IDI1Ljk5MjI3NTIsMzkuNzg1MjgxNiBDMjYuMDY3OTY0OSwzOS42MjM1NjU4IDI2LjEwNTgwOTgsMzkuNDExMzEzOCAyNi4xMDU4MDk4LDM5LjE0ODUyNTYgTDI2LjEwNTgwOTgsMzQuMDI0MTU1OCBDMjYuMTA1ODA5OCwzMy42MTk4NjYzIDI2LjMwNzY0OSwzMy40MTc3MjE1IDI2LjcxMTMyNzUsMzMuNDE3NzIxNSBMMjkuMjg0Nzc3NywzMy40MTc3MjE1IEMyOS42ODg0NTYxLDMzLjQxNzcyMTUgMjkuODkwMjk1NCwzMy42MTk4NjYzIDI5Ljg5MDI5NTQsMzQuMDI0MTU1OCBMMjkuODkwMjk1NCwzOS4xNzg4NDczIEMyOS44OTAyOTU0LDM5Ljg5NjQ2MTMgMjkuNzk0NDIxNyw0MC41NTA5MDQ5IDI5LjYwMjY3NDUsNDEuMTQyMTc4NCBDMjkuNDEwOTI3Miw0MS43MzM0NTE4IDI5LjExMzIxNDMsNDIuMjQxMzQwNSAyOC43MDk1MzU5LDQyLjY2NTg0NDUgQzI4LjMwNTg1NzQsNDMuMDkwMzQ4NiAyNy43OTM2OTA0LDQzLjQxODgzMzggMjcuMTczMDM0Nyw0My42NTEzMDAzIEMyNi41NTIzNzkxLDQzLjg4Mzc2NjggMjUuODE4MTg4OSw0NCAyNC45NzA0NjQxLDQ0IEMyNC4xMjI3Mzk0LDQ0IDIzLjM4ODU0OTIsNDMuODgzNzY2OCAyMi43Njc4OTM1LDQzLjY1MTMwMDMgQzIyLjE0NzIzNzksNDMuNDE4ODMzOCAyMS42MzUwNzA5LDQzLjA5MDM0ODYgMjEuMjMxMzkyNCw0Mi42NjU4NDQ1IEMyMC44Mjc3MTM5LDQyLjI0MTM0MDUgMjAuNTMwMDAxMSw0MS43MzM0NTE4IDIwLjMzODI1MzgsNDEuMTQyMTc4NCBDMjAuMTQ2NTA2NSw0MC41NTA5MDQ5IDIwLjA1MDYzMjksMzkuODk2NDYxMyAyMC4wNTA2MzI5LDM5LjE3ODg0NzMgTDIwLjA1MDYzMjksMzQuMDI0MTU1OCBDMjAuMDUwNjMyOSwzMy42MTk4NjYzIDIwLjI1MjQ3MjEsMzMuNDE3NzIxNSAyMC42NTYxNTA2LDMzLjQxNzcyMTUgTDIzLjIyOTYwMDgsMzMuNDE3NzIxNSBDMjMuNjMzMjc5MiwzMy40MTc3MjE1IDIzLjgzNTExODUsMzMuNjE5ODY2MyAyMy44MzUxMTg1LDM0LjAyNDE1NTggTDIzLjgzNTExODUsMzkuMTQ4NTI1NiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby11J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zMS4yNDcxNzcyLDM0LjM5Mzc3MDIgQzMxLjE3ODIwNTIsMzQuMjkzNjYyNiAzMS4xNDM3MTkyLDM0LjE2ODUyODIgMzEuMTQzNzE5MiwzNC4wMTgzNjY4IEMzMS4xNDM3MTkyLDMzLjYxNzkzNjYgMzEuMzQwNzgyMSwzMy40MTc3MjE1IDMxLjczNDkwOCwzMy40MTc3MjE1IEwzNC45NzE2NjYzLDMzLjQxNzcyMTUgQzM1LjE1ODg3NjEsMzMuNDE3NzIxNSAzNS4zMDE3NDY3LDMzLjQ3NTI4MzQgMzUuNDAwMjc4MiwzMy41OTA0MDcgQzM1LjQ5ODgwOTYsMzMuNzA1NTMwNyAzNS41OTI0MTQ1LDMzLjg0ODE4NCAzNS42ODEwOTI4LDM0LjAxODM2NjggTDM2LjI3MjI4MTUsMzUuMTE0NTQ0NiBMMzYuOTY2OTI4MywzNC4wMTgzNjY4IEMzNy4wNzUzMTI5LDMzLjg0ODE4NCAzNy4xNzg3NzA5LDMzLjcwNTUzMDcgMzcuMjc3MzAyNCwzMy41OTA0MDcgQzM3LjM3NTgzMzksMzMuNDc1MjgzNCAzNy40OTg5OTgyLDMzLjQxNzcyMTUgMzcuNjQ2Nzk1NCwzMy40MTc3MjE1IEw0MC42MzIyOTg1LDMzLjQxNzcyMTUgQzQxLjAyNjQyNDMsMzMuNDE3NzIxNSA0MS4yMjM0ODczLDMzLjYxNzkzNjYgNDEuMjIzNDg3MywzNC4wMTgzNjY4IEM0MS4yMjM0ODczLDM0LjE2ODUyODIgNDEuMTg5MDAxMiwzNC4yOTM2NjI2IDQxLjEyMDAyOTIsMzQuMzkzNzcwMiBMMzguNjk2MTU1NCwzOC4xMTc3NzEyIEw0MS4zMTIxNjU2LDQyLjY2NzY1OTUgQzQxLjM3MTI4NDQsNDIuNzc3Nzc3OCA0MS40MDA4NDM5LDQyLjg5NzkwNjggNDEuNDAwODQzOSw0My4wMjgwNDY3IEM0MS40MDA4NDM5LDQzLjQyODQ3NjkgNDEuMjAzNzgxLDQzLjYyODY5MiA0MC44MDk2NTUxLDQzLjYyODY5MiBMMzcuNzk0NTkyNiw0My42Mjg2OTIgQzM3LjYyNzA4OTEsNDMuNjI4NjkyIDM3LjQ4OTE0NSw0My41Njg2Mjc1IDM3LjM4MDc2MDQsNDMuNDQ4NDk4NCBDMzcuMjcyMzc1OCw0My4zMjgzNjkzIDM3LjE2Mzk5MTIsNDMuMTg4MjE4NyAzNy4wNTU2MDY2LDQzLjAyODA0NjcgTDM2LjA4MDE0NTIsNDEuMzMxMjIzNiBMMzUuMTYzODAyNyw0My4wMjgwNDY3IEMzNS4wNTU0MTgxLDQzLjE4ODIxODcgMzQuOTU0NDIzMyw0My4zMjgzNjkzIDM0Ljg2MDgxODQsNDMuNDQ4NDk4NCBDMzQuNzY3MjEzNSw0My41Njg2Mjc1IDM0LjYyMTg3OTYsNDMuNjI4NjkyIDM0LjQyNDgxNjcsNDMuNjI4NjkyIEwzMS40MDk3NTQxLDQzLjYyODY5MiBDMzEuMDE1NjI4Myw0My42Mjg2OTIgMzAuODE4NTY1NCw0My40Mjg0NzY5IDMwLjgxODU2NTQsNDMuMDI4MDQ2NyBDMzAuODE4NTY1NCw0Mi45MDc5MTc2IDMwLjg0MzE5ODMsNDIuNzk3Nzk5MyAzMC44OTI0NjQsNDIuNjk3NjkxNyBMMzMuNjU2MjcxNCwzOC4xMDI3NTUgTDMxLjI0NzE3NzIsMzQuMzkzNzcwMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby14J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zNS41NTY0OTAyLDUuMzg4NjA3NTkgQzM1LjQyNTY1OTIsNS4xNDIyNTM0MyAzNS4xNjM5OTcxLDQuOTg5NDUxNDggMzQuODc5OTk4MSw0Ljk4OTQ1MTQ4IEwyOS44ODI4OTE1LDQuOTg5NDUxNDggTDMxLjUwNTE5NjEsMS4wMjU5NTU5NiBDMzEuNTk5OTM2OSwwLjc5NTk3MzQzMSAzMS41NzA5OTQ1LDAuNTMzODcxMzA4IDMxLjQyODQyMDYsMC4zMjgwNTY0MzUgQzMxLjI4NTg0NjcsMC4xMjIyNDE1NjEgMzEuMDIyMDc4NywwIDMwLjc5NTUxNzYsMCBMMjUuMTc5MzU3LDAgQzI0Ljc5NTQ3OTYsMCAyNC40NzEyNzQsMC4yNzc3MjUzNDMgMjQuNDIwNTM3MSwwLjY0OTg3NjA1NSBMMjMuMzk5NDE3LDguMTM0MDUzMjcgQzIzLjM2OTQ4ODYsOC4zNDc5NzYgMjMuNDM2MzA0OSw4LjU2MzE0NjEgMjMuNTgxODc4NCw4LjcyNTMwMzI3IEMyMy43Mjc0NTE4LDguODg3NDYwNDQgMjMuOTM3NzM4Nyw4Ljk4MTAxMjY2IDI0LjE1ODIzNjksOC45ODEwMTI2NiBMMjguODI2NjcwNCw4Ljk4MTAxMjY2IEwyNy40OTM0NzA0LDE1LjAzMzg0MSBDMjcuNDE2Njk1LDE1LjM4MzcyNjMgMjcuNjA0MTY2MiwxNS43MzczNTM2IDI3Ljk0MDIxMDUsMTUuODc4NjE3NSBDMjguMDM4NDkzMywxNS45NDc1MzQzIDI4LjE0MDYwNTMsMTUuOTY2MjQ0NyAyOC4yNDI3MTczLDE1Ljk2NjI0NDcgQzI4LjQ4OTAzMDYsMTUuOTY2MjQ0NyAyOC43MjgzODc2LDE1Ljg0OTMwNDUgMjguODc0ODU0NSwxNS42NDA2ODMgTDM1LjUxMjEzNTMsNi4xNjA3MjUyMSBDMzUuNjcxMzY2Miw1LjkzMTIxMDQ0IDM1LjY5MDUxMjIsNS42MzQ5NjE3NiAzNS41NTY0OTAyLDUuMzg4NjA3NTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28taWNvbidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNjQwIDQ2NHYzMmExNiAxNiAwIDAgMS0xNiAxNkgxNmExNiAxNiAwIDAgMS0xNi0xNnYtMzJhMTYgMTYgMCAwIDEgMTYtMTZoNjA4YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNDAuNjggNDQ4bDIzOS43OS0zMzAuMjUtNTMuNDEtNzMuNTVhMTYgMTYgMCAwIDEgMy41NC0yMi4zNWwyNS44OC0xOC44YTE2IDE2IDAgMCAxIDIyLjM1IDMuNTVMMzIwIDYzLjNsNDEuMTYtNTYuNjlhMTYgMTYgMCAwIDEgMjIuMzUtMy41NWwyNS45IDE4Ljc5QTE2IDE2IDAgMCAxIDQxMyA0NC4ybC01My40MSA3My41NUw1OTkuMzIgNDQ4aC0xNjNMMzIwIDI4OCAyMDMuNjQgNDQ4eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zNTIgMjU2YTI0IDI0IDAgMSAwIDI0IDI0IDI0IDI0IDAgMCAwLTI0LTI0em0tMTk0LjQ4IDE2aDM3TDE3NiAyMTguNzh6TTQ2NCA2NEg0OGE0OCA0OCAwIDAgMC00OCA0OHYyODhhNDggNDggMCAwIDAgNDggNDhoNDE2YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjExMmE0OCA0OCAwIDAgMC00OC00OHpNMjUwLjU4IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMTAuNzVMMjExLjE1IDMyMGgtNzAuMjlsLTcuMzggMjEuMjVBMTYgMTYgMCAwIDEgMTE4LjM2IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMjEuMjVMMTQwIDE3Ni4xMkEyNCAyNCAwIDAgMSAxNjIuNjcgMTYwaDI2LjY2QTI0IDI0IDAgMCAxIDIxMiAxNzYuMTNsNTMuNjkgMTU0LjYyQTE2IDE2IDAgMCAxIDI1MC41OCAzNTJ6TTQyNCAzMzZhMTYgMTYgMCAwIDEtMTYgMTZoLTE2YTE1Ljc0IDE1Ljc0IDAgMCAxLTEyLTUuNjhBNzIgNzIgMCAxIDEgMzUyIDIwOGE3MS4wNSA3MS4wNSAwIDAgMSAyNCA0LjQyVjE3NmExNiAxNiAwIDAgMSAxNi0xNmgxNmExNiAxNiAwIDAgMSAxNiAxNnonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIxMiAxNzYuMTNBMjQgMjQgMCAwIDAgMTg5LjMzIDE2MGgtMjYuNjZBMjQgMjQgMCAwIDAgMTQwIDE3Ni4xMkw4Ni4zIDMzMC43NUExNiAxNiAwIDAgMCAxMDEuNDIgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjEyLTEwLjc1bDcuMzgtMjEuMjVoNzAuMjlsNy4zNyAyMS4yNUExNiAxNiAwIDAgMCAyMzMuNjQgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjExLTIxLjI1ek0xNTcuNTIgMjcyTDE3NiAyMTguNzggMTk0LjQ4IDI3MnpNNDA4IDE2MGgtMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzYuNDJhNzEuMDUgNzEuMDUgMCAwIDAtMjQtNC40MiA3MiA3MiAwIDEgMCAyOCAxMzguMzIgMTUuNzQgMTUuNzQgMCAwIDAgMTIgNS42OGgxNmExNiAxNiAwIDAgMCAxNi0xNlYxNzZhMTYgMTYgMCAwIDAtMTYtMTZ6bS01NiAxNDRhMjQgMjQgMCAxIDEgMjQtMjQgMjQgMjQgMCAwIDEtMjQgMjR6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXJyb3dSaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyMCA1MTInPlxuICAgICAgPHBhdGggZD0nTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHVibGlzaGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yNTYgMHYxMjhoMTI4TDI1NiAwek0xNTQuMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMGwtNDggNDhjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMWw0OCA0OEMxMjkuOCAzODYuMSAxMzQuOSAzODggMTQwIDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMTIwLjMgMzIwbDMzLjg2LTMzLjg0QzE2MS4xIDI3OC4zIDE2MS4xIDI2NS43IDE1NC4xIDI1Ny44ek0yNTguMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMHMtNy44MTIgMjAuNSAwIDI4LjMxTDI2My43IDMyMGwtMzMuODYgMzMuODRjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMUMyMzMuOCAzODYuMSAyMzguOSAzODggMjQ0IDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGw0OC00OGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMjU4LjEgMjU3Ljh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yNTYgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDE2QzAgNDkwLjUgMjEuNDkgNTEyIDQ4IDUxMmgyODhjMjYuNTEgMCA0OC0yMS40OSA0OC00OFYxMjhIMjU2ek0xNTQuMSAzNTMuOGM3LjgxMiA3LjgxMiA3LjgxMiAyMC41IDAgMjguMzFDMTUwLjIgMzg2LjEgMTQ1LjEgMzg4IDE0MCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0bC00OC00OGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxbDQ4LTQ4YzcuODEyLTcuODEyIDIwLjQ3LTcuODEyIDI4LjI4IDBzNy44MTIgMjAuNSAwIDI4LjMxTDEyMC4zIDMyMEwxNTQuMSAzNTMuOHpNMzA2LjEgMzM0LjJsLTQ4IDQ4QzI1NC4yIDM4Ni4xIDI0OS4xIDM4OCAyNDQgMzg4cy0xMC4yMy0xLjkzOC0xNC4xNC01Ljg0NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxTDI2My43IDMyMGwtMzMuODYtMzMuODRjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMXMyMC40Ny03LjgxMiAyOC4yOCAwbDQ4IDQ4QzMxMy4xIDMxMy43IDMxMy4xIDMyNi4zIDMwNi4xIDMzNC4yeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gYXBwZGVzaWduKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTQxMi43IDI1Ni4xQzM4Ny4xIDI4MC4zIDM1Ny43IDI5OC44IDMyNC4xIDMwOS41TDI1NiAxOTJIMjU1LjFMOTguNjUgNDYzLjdDOTMuOTUgNDcxLjggODYuOTcgNDc4LjQgNzguNTggNDgyLjZMMjMuMTYgNTEwLjNDMTguMiA1MTIuOCAxMi4zMSA1MTIuNSA3LjU4OCA1MDkuNkMyLjg3MSA1MDYuNyAwIDUwMS41IDAgNDk2VjQ0MC42QzAgNDMyLjIgMi4yMjggNDIzLjkgNi40NiA0MTYuNUwxNjguOCAxMzYuMkMxNjMuMSAxMjMuOSAxNjAgMTEwLjMgMTYwIDk2QzE2MCA0Mi45OCAyMDIuMSAwIDI1NiAwQzMwOSAwIDM1MiA0Mi45OCAzNTIgOTZDMzUyIDExMC4zIDM0OC45IDEyMy45IDM0My4yIDEzNi4yTDQxMi43IDI1Ni4xek0yNTUuMSA2NEMyMzguMyA2NCAyMjMuMSA3OC4zMyAyMjMuMSA5NkMyMjMuMSAxMTMuNyAyMzguMyAxMjggMjU1LjEgMTI4QzI3My43IDEyOCAyODggMTEzLjcgMjg4IDk2QzI4OCA3OC4zMyAyNzMuNyA2NCAyNTUuMSA2NHpNMzU2LjcgMzY1LjlDMzg5LjYgMzUzLjYgNDE5LjYgMzM1LjUgNDQ1LjUgMzEyLjlMNTA1LjUgNDE2LjVDNTA5LjggNDIzLjkgNTEyIDQzMi4yIDUxMiA0NDAuNlY0OTZDNTEyIDUwMS41IDUwOS4xIDUwNi43IDUwNC40IDUwOS42QzQ5OS43IDUxMi41IDQ5My44IDUxMi44IDQ4OC44IDUxMC4zTDQzMy40IDQ4Mi42QzQyNSA0NzguNCA0MTggNDcxLjggNDEzLjMgNDYzLjdMMzU2LjcgMzY1Ljl6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J002Ni40OSAzMTIuOUM1My42NiAzMDEuNiA0MS44NCAyODkuMyAzMS4xOCAyNzZDMjAuMTMgMjYyLjIgMjIuMzQgMjQyLjEgMzYuMTMgMjMxQzQ5LjkyIDIxOS4xIDcwLjA2IDIyMi4yIDgxLjEyIDIzNS4xQzg2Ljc5IDI0My4xIDkyLjg3IDI0OS44IDk5LjM0IDI1Ni4xTDY2LjQ5IDMxMi45ek0xNTUuMyAzNjUuOUwxODcuOSAzMDkuNUMyMDkuNCAzMTYuMyAyMzIuMyAzMjAgMjU1LjEgMzIwQzMyNi43IDMyMCAzODkuOCAyODcuMyA0MzAuOSAyMzUuMUM0NDEuOSAyMjIuMiA0NjIuMSAyMTkuMSA0NzUuOSAyMzFDNDg5LjcgMjQyLjEgNDkxLjkgMjYyLjIgNDgwLjggMjc2QzQyOC4xIDM0MS44IDM0Ni4xIDM4NCAyNTUuMSAzODRDMjIwLjYgMzg0IDE4Ni42IDM3Ny42IDE1NS4zIDM2NS45SDE1NS4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY29uc3VsdGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yODggOTZDMjg4IDExMy43IDI3My43IDEyOCAyNTYgMTI4QzIzOC4zIDEyOCAyMjQgMTEzLjcgMjI0IDk2QzIyNCA3OC4zMyAyMzguMyA2NCAyNTYgNjRDMjczLjcgNjQgMjg4IDc4LjMzIDI4OCA5NnpNOTYgMTYwQzk2IDE0Mi4zIDExMC4zIDEyOCAxMjggMTI4QzE0NS43IDEyOCAxNjAgMTQyLjMgMTYwIDE2MEMxNjAgMTc3LjcgMTQ1LjcgMTkyIDEyOCAxOTJDMTEwLjMgMTkyIDk2IDE3Ny43IDk2IDE2MHpNNjQgMjg4QzY0IDI3MC4zIDc4LjMzIDI1NiA5NiAyNTZDMTEzLjcgMjU2IDEyOCAyNzAuMyAxMjggMjg4QzEyOCAzMDUuNyAxMTMuNyAzMjAgOTYgMzIwQzc4LjMzIDMyMCA2NCAzMDUuNyA2NCAyODh6TTM1MiAxNjBDMzUyIDE0Mi4zIDM2Ni4zIDEyOCAzODQgMTI4QzQwMS43IDEyOCA0MTYgMTQyLjMgNDE2IDE2MEM0MTYgMTc3LjcgNDAxLjcgMTkyIDM4NCAxOTJDMzY2LjMgMTkyIDM1MiAxNzcuNyAzNTIgMTYweidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNTEyIDI1NS4xQzUxMiAyNTYuOSA1MTEuMSAyNTcuOCA1MTEuMSAyNTguN0M1MTEuNiAyOTUuMiA0NzguNCAzMTkuMSA0NDEuOSAzMTkuMUgzNDRDMzE3LjUgMzE5LjEgMjk2IDM0MS41IDI5NiAzNjhDMjk2IDM3MS40IDI5Ni40IDM3NC43IDI5NyAzNzcuOUMyOTkuMiAzODguMSAzMDMuNSAzOTcuMSAzMDcuOSA0MDcuOEMzMTMuOSA0MjEuNiAzMjAgNDM1LjMgMzIwIDQ0OS44QzMyMCA0ODEuNyAyOTguNCA1MTAuNSAyNjYuNiA1MTEuOEMyNjMuMSA1MTEuOSAyNTkuNSA1MTIgMjU2IDUxMkMxMTQuNiA1MTIgMCAzOTcuNCAwIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NlYyNTUuMXpNOTYgMjU1LjFDNzguMzMgMjU1LjEgNjQgMjcwLjMgNjQgMjg3LjFDNjQgMzA1LjcgNzguMzMgMzE5LjEgOTYgMzE5LjFDMTEzLjcgMzE5LjEgMTI4IDMwNS43IDEyOCAyODcuMUMxMjggMjcwLjMgMTEzLjcgMjU1LjEgOTYgMjU1LjF6TTEyOCAxOTEuMUMxNDUuNyAxOTEuMSAxNjAgMTc3LjcgMTYwIDE1OS4xQzE2MCAxNDIuMyAxNDUuNyAxMjcuMSAxMjggMTI3LjFDMTEwLjMgMTI3LjEgOTYgMTQyLjMgOTYgMTU5LjFDOTYgMTc3LjcgMTEwLjMgMTkxLjEgMTI4IDE5MS4xek0yNTYgNjMuMUMyMzguMyA2My4xIDIyNCA3OC4zMyAyMjQgOTUuMUMyMjQgMTEzLjcgMjM4LjMgMTI3LjEgMjU2IDEyNy4xQzI3My43IDEyNy4xIDI4OCAxMTMuNyAyODggOTUuMUMyODggNzguMzMgMjczLjcgNjMuMSAyNTYgNjMuMXpNMzg0IDE5MS4xQzQwMS43IDE5MS4xIDQxNiAxNzcuNyA0MTYgMTU5LjFDNDE2IDE0Mi4zIDQwMS43IDEyNy4xIDM4NCAxMjcuMUMzNjYuMyAxMjcuMSAzNTIgMTQyLjMgMzUyIDE1OS4xQzM1MiAxNzcuNyAzNjYuMyAxOTEuMSAzODQgMTkxLjF6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBuZXdzKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTAgMTI4djMwNEMwIDQ1OC41IDIxLjQ5IDQ4MCA0OCA0ODBTOTYgNDU4LjUgOTYgNDMyVjk2SDMyQzE0LjMzIDk2IDAgMTEwLjMgMCAxMjh6TTI3MiAyODhoLTk2QzE2Ny4yIDI4OCAxNjAgMjk1LjIgMTYwIDMwNEMxNjAgMzEyLjggMTY3LjIgMzIwIDE3NiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMjk1LjIgMjgwLjggMjg4IDI3MiAyODh6TTMzNiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMjk1LjIgNDQwLjggMjg4IDQzMiAyODhoLTk2QzMyNy4yIDI4OCAzMjAgMjk1LjIgMzIwIDMwNEMzMjAgMzEyLjggMzI3LjIgMzIwIDMzNiAzMjB6TTI3MiAzODRoLTk2QzE2Ny4yIDM4NCAxNjAgMzkxLjIgMTYwIDQwMEMxNjAgNDA4LjggMTY3LjIgNDE2IDE3NiA0MTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMzkxLjIgMjgwLjggMzg0IDI3MiAzODR6TTQzMiAzODRoLTk2Yy04LjgzNiAwLTE2IDcuMTYyLTE2IDE2YzAgOC44MzYgNy4xNjQgMTYgMTYgMTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMzkxLjIgNDQwLjggMzg0IDQzMiAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J000ODAgMzJIMTI4QzExMC4zIDMyIDk2IDQ2LjMzIDk2IDY0djM2OEM5NiA0NTguNSA3NC41MSA0ODAgNDggNDgwSDQ0OGMzNS4zNSAwIDY0LTI4LjY1IDY0LTY0VjY0QzUxMiA0Ni4zMyA0OTcuNyAzMiA0ODAgMzJ6TTI3MiA0MTZoLTk2QzE2Ny4yIDQxNiAxNjAgNDA4LjggMTYwIDQwMEMxNjAgMzkxLjIgMTY3LjIgMzg0IDE3NiAzODRoOTZjOC44MzYgMCAxNiA3LjE2MiAxNiAxNkMyODggNDA4LjggMjgwLjggNDE2IDI3MiA0MTZ6TTI3MiAzMjBoLTk2QzE2Ny4yIDMyMCAxNjAgMzEyLjggMTYwIDMwNEMxNjAgMjk1LjIgMTY3LjIgMjg4IDE3NiAyODhoOTZDMjgwLjggMjg4IDI4OCAyOTUuMiAyODggMzA0QzI4OCAzMTIuOCAyODAuOCAzMjAgMjcyIDMyMHpNNDMyIDQxNmgtOTZjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZjMC04LjgzOCA3LjE2NC0xNiAxNi0xNmg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzQ0OCA0MDguOCA0NDAuOCA0MTYgNDMyIDQxNnpNNDMyIDMyMGgtOTZDMzI3LjIgMzIwIDMyMCAzMTIuOCAzMjAgMzA0QzMyMCAyOTUuMiAzMjcuMiAyODggMzM2IDI4OGg5NkM0NDAuOCAyODggNDQ4IDI5NS4yIDQ0OCAzMDRDNDQ4IDMxMi44IDQ0MC44IDMyMCA0MzIgMzIwek00NDggMjA4QzQ0OCAyMTYuOCA0NDAuOCAyMjQgNDMyIDIyNGgtMjU2QzE2Ny4yIDIyNCAxNjAgMjE2LjggMTYwIDIwOHYtOTZDMTYwIDEwMy4yIDE2Ny4yIDk2IDE3NiA5NmgyNTZDNDQwLjggOTYgNDQ4IDEwMy4yIDQ0OCAxMTJWMjA4eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbm90aWNlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE5MiAyMjRjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtMTEyQzIxNiA3NC43NSAyMDUuMyA2NCAxOTIgNjRTMTY4IDc0Ljc1IDE2OCA4OHYxMTJDMTY4IDIxMy4zIDE3OC44IDIyNCAxOTIgMjI0ek0xOTIgMzIwYzE3LjY3IDAgMzItMTQuMzMgMzItMzJzLTE0LjMzLTMyLTMyLTMyUzE2MCAyNzAuMyAxNjAgMjg4UzE3NC4zIDMyMCAxOTIgMzIwek0xMTIuMyAzODRsLS4wOTA2IDcwLjM1YzAgNi4yOTcgMS44ODYgMTIuNDMgNS4zNTUgMTcuNjhsMTcuMDggMjUuNjlDMTM5LjggNTA1LjYgMTUxLjggNTEyIDE2MS4yIDUxMmg2MS42N2M5LjQzOCAwIDIxLjM2LTYuMzk1IDI2LjYxLTE0LjI3bDE3LjM0LTI1LjdjMi45MzgtNC40MzggNS4wOTctMTIuMzUgNS4wOTctMTcuNjhsLjIxNTYtNzAuMzVMMTEyLjMgMzg0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMTkxLjUgLjAxMjdDODkuNDcgLjI2MjcgMTYgODIuMSAxNiAxNzUuMWMwIDQ0LjM4IDE2LjUyIDg0Ljg5IDQzLjUyIDExNS44YzE2LjYyIDE4Ljg4IDQyLjM2IDU4LjIzIDUyLjI0IDkxLjQ4YzAgLjI1IC4xMTQ2IC41MTA0IC4xMTQ2IC43NjA0bDE2MC4zIC4wMDA2YzAtLjI1IC4wODMzLS41MTExIC4wODMzLS43NjExYzkuODc1LTMzLjI1IDM1LjYxLTcyLjYxIDUyLjI0LTkxLjQ4QzM1MS41IDI2MC45IDM2OCAyMjAuNCAzNjggMTc1LjFDMzY4IDc4LjYyIDI4OC44LS4yMzczIDE5MS41IC4wMTI3ek0xNjggODhDMTY4IDc0Ljc1IDE3OC44IDY0IDE5MiA2NHMyNCAxMC43NSAyNCAyNHYxMTJDMjE2IDIxMy4zIDIwNS4zIDIyNCAxOTIgMjI0UzE2OCAyMTMuMyAxNjggMjAwVjg4ek0xOTIgMzIwYy0xNy42NyAwLTMyLTE0LjMzLTMyLTMyczE0LjMzLTMyIDMyLTMyczMyIDE0LjMzIDMyIDMyUzIwOS43IDMyMCAxOTIgMzIweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI5OC45IDMwOS42bC00NS42NC02LjY4OGwtMjAuMzYtNDEuNGMtMy42MjUtNy4zNzUtMTQuMTYtNy41LTE3LjkxIDBMMTk0LjcgMzAyLjlMMTQ5IDMwOS42Yy04LjI1IDEuMTI1LTExLjM3IDExLjIyLTUuNDkxIDE3LjFsMzIuOTQgMzIuMWwtNy43NzIgNDUuNTVjLTEuNSA4LjI1IDcuMjY0IDE0LjM3IDE0LjUxIDEwLjQ5bDQwLjc3LTIxLjUzbDQwLjc3IDIxLjUzYzcuMzc1IDMuODc1IDE2LjAxLTIuMjQyIDE0LjUxLTEwLjQ5bC03Ljc3My00NS41NWwzMi4xLTMyLjFDMzEwLjQgMzIwLjggMzA3LjIgMzEwLjcgMjk4LjkgMzA5LjZ6TTQyNCAxNDMuMUwxMjcuNCAxNDMuMWM2LjM3NS0zMC44OCAzMC43NS01NS4yNSA2Mi43NS02MS4xQzE5OC44IDkwLjYyIDIxMC44IDk1LjEgMjI0IDk1LjFsNjIuMiAuMDAwMWMyMy4yMSAwIDQ0LjUtMTUuNjkgNDguODktMzguNDhDMzQwLjEgMjYuODUgMzE3LjYgMCAyODggMGgtNjRjLTIyIDAtNDAuNSAxNS00Ni4xMyAzNS4yNWMtNTIgMTEuNjItOTEuNzUgNTUtOTguNSAxMDguOEwyMy4xIDE0My4xQzEwLjc1IDE0My4xIDAgMTU0LjcgMCAxNjcuMWMwIDEzLjI1IDEwLjc1IDI0IDIzLjEgMjRoNDAwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjRDNDQ4IDE1NC43IDQzNy4zIDE0My4xIDQyNCAxNDMuMXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4IDE5MS4xbDI5LjEyIDI5MS4yYzEuNjM2IDE2LjM2IDE1LjI0IDI4LjgyIDMxLjY4IDI4LjgyaDIzMC40YzE2LjQ0IDAgMzAuMDUtMTIuNDYgMzEuNjgtMjguODJMNDAwIDE5MS4xSDQ4ek0zMDQuNSAzMjYuN2wtMzIuMSAzMi4xbDcuNzczIDQ1LjU1YzEuNSA4LjI1LTcuMTM5IDE0LjM3LTE0LjUxIDEwLjQ5TDIyMy4xIDM5My4zbC00MC43NyAyMS41M2MtNy4yNSAzLjg3NS0xNi4wMS0yLjI0Mi0xNC41MS0xMC40OWw3Ljc3Mi00NS41NWwtMzIuOTQtMzIuMUMxMzcuNyAzMjAuOCAxNDAuOCAzMTAuNyAxNDkgMzA5LjZMMTk0LjcgMzAyLjlsMjAuMzYtNDEuNGMzLjc1LTcuNSAxNC4yOS03LjM3NSAxNy45MSAwbDIwLjM2IDQxLjRsNDUuNjQgNi42ODhDMzA3LjIgMzEwLjcgMzEwLjQgMzIwLjggMzA0LjUgMzI2Ljd6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTYyMi4zIDI3MS4xbC0xMTUuMS00NS4wMWMtNC4xMjUtMS42MjktMTIuNjItMy43NTQtMjIuMjUgMEwzNjkuOCAyNzEuMUMzNTkgMjc1LjIgMzUyIDI4NS4xIDM1MiAyOTUuMWMwIDExMS42IDY4Ljc1IDE4OC44IDEzMi45IDIxMy45YzkuNjI1IDMuNzUgMTggMS42MjUgMjIuMjUgMEM1NTguNCA0ODkuOSA2NDAgNDIwLjUgNjQwIDI5NS4xQzY0MCAyODUuMSA2MzMgMjc1LjIgNjIyLjMgMjcxLjF6TTQ5NiA0NjIuNFYyNzMuMmw5NS41IDM3LjM4QzU4NS45IDM5Ny44IDUzMC42IDQ0NiA0OTYgNDYyLjR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yMjQgMjU2YzcwLjcgMCAxMjgtNTcuMzEgMTI4LTEyOFMyOTQuNyAwIDIyNCAwQzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0zMjAuNiAzMTAuM0MzMDUuOSAzMDYuMyAyOTAuNiAzMDQgMjc0LjcgMzA0SDE3My4zQzc3LjYxIDMwNCAwIDM4MS43IDAgNDc3LjRDMCA0OTYuNSAxNS41MiA1MTIgMzQuNjYgNTEySDQxMy4zYzMuMTQzIDAgNS45NjctMS4wMDQgOC44NjEtMS43ODlDMzY5LjcgNDY5LjggMzI0LjEgNDAwLjMgMzIwLjYgMzEwLjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE1OS4xIDE5MkwxNDQgMTkyYy0zNS4zNCAwLTY0IDI4LjY2LTY0IDY0LjA4djQ3Ljc5QzgwIDMzOS4zIDEwOC43IDM2OCAxNDQgMzY4SDE2MGMxNy42NiAwIDMyLTE0LjM2IDMyLTMyLjA2TDE5MS4xIDIyNEMxOTEuMSAyMDYuMyAxNzcuNiAxOTIgMTU5LjEgMTkyek0zNjggMTkybC0xNiAwYy0xNy42NiAwLTMyIDE0LjM0LTMyIDMyLjA0TDMyMCAzMzUuOUMzMjAgMzUzLjcgMzM0LjMgMzY4IDM1MiAzNjhoMTZjMzUuMzQgMCA2NC0yOC43IDY0LTY0LjEzVjI1Ni4xQzQzMiAyMjAuNyA0MDMuMyAxOTIgMzY4IDE5MnonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTI1NiAwQzExMi45IDAgNC41ODMgMTE5LjEgLjAyMDggMjU2TDAgMjk2QzAgMzA5LjMgMTAuNzUgMzIwIDIzLjEgMzIwUzQ4IDMwOS4zIDQ4IDI5NlYyNTZjMC0xMTQuNyA5My4zNC0yMDcuOCAyMDgtMjA3LjhDMzcwLjcgNDguMiA0NjQgMTQxLjMgNDY0IDI1NnYxNDRjMCAyMi4wOS0xNy45MSA0MC00MCA0MGgtMTEwLjdDMzA1IDQyNS43IDI4OS43IDQxNiAyNzIgNDE2SDI0MS44Yy0yMy4yMSAwLTQ0LjUgMTUuNjktNDguODcgMzguNDlDMTg3IDQ4NS4yIDIxMC40IDUxMiAyMzkuMSA1MTJIMjcyYzE3LjcyIDAgMzMuMDMtOS43MTEgNDEuMzQtMjRINDI0YzQ4LjYgMCA4OC0zOS40IDg4LTg4VjI1NkM1MDcuNCAxMTkuMSAzOTkuMSAwIDI1NiAweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHJpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNOTYgMTUyQzk2IDEzOC43IDEwNi43IDEyOCAxMjAgMTI4QzEzMy4zIDEyOCAxNDQgMTM4LjcgMTQ0IDE1MlYzNjBDMTQ0IDM3My4zIDEzMy4zIDM4NCAxMjAgMzg0QzEwNi43IDM4NCA5NiAzNzMuMyA5NiAzNjBWMTUyek0xNzYgMTQ0QzE3NiAxMzUuMiAxODMuMiAxMjggMTkyIDEyOEMyMDAuOCAxMjggMjA4IDEzNS4yIDIwOCAxNDRWMzY4QzIwOCAzNzYuOCAyMDAuOCAzODQgMTkyIDM4NEMxODMuMiAzODQgMTc2IDM3Ni44IDE3NiAzNjhWMTQ0ek0yODggMTUyVjM2MEMyODggMzczLjMgMjc3LjMgMzg0IDI2NCAzODRDMjUwLjcgMzg0IDI0MCAzNzMuMyAyNDAgMzYwVjE1MkMyNDAgMTM4LjcgMjUwLjcgMTI4IDI2NCAxMjhDMjc3LjMgMTI4IDI4OCAxMzguNyAyODggMTUyek0zNTIgMTUyQzM1MiAxMzguNyAzNjIuNyAxMjggMzc2IDEyOEMzODkuMyAxMjggNDAwIDEzOC43IDQwMCAxNTJWMzYwQzQwMCAzNzMuMyAzODkuMyAzODQgMzc2IDM4NEMzNjIuNyAzODQgMzUyIDM3My4zIDM1MiAzNjBWMTUyek00ODAgMTQ0VjM2OEM0ODAgMzc2LjggNDcyLjggMzg0IDQ2NCAzODRDNDU1LjIgMzg0IDQ0OCAzNzYuOCA0NDggMzY4VjE0NEM0NDggMTM1LjIgNDU1LjIgMTI4IDQ2NCAxMjhDNDcyLjggMTI4IDQ4MCAxMzUuMiA0ODAgMTQ0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNTEyIDMyQzU0Ny4zIDMyIDU3NiA2MC42NSA1NzYgOTZWNDE2QzU3NiA0NTEuMyA1NDcuMyA0ODAgNTEyIDQ4MEg2NEMyOC42NSA0ODAgMCA0NTEuMyAwIDQxNlY5NkMwIDYwLjY1IDI4LjY1IDMyIDY0IDMySDUxMnpNMTIwIDEyOEMxMDYuNyAxMjggOTYgMTM4LjcgOTYgMTUyVjM2MEM5NiAzNzMuMyAxMDYuNyAzODQgMTIwIDM4NEMxMzMuMyAzODQgMTQ0IDM3My4zIDE0NCAzNjBWMTUyQzE0NCAxMzguNyAxMzMuMyAxMjggMTIwIDEyOHpNMTc2IDM2OEMxNzYgMzc2LjggMTgzLjIgMzg0IDE5MiAzODRDMjAwLjggMzg0IDIwOCAzNzYuOCAyMDggMzY4VjE0NEMyMDggMTM1LjIgMjAwLjggMTI4IDE5MiAxMjhDMTgzLjIgMTI4IDE3NiAxMzUuMiAxNzYgMTQ0VjM2OHpNMjY0IDEyOEMyNTAuNyAxMjggMjQwIDEzOC43IDI0MCAxNTJWMzYwQzI0MCAzNzMuMyAyNTAuNyAzODQgMjY0IDM4NEMyNzcuMyAzODQgMjg4IDM3My4zIDI4OCAzNjBWMTUyQzI4OCAxMzguNyAyNzcuMyAxMjggMjY0IDEyOHpNMzUyIDM2MEMzNTIgMzczLjMgMzYyLjcgMzg0IDM3NiAzODRDMzg5LjMgMzg0IDQwMCAzNzMuMyA0MDAgMzYwVjE1MkM0MDAgMTM4LjcgMzg5LjMgMTI4IDM3NiAxMjhDMzYyLjcgMTI4IDM1MiAxMzguNyAzNTIgMTUyVjM2MHpNNDY0IDEyOEM0NTUuMiAxMjggNDQ4IDEzNS4yIDQ0OCAxNDRWMzY4QzQ0OCAzNzYuOCA0NTUuMiAzODQgNDY0IDM4NEM0NzIuOCAzODQgNDgwIDM3Ni44IDQ4MCAzNjhWMTQ0QzQ4MCAxMzUuMiA0NzIuOCAxMjggNDY0IDEyOHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE2MCA0OTZDMTE1LjggNDk2IDgwIDQ2MC4yIDgwIDQxNkM4MCAzNzEuOCAxMTUuOCAzMzYgMTYwIDMzNkMyMDQuMiAzMzYgMjQwIDM3MS44IDI0MCA0MTZDMjQwIDQ2MC4yIDIwNC4yIDQ5NiAxNjAgNDk2ek0xOTIgNDE2QzE5MiAzOTguMyAxNzcuNyAzODQgMTYwIDM4NEMxNDIuMyAzODQgMTI4IDM5OC4zIDEyOCA0MTZDMTI4IDQzMy43IDE0Mi4zIDQ0OCAxNjAgNDQ4QzE3Ny43IDQ0OCAxOTIgNDMzLjcgMTkyIDQxNnpNMzUyIDMzNkMzMDcuOCAzMzYgMjcyIDMwMC4yIDI3MiAyNTZDMjcyIDIxMS44IDMwNy44IDE3NiAzNTIgMTc2QzM5Ni4yIDE3NiA0MzIgMjExLjggNDMyIDI1NkM0MzIgMzAwLjIgMzk2LjIgMzM2IDM1MiAzMzZ6TTM4NCAyNTZDMzg0IDIzOC4zIDM2OS43IDIyNCAzNTIgMjI0QzMzNC4zIDIyNCAzMjAgMjM4LjMgMzIwIDI1NkMzMjAgMjczLjcgMzM0LjMgMjg4IDM1MiAyODhDMzY5LjcgMjg4IDM4NCAyNzMuNyAzODQgMjU2ek0xOTIgMTZDMjM2LjIgMTYgMjcyIDUxLjgyIDI3MiA5NkMyNzIgMTQwLjIgMjM2LjIgMTc2IDE5MiAxNzZDMTQ3LjggMTc2IDExMiAxNDAuMiAxMTIgOTZDMTEyIDUxLjgyIDE0Ny44IDE2IDE5MiAxNnpNMTYwIDk2QzE2MCAxMTMuNyAxNzQuMyAxMjggMTkyIDEyOEMyMDkuNyAxMjggMjI0IDExMy43IDIyNCA5NkMyMjQgNzguMzMgMjA5LjcgNjQgMTkyIDY0QzE3NC4zIDY0IDE2MCA3OC4zMyAxNjAgOTZ6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00wIDQxNkMwIDM5OC4zIDE0LjMzIDM4NCAzMiAzODRIODYuNjZDODIuMzggMzkzLjggODAgNDA0LjYgODAgNDE2QzgwIDQyNy40IDgyLjM4IDQzOC4yIDg2LjY2IDQ0OEgzMkMxNC4zMyA0NDggMCA0MzMuNyAwIDQxNnpNMjQwIDQxNkMyNDAgNDA0LjYgMjM3LjYgMzkzLjggMjMzLjMgMzg0SDQ4MEM0OTcuNyAzODQgNTEyIDM5OC4zIDUxMiA0MTZDNTEyIDQzMy43IDQ5Ny43IDQ0OCA0ODAgNDQ4SDIzMy4zQzIzNy42IDQzOC4yIDI0MCA0MjcuNCAyNDAgNDE2VjQxNnpNMCAyNTZDMCAyMzguMyAxNC4zMyAyMjQgMzIgMjI0SDI3OC43QzI3NC40IDIzMy44IDI3MiAyNDQuNiAyNzIgMjU2QzI3MiAyNjcuNCAyNzQuNCAyNzguMiAyNzguNyAyODhIMzJDMTQuMzMgMjg4IDAgMjczLjcgMCAyNTZWMjU2ek00MzIgMjU2QzQzMiAyNDQuNiA0MjkuNiAyMzMuOCA0MjUuMyAyMjRINDgwQzQ5Ny43IDIyNCA1MTIgMjM4LjMgNTEyIDI1NkM1MTIgMjczLjcgNDk3LjcgMjg4IDQ4MCAyODhINDI1LjNDNDI5LjYgMjc4LjIgNDMyIDI2Ny40IDQzMiAyNTZ6TTExOC43IDY0QzExNC40IDczLjggMTEyIDg0LjYyIDExMiA5NkMxMTIgMTA3LjQgMTE0LjQgMTE4LjIgMTE4LjcgMTI4SDMyQzE0LjMzIDEyOCAwIDExMy43IDAgOTZDMCA3OC4zMyAxNC4zMyA2NCAzMiA2NEgxMTguN3pNMjY1LjMgMTI4QzI2OS42IDExOC4yIDI3MiAxMDcuNCAyNzIgOTZDMjcyIDg0LjYyIDI2OS42IDczLjggMjY1LjMgNjRINDgwQzQ5Ny43IDY0IDUxMiA3OC4zMyA1MTIgOTZDNTEyIDExMy43IDQ5Ny43IDEyOCA0ODAgMTI4SDI2NS4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTE2IDIwNS4xQzExNiAxOTYuMiAxMjUuNiAxOTAuNCAxMzMuNSAxOTQuN0wyMjMuNCAyNDIuNkMyMzQuMSAyNDguMyAyMzQuMSAyNjMuNyAyMjMuNCAyNjkuNEwxMzMuNSAzMTcuM0MxMjUuNiAzMjEuNiAxMTYgMzE1LjggMTE2IDMwNi45QzExNiAzMDQuMSAxMTYuMSAzMDEuNCAxMTguOCAyOTkuMkwxNTQuOCAyNTZMMTE4LjggMjEyLjhDMTE2LjEgMjEwLjYgMTE2IDIwNy45IDExNiAyMDUuMVYyMDUuMXpNMzkzLjIgMjEyLjhMMzU3LjIgMjU2TDM5My4yIDI5OS4yQzM5NSAzMDEuNCAzOTYgMzA0LjEgMzk2IDMwNi45QzM5NiAzMTUuOCAzODYuNCAzMjEuNiAzNzguNSAzMTcuM0wyODguNiAyNjkuNEMyNzcuOSAyNjMuNyAyNzcuOSAyNDguMyAyODguNiAyNDIuNkwzNzguNSAxOTQuN0MzODYuNCAxOTAuNCAzOTYgMTk2LjIgMzk2IDIwNS4xQzM5NiAyMDcuOSAzOTUgMjEwLjYgMzkzLjIgMjEyLjh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00wIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NkM1MTIgMzk3LjQgMzk3LjQgNTEyIDI1NiA1MTJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZ6TTExOC44IDIxMi44TDE1NC44IDI1NkwxMTguOCAyOTkuMkMxMTYuMSAzMDEuNCAxMTYgMzA0LjEgMTE2IDMwNi45QzExNiAzMTUuOCAxMjUuNiAzMjEuNiAxMzMuNSAzMTcuM0wyMjMuNCAyNjkuNEMyMzQuMSAyNjMuNyAyMzQuMSAyNDguMyAyMjMuNCAyNDIuNkwxMzMuNSAxOTQuN0MxMjUuNiAxOTAuNCAxMTYgMTk2LjIgMTE2IDIwNS4xQzExNiAyMDcuOSAxMTYuMSAyMTAuNiAxMTguOCAyMTIuOFYyMTIuOHpNMjg4LjYgMjQyLjZDMjc3LjkgMjQ4LjMgMjc3LjkgMjYzLjcgMjg4LjYgMjY5LjRMMzc4LjUgMzE3LjNDMzg2LjQgMzIxLjYgMzk2IDMxNS44IDM5NiAzMDYuOUMzOTYgMzA0LjEgMzk1IDMwMS40IDM5My4yIDI5OS4yTDM1Ny4yIDI1NkwzOTMuMiAyMTIuOEMzOTUgMjEwLjYgMzk2IDIwNy45IDM5NiAyMDUuMUMzOTYgMTk2LjIgMzg2LjQgMTkwLjQgMzc4LjUgMTk0LjdMMjg4LjYgMjQyLjZ6TTIxNi45IDM1NC43QzIxMS41IDM1MS4xIDIwNC41IDM1MS4xIDE5OS4xIDM1NC43TDE1OC45IDM4MS41TDEzNS4yIDM2OS43QzEyNy4zIDM2NS43IDExNy42IDM2OC45IDExMy43IDM3Ni44QzEwOS43IDM4NC43IDExMi45IDM5NC40IDEyMC44IDM5OC4zTDE1Mi44IDQxNC4zQzE1Ny4xIDQxNi45IDE2NC4xIDQxNi41IDE2OC45IDQxMy4zTDIwOCAzODcuMkwyNDcuMSA0MTMuM0MyNTIuNSA0MTYuOSAyNTkuNSA0MTYuOSAyNjQuOSA0MTMuM0wzMDQgMzg3LjJMMzQzLjEgNDEzLjNDMzQ3LjkgNDE2LjUgMzU0IDQxNi45IDM1OS4yIDQxNC4zTDM5MS4yIDM5OC4zQzM5OS4xIDM5NC40IDQwMi4zIDM4NC43IDM5OC4zIDM3Ni44QzM5NC40IDM2OC45IDM4NC43IDM2NS43IDM3Ni44IDM2OS43TDM1My4xIDM4MS41TDMxMi45IDM1NC43QzMwNy41IDM1MS4xIDMwMC41IDM1MS4xIDI5NS4xIDM1NC43TDI1NiAzODAuOEwyMTYuOSAzNTQuN3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFlvdXR1YmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J001NDkuNjU1IDEyNC4wODNjLTYuMjgxLTIzLjY1LTI0Ljc4Ny00Mi4yNzYtNDguMjg0LTQ4LjU5N0M0NTguNzgxIDY0IDI4OCA2NCAyODggNjRTMTE3LjIyIDY0IDc0LjYyOSA3NS40ODZjLTIzLjQ5NyA2LjMyMi00Mi4wMDMgMjQuOTQ3LTQ4LjI4NCA0OC41OTctMTEuNDEyIDQyLjg2Ny0xMS40MTIgMTMyLjMwNS0xMS40MTIgMTMyLjMwNXMwIDg5LjQzOCAxMS40MTIgMTMyLjMwNWM2LjI4MSAyMy42NSAyNC43ODcgNDEuNSA0OC4yODQgNDcuODIxQzExNy4yMiA0NDggMjg4IDQ0OCAyODggNDQ4czE3MC43OCAwIDIxMy4zNzEtMTEuNDg2YzIzLjQ5Ny02LjMyMSA0Mi4wMDMtMjQuMTcxIDQ4LjI4NC00Ny44MjEgMTEuNDEyLTQyLjg2NyAxMS40MTItMTMyLjMwNSAxMS40MTItMTMyLjMwNXMwLTg5LjQzOC0xMS40MTItMTMyLjMwNXptLTMxNy41MSAyMTMuNTA4VjE3NS4xODVsMTQyLjczOSA4MS4yMDUtMTQyLjczOSA4MS4yMDF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J000NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgICAgPHBhdGggZD0nTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIGhlcm9TdHJpbmcsIG5hdiB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgeyBOYXYgfSBmcm9tICd+L2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IEJhbm5lciwgUHJvbW90aW9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcblxudHlwZSBMYXlvdXRQcm9wcyA9IFJvdXRlICYge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIHByb21vdGlvbj86IFByb21vdGlvbixcbiAgcHJldlJvdXRlPzogc3RyaW5nLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgY292ZXI/OiBKU1guRWxlbWVudCxcbiAgZGF0ZT86IEpTWC5FbGVtZW50LFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG50eXBlIFJvb3RMYXlvdXRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgaXNSb290OiBib29sZWFuLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2l0ZU1ldGEoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc2l0ZS53ZWJtYW5pZmVzdD92PTIwMjIwMzEzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdtYXNrLWljb24nIGhyZWY9Jy9pbWFnZXMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnP3Y9MjAyMjAzMTMnIGNvbG9yPScjMjU2M2ViJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvZmF2aWNvbi5pY28/dj0yMDIyMDMxMycgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMjU2M2ViJyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmOGZhZmMnIC8+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIHNyYz0naHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi0xMzE1MjM4ODYwNzE4NTQ5J1xuICAgICAgICBjcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+ICovfVxuICAgICAgPHNjcmlwdCBhc3luYyBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1OVFpEQ1RIRFg1Jz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBndGFnKCdjb25maWcnLCAnRy1OVFpEQ1RIRFg1Jyk7XG4gICAgICBgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gQ2hhbm5lbCBQbHVnaW4gU2NyaXB0cyAtLT4gKi99XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gd2luZG93O1xuICAgICAgICAgIGlmICh3LkNoYW5uZWxJTykge1xuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuY29uc29sZS5lcnJvciB8fCB3aW5kb3cuY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKXt9KSgnQ2hhbm5lbElPIHNjcmlwdCBpbmNsdWRlZCB0d2ljZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjaC5jKGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjaC5xID0gW107XG4gICAgICAgICAgY2guYyA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIGNoLnEucHVzaChhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHcuQ2hhbm5lbElPID0gY2g7XG4gICAgICAgICAgZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgIGlmICh3LkNoYW5uZWxJT0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcuQ2hhbm5lbElPSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgcy5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzLnNyYyA9ICdodHRwczovL2Nkbi5jaGFubmVsLmlvL3BsdWdpbi9jaC1wbHVnaW4td2ViLmpzJztcbiAgICAgICAgICAgIHMuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIHgucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgeCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBsKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25sb2FkJywgbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBDaGFubmVsSU8oJ2Jvb3QnLCB7XG4gICAgICAgICAgXCJwbHVnaW5LZXlcIjogXCJiYWZmZWE5Zi01Y2ZkLTRkNWQtOTM1YS03MzQwOTY0MWUxZjZcIlxuICAgICAgICB9KTtgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gRW5kIENoYW5uZWwgUGx1Z2luIC0tPiAqL31cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHRpdGxlLCBJY29uLCBkZXNjLCBwcm9tb3Rpb24sIHByZXZSb3V0ZSwgY292ZXIsIGRhdGUgfTogTGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3ByZXZpZXcnPlxuICAgICAgICAgIHtwcmV2aWV3RW5hYmxlZCA/IChcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvcG9zdHMvcHJldmlldy9zdG9wJz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgZHJhZnQgY29udGVudC4gPGJ1dHRvbj5DbGljayBoZXJlPC9idXR0b24+IHRvIGV4aXQgcHJldmlldyBtb2RlLlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL3Bvc3RzL3ByZXZpZXcvc3RhcnQnPlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgc2hvd2luZyBwdWJsaXNoZWQgY29udGVudC4gPGJ1dHRvbj5DbGljayBoZXJlPC9idXR0b24+IHRvIGVudGVyIHByZXZpZXcgbW9kZSFcbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8SGVhZGVyIHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUsIGNvdmVyLCBkYXRlIH19IC8+XG4gICAgICB7cHJvbW90aW9uICYmIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMnPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbiBmbGV4IG1kOmhpZGRlbic+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9vdExheW91dCh7IGlzUm9vdCwgY2hpbGRyZW4sIHBhdGhuYW1lIH06IFJvb3RMYXlvdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BieC1zZWN0aW9uICR7aXNSb290ID8gJycgOiAnaGlkZGVuIG1kOmZsZXgnfWB9PlxuICAgICAgICA8SGVyb1xuICAgICAgICAgIGhlcm9TdHJpbmc9e2hlcm9TdHJpbmd9XG4gICAgICAgICAgZGVzYz0nXHVCMzU0IFx1QjA5OFx1Qzc0MCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVBQ0JEXHVENUQ4XHVDNzQ0IFx1QzBERFx1QUMwMVx1RDU1OFx1QkE3MCBcdUFGM0NcdUFGM0NcdUQ1NThcdUFDOEMgXHVCOUNDXHVCNEU0XHVDNUI0IFx1QjREQ1x1QjgyNFx1QzY5NC4nXG4gICAgICAgICAgbGlua3M9e1tcbiAgICAgICAgICAgIHsgdXJsOiAnL2NvbnRhY3QnLCBsYWJlbDogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogJy9wbGFuJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdcdUM2OTRcdUFFMDhcdUQ0NUMgXHVENjU1XHVDNzc4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPE5hdiB7Li4ueyBuYXYsIHBhdGhuYW1lIH19IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc1Jvb3QgPyAncHgtMyBtZDpweC0wJyA6ICcnfWB9PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHtcbiAgdGl0bGUsXG4gIEljb24sXG4gIGRlc2MsXG4gIHByZXZSb3V0ZSxcbiAgY292ZXIsXG4gIGRhdGUsXG59OiBSb3V0ZSAmIHsgcHJldlJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGNvdmVyPzogSlNYLkVsZW1lbnQsIGRhdGU/OiBKU1guRWxlbWVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLW5hdic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtaG9tZSc+XG4gICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgPEljb25zLkhvbWVMaWdodCAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtbG9nbyc+XG4gICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgPEljb25zLkxvZ28gY2xhc3NOYW1lPSd3LTE2IGgtMTAnIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1zZXR0aW5ncyc+XG4gICAgICAgICAgPExpbmsgdG89Jy9zZXR0aW5ncyc+XG4gICAgICAgICAgICA8SWNvbnMuU2V0dGluZ3NMaWdodCAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItc2VjdGlvbic+XG4gICAgICAgIHtjb3ZlciAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtY292ZXInPntjb3Zlcn08L2Rpdj59XG4gICAgICAgIHtwcmV2Um91dGUgJiYgcHJldlJvdXRlICE9PSAnLycgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItaGlzdG9yeS1iYWNrJz5cbiAgICAgICAgICAgIDxCdXR0b24gaHJlZj17cHJldlJvdXRlfSBpY29uPXs8SWNvbnMuQXJyb3dMZWZ0TGlnaHQgLz59PjwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItbWV0YSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXRpdGxlJz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1kZXNjJz57ZGVzY308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyc+e2RhdGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1pY29uJz57SWNvbiAmJiB0eXBlb2YgSWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IDxJY29uIC8+IDogSWNvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBpY29uPzogUmVhY3RFbGVtZW50IHwgRWxlbWVudCB8IHN0cmluZyxcbiAgaHJlZj86IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IEVsZW1lbnQgfCBFbGVtZW50W10gfCBzdHJpbmcsXG4gIHNpemU/OiAnc21hbGwnIHwgJ2RlZmF1bHQnIHwgJ2xhcmdlJyxcbiAgdHlwZT86ICdzdWJtaXQnIHwgJ2J1dHRvbicsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxufVxuXG50eXBlIEJ1dHRvbkdyb3VwUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IHN0cmluZyxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5jb25zdCBzaXplcyA9IHtcbiAgbWluV2lkdGg6IHtcbiAgICBzbWFsbDogJ21pbi13LVsyNHB4XScsXG4gICAgZGVmYXVsdDogJ21pbi13LVszMnB4XScsXG4gICAgbGFyZ2U6ICdtaW4tdy1bNDBweF0nLFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBzbWFsbDogJ2gtNicsXG4gICAgZGVmYXVsdDogJ2gtOCcsXG4gICAgbGFyZ2U6ICdoLTEwJyxcbiAgfSxcbiAgaWNvblNpemU6IHtcbiAgICBzbWFsbDogJ3ctMyBoLTMnLFxuICAgIGRlZmF1bHQ6ICd3LTQgaC00JyxcbiAgICBsYXJnZTogJ3ctNiBoLTYnLFxuICB9LFxuICBmb250U2l6ZToge1xuICAgIHNtYWxsOiAndGV4dC14cycsXG4gICAgZGVmYXVsdDogJ3RleHQtc20nLFxuICAgIGxhcmdlOiAndGV4dC1iYXNlJyxcbiAgfSxcbiAgZ2FwOiB7XG4gICAgc21hbGw6ICdnYXAteC0xJyxcbiAgICBkZWZhdWx0OiAnZ2FwLXgtMicsXG4gICAgbGFyZ2U6ICdnYXAteC0zJyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUgPSAnYnV0dG9uJywgc2l6ZSA9ICdkZWZhdWx0JywgaHJlZiwgb25DbGljaywgaWNvbiwgY2hpbGRyZW4gfTogQnV0dG9uUHJvcHMpIHtcbiAgcmV0dXJuIGhyZWYgPyAoXG4gICAgPExpbmsga2V5PXtocmVmfSB0bz17aHJlZn0+XG4gICAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbiAke3NpemVzLmhlaWdodFtzaXplXX0gJHtzaXplcy5taW5XaWR0aFtzaXplXX19YH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfSAke3NpemVzLmdhcFtzaXplXX1gfT5cbiAgICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24taWNvbiAke3NpemVzLmljb25TaXplW3NpemVdfWB9PntpY29ufTwvc3Bhbj59XG4gICAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLXRleHQnPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKSA6IG9uQ2xpY2sgPyAoXG4gICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWxhYmVsICR7c2l6ZXMuZm9udFNpemVbc2l6ZV19ICR7c2l6ZXMuZ2FwW3NpemVdfWB9PlxuICAgICAgICB7aWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24taWNvbiAke3NpemVzLmljb25TaXplW3NpemVdfWB9PntpY29ufTwvc3Bhbj59XG4gICAgICAgIHtjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi10ZXh0Jz57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKSA6IChcbiAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YGJ4LWJ1dHRvbiAke3NpemVzLmhlaWdodFtzaXplXX0gJHtzaXplcy5taW5XaWR0aFtzaXplXX19YH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX0gJHtzaXplcy5nYXBbc2l6ZV19YH0+XG4gICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1pY29uICR7c2l6ZXMuaWNvblNpemVbc2l6ZV19YH0+e2ljb259PC9zcGFuPn1cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLXRleHQnPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfTogQnV0dG9uR3JvdXBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtYnV0dG9uLWdyb3VwICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgeyBIZXJvU3RyaW5nIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBIZXJvUHJvcHMgPSB7XG4gIGhlcm9TdHJpbmc6IEhlcm9TdHJpbmcsXG4gIGRlc2M/OiBzdHJpbmcsXG4gIGxpbmtzPzogeyB1cmw/OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGhhbmRsZXI/OiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkIH1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oeyBoZXJvU3RyaW5nID0gW1snJywgJyddXSwgZGVzYywgbGlua3MgfTogSGVyb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAge2hlcm9TdHJpbmcubWFwKGhlYWRpbmcgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aGVhZGluZ1swXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggZ2FwLXgtMC41IHRleHQtMnhsIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTMwMCBldmVuOm1sLTUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJsYWNrJz57aGVhZGluZ1swXX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtdGhpbic+e2hlYWRpbmdbMV19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Rlc2MgJiYgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG1heC13LVsyMDBweF0gdGV4dC14cyBtdC0zIHRleHQtY2VudGVyJz57ZGVzY308L2Rpdj59XG4gICAgICB7bGlua3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVyby1saW5rcyc+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICB7bGlua3MubWFwKGxpbmsgPT5cbiAgICAgICAgICAgICAgbGluay51cmwgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsubGFiZWx9IG9uQ2xpY2s9e2xpbmsuaGFuZGxlcn0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBOYXZQcm9wcyA9IHtcbiAgbmF2PzogUm91dGVzW10sXG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KHsgbmF2LCBwYXRobmFtZSwgY2F0ZWdvcnlJZCB9OiBOYXZQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J2J4LW5hdic+XG4gICAgICB7bmF2ID8gKFxuICAgICAgICBuYXZcbiAgICAgICAgICAuZmlsdGVyKG4gPT4gbi5kaXNwbGF5KVxuICAgICAgICAgIC5tYXAobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtuYXZJdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdieC1uYXYtY2F0ZWdvcnknPntuYXZJdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAge25hdkl0ZW0/LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2J4LW5hdi1jaGlsZHJlbic+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihuID0+IG4uZGlzcGxheSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKG5hdlN1Ykl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bmF2U3ViSXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0ucGF0aG5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BieC1uYXYtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXRobmFtZSAmJiBwYXRobmFtZSAhPT0gJy8nICYmIHBhdGhuYW1lLmluZGV4T2YobmF2U3ViSXRlbS5wYXRobmFtZSkgIT09IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdlN1Ykl0ZW0ucGF0aG5hbWUgPT09IGNhdGVnb3J5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J4LW5hdi1pdGVtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZTdWJJdGVtLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uSWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIG5hdlN1Ykl0ZW0uSWNvbiA9PT0gJ2Z1bmN0aW9uJyAmJiA8bmF2U3ViSXRlbS5JY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/LmRlc2MgJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtZGVzYyc+e25hdlN1Ykl0ZW0uZGVzY308L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWFycm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi5BcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5JY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgbmF2U3ViSXRlbS5JY29uID09PSAnZnVuY3Rpb24nICYmIDxuYXZTdWJJdGVtLkljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtbmFtZSc+e25hdlN1Ykl0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxsaT5cdUI0RjFcdUI4NURcdUI0MUMgXHVCNzdDXHVDNkIwXHVEMkI4IFx1QkFBOVx1Qjg1RFx1Qzc3NCBcdUM4NzRcdUM3QUNcdUQ1NThcdUM5QzAgXHVDNTRBXHVDMkI1XHVCMkM4XHVCMkU0LjwvbGk+XG4gICAgICApfVxuICAgIDwvdWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1sb2dvJz5cbiAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgIDxJY29uLkxvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWNvbnRhY3QnPlxuICAgICAgICA8YSBocmVmPSd0ZWw6MTU4ODk5OTknPjE1ODgtOTk5OTwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0LWRlc2MnPlxuICAgICAgICAgIFx1RDNDOVx1Qzc3QyAxMDowMCAtIDE4OjAwXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgKFx1QzgxMFx1QzJFQ1x1QzJEQ1x1QUMwNCAxMzowMCAtIDE0OjAwIFx1QzgxQ1x1QzY3OCBcdTAwQjcgXHVDOEZDXHVCOUQwL1x1QUNGNVx1RDczNFx1Qzc3QyBcdUM4MUNcdUM2NzgpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdieC1mb290ZXItc25zJz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2RlZXJwYXJrODIxMCcgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1lvdVR1YmUnPlxuICAgICAgICAgICAgPEljb24uWW91dHViZSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2RlZXJwYXJrNycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1R3aXR0ZXInPlxuICAgICAgICAgICAgPEljb24uVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGVlcnBhcmsnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdJbnN0YWdyYW0nPlxuICAgICAgICAgICAgPEljb24uSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5leHBvcnQgdHlwZSBQcm9tb3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHVybD86IHN0cmluZyxcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yOiB7XG4gICAgcmVkOiBudW1iZXIsXG4gICAgYmx1ZTogbnVtYmVyLFxuICAgIGdyZWVuOiBudW1iZXIsXG4gIH0sXG4gIHRleHRjb2xvcjoge1xuICAgIGhleDogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFubmVyKHsgdGl0bGUsIHVybCwgY29sb3I6IHsgcmVkLCBibHVlLCBncmVlbiB9LCB0ZXh0Y29sb3I6IHsgaGV4IH0sIGxhYmVsIH06IFByb21vdGlvbikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXInIHN0eWxlPXt7XG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWAsXG4gICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAuNSlgLFxuICAgICAgJy0tdHctc2hhZG93JzogJ3ZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKScsXG4gICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItaWNvbic+XG4gICAgICAgIDxJY29uLkJhbm5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLXRpdGxlJz48c3Bhbj57dGl0bGV9PC9zcGFuPjwvZGl2PlxuICAgICAge3VybCAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLWxpbmsnPlxuICAgICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBocmVmPXt1cmx9PntsYWJlbCB8fCAnXHVCQzE0XHVCODVDXHVBQzAwXHVBRTMwJ308L0J1dHRvbj5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24uc2V0KCdwcmV2aWV3JywgJ3llcycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGNvbnN1bHRpbmcgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zdWx0aW5nKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFJlY29tbWVuZFByb3BzID0ge1xuICBsaXN0OiBMaXN0SXRlbVtdLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHBob3Rvcz86IGFueVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVjb21tZW5kKHsgbGlzdCwgY2xhc3NOYW1lIH06IFJlY29tbWVuZFByb3BzKSB7XG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1Qzc3NFx1QjdGMFx1QkQ4NFx1QUVEOCBcdUNEOTRcdUNDOUMgXHVCNERDXHVCODI0XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcblxudHlwZSBSb3dQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICBpY29uPzogSlNYLkVsZW1lbnQsXG4gIGxpc3Q6IExpc3RJdGVtW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3coeyBpY29uLCB0aXRsZSwgbGlzdCwgY2xhc3NOYW1lIH06IFJvd1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BieC1jb250ZW50cy1yb3cgYngtY29udGVudHMtcm93LWV4dGVuZCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3cgcGItMSBtZDpwYi00Jz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nYngtY29udGVudHMtaDInPlxuICAgICAgICAgIDxzcGFuPnsoaWNvbiAmJiBpY29uKSB8fCA8SWNvbi5CdWxsZXRTb2xpZCAvPn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpc3QgbGlzdD17bGlzdH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCB0eXBlIExpc3RJdGVtID0ge1xuICB0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICB0aHVtYj86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICBjb250ZW50cz86IChzdHJpbmcgfCBKU1guRWxlbWVudClbXSxcbn1cblxuZXhwb3J0IHR5cGUgTGlzdFByb3BzID0ge1xuICBsaXN0OiBMaXN0SXRlbVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGlzdCh7IGxpc3QgfTogTGlzdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT0nYngtbGlzdCc+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lmxlbmd0aCAmJlxuICAgICAgICBsaXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZCc+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS50aHVtYiAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC10aHVtYm5haWwnPntsaXN0SXRlbS50aHVtYn08L2Rpdj59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWJvZHknPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC10aXRsZSc+e2xpc3RJdGVtLnRpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uY29udGVudHMgJiZcbiAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLmNvbnRlbnRzLm1hcCgoY29udGVudCwgY29udGVudEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50SW5kZXh9IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1kZXNjJz5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC91bD5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFRlY2hQcm9wcyA9IHtcbiAgbGlzdDogTGlzdEl0ZW1bXSxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGVjaCh7IGxpc3QsIGNsYXNzTmFtZSB9OiBUZWNoUHJvcHMpIHtcbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVENTZEXHVDMEMxIFx1Q0Q1Q1x1QzJFMFx1Qzc1OCBcdUFFMzBcdUMyMjBcdUM3NDQgXHVDMTIwXHVCM0M0XHVENTc0XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuXG50eXBlIEZsb3dQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmxvdyh7IGNsYXNzTmFtZSB9OiBGbG93UHJvcHMpIHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjE8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUFDQzRcdUM1N0RcdUFFMDggMTAlIFx1Qzc4NVx1QUUwOCcsXG4gICAgICBjb250ZW50czogWydcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjhcdUFDMDAgXHVDMkRDXHVDNzkxXHVCNDE4XHVBRTMwIFx1QzgwNCBcdUJCRjhcdUI5QUMgXHVBQ0M0XHVDNTdEXHVBRTA4XHVDNzQ0IFx1QkMxQlx1QUNFMCBcdUMyRENcdUM3OTFcdUQ1NzRcdUM2OTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjI8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUFFMzBcdUNEMDggXHVDMEMxXHVCMkY0JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUNFRThcdUMxNDksIFx1QzZEMFx1RDU1OFx1QjI5NCBcdUFFMzBcdUIyQTVcdUI0RTRcdUM3NDQgXHVBQ0UwXHVBQzFEXHVCMkQ4XHVCNEU0XHVBQ0ZDIFx1RDU2OFx1QUVEOCBcdUMwQUNcdUM4MDRcdUM1RDAgXHVDOEZDXHVBQ0UwIFx1QkMxQlx1QzU0NFx1QzY5NC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+Mzwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1Qzc1OFx1QjhCMFx1QzVEMCBcdUFEMDBcdUI4MjhcdUI0MUMgXHVDNzkwXHVCOENDIFx1QzIxOFx1QzJFMCcsXG4gICAgICBjb250ZW50czogWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1IFx1QzgwNCBcdUQ1NDRcdUM2OTRcdUQ1NUMgXHVDNzkwXHVCOENDXHVCNEU0XHVDNzQ0IFx1QjExOFx1QUNBOFx1QkMxQlx1QzU0NFx1QzY5NC4gKFx1Qjg1Q1x1QUNFMCwgXHVDNTQ0XHVDNzc0XHVCNTE0XHVDNUI0LCBcdUM4MUNcdUQ0ODggXHVDODE1XHVCQ0Y0XHVBRDAwXHVCODI4IFx1QzBBQ1x1QzlDNCknXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+NDwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUMyRENcdUM1NDggXHVBQzgwXHVEMUEwJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxNDlcdUM3NTggXHVDMkRDXHVDNTQ4XHVDNzQ0IFx1QkJGOFx1QjlBQyBcdUFDRTBcdUFDMURcdUIyRDhcdUI0RTRcdUFDRkMgXHVENjExXHVDNzU4XHVENTc0XHVDNjk0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz41PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDMjE4XHVDODE1XHVDMEFDXHVENTZEIFx1QkMxOFx1QzYwMSBcdUJDMEYgXHVBQzFDXHVCQzFDIFx1QzlDNFx1RDU4OScsXG4gICAgICBjb250ZW50czogWydcdUJFNjBcdUI5NzRcdUFDOEMgXHVBQzFDXHVCQzFDIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjY8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUIzNzBcdUJBQTgnLFxuICAgICAgY29udGVudHM6IFsnXHVDQ0FCIFx1QzJEQ1x1QzVGMCBcdUQ2QzQgXHVDMjE4XHVDODE1XHVDMEFDXHVENTZEIFx1QkMxOFx1QzYwMSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz43PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDODg1IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM2MjRcdUQ1MDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDNjI0XHVENTA4IFx1RDZDNCBcdUJBQThcdUIyQzhcdUQxMzBcdUI5QzEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+ODwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1Qzc5NFx1QUUwOCA5MCUgXHVDNzg1XHVBRTA4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOCBcdUM2NDRcdUI4Q0MnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjVcdUM3NDAgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc3NCBcdUM3NzRcdUI5MDRcdUM4MzhcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgQ3Jld3NQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICBwaG90b3M6IGFueVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3Jld3MoeyBwaG90b3MsIGNsYXNzTmFtZSB9OiBDcmV3c1Byb3BzKSB7XG4gIGNvbnN0IFtjcmV3czFUaHVtYiwgY3Jld3MyVGh1bWIsIGNyZXdzM1RodW1iXSA9IHBob3Rvc1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17Y3Jld3MxVGh1bWJ9IC8+LFxuICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzgvXHVBQzFDXHVCQzFDIFwiXHVDNkE5XHVDNkE5XCInLFxuICAgICAgY29udGVudHM6IFsnSVRcdUNENUNcdUM4MDRcdUMxMjBcdUM1RDBcdUMxMUMgXHVDMkY4XHVDNkNDXHVDNjI4IFx1QUNCRFx1QjgyNSAxMFx1QjE0NCBcdUM3NzRcdUMwQzFcdUM3NTggXHVDODA0XHVCQjM4XHVBQzAwJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e2NyZXdzMlRodW1ifSAvPixcbiAgICAgIHRpdGxlOiAnXHVENTA0XHVCODYwXHVEMkI4XHVDNUQ0XHVCNERDL1x1QkMzMVx1QzVENFx1QjREQyBcdUFDMUNcdUJDMUMgXCJcdUI2OUNcdUMyRERcdUM3NzRcIicsXG4gICAgICBjb250ZW50czogWydJVFx1Q0Q1Q1x1QzgwNFx1QzEyMFx1QzVEMFx1QzExQyBcdUMyRjhcdUM2Q0NcdUM2MjggXHVBQ0JEXHVCODI1IDEwXHVCMTQ0IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MDRcdUJCMzhcdUFDMDAnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17Y3Jld3MzVGh1bWJ9IC8+LFxuICAgICAgdGl0bGU6ICdcdUIzNzBcdUM3NzRcdUQxMzAvXHVDNzc4XHVENTA0XHVCNzdDIFx1QUMxQ1x1QkMxQyBcIlx1QkE4NVx1Qzc5MFwiJyxcbiAgICAgIGNvbnRlbnRzOiBbJ0lUXHVDRDVDXHVDODA0XHVDMTIwXHVDNUQwXHVDMTFDIFx1QzJGOFx1QzZDQ1x1QzYyOCBcdUFDQkRcdUI4MjUgMTBcdUIxNDQgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgwNFx1QkIzOFx1QUMwMCddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDODAwXHVENzZDIFx1RDMwMFx1Qzc0MCBcdUM4MDRcdUJCMzhcdUFDMDBcdUI0RTRcdUI4NUMgXHVBRDZDXHVDMTMxIFx1QjQxOFx1QzVCNFx1Qzc4OFx1QzVCNFx1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcblxudHlwZSBGQVFQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRkFRKHsgY2xhc3NOYW1lIH06IEZBUVByb3BzKSB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM3OTFcdUM1QzUgXHVBRTMwXHVBQzA0XHVDNzQwIFx1QkNGNFx1RDFCNSBcdUM1QkNcdUI5QzhcdUIwOTggXHVBQzc4XHVCOUFDXHVCMDk4XHVDNjk0PycsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICA8dWwga2V5PSdzZXJ2aWNlLWZhcS0wJyBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cdUQ2NERcdUJDRjRcdUM2QTkgXHVDNkY5XHVEMzk4XHVDNzc0XHVDOUMwXHVCMjk0IDNcdUM3N0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUFFMzBcdUM1QzUgXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwXHVCMjk0IDVcdUM3N0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUJFMENcdUI3OUNcdUI1MjkgXHVDRUU4XHVDMTI0XHVEMzA1XHVDNzQwIDEwXHVDNzdDPC9saT5cbiAgICAgICAgPC91bD4sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICcxXHVCMTQ0IFx1QkIzNFx1QzBDMSBBL1NcdUM3NTggXHVCQzk0XHVDNzA0XHVCMjk0IFx1QzVCNFx1QjUxNFx1QUU0Q1x1QzlDMCBcdUM3NzhcdUFDMDBcdUM2OTQ/JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgIDx1bCBrZXk9J3NlcnZpY2UtZmFxLTEnIGNsYXNzTmFtZT0nYngtbGlzdC1pdGVtcyc+XG4gICAgICAgICAgPGxpPlx1RDE0RFx1QzJBNFx1RDJCOCBcdUMyMThcdUM4MTU8L2xpPlxuICAgICAgICAgIDxsaT5cdUM3NzRcdUJCRjhcdUM5QzAgXHVBRDUwXHVDQ0I0IFx1QkMwRiBcdUNEOTRcdUFDMDAsIFx1QzBBRFx1QzgxQzwvbGk+XG4gICAgICAgICAgPGxpPlx1QkUwQ1x1Qjc5Q1x1QjUyOSBcdUNFRUNcdUI3RUMgXHVCQ0MwXHVBQ0JEPC9saT5cbiAgICAgICAgICA8bGk+XHVEMzk4XHVDNzc0XHVDOUMwIFx1Q0Q5NFx1QUMwMCBcdUM3OTFcdUM1QzVcdUM3NDAgXHVDRDk0XHVBQzAwIFx1QzY5NFx1QUUwOFx1Qzc3NCBcdUJDMUNcdUMwREQgXHVENTY5XHVCMkM4XHVCMkU0LihcdUJDQzRcdUIzQzQgXHVENjExXHVDNzU4KTwvbGk+XG4gICAgICAgIDwvdWw+LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1Qzc5MFx1QzhGQ1x1Qzc4OFx1QjI5NCBcdUM5QzhcdUJCMzhcdUI0RTRcdUM3NzRcdUM2MDhcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgUmVmdW5kUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnVuZCh7IGNsYXNzTmFtZSB9OiBSZWZ1bmRQcm9wcykge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVBRTMwXHVCQ0Y4IFx1RDY1OFx1QkQ4OCBcdUFERENcdUM4MTUnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QzgwNFx1QkIzOFx1QUMwMFx1QzY0MCBcdUM3NThcdUI4QjBcdUM3NzhcdUM3NTggXHVDMEMxXHVENjM4IFx1RDYxMVx1Qzc1OFx1RDU1OFx1QzVEMCBcdUNDQURcdUM1N0QgXHVDQ0EwXHVENjhDIFx1QkMwRiBcdUQ2NThcdUJEODhcdUM3NzQgXHVBQzAwXHVCMkE1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICAgICdcdUM3OTFcdUM1QzVcdUM3NzQgXHVDNjQ0XHVCOENDXHVCNDFDIFx1Qzc3NFx1RDZDNCBcdUI2MTBcdUIyOTQgXHVDNzkwXHVCOENDLCBcdUQ1MDRcdUI4NUNcdUFERjhcdUI3QTggXHVCNEYxIFx1QzExQ1x1QkU0NFx1QzJBNFx1QUMwMCBcdUM4MUNcdUFDRjVcdUI0MUMgXHVDNzc0XHVENkM0XHVDNUQwXHVCMjk0IFx1RDY1OFx1QkQ4OFx1Qzc3NCBcdUJEODhcdUFDMDBcdUQ1NjlcdUIyQzhcdUIyRTQuICggXHVDMThDXHVCRTQ0XHVDNzkwXHVCQ0Y0XHVENjM4XHVCQzk1IDE3XHVDODcwIDJcdUQ1NkRcdUM3NTggNVx1Qzg3MC4gXHVDNkE5XHVDNUVEIFx1QjYxMFx1QjI5NCBcdTMwMENcdUJCMzhcdUQ2NTRcdUMwQjBcdUM1QzVcdUM5QzRcdUQ3NjUgXHVBRTMwXHVCQ0Y4XHVCQzk1XHUzMDBEIFx1QzgxQzJcdUM4NzAgXHVDODFDNVx1RDYzOFx1Qzc1OCBcdUI1MTRcdUM5QzBcdUQxMzhcdUNGNThcdUQxNTBcdUNFMjBcdUM3NTggXHVDODFDXHVBQ0Y1XHVDNzc0IFx1QUMxQ1x1QzJEQ1x1QjQxQyBcdUFDQkRcdUM2QjBcdUM1RDAgXHVENTc0XHVCMkY5KScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM4MDRcdUJCMzhcdUFDMDAgXHVDQzQ1XHVDNzg0IFx1QzBBQ1x1QzcyMCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDODA0XHVCQjM4XHVBQzAwXHVDNzU4IFx1QURDMFx1Q0M0NVx1QzBBQ1x1QzcyMFx1Qjg1QyBcdUIyRjlcdUNEMDggXHVDNTdEXHVDODE1XHVENTg4XHVCMzU4IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUJCRjhcdUM3NzRcdUQ1ODkgXHVENjM5XHVDNzQwIFx1QkNGNFx1RDNCOFx1QzgwMVx1Qzc3OCBcdUFEMDBcdUM4MTBcdUM1RDBcdUMxMUMgXHVDMkVDXHVBQzAxXHVENTU4XHVBQzhDIFx1Qzc5OFx1QkFCQiBcdUM3NzRcdUQ1ODlcdUQ1NUMgXHVBQ0JEXHVDNkIwIFx1QUNCMFx1QzgxQyBcdUFFMDhcdUM1NjEgXHVDODA0XHVDQ0I0IFx1RDY1OFx1QkQ4OFx1Qzc3NCBcdUFDMDBcdUIyQTVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1Qzc1OFx1QjhCMFx1Qzc3OCBcdUNDNDVcdUM3ODQgXHVDMEFDXHVDNzIwJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVDOUM0XHVENTg5IFx1QjNDNFx1QzkxMSBcdUM3NThcdUI4QjBcdUM3NzhcdUM3NTggXHVBREMwXHVDQzQ1XHVDMEFDXHVDNzIwXHVCODVDIFx1Qzc3OFx1RDU3NCBcdUQ2NThcdUJEODhcdUM3NDQgXHVDNjk0XHVDQ0FEXHVENTYwIFx1QUNCRFx1QzZCMCwgXHVDMEFDXHVDNkE5IFx1QUUwOFx1QzU2MVx1Qzc0NCBcdUM1NDRcdUI3OThcdUM2NDAgXHVBQzE5XHVDNzc0IFx1QUNDNFx1QzBCMCBcdUQ2QzQgXHVDRDFEIFx1QUUwOFx1QzU2MVx1Qzc1OCAxMCVcdUI5N0MgXHVBQ0Y1XHVDODFDXHVENTU4XHVDNUVDIFx1RDY1OFx1QkQ4OFx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgICA8dWwga2V5PSdzZXJ2aWNlLXJlZnVuZC0yJyBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cdUNEMUQgXHVDNzkxXHVDNUM1XHVCN0M5XHVDNzU4IDEvMyBcdUFDQkRcdUFDRkMgXHVDODA0IDogXHVDNzc0XHVCQkY4IFx1QjBBOVx1QkQ4MFx1RDU1QyBcdUM2OTRcdUFFMDhcdUM3NTggMi8zXHVENTc0XHVCMkY5XHVDNTYxPC9saT5cbiAgICAgICAgICA8bGk+XHVDRDFEIFx1Qzc5MVx1QzVDNVx1QjdDOVx1Qzc1OCAxLzIgXHVBQ0JEXHVBQ0ZDIFx1QzgwNCA6IFx1Qzc3NFx1QkJGOCBcdUIwQTlcdUJEODBcdUQ1NUMgXHVDNjk0XHVBRTA4XHVDNzU4IDEvMlx1RDU3NFx1QjJGOVx1QzU2MTwvbGk+XG4gICAgICAgICAgPGxpPlx1Q0QxRCBcdUM3OTFcdUM1QzVcdUI3QzlcdUM3NTggMS8yIFx1QUNCRFx1QUNGQyBcdUQ2QzQgOiBcdUJDMThcdUQ2NThcdUQ1NThcdUM5QzAgXHVDNTRBXHVDNzRDPC9saT5cbiAgICAgICAgPC91bD4sXG4gICAgICBdLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDREU4XHVDMThDIFx1QkMwRiBcdUQ2NThcdUJEODhcdUFERENcdUM4MTVcdUM3NDQgXHVDNTRDXHVCODI0XHVCNERDXHVCOUI0XHVBQzhDXHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgcHVibGlzaGluZyBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyBSZWNvbW1lbmQsIFRlY2gsIEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1Ymxpc2hpbmcoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IHJlY29tbWVuZExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Qzc3OFx1RDEzMFx1QjEzNyBcdUMwQUNcdUM1QzVcdUM3OTAgXHVCMzAwXHVENDVDXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOFx1QzVEMCBcdUI5QzhcdUQwNkNcdUM1QzUgXHVBQzFDXHVCQzFDIFx1QkMwRiBVSSBcdUFDMUNcdUJDMUMgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSwgXHVEMTM0XHVEMEE0IFx1QUNDNFx1QzU3RCddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QjMwMFx1QUUzMFx1QzVDNSBTSSBcdUIyRjRcdUIyRjlcdUM3OTBcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVCMzAwXHVBRERDXHVCQUE4IFx1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOCBcdUI5QzhcdUQwNkNcdUM1QzUsIFVJIFx1QUMxQ1x1QkMxQyBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1LCBcdUMwQzFcdUM4RkMgXHVCRDg4XHVBQzAwLCBcdUQxMzRcdUQwQTQgXHVBQ0M0XHVDNTdEJ10sXG4gICAgfSxcbiAgXVxuICBjb25zdCB0ZWNoTGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbMl0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnVGFpbHdpbmRDU1MgXHVDOUMwXHVDNkQwJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUM2OTRcdUM5OTggXHVBQzAxXHVBRDExXHVCQzFCXHVCMjk0IFx1QzcyMFx1RDJGOFx1QjlBQ1x1RDJGMCBcdUQwNzRcdUI3OThcdUMyQTQgXHVENTA0XHVCODA4XHVDNzg0XHVDNkNDXHVEMDZDXHVDNzc4IFRhaWx3aW5kQ1NTXHVCODVDIFx1QUMxQ1x1QkMxQyBcdUFDMDBcdUIyQTVcdUQ1NThcdUJBNzAgXHVCMkU0XHVDNTkxXHVENTVDIENTUyBcdUJDMjlcdUJDOTVcdUI4NjBcdUM3M0NcdUI4NUNcdUIzQzQgXHVBQzAwXHVCMkE1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzNdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzJEQ1x1QjlFOFx1RDJGMSBcdUI5QzhcdUQwNkNcdUM1QzUgXHVBQzFDXHVCQzFDJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QkIzOFx1QzExQ1x1QzVEMCBcdUFENkNcdUM4NzBcdUM4MDFcdUM3NzggXHVDNzU4XHVCQkY4XHVCOTdDIFx1QkQ4MFx1QzVFQ1x1RDU1OFx1QzVFQyBcdUNENUNcdUIzMDBcdUQ1NUMgXHVDMkRDXHVCOUU4XHVEMkYxXHVENTVDIFx1QUMxQ1x1QkMxQ1x1Qzc0NCBcdUM4MUNcdUFDRjVcdUQ1NjlcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbNF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDNkY5IFx1QzgxMVx1QURGQ1x1QzEzMSBcdUM5MDBcdUMyMTgnLFxuICAgICAgY29udGVudHM6IFsnXHVDNjk0XHVBRDZDXHVDMEFDXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUM4MTFcdUFERkNcdUMxMzFcdUM3NDQgXHVDOTAwXHVDMjE4XHVENTU4XHVDNUVDIFx1Qzc3OFx1Qzk5RCBcdUI5QzhcdUQwNkNcdUI5N0MgXHVCQzFCXHVDNzQ0IFx1QzIxOCBcdUM3ODhcdUIzQzRcdUI4NUQgXHVBQzFDXHVCQzFDXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1s1XS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVEMzk4XHVDNzc0XHVDOUMwXHVCODVDIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBjb250ZW50czogWydcdUIyRTRcdUM1OTFcdUQ1NUMgUEMgXHVEMDZDXHVCODVDXHVDMkE0LCBcdUJBQThcdUIzNTggXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwLCBcdUJBQThcdUJDMTRcdUM3N0NcdUM1RDBcdUMxMUMgXHVBQzAxXHVBQzAxIFx1RDA2Q1x1QUUzMFx1QzVEMCBcdUNENUNcdUM4MDFcdUQ2NTQgXHVCNDE4XHVCM0M0XHVCODVEIFx1QjlERVx1Q0RBNCBcdUM4MUNcdUM3OTEgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8UmVjb21tZW5kIGxpc3Q9e3JlY29tbWVuZExpc3R9IC8+XG4gICAgICA8VGVjaCBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZycgbGlzdD17dGVjaExpc3R9IC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgc2luZ2xlcGFnZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyBSZWNvbW1lbmQsIFRlY2gsIEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZXBhZ2UoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IGxpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ0lUIFx1QUUzMFx1QzVDNSBcdUI5QzhcdUNGMDBcdUQzMDUgXHVCMkY0XHVCMkY5XHVDNzkwXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjhGMFx1QjgxQiBcdUM3NzRcdUJDQTRcdUQyQjggXHVBRTRDXHVDOUMwIFx1Qzc3OFx1RDEzMFx1QjgwOVx1QzE1OCBcdUFDMUNcdUJDMUMgXHVEM0VDXHVENTY4IFx1QzY5NFx1QUQ2Q1x1QzBBQ1x1RDU2RFx1Qzc0NCBcdUNENUNcdUIzMDBcdUQ1NUMgXHVCOURFXHVDREE0IFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzFGQ1x1RDU1MVx1QkFCMCBcdUMwQUNcdUM3QTVcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDMkUwXHVBRERDIFx1QzcyMFx1Qzc4NSwgXHVCOUFDXHVEMTUwXHVDMTU4XHVCNEYxIFx1QjlDOFx1Q0YwMFx1RDMwNVx1QzVEMCBcdUQ2NUNcdUM2QTlcdUQ1NThcdUFDRTAgXHVDMkY2XHVDNzQwIFx1QUMwNFx1QjJFOFx1RDU1QyBcdUM3NzRcdUJDQTRcdUQyQjggXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Qzc3OFx1RDE0Q1x1QjlBQ1x1QzVCNCBcdUFDMDBcdUFDOEMgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzBBQ1x1QzVDNVx1Qzc0NCBcdUFDMDRcdUIyRThcdUQ1NThcdUFDOEMgXHVDMThDXHVBQzFDXHVENTU4XHVBQ0UwIFx1Qzc3OFx1RDEzMFx1QjEzN1x1QzVEMCBcdUQ2NERcdUJDRjRcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QjNDNFx1Qjg1RCBcdUI3OUNcdUI1MjkgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDMkUwIFx1RDE0Q1x1RDA2QyBcdUQyQjhcdUI5QUMnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ05leHRKUy9SZW1peCBSZWFjdCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkMsIE5vZGVKUywgUG9zdGdyZVNRTFx1QUUzMFx1QkMxOCBcdUNENUNcdUMyRTAgXHVBRTMwXHVDMjIwXHVCODVDIFx1QUMxQ1x1QkMxQyBcdUQ1NjhcdUM3M0NcdUI4NUNcdUMzNjggXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QkNCQ1x1QzZCNCBcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0NcdUM4MUNcdUFDRjVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdTRU8gXHVCM0M0XHVDNzg1JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUFENkNcdUFFMDAsIFx1QjEyNFx1Qzc3NFx1QkM4NCBcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzRcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0XHVENTU4XHVDNUVDIFx1Qzc5MVx1QzVDNVx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuIFx1QUM4MFx1QzBDOVx1Qzc0MCBcdUM1QjRcdUI1MTRcdUM1RDBcdUMxMUNcdUIwOTggXHVDMjdEXHVBQ0UwIFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUM3QTUgXHVDMEMxXHVDNzA0XHVDNUQwIFx1QjdBRFx1RDA2Q1x1QjQyMCBcdUMyMThcdUM3ODhcdUIzQzRcdUI4NUQgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUQzOThcdUM3NzRcdUM5QzBcdUI4NUMgXHVDODFDXHVDNzkxJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjJFNFx1QzU5MVx1RDU1QyBQQyBcdUQwNkNcdUI4NUNcdUMyQTQsIFx1QkFBOFx1QjM1OCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAsIFx1QkFBOFx1QkMxNFx1Qzc3Q1x1QzVEMFx1QzExQyBcdUFDMDFcdUFDMDEgXHVEMDZDXHVBRTMwXHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NCBcdUI0MThcdUIzQzRcdUI4NUQgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxSZWNvbW1lbmQgbGlzdD17bGlzdH0gLz5cbiAgICAgIDxUZWNoIGxpc3Q9e3RlY2hMaXN0fSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZycgLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBhcHBkZXNpZ24gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBkZXNpZ24oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGhvbWVwYWdlIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IFJlY29tbWVuZCwgVGVjaCwgRmxvdywgQ3Jld3MsIEZBUSwgUmVmdW5kIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlcnZpY2VzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IGxpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5ob21lcGFnZVswXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM3NzhcdUQxNENcdUI5QUNcdUM1QjQgXHVBQzAwXHVBQzhDIFx1QzBBQ1x1QzdBNVx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUFDMDRcdUIyRThcdUQ3ODggXHVDMEFDXHVDNUM1XHVDNzQ0IFx1QzE4Q1x1QUMxQ1x1RDU1OFx1QUNFMCBcdUQ2NERcdUJDRjRcdUQ1NThcdUFDRTAgXHVDMkY2XHVDNzQwIFx1QzBBQ1x1QzdBNVx1QjJEOFx1QjRFNFx1Qzc0NCBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5ob21lcGFnZVsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM5MTFcdUMxOENcdUFFMzBcdUM1QzUgXHVCMzAwXHVENDVDXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QUUzMFx1QzVDNVx1Qzc0NCBcdUMxOENcdUFDMUNcdUQ1NThcdUFDRTAgXHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzgxQ1x1QUNGNVx1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NUMgXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QjlERVx1Q0RBNCBcdUM4MUNcdUM3OTEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uaG9tZXBhZ2VbMl0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDMkREXHVCMkY5IFx1QzBBQ1x1QzdBNVx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUMwQzhcdUI4NUNcdUM2QjQgXHVBQzAwXHVBQzhDIFx1QjYxMFx1QjI5NCBcdUJDOTVcdUM3NzhcdUM3NDQgXHVDMkRDXHVDNzkxXHVENTU4XHVBRTMwIFx1QzgwNCBcdUFDMDRcdUQzMTAsIFx1Qjg1Q1x1QUNFMCwgXHVCQTU0XHVCMjc0XHVEMzEwXHVCNEYxXHVDNzU4IFx1QkUwQ1x1Qjc5Q1x1QjUyOSBcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1IFx1QzExQ1x1QkU0NFx1QzJBNFx1Qjk3QyBcdUM4MUNcdUFDRjUnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHRlY2hMaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Q0Q1Q1x1QzJFMCBcdUQxNENcdUQwNkMgXHVEMkI4XHVCOUFDJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdOZXh0SlMvUmVtaXggUmVhY3QgXHVENTA0XHVCODA4XHVDNzg0XHVDNkNDXHVEMDZDLCBOb2RlSlMsIFBvc3RncmVTUUxcdUFFMzBcdUJDMTggXHVDRDVDXHVDMkUwIFx1QUUzMFx1QzIyMFx1Qjg1QyBcdUFDMUNcdUJDMUMgXHVENTY4XHVDNzNDXHVCODVDXHVDMzY4IFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUJDQkNcdUM2QjQgXHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDXHVDODFDXHVBQ0Y1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnU0VPIFx1QjNDNFx1Qzc4NScsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVBRDZDXHVBRTAwLCBcdUIxMjRcdUM3NzRcdUJDODQgXHVBQzgwXHVDMEM5XHVDNUQ0XHVDOUM0XHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NFx1RDU1OFx1QzVFQyBcdUM3OTFcdUM1QzVcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiBcdUFDODBcdUMwQzlcdUM3NDAgXHVDNUI0XHVCNTE0XHVDNUQwXHVDMTFDXHVCMDk4IFx1QzI3RFx1QUNFMCBcdUJFNjBcdUI5NzRcdUFDRTAgXHVBQzAwXHVDN0E1IFx1QzBDMVx1QzcwNFx1QzVEMCBcdUI3QURcdUQwNkNcdUI0MjAgXHVDMjE4XHVDNzg4XHVCM0M0XHVCODVEIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsyXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVEMzk4XHVDNzc0XHVDOUMwXHVCODVDIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBjb250ZW50czogWydcdUIyRTRcdUM1OTFcdUQ1NUMgUEMgXHVEMDZDXHVCODVDXHVDMkE0LCBcdUJBQThcdUIzNTggXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwLCBcdUJBQThcdUJDMTRcdUM3N0NcdUM1RDBcdUMxMUMgXHVBQzAxXHVBQzAxIFx1RDA2Q1x1QUUzMFx1QzVEMCBcdUNENUNcdUM4MDFcdUQ2NTQgXHVCNDE4XHVCM0M0XHVCODVEIFx1QjlERVx1Q0RBNCBcdUM4MUNcdUM3OTEgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8UmVjb21tZW5kIGxpc3Q9e2xpc3R9IC8+XG4gICAgICA8VGVjaCBsaXN0PXt0ZWNoTGlzdH0gY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnIC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyAvKiBMaW5rLCAqLyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50J1xuaW1wb3J0IHsgSW1hZ2UsIHRvUmVtaXhNZXRhLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcG9zdCBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcy9wb3N0cydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCAnZXhwZWN0ZWQgcGFyYW1zLnNsdWcnKVxuXG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbWV0YSA9ICh7XG4gIGRhdGE6IHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHtcbiAgICAgIGluaXRpYWxEYXRhOiB7IHBvc3QgfSxcbiAgICB9LFxuICB9LFxufTogYW55KSA9PiB7XG4gIHJldHVybiB0b1JlbWl4TWV0YShwb3N0LnNlbylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcG9zdCwgLyogbW9yZVBvc3RzLCAqLyBwcm9tb3Rpb24gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcm9tb3Rpb24sXG4gICAgICAgIHByZXZSb3V0ZSxcbiAgICAgICAgY292ZXI6IDxJbWFnZSBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgICAgZGF0ZTogPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPixcbiAgICAgICAgY2F0ZWdvcnlJZDogcG9zdD8uY2F0ZWdvcnk/LmlkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UG9zdCB7Li4ueyBwb3N0IH19IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJ0eXBlIEF2YXRhclByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIHBpY3R1cmU6IHtcbiAgICB1cmw/OiBzdHJpbmcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH06IEF2YXRhclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLnVybH0gY2xhc3NOYW1lPSdhdmF0YXJfX3BpY3R1cmUnIGFsdD17bmFtZX0gLz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyX19uYW1lJz57bmFtZX08L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbnR5cGUgRGF0ZVByb3BzID0ge1xuICBkYXRlU3RyaW5nOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9OiBEYXRlUHJvcHMpIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfTwvdGltZT5cbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgUG9zdHNQcm9wcyB9IGZyb20gJ34vdHlwZXMnXG5cbmV4cG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMvUG9zdCdcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RzKHsgZmlyc3RQb3N0LCBvdGhlclBvc3RzLCBjYXRlZ29yeSB9OiBQb3N0c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtcG9zdCc+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtcG9zdC1saW5rJyB0bz17YC8ke2NhdGVnb3J5IHx8ICdwb3N0cyd9LyR7Zmlyc3RQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYicgZGF0YT17Zmlyc3RQb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtbWV0YSc+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2J4LXBvc3QtdGl0bGUnPntmaXJzdFBvc3QudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGF0ZSc+XG4gICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17Zmlyc3RQb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e2ZpcnN0UG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17Zmlyc3RQb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1wb3N0LWJhY2tncm91bmQnPjwvc3Bhbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2J4LW90aGVyLXBvc3RzJz5cbiAgICAgICAge290aGVyUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1wb3N0Jz5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgJ3Bvc3RzJ30vJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYicgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1pbmZvJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LW1ldGEnPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57cG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LXBvc3QtYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFN0cnVjdHVyZWRUZXh0LCBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBQb3N0IGFzIFBvc3RUeXBlIH0gZnJvbSAnfi90eXBlcydcblxudHlwZSBQb3N0UHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlLFxuICBtb3JlUG9zdHM/OiBQb3N0VHlwZVtdLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgLyogLCBtb3JlUG9zdHMgICovIH06IFBvc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYXJ0aWNsZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1hcnRpY2xlLWJvZHknPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9zZSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgICAgICA8U3RydWN0dXJlZFRleHRcbiAgICAgICAgICAgICAgZGF0YT17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICByZW5kZXJCbG9jaz17KHsgcmVjb3JkIH06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuX190eXBlbmFtZSA9PT0gJ0ltYWdlQmxvY2tSZWNvcmQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT0nYngtYXJ0aWNsZS1pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3Qga25vdyBob3cgdG8gcmVuZGVyIGEgYmxvY2shPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbl9fdGl0bGUnPk1vcmUgcG9zdHM8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAge21vcmVQb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9J2dyaWRfX2l0ZW0nPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9J2dyaWRfX2xpbmsnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdncmlkX19pbWFnZScgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZ3JpZF9fdGl0bGUnPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGF0ZSc+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG5vdGljZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5OiAnbm90aWNlcycgfX0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24uc2V0KCdwcmV2aWV3JywgJ3llcycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyAvKiBMaW5rLCAqLyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50J1xuaW1wb3J0IHsgSW1hZ2UsIHRvUmVtaXhNZXRhLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcG9zdCBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcy9wb3N0cydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCAnZXhwZWN0ZWQgcGFyYW1zLnNsdWcnKVxuXG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbWV0YSA9ICh7XG4gIGRhdGE6IHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHtcbiAgICAgIGluaXRpYWxEYXRhOiB7IHBvc3QgfSxcbiAgICB9LFxuICB9LFxufTogYW55KSA9PiB7XG4gIHJldHVybiB0b1JlbWl4TWV0YShwb3N0LnNlbylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcG9zdCwgLyogbW9yZVBvc3RzLCAqLyBwcm9tb3Rpb24gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcm9tb3Rpb24sXG4gICAgICAgIHByZXZSb3V0ZSxcbiAgICAgICAgY292ZXI6IDxJbWFnZSBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgICAgZGF0ZTogPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPixcbiAgICAgICAgY2F0ZWdvcnlJZDogcG9zdD8uY2F0ZWdvcnk/LmlkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcG9zdHMgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUgfX0+XG4gICAgICA8UG9zdHMgey4uLnsgZmlyc3RQb3N0LCBvdGhlclBvc3RzIH19IC8+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IC8qIExpbmssICovIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0LCAvKiBtb3JlUG9zdHMsICovIHByb21vdGlvbiB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgey4uLntcbiAgICAgICAgdGl0bGU6IHBvc3Q/LnRpdGxlIHx8IHRpdGxlLFxuICAgICAgICBJY29uOiA8QXZhdGFyIG5hbWU9e3Bvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e3Bvc3QuYXV0aG9yLnBpY3R1cmV9IC8+LFxuICAgICAgICBkZXNjOiBwb3N0Py5leGNlcnB0IHx8IGRlc2MsXG4gICAgICAgIHByb21vdGlvbixcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHsuLi57IHBvc3QgfX0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBuZXdzIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnlTdWJzY3JpcHRpb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPFBvc3RzIHsuLi57IGZpcnN0UG9zdCwgb3RoZXJQb3N0cywgY2F0ZWdvcnk6ICduZXdzJyB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyc+PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTG90dGllIGZyb20gJ2xvdHRpZS1yZWFjdCdcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgY293Ym95SGF0RmFjZSBmcm9tICd+L2xvdHRpZXMvY293Ym95LWhhdC1mYWNlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYyB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyBwYi0yMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHB0LTIwJz5cbiAgICAgICAgICA8TG90dGllIGxvb3AgYXV0b3BsYXkgYW5pbWF0aW9uRGF0YT17Y293Ym95SGF0RmFjZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBmb250LXRoaW4gbWItNSc+MTU4OC05OTk5PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSBtZDp0ZXh0LWJhc2Ugb3BhY2l0eS04MCc+XHVEM0M5XHVDNzdDIDEwOjAwIC0gMTg6MDA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhzIG1kOnRleHQtc20gb3BhY2l0eS01MCc+KFx1QzgxMFx1QzJFQ1x1QzJEQ1x1QUMwNCAxMzowMCAtIDE0OjAwIFx1QzgxQ1x1QzY3OCBcdTAwQjcgXHVDOEZDXHVCOUQwL1x1QUNGNVx1RDczNFx1Qzc3QyBcdUM4MUNcdUM2NzgpPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXByaXZhY3kgcHJvc2Utc20gcHJvc2Utc2xhdGUgZGFyazpwcm9zZS1pbnZlcnQnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMiBsaDYgYnM1IHRzNCc+XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OygnaHR0cHM6Ly93d3cuYm9sdC11eC5jb20nXHVDNzc0XHVENTU4ICdCT0xULVVYJyk8L2VtPlx1Qzc0MChcdUIyOTQpIFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFxuICAgICAgICAgIFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMzMFx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUJDRjRcdUQ2MzhcdUQ1NThcdUFDRTAgXHVDNzc0XHVDNjQwIFx1QUQwMFx1QjgyOFx1RDU1QyBcdUFDRTBcdUNEQTlcdUM3NDQgXHVDMkUwXHVDMThEXHVENTU4XHVBQ0UwIFx1QzZEMFx1RDY1Q1x1RDU1OFx1QUM4QyBcdUNDOThcdUI5QUNcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QjNDNFx1Qjg1RFxuICAgICAgICAgIFx1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQ0IFx1QzIxOFx1QjlCRFx1MDBCN1x1QUNGNVx1QUMxQ1x1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgXHUyNUNCIFx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjIwMjI8L2VtPlx1QjE0NCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MzwvZW0+XHVDNkQ0eycgJ31cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MTc8L2VtPlx1QkQ4MFx1RDEzMCBcdUM4MDFcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMxXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUMgXHVCQUE5XHVDODAxKTwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDsoJ2h0dHBzOi8vd3d3LmJvbHQtdXguY29tJ1x1Qzc3NFx1RDU1OCAnQk9MVC1VWCcpPC9lbT5cdUM3NDAoXHVCMjk0KSBcdUIyRTRcdUM3NENcdUM3NTggXHVCQUE5XHVDODAxXHVDNzQ0XG4gICAgICAgICAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuIFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCMjk0IFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUJBQTlcdUM4MDEgXHVDNzc0XHVDNjc4XHVDNzU4IFx1QzZBOVx1QjNDNFx1Qjg1Q1x1QjI5NCBcdUM3NzRcdUM2QTlcdUI0MThcdUM5QzAgXHVDNTRBXHVDNzNDXHVCQTcwIFx1Qzc3NFx1QzZBOSBcdUJBQTlcdUM4MDFcdUM3NzRcbiAgICAgICAgICBcdUJDQzBcdUFDQkRcdUI0MThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMThcdUM4NzBcdUM1RDAgXHVCNTMwXHVCNzdDIFx1QkNDNFx1QjNDNFx1Qzc1OCBcdUIzRDlcdUM3NThcdUI5N0MgXHVCQzFCXHVCMjk0IFx1QjRGMSBcdUQ1NDRcdUM2OTRcdUQ1NUMgXHVDODcwXHVDRTU4XHVCOTdDIFx1Qzc3NFx1RDU4OVx1RDU2MCBcdUM2MDhcdUM4MTVcdUM3ODVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+MS4gXHVDN0FDXHVENjU0IFx1QjYxMFx1QjI5NCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1LCBcdUNGNThcdUQxNTBcdUNFMjAgXHVDODFDXHVBQ0Y1LCBcdUI5REVcdUNEQTRcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1XHVDNzQ0IFx1QkFBOVx1QzgwMVx1QzczQ1x1Qjg1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTY5XHVCMkM4XHVCMkU0LjwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+Mi4gXHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICAgIFx1Qzc3OFx1QUQ2Q1x1RDFCNVx1QUNDNFx1RDU1OVx1QzgwMSBcdUQyQjlcdUMxMzFcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUgXHVCQzBGIFx1QUQxMVx1QUNFMCBcdUFDOENcdUM3QUMgLCBcdUMxMUNcdUJFNDRcdUMyQTRcdUM3NTggXHVDNzIwXHVENkE4XHVDMTMxIFx1RDY1NVx1Qzc3OCwgXHVDODExXHVDMThEXHVCRTQ4XHVCM0M0IFx1RDMwQ1x1QzU0NSBcdUI2MTBcdUIyOTQgXHVENjhDXHVDNkQwXHVDNzU4IFx1QzExQ1x1QkU0NFx1QzJBNFxuICAgICAgICAgICAgXHVDNzc0XHVDNkE5XHVDNUQwIFx1QjMwMFx1RDU1QyBcdUQxQjVcdUFDQzQgXHVCNEYxXHVDNzQ0IFx1QkFBOVx1QzgwMVx1QzczQ1x1Qjg1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDMlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUJDRjRcdUM3MjAgXHVBRTMwXHVBQzA0KTwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7PC9lbT5cdUM3NDAoXHVCMjk0KSBcdUJDOTVcdUI4MzlcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdTAwQjdcdUM3NzRcdUM2QTlcdUFFMzBcdUFDMDQgXHVCNjEwXHVCMjk0XG4gICAgICAgICAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCODVDXHVCRDgwXHVEMTMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUMyMThcdUM5RDEgXHVDMkRDXHVDNUQwIFx1QjNEOVx1Qzc1OFx1QkMxQlx1Qzc0MCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHUwMEI3XHVDNzc0XHVDNkE5XHVBRTMwXHVBQzA0IFx1QjBCNFx1QzVEMFx1QzExQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHUwMEI3XHVCQ0Y0XHVDNzIwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUFDMDFcdUFDMDFcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQyBcdUJDMEYgXHVCQ0Y0XHVDNzIwIFx1QUUzMFx1QUMwNFx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPjEuJmx0O1x1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOSZndDs8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cbiAgICAgICAgICAgICZsdDtcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTkmZ3Q7XHVDNjQwIFx1QUQwMFx1QjgyOFx1RDU1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUIyOTQgXHVDMjE4XHVDOUQxLlx1Qzc3NFx1QzZBOVx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVCM0Q5XHVDNzU4XHVDNzdDXHVCODVDXHVCRDgwXHVEMTMwJmx0O1x1QzlDMFx1Q0NCNFx1QzVDNlx1Qzc3NCBcdUQzMENcdUFFMzAmZ3Q7XHVBRTRDXHVDOUMwXG4gICAgICAgICAgICBcdUM3MDQgXHVDNzc0XHVDNkE5XHVCQUE5XHVDODAxXHVDNzQ0IFx1QzcwNFx1RDU1OFx1QzVFQyBcdUJDRjRcdUM3MjAuXHVDNzc0XHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlx1QkNGNFx1QzcyMFx1QURGQ1x1QUM3MCA6IFx1QUQxMVx1QUNFMDwvbGk+XG4gICAgICAgICAgPGxpPlx1QUQwMFx1QjgyOFx1QkM5NVx1QjgzOSA6IFx1RDQ1Q1x1QzJEQy9cdUFEMTFcdUFDRTBcdUM1RDAgXHVBRDAwXHVENTVDIFx1QUUzMFx1Qjg1RCA6IDZcdUFDMUNcdUM2RDQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUM2MDhcdUM2NzhcdUMwQUNcdUM3MjAgOiA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMzXHVDODcwKFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QzY0MCBcdUJDOTVcdUM4MTVcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NTggXHVBRDhDXHVCOUFDXHUwMEI3XHVDNzU4XHVCQjM0IFx1QkMwRiBcdUFERjggXHVENTg5XHVDMEFDXHVCQzI5XHVCQzk1KTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCMjk0ICZsdDtCT0xULVVYJmd0O1x1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDNUI4XHVDODFDXHVCNEUwXHVDOUMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdTAwQjdcdUM4MTVcdUM4MTVcdTAwQjdcdUMwQURcdUM4MUNcdTAwQjdcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVDNjk0XHVBRDZDIFx1QjRGMVx1Qzc1OCBcdUFEOENcdUI5QUNcdUI5N0MgXHVENTg5XHVDMEFDXHVENTYwIFx1QzIxOFxuICAgICAgICAgIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjEgXHVDODFDMVx1RDU2RFx1QzVEMCBcdUI1MzBcdUI5NzggXHVBRDhDXHVCOUFDIFx1RDU4OVx1QzBBQ1x1QjI5NCAmbHQ7Qk9MVC1VWCZndDtcdUM1RDAgXHVCMzAwXHVENTc0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDMkRDXHVENTg5XHVCODM5IFx1QzgxQzQxXHVDODcwXHVDODFDMVx1RDU2RFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDMTFDXHVCQTc0LFxuICAgICAgICAgIFx1QzgwNFx1Qzc5MFx1QzZCMFx1RDNCOCwgXHVCQUE4XHVDMEFDXHVDODA0XHVDMUExKEZBWCkgXHVCNEYxXHVDNzQ0IFx1RDFCNVx1RDU1OFx1QzVFQyBcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzczQ1x1QkE3MCAmbHQ7Qk9MVC1VWCZndDtcdUM3NDAoXHVCMjk0KSBcdUM3NzRcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzlDMFx1Q0NCNCBcdUM1QzZcdUM3NzQgXHVDODcwXHVDRTU4XHVENTU4XHVBQ0EwXHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MiBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFEOENcdUI5QUMgXHVENTg5XHVDMEFDXHVCMjk0IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJDOTVcdUM4MTVcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NzRcdUIwOTggXHVDNzA0XHVDNzg0XHVDNzQ0IFx1QkMxQlx1Qzc0MCBcdUM3OTAgXHVCNEYxIFx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc0NCBcdUQxQjVcdUQ1NThcdUM1RUMgXHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXHVDNzc0XG4gICAgICAgICAgXHVBQ0JEXHVDNkIwIFx1MjAxQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUMgXHVCQzI5XHVCQzk1XHVDNUQwIFx1QUQwMFx1RDU1QyBcdUFDRTBcdUMyREMoXHVDODFDMjAyMC03XHVENjM4KVx1MjAxRCBcdUJDQzRcdUM5QzAgXHVDODFDMTFcdUQ2MzggXHVDMTFDXHVDMkREXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUM3MDRcdUM3ODRcdUM3QTVcdUM3NDQgXHVDODFDXHVDRDlDXHVENTU4XHVDMTU0XHVDNTdDIFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4QyBcdUJDMEYgXHVDQzk4XHVCOUFDXHVDODE1XHVDOUMwIFx1QzY5NFx1QUQ2Q1x1QjI5NCBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzM1XHVDODcwIFx1QzgxQzRcdUQ1NkQsIFx1QzgxQzM3XHVDODcwIFx1QzgxQzJcdUQ1NkRcdUM1RDAgXHVDNzU4XHVENTU4XHVDNUVDIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUFEOENcdUI5QUNcdUFDMDBcbiAgICAgICAgICBcdUM4MUNcdUQ1NUMgXHVCNDIwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDY0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM4MTVcdUM4MTUgXHVCQzBGIFx1QzBBRFx1QzgxQyBcdUM2OTRcdUFENkNcdUIyOTQgXHVCMkU0XHVCOTc4IFx1QkM5NVx1QjgzOVx1QzVEMFx1QzExQyBcdUFERjggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVBQzAwIFx1QzIxOFx1QzlEMSBcdUIzMDBcdUMwQzFcdUM3M0NcdUI4NUMgXHVCQTg1XHVDMkRDXHVCNDE4XHVDNUI0IFx1Qzc4OFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgXHVBREY4IFx1QzBBRFx1QzgxQ1x1Qjk3Q1xuICAgICAgICAgIFx1QzY5NFx1QUQ2Q1x1RDU2MCBcdUMyMTggXHVDNUM2XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2NSAmbHQ7Qk9MVC1VWCZndDtcdUM3NDAoXHVCMjk0KSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjQgXHVBRDhDXHVCOUFDXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUM1RjRcdUI3OENcdUM3NTggXHVDNjk0XHVBRDZDLCBcdUM4MTVcdUM4MTVcdTAwQjdcdUMwQURcdUM4MUNcdUM3NTggXHVDNjk0XHVBRDZDLCBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzBcdUM3NTggXHVDNjk0XHVBRDZDIFx1QzJEQyBcdUM1RjRcdUI3OEMgXHVCNEYxIFx1QzY5NFx1QUQ2Q1x1Qjk3Q1xuICAgICAgICAgIFx1RDU1QyBcdUM3OTBcdUFDMDAgXHVCQ0Y4XHVDNzc4XHVDNzc0XHVBQzcwXHVCMDk4IFx1QzgxNVx1QjJGOVx1RDU1QyBcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NzhcdUM5QzBcdUI5N0MgXHVENjU1XHVDNzc4XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzRcdUM4NzAoXHVDQzk4XHVCOUFDXHVENTU4XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUQ1NkRcdUJBQTkgXHVDNzkxXHVDMTMxKSA8L3N0cm9uZz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz4gXHUyNDYwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDs8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVENTZEXHVCQUE5XHVDNzQ0IFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+MSZsdDsgXHVDN0FDXHVENjU0IFx1QjYxMFx1QjI5NCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1ICZndDs8L2xpPlxuICAgICAgICAgIDxsaT5cdUQ1NDRcdUMyMThcdUQ1NkRcdUJBQTkgOiBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNzc0XHVDNkE5IFx1QUUzMFx1Qjg1RCwgXHVDODExXHVDMThEIFx1Qjg1Q1x1QURGOCwgXHVDRkUwXHVEMEE0PC9saT5cbiAgICAgICAgICA8bGk+XHVDMTIwXHVEMEREXHVENTZEXHVCQUE5IDogXHVDODExXHVDMThEIElQIFx1QzgxNVx1QkNGNDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzVcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1RDMwQ1x1QUUzMCk8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwICZsdDsgQkxULVVYJmd0OyBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHVBRTMwXHVBQzA0XHVDNzU4IFx1QUNCRFx1QUNGQywgXHVDQzk4XHVCOUFDXHVCQUE5XHVDODAxIFx1QjJFQ1x1QzEzMSBcdUI0RjEgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVBQzAwIFx1QkQ4OFx1RDU0NFx1QzY5NFx1RDU1OFx1QUM4QyBcdUI0MThcdUM1QzhcdUM3NDQgXHVCNTRDXHVDNUQwXHVCMjk0XG4gICAgICAgICAgXHVDOUMwXHVDQ0I0XHVDNUM2XHVDNzc0IFx1RDU3NFx1QjJGOSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVEMzBDXHVBRTMwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUI4NUNcdUJEODBcdUQxMzAgXHVCM0Q5XHVDNzU4XHVCQzFCXHVDNzQwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdUFFMzBcdUFDMDRcdUM3NzQgXHVBQ0JEXHVBQ0ZDXHVENTU4XHVBQzcwXHVCMDk4IFx1Q0M5OFx1QjlBQ1x1QkFBOVx1QzgwMVx1Qzc3NCBcdUIyRUNcdUMxMzFcdUI0MThcdUM1QzhcdUM3NENcdUM1RDBcdUIzQzQgXHVCRDg4XHVBRDZDXHVENTU4XHVBQ0UwIFx1QjJFNFx1Qjk3OCBcdUJDOTVcdUI4MzlcdUM1RDBcbiAgICAgICAgICBcdUI1MzBcdUI3N0MgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QUNDNFx1QzE4RCBcdUJDRjRcdUM4NzRcdUQ1NThcdUM1RUNcdUM1N0MgXHVENTU4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCwgXHVENTc0XHVCMkY5IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUJDQzRcdUIzQzRcdUM3NTggXHVCMzcwXHVDNzc0XHVEMTMwXHVCQ0EwXHVDNzc0XHVDMkE0KERCKVx1Qjg1QyBcdUM2MkVcdUFFMzBcdUFDNzBcdUIwOTggXHVCQ0Y0XHVBRDAwXHVDN0E1XHVDMThDXHVCOTdDXG4gICAgICAgICAgXHVCMkVDXHVCOUFDXHVENTU4XHVDNUVDIFx1QkNGNFx1Qzg3NFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAxLiBcdUJDOTVcdUI4MzkgXHVBREZDXHVBQzcwIDo8YnIgLz5cbiAgICAgICAgICAyLiBcdUJDRjRcdUM4NzRcdUQ1NThcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDU2RFx1QkFBOSA6IFx1QUNDNFx1Qzg4Q1x1QzgxNVx1QkNGNCwgXHVBQzcwXHVCNzk4XHVCMEEwXHVDOURDXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYyIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQzMENcdUFFMzBcdUM3NTggXHVDODA4XHVDQzI4IFx1QkMwRiBcdUJDMjlcdUJDOTVcdUM3NDAgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAxLiBcdUQzMENcdUFFMzBcdUM4MDhcdUNDMjhcbiAgICAgICAgICA8YnIgLz4gJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1RDMwQ1x1QUUzMCBcdUMwQUNcdUM3MjBcdUFDMDAgXHVCQzFDXHVDMEREXHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUMxMjBcdUM4MTVcdUQ1NThcdUFDRTAsICZsdDsgQkxULVVYJmd0OyBcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MFx1Qzc1OFxuICAgICAgICAgIFx1QzJCOVx1Qzc3OFx1Qzc0NCBcdUJDMUJcdUM1NDQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1RDMwQ1x1QUUzMFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz4yLiBcdUQzMENcdUFFMzBcdUJDMjlcdUJDOTU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1QzgwNFx1Qzc5MFx1QzgwMSBcdUQzMENcdUM3N0MgXHVENjE1XHVEMERDXHVDNzU4IFx1QzgxNVx1QkNGNFx1QjI5NCBcdUFFMzBcdUI4NURcdUM3NDQgXHVDN0FDXHVDMEREXHVENTYwIFx1QzIxOCBcdUM1QzZcdUIyOTQgXHVBRTMwXHVDMjIwXHVDODAxIFx1QkMyOVx1QkM5NVx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NjlcdUIyQzhcdUIyRTQ8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgXHVDODFDNlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNTQ4XHVDODA0XHVDMTMxIFx1RDY1NVx1QkNGNCBcdUM4NzBcdUNFNTgpXG4gICAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJmx0OyBCTFQtVVgmZ3Q7XG4gICAgICAgICAgICA8L2VtPlxuICAgICAgICAgICAgXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzU0OFx1QzgwNFx1QzEzMSBcdUQ2NTVcdUJDRjRcdUI5N0MgXHVDNzA0XHVENTc0IFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUM3NDAgXHVDODcwXHVDRTU4XHVCOTdDIFx1Q0RFOFx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+XG4gICAgICAgICAgMS4gXHVDODE1XHVBRTMwXHVDODAxXHVDNzc4IFx1Qzc5MFx1Q0NCNCBcdUFDMTBcdUMwQUMgXHVDMkU0XHVDMkRDXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNERThcdUFFMDkgXHVBRDAwXHVCODI4IFx1QzU0OFx1QzgxNVx1QzEzMSBcdUQ2NTVcdUJDRjRcdUI5N0MgXHVDNzA0XHVENTc0IFx1QzgxNVx1QUUzMFx1QzgwMShcdUJEODRcdUFFMzAgMVx1RDY4QylcdUM3M0NcdUI4NUMgXHVDNzkwXHVDQ0I0IFx1QUMxMFx1QzBBQ1x1Qjk3QyBcdUMyRTRcdUMyRENcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDIuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNERThcdUFFMDkgXHVDOUMxXHVDNkQwXHVDNzU4IFx1Q0Q1Q1x1QzE4Q1x1RDY1NCBcdUJDMEYgXHVBRDUwXHVDNzIxXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNERThcdUFFMDlcdUQ1NThcdUIyOTQgXHVDOUMxXHVDNkQwXHVDNzQ0IFx1QzlDMFx1QzgxNVx1RDU1OFx1QUNFMCBcdUIyRjRcdUIyRjlcdUM3OTBcdUM1RDAgXHVENTVDXHVDODE1XHVDMkRDXHVDRjFDIFx1Q0Q1Q1x1QzE4Q1x1RDY1NCBcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QUQwMFx1QjlBQ1x1RDU1OFx1QjI5NCBcdUIzMDBcdUNDNDVcdUM3NDQgXHVDMkRDXHVENTg5XHVENTU4XHVBQ0UwXG4gICAgICAgICAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDMuIFx1RDU3NFx1RDBCOSBcdUI0RjFcdUM1RDAgXHVCMzAwXHVCRTQ0XHVENTVDIFx1QUUzMFx1QzIyMFx1QzgwMSBcdUIzMDBcdUNDNDVcbiAgICAgICAgICA8YnIgLz4gJmx0OzxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5CT0xULVVYPC9lbT4mZ3Q7KCc8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Qk9MVC1VWDwvZW0+JylcdUM3NDAgXHVENTc0XHVEMEI5XHVDNzc0XHVCMDk4XG4gICAgICAgICAgXHVDRUY0XHVENEU4XHVEMTMwIFx1QkMxNFx1Qzc3NFx1QjdFQ1x1QzJBNCBcdUI0RjFcdUM1RDAgXHVDNzU4XHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM3MjBcdUNEOUMgXHVCQzBGIFx1RDZGQ1x1QzE5MFx1Qzc0NCBcdUI5QzlcdUFFMzAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QkNGNFx1QzU0OFx1RDUwNFx1Qjg1Q1x1QURGOFx1QjdBOFx1Qzc0NCBcdUMxMjRcdUNFNThcdUQ1NThcdUFDRTAgXHVDOEZDXHVBRTMwXHVDODAxXHVDNzc4IFx1QUMzMVx1QzJFMFx1MDBCN1x1QzgxMFx1QUM4MFx1Qzc0NFxuICAgICAgICAgIFx1RDU1OFx1QkE3MCBcdUM2NzhcdUJEODBcdUI4NUNcdUJEODBcdUQxMzAgXHVDODExXHVBREZDXHVDNzc0IFx1RDFCNVx1QzgxQ1x1QjQxQyBcdUFENkNcdUM1RURcdUM1RDAgXHVDMkRDXHVDMkE0XHVEMTVDXHVDNzQ0IFx1QzEyNFx1Q0U1OFx1RDU1OFx1QUNFMCBcdUFFMzBcdUMyMjBcdUM4MDEvXHVCQjNDXHVCOUFDXHVDODAxXHVDNzNDXHVCODVDIFx1QUMxMFx1QzJEQyBcdUJDMEYgXHVDQzI4XHVCMkU4XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA0LiBcdUM4MTFcdUMxOERcdUFFMzBcdUI4NURcdUM3NTggXHVCQ0Y0XHVBRDAwIFx1QkMwRiBcdUM3MDRcdUJDQzBcdUM4NzAgXHVCQzI5XHVDOUMwXG4gICAgICAgICAgPGJyIC8+IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QzJEQ1x1QzJBNFx1RDE1Q1x1QzVEMCBcdUM4MTFcdUMxOERcdUQ1NUMgXHVBRTMwXHVCODVEXHVDNzQ0IFx1Q0Q1Q1x1QzE4QyAxXHVCMTQ0IFx1Qzc3NFx1QzBDMSBcdUJDRjRcdUFEMDAsIFx1QUQwMFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUM3M0NcdUJBNzAsXHVCMkU0XHVCOUNDLCA1XHVCOUNDXHVCQTg1IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM1RDBcbiAgICAgICAgICBcdUFEMDBcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0Q5NFx1QUMwMFx1RDU1OFx1QUM3MFx1QjA5OCwgXHVBQ0UwXHVDNzIwXHVDMkREXHVCQ0M0XHVDODE1XHVCQ0Y0IFx1QjYxMFx1QjI5NCBcdUJCRkNcdUFDMTBcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTU4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCAyXHVCMTQ0XHVDNzc0XHVDMEMxIFx1QkNGNFx1QUQwMCwgXHVBRDAwXHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUI2MTBcdUQ1NUMsIFx1QzgxMVx1QzE4RFx1QUUzMFx1Qjg1RFx1Qzc3NCBcdUM3MDRcdUJDQzBcdUM4NzAgXHVCQzBGIFx1QjNDNFx1QjA5QywgXHVCRDg0XHVDMkU0XHVCNDE4XHVDOUMwIFx1QzU0QVx1QjNDNFx1Qjg1RCBcdUJDRjRcdUM1NDhcdUFFMzBcdUIyQTVcdUM3NDQgXHVDMEFDXHVDNkE5XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUM3XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM3OTBcdUIzRDkgXHVDMjE4XHVDOUQxIFx1QzdBNVx1Q0U1OFx1Qzc1OCBcdUMxMjRcdUNFNThcdTIwMjJcdUM2QjRcdUM2MDEgXHVCQzBGIFx1QUM3MFx1QkQ4MFx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDMEFDXHVENTZEKTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgJmx0O0JPTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1QzVEMFx1QUM4QyBcdUFDMUNcdUJDQzRcdUM4MDFcdUM3NzggXHVCOURFXHVDREE0XHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDIFx1QzgxQ1x1QUNGNVx1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NzQgXHVDNzc0XHVDNkE5XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzgwMFx1QzdBNVx1RDU1OFx1QUNFMCBcdUMyMThcdUMyRENcdUI4NUNcbiAgICAgICAgICBcdUJEODhcdUI3RUNcdUM2MjRcdUIyOTQgXHUyMDE4XHVDRkUwXHVEMEE0KGNvb2tpZSlcdTIwMTlcdUI5N0MgXHVDMEFDXHVDNkE5XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlx1MjQ2MSBcdUNGRTBcdUQwQTRcdUIyOTQgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4XHVCOTdDIFx1QzZCNFx1QzYwMVx1RDU1OFx1QjI5NFx1QjM3MCBcdUM3NzRcdUM2QTlcdUI0MThcdUIyOTQgXHVDMTFDXHVCQzg0KGh0dHApXHVBQzAwIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1Qzc1OCBcdUNFRjRcdUQ0RThcdUQxMzAgXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwXHVDNUQwXHVBQzhDIFx1QkNGNFx1QjBCNFx1QjI5NCBcdUMxOENcdUI3QzlcdUM3NTggXHVDODE1XHVCQ0Y0XHVDNzc0XHVCQTcwXG4gICAgICAgICAgXHVDNzc0XHVDNkE5XHVDNzkwXHVCNEU0XHVDNzU4IFBDIFx1Q0VGNFx1RDRFOFx1RDEzMFx1QjBCNFx1Qzc1OCBcdUQ1NThcdUI0RENcdUI1MTRcdUMyQTRcdUQwNkNcdUM1RDAgXHVDODAwXHVDN0E1XHVCNDE4XHVBRTMwXHVCM0M0IFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUFDMDAuIFx1Q0ZFMFx1RDBBNFx1Qzc1OCBcdUMwQUNcdUM2QTkgXHVCQUE5XHVDODAxIDogXHVDNzc0XHVDNkE5XHVDNzkwXHVBQzAwIFx1QkMyOVx1QkIzOFx1RDU1QyBcdUFDMDEgXHVDMTFDXHVCRTQ0XHVDMkE0XHVDNjQwIFx1QzZGOSBcdUMwQUNcdUM3NzRcdUQyQjhcdUI0RTRcdUM1RDAgXHVCMzAwXHVENTVDIFx1QkMyOVx1QkIzOCBcdUJDMEYgXHVDNzc0XHVDNkE5XHVENjE1XHVEMERDLCBcdUM3NzhcdUFFMzAgXHVBQzgwXHVDMEM5XHVDNUI0LCBcdUJDRjRcdUM1NDhcdUM4MTFcdUMxOERcbiAgICAgICAgICBcdUM1RUNcdUJEODAsIFx1QjRGMVx1Qzc0NCBcdUQzMENcdUM1NDVcdUQ1NThcdUM1RUMgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNUQwXHVBQzhDIFx1Q0Q1Q1x1QzgwMVx1RDY1NFx1QjQxQyBcdUM4MTVcdUJDRjQgXHVDODFDXHVBQ0Y1XHVDNzQ0IFx1QzcwNFx1RDU3NCBcdUMwQUNcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVCMDk4LiBcdUNGRTBcdUQwQTRcdUM3NTggXHVDMTI0XHVDRTU4XHUyMDIyXHVDNkI0XHVDNjAxIFx1QkMwRiBcdUFDNzBcdUJEODAgOiBcdUM2RjlcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAgXHVDMEMxXHVCMkU4XHVDNzU4IFx1QjNDNFx1QUQ2QyZndDtcdUM3NzhcdUQxMzBcdUIxMzcgXHVDNjM1XHVDMTU4Jmd0O1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJBNTRcdUIyNzRcdUM3NTggXHVDNjM1XHVDMTU4IFx1QzEyNFx1QzgxNVx1Qzc0NCBcdUQxQjVcdUQ1NzQgXHVDRkUwXHVEMEE0XG4gICAgICAgICAgXHVDODAwXHVDN0E1XHVDNzQ0IFx1QUM3MFx1QkQ4MCBcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gXHVDRkUwXHVEMEE0IFx1QzgwMFx1QzdBNVx1Qzc0NCBcdUFDNzBcdUJEODBcdUQ1NjAgXHVBQ0JEXHVDNkIwIFx1QjlERVx1Q0RBNFx1RDYxNSBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNzc0XHVDNkE5XHVDNUQwIFx1QzVCNFx1QjgyNFx1QzZDMFx1Qzc3NCBcdUJDMUNcdUMwRERcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDMwJz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzhcdUM4NzAgKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTApIDwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPlxuICAgICAgICAgIFx1MjQ2MCA8c3BhbiBjbGFzc05hbWU9J2NvbG9yTGlnaHRCbHVlJz4mbHQ7Qk9MVC1VWCZndDs8L3NwYW4+IFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUM1RDAgXHVBRDAwXHVENTVDIFx1QzVDNVx1QkIzNFx1Qjk3QyBcdUNEMURcdUFEMDRcdUQ1NzRcdUMxMUNcbiAgICAgICAgICBcdUNDNDVcdUM3ODRcdUM5QzBcdUFDRTAsIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJEODhcdUI5Q0NcdUNDOThcdUI5QUMgXHVCQzBGIFx1RDUzQ1x1RDU3NFx1QUQ2Q1x1QzgxQyBcdUI0RjFcdUM3NDQgXHVDNzA0XHVENTU4XHVDNUVDIFx1QzU0NFx1Qjc5OFx1QzY0MCBcdUFDMTlcdUM3NzQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MFx1Qjk3Q1xuICAgICAgICAgIFx1QzlDMFx1QzgxNVx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTAgPC9saT5cbiAgICAgICAgICA8bGk+XHVDMTMxXHVCQTg1IDpcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUM5QzFcdUNDNDUgOlx1QUQwMFx1QjlBQ1x1Qzc5MDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzlDMVx1QUUwOSA6XHVCMzAwXHVENDVDPC9saT5cbiAgICAgICAgICA8bGk+XHVDNUYwXHVCNzdEXHVDQzk4IDowMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTIwM0IgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUIyRjRcdUIyRjlcdUJEODBcdUMxMUNcdUI4NUMgXHVDNUYwXHVBQ0IwXHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxwIC8+eycgJ31cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCRDgwXHVDMTFDXHVCQTg1IDpcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNkI0XHVDNjAxPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUIyRjRcdUIyRjlcdUM3OTAgOlx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVDNUYwXHVCNzdEXHVDQzk4IDowMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgICBcdTI0NjEgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVBRUQ4XHVDMTFDXHVCMjk0ICZsdDtCT0xULVVYJmd0OyBcdUM3NTggXHVDMTFDXHVCRTQ0XHVDMkE0KFx1QjYxMFx1QjI5NCBcdUMwQUNcdUM1QzUpXHVDNzQ0IFx1Qzc3NFx1QzZBOVx1RDU1OFx1QzJEQ1x1QkE3NFx1QzExQyBcdUJDMUNcdUMwRERcdUQ1NUMgXHVCQUE4XHVCNEUwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVBRDAwXHVCODI4IFx1QkIzOFx1Qzc1OCxcbiAgICAgICAgICAgIFx1QkQ4OFx1QjlDQ1x1Q0M5OFx1QjlBQywgXHVENTNDXHVENTc0XHVBRDZDXHVDODFDIFx1QjRGMVx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDMEFDXHVENTZEXHVDNzQ0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTAgXHVCQzBGIFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQ1x1Qjg1QyBcdUJCMzhcdUM3NThcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gJmx0O0JPTFQtVVgmZ3Q7XG4gICAgICAgICAgICBcdUM3NDAoXHVCMjk0KSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVCQjM4XHVDNzU4XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM5QzBcdUNDQjQgXHVDNUM2XHVDNzc0IFx1QjJGNVx1QkNDMCBcdUJDMEYgXHVDQzk4XHVCOUFDXHVENTc0XHVCNERDXHVCOUI0IFx1QUM4M1x1Qzc4NVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QzMCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUM5XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkMpXG4gICAgICAgICAgICAgIDxiciAvPiBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgXHVGRjYyXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1RkY2MyBcdUM4MUMzNVx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI5NzggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzVGNFx1Qjc4QyBcdUNDQURcdUFENkNcdUI5N0MgXHVDNTQ0XHVCNzk4XHVDNzU4IFx1QkQ4MFx1QzExQ1x1QzVEMCBcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICZsdDsgQkxULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDXHVBQzAwIFx1QzJFMFx1QzE4RFx1RDU1OFx1QUM4QyBcdUNDOThcdUI5QUNcdUI0MThcdUIzQzRcdUI4NUQgXHVCMTc4XHVCODI1XHVENTU4XHVBQ0EwXHVDMkI1XHVCMkM4XHVCMkU0LnsnICd9XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2QyBcdUM4MTFcdUMyMThcdTAwQjdcdUNDOThcdUI5QUMgXHVCRDgwXHVDMTFDIDwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCRDgwXHVDMTFDXHVCQTg1IDogXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QUQwMFx1QjlBQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCMkY0XHVCMkY5XHVDNzkwIDogXHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOiAwMTAtODMwMC04MjEwLCBkZWVycGFyazgyMTBAZ21haWwuY29tLCA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzEwXHVDODcwKFx1QUQ4Q1x1Qzc3NVx1Q0U2OFx1RDU3NCBcdUFENkNcdUM4MUNcdUJDMjlcdUJDOTUpPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjwvZW0+XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1Qjg1QyBcdUM3NzhcdUQ1NUMgXHVBRDZDXHVDODFDXHVCOTdDIFx1QkMxQlx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCRDg0XHVDN0MxXHVDODcwXHVDODE1XHVDNzA0XHVDNkQwXHVENjhDLCBcdUQ1NUNcdUFENkRcdUM3NzhcdUQxMzBcdUIxMzdcdUM5QzRcdUQ3NjVcdUM2RDBcbiAgICAgICAgICBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUMyRTBcdUFDRTBcdUMxM0NcdUQxMzAgXHVCNEYxXHVDNUQwIFx1QkQ4NFx1QzdDMVx1RDU3NFx1QUNCMFx1Qzc3NFx1QjA5OCBcdUMwQzFcdUIyRjQgXHVCNEYxXHVDNzQ0IFx1QzJFMFx1Q0NBRFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiBcdUM3NzQgXHVCQzE2XHVDNUQwIFx1QUUzMFx1RDBDMCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUM3NTggXHVDMkUwXHVBQ0UwLCBcdUMwQzFcdUIyRjRcdUM1RDBcbiAgICAgICAgICBcdUIzMDBcdUQ1NThcdUM1RUNcdUIyOTQgXHVDNTQ0XHVCNzk4XHVDNzU4IFx1QUUzMFx1QUQwMFx1QzVEMCBcdUJCMzhcdUM3NThcdUQ1NThcdUMyRENcdUFFMzAgXHVCQzE0XHVCNzhEXHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkQ4NFx1QzdDMVx1Qzg3MFx1QzgxNVx1QzcwNFx1QzZEMFx1RDY4QyA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDE4MzMtNjk3MiAod3d3LmtvcGljby5nby5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAyLiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUMyRTBcdUFDRTBcdUMxM0NcdUQxMzAgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxMTggKHByaXZhY3kua2lzYS5vci5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAzLiBcdUIzMDBcdUFDODBcdUNDMzBcdUNDQUQgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxMzAxICh3d3cuc3BvLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDQuIFx1QUNCRFx1Q0MzMFx1Q0NBRCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDE4MiAoZWNybS5jeWJlci5nby5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMERcdUM4MUMzNVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNUY0XHVCNzhDKSwgXHVDODFDMzZcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQyksIFx1QzgxQzM3XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVCNEYxKVx1Qzc1OFxuICAgICAgICAgIFx1QUREQ1x1QzgxNVx1QzVEMCBcdUM3NThcdUQ1NUMgXHVDNjk0XHVBRDZDXHVDNUQwIFx1QjMwMCBcdUQ1NThcdUM1RUMgXHVBQ0Y1XHVBQ0Y1XHVBRTMwXHVBRDAwXHVDNzU4IFx1QzdBNVx1Qzc3NCBcdUQ1ODlcdUQ1NUMgXHVDQzk4XHVCRDg0IFx1QjYxMFx1QjI5NCBcdUJEODBcdUM3OTFcdUM3MDRcdUI4NUMgXHVDNzc4XHVENTU4XHVDNUVDIFx1QUQ4Q1x1QjlBQyBcdUI2MTBcdUIyOTQgXHVDNzc0XHVDNzc1XHVDNzU4IFx1Q0U2OFx1RDU3NFx1Qjk3QyBcdUJDMUJcdUM3NDAgXHVDNzkwXHVCMjk0XG4gICAgICAgICAgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVCQzk1XHVDNzc0IFx1QzgxNVx1RDU1OFx1QjI5NCBcdUJDMTRcdUM1RDAgXHVCNTMwXHVCNzdDIFx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1Qzc0NCBcdUNDQURcdUFENkNcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdTIwM0IgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM3OTBcdUMxMzhcdUQ1NUMgXHVDMEFDXHVENTZEXHVDNzQwIFx1QzkxMVx1QzU1OVx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1QzcwNFx1QzZEMFx1RDY4Qyh3d3cuc2ltcGFuLmdvLmtyKSBcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzBcdUI5N0MgXHVDQzM4XHVBQ0UwXHVENTU4XHVDMkRDXHVBRTMwIFx1QkMxNFx1Qjc4RFx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDMTFcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OCBcdUJDQzBcdUFDQkQpPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjwvZW0+XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHUyNDYwIFx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgMjAyMlx1QjE0NCAzXHVDNkQ0IDE3XHVCRDgwXHVEMTMwIFx1QzgwMVx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdTI0NjEgXHVDNzc0XHVDODA0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDAgXHVDNTQ0XHVCNzk4XHVDNUQwXHVDMTFDIFx1RDY1NVx1Qzc3OFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiA8L3A+XG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdUM2MDhcdUMyREMgKSAtIDIwWFguIDMuIDE3IH4gMjBYWC4gWC4gWCBcdUM4MDFcdUM2QTkgKFx1RDA3NFx1QjlBRCkgPC9wPiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBwcm9tb3Rpb25zIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb25zIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24gbWF4LXctMTEyJz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyBoaWRkZW4gbWQ6ZmxleCc+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nYngtcHJvbW90aW9ucyc+XG4gICAgICAgICAgICB7cHJvbW90aW9ucy5tYXAoKHByb21vdGlvbjogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Byb21vdGlvbi50aXRsZX0gY2xhc3NOYW1lPSdieC1wcm9tb3Rpb24taXRlbSc+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e3Byb21vdGlvbi51cmwgfHwgJy4vJ30gY2xhc3NOYW1lPSdieC1wcm9tb3Rpb24tbGluayc+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1pbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9tb3Rpb24uYmFubmVyLnJlc3BvbnNpdmVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdHctc2hhZG93LWNvbG9yJzogYHJnYmEoJHtwcm9tb3Rpb24uY29sb3IucmVkfSwgJHtwcm9tb3Rpb24uY29sb3IuZ3JlZW59LCAke3Byb21vdGlvbi5jb2xvci5ibHVlfSwgLjUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXR3LXNoYWRvdyc6ICd2YXIoLS10dy1zaGFkb3ctY29sb3JlZCknLFxuICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBTaGFkb3dDYXJkLCBTaGFkb3dDYXJkSXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IHsgcGxhbiBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbigpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IGxpc3Q6IFNoYWRvd0NhcmRJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgIGljb246IDxJY29ucy5Ib21lcGFnZSAvPixcbiAgICAgIHBob3RvOiBwaG90by5wbGFuWzBdLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1BDLCBcdUJBQThcdUJDMTRcdUM3N0MgXHVCQzE4XHVDNzUxXHVENjE1XHVDNzNDXHVCODVDIFx1QzgxQ1x1Qzc5MScsXG4gICAgICAgICdcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzQgXHVDRDVDXHVDODAxXHVENjU0IFx1QjMwMFx1Qzc1MScsXG4gICAgICAgICcxXHVCMTQ0XHVBQzA0IFx1QjNDNFx1QkE1NFx1Qzc3OCAvIFx1RDYzOFx1QzJBNFx1RDMwNSBcdUJCMzRcdUI4Q0MgXHVDODFDXHVBQ0Y1JyxcbiAgICAgICAgJzVcdUQzOThcdUM3NzRcdUM5QzBcdUFFNENcdUM5QzAgXHVCQjM0XHVCOENDIChcdUQzOThcdUM3NzRcdUM5QzAgXHVDRDk0XHVBQzAwXHVDMkRDIFx1QzY5NFx1QUUwOCBcdUJDQzRcdUIzQzQpJyxcbiAgICAgIF0sXG4gICAgICBleHRyYTogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLWJhZGdlJz5cbiAgICAgICAgICA8c3Bhbj41MFx1QjlDQ1x1QzZEMDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDMkYxXHVBRTAwXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBpY29uOiA8SWNvbnMuU2luZ2xlcGFnZSAvPixcbiAgICAgIHBob3RvOiBwaG90by5wbGFuWzFdLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1BDLCBcdUJBQThcdUJDMTRcdUM3N0MgXHVCQzE4XHVDNzUxXHVENjE1XHVDNzNDXHVCODVDIFx1QzgxQ1x1Qzc5MScsXG4gICAgICAgICdcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzQgXHVDRDVDXHVDODAxXHVENjU0IFx1QjMwMFx1Qzc1MScsXG4gICAgICAgICcxXHVCMTQ0XHVBQzA0IFx1QjNDNFx1QkE1NFx1Qzc3OCAvIFx1RDYzOFx1QzJBNFx1RDMwNSBcdUJCMzRcdUI4Q0MgXHVDODFDXHVBQ0Y1JyxcbiAgICAgICAgJzVcdUQzOThcdUM3NzRcdUM5QzBcdUFFNENcdUM5QzAgXHVCQjM0XHVCOENDIChcdUQzOThcdUM3NzRcdUM5QzAgXHVDRDk0XHVBQzAwXHVDMkRDIFx1QzY5NFx1QUUwOCBcdUJDQzRcdUIzQzQpJyxcbiAgICAgIF0sXG4gICAgICBleHRyYTogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLWJhZGdlJz5cbiAgICAgICAgICA8c3Bhbj4yMFx1QjlDQ1x1QzZEMDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVEMzdDXHVCRTE0XHVCOUFDXHVDMkYxIFx1QUMxQ1x1QkMxQycsXG4gICAgICBpY29uOiA8SWNvbnMuUHVibGlzaGluZyAvPixcbiAgICAgIHBob3RvOiBwaG90by5wbGFuWzJdLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1BDLCBcdUJBQThcdUJDMTRcdUM3N0MgXHVCQzE4XHVDNzUxXHVENjE1XHVDNzNDXHVCODVDIFx1QUMxQ1x1QkMxQycsXG4gICAgICAgICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxIFx1QzkwMFx1QzIxOCcsXG4gICAgICAgICcxMFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM3NzRcdUMwQzEgXHVDNjk0XHVBRTA4IFx1QkNDNFx1QjNDNCcsXG4gICAgICAgICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxIFx1Qzc3OFx1Qzk5RCBcdUI5QzhcdUQwNkMgXHVENjhEXHVCNEREIFx1QUMwMFx1QjJBNSAoXHVDNjk0XHVBRTA4IFx1QkNDNFx1QjNDNCknLFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtc2hhZG93LWNhcmQtYmFkZ2UnPlxuICAgICAgICAgIDxzcGFuPjUwXHVCOUNDXHVDNkQwPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uLXJvdyBwdC0zJz5cbiAgICAgICAge2xpc3QubWFwKGxpc3RJdGVtID0+IChcbiAgICAgICAgICA8U2hhZG93Q2FyZCBrZXk9e2xpc3RJdGVtLnRpdGxlfSBpdGVtPXtsaXN0SXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcblxuZXhwb3J0IHR5cGUgU2hhZG93Q2FyZEl0ZW0gPSB7XG4gIGljb24/OiBKU1guRWxlbWVudCxcbiAgdGl0bGU6IHN0cmluZyxcbiAgcGhvdG86IGFueSxcbiAgY29udGVudHM/OiBzdHJpbmdbXSB8IEpTWC5FbGVtZW50W10sXG4gIGV4dHJhPzogSlNYLkVsZW1lbnQsXG59XG5cbnR5cGUgU2hhZG93Q2FyZFByb3BzID0ge1xuICBpdGVtOiBTaGFkb3dDYXJkSXRlbSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNoYWRvd0NhcmQoeyBpdGVtIH06IFNoYWRvd0NhcmRQcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBpY29uLCBwaG90bywgY29udGVudHMsIGV4dHJhIH0gPSBpdGVtXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zaGFkb3ctY2FyZC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2hhZG93LWNhcmQtYm9keSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLXRodW1iJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zaGFkb3ctY2FyZC10aHVtYi1jb3Zlcic+XG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLXRodW1iLWltZycgZGF0YT17cGhvdG8ucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLWNvbnRlbnRzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zaGFkb3ctY2FyZC10aXRsZSc+XG4gICAgICAgICAgICAgIHtpY29uICYmIGljb259XG4gICAgICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjb250ZW50cyAmJiAoXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgICAgICAgIHtjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleC50b1N0cmluZygpfT57Y29udGVudH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zaGFkb3ctY2FyZC1kZXNjLWV4dHJhJz57ZXh0cmF9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNoYWRvdy1jYXJkLWV4dHJhJz57ZXh0cmF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2hhZG93LWNhcmQtc2hhZG93MSc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zaGFkb3ctY2FyZC1zaGFkb3cyJz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMDVmNDMyODUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU03S080S0ZHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NS0hON1k2Uy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTzJWMktCT0UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVRUUhFNzRDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkdVTllYR1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00NTdUUENTVi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QnOnsnaWQnOidyb3V0ZXMvY29udGFjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbnRhY3QtS1hZR08yNE8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1FNFlYNTVFUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9uZXdzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J25ld3MvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3cy8kc2x1Zy1TSFlWVkdTRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRE5DNFdDS1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9uZXdzL2luZGV4Jzp7J2lkJzoncm91dGVzL25ld3MvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3cy9pbmRleC0zTERFVTdFNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRE5DNFdDS1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ub3RpY2VzLyRzbHVnJzp7J2lkJzoncm91dGVzL25vdGljZXMvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbm90aWNlcy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzLyRzbHVnLTRLRTRRQllZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ETkM0V0NLVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbm90aWNlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RpY2VzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzL2luZGV4LVVFSllHRlRDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ETkM0V0NLVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYW4nOnsnaWQnOidyb3V0ZXMvcGxhbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwbGFuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4tNVE2RUtKSlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzLyRzbHVnJzp7J2lkJzoncm91dGVzL3Bvc3RzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzLyRzbHVnLTRJSEFSQUlDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ETkM0V0NLVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3Bvc3RzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9pbmRleC1NRVU1VTJDTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRE5DNFdDS1cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy9wb3N0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9wb3N0cy1DNFVaRVFSTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy9wcmV2aWV3L3N0YXJ0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQtVkI3Sks1SjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNPT1Y0NENVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMvcHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcC1ZNDRXNUw3RS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM09PVjQ0Q1UuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJldmlldy9zdGFydCc6eydpZCc6J3JvdXRlcy9wcmV2aWV3L3N0YXJ0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByZXZpZXcvc3RhcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJldmlldy9zdGFydC1BTjZXWEI1Qi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM09PVjQ0Q1UuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJldmlldy9zdG9wJzp7J2lkJzoncm91dGVzL3ByZXZpZXcvc3RvcCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmV2aWV3L3N0b3AnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJldmlldy9zdG9wLVhZTDdCUzVYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zT09WNDRDVS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcml2YWN5Jzp7J2lkJzoncm91dGVzL3ByaXZhY3knLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJpdmFjeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcml2YWN5LU00QU5GUVVSLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9hcHBkZXNpZ24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduLVFQRFVZQ1hSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CQTc0VkVBRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlcnZpY2VzLmNvbnN1bHRpbmcnOnsnaWQnOidyb3V0ZXMvc2VydmljZXMuY29uc3VsdGluZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9jb25zdWx0aW5nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlcnZpY2VzLmNvbnN1bHRpbmctSkdBQ0YzWVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJBNzRWRUFELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UnOnsnaWQnOidyb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvaG9tZXBhZ2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UtTk1ZVkZTQjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVFR0tERFdTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkE3NFZFQUQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvcHVibGlzaGluZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nLURaQ1lJVkxSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FRUdLRERXUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJBNzRWRUFELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZSc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL3NpbmdsZXBhZ2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZS1OSTY1NkNPMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUVHS0REV1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQTc0VkVBRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL3NldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzLUVVRFJQQlhTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTA1RjQzMjg1LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFB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QUFBO0FBQUE7QUFBQSxJQUdKO0FBQUE7OztBQ2JKO0FBRU8sSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBa0J0QjtBQUFBOzs7QUNwQko7QUFBTyxJQUFNLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBeEI7QUFBTyxJQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBMUI7QUFBTyxJQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBMUI7QUFBTyxJQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBekI7QUFBTyxJQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBMUI7QUFBTyxJQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNB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QUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoscUJBQXFCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQkFBbUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0JBQWtCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGtCQUFrQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZUFBZTtBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
