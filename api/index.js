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
  routes: () => routes2
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
var import_remix6 = __toESM(require_remix());
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
    morePosts: allPosts(orderBy: date_DESC, first: 4, filter: {slug: {neq: $slug}}) {
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

// app/queries/main.ts
init_react();
var main = `
  {
    promotions: allPromotions(orderBy: expiredat_ASC, first: 1) {
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
    morePosts: allPosts(orderBy: date_DESC, first: 5) {
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
      category {
        name
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

// app/queries/services/branding.ts
init_react();
var branding = `
  query Branding {
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
      branding {
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
      homepagebasic {
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
          title
        }
      }
      singlepagebasic {
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
          title
        }
      }
      publishingbasic {
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
          title
        }
      }
      appdesignbasic {
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
          title
        }
      }
      brandingbasic {
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
          title
        }
      }
    }
  }
`;

// app/lib/config.ts
init_react();

// app/components/Icon/BulletSolid.tsx
init_react();
function BulletSolid({ className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className,
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
function Appdesign() {
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

// app/components/Icon/Branding.tsx
init_react();
function Branding() {
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

// app/components/Icon/Kakao.tsx
init_react();
function Kakao() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 99.61801 92.147011"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clipPath692",
    clipPathUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m 0,595.28 841.89,0 L 841.89,0 0,0 Z"
  }))), /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(1,0,0,-1,-362.26358,234.09895)"
  }, /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clipPath692)"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(163.2612,376.6777)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m 248.81039,-143.57875 c -26.953,0 -48.80801,-17.256 -48.80801,-38.555 0,-13.68101 9.05201,-25.69301 22.64601,-32.54901 l -4.599,-17.167 c -0.176,-0.527 -0.03,-1.085 0.352,-1.465 0.263,-0.265 0.614,-0.411 0.995,-0.411 0.294,0 0.586,0.117 0.85,0.322 l 19.775,13.36 c 2.872,-0.41 5.802,-0.644 8.789,-0.644 26.953,0 48.81,17.255 48.81,38.55401 0,21.299 -21.857,38.555 -48.81,38.555"
  })))));
}

// app/lib/config.ts
var routes = [
  {
    title: "\uD648",
    display: false,
    children: [
      {
        pathname: "/",
        title: "\uD648",
        sidebar: true,
        display: true,
        desc: ""
      }
    ]
  },
  {
    title: "\uBE14\uB85C\uADF8",
    display: true,
    children: [
      {
        pathname: "/notices",
        title: "\uACF5\uC9C0\uC0AC\uD56D",
        sidebar: true,
        id: "116676845",
        display: true,
        desc: "\uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        Icon: notice2
      },
      {
        pathname: "/news",
        title: "\uC0C8\uC18C\uC2DD",
        sidebar: true,
        id: "116679079",
        display: false,
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
        sidebar: true,
        display: true,
        desc: "\uD64D\uBCF4\uB97C \uC704\uD55C \uC6F9\uC0AC\uC774\uD2B8 \uAD6C\uCD95",
        Icon: Homepage
      },
      {
        pathname: "/services/singlepage",
        title: "\uC2F1\uAE00 \uD398\uC774\uC9C0 \uC81C\uC791",
        sidebar: true,
        display: true,
        desc: "\uC774\uBCA4\uD2B8, \uB79C\uB529 \uB2E8\uC77C \uD398\uC774\uC9C0 \uAD6C\uCD95",
        Icon: Singlepage
      },
      {
        pathname: "/services/publishing",
        title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
        sidebar: true,
        display: true,
        desc: "\uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
        Icon: Publishing
      },
      {
        pathname: "/services/appdesign",
        title: "\uC571 \uB514\uC790\uC778",
        sidebar: true,
        display: true,
        desc: "\uBAA8\uBC14\uC77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778",
        Icon: Appdesign
      },
      {
        pathname: "/services/branding",
        title: "\uBE0C\uB79C\uB4DC \uAC00\uC774\uB4DC",
        sidebar: true,
        display: true,
        desc: "\uC628, \uC624\uD504\uB77C\uC778 \uB514\uC790\uC778 \uCEE8\uC124\uD305",
        Icon: Branding
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
        sidebar: true,
        display: true,
        desc: "\uBB34\uC5C7\uC774\uB4E0 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.",
        Icon: Contact
      },
      {
        pathname: "/plan",
        title: "\uC11C\uBE44\uC2A4 \uC694\uAE08\uD45C",
        sidebar: true,
        display: true,
        desc: "\uC11C\uBE44\uC2A4 \uBCC4 \uAC00\uACA9\uC744 \uC548\uB0B4\uD574 \uB4DC\uB824\uC694.",
        Icon: Price
      },
      {
        pathname: "/privacy",
        title: "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uC815\uCC45",
        sidebar: false,
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
        sidebar: true,
        display: true,
        desc: "\uAC1C\uC778\uD654 \uC124\uC815\uC744 \uBCC0\uACBD\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        Icon: Settings
      }
    ]
  }
];
var exceptRoute = ["posts", "services", "events"];
function useNav(pathname) {
  const matchedRoute = routes.reduce((acc, cur) => acc.concat(cur.children), []).find((route) => route.pathname === pathname);
  return matchedRoute || routes[0].children[0];
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
  ["\uBE0C\uB79C\uB4DC \uAC00\uC774\uB4DC", "\uAE4C\uC9C0"]
];

// app/components/Layout/index.tsx
init_react();
var import_bolt_ui3 = require("@deerpark/bolt-ui");

// app/components/Header/index.tsx
init_react();
var import_remix3 = __toESM(require_remix());
function Header({ title, Icon, desc, prevRoute, cover, date, sidebar, isWide }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-header"
  }, (isWide || !sidebar) && /* @__PURE__ */ React.createElement("div", {
    className: "bx-pc-nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-home"
  }, prevRoute && prevRoute !== "/" ? /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: prevRoute
  }, /* @__PURE__ */ React.createElement(ArrowLeftLight, null)) : /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(HomeLight, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-home"
  }, prevRoute && prevRoute !== "/" ? /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: prevRoute
  }, /* @__PURE__ */ React.createElement(ArrowLeftLight, null)) : /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(HomeLight, null))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-logo"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, {
    className: "w-16 h-10"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-mobile-settings"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/settings"
  }, /* @__PURE__ */ React.createElement(SettingsLight, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-section"
  }, cover && /* @__PURE__ */ React.createElement("div", {
    className: "bx-cover"
  }, cover), /* @__PURE__ */ React.createElement("div", {
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
var import_remix4 = __toESM(require_remix());
var import_bolt_ui = require("@deerpark/bolt-ui");
function Hero({ heroString: heroString2 = [["", ""]], desc, links: links2, isRoot }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `bx-hero-logo ${isRoot ? "justify-center" : "justify-center md:pb-4"}`
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: `p-4 ${isRoot ? "" : "md:p-0 md:py-10"}`,
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null))), isRoot && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
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
  }, /* @__PURE__ */ React.createElement(import_bolt_ui.ButtonGroup, {
    className: "flex"
  }, links2.map((link) => link.url ? /* @__PURE__ */ React.createElement(import_bolt_ui.Button, {
    key: link.url,
    href: link.url,
    size: "large"
  }, link.label) : /* @__PURE__ */ React.createElement(import_bolt_ui.Button, {
    key: link.label,
    onClick: link.handler,
    size: "large"
  }, link.label))))));
}

// app/components/Footer/index.tsx
init_react();
var import_remix5 = __toESM(require_remix());

// app/lib/kakao.ts
init_react();
var checkKaKaoSDK = () => {
  if (!window.Kakao.Channel) {
    window.Kakao.init("c34808e364deec1dd37ab8c69230579e");
  }
};
var handleClickChatChannel = () => {
  checkKaKaoSDK();
  window.Kakao.Channel.chat({
    channelPublicId: "_qwsxeb"
  });
};
var handleClickAddChannel = () => {
  checkKaKaoSDK();
  window.Kakao.Channel.addChannel({
    channelPublicId: "_qwsxeb"
  });
};

// app/components/Footer/index.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-logo"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo, null))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-footer-contact"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handleClickChatChannel
  }, "\uCE74\uCE74\uC624\uD1A1 \uCC44\uD305 \uBB38\uC758"), /* @__PURE__ */ React.createElement("div", {
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
var import_bolt_ui2 = require("@deerpark/bolt-ui");
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
  }, /* @__PURE__ */ React.createElement(import_bolt_ui2.Button, {
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
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "https://developers.kakao.com/sdk/js/kakao.min.js"
  }));
}
function Layout({
  children,
  title,
  Icon,
  desc,
  promotion,
  prevRoute,
  cover,
  date,
  isWide,
  sidebar
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `bx-page ${isWide ? "bx-page-wide" : ""}`
  }, /* @__PURE__ */ React.createElement(Header, __spreadValues({}, { title, Icon, desc, prevRoute, cover, date, isWide, sidebar })), promotion && /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-contents"
  }, children), /* @__PURE__ */ React.createElement("section", {
    className: "section flex md:hidden"
  }, /* @__PURE__ */ React.createElement(Footer, null)));
}
function RootLayout({ isRoot, children, pathname, sidebar }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-container"
  }, sidebar && /* @__PURE__ */ React.createElement("div", {
    className: `bx-page bx-page-root ${isRoot ? "" : "hidden md:flex"}`
  }, /* @__PURE__ */ React.createElement(Hero, {
    isRoot,
    heroString,
    desc: "\uB354 \uB098\uC740 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC0DD\uAC01\uD558\uBA70 \uAF3C\uAF3C\uD558\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB824\uC694.",
    links: [
      { url: "/contact", label: "\uBB34\uB8CC \uC0C1\uB2F4" },
      {
        url: "/plan",
        label: "\uC694\uAE08\uD45C \uD655\uC778"
      }
    ]
  }), /* @__PURE__ */ React.createElement(import_bolt_ui3.Nav, __spreadValues({}, { routes, pathname })), /* @__PURE__ */ React.createElement("div", {
    className: `${isRoot ? "px-3 md:px-0" : ""}`
  }, /* @__PURE__ */ React.createElement(Footer, null))), children);
}

// node_modules/@deerpark/bolt-ui/dist/index.css
var dist_default = "/build/_assets/index-M6MXDIZR.css";

// app/styles/app.css
var app_default = "/build/_assets/app-AQXSULE5.css";

// route:/Users/deerpark/Dev/bolt-ux/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
    },
    { rel: "stylesheet", href: dist_default },
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
  const { status, statusText } = (0, import_remix6.useCatch)();
  const prevRoute = usePrevRoute(pathname);
  const { sidebar = true } = useNav(pathname);
  const isRoot = pathname === "/";
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix6.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname, sidebar }), /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title: status.toString(), Icon: NotFound, desc: statusText, prevRoute, pathname, sidebar }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-error"
  }, /* @__PURE__ */ React.createElement("h1", null, "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uC774\uC804\uC73C\uB85C \uB3CC\uC544 \uAC00\uC2DC\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")))), /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix6.Scripts, null), /* @__PURE__ */ React.createElement(import_remix6.LiveReload, null)));
}
function App() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix6.useLoaderData)();
  const { sidebar } = useNav(pathname);
  const isRoot = pathname === "/";
  const {
    data: { site }
  } = (0, import_react_datocms.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix6.Meta, null), /* @__PURE__ */ React.createElement(import_remix6.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname, sidebar }), /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix6.Scripts, null), /* @__PURE__ */ React.createElement(import_remix6.LiveReload, null)));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/preview/start.ts
var start_exports = {};
__export(start_exports, {
  action: () => action
});
init_react();
var import_remix7 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix7.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.publishing.tsx
var services_publishing_exports = {};
__export(services_publishing_exports, {
  default: () => Publishing2,
  loader: () => loader2
});
init_react();
var import_remix8 = __toESM(require_remix());
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
    className: "bx-contents-row pb-1 md:pb-5 pt-5 md:pt-8"
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.publishing.tsx
var loader2 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: publishing
  });
};
function Publishing2() {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix8.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms3.useQuerySubscription)(datoQuerySubscription2);
  const recommendList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[0].responsiveImage
      }),
      title: "\uC778\uD130\uB137 \uC0AC\uC5C5\uC790 \uB300\uD45C\uB2D8",
      contents: ["\uD504\uB85C\uC81D\uD2B8\uC5D0 \uB9C8\uD06C\uC5C5 \uAC1C\uBC1C \uBC0F UI \uAC1C\uBC1C \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uD134\uD0A4 \uACC4\uC57D"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[1].responsiveImage
      }),
      title: "\uB300\uAE30\uC5C5 SI \uB2F4\uB2F9\uC790\uB2D8",
      contents: ["\uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8 \uB9C8\uD06C\uC5C5, UI \uAC1C\uBC1C \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC0C1\uC8FC \uBD88\uAC00, \uD134\uD0A4 \uACC4\uC57D"]
    }
  ];
  const techList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[2].responsiveImage
      }),
      title: "TailwindCSS \uC9C0\uC6D0",
      contents: [
        "\uC694\uC998 \uAC01\uAD11\uBC1B\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4 \uD504\uB808\uC784\uC6CC\uD06C\uC778 TailwindCSS\uB85C \uAC1C\uBC1C \uAC00\uB2A5\uD558\uBA70 \uB2E4\uC591\uD55C CSS \uBC29\uBC95\uB860\uC73C\uB85C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[3].responsiveImage
      }),
      title: "\uC2DC\uB9E8\uD2F1 \uB9C8\uD06C\uC5C5 \uAC1C\uBC1C",
      contents: ["\uBB38\uC11C\uC5D0 \uAD6C\uC870\uC801\uC778 \uC758\uBBF8\uB97C \uBD80\uC5EC\uD558\uC5EC \uCD5C\uB300\uD55C \uC2DC\uB9E8\uD2F1\uD55C \uAC1C\uBC1C\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[4].responsiveImage
      }),
      title: "\uC6F9 \uC811\uADFC\uC131 \uC900\uC218",
      contents: ["\uC694\uAD6C\uC0AC\uD56D\uC5D0 \uB530\uB77C \uC811\uADFC\uC131\uC744 \uC900\uC218\uD558\uC5EC \uC778\uC99D \uB9C8\uD06C\uB97C \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms3.Image, {
        data: photo.publishing[5].responsiveImage
      }),
      title: "\uBC18\uC751\uD615 \uD398\uC774\uC9C0\uB85C \uC81C\uC791",
      contents: ["\uB2E4\uC591\uD55C PC \uD06C\uB85C\uC2A4, \uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uC5D0\uC11C \uAC01\uAC01 \uD06C\uAE30\uC5D0 \uCD5C\uC801\uD654 \uB418\uB3C4\uB85D \uB9DE\uCDA4 \uC81C\uC791 \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
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
  loader: () => loader3
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_react_router_dom3 = require("react-router-dom");
var import_react_datocms4 = require("react-datocms");
var loader3 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: singlepage
  });
};
function Singlepage2() {
  const { pathname } = (0, import_react_router_dom3.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix9.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms4.useQuerySubscription)(datoQuerySubscription2);
  const list = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.singlepage[0].responsiveImage
      }),
      title: "IT \uAE30\uC5C5 \uB9C8\uCF00\uD305 \uB2F4\uB2F9\uC790\uB2D8",
      contents: ["\uB8F0\uB81B \uC774\uBCA4\uD2B8 \uAE4C\uC9C0 \uC778\uD130\uB809\uC158 \uAC1C\uBC1C \uD3EC\uD568 \uC694\uAD6C\uC0AC\uD56D\uC744 \uCD5C\uB300\uD55C \uB9DE\uCDA4 \uC81C\uACF5"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.singlepage[1].responsiveImage
      }),
      title: "\uC1FC\uD551\uBAB0 \uC0AC\uC7A5\uB2D8",
      contents: ["\uC2E0\uADDC \uC720\uC785, \uB9AC\uD150\uC158\uB4F1 \uB9C8\uCF00\uD305\uC5D0 \uD65C\uC6A9\uD558\uACE0 \uC2F6\uC740 \uAC04\uB2E8\uD55C \uC774\uBCA4\uD2B8 \uD398\uC774\uC9C0 \uC81C\uACF5"]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.singlepage[2].responsiveImage
      }),
      title: "\uC778\uD14C\uB9AC\uC5B4 \uAC00\uAC8C \uC0AC\uC7A5\uB2D8",
      contents: ["\uC0AC\uC5C5\uC744 \uAC04\uB2E8\uD558\uAC8C \uC18C\uAC1C\uD558\uACE0 \uC778\uD130\uB137\uC5D0 \uD64D\uBCF4\uD560 \uC218 \uC788\uB3C4\uB85D \uB79C\uB529 \uD398\uC774\uC9C0 \uC81C\uACF5"]
    }
  ];
  const techList = [
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.common[0].responsiveImage
      }),
      title: "\uCD5C\uC2E0 \uD14C\uD06C \uD2B8\uB9AC",
      contents: [
        "NextJS/Remix React \uD504\uB808\uC784\uC6CC\uD06C, NodeJS, PostgreSQL\uAE30\uBC18 \uCD5C\uC2E0 \uAE30\uC220\uB85C \uAC1C\uBC1C \uD568\uC73C\uB85C\uC368 \uBE60\uB974\uACE0 \uAC00\uBCBC\uC6B4 \uC11C\uBE44\uC2A4\uB97C\uC81C\uACF5\uD569\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.common[1].responsiveImage
      }),
      title: "SEO \uB3C4\uC785",
      contents: [
        "\uAD6C\uAE00, \uB124\uC774\uBC84 \uAC80\uC0C9\uC5D4\uC9C4\uC5D0 \uCD5C\uC801\uD654\uD558\uC5EC \uC791\uC5C5\uD574 \uB4DC\uB9BD\uB2C8\uB2E4. \uAC80\uC0C9\uC740 \uC5B4\uB514\uC5D0\uC11C\uB098 \uC27D\uACE0 \uBE60\uB974\uACE0 \uAC00\uC7A5 \uC0C1\uC704\uC5D0 \uB7AD\uD06C\uB420 \uC218\uC788\uB3C4\uB85D \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
      ]
    },
    {
      thumb: /* @__PURE__ */ React.createElement(import_react_datocms4.Image, {
        data: photo.common[2].responsiveImage
      }),
      title: "\uBC18\uC751\uD615 \uD398\uC774\uC9C0\uB85C \uC81C\uC791",
      contents: ["\uB2E4\uC591\uD55C PC \uD06C\uB85C\uC2A4, \uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800, \uBAA8\uBC14\uC77C\uC5D0\uC11C \uAC01\uAC01 \uD06C\uAE30\uC5D0 \uCD5C\uC801\uD654 \uB418\uB3C4\uB85D \uB9DE\uCDA4 \uC81C\uC791 \uD574 \uB4DC\uB9BD\uB2C8\uB2E4."]
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.appdesign.tsx
var services_appdesign_exports = {};
__export(services_appdesign_exports, {
  default: () => Appdesign2,
  loader: () => loader4
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_react_router_dom4 = require("react-router-dom");
var import_react_datocms5 = require("react-datocms");
var loader4 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: appdesign
  });
};
function Appdesign2() {
  const { pathname } = (0, import_react_router_dom4.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix11.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms5.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
    className: "bx-contents-row-bg",
    photos: [photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]
  }), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(Refund, null));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.branding.tsx
var services_branding_exports = {};
__export(services_branding_exports, {
  default: () => Branding2,
  loader: () => loader5
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_react_router_dom5 = require("react-router-dom");
var import_react_datocms6 = require("react-datocms");
var loader5 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: branding
  });
};
function Branding2() {
  const { pathname } = (0, import_react_router_dom5.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix12.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { promotion, photo }
  } = (0, import_react_datocms6.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Flow, null), /* @__PURE__ */ React.createElement(Crews, {
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
var import_remix13 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix13.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
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
      contents: ["\uC0C8\uB85C\uC6B4 \uAC00\uAC8C \uB610\uB294 \uBC95\uC778\uC744 \uC2DC\uC791\uD558\uAE30 \uC804 \uAC04\uD310, \uB85C\uACE0, \uBA54\uB274\uD310\uB4F1\uC758 \uBE0C\uB79C\uB529 \uBE0C\uB79C\uB4DC \uAC00\uC774\uB4DC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5"]
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
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Banner2, __spreadValues({}, promotion)), /* @__PURE__ */ React.createElement(Recommend, {
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
var import_remix15 = __toESM(require_remix());
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
var import_remix14 = __toESM(require_remix());
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
    className: "prose-sm prose-slate dark:prose-invert"
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
  var _a, _b;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, firstPost && /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
    className: "bx-post-link",
    to: `/${category || ((_b = (_a = firstPost.category) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase()) || "posts"}/${firstPost.slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-thumb"
  }, /* @__PURE__ */ React.createElement(import_react_datocms9.Image, {
    className: "bx-thumbnail",
    data: firstPost.coverImage.responsiveImage
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-meta"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "bx-post-title"
  }, firstPost.title), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-desc"
  }, firstPost.excerpt), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-desc"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: firstPost.date
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-avatar"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: firstPost.author.name,
    picture: firstPost.author.picture
  })))))), otherPosts && /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("ul", null, otherPosts.map((post2) => {
    var _a2, _b2;
    return /* @__PURE__ */ React.createElement("li", {
      className: "bx-post bx-other-post",
      key: post2.slug
    }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
      className: "bx-post-link",
      to: `/${category || ((_b2 = (_a2 = post2.category) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase()) || "posts"}/${post2.slug}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bx-post-thumb"
    }, /* @__PURE__ */ React.createElement(import_react_datocms9.Image, {
      className: "bx-thumbnail",
      data: post2.coverImage.responsiveImage
    })), /* @__PURE__ */ React.createElement("div", {
      className: "bx-post-info"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bx-post-meta"
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "bx-post-title"
    }, post2.title), /* @__PURE__ */ React.createElement("div", {
      className: "bx-post-desc"
    }, post2.excerpt), /* @__PURE__ */ React.createElement("div", {
      className: "bx-post-desc"
    }, /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }))))));
  }))));
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix15.useLoaderData)();
  const { title, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2 }
  } = (0, import_react_datocms10.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms10.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id,
    sidebar
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
var import_remix16 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix16.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms11.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), firstPost && /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "notices" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/start.ts
var start_exports2 = {};
__export(start_exports2, {
  action: () => action3
});
init_react();
var import_remix17 = __toESM(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix17.redirect)("/", {
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
var import_remix18 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix18.redirect)("/", {
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
var import_remix19 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix19.useLoaderData)();
  const { title, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2 }
  } = (0, import_react_datocms12.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms12.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id,
    sidebar
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
var import_remix20 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix20.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms13.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-sections"
  }, /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts }))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  default: () => PostSlug3,
  loader: () => loader11,
  meta: () => meta4
});
init_react();
var import_remix21 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix21.useLoaderData)();
  const { title, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2 }
  } = (0, import_react_datocms14.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, {
    title: (post2 == null ? void 0 : post2.title) || title,
    Icon: /* @__PURE__ */ React.createElement(Avatar, {
      name: post2.author.name,
      picture: post2.author.picture
    }),
    desc: (post2 == null ? void 0 : post2.excerpt) || desc,
    prevRoute,
    cover: /* @__PURE__ */ React.createElement(import_react_datocms14.Image, {
      data: post2.coverImage.responsiveImage
    }),
    date: /* @__PURE__ */ React.createElement(Date, {
      dateString: post2.date
    }),
    categoryId: (_a = post2 == null ? void 0 : post2.category) == null ? void 0 : _a.id,
    sidebar
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
var import_remix22 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix22.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms15.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), firstPost && /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "news" })));
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
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-page-row"
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
var import_bolt_ui4 = require("@deerpark/bolt-ui");

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
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-page-row pb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-40 pt-20"
  }, /* @__PURE__ */ React.createElement(import_lottie_react.default, {
    loop: true,
    autoplay: true,
    animationData: cowboy_hat_face_default
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("b", {
    className: "text-5xl md:text-7xl font-thin mb-5 text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-200"
  }, "\uCC44\uD305 \uBB38\uC758"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm md:text-base opacity-80"
  }, "\uD3C9\uC77C 10:00 - 18:00"), /* @__PURE__ */ React.createElement("span", {
    className: "text-xs md:text-sm opacity-50"
  }, "(\uC810\uC2EC\uC2DC\uAC04 13:00 - 14:00 \uC81C\uC678 \xB7 \uC8FC\uB9D0/\uACF5\uD734\uC77C \uC81C\uC678)")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center gap-x-2"
  }, /* @__PURE__ */ React.createElement(import_bolt_ui4.ButtonGroup, {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_bolt_ui4.Button, {
    icon: /* @__PURE__ */ React.createElement(Kakao, null),
    onClick: handleClickAddChannel
  }, "\uCC44\uB110 \uCD94\uAC00"), /* @__PURE__ */ React.createElement(import_bolt_ui4.Button, {
    icon: /* @__PURE__ */ React.createElement(Kakao, null),
    onClick: handleClickChatChannel
  }, "\uCE74\uD1A1 \uCC44\uD305"))))));
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
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute, isWide: true }), /* @__PURE__ */ React.createElement("div", {
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
var import_remix24 = __toESM(require_remix());
var import_react_datocms17 = require("react-datocms");

// app/components/Promotions/index.tsx
init_react();
var import_remix23 = __toESM(require_remix());
var import_react_datocms16 = require("react-datocms");
function Promotions({ promotions }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix23.Link, {
    to: promotion.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms16.Image, {
    className: "bx-promotion-image",
    data: promotion.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  }))))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/index.tsx
var loader13 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: main
  });
};
function Index4() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix24.useLoaderData)();
  const {
    data: { promotions, morePosts }
  } = (0, import_react_datocms17.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("section", {
    className: "bx-page-row hidden md:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-page max-w-112"
  }, /* @__PURE__ */ React.createElement(Promotions, __spreadValues({}, { promotions })), /* @__PURE__ */ React.createElement("h2", {
    className: "bx-contents-h2 mx-4 md:mx-8 -mb-4"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(BulletSolid, null)), /* @__PURE__ */ React.createElement("span", null, "\uCD5C\uADFC \uD3EC\uC2A4\uD2B8")), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { otherPosts: morePosts }))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/plan.tsx
var plan_exports = {};
__export(plan_exports, {
  default: () => Plan,
  loader: () => loader14
});
init_react();
var import_remix25 = __toESM(require_remix());
var import_react_router_dom16 = require("react-router-dom");
var import_react_datocms19 = require("react-datocms");

// app/components/Section/index.tsx
init_react();
var import_react_datocms18 = require("react-datocms");
var import_bolt_ui5 = require("@deerpark/bolt-ui");
function Section({ item }) {
  const { title, icon, photos, metas, extra, badge, link, label } = item;
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-title"
  }, icon ? icon : /* @__PURE__ */ React.createElement(BulletSolid, null), /* @__PURE__ */ React.createElement("span", null, title), badge), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section-extra"
  }, extra)), /* @__PURE__ */ React.createElement("div", {
    className: "bx-carousel"
  }, /* @__PURE__ */ React.createElement("ul", null, photos && !!photos.length && photos.map(({ responsiveImage }) => /* @__PURE__ */ React.createElement("li", {
    key: responsiveImage.title,
    className: "bx-card-sqaure"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-card-thumb"
  }, /* @__PURE__ */ React.createElement(import_react_datocms18.Image, {
    className: "bx-thumbnail",
    data: responsiveImage
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-card-sqaure-info"
  }, responsiveImage.title))))), metas && !!metas.length && /* @__PURE__ */ React.createElement("div", {
    className: "bx-meta-list"
  }, metas.map((meta6, index) => /* @__PURE__ */ React.createElement("div", {
    key: index.toString(),
    className: "bx-meta"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-info"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-label"
  }, meta6.label), /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-value"
  }, meta6.value))))), label && /* @__PURE__ */ React.createElement("div", {
    className: "w-auto md:w-60 px-5 md:self-end pt-2.5 md:px-8"
  }, /* @__PURE__ */ React.createElement(import_bolt_ui5.Button, {
    block: true,
    size: "large",
    href: link
  }, label)));
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
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix25.useLoaderData)();
  const {
    data: { photo }
  } = (0, import_react_datocms19.useQuerySubscription)(datoQuerySubscription2);
  const list = [
    {
      title: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791",
      badge: /* @__PURE__ */ React.createElement("span", {
        className: "bx-badge"
      }, "BASIC"),
      link: "/services/homepage",
      label: "\uC790\uC138\uD788 \uBCF4\uAE30",
      photos: photo.homepagebasic,
      metas: [
        { label: "\uC791\uC5C5\uC77C", value: "7\uC77C" },
        { label: "\uCD5C\uB300 \uD398\uC774\uC9C0", value: "5\uAC1C" },
        { label: "\uC2A4\uD0C0\uC77C \uAC00\uC774\uB4DC", value: "\uD3EC\uD568" },
        { label: "A/S", value: "1\uB144" },
        { label: "\uBC18\uC751\uD615 \uC6F9", value: "\uD3EC\uD568" },
        { label: "\uB2E4\uD06C \uBAA8\uB4DC", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uAC80\uC0C9\uC5D4\uC9C4 \uCD5C\uC801\uD654", value: "\uD3EC\uD568" },
        { label: "\uB3C4\uBA54\uC778 (1\uB144)", value: "\uBB34\uB8CC" },
        { label: "\uD638\uC2A4\uD305 (1\uB144)", value: "\uBB34\uB8CC" },
        { label: "\uAD6C\uAE00 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uAD6C\uAE00 \uC560\uB110\uB9AC\uD2F1\uC2A4", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uCE74\uCE74\uC624\uD1A1 \uCC44\uB110", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uCC44\uB110\uD1A1", value: "\uD3EC\uD568" },
        { label: "\uAD00\uB9AC\uC790 \uB3C4\uAD6C", value: "\uBBF8\uC9C0\uC6D0" }
      ],
      extra: /* @__PURE__ */ React.createElement("span", null, "50\uB9CC\uC6D0")
    },
    {
      title: "\uC2F1\uAE00\uD398\uC774\uC9C0 \uC81C\uC791",
      badge: /* @__PURE__ */ React.createElement("span", {
        className: "bx-badge"
      }, "BASIC"),
      link: "/services/singlepage",
      label: "\uC790\uC138\uD788 \uBCF4\uAE30",
      photos: photo.singlepagebasic,
      metas: [
        { label: "\uC791\uC5C5\uC77C", value: "3\uC77C" },
        { label: "\uCD5C\uB300 \uD398\uC774\uC9C0", value: "1\uAC1C" },
        { label: "\uC2A4\uD0C0\uC77C \uAC00\uC774\uB4DC", value: "\uBBF8\uD3EC\uD568" },
        { label: "A/S", value: "1\uB144" },
        { label: "\uBC18\uC751\uD615 \uC6F9", value: "\uD3EC\uD568" },
        { label: "\uC778\uD130\uB809\uD2F0\uBE0C", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uB2E4\uD06C \uBAA8\uB4DC", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uAC80\uC0C9\uC5D4\uC9C4 \uCD5C\uC801\uD654", value: "\uD3EC\uD568" },
        { label: "\uB3C4\uBA54\uC778 (1\uB144)", value: "\uBB34\uB8CC" },
        { label: "\uD638\uC2A4\uD305 (1\uB144)", value: "\uBB34\uB8CC" },
        { label: "\uAD00\uB9AC\uC790 \uB3C4\uAD6C", value: "\uBBF8\uC9C0\uC6D0" }
      ],
      extra: /* @__PURE__ */ React.createElement("span", null, "20\uB9CC\uC6D0")
    },
    {
      title: "\uD37C\uBE14\uB9AC\uC2F1 \uAC1C\uBC1C",
      badge: /* @__PURE__ */ React.createElement("span", {
        className: "bx-badge"
      }, "BASIC"),
      link: "/services/publishing",
      label: "\uC790\uC138\uD788 \uBCF4\uAE30",
      photos: photo.publishingbasic,
      metas: [
        { label: "\uC791\uC5C5\uC77C", value: "2\uC77C" },
        { label: "\uCD5C\uB300 \uD398\uC774\uC9C0", value: "10\uAC1C" },
        { label: "\uC2A4\uD0C0\uC77C \uAC00\uC774\uB4DC", value: "\uD3EC\uD568" },
        { label: "A/S", value: "1\uAC1C\uC6D4" },
        { label: "\uBC18\uC751\uD615 \uC6F9", value: "\uD3EC\uD568" },
        { label: "\uB2E4\uD06C \uBAA8\uB4DC", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uC6F9 \uC811\uADFC\uC131", value: "\uC9C0\uC6D0" },
        { label: "\uC6F9 \uC811\uADFC\uC131 \uC778\uC99D \uB9C8\uD06C", value: "\uBBF8\uC9C0\uC6D0" }
      ],
      extra: /* @__PURE__ */ React.createElement("span", null, "50\uB9CC\uC6D0")
    },
    {
      title: "\uC571 \uB514\uC790\uC778",
      badge: /* @__PURE__ */ React.createElement("span", {
        className: "bx-badge"
      }, "BASIC"),
      link: "/services/appdesign",
      label: "\uC790\uC138\uD788 \uBCF4\uAE30",
      photos: photo.appdesignbasic,
      metas: [
        { label: "\uC791\uC5C5\uC77C", value: "3\uC77C" },
        { label: "\uCD5C\uB300 \uD398\uC774\uC9C0", value: "5\uAC1C" },
        { label: "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C", value: "\uD3EC\uD568" },
        { label: "A/S", value: "3\uAC1C\uC6D4" },
        { label: "\uB2E4\uD06C \uBAA8\uB4DC", value: "\uBBF8\uD3EC\uD568" },
        { label: "\uC6F9 \uC811\uADFC\uC131", value: "\uC9C0\uC6D0" },
        { label: "\uC6F9 \uC811\uADFC\uC131 \uC778\uC99D \uB9C8\uD06C", value: "\uBBF8\uC9C0\uC6D0" }
      ],
      extra: /* @__PURE__ */ React.createElement("span", null, "50\uB9CC\uC6D0")
    },
    {
      title: "\uBE0C\uB79C\uB4DC \uAC00\uC774\uB4DC",
      badge: /* @__PURE__ */ React.createElement("span", {
        className: "bx-badge"
      }, "BASIC"),
      link: "/services/branding",
      label: "\uC790\uC138\uD788 \uBCF4\uAE30",
      photos: photo.brandingbasic,
      metas: [
        { label: "\uC791\uC5C5\uC77C", value: "14\uC77C" },
        { label: "\uB85C\uACE0", value: "\uD3EC\uD568" },
        { label: "\uBA85\uD568", value: "\uD3EC\uD568" },
        { label: "\uBB38\uC11C/\uC774\uBA54\uC77C \uD15C\uD50C\uB9BF", value: "\uD3EC\uD568" },
        { label: "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C", value: "\uD3EC\uD568" },
        { label: "A/S", value: "1\uB144" }
      ],
      extra: /* @__PURE__ */ React.createElement("span", null, "100\uB9CC\uC6D0")
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-sections"
  }, list.map((listItem) => /* @__PURE__ */ React.createElement(Section, {
    key: listItem.title,
    item: listItem
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e41c98ee", "entry": { "module": "/build/entry.client-M7KO4KFG.js", "imports": ["/build/_shared/chunk-MKHN7Y6S.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4P66KG5D.js", "imports": ["/build/_shared/chunk-5QQHE74C.js", "/build/_shared/chunk-SIYTQVEN.js", "/build/_shared/chunk-457TPCSV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-R4JUU6AR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-W6ZCDWT4.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug": { "id": "routes/news/$slug", "parentId": "root", "path": "news/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug-RDHP7NYF.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/index": { "id": "routes/news/index", "parentId": "root", "path": "news", "index": true, "caseSensitive": void 0, "module": "/build/routes/news/index-EHIHCLPV.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/$slug": { "id": "routes/notices/$slug", "parentId": "root", "path": "notices/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/$slug-XH6T53BH.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/index": { "id": "routes/notices/index", "parentId": "root", "path": "notices", "index": true, "caseSensitive": void 0, "module": "/build/routes/notices/index-3GRPHHWO.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan": { "id": "routes/plan", "parentId": "root", "path": "plan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan-4VI4RA44.js", "imports": ["/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-WW4DLJ2A.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-7R2CHMZE.js", "imports": ["/build/_shared/chunk-WBL5YMXU.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/start": { "id": "routes/posts/preview/start", "parentId": "root", "path": "posts/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/start-VB7JK5J2.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/stop": { "id": "routes/posts/preview/stop", "parentId": "root", "path": "posts/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/stop-Y44W5L7E.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-AN6WXB5B.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-XYL7BS5X.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-T2ZXQCAW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.appdesign": { "id": "routes/services.appdesign", "parentId": "root", "path": "services/appdesign", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.appdesign-44WE7W3O.js", "imports": ["/build/_shared/chunk-O4YFTMZV.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.branding": { "id": "routes/services.branding", "parentId": "root", "path": "services/branding", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.branding-AGYFFO5H.js", "imports": ["/build/_shared/chunk-O4YFTMZV.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.homepage": { "id": "routes/services.homepage", "parentId": "root", "path": "services/homepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.homepage-W2QSG5NB.js", "imports": ["/build/_shared/chunk-ODSNBS5W.js", "/build/_shared/chunk-O4YFTMZV.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.publishing": { "id": "routes/services.publishing", "parentId": "root", "path": "services/publishing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.publishing-6KMIPUW7.js", "imports": ["/build/_shared/chunk-ODSNBS5W.js", "/build/_shared/chunk-O4YFTMZV.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.singlepage": { "id": "routes/services.singlepage", "parentId": "root", "path": "services/singlepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.singlepage-36ENKKWU.js", "imports": ["/build/_shared/chunk-ODSNBS5W.js", "/build/_shared/chunk-O4YFTMZV.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-ZWT3KJZB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E41C98EE.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes2 = {
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
  "routes/services.branding": {
    id: "routes/services.branding",
    parentId: "root",
    path: "services/branding",
    index: void 0,
    caseSensitive: void 0,
    module: services_branding_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvcXVlcmllcy9yb290LnRzIiwgIi4uL2FwcC9saWIvZnJhZ21lbnRzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Bvc3RzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25ld3MudHMiLCAiLi4vYXBwL3F1ZXJpZXMvbm90aWNlcy50cyIsICIuLi9hcHAvcXVlcmllcy9tYWluLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL2hvbWVwYWdlLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL3NpbmdsZXBhZ2UudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcHVibGlzaGluZy50cyIsICIuLi9hcHAvcXVlcmllcy9zZXJ2aWNlcy9hcHBkZXNpZ24udHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvYnJhbmRpbmcudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcGxhbi50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0J1bGxldFNvbGlkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzTGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZUxpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93TGVmdExpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9QdWJsaXNoaW5nLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0FwcGRlc2lnbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9CcmFuZGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9OZXdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdGljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9CYW5uZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHJpdmFjeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Db250YWN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1ByaWNlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdEZvdW5kLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1lvdXR1YmUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vVHdpdHRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9JbnN0YWdyYW0udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vS2FrYW8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9saWIva2FrYW8udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0LnRzIiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL1JlY29tbWVuZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUm93L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MaXN0L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9UZWNoLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9GbG93LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9DcmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvRkFRLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9SZWZ1bmQudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2UudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24udHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmJyYW5kaW5nLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZS50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy8kc2x1Zy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQXZhdGFyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EYXRlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0cy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdHMvUG9zdC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50cyIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvJHNsdWcudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXR0aW5ncy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb21vdGlvbnMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByaXZhY3kudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE5IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvcHVibGlzaGluZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9zaW5nbGVwYWdlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3BcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0cy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2FwcGRlc2lnblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuYnJhbmRpbmdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLmJyYW5kaW5nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2JyYW5kaW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvaG9tZXBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL25vdGljZXMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGljZXMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90aWNlcy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90aWNlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90aWNlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJub3RpY2VzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL25ld3MvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL25ld3MvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9zZXR0aW5nc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2V0dGluZ3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy9wcml2YWN5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcml2YWN5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByaXZhY3lcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMThcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcGxhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGxhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHJvb3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VQcmV2Um91dGUsIHVzZU5hdiwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBSb290TGF5b3V0LCBMYXlvdXQsIFNpdGVNZXRhIH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5pbXBvcnQgYm9sdFVJU3R5bGVzIGZyb20gJ0BkZWVycGFyay9ib2x0LXVpL2Rpc3QvaW5kZXguY3NzJ1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9zcG9xYS5naXRodWIuaW8vc3BvcWEtaGFuLXNhbnMvY3NzL1Nwb3FhSGFuU2Fuc05lby5jc3MnLFxuICAgIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYm9sdFVJU3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYXBwU3R5bGVzIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgYmxvZywgc2l0ZSB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKFsuLi5ibG9nLnNlbywgLi4uc2l0ZS5mYXZpY29uXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IHVzZUNhdGNoKClcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICBjb25zdCB7IHNpZGViYXIgPSB0cnVlIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBpc1Jvb3QgPSBwYXRobmFtZSA9PT0gJy8nXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSwgc2lkZWJhciB9fT5cbiAgICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgICB7Li4ueyB0aXRsZTogc3RhdHVzLnRvU3RyaW5nKCksIEljb246IEljb25zLk5vdEZvdW5kLCBkZXNjOiBzdGF0dXNUZXh0LCBwcmV2Um91dGUsIHBhdGhuYW1lLCBzaWRlYmFyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWVycm9yJz5cbiAgICAgICAgICAgICAgPGgxPlx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDM0VcdUM3NDQgXHVDMjE4IFx1QzVDNlx1QzJCNVx1QjJDOFx1QjJFNC48L2gxPlxuICAgICAgICAgICAgICA8cD5cdUM3NzRcdUM4MDRcdUM3M0NcdUI4NUMgXHVCM0NDXHVDNTQ0IFx1QUMwMFx1QzJEQ1x1QUM3MFx1QjA5OCBcdUIyRTRcdUMyREMgXHVDMkRDXHVCM0M0XHVENTc0IFx1QzhGQ1x1QzEzOFx1QzY5NC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Sb290TGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IGlzUm9vdCA9IHBhdGhuYW1lID09PSAnLydcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBzaXRlIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPFNpdGVNZXRhIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7cmVuZGVyTWV0YVRhZ3MoWy4uLnNpdGUuZmF2aWNvbl0pfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxSb290TGF5b3V0IHsuLi57IGlzUm9vdCwgcGF0aG5hbWUsIHNpZGViYXIgfX0+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L1Jvb3RMYXlvdXQ+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHRpbnkgZnJvbSAndGlueS1qc29uLWh0dHAnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQoeyBxdWVyeSwgdmFyaWFibGVzLCBwcmV2aWV3IH06IGFueSkge1xuICBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tJ1xuXG4gIGlmIChwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UKSB7XG4gICAgZW5kcG9pbnQgKz0gYC9lbnZpcm9ubWVudHMvJHtwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UfWBcbiAgfVxuXG4gIGlmIChwcmV2aWV3KSB7XG4gICAgZW5kcG9pbnQgKz0gYC9wcmV2aWV3YFxuICB9XG5cbiAgY29uc3QgeyBib2R5IH0gPSBhd2FpdCB0aW55LnBvc3Qoe1xuICAgIHVybDogZW5kcG9pbnQsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBVE9DTVNfUkVBRE9OTFlfVE9LRU59YCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGJvZHkuZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcignT3VjaCEgVGhlIHF1ZXJ5IGhhcyBzb21lIGVycm9ycyEnLCBib2R5LmVycm9ycylcbiAgICB0aHJvdyBib2R5LmVycm9yc1xuICB9XG5cbiAgcmV0dXJuIGJvZHkuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHsgcmVxdWVzdCwgLi4uZ3FsUmVxdWVzdCB9OiBhbnkpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG4gIGNvbnN0IHByZXZpZXdFbmFibGVkID0gc2Vzc2lvbi5nZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiBwcmV2aWV3RW5hYmxlZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uZ3FsUmVxdWVzdCxcbiAgICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKHsgLi4uZ3FsUmVxdWVzdCwgcHJldmlldzogdHJ1ZSB9KSxcbiAgICAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTixcbiAgICAgICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVCB8fCBudWxsLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsRGF0YTogYXdhaXQgbG9hZChncWxSZXF1ZXN0KSxcbiAgICAgICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19fc2Vzc2lvbicsXG4gICAgbWF4QWdlOiA2MDRfODAwLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH1cbiIsICJpbXBvcnQgeyBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IGBcbiAge1xuICAgIHNpdGU6IF9zaXRlIHtcbiAgICAgIGZhdmljb246IGZhdmljb25NZXRhVGFncyh2YXJpYW50czogW2ljb24sIG1zQXBwbGljYXRpb24sIGFwcGxlVG91Y2hJY29uXSkge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICAgIGJsb2cge1xuICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7bWV0YVRhZ3NGcmFnbWVudH1cbmBcbiIsICIvLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudDogc3RyaW5nID0gYFxuICBmcmFnbWVudCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCBvbiBSZXNwb25zaXZlSW1hZ2Uge1xuICAgIHNyY1NldFxuICAgIHdlYnBTcmNTZXRcbiAgICBzaXplc1xuICAgIHNyY1xuICAgIHdpZHRoXG4gICAgaGVpZ2h0XG4gICAgYXNwZWN0UmF0aW9cbiAgICBhbHRcbiAgICB0aXRsZVxuICAgIGJhc2U2NFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBtZXRhVGFnc0ZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IG1ldGFUYWdzRnJhZ21lbnQgb24gVGFnIHtcbiAgICBhdHRyaWJ1dGVzXG4gICAgY29udGVudFxuICAgIHRhZ1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBjb3ZlckltYWdlID0gYGNvdmVySW1hZ2Uge1xuICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gIH1cbn1gXG5cbmV4cG9ydCBjb25zdCBhdXRob3IgPSBgYXV0aG9yIHtcbiAgbmFtZVxuICBwaWN0dXJlIHtcbiAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICB9XG59YFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGBcbiAgcXVlcnkgUG9zdEJ5U2x1Zygkc2x1ZzogU3RyaW5nKSB7XG4gICAgcG9zdChmaWx0ZXI6IHtzbHVnOiB7ZXE6ICRzbHVnfX0pIHtcbiAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcbiAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxuICAgICAgfVxuICAgICAgdGl0bGVcbiAgICAgIGV4Y2VycHRcbiAgICAgIHNsdWdcbiAgICAgIGNvbnRlbnQge1xuICAgICAgICB2YWx1ZVxuICAgICAgICBibG9ja3Mge1xuICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAuLi5vbiBJbWFnZUJsb2NrUmVjb3JkIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0ZWdvcnkge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgICAgZGF0ZVxuICAgICAgb2dJbWFnZTogY292ZXJJbWFnZXtcbiAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pXG4gICAgICB9XG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbW9yZVBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiA0LCBmaWx0ZXI6IHtzbHVnOiB7bmVxOiAkc2x1Z319KSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gICR7bWV0YVRhZ3NGcmFnbWVudH1cbmBcblxuZXhwb3J0IGNvbnN0IHBvc3RzID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHByb21vdGlvbjogcHJvbW90aW9uKG9yZGVyQnk6IGV4cGlyZWRhdF9BU0MsIGxvY2FsZToga29fS1IpIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCwgY292ZXJJbWFnZSwgYXV0aG9yIH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgbmV3cyA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBfY3JlYXRlZEF0X0RFU0MsIGZpbHRlcjoge2NhdGVnb3J5OiB7ZXE6IFwiMTE2Njc5MDc5XCJ9fSwgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgJHtjb3ZlckltYWdlfVxuICAgICAgJHthdXRob3J9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIGNvdmVySW1hZ2UsIGF1dGhvciB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IG5vdGljZSA9IGBcbiAge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBfY3JlYXRlZEF0X0RFU0MsIGZpbHRlcjoge2NhdGVnb3J5OiB7ZXE6IFwiMTE2Njc2ODQ1XCJ9fSwgZmlyc3Q6IDIwKSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgJHtjb3ZlckltYWdlfVxuICAgICAgJHthdXRob3J9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBtYWluID0gYFxuICB7XG4gICAgcHJvbW90aW9uczogYWxsUHJvbW90aW9ucyhvcmRlckJ5OiBleHBpcmVkYXRfQVNDLCBmaXJzdDogMSkge1xuICAgICAgdGl0bGVcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgYmx1ZVxuICAgICAgICBncmVlblxuICAgICAgICByZWRcbiAgICAgIH1cbiAgICAgIHVybFxuICAgICAgZXhwaXJlZGF0XG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDc3NiwgaDogNzI2IH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1vcmVQb3N0czogYWxsUG9zdHMob3JkZXJCeTogZGF0ZV9ERVNDLCBmaXJzdDogNSkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGV4Y2VycHRcbiAgICAgIGRhdGVcbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0ZWdvcnkge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IGhvbWVwYWdlID0gYFxuICBxdWVyeSBIb21lcGFnZSB7XG4gICAgcHJvbW90aW9uIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYWx0XG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBob3RvIHtcbiAgICAgIGNvbW1vbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaG9tZXBhZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3Qgc2luZ2xlcGFnZSA9IGBcbiAgcXVlcnkgU2luZ2xlcGFnZSB7XG4gICAgcHJvbW90aW9uIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYWx0XG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBob3RvIHtcbiAgICAgIGNvbW1vbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2luZ2xlcGFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBwdWJsaXNoaW5nID0gYFxuICBxdWVyeSBQdWJsaXNoaW5nIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaXNoaW5nIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IGFwcGRlc2lnbiA9IGBcbiAgcXVlcnkgQXBwZGVzaWduIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcHBkZXNpZ24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3QgYnJhbmRpbmcgPSBgXG4gIHF1ZXJ5IEJyYW5kaW5nIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmFuZGluZyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBwbGFuID0gYFxuICBxdWVyeSBQbGFuIHtcbiAgICBwaG90byB7XG4gICAgICBob21lcGFnZWJhc2ljIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNpbmdsZXBhZ2ViYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaXNoaW5nYmFzaWMge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXBwZGVzaWduYmFzaWMge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJhbmRpbmdiYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IHR5cGUgUm91dGUgPSB7XG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBzaWRlYmFyOiBib29sZWFuLFxuICBpZD86IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGRlc2M/OiBzdHJpbmcsXG4gIEljb24/OiBKU1guRWxlbWVudCB8ICgoKSA9PiBKU1guRWxlbWVudCksXG59XG5cbmV4cG9ydCB0eXBlIFJvdXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGNoaWxkcmVuOiBSb3V0ZVtdLFxufVxuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXNbXSA9IFtcbiAge1xuICAgIHRpdGxlOiAnXHVENjQ4JyxcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICB0aXRsZTogJ1x1RDY0OCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICcnLFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVCRTE0XHVCODVDXHVBREY4JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25vdGljZXMnLFxuICAgICAgICB0aXRsZTogJ1x1QUNGNVx1QzlDMFx1QzBBQ1x1RDU2RCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGlkOiAnMTE2Njc2ODQ1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzU0Q1x1QjgyNFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLm5vdGljZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25ld3MnLFxuICAgICAgICB0aXRsZTogJ1x1QzBDOFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGlkOiAnMTE2Njc5MDc5JyxcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIGRlc2M6ICdcdUMwQzhcdUI4NUNcdUM2QjQgXHVDMThDXHVDMkREJyxcbiAgICAgICAgSWNvbjogSWNvbi5uZXdzLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUMxMUNcdUJFNDRcdUMyQTQnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvaG9tZXBhZ2UnLFxuICAgICAgICB0aXRsZTogJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVENjREXHVCQ0Y0XHVCOTdDIFx1QzcwNFx1RDU1QyBcdUM2RjlcdUMwQUNcdUM3NzRcdUQyQjggXHVBRDZDXHVDRDk1JyxcbiAgICAgICAgSWNvbjogSWNvbi5Ib21lcGFnZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL3NpbmdsZXBhZ2UnLFxuICAgICAgICB0aXRsZTogJ1x1QzJGMVx1QUUwMCBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1Qzc3NFx1QkNBNFx1RDJCOCwgXHVCNzlDXHVCNTI5IFx1QjJFOFx1Qzc3QyBcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1JyxcbiAgICAgICAgSWNvbjogSWNvbi5TaW5nbGVwYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvcHVibGlzaGluZycsXG4gICAgICAgIHRpdGxlOiAnXHVEMzdDXHVCRTE0XHVCOUFDXHVDMkYxIFx1QUMxQ1x1QkMxQycsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUI5QzhcdUQwNkNcdUM1QzUgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgSWNvbjogSWNvbi5QdWJsaXNoaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvYXBwZGVzaWduJyxcbiAgICAgICAgdGl0bGU6ICdcdUM1NzEgXHVCNTE0XHVDNzkwXHVDNzc4JyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QkFBOFx1QkMxNFx1Qzc3QyBcdUM1QjRcdUQ1MENcdUI5QUNcdUNGMDBcdUM3NzRcdUMxNTggXHVCNTE0XHVDNzkwXHVDNzc4JyxcbiAgICAgICAgSWNvbjogSWNvbi5BcHBkZXNpZ24sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9icmFuZGluZycsXG4gICAgICAgIHRpdGxlOiAnXHVCRTBDXHVCNzlDXHVCNERDIFx1QUMwMFx1Qzc3NFx1QjREQycsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUM2MjgsIFx1QzYyNFx1RDUwNFx1Qjc3Q1x1Qzc3OCBcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTI0XHVEMzA1JyxcbiAgICAgICAgSWNvbjogSWNvbi5CcmFuZGluZyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVBRTMwXHVEMEMwJyxcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9jb250YWN0JyxcbiAgICAgICAgdGl0bGU6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QkIzNFx1QzVDN1x1Qzc3NFx1QjRFMCBcdUM1NENcdUI4MjRcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5Db250YWN0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvcGxhbicsXG4gICAgICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzY5NFx1QUUwOFx1RDQ1QycsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVCQ0M0IFx1QUMwMFx1QUNBOVx1Qzc0NCBcdUM1NDhcdUIwQjRcdUQ1NzQgXHVCNERDXHVCODI0XHVDNjk0LicsXG4gICAgICAgIEljb246IEljb24uUHJpY2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9wcml2YWN5JyxcbiAgICAgICAgdGl0bGU6ICdcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDODE1XHVDQzQ1JyxcbiAgICAgICAgc2lkZWJhcjogZmFsc2UsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQ0IFx1QzIxOFx1QjlCRFx1MDBCN1x1QUNGNVx1QUMxQ1x1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLlByaXZhY3ksXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVDMTI0XHVDODE1JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NldHRpbmdzJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NThcdUFDQkRcdUMxMjRcdUM4MTUnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVBQzFDXHVDNzc4XHVENjU0IFx1QzEyNFx1QzgxNVx1Qzc0NCBcdUJDQzBcdUFDQkRcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLlNldHRpbmdzLFxuICAgICAgfVxuICAgIF0sXG4gIH0sXG5dXG5cbmNvbnN0IGV4Y2VwdFJvdXRlID0gWydwb3N0cycsICdzZXJ2aWNlcycsICdldmVudHMnXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2KHBhdGhuYW1lPzogc3RyaW5nKTogUm91dGUge1xuICBjb25zdCBtYXRjaGVkUm91dGUgPSByb3V0ZXMucmVkdWNlPFJvdXRlW10+KChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuY2hpbGRyZW4pLCBbXSkuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRobmFtZSA9PT0gcGF0aG5hbWUpXG4gIHJldHVybiBtYXRjaGVkUm91dGUgfHwgcm91dGVzWzBdLmNoaWxkcmVuWzBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmV2Um91dGUocGF0aG5hbWUgOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXBhdGhuYW1lKSByZXR1cm4gJy8nXG4gIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuICBwYXRocy5wb3AoKVxuICBjb25zdCBwcmV2Um91dGUgPSBwYXRocy5maWx0ZXIocCA9PiAhZXhjZXB0Um91dGUuaW5jbHVkZXMocCkpLmpvaW4oJy8nKVxuICByZXR1cm4gIXByZXZSb3V0ZSB8fCBwcmV2Um91dGUgPT09ICcnID8gJy8nIDogcHJldlJvdXRlXG59XG5cbmV4cG9ydCB0eXBlIEhlcm9TdHJpbmcgPSBbc3RyaW5nLCBzdHJpbmddW11cblxuZXhwb3J0IGNvbnN0IGhlcm9TdHJpbmc6IEhlcm9TdHJpbmcgPSBbXG4gIFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsICdcdUJEODBcdUQxMzAnXSxcbiAgWydcdUJFMENcdUI3OUNcdUI0REMgXHVBQzAwXHVDNzc0XHVCNERDJywgJ1x1QUU0Q1x1QzlDMCddLFxuXSIsICJ0eXBlIEJ1bGxldFNvbGlkUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1bGxldFNvbGlkKHsgY2xhc3NOYW1lIH06IEJ1bGxldFNvbGlkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00zODEuMiAxNzIuOEMzNzcuMSAxNjQuOSAzNjguOSAxNjAgMzYwIDE2MGgtMTU2LjZsNTAuODQtMTI3LjFjMi45NjktNy4zNzUgMi4wNjItMTUuNzgtMi40MDYtMjIuMzhTMjM5LjEgMCAyMzIgMGgtMTc2QzQzLjk3IDAgMzMuODEgOC45MDYgMzIuMjIgMjAuODRsLTMyIDI0MEMtLjcxNzkgMjY3LjcgMS4zNzYgMjc0LjYgNS45MzggMjc5LjhDMTAuNSAyODUgMTcuMDkgMjg4IDI0IDI4OGgxNDYuM2wtNDEuNzggMTk0LjFjLTIuNDA2IDExLjIyIDMuNDY5IDIyLjU2IDE0IDI3LjA5QzE0NS42IDUxMS40IDE0OC44IDUxMiAxNTIgNTEyYzcuNzE5IDAgMTUuMjItMy43NSAxOS44MS0xMC40NGwyMDgtMzA0QzM4NC44IDE5MC4yIDM4NS40IDE4MC43IDM4MS4yIDE3Mi44eicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc0xpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aCBkPSdNMCA0MTZDMCA0MDcuMiA3LjE2NCA0MDAgMTYgNDAwSDgxLjZDODkuMDEgMzYzLjUgMTIxLjMgMzM2IDE2MCAzMzZDMTk4LjcgMzM2IDIzMC4xIDM2My41IDIzOC40IDQwMEg0OTZDNTA0LjggNDAwIDUxMiA0MDcuMiA1MTIgNDE2QzUxMiA0MjQuOCA1MDQuOCA0MzIgNDk2IDQzMkgyMzguNEMyMzAuMSA0NjguNSAxOTguNyA0OTYgMTYwIDQ5NkMxMjEuMyA0OTYgODkuMDEgNDY4LjUgODEuNiA0MzJIMTZDNy4xNjQgNDMyIDAgNDI0LjggMCA0MTZWNDE2ek0yMDggNDE2QzIwOCAzODkuNSAxODYuNSAzNjggMTYwIDM2OEMxMzMuNSAzNjggMTEyIDM4OS41IDExMiA0MTZDMTEyIDQ0Mi41IDEzMy41IDQ2NCAxNjAgNDY0QzE4Ni41IDQ2NCAyMDggNDQyLjUgMjA4IDQxNnpNMzUyIDE3NkMzOTAuNyAxNzYgNDIyLjEgMjAzLjUgNDMwLjQgMjQwSDQ5NkM1MDQuOCAyNDAgNTEyIDI0Ny4yIDUxMiAyNTZDNTEyIDI2NC44IDUwNC44IDI3MiA0OTYgMjcySDQzMC40QzQyMi4xIDMwOC41IDM5MC43IDMzNiAzNTIgMzM2QzMxMy4zIDMzNiAyODEgMzA4LjUgMjczLjYgMjcySDE2QzcuMTY0IDI3MiAwIDI2NC44IDAgMjU2QzAgMjQ3LjIgNy4xNjQgMjQwIDE2IDI0MEgyNzMuNkMyODEgMjAzLjUgMzEzLjMgMTc2IDM1MiAxNzZ6TTQwMCAyNTZDNDAwIDIyOS41IDM3OC41IDIwOCAzNTIgMjA4QzMyNS41IDIwOCAzMDQgMjI5LjUgMzA0IDI1NkMzMDQgMjgyLjUgMzI1LjUgMzA0IDM1MiAzMDRDMzc4LjUgMzA0IDQwMCAyODIuNSA0MDAgMjU2ek00OTYgODBDNTA0LjggODAgNTEyIDg3LjE2IDUxMiA5NkM1MTIgMTA0LjggNTA0LjggMTEyIDQ5NiAxMTJIMjcwLjRDMjYyLjEgMTQ4LjUgMjMwLjcgMTc2IDE5MiAxNzZDMTUzLjMgMTc2IDEyMSAxNDguNSAxMTMuNiAxMTJIMTZDNy4xNjQgMTEyIDAgMTA0LjggMCA5NkMwIDg3LjE2IDcuMTY0IDgwIDE2IDgwSDExMy42QzEyMSA0My40OCAxNTMuMyAxNiAxOTIgMTZDMjMwLjcgMTYgMjYyLjEgNDMuNDggMjcwLjQgODBINDk2ek0xNDQgOTZDMTQ0IDEyMi41IDE2NS41IDE0NCAxOTIgMTQ0QzIxOC41IDE0NCAyNDAgMTIyLjUgMjQwIDk2QzI0MCA2OS40OSAyMTguNSA0OCAxOTIgNDhDMTY1LjUgNDggMTQ0IDY5LjQ5IDE0NCA5NnonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gSG9tZUxpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjc3LjQgNC4wMDJDMjgzLjUtMS4zMzQgMjkyLjUtMS4zMzQgMjk4LjYgNC4wMDJMMzg0IDc5LjM3VjU2QzM4NCA0Mi43NSAzOTQuNyAzMS4xIDQwOCAzMS4xSDQ4OEM1MDEuMyAzMS4xIDUxMiA0Mi43NSA1MTIgNTZWMTkyLjNMNTcwLjYgMjQ0QzU3Ny4yIDI0OS44IDU3Ny44IDI1OS4xIDU3MS4xIDI2Ni42QzU2Ni4yIDI3My4yIDU1NiAyNzMuOCA1NDkuNCAyNjcuMUw1MTIgMjM0LjFWNDMyQzUxMiA0NzYuMiA0NzYuMiA1MTIgNDMyIDUxMkgxNDRDOTkuODIgNTEyIDY0IDQ3Ni4yIDY0IDQzMlYyMzQuMUwyNi41OSAyNjcuMUMxOS45NiAyNzMuOCA5Ljg0OSAyNzMuMiA0LjAwMyAyNjYuNkMtMS44NDQgMjU5LjEtMS4yMTIgMjQ5LjggNS40MTQgMjQ0TDI3Ny40IDQuMDAyek00ODAgMTY0LjFWNjRINDE2VjEwNy42TDQ4MCAxNjQuMXpNOTYgMjA2LjdWNDMyQzk2IDQ1OC41IDExNy41IDQ4MCAxNDQgNDgwSDIwOFYzMjBDMjA4IDMwMi4zIDIyMi4zIDI4OCAyNDAgMjg4SDMzNkMzNTMuNyAyODggMzY4IDMwMi4zIDM2OCAzMjBWNDgwSDQzMkM0NTguNSA0ODAgNDgwIDQ1OC41IDQ4MCA0MzJWMjA2LjdMMjg4IDM3LjM0TDk2IDIwNi43ek0yNDAgMzIwVjQ4MEgzMzZWMzIwSDI0MHonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXJyb3dMZWZ0TGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yMDMuOSA0MDUuM2M1Ljg3NyA2LjU5NCA1LjM2MSAxNi42OS0xLjE4OCAyMi42MmMtNi41NjIgNS45MDYtMTYuNjkgNS4zNzUtMjIuNTktMS4xODhMMzYuMSAyNjYuN2MtNS40NjktNi4xMjUtNS40NjktMTUuMzEgMC0yMS40NGwxNDQtMTU5LjFjNS45MDYtNi41NjIgMTYuMDMtNy4wOTQgMjIuNTktMS4xODhjNi45MTggNi4yNzEgNi43ODMgMTYuMzkgMS4xODggMjIuNjJMNjkuNTMgMjU2TDIwMy45IDQwNS4zeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgInR5cGUgTG9nb1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dvKHsgY2xhc3NOYW1lID0gJ3ctMTYgaC0xMScgfTogTG9nb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD0nMCAwIDYwIDQ0Jz5cbiAgICAgIDxnIHN0cm9rZT0nbm9uZScgc3Ryb2tlV2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGxSdWxlPSdldmVub2RkJz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE4LjAwMDAwMCwgLTI2LjAwMDAwMCknIGZpbGxSdWxlPSdub256ZXJvJz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxOC4wMDAwMDAsIDI2LjAwMDAwMCknPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTAuOTM2NjMyODM1LDMxLjAwNDIxOTQgQzAuMzEyMjEwOTQ1LDMxLjAwNDIxOTQgMCwzMC42OTExNTU4IDAsMzAuMDY1MDI4NSBMMCwxNS45NzcxNjU1IEMwLDE1LjM1MTAzODMgMC4zMTIyMTA5NDUsMTUuMDM3OTc0NyAwLjkzNjYzMjgzNSwxNS4wMzc5NzQ3IEw5LjM2NjMyODM1LDE1LjAzNzk3NDcgQzExLjExNDcwOTYsMTUuMDM3OTc0NyAxMi40ODg0Mzc4LDE1LjQ3MjM1MDUgMTMuNDg3NTEyOCwxNi4zNDExMDIgQzE0LjQ4NjU4NzksMTcuMjA5ODUzNiAxNC45ODYxMjU0LDE4LjQxOTA2MTggMTQuOTg2MTI1NCwxOS45Njg3MjY3IEMxNC45ODYxMjU0LDIwLjM3NTcwOTQgMTQuOTI3NTg1OCwyMC43NDM1NTkyIDE0LjgxMDUwNjcsMjEuMDcyMjc2IEMxNC42OTM0Mjc2LDIxLjQwMDk5MjggMTQuNTcyNDQ1OSwyMS42NzQ5MjM1IDE0LjQ0NzU2MTUsMjEuODk0MDY4IEMxNC4yOTE0NTYsMjIuMTYwMTcyMSAxNC4xMTk3NCwyMi4zOTQ5Njk4IDEzLjkzMjQxMzQsMjIuNTk4NDYxMiBDMTQuMjI5MDEzOCwyMi43NzA2NDYxIDE0LjUwMjE5ODQsMjMuMDEzMjcwNSAxNC43NTE5NjcyLDIzLjMyNjMzNDEgQzE0Ljk3MDUxNDgsMjMuNTkyNDM4MiAxNS4xNjU2NDY3LDIzLjk0ODU0OCAxNS4zMzczNjI3LDI0LjM5NDY2MzcgQzE1LjUwOTA3ODcsMjQuODQwNzc5MyAxNS41OTQ5MzY3LDI1LjQwMDM4MDYgMTUuNTk0OTM2NywyNi4wNzM0Njc0IEMxNS41OTQ5MzY3LDI2Ljc3Nzg2MDUgMTUuNDk3MzcwOCwyNy40MzEzODA4IDE1LjMwMjIzODksMjguMDM0MDI4MyBDMTUuMTA3MTA3MSwyOC42MzY2NzU4IDE0Ljc3MTQ4MDMsMjkuMTU3MTQ0IDE0LjI5NTM1ODYsMjkuNTk1NDMzMSBDMTMuODE5MjM3LDMwLjAzMzcyMjIgMTMuMTgzMTA3MiwzMC4zNzgwOTIyIDEyLjM4Njk2OTIsMzAuNjI4NTQzMSBDMTEuNTkwODMxMywzMC44Nzg5OTQgMTAuNTgzOTUxLDMxLjAwNDIxOTQgOS4zNjYzMjgzNSwzMS4wMDQyMTk0IEwwLjkzNjYzMjgzNSwzMS4wMDQyMTk0IFogTTguMzEyNjE2NDEsMjEuMTQyNzE1MyBDOC41MzExNjQwOCwyMS4xNDI3MTUzIDguNzIyMzkzMjgsMjEuMDYwNTM2MSA4Ljg4NjMwNDAzLDIwLjg5NjE3NzcgQzkuMDUwMjE0NzcsMjAuNzMxODE5MyA5LjEzMjE3MDE0LDIwLjU0MDA2NzggOS4xMzIxNzAxNCwyMC4zMjA5MjMzIEM5LjEzMjE3MDE0LDIwLjEwMTc3ODggOS4wNTAyMTQ3NywxOS45MTAwMjczIDguODg2MzA0MDMsMTkuNzQ1NjY4OSBDOC43MjIzOTMyOCwxOS41ODEzMTA1IDguNTMxMTY0MDgsMTkuNDk5MTMxMyA4LjMxMjYxNjQxLDE5LjQ5OTEzMTMgTDYuMDg4MTEzNDMsMTkuNDk5MTMxMyBDNS45MzIwMDc5NiwxOS40OTkxMzEzIDUuODUzOTU1MjIsMTkuNTc3Mzk3MiA1Ljg1Mzk1NTIyLDE5LjczMzkyOSBMNS44NTM5NTUyMiwyMC45MDc5MTc2IEM1Ljg1Mzk1NTIyLDIxLjA2NDQ0OTQgNS45MzIwMDc5NiwyMS4xNDI3MTUzIDYuMDg4MTEzNDMsMjEuMTQyNzE1MyBMOC4zMTI2MTY0MSwyMS4xNDI3MTUzIFogTTguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBDOC43NjUzMjIyOCwyNi41NDMwNjI4IDguOTU2NTUxNDksMjYuNDYwODgzNiA5LjEyMDQ2MjIzLDI2LjI5NjUyNTIgQzkuMjg0MzcyOTgsMjYuMTMyMTY2OCA5LjM2NjMyODM1LDI1Ljk0MDQxNTMgOS4zNjYzMjgzNSwyNS43MjEyNzA4IEM5LjM2NjMyODM1LDI1LjUwMjEyNjMgOS4yODQzNzI5OCwyNS4zMTAzNzQ4IDkuMTIwNDYyMjMsMjUuMTQ2MDE2NCBDOC45NTY1NTE0OSwyNC45ODE2NTggOC43NjUzMjIyOCwyNC44OTk0Nzg4IDguNTQ2Nzc0NjIsMjQuODk5NDc4OCBMNi4wODgxMTM0MywyNC44OTk0Nzg4IEM1LjkzMjAwNzk2LDI0Ljg5OTQ3ODggNS44NTM5NTUyMiwyNC45Nzc3NDQ3IDUuODUzOTU1MjIsMjUuMTM0Mjc2NSBMNS44NTM5NTUyMiwyNi4zMDgyNjUxIEM1Ljg1Mzk1NTIyLDI2LjQ2NDc5NjkgNS45MzIwMDc5NiwyNi41NDMwNjI4IDYuMDg4MTEzNDMsMjYuNTQzMDYyOCBMOC41NDY3NzQ2MiwyNi41NDMwNjI4IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWInXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00xNi4zMzc1NTI3LDIzLjAyMTA5NyBDMTYuMzM3NTUyNywyMS44Njk4MzQ4IDE2LjU1MzI0NDEsMjAuNzg0NjkyMyAxNi45ODQ2MjY4LDE5Ljc2NTY2OTYgQzE3LjQxNjAwOTUsMTguNzQ2NjQ2OSAxOC4wMDgxODAyLDE3Ljg1OTg2MzggMTguNzYxMTM5MSwxNy4xMDUzMjAyIEMxOS41MTQwOTgsMTYuMzUwNzc2NyAyMC40MDQzMTUsMTUuNzU1Njk4NiAyMS40MzE3OTAxLDE1LjMyMDA4NTggQzIyLjQ1OTI2NTMsMTQuODg0NDczIDIzLjU3NjkzODYsMTQuNjY2NjY2NyAyNC43ODQ4MTAxLDE0LjY2NjY2NjcgQzI1Ljk3Njk5NSwxNC42NjY2NjY3IDI3LjA5MDc0NjcsMTQuODg0NDczIDI4LjEyNjA2NTEsMTUuMzIwMDg1OCBDMjkuMTYxMzgzNiwxNS43NTU2OTg2IDMwLjA1NTUyMjMsMTYuMzUwNzc2NyAzMC44MDg0ODExLDE3LjEwNTMyMDIgQzMxLjU2MTQ0LDE3Ljg1OTg2MzggMzIuMTUzNjEwOCwxOC43NDY2NDY5IDMyLjU4NDk5MzUsMTkuNzY1NjY5NiBDMzMuMDE2Mzc2MiwyMC43ODQ2OTIzIDMzLjIzMjA2NzUsMjEuODY5ODM0OCAzMy4yMzIwNjc1LDIzLjAyMTA5NyBDMzMuMjMyMDY3NSwyNC4xNzIzNTkzIDMzLjAxNjM3NjIsMjUuMjU3NTAxOCAzMi41ODQ5OTM1LDI2LjI3NjUyNDUgQzMyLjE1MzYxMDgsMjcuMjk1NTQ3MiAzMS41NjE0NCwyOC4xODIzMzAzIDMwLjgwODQ4MTEsMjguOTM2ODczOSBDMzAuMDU1NTIyMywyOS42OTE0MTc0IDI5LjE2MTM4MzYsMzAuMjg2NDk1NSAyOC4xMjYwNjUxLDMwLjcyMjEwODMgQzI3LjA5MDc0NjcsMzEuMTU3NzIxIDI1Ljk3Njk5NSwzMS4zNzU1Mjc0IDI0Ljc4NDgxMDEsMzEuMzc1NTI3NCBDMjMuNTc2OTM4NiwzMS4zNzU1Mjc0IDIyLjQ1OTI2NTMsMzEuMTU3NzIxIDIxLjQzMTc5MDEsMzAuNzIyMTA4MyBDMjAuNDA0MzE1LDMwLjI4NjQ5NTUgMTkuNTE0MDk4LDI5LjY5MTQxNzQgMTguNzYxMTM5MSwyOC45MzY4NzM5IEMxOC4wMDgxODAyLDI4LjE4MjMzMDMgMTcuNDE2MDA5NSwyNy4yOTU1NDcyIDE2Ljk4NDYyNjgsMjYuMjc2NTI0NSBDMTYuNTUzMjQ0MSwyNS4yNTc1MDE4IDE2LjMzNzU1MjcsMjQuMTcyMzU5MyAxNi4zMzc1NTI3LDIzLjAyMTA5NyBaIE0yMi40MzE4MTM2LDIzLjAyMTA5NyBDMjIuNDMxODEzNiwyMy43NTIzMDQyIDIyLjYzMTgxODMsMjQuMzU1MTYxMSAyMy4wMzE4Mjc3LDI0LjgyOTY2NzkgQzIzLjQzMTgzNzEsMjUuMzA0MTc0NiAyNC4wMTYxNjQ2LDI1LjU0MTQyOCAyNC43ODQ4MTAxLDI1LjU0MTQyOCBDMjUuNTM3NzY5LDI1LjU0MTQyOCAyNi4xMTQyNTMxLDI1LjMwNDE3NDYgMjYuNTE0MjYyNSwyNC44Mjk2Njc5IEMyNi45MTQyNzE5LDI0LjM1NTE2MTEgMjcuMTE0Mjc2NiwyMy43NTIzMDQyIDI3LjExNDI3NjYsMjMuMDIxMDk3IEMyNy4xMTQyNzY2LDIyLjI4OTg4OTkgMjYuOTE0MjcxOSwyMS42ODcwMzMgMjYuNTE0MjYyNSwyMS4yMTI1MjYyIEMyNi4xMTQyNTMxLDIwLjczODAxOTUgMjUuNTM3NzY5LDIwLjUwMDc2NjEgMjQuNzg0ODEwMSwyMC41MDA3NjYxIEMyNC4wMTYxNjQ2LDIwLjUwMDc2NjEgMjMuNDMxODM3MSwyMC43MzgwMTk1IDIzLjAzMTgyNzcsMjEuMjEyNTI2MiBDMjIuNjMxODE4MywyMS42ODcwMzMgMjIuNDMxODEzNiwyMi4yODk4ODk5IDIyLjQzMTgxMzYsMjMuMDIxMDk3IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLW8nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J000NC41NTY5NjIsMjUuNjAzODcxOSBDNDUuMTc1ODA4NywyNS42MDM4NzE5IDQ1LjQ4NTIzMjEsMjUuOTE2OTM1NiA0NS40ODUyMzIxLDI2LjU0MzA2MjggTDQ1LjQ4NTIzMjEsMzAuMDY1MDI4NSBDNDUuNDg1MjMyMSwzMC42OTExNTU4IDQ1LjE3NTgwODcsMzEuMDA0MjE5NCA0NC41NTY5NjIsMzEuMDA0MjE5NCBMMzUuMjc0MjYxNiwzMS4wMDQyMTk0IEMzNC42NTU0MTQ5LDMxLjAwNDIxOTQgMzQuMzQ1OTkxNiwzMC42OTExNTU4IDM0LjM0NTk5MTYsMzAuMDY1MDI4NSBMMzQuMzQ1OTkxNiwxNS45NzcxNjU1IEMzNC4zNDU5OTE2LDE1LjM1MTAzODMgMzQuNjU1NDE0OSwxNS4wMzc5NzQ3IDM1LjI3NDI2MTYsMTUuMDM3OTc0NyBMMzkuMjE5NDA5MywxNS4wMzc5NzQ3IEMzOS44MzgyNTYsMTUuMDM3OTc0NyA0MC4xNDc2NzkzLDE1LjM1MTAzODMgNDAuMTQ3Njc5MywxNS45NzcxNjU1IEw0MC4xNDc2NzkzLDI0Ljg5OTQ3ODggQzQwLjE0NzY3OTMsMjUuMTk2ODg5MiA0MC4xOTAyMjUsMjUuMzg4NjQwNyA0MC4yNzUzMTY1LDI1LjQ3NDczMzIgQzQwLjM2MDQwNzksMjUuNTYwODI1NyA0MC41NDk5Mjk3LDI1LjYwMzg3MTkgNDAuODQzODgxOSwyNS42MDM4NzE5IEw0NC41NTY5NjIsMjUuNjAzODcxOSBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1sJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNNDcuMzQ4MTc0LDIwLjQzODMyMjIgQzQ2LjcyNTA1OTQsMjAuNDM4MzIyMiA0Ni40MTM1MDIxLDIwLjEyNTI1ODUgNDYuNDEzNTAyMSwxOS40OTkxMzEzIEw0Ni40MTM1MDIxLDE1Ljk3NzE2NTUgQzQ2LjQxMzUwMjEsMTUuMzUxMDM4MyA0Ni43MjUwNTk0LDE1LjAzNzk3NDcgNDcuMzQ4MTc0LDE1LjAzNzk3NDcgTDU5LjAzMTU3MjgsMTUuMDM3OTc0NyBDNTkuNjU0Njg3NCwxNS4wMzc5NzQ3IDU5Ljk2NjI0NDcsMTUuMzUxMDM4MyA1OS45NjYyNDQ3LDE1Ljk3NzE2NTUgTDU5Ljk2NjI0NDcsMTkuNDk5MTMxMyBDNTkuOTY2MjQ0NywyMC4xMjUyNTg1IDU5LjY1NDY4NzQsMjAuNDM4MzIyMiA1OS4wMzE1NzI4LDIwLjQzODMyMjIgTDU2LjgxMTcyNywyMC40MzgzMjIyIEM1Ni41MTU3NDc2LDIwLjQzODMyMjIgNTYuMzI0OTE4OCwyMC40ODEzNjg0IDU2LjIzOTI0MDUsMjAuNTY3NDYwOSBDNTYuMTUzNTYyMiwyMC42NTM1NTM0IDU2LjExMDcyMzEsMjAuODQ1MzA0OSA1Ni4xMTA3MjMxLDIxLjE0MjcxNTMgTDU2LjExMDcyMzEsMzAuMDY1MDI4NSBDNTYuMTEwNzIzMSwzMC42OTExNTU4IDU1Ljc5OTE2NTgsMzEuMDA0MjE5NCA1NS4xNzYwNTEyLDMxLjAwNDIxOTQgTDUxLjIwMzY5NTYsMzEuMDA0MjE5NCBDNTAuNTgwNTgxLDMxLjAwNDIxOTQgNTAuMjY5MDIzNywzMC42OTExNTU4IDUwLjI2OTAyMzcsMzAuMDY1MDI4NSBMNTAuMjY5MDIzNywyMS4xNDI3MTUzIEM1MC4yNjkwMjM3LDIwLjg0NTMwNDkgNTAuMjI2MTg0NiwyMC42NTM1NTM0IDUwLjE0MDUwNjMsMjAuNTY3NDYwOSBDNTAuMDU0ODI4MSwyMC40ODEzNjg0IDQ5Ljg2Mzk5OTIsMjAuNDM4MzIyMiA0OS41NjgwMTk4LDIwLjQzODMyMjIgTDQ3LjM0ODE3NCwyMC40MzgzMjIyIFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00yMy44MzUxMTg1LDM5LjE0ODUyNTYgQzIzLjgzNTExODUsMzkuNDExMzEzOCAyMy44NzI5NjMzLDM5LjYyMzU2NTggMjMuOTQ4NjUzLDM5Ljc4NTI4MTYgQzI0LjAyNDM0MjcsMzkuOTQ2OTk3NCAyNC4xMjAyMTY0LDQwLjA3MDgxMTEgMjQuMjM2MjczOSw0MC4xNTY3MjI2IEMyNC4zNTIzMzE1LDQwLjI0MjYzNDIgMjQuNDczNDM1LDQwLjI5ODIyNCAyNC41OTk1ODQ2LDQwLjMyMzQ5MjEgQzI0LjcyNTczNDEsNDAuMzQ4NzYwMiAyNC44NDQzMTQ2LDQwLjM2MTM5NDIgMjQuOTU1MzI2Miw0MC4zNjEzOTQyIEMyNS4wNjYzMzc4LDQwLjM2MTM5NDIgMjUuMTg5OTY0Myw0MC4zNDg3NjAyIDI1LjMyNjIwNTgsNDAuMzIzNDkyMSBDMjUuNDYyNDQ3Myw0MC4yOTgyMjQgMjUuNTg4NTk2OCw0MC4yNDI2MzQyIDI1LjcwNDY1NDMsNDAuMTU2NzIyNiBDMjUuODIwNzExOSw0MC4wNzA4MTExIDI1LjkxNjU4NTUsMzkuOTQ2OTk3NCAyNS45OTIyNzUyLDM5Ljc4NTI4MTYgQzI2LjA2Nzk2NDksMzkuNjIzNTY1OCAyNi4xMDU4MDk4LDM5LjQxMTMxMzggMjYuMTA1ODA5OCwzOS4xNDg1MjU2IEwyNi4xMDU4MDk4LDM0LjAyNDE1NTggQzI2LjEwNTgwOTgsMzMuNjE5ODY2MyAyNi4zMDc2NDksMzMuNDE3NzIxNSAyNi43MTEzMjc1LDMzLjQxNzcyMTUgTDI5LjI4NDc3NzcsMzMuNDE3NzIxNSBDMjkuNjg4NDU2MSwzMy40MTc3MjE1IDI5Ljg5MDI5NTQsMzMuNjE5ODY2MyAyOS44OTAyOTU0LDM0LjAyNDE1NTggTDI5Ljg5MDI5NTQsMzkuMTc4ODQ3MyBDMjkuODkwMjk1NCwzOS44OTY0NjEzIDI5Ljc5NDQyMTcsNDAuNTUwOTA0OSAyOS42MDI2NzQ1LDQxLjE0MjE3ODQgQzI5LjQxMDkyNzIsNDEuNzMzNDUxOCAyOS4xMTMyMTQzLDQyLjI0MTM0MDUgMjguNzA5NTM1OSw0Mi42NjU4NDQ1IEMyOC4zMDU4NTc0LDQzLjA5MDM0ODYgMjcuNzkzNjkwNCw0My40MTg4MzM4IDI3LjE3MzAzNDcsNDMuNjUxMzAwMyBDMjYuNTUyMzc5MSw0My44ODM3NjY4IDI1LjgxODE4ODksNDQgMjQuOTcwNDY0MSw0NCBDMjQuMTIyNzM5NCw0NCAyMy4zODg1NDkyLDQzLjg4Mzc2NjggMjIuNzY3ODkzNSw0My42NTEzMDAzIEMyMi4xNDcyMzc5LDQzLjQxODgzMzggMjEuNjM1MDcwOSw0My4wOTAzNDg2IDIxLjIzMTM5MjQsNDIuNjY1ODQ0NSBDMjAuODI3NzEzOSw0Mi4yNDEzNDA1IDIwLjUzMDAwMTEsNDEuNzMzNDUxOCAyMC4zMzgyNTM4LDQxLjE0MjE3ODQgQzIwLjE0NjUwNjUsNDAuNTUwOTA0OSAyMC4wNTA2MzI5LDM5Ljg5NjQ2MTMgMjAuMDUwNjMyOSwzOS4xNzg4NDczIEwyMC4wNTA2MzI5LDM0LjAyNDE1NTggQzIwLjA1MDYzMjksMzMuNjE5ODY2MyAyMC4yNTI0NzIxLDMzLjQxNzcyMTUgMjAuNjU2MTUwNiwzMy40MTc3MjE1IEwyMy4yMjk2MDA4LDMzLjQxNzcyMTUgQzIzLjYzMzI3OTIsMzMuNDE3NzIxNSAyMy44MzUxMTg1LDMzLjYxOTg2NjMgMjMuODM1MTE4NSwzNC4wMjQxNTU4IEwyMy44MzUxMTg1LDM5LjE0ODUyNTYgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tdSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXNlY29uZGFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMzEuMjQ3MTc3MiwzNC4zOTM3NzAyIEMzMS4xNzgyMDUyLDM0LjI5MzY2MjYgMzEuMTQzNzE5MiwzNC4xNjg1MjgyIDMxLjE0MzcxOTIsMzQuMDE4MzY2OCBDMzEuMTQzNzE5MiwzMy42MTc5MzY2IDMxLjM0MDc4MjEsMzMuNDE3NzIxNSAzMS43MzQ5MDgsMzMuNDE3NzIxNSBMMzQuOTcxNjY2MywzMy40MTc3MjE1IEMzNS4xNTg4NzYxLDMzLjQxNzcyMTUgMzUuMzAxNzQ2NywzMy40NzUyODM0IDM1LjQwMDI3ODIsMzMuNTkwNDA3IEMzNS40OTg4MDk2LDMzLjcwNTUzMDcgMzUuNTkyNDE0NSwzMy44NDgxODQgMzUuNjgxMDkyOCwzNC4wMTgzNjY4IEwzNi4yNzIyODE1LDM1LjExNDU0NDYgTDM2Ljk2NjkyODMsMzQuMDE4MzY2OCBDMzcuMDc1MzEyOSwzMy44NDgxODQgMzcuMTc4NzcwOSwzMy43MDU1MzA3IDM3LjI3NzMwMjQsMzMuNTkwNDA3IEMzNy4zNzU4MzM5LDMzLjQ3NTI4MzQgMzcuNDk4OTk4MiwzMy40MTc3MjE1IDM3LjY0Njc5NTQsMzMuNDE3NzIxNSBMNDAuNjMyMjk4NSwzMy40MTc3MjE1IEM0MS4wMjY0MjQzLDMzLjQxNzcyMTUgNDEuMjIzNDg3MywzMy42MTc5MzY2IDQxLjIyMzQ4NzMsMzQuMDE4MzY2OCBDNDEuMjIzNDg3MywzNC4xNjg1MjgyIDQxLjE4OTAwMTIsMzQuMjkzNjYyNiA0MS4xMjAwMjkyLDM0LjM5Mzc3MDIgTDM4LjY5NjE1NTQsMzguMTE3NzcxMiBMNDEuMzEyMTY1Niw0Mi42Njc2NTk1IEM0MS4zNzEyODQ0LDQyLjc3Nzc3NzggNDEuNDAwODQzOSw0Mi44OTc5MDY4IDQxLjQwMDg0MzksNDMuMDI4MDQ2NyBDNDEuNDAwODQzOSw0My40Mjg0NzY5IDQxLjIwMzc4MSw0My42Mjg2OTIgNDAuODA5NjU1MSw0My42Mjg2OTIgTDM3Ljc5NDU5MjYsNDMuNjI4NjkyIEMzNy42MjcwODkxLDQzLjYyODY5MiAzNy40ODkxNDUsNDMuNTY4NjI3NSAzNy4zODA3NjA0LDQzLjQ0ODQ5ODQgQzM3LjI3MjM3NTgsNDMuMzI4MzY5MyAzNy4xNjM5OTEyLDQzLjE4ODIxODcgMzcuMDU1NjA2Niw0My4wMjgwNDY3IEwzNi4wODAxNDUyLDQxLjMzMTIyMzYgTDM1LjE2MzgwMjcsNDMuMDI4MDQ2NyBDMzUuMDU1NDE4MSw0My4xODgyMTg3IDM0Ljk1NDQyMzMsNDMuMzI4MzY5MyAzNC44NjA4MTg0LDQzLjQ0ODQ5ODQgQzM0Ljc2NzIxMzUsNDMuNTY4NjI3NSAzNC42MjE4Nzk2LDQzLjYyODY5MiAzNC40MjQ4MTY3LDQzLjYyODY5MiBMMzEuNDA5NzU0MSw0My42Mjg2OTIgQzMxLjAxNTYyODMsNDMuNjI4NjkyIDMwLjgxODU2NTQsNDMuNDI4NDc2OSAzMC44MTg1NjU0LDQzLjAyODA0NjcgQzMwLjgxODU2NTQsNDIuOTA3OTE3NiAzMC44NDMxOTgzLDQyLjc5Nzc5OTMgMzAuODkyNDY0LDQyLjY5NzY5MTcgTDMzLjY1NjI3MTQsMzguMTAyNzU1IEwzMS4yNDcxNzcyLDM0LjM5Mzc3MDIgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28teCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXNlY29uZGFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMzUuNTU2NDkwMiw1LjM4ODYwNzU5IEMzNS40MjU2NTkyLDUuMTQyMjUzNDMgMzUuMTYzOTk3MSw0Ljk4OTQ1MTQ4IDM0Ljg3OTk5ODEsNC45ODk0NTE0OCBMMjkuODgyODkxNSw0Ljk4OTQ1MTQ4IEwzMS41MDUxOTYxLDEuMDI1OTU1OTYgQzMxLjU5OTkzNjksMC43OTU5NzM0MzEgMzEuNTcwOTk0NSwwLjUzMzg3MTMwOCAzMS40Mjg0MjA2LDAuMzI4MDU2NDM1IEMzMS4yODU4NDY3LDAuMTIyMjQxNTYxIDMxLjAyMjA3ODcsMCAzMC43OTU1MTc2LDAgTDI1LjE3OTM1NywwIEMyNC43OTU0Nzk2LDAgMjQuNDcxMjc0LDAuMjc3NzI1MzQzIDI0LjQyMDUzNzEsMC42NDk4NzYwNTUgTDIzLjM5OTQxNyw4LjEzNDA1MzI3IEMyMy4zNjk0ODg2LDguMzQ3OTc2IDIzLjQzNjMwNDksOC41NjMxNDYxIDIzLjU4MTg3ODQsOC43MjUzMDMyNyBDMjMuNzI3NDUxOCw4Ljg4NzQ2MDQ0IDIzLjkzNzczODcsOC45ODEwMTI2NiAyNC4xNTgyMzY5LDguOTgxMDEyNjYgTDI4LjgyNjY3MDQsOC45ODEwMTI2NiBMMjcuNDkzNDcwNCwxNS4wMzM4NDEgQzI3LjQxNjY5NSwxNS4zODM3MjYzIDI3LjYwNDE2NjIsMTUuNzM3MzUzNiAyNy45NDAyMTA1LDE1Ljg3ODYxNzUgQzI4LjAzODQ5MzMsMTUuOTQ3NTM0MyAyOC4xNDA2MDUzLDE1Ljk2NjI0NDcgMjguMjQyNzE3MywxNS45NjYyNDQ3IEMyOC40ODkwMzA2LDE1Ljk2NjI0NDcgMjguNzI4Mzg3NiwxNS44NDkzMDQ1IDI4Ljg3NDg1NDUsMTUuNjQwNjgzIEwzNS41MTIxMzUzLDYuMTYwNzI1MjEgQzM1LjY3MTM2NjIsNS45MzEyMTA0NCAzNS42OTA1MTIyLDUuNjM0OTYxNzYgMzUuNTU2NDkwMiw1LjM4ODYwNzU5IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWljb24nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTY0MCA0NjR2MzJhMTYgMTYgMCAwIDEtMTYgMTZIMTZhMTYgMTYgMCAwIDEtMTYtMTZ2LTMyYTE2IDE2IDAgMCAxIDE2LTE2aDYwOGExNiAxNiAwIDAgMSAxNiAxNnonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTQwLjY4IDQ0OGwyMzkuNzktMzMwLjI1LTUzLjQxLTczLjU1YTE2IDE2IDAgMCAxIDMuNTQtMjIuMzVsMjUuODgtMTguOGExNiAxNiAwIDAgMSAyMi4zNSAzLjU1TDMyMCA2My4zbDQxLjE2LTU2LjY5YTE2IDE2IDAgMCAxIDIyLjM1LTMuNTVsMjUuOSAxOC43OUExNiAxNiAwIDAgMSA0MTMgNDQuMmwtNTMuNDEgNzMuNTVMNTk5LjMyIDQ0OGgtMTYzTDMyMCAyODggMjAzLjY0IDQ0OHonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTaW5nbGVwYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMzUyIDI1NmEyNCAyNCAwIDEgMCAyNCAyNCAyNCAyNCAwIDAgMC0yNC0yNHptLTE5NC40OCAxNmgzN0wxNzYgMjE4Ljc4ek00NjQgNjRINDhhNDggNDggMCAwIDAtNDggNDh2Mjg4YTQ4IDQ4IDAgMCAwIDQ4IDQ4aDQxNmE0OCA0OCAwIDAgMCA0OC00OFYxMTJhNDggNDggMCAwIDAtNDgtNDh6TTI1MC41OCAzNTJoLTE2Ljk0YTE2IDE2IDAgMCAxLTE1LjEyLTEwLjc1TDIxMS4xNSAzMjBoLTcwLjI5bC03LjM4IDIxLjI1QTE2IDE2IDAgMCAxIDExOC4zNiAzNTJoLTE2Ljk0YTE2IDE2IDAgMCAxLTE1LjEyLTIxLjI1TDE0MCAxNzYuMTJBMjQgMjQgMCAwIDEgMTYyLjY3IDE2MGgyNi42NkEyNCAyNCAwIDAgMSAyMTIgMTc2LjEzbDUzLjY5IDE1NC42MkExNiAxNiAwIDAgMSAyNTAuNTggMzUyek00MjQgMzM2YTE2IDE2IDAgMCAxLTE2IDE2aC0xNmExNS43NCAxNS43NCAwIDAgMS0xMi01LjY4QTcyIDcyIDAgMSAxIDM1MiAyMDhhNzEuMDUgNzEuMDUgMCAwIDEgMjQgNC40MlYxNzZhMTYgMTYgMCAwIDEgMTYtMTZoMTZhMTYgMTYgMCAwIDEgMTYgMTZ6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00yMTIgMTc2LjEzQTI0IDI0IDAgMCAwIDE4OS4zMyAxNjBoLTI2LjY2QTI0IDI0IDAgMCAwIDE0MCAxNzYuMTJMODYuMyAzMzAuNzVBMTYgMTYgMCAwIDAgMTAxLjQyIDM1MmgxNi45NGExNiAxNiAwIDAgMCAxNS4xMi0xMC43NWw3LjM4LTIxLjI1aDcwLjI5bDcuMzcgMjEuMjVBMTYgMTYgMCAwIDAgMjMzLjY0IDM1MmgxNi45NGExNiAxNiAwIDAgMCAxNS4xMS0yMS4yNXpNMTU3LjUyIDI3MkwxNzYgMjE4Ljc4IDE5NC40OCAyNzJ6TTQwOCAxNjBoLTE2YTE2IDE2IDAgMCAwLTE2IDE2djM2LjQyYTcxLjA1IDcxLjA1IDAgMCAwLTI0LTQuNDIgNzIgNzIgMCAxIDAgMjggMTM4LjMyIDE1Ljc0IDE1Ljc0IDAgMCAwIDEyIDUuNjhoMTZhMTYgMTYgMCAwIDAgMTYtMTZWMTc2YTE2IDE2IDAgMCAwLTE2LTE2em0tNTYgMTQ0YTI0IDI0IDAgMSAxIDI0LTI0IDI0IDI0IDAgMCAxLTI0IDI0eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFB1Ymxpc2hpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjU2IDB2MTI4aDEyOEwyNTYgMHpNMTU0LjEgMjU3LjhjLTcuODEyLTcuODEyLTIwLjQ3LTcuODEyLTI4LjI4IDBsLTQ4IDQ4Yy03LjgxMiA3LjgxMi03LjgxMiAyMC41IDAgMjguMzFsNDggNDhDMTI5LjggMzg2LjEgMTM0LjkgMzg4IDE0MCAzODhzMTAuMjMtMS45MzggMTQuMTQtNS44NDRjNy44MTItNy44MTIgNy44MTItMjAuNSAwLTI4LjMxTDEyMC4zIDMyMGwzMy44Ni0zMy44NEMxNjEuMSAyNzguMyAxNjEuMSAyNjUuNyAxNTQuMSAyNTcuOHpNMjU4LjEgMjU3LjhjLTcuODEyLTcuODEyLTIwLjQ3LTcuODEyLTI4LjI4IDBzLTcuODEyIDIwLjUgMCAyOC4zMUwyNjMuNyAzMjBsLTMzLjg2IDMzLjg0Yy03LjgxMiA3LjgxMi03LjgxMiAyMC41IDAgMjguMzFDMjMzLjggMzg2LjEgMjM4LjkgMzg4IDI0NCAzODhzMTAuMjMtMS45MzggMTQuMTQtNS44NDRsNDgtNDhjNy44MTItNy44MTIgNy44MTItMjAuNSAwLTI4LjMxTDI1OC4xIDI1Ny44eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjU2IDEyOFYwSDQ4QzIxLjQ5IDAgMCAyMS40OSAwIDQ4djQxNkMwIDQ5MC41IDIxLjQ5IDUxMiA0OCA1MTJoMjg4YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMTI4SDI1NnpNMTU0LjEgMzUzLjhjNy44MTIgNy44MTIgNy44MTIgMjAuNSAwIDI4LjMxQzE1MC4yIDM4Ni4xIDE0NS4xIDM4OCAxNDAgMzg4cy0xMC4yMy0xLjkzOC0xNC4xNC01Ljg0NGwtNDgtNDhjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMWw0OC00OGM3LjgxMi03LjgxMiAyMC40Ny03LjgxMiAyOC4yOCAwczcuODEyIDIwLjUgMCAyOC4zMUwxMjAuMyAzMjBMMTU0LjEgMzUzLjh6TTMwNi4xIDMzNC4ybC00OCA0OEMyNTQuMiAzODYuMSAyNDkuMSAzODggMjQ0IDM4OHMtMTAuMjMtMS45MzgtMTQuMTQtNS44NDRjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMUwyNjMuNyAzMjBsLTMzLjg2LTMzLjg0Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFzMjAuNDctNy44MTIgMjguMjggMGw0OCA0OEMzMTMuMSAzMTMuNyAzMTMuMSAzMjYuMyAzMDYuMSAzMzQuMnonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEFwcGRlc2lnbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J000MTIuNyAyNTYuMUMzODcuMSAyODAuMyAzNTcuNyAyOTguOCAzMjQuMSAzMDkuNUwyNTYgMTkySDI1NS4xTDk4LjY1IDQ2My43QzkzLjk1IDQ3MS44IDg2Ljk3IDQ3OC40IDc4LjU4IDQ4Mi42TDIzLjE2IDUxMC4zQzE4LjIgNTEyLjggMTIuMzEgNTEyLjUgNy41ODggNTA5LjZDMi44NzEgNTA2LjcgMCA1MDEuNSAwIDQ5NlY0NDAuNkMwIDQzMi4yIDIuMjI4IDQyMy45IDYuNDYgNDE2LjVMMTY4LjggMTM2LjJDMTYzLjEgMTIzLjkgMTYwIDExMC4zIDE2MCA5NkMxNjAgNDIuOTggMjAyLjEgMCAyNTYgMEMzMDkgMCAzNTIgNDIuOTggMzUyIDk2QzM1MiAxMTAuMyAzNDguOSAxMjMuOSAzNDMuMiAxMzYuMkw0MTIuNyAyNTYuMXpNMjU1LjEgNjRDMjM4LjMgNjQgMjIzLjEgNzguMzMgMjIzLjEgOTZDMjIzLjEgMTEzLjcgMjM4LjMgMTI4IDI1NS4xIDEyOEMyNzMuNyAxMjggMjg4IDExMy43IDI4OCA5NkMyODggNzguMzMgMjczLjcgNjQgMjU1LjEgNjR6TTM1Ni43IDM2NS45QzM4OS42IDM1My42IDQxOS42IDMzNS41IDQ0NS41IDMxMi45TDUwNS41IDQxNi41QzUwOS44IDQyMy45IDUxMiA0MzIuMiA1MTIgNDQwLjZWNDk2QzUxMiA1MDEuNSA1MDkuMSA1MDYuNyA1MDQuNCA1MDkuNkM0OTkuNyA1MTIuNSA0OTMuOCA1MTIuOCA0ODguOCA1MTAuM0w0MzMuNCA0ODIuNkM0MjUgNDc4LjQgNDE4IDQ3MS44IDQxMy4zIDQ2My43TDM1Ni43IDM2NS45eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNjYuNDkgMzEyLjlDNTMuNjYgMzAxLjYgNDEuODQgMjg5LjMgMzEuMTggMjc2QzIwLjEzIDI2Mi4yIDIyLjM0IDI0Mi4xIDM2LjEzIDIzMUM0OS45MiAyMTkuMSA3MC4wNiAyMjIuMiA4MS4xMiAyMzUuMUM4Ni43OSAyNDMuMSA5Mi44NyAyNDkuOCA5OS4zNCAyNTYuMUw2Ni40OSAzMTIuOXpNMTU1LjMgMzY1LjlMMTg3LjkgMzA5LjVDMjA5LjQgMzE2LjMgMjMyLjMgMzIwIDI1NS4xIDMyMEMzMjYuNyAzMjAgMzg5LjggMjg3LjMgNDMwLjkgMjM1LjFDNDQxLjkgMjIyLjIgNDYyLjEgMjE5LjEgNDc1LjkgMjMxQzQ4OS43IDI0Mi4xIDQ5MS45IDI2Mi4yIDQ4MC44IDI3NkM0MjguMSAzNDEuOCAzNDYuMSAzODQgMjU1LjEgMzg0QzIyMC42IDM4NCAxODYuNiAzNzcuNiAxNTUuMyAzNjUuOUgxNTUuM3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEJyYW5kaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI4OCA5NkMyODggMTEzLjcgMjczLjcgMTI4IDI1NiAxMjhDMjM4LjMgMTI4IDIyNCAxMTMuNyAyMjQgOTZDMjI0IDc4LjMzIDIzOC4zIDY0IDI1NiA2NEMyNzMuNyA2NCAyODggNzguMzMgMjg4IDk2ek05NiAxNjBDOTYgMTQyLjMgMTEwLjMgMTI4IDEyOCAxMjhDMTQ1LjcgMTI4IDE2MCAxNDIuMyAxNjAgMTYwQzE2MCAxNzcuNyAxNDUuNyAxOTIgMTI4IDE5MkMxMTAuMyAxOTIgOTYgMTc3LjcgOTYgMTYwek02NCAyODhDNjQgMjcwLjMgNzguMzMgMjU2IDk2IDI1NkMxMTMuNyAyNTYgMTI4IDI3MC4zIDEyOCAyODhDMTI4IDMwNS43IDExMy43IDMyMCA5NiAzMjBDNzguMzMgMzIwIDY0IDMwNS43IDY0IDI4OHpNMzUyIDE2MEMzNTIgMTQyLjMgMzY2LjMgMTI4IDM4NCAxMjhDNDAxLjcgMTI4IDQxNiAxNDIuMyA0MTYgMTYwQzQxNiAxNzcuNyA0MDEuNyAxOTIgMzg0IDE5MkMzNjYuMyAxOTIgMzUyIDE3Ny43IDM1MiAxNjB6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J001MTIgMjU1LjFDNTEyIDI1Ni45IDUxMS4xIDI1Ny44IDUxMS4xIDI1OC43QzUxMS42IDI5NS4yIDQ3OC40IDMxOS4xIDQ0MS45IDMxOS4xSDM0NEMzMTcuNSAzMTkuMSAyOTYgMzQxLjUgMjk2IDM2OEMyOTYgMzcxLjQgMjk2LjQgMzc0LjcgMjk3IDM3Ny45QzI5OS4yIDM4OC4xIDMwMy41IDM5Ny4xIDMwNy45IDQwNy44QzMxMy45IDQyMS42IDMyMCA0MzUuMyAzMjAgNDQ5LjhDMzIwIDQ4MS43IDI5OC40IDUxMC41IDI2Ni42IDUxMS44QzI2My4xIDUxMS45IDI1OS41IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2VjI1NS4xek05NiAyNTUuMUM3OC4zMyAyNTUuMSA2NCAyNzAuMyA2NCAyODcuMUM2NCAzMDUuNyA3OC4zMyAzMTkuMSA5NiAzMTkuMUMxMTMuNyAzMTkuMSAxMjggMzA1LjcgMTI4IDI4Ny4xQzEyOCAyNzAuMyAxMTMuNyAyNTUuMSA5NiAyNTUuMXpNMTI4IDE5MS4xQzE0NS43IDE5MS4xIDE2MCAxNzcuNyAxNjAgMTU5LjFDMTYwIDE0Mi4zIDE0NS43IDEyNy4xIDEyOCAxMjcuMUMxMTAuMyAxMjcuMSA5NiAxNDIuMyA5NiAxNTkuMUM5NiAxNzcuNyAxMTAuMyAxOTEuMSAxMjggMTkxLjF6TTI1NiA2My4xQzIzOC4zIDYzLjEgMjI0IDc4LjMzIDIyNCA5NS4xQzIyNCAxMTMuNyAyMzguMyAxMjcuMSAyNTYgMTI3LjFDMjczLjcgMTI3LjEgMjg4IDExMy43IDI4OCA5NS4xQzI4OCA3OC4zMyAyNzMuNyA2My4xIDI1NiA2My4xek0zODQgMTkxLjFDNDAxLjcgMTkxLjEgNDE2IDE3Ny43IDQxNiAxNTkuMUM0MTYgMTQyLjMgNDAxLjcgMTI3LjEgMzg0IDEyNy4xQzM2Ni4zIDEyNy4xIDM1MiAxNDIuMyAzNTIgMTU5LjFDMzUyIDE3Ny43IDM2Ni4zIDE5MS4xIDM4NCAxOTEuMXonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5ld3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMCAxMjh2MzA0QzAgNDU4LjUgMjEuNDkgNDgwIDQ4IDQ4MFM5NiA0NTguNSA5NiA0MzJWOTZIMzJDMTQuMzMgOTYgMCAxMTAuMyAwIDEyOHpNMjcyIDI4OGgtOTZDMTY3LjIgMjg4IDE2MCAyOTUuMiAxNjAgMzA0QzE2MCAzMTIuOCAxNjcuMiAzMjAgMTc2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAyOTUuMiAyODAuOCAyODggMjcyIDI4OHpNMzM2IDMyMGg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAyOTUuMiA0NDAuOCAyODggNDMyIDI4OGgtOTZDMzI3LjIgMjg4IDMyMCAyOTUuMiAzMjAgMzA0QzMyMCAzMTIuOCAzMjcuMiAzMjAgMzM2IDMyMHpNMjcyIDM4NGgtOTZDMTY3LjIgMzg0IDE2MCAzOTEuMiAxNjAgNDAwQzE2MCA0MDguOCAxNjcuMiA0MTYgMTc2IDQxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzI4OCAzOTEuMiAyODAuOCAzODQgMjcyIDM4NHpNNDMyIDM4NGgtOTZjLTguODM2IDAtMTYgNy4xNjItMTYgMTZjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNmg5NmM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2QzQ0OCAzOTEuMiA0NDAuOCAzODQgNDMyIDM4NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4MCAzMkgxMjhDMTEwLjMgMzIgOTYgNDYuMzMgOTYgNjR2MzY4Qzk2IDQ1OC41IDc0LjUxIDQ4MCA0OCA0ODBINDQ4YzM1LjM1IDAgNjQtMjguNjUgNjQtNjRWNjRDNTEyIDQ2LjMzIDQ5Ny43IDMyIDQ4MCAzMnpNMjcyIDQxNmgtOTZDMTY3LjIgNDE2IDE2MCA0MDguOCAxNjAgNDAwQzE2MCAzOTEuMiAxNjcuMiAzODQgMTc2IDM4NGg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzI4OCA0MDguOCAyODAuOCA0MTYgMjcyIDQxNnpNMjcyIDMyMGgtOTZDMTY3LjIgMzIwIDE2MCAzMTIuOCAxNjAgMzA0QzE2MCAyOTUuMiAxNjcuMiAyODggMTc2IDI4OGg5NkMyODAuOCAyODggMjg4IDI5NS4yIDI4OCAzMDRDMjg4IDMxMi44IDI4MC44IDMyMCAyNzIgMzIwek00MzIgNDE2aC05NmMtOC44MzYgMC0xNi03LjE2NC0xNi0xNmMwLTguODM4IDcuMTY0LTE2IDE2LTE2aDk2YzguODM2IDAgMTYgNy4xNjIgMTYgMTZDNDQ4IDQwOC44IDQ0MC44IDQxNiA0MzIgNDE2ek00MzIgMzIwaC05NkMzMjcuMiAzMjAgMzIwIDMxMi44IDMyMCAzMDRDMzIwIDI5NS4yIDMyNy4yIDI4OCAzMzYgMjg4aDk2QzQ0MC44IDI4OCA0NDggMjk1LjIgNDQ4IDMwNEM0NDggMzEyLjggNDQwLjggMzIwIDQzMiAzMjB6TTQ0OCAyMDhDNDQ4IDIxNi44IDQ0MC44IDIyNCA0MzIgMjI0aC0yNTZDMTY3LjIgMjI0IDE2MCAyMTYuOCAxNjAgMjA4di05NkMxNjAgMTAzLjIgMTY3LjIgOTYgMTc2IDk2aDI1NkM0NDAuOCA5NiA0NDggMTAzLjIgNDQ4IDExMlYyMDh6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBub3RpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTkyIDIyNGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di0xMTJDMjE2IDc0Ljc1IDIwNS4zIDY0IDE5MiA2NFMxNjggNzQuNzUgMTY4IDg4djExMkMxNjggMjEzLjMgMTc4LjggMjI0IDE5MiAyMjR6TTE5MiAzMjBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnMtMTQuMzMtMzItMzItMzJTMTYwIDI3MC4zIDE2MCAyODhTMTc0LjMgMzIwIDE5MiAzMjB6TTExMi4zIDM4NGwtLjA5MDYgNzAuMzVjMCA2LjI5NyAxLjg4NiAxMi40MyA1LjM1NSAxNy42OGwxNy4wOCAyNS42OUMxMzkuOCA1MDUuNiAxNTEuOCA1MTIgMTYxLjIgNTEyaDYxLjY3YzkuNDM4IDAgMjEuMzYtNi4zOTUgMjYuNjEtMTQuMjdsMTcuMzQtMjUuN2MyLjkzOC00LjQzOCA1LjA5Ny0xMi4zNSA1LjA5Ny0xNy42OGwuMjE1Ni03MC4zNUwxMTIuMyAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00xOTEuNSAuMDEyN0M4OS40NyAuMjYyNyAxNiA4Mi4xIDE2IDE3NS4xYzAgNDQuMzggMTYuNTIgODQuODkgNDMuNTIgMTE1LjhjMTYuNjIgMTguODggNDIuMzYgNTguMjMgNTIuMjQgOTEuNDhjMCAuMjUgLjExNDYgLjUxMDQgLjExNDYgLjc2MDRsMTYwLjMgLjAwMDZjMC0uMjUgLjA4MzMtLjUxMTEgLjA4MzMtLjc2MTFjOS44NzUtMzMuMjUgMzUuNjEtNzIuNjEgNTIuMjQtOTEuNDhDMzUxLjUgMjYwLjkgMzY4IDIyMC40IDM2OCAxNzUuMUMzNjggNzguNjIgMjg4LjgtLjIzNzMgMTkxLjUgLjAxMjd6TTE2OCA4OEMxNjggNzQuNzUgMTc4LjggNjQgMTkyIDY0czI0IDEwLjc1IDI0IDI0djExMkMyMTYgMjEzLjMgMjA1LjMgMjI0IDE5MiAyMjRTMTY4IDIxMy4zIDE2OCAyMDBWODh6TTE5MiAzMjBjLTE3LjY3IDAtMzItMTQuMzMtMzItMzJzMTQuMzMtMzIgMzItMzJzMzIgMTQuMzMgMzIgMzJTMjA5LjcgMzIwIDE5MiAzMjB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjk4LjkgMzA5LjZsLTQ1LjY0LTYuNjg4bC0yMC4zNi00MS40Yy0zLjYyNS03LjM3NS0xNC4xNi03LjUtMTcuOTEgMEwxOTQuNyAzMDIuOUwxNDkgMzA5LjZjLTguMjUgMS4xMjUtMTEuMzcgMTEuMjItNS40OTEgMTcuMWwzMi45NCAzMi4xbC03Ljc3MiA0NS41NWMtMS41IDguMjUgNy4yNjQgMTQuMzcgMTQuNTEgMTAuNDlsNDAuNzctMjEuNTNsNDAuNzcgMjEuNTNjNy4zNzUgMy44NzUgMTYuMDEtMi4yNDIgMTQuNTEtMTAuNDlsLTcuNzczLTQ1LjU1bDMyLjEtMzIuMUMzMTAuNCAzMjAuOCAzMDcuMiAzMTAuNyAyOTguOSAzMDkuNnpNNDI0IDE0My4xTDEyNy40IDE0My4xYzYuMzc1LTMwLjg4IDMwLjc1LTU1LjI1IDYyLjc1LTYxLjFDMTk4LjggOTAuNjIgMjEwLjggOTUuMSAyMjQgOTUuMWw2Mi4yIC4wMDAxYzIzLjIxIDAgNDQuNS0xNS42OSA0OC44OS0zOC40OEMzNDAuMSAyNi44NSAzMTcuNiAwIDI4OCAwaC02NGMtMjIgMC00MC41IDE1LTQ2LjEzIDM1LjI1Yy01MiAxMS42Mi05MS43NSA1NS05OC41IDEwOC44TDIzLjEgMTQzLjFDMTAuNzUgMTQzLjEgMCAxNTQuNyAwIDE2Ny4xYzAgMTMuMjUgMTAuNzUgMjQgMjMuMSAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNEM0NDggMTU0LjcgNDM3LjMgMTQzLjEgNDI0IDE0My4xeidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNDggMTkxLjFsMjkuMTIgMjkxLjJjMS42MzYgMTYuMzYgMTUuMjQgMjguODIgMzEuNjggMjguODJoMjMwLjRjMTYuNDQgMCAzMC4wNS0xMi40NiAzMS42OC0yOC44Mkw0MDAgMTkxLjFINDh6TTMwNC41IDMyNi43bC0zMi4xIDMyLjFsNy43NzMgNDUuNTVjMS41IDguMjUtNy4xMzkgMTQuMzctMTQuNTEgMTAuNDlMMjIzLjEgMzkzLjNsLTQwLjc3IDIxLjUzYy03LjI1IDMuODc1LTE2LjAxLTIuMjQyLTE0LjUxLTEwLjQ5bDcuNzcyLTQ1LjU1bC0zMi45NC0zMi4xQzEzNy43IDMyMC44IDE0MC44IDMxMC43IDE0OSAzMDkuNkwxOTQuNyAzMDIuOWwyMC4zNi00MS40YzMuNzUtNy41IDE0LjI5LTcuMzc1IDE3LjkxIDBsMjAuMzYgNDEuNGw0NS42NCA2LjY4OEMzMDcuMiAzMTAuNyAzMTAuNCAzMjAuOCAzMDQuNSAzMjYuN3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFByaXZhY3koKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNjIyLjMgMjcxLjFsLTExNS4xLTQ1LjAxYy00LjEyNS0xLjYyOS0xMi42Mi0zLjc1NC0yMi4yNSAwTDM2OS44IDI3MS4xQzM1OSAyNzUuMiAzNTIgMjg1LjEgMzUyIDI5NS4xYzAgMTExLjYgNjguNzUgMTg4LjggMTMyLjkgMjEzLjljOS42MjUgMy43NSAxOCAxLjYyNSAyMi4yNSAwQzU1OC40IDQ4OS45IDY0MCA0MjAuNSA2NDAgMjk1LjFDNjQwIDI4NS4xIDYzMyAyNzUuMiA2MjIuMyAyNzEuMXpNNDk2IDQ2Mi40VjI3My4ybDk1LjUgMzcuMzhDNTg1LjkgMzk3LjggNTMwLjYgNDQ2IDQ5NiA0NjIuNHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zMSAxMjgtMTI4UzI5NC43IDAgMjI0IDBDMTUzLjMgMCA5NiA1Ny4zMSA5NiAxMjhTMTUzLjMgMjU2IDIyNCAyNTZ6TTMyMC42IDMxMC4zQzMwNS45IDMwNi4zIDI5MC42IDMwNCAyNzQuNyAzMDRIMTczLjNDNzcuNjEgMzA0IDAgMzgxLjcgMCA0NzcuNEMwIDQ5Ni41IDE1LjUyIDUxMiAzNC42NiA1MTJINDEzLjNjMy4xNDMgMCA1Ljk2Ny0xLjAwNCA4Ljg2MS0xLjc4OUMzNjkuNyA0NjkuOCAzMjQuMSA0MDAuMyAzMjAuNiAzMTAuM3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTU5LjEgMTkyTDE0NCAxOTJjLTM1LjM0IDAtNjQgMjguNjYtNjQgNjQuMDh2NDcuNzlDODAgMzM5LjMgMTA4LjcgMzY4IDE0NCAzNjhIMTYwYzE3LjY2IDAgMzItMTQuMzYgMzItMzIuMDZMMTkxLjEgMjI0QzE5MS4xIDIwNi4zIDE3Ny42IDE5MiAxNTkuMSAxOTJ6TTM2OCAxOTJsLTE2IDBjLTE3LjY2IDAtMzIgMTQuMzQtMzIgMzIuMDRMMzIwIDMzNS45QzMyMCAzNTMuNyAzMzQuMyAzNjggMzUyIDM2OGgxNmMzNS4zNCAwIDY0LTI4LjcgNjQtNjQuMTNWMjU2LjFDNDMyIDIyMC43IDQwMy4zIDE5MiAzNjggMTkyeidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjU2IDBDMTEyLjkgMCA0LjU4MyAxMTkuMSAuMDIwOCAyNTZMMCAyOTZDMCAzMDkuMyAxMC43NSAzMjAgMjMuMSAzMjBTNDggMzA5LjMgNDggMjk2VjI1NmMwLTExNC43IDkzLjM0LTIwNy44IDIwOC0yMDcuOEMzNzAuNyA0OC4yIDQ2NCAxNDEuMyA0NjQgMjU2djE0NGMwIDIyLjA5LTE3LjkxIDQwLTQwIDQwaC0xMTAuN0MzMDUgNDI1LjcgMjg5LjcgNDE2IDI3MiA0MTZIMjQxLjhjLTIzLjIxIDAtNDQuNSAxNS42OS00OC44NyAzOC40OUMxODcgNDg1LjIgMjEwLjQgNTEyIDIzOS4xIDUxMkgyNzJjMTcuNzIgMCAzMy4wMy05LjcxMSA0MS4zNC0yNEg0MjRjNDguNiAwIDg4LTM5LjQgODgtODhWMjU2QzUwNy40IDExOS4xIDM5OS4xIDAgMjU2IDB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBQcmljZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J005NiAxNTJDOTYgMTM4LjcgMTA2LjcgMTI4IDEyMCAxMjhDMTMzLjMgMTI4IDE0NCAxMzguNyAxNDQgMTUyVjM2MEMxNDQgMzczLjMgMTMzLjMgMzg0IDEyMCAzODRDMTA2LjcgMzg0IDk2IDM3My4zIDk2IDM2MFYxNTJ6TTE3NiAxNDRDMTc2IDEzNS4yIDE4My4yIDEyOCAxOTIgMTI4QzIwMC44IDEyOCAyMDggMTM1LjIgMjA4IDE0NFYzNjhDMjA4IDM3Ni44IDIwMC44IDM4NCAxOTIgMzg0QzE4My4yIDM4NCAxNzYgMzc2LjggMTc2IDM2OFYxNDR6TTI4OCAxNTJWMzYwQzI4OCAzNzMuMyAyNzcuMyAzODQgMjY0IDM4NEMyNTAuNyAzODQgMjQwIDM3My4zIDI0MCAzNjBWMTUyQzI0MCAxMzguNyAyNTAuNyAxMjggMjY0IDEyOEMyNzcuMyAxMjggMjg4IDEzOC43IDI4OCAxNTJ6TTM1MiAxNTJDMzUyIDEzOC43IDM2Mi43IDEyOCAzNzYgMTI4QzM4OS4zIDEyOCA0MDAgMTM4LjcgNDAwIDE1MlYzNjBDNDAwIDM3My4zIDM4OS4zIDM4NCAzNzYgMzg0QzM2Mi43IDM4NCAzNTIgMzczLjMgMzUyIDM2MFYxNTJ6TTQ4MCAxNDRWMzY4QzQ4MCAzNzYuOCA0NzIuOCAzODQgNDY0IDM4NEM0NTUuMiAzODQgNDQ4IDM3Ni44IDQ0OCAzNjhWMTQ0QzQ0OCAxMzUuMiA0NTUuMiAxMjggNDY0IDEyOEM0NzIuOCAxMjggNDgwIDEzNS4yIDQ4MCAxNDR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J001MTIgMzJDNTQ3LjMgMzIgNTc2IDYwLjY1IDU3NiA5NlY0MTZDNTc2IDQ1MS4zIDU0Ny4zIDQ4MCA1MTIgNDgwSDY0QzI4LjY1IDQ4MCAwIDQ1MS4zIDAgNDE2Vjk2QzAgNjAuNjUgMjguNjUgMzIgNjQgMzJINTEyek0xMjAgMTI4QzEwNi43IDEyOCA5NiAxMzguNyA5NiAxNTJWMzYwQzk2IDM3My4zIDEwNi43IDM4NCAxMjAgMzg0QzEzMy4zIDM4NCAxNDQgMzczLjMgMTQ0IDM2MFYxNTJDMTQ0IDEzOC43IDEzMy4zIDEyOCAxMjAgMTI4ek0xNzYgMzY4QzE3NiAzNzYuOCAxODMuMiAzODQgMTkyIDM4NEMyMDAuOCAzODQgMjA4IDM3Ni44IDIwOCAzNjhWMTQ0QzIwOCAxMzUuMiAyMDAuOCAxMjggMTkyIDEyOEMxODMuMiAxMjggMTc2IDEzNS4yIDE3NiAxNDRWMzY4ek0yNjQgMTI4QzI1MC43IDEyOCAyNDAgMTM4LjcgMjQwIDE1MlYzNjBDMjQwIDM3My4zIDI1MC43IDM4NCAyNjQgMzg0QzI3Ny4zIDM4NCAyODggMzczLjMgMjg4IDM2MFYxNTJDMjg4IDEzOC43IDI3Ny4zIDEyOCAyNjQgMTI4ek0zNTIgMzYwQzM1MiAzNzMuMyAzNjIuNyAzODQgMzc2IDM4NEMzODkuMyAzODQgNDAwIDM3My4zIDQwMCAzNjBWMTUyQzQwMCAxMzguNyAzODkuMyAxMjggMzc2IDEyOEMzNjIuNyAxMjggMzUyIDEzOC43IDM1MiAxNTJWMzYwek00NjQgMTI4QzQ1NS4yIDEyOCA0NDggMTM1LjIgNDQ4IDE0NFYzNjhDNDQ4IDM3Ni44IDQ1NS4yIDM4NCA0NjQgMzg0QzQ3Mi44IDM4NCA0ODAgMzc2LjggNDgwIDM2OFYxNDRDNDgwIDEzNS4yIDQ3Mi44IDEyOCA0NjQgMTI4eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTYwIDQ5NkMxMTUuOCA0OTYgODAgNDYwLjIgODAgNDE2QzgwIDM3MS44IDExNS44IDMzNiAxNjAgMzM2QzIwNC4yIDMzNiAyNDAgMzcxLjggMjQwIDQxNkMyNDAgNDYwLjIgMjA0LjIgNDk2IDE2MCA0OTZ6TTE5MiA0MTZDMTkyIDM5OC4zIDE3Ny43IDM4NCAxNjAgMzg0QzE0Mi4zIDM4NCAxMjggMzk4LjMgMTI4IDQxNkMxMjggNDMzLjcgMTQyLjMgNDQ4IDE2MCA0NDhDMTc3LjcgNDQ4IDE5MiA0MzMuNyAxOTIgNDE2ek0zNTIgMzM2QzMwNy44IDMzNiAyNzIgMzAwLjIgMjcyIDI1NkMyNzIgMjExLjggMzA3LjggMTc2IDM1MiAxNzZDMzk2LjIgMTc2IDQzMiAyMTEuOCA0MzIgMjU2QzQzMiAzMDAuMiAzOTYuMiAzMzYgMzUyIDMzNnpNMzg0IDI1NkMzODQgMjM4LjMgMzY5LjcgMjI0IDM1MiAyMjRDMzM0LjMgMjI0IDMyMCAyMzguMyAzMjAgMjU2QzMyMCAyNzMuNyAzMzQuMyAyODggMzUyIDI4OEMzNjkuNyAyODggMzg0IDI3My43IDM4NCAyNTZ6TTE5MiAxNkMyMzYuMiAxNiAyNzIgNTEuODIgMjcyIDk2QzI3MiAxNDAuMiAyMzYuMiAxNzYgMTkyIDE3NkMxNDcuOCAxNzYgMTEyIDE0MC4yIDExMiA5NkMxMTIgNTEuODIgMTQ3LjggMTYgMTkyIDE2ek0xNjAgOTZDMTYwIDExMy43IDE3NC4zIDEyOCAxOTIgMTI4QzIwOS43IDEyOCAyMjQgMTEzLjcgMjI0IDk2QzIyNCA3OC4zMyAyMDkuNyA2NCAxOTIgNjRDMTc0LjMgNjQgMTYwIDc4LjMzIDE2MCA5NnonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTAgNDE2QzAgMzk4LjMgMTQuMzMgMzg0IDMyIDM4NEg4Ni42NkM4Mi4zOCAzOTMuOCA4MCA0MDQuNiA4MCA0MTZDODAgNDI3LjQgODIuMzggNDM4LjIgODYuNjYgNDQ4SDMyQzE0LjMzIDQ0OCAwIDQzMy43IDAgNDE2ek0yNDAgNDE2QzI0MCA0MDQuNiAyMzcuNiAzOTMuOCAyMzMuMyAzODRINDgwQzQ5Ny43IDM4NCA1MTIgMzk4LjMgNTEyIDQxNkM1MTIgNDMzLjcgNDk3LjcgNDQ4IDQ4MCA0NDhIMjMzLjNDMjM3LjYgNDM4LjIgMjQwIDQyNy40IDI0MCA0MTZWNDE2ek0wIDI1NkMwIDIzOC4zIDE0LjMzIDIyNCAzMiAyMjRIMjc4LjdDMjc0LjQgMjMzLjggMjcyIDI0NC42IDI3MiAyNTZDMjcyIDI2Ny40IDI3NC40IDI3OC4yIDI3OC43IDI4OEgzMkMxNC4zMyAyODggMCAyNzMuNyAwIDI1NlYyNTZ6TTQzMiAyNTZDNDMyIDI0NC42IDQyOS42IDIzMy44IDQyNS4zIDIyNEg0ODBDNDk3LjcgMjI0IDUxMiAyMzguMyA1MTIgMjU2QzUxMiAyNzMuNyA0OTcuNyAyODggNDgwIDI4OEg0MjUuM0M0MjkuNiAyNzguMiA0MzIgMjY3LjQgNDMyIDI1NnpNMTE4LjcgNjRDMTE0LjQgNzMuOCAxMTIgODQuNjIgMTEyIDk2QzExMiAxMDcuNCAxMTQuNCAxMTguMiAxMTguNyAxMjhIMzJDMTQuMzMgMTI4IDAgMTEzLjcgMCA5NkMwIDc4LjMzIDE0LjMzIDY0IDMyIDY0SDExOC43ek0yNjUuMyAxMjhDMjY5LjYgMTE4LjIgMjcyIDEwNy40IDI3MiA5NkMyNzIgODQuNjIgMjY5LjYgNzMuOCAyNjUuMyA2NEg0ODBDNDk3LjcgNjQgNTEyIDc4LjMzIDUxMiA5NkM1MTIgMTEzLjcgNDk3LjcgMTI4IDQ4MCAxMjhIMjY1LjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xMTYgMjA1LjFDMTE2IDE5Ni4yIDEyNS42IDE5MC40IDEzMy41IDE5NC43TDIyMy40IDI0Mi42QzIzNC4xIDI0OC4zIDIzNC4xIDI2My43IDIyMy40IDI2OS40TDEzMy41IDMxNy4zQzEyNS42IDMyMS42IDExNiAzMTUuOCAxMTYgMzA2LjlDMTE2IDMwNC4xIDExNi4xIDMwMS40IDExOC44IDI5OS4yTDE1NC44IDI1NkwxMTguOCAyMTIuOEMxMTYuMSAyMTAuNiAxMTYgMjA3LjkgMTE2IDIwNS4xVjIwNS4xek0zOTMuMiAyMTIuOEwzNTcuMiAyNTZMMzkzLjIgMjk5LjJDMzk1IDMwMS40IDM5NiAzMDQuMSAzOTYgMzA2LjlDMzk2IDMxNS44IDM4Ni40IDMyMS42IDM3OC41IDMxNy4zTDI4OC42IDI2OS40QzI3Ny45IDI2My43IDI3Ny45IDI0OC4zIDI4OC42IDI0Mi42TDM3OC41IDE5NC43QzM4Ni40IDE5MC40IDM5NiAxOTYuMiAzOTYgMjA1LjFDMzk2IDIwNy45IDM5NSAyMTAuNiAzOTMuMiAyMTIuOHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2QzUxMiAzOTcuNCAzOTcuNCA1MTIgMjU2IDUxMkMxMTQuNiA1MTIgMCAzOTcuNCAwIDI1NnpNMTE4LjggMjEyLjhMMTU0LjggMjU2TDExOC44IDI5OS4yQzExNi4xIDMwMS40IDExNiAzMDQuMSAxMTYgMzA2LjlDMTE2IDMxNS44IDEyNS42IDMyMS42IDEzMy41IDMxNy4zTDIyMy40IDI2OS40QzIzNC4xIDI2My43IDIzNC4xIDI0OC4zIDIyMy40IDI0Mi42TDEzMy41IDE5NC43QzEyNS42IDE5MC40IDExNiAxOTYuMiAxMTYgMjA1LjFDMTE2IDIwNy45IDExNi4xIDIxMC42IDExOC44IDIxMi44VjIxMi44ek0yODguNiAyNDIuNkMyNzcuOSAyNDguMyAyNzcuOSAyNjMuNyAyODguNiAyNjkuNEwzNzguNSAzMTcuM0MzODYuNCAzMjEuNiAzOTYgMzE1LjggMzk2IDMwNi45QzM5NiAzMDQuMSAzOTUgMzAxLjQgMzkzLjIgMjk5LjJMMzU3LjIgMjU2TDM5My4yIDIxMi44QzM5NSAyMTAuNiAzOTYgMjA3LjkgMzk2IDIwNS4xQzM5NiAxOTYuMiAzODYuNCAxOTAuNCAzNzguNSAxOTQuN0wyODguNiAyNDIuNnpNMjE2LjkgMzU0LjdDMjExLjUgMzUxLjEgMjA0LjUgMzUxLjEgMTk5LjEgMzU0LjdMMTU4LjkgMzgxLjVMMTM1LjIgMzY5LjdDMTI3LjMgMzY1LjcgMTE3LjYgMzY4LjkgMTEzLjcgMzc2LjhDMTA5LjcgMzg0LjcgMTEyLjkgMzk0LjQgMTIwLjggMzk4LjNMMTUyLjggNDE0LjNDMTU3LjEgNDE2LjkgMTY0LjEgNDE2LjUgMTY4LjkgNDEzLjNMMjA4IDM4Ny4yTDI0Ny4xIDQxMy4zQzI1Mi41IDQxNi45IDI1OS41IDQxNi45IDI2NC45IDQxMy4zTDMwNCAzODcuMkwzNDMuMSA0MTMuM0MzNDcuOSA0MTYuNSAzNTQgNDE2LjkgMzU5LjIgNDE0LjNMMzkxLjIgMzk4LjNDMzk5LjEgMzk0LjQgNDAyLjMgMzg0LjcgMzk4LjMgMzc2LjhDMzk0LjQgMzY4LjkgMzg0LjcgMzY1LjcgMzc2LjggMzY5LjdMMzUzLjEgMzgxLjVMMzEyLjkgMzU0LjdDMzA3LjUgMzUxLjEgMzAwLjUgMzUxLjEgMjk1LjEgMzU0LjdMMjU2IDM4MC44TDIxNi45IDM1NC43eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gWW91dHViZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTU0OS42NTUgMTI0LjA4M2MtNi4yODEtMjMuNjUtMjQuNzg3LTQyLjI3Ni00OC4yODQtNDguNTk3QzQ1OC43ODEgNjQgMjg4IDY0IDI4OCA2NFMxMTcuMjIgNjQgNzQuNjI5IDc1LjQ4NmMtMjMuNDk3IDYuMzIyLTQyLjAwMyAyNC45NDctNDguMjg0IDQ4LjU5Ny0xMS40MTIgNDIuODY3LTExLjQxMiAxMzIuMzA1LTExLjQxMiAxMzIuMzA1czAgODkuNDM4IDExLjQxMiAxMzIuMzA1YzYuMjgxIDIzLjY1IDI0Ljc4NyA0MS41IDQ4LjI4NCA0Ny44MjFDMTE3LjIyIDQ0OCAyODggNDQ4IDI4OCA0NDhzMTcwLjc4IDAgMjEzLjM3MS0xMS40ODZjMjMuNDk3LTYuMzIxIDQyLjAwMy0yNC4xNzEgNDguMjg0LTQ3LjgyMSAxMS40MTItNDIuODY3IDExLjQxMi0xMzIuMzA1IDExLjQxMi0xMzIuMzA1czAtODkuNDM4LTExLjQxMi0xMzIuMzA1em0tMzE3LjUxIDIxMy41MDhWMTc1LjE4NWwxNDIuNzM5IDgxLjIwNS0xNDIuNzM5IDgxLjIwMXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gVHdpdHRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGggZD0nTTQ1OS4zNyAxNTEuNzE2Yy4zMjUgNC41NDguMzI1IDkuMDk3LjMyNSAxMy42NDUgMCAxMzguNzItMTA1LjU4MyAyOTguNTU4LTI5OC41NTggMjk4LjU1OC01OS40NTIgMC0xMTQuNjgtMTcuMjE5LTE2MS4xMzctNDcuMTA2IDguNDQ3Ljk3NCAxNi41NjggMS4yOTkgMjUuMzQgMS4yOTkgNDkuMDU1IDAgOTQuMjEzLTE2LjU2OCAxMzAuMjc0LTQ0LjgzMi00Ni4xMzItLjk3NS04NC43OTItMzEuMTg4LTk4LjExMi03Mi43NzIgNi40OTguOTc0IDEyLjk5NSAxLjYyNCAxOS44MTggMS42MjQgOS40MjEgMCAxOC44NDMtMS4zIDI3LjYxNC0zLjU3My00OC4wODEtOS43NDctODQuMTQzLTUxLjk4LTg0LjE0My0xMDIuOTg1di0xLjI5OWMxMy45NjkgNy43OTcgMzAuMjE0IDEyLjY3IDQ3LjQzMSAxMy4zMTktMjguMjY0LTE4Ljg0My00Ni43ODEtNTEuMDA1LTQ2Ljc4MS04Ny4zOTEgMC0xOS40OTIgNS4xOTctMzcuMzYgMTQuMjk0LTUyLjk1NCA1MS42NTUgNjMuNjc1IDEyOS4zIDEwNS4yNTggMjE2LjM2NSAxMDkuODA3LTEuNjI0LTcuNzk3LTIuNTk5LTE1LjkxOC0yLjU5OS0yNC4wNCAwLTU3LjgyOCA0Ni43ODItMTA0LjkzNCAxMDQuOTM0LTEwNC45MzQgMzAuMjEzIDAgNTcuNTAyIDEyLjY3IDc2LjY3IDMzLjEzNyAyMy43MTUtNC41NDggNDYuNDU2LTEzLjMyIDY2LjU5OS0yNS4zNC03Ljc5OCAyNC4zNjYtMjQuMzY2IDQ0LjgzMy00Ni4xMzIgNTcuODI3IDIxLjExNy0yLjI3MyA0MS41ODQtOC4xMjIgNjAuNDI2LTE2LjI0My0xNC4yOTIgMjAuNzkxLTMyLjE2MSAzOS4zMDgtNTIuNjI4IDU0LjI1M3onIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEtha2FvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOTkuNjE4MDEgOTIuMTQ3MDExJz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9J2NsaXBQYXRoNjkyJyBjbGlwUGF0aFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+XG4gICAgICAgICAgPHBhdGggZD0nbSAwLDU5NS4yOCA4NDEuODksMCBMIDg0MS44OSwwIDAsMCBaJyAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgdHJhbnNmb3JtPSdtYXRyaXgoMSwwLDAsLTEsLTM2Mi4yNjM1OCwyMzQuMDk4OTUpJz5cbiAgICAgICAgPGcgY2xpcFBhdGg9J3VybCgjY2xpcFBhdGg2OTIpJz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNjMuMjYxMiwzNzYuNjc3NyknPlxuICAgICAgICAgICAgPHBhdGggZD0nbSAyNDguODEwMzksLTE0My41Nzg3NSBjIC0yNi45NTMsMCAtNDguODA4MDEsLTE3LjI1NiAtNDguODA4MDEsLTM4LjU1NSAwLC0xMy42ODEwMSA5LjA1MjAxLC0yNS42OTMwMSAyMi42NDYwMSwtMzIuNTQ5MDEgbCAtNC41OTksLTE3LjE2NyBjIC0wLjE3NiwtMC41MjcgLTAuMDMsLTEuMDg1IDAuMzUyLC0xLjQ2NSAwLjI2MywtMC4yNjUgMC42MTQsLTAuNDExIDAuOTk1LC0wLjQxMSAwLjI5NCwwIDAuNTg2LDAuMTE3IDAuODUsMC4zMjIgbCAxOS43NzUsMTMuMzYgYyAyLjg3MiwtMC40MSA1LjgwMiwtMC42NDQgOC43ODksLTAuNjQ0IDI2Ljk1MywwIDQ4LjgxLDE3LjI1NSA0OC44MSwzOC41NTQwMSAwLDIxLjI5OSAtMjEuODU3LDM4LjU1NSAtNDguODEsMzguNTU1JyAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgaGVyb1N0cmluZywgcm91dGVzIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnQGRlZXJwYXJrL2JvbHQtdWknXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJ34vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IEJhbm5lciwgUHJvbW90aW9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcblxudHlwZSBMYXlvdXRQcm9wcyA9IFJvdXRlICYge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIHByb21vdGlvbj86IFByb21vdGlvbixcbiAgcHJldlJvdXRlPzogc3RyaW5nLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgY292ZXI/OiBKU1guRWxlbWVudCxcbiAgZGF0ZT86IEpTWC5FbGVtZW50LFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxuICBpc1dpZGU/OiBib29sZWFuLFxufVxuXG50eXBlIFJvb3RMYXlvdXRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgaXNSb290OiBib29sZWFuLFxuICBzaWRlYmFyOiBib29sZWFuLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2l0ZU1ldGEoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc2l0ZS53ZWJtYW5pZmVzdD92PTIwMjIwMzEzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdtYXNrLWljb24nIGhyZWY9Jy9pbWFnZXMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnP3Y9MjAyMjAzMTMnIGNvbG9yPScjMjU2M2ViJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvZmF2aWNvbi5pY28/dj0yMDIyMDMxMycgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMjU2M2ViJyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmOGZhZmMnIC8+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIHNyYz0naHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi0xMzE1MjM4ODYwNzE4NTQ5J1xuICAgICAgICBjcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+ICovfVxuICAgICAgPHNjcmlwdCBhc3luYyBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1OVFpEQ1RIRFg1Jz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBndGFnKCdjb25maWcnLCAnRy1OVFpEQ1RIRFg1Jyk7XG4gICAgICBgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gQ2hhbm5lbCBQbHVnaW4gU2NyaXB0cyAtLT4gKi99XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gd2luZG93O1xuICAgICAgICAgIGlmICh3LkNoYW5uZWxJTykge1xuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuY29uc29sZS5lcnJvciB8fCB3aW5kb3cuY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKXt9KSgnQ2hhbm5lbElPIHNjcmlwdCBpbmNsdWRlZCB0d2ljZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjaC5jKGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjaC5xID0gW107XG4gICAgICAgICAgY2guYyA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIGNoLnEucHVzaChhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHcuQ2hhbm5lbElPID0gY2g7XG4gICAgICAgICAgZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgIGlmICh3LkNoYW5uZWxJT0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcuQ2hhbm5lbElPSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgcy5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzLnNyYyA9ICdodHRwczovL2Nkbi5jaGFubmVsLmlvL3BsdWdpbi9jaC1wbHVnaW4td2ViLmpzJztcbiAgICAgICAgICAgIHMuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIHgucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgeCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBsKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25sb2FkJywgbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBDaGFubmVsSU8oJ2Jvb3QnLCB7XG4gICAgICAgICAgXCJwbHVnaW5LZXlcIjogXCJiYWZmZWE5Zi01Y2ZkLTRkNWQtOTM1YS03MzQwOTY0MWUxZjZcIlxuICAgICAgICB9KTtgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gRW5kIENoYW5uZWwgUGx1Z2luIC0tPiAqL31cbiAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPSdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tL3Nkay9qcy9rYWthby5taW4uanMnPjwvc2NyaXB0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIEljb24sXG4gIGRlc2MsXG4gIHByb21vdGlvbixcbiAgcHJldlJvdXRlLFxuICBjb3ZlcixcbiAgZGF0ZSxcbiAgaXNXaWRlLFxuICBzaWRlYmFyLFxufTogTGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LXBhZ2UgJHtpc1dpZGUgPyAnYngtcGFnZS13aWRlJyA6ICcnfWB9PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3Jz5cbiAgICAgICAgICB7cHJldmlld0VuYWJsZWQgPyAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL3Bvc3RzL3ByZXZpZXcvc3RvcCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9wb3N0cy9wcmV2aWV3L3N0YXJ0Jz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgcHVibGlzaGVkIGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBlbnRlciBwcmV2aWV3IG1vZGUhXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPEhlYWRlciB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlLCBjb3ZlciwgZGF0ZSwgaXNXaWRlLCBzaWRlYmFyIH19IC8+XG4gICAgICB7cHJvbW90aW9uICYmIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMnPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbiBmbGV4IG1kOmhpZGRlbic+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9vdExheW91dCh7IGlzUm9vdCwgY2hpbGRyZW4sIHBhdGhuYW1lLCBzaWRlYmFyIH06IFJvb3RMYXlvdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250YWluZXInPlxuICAgICAge3NpZGViYXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LXBhZ2UgYngtcGFnZS1yb290ICR7aXNSb290ID8gJycgOiAnaGlkZGVuIG1kOmZsZXgnfWB9PlxuICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICBpc1Jvb3Q9e2lzUm9vdH1cbiAgICAgICAgICAgIGhlcm9TdHJpbmc9e2hlcm9TdHJpbmd9XG4gICAgICAgICAgICBkZXNjPSdcdUIzNTQgXHVCMDk4XHVDNzQwIFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUFDQkRcdUQ1RDhcdUM3NDQgXHVDMEREXHVBQzAxXHVENTU4XHVCQTcwIFx1QUYzQ1x1QUYzQ1x1RDU1OFx1QUM4QyBcdUI5Q0NcdUI0RTRcdUM1QjQgXHVCNERDXHVCODI0XHVDNjk0LidcbiAgICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICAgIHsgdXJsOiAnL2NvbnRhY3QnLCBsYWJlbDogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGxhbicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdcdUM2OTRcdUFFMDhcdUQ0NUMgXHVENjU1XHVDNzc4JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmF2IHsuLi57IHJvdXRlcywgcGF0aG5hbWUgfX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNSb290ID8gJ3B4LTMgbWQ6cHgtMCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBIZWFkZXJQcm9wcyA9IFJvdXRlICYge1xuICBwcmV2Um91dGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgY292ZXI/OiBKU1guRWxlbWVudCxcbiAgZGF0ZT86IEpTWC5FbGVtZW50LFxuICBzaWRlYmFyPzogYm9vbGVhbixcbiAgaXNXaWRlPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUsIGNvdmVyLCBkYXRlLCBzaWRlYmFyLCBpc1dpZGUgfTogSGVhZGVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyJz5cbiAgICAgIHsoaXNXaWRlIHx8ICFzaWRlYmFyKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wYy1uYXYnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtaG9tZSc+XG4gICAgICAgICAgICB7cHJldlJvdXRlICYmIHByZXZSb3V0ZSAhPT0gJy8nID8gKFxuICAgICAgICAgICAgICA8TGluayB0bz17cHJldlJvdXRlfT5cbiAgICAgICAgICAgICAgICA8SWNvbnMuQXJyb3dMZWZ0TGlnaHQgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgICAgIDxJY29ucy5Ib21lTGlnaHQgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1uYXYnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWhvbWUnPlxuICAgICAgICAgIHtwcmV2Um91dGUgJiYgcHJldlJvdXRlICE9PSAnLycgPyAoXG4gICAgICAgICAgICA8TGluayB0bz17cHJldlJvdXRlfT5cbiAgICAgICAgICAgICAgPEljb25zLkFycm93TGVmdExpZ2h0IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgICAgPEljb25zLkhvbWVMaWdodCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWxvZ28nPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29ucy5Mb2dvIGNsYXNzTmFtZT0ndy0xNiBoLTEwJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtc2V0dGluZ3MnPlxuICAgICAgICAgIDxMaW5rIHRvPScvc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEljb25zLlNldHRpbmdzTGlnaHQgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXNlY3Rpb24nPlxuICAgICAgICB7Y292ZXIgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWNvdmVyJz57Y292ZXJ9PC9kaXY+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItbWV0YSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXRpdGxlJz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1kZXNjJz57ZGVzY308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyc+e2RhdGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1pY29uJz57SWNvbiAmJiB0eXBlb2YgSWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IDxJY29uIC8+IDogSWNvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAZGVlcnBhcmsvYm9sdC11aSdcbmltcG9ydCB7IEhlcm9TdHJpbmcgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG50eXBlIEhlcm9Qcm9wcyA9IHtcbiAgaGVyb1N0cmluZzogSGVyb1N0cmluZyxcbiAgZGVzYz86IHN0cmluZyxcbiAgaXNSb290PzogYm9vbGVhbixcbiAgbGlua3M/OiB7IHVybD86IHN0cmluZywgbGFiZWw6IHN0cmluZywgaGFuZGxlcj86ICgpID0+IHZvaWQgfCB1bmRlZmluZWQgfVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVybyh7IGhlcm9TdHJpbmcgPSBbWycnLCAnJ11dLCBkZXNjLCBsaW5rcywgaXNSb290IH06IEhlcm9Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtaGVyby1sb2dvICR7aXNSb290ID8gJ2p1c3RpZnktY2VudGVyJyA6ICdqdXN0aWZ5LWNlbnRlciBtZDpwYi00J31gfT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtgcC00ICR7aXNSb290ID8gJycgOiAnbWQ6cC0wIG1kOnB5LTEwJ31gfSB0bz0nLyc+XG4gICAgICAgICAgPEljb24uTG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc1Jvb3QgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICB7aGVyb1N0cmluZy5tYXAoaGVhZGluZyA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2hlYWRpbmdbMF19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBnYXAteC0wLjUgdGV4dC0yeGwgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGV2ZW46bWwtNSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+e2hlYWRpbmdbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC10aGluJz57aGVhZGluZ1sxXX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Rlc2MgJiYgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG1heC13LVsyMDBweF0gdGV4dC14cyBtdC0zIHRleHQtY2VudGVyJz57ZGVzY308L2Rpdj59XG4gICAgICAgICAge2xpbmtzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvLWxpbmtzJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+XG4gICAgICAgICAgICAgICAgICBsaW5rLnVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLmxhYmVsfSBvbkNsaWNrPXtsaW5rLmhhbmRsZXJ9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGhhbmRsZUNsaWNrQ2hhdENoYW5uZWwgfSBmcm9tICd+L2xpYi9rYWthbydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWxvZ28nPlxuICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgPEljb24uTG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItY29udGFjdCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbH0+XHVDRTc0XHVDRTc0XHVDNjI0XHVEMUExIFx1Q0M0NFx1RDMwNSBcdUJCMzhcdUM3NTg8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0LWRlc2MnPlxuICAgICAgICAgIFx1RDNDOVx1Qzc3QyAxMDowMCAtIDE4OjAwXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgKFx1QzgxMFx1QzJFQ1x1QzJEQ1x1QUMwNCAxMzowMCAtIDE0OjAwIFx1QzgxQ1x1QzY3OCBcdTAwQjcgXHVDOEZDXHVCOUQwL1x1QUNGNVx1RDczNFx1Qzc3QyBcdUM4MUNcdUM2NzgpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdieC1mb290ZXItc25zJz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2RlZXJwYXJrODIxMCcgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1lvdVR1YmUnPlxuICAgICAgICAgICAgPEljb24uWW91dHViZSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2RlZXJwYXJrNycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J1R3aXR0ZXInPlxuICAgICAgICAgICAgPEljb24uVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGVlcnBhcmsnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdJbnN0YWdyYW0nPlxuICAgICAgICAgICAgPEljb24uSW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgS2FrYW86IGFueTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hlY2tLYUthb1NESyA9ICgpID0+IHtcbiAgaWYoIXdpbmRvdy5LYWthby5DaGFubmVsKSB7XG4gICAgd2luZG93Lktha2FvLmluaXQoJ2MzNDgwOGUzNjRkZWVjMWRkMzdhYjhjNjkyMzA1NzllJylcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrQ2hhdENoYW5uZWwgPSAoKSA9PiB7XG4gIGNoZWNrS2FLYW9TREsoKVxuICB3aW5kb3cuS2FrYW8uQ2hhbm5lbC5jaGF0KHtcbiAgICBjaGFubmVsUHVibGljSWQ6ICdfcXdzeGViJyxcbiAgfSlcbn1cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGlja0FkZENoYW5uZWwgPSAoKSA9PiB7XG4gIGNoZWNrS2FLYW9TREsoKVxuICB3aW5kb3cuS2FrYW8uQ2hhbm5lbC5hZGRDaGFubmVsKHtcbiAgICBjaGFubmVsUHVibGljSWQ6ICdfcXdzeGViJyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAZGVlcnBhcmsvYm9sdC11aSdcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCB0eXBlIFByb21vdGlvbiA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgdXJsPzogc3RyaW5nLFxuICBsYWJlbD86IHN0cmluZyxcbiAgY29sb3I6IHtcbiAgICByZWQ6IG51bWJlcixcbiAgICBibHVlOiBudW1iZXIsXG4gICAgZ3JlZW46IG51bWJlcixcbiAgfSxcbiAgdGV4dGNvbG9yOiB7XG4gICAgaGV4OiBzdHJpbmcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYW5uZXIoeyB0aXRsZSwgdXJsLCBjb2xvcjogeyByZWQsIGJsdWUsIGdyZWVuIH0sIHRleHRjb2xvcjogeyBoZXggfSwgbGFiZWwgfTogUHJvbW90aW9uKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lcicgc3R5bGU9e3tcbiAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBgcmdiKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0pYCxcbiAgICAgICctLXR3LXNoYWRvdy1jb2xvcic6IGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sIC41KWAsXG4gICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lci1pY29uJz5cbiAgICAgICAgPEljb24uQmFubmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItdGl0bGUnPjxzcGFuPnt0aXRsZX08L3NwYW4+PC9kaXY+XG4gICAgICB7dXJsICYmIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItbGluayc+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGhyZWY9e3VybH0+e2xhYmVsIHx8ICdcdUJDMTRcdUI4NUNcdUFDMDBcdUFFMzAnfTwvQnV0dG9uPlxuICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHB1Ymxpc2hpbmcgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgUmVjb21tZW5kLCBUZWNoLCBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaXNoaW5nKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCByZWNvbW1lbmRMaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1swXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM3NzhcdUQxMzBcdUIxMzcgXHVDMEFDXHVDNUM1XHVDNzkwIFx1QjMwMFx1RDQ1Q1x1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjhcdUM1RDAgXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQyBcdUJDMEYgVUkgXHVBQzFDXHVCQzFDIFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1RDEzNFx1RDBBNCBcdUFDQzRcdUM1N0QnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1sxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUIzMDBcdUFFMzBcdUM1QzUgU0kgXHVCMkY0XHVCMkY5XHVDNzkwXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjMwMFx1QUREQ1x1QkFBOCBcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjggXHVCOUM4XHVEMDZDXHVDNUM1LCBVSSBcdUFDMUNcdUJDMUMgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSwgXHVDMEMxXHVDOEZDIFx1QkQ4OFx1QUMwMCwgXHVEMTM0XHVEMEE0IFx1QUNDNFx1QzU3RCddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1RhaWx3aW5kQ1NTIFx1QzlDMFx1QzZEMCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDNjk0XHVDOTk4IFx1QUMwMVx1QUQxMVx1QkMxQlx1QjI5NCBcdUM3MjBcdUQyRjhcdUI5QUNcdUQyRjAgXHVEMDc0XHVCNzk4XHVDMkE0IFx1RDUwNFx1QjgwOFx1Qzc4NFx1QzZDQ1x1RDA2Q1x1Qzc3OCBUYWlsd2luZENTU1x1Qjg1QyBcdUFDMUNcdUJDMUMgXHVBQzAwXHVCMkE1XHVENTU4XHVCQTcwIFx1QjJFNFx1QzU5MVx1RDU1QyBDU1MgXHVCQzI5XHVCQzk1XHVCODYwXHVDNzNDXHVCODVDXHVCM0M0IFx1QUMwMFx1QjJBNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1szXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUMyRENcdUI5RThcdUQyRjEgXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQycsXG4gICAgICBjb250ZW50czogWydcdUJCMzhcdUMxMUNcdUM1RDAgXHVBRDZDXHVDODcwXHVDODAxXHVDNzc4IFx1Qzc1OFx1QkJGOFx1Qjk3QyBcdUJEODBcdUM1RUNcdUQ1NThcdUM1RUMgXHVDRDVDXHVCMzAwXHVENTVDIFx1QzJEQ1x1QjlFOFx1RDJGMVx1RDU1QyBcdUFDMUNcdUJDMUNcdUM3NDQgXHVDODFDXHVBQ0Y1XHVENTY5XHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzRdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEgXHVDOTAwXHVDMjE4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzY5NFx1QUQ2Q1x1QzBBQ1x1RDU2RFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDODExXHVBREZDXHVDMTMxXHVDNzQ0IFx1QzkwMFx1QzIxOFx1RDU1OFx1QzVFQyBcdUM3NzhcdUM5OUQgXHVCOUM4XHVEMDZDXHVCOTdDIFx1QkMxQlx1Qzc0NCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEIFx1QUMxQ1x1QkMxQ1x1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbNV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjg1QyBcdUM4MUNcdUM3OTEnLFxuICAgICAgY29udGVudHM6IFsnXHVCMkU0XHVDNTkxXHVENTVDIFBDIFx1RDA2Q1x1Qjg1Q1x1QzJBNCwgXHVCQUE4XHVCMzU4IFx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCwgXHVCQUE4XHVCQzE0XHVDNzdDXHVDNUQwXHVDMTFDIFx1QUMwMVx1QUMwMSBcdUQwNkNcdUFFMzBcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0IFx1QjQxOFx1QjNDNFx1Qjg1RCBcdUI5REVcdUNEQTQgXHVDODFDXHVDNzkxIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPFJlY29tbWVuZCBsaXN0PXtyZWNvbW1lbmRMaXN0fSAvPlxuICAgICAgPFRlY2ggY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnIGxpc3Q9e3RlY2hMaXN0fSAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5cbnR5cGUgUmVjb21tZW5kUHJvcHMgPSB7XG4gIGxpc3Q6IExpc3RJdGVtW10sXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgcGhvdG9zPzogYW55W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWNvbW1lbmQoeyBsaXN0LCBjbGFzc05hbWUgfTogUmVjb21tZW5kUHJvcHMpIHtcbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDNzc0XHVCN0YwXHVCRDg0XHVBRUQ4IFx1Q0Q5NFx1Q0M5QyBcdUI0RENcdUI4MjRcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdCB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFJvd1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIGljb24/OiBKU1guRWxlbWVudCxcbiAgbGlzdDogTGlzdEl0ZW1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7IGljb24sIHRpdGxlLCBsaXN0LCBjbGFzc05hbWUgfTogUm93UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LWNvbnRlbnRzLXJvdyBieC1jb250ZW50cy1yb3ctZXh0ZW5kICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdyBwYi0xIG1kOnBiLTUgcHQtNSBtZDpwdC04Jz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nYngtY29udGVudHMtaDInPlxuICAgICAgICAgIDxzcGFuPnsoaWNvbiAmJiBpY29uKSB8fCA8SWNvbi5CdWxsZXRTb2xpZCAvPn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpc3QgbGlzdD17bGlzdH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCB0eXBlIExpc3RJdGVtID0ge1xuICB0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICB0aHVtYj86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICBjb250ZW50cz86IChzdHJpbmcgfCBKU1guRWxlbWVudClbXSxcbn1cblxuZXhwb3J0IHR5cGUgTGlzdFByb3BzID0ge1xuICBsaXN0OiBMaXN0SXRlbVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGlzdCh7IGxpc3QgfTogTGlzdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT0nYngtbGlzdCc+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lmxlbmd0aCAmJlxuICAgICAgICBsaXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZCc+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS50aHVtYiAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC10aHVtYm5haWwnPntsaXN0SXRlbS50aHVtYn08L2Rpdj59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWJvZHknPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC10aXRsZSc+e2xpc3RJdGVtLnRpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uY29udGVudHMgJiZcbiAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLmNvbnRlbnRzLm1hcCgoY29udGVudCwgY29udGVudEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50SW5kZXh9IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1kZXNjJz5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC91bD5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFRlY2hQcm9wcyA9IHtcbiAgbGlzdDogTGlzdEl0ZW1bXSxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGVjaCh7IGxpc3QsIGNsYXNzTmFtZSB9OiBUZWNoUHJvcHMpIHtcbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVENTZEXHVDMEMxIFx1Q0Q1Q1x1QzJFMFx1Qzc1OCBcdUFFMzBcdUMyMjBcdUM3NDQgXHVDMTIwXHVCM0M0XHVENTc0XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuXG50eXBlIEZsb3dQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmxvdyh7IGNsYXNzTmFtZSB9OiBGbG93UHJvcHMpIHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjE8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUFDQzRcdUM1N0RcdUFFMDggMTAlIFx1Qzc4NVx1QUUwOCcsXG4gICAgICBjb250ZW50czogWydcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjhcdUFDMDAgXHVDMkRDXHVDNzkxXHVCNDE4XHVBRTMwIFx1QzgwNCBcdUJCRjhcdUI5QUMgXHVBQ0M0XHVDNTdEXHVBRTA4XHVDNzQ0IFx1QkMxQlx1QUNFMCBcdUMyRENcdUM3OTFcdUQ1NzRcdUM2OTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjI8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUFFMzBcdUNEMDggXHVDMEMxXHVCMkY0JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUNFRThcdUMxNDksIFx1QzZEMFx1RDU1OFx1QjI5NCBcdUFFMzBcdUIyQTVcdUI0RTRcdUM3NDQgXHVBQ0UwXHVBQzFEXHVCMkQ4XHVCNEU0XHVBQ0ZDIFx1RDU2OFx1QUVEOCBcdUMwQUNcdUM4MDRcdUM1RDAgXHVDOEZDXHVBQ0UwIFx1QkMxQlx1QzU0NFx1QzY5NC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+Mzwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1Qzc1OFx1QjhCMFx1QzVEMCBcdUFEMDBcdUI4MjhcdUI0MUMgXHVDNzkwXHVCOENDIFx1QzIxOFx1QzJFMCcsXG4gICAgICBjb250ZW50czogWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVBRDZDXHVDRDk1IFx1QzgwNCBcdUQ1NDRcdUM2OTRcdUQ1NUMgXHVDNzkwXHVCOENDXHVCNEU0XHVDNzQ0IFx1QjExOFx1QUNBOFx1QkMxQlx1QzU0NFx1QzY5NC4gKFx1Qjg1Q1x1QUNFMCwgXHVDNTQ0XHVDNzc0XHVCNTE0XHVDNUI0LCBcdUM4MUNcdUQ0ODggXHVDODE1XHVCQ0Y0XHVBRDAwXHVCODI4IFx1QzBBQ1x1QzlDNCknXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+NDwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUMyRENcdUM1NDggXHVBQzgwXHVEMUEwJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxNDlcdUM3NTggXHVDMkRDXHVDNTQ4XHVDNzQ0IFx1QkJGOFx1QjlBQyBcdUFDRTBcdUFDMURcdUIyRDhcdUI0RTRcdUFDRkMgXHVENjExXHVDNzU4XHVENTc0XHVDNjk0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz41PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDMjE4XHVDODE1XHVDMEFDXHVENTZEIFx1QkMxOFx1QzYwMSBcdUJDMEYgXHVBQzFDXHVCQzFDIFx1QzlDNFx1RDU4OScsXG4gICAgICBjb250ZW50czogWydcdUJFNjBcdUI5NzRcdUFDOEMgXHVBQzFDXHVCQzFDIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjY8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUIzNzBcdUJBQTgnLFxuICAgICAgY29udGVudHM6IFsnXHVDQ0FCIFx1QzJEQ1x1QzVGMCBcdUQ2QzQgXHVDMjE4XHVDODE1XHVDMEFDXHVENTZEIFx1QkMxOFx1QzYwMSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz43PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDODg1IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM2MjRcdUQ1MDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDNjI0XHVENTA4IFx1RDZDNCBcdUJBQThcdUIyQzhcdUQxMzBcdUI5QzEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+ODwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1Qzc5NFx1QUUwOCA5MCUgXHVDNzg1XHVBRTA4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOCBcdUM2NDRcdUI4Q0MnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjVcdUM3NDAgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc3NCBcdUM3NzRcdUI5MDRcdUM4MzhcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgQ3Jld3NQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICBwaG90b3M6IGFueVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3Jld3MoeyBwaG90b3MsIGNsYXNzTmFtZSB9OiBDcmV3c1Byb3BzKSB7XG4gIGNvbnN0IFtjcmV3czFUaHVtYiwgY3Jld3MyVGh1bWIsIGNyZXdzM1RodW1iXSA9IHBob3Rvc1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17Y3Jld3MxVGh1bWJ9IC8+LFxuICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzgvXHVBQzFDXHVCQzFDIFwiXHVDNkE5XHVDNkE5XCInLFxuICAgICAgY29udGVudHM6IFsnSVRcdUNENUNcdUM4MDRcdUMxMjBcdUM1RDBcdUMxMUMgXHVDMkY4XHVDNkNDXHVDNjI4IFx1QUNCRFx1QjgyNSAxMFx1QjE0NCBcdUM3NzRcdUMwQzFcdUM3NTggXHVDODA0XHVCQjM4XHVBQzAwJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e2NyZXdzMlRodW1ifSAvPixcbiAgICAgIHRpdGxlOiAnXHVENTA0XHVCODYwXHVEMkI4XHVDNUQ0XHVCNERDL1x1QkMzMVx1QzVENFx1QjREQyBcdUFDMUNcdUJDMUMgXCJcdUI2OUNcdUMyRERcdUM3NzRcIicsXG4gICAgICBjb250ZW50czogWydJVFx1Q0Q1Q1x1QzgwNFx1QzEyMFx1QzVEMFx1QzExQyBcdUMyRjhcdUM2Q0NcdUM2MjggXHVBQ0JEXHVCODI1IDEwXHVCMTQ0IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MDRcdUJCMzhcdUFDMDAnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17Y3Jld3MzVGh1bWJ9IC8+LFxuICAgICAgdGl0bGU6ICdcdUIzNzBcdUM3NzRcdUQxMzAvXHVDNzc4XHVENTA0XHVCNzdDIFx1QUMxQ1x1QkMxQyBcIlx1QkE4NVx1Qzc5MFwiJyxcbiAgICAgIGNvbnRlbnRzOiBbJ0lUXHVDRDVDXHVDODA0XHVDMTIwXHVDNUQwXHVDMTFDIFx1QzJGOFx1QzZDQ1x1QzYyOCBcdUFDQkRcdUI4MjUgMTBcdUIxNDQgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgwNFx1QkIzOFx1QUMwMCddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDODAwXHVENzZDIFx1RDMwMFx1Qzc0MCBcdUM4MDRcdUJCMzhcdUFDMDBcdUI0RTRcdUI4NUMgXHVBRDZDXHVDMTMxIFx1QjQxOFx1QzVCNFx1Qzc4OFx1QzVCNFx1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcblxudHlwZSBGQVFQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRkFRKHsgY2xhc3NOYW1lIH06IEZBUVByb3BzKSB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM3OTFcdUM1QzUgXHVBRTMwXHVBQzA0XHVDNzQwIFx1QkNGNFx1RDFCNSBcdUM1QkNcdUI5QzhcdUIwOTggXHVBQzc4XHVCOUFDXHVCMDk4XHVDNjk0PycsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICA8dWwga2V5PSdzZXJ2aWNlLWZhcS0wJyBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cdUQ2NERcdUJDRjRcdUM2QTkgXHVDNkY5XHVEMzk4XHVDNzc0XHVDOUMwXHVCMjk0IDNcdUM3N0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUFFMzBcdUM1QzUgXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwXHVCMjk0IDVcdUM3N0M8L2xpPlxuICAgICAgICAgIDxsaT5cdUJFMENcdUI3OUNcdUI1MjkgXHVDRUU4XHVDMTI0XHVEMzA1XHVDNzQwIDEwXHVDNzdDPC9saT5cbiAgICAgICAgPC91bD4sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICcxXHVCMTQ0IFx1QkIzNFx1QzBDMSBBL1NcdUM3NTggXHVCQzk0XHVDNzA0XHVCMjk0IFx1QzVCNFx1QjUxNFx1QUU0Q1x1QzlDMCBcdUM3NzhcdUFDMDBcdUM2OTQ/JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgIDx1bCBrZXk9J3NlcnZpY2UtZmFxLTEnIGNsYXNzTmFtZT0nYngtbGlzdC1pdGVtcyc+XG4gICAgICAgICAgPGxpPlx1RDE0RFx1QzJBNFx1RDJCOCBcdUMyMThcdUM4MTU8L2xpPlxuICAgICAgICAgIDxsaT5cdUM3NzRcdUJCRjhcdUM5QzAgXHVBRDUwXHVDQ0I0IFx1QkMwRiBcdUNEOTRcdUFDMDAsIFx1QzBBRFx1QzgxQzwvbGk+XG4gICAgICAgICAgPGxpPlx1QkUwQ1x1Qjc5Q1x1QjUyOSBcdUNFRUNcdUI3RUMgXHVCQ0MwXHVBQ0JEPC9saT5cbiAgICAgICAgICA8bGk+XHVEMzk4XHVDNzc0XHVDOUMwIFx1Q0Q5NFx1QUMwMCBcdUM3OTFcdUM1QzVcdUM3NDAgXHVDRDk0XHVBQzAwIFx1QzY5NFx1QUUwOFx1Qzc3NCBcdUJDMUNcdUMwREQgXHVENTY5XHVCMkM4XHVCMkU0LihcdUJDQzRcdUIzQzQgXHVENjExXHVDNzU4KTwvbGk+XG4gICAgICAgIDwvdWw+LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1Qzc5MFx1QzhGQ1x1Qzc4OFx1QjI5NCBcdUM5QzhcdUJCMzhcdUI0RTRcdUM3NzRcdUM2MDhcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgUmVmdW5kUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnVuZCh7IGNsYXNzTmFtZSB9OiBSZWZ1bmRQcm9wcykge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVBRTMwXHVCQ0Y4IFx1RDY1OFx1QkQ4OCBcdUFERENcdUM4MTUnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QzgwNFx1QkIzOFx1QUMwMFx1QzY0MCBcdUM3NThcdUI4QjBcdUM3NzhcdUM3NTggXHVDMEMxXHVENjM4IFx1RDYxMVx1Qzc1OFx1RDU1OFx1QzVEMCBcdUNDQURcdUM1N0QgXHVDQ0EwXHVENjhDIFx1QkMwRiBcdUQ2NThcdUJEODhcdUM3NzQgXHVBQzAwXHVCMkE1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICAgICdcdUM3OTFcdUM1QzVcdUM3NzQgXHVDNjQ0XHVCOENDXHVCNDFDIFx1Qzc3NFx1RDZDNCBcdUI2MTBcdUIyOTQgXHVDNzkwXHVCOENDLCBcdUQ1MDRcdUI4NUNcdUFERjhcdUI3QTggXHVCNEYxIFx1QzExQ1x1QkU0NFx1QzJBNFx1QUMwMCBcdUM4MUNcdUFDRjVcdUI0MUMgXHVDNzc0XHVENkM0XHVDNUQwXHVCMjk0IFx1RDY1OFx1QkQ4OFx1Qzc3NCBcdUJEODhcdUFDMDBcdUQ1NjlcdUIyQzhcdUIyRTQuICggXHVDMThDXHVCRTQ0XHVDNzkwXHVCQ0Y0XHVENjM4XHVCQzk1IDE3XHVDODcwIDJcdUQ1NkRcdUM3NTggNVx1Qzg3MC4gXHVDNkE5XHVDNUVEIFx1QjYxMFx1QjI5NCBcdTMwMENcdUJCMzhcdUQ2NTRcdUMwQjBcdUM1QzVcdUM5QzRcdUQ3NjUgXHVBRTMwXHVCQ0Y4XHVCQzk1XHUzMDBEIFx1QzgxQzJcdUM4NzAgXHVDODFDNVx1RDYzOFx1Qzc1OCBcdUI1MTRcdUM5QzBcdUQxMzhcdUNGNThcdUQxNTBcdUNFMjBcdUM3NTggXHVDODFDXHVBQ0Y1XHVDNzc0IFx1QUMxQ1x1QzJEQ1x1QjQxQyBcdUFDQkRcdUM2QjBcdUM1RDAgXHVENTc0XHVCMkY5KScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM4MDRcdUJCMzhcdUFDMDAgXHVDQzQ1XHVDNzg0IFx1QzBBQ1x1QzcyMCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDODA0XHVCQjM4XHVBQzAwXHVDNzU4IFx1QURDMFx1Q0M0NVx1QzBBQ1x1QzcyMFx1Qjg1QyBcdUIyRjlcdUNEMDggXHVDNTdEXHVDODE1XHVENTg4XHVCMzU4IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUJCRjhcdUM3NzRcdUQ1ODkgXHVENjM5XHVDNzQwIFx1QkNGNFx1RDNCOFx1QzgwMVx1Qzc3OCBcdUFEMDBcdUM4MTBcdUM1RDBcdUMxMUMgXHVDMkVDXHVBQzAxXHVENTU4XHVBQzhDIFx1Qzc5OFx1QkFCQiBcdUM3NzRcdUQ1ODlcdUQ1NUMgXHVBQ0JEXHVDNkIwIFx1QUNCMFx1QzgxQyBcdUFFMDhcdUM1NjEgXHVDODA0XHVDQ0I0IFx1RDY1OFx1QkQ4OFx1Qzc3NCBcdUFDMDBcdUIyQTVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1Qzc1OFx1QjhCMFx1Qzc3OCBcdUNDNDVcdUM3ODQgXHVDMEFDXHVDNzIwJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVDOUM0XHVENTg5IFx1QjNDNFx1QzkxMSBcdUM3NThcdUI4QjBcdUM3NzhcdUM3NTggXHVBREMwXHVDQzQ1XHVDMEFDXHVDNzIwXHVCODVDIFx1Qzc3OFx1RDU3NCBcdUQ2NThcdUJEODhcdUM3NDQgXHVDNjk0XHVDQ0FEXHVENTYwIFx1QUNCRFx1QzZCMCwgXHVDMEFDXHVDNkE5IFx1QUUwOFx1QzU2MVx1Qzc0NCBcdUM1NDRcdUI3OThcdUM2NDAgXHVBQzE5XHVDNzc0IFx1QUNDNFx1QzBCMCBcdUQ2QzQgXHVDRDFEIFx1QUUwOFx1QzU2MVx1Qzc1OCAxMCVcdUI5N0MgXHVBQ0Y1XHVDODFDXHVENTU4XHVDNUVDIFx1RDY1OFx1QkQ4OFx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgICA8dWwga2V5PSdzZXJ2aWNlLXJlZnVuZC0yJyBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cdUNEMUQgXHVDNzkxXHVDNUM1XHVCN0M5XHVDNzU4IDEvMyBcdUFDQkRcdUFDRkMgXHVDODA0IDogXHVDNzc0XHVCQkY4IFx1QjBBOVx1QkQ4MFx1RDU1QyBcdUM2OTRcdUFFMDhcdUM3NTggMi8zXHVENTc0XHVCMkY5XHVDNTYxPC9saT5cbiAgICAgICAgICA8bGk+XHVDRDFEIFx1Qzc5MVx1QzVDNVx1QjdDOVx1Qzc1OCAxLzIgXHVBQ0JEXHVBQ0ZDIFx1QzgwNCA6IFx1Qzc3NFx1QkJGOCBcdUIwQTlcdUJEODBcdUQ1NUMgXHVDNjk0XHVBRTA4XHVDNzU4IDEvMlx1RDU3NFx1QjJGOVx1QzU2MTwvbGk+XG4gICAgICAgICAgPGxpPlx1Q0QxRCBcdUM3OTFcdUM1QzVcdUI3QzlcdUM3NTggMS8yIFx1QUNCRFx1QUNGQyBcdUQ2QzQgOiBcdUJDMThcdUQ2NThcdUQ1NThcdUM5QzAgXHVDNTRBXHVDNzRDPC9saT5cbiAgICAgICAgPC91bD4sXG4gICAgICBdLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDREU4XHVDMThDIFx1QkMwRiBcdUQ2NThcdUJEODhcdUFERENcdUM4MTVcdUM3NDQgXHVDNTRDXHVCODI0XHVCNERDXHVCOUI0XHVBQzhDXHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgc2luZ2xlcGFnZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyBSZWNvbW1lbmQsIFRlY2gsIEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZXBhZ2UoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IGxpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ0lUIFx1QUUzMFx1QzVDNSBcdUI5QzhcdUNGMDBcdUQzMDUgXHVCMkY0XHVCMkY5XHVDNzkwXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjhGMFx1QjgxQiBcdUM3NzRcdUJDQTRcdUQyQjggXHVBRTRDXHVDOUMwIFx1Qzc3OFx1RDEzMFx1QjgwOVx1QzE1OCBcdUFDMUNcdUJDMUMgXHVEM0VDXHVENTY4IFx1QzY5NFx1QUQ2Q1x1QzBBQ1x1RDU2RFx1Qzc0NCBcdUNENUNcdUIzMDBcdUQ1NUMgXHVCOURFXHVDREE0IFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzFGQ1x1RDU1MVx1QkFCMCBcdUMwQUNcdUM3QTVcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDMkUwXHVBRERDIFx1QzcyMFx1Qzc4NSwgXHVCOUFDXHVEMTUwXHVDMTU4XHVCNEYxIFx1QjlDOFx1Q0YwMFx1RDMwNVx1QzVEMCBcdUQ2NUNcdUM2QTlcdUQ1NThcdUFDRTAgXHVDMkY2XHVDNzQwIFx1QUMwNFx1QjJFOFx1RDU1QyBcdUM3NzRcdUJDQTRcdUQyQjggXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5zaW5nbGVwYWdlWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Qzc3OFx1RDE0Q1x1QjlBQ1x1QzVCNCBcdUFDMDBcdUFDOEMgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzBBQ1x1QzVDNVx1Qzc0NCBcdUFDMDRcdUIyRThcdUQ1NThcdUFDOEMgXHVDMThDXHVBQzFDXHVENTU4XHVBQ0UwIFx1Qzc3OFx1RDEzMFx1QjEzN1x1QzVEMCBcdUQ2NERcdUJDRjRcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QjNDNFx1Qjg1RCBcdUI3OUNcdUI1MjkgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDMkUwIFx1RDE0Q1x1RDA2QyBcdUQyQjhcdUI5QUMnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ05leHRKUy9SZW1peCBSZWFjdCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkMsIE5vZGVKUywgUG9zdGdyZVNRTFx1QUUzMFx1QkMxOCBcdUNENUNcdUMyRTAgXHVBRTMwXHVDMjIwXHVCODVDIFx1QUMxQ1x1QkMxQyBcdUQ1NjhcdUM3M0NcdUI4NUNcdUMzNjggXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QkNCQ1x1QzZCNCBcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0NcdUM4MUNcdUFDRjVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdTRU8gXHVCM0M0XHVDNzg1JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUFENkNcdUFFMDAsIFx1QjEyNFx1Qzc3NFx1QkM4NCBcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzRcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0XHVENTU4XHVDNUVDIFx1Qzc5MVx1QzVDNVx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuIFx1QUM4MFx1QzBDOVx1Qzc0MCBcdUM1QjRcdUI1MTRcdUM1RDBcdUMxMUNcdUIwOTggXHVDMjdEXHVBQ0UwIFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUM3QTUgXHVDMEMxXHVDNzA0XHVDNUQwIFx1QjdBRFx1RDA2Q1x1QjQyMCBcdUMyMThcdUM3ODhcdUIzQzRcdUI4NUQgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUQzOThcdUM3NzRcdUM5QzBcdUI4NUMgXHVDODFDXHVDNzkxJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjJFNFx1QzU5MVx1RDU1QyBQQyBcdUQwNkNcdUI4NUNcdUMyQTQsIFx1QkFBOFx1QjM1OCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAsIFx1QkFBOFx1QkMxNFx1Qzc3Q1x1QzVEMFx1QzExQyBcdUFDMDFcdUFDMDEgXHVEMDZDXHVBRTMwXHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NCBcdUI0MThcdUIzQzRcdUI4NUQgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxSZWNvbW1lbmQgbGlzdD17bGlzdH0gLz5cbiAgICAgIDxUZWNoIGxpc3Q9e3RlY2hMaXN0fSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZycgLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBhcHBkZXNpZ24gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBkZXNpZ24oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgYnJhbmRpbmcgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmFuZGluZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgaG9tZXBhZ2UgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgUmVjb21tZW5kLCBUZWNoLCBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgbGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmhvbWVwYWdlWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Qzc3OFx1RDE0Q1x1QjlBQ1x1QzVCNCBcdUFDMDBcdUFDOEMgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QUMwNFx1QjJFOFx1RDc4OCBcdUMwQUNcdUM1QzVcdUM3NDQgXHVDMThDXHVBQzFDXHVENTU4XHVBQ0UwIFx1RDY0RFx1QkNGNFx1RDU1OFx1QUNFMCBcdUMyRjZcdUM3NDAgXHVDMEFDXHVDN0E1XHVCMkQ4XHVCNEU0XHVDNzQ0IFx1QzcwNFx1RDU1QyBcdUM2RjlcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmhvbWVwYWdlWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzkxMVx1QzE4Q1x1QUUzMFx1QzVDNSBcdUIzMDBcdUQ0NUNcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVBRTMwXHVDNUM1XHVDNzQ0IFx1QzE4Q1x1QUMxQ1x1RDU1OFx1QUNFMCBcdUM4MTVcdUJDRjRcdUI5N0MgXHVDODFDXHVBQ0Y1XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1QyBcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5ob21lcGFnZVsyXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUMyRERcdUIyRjkgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzBDOFx1Qjg1Q1x1QzZCNCBcdUFDMDBcdUFDOEMgXHVCNjEwXHVCMjk0IFx1QkM5NVx1Qzc3OFx1Qzc0NCBcdUMyRENcdUM3OTFcdUQ1NThcdUFFMzAgXHVDODA0IFx1QUMwNFx1RDMxMCwgXHVCODVDXHVBQ0UwLCBcdUJBNTRcdUIyNzRcdUQzMTBcdUI0RjFcdUM3NTggXHVCRTBDXHVCNzlDXHVCNTI5IFx1QkUwQ1x1Qjc5Q1x1QjREQyBcdUFDMDBcdUM3NzRcdUI0REMgXHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDMkUwIFx1RDE0Q1x1RDA2QyBcdUQyQjhcdUI5QUMnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ05leHRKUy9SZW1peCBSZWFjdCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkMsIE5vZGVKUywgUG9zdGdyZVNRTFx1QUUzMFx1QkMxOCBcdUNENUNcdUMyRTAgXHVBRTMwXHVDMjIwXHVCODVDIFx1QUMxQ1x1QkMxQyBcdUQ1NjhcdUM3M0NcdUI4NUNcdUMzNjggXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QkNCQ1x1QzZCNCBcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0NcdUM4MUNcdUFDRjVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdTRU8gXHVCM0M0XHVDNzg1JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUFENkNcdUFFMDAsIFx1QjEyNFx1Qzc3NFx1QkM4NCBcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzRcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0XHVENTU4XHVDNUVDIFx1Qzc5MVx1QzVDNVx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuIFx1QUM4MFx1QzBDOVx1Qzc0MCBcdUM1QjRcdUI1MTRcdUM1RDBcdUMxMUNcdUIwOTggXHVDMjdEXHVBQ0UwIFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUM3QTUgXHVDMEMxXHVDNzA0XHVDNUQwIFx1QjdBRFx1RDA2Q1x1QjQyMCBcdUMyMThcdUM3ODhcdUIzQzRcdUI4NUQgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUQzOThcdUM3NzRcdUM5QzBcdUI4NUMgXHVDODFDXHVDNzkxJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjJFNFx1QzU5MVx1RDU1QyBQQyBcdUQwNkNcdUI4NUNcdUMyQTQsIFx1QkFBOFx1QjM1OCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAsIFx1QkFBOFx1QkMxNFx1Qzc3Q1x1QzVEMFx1QzExQyBcdUFDMDFcdUFDMDEgXHVEMDZDXHVBRTMwXHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NCBcdUI0MThcdUIzQzRcdUI4NUQgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxSZWNvbW1lbmQgbGlzdD17bGlzdH0gLz5cbiAgICAgIDxUZWNoIGxpc3Q9e3RlY2hMaXN0fSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZycgLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0IH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICAgIHNpZGViYXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHsuLi57IHBvc3QgfX0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgInR5cGUgQXZhdGFyUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGljdHVyZToge1xuICAgIHVybD86IHN0cmluZyxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEF2YXRhcih7IG5hbWUsIHBpY3R1cmUgfTogQXZhdGFyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyX19jb250YWluZXInPlxuICAgICAgPGltZyBzcmM9e3BpY3R1cmUudXJsfSBjbGFzc05hbWU9J2F2YXRhcl9fcGljdHVyZScgYWx0PXtuYW1lfSAvPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX25hbWUnPntuYW1lfTwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxudHlwZSBEYXRlUHJvcHMgPSB7XG4gIGRhdGVTdHJpbmc6IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGUoeyBkYXRlU3RyaW5nIH06IERhdGVQcm9wcykge1xuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZylcbiAgcmV0dXJuIDx0aW1lIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT57Zm9ybWF0KGRhdGUsICdMTExMXHRkLCB5eXl5Jyl9PC90aW1lPlxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ34vY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgeyBEYXRlIH0gZnJvbSAnfi9jb21wb25lbnRzL0RhdGUnXG5pbXBvcnQgeyBQb3N0c1Byb3BzIH0gZnJvbSAnfi90eXBlcydcblxuZXhwb3J0IHsgUG9zdCB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cy9Qb3N0J1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdHMoeyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5IH06IFBvc3RzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2ZpcnN0UG9zdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2J4LXBvc3QnPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnXG4gICAgICAgICAgICAgIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgZmlyc3RQb3N0LmNhdGVnb3J5Py5uYW1lPy50b0xvd2VyQ2FzZSgpIHx8ICdwb3N0cyd9LyR7Zmlyc3RQb3N0LnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtdGh1bWInPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXRodW1ibmFpbCcgZGF0YT17Zmlyc3RQb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtbWV0YSc+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57Zmlyc3RQb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kZXNjJz57Zmlyc3RQb3N0LmV4Y2VycHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kZXNjJz5cbiAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17Zmlyc3RQb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtmaXJzdFBvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e2ZpcnN0UG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3RoZXJQb3N0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b3RoZXJQb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdieC1wb3N0IGJ4LW90aGVyLXBvc3QnIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnXG4gICAgICAgICAgICAgICAgICB0bz17YC8ke2NhdGVnb3J5IHx8IHBvc3QuY2F0ZWdvcnk/Lm5hbWU/LnRvTG93ZXJDYXNlKCkgfHwgJ3Bvc3RzJ30vJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYic+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXRodW1ibmFpbCcgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LW1ldGEnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2J4LXBvc3QtdGl0bGUnPntwb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGVzYyc+e3Bvc3QuZXhjZXJwdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1kZXNjJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBTdHJ1Y3R1cmVkVGV4dCwgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgUG9zdCBhcyBQb3N0VHlwZSB9IGZyb20gJ34vdHlwZXMnXG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZSxcbiAgbW9yZVBvc3RzPzogUG9zdFR5cGVbXSxcbiAgY2F0ZWdvcnlJZD86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IC8qICwgbW9yZVBvc3RzICAqLyB9OiBQb3N0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWFydGljbGUnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYXJ0aWNsZS1ib2R5Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvc2Utc20gcHJvc2Utc2xhdGUgZGFyazpwcm9zZS1pbnZlcnQnPlxuICAgICAgICAgICAgPFN0cnVjdHVyZWRUZXh0XG4gICAgICAgICAgICAgIGRhdGE9e3Bvc3QuY29udGVudH1cbiAgICAgICAgICAgICAgcmVuZGVyQmxvY2s9eyh7IHJlY29yZCB9OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLl9fdHlwZW5hbWUgPT09ICdJbWFnZUJsb2NrUmVjb3JkJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSBjbGFzc05hbWU9J2J4LWFydGljbGUtaW1hZ2UnIGRhdGE9e3JlY29yZC5pbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvbid0IGtub3cgaG93IHRvIHJlbmRlciBhIGJsb2NrITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocmVjb3JkLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fX3RpdGxlJz5Nb3JlIHBvc3RzPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQnPlxuICAgICAgICAgIHttb3JlUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30gY2xhc3NOYW1lPSdncmlkX19pdGVtJz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPSdncmlkX19saW5rJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nZ3JpZF9faW1hZ2UnIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2dyaWRfX3RpdGxlJz57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RhdGUnPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBub3RpY2UgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICB7Zmlyc3RQb3N0ICYmIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5OiAnbm90aWNlcycgfX0gLz59XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnNldCgncHJldmlldycsICd5ZXMnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnVuc2V0KCdwcmV2aWV3JylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgICAgc2lkZWJhcixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3QgcG9zdD17cG9zdH0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0cyBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3Vic2NyaXB0aW9uID0gYXdhaXQgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxuICByZXR1cm4ge1xuICAgIC4uLnF1ZXJ5U3Vic2NyaXB0aW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBwb3N0czogW2ZpcnN0UG9zdCwgLi4ub3RoZXJQb3N0c10sXG4gICAgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9ucyc+XG4gICAgICAgIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgICAgc2lkZWJhcixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3Qgey4uLnsgcG9zdCB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IG5ld3MgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICB7Zmlyc3RQb3N0ICYmIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5OiAnbmV3cycgfX0gLz59XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBhZ2Utcm93Jz48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBMb3R0aWUgZnJvbSAnbG90dGllLXJlYWN0J1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgaGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbCwgaGFuZGxlQ2xpY2tBZGRDaGFubmVsIH0gZnJvbSAnfi9saWIva2FrYW8nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ0BkZWVycGFyay9ib2x0LXVpJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgY293Ym95SGF0RmFjZSBmcm9tICd+L2xvdHRpZXMvY293Ym95LWhhdC1mYWNlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wYWdlLXJvdyBwYi0yMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgcHQtMjAnPlxuICAgICAgICAgICAgPExvdHRpZSBsb29wIGF1dG9wbGF5IGFuaW1hdGlvbkRhdGE9e2Nvd2JveUhhdEZhY2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxiIGNsYXNzTmFtZT0ndGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC10aGluIG1iLTUgdGV4dC1zbGF0ZS02MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBkYXJrOmhvdmVyOnRleHQtc2xhdGUtMjAwJz5cbiAgICAgICAgICAgICAgXHVDQzQ0XHVEMzA1IFx1QkIzOFx1Qzc1OFxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtIG1kOnRleHQtYmFzZSBvcGFjaXR5LTgwJz5cdUQzQzlcdUM3N0MgMTA6MDAgLSAxODowMDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14cyBtZDp0ZXh0LXNtIG9wYWNpdHktNTAnPihcdUM4MTBcdUMyRUNcdUMyRENcdUFDMDQgMTM6MDAgLSAxNDowMCBcdUM4MUNcdUM2NzggXHUwMEI3IFx1QzhGQ1x1QjlEMC9cdUFDRjVcdUQ3MzRcdUM3N0MgXHVDODFDXHVDNjc4KTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtMic+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8SWNvbnMuS2FrYW8gLz59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQWRkQ2hhbm5lbH0+XG4gICAgICAgICAgICAgICAgXHVDQzQ0XHVCMTEwIFx1Q0Q5NFx1QUMwMFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8SWNvbnMuS2FrYW8gLz59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2hhdENoYW5uZWx9PlxuICAgICAgICAgICAgICAgIFx1Q0U3NFx1RDFBMSBcdUNDNDRcdUQzMDVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlLCBpc1dpZGU6IHRydWUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcHJpdmFjeSBwcm9zZS1zbSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyIGxoNiBiczUgdHM0Jz5cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7KCdodHRwczovL3d3dy5ib2x0LXV4LmNvbSdcdUM3NzRcdUQ1NTggJ0JPTFQtVVgnKTwvZW0+XHVDNzQwKFx1QjI5NCkgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XG4gICAgICAgICAgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzMwXHVDODcwXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNGNFx1RDYzOFx1RDU1OFx1QUNFMCBcdUM3NzRcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUNFMFx1Q0RBOVx1Qzc0NCBcdUMyRTBcdUMxOERcdUQ1NThcdUFDRTAgXHVDNkQwXHVENjVDXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1RDU2MCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEXG4gICAgICAgICAgXHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDQgXHVDMjE4XHVCOUJEXHUwMEI3XHVBQ0Y1XHVBQzFDXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICBcdTI1Q0IgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MjAyMjwvZW0+XHVCMTQ0IDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4zPC9lbT5cdUM2RDR7JyAnfVxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4xNzwvZW0+XHVCRDgwXHVEMTMwIFx1QzgwMVx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzFcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQyBcdUJBQTlcdUM4MDEpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OygnaHR0cHM6Ly93d3cuYm9sdC11eC5jb20nXHVDNzc0XHVENTU4ICdCT0xULVVYJyk8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUJBQTlcdUM4MDFcdUM3NDRcbiAgICAgICAgICBcdUM3MDRcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU2OVx1QjJDOFx1QjJFNC4gXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUIyOTQgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QkFBOVx1QzgwMSBcdUM3NzRcdUM2NzhcdUM3NTggXHVDNkE5XHVCM0M0XHVCODVDXHVCMjk0IFx1Qzc3NFx1QzZBOVx1QjQxOFx1QzlDMCBcdUM1NEFcdUM3M0NcdUJBNzAgXHVDNzc0XHVDNkE5IFx1QkFBOVx1QzgwMVx1Qzc3NFxuICAgICAgICAgIFx1QkNDMFx1QUNCRFx1QjQxOFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMxOFx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVCQ0M0XHVCM0M0XHVDNzU4IFx1QjNEOVx1Qzc1OFx1Qjk3QyBcdUJDMUJcdUIyOTQgXHVCNEYxIFx1RDU0NFx1QzY5NFx1RDU1QyBcdUM4NzBcdUNFNThcdUI5N0MgXHVDNzc0XHVENTg5XHVENTYwIFx1QzYwOFx1QzgxNVx1Qzc4NVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4xLiBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1Q0Y1OFx1RDE1MFx1Q0UyMCBcdUM4MUNcdUFDRjUsIFx1QjlERVx1Q0RBNFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4yLiBcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTk8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgICAgXHVDNzc4XHVBRDZDXHVEMUI1XHVBQ0M0XHVENTU5XHVDODAxIFx1RDJCOVx1QzEzMVx1QzVEMCBcdUI1MzBcdUI5NzggXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSBcdUJDMEYgXHVBRDExXHVBQ0UwIFx1QUM4Q1x1QzdBQyAsIFx1QzExQ1x1QkU0NFx1QzJBNFx1Qzc1OCBcdUM3MjBcdUQ2QThcdUMxMzEgXHVENjU1XHVDNzc4LCBcdUM4MTFcdUMxOERcdUJFNDhcdUIzQzQgXHVEMzBDXHVDNTQ1IFx1QjYxMFx1QjI5NCBcdUQ2OENcdUM2RDBcdUM3NTggXHVDMTFDXHVCRTQ0XHVDMkE0XG4gICAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM1RDAgXHVCMzAwXHVENTVDIFx1RDFCNVx1QUNDNCBcdUI0RjFcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMyXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUMgXHVCQzBGIFx1QkNGNFx1QzcyMCBcdUFFMzBcdUFDMDQpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDs8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QkM5NVx1QjgzOVx1QzVEMCBcdUI1MzBcdUI5NzggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1MDBCN1x1Qzc3NFx1QzZBOVx1QUUzMFx1QUMwNCBcdUI2MTBcdUIyOTRcbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUI4NUNcdUJEODBcdUQxMzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzIxOFx1QzlEMSBcdUMyRENcdUM1RDAgXHVCM0Q5XHVDNzU4XHVCQzFCXHVDNzQwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdTAwQjdcdUM3NzRcdUM2QTlcdUFFMzBcdUFDMDQgXHVCMEI0XHVDNUQwXHVDMTFDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdTAwQjdcdUJDRjRcdUM3MjBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QUMwMVx1QUMwMVx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUJDRjRcdUM3MjAgXHVBRTMwXHVBQzA0XHVDNzQwIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+MS4mbHQ7XHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5Jmd0OzwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlxuICAgICAgICAgICAgJmx0O1x1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOSZndDtcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QjI5NCBcdUMyMThcdUM5RDEuXHVDNzc0XHVDNkE5XHVDNUQwIFx1QUQwMFx1RDU1QyBcdUIzRDlcdUM3NThcdUM3N0NcdUI4NUNcdUJEODBcdUQxMzAmbHQ7XHVDOUMwXHVDQ0I0XHVDNUM2XHVDNzc0IFx1RDMwQ1x1QUUzMCZndDtcdUFFNENcdUM5QzBcbiAgICAgICAgICAgIFx1QzcwNCBcdUM3NzRcdUM2QTlcdUJBQTlcdUM4MDFcdUM3NDQgXHVDNzA0XHVENTU4XHVDNUVDIFx1QkNGNFx1QzcyMC5cdUM3NzRcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XHVCQ0Y0XHVDNzIwXHVBREZDXHVBQzcwIDogXHVBRDExXHVBQ0UwPC9saT5cbiAgICAgICAgICA8bGk+XHVBRDAwXHVCODI4XHVCQzk1XHVCODM5IDogXHVENDVDXHVDMkRDL1x1QUQxMVx1QUNFMFx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVBRTMwXHVCODVEIDogNlx1QUMxQ1x1QzZENDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzYwOFx1QzY3OFx1QzBBQ1x1QzcyMCA6IDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzNcdUM4NzAoXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNjQwIFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc1OCBcdUFEOENcdUI5QUNcdTAwQjdcdUM3NThcdUJCMzQgXHVCQzBGIFx1QURGOCBcdUQ1ODlcdUMwQUNcdUJDMjlcdUJDOTUpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM1QjhcdUM4MUNcdUI0RTBcdUM5QzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1MDBCN1x1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1MDBCN1x1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUM2OTRcdUFENkMgXHVCNEYxXHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1Qjk3QyBcdUQ1ODlcdUMwQUNcdUQ1NjAgXHVDMjE4XG4gICAgICAgICAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MSBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFEOENcdUI5QUMgXHVENTg5XHVDMEFDXHVCMjk0ICZsdDtCT0xULVVYJmd0O1x1QzVEMCBcdUIzMDBcdUQ1NzQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUMyRENcdUQ1ODlcdUI4MzkgXHVDODFDNDFcdUM4NzBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUMxMUNcdUJBNzQsXG4gICAgICAgICAgXHVDODA0XHVDNzkwXHVDNkIwXHVEM0I4LCBcdUJBQThcdUMwQUNcdUM4MDRcdUMxQTEoRkFYKSBcdUI0RjFcdUM3NDQgXHVEMUI1XHVENTU4XHVDNUVDIFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDNzNDXHVCQTcwICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1Qzc3NFx1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDOUMwXHVDQ0I0IFx1QzVDNlx1Qzc3NCBcdUM4NzBcdUNFNThcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDYyIFx1QzgxQzFcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUQ4Q1x1QjlBQyBcdUQ1ODlcdUMwQUNcdUIyOTQgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3NFx1QjA5OCBcdUM3MDRcdUM3ODRcdUM3NDQgXHVCQzFCXHVDNzQwIFx1Qzc5MCBcdUI0RjEgXHVCMzAwXHVCOUFDXHVDNzc4XHVDNzQ0IFx1RDFCNVx1RDU1OFx1QzVFQyBcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cdUM3NzRcbiAgICAgICAgICBcdUFDQkRcdUM2QjAgXHUyMDFDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQyBcdUJDMjlcdUJDOTVcdUM1RDAgXHVBRDAwXHVENTVDIFx1QUNFMFx1QzJEQyhcdUM4MUMyMDIwLTdcdUQ2MzgpXHUyMDFEIFx1QkNDNFx1QzlDMCBcdUM4MUMxMVx1RDYzOCBcdUMxMUNcdUMyRERcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzcwNFx1Qzc4NFx1QzdBNVx1Qzc0NCBcdUM4MUNcdUNEOUNcdUQ1NThcdUMxNTRcdUM1N0MgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDIFx1QkMwRiBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVDNjk0XHVBRDZDXHVCMjk0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMzVcdUM4NzAgXHVDODFDNFx1RDU2RCwgXHVDODFDMzdcdUM4NzAgXHVDODFDMlx1RDU2RFx1QzVEMCBcdUM3NThcdUQ1NThcdUM1RUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1QUMwMFxuICAgICAgICAgIFx1QzgxQ1x1RDU1QyBcdUI0MjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzgxNVx1QzgxNSBcdUJDMEYgXHVDMEFEXHVDODFDIFx1QzY5NFx1QUQ2Q1x1QjI5NCBcdUIyRTRcdUI5NzggXHVCQzk1XHVCODM5XHVDNUQwXHVDMTFDIFx1QURGOCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVDMjE4XHVDOUQxIFx1QjMwMFx1QzBDMVx1QzczQ1x1Qjg1QyBcdUJBODVcdUMyRENcdUI0MThcdUM1QjQgXHVDNzg4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCBcdUFERjggXHVDMEFEXHVDODFDXHVCOTdDXG4gICAgICAgICAgXHVDNjk0XHVBRDZDXHVENTYwIFx1QzIxOCBcdUM1QzZcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDY1ICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNCBcdUFEOENcdUI5QUNcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzVGNFx1Qjc4Q1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMFx1Qzc1OCBcdUM2OTRcdUFENkMgXHVDMkRDIFx1QzVGNFx1Qjc4QyBcdUI0RjEgXHVDNjk0XHVBRDZDXHVCOTdDXG4gICAgICAgICAgXHVENTVDIFx1Qzc5MFx1QUMwMCBcdUJDRjhcdUM3NzhcdUM3NzRcdUFDNzBcdUIwOTggXHVDODE1XHVCMkY5XHVENTVDIFx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3OFx1QzlDMFx1Qjk3QyBcdUQ2NTVcdUM3NzhcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNFx1Qzg3MChcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1RDU2RFx1QkFBOSBcdUM3OTFcdUMxMzEpIDwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPiBcdTI0NjAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OzwvZW0+XHVDNzQwKFx1QjI5NCkgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQ1NkRcdUJBQTlcdUM3NDQgXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz4xJmx0OyBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUgJmd0OzwvbGk+XG4gICAgICAgICAgPGxpPlx1RDU0NFx1QzIxOFx1RDU2RFx1QkFBOSA6IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTkgXHVBRTMwXHVCODVELCBcdUM4MTFcdUMxOEQgXHVCODVDXHVBREY4LCBcdUNGRTBcdUQwQTQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMjBcdUQwRERcdUQ1NkRcdUJBQTkgOiBcdUM4MTFcdUMxOEQgSVAgXHVDODE1XHVCQ0Y0PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVEMzBDXHVBRTMwKTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdUFFMzBcdUFDMDRcdUM3NTggXHVBQ0JEXHVBQ0ZDLCBcdUNDOThcdUI5QUNcdUJBQTlcdUM4MDEgXHVCMkVDXHVDMTMxIFx1QjRGMSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVCRDg4XHVENTQ0XHVDNjk0XHVENTU4XHVBQzhDIFx1QjQxOFx1QzVDOFx1Qzc0NCBcdUI1NENcdUM1RDBcdUIyOTRcbiAgICAgICAgICBcdUM5QzBcdUNDQjRcdUM1QzZcdUM3NzQgXHVENTc0XHVCMkY5IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUQzMENcdUFFMzBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUIzRDlcdUM3NThcdUJDMUJcdUM3NDAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1QUUzMFx1QUMwNFx1Qzc3NCBcdUFDQkRcdUFDRkNcdUQ1NThcdUFDNzBcdUIwOTggXHVDQzk4XHVCOUFDXHVCQUE5XHVDODAxXHVDNzc0IFx1QjJFQ1x1QzEzMVx1QjQxOFx1QzVDOFx1Qzc0Q1x1QzVEMFx1QjNDNCBcdUJEODhcdUFENkNcdUQ1NThcdUFDRTAgXHVCMkU0XHVCOTc4IFx1QkM5NVx1QjgzOVx1QzVEMFxuICAgICAgICAgIFx1QjUzMFx1Qjc3QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBQ0M0XHVDMThEIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QzVFQ1x1QzU3QyBcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0LCBcdUQ1NzRcdUIyRjkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNDNFx1QjNDNFx1Qzc1OCBcdUIzNzBcdUM3NzRcdUQxMzBcdUJDQTBcdUM3NzRcdUMyQTQoREIpXHVCODVDIFx1QzYyRVx1QUUzMFx1QUM3MFx1QjA5OCBcdUJDRjRcdUFEMDBcdUM3QTVcdUMxOENcdUI5N0NcbiAgICAgICAgICBcdUIyRUNcdUI5QUNcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDODc0XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1QkM5NVx1QjgzOSBcdUFERkNcdUFDNzAgOjxiciAvPlxuICAgICAgICAgIDIuIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVENTZEXHVCQUE5IDogXHVBQ0M0XHVDODhDXHVDODE1XHVCQ0Y0LCBcdUFDNzBcdUI3OThcdUIwQTBcdUM5RENcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjIgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDMwQ1x1QUUzMFx1Qzc1OCBcdUM4MDhcdUNDMjggXHVCQzBGIFx1QkMyOVx1QkM5NVx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1RDMwQ1x1QUUzMFx1QzgwOFx1Q0MyOFxuICAgICAgICAgIDxiciAvPiAmbHQ7IEJMVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVEMzBDXHVBRTMwIFx1QzBBQ1x1QzcyMFx1QUMwMCBcdUJDMUNcdUMwRERcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzEyMFx1QzgxNVx1RDU1OFx1QUNFMCwgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVDNzU4XG4gICAgICAgICAgXHVDMkI5XHVDNzc4XHVDNzQ0IFx1QkMxQlx1QzU0NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVEMzBDXHVBRTMwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPjIuIFx1RDMwQ1x1QUUzMFx1QkMyOVx1QkM5NTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHVDODA0XHVDNzkwXHVDODAxIFx1RDMwQ1x1Qzc3QyBcdUQ2MTVcdUQwRENcdUM3NTggXHVDODE1XHVCQ0Y0XHVCMjk0IFx1QUUzMFx1Qjg1RFx1Qzc0NCBcdUM3QUNcdUMwRERcdUQ1NjAgXHVDMjE4IFx1QzVDNlx1QjI5NCBcdUFFMzBcdUMyMjBcdUM4MDEgXHVCQzI5XHVCQzk1XHVDNzQ0IFx1QzBBQ1x1QzZBOVx1RDU2OVx1QjJDOFx1QjJFNDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICBcdUM4MUM2XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1NDhcdUM4MDRcdUMxMzEgXHVENjU1XHVCQ0Y0IFx1Qzg3MFx1Q0U1OClcbiAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAmbHQ7IEJMVC1VWCZndDtcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNTQ4XHVDODA0XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc0MCBcdUM4NzBcdUNFNThcdUI5N0MgXHVDREU4XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz5cbiAgICAgICAgICAxLiBcdUM4MTVcdUFFMzBcdUM4MDFcdUM3NzggXHVDNzkwXHVDQ0I0IFx1QUMxMFx1QzBBQyBcdUMyRTRcdUMyRENcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUFEMDBcdUI4MjggXHVDNTQ4XHVDODE1XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVDODE1XHVBRTMwXHVDODAxKFx1QkQ4NFx1QUUzMCAxXHVENjhDKVx1QzczQ1x1Qjg1QyBcdUM3OTBcdUNDQjQgXHVBQzEwXHVDMEFDXHVCOTdDIFx1QzJFNFx1QzJEQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMi4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUM5QzFcdUM2RDBcdUM3NTggXHVDRDVDXHVDMThDXHVENjU0IFx1QkMwRiBcdUFENTBcdUM3MjFcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0RFOFx1QUUwOVx1RDU1OFx1QjI5NCBcdUM5QzFcdUM2RDBcdUM3NDQgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1QjJGNFx1QjJGOVx1Qzc5MFx1QzVEMCBcdUQ1NUNcdUM4MTVcdUMyRENcdUNGMUMgXHVDRDVDXHVDMThDXHVENjU0IFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBRDAwXHVCOUFDXHVENTU4XHVCMjk0IFx1QjMwMFx1Q0M0NVx1Qzc0NCBcdUMyRENcdUQ1ODlcdUQ1NThcdUFDRTBcbiAgICAgICAgICBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMy4gXHVENTc0XHVEMEI5IFx1QjRGMVx1QzVEMCBcdUIzMDBcdUJFNDRcdUQ1NUMgXHVBRTMwXHVDMjIwXHVDODAxIFx1QjMwMFx1Q0M0NVxuICAgICAgICAgIDxiciAvPiAmbHQ7PGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPkJPTFQtVVg8L2VtPiZndDsoJzxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5CT0xULVVYPC9lbT4nKVx1Qzc0MCBcdUQ1NzRcdUQwQjlcdUM3NzRcdUIwOThcbiAgICAgICAgICBcdUNFRjRcdUQ0RThcdUQxMzAgXHVCQzE0XHVDNzc0XHVCN0VDXHVDMkE0IFx1QjRGMVx1QzVEMCBcdUM3NThcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzcyMFx1Q0Q5QyBcdUJDMEYgXHVENkZDXHVDMTkwXHVDNzQ0IFx1QjlDOVx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDNTQ4XHVENTA0XHVCODVDXHVBREY4XHVCN0E4XHVDNzQ0IFx1QzEyNFx1Q0U1OFx1RDU1OFx1QUNFMCBcdUM4RkNcdUFFMzBcdUM4MDFcdUM3NzggXHVBQzMxXHVDMkUwXHUwMEI3XHVDODEwXHVBQzgwXHVDNzQ0XG4gICAgICAgICAgXHVENTU4XHVCQTcwIFx1QzY3OFx1QkQ4MFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUM4MTFcdUFERkNcdUM3NzQgXHVEMUI1XHVDODFDXHVCNDFDIFx1QUQ2Q1x1QzVFRFx1QzVEMCBcdUMyRENcdUMyQTRcdUQxNUNcdUM3NDQgXHVDMTI0XHVDRTU4XHVENTU4XHVBQ0UwIFx1QUUzMFx1QzIyMFx1QzgwMS9cdUJCM0NcdUI5QUNcdUM4MDFcdUM3M0NcdUI4NUMgXHVBQzEwXHVDMkRDIFx1QkMwRiBcdUNDMjhcdUIyRThcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDQuIFx1QzgxMVx1QzE4RFx1QUUzMFx1Qjg1RFx1Qzc1OCBcdUJDRjRcdUFEMDAgXHVCQzBGIFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMjlcdUM5QzBcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDQzk4XHVCOUFDXHVDMkRDXHVDMkE0XHVEMTVDXHVDNUQwIFx1QzgxMVx1QzE4RFx1RDU1QyBcdUFFMzBcdUI4NURcdUM3NDQgXHVDRDVDXHVDMThDIDFcdUIxNDQgXHVDNzc0XHVDMEMxIFx1QkNGNFx1QUQwMCwgXHVBRDAwXHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzczQ1x1QkE3MCxcdUIyRTRcdUI5Q0MsIDVcdUI5Q0NcdUJBODUgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QzVEMFxuICAgICAgICAgIFx1QUQwMFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDRDk0XHVBQzAwXHVENTU4XHVBQzcwXHVCMDk4LCBcdUFDRTBcdUM3MjBcdUMyRERcdUJDQzRcdUM4MTVcdUJDRjQgXHVCNjEwXHVCMjk0IFx1QkJGQ1x1QUMxMFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IDJcdUIxNDRcdUM3NzRcdUMwQzEgXHVCQ0Y0XHVBRDAwLCBcdUFEMDBcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QjYxMFx1RDU1QywgXHVDODExXHVDMThEXHVBRTMwXHVCODVEXHVDNzc0IFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMEYgXHVCM0M0XHVCMDlDLCBcdUJEODRcdUMyRTRcdUI0MThcdUM5QzAgXHVDNTRBXHVCM0M0XHVCODVEIFx1QkNGNFx1QzU0OFx1QUUzMFx1QjJBNVx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Qzc5MFx1QjNEOSBcdUMyMThcdUM5RDEgXHVDN0E1XHVDRTU4XHVDNzU4IFx1QzEyNFx1Q0U1OFx1MjAyMlx1QzZCNFx1QzYwMSBcdUJDMEYgXHVBQzcwXHVCRDgwXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkQpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCAmbHQ7Qk9MVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNUQwXHVBQzhDIFx1QUMxQ1x1QkNDNFx1QzgwMVx1Qzc3OCBcdUI5REVcdUNEQTRcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0MgXHVDODFDXHVBQ0Y1XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU3NCBcdUM3NzRcdUM2QTlcdUM4MTVcdUJDRjRcdUI5N0MgXHVDODAwXHVDN0E1XHVENTU4XHVBQ0UwIFx1QzIxOFx1QzJEQ1x1Qjg1Q1xuICAgICAgICAgIFx1QkQ4OFx1QjdFQ1x1QzYyNFx1QjI5NCBcdTIwMThcdUNGRTBcdUQwQTQoY29va2llKVx1MjAxOVx1Qjk3QyBcdUMwQUNcdUM2QTlcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1Q0ZFMFx1RDBBNFx1QjI5NCBcdUM2RjlcdUMwQUNcdUM3NzRcdUQyQjhcdUI5N0MgXHVDNkI0XHVDNjAxXHVENTU4XHVCMjk0XHVCMzcwIFx1Qzc3NFx1QzZBOVx1QjQxOFx1QjI5NCBcdUMxMUNcdUJDODQoaHR0cClcdUFDMDAgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNzU4IFx1Q0VGNFx1RDRFOFx1RDEzMCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDBcdUM1RDBcdUFDOEMgXHVCQ0Y0XHVCMEI0XHVCMjk0IFx1QzE4Q1x1QjdDOVx1Qzc1OCBcdUM4MTVcdUJDRjRcdUM3NzRcdUJBNzBcbiAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM3OTBcdUI0RTRcdUM3NTggUEMgXHVDRUY0XHVENEU4XHVEMTMwXHVCMEI0XHVDNzU4IFx1RDU1OFx1QjREQ1x1QjUxNFx1QzJBNFx1RDA2Q1x1QzVEMCBcdUM4MDBcdUM3QTVcdUI0MThcdUFFMzBcdUIzQzQgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QUMwMC4gXHVDRkUwXHVEMEE0XHVDNzU4IFx1QzBBQ1x1QzZBOSBcdUJBQTlcdUM4MDEgOiBcdUM3NzRcdUM2QTlcdUM3OTBcdUFDMDAgXHVCQzI5XHVCQjM4XHVENTVDIFx1QUMwMSBcdUMxMUNcdUJFNDRcdUMyQTRcdUM2NDAgXHVDNkY5IFx1QzBBQ1x1Qzc3NFx1RDJCOFx1QjRFNFx1QzVEMCBcdUIzMDBcdUQ1NUMgXHVCQzI5XHVCQjM4IFx1QkMwRiBcdUM3NzRcdUM2QTlcdUQ2MTVcdUQwREMsIFx1Qzc3OFx1QUUzMCBcdUFDODBcdUMwQzlcdUM1QjQsIFx1QkNGNFx1QzU0OFx1QzgxMVx1QzE4RFxuICAgICAgICAgIFx1QzVFQ1x1QkQ4MCwgXHVCNEYxXHVDNzQ0IFx1RDMwQ1x1QzU0NVx1RDU1OFx1QzVFQyBcdUM3NzRcdUM2QTlcdUM3OTBcdUM1RDBcdUFDOEMgXHVDRDVDXHVDODAxXHVENjU0XHVCNDFDIFx1QzgxNVx1QkNGNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVDNzA0XHVENTc0IFx1QzBBQ1x1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUIwOTguIFx1Q0ZFMFx1RDBBNFx1Qzc1OCBcdUMxMjRcdUNFNThcdTIwMjJcdUM2QjRcdUM2MDEgXHVCQzBGIFx1QUM3MFx1QkQ4MCA6IFx1QzZGOVx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCBcdUMwQzFcdUIyRThcdUM3NTggXHVCM0M0XHVBRDZDJmd0O1x1Qzc3OFx1RDEzMFx1QjEzNyBcdUM2MzVcdUMxNTgmZ3Q7XHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkE1NFx1QjI3NFx1Qzc1OCBcdUM2MzVcdUMxNTggXHVDMTI0XHVDODE1XHVDNzQ0IFx1RDFCNVx1RDU3NCBcdUNGRTBcdUQwQTRcbiAgICAgICAgICBcdUM4MDBcdUM3QTVcdUM3NDQgXHVBQzcwXHVCRDgwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiBcdUNGRTBcdUQwQTQgXHVDODAwXHVDN0E1XHVDNzQ0IFx1QUM3MFx1QkQ4MFx1RDU2MCBcdUFDQkRcdUM2QjAgXHVCOURFXHVDREE0XHVENjE1IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTlcdUM1RDAgXHVDNUI0XHVCODI0XHVDNkMwXHVDNzc0IFx1QkMxQ1x1QzBERFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MzAnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDOFx1Qzg3MCAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCkgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+XG4gICAgICAgICAgXHUyNDYwIDxzcGFuIGNsYXNzTmFtZT0nY29sb3JMaWdodEJsdWUnPiZsdDtCT0xULVVYJmd0Ozwvc3Bhbj4gXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDNUM1XHVCQjM0XHVCOTdDIFx1Q0QxRFx1QUQwNFx1RDU3NFx1QzExQ1xuICAgICAgICAgIFx1Q0M0NVx1Qzc4NFx1QzlDMFx1QUNFMCwgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzY0MCBcdUFEMDBcdUI4MjhcdUQ1NUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkQ4OFx1QjlDQ1x1Q0M5OFx1QjlBQyBcdUJDMEYgXHVENTNDXHVENTc0XHVBRDZDXHVDODFDIFx1QjRGMVx1Qzc0NCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVDNTQ0XHVCNzk4XHVDNjQwIFx1QUMxOVx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVCOTdDXG4gICAgICAgICAgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCA8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMzFcdUJBODUgOlx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgPGxpPlx1QzlDMVx1Q0M0NSA6XHVBRDAwXHVCOUFDXHVDNzkwPC9saT5cbiAgICAgICAgICA8bGk+XHVDOUMxXHVBRTA5IDpcdUIzMDBcdUQ0NUM8L2xpPlxuICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjAzQiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQ1x1Qjg1QyBcdUM1RjBcdUFDQjBcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPHAgLz57JyAnfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM2QjRcdUM2MDE8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QjJGNFx1QjJGOVx1Qzc5MCA6XHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICAgIFx1MjQ2MSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUFFRDhcdUMxMUNcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7IFx1Qzc1OCBcdUMxMUNcdUJFNDRcdUMyQTQoXHVCNjEwXHVCMjk0IFx1QzBBQ1x1QzVDNSlcdUM3NDQgXHVDNzc0XHVDNkE5XHVENTU4XHVDMkRDXHVCQTc0XHVDMTFDIFx1QkMxQ1x1QzBERFx1RDU1QyBcdUJBQThcdUI0RTAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUFEMDBcdUI4MjggXHVCQjM4XHVDNzU4LFxuICAgICAgICAgICAgXHVCRDg4XHVCOUNDXHVDQzk4XHVCOUFDLCBcdUQ1M0NcdUQ1NzRcdUFENkNcdUM4MUMgXHVCNEYxXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCBcdUJDMEYgXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDXHVCODVDIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiAmbHQ7Qk9MVC1VWCZndDtcbiAgICAgICAgICAgIFx1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJCMzhcdUM3NThcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzlDMFx1Q0NCNCBcdUM1QzZcdUM3NzQgXHVCMkY1XHVCQ0MwIFx1QkMwRiBcdUNDOThcdUI5QUNcdUQ1NzRcdUI0RENcdUI5QjQgXHVBQzgzXHVDNzg1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDMwJz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzlcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2QylcbiAgICAgICAgICAgICAgPGJyIC8+IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QjI5NCBcdUZGNjJcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHVGRjYzIFx1QzgxQzM1XHVDODcwXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNUY0XHVCNzhDIFx1Q0NBRFx1QUQ2Q1x1Qjk3QyBcdUM1NDRcdUI3OThcdUM3NTggXHVCRDgwXHVDMTFDXHVDNUQwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJmx0OyBCTFQtVVgmZ3Q7XHVDNzQwKFx1QjI5NCkgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkNcdUFDMDAgXHVDMkUwXHVDMThEXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1QjQxOFx1QjNDNFx1Qjg1RCBcdUIxNzhcdUI4MjVcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQueycgJ31cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDIFx1QzgxMVx1QzIxOFx1MDBCN1x1Q0M5OFx1QjlBQyBcdUJEODBcdUMxMUMgPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOiBcdUMxMUNcdUJFNDRcdUMyQTQgXHVBRDAwXHVCOUFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUIyRjRcdUIyRjlcdUM3OTAgOiBcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QzVGMFx1Qjc3RFx1Q0M5OCA6IDAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDMTBcdUM4NzAoXHVBRDhDXHVDNzc1XHVDRTY4XHVENTc0IFx1QUQ2Q1x1QzgxQ1x1QkMyOVx1QkM5NSk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVCODVDIFx1Qzc3OFx1RDU1QyBcdUFENkNcdUM4MUNcdUI5N0MgXHVCQzFCXHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJEODRcdUM3QzFcdUM4NzBcdUM4MTVcdUM3MDRcdUM2RDBcdUQ2OEMsIFx1RDU1Q1x1QUQ2RFx1Qzc3OFx1RDEzMFx1QjEzN1x1QzlDNFx1RDc2NVx1QzZEMFxuICAgICAgICAgIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCBcdUI0RjFcdUM1RDAgXHVCRDg0XHVDN0MxXHVENTc0XHVBQ0IwXHVDNzc0XHVCMDk4IFx1QzBDMVx1QjJGNCBcdUI0RjFcdUM3NDQgXHVDMkUwXHVDQ0FEXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIFx1Qzc3NCBcdUJDMTZcdUM1RDAgXHVBRTMwXHVEMEMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1Qzc1OCBcdUMyRTBcdUFDRTAsIFx1QzBDMVx1QjJGNFx1QzVEMFxuICAgICAgICAgIFx1QjMwMFx1RDU1OFx1QzVFQ1x1QjI5NCBcdUM1NDRcdUI3OThcdUM3NTggXHVBRTMwXHVBRDAwXHVDNUQwIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJEQ1x1QUUzMCBcdUJDMTRcdUI3OERcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMS4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCRDg0XHVDN0MxXHVDODcwXHVDODE1XHVDNzA0XHVDNkQwXHVENjhDIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgzMy02OTcyICh3d3cua29waWNvLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDIuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDExOCAocHJpdmFjeS5raXNhLm9yLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDMuIFx1QjMwMFx1QUM4MFx1Q0MzMFx1Q0NBRCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDEzMDEgKHd3dy5zcG8uZ28ua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgNC4gXHVBQ0JEXHVDQzMwXHVDQ0FEIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgyIChlY3JtLmN5YmVyLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRFx1QzgxQzM1XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1RjRcdUI3OEMpLCBcdUM4MUMzNlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDODE1XHVDODE1XHUwMEI3XHVDMEFEXHVDODFDKSwgXHVDODFDMzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUI0RjEpXHVDNzU4XG4gICAgICAgICAgXHVBRERDXHVDODE1XHVDNUQwIFx1Qzc1OFx1RDU1QyBcdUM2OTRcdUFENkNcdUM1RDAgXHVCMzAwIFx1RDU1OFx1QzVFQyBcdUFDRjVcdUFDRjVcdUFFMzBcdUFEMDBcdUM3NTggXHVDN0E1XHVDNzc0IFx1RDU4OVx1RDU1QyBcdUNDOThcdUJEODQgXHVCNjEwXHVCMjk0IFx1QkQ4MFx1Qzc5MVx1QzcwNFx1Qjg1QyBcdUM3NzhcdUQ1NThcdUM1RUMgXHVBRDhDXHVCOUFDIFx1QjYxMFx1QjI5NCBcdUM3NzRcdUM3NzVcdUM3NTggXHVDRTY4XHVENTc0XHVCOTdDIFx1QkMxQlx1Qzc0MCBcdUM3OTBcdUIyOTRcbiAgICAgICAgICBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUJDOTVcdUM3NzQgXHVDODE1XHVENTU4XHVCMjk0IFx1QkMxNFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzQ0IFx1Q0NBRFx1QUQ2Q1x1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MjAzQiBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUM1RDAgXHVCMzAwXHVENTc0IFx1Qzc5MFx1QzEzOFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDAgXHVDOTExXHVDNTU5XHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzA0XHVDNkQwXHVENjhDKHd3dy5zaW1wYW4uZ28ua3IpIFx1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDMzhcdUFDRTBcdUQ1NThcdUMyRENcdUFFMzAgXHVCQzE0XHVCNzhEXHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUMxMVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4IFx1QkNDMFx1QUNCRCk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdTI0NjAgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCAyMDIyXHVCMTQ0IDNcdUM2RDQgMTdcdUJEODBcdUQxMzAgXHVDODAxXHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1MjQ2MSBcdUM3NzRcdUM4MDRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCBcdUM1NDRcdUI3OThcdUM1RDBcdUMxMUMgXHVENjU1XHVDNzc4XHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIDwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1QzYwOFx1QzJEQyApIC0gMjBYWC4gMy4gMTcgfiAyMFhYLiBYLiBYIFx1QzgwMVx1QzZBOSAoXHVEMDc0XHVCOUFEKSA8L3A+ICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IG1haW4gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cydcbmltcG9ydCB7IFByb21vdGlvbnMgfSBmcm9tICd+L2NvbXBvbmVudHMvUHJvbW90aW9ucydcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb25zLCBtb3JlUG9zdHMgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtcGFnZS1yb3cgaGlkZGVuIG1kOmZsZXgnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBhZ2UgbWF4LXctMTEyJz5cbiAgICAgICAgPFByb21vdGlvbnMgey4uLnsgcHJvbW90aW9ucyB9fSAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdieC1jb250ZW50cy1oMiBteC00IG1kOm14LTggLW1iLTQnPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEljb25zLkJ1bGxldFNvbGlkIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlx1Q0Q1Q1x1QURGQyBcdUQzRUNcdUMyQTRcdUQyQjg8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxQb3N0cyB7Li4ueyBvdGhlclBvc3RzOiBtb3JlUG9zdHMgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcblxudHlwZSBQcm9tb3Rpb25zUHJvcHMgPSB7XG4gIHByb21vdGlvbnM6IGFueVtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tb3Rpb25zKHtwcm9tb3Rpb25zfTogUHJvbW90aW9uc1Byb3BzKSB7XG4gIHJldHVybiAoPHVsIGNsYXNzTmFtZT0nYngtcHJvbW90aW9ucyc+XG4gICAge3Byb21vdGlvbnMubWFwKChwcm9tb3Rpb246IGFueSkgPT4gKFxuICAgICAgPGxpIGtleT17cHJvbW90aW9uLnRpdGxlfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1pdGVtJz5cbiAgICAgICAgPExpbmsgdG89e3Byb21vdGlvbi51cmwgfHwgJy4vJ30gY2xhc3NOYW1lPSdieC1wcm9tb3Rpb24tbGluayc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1pbWFnZSdcbiAgICAgICAgICAgICAgZGF0YT17cHJvbW90aW9uLmJhbm5lci5yZXNwb25zaXZlSW1hZ2V9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJy0tdHctc2hhZG93LWNvbG9yJzogYHJnYmEoJHtwcm9tb3Rpb24uY29sb3IucmVkfSwgJHtwcm9tb3Rpb24uY29sb3IuZ3JlZW59LCAke3Byb21vdGlvbi5jb2xvci5ibHVlfSwgLjUpYCxcbiAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICAgICAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICApKX1cbiAgPC91bD4pXG59IiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkl0ZW0gfSBmcm9tICd+L2NvbXBvbmVudHMvU2VjdGlvbidcbmltcG9ydCB7IHBsYW4gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFuKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgbGlzdDogU2VjdGlvbkl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLFxuICAgICAgYmFkZ2U6IDxzcGFuIGNsYXNzTmFtZT0nYngtYmFkZ2UnPkJBU0lDPC9zcGFuPixcbiAgICAgIGxpbms6ICcvc2VydmljZXMvaG9tZXBhZ2UnLFxuICAgICAgbGFiZWw6ICdcdUM3OTBcdUMxMzhcdUQ3ODggXHVCQ0Y0XHVBRTMwJyxcbiAgICAgIHBob3RvczogcGhvdG8uaG9tZXBhZ2ViYXNpYyxcbiAgICAgIG1ldGFzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3OTFcdUM1QzVcdUM3N0MnLCB2YWx1ZTogJzdcdUM3N0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNENUNcdUIzMDAgXHVEMzk4XHVDNzc0XHVDOUMwJywgdmFsdWU6ICc1XHVBQzFDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDMkE0XHVEMEMwXHVDNzdDIFx1QUMwMFx1Qzc3NFx1QjREQycsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQS9TJywgdmFsdWU6ICcxXHVCMTQ0JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1QzZGOScsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCMkU0XHVEMDZDIFx1QkFBOFx1QjREQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBQzgwXHVDMEM5XHVDNUQ0XHVDOUM0IFx1Q0Q1Q1x1QzgwMVx1RDY1NCcsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCM0M0XHVCQTU0XHVDNzc4ICgxXHVCMTQ0KScsIHZhbHVlOiAnXHVCQjM0XHVCOENDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVENjM4XHVDMkE0XHVEMzA1ICgxXHVCMTQ0KScsIHZhbHVlOiAnXHVCQjM0XHVCOENDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBRDZDXHVBRTAwIFx1QzZDQ1x1RDA2Q1x1QzJBNFx1RDM5OFx1Qzc3NFx1QzJBNCcsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBRDZDXHVBRTAwIFx1QzU2MFx1QjExMFx1QjlBQ1x1RDJGMVx1QzJBNCcsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDRTc0XHVDRTc0XHVDNjI0XHVEMUExIFx1Q0M0NFx1QjExMCcsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDQzQ0XHVCMTEwXHVEMUExJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFEMDBcdUI5QUNcdUM3OTAgXHVCM0M0XHVBRDZDJywgdmFsdWU6ICdcdUJCRjhcdUM5QzBcdUM2RDAnIH0sXG4gICAgICBdLFxuICAgICAgZXh0cmE6IDxzcGFuPjUwXHVCOUNDXHVDNkQwPC9zcGFuPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDMkYxXHVBRTAwXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBiYWRnZTogPHNwYW4gY2xhc3NOYW1lPSdieC1iYWRnZSc+QkFTSUM8L3NwYW4+LFxuICAgICAgbGluazogJy9zZXJ2aWNlcy9zaW5nbGVwYWdlJyxcbiAgICAgIGxhYmVsOiAnXHVDNzkwXHVDMTM4XHVENzg4IFx1QkNGNFx1QUUzMCcsXG4gICAgICBwaG90b3M6IHBob3RvLnNpbmdsZXBhZ2ViYXNpYyxcbiAgICAgIG1ldGFzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3OTFcdUM1QzVcdUM3N0MnLCB2YWx1ZTogJzNcdUM3N0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNENUNcdUIzMDAgXHVEMzk4XHVDNzc0XHVDOUMwJywgdmFsdWU6ICcxXHVBQzFDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDMkE0XHVEMEMwXHVDNzdDIFx1QUMwMFx1Qzc3NFx1QjREQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQS9TJywgdmFsdWU6ICcxXHVCMTQ0JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1QzZGOScsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDNzc4XHVEMTMwXHVCODA5XHVEMkYwXHVCRTBDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIyRTRcdUQwNkMgXHVCQUE4XHVCNERDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzQgXHVDRDVDXHVDODAxXHVENjU0JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIzQzRcdUJBNTRcdUM3NzggKDFcdUIxNDQpJywgdmFsdWU6ICdcdUJCMzRcdUI4Q0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUQ2MzhcdUMyQTRcdUQzMDUgKDFcdUIxNDQpJywgdmFsdWU6ICdcdUJCMzRcdUI4Q0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFEMDBcdUI5QUNcdUM3OTAgXHVCM0M0XHVBRDZDJywgdmFsdWU6ICdcdUJCRjhcdUM5QzBcdUM2RDAnIH0sXG4gICAgICBdLFxuICAgICAgZXh0cmE6IDxzcGFuPjIwXHVCOUNDXHVDNkQwPC9zcGFuPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVEMzdDXHVCRTE0XHVCOUFDXHVDMkYxIFx1QUMxQ1x1QkMxQycsXG4gICAgICBiYWRnZTogPHNwYW4gY2xhc3NOYW1lPSdieC1iYWRnZSc+QkFTSUM8L3NwYW4+LFxuICAgICAgbGluazogJy9zZXJ2aWNlcy9wdWJsaXNoaW5nJyxcbiAgICAgIGxhYmVsOiAnXHVDNzkwXHVDMTM4XHVENzg4IFx1QkNGNFx1QUUzMCcsXG4gICAgICBwaG90b3M6IHBob3RvLnB1Ymxpc2hpbmdiYXNpYyxcbiAgICAgIG1ldGFzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3OTFcdUM1QzVcdUM3N0MnLCB2YWx1ZTogJzJcdUM3N0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNENUNcdUIzMDAgXHVEMzk4XHVDNzc0XHVDOUMwJywgdmFsdWU6ICcxMFx1QUMxQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzJBNFx1RDBDMFx1Qzc3QyBcdUFDMDBcdUM3NzRcdUI0REMnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0EvUycsIHZhbHVlOiAnMVx1QUMxQ1x1QzZENCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUM2RjknLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjJFNFx1RDA2QyBcdUJBQThcdUI0REMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEnLCB2YWx1ZTogJ1x1QzlDMFx1QzZEMCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEgXHVDNzc4XHVDOTlEIFx1QjlDOFx1RDA2QycsIHZhbHVlOiAnXHVCQkY4XHVDOUMwXHVDNkQwJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiA8c3Bhbj41MFx1QjlDQ1x1QzZEMDwvc3Bhbj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1QzU3MSBcdUI1MTRcdUM3OTBcdUM3NzgnLFxuICAgICAgYmFkZ2U6IDxzcGFuIGNsYXNzTmFtZT0nYngtYmFkZ2UnPkJBU0lDPC9zcGFuPixcbiAgICAgIGxpbms6ICcvc2VydmljZXMvYXBwZGVzaWduJyxcbiAgICAgIGxhYmVsOiAnXHVDNzkwXHVDMTM4XHVENzg4IFx1QkNGNFx1QUUzMCcsXG4gICAgICBwaG90b3M6IHBob3RvLmFwcGRlc2lnbmJhc2ljLFxuICAgICAgbWV0YXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc5MVx1QzVDNVx1Qzc3QycsIHZhbHVlOiAnM1x1Qzc3QycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0Q1Q1x1QjMwMCBcdUQzOThcdUM3NzRcdUM5QzAnLCB2YWx1ZTogJzVcdUFDMUMnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDMkRDXHVDMkE0XHVEMTVDJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdBL1MnLCB2YWx1ZTogJzNcdUFDMUNcdUM2RDQnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIyRTRcdUQwNkMgXHVCQUE4XHVCNERDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxJywgdmFsdWU6ICdcdUM5QzBcdUM2RDAnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxIFx1Qzc3OFx1Qzk5RCBcdUI5QzhcdUQwNkMnLCB2YWx1ZTogJ1x1QkJGOFx1QzlDMFx1QzZEMCcgfSxcbiAgICAgIF0sXG4gICAgICBleHRyYTogPHNwYW4+NTBcdUI5Q0NcdUM2RDA8L3NwYW4+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUJFMENcdUI3OUNcdUI0REMgXHVBQzAwXHVDNzc0XHVCNERDJyxcbiAgICAgIGJhZGdlOiA8c3BhbiBjbGFzc05hbWU9J2J4LWJhZGdlJz5CQVNJQzwvc3Bhbj4sXG4gICAgICBsaW5rOiAnL3NlcnZpY2VzL2JyYW5kaW5nJyxcbiAgICAgIGxhYmVsOiAnXHVDNzkwXHVDMTM4XHVENzg4IFx1QkNGNFx1QUUzMCcsXG4gICAgICBwaG90b3M6IHBob3RvLmJyYW5kaW5nYmFzaWMsXG4gICAgICBtZXRhczogW1xuICAgICAgICB7IGxhYmVsOiAnXHVDNzkxXHVDNUM1XHVDNzdDJywgdmFsdWU6ICcxNFx1Qzc3QycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Qjg1Q1x1QUNFMCcsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCQTg1XHVENTY4JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUJCMzhcdUMxMUMvXHVDNzc0XHVCQTU0XHVDNzdDIFx1RDE1Q1x1RDUwQ1x1QjlCRicsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCNTE0XHVDNzkwXHVDNzc4IFx1QzJEQ1x1QzJBNFx1RDE1QycsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQS9TJywgdmFsdWU6ICcxXHVCMTQ0JyB9LFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiA8c3Bhbj4xMDBcdUI5Q0NcdUM2RDA8L3NwYW4+LFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9ucyc+XG4gICAgICAgIHtsaXN0Lm1hcChsaXN0SXRlbSA9PiAoXG4gICAgICAgICAgPFNlY3Rpb24ga2V5PXtsaXN0SXRlbS50aXRsZX0gaXRlbT17bGlzdEl0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAZGVlcnBhcmsvYm9sdC11aSdcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCB0eXBlIFNlY3Rpb25JdGVtID0ge1xuICBpY29uPzogSlNYLkVsZW1lbnQsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGxpbms/OiBzdHJpbmcsXG4gIGxhYmVsPzogc3RyaW5nLFxuICBwaG90b3M6IGFueVtdLFxuICB0YWdzPzogc3RyaW5nW10sXG4gIG1ldGFzPzoge1xuICAgIGxhYmVsOiBzdHJpbmcgfCBKU1guRWxlbWVudCxcbiAgICB2YWx1ZTogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIH1bXSxcbiAgZXh0cmE/OiBKU1guRWxlbWVudCxcbiAgYmFkZ2U/OiBKU1guRWxlbWVudCxcbn1cblxudHlwZSBTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW06IFNlY3Rpb25JdGVtLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VjdGlvbih7IGl0ZW0gfTogU2VjdGlvblByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGljb24sIHBob3RvcywgLyogdGFncywgKi8gbWV0YXMsIGV4dHJhLCBiYWRnZSwgbGluaywgbGFiZWwgfSA9IGl0ZW1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi10aXRsZSc+XG4gICAgICAgICAge2ljb24gPyBpY29uIDogPEljb24uQnVsbGV0U29saWQgLz59XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICB7YmFkZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi1leHRyYSc+e2V4dHJhfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY2Fyb3VzZWwnPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Bob3RvcyAmJlxuICAgICAgICAgICAgISFwaG90b3MubGVuZ3RoICYmXG4gICAgICAgICAgICBwaG90b3MubWFwKCh7IHJlc3BvbnNpdmVJbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3BvbnNpdmVJbWFnZS50aXRsZX0gY2xhc3NOYW1lPSdieC1jYXJkLXNxYXVyZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNhcmQtdGh1bWInPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtdGh1bWJuYWlsJyBkYXRhPXtyZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNhcmQtc3FhdXJlLWluZm8nPntyZXNwb25zaXZlSW1hZ2UudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAge21ldGFzICYmICEhbWV0YXMubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1ldGEtbGlzdCc+XG4gICAgICAgICAge21ldGFzLm1hcCgobWV0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9J2J4LW1ldGEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW1ldGEtaWNvbicgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1tZXRhLWluZm8nPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbWV0YS1sYWJlbCc+e21ldGEubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbWV0YS12YWx1ZSc+e21ldGEudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctYXV0byBtZDp3LTYwIHB4LTUgbWQ6c2VsZi1lbmQgcHQtMi41IG1kOnB4LTgnPlxuICAgICAgICAgIDxCdXR0b24gYmxvY2sgc2l6ZT0nbGFyZ2UnIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlNDFjOThlZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTTdLTzRLRkcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1LSE43WTZTLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC00UDY2S0c1RC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVFRSEU3NEMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSVlUUVZFTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ1N1RQQ1NWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29udGFjdCc6eydpZCc6J3JvdXRlcy9jb250YWN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbnRhY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29udGFjdC1SNEpVVTZBUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVc2WkNEV1Q0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XQkw1WU1YVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9uZXdzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J25ld3MvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3cy8kc2x1Zy1SREhQN05ZRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0JMNVlNWFUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9uZXdzL2luZGV4Jzp7J2lkJzoncm91dGVzL25ld3MvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbmV3cy9pbmRleC1FSElIQ0xQVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0JMNVlNWFUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ub3RpY2VzLyRzbHVnJzp7J2lkJzoncm91dGVzL25vdGljZXMvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbm90aWNlcy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzLyRzbHVnLVhINlQ1M0JILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XQkw1WU1YVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbm90aWNlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RpY2VzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzL2luZGV4LTNHUlBISFdPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XQkw1WU1YVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYW4nOnsnaWQnOidyb3V0ZXMvcGxhbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwbGFuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4tNFZJNFJBNDQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvJHNsdWctV1c0RExKMkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdCTDVZTVhVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcG9zdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL2luZGV4LTdSMkNITVpFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XQkw1WU1YVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQnOnsnaWQnOidyb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy9wcmV2aWV3L3N0YXJ0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RhcnQtVkI3Sks1SjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNPT1Y0NENVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcCc6eydpZCc6J3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdHMvcHJldmlldy9zdG9wJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcC1ZNDRXNUw3RS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM09PVjQ0Q1UuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJldmlldy9zdGFydCc6eydpZCc6J3JvdXRlcy9wcmV2aWV3L3N0YXJ0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByZXZpZXcvc3RhcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJldmlldy9zdGFydC1BTjZXWEI1Qi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM09PVjQ0Q1UuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJldmlldy9zdG9wJzp7J2lkJzoncm91dGVzL3ByZXZpZXcvc3RvcCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcmV2aWV3L3N0b3AnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJldmlldy9zdG9wLVhZTDdCUzVYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zT09WNDRDVS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcml2YWN5Jzp7J2lkJzoncm91dGVzL3ByaXZhY3knLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJpdmFjeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcml2YWN5LVQyWlhRQ0FXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9hcHBkZXNpZ24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduLTQ0V0U3VzNPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PNFlGVE1aVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuYnJhbmRpbmcnOnsnaWQnOidyb3V0ZXMvc2VydmljZXMuYnJhbmRpbmcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvYnJhbmRpbmcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuYnJhbmRpbmctQUdZRkZPNUguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80WUZUTVpWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZSc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9ob21lcGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZS1XMlFTRzVOQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0RTTkJTNVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNFlGVE1aVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMucHVibGlzaGluZyc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL3B1Ymxpc2hpbmcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMucHVibGlzaGluZy02S01JUFVXNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0RTTkJTNVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNFlGVE1aVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZSc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL3NpbmdsZXBhZ2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZS0zNkVOS0tXVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0RTTkJTNVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNFlGVE1aVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVJFWEwyWjJPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2V0dGluZ3MnOnsnaWQnOidyb3V0ZXMvc2V0dGluZ3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2V0dGluZ3MtWldUM0tKWkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRTQxQzk4RUUuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXhCO0FBQU8sSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQTFCO0FBQU8sSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQTFCO0FBQU8sSUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXpCO0FBQU8sSUFBTSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXhCO0FBQU8sSUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBcEI7OztBQ0FBO0FBSU8scUJBQXFCLEVBQUUsYUFBK0I7QUFDM0QsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSztBQUFBLElBQXNCLE9BQU07QUFBQSxJQUE2QixTQUFRO0FB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QUNQLFNBQVM7QUFBQSxRQUNULElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQ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
