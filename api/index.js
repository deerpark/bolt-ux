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
      tags
      tabhometext
      tabs {
        tabid
        tabname
        tabcontents {
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
      }
      category {
        id
        name
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
  query PostBySlug($tag: String!) {
    posts: allPosts(orderBy: date_DESC, first: 20, filter: {tags: {matches: {pattern: $tag}}}) {
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
      tags
      category {
        id
        name
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

// app/components/Icon/TagLight.tsx
init_react();
function TagLight() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M88 144C88 130.7 98.75 120 112 120C125.3 120 136 130.7 136 144C136 157.3 125.3 168 112 168C98.75 168 88 157.3 88 144zM.0003 80C.0003 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5L.0003 80zM41.37 252.1L217.4 428.1C229.9 440.6 250.1 440.6 262.6 428.1L396.1 294.6C408.6 282.1 408.6 261.9 396.1 249.4L220.1 73.37C214.1 67.37 205.1 64 197.5 64H48C39.16 64 32 71.16 32 80V229.5C32 237.1 35.37 246.1 41.37 252.1L41.37 252.1zM41.37 252.1L18.75 274.7z"
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

// app/components/Icon/Tags.tsx
init_react();
function Tags() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-primary",
    d: "M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "bx-icon-secondary",
    d: "M311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93V38.93z"
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
        display: true,
        desc: "\uC88B\uC740 \uC18C\uC2DD",
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
var import_bolt_ui3 = require("bolt-ui");

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
  }, desc), date && /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-desc bx-header-date"
  }, date)), Icon && /* @__PURE__ */ React.createElement("div", {
    className: "bx-header-icon"
  }, typeof Icon === "function" ? /* @__PURE__ */ React.createElement(Icon, null) : Icon))));
}

// app/components/Hero/index.tsx
init_react();
var import_remix4 = __toESM(require_remix());
var import_bolt_ui = require("bolt-ui");
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
var import_bolt_ui2 = require("bolt-ui");
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

// node_modules/bolt-ui/dist/index.css
var dist_default = "/build/_assets/index-M6MXDIZR.css";

// app/styles/app.css
var app_default = "/build/_assets/app-QME4XBOD.css";

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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.publishing.tsx
var services_publishing_exports = {};
__export(services_publishing_exports, {
  default: () => Publishing2,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix7.useLoaderData)();
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
var import_remix8 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix8.useLoaderData)();
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

// route:/Users/deerpark/Dev/bolt-ux/app/routes/services.appdesign.tsx
var services_appdesign_exports = {};
__export(services_appdesign_exports, {
  default: () => Appdesign2,
  loader: () => loader4
});
init_react();
var import_remix9 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix9.useLoaderData)();
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
var import_remix10 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix10.useLoaderData)();
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
var import_remix11 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix11.useLoaderData)();
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
var import_remix14 = __toESM(require_remix());
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
var import_remix13 = __toESM(require_remix());
var import_react_datocms9 = require("react-datocms");

// app/components/Posts/Post.tsx
init_react();
var import_remix12 = __toESM(require_remix());
var import_react_datocms8 = require("react-datocms");
function Contents({ data }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "prose-sm prose-slate dark:prose-invert"
  }, !!data && /* @__PURE__ */ React.createElement(import_react_datocms8.StructuredText, {
    data,
    renderBlock: ({ record }) => {
      if (record.__typename === "ImageBlockRecord") {
        return /* @__PURE__ */ React.createElement(import_react_datocms8.Image, {
          className: "bx-article-image",
          data: record.image.responsiveImage
        });
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Don't know how to render a block!"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(record, null, 2)));
    }
  }));
}
function Post({ post: post2, outlet, tabId }) {
  var _a;
  console.log(tabId, post2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-header"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-tabs"
  }, !!post2.tabhometext && /* @__PURE__ */ React.createElement("li", {
    key: post2.tabhometext,
    className: tabId === post2.slug ? "bx-tab-active" : ""
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: `/${(_a = post2.category) == null ? void 0 : _a.name.toLocaleLowerCase()}/${post2.slug}`
  }, post2.tabhometext)), post2.tabs && post2.tabs.map((tab) => {
    var _a2;
    return /* @__PURE__ */ React.createElement("li", {
      key: tab.tabid,
      className: tabId === tab.tabid ? "bx-tab-active" : ""
    }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
      to: `/${(_a2 = post2.category) == null ? void 0 : _a2.name.toLocaleLowerCase()}/${post2.slug}/${tab.tabid}`
    }, tab.tabname));
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-body"
  }, tabId === post2.slug ? /* @__PURE__ */ React.createElement(Contents, {
    data: post2.content
  }) : outlet), /* @__PURE__ */ React.createElement("div", {
    className: "bx-article-footer"
  }, post2.tags && /* @__PURE__ */ React.createElement("div", {
    className: "bx-tags"
  }, post2.tags.split(",").map((tag) => /* @__PURE__ */ React.createElement(import_remix12.Link, {
    className: "bx-tag",
    key: tag.trim(),
    to: `/posts/${tag.trim()}`
  }, /* @__PURE__ */ React.createElement(TagLight, null), /* @__PURE__ */ React.createElement("span", null, tag.trim())))))));
}

// app/components/Posts/index.tsx
function Posts({ firstPost, otherPosts, category }) {
  var _a, _b;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, firstPost && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
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
    className: "bx-post-desc bx-post-date"
  }, /* @__PURE__ */ React.createElement(Date, {
    dateString: firstPost.date
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-post-avatar"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    name: firstPost.author.name,
    picture: firstPost.author.picture
  })))))), /* @__PURE__ */ React.createElement("hr", {
    className: "bx-hr"
  })), otherPosts && !!otherPosts.length && /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("ul", null, otherPosts.map((post2) => {
    var _a2, _b2;
    return /* @__PURE__ */ React.createElement("li", {
      className: "bx-post bx-other-post",
      key: post2.slug
    }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
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
      className: "bx-post-desc bx-post-date"
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
  const { title, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2 }
  } = (0, import_react_datocms10.useQuerySubscription)(datoQuerySubscription2);
  const paths = pathname ? pathname.split("/") : [null];
  const tabId = paths[paths.length - 1];
  const context = { post: post2, tabId };
  const outlet = /* @__PURE__ */ React.createElement(import_remix14.Outlet, {
    context
  });
  console.log(pathname.split("/"));
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
  }), /* @__PURE__ */ React.createElement(Post, __spreadValues({}, { post: post2, outlet, tabId })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/$slug/$tab.tsx
var tab_exports = {};
__export(tab_exports, {
  default: () => PostTab,
  loader: () => loader8
});
init_react();
var import_remix15 = __toESM(require_remix());
var loader8 = async ({ params }) => {
  const data = {
    tab: params.tab
  };
  return (0, import_remix15.json)(data);
};
function PostTab() {
  var _a;
  const { tab } = (0, import_remix15.useLoaderData)();
  const { post: post2 } = (0, import_remix15.useOutletContext)();
  const data = post2.tabs ? (_a = post2.tabs.find((t) => t.tabid === tab)) == null ? void 0 : _a.tabcontents : null;
  return /* @__PURE__ */ React.createElement(Contents, {
    data
  });
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/index.tsx
var notices_exports = {};
__export(notices_exports, {
  default: () => Index,
  loader: () => loader9
});
init_react();
var import_react_router_dom8 = require("react-router-dom");
var import_remix16 = __toESM(require_remix());
var import_react_datocms11 = require("react-datocms");
var loader9 = async ({ request }) => {
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
var start_exports = {};
__export(start_exports, {
  action: () => action
});
init_react();
var import_remix17 = __toESM(require_remix());
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("preview", "yes");
  return (0, import_remix17.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/notices/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => Test
});
init_react();
var import_react_router_dom9 = require("react-router-dom");
function Test() {
  const { pathname } = (0, import_react_router_dom9.useLocation)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-sections"
  }, "^^"));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/preview/stop.ts
var stop_exports = {};
__export(stop_exports, {
  action: () => action2
});
init_react();
var import_remix18 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix18.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => PostSlug2,
  loader: () => loader10,
  meta: () => meta3
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_react_router_dom10 = require("react-router-dom");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_react_datocms12 = require("react-datocms");
var loader10 = async ({ request, params }) => {
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
  const { pathname } = (0, import_react_router_dom10.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix19.useLoaderData)();
  const { title, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: { post: post2 }
  } = (0, import_react_datocms12.useQuerySubscription)(datoQuerySubscription2);
  const paths = pathname ? pathname.split("/") : [null];
  const tabId = paths[paths.length - 1];
  const context = { post: post2, tabId };
  const outlet = /* @__PURE__ */ React.createElement(import_remix19.Outlet, {
    context
  });
  console.log(pathname.split("/"));
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
  }), /* @__PURE__ */ React.createElement(Post, __spreadValues({}, { post: post2, outlet, tabId })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/$slug/$tab.tsx
var tab_exports2 = {};
__export(tab_exports2, {
  default: () => PostTab2,
  loader: () => loader11
});
init_react();
var import_remix20 = __toESM(require_remix());
var loader11 = async ({ params }) => {
  const data = {
    tab: params.tab
  };
  return (0, import_remix20.json)(data);
};
function PostTab2() {
  var _a;
  const { tab } = (0, import_remix20.useLoaderData)();
  const { post: post2 } = (0, import_remix20.useOutletContext)();
  const data = post2.tabs ? (_a = post2.tabs.find((t) => t.tabid === tab)) == null ? void 0 : _a.tabcontents : null;
  return /* @__PURE__ */ React.createElement(Contents, {
    data
  });
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/news/index.tsx
var news_exports = {};
__export(news_exports, {
  default: () => Index2,
  loader: () => loader12
});
init_react();
var import_react_router_dom11 = require("react-router-dom");
var import_remix21 = __toESM(require_remix());
var import_react_datocms13 = require("react-datocms");
var loader12 = async ({ request }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: news
  });
  return __spreadValues({}, querySubscription);
};
function Index2() {
  const { pathname } = (0, import_react_router_dom11.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix21.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms13.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), firstPost && /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "news" })));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/posts/$tag.tsx
var tag_exports = {};
__export(tag_exports, {
  default: () => Index3,
  loader: () => loader13
});
init_react();
var import_react_router_dom12 = require("react-router-dom");
var import_remix22 = __toESM(require_remix());
var import_react_datocms14 = require("react-datocms");
var loader13 = async ({ request, params }) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: posts,
    variables: {
      tag: params.tag
    }
  });
  return __spreadValues({}, querySubscription);
};
function Index3() {
  const { pathname } = (0, import_react_router_dom12.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix22.useLoaderData)();
  const { sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const tag = decodeURI(pathname.split("/posts/")[1]);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms14.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title: tag, Icon: /* @__PURE__ */ React.createElement(Tags, null), desc: "\uAD00\uB828\uAE00 \uBAA9\uB85D", sidebar, prevRoute }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-sections"
  }, /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts }))));
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
var import_bolt_ui4 = require("bolt-ui");

// app/lotties/cowboy-hat-face.json
var v = "5.5.7";
var meta4 = { g: "LottieFiles AE 0.1.20", a: "", k: "", d: "", tc: "" };
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
var cowboy_hat_face_default = { v, meta: meta4, fr, ip, op, w, h, nm, ddd, assets, layers, markers };

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
  loader: () => loader14
});
init_react();
var import_remix24 = __toESM(require_remix());
var import_react_datocms16 = require("react-datocms");

// app/components/Promotions/index.tsx
init_react();
var import_remix23 = __toESM(require_remix());
var import_react_datocms15 = require("react-datocms");
function Promotions({ promotions }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix23.Link, {
    to: promotion.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms15.Image, {
    className: "bx-promotion-image",
    data: promotion.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  }))))));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/index.tsx
var loader14 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: main
  });
};
function Index4() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix24.useLoaderData)();
  const {
    data: { promotions, morePosts }
  } = (0, import_react_datocms16.useQuerySubscription)(datoQuerySubscription2);
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
  loader: () => loader15
});
init_react();
var import_remix25 = __toESM(require_remix());
var import_react_router_dom16 = require("react-router-dom");
var import_react_datocms18 = require("react-datocms");

// app/components/Section/index.tsx
init_react();
var import_react_datocms17 = require("react-datocms");
var import_bolt_ui5 = require("bolt-ui");
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
  }, /* @__PURE__ */ React.createElement(import_react_datocms17.Image, {
    className: "bx-thumbnail",
    data: responsiveImage
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bx-card-sqaure-info"
  }, responsiveImage.title))))), metas && !!metas.length && /* @__PURE__ */ React.createElement("div", {
    className: "bx-meta-list"
  }, metas.map((meta5, index) => /* @__PURE__ */ React.createElement("div", {
    key: index.toString(),
    className: "bx-meta"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-info"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-label"
  }, meta5.label), /* @__PURE__ */ React.createElement("span", {
    className: "bx-meta-value"
  }, meta5.value))))), label && /* @__PURE__ */ React.createElement("div", {
    className: "w-auto md:w-60 px-5 md:self-end pt-2.5 md:px-8"
  }, /* @__PURE__ */ React.createElement(import_bolt_ui5.Button, {
    block: true,
    size: "large",
    href: link
  }, label)));
}

// route:/Users/deerpark/Dev/bolt-ux/app/routes/plan.tsx
var loader15 = ({ request }) => {
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
  } = (0, import_react_datocms18.useQuerySubscription)(datoQuerySubscription2);
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
var assets_manifest_default = { "version": "9a7fe277", "entry": { "module": "/build/entry.client-45OMPR5M.js", "imports": ["/build/_shared/chunk-I2UQQBEY.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QXS7PVAH.js", "imports": ["/build/_shared/chunk-3AZGSTM2.js", "/build/_shared/chunk-4RYZIQ32.js", "/build/_shared/chunk-EX22J5FC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-MXSLFX3X.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-47G6YWBF.js", "imports": ["/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug": { "id": "routes/news/$slug", "parentId": "root", "path": "news/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug-G5JTHKWH.js", "imports": ["/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug/$tab": { "id": "routes/news/$slug/$tab", "parentId": "routes/news/$slug", "path": ":tab", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug/$tab-27VGHVO5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/index": { "id": "routes/news/index", "parentId": "root", "path": "news", "index": true, "caseSensitive": void 0, "module": "/build/routes/news/index-L7LT5CHU.js", "imports": ["/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/$slug": { "id": "routes/notices/$slug", "parentId": "root", "path": "notices/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/$slug-QD4GLOAF.js", "imports": ["/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/$slug/$tab": { "id": "routes/notices/$slug/$tab", "parentId": "routes/notices/$slug", "path": ":tab", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/$slug/$tab-GXC6OVX3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/index": { "id": "routes/notices/index", "parentId": "root", "path": "notices", "index": true, "caseSensitive": void 0, "module": "/build/routes/notices/index-PKW2R2HB.js", "imports": ["/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/test": { "id": "routes/notices/test", "parentId": "root", "path": "notices/test", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/test-32JUWD6X.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan": { "id": "routes/plan", "parentId": "root", "path": "plan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan-OAX5VNXJ.js", "imports": ["/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$tag": { "id": "routes/posts/$tag", "parentId": "root", "path": "posts/:tag", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$tag-SW46XSPQ.js", "imports": ["/build/_shared/chunk-QH4KZ6BG.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-F6M44B4O.js", "imports": ["/build/_shared/chunk-L4AX2DTP.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-27CPS2VH.js", "imports": ["/build/_shared/chunk-L4AX2DTP.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-LIPXV6BD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.appdesign": { "id": "routes/services.appdesign", "parentId": "root", "path": "services/appdesign", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.appdesign-LBWQTOWK.js", "imports": ["/build/_shared/chunk-GPQW64UZ.js", "/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.branding": { "id": "routes/services.branding", "parentId": "root", "path": "services/branding", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.branding-UKCU6QRU.js", "imports": ["/build/_shared/chunk-GPQW64UZ.js", "/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.homepage": { "id": "routes/services.homepage", "parentId": "root", "path": "services/homepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.homepage-5NMJKBAL.js", "imports": ["/build/_shared/chunk-DJLAR64C.js", "/build/_shared/chunk-GPQW64UZ.js", "/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.publishing": { "id": "routes/services.publishing", "parentId": "root", "path": "services/publishing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.publishing-TNOSBI4N.js", "imports": ["/build/_shared/chunk-DJLAR64C.js", "/build/_shared/chunk-GPQW64UZ.js", "/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.singlepage": { "id": "routes/services.singlepage", "parentId": "root", "path": "services/singlepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.singlepage-HCQKIGXN.js", "imports": ["/build/_shared/chunk-DJLAR64C.js", "/build/_shared/chunk-GPQW64UZ.js", "/build/_shared/chunk-WRGMMDQS.js", "/build/_shared/chunk-DKFOSK7D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-COR76WUM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9A7FE277.js" };

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
  "routes/notices/$slug/$tab": {
    id: "routes/notices/$slug/$tab",
    parentId: "routes/notices/$slug",
    path: ":tab",
    index: void 0,
    caseSensitive: void 0,
    module: tab_exports
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
    module: start_exports
  },
  "routes/notices/test": {
    id: "routes/notices/test",
    parentId: "root",
    path: "notices/test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  },
  "routes/preview/stop": {
    id: "routes/preview/stop",
    parentId: "root",
    path: "preview/stop",
    index: void 0,
    caseSensitive: void 0,
    module: stop_exports
  },
  "routes/news/$slug": {
    id: "routes/news/$slug",
    parentId: "root",
    path: "news/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/news/$slug/$tab": {
    id: "routes/news/$slug/$tab",
    parentId: "routes/news/$slug",
    path: ":tab",
    index: void 0,
    caseSensitive: void 0,
    module: tab_exports2
  },
  "routes/news/index": {
    id: "routes/news/index",
    parentId: "root",
    path: "news",
    index: true,
    caseSensitive: void 0,
    module: news_exports
  },
  "routes/posts/$tag": {
    id: "routes/posts/$tag",
    parentId: "root",
    path: "posts/:tag",
    index: void 0,
    caseSensitive: void 0,
    module: tag_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvcXVlcmllcy9yb290LnRzIiwgIi4uL2FwcC9saWIvZnJhZ21lbnRzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Bvc3RzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25ld3MudHMiLCAiLi4vYXBwL3F1ZXJpZXMvbm90aWNlcy50cyIsICIuLi9hcHAvcXVlcmllcy9tYWluLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL2hvbWVwYWdlLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL3NpbmdsZXBhZ2UudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcHVibGlzaGluZy50cyIsICIuLi9hcHAvcXVlcmllcy9zZXJ2aWNlcy9hcHBkZXNpZ24udHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvYnJhbmRpbmcudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcGxhbi50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0J1bGxldFNvbGlkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzTGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZUxpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93TGVmdExpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1RhZ0xpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9QdWJsaXNoaW5nLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0FwcGRlc2lnbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9CcmFuZGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9OZXdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdGljZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9CYW5uZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHJpdmFjeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Db250YWN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1ByaWNlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05vdEZvdW5kLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1RhZ3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vWW91dHViZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ud2l0dGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0luc3RhZ3JhbS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9LYWthby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCAiLi4vYXBwL2xpYi9rYWthby50cyIsICIuLi9hcHAvY29tcG9uZW50cy9CYW5uZXIvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL1JlY29tbWVuZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUm93L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MaXN0L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9UZWNoLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9GbG93LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9DcmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvRkFRLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9SZWZ1bmQudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2UudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnbi50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuYnJhbmRpbmcudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ub3RpY2VzLyRzbHVnLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BdmF0YXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0RhdGUvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3RzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0cy9Qb3N0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9ub3RpY2VzLyRzbHVnLyR0YWIudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByZXZpZXcvc3RhcnQudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy90ZXN0LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHMiLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy8kc2x1Zy8kdGFiLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy8kdGFnLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXR0aW5ncy50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3giLCAicm91dGU6L1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb21vdGlvbnMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMucHVibGlzaGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcvJHRhYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy90ZXN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdG9wLnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy8kc2x1Zy8kdGFiLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyR0YWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXR0aW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIi9Vc2Vycy9kZWVycGFyay9EZXYvYm9sdC11eC9hcHAvcm91dGVzL2NvbnRhY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcml2YWN5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiL1VzZXJzL2RlZXJwYXJrL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIwIGZyb20gXCIvVXNlcnMvZGVlcnBhcmsvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wbGFuLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMucHVibGlzaGluZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMucHVibGlzaGluZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9wdWJsaXNoaW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL3NpbmdsZXBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2FwcGRlc2lnblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuYnJhbmRpbmdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLmJyYW5kaW5nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2JyYW5kaW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvaG9tZXBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL25vdGljZXMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGljZXMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90aWNlcy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90aWNlcy8kc2x1Zy8kdGFiXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ub3RpY2VzLyRzbHVnLyR0YWJcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ub3RpY2VzLyRzbHVnXCIsXG4gICAgICBwYXRoOiBcIjp0YWJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL25vdGljZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGljZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90aWNlc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3ByZXZpZXcvc3RhcnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdGFydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90aWNlcy90ZXN0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ub3RpY2VzL3Rlc3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90aWNlcy90ZXN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3cy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbmV3cy8kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJuZXdzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbmV3cy8kc2x1Zy8kdGFiXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9uZXdzLyRzbHVnLyR0YWJcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9uZXdzLyRzbHVnXCIsXG4gICAgICBwYXRoOiBcIjp0YWJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9uZXdzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9uZXdzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5ld3NcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvJHRhZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvJHRhZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0cy86dGFnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJpdmFjeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJpdmFjeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcml2YWN5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOVxuICAgIH0sXG4gIFwicm91dGVzL3BsYW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BsYW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGxhblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUxvYWRlckRhdGEsIHVzZUNhdGNoIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyByZW5kZXJNZXRhVGFncywgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyByb290IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlUHJldlJvdXRlLCB1c2VOYXYsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgUm9vdExheW91dCwgTGF5b3V0LCBTaXRlTWV0YSB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuaW1wb3J0IGJvbHRVSVN0eWxlcyBmcm9tICdib2x0LXVpL2Rpc3QvaW5kZXguY3NzJ1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9zcG9xYS5naXRodWIuaW8vc3BvcWEtaGFuLXNhbnMvY3NzL1Nwb3FhSGFuU2Fuc05lby5jc3MnLFxuICAgIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYm9sdFVJU3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYXBwU3R5bGVzIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgYmxvZywgc2l0ZSB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKFsuLi5ibG9nLnNlbywgLi4uc2l0ZS5mYXZpY29uXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IHVzZUNhdGNoKClcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICBjb25zdCB7IHNpZGViYXIgPSB0cnVlIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBpc1Jvb3QgPSBwYXRobmFtZSA9PT0gJy8nXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSwgc2lkZWJhciB9fT5cbiAgICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgICB7Li4ueyB0aXRsZTogc3RhdHVzLnRvU3RyaW5nKCksIEljb246IEljb25zLk5vdEZvdW5kLCBkZXNjOiBzdGF0dXNUZXh0LCBwcmV2Um91dGUsIHBhdGhuYW1lLCBzaWRlYmFyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWVycm9yJz5cbiAgICAgICAgICAgICAgPGgxPlx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDM0VcdUM3NDQgXHVDMjE4IFx1QzVDNlx1QzJCNVx1QjJDOFx1QjJFNC48L2gxPlxuICAgICAgICAgICAgICA8cD5cdUM3NzRcdUM4MDRcdUM3M0NcdUI4NUMgXHVCM0NDXHVDNTQ0IFx1QUMwMFx1QzJEQ1x1QUM3MFx1QjA5OCBcdUIyRTRcdUMyREMgXHVDMkRDXHVCM0M0XHVENTc0IFx1QzhGQ1x1QzEzOFx1QzY5NC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Sb290TGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IGlzUm9vdCA9IHBhdGhuYW1lID09PSAnLydcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBzaXRlIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPFNpdGVNZXRhIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7cmVuZGVyTWV0YVRhZ3MoWy4uLnNpdGUuZmF2aWNvbl0pfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxSb290TGF5b3V0IHsuLi57IGlzUm9vdCwgcGF0aG5hbWUsIHNpZGViYXIgfX0+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L1Jvb3RMYXlvdXQ+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHRpbnkgZnJvbSAndGlueS1qc29uLWh0dHAnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQoeyBxdWVyeSwgdmFyaWFibGVzLCBwcmV2aWV3IH06IGFueSkge1xuICBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tJ1xuXG4gIGlmIChwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UKSB7XG4gICAgZW5kcG9pbnQgKz0gYC9lbnZpcm9ubWVudHMvJHtwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UfWBcbiAgfVxuXG4gIGlmIChwcmV2aWV3KSB7XG4gICAgZW5kcG9pbnQgKz0gYC9wcmV2aWV3YFxuICB9XG5cbiAgY29uc3QgeyBib2R5IH0gPSBhd2FpdCB0aW55LnBvc3Qoe1xuICAgIHVybDogZW5kcG9pbnQsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBVE9DTVNfUkVBRE9OTFlfVE9LRU59YCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGJvZHkuZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcignT3VjaCEgVGhlIHF1ZXJ5IGhhcyBzb21lIGVycm9ycyEnLCBib2R5LmVycm9ycylcbiAgICB0aHJvdyBib2R5LmVycm9yc1xuICB9XG5cbiAgcmV0dXJuIGJvZHkuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHsgcmVxdWVzdCwgLi4uZ3FsUmVxdWVzdCB9OiBhbnkpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG4gIGNvbnN0IHByZXZpZXdFbmFibGVkID0gc2Vzc2lvbi5nZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiBwcmV2aWV3RW5hYmxlZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uZ3FsUmVxdWVzdCxcbiAgICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKHsgLi4uZ3FsUmVxdWVzdCwgcHJldmlldzogdHJ1ZSB9KSxcbiAgICAgICAgICB0b2tlbjogcHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTixcbiAgICAgICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuREFUT0NNU19FTlZJUk9OTUVOVCB8fCBudWxsLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsRGF0YTogYXdhaXQgbG9hZChncWxSZXF1ZXN0KSxcbiAgICAgICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19fc2Vzc2lvbicsXG4gICAgbWF4QWdlOiA2MDRfODAwLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH1cbiIsICJpbXBvcnQgeyBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IGBcbiAge1xuICAgIHNpdGU6IF9zaXRlIHtcbiAgICAgIGZhdmljb246IGZhdmljb25NZXRhVGFncyh2YXJpYW50czogW2ljb24sIG1zQXBwbGljYXRpb24sIGFwcGxlVG91Y2hJY29uXSkge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICAgIGJsb2cge1xuICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7bWV0YVRhZ3NGcmFnbWVudH1cbmBcbiIsICIvLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudDogc3RyaW5nID0gYFxuICBmcmFnbWVudCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCBvbiBSZXNwb25zaXZlSW1hZ2Uge1xuICAgIHNyY1NldFxuICAgIHdlYnBTcmNTZXRcbiAgICBzaXplc1xuICAgIHNyY1xuICAgIHdpZHRoXG4gICAgaGVpZ2h0XG4gICAgYXNwZWN0UmF0aW9cbiAgICBhbHRcbiAgICB0aXRsZVxuICAgIGJhc2U2NFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBtZXRhVGFnc0ZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IG1ldGFUYWdzRnJhZ21lbnQgb24gVGFnIHtcbiAgICBhdHRyaWJ1dGVzXG4gICAgY29udGVudFxuICAgIHRhZ1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBjb3ZlckltYWdlID0gYGNvdmVySW1hZ2Uge1xuICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gIH1cbn1gXG5cbmV4cG9ydCBjb25zdCBhdXRob3IgPSBgYXV0aG9yIHtcbiAgbmFtZVxuICBwaWN0dXJlIHtcbiAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICB9XG59YFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBtZXRhVGFnc0ZyYWdtZW50IH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGBcbiAgcXVlcnkgUG9zdEJ5U2x1Zygkc2x1ZzogU3RyaW5nKSB7XG4gICAgcG9zdChmaWx0ZXI6IHtzbHVnOiB7ZXE6ICRzbHVnfX0pIHtcbiAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcbiAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxuICAgICAgfVxuICAgICAgdGl0bGVcbiAgICAgIGV4Y2VycHRcbiAgICAgIHNsdWdcbiAgICAgIGNvbnRlbnQge1xuICAgICAgICB2YWx1ZVxuICAgICAgICBibG9ja3Mge1xuICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAuLi5vbiBJbWFnZUJsb2NrUmVjb3JkIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFnc1xuICAgICAgdGFiaG9tZXRleHRcbiAgICAgIHRhYnMge1xuICAgICAgICB0YWJpZFxuICAgICAgICB0YWJuYW1lXG4gICAgICAgIHRhYmNvbnRlbnRzIHtcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgICBfX3R5cGVuYW1lXG4gICAgICAgICAgICAuLi5vbiBJbWFnZUJsb2NrUmVjb3JkIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0ZWdvcnkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgICBkYXRlXG4gICAgICBvZ0ltYWdlOiBjb3ZlckltYWdle1xuICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSlcbiAgICAgIH1cbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtb3JlUG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDQsIGZpbHRlcjoge3NsdWc6IHtuZXE6ICRzbHVnfX0pIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgJHttZXRhVGFnc0ZyYWdtZW50fVxuYFxuXG5leHBvcnQgY29uc3QgcG9zdHMgPSBgXG4gIHF1ZXJ5IFBvc3RCeVNsdWcoJHRhZzogU3RyaW5nISkge1xuICAgIHBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyMCwgZmlsdGVyOiB7dGFnczoge21hdGNoZXM6IHtwYXR0ZXJuOiAkdGFnfX19KSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzXG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvbW90aW9uOiBwcm9tb3Rpb24ob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgbG9jYWxlOiBrb19LUikge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBjb3ZlckltYWdlLCBhdXRob3IgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBuZXdzID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IF9jcmVhdGVkQXRfREVTQywgZmlsdGVyOiB7Y2F0ZWdvcnk6IHtlcTogXCIxMTY2NzkwNzlcIn19LCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICAke2NvdmVySW1hZ2V9XG4gICAgICAke2F1dGhvcn1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCwgY292ZXJJbWFnZSwgYXV0aG9yIH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3Qgbm90aWNlID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IF9jcmVhdGVkQXRfREVTQywgZmlsdGVyOiB7Y2F0ZWdvcnk6IHtlcTogXCIxMTY2NzY4NDVcIn19LCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICAke2NvdmVySW1hZ2V9XG4gICAgICAke2F1dGhvcn1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBgXG4gIHtcbiAgICBwcm9tb3Rpb25zOiBhbGxQcm9tb3Rpb25zKG9yZGVyQnk6IGV4cGlyZWRhdF9BU0MsIGZpcnN0OiAxKSB7XG4gICAgICB0aXRsZVxuICAgICAgY29sb3Ige1xuICAgICAgICBibHVlXG4gICAgICAgIGdyZWVuXG4gICAgICAgIHJlZFxuICAgICAgfVxuICAgICAgdXJsXG4gICAgICBleHBpcmVkYXRcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogNzc2LCBoOiA3MjYgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbW9yZVBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiA1KSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJleHBvcnQgY29uc3QgaG9tZXBhZ2UgPSBgXG4gIHF1ZXJ5IEhvbWVwYWdlIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBob21lcGFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBzaW5nbGVwYWdlID0gYFxuICBxdWVyeSBTaW5nbGVwYWdlIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaW5nbGVwYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IHB1Ymxpc2hpbmcgPSBgXG4gIHF1ZXJ5IFB1Ymxpc2hpbmcge1xuICAgIHByb21vdGlvbiB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGFsdFxuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwaG90byB7XG4gICAgICBjb21tb24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1Ymxpc2hpbmcge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3QgYXBwZGVzaWduID0gYFxuICBxdWVyeSBBcHBkZXNpZ24ge1xuICAgIHByb21vdGlvbiB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGFsdFxuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwaG90byB7XG4gICAgICBjb21tb24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFwcGRlc2lnbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBicmFuZGluZyA9IGBcbiAgcXVlcnkgQnJhbmRpbmcge1xuICAgIHByb21vdGlvbiB7XG4gICAgICB0aXRsZShsb2NhbGU6IGtvX0tSKVxuICAgICAgdXJsXG4gICAgICBjb2xvciB7XG4gICAgICAgIHJlZFxuICAgICAgICBncmVlblxuICAgICAgICBibHVlXG4gICAgICB9XG4gICAgICB0ZXh0Y29sb3Ige1xuICAgICAgICBoZXhcbiAgICAgIH1cbiAgICAgIGxhYmVsKGxvY2FsZToga29fS1IpXG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGFsdFxuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwaG90byB7XG4gICAgICBjb21tb24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyYW5kaW5nIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IHBsYW4gPSBgXG4gIHF1ZXJ5IFBsYW4ge1xuICAgIHBob3RvIHtcbiAgICAgIGhvbWVwYWdlYmFzaWMge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2luZ2xlcGFnZWJhc2ljIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1Ymxpc2hpbmdiYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcHBkZXNpZ25iYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmFuZGluZ2Jhc2ljIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJpbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgdHlwZSBSb3V0ZSA9IHtcbiAgcGF0aG5hbWU/OiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIHNpZGViYXI6IGJvb2xlYW4sXG4gIGlkPzogc3RyaW5nLFxuICBkaXNwbGF5PzogYm9vbGVhbixcbiAgZGVzYz86IHN0cmluZyxcbiAgSWNvbj86IEpTWC5FbGVtZW50IHwgKCgpID0+IEpTWC5FbGVtZW50KSxcbn1cblxuZXhwb3J0IHR5cGUgUm91dGVzID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBkaXNwbGF5PzogYm9vbGVhbixcbiAgY2hpbGRyZW46IFJvdXRlW10sXG59XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlc1tdID0gW1xuICB7XG4gICAgdGl0bGU6ICdcdUQ2NDgnLFxuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnLycsXG4gICAgICAgIHRpdGxlOiAnXHVENjQ4JyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJycsXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUJFMTRcdUI4NUNcdUFERjgnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbm90aWNlcycsXG4gICAgICAgIHRpdGxlOiAnXHVBQ0Y1XHVDOUMwXHVDMEFDXHVENTZEJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgaWQ6ICcxMTY2NzY4NDUnLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNTRDXHVCODI0XHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24ubm90aWNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvbmV3cycsXG4gICAgICAgIHRpdGxlOiAnXHVDMEM4XHVDMThDXHVDMkREJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgaWQ6ICcxMTY2NzkwNzknLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDODhCXHVDNzQwIFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIEljb246IEljb24ubmV3cyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL2hvbWVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1RDY0RFx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NUMgXHVDNkY5XHVDMEFDXHVDNzc0XHVEMkI4IFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uSG9tZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9zaW5nbGVwYWdlJyxcbiAgICAgICAgdGl0bGU6ICdcdUMyRjFcdUFFMDAgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUM3NzRcdUJDQTRcdUQyQjgsIFx1Qjc5Q1x1QjUyOSBcdUIyRThcdUM3N0MgXHVEMzk4XHVDNzc0XHVDOUMwIFx1QUQ2Q1x1Q0Q5NScsXG4gICAgICAgIEljb246IEljb24uU2luZ2xlcGFnZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL3B1Ymxpc2hpbmcnLFxuICAgICAgICB0aXRsZTogJ1x1RDM3Q1x1QkUxNFx1QjlBQ1x1QzJGMSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQycsXG4gICAgICAgIEljb246IEljb24uUHVibGlzaGluZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL2FwcGRlc2lnbicsXG4gICAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUJBQThcdUJDMTRcdUM3N0MgXHVDNUI0XHVENTBDXHVCOUFDXHVDRjAwXHVDNzc0XHVDMTU4IFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICAgIEljb246IEljb24uQXBwZGVzaWduLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvYnJhbmRpbmcnLFxuICAgICAgICB0aXRsZTogJ1x1QkUwQ1x1Qjc5Q1x1QjREQyBcdUFDMDBcdUM3NzRcdUI0REMnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNjI4LCBcdUM2MjRcdUQ1MDRcdUI3N0NcdUM3NzggXHVCNTE0XHVDNzkwXHVDNzc4IFx1Q0VFOFx1QzEyNFx1RDMwNScsXG4gICAgICAgIEljb246IEljb24uQnJhbmRpbmcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1x1QUUzMFx1RDBDMCcsXG4gICAgZGlzcGxheTogZmFsc2UsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvY29udGFjdCcsXG4gICAgICAgIHRpdGxlOiAnXHVCQjM0XHVCOENDIFx1QzBDMVx1QjJGNCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUJCMzRcdUM1QzdcdUM3NzRcdUI0RTAgXHVDNTRDXHVCODI0XHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24uQ29udGFjdCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3BsYW4nLFxuICAgICAgICB0aXRsZTogJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUM2OTRcdUFFMDhcdUQ0NUMnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QkNDNCBcdUFDMDBcdUFDQTlcdUM3NDQgXHVDNTQ4XHVCMEI0XHVENTc0IFx1QjREQ1x1QjgyNFx1QzY5NC4nLFxuICAgICAgICBJY29uOiBJY29uLlByaWNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvcHJpdmFjeScsXG4gICAgICAgIHRpdGxlOiAnXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QzgxNVx1Q0M0NScsXG4gICAgICAgIHNpZGViYXI6IGZhbHNlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0NCBcdUMyMThcdUI5QkRcdTAwQjdcdUFDRjVcdUFDMUNcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5Qcml2YWN5LFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1x1QzEyNFx1QzgxNScsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXR0aW5ncycsXG4gICAgICAgIHRpdGxlOiAnXHVENjU4XHVBQ0JEXHVDMTI0XHVDODE1JyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QUMxQ1x1Qzc3OFx1RDY1NCBcdUMxMjRcdUM4MTVcdUM3NDQgXHVCQ0MwXHVBQ0JEXHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5TZXR0aW5ncyxcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuXVxuXG5jb25zdCBleGNlcHRSb3V0ZSA9IFsncG9zdHMnLCAnc2VydmljZXMnLCAnZXZlbnRzJ11cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdihwYXRobmFtZT86IHN0cmluZyk6IFJvdXRlIHtcbiAgY29uc3QgbWF0Y2hlZFJvdXRlID0gcm91dGVzLnJlZHVjZTxSb3V0ZVtdPigoYWNjLCBjdXIpID0+IGFjYy5jb25jYXQoY3VyLmNoaWxkcmVuKSwgW10pLmZpbmQocm91dGUgPT4gcm91dGUucGF0aG5hbWUgPT09IHBhdGhuYW1lKVxuICByZXR1cm4gbWF0Y2hlZFJvdXRlIHx8IHJvdXRlc1swXS5jaGlsZHJlblswXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldlJvdXRlKHBhdGhuYW1lIDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXRobmFtZSkgcmV0dXJuICcvJ1xuICBjb25zdCBwYXRocyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcbiAgcGF0aHMucG9wKClcbiAgY29uc3QgcHJldlJvdXRlID0gcGF0aHMuZmlsdGVyKHAgPT4gIWV4Y2VwdFJvdXRlLmluY2x1ZGVzKHApKS5qb2luKCcvJylcbiAgcmV0dXJuICFwcmV2Um91dGUgfHwgcHJldlJvdXRlID09PSAnJyA/ICcvJyA6IHByZXZSb3V0ZVxufVxuXG5leHBvcnQgdHlwZSBIZXJvU3RyaW5nID0gW3N0cmluZywgc3RyaW5nXVtdXG5cbmV4cG9ydCBjb25zdCBoZXJvU3RyaW5nOiBIZXJvU3RyaW5nID0gW1xuICBbJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLCAnXHVCRDgwXHVEMTMwJ10sXG4gIFsnXHVCRTBDXHVCNzlDXHVCNERDIFx1QUMwMFx1Qzc3NFx1QjREQycsICdcdUFFNENcdUM5QzAnXSxcbl0iLCAidHlwZSBCdWxsZXRTb2xpZFByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdWxsZXRTb2xpZCh7IGNsYXNzTmFtZSB9OiBCdWxsZXRTb2xpZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0geG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMzgxLjIgMTcyLjhDMzc3LjEgMTY0LjkgMzY4LjkgMTYwIDM2MCAxNjBoLTE1Ni42bDUwLjg0LTEyNy4xYzIuOTY5LTcuMzc1IDIuMDYyLTE1Ljc4LTIuNDA2LTIyLjM4UzIzOS4xIDAgMjMyIDBoLTE3NkM0My45NyAwIDMzLjgxIDguOTA2IDMyLjIyIDIwLjg0bC0zMiAyNDBDLS43MTc5IDI2Ny43IDEuMzc2IDI3NC42IDUuOTM4IDI3OS44QzEwLjUgMjg1IDE3LjA5IDI4OCAyNCAyODhoMTQ2LjNsLTQxLjc4IDE5NC4xYy0yLjQwNiAxMS4yMiAzLjQ2OSAyMi41NiAxNCAyNy4wOUMxNDUuNiA1MTEuNCAxNDguOCA1MTIgMTUyIDUxMmM3LjcxOSAwIDE1LjIyLTMuNzUgMTkuODEtMTAuNDRsMjA4LTMwNEMzODQuOCAxOTAuMiAzODUuNCAxODAuNyAzODEuMiAxNzIuOHonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGggZD0nTTAgNDE2QzAgNDA3LjIgNy4xNjQgNDAwIDE2IDQwMEg4MS42Qzg5LjAxIDM2My41IDEyMS4zIDMzNiAxNjAgMzM2QzE5OC43IDMzNiAyMzAuMSAzNjMuNSAyMzguNCA0MDBINDk2QzUwNC44IDQwMCA1MTIgNDA3LjIgNTEyIDQxNkM1MTIgNDI0LjggNTA0LjggNDMyIDQ5NiA0MzJIMjM4LjRDMjMwLjEgNDY4LjUgMTk4LjcgNDk2IDE2MCA0OTZDMTIxLjMgNDk2IDg5LjAxIDQ2OC41IDgxLjYgNDMySDE2QzcuMTY0IDQzMiAwIDQyNC44IDAgNDE2VjQxNnpNMjA4IDQxNkMyMDggMzg5LjUgMTg2LjUgMzY4IDE2MCAzNjhDMTMzLjUgMzY4IDExMiAzODkuNSAxMTIgNDE2QzExMiA0NDIuNSAxMzMuNSA0NjQgMTYwIDQ2NEMxODYuNSA0NjQgMjA4IDQ0Mi41IDIwOCA0MTZ6TTM1MiAxNzZDMzkwLjcgMTc2IDQyMi4xIDIwMy41IDQzMC40IDI0MEg0OTZDNTA0LjggMjQwIDUxMiAyNDcuMiA1MTIgMjU2QzUxMiAyNjQuOCA1MDQuOCAyNzIgNDk2IDI3Mkg0MzAuNEM0MjIuMSAzMDguNSAzOTAuNyAzMzYgMzUyIDMzNkMzMTMuMyAzMzYgMjgxIDMwOC41IDI3My42IDI3MkgxNkM3LjE2NCAyNzIgMCAyNjQuOCAwIDI1NkMwIDI0Ny4yIDcuMTY0IDI0MCAxNiAyNDBIMjczLjZDMjgxIDIwMy41IDMxMy4zIDE3NiAzNTIgMTc2ek00MDAgMjU2QzQwMCAyMjkuNSAzNzguNSAyMDggMzUyIDIwOEMzMjUuNSAyMDggMzA0IDIyOS41IDMwNCAyNTZDMzA0IDI4Mi41IDMyNS41IDMwNCAzNTIgMzA0QzM3OC41IDMwNCA0MDAgMjgyLjUgNDAwIDI1NnpNNDk2IDgwQzUwNC44IDgwIDUxMiA4Ny4xNiA1MTIgOTZDNTEyIDEwNC44IDUwNC44IDExMiA0OTYgMTEySDI3MC40QzI2Mi4xIDE0OC41IDIzMC43IDE3NiAxOTIgMTc2QzE1My4zIDE3NiAxMjEgMTQ4LjUgMTEzLjYgMTEySDE2QzcuMTY0IDExMiAwIDEwNC44IDAgOTZDMCA4Ny4xNiA3LjE2NCA4MCAxNiA4MEgxMTMuNkMxMjEgNDMuNDggMTUzLjMgMTYgMTkyIDE2QzIzMC43IDE2IDI2Mi4xIDQzLjQ4IDI3MC40IDgwSDQ5NnpNMTQ0IDk2QzE0NCAxMjIuNSAxNjUuNSAxNDQgMTkyIDE0NEMyMTguNSAxNDQgMjQwIDEyMi41IDI0MCA5NkMyNDAgNjkuNDkgMjE4LjUgNDggMTkyIDQ4QzE2NS41IDQ4IDE0NCA2OS40OSAxNDQgOTZ6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEhvbWVMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTI3Ny40IDQuMDAyQzI4My41LTEuMzM0IDI5Mi41LTEuMzM0IDI5OC42IDQuMDAyTDM4NCA3OS4zN1Y1NkMzODQgNDIuNzUgMzk0LjcgMzEuMSA0MDggMzEuMUg0ODhDNTAxLjMgMzEuMSA1MTIgNDIuNzUgNTEyIDU2VjE5Mi4zTDU3MC42IDI0NEM1NzcuMiAyNDkuOCA1NzcuOCAyNTkuMSA1NzEuMSAyNjYuNkM1NjYuMiAyNzMuMiA1NTYgMjczLjggNTQ5LjQgMjY3LjFMNTEyIDIzNC4xVjQzMkM1MTIgNDc2LjIgNDc2LjIgNTEyIDQzMiA1MTJIMTQ0Qzk5LjgyIDUxMiA2NCA0NzYuMiA2NCA0MzJWMjM0LjFMMjYuNTkgMjY3LjFDMTkuOTYgMjczLjggOS44NDkgMjczLjIgNC4wMDMgMjY2LjZDLTEuODQ0IDI1OS4xLTEuMjEyIDI0OS44IDUuNDE0IDI0NEwyNzcuNCA0LjAwMnpNNDgwIDE2NC4xVjY0SDQxNlYxMDcuNkw0ODAgMTY0LjF6TTk2IDIwNi43VjQzMkM5NiA0NTguNSAxMTcuNSA0ODAgMTQ0IDQ4MEgyMDhWMzIwQzIwOCAzMDIuMyAyMjIuMyAyODggMjQwIDI4OEgzMzZDMzUzLjcgMjg4IDM2OCAzMDIuMyAzNjggMzIwVjQ4MEg0MzJDNDU4LjUgNDgwIDQ4MCA0NTguNSA0ODAgNDMyVjIwNi43TDI4OCAzNy4zNEw5NiAyMDYuN3pNMjQwIDMyMFY0ODBIMzM2VjMyMEgyNDB6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEFycm93TGVmdExpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNMjAzLjkgNDA1LjNjNS44NzcgNi41OTQgNS4zNjEgMTYuNjktMS4xODggMjIuNjJjLTYuNTYyIDUuOTA2LTE2LjY5IDUuMzc1LTIyLjU5LTEuMTg4TDM2LjEgMjY2LjdjLTUuNDY5LTYuMTI1LTUuNDY5LTE1LjMxIDAtMjEuNDRsMTQ0LTE1OS4xYzUuOTA2LTYuNTYyIDE2LjAzLTcuMDk0IDIyLjU5LTEuMTg4YzYuOTE4IDYuMjcxIDYuNzgzIDE2LjM5IDEuMTg4IDIyLjYyTDY5LjUzIDI1NkwyMDMuOSA0MDUuM3onIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gVGFnTGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoIGQ9J004OCAxNDRDODggMTMwLjcgOTguNzUgMTIwIDExMiAxMjBDMTI1LjMgMTIwIDEzNiAxMzAuNyAxMzYgMTQ0QzEzNiAxNTcuMyAxMjUuMyAxNjggMTEyIDE2OEM5OC43NSAxNjggODggMTU3LjMgODggMTQ0ek0uMDAwMyA4MEMuMDAwMyA1My40OSAyMS40OSAzMiA0OCAzMkgxOTcuNUMyMTQuNSAzMiAyMzAuNyAzOC43NCAyNDIuNyA1MC43NUw0MTguNyAyMjYuN0M0NDMuNyAyNTEuNyA0NDMuNyAyOTIuMyA0MTguNyAzMTcuM0wyODUuMyA0NTAuN0MyNjAuMyA0NzUuNyAyMTkuNyA0NzUuNyAxOTQuNyA0NTAuN0wxOC43NSAyNzQuN0M2Ljc0MyAyNjIuNyAwIDI0Ni41IDAgMjI5LjVMLjAwMDMgODB6TTQxLjM3IDI1Mi4xTDIxNy40IDQyOC4xQzIyOS45IDQ0MC42IDI1MC4xIDQ0MC42IDI2Mi42IDQyOC4xTDM5Ni4xIDI5NC42QzQwOC42IDI4Mi4xIDQwOC42IDI2MS45IDM5Ni4xIDI0OS40TDIyMC4xIDczLjM3QzIxNC4xIDY3LjM3IDIwNS4xIDY0IDE5Ny41IDY0SDQ4QzM5LjE2IDY0IDMyIDcxLjE2IDMyIDgwVjIyOS41QzMyIDIzNy4xIDM1LjM3IDI0Ni4xIDQxLjM3IDI1Mi4xTDQxLjM3IDI1Mi4xek00MS4zNyAyNTIuMUwxOC43NSAyNzQuN3onIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJ0eXBlIExvZ29Qcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9nbyh7IGNsYXNzTmFtZSA9ICd3LTE2IGgtMTEnIH06IExvZ29Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9JzAgMCA2MCA0NCc+XG4gICAgICA8ZyBzdHJva2U9J25vbmUnIHN0cm9rZVdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsUnVsZT0nZXZlbm9kZCc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xOC4wMDAwMDAsIC0yNi4wMDAwMDApJyBmaWxsUnVsZT0nbm9uemVybyc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTguMDAwMDAwLCAyNi4wMDAwMDApJz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00wLjkzNjYzMjgzNSwzMS4wMDQyMTk0IEMwLjMxMjIxMDk0NSwzMS4wMDQyMTk0IDAsMzAuNjkxMTU1OCAwLDMwLjA2NTAyODUgTDAsMTUuOTc3MTY1NSBDMCwxNS4zNTEwMzgzIDAuMzEyMjEwOTQ1LDE1LjAzNzk3NDcgMC45MzY2MzI4MzUsMTUuMDM3OTc0NyBMOS4zNjYzMjgzNSwxNS4wMzc5NzQ3IEMxMS4xMTQ3MDk2LDE1LjAzNzk3NDcgMTIuNDg4NDM3OCwxNS40NzIzNTA1IDEzLjQ4NzUxMjgsMTYuMzQxMTAyIEMxNC40ODY1ODc5LDE3LjIwOTg1MzYgMTQuOTg2MTI1NCwxOC40MTkwNjE4IDE0Ljk4NjEyNTQsMTkuOTY4NzI2NyBDMTQuOTg2MTI1NCwyMC4zNzU3MDk0IDE0LjkyNzU4NTgsMjAuNzQzNTU5MiAxNC44MTA1MDY3LDIxLjA3MjI3NiBDMTQuNjkzNDI3NiwyMS40MDA5OTI4IDE0LjU3MjQ0NTksMjEuNjc0OTIzNSAxNC40NDc1NjE1LDIxLjg5NDA2OCBDMTQuMjkxNDU2LDIyLjE2MDE3MjEgMTQuMTE5NzQsMjIuMzk0OTY5OCAxMy45MzI0MTM0LDIyLjU5ODQ2MTIgQzE0LjIyOTAxMzgsMjIuNzcwNjQ2MSAxNC41MDIxOTg0LDIzLjAxMzI3MDUgMTQuNzUxOTY3MiwyMy4zMjYzMzQxIEMxNC45NzA1MTQ4LDIzLjU5MjQzODIgMTUuMTY1NjQ2NywyMy45NDg1NDggMTUuMzM3MzYyNywyNC4zOTQ2NjM3IEMxNS41MDkwNzg3LDI0Ljg0MDc3OTMgMTUuNTk0OTM2NywyNS40MDAzODA2IDE1LjU5NDkzNjcsMjYuMDczNDY3NCBDMTUuNTk0OTM2NywyNi43Nzc4NjA1IDE1LjQ5NzM3MDgsMjcuNDMxMzgwOCAxNS4zMDIyMzg5LDI4LjAzNDAyODMgQzE1LjEwNzEwNzEsMjguNjM2Njc1OCAxNC43NzE0ODAzLDI5LjE1NzE0NCAxNC4yOTUzNTg2LDI5LjU5NTQzMzEgQzEzLjgxOTIzNywzMC4wMzM3MjIyIDEzLjE4MzEwNzIsMzAuMzc4MDkyMiAxMi4zODY5NjkyLDMwLjYyODU0MzEgQzExLjU5MDgzMTMsMzAuODc4OTk0IDEwLjU4Mzk1MSwzMS4wMDQyMTk0IDkuMzY2MzI4MzUsMzEuMDA0MjE5NCBMMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBaIE04LjMxMjYxNjQxLDIxLjE0MjcxNTMgQzguNTMxMTY0MDgsMjEuMTQyNzE1MyA4LjcyMjM5MzI4LDIxLjA2MDUzNjEgOC44ODYzMDQwMywyMC44OTYxNzc3IEM5LjA1MDIxNDc3LDIwLjczMTgxOTMgOS4xMzIxNzAxNCwyMC41NDAwNjc4IDkuMTMyMTcwMTQsMjAuMzIwOTIzMyBDOS4xMzIxNzAxNCwyMC4xMDE3Nzg4IDkuMDUwMjE0NzcsMTkuOTEwMDI3MyA4Ljg4NjMwNDAzLDE5Ljc0NTY2ODkgQzguNzIyMzkzMjgsMTkuNTgxMzEwNSA4LjUzMTE2NDA4LDE5LjQ5OTEzMTMgOC4zMTI2MTY0MSwxOS40OTkxMzEzIEw2LjA4ODExMzQzLDE5LjQ5OTEzMTMgQzUuOTMyMDA3OTYsMTkuNDk5MTMxMyA1Ljg1Mzk1NTIyLDE5LjU3NzM5NzIgNS44NTM5NTUyMiwxOS43MzM5MjkgTDUuODUzOTU1MjIsMjAuOTA3OTE3NiBDNS44NTM5NTUyMiwyMS4wNjQ0NDk0IDUuOTMyMDA3OTYsMjEuMTQyNzE1MyA2LjA4ODExMzQzLDIxLjE0MjcxNTMgTDguMzEyNjE2NDEsMjEuMTQyNzE1MyBaIE04LjU0Njc3NDYyLDI2LjU0MzA2MjggQzguNzY1MzIyMjgsMjYuNTQzMDYyOCA4Ljk1NjU1MTQ5LDI2LjQ2MDg4MzYgOS4xMjA0NjIyMywyNi4yOTY1MjUyIEM5LjI4NDM3Mjk4LDI2LjEzMjE2NjggOS4zNjYzMjgzNSwyNS45NDA0MTUzIDkuMzY2MzI4MzUsMjUuNzIxMjcwOCBDOS4zNjYzMjgzNSwyNS41MDIxMjYzIDkuMjg0MzcyOTgsMjUuMzEwMzc0OCA5LjEyMDQ2MjIzLDI1LjE0NjAxNjQgQzguOTU2NTUxNDksMjQuOTgxNjU4IDguNzY1MzIyMjgsMjQuODk5NDc4OCA4LjU0Njc3NDYyLDI0Ljg5OTQ3ODggTDYuMDg4MTEzNDMsMjQuODk5NDc4OCBDNS45MzIwMDc5NiwyNC44OTk0Nzg4IDUuODUzOTU1MjIsMjQuOTc3NzQ0NyA1Ljg1Mzk1NTIyLDI1LjEzNDI3NjUgTDUuODUzOTU1MjIsMjYuMzA4MjY1MSBDNS44NTM5NTUyMiwyNi40NjQ3OTY5IDUuOTMyMDA3OTYsMjYuNTQzMDYyOCA2LjA4ODExMzQzLDI2LjU0MzA2MjggTDguNTQ2Nzc0NjIsMjYuNTQzMDYyOCBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1iJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMTYuMzM3NTUyNywyMy4wMjEwOTcgQzE2LjMzNzU1MjcsMjEuODY5ODM0OCAxNi41NTMyNDQxLDIwLjc4NDY5MjMgMTYuOTg0NjI2OCwxOS43NjU2Njk2IEMxNy40MTYwMDk1LDE4Ljc0NjY0NjkgMTguMDA4MTgwMiwxNy44NTk4NjM4IDE4Ljc2MTEzOTEsMTcuMTA1MzIwMiBDMTkuNTE0MDk4LDE2LjM1MDc3NjcgMjAuNDA0MzE1LDE1Ljc1NTY5ODYgMjEuNDMxNzkwMSwxNS4zMjAwODU4IEMyMi40NTkyNjUzLDE0Ljg4NDQ3MyAyMy41NzY5Mzg2LDE0LjY2NjY2NjcgMjQuNzg0ODEwMSwxNC42NjY2NjY3IEMyNS45NzY5OTUsMTQuNjY2NjY2NyAyNy4wOTA3NDY3LDE0Ljg4NDQ3MyAyOC4xMjYwNjUxLDE1LjMyMDA4NTggQzI5LjE2MTM4MzYsMTUuNzU1Njk4NiAzMC4wNTU1MjIzLDE2LjM1MDc3NjcgMzAuODA4NDgxMSwxNy4xMDUzMjAyIEMzMS41NjE0NCwxNy44NTk4NjM4IDMyLjE1MzYxMDgsMTguNzQ2NjQ2OSAzMi41ODQ5OTM1LDE5Ljc2NTY2OTYgQzMzLjAxNjM3NjIsMjAuNzg0NjkyMyAzMy4yMzIwNjc1LDIxLjg2OTgzNDggMzMuMjMyMDY3NSwyMy4wMjEwOTcgQzMzLjIzMjA2NzUsMjQuMTcyMzU5MyAzMy4wMTYzNzYyLDI1LjI1NzUwMTggMzIuNTg0OTkzNSwyNi4yNzY1MjQ1IEMzMi4xNTM2MTA4LDI3LjI5NTU0NzIgMzEuNTYxNDQsMjguMTgyMzMwMyAzMC44MDg0ODExLDI4LjkzNjg3MzkgQzMwLjA1NTUyMjMsMjkuNjkxNDE3NCAyOS4xNjEzODM2LDMwLjI4NjQ5NTUgMjguMTI2MDY1MSwzMC43MjIxMDgzIEMyNy4wOTA3NDY3LDMxLjE1NzcyMSAyNS45NzY5OTUsMzEuMzc1NTI3NCAyNC43ODQ4MTAxLDMxLjM3NTUyNzQgQzIzLjU3NjkzODYsMzEuMzc1NTI3NCAyMi40NTkyNjUzLDMxLjE1NzcyMSAyMS40MzE3OTAxLDMwLjcyMjEwODMgQzIwLjQwNDMxNSwzMC4yODY0OTU1IDE5LjUxNDA5OCwyOS42OTE0MTc0IDE4Ljc2MTEzOTEsMjguOTM2ODczOSBDMTguMDA4MTgwMiwyOC4xODIzMzAzIDE3LjQxNjAwOTUsMjcuMjk1NTQ3MiAxNi45ODQ2MjY4LDI2LjI3NjUyNDUgQzE2LjU1MzI0NDEsMjUuMjU3NTAxOCAxNi4zMzc1NTI3LDI0LjE3MjM1OTMgMTYuMzM3NTUyNywyMy4wMjEwOTcgWiBNMjIuNDMxODEzNiwyMy4wMjEwOTcgQzIyLjQzMTgxMzYsMjMuNzUyMzA0MiAyMi42MzE4MTgzLDI0LjM1NTE2MTEgMjMuMDMxODI3NywyNC44Mjk2Njc5IEMyMy40MzE4MzcxLDI1LjMwNDE3NDYgMjQuMDE2MTY0NiwyNS41NDE0MjggMjQuNzg0ODEwMSwyNS41NDE0MjggQzI1LjUzNzc2OSwyNS41NDE0MjggMjYuMTE0MjUzMSwyNS4zMDQxNzQ2IDI2LjUxNDI2MjUsMjQuODI5NjY3OSBDMjYuOTE0MjcxOSwyNC4zNTUxNjExIDI3LjExNDI3NjYsMjMuNzUyMzA0MiAyNy4xMTQyNzY2LDIzLjAyMTA5NyBDMjcuMTE0Mjc2NiwyMi4yODk4ODk5IDI2LjkxNDI3MTksMjEuNjg3MDMzIDI2LjUxNDI2MjUsMjEuMjEyNTI2MiBDMjYuMTE0MjUzMSwyMC43MzgwMTk1IDI1LjUzNzc2OSwyMC41MDA3NjYxIDI0Ljc4NDgxMDEsMjAuNTAwNzY2MSBDMjQuMDE2MTY0NiwyMC41MDA3NjYxIDIzLjQzMTgzNzEsMjAuNzM4MDE5NSAyMy4wMzE4Mjc3LDIxLjIxMjUyNjIgQzIyLjYzMTgxODMsMjEuNjg3MDMzIDIyLjQzMTgxMzYsMjIuMjg5ODg5OSAyMi40MzE4MTM2LDIzLjAyMTA5NyBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1vJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNNDQuNTU2OTYyLDI1LjYwMzg3MTkgQzQ1LjE3NTgwODcsMjUuNjAzODcxOSA0NS40ODUyMzIxLDI1LjkxNjkzNTYgNDUuNDg1MjMyMSwyNi41NDMwNjI4IEw0NS40ODUyMzIxLDMwLjA2NTAyODUgQzQ1LjQ4NTIzMjEsMzAuNjkxMTU1OCA0NS4xNzU4MDg3LDMxLjAwNDIxOTQgNDQuNTU2OTYyLDMxLjAwNDIxOTQgTDM1LjI3NDI2MTYsMzEuMDA0MjE5NCBDMzQuNjU1NDE0OSwzMS4wMDQyMTk0IDM0LjM0NTk5MTYsMzAuNjkxMTU1OCAzNC4zNDU5OTE2LDMwLjA2NTAyODUgTDM0LjM0NTk5MTYsMTUuOTc3MTY1NSBDMzQuMzQ1OTkxNiwxNS4zNTEwMzgzIDM0LjY1NTQxNDksMTUuMDM3OTc0NyAzNS4yNzQyNjE2LDE1LjAzNzk3NDcgTDM5LjIxOTQwOTMsMTUuMDM3OTc0NyBDMzkuODM4MjU2LDE1LjAzNzk3NDcgNDAuMTQ3Njc5MywxNS4zNTEwMzgzIDQwLjE0NzY3OTMsMTUuOTc3MTY1NSBMNDAuMTQ3Njc5MywyNC44OTk0Nzg4IEM0MC4xNDc2NzkzLDI1LjE5Njg4OTIgNDAuMTkwMjI1LDI1LjM4ODY0MDcgNDAuMjc1MzE2NSwyNS40NzQ3MzMyIEM0MC4zNjA0MDc5LDI1LjU2MDgyNTcgNDAuNTQ5OTI5NywyNS42MDM4NzE5IDQwLjg0Mzg4MTksMjUuNjAzODcxOSBMNDQuNTU2OTYyLDI1LjYwMzg3MTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ3LjM0ODE3NCwyMC40MzgzMjIyIEM0Ni43MjUwNTk0LDIwLjQzODMyMjIgNDYuNDEzNTAyMSwyMC4xMjUyNTg1IDQ2LjQxMzUwMjEsMTkuNDk5MTMxMyBMNDYuNDEzNTAyMSwxNS45NzcxNjU1IEM0Ni40MTM1MDIxLDE1LjM1MTAzODMgNDYuNzI1MDU5NCwxNS4wMzc5NzQ3IDQ3LjM0ODE3NCwxNS4wMzc5NzQ3IEw1OS4wMzE1NzI4LDE1LjAzNzk3NDcgQzU5LjY1NDY4NzQsMTUuMDM3OTc0NyA1OS45NjYyNDQ3LDE1LjM1MTAzODMgNTkuOTY2MjQ0NywxNS45NzcxNjU1IEw1OS45NjYyNDQ3LDE5LjQ5OTEzMTMgQzU5Ljk2NjI0NDcsMjAuMTI1MjU4NSA1OS42NTQ2ODc0LDIwLjQzODMyMjIgNTkuMDMxNTcyOCwyMC40MzgzMjIyIEw1Ni44MTE3MjcsMjAuNDM4MzIyMiBDNTYuNTE1NzQ3NiwyMC40MzgzMjIyIDU2LjMyNDkxODgsMjAuNDgxMzY4NCA1Ni4yMzkyNDA1LDIwLjU2NzQ2MDkgQzU2LjE1MzU2MjIsMjAuNjUzNTUzNCA1Ni4xMTA3MjMxLDIwLjg0NTMwNDkgNTYuMTEwNzIzMSwyMS4xNDI3MTUzIEw1Ni4xMTA3MjMxLDMwLjA2NTAyODUgQzU2LjExMDcyMzEsMzAuNjkxMTU1OCA1NS43OTkxNjU4LDMxLjAwNDIxOTQgNTUuMTc2MDUxMiwzMS4wMDQyMTk0IEw1MS4yMDM2OTU2LDMxLjAwNDIxOTQgQzUwLjU4MDU4MSwzMS4wMDQyMTk0IDUwLjI2OTAyMzcsMzAuNjkxMTU1OCA1MC4yNjkwMjM3LDMwLjA2NTAyODUgTDUwLjI2OTAyMzcsMjEuMTQyNzE1MyBDNTAuMjY5MDIzNywyMC44NDUzMDQ5IDUwLjIyNjE4NDYsMjAuNjUzNTUzNCA1MC4xNDA1MDYzLDIwLjU2NzQ2MDkgQzUwLjA1NDgyODEsMjAuNDgxMzY4NCA0OS44NjM5OTkyLDIwLjQzODMyMjIgNDkuNTY4MDE5OCwyMC40MzgzMjIyIEw0Ny4zNDgxNzQsMjAuNDM4MzIyMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby10J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMjMuODM1MTE4NSwzOS4xNDg1MjU2IEMyMy44MzUxMTg1LDM5LjQxMTMxMzggMjMuODcyOTYzMywzOS42MjM1NjU4IDIzLjk0ODY1MywzOS43ODUyODE2IEMyNC4wMjQzNDI3LDM5Ljk0Njk5NzQgMjQuMTIwMjE2NCw0MC4wNzA4MTExIDI0LjIzNjI3MzksNDAuMTU2NzIyNiBDMjQuMzUyMzMxNSw0MC4yNDI2MzQyIDI0LjQ3MzQzNSw0MC4yOTgyMjQgMjQuNTk5NTg0Niw0MC4zMjM0OTIxIEMyNC43MjU3MzQxLDQwLjM0ODc2MDIgMjQuODQ0MzE0Niw0MC4zNjEzOTQyIDI0Ljk1NTMyNjIsNDAuMzYxMzk0MiBDMjUuMDY2MzM3OCw0MC4zNjEzOTQyIDI1LjE4OTk2NDMsNDAuMzQ4NzYwMiAyNS4zMjYyMDU4LDQwLjMyMzQ5MjEgQzI1LjQ2MjQ0NzMsNDAuMjk4MjI0IDI1LjU4ODU5NjgsNDAuMjQyNjM0MiAyNS43MDQ2NTQzLDQwLjE1NjcyMjYgQzI1LjgyMDcxMTksNDAuMDcwODExMSAyNS45MTY1ODU1LDM5Ljk0Njk5NzQgMjUuOTkyMjc1MiwzOS43ODUyODE2IEMyNi4wNjc5NjQ5LDM5LjYyMzU2NTggMjYuMTA1ODA5OCwzOS40MTEzMTM4IDI2LjEwNTgwOTgsMzkuMTQ4NTI1NiBMMjYuMTA1ODA5OCwzNC4wMjQxNTU4IEMyNi4xMDU4MDk4LDMzLjYxOTg2NjMgMjYuMzA3NjQ5LDMzLjQxNzcyMTUgMjYuNzExMzI3NSwzMy40MTc3MjE1IEwyOS4yODQ3Nzc3LDMzLjQxNzcyMTUgQzI5LjY4ODQ1NjEsMzMuNDE3NzIxNSAyOS44OTAyOTU0LDMzLjYxOTg2NjMgMjkuODkwMjk1NCwzNC4wMjQxNTU4IEwyOS44OTAyOTU0LDM5LjE3ODg0NzMgQzI5Ljg5MDI5NTQsMzkuODk2NDYxMyAyOS43OTQ0MjE3LDQwLjU1MDkwNDkgMjkuNjAyNjc0NSw0MS4xNDIxNzg0IEMyOS40MTA5MjcyLDQxLjczMzQ1MTggMjkuMTEzMjE0Myw0Mi4yNDEzNDA1IDI4LjcwOTUzNTksNDIuNjY1ODQ0NSBDMjguMzA1ODU3NCw0My4wOTAzNDg2IDI3Ljc5MzY5MDQsNDMuNDE4ODMzOCAyNy4xNzMwMzQ3LDQzLjY1MTMwMDMgQzI2LjU1MjM3OTEsNDMuODgzNzY2OCAyNS44MTgxODg5LDQ0IDI0Ljk3MDQ2NDEsNDQgQzI0LjEyMjczOTQsNDQgMjMuMzg4NTQ5Miw0My44ODM3NjY4IDIyLjc2Nzg5MzUsNDMuNjUxMzAwMyBDMjIuMTQ3MjM3OSw0My40MTg4MzM4IDIxLjYzNTA3MDksNDMuMDkwMzQ4NiAyMS4yMzEzOTI0LDQyLjY2NTg0NDUgQzIwLjgyNzcxMzksNDIuMjQxMzQwNSAyMC41MzAwMDExLDQxLjczMzQ1MTggMjAuMzM4MjUzOCw0MS4xNDIxNzg0IEMyMC4xNDY1MDY1LDQwLjU1MDkwNDkgMjAuMDUwNjMyOSwzOS44OTY0NjEzIDIwLjA1MDYzMjksMzkuMTc4ODQ3MyBMMjAuMDUwNjMyOSwzNC4wMjQxNTU4IEMyMC4wNTA2MzI5LDMzLjYxOTg2NjMgMjAuMjUyNDcyMSwzMy40MTc3MjE1IDIwLjY1NjE1MDYsMzMuNDE3NzIxNSBMMjMuMjI5NjAwOCwzMy40MTc3MjE1IEMyMy42MzMyNzkyLDMzLjQxNzcyMTUgMjMuODM1MTE4NSwzMy42MTk4NjYzIDIzLjgzNTExODUsMzQuMDI0MTU1OCBMMjMuODM1MTE4NSwzOS4xNDg1MjU2IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTMxLjI0NzE3NzIsMzQuMzkzNzcwMiBDMzEuMTc4MjA1MiwzNC4yOTM2NjI2IDMxLjE0MzcxOTIsMzQuMTY4NTI4MiAzMS4xNDM3MTkyLDM0LjAxODM2NjggQzMxLjE0MzcxOTIsMzMuNjE3OTM2NiAzMS4zNDA3ODIxLDMzLjQxNzcyMTUgMzEuNzM0OTA4LDMzLjQxNzcyMTUgTDM0Ljk3MTY2NjMsMzMuNDE3NzIxNSBDMzUuMTU4ODc2MSwzMy40MTc3MjE1IDM1LjMwMTc0NjcsMzMuNDc1MjgzNCAzNS40MDAyNzgyLDMzLjU5MDQwNyBDMzUuNDk4ODA5NiwzMy43MDU1MzA3IDM1LjU5MjQxNDUsMzMuODQ4MTg0IDM1LjY4MTA5MjgsMzQuMDE4MzY2OCBMMzYuMjcyMjgxNSwzNS4xMTQ1NDQ2IEwzNi45NjY5MjgzLDM0LjAxODM2NjggQzM3LjA3NTMxMjksMzMuODQ4MTg0IDM3LjE3ODc3MDksMzMuNzA1NTMwNyAzNy4yNzczMDI0LDMzLjU5MDQwNyBDMzcuMzc1ODMzOSwzMy40NzUyODM0IDM3LjQ5ODk5ODIsMzMuNDE3NzIxNSAzNy42NDY3OTU0LDMzLjQxNzcyMTUgTDQwLjYzMjI5ODUsMzMuNDE3NzIxNSBDNDEuMDI2NDI0MywzMy40MTc3MjE1IDQxLjIyMzQ4NzMsMzMuNjE3OTM2NiA0MS4yMjM0ODczLDM0LjAxODM2NjggQzQxLjIyMzQ4NzMsMzQuMTY4NTI4MiA0MS4xODkwMDEyLDM0LjI5MzY2MjYgNDEuMTIwMDI5MiwzNC4zOTM3NzAyIEwzOC42OTYxNTU0LDM4LjExNzc3MTIgTDQxLjMxMjE2NTYsNDIuNjY3NjU5NSBDNDEuMzcxMjg0NCw0Mi43Nzc3Nzc4IDQxLjQwMDg0MzksNDIuODk3OTA2OCA0MS40MDA4NDM5LDQzLjAyODA0NjcgQzQxLjQwMDg0MzksNDMuNDI4NDc2OSA0MS4yMDM3ODEsNDMuNjI4NjkyIDQwLjgwOTY1NTEsNDMuNjI4NjkyIEwzNy43OTQ1OTI2LDQzLjYyODY5MiBDMzcuNjI3MDg5MSw0My42Mjg2OTIgMzcuNDg5MTQ1LDQzLjU2ODYyNzUgMzcuMzgwNzYwNCw0My40NDg0OTg0IEMzNy4yNzIzNzU4LDQzLjMyODM2OTMgMzcuMTYzOTkxMiw0My4xODgyMTg3IDM3LjA1NTYwNjYsNDMuMDI4MDQ2NyBMMzYuMDgwMTQ1Miw0MS4zMzEyMjM2IEwzNS4xNjM4MDI3LDQzLjAyODA0NjcgQzM1LjA1NTQxODEsNDMuMTg4MjE4NyAzNC45NTQ0MjMzLDQzLjMyODM2OTMgMzQuODYwODE4NCw0My40NDg0OTg0IEMzNC43NjcyMTM1LDQzLjU2ODYyNzUgMzQuNjIxODc5Niw0My42Mjg2OTIgMzQuNDI0ODE2Nyw0My42Mjg2OTIgTDMxLjQwOTc1NDEsNDMuNjI4NjkyIEMzMS4wMTU2MjgzLDQzLjYyODY5MiAzMC44MTg1NjU0LDQzLjQyODQ3NjkgMzAuODE4NTY1NCw0My4wMjgwNDY3IEMzMC44MTg1NjU0LDQyLjkwNzkxNzYgMzAuODQzMTk4Myw0Mi43OTc3OTkzIDMwLjg5MjQ2NCw0Mi42OTc2OTE3IEwzMy42NTYyNzE0LDM4LjEwMjc1NSBMMzEuMjQ3MTc3MiwzNC4zOTM3NzAyIFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLXgnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1zZWNvbmRhcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTM1LjU1NjQ5MDIsNS4zODg2MDc1OSBDMzUuNDI1NjU5Miw1LjE0MjI1MzQzIDM1LjE2Mzk5NzEsNC45ODk0NTE0OCAzNC44Nzk5OTgxLDQuOTg5NDUxNDggTDI5Ljg4Mjg5MTUsNC45ODk0NTE0OCBMMzEuNTA1MTk2MSwxLjAyNTk1NTk2IEMzMS41OTk5MzY5LDAuNzk1OTczNDMxIDMxLjU3MDk5NDUsMC41MzM4NzEzMDggMzEuNDI4NDIwNiwwLjMyODA1NjQzNSBDMzEuMjg1ODQ2NywwLjEyMjI0MTU2MSAzMS4wMjIwNzg3LDAgMzAuNzk1NTE3NiwwIEwyNS4xNzkzNTcsMCBDMjQuNzk1NDc5NiwwIDI0LjQ3MTI3NCwwLjI3NzcyNTM0MyAyNC40MjA1MzcxLDAuNjQ5ODc2MDU1IEwyMy4zOTk0MTcsOC4xMzQwNTMyNyBDMjMuMzY5NDg4Niw4LjM0Nzk3NiAyMy40MzYzMDQ5LDguNTYzMTQ2MSAyMy41ODE4Nzg0LDguNzI1MzAzMjcgQzIzLjcyNzQ1MTgsOC44ODc0NjA0NCAyMy45Mzc3Mzg3LDguOTgxMDEyNjYgMjQuMTU4MjM2OSw4Ljk4MTAxMjY2IEwyOC44MjY2NzA0LDguOTgxMDEyNjYgTDI3LjQ5MzQ3MDQsMTUuMDMzODQxIEMyNy40MTY2OTUsMTUuMzgzNzI2MyAyNy42MDQxNjYyLDE1LjczNzM1MzYgMjcuOTQwMjEwNSwxNS44Nzg2MTc1IEMyOC4wMzg0OTMzLDE1Ljk0NzUzNDMgMjguMTQwNjA1MywxNS45NjYyNDQ3IDI4LjI0MjcxNzMsMTUuOTY2MjQ0NyBDMjguNDg5MDMwNiwxNS45NjYyNDQ3IDI4LjcyODM4NzYsMTUuODQ5MzA0NSAyOC44NzQ4NTQ1LDE1LjY0MDY4MyBMMzUuNTEyMTM1Myw2LjE2MDcyNTIxIEMzNS42NzEzNjYyLDUuOTMxMjEwNDQgMzUuNjkwNTEyMiw1LjYzNDk2MTc2IDM1LjU1NjQ5MDIsNS4zODg2MDc1OSBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby1pY29uJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tcHJpbWFyeSdcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J002NDAgNDY0djMyYTE2IDE2IDAgMCAxLTE2IDE2SDE2YTE2IDE2IDAgMCAxLTE2LTE2di0zMmExNiAxNiAwIDAgMSAxNi0xNmg2MDhhMTYgMTYgMCAwIDEgMTYgMTZ6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J000MC42OCA0NDhsMjM5Ljc5LTMzMC4yNS01My40MS03My41NWExNiAxNiAwIDAgMSAzLjU0LTIyLjM1bDI1Ljg4LTE4LjhhMTYgMTYgMCAwIDEgMjIuMzUgMy41NUwzMjAgNjMuM2w0MS4xNi01Ni42OWExNiAxNiAwIDAgMSAyMi4zNS0zLjU1bDI1LjkgMTguNzlBMTYgMTYgMCAwIDEgNDEzIDQ0LjJsLTUzLjQxIDczLjU1TDU5OS4zMiA0NDhoLTE2M0wzMjAgMjg4IDIwMy42NCA0NDh6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU2luZ2xlcGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTM1MiAyNTZhMjQgMjQgMCAxIDAgMjQgMjQgMjQgMjQgMCAwIDAtMjQtMjR6bS0xOTQuNDggMTZoMzdMMTc2IDIxOC43OHpNNDY0IDY0SDQ4YTQ4IDQ4IDAgMCAwLTQ4IDQ4djI4OGE0OCA0OCAwIDAgMCA0OCA0OGg0MTZhNDggNDggMCAwIDAgNDgtNDhWMTEyYTQ4IDQ4IDAgMCAwLTQ4LTQ4ek0yNTAuNTggMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0xMC43NUwyMTEuMTUgMzIwaC03MC4yOWwtNy4zOCAyMS4yNUExNiAxNiAwIDAgMSAxMTguMzYgMzUyaC0xNi45NGExNiAxNiAwIDAgMS0xNS4xMi0yMS4yNUwxNDAgMTc2LjEyQTI0IDI0IDAgMCAxIDE2Mi42NyAxNjBoMjYuNjZBMjQgMjQgMCAwIDEgMjEyIDE3Ni4xM2w1My42OSAxNTQuNjJBMTYgMTYgMCAwIDEgMjUwLjU4IDM1MnpNNDI0IDMzNmExNiAxNiAwIDAgMS0xNiAxNmgtMTZhMTUuNzQgMTUuNzQgMCAwIDEtMTItNS42OEE3MiA3MiAwIDEgMSAzNTIgMjA4YTcxLjA1IDcxLjA1IDAgMCAxIDI0IDQuNDJWMTc2YTE2IDE2IDAgMCAxIDE2LTE2aDE2YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMjEyIDE3Ni4xM0EyNCAyNCAwIDAgMCAxODkuMzMgMTYwaC0yNi42NkEyNCAyNCAwIDAgMCAxNDAgMTc2LjEyTDg2LjMgMzMwLjc1QTE2IDE2IDAgMCAwIDEwMS40MiAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTItMTAuNzVsNy4zOC0yMS4yNWg3MC4yOWw3LjM3IDIxLjI1QTE2IDE2IDAgMCAwIDIzMy42NCAzNTJoMTYuOTRhMTYgMTYgMCAwIDAgMTUuMTEtMjEuMjV6TTE1Ny41MiAyNzJMMTc2IDIxOC43OCAxOTQuNDggMjcyek00MDggMTYwaC0xNmExNiAxNiAwIDAgMC0xNiAxNnYzNi40MmE3MS4wNSA3MS4wNSAwIDAgMC0yNC00LjQyIDcyIDcyIDAgMSAwIDI4IDEzOC4zMiAxNS43NCAxNS43NCAwIDAgMCAxMiA1LjY4aDE2YTE2IDE2IDAgMCAwIDE2LTE2VjE3NmExNiAxNiAwIDAgMC0xNi0xNnptLTU2IDE0NGEyNCAyNCAwIDEgMSAyNC0yNCAyNCAyNCAwIDAgMS0yNCAyNHonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBQdWJsaXNoaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI1NiAwdjEyOGgxMjhMMjU2IDB6TTE1NC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwbC00OCA0OGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxbDQ4IDQ4QzEyOS44IDM4Ni4xIDEzNC45IDM4OCAxNDAgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwxMjAuMyAzMjBsMzMuODYtMzMuODRDMTYxLjEgMjc4LjMgMTYxLjEgMjY1LjcgMTU0LjEgMjU3Ljh6TTI1OC4xIDI1Ny44Yy03LjgxMi03LjgxMi0yMC40Ny03LjgxMi0yOC4yOCAwcy03LjgxMiAyMC41IDAgMjguMzFMMjYzLjcgMzIwbC0zMy44NiAzMy44NGMtNy44MTIgNy44MTItNy44MTIgMjAuNSAwIDI4LjMxQzIzMy44IDM4Ni4xIDIzOC45IDM4OCAyNDQgMzg4czEwLjIzLTEuOTM4IDE0LjE0LTUuODQ0bDQ4LTQ4YzcuODEyLTcuODEyIDcuODEyLTIwLjUgMC0yOC4zMUwyNTguMSAyNTcuOHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OHY0MTZDMCA0OTAuNSAyMS40OSA1MTIgNDggNTEyaDI4OGMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjEyOEgyNTZ6TTE1NC4xIDM1My44YzcuODEyIDcuODEyIDcuODEyIDIwLjUgMCAyOC4zMUMxNTAuMiAzODYuMSAxNDUuMSAzODggMTQwIDM4OHMtMTAuMjMtMS45MzgtMTQuMTQtNS44NDRsLTQ4LTQ4Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFsNDgtNDhjNy44MTItNy44MTIgMjAuNDctNy44MTIgMjguMjggMHM3LjgxMiAyMC41IDAgMjguMzFMMTIwLjMgMzIwTDE1NC4xIDM1My44ek0zMDYuMSAzMzQuMmwtNDggNDhDMjU0LjIgMzg2LjEgMjQ5LjEgMzg4IDI0NCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0Yy03LjgxMi03LjgxMi03LjgxMi0yMC41IDAtMjguMzFMMjYzLjcgMzIwbC0zMy44Ni0zMy44NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxczIwLjQ3LTcuODEyIDI4LjI4IDBsNDggNDhDMzEzLjEgMzEzLjcgMzEzLjEgMzI2LjMgMzA2LjEgMzM0LjJ6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBBcHBkZXNpZ24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNDEyLjcgMjU2LjFDMzg3LjEgMjgwLjMgMzU3LjcgMjk4LjggMzI0LjEgMzA5LjVMMjU2IDE5MkgyNTUuMUw5OC42NSA0NjMuN0M5My45NSA0NzEuOCA4Ni45NyA0NzguNCA3OC41OCA0ODIuNkwyMy4xNiA1MTAuM0MxOC4yIDUxMi44IDEyLjMxIDUxMi41IDcuNTg4IDUwOS42QzIuODcxIDUwNi43IDAgNTAxLjUgMCA0OTZWNDQwLjZDMCA0MzIuMiAyLjIyOCA0MjMuOSA2LjQ2IDQxNi41TDE2OC44IDEzNi4yQzE2My4xIDEyMy45IDE2MCAxMTAuMyAxNjAgOTZDMTYwIDQyLjk4IDIwMi4xIDAgMjU2IDBDMzA5IDAgMzUyIDQyLjk4IDM1MiA5NkMzNTIgMTEwLjMgMzQ4LjkgMTIzLjkgMzQzLjIgMTM2LjJMNDEyLjcgMjU2LjF6TTI1NS4xIDY0QzIzOC4zIDY0IDIyMy4xIDc4LjMzIDIyMy4xIDk2QzIyMy4xIDExMy43IDIzOC4zIDEyOCAyNTUuMSAxMjhDMjczLjcgMTI4IDI4OCAxMTMuNyAyODggOTZDMjg4IDc4LjMzIDI3My43IDY0IDI1NS4xIDY0ek0zNTYuNyAzNjUuOUMzODkuNiAzNTMuNiA0MTkuNiAzMzUuNSA0NDUuNSAzMTIuOUw1MDUuNSA0MTYuNUM1MDkuOCA0MjMuOSA1MTIgNDMyLjIgNTEyIDQ0MC42VjQ5NkM1MTIgNTAxLjUgNTA5LjEgNTA2LjcgNTA0LjQgNTA5LjZDNDk5LjcgNTEyLjUgNDkzLjggNTEyLjggNDg4LjggNTEwLjNMNDMzLjQgNDgyLjZDNDI1IDQ3OC40IDQxOCA0NzEuOCA0MTMuMyA0NjMuN0wzNTYuNyAzNjUuOXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTY2LjQ5IDMxMi45QzUzLjY2IDMwMS42IDQxLjg0IDI4OS4zIDMxLjE4IDI3NkMyMC4xMyAyNjIuMiAyMi4zNCAyNDIuMSAzNi4xMyAyMzFDNDkuOTIgMjE5LjEgNzAuMDYgMjIyLjIgODEuMTIgMjM1LjFDODYuNzkgMjQzLjEgOTIuODcgMjQ5LjggOTkuMzQgMjU2LjFMNjYuNDkgMzEyLjl6TTE1NS4zIDM2NS45TDE4Ny45IDMwOS41QzIwOS40IDMxNi4zIDIzMi4zIDMyMCAyNTUuMSAzMjBDMzI2LjcgMzIwIDM4OS44IDI4Ny4zIDQzMC45IDIzNS4xQzQ0MS45IDIyMi4yIDQ2Mi4xIDIxOS4xIDQ3NS45IDIzMUM0ODkuNyAyNDIuMSA0OTEuOSAyNjIuMiA0ODAuOCAyNzZDNDI4LjEgMzQxLjggMzQ2LjEgMzg0IDI1NS4xIDM4NEMyMjAuNiAzODQgMTg2LjYgMzc3LjYgMTU1LjMgMzY1LjlIMTU1LjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBCcmFuZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yODggOTZDMjg4IDExMy43IDI3My43IDEyOCAyNTYgMTI4QzIzOC4zIDEyOCAyMjQgMTEzLjcgMjI0IDk2QzIyNCA3OC4zMyAyMzguMyA2NCAyNTYgNjRDMjczLjcgNjQgMjg4IDc4LjMzIDI4OCA5NnpNOTYgMTYwQzk2IDE0Mi4zIDExMC4zIDEyOCAxMjggMTI4QzE0NS43IDEyOCAxNjAgMTQyLjMgMTYwIDE2MEMxNjAgMTc3LjcgMTQ1LjcgMTkyIDEyOCAxOTJDMTEwLjMgMTkyIDk2IDE3Ny43IDk2IDE2MHpNNjQgMjg4QzY0IDI3MC4zIDc4LjMzIDI1NiA5NiAyNTZDMTEzLjcgMjU2IDEyOCAyNzAuMyAxMjggMjg4QzEyOCAzMDUuNyAxMTMuNyAzMjAgOTYgMzIwQzc4LjMzIDMyMCA2NCAzMDUuNyA2NCAyODh6TTM1MiAxNjBDMzUyIDE0Mi4zIDM2Ni4zIDEyOCAzODQgMTI4QzQwMS43IDEyOCA0MTYgMTQyLjMgNDE2IDE2MEM0MTYgMTc3LjcgNDAxLjcgMTkyIDM4NCAxOTJDMzY2LjMgMTkyIDM1MiAxNzcuNyAzNTIgMTYweidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNTEyIDI1NS4xQzUxMiAyNTYuOSA1MTEuMSAyNTcuOCA1MTEuMSAyNTguN0M1MTEuNiAyOTUuMiA0NzguNCAzMTkuMSA0NDEuOSAzMTkuMUgzNDRDMzE3LjUgMzE5LjEgMjk2IDM0MS41IDI5NiAzNjhDMjk2IDM3MS40IDI5Ni40IDM3NC43IDI5NyAzNzcuOUMyOTkuMiAzODguMSAzMDMuNSAzOTcuMSAzMDcuOSA0MDcuOEMzMTMuOSA0MjEuNiAzMjAgNDM1LjMgMzIwIDQ0OS44QzMyMCA0ODEuNyAyOTguNCA1MTAuNSAyNjYuNiA1MTEuOEMyNjMuMSA1MTEuOSAyNTkuNSA1MTIgMjU2IDUxMkMxMTQuNiA1MTIgMCAzOTcuNCAwIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NlYyNTUuMXpNOTYgMjU1LjFDNzguMzMgMjU1LjEgNjQgMjcwLjMgNjQgMjg3LjFDNjQgMzA1LjcgNzguMzMgMzE5LjEgOTYgMzE5LjFDMTEzLjcgMzE5LjEgMTI4IDMwNS43IDEyOCAyODcuMUMxMjggMjcwLjMgMTEzLjcgMjU1LjEgOTYgMjU1LjF6TTEyOCAxOTEuMUMxNDUuNyAxOTEuMSAxNjAgMTc3LjcgMTYwIDE1OS4xQzE2MCAxNDIuMyAxNDUuNyAxMjcuMSAxMjggMTI3LjFDMTEwLjMgMTI3LjEgOTYgMTQyLjMgOTYgMTU5LjFDOTYgMTc3LjcgMTEwLjMgMTkxLjEgMTI4IDE5MS4xek0yNTYgNjMuMUMyMzguMyA2My4xIDIyNCA3OC4zMyAyMjQgOTUuMUMyMjQgMTEzLjcgMjM4LjMgMTI3LjEgMjU2IDEyNy4xQzI3My43IDEyNy4xIDI4OCAxMTMuNyAyODggOTUuMUMyODggNzguMzMgMjczLjcgNjMuMSAyNTYgNjMuMXpNMzg0IDE5MS4xQzQwMS43IDE5MS4xIDQxNiAxNzcuNyA0MTYgMTU5LjFDNDE2IDE0Mi4zIDQwMS43IDEyNy4xIDM4NCAxMjcuMUMzNjYuMyAxMjcuMSAzNTIgMTQyLjMgMzUyIDE1OS4xQzM1MiAxNzcuNyAzNjYuMyAxOTEuMSAzODQgMTkxLjF6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBuZXdzKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTAgMTI4djMwNEMwIDQ1OC41IDIxLjQ5IDQ4MCA0OCA0ODBTOTYgNDU4LjUgOTYgNDMyVjk2SDMyQzE0LjMzIDk2IDAgMTEwLjMgMCAxMjh6TTI3MiAyODhoLTk2QzE2Ny4yIDI4OCAxNjAgMjk1LjIgMTYwIDMwNEMxNjAgMzEyLjggMTY3LjIgMzIwIDE3NiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMjk1LjIgMjgwLjggMjg4IDI3MiAyODh6TTMzNiAzMjBoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMjk1LjIgNDQwLjggMjg4IDQzMiAyODhoLTk2QzMyNy4yIDI4OCAzMjAgMjk1LjIgMzIwIDMwNEMzMjAgMzEyLjggMzI3LjIgMzIwIDMzNiAzMjB6TTI3MiAzODRoLTk2QzE2Ny4yIDM4NCAxNjAgMzkxLjIgMTYwIDQwMEMxNjAgNDA4LjggMTY3LjIgNDE2IDE3NiA0MTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkMyODggMzkxLjIgMjgwLjggMzg0IDI3MiAzODR6TTQzMiAzODRoLTk2Yy04LjgzNiAwLTE2IDcuMTYyLTE2IDE2YzAgOC44MzYgNy4xNjQgMTYgMTYgMTZoOTZjOC44MzYgMCAxNi03LjE2NCAxNi0xNkM0NDggMzkxLjIgNDQwLjggMzg0IDQzMiAzODR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J000ODAgMzJIMTI4QzExMC4zIDMyIDk2IDQ2LjMzIDk2IDY0djM2OEM5NiA0NTguNSA3NC41MSA0ODAgNDggNDgwSDQ0OGMzNS4zNSAwIDY0LTI4LjY1IDY0LTY0VjY0QzUxMiA0Ni4zMyA0OTcuNyAzMiA0ODAgMzJ6TTI3MiA0MTZoLTk2QzE2Ny4yIDQxNiAxNjAgNDA4LjggMTYwIDQwMEMxNjAgMzkxLjIgMTY3LjIgMzg0IDE3NiAzODRoOTZjOC44MzYgMCAxNiA3LjE2MiAxNiAxNkMyODggNDA4LjggMjgwLjggNDE2IDI3MiA0MTZ6TTI3MiAzMjBoLTk2QzE2Ny4yIDMyMCAxNjAgMzEyLjggMTYwIDMwNEMxNjAgMjk1LjIgMTY3LjIgMjg4IDE3NiAyODhoOTZDMjgwLjggMjg4IDI4OCAyOTUuMiAyODggMzA0QzI4OCAzMTIuOCAyODAuOCAzMjAgMjcyIDMyMHpNNDMyIDQxNmgtOTZjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZjMC04LjgzOCA3LjE2NC0xNiAxNi0xNmg5NmM4LjgzNiAwIDE2IDcuMTYyIDE2IDE2QzQ0OCA0MDguOCA0NDAuOCA0MTYgNDMyIDQxNnpNNDMyIDMyMGgtOTZDMzI3LjIgMzIwIDMyMCAzMTIuOCAzMjAgMzA0QzMyMCAyOTUuMiAzMjcuMiAyODggMzM2IDI4OGg5NkM0NDAuOCAyODggNDQ4IDI5NS4yIDQ0OCAzMDRDNDQ4IDMxMi44IDQ0MC44IDMyMCA0MzIgMzIwek00NDggMjA4QzQ0OCAyMTYuOCA0NDAuOCAyMjQgNDMyIDIyNGgtMjU2QzE2Ny4yIDIyNCAxNjAgMjE2LjggMTYwIDIwOHYtOTZDMTYwIDEwMy4yIDE2Ny4yIDk2IDE3NiA5NmgyNTZDNDQwLjggOTYgNDQ4IDEwMy4yIDQ0OCAxMTJWMjA4eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbm90aWNlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzg0IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE5MiAyMjRjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtMTEyQzIxNiA3NC43NSAyMDUuMyA2NCAxOTIgNjRTMTY4IDc0Ljc1IDE2OCA4OHYxMTJDMTY4IDIxMy4zIDE3OC44IDIyNCAxOTIgMjI0ek0xOTIgMzIwYzE3LjY3IDAgMzItMTQuMzMgMzItMzJzLTE0LjMzLTMyLTMyLTMyUzE2MCAyNzAuMyAxNjAgMjg4UzE3NC4zIDMyMCAxOTIgMzIwek0xMTIuMyAzODRsLS4wOTA2IDcwLjM1YzAgNi4yOTcgMS44ODYgMTIuNDMgNS4zNTUgMTcuNjhsMTcuMDggMjUuNjlDMTM5LjggNTA1LjYgMTUxLjggNTEyIDE2MS4yIDUxMmg2MS42N2M5LjQzOCAwIDIxLjM2LTYuMzk1IDI2LjYxLTE0LjI3bDE3LjM0LTI1LjdjMi45MzgtNC40MzggNS4wOTctMTIuMzUgNS4wOTctMTcuNjhsLjIxNTYtNzAuMzVMMTEyLjMgMzg0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMTkxLjUgLjAxMjdDODkuNDcgLjI2MjcgMTYgODIuMSAxNiAxNzUuMWMwIDQ0LjM4IDE2LjUyIDg0Ljg5IDQzLjUyIDExNS44YzE2LjYyIDE4Ljg4IDQyLjM2IDU4LjIzIDUyLjI0IDkxLjQ4YzAgLjI1IC4xMTQ2IC41MTA0IC4xMTQ2IC43NjA0bDE2MC4zIC4wMDA2YzAtLjI1IC4wODMzLS41MTExIC4wODMzLS43NjExYzkuODc1LTMzLjI1IDM1LjYxLTcyLjYxIDUyLjI0LTkxLjQ4QzM1MS41IDI2MC45IDM2OCAyMjAuNCAzNjggMTc1LjFDMzY4IDc4LjYyIDI4OC44LS4yMzczIDE5MS41IC4wMTI3ek0xNjggODhDMTY4IDc0Ljc1IDE3OC44IDY0IDE5MiA2NHMyNCAxMC43NSAyNCAyNHYxMTJDMjE2IDIxMy4zIDIwNS4zIDIyNCAxOTIgMjI0UzE2OCAyMTMuMyAxNjggMjAwVjg4ek0xOTIgMzIwYy0xNy42NyAwLTMyLTE0LjMzLTMyLTMyczE0LjMzLTMyIDMyLTMyczMyIDE0LjMzIDMyIDMyUzIwOS43IDMyMCAxOTIgMzIweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTI5OC45IDMwOS42bC00NS42NC02LjY4OGwtMjAuMzYtNDEuNGMtMy42MjUtNy4zNzUtMTQuMTYtNy41LTE3LjkxIDBMMTk0LjcgMzAyLjlMMTQ5IDMwOS42Yy04LjI1IDEuMTI1LTExLjM3IDExLjIyLTUuNDkxIDE3LjFsMzIuOTQgMzIuMWwtNy43NzIgNDUuNTVjLTEuNSA4LjI1IDcuMjY0IDE0LjM3IDE0LjUxIDEwLjQ5bDQwLjc3LTIxLjUzbDQwLjc3IDIxLjUzYzcuMzc1IDMuODc1IDE2LjAxLTIuMjQyIDE0LjUxLTEwLjQ5bC03Ljc3My00NS41NWwzMi4xLTMyLjFDMzEwLjQgMzIwLjggMzA3LjIgMzEwLjcgMjk4LjkgMzA5LjZ6TTQyNCAxNDMuMUwxMjcuNCAxNDMuMWM2LjM3NS0zMC44OCAzMC43NS01NS4yNSA2Mi43NS02MS4xQzE5OC44IDkwLjYyIDIxMC44IDk1LjEgMjI0IDk1LjFsNjIuMiAuMDAwMWMyMy4yMSAwIDQ0LjUtMTUuNjkgNDguODktMzguNDhDMzQwLjEgMjYuODUgMzE3LjYgMCAyODggMGgtNjRjLTIyIDAtNDAuNSAxNS00Ni4xMyAzNS4yNWMtNTIgMTEuNjItOTEuNzUgNTUtOTguNSAxMDguOEwyMy4xIDE0My4xQzEwLjc1IDE0My4xIDAgMTU0LjcgMCAxNjcuMWMwIDEzLjI1IDEwLjc1IDI0IDIzLjEgMjRoNDAwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjRDNDQ4IDE1NC43IDQzNy4zIDE0My4xIDQyNCAxNDMuMXonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTQ4IDE5MS4xbDI5LjEyIDI5MS4yYzEuNjM2IDE2LjM2IDE1LjI0IDI4LjgyIDMxLjY4IDI4LjgyaDIzMC40YzE2LjQ0IDAgMzAuMDUtMTIuNDYgMzEuNjgtMjguODJMNDAwIDE5MS4xSDQ4ek0zMDQuNSAzMjYuN2wtMzIuMSAzMi4xbDcuNzczIDQ1LjU1YzEuNSA4LjI1LTcuMTM5IDE0LjM3LTE0LjUxIDEwLjQ5TDIyMy4xIDM5My4zbC00MC43NyAyMS41M2MtNy4yNSAzLjg3NS0xNi4wMS0yLjI0Mi0xNC41MS0xMC40OWw3Ljc3Mi00NS41NWwtMzIuOTQtMzIuMUMxMzcuNyAzMjAuOCAxNDAuOCAzMTAuNyAxNDkgMzA5LjZMMTk0LjcgMzAyLjlsMjAuMzYtNDEuNGMzLjc1LTcuNSAxNC4yOS03LjM3NSAxNy45MSAwbDIwLjM2IDQxLjRsNDUuNjQgNi42ODhDMzA3LjIgMzEwLjcgMzEwLjQgMzIwLjggMzA0LjUgMzI2Ljd6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTYyMi4zIDI3MS4xbC0xMTUuMS00NS4wMWMtNC4xMjUtMS42MjktMTIuNjItMy43NTQtMjIuMjUgMEwzNjkuOCAyNzEuMUMzNTkgMjc1LjIgMzUyIDI4NS4xIDM1MiAyOTUuMWMwIDExMS42IDY4Ljc1IDE4OC44IDEzMi45IDIxMy45YzkuNjI1IDMuNzUgMTggMS42MjUgMjIuMjUgMEM1NTguNCA0ODkuOSA2NDAgNDIwLjUgNjQwIDI5NS4xQzY0MCAyODUuMSA2MzMgMjc1LjIgNjIyLjMgMjcxLjF6TTQ5NiA0NjIuNFYyNzMuMmw5NS41IDM3LjM4QzU4NS45IDM5Ny44IDUzMC42IDQ0NiA0OTYgNDYyLjR6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yMjQgMjU2YzcwLjcgMCAxMjgtNTcuMzEgMTI4LTEyOFMyOTQuNyAwIDIyNCAwQzE1My4zIDAgOTYgNTcuMzEgOTYgMTI4UzE1My4zIDI1NiAyMjQgMjU2ek0zMjAuNiAzMTAuM0MzMDUuOSAzMDYuMyAyOTAuNiAzMDQgMjc0LjcgMzA0SDE3My4zQzc3LjYxIDMwNCAwIDM4MS43IDAgNDc3LjRDMCA0OTYuNSAxNS41MiA1MTIgMzQuNjYgNTEySDQxMy4zYzMuMTQzIDAgNS45NjctMS4wMDQgOC44NjEtMS43ODlDMzY5LjcgNDY5LjggMzI0LjEgNDAwLjMgMzIwLjYgMzEwLjN6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE1OS4xIDE5MkwxNDQgMTkyYy0zNS4zNCAwLTY0IDI4LjY2LTY0IDY0LjA4djQ3Ljc5QzgwIDMzOS4zIDEwOC43IDM2OCAxNDQgMzY4SDE2MGMxNy42NiAwIDMyLTE0LjM2IDMyLTMyLjA2TDE5MS4xIDIyNEMxOTEuMSAyMDYuMyAxNzcuNiAxOTIgMTU5LjEgMTkyek0zNjggMTkybC0xNiAwYy0xNy42NiAwLTMyIDE0LjM0LTMyIDMyLjA0TDMyMCAzMzUuOUMzMjAgMzUzLjcgMzM0LjMgMzY4IDM1MiAzNjhoMTZjMzUuMzQgMCA2NC0yOC43IDY0LTY0LjEzVjI1Ni4xQzQzMiAyMjAuNyA0MDMuMyAxOTIgMzY4IDE5MnonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTI1NiAwQzExMi45IDAgNC41ODMgMTE5LjEgLjAyMDggMjU2TDAgMjk2QzAgMzA5LjMgMTAuNzUgMzIwIDIzLjEgMzIwUzQ4IDMwOS4zIDQ4IDI5NlYyNTZjMC0xMTQuNyA5My4zNC0yMDcuOCAyMDgtMjA3LjhDMzcwLjcgNDguMiA0NjQgMTQxLjMgNDY0IDI1NnYxNDRjMCAyMi4wOS0xNy45MSA0MC00MCA0MGgtMTEwLjdDMzA1IDQyNS43IDI4OS43IDQxNiAyNzIgNDE2SDI0MS44Yy0yMy4yMSAwLTQ0LjUgMTUuNjktNDguODcgMzguNDlDMTg3IDQ4NS4yIDIxMC40IDUxMiAyMzkuMSA1MTJIMjcyYzE3LjcyIDAgMzMuMDMtOS43MTEgNDEuMzQtMjRINDI0YzQ4LjYgMCA4OC0zOS40IDg4LTg4VjI1NkM1MDcuNCAxMTkuMSAzOTkuMSAwIDI1NiAweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHJpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNOTYgMTUyQzk2IDEzOC43IDEwNi43IDEyOCAxMjAgMTI4QzEzMy4zIDEyOCAxNDQgMTM4LjcgMTQ0IDE1MlYzNjBDMTQ0IDM3My4zIDEzMy4zIDM4NCAxMjAgMzg0QzEwNi43IDM4NCA5NiAzNzMuMyA5NiAzNjBWMTUyek0xNzYgMTQ0QzE3NiAxMzUuMiAxODMuMiAxMjggMTkyIDEyOEMyMDAuOCAxMjggMjA4IDEzNS4yIDIwOCAxNDRWMzY4QzIwOCAzNzYuOCAyMDAuOCAzODQgMTkyIDM4NEMxODMuMiAzODQgMTc2IDM3Ni44IDE3NiAzNjhWMTQ0ek0yODggMTUyVjM2MEMyODggMzczLjMgMjc3LjMgMzg0IDI2NCAzODRDMjUwLjcgMzg0IDI0MCAzNzMuMyAyNDAgMzYwVjE1MkMyNDAgMTM4LjcgMjUwLjcgMTI4IDI2NCAxMjhDMjc3LjMgMTI4IDI4OCAxMzguNyAyODggMTUyek0zNTIgMTUyQzM1MiAxMzguNyAzNjIuNyAxMjggMzc2IDEyOEMzODkuMyAxMjggNDAwIDEzOC43IDQwMCAxNTJWMzYwQzQwMCAzNzMuMyAzODkuMyAzODQgMzc2IDM4NEMzNjIuNyAzODQgMzUyIDM3My4zIDM1MiAzNjBWMTUyek00ODAgMTQ0VjM2OEM0ODAgMzc2LjggNDcyLjggMzg0IDQ2NCAzODRDNDU1LjIgMzg0IDQ0OCAzNzYuOCA0NDggMzY4VjE0NEM0NDggMTM1LjIgNDU1LjIgMTI4IDQ2NCAxMjhDNDcyLjggMTI4IDQ4MCAxMzUuMiA0ODAgMTQ0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNTEyIDMyQzU0Ny4zIDMyIDU3NiA2MC42NSA1NzYgOTZWNDE2QzU3NiA0NTEuMyA1NDcuMyA0ODAgNTEyIDQ4MEg2NEMyOC42NSA0ODAgMCA0NTEuMyAwIDQxNlY5NkMwIDYwLjY1IDI4LjY1IDMyIDY0IDMySDUxMnpNMTIwIDEyOEMxMDYuNyAxMjggOTYgMTM4LjcgOTYgMTUyVjM2MEM5NiAzNzMuMyAxMDYuNyAzODQgMTIwIDM4NEMxMzMuMyAzODQgMTQ0IDM3My4zIDE0NCAzNjBWMTUyQzE0NCAxMzguNyAxMzMuMyAxMjggMTIwIDEyOHpNMTc2IDM2OEMxNzYgMzc2LjggMTgzLjIgMzg0IDE5MiAzODRDMjAwLjggMzg0IDIwOCAzNzYuOCAyMDggMzY4VjE0NEMyMDggMTM1LjIgMjAwLjggMTI4IDE5MiAxMjhDMTgzLjIgMTI4IDE3NiAxMzUuMiAxNzYgMTQ0VjM2OHpNMjY0IDEyOEMyNTAuNyAxMjggMjQwIDEzOC43IDI0MCAxNTJWMzYwQzI0MCAzNzMuMyAyNTAuNyAzODQgMjY0IDM4NEMyNzcuMyAzODQgMjg4IDM3My4zIDI4OCAzNjBWMTUyQzI4OCAxMzguNyAyNzcuMyAxMjggMjY0IDEyOHpNMzUyIDM2MEMzNTIgMzczLjMgMzYyLjcgMzg0IDM3NiAzODRDMzg5LjMgMzg0IDQwMCAzNzMuMyA0MDAgMzYwVjE1MkM0MDAgMTM4LjcgMzg5LjMgMTI4IDM3NiAxMjhDMzYyLjcgMTI4IDM1MiAxMzguNyAzNTIgMTUyVjM2MHpNNDY0IDEyOEM0NTUuMiAxMjggNDQ4IDEzNS4yIDQ0OCAxNDRWMzY4QzQ0OCAzNzYuOCA0NTUuMiAzODQgNDY0IDM4NEM0NzIuOCAzODQgNDgwIDM3Ni44IDQ4MCAzNjhWMTQ0QzQ4MCAxMzUuMiA0NzIuOCAxMjggNDY0IDEyOHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTE2MCA0OTZDMTE1LjggNDk2IDgwIDQ2MC4yIDgwIDQxNkM4MCAzNzEuOCAxMTUuOCAzMzYgMTYwIDMzNkMyMDQuMiAzMzYgMjQwIDM3MS44IDI0MCA0MTZDMjQwIDQ2MC4yIDIwNC4yIDQ5NiAxNjAgNDk2ek0xOTIgNDE2QzE5MiAzOTguMyAxNzcuNyAzODQgMTYwIDM4NEMxNDIuMyAzODQgMTI4IDM5OC4zIDEyOCA0MTZDMTI4IDQzMy43IDE0Mi4zIDQ0OCAxNjAgNDQ4QzE3Ny43IDQ0OCAxOTIgNDMzLjcgMTkyIDQxNnpNMzUyIDMzNkMzMDcuOCAzMzYgMjcyIDMwMC4yIDI3MiAyNTZDMjcyIDIxMS44IDMwNy44IDE3NiAzNTIgMTc2QzM5Ni4yIDE3NiA0MzIgMjExLjggNDMyIDI1NkM0MzIgMzAwLjIgMzk2LjIgMzM2IDM1MiAzMzZ6TTM4NCAyNTZDMzg0IDIzOC4zIDM2OS43IDIyNCAzNTIgMjI0QzMzNC4zIDIyNCAzMjAgMjM4LjMgMzIwIDI1NkMzMjAgMjczLjcgMzM0LjMgMjg4IDM1MiAyODhDMzY5LjcgMjg4IDM4NCAyNzMuNyAzODQgMjU2ek0xOTIgMTZDMjM2LjIgMTYgMjcyIDUxLjgyIDI3MiA5NkMyNzIgMTQwLjIgMjM2LjIgMTc2IDE5MiAxNzZDMTQ3LjggMTc2IDExMiAxNDAuMiAxMTIgOTZDMTEyIDUxLjgyIDE0Ny44IDE2IDE5MiAxNnpNMTYwIDk2QzE2MCAxMTMuNyAxNzQuMyAxMjggMTkyIDEyOEMyMDkuNyAxMjggMjI0IDExMy43IDIyNCA5NkMyMjQgNzguMzMgMjA5LjcgNjQgMTkyIDY0QzE3NC4zIDY0IDE2MCA3OC4zMyAxNjAgOTZ6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00wIDQxNkMwIDM5OC4zIDE0LjMzIDM4NCAzMiAzODRIODYuNjZDODIuMzggMzkzLjggODAgNDA0LjYgODAgNDE2QzgwIDQyNy40IDgyLjM4IDQzOC4yIDg2LjY2IDQ0OEgzMkMxNC4zMyA0NDggMCA0MzMuNyAwIDQxNnpNMjQwIDQxNkMyNDAgNDA0LjYgMjM3LjYgMzkzLjggMjMzLjMgMzg0SDQ4MEM0OTcuNyAzODQgNTEyIDM5OC4zIDUxMiA0MTZDNTEyIDQzMy43IDQ5Ny43IDQ0OCA0ODAgNDQ4SDIzMy4zQzIzNy42IDQzOC4yIDI0MCA0MjcuNCAyNDAgNDE2VjQxNnpNMCAyNTZDMCAyMzguMyAxNC4zMyAyMjQgMzIgMjI0SDI3OC43QzI3NC40IDIzMy44IDI3MiAyNDQuNiAyNzIgMjU2QzI3MiAyNjcuNCAyNzQuNCAyNzguMiAyNzguNyAyODhIMzJDMTQuMzMgMjg4IDAgMjczLjcgMCAyNTZWMjU2ek00MzIgMjU2QzQzMiAyNDQuNiA0MjkuNiAyMzMuOCA0MjUuMyAyMjRINDgwQzQ5Ny43IDIyNCA1MTIgMjM4LjMgNTEyIDI1NkM1MTIgMjczLjcgNDk3LjcgMjg4IDQ4MCAyODhINDI1LjNDNDI5LjYgMjc4LjIgNDMyIDI2Ny40IDQzMiAyNTZ6TTExOC43IDY0QzExNC40IDczLjggMTEyIDg0LjYyIDExMiA5NkMxMTIgMTA3LjQgMTE0LjQgMTE4LjIgMTE4LjcgMTI4SDMyQzE0LjMzIDEyOCAwIDExMy43IDAgOTZDMCA3OC4zMyAxNC4zMyA2NCAzMiA2NEgxMTguN3pNMjY1LjMgMTI4QzI2OS42IDExOC4yIDI3MiAxMDcuNCAyNzIgOTZDMjcyIDg0LjYyIDI2OS42IDczLjggMjY1LjMgNjRINDgwQzQ5Ny43IDY0IDUxMiA3OC4zMyA1MTIgOTZDNTEyIDExMy43IDQ5Ny43IDEyOCA0ODAgMTI4SDI2NS4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMTE2IDIwNS4xQzExNiAxOTYuMiAxMjUuNiAxOTAuNCAxMzMuNSAxOTQuN0wyMjMuNCAyNDIuNkMyMzQuMSAyNDguMyAyMzQuMSAyNjMuNyAyMjMuNCAyNjkuNEwxMzMuNSAzMTcuM0MxMjUuNiAzMjEuNiAxMTYgMzE1LjggMTE2IDMwNi45QzExNiAzMDQuMSAxMTYuMSAzMDEuNCAxMTguOCAyOTkuMkwxNTQuOCAyNTZMMTE4LjggMjEyLjhDMTE2LjEgMjEwLjYgMTE2IDIwNy45IDExNiAyMDUuMVYyMDUuMXpNMzkzLjIgMjEyLjhMMzU3LjIgMjU2TDM5My4yIDI5OS4yQzM5NSAzMDEuNCAzOTYgMzA0LjEgMzk2IDMwNi45QzM5NiAzMTUuOCAzODYuNCAzMjEuNiAzNzguNSAzMTcuM0wyODguNiAyNjkuNEMyNzcuOSAyNjMuNyAyNzcuOSAyNDguMyAyODguNiAyNDIuNkwzNzguNSAxOTQuN0MzODYuNCAxOTAuNCAzOTYgMTk2LjIgMzk2IDIwNS4xQzM5NiAyMDcuOSAzOTUgMjEwLjYgMzkzLjIgMjEyLjh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00wIDI1NkMwIDExNC42IDExNC42IDAgMjU2IDBDMzk3LjQgMCA1MTIgMTE0LjYgNTEyIDI1NkM1MTIgMzk3LjQgMzk3LjQgNTEyIDI1NiA1MTJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZ6TTExOC44IDIxMi44TDE1NC44IDI1NkwxMTguOCAyOTkuMkMxMTYuMSAzMDEuNCAxMTYgMzA0LjEgMTE2IDMwNi45QzExNiAzMTUuOCAxMjUuNiAzMjEuNiAxMzMuNSAzMTcuM0wyMjMuNCAyNjkuNEMyMzQuMSAyNjMuNyAyMzQuMSAyNDguMyAyMjMuNCAyNDIuNkwxMzMuNSAxOTQuN0MxMjUuNiAxOTAuNCAxMTYgMTk2LjIgMTE2IDIwNS4xQzExNiAyMDcuOSAxMTYuMSAyMTAuNiAxMTguOCAyMTIuOFYyMTIuOHpNMjg4LjYgMjQyLjZDMjc3LjkgMjQ4LjMgMjc3LjkgMjYzLjcgMjg4LjYgMjY5LjRMMzc4LjUgMzE3LjNDMzg2LjQgMzIxLjYgMzk2IDMxNS44IDM5NiAzMDYuOUMzOTYgMzA0LjEgMzk1IDMwMS40IDM5My4yIDI5OS4yTDM1Ny4yIDI1NkwzOTMuMiAyMTIuOEMzOTUgMjEwLjYgMzk2IDIwNy45IDM5NiAyMDUuMUMzOTYgMTk2LjIgMzg2LjQgMTkwLjQgMzc4LjUgMTk0LjdMMjg4LjYgMjQyLjZ6TTIxNi45IDM1NC43QzIxMS41IDM1MS4xIDIwNC41IDM1MS4xIDE5OS4xIDM1NC43TDE1OC45IDM4MS41TDEzNS4yIDM2OS43QzEyNy4zIDM2NS43IDExNy42IDM2OC45IDExMy43IDM3Ni44QzEwOS43IDM4NC43IDExMi45IDM5NC40IDEyMC44IDM5OC4zTDE1Mi44IDQxNC4zQzE1Ny4xIDQxNi45IDE2NC4xIDQxNi41IDE2OC45IDQxMy4zTDIwOCAzODcuMkwyNDcuMSA0MTMuM0MyNTIuNSA0MTYuOSAyNTkuNSA0MTYuOSAyNjQuOSA0MTMuM0wzMDQgMzg3LjJMMzQzLjEgNDEzLjNDMzQ3LjkgNDE2LjUgMzU0IDQxNi45IDM1OS4yIDQxNC4zTDM5MS4yIDM5OC4zQzM5OS4xIDM5NC40IDQwMi4zIDM4NC43IDM5OC4zIDM3Ni44QzM5NC40IDM2OC45IDM4NC43IDM2NS43IDM3Ni44IDM2OS43TDM1My4xIDM4MS41TDMxMi45IDM1NC43QzMwNy41IDM1MS4xIDMwMC41IDM1MS4xIDI5NS4xIDM1NC43TDI1NiAzODAuOEwyMTYuOSAzNTQuN3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFRhZ3MoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNNDggMzJIMTk3LjVDMjE0LjUgMzIgMjMwLjcgMzguNzQgMjQyLjcgNTAuNzVMNDEwLjcgMjE4LjdDNDM1LjcgMjQzLjcgNDM1LjcgMjg0LjMgNDEwLjcgMzA5LjNMMjc3LjMgNDQyLjdDMjUyLjMgNDY3LjcgMjExLjcgNDY3LjcgMTg2LjcgNDQyLjdMMTguNzUgMjc0LjdDNi43NDMgMjYyLjcgMCAyNDYuNSAwIDIyOS41VjgwQzAgNTMuNDkgMjEuNDkgMzIgNDggMzJMNDggMzJ6TTExMiAxNzZDMTI5LjcgMTc2IDE0NCAxNjEuNyAxNDQgMTQ0QzE0NCAxMjYuMyAxMjkuNyAxMTIgMTEyIDExMkM5NC4zMyAxMTIgODAgMTI2LjMgODAgMTQ0QzgwIDE2MS43IDk0LjMzIDE3NiAxMTIgMTc2eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMzExLjEgMzguOTNDMzIwLjUgMjkuNjEgMzM1LjcgMjkuNyAzNDQuMSAzOS4xM0w0NzIuOCAxNjguNEM1MjUuMSAyMjEuNCA1MjUuMSAzMDYuNiA0NzIuOCAzNTkuNkwzNjAuOCA0NzIuOUMzNTEuNSA0ODIuMyAzMzYuMyA0ODIuNCAzMjYuOSA0NzMuMUMzMTcuNCA0NjMuOCAzMTcuNCA0NDguNiAzMjYuNyA0MzkuMUw0MzguNiAzMjUuOUM0NzIuNSAyOTEuNiA0NzIuNSAyMzYuNCA0MzguNiAyMDIuMUwzMTAuOSA3Mi44N0MzMDEuNSA2My40NCAzMDEuNiA0OC4yNSAzMTEuMSAzOC45M1YzOC45M3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFlvdXR1YmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J001NDkuNjU1IDEyNC4wODNjLTYuMjgxLTIzLjY1LTI0Ljc4Ny00Mi4yNzYtNDguMjg0LTQ4LjU5N0M0NTguNzgxIDY0IDI4OCA2NCAyODggNjRTMTE3LjIyIDY0IDc0LjYyOSA3NS40ODZjLTIzLjQ5NyA2LjMyMi00Mi4wMDMgMjQuOTQ3LTQ4LjI4NCA0OC41OTctMTEuNDEyIDQyLjg2Ny0xMS40MTIgMTMyLjMwNS0xMS40MTIgMTMyLjMwNXMwIDg5LjQzOCAxMS40MTIgMTMyLjMwNWM2LjI4MSAyMy42NSAyNC43ODcgNDEuNSA0OC4yODQgNDcuODIxQzExNy4yMiA0NDggMjg4IDQ0OCAyODggNDQ4czE3MC43OCAwIDIxMy4zNzEtMTEuNDg2YzIzLjQ5Ny02LjMyMSA0Mi4wMDMtMjQuMTcxIDQ4LjI4NC00Ny44MjEgMTEuNDEyLTQyLjg2NyAxMS40MTItMTMyLjMwNSAxMS40MTItMTMyLjMwNXMwLTg5LjQzOC0xMS40MTItMTMyLjMwNXptLTMxNy41MSAyMTMuNTA4VjE3NS4xODVsMTQyLjczOSA4MS4yMDUtMTQyLjczOSA4MS4yMDF6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J000NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgICAgPHBhdGggZD0nTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBLYWthbygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDk5LjYxODAxIDkyLjE0NzAxMSc+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPSdjbGlwUGF0aDY5MicgY2xpcFBhdGhVbml0cz0ndXNlclNwYWNlT25Vc2UnPlxuICAgICAgICAgIDxwYXRoIGQ9J20gMCw1OTUuMjggODQxLjg5LDAgTCA4NDEuODksMCAwLDAgWicgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIHRyYW5zZm9ybT0nbWF0cml4KDEsMCwwLC0xLC0zNjIuMjYzNTgsMjM0LjA5ODk1KSc+XG4gICAgICAgIDxnIGNsaXBQYXRoPSd1cmwoI2NsaXBQYXRoNjkyKSc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTYzLjI2MTIsMzc2LjY3NzcpJz5cbiAgICAgICAgICAgIDxwYXRoIGQ9J20gMjQ4LjgxMDM5LC0xNDMuNTc4NzUgYyAtMjYuOTUzLDAgLTQ4LjgwODAxLC0xNy4yNTYgLTQ4LjgwODAxLC0zOC41NTUgMCwtMTMuNjgxMDEgOS4wNTIwMSwtMjUuNjkzMDEgMjIuNjQ2MDEsLTMyLjU0OTAxIGwgLTQuNTk5LC0xNy4xNjcgYyAtMC4xNzYsLTAuNTI3IC0wLjAzLC0xLjA4NSAwLjM1MiwtMS40NjUgMC4yNjMsLTAuMjY1IDAuNjE0LC0wLjQxMSAwLjk5NSwtMC40MTEgMC4yOTQsMCAwLjU4NiwwLjExNyAwLjg1LDAuMzIyIGwgMTkuNzc1LDEzLjM2IGMgMi44NzIsLTAuNDEgNS44MDIsLTAuNjQ0IDguNzg5LC0wLjY0NCAyNi45NTMsMCA0OC44MSwxNy4yNTUgNDguODEsMzguNTU0MDEgMCwyMS4yOTkgLTIxLjg1NywzOC41NTUgLTQ4LjgxLDM4LjU1NScgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIGhlcm9TdHJpbmcsIHJvdXRlcyB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IE5hdiB9IGZyb20gJ2JvbHQtdWknXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJ34vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IEJhbm5lciwgUHJvbW90aW9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcblxudHlwZSBMYXlvdXRQcm9wcyA9IFJvdXRlICYge1xuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W10sXG4gIHByb21vdGlvbj86IFByb21vdGlvbixcbiAgcHJldlJvdXRlPzogc3RyaW5nLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgY292ZXI/OiBKU1guRWxlbWVudCxcbiAgZGF0ZT86IEpTWC5FbGVtZW50LFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxuICBpc1dpZGU/OiBib29sZWFuLFxufVxuXG50eXBlIFJvb3RMYXlvdXRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdLFxuICBwYXRobmFtZT86IHN0cmluZyxcbiAgaXNSb290OiBib29sZWFuLFxuICBzaWRlYmFyOiBib29sZWFuLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2l0ZU1ldGEoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc2l0ZS53ZWJtYW5pZmVzdD92PTIwMjIwMzEzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdtYXNrLWljb24nIGhyZWY9Jy9pbWFnZXMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnP3Y9MjAyMjAzMTMnIGNvbG9yPScjMjU2M2ViJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvZmF2aWNvbi5pY28/dj0yMDIyMDMxMycgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdCT0xUIFVYJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMjU2M2ViJyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmOGZhZmMnIC8+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGFzeW5jXG4gICAgICAgIHNyYz0naHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi0xMzE1MjM4ODYwNzE4NTQ5J1xuICAgICAgICBjcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+ICovfVxuICAgICAgPHNjcmlwdCBhc3luYyBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1OVFpEQ1RIRFg1Jz48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBndGFnKCdjb25maWcnLCAnRy1OVFpEQ1RIRFg1Jyk7XG4gICAgICBgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gQ2hhbm5lbCBQbHVnaW4gU2NyaXB0cyAtLT4gKi99XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gd2luZG93O1xuICAgICAgICAgIGlmICh3LkNoYW5uZWxJTykge1xuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuY29uc29sZS5lcnJvciB8fCB3aW5kb3cuY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKXt9KSgnQ2hhbm5lbElPIHNjcmlwdCBpbmNsdWRlZCB0d2ljZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjaC5jKGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjaC5xID0gW107XG4gICAgICAgICAgY2guYyA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIGNoLnEucHVzaChhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHcuQ2hhbm5lbElPID0gY2g7XG4gICAgICAgICAgZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgIGlmICh3LkNoYW5uZWxJT0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcuQ2hhbm5lbElPSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgcy5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzLnNyYyA9ICdodHRwczovL2Nkbi5jaGFubmVsLmlvL3BsdWdpbi9jaC1wbHVnaW4td2ViLmpzJztcbiAgICAgICAgICAgIHMuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIHgucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgeCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBsKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25sb2FkJywgbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBDaGFubmVsSU8oJ2Jvb3QnLCB7XG4gICAgICAgICAgXCJwbHVnaW5LZXlcIjogXCJiYWZmZWE5Zi01Y2ZkLTRkNWQtOTM1YS03MzQwOTY0MWUxZjZcIlxuICAgICAgICB9KTtgLFxuICAgICAgICB9fVxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgey8qIDwhLS0gRW5kIENoYW5uZWwgUGx1Z2luIC0tPiAqL31cbiAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPSdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tL3Nkay9qcy9rYWthby5taW4uanMnPjwvc2NyaXB0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIEljb24sXG4gIGRlc2MsXG4gIHByb21vdGlvbixcbiAgcHJldlJvdXRlLFxuICBjb3ZlcixcbiAgZGF0ZSxcbiAgaXNXaWRlLFxuICBzaWRlYmFyLFxufTogTGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LXBhZ2UgJHtpc1dpZGUgPyAnYngtcGFnZS13aWRlJyA6ICcnfWB9PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3Jz5cbiAgICAgICAgICB7cHJldmlld0VuYWJsZWQgPyAoXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nL3Bvc3RzL3ByZXZpZXcvc3RvcCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIGRyYWZ0IGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9wb3N0cy9wcmV2aWV3L3N0YXJ0Jz5cbiAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIHNob3dpbmcgcHVibGlzaGVkIGNvbnRlbnQuIDxidXR0b24+Q2xpY2sgaGVyZTwvYnV0dG9uPiB0byBlbnRlciBwcmV2aWV3IG1vZGUhXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPEhlYWRlciB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlLCBjb3ZlciwgZGF0ZSwgaXNXaWRlLCBzaWRlYmFyIH19IC8+XG4gICAgICB7cHJvbW90aW9uICYmIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMnPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbiBmbGV4IG1kOmhpZGRlbic+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9vdExheW91dCh7IGlzUm9vdCwgY2hpbGRyZW4sIHBhdGhuYW1lLCBzaWRlYmFyIH06IFJvb3RMYXlvdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250YWluZXInPlxuICAgICAge3NpZGViYXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LXBhZ2UgYngtcGFnZS1yb290ICR7aXNSb290ID8gJycgOiAnaGlkZGVuIG1kOmZsZXgnfWB9PlxuICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICBpc1Jvb3Q9e2lzUm9vdH1cbiAgICAgICAgICAgIGhlcm9TdHJpbmc9e2hlcm9TdHJpbmd9XG4gICAgICAgICAgICBkZXNjPSdcdUIzNTQgXHVCMDk4XHVDNzQwIFx1QzBBQ1x1QzZBOVx1Qzc5MCBcdUFDQkRcdUQ1RDhcdUM3NDQgXHVDMEREXHVBQzAxXHVENTU4XHVCQTcwIFx1QUYzQ1x1QUYzQ1x1RDU1OFx1QUM4QyBcdUI5Q0NcdUI0RTRcdUM1QjQgXHVCNERDXHVCODI0XHVDNjk0LidcbiAgICAgICAgICAgIGxpbmtzPXtbXG4gICAgICAgICAgICAgIHsgdXJsOiAnL2NvbnRhY3QnLCBsYWJlbDogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGxhbicsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdcdUM2OTRcdUFFMDhcdUQ0NUMgXHVENjU1XHVDNzc4JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmF2IHsuLi57IHJvdXRlcywgcGF0aG5hbWUgfX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNSb290ID8gJ3B4LTMgbWQ6cHgtMCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBIZWFkZXJQcm9wcyA9IFJvdXRlICYge1xuICBwcmV2Um91dGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgY292ZXI/OiBKU1guRWxlbWVudCxcbiAgZGF0ZT86IEpTWC5FbGVtZW50LFxuICBzaWRlYmFyPzogYm9vbGVhbixcbiAgaXNXaWRlPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlLCBJY29uLCBkZXNjLCBwcmV2Um91dGUsIGNvdmVyLCBkYXRlLCBzaWRlYmFyLCBpc1dpZGUgfTogSGVhZGVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyJz5cbiAgICAgIHsoaXNXaWRlIHx8ICFzaWRlYmFyKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wYy1uYXYnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtaG9tZSc+XG4gICAgICAgICAgICB7cHJldlJvdXRlICYmIHByZXZSb3V0ZSAhPT0gJy8nID8gKFxuICAgICAgICAgICAgICA8TGluayB0bz17cHJldlJvdXRlfT5cbiAgICAgICAgICAgICAgICA8SWNvbnMuQXJyb3dMZWZ0TGlnaHQgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgICAgIDxJY29ucy5Ib21lTGlnaHQgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1uYXYnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWhvbWUnPlxuICAgICAgICAgIHtwcmV2Um91dGUgJiYgcHJldlJvdXRlICE9PSAnLycgPyAoXG4gICAgICAgICAgICA8TGluayB0bz17cHJldlJvdXRlfT5cbiAgICAgICAgICAgICAgPEljb25zLkFycm93TGVmdExpZ2h0IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgICAgPEljb25zLkhvbWVMaWdodCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWxvZ28nPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29ucy5Mb2dvIGNsYXNzTmFtZT0ndy0xNiBoLTEwJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtc2V0dGluZ3MnPlxuICAgICAgICAgIDxMaW5rIHRvPScvc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEljb25zLlNldHRpbmdzTGlnaHQgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXNlY3Rpb24nPlxuICAgICAgICB7Y292ZXIgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWNvdmVyJz57Y292ZXJ9PC9kaXY+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItbWV0YSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLXRpdGxlJz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1kZXNjJz57ZGVzY308L2Rpdj5cbiAgICAgICAgICAgIHtkYXRlICYmIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyBieC1oZWFkZXItZGF0ZSc+e2RhdGV9PC9kaXY+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtJY29uICYmIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItaWNvbic+e3R5cGVvZiBJY29uID09PSAnZnVuY3Rpb24nID8gPEljb24gLz4gOiBJY29ufTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdib2x0LXVpJ1xuaW1wb3J0IHsgSGVyb1N0cmluZyB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgSGVyb1Byb3BzID0ge1xuICBoZXJvU3RyaW5nOiBIZXJvU3RyaW5nLFxuICBkZXNjPzogc3RyaW5nLFxuICBpc1Jvb3Q/OiBib29sZWFuLFxuICBsaW5rcz86IHsgdXJsPzogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBoYW5kbGVyPzogKCkgPT4gdm9pZCB8IHVuZGVmaW5lZCB9W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZXJvKHsgaGVyb1N0cmluZyA9IFtbJycsICcnXV0sIGRlc2MsIGxpbmtzLCBpc1Jvb3QgfTogSGVyb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BieC1oZXJvLWxvZ28gJHtpc1Jvb3QgPyAnanVzdGlmeS1jZW50ZXInIDogJ2p1c3RpZnktY2VudGVyIG1kOnBiLTQnfWB9PlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e2BwLTQgJHtpc1Jvb3QgPyAnJyA6ICdtZDpwLTAgbWQ6cHktMTAnfWB9IHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzUm9vdCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIHtoZXJvU3RyaW5nLm1hcChoZWFkaW5nID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aGVhZGluZ1swXX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGdhcC14LTAuNSB0ZXh0LTJ4bCBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNjAwIGRhcms6dGV4dC1zbGF0ZS0zMDAgZXZlbjptbC01J1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJsYWNrJz57aGVhZGluZ1swXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXRoaW4nPntoZWFkaW5nWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZGVzYyAmJiA8ZGl2IGNsYXNzTmFtZT0naW5saW5lLWZsZXggbWF4LXctWzIwMHB4XSB0ZXh0LXhzIG10LTMgdGV4dC1jZW50ZXInPntkZXNjfTwvZGl2Pn1cbiAgICAgICAgICB7bGlua3MgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlcm8tbGlua3MnPlxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKGxpbmsgPT5cbiAgICAgICAgICAgICAgICAgIGxpbmsudXJsID8gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17bGluay51cmx9IGhyZWY9e2xpbmsudXJsfSBzaXplPSdsYXJnZSc+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsubGFiZWx9IG9uQ2xpY2s9e2xpbmsuaGFuZGxlcn0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgaGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbCB9IGZyb20gJ34vbGliL2tha2FvJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItbG9nbyc+XG4gICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICA8SWNvbi5Mb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1jb250YWN0Jz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0NoYXRDaGFubmVsfT5cdUNFNzRcdUNFNzRcdUM2MjRcdUQxQTEgXHVDQzQ0XHVEMzA1IFx1QkIzOFx1Qzc1ODwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWNvbnRhY3QtZGVzYyc+XG4gICAgICAgICAgXHVEM0M5XHVDNzdDIDEwOjAwIC0gMTg6MDBcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAoXHVDODEwXHVDMkVDXHVDMkRDXHVBQzA0IDEzOjAwIC0gMTQ6MDAgXHVDODFDXHVDNjc4IFx1MDBCNyBcdUM4RkNcdUI5RDAvXHVBQ0Y1XHVENzM0XHVDNzdDIFx1QzgxQ1x1QzY3OClcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J2J4LWZvb3Rlci1zbnMnPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZGVlcnBhcms4MjEwJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nWW91VHViZSc+XG4gICAgICAgICAgICA8SWNvbi5Zb3V0dWJlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cudHdpdHRlci5jb20vZGVlcnBhcms3JyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nVHdpdHRlcic+XG4gICAgICAgICAgICA8SWNvbi5Ud2l0dGVyIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kZWVycGFyaycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlcicgdGl0bGU9J0luc3RhZ3JhbSc+XG4gICAgICAgICAgICA8SWNvbi5JbnN0YWdyYW0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBLYWthbzogYW55O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0thS2FvU0RLID0gKCkgPT4ge1xuICBpZighd2luZG93Lktha2FvLkNoYW5uZWwpIHtcbiAgICB3aW5kb3cuS2FrYW8uaW5pdCgnYzM0ODA4ZTM2NGRlZWMxZGQzN2FiOGM2OTIzMDU3OWUnKVxuICB9XG59XG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbCA9ICgpID0+IHtcbiAgY2hlY2tLYUthb1NESygpXG4gIHdpbmRvdy5LYWthby5DaGFubmVsLmNoYXQoe1xuICAgIGNoYW5uZWxQdWJsaWNJZDogJ19xd3N4ZWInLFxuICB9KVxufVxuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrQWRkQ2hhbm5lbCA9ICgpID0+IHtcbiAgY2hlY2tLYUthb1NESygpXG4gIHdpbmRvdy5LYWthby5DaGFubmVsLmFkZENoYW5uZWwoe1xuICAgIGNoYW5uZWxQdWJsaWNJZDogJ19xd3N4ZWInLFxuICB9KVxufVxuIiwgImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2JvbHQtdWknXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgdHlwZSBQcm9tb3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHVybD86IHN0cmluZyxcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yOiB7XG4gICAgcmVkOiBudW1iZXIsXG4gICAgYmx1ZTogbnVtYmVyLFxuICAgIGdyZWVuOiBudW1iZXIsXG4gIH0sXG4gIHRleHRjb2xvcjoge1xuICAgIGhleDogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFubmVyKHsgdGl0bGUsIHVybCwgY29sb3I6IHsgcmVkLCBibHVlLCBncmVlbiB9LCB0ZXh0Y29sb3I6IHsgaGV4IH0sIGxhYmVsIH06IFByb21vdGlvbikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXInIHN0eWxlPXt7XG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogYHJnYigke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9KWAsXG4gICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAuNSlgLFxuICAgICAgJy0tdHctc2hhZG93JzogJ3ZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKScsXG4gICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItaWNvbic+XG4gICAgICAgIDxJY29uLkJhbm5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLXRpdGxlJz48c3Bhbj57dGl0bGV9PC9zcGFuPjwvZGl2PlxuICAgICAge3VybCAmJiA8ZGl2IGNsYXNzTmFtZT0nYngtYmFubmVyLWxpbmsnPlxuICAgICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBocmVmPXt1cmx9PntsYWJlbCB8fCAnXHVCQzE0XHVCODVDXHVBQzAwXHVBRTMwJ308L0J1dHRvbj5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBwdWJsaXNoaW5nIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IFJlY29tbWVuZCwgVGVjaCwgRmxvdywgQ3Jld3MsIEZBUSwgUmVmdW5kIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlcnZpY2VzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVibGlzaGluZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgcmVjb21tZW5kTGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDNzc4XHVEMTMwXHVCMTM3IFx1QzBBQ1x1QzVDNVx1Qzc5MCBcdUIzMDBcdUQ0NUNcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVENTA0XHVCODVDXHVDODFEXHVEMkI4XHVDNUQwIFx1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMgXHVCQzBGIFVJIFx1QUMxQ1x1QkMxQyBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1LCBcdUQxMzRcdUQwQTQgXHVBQ0M0XHVDNTdEJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbMV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVCMzAwXHVBRTMwXHVDNUM1IFNJIFx1QjJGNFx1QjJGOVx1Qzc5MFx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUIzMDBcdUFERENcdUJBQTggXHVENTA0XHVCODVDXHVDODFEXHVEMkI4IFx1QjlDOFx1RDA2Q1x1QzVDNSwgVUkgXHVBQzFDXHVCQzFDIFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1QzBDMVx1QzhGQyBcdUJEODhcdUFDMDAsIFx1RDEzNFx1RDBBNCBcdUFDQzRcdUM1N0QnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHRlY2hMaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1syXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdUYWlsd2luZENTUyBcdUM5QzBcdUM2RDAnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QzY5NFx1Qzk5OCBcdUFDMDFcdUFEMTFcdUJDMUJcdUIyOTQgXHVDNzIwXHVEMkY4XHVCOUFDXHVEMkYwIFx1RDA3NFx1Qjc5OFx1QzJBNCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkNcdUM3NzggVGFpbHdpbmRDU1NcdUI4NUMgXHVBQzFDXHVCQzFDIFx1QUMwMFx1QjJBNVx1RDU1OFx1QkE3MCBcdUIyRTRcdUM1OTFcdUQ1NUMgQ1NTIFx1QkMyOVx1QkM5NVx1Qjg2MFx1QzczQ1x1Qjg1Q1x1QjNDNCBcdUFDMDBcdUIyQTVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbM10ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDMkRDXHVCOUU4XHVEMkYxIFx1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMnLFxuICAgICAgY29udGVudHM6IFsnXHVCQjM4XHVDMTFDXHVDNUQwIFx1QUQ2Q1x1Qzg3MFx1QzgwMVx1Qzc3OCBcdUM3NThcdUJCRjhcdUI5N0MgXHVCRDgwXHVDNUVDXHVENTU4XHVDNUVDIFx1Q0Q1Q1x1QjMwMFx1RDU1QyBcdUMyRENcdUI5RThcdUQyRjFcdUQ1NUMgXHVBQzFDXHVCQzFDXHVDNzQ0IFx1QzgxQ1x1QUNGNVx1RDU2OVx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1s0XS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxIFx1QzkwMFx1QzIxOCcsXG4gICAgICBjb250ZW50czogWydcdUM2OTRcdUFENkNcdUMwQUNcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCNzdDIFx1QzgxMVx1QURGQ1x1QzEzMVx1Qzc0NCBcdUM5MDBcdUMyMThcdUQ1NThcdUM1RUMgXHVDNzc4XHVDOTlEIFx1QjlDOFx1RDA2Q1x1Qjk3QyBcdUJDMUJcdUM3NDQgXHVDMjE4IFx1Qzc4OFx1QjNDNFx1Qjg1RCBcdUFDMUNcdUJDMUNcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzVdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUQzOThcdUM3NzRcdUM5QzBcdUI4NUMgXHVDODFDXHVDNzkxJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjJFNFx1QzU5MVx1RDU1QyBQQyBcdUQwNkNcdUI4NUNcdUMyQTQsIFx1QkFBOFx1QjM1OCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAsIFx1QkFBOFx1QkMxNFx1Qzc3Q1x1QzVEMFx1QzExQyBcdUFDMDFcdUFDMDEgXHVEMDZDXHVBRTMwXHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NCBcdUI0MThcdUIzQzRcdUI4NUQgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxSZWNvbW1lbmQgbGlzdD17cmVjb21tZW5kTGlzdH0gLz5cbiAgICAgIDxUZWNoIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJyBsaXN0PXt0ZWNoTGlzdH0gLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFJlY29tbWVuZFByb3BzID0ge1xuICBsaXN0OiBMaXN0SXRlbVtdLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHBob3Rvcz86IGFueVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVjb21tZW5kKHsgbGlzdCwgY2xhc3NOYW1lIH06IFJlY29tbWVuZFByb3BzKSB7XG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1Qzc3NFx1QjdGMFx1QkQ4NFx1QUVEOCBcdUNEOTRcdUNDOUMgXHVCNERDXHVCODI0XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcblxudHlwZSBSb3dQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICB0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICBpY29uPzogSlNYLkVsZW1lbnQsXG4gIGxpc3Q6IExpc3RJdGVtW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3coeyBpY29uLCB0aXRsZSwgbGlzdCwgY2xhc3NOYW1lIH06IFJvd1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BieC1jb250ZW50cy1yb3cgYngtY29udGVudHMtcm93LWV4dGVuZCAke2NsYXNzTmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3cgcGItMSBtZDpwYi01IHB0LTUgbWQ6cHQtOCc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWgyJz5cbiAgICAgICAgICA8c3Bhbj57KGljb24gJiYgaWNvbikgfHwgPEljb24uQnVsbGV0U29saWQgLz59PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaXN0IGxpc3Q9e2xpc3R9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgdHlwZSBMaXN0SXRlbSA9IHtcbiAgdGl0bGU/OiBzdHJpbmcgfCBKU1guRWxlbWVudCxcbiAgdGh1bWI/OiBzdHJpbmcgfCBKU1guRWxlbWVudCxcbiAgY29udGVudHM/OiAoc3RyaW5nIHwgSlNYLkVsZW1lbnQpW10sXG59XG5cbmV4cG9ydCB0eXBlIExpc3RQcm9wcyA9IHtcbiAgbGlzdDogTGlzdEl0ZW1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpc3QoeyBsaXN0IH06IExpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J2J4LWxpc3QnPlxuICAgICAge2xpc3QgJiZcbiAgICAgICAgbGlzdC5sZW5ndGggJiZcbiAgICAgICAgbGlzdC5tYXAoKGxpc3RJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQnPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0udGh1bWIgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtdGh1bWJuYWlsJz57bGlzdEl0ZW0udGh1bWJ9PC9kaXY+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtdGl0bGUnPntsaXN0SXRlbS50aXRsZX08L2Rpdj59XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtLmNvbnRlbnRzICYmXG4gICAgICAgICAgICAgICAgICBsaXN0SXRlbS5jb250ZW50cy5tYXAoKGNvbnRlbnQsIGNvbnRlbnRJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudEluZGV4fSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtZGVzYyc+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgIDwvdWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcblxudHlwZSBUZWNoUHJvcHMgPSB7XG4gIGxpc3Q6IExpc3RJdGVtW10sXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRlY2goeyBsaXN0LCBjbGFzc05hbWUgfTogVGVjaFByb3BzKSB7XG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1RDU2RFx1QzBDMSBcdUNENUNcdUMyRTBcdUM3NTggXHVBRTMwXHVDMjIwXHVDNzQ0IFx1QzEyMFx1QjNDNFx1RDU3NFx1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcblxudHlwZSBGbG93UHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZsb3coeyBjbGFzc05hbWUgfTogRmxvd1Byb3BzKSB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz4xPC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVBQ0M0XHVDNTdEXHVBRTA4IDEwJSBcdUM3ODVcdUFFMDgnLFxuICAgICAgY29udGVudHM6IFsnXHVENTA0XHVCODVDXHVDODFEXHVEMkI4XHVBQzAwIFx1QzJEQ1x1Qzc5MVx1QjQxOFx1QUUzMCBcdUM4MDQgXHVCQkY4XHVCOUFDIFx1QUNDNFx1QzU3RFx1QUUwOFx1Qzc0NCBcdUJDMUJcdUFDRTAgXHVDMkRDXHVDNzkxXHVENTc0XHVDNjk0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz4yPC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVBRTMwXHVDRDA4IFx1QzBDMVx1QjJGNCcsXG4gICAgICBjb250ZW50czogWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDRUU4XHVDMTQ5LCBcdUM2RDBcdUQ1NThcdUIyOTQgXHVBRTMwXHVCMkE1XHVCNEU0XHVDNzQ0IFx1QUNFMFx1QUMxRFx1QjJEOFx1QjRFNFx1QUNGQyBcdUQ1NjhcdUFFRDggXHVDMEFDXHVDODA0XHVDNUQwIFx1QzhGQ1x1QUNFMCBcdUJDMUJcdUM1NDRcdUM2OTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjM8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUM3NThcdUI4QjBcdUM1RDAgXHVBRDAwXHVCODI4XHVCNDFDIFx1Qzc5MFx1QjhDQyBcdUMyMThcdUMyRTAnLFxuICAgICAgY29udGVudHM6IFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QUQ2Q1x1Q0Q5NSBcdUM4MDQgXHVENTQ0XHVDNjk0XHVENTVDIFx1Qzc5MFx1QjhDQ1x1QjRFNFx1Qzc0NCBcdUIxMThcdUFDQThcdUJDMUJcdUM1NDRcdUM2OTQuIChcdUI4NUNcdUFDRTAsIFx1QzU0NFx1Qzc3NFx1QjUxNFx1QzVCNCwgXHVDODFDXHVENDg4IFx1QzgxNVx1QkNGNFx1QUQwMFx1QjgyOCBcdUMwQUNcdUM5QzQpJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjQ8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDMkRDXHVDNTQ4IFx1QUM4MFx1RDFBMCcsXG4gICAgICBjb250ZW50czogWydcdUI1MTRcdUM3OTBcdUM3NzggXHVDRUU4XHVDMTQ5XHVDNzU4IFx1QzJEQ1x1QzU0OFx1Qzc0NCBcdUJCRjhcdUI5QUMgXHVBQ0UwXHVBQzFEXHVCMkQ4XHVCNEU0XHVBQ0ZDIFx1RDYxMVx1Qzc1OFx1RDU3NFx1QzY5NC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+NTwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QzIxOFx1QzgxNVx1QzBBQ1x1RDU2RCBcdUJDMThcdUM2MDEgXHVCQzBGIFx1QUMxQ1x1QkMxQyBcdUM5QzRcdUQ1ODknLFxuICAgICAgY29udGVudHM6IFsnXHVCRTYwXHVCOTc0XHVBQzhDIFx1QUMxQ1x1QkMxQyBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz42PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVCMzcwXHVCQUE4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1Q0NBQiBcdUMyRENcdUM1RjAgXHVENkM0IFx1QzIxOFx1QzgxNVx1QzBBQ1x1RDU2RCBcdUJDMThcdUM2MDEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+Nzwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1Q0Q1Q1x1Qzg4NSBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNjI0XHVENTA4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzYyNFx1RDUwOCBcdUQ2QzQgXHVCQUE4XHVCMkM4XHVEMTMwXHVCOUMxJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjg8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUM3OTRcdUFFMDggOTAlIFx1Qzc4NVx1QUUwOCcsXG4gICAgICBjb250ZW50czogWydcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjggXHVDNjQ0XHVCOENDJ10sXG4gICAgfSxcbiAgXVxuICBjb25zdCBwcm9wcyA9IHsgdGl0bGU6ICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1XHVDNzQwIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUM3NzQgXHVDNzc0XHVCOTA0XHVDODM4XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuXG50eXBlIENyZXdzUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgcGhvdG9zOiBhbnlbXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENyZXdzKHsgcGhvdG9zLCBjbGFzc05hbWUgfTogQ3Jld3NQcm9wcykge1xuICBjb25zdCBbY3Jld3MxVGh1bWIsIGNyZXdzMlRodW1iLCBjcmV3czNUaHVtYl0gPSBwaG90b3NcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e2NyZXdzMVRodW1ifSAvPixcbiAgICAgIHRpdGxlOiAnXHVCNTE0XHVDNzkwXHVDNzc4L1x1QUMxQ1x1QkMxQyBcIlx1QzZBOVx1QzZBOVwiJyxcbiAgICAgIGNvbnRlbnRzOiBbJ0lUXHVDRDVDXHVDODA0XHVDMTIwXHVDNUQwXHVDMTFDIFx1QzJGOFx1QzZDQ1x1QzYyOCBcdUFDQkRcdUI4MjUgMTBcdUIxNDQgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgwNFx1QkIzOFx1QUMwMCddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtjcmV3czJUaHVtYn0gLz4sXG4gICAgICB0aXRsZTogJ1x1RDUwNFx1Qjg2MFx1RDJCOFx1QzVENFx1QjREQy9cdUJDMzFcdUM1RDRcdUI0REMgXHVBQzFDXHVCQzFDIFwiXHVCNjlDXHVDMkREXHVDNzc0XCInLFxuICAgICAgY29udGVudHM6IFsnSVRcdUNENUNcdUM4MDRcdUMxMjBcdUM1RDBcdUMxMUMgXHVDMkY4XHVDNkNDXHVDNjI4IFx1QUNCRFx1QjgyNSAxMFx1QjE0NCBcdUM3NzRcdUMwQzFcdUM3NTggXHVDODA0XHVCQjM4XHVBQzAwJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e2NyZXdzM1RodW1ifSAvPixcbiAgICAgIHRpdGxlOiAnXHVCMzcwXHVDNzc0XHVEMTMwL1x1Qzc3OFx1RDUwNFx1Qjc3QyBcdUFDMUNcdUJDMUMgXCJcdUJBODVcdUM3OTBcIicsXG4gICAgICBjb250ZW50czogWydJVFx1Q0Q1Q1x1QzgwNFx1QzEyMFx1QzVEMFx1QzExQyBcdUMyRjhcdUM2Q0NcdUM2MjggXHVBQ0JEXHVCODI1IDEwXHVCMTQ0IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MDRcdUJCMzhcdUFDMDAnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1QzgwMFx1RDc2QyBcdUQzMDBcdUM3NDAgXHVDODA0XHVCQjM4XHVBQzAwXHVCNEU0XHVCODVDIFx1QUQ2Q1x1QzEzMSBcdUI0MThcdUM1QjRcdUM3ODhcdUM1QjRcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgRkFRUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZBUSh7IGNsYXNzTmFtZSB9OiBGQVFQcm9wcykge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDNzkxXHVDNUM1IFx1QUUzMFx1QUMwNFx1Qzc0MCBcdUJDRjRcdUQxQjUgXHVDNUJDXHVCOUM4XHVCMDk4IFx1QUM3OFx1QjlBQ1x1QjA5OFx1QzY5ND8nLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgPHVsIGtleT0nc2VydmljZS1mYXEtMCcgY2xhc3NOYW1lPSdieC1saXN0LWl0ZW1zJz5cbiAgICAgICAgICA8bGk+XHVENjREXHVCQ0Y0XHVDNkE5IFx1QzZGOVx1RDM5OFx1Qzc3NFx1QzlDMFx1QjI5NCAzXHVDNzdDPC9saT5cbiAgICAgICAgICA8bGk+XHVBRTMwXHVDNUM1IFx1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMFx1QjI5NCA1XHVDNzdDPC9saT5cbiAgICAgICAgICA8bGk+XHVCRTBDXHVCNzlDXHVCNTI5IFx1Q0VFOFx1QzEyNFx1RDMwNVx1Qzc0MCAxMFx1Qzc3QzwvbGk+XG4gICAgICAgIDwvdWw+LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnMVx1QjE0NCBcdUJCMzRcdUMwQzEgQS9TXHVDNzU4IFx1QkM5NFx1QzcwNFx1QjI5NCBcdUM1QjRcdUI1MTRcdUFFNENcdUM5QzAgXHVDNzc4XHVBQzAwXHVDNjk0PycsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICA8dWwga2V5PSdzZXJ2aWNlLWZhcS0xJyBjbGFzc05hbWU9J2J4LWxpc3QtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cdUQxNERcdUMyQTRcdUQyQjggXHVDMjE4XHVDODE1PC9saT5cbiAgICAgICAgICA8bGk+XHVDNzc0XHVCQkY4XHVDOUMwIFx1QUQ1MFx1Q0NCNCBcdUJDMEYgXHVDRDk0XHVBQzAwLCBcdUMwQURcdUM4MUM8L2xpPlxuICAgICAgICAgIDxsaT5cdUJFMENcdUI3OUNcdUI1MjkgXHVDRUVDXHVCN0VDIFx1QkNDMFx1QUNCRDwvbGk+XG4gICAgICAgICAgPGxpPlx1RDM5OFx1Qzc3NFx1QzlDMCBcdUNEOTRcdUFDMDAgXHVDNzkxXHVDNUM1XHVDNzQwIFx1Q0Q5NFx1QUMwMCBcdUM2OTRcdUFFMDhcdUM3NzQgXHVCQzFDXHVDMEREIFx1RDU2OVx1QjJDOFx1QjJFNC4oXHVCQ0M0XHVCM0M0IFx1RDYxMVx1Qzc1OCk8L2xpPlxuICAgICAgICA8L3VsPixcbiAgICAgIF0sXG4gICAgfSxcbiAgXVxuICBjb25zdCBwcm9wcyA9IHsgdGl0bGU6ICdcdUM3OTBcdUM4RkNcdUM3ODhcdUIyOTQgXHVDOUM4XHVCQjM4XHVCNEU0XHVDNzc0XHVDNjA4XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuXG50eXBlIFJlZnVuZFByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWZ1bmQoeyBjbGFzc05hbWUgfTogUmVmdW5kUHJvcHMpIHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1QUUzMFx1QkNGOCBcdUQ2NThcdUJEODggXHVBRERDXHVDODE1JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUM4MDRcdUJCMzhcdUFDMDBcdUM2NDAgXHVDNzU4XHVCOEIwXHVDNzc4XHVDNzU4IFx1QzBDMVx1RDYzOCBcdUQ2MTFcdUM3NThcdUQ1NThcdUM1RDAgXHVDQ0FEXHVDNTdEIFx1Q0NBMFx1RDY4QyBcdUJDMEYgXHVENjU4XHVCRDg4XHVDNzc0IFx1QUMwMFx1QjJBNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgICAnXHVDNzkxXHVDNUM1XHVDNzc0IFx1QzY0NFx1QjhDQ1x1QjQxQyBcdUM3NzRcdUQ2QzQgXHVCNjEwXHVCMjk0IFx1Qzc5MFx1QjhDQywgXHVENTA0XHVCODVDXHVBREY4XHVCN0E4IFx1QjRGMSBcdUMxMUNcdUJFNDRcdUMyQTRcdUFDMDAgXHVDODFDXHVBQ0Y1XHVCNDFDIFx1Qzc3NFx1RDZDNFx1QzVEMFx1QjI5NCBcdUQ2NThcdUJEODhcdUM3NzQgXHVCRDg4XHVBQzAwXHVENTY5XHVCMkM4XHVCMkU0LiAoIFx1QzE4Q1x1QkU0NFx1Qzc5MFx1QkNGNFx1RDYzOFx1QkM5NSAxN1x1Qzg3MCAyXHVENTZEXHVDNzU4IDVcdUM4NzAuIFx1QzZBOVx1QzVFRCBcdUI2MTBcdUIyOTQgXHUzMDBDXHVCQjM4XHVENjU0XHVDMEIwXHVDNUM1XHVDOUM0XHVENzY1IFx1QUUzMFx1QkNGOFx1QkM5NVx1MzAwRCBcdUM4MUMyXHVDODcwIFx1QzgxQzVcdUQ2MzhcdUM3NTggXHVCNTE0XHVDOUMwXHVEMTM4XHVDRjU4XHVEMTUwXHVDRTIwXHVDNzU4IFx1QzgxQ1x1QUNGNVx1Qzc3NCBcdUFDMUNcdUMyRENcdUI0MUMgXHVBQ0JEXHVDNkIwXHVDNUQwIFx1RDU3NFx1QjJGOSknLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDODA0XHVCQjM4XHVBQzAwIFx1Q0M0NVx1Qzc4NCBcdUMwQUNcdUM3MjAnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QzgwNFx1QkIzOFx1QUMwMFx1Qzc1OCBcdUFEQzBcdUNDNDVcdUMwQUNcdUM3MjBcdUI4NUMgXHVCMkY5XHVDRDA4IFx1QzU3RFx1QzgxNVx1RDU4OFx1QjM1OCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVCQkY4XHVDNzc0XHVENTg5IFx1RDYzOVx1Qzc0MCBcdUJDRjRcdUQzQjhcdUM4MDFcdUM3NzggXHVBRDAwXHVDODEwXHVDNUQwXHVDMTFDIFx1QzJFQ1x1QUMwMVx1RDU1OFx1QUM4QyBcdUM3OThcdUJBQkIgXHVDNzc0XHVENTg5XHVENTVDIFx1QUNCRFx1QzZCMCBcdUFDQjBcdUM4MUMgXHVBRTA4XHVDNTYxIFx1QzgwNFx1Q0NCNCBcdUQ2NThcdUJEODhcdUM3NzQgXHVBQzAwXHVCMkE1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM3NThcdUI4QjBcdUM3NzggXHVDQzQ1XHVDNzg0IFx1QzBBQ1x1QzcyMCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzlDNFx1RDU4OSBcdUIzQzRcdUM5MTEgXHVDNzU4XHVCOEIwXHVDNzc4XHVDNzU4IFx1QURDMFx1Q0M0NVx1QzBBQ1x1QzcyMFx1Qjg1QyBcdUM3NzhcdUQ1NzQgXHVENjU4XHVCRDg4XHVDNzQ0IFx1QzY5NFx1Q0NBRFx1RDU2MCBcdUFDQkRcdUM2QjAsIFx1QzBBQ1x1QzZBOSBcdUFFMDhcdUM1NjFcdUM3NDQgXHVDNTQ0XHVCNzk4XHVDNjQwIFx1QUMxOVx1Qzc3NCBcdUFDQzRcdUMwQjAgXHVENkM0IFx1Q0QxRCBcdUFFMDhcdUM1NjFcdUM3NTggMTAlXHVCOTdDIFx1QUNGNVx1QzgxQ1x1RDU1OFx1QzVFQyBcdUQ2NThcdUJEODhcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgPHVsIGtleT0nc2VydmljZS1yZWZ1bmQtMicgY2xhc3NOYW1lPSdieC1saXN0LWl0ZW1zJz5cbiAgICAgICAgICA8bGk+XHVDRDFEIFx1Qzc5MVx1QzVDNVx1QjdDOVx1Qzc1OCAxLzMgXHVBQ0JEXHVBQ0ZDIFx1QzgwNCA6IFx1Qzc3NFx1QkJGOCBcdUIwQTlcdUJEODBcdUQ1NUMgXHVDNjk0XHVBRTA4XHVDNzU4IDIvM1x1RDU3NFx1QjJGOVx1QzU2MTwvbGk+XG4gICAgICAgICAgPGxpPlx1Q0QxRCBcdUM3OTFcdUM1QzVcdUI3QzlcdUM3NTggMS8yIFx1QUNCRFx1QUNGQyBcdUM4MDQgOiBcdUM3NzRcdUJCRjggXHVCMEE5XHVCRDgwXHVENTVDIFx1QzY5NFx1QUUwOFx1Qzc1OCAxLzJcdUQ1NzRcdUIyRjlcdUM1NjE8L2xpPlxuICAgICAgICAgIDxsaT5cdUNEMUQgXHVDNzkxXHVDNUM1XHVCN0M5XHVDNzU4IDEvMiBcdUFDQkRcdUFDRkMgXHVENkM0IDogXHVCQzE4XHVENjU4XHVENTU4XHVDOUMwIFx1QzU0QVx1Qzc0QzwvbGk+XG4gICAgICAgIDwvdWw+LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHByb3BzID0geyB0aXRsZTogJ1x1Q0RFOFx1QzE4QyBcdUJDMEYgXHVENjU4XHVCRDg4XHVBRERDXHVDODE1XHVDNzQ0IFx1QzU0Q1x1QjgyNFx1QjREQ1x1QjlCNFx1QUM4Q1x1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHNpbmdsZXBhZ2UgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgUmVjb21tZW5kLCBUZWNoLCBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVwYWdlKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCBsaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uc2luZ2xlcGFnZVswXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdJVCBcdUFFMzBcdUM1QzUgXHVCOUM4XHVDRjAwXHVEMzA1IFx1QjJGNFx1QjJGOVx1Qzc5MFx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUI4RjBcdUI4MUIgXHVDNzc0XHVCQ0E0XHVEMkI4IFx1QUU0Q1x1QzlDMCBcdUM3NzhcdUQxMzBcdUI4MDlcdUMxNTggXHVBQzFDXHVCQzFDIFx1RDNFQ1x1RDU2OCBcdUM2OTRcdUFENkNcdUMwQUNcdUQ1NkRcdUM3NDQgXHVDRDVDXHVCMzAwXHVENTVDIFx1QjlERVx1Q0RBNCBcdUM4MUNcdUFDRjUnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uc2luZ2xlcGFnZVsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUMxRkNcdUQ1NTFcdUJBQjAgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzJFMFx1QUREQyBcdUM3MjBcdUM3ODUsIFx1QjlBQ1x1RDE1MFx1QzE1OFx1QjRGMSBcdUI5QzhcdUNGMDBcdUQzMDVcdUM1RDAgXHVENjVDXHVDNkE5XHVENTU4XHVBQ0UwIFx1QzJGNlx1Qzc0MCBcdUFDMDRcdUIyRThcdUQ1NUMgXHVDNzc0XHVCQ0E0XHVEMkI4IFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUFDRjUnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uc2luZ2xlcGFnZVsyXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM3NzhcdUQxNENcdUI5QUNcdUM1QjQgXHVBQzAwXHVBQzhDIFx1QzBBQ1x1QzdBNVx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUMwQUNcdUM1QzVcdUM3NDQgXHVBQzA0XHVCMkU4XHVENTU4XHVBQzhDIFx1QzE4Q1x1QUMxQ1x1RDU1OFx1QUNFMCBcdUM3NzhcdUQxMzBcdUIxMzdcdUM1RDAgXHVENjREXHVCQ0Y0XHVENTYwIFx1QzIxOCBcdUM3ODhcdUIzQzRcdUI4NUQgXHVCNzlDXHVCNTI5IFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUFDRjUnXSxcbiAgICB9LFxuICBdXG4gIGNvbnN0IHRlY2hMaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Q0Q1Q1x1QzJFMCBcdUQxNENcdUQwNkMgXHVEMkI4XHVCOUFDJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdOZXh0SlMvUmVtaXggUmVhY3QgXHVENTA0XHVCODA4XHVDNzg0XHVDNkNDXHVEMDZDLCBOb2RlSlMsIFBvc3RncmVTUUxcdUFFMzBcdUJDMTggXHVDRDVDXHVDMkUwIFx1QUUzMFx1QzIyMFx1Qjg1QyBcdUFDMUNcdUJDMUMgXHVENTY4XHVDNzNDXHVCODVDXHVDMzY4IFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUJDQkNcdUM2QjQgXHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDXHVDODFDXHVBQ0Y1XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnU0VPIFx1QjNDNFx1Qzc4NScsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVBRDZDXHVBRTAwLCBcdUIxMjRcdUM3NzRcdUJDODQgXHVBQzgwXHVDMEM5XHVDNUQ0XHVDOUM0XHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NFx1RDU1OFx1QzVFQyBcdUM3OTFcdUM1QzVcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiBcdUFDODBcdUMwQzlcdUM3NDAgXHVDNUI0XHVCNTE0XHVDNUQwXHVDMTFDXHVCMDk4IFx1QzI3RFx1QUNFMCBcdUJFNjBcdUI5NzRcdUFDRTAgXHVBQzAwXHVDN0E1IFx1QzBDMVx1QzcwNFx1QzVEMCBcdUI3QURcdUQwNkNcdUI0MjAgXHVDMjE4XHVDNzg4XHVCM0M0XHVCODVEIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsyXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVEMzk4XHVDNzc0XHVDOUMwXHVCODVDIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBjb250ZW50czogWydcdUIyRTRcdUM1OTFcdUQ1NUMgUEMgXHVEMDZDXHVCODVDXHVDMkE0LCBcdUJBQThcdUIzNTggXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwLCBcdUJBQThcdUJDMTRcdUM3N0NcdUM1RDBcdUMxMUMgXHVBQzAxXHVBQzAxIFx1RDA2Q1x1QUUzMFx1QzVEMCBcdUNENUNcdUM4MDFcdUQ2NTQgXHVCNDE4XHVCM0M0XHVCODVEIFx1QjlERVx1Q0RBNCBcdUM4MUNcdUM3OTEgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8UmVjb21tZW5kIGxpc3Q9e2xpc3R9IC8+XG4gICAgICA8VGVjaCBsaXN0PXt0ZWNoTGlzdH0gY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnIC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBhcHBkZXNpZ24gYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBkZXNpZ24oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcHJvbW90aW9uLCBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgYnJhbmRpbmcgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmFuZGluZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBJbWFnZSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgaG9tZXBhZ2UgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgUmVjb21tZW5kLCBUZWNoLCBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgbGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmhvbWVwYWdlWzBdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1Qzc3OFx1RDE0Q1x1QjlBQ1x1QzVCNCBcdUFDMDBcdUFDOEMgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QUMwNFx1QjJFOFx1RDc4OCBcdUMwQUNcdUM1QzVcdUM3NDQgXHVDMThDXHVBQzFDXHVENTU4XHVBQ0UwIFx1RDY0RFx1QkNGNFx1RDU1OFx1QUNFMCBcdUMyRjZcdUM3NDAgXHVDMEFDXHVDN0E1XHVCMkQ4XHVCNEU0XHVDNzQ0IFx1QzcwNFx1RDU1QyBcdUM2RjlcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmhvbWVwYWdlWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzkxMVx1QzE4Q1x1QUUzMFx1QzVDNSBcdUIzMDBcdUQ0NUNcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVBRTMwXHVDNUM1XHVDNzQ0IFx1QzE4Q1x1QUMxQ1x1RDU1OFx1QUNFMCBcdUM4MTVcdUJDRjRcdUI5N0MgXHVDODFDXHVBQ0Y1XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1QyBcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5ob21lcGFnZVsyXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUMyRERcdUIyRjkgXHVDMEFDXHVDN0E1XHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzBDOFx1Qjg1Q1x1QzZCNCBcdUFDMDBcdUFDOEMgXHVCNjEwXHVCMjk0IFx1QkM5NVx1Qzc3OFx1Qzc0NCBcdUMyRENcdUM3OTFcdUQ1NThcdUFFMzAgXHVDODA0IFx1QUMwNFx1RDMxMCwgXHVCODVDXHVBQ0UwLCBcdUJBNTRcdUIyNzRcdUQzMTBcdUI0RjFcdUM3NTggXHVCRTBDXHVCNzlDXHVCNTI5IFx1QkUwQ1x1Qjc5Q1x1QjREQyBcdUFDMDBcdUM3NzRcdUI0REMgXHVDMTFDXHVCRTQ0XHVDMkE0XHVCOTdDIFx1QzgxQ1x1QUNGNSddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDRDVDXHVDMkUwIFx1RDE0Q1x1RDA2QyBcdUQyQjhcdUI5QUMnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ05leHRKUy9SZW1peCBSZWFjdCBcdUQ1MDRcdUI4MDhcdUM3ODRcdUM2Q0NcdUQwNkMsIE5vZGVKUywgUG9zdGdyZVNRTFx1QUUzMFx1QkMxOCBcdUNENUNcdUMyRTAgXHVBRTMwXHVDMjIwXHVCODVDIFx1QUMxQ1x1QkMxQyBcdUQ1NjhcdUM3M0NcdUI4NUNcdUMzNjggXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QkNCQ1x1QzZCNCBcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0NcdUM4MUNcdUFDRjVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblsxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdTRU8gXHVCM0M0XHVDNzg1JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUFENkNcdUFFMDAsIFx1QjEyNFx1Qzc3NFx1QkM4NCBcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzRcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0XHVENTU4XHVDNUVDIFx1Qzc5MVx1QzVDNVx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuIFx1QUM4MFx1QzBDOVx1Qzc0MCBcdUM1QjRcdUI1MTRcdUM1RDBcdUMxMUNcdUIwOTggXHVDMjdEXHVBQ0UwIFx1QkU2MFx1Qjk3NFx1QUNFMCBcdUFDMDBcdUM3QTUgXHVDMEMxXHVDNzA0XHVDNUQwIFx1QjdBRFx1RDA2Q1x1QjQyMCBcdUMyMThcdUM3ODhcdUIzQzRcdUI4NUQgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUQzOThcdUM3NzRcdUM5QzBcdUI4NUMgXHVDODFDXHVDNzkxJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjJFNFx1QzU5MVx1RDU1QyBQQyBcdUQwNkNcdUI4NUNcdUMyQTQsIFx1QkFBOFx1QjM1OCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDAsIFx1QkFBOFx1QkMxNFx1Qzc3Q1x1QzVEMFx1QzExQyBcdUFDMDFcdUFDMDEgXHVEMDZDXHVBRTMwXHVDNUQwIFx1Q0Q1Q1x1QzgwMVx1RDY1NCBcdUI0MThcdUIzQzRcdUI4NUQgXHVCOURFXHVDREE0IFx1QzgxQ1x1Qzc5MSBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxSZWNvbW1lbmQgbGlzdD17bGlzdH0gLz5cbiAgICAgIDxUZWNoIGxpc3Q9e3RlY2hMaXN0fSBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZycgLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5pbXBvcnQgeyBUYWJDb250ZXh0VHlwZSB9IGZyb20gJ34vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCBwYXRocyA9IHBhdGhuYW1lID8gcGF0aG5hbWUuc3BsaXQoJy8nKSA6IFtudWxsXVxuICBjb25zdCB0YWJJZCA9IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdXG4gIGNvbnN0IGNvbnRleHQ6IFRhYkNvbnRleHRUeXBlID0geyBwb3N0LCB0YWJJZCB9XG4gIGNvbnN0IG91dGxldCA9IDxPdXRsZXQgY29udGV4dD17Y29udGV4dH0gLz5cbiAgY29uc29sZS5sb2cocGF0aG5hbWUuc3BsaXQoJy8nKSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgICAgc2lkZWJhcixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3Qgey4uLnsgcG9zdCwgb3V0bGV0LCB0YWJJZCB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAidHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwaWN0dXJlOiB7XG4gICAgdXJsPzogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17cGljdHVyZS51cmx9IGNsYXNzTmFtZT0nYXZhdGFyX19waWN0dXJlJyBhbHQ9e25hbWV9IC8+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fbmFtZSc+e25hbWV9PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG50eXBlIERhdGVQcm9wcyA9IHtcbiAgZGF0ZVN0cmluZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfTogRGF0ZVByb3BzKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX08L3RpbWU+XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IFBvc3RzUHJvcHMgfSBmcm9tICd+L3R5cGVzJ1xuXG5leHBvcnQgeyBQb3N0LCBDb250ZW50cyB9IGZyb20gJ34vY29tcG9uZW50cy9Qb3N0cy9Qb3N0J1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdHMoeyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5IH06IFBvc3RzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2ZpcnN0UG9zdCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1wb3N0Jz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LXBvc3QtbGluaydcbiAgICAgICAgICAgICAgICB0bz17YC8ke2NhdGVnb3J5IHx8IGZpcnN0UG9zdC5jYXRlZ29yeT8ubmFtZT8udG9Mb3dlckNhc2UoKSB8fCAncG9zdHMnfS8ke2ZpcnN0UG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC10aHVtYic+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdieC10aHVtYm5haWwnIGRhdGE9e2ZpcnN0UG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1pbmZvJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LW1ldGEnPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57Zmlyc3RQb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWRlc2MnPntmaXJzdFBvc3QuZXhjZXJwdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGVzYyBieC1wb3N0LWRhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2ZpcnN0UG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtYXZhdGFyJz5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtmaXJzdFBvc3QuYXV0aG9yLm5hbWV9IHBpY3R1cmU9e2ZpcnN0UG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYngtaHInIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtvdGhlclBvc3RzICYmICEhb3RoZXJQb3N0cy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge290aGVyUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYngtcG9zdCBieC1vdGhlci1wb3N0JyBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtcG9zdC1saW5rJ1xuICAgICAgICAgICAgICAgICAgdG89e2AvJHtjYXRlZ29yeSB8fCBwb3N0LmNhdGVnb3J5Py5uYW1lPy50b0xvd2VyQ2FzZSgpIHx8ICdwb3N0cyd9LyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtdGh1bWInPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdieC10aHVtYm5haWwnIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1tZXRhJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57cG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWRlc2MnPntwb3N0LmV4Y2VycHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGVzYyBieC1wb3N0LWRhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFN0cnVjdHVyZWRUZXh0LCBJbWFnZSB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBQb3N0IGFzIFBvc3RUeXBlIH0gZnJvbSAnfi90eXBlcydcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZSxcbiAgbW9yZVBvc3RzPzogUG9zdFR5cGVbXSxcbiAgY2F0ZWdvcnlJZD86IHN0cmluZyxcbiAgdGFiSWQ/OiBzdHJpbmcgfCBudWxsLFxuICBvdXRsZXQ/OiBhbnksXG59XG5cbnR5cGUgQ29udGVudHNQcm9wcyA9IHtcbiAgZGF0YTogYW55LFxuICBjaGlsZHJlbj86IGFueSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRlbnRzKHsgZGF0YSB9OiBDb250ZW50c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb3NlLXNtIHByb3NlLXNsYXRlIGRhcms6cHJvc2UtaW52ZXJ0Jz5cbiAgICAgIHshIWRhdGEgJiYgKFxuICAgICAgICA8U3RydWN0dXJlZFRleHRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHJlbmRlckJsb2NrPXsoeyByZWNvcmQgfTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLl9fdHlwZW5hbWUgPT09ICdJbWFnZUJsb2NrUmVjb3JkJykge1xuICAgICAgICAgICAgICByZXR1cm4gPEltYWdlIGNsYXNzTmFtZT0nYngtYXJ0aWNsZS1pbWFnZScgZGF0YT17cmVjb3JkLmltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cD5Eb24ndCBrbm93IGhvdyB0byByZW5kZXIgYSBibG9jayE8L3A+XG4gICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocmVjb3JkLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IC8qICwgbW9yZVBvc3RzICAqLywgb3V0bGV0LCB0YWJJZCB9OiBQb3N0UHJvcHMpIHtcbiAgY29uc29sZS5sb2codGFiSWQsIHBvc3QpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1hcnRpY2xlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWFydGljbGUtaGVhZGVyJz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC10YWJzJz5cbiAgICAgICAgICAgIHshIXBvc3QudGFiaG9tZXRleHQgJiYgKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LnRhYmhvbWV0ZXh0fSBjbGFzc05hbWU9e3RhYklkID09PSBwb3N0LnNsdWcgPyAnYngtdGFiLWFjdGl2ZScgOiAnJ30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtwb3N0LmNhdGVnb3J5Py5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCl9LyR7cG9zdC5zbHVnfWB9Pntwb3N0LnRhYmhvbWV0ZXh0fTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cG9zdC50YWJzICYmXG4gICAgICAgICAgICAgIHBvc3QudGFicy5tYXAodGFiID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt0YWIudGFiaWR9IGNsYXNzTmFtZT17dGFiSWQgPT09IHRhYi50YWJpZCA/ICdieC10YWItYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7cG9zdC5jYXRlZ29yeT8ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfS8ke3Bvc3Quc2x1Z30vJHt0YWIudGFiaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIHt0YWIudGFibmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWFydGljbGUtYm9keSc+e3RhYklkID09PSBwb3N0LnNsdWcgPyA8Q29udGVudHMgZGF0YT17cG9zdC5jb250ZW50fSAvPiA6IG91dGxldH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWFydGljbGUtZm9vdGVyJz5cbiAgICAgICAgICB7cG9zdC50YWdzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC10YWdzJz5cbiAgICAgICAgICAgICAge3Bvc3QudGFncy5zcGxpdCgnLCcpLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYngtdGFnJyBrZXk9e3RhZy50cmltKCl9IHRvPXtgL3Bvc3RzLyR7dGFnLnRyaW0oKX1gfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uLlRhZ0xpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dGFnLnRyaW0oKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fX3RpdGxlJz5Nb3JlIHBvc3RzPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQnPlxuICAgICAgICAgIHttb3JlUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30gY2xhc3NOYW1lPSdncmlkX19pdGVtJz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPSdncmlkX19saW5rJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nZ3JpZF9faW1hZ2UnIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2dyaWRfX3RpdGxlJz57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RhdGUnPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEsIHVzZU91dGxldENvbnRleHQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IENvbnRlbnRzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuaW1wb3J0IHsgVGFiQ29udGV4dFR5cGUgfSBmcm9tICd+L3R5cGVzJ1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHRhYj86IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHRhYjogcGFyYW1zLnRhYixcbiAgfVxuICByZXR1cm4ganNvbihkYXRhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGFiKCkge1xuICBjb25zdCB7IHRhYiB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIGNvbnN0IHsgcG9zdCB9ID0gdXNlT3V0bGV0Q29udGV4dDxUYWJDb250ZXh0VHlwZT4oKVxuICBjb25zdCBkYXRhID0gcG9zdC50YWJzID8gcG9zdC50YWJzLmZpbmQodCA9PiB0LnRhYmlkID09PSB0YWIpPy50YWJjb250ZW50cyA6IG51bGxcbiAgcmV0dXJuIDxDb250ZW50cyBkYXRhPXtkYXRhfSAvPlxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBub3RpY2UgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICB7Zmlyc3RQb3N0ICYmIDxQb3N0cyB7Li4ueyBmaXJzdFBvc3QsIG90aGVyUG9zdHMsIGNhdGVnb3J5OiAnbm90aWNlcycgfX0gLz59XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICBzZXNzaW9uLnNldCgncHJldmlldycsICd5ZXMnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9ucyc+Xl48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHNlc3Npb24udW5zZXQoJ3ByZXZpZXcnKVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuaW1wb3J0IHsgVGFiQ29udGV4dFR5cGUgfSBmcm9tICd+L3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0IH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgcGF0aHMgPSBwYXRobmFtZSA/IHBhdGhuYW1lLnNwbGl0KCcvJykgOiBbbnVsbF1cbiAgY29uc3QgdGFiSWQgPSBwYXRoc1twYXRocy5sZW5ndGggLSAxXVxuICBjb25zdCBjb250ZXh0OiBUYWJDb250ZXh0VHlwZSA9IHsgcG9zdCwgdGFiSWQgfVxuICBjb25zdCBvdXRsZXQgPSA8T3V0bGV0IGNvbnRleHQ9e2NvbnRleHR9IC8+XG4gIGNvbnNvbGUubG9nKHBhdGhuYW1lLnNwbGl0KCcvJykpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICAgIHNpZGViYXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHsuLi57IHBvc3QsIG91dGxldCwgdGFiSWQgfX0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEsIHVzZU91dGxldENvbnRleHQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IENvbnRlbnRzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuaW1wb3J0IHsgVGFiQ29udGV4dFR5cGUgfSBmcm9tICd+L3R5cGVzJ1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHRhYj86IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHRhYjogcGFyYW1zLnRhYixcbiAgfVxuICByZXR1cm4ganNvbihkYXRhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGFiKCkge1xuICBjb25zdCB7IHRhYiB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIGNvbnN0IHsgcG9zdCB9ID0gdXNlT3V0bGV0Q29udGV4dDxUYWJDb250ZXh0VHlwZT4oKVxuICBjb25zdCBkYXRhID0gcG9zdC50YWJzID8gcG9zdC50YWJzLmZpbmQodCA9PiB0LnRhYmlkID09PSB0YWIpPy50YWJjb250ZW50cyA6IG51bGxcbiAgcmV0dXJuIDxDb250ZW50cyBkYXRhPXtkYXRhfSAvPlxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBuZXdzIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnlTdWJzY3JpcHRpb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAge2ZpcnN0UG9zdCAmJiA8UG9zdHMgey4uLnsgZmlyc3RQb3N0LCBvdGhlclBvc3RzLCBjYXRlZ29yeTogJ25ld3MnIH19IC8+fVxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3RzIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB0YWc6IHBhcmFtcy50YWcsXG4gICAgfSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICBjb25zdCB0YWcgPSBkZWNvZGVVUkkocGF0aG5hbWUuc3BsaXQoJy9wb3N0cy8nKVsxXSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlOiB0YWcsIEljb246IDxJY29uLlRhZ3MgLz4sIGRlc2M6ICdcdUFEMDBcdUI4MjhcdUFFMDAgXHVCQUE5XHVCODVEJywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb25zJz5cbiAgICAgICAgPFBvc3RzIHsuLi57IGZpcnN0UG9zdCwgb3RoZXJQb3N0cyB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBhZ2Utcm93Jz48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBMb3R0aWUgZnJvbSAnbG90dGllLXJlYWN0J1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgaGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbCwgaGFuZGxlQ2xpY2tBZGRDaGFubmVsIH0gZnJvbSAnfi9saWIva2FrYW8nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ2JvbHQtdWknXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCBjb3dib3lIYXRGYWNlIGZyb20gJ34vbG90dGllcy9jb3dib3ktaGF0LWZhY2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBhZ2Utcm93IHBiLTIwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCBwdC0yMCc+XG4gICAgICAgICAgICA8TG90dGllIGxvb3AgYXV0b3BsYXkgYW5pbWF0aW9uRGF0YT17Y293Ym95SGF0RmFjZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGIgY2xhc3NOYW1lPSd0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBmb250LXRoaW4gbWItNSB0ZXh0LXNsYXRlLTYwMCBob3Zlcjp0ZXh0LXNsYXRlLTgwMCBkYXJrOnRleHQtc2xhdGUtMjAwIGRhcms6aG92ZXI6dGV4dC1zbGF0ZS0yMDAnPlxuICAgICAgICAgICAgICBcdUNDNDRcdUQzMDUgXHVCQjM4XHVDNzU4XG4gICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gbWQ6dGV4dC1iYXNlIG9wYWNpdHktODAnPlx1RDNDOVx1Qzc3QyAxMDowMCAtIDE4OjAwPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhzIG1kOnRleHQtc20gb3BhY2l0eS01MCc+KFx1QzgxMFx1QzJFQ1x1QzJEQ1x1QUMwNCAxMzowMCAtIDE0OjAwIFx1QzgxQ1x1QzY3OCBcdTAwQjcgXHVDOEZDXHVCOUQwL1x1QUNGNVx1RDczNFx1Qzc3QyBcdUM4MUNcdUM2NzgpPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC0yJz5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxJY29ucy5LYWthbyAvPn0gb25DbGljaz17aGFuZGxlQ2xpY2tBZGRDaGFubmVsfT5cbiAgICAgICAgICAgICAgICBcdUNDNDRcdUIxMTAgXHVDRDk0XHVBQzAwXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxJY29ucy5LYWthbyAvPn0gb25DbGljaz17aGFuZGxlQ2xpY2tDaGF0Q2hhbm5lbH0+XG4gICAgICAgICAgICAgICAgXHVDRTc0XHVEMUExIFx1Q0M0NFx1RDMwNVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUsIGlzV2lkZTogdHJ1ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wcml2YWN5IHByb3NlLXNtIHByb3NlLXNsYXRlIGRhcms6cHJvc2UtaW52ZXJ0Jz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczIgbGg2IGJzNSB0czQnPlxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDsoJ2h0dHBzOi8vd3d3LmJvbHQtdXguY29tJ1x1Qzc3NFx1RDU1OCAnQk9MVC1VWCcpPC9lbT5cdUM3NDAoXHVCMjk0KSBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcbiAgICAgICAgICBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMzBcdUM4NzBcdUM1RDAgXHVCNTMwXHVCNzdDIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVCQ0Y0XHVENjM4XHVENTU4XHVBQ0UwIFx1Qzc3NFx1QzY0MCBcdUFEMDBcdUI4MjhcdUQ1NUMgXHVBQ0UwXHVDREE5XHVDNzQ0IFx1QzJFMFx1QzE4RFx1RDU1OFx1QUNFMCBcdUM2RDBcdUQ2NUNcdUQ1NThcdUFDOEMgXHVDQzk4XHVCOUFDXHVENTYwIFx1QzIxOCBcdUM3ODhcdUIzQzRcdUI4NURcbiAgICAgICAgICBcdUQ1NThcdUFFMzAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUM3NzQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0NCBcdUMyMThcdUI5QkRcdTAwQjdcdUFDRjVcdUFDMUNcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIFx1MjVDQiBcdUM3NzQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4yMDIyPC9lbT5cdUIxNDQgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjM8L2VtPlx1QzZENHsnICd9XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPjE3PC9lbT5cdUJEODBcdUQxMzAgXHVDODAxXHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDMVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDQzk4XHVCOUFDIFx1QkFBOVx1QzgwMSk8L3N0cm9uZz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7KCdodHRwczovL3d3dy5ib2x0LXV4LmNvbSdcdUM3NzRcdUQ1NTggJ0JPTFQtVVgnKTwvZW0+XHVDNzQwKFx1QjI5NCkgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QkFBOVx1QzgwMVx1Qzc0NFxuICAgICAgICAgIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDQzk4XHVCOUFDXHVENTY5XHVCMkM4XHVCMkU0LiBcdUNDOThcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QjI5NCBcdUIyRTRcdUM3NENcdUM3NTggXHVCQUE5XHVDODAxIFx1Qzc3NFx1QzY3OFx1Qzc1OCBcdUM2QTlcdUIzQzRcdUI4NUNcdUIyOTQgXHVDNzc0XHVDNkE5XHVCNDE4XHVDOUMwIFx1QzU0QVx1QzczQ1x1QkE3MCBcdUM3NzRcdUM2QTkgXHVCQUE5XHVDODAxXHVDNzc0XG4gICAgICAgICAgXHVCQ0MwXHVBQ0JEXHVCNDE4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzE4XHVDODcwXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUJDQzRcdUIzQzRcdUM3NTggXHVCM0Q5XHVDNzU4XHVCOTdDIFx1QkMxQlx1QjI5NCBcdUI0RjEgXHVENTQ0XHVDNjk0XHVENTVDIFx1Qzg3MFx1Q0U1OFx1Qjk3QyBcdUM3NzRcdUQ1ODlcdUQ1NjAgXHVDNjA4XHVDODE1XHVDNzg1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPjEuIFx1QzdBQ1x1RDY1NCBcdUI2MTBcdUIyOTQgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSwgXHVDRjU4XHVEMTUwXHVDRTIwIFx1QzgxQ1x1QUNGNSwgXHVCOURFXHVDREE0XHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNVx1Qzc0NCBcdUJBQTlcdUM4MDFcdUM3M0NcdUI4NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU2OVx1QjJDOFx1QjJFNC48L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPjIuIFx1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgICBcdUM3NzhcdUFENkNcdUQxQjVcdUFDQzRcdUQ1NTlcdUM4MDEgXHVEMkI5XHVDMTMxXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUMxMUNcdUJFNDRcdUMyQTQgXHVDODFDXHVBQ0Y1IFx1QkMwRiBcdUFEMTFcdUFDRTAgXHVBQzhDXHVDN0FDICwgXHVDMTFDXHVCRTQ0XHVDMkE0XHVDNzU4IFx1QzcyMFx1RDZBOFx1QzEzMSBcdUQ2NTVcdUM3NzgsIFx1QzgxMVx1QzE4RFx1QkU0OFx1QjNDNCBcdUQzMENcdUM1NDUgXHVCNjEwXHVCMjk0IFx1RDY4Q1x1QzZEMFx1Qzc1OCBcdUMxMUNcdUJFNDRcdUMyQTRcbiAgICAgICAgICAgIFx1Qzc3NFx1QzZBOVx1QzVEMCBcdUIzMDBcdUQ1NUMgXHVEMUI1XHVBQ0M0IFx1QjRGMVx1Qzc0NCBcdUJBQTlcdUM4MDFcdUM3M0NcdUI4NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzJcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQyBcdUJDMEYgXHVCQ0Y0XHVDNzIwIFx1QUUzMFx1QUMwNCk8L3N0cm9uZz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OzwvZW0+XHVDNzQwKFx1QjI5NCkgXHVCQzk1XHVCODM5XHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHUwMEI3XHVDNzc0XHVDNkE5XHVBRTMwXHVBQzA0IFx1QjYxMFx1QjI5NFxuICAgICAgICAgIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDMjE4XHVDOUQxIFx1QzJEQ1x1QzVEMCBcdUIzRDlcdUM3NThcdUJDMUJcdUM3NDAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1MDBCN1x1Qzc3NFx1QzZBOVx1QUUzMFx1QUMwNCBcdUIwQjRcdUM1RDBcdUMxMUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1MDBCN1x1QkNGNFx1QzcyMFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjEgXHVBQzAxXHVBQzAxXHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUMgXHVCQzBGIFx1QkNGNFx1QzcyMCBcdUFFMzBcdUFDMDRcdUM3NDAgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz4xLiZsdDtcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTkmZ3Q7PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XG4gICAgICAgICAgICAmbHQ7XHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5Jmd0O1x1QzY0MCBcdUFEMDBcdUI4MjhcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCMjk0IFx1QzIxOFx1QzlEMS5cdUM3NzRcdUM2QTlcdUM1RDAgXHVBRDAwXHVENTVDIFx1QjNEOVx1Qzc1OFx1Qzc3Q1x1Qjg1Q1x1QkQ4MFx1RDEzMCZsdDtcdUM5QzBcdUNDQjRcdUM1QzZcdUM3NzQgXHVEMzBDXHVBRTMwJmd0O1x1QUU0Q1x1QzlDMFxuICAgICAgICAgICAgXHVDNzA0IFx1Qzc3NFx1QzZBOVx1QkFBOVx1QzgwMVx1Qzc0NCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDNzIwLlx1Qzc3NFx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cdUJDRjRcdUM3MjBcdUFERkNcdUFDNzAgOiBcdUFEMTFcdUFDRTA8L2xpPlxuICAgICAgICAgIDxsaT5cdUFEMDBcdUI4MjhcdUJDOTVcdUI4MzkgOiBcdUQ0NUNcdUMyREMvXHVBRDExXHVBQ0UwXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUFFMzBcdUI4NUQgOiA2XHVBQzFDXHVDNkQ0PC9saT5cbiAgICAgICAgICA8bGk+XHVDNjA4XHVDNjc4XHVDMEFDXHVDNzIwIDogPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDM1x1Qzg3MChcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM2NDAgXHVCQzk1XHVDODE1XHVCMzAwXHVCOUFDXHVDNzc4XHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1MDBCN1x1Qzc1OFx1QkIzNCBcdUJDMEYgXHVBREY4IFx1RDU4OVx1QzBBQ1x1QkMyOVx1QkM5NSk8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QjI5NCAmbHQ7Qk9MVC1VWCZndDtcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzVCOFx1QzgxQ1x1QjRFMFx1QzlDMCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHUwMEI3XHVDODE1XHVDODE1XHUwMEI3XHVDMEFEXHVDODFDXHUwMEI3XHVDQzk4XHVCOUFDXHVDODE1XHVDOUMwIFx1QzY5NFx1QUQ2QyBcdUI0RjFcdUM3NTggXHVBRDhDXHVCOUFDXHVCOTdDIFx1RDU4OVx1QzBBQ1x1RDU2MCBcdUMyMThcbiAgICAgICAgICBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDYxIFx1QzgxQzFcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUQ4Q1x1QjlBQyBcdUQ1ODlcdUMwQUNcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7XHVDNUQwIFx1QjMwMFx1RDU3NCBcdTMwMENcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzJEQ1x1RDU4OVx1QjgzOSBcdUM4MUM0MVx1Qzg3MFx1QzgxQzFcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCNzdDIFx1QzExQ1x1QkE3NCxcbiAgICAgICAgICBcdUM4MDRcdUM3OTBcdUM2QjBcdUQzQjgsIFx1QkFBOFx1QzBBQ1x1QzgwNFx1QzFBMShGQVgpIFx1QjRGMVx1Qzc0NCBcdUQxQjVcdUQ1NThcdUM1RUMgXHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUM3M0NcdUJBNzAgJmx0O0JPTFQtVVgmZ3Q7XHVDNzQwKFx1QjI5NCkgXHVDNzc0XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM5QzBcdUNDQjQgXHVDNUM2XHVDNzc0IFx1Qzg3MFx1Q0U1OFx1RDU1OFx1QUNBMFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjIgXHVDODFDMVx1RDU2RFx1QzVEMCBcdUI1MzBcdUI5NzggXHVBRDhDXHVCOUFDIFx1RDU4OVx1QzBBQ1x1QjI5NCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVCQzk1XHVDODE1XHVCMzAwXHVCOUFDXHVDNzc4XHVDNzc0XHVCMDk4IFx1QzcwNFx1Qzc4NFx1Qzc0NCBcdUJDMUJcdUM3NDAgXHVDNzkwIFx1QjRGMSBcdUIzMDBcdUI5QUNcdUM3NzhcdUM3NDQgXHVEMUI1XHVENTU4XHVDNUVDIFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0Llx1Qzc3NFxuICAgICAgICAgIFx1QUNCRFx1QzZCMCBcdTIwMUNcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDIFx1QkMyOVx1QkM5NVx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVBQ0UwXHVDMkRDKFx1QzgxQzIwMjAtN1x1RDYzOClcdTIwMUQgXHVCQ0M0XHVDOUMwIFx1QzgxQzExXHVENjM4IFx1QzExQ1x1QzJERFx1QzVEMCBcdUI1MzBcdUI5NzggXHVDNzA0XHVDNzg0XHVDN0E1XHVDNzQ0IFx1QzgxQ1x1Q0Q5Q1x1RDU1OFx1QzE1NFx1QzU3QyBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDYzIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OEMgXHVCQzBGIFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUM2OTRcdUFENkNcdUIyOTQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMzNVx1Qzg3MCBcdUM4MUM0XHVENTZELCBcdUM4MUMzN1x1Qzg3MCBcdUM4MUMyXHVENTZEXHVDNUQwIFx1Qzc1OFx1RDU1OFx1QzVFQyBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVBRDhDXHVCOUFDXHVBQzAwXG4gICAgICAgICAgXHVDODFDXHVENTVDIFx1QjQyMCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDODE1XHVDODE1IFx1QkMwRiBcdUMwQURcdUM4MUMgXHVDNjk0XHVBRDZDXHVCMjk0IFx1QjJFNFx1Qjk3OCBcdUJDOTVcdUI4MzlcdUM1RDBcdUMxMUMgXHVBREY4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QUMwMCBcdUMyMThcdUM5RDEgXHVCMzAwXHVDMEMxXHVDNzNDXHVCODVDIFx1QkE4NVx1QzJEQ1x1QjQxOFx1QzVCNCBcdUM3ODhcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IFx1QURGOCBcdUMwQURcdUM4MUNcdUI5N0NcbiAgICAgICAgICBcdUM2OTRcdUFENkNcdUQ1NjAgXHVDMjE4IFx1QzVDNlx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjUgJmx0O0JPTFQtVVgmZ3Q7XHVDNzQwKFx1QjI5NCkgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0IFx1QUQ4Q1x1QjlBQ1x1QzVEMCBcdUI1MzBcdUI5NzggXHVDNUY0XHVCNzhDXHVDNzU4IFx1QzY5NFx1QUQ2QywgXHVDODE1XHVDODE1XHUwMEI3XHVDMEFEXHVDODFDXHVDNzU4IFx1QzY5NFx1QUQ2QywgXHVDQzk4XHVCOUFDXHVDODE1XHVDOUMwXHVDNzU4IFx1QzY5NFx1QUQ2QyBcdUMyREMgXHVDNUY0XHVCNzhDIFx1QjRGMSBcdUM2OTRcdUFENkNcdUI5N0NcbiAgICAgICAgICBcdUQ1NUMgXHVDNzkwXHVBQzAwIFx1QkNGOFx1Qzc3OFx1Qzc3NFx1QUM3MFx1QjA5OCBcdUM4MTVcdUIyRjlcdUQ1NUMgXHVCMzAwXHVCOUFDXHVDNzc4XHVDNzc4XHVDOUMwXHVCOTdDIFx1RDY1NVx1Qzc3OFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUM0XHVDODcwKFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVENTZEXHVCQUE5IFx1Qzc5MVx1QzEzMSkgPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+IFx1MjQ2MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7PC9lbT5cdUM3NDAoXHVCMjk0KSBcdUIyRTRcdUM3NENcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDU2RFx1QkFBOVx1Qzc0NCBcdUNDOThcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPjEmbHQ7IFx1QzdBQ1x1RDY1NCBcdUI2MTBcdUIyOTQgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSAmZ3Q7PC9saT5cbiAgICAgICAgICA8bGk+XHVENTQ0XHVDMjE4XHVENTZEXHVCQUE5IDogXHVDMTFDXHVCRTQ0XHVDMkE0IFx1Qzc3NFx1QzZBOSBcdUFFMzBcdUI4NUQsIFx1QzgxMVx1QzE4RCBcdUI4NUNcdUFERjgsIFx1Q0ZFMFx1RDBBNDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzEyMFx1RDBERFx1RDU2RFx1QkFBOSA6IFx1QzgxMVx1QzE4RCBJUCBcdUM4MTVcdUJDRjQ8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUM1XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUQzMENcdUFFMzApPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCAmbHQ7IEJMVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1QUUzMFx1QUMwNFx1Qzc1OCBcdUFDQkRcdUFDRkMsIFx1Q0M5OFx1QjlBQ1x1QkFBOVx1QzgwMSBcdUIyRUNcdUMxMzEgXHVCNEYxIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QUMwMCBcdUJEODhcdUQ1NDRcdUM2OTRcdUQ1NThcdUFDOEMgXHVCNDE4XHVDNUM4XHVDNzQ0IFx1QjU0Q1x1QzVEMFx1QjI5NFxuICAgICAgICAgIFx1QzlDMFx1Q0NCNFx1QzVDNlx1Qzc3NCBcdUQ1NzRcdUIyRjkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1RDMwQ1x1QUUzMFx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjEgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCODVDXHVCRDgwXHVEMTMwIFx1QjNEOVx1Qzc1OFx1QkMxQlx1Qzc0MCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVDNzIwXHVBRTMwXHVBQzA0XHVDNzc0IFx1QUNCRFx1QUNGQ1x1RDU1OFx1QUM3MFx1QjA5OCBcdUNDOThcdUI5QUNcdUJBQTlcdUM4MDFcdUM3NzQgXHVCMkVDXHVDMTMxXHVCNDE4XHVDNUM4XHVDNzRDXHVDNUQwXHVCM0M0IFx1QkQ4OFx1QUQ2Q1x1RDU1OFx1QUNFMCBcdUIyRTRcdUI5NzggXHVCQzk1XHVCODM5XHVDNUQwXG4gICAgICAgICAgXHVCNTMwXHVCNzdDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUFDQzRcdUMxOEQgXHVCQ0Y0XHVDODc0XHVENTU4XHVDNUVDXHVDNTdDIFx1RDU1OFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQsIFx1RDU3NFx1QjJGOSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVCQ0M0XHVCM0M0XHVDNzU4IFx1QjM3MFx1Qzc3NFx1RDEzMFx1QkNBMFx1Qzc3NFx1QzJBNChEQilcdUI4NUMgXHVDNjJFXHVBRTMwXHVBQzcwXHVCMDk4IFx1QkNGNFx1QUQwMFx1QzdBNVx1QzE4Q1x1Qjk3Q1xuICAgICAgICAgIFx1QjJFQ1x1QjlBQ1x1RDU1OFx1QzVFQyBcdUJDRjRcdUM4NzRcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMS4gXHVCQzk1XHVCODM5IFx1QURGQ1x1QUM3MCA6PGJyIC8+XG4gICAgICAgICAgMi4gXHVCQ0Y0XHVDODc0XHVENTU4XHVCMjk0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQ1NkRcdUJBQTkgOiBcdUFDQzRcdUM4OENcdUM4MTVcdUJDRjQsIFx1QUM3MFx1Qjc5OFx1QjBBMFx1QzlEQ1xuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVEMzBDXHVBRTMwXHVDNzU4IFx1QzgwOFx1Q0MyOCBcdUJDMEYgXHVCQzI5XHVCQzk1XHVDNzQwIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMS4gXHVEMzBDXHVBRTMwXHVDODA4XHVDQzI4XG4gICAgICAgICAgPGJyIC8+ICZsdDsgQkxULVVYJmd0OyBcdUM3NDAoXHVCMjk0KSBcdUQzMENcdUFFMzAgXHVDMEFDXHVDNzIwXHVBQzAwIFx1QkMxQ1x1QzBERFx1RDU1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDMTIwXHVDODE1XHVENTU4XHVBQ0UwLCAmbHQ7IEJMVC1VWCZndDsgXHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTBcdUM3NThcbiAgICAgICAgICBcdUMyQjlcdUM3NzhcdUM3NDQgXHVCQzFCXHVDNTQ0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUQzMENcdUFFMzBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+Mi4gXHVEMzBDXHVBRTMwXHVCQzI5XHVCQzk1PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdUM4MDRcdUM3OTBcdUM4MDEgXHVEMzBDXHVDNzdDIFx1RDYxNVx1RDBEQ1x1Qzc1OCBcdUM4MTVcdUJDRjRcdUIyOTQgXHVBRTMwXHVCODVEXHVDNzQ0IFx1QzdBQ1x1QzBERFx1RDU2MCBcdUMyMTggXHVDNUM2XHVCMjk0IFx1QUUzMFx1QzIyMFx1QzgwMSBcdUJDMjlcdUJDOTVcdUM3NDQgXHVDMEFDXHVDNkE5XHVENTY5XHVCMkM4XHVCMkU0PC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIFx1QzgxQzZcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzU0OFx1QzgwNFx1QzEzMSBcdUQ2NTVcdUJDRjQgXHVDODcwXHVDRTU4KVxuICAgICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICZsdDsgQkxULVVYJmd0O1xuICAgICAgICAgICAgPC9lbT5cbiAgICAgICAgICAgIFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1NDhcdUM4MDRcdUMxMzEgXHVENjU1XHVCQ0Y0XHVCOTdDIFx1QzcwNFx1RDU3NCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDNzQwIFx1Qzg3MFx1Q0U1OFx1Qjk3QyBcdUNERThcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPlxuICAgICAgICAgIDEuIFx1QzgxNVx1QUUzMFx1QzgwMVx1Qzc3OCBcdUM3OTBcdUNDQjQgXHVBQzEwXHVDMEFDIFx1QzJFNFx1QzJEQ1xuICAgICAgICAgIDxiciAvPiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDREU4XHVBRTA5IFx1QUQwMFx1QjgyOCBcdUM1NDhcdUM4MTVcdUMxMzEgXHVENjU1XHVCQ0Y0XHVCOTdDIFx1QzcwNFx1RDU3NCBcdUM4MTVcdUFFMzBcdUM4MDEoXHVCRDg0XHVBRTMwIDFcdUQ2OEMpXHVDNzNDXHVCODVDIFx1Qzc5MFx1Q0NCNCBcdUFDMTBcdUMwQUNcdUI5N0MgXHVDMkU0XHVDMkRDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAyLiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDREU4XHVBRTA5IFx1QzlDMVx1QzZEMFx1Qzc1OCBcdUNENUNcdUMxOENcdUQ2NTQgXHVCQzBGIFx1QUQ1MFx1QzcyMVxuICAgICAgICAgIDxiciAvPiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDREU4XHVBRTA5XHVENTU4XHVCMjk0IFx1QzlDMVx1QzZEMFx1Qzc0NCBcdUM5QzBcdUM4MTVcdUQ1NThcdUFDRTAgXHVCMkY0XHVCMkY5XHVDNzkwXHVDNUQwIFx1RDU1Q1x1QzgxNVx1QzJEQ1x1Q0YxQyBcdUNENUNcdUMxOENcdUQ2NTQgXHVENTU4XHVDNUVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUFEMDBcdUI5QUNcdUQ1NThcdUIyOTQgXHVCMzAwXHVDQzQ1XHVDNzQ0IFx1QzJEQ1x1RDU4OVx1RDU1OFx1QUNFMFxuICAgICAgICAgIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAzLiBcdUQ1NzRcdUQwQjkgXHVCNEYxXHVDNUQwIFx1QjMwMFx1QkU0NFx1RDU1QyBcdUFFMzBcdUMyMjBcdUM4MDEgXHVCMzAwXHVDQzQ1XG4gICAgICAgICAgPGJyIC8+ICZsdDs8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Qk9MVC1VWDwvZW0+Jmd0OygnPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPkJPTFQtVVg8L2VtPicpXHVDNzQwIFx1RDU3NFx1RDBCOVx1Qzc3NFx1QjA5OFxuICAgICAgICAgIFx1Q0VGNFx1RDRFOFx1RDEzMCBcdUJDMTRcdUM3NzRcdUI3RUNcdUMyQTQgXHVCNEYxXHVDNUQwIFx1Qzc1OFx1RDU1QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNzIwXHVDRDlDIFx1QkMwRiBcdUQ2RkNcdUMxOTBcdUM3NDQgXHVCOUM5XHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUJDRjRcdUM1NDhcdUQ1MDRcdUI4NUNcdUFERjhcdUI3QThcdUM3NDQgXHVDMTI0XHVDRTU4XHVENTU4XHVBQ0UwIFx1QzhGQ1x1QUUzMFx1QzgwMVx1Qzc3OCBcdUFDMzFcdUMyRTBcdTAwQjdcdUM4MTBcdUFDODBcdUM3NDRcbiAgICAgICAgICBcdUQ1NThcdUJBNzAgXHVDNjc4XHVCRDgwXHVCODVDXHVCRDgwXHVEMTMwIFx1QzgxMVx1QURGQ1x1Qzc3NCBcdUQxQjVcdUM4MUNcdUI0MUMgXHVBRDZDXHVDNUVEXHVDNUQwIFx1QzJEQ1x1QzJBNFx1RDE1Q1x1Qzc0NCBcdUMxMjRcdUNFNThcdUQ1NThcdUFDRTAgXHVBRTMwXHVDMjIwXHVDODAxL1x1QkIzQ1x1QjlBQ1x1QzgwMVx1QzczQ1x1Qjg1QyBcdUFDMTBcdUMyREMgXHVCQzBGIFx1Q0MyOFx1QjJFOFx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgNC4gXHVDODExXHVDMThEXHVBRTMwXHVCODVEXHVDNzU4IFx1QkNGNFx1QUQwMCBcdUJDMEYgXHVDNzA0XHVCQ0MwXHVDODcwIFx1QkMyOVx1QzlDMFxuICAgICAgICAgIDxiciAvPiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNDOThcdUI5QUNcdUMyRENcdUMyQTRcdUQxNUNcdUM1RDAgXHVDODExXHVDMThEXHVENTVDIFx1QUUzMFx1Qjg1RFx1Qzc0NCBcdUNENUNcdUMxOEMgMVx1QjE0NCBcdUM3NzRcdUMwQzEgXHVCQ0Y0XHVBRDAwLCBcdUFEMDBcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVDNzNDXHVCQTcwLFx1QjJFNFx1QjlDQywgNVx1QjlDQ1x1QkE4NSBcdUM3NzRcdUMwQzFcdUM3NTggXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNUQwXG4gICAgICAgICAgXHVBRDAwXHVENTU4XHVDNUVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNEOTRcdUFDMDBcdUQ1NThcdUFDNzBcdUIwOTgsIFx1QUNFMFx1QzcyMFx1QzJERFx1QkNDNFx1QzgxNVx1QkNGNCBcdUI2MTBcdUIyOTQgXHVCQkZDXHVBQzEwXHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU1OFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgMlx1QjE0NFx1Qzc3NFx1QzBDMSBcdUJDRjRcdUFEMDAsIFx1QUQwMFx1QjlBQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVCNjEwXHVENTVDLCBcdUM4MTFcdUMxOERcdUFFMzBcdUI4NURcdUM3NzQgXHVDNzA0XHVCQ0MwXHVDODcwIFx1QkMwRiBcdUIzQzRcdUIwOUMsIFx1QkQ4NFx1QzJFNFx1QjQxOFx1QzlDMCBcdUM1NEFcdUIzQzRcdUI4NUQgXHVCQ0Y0XHVDNTQ4XHVBRTMwXHVCMkE1XHVDNzQ0IFx1QzBBQ1x1QzZBOVx1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDN1x1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNzkwXHVCM0Q5IFx1QzIxOFx1QzlEMSBcdUM3QTVcdUNFNThcdUM3NTggXHVDMTI0XHVDRTU4XHUyMDIyXHVDNkI0XHVDNjAxIFx1QkMwRiBcdUFDNzBcdUJEODBcdUM1RDAgXHVBRDAwXHVENTVDIFx1QzBBQ1x1RDU2RCk8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xzMic+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwICZsdDtCT0xULVVYJmd0OyBcdUM3NDAoXHVCMjk0KSBcdUM3NzRcdUM2QTlcdUM3OTBcdUM1RDBcdUFDOEMgXHVBQzFDXHVCQ0M0XHVDODAxXHVDNzc4IFx1QjlERVx1Q0RBNFx1QzExQ1x1QkU0NFx1QzJBNFx1Qjk3QyBcdUM4MUNcdUFDRjVcdUQ1NThcdUFFMzAgXHVDNzA0XHVENTc0IFx1Qzc3NFx1QzZBOVx1QzgxNVx1QkNGNFx1Qjk3QyBcdUM4MDBcdUM3QTVcdUQ1NThcdUFDRTAgXHVDMjE4XHVDMkRDXHVCODVDXG4gICAgICAgICAgXHVCRDg4XHVCN0VDXHVDNjI0XHVCMjk0IFx1MjAxOFx1Q0ZFMFx1RDBBNChjb29raWUpXHUyMDE5XHVCOTdDIFx1QzBBQ1x1QzZBOVx1RDU2OVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cdTI0NjEgXHVDRkUwXHVEMEE0XHVCMjk0IFx1QzZGOVx1QzBBQ1x1Qzc3NFx1RDJCOFx1Qjk3QyBcdUM2QjRcdUM2MDFcdUQ1NThcdUIyOTRcdUIzNzAgXHVDNzc0XHVDNkE5XHVCNDE4XHVCMjk0IFx1QzExQ1x1QkM4NChodHRwKVx1QUMwMCBcdUM3NzRcdUM2QTlcdUM3OTBcdUM3NTggXHVDRUY0XHVENEU4XHVEMTMwIFx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMFx1QzVEMFx1QUM4QyBcdUJDRjRcdUIwQjRcdUIyOTQgXHVDMThDXHVCN0M5XHVDNzU4IFx1QzgxNVx1QkNGNFx1Qzc3NFx1QkE3MFxuICAgICAgICAgIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1QjRFNFx1Qzc1OCBQQyBcdUNFRjRcdUQ0RThcdUQxMzBcdUIwQjRcdUM3NTggXHVENTU4XHVCNERDXHVCNTE0XHVDMkE0XHVEMDZDXHVDNUQwIFx1QzgwMFx1QzdBNVx1QjQxOFx1QUUzMFx1QjNDNCBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHVBQzAwLiBcdUNGRTBcdUQwQTRcdUM3NTggXHVDMEFDXHVDNkE5IFx1QkFBOVx1QzgwMSA6IFx1Qzc3NFx1QzZBOVx1Qzc5MFx1QUMwMCBcdUJDMjlcdUJCMzhcdUQ1NUMgXHVBQzAxIFx1QzExQ1x1QkU0NFx1QzJBNFx1QzY0MCBcdUM2RjkgXHVDMEFDXHVDNzc0XHVEMkI4XHVCNEU0XHVDNUQwIFx1QjMwMFx1RDU1QyBcdUJDMjlcdUJCMzggXHVCQzBGIFx1Qzc3NFx1QzZBOVx1RDYxNVx1RDBEQywgXHVDNzc4XHVBRTMwIFx1QUM4MFx1QzBDOVx1QzVCNCwgXHVCQ0Y0XHVDNTQ4XHVDODExXHVDMThEXG4gICAgICAgICAgXHVDNUVDXHVCRDgwLCBcdUI0RjFcdUM3NDQgXHVEMzBDXHVDNTQ1XHVENTU4XHVDNUVDIFx1Qzc3NFx1QzZBOVx1Qzc5MFx1QzVEMFx1QUM4QyBcdUNENUNcdUM4MDFcdUQ2NTRcdUI0MUMgXHVDODE1XHVCQ0Y0IFx1QzgxQ1x1QUNGNVx1Qzc0NCBcdUM3MDRcdUQ1NzQgXHVDMEFDXHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QjA5OC4gXHVDRkUwXHVEMEE0XHVDNzU4IFx1QzEyNFx1Q0U1OFx1MjAyMlx1QzZCNFx1QzYwMSBcdUJDMEYgXHVBQzcwXHVCRDgwIDogXHVDNkY5XHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwIFx1QzBDMVx1QjJFOFx1Qzc1OCBcdUIzQzRcdUFENkMmZ3Q7XHVDNzc4XHVEMTMwXHVCMTM3IFx1QzYzNVx1QzE1OCZndDtcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQTU0XHVCMjc0XHVDNzU4IFx1QzYzNVx1QzE1OCBcdUMxMjRcdUM4MTVcdUM3NDQgXHVEMUI1XHVENTc0IFx1Q0ZFMFx1RDBBNFxuICAgICAgICAgIFx1QzgwMFx1QzdBNVx1Qzc0NCBcdUFDNzBcdUJEODAgXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIFx1Q0ZFMFx1RDBBNCBcdUM4MDBcdUM3QTVcdUM3NDQgXHVBQzcwXHVCRDgwXHVENTYwIFx1QUNCRFx1QzZCMCBcdUI5REVcdUNEQTRcdUQ2MTUgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1Qzc3NFx1QzZBOVx1QzVEMCBcdUM1QjRcdUI4MjRcdUM2QzBcdUM3NzQgXHVCQzFDXHVDMEREXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QzMCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUM4XHVDODcwIChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwKSA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz5cbiAgICAgICAgICBcdTI0NjAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvckxpZ2h0Qmx1ZSc+Jmx0O0JPTFQtVVgmZ3Q7PC9zcGFuPiBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUM1QzVcdUJCMzRcdUI5N0MgXHVDRDFEXHVBRDA0XHVENTc0XHVDMTFDXG4gICAgICAgICAgXHVDQzQ1XHVDNzg0XHVDOUMwXHVBQ0UwLCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVDNjQwIFx1QUQwMFx1QjgyOFx1RDU1QyBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVCRDg4XHVCOUNDXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUQ1M0NcdUQ1NzRcdUFENkNcdUM4MUMgXHVCNEYxXHVDNzQ0IFx1QzcwNFx1RDU1OFx1QzVFQyBcdUM1NDRcdUI3OThcdUM2NDAgXHVBQzE5XHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUNDNDVcdUM3ODRcdUM3OTBcdUI5N0NcbiAgICAgICAgICBcdUM5QzBcdUM4MTVcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwIDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzEzMVx1QkE4NSA6XHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICA8bGk+XHVDOUMxXHVDQzQ1IDpcdUFEMDBcdUI5QUNcdUM3OTA8L2xpPlxuICAgICAgICAgIDxsaT5cdUM5QzFcdUFFMDkgOlx1QjMwMFx1RDQ1QzwvbGk+XG4gICAgICAgICAgPGxpPlx1QzVGMFx1Qjc3RFx1Q0M5OCA6MDEwLTgzMDAtODIxMCwgZGVlcnBhcms4MjEwQGdtYWlsLmNvbSwgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyMDNCIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDXHVCODVDIFx1QzVGMFx1QUNCMFx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8cCAvPnsnICd9XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUIyRjRcdUIyRjlcdUJEODBcdUMxMUM8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QkQ4MFx1QzExQ1x1QkE4NSA6XHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzZCNFx1QzYwMTwvbGk+XG4gICAgICAgICAgICA8bGk+XHVCMkY0XHVCMkY5XHVDNzkwIDpcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QzVGMFx1Qjc3RFx1Q0M5OCA6MDEwLTgzMDAtODIxMCwgZGVlcnBhcms4MjEwQGdtYWlsLmNvbSwgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgICAgXHUyNDYxIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QUVEOFx1QzExQ1x1QjI5NCAmbHQ7Qk9MVC1VWCZndDsgXHVDNzU4IFx1QzExQ1x1QkU0NFx1QzJBNChcdUI2MTBcdUIyOTQgXHVDMEFDXHVDNUM1KVx1Qzc0NCBcdUM3NzRcdUM2QTlcdUQ1NThcdUMyRENcdUJBNzRcdUMxMUMgXHVCQzFDXHVDMEREXHVENTVDIFx1QkFBOFx1QjRFMCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QUQwMFx1QjgyOCBcdUJCMzhcdUM3NTgsXG4gICAgICAgICAgICBcdUJEODhcdUI5Q0NcdUNDOThcdUI5QUMsIFx1RDUzQ1x1RDU3NFx1QUQ2Q1x1QzgxQyBcdUI0RjFcdUM1RDAgXHVBRDAwXHVENTVDIFx1QzBBQ1x1RDU2RFx1Qzc0NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwIFx1QkMwRiBcdUIyRjRcdUIyRjlcdUJEODBcdUMxMUNcdUI4NUMgXHVCQjM4XHVDNzU4XHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuICZsdDtCT0xULVVYJmd0O1xuICAgICAgICAgICAgXHVDNzQwKFx1QjI5NCkgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkIzOFx1Qzc1OFx1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDOUMwXHVDQ0I0IFx1QzVDNlx1Qzc3NCBcdUIyRjVcdUJDQzAgXHVCQzBGIFx1Q0M5OFx1QjlBQ1x1RDU3NFx1QjREQ1x1QjlCNCBcdUFDODNcdUM3ODVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MzAnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDOVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDKVxuICAgICAgICAgICAgICA8YnIgLz4gXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVCMjk0IFx1RkY2Mlx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdUZGNjMgXHVDODFDMzVcdUM4NzBcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1RjRcdUI3OEMgXHVDQ0FEXHVBRDZDXHVCOTdDIFx1QzU0NFx1Qjc5OFx1Qzc1OCBcdUJEODBcdUMxMUNcdUM1RDAgXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAmbHQ7IEJMVC1VWCZndDtcdUM3NDAoXHVCMjk0KSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2Q1x1QUMwMCBcdUMyRTBcdUMxOERcdUQ1NThcdUFDOEMgXHVDQzk4XHVCOUFDXHVCNDE4XHVCM0M0XHVCODVEIFx1QjE3OFx1QjgyNVx1RDU1OFx1QUNBMFx1QzJCNVx1QjJDOFx1QjJFNC57JyAnfVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkMgXHVDODExXHVDMjE4XHUwMEI3XHVDQzk4XHVCOUFDIFx1QkQ4MFx1QzExQyA8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QkQ4MFx1QzExQ1x1QkE4NSA6IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUFEMDBcdUI5QUM8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QjJGNFx1QjJGOVx1Qzc5MCA6IFx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgICA8bGk+XHVDNUYwXHVCNzdEXHVDQzk4IDogMDEwLTgzMDAtODIxMCwgZGVlcnBhcms4MjEwQGdtYWlsLmNvbSwgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUMxMFx1Qzg3MChcdUFEOENcdUM3NzVcdUNFNjhcdUQ1NzQgXHVBRDZDXHVDODFDXHVCQzI5XHVCQzk1KTxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz48L2VtPlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUNFNjhcdUQ1NzRcdUI4NUMgXHVDNzc4XHVENTVDIFx1QUQ2Q1x1QzgxQ1x1Qjk3QyBcdUJDMUJcdUFFMzAgXHVDNzA0XHVENTU4XHVDNUVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkQ4NFx1QzdDMVx1Qzg3MFx1QzgxNVx1QzcwNFx1QzZEMFx1RDY4QywgXHVENTVDXHVBRDZEXHVDNzc4XHVEMTMwXHVCMTM3XHVDOUM0XHVENzY1XHVDNkQwXG4gICAgICAgICAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVDMkUwXHVBQ0UwXHVDMTNDXHVEMTMwIFx1QjRGMVx1QzVEMCBcdUJEODRcdUM3QzFcdUQ1NzRcdUFDQjBcdUM3NzRcdUIwOTggXHVDMEMxXHVCMkY0IFx1QjRGMVx1Qzc0NCBcdUMyRTBcdUNDQURcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gXHVDNzc0IFx1QkMxNlx1QzVEMCBcdUFFMzBcdUQwQzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVDNzU4IFx1QzJFMFx1QUNFMCwgXHVDMEMxXHVCMkY0XHVDNUQwXG4gICAgICAgICAgXHVCMzAwXHVENTU4XHVDNUVDXHVCMjk0IFx1QzU0NFx1Qjc5OFx1Qzc1OCBcdUFFMzBcdUFEMDBcdUM1RDAgXHVCQjM4XHVDNzU4XHVENTU4XHVDMkRDXHVBRTMwIFx1QkMxNFx1Qjc4RFx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAxLiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJEODRcdUM3QzFcdUM4NzBcdUM4MTVcdUM3MDRcdUM2RDBcdUQ2OEMgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxODMzLTY5NzIgKHd3dy5rb3BpY28uZ28ua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMi4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVDMkUwXHVBQ0UwXHVDMTNDXHVEMTMwIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTE4IChwcml2YWN5Lmtpc2Eub3Iua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMy4gXHVCMzAwXHVBQzgwXHVDQzMwXHVDQ0FEIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTMwMSAod3d3LnNwby5nby5rcilcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA0LiBcdUFDQkRcdUNDMzBcdUNDQUQgOiAoXHVBRDZEXHVCQzg4XHVDNUM2XHVDNzc0KSAxODIgKGVjcm0uY3liZXIuZ28ua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEXHVDODFDMzVcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzVGNFx1Qjc4QyksIFx1QzgxQzM2XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM4MTVcdUM4MTVcdTAwQjdcdUMwQURcdUM4MUMpLCBcdUM4MUMzN1x1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDQzk4XHVCOUFDXHVDODE1XHVDOUMwIFx1QjRGMSlcdUM3NThcbiAgICAgICAgICBcdUFERENcdUM4MTVcdUM1RDAgXHVDNzU4XHVENTVDIFx1QzY5NFx1QUQ2Q1x1QzVEMCBcdUIzMDAgXHVENTU4XHVDNUVDIFx1QUNGNVx1QUNGNVx1QUUzMFx1QUQwMFx1Qzc1OCBcdUM3QTVcdUM3NzQgXHVENTg5XHVENTVDIFx1Q0M5OFx1QkQ4NCBcdUI2MTBcdUIyOTQgXHVCRDgwXHVDNzkxXHVDNzA0XHVCODVDIFx1Qzc3OFx1RDU1OFx1QzVFQyBcdUFEOENcdUI5QUMgXHVCNjEwXHVCMjk0IFx1Qzc3NFx1Qzc3NVx1Qzc1OCBcdUNFNjhcdUQ1NzRcdUI5N0MgXHVCQzFCXHVDNzQwIFx1Qzc5MFx1QjI5NFxuICAgICAgICAgIFx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1QkM5NVx1Qzc3NCBcdUM4MTVcdUQ1NThcdUIyOTQgXHVCQzE0XHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUM3NDQgXHVDQ0FEXHVBRDZDXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXHUyMDNCIFx1RDU4OVx1QzgxNVx1QzJFQ1x1RDMxMFx1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDNzkwXHVDMTM4XHVENTVDIFx1QzBBQ1x1RDU2RFx1Qzc0MCBcdUM5MTFcdUM1NTlcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUM3MDRcdUM2RDBcdUQ2OEMod3d3LnNpbXBhbi5nby5rcikgXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwXHVCOTdDIFx1Q0MzOFx1QUNFMFx1RDU1OFx1QzJEQ1x1QUUzMCBcdUJDMTRcdUI3OERcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzExXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjggXHVCQ0MwXHVBQ0JEKTxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz48L2VtPlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1MjQ2MCBcdUM3NzQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQwIDIwMjJcdUIxNDQgM1x1QzZENCAxN1x1QkQ4MFx1RDEzMCBcdUM4MDFcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHUyNDYxIFx1Qzc3NFx1QzgwNFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4XHVDNzQwIFx1QzU0NFx1Qjc5OFx1QzVEMFx1QzExQyBcdUQ2NTVcdUM3NzhcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC4gPC9wPlxuICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHVDNjA4XHVDMkRDICkgLSAyMFhYLiAzLiAxNyB+IDIwWFguIFguIFggXHVDODAxXHVDNkE5IChcdUQwNzRcdUI5QUQpIDwvcD4gKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgbWFpbiBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuaW1wb3J0IHsgUHJvbW90aW9ucyB9IGZyb20gJ34vY29tcG9uZW50cy9Qcm9tb3Rpb25zJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbnMsIG1vcmVQb3N0cyB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdieC1wYWdlLXJvdyBoaWRkZW4gbWQ6ZmxleCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcGFnZSBtYXgtdy0xMTInPlxuICAgICAgICA8UHJvbW90aW9ucyB7Li4ueyBwcm9tb3Rpb25zIH19IC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWgyIG14LTQgbWQ6bXgtOCAtbWItNCc+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8SWNvbnMuQnVsbGV0U29saWQgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XHVDRDVDXHVBREZDIFx1RDNFQ1x1QzJBNFx1RDJCODwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFBvc3RzIHsuLi57IG90aGVyUG9zdHM6IG1vcmVQb3N0cyB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuXG50eXBlIFByb21vdGlvbnNQcm9wcyA9IHtcbiAgcHJvbW90aW9uczogYW55W11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb21vdGlvbnMoe3Byb21vdGlvbnN9OiBQcm9tb3Rpb25zUHJvcHMpIHtcbiAgcmV0dXJuICg8dWwgY2xhc3NOYW1lPSdieC1wcm9tb3Rpb25zJz5cbiAgICB7cHJvbW90aW9ucy5tYXAoKHByb21vdGlvbjogYW55KSA9PiAoXG4gICAgICA8bGkga2V5PXtwcm9tb3Rpb24udGl0bGV9IGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWl0ZW0nPlxuICAgICAgICA8TGluayB0bz17cHJvbW90aW9uLnVybCB8fCAnLi8nfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1saW5rJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWltYWdlJ1xuICAgICAgICAgICAgICBkYXRhPXtwcm9tb3Rpb24uYmFubmVyLnJlc3BvbnNpdmVJbWFnZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3Byb21vdGlvbi5jb2xvci5yZWR9LCAke3Byb21vdGlvbi5jb2xvci5ncmVlbn0sICR7cHJvbW90aW9uLmNvbG9yLmJsdWV9LCAuNSlgLFxuICAgICAgICAgICAgICAgICctLXR3LXNoYWRvdyc6ICd2YXIoLS10dy1zaGFkb3ctY29sb3JlZCknLFxuICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICA8L3VsPilcbn0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uSXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9TZWN0aW9uJ1xuaW1wb3J0IHsgcGxhbiBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9ICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYW4oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCBsaXN0OiBTZWN0aW9uSXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICBiYWRnZTogPHNwYW4gY2xhc3NOYW1lPSdieC1iYWRnZSc+QkFTSUM8L3NwYW4+LFxuICAgICAgbGluazogJy9zZXJ2aWNlcy9ob21lcGFnZScsXG4gICAgICBsYWJlbDogJ1x1Qzc5MFx1QzEzOFx1RDc4OCBcdUJDRjRcdUFFMzAnLFxuICAgICAgcGhvdG9zOiBwaG90by5ob21lcGFnZWJhc2ljLFxuICAgICAgbWV0YXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc5MVx1QzVDNVx1Qzc3QycsIHZhbHVlOiAnN1x1Qzc3QycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0Q1Q1x1QjMwMCBcdUQzOThcdUM3NzRcdUM5QzAnLCB2YWx1ZTogJzVcdUFDMUMnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUMyQTRcdUQwQzBcdUM3N0MgXHVBQzAwXHVDNzc0XHVCNERDJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdBL1MnLCB2YWx1ZTogJzFcdUIxNDQnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVDNkY5JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIyRTRcdUQwNkMgXHVCQUE4XHVCNERDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFDODBcdUMwQzlcdUM1RDRcdUM5QzQgXHVDRDVDXHVDODAxXHVENjU0JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIzQzRcdUJBNTRcdUM3NzggKDFcdUIxNDQpJywgdmFsdWU6ICdcdUJCMzRcdUI4Q0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUQ2MzhcdUMyQTRcdUQzMDUgKDFcdUIxNDQpJywgdmFsdWU6ICdcdUJCMzRcdUI4Q0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFENkNcdUFFMDAgXHVDNkNDXHVEMDZDXHVDMkE0XHVEMzk4XHVDNzc0XHVDMkE0JywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUFENkNcdUFFMDAgXHVDNTYwXHVCMTEwXHVCOUFDXHVEMkYxXHVDMkE0JywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNFNzRcdUNFNzRcdUM2MjRcdUQxQTEgXHVDQzQ0XHVCMTEwJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNDNDRcdUIxMTBcdUQxQTEnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUQwMFx1QjlBQ1x1Qzc5MCBcdUIzQzRcdUFENkMnLCB2YWx1ZTogJ1x1QkJGOFx1QzlDMFx1QzZEMCcgfSxcbiAgICAgIF0sXG4gICAgICBleHRyYTogPHNwYW4+NTBcdUI5Q0NcdUM2RDA8L3NwYW4+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUMyRjFcdUFFMDBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgIGJhZGdlOiA8c3BhbiBjbGFzc05hbWU9J2J4LWJhZGdlJz5CQVNJQzwvc3Bhbj4sXG4gICAgICBsaW5rOiAnL3NlcnZpY2VzL3NpbmdsZXBhZ2UnLFxuICAgICAgbGFiZWw6ICdcdUM3OTBcdUMxMzhcdUQ3ODggXHVCQ0Y0XHVBRTMwJyxcbiAgICAgIHBob3RvczogcGhvdG8uc2luZ2xlcGFnZWJhc2ljLFxuICAgICAgbWV0YXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc5MVx1QzVDNVx1Qzc3QycsIHZhbHVlOiAnM1x1Qzc3QycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0Q1Q1x1QjMwMCBcdUQzOThcdUM3NzRcdUM5QzAnLCB2YWx1ZTogJzFcdUFDMUMnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUMyQTRcdUQwQzBcdUM3N0MgXHVBQzAwXHVDNzc0XHVCNERDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdBL1MnLCB2YWx1ZTogJzFcdUIxNDQnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVDNkY5JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3NzhcdUQxMzBcdUI4MDlcdUQyRjBcdUJFMEMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjJFNFx1RDA2QyBcdUJBQThcdUI0REMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUM4MFx1QzBDOVx1QzVENFx1QzlDNCBcdUNENUNcdUM4MDFcdUQ2NTQnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjNDNFx1QkE1NFx1Qzc3OCAoMVx1QjE0NCknLCB2YWx1ZTogJ1x1QkIzNFx1QjhDQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1RDYzOFx1QzJBNFx1RDMwNSAoMVx1QjE0NCknLCB2YWx1ZTogJ1x1QkIzNFx1QjhDQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUQwMFx1QjlBQ1x1Qzc5MCBcdUIzQzRcdUFENkMnLCB2YWx1ZTogJ1x1QkJGOFx1QzlDMFx1QzZEMCcgfSxcbiAgICAgIF0sXG4gICAgICBleHRyYTogPHNwYW4+MjBcdUI5Q0NcdUM2RDA8L3NwYW4+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUQzN0NcdUJFMTRcdUI5QUNcdUMyRjEgXHVBQzFDXHVCQzFDJyxcbiAgICAgIGJhZGdlOiA8c3BhbiBjbGFzc05hbWU9J2J4LWJhZGdlJz5CQVNJQzwvc3Bhbj4sXG4gICAgICBsaW5rOiAnL3NlcnZpY2VzL3B1Ymxpc2hpbmcnLFxuICAgICAgbGFiZWw6ICdcdUM3OTBcdUMxMzhcdUQ3ODggXHVCQ0Y0XHVBRTMwJyxcbiAgICAgIHBob3RvczogcGhvdG8ucHVibGlzaGluZ2Jhc2ljLFxuICAgICAgbWV0YXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc5MVx1QzVDNVx1Qzc3QycsIHZhbHVlOiAnMlx1Qzc3QycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0Q1Q1x1QjMwMCBcdUQzOThcdUM3NzRcdUM5QzAnLCB2YWx1ZTogJzEwXHVBQzFDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDMkE0XHVEMEMwXHVDNzdDIFx1QUMwMFx1Qzc3NFx1QjREQycsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQS9TJywgdmFsdWU6ICcxXHVBQzFDXHVDNkQ0JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1QzZGOScsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCMkU0XHVEMDZDIFx1QkFBOFx1QjREQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDNkY5IFx1QzgxMVx1QURGQ1x1QzEzMScsIHZhbHVlOiAnXHVDOUMwXHVDNkQwJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDNkY5IFx1QzgxMVx1QURGQ1x1QzEzMSBcdUM3NzhcdUM5OUQgXHVCOUM4XHVEMDZDJywgdmFsdWU6ICdcdUJCRjhcdUM5QzBcdUM2RDAnIH0sXG4gICAgICBdLFxuICAgICAgZXh0cmE6IDxzcGFuPjUwXHVCOUNDXHVDNkQwPC9zcGFuPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDNTcxIFx1QjUxNFx1Qzc5MFx1Qzc3OCcsXG4gICAgICBiYWRnZTogPHNwYW4gY2xhc3NOYW1lPSdieC1iYWRnZSc+QkFTSUM8L3NwYW4+LFxuICAgICAgbGluazogJy9zZXJ2aWNlcy9hcHBkZXNpZ24nLFxuICAgICAgbGFiZWw6ICdcdUM3OTBcdUMxMzhcdUQ3ODggXHVCQ0Y0XHVBRTMwJyxcbiAgICAgIHBob3RvczogcGhvdG8uYXBwZGVzaWduYmFzaWMsXG4gICAgICBtZXRhczogW1xuICAgICAgICB7IGxhYmVsOiAnXHVDNzkxXHVDNUM1XHVDNzdDJywgdmFsdWU6ICczXHVDNzdDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDRDVDXHVCMzAwIFx1RDM5OFx1Qzc3NFx1QzlDMCcsIHZhbHVlOiAnNVx1QUMxQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUMyRENcdUMyQTRcdUQxNUMnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0EvUycsIHZhbHVlOiAnM1x1QUMxQ1x1QzZENCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjJFNFx1RDA2QyBcdUJBQThcdUI0REMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEnLCB2YWx1ZTogJ1x1QzlDMFx1QzZEMCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEgXHVDNzc4XHVDOTlEIFx1QjlDOFx1RDA2QycsIHZhbHVlOiAnXHVCQkY4XHVDOUMwXHVDNkQwJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiA8c3Bhbj41MFx1QjlDQ1x1QzZEMDwvc3Bhbj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1QkUwQ1x1Qjc5Q1x1QjREQyBcdUFDMDBcdUM3NzRcdUI0REMnLFxuICAgICAgYmFkZ2U6IDxzcGFuIGNsYXNzTmFtZT0nYngtYmFkZ2UnPkJBU0lDPC9zcGFuPixcbiAgICAgIGxpbms6ICcvc2VydmljZXMvYnJhbmRpbmcnLFxuICAgICAgbGFiZWw6ICdcdUM3OTBcdUMxMzhcdUQ3ODggXHVCQ0Y0XHVBRTMwJyxcbiAgICAgIHBob3RvczogcGhvdG8uYnJhbmRpbmdiYXNpYyxcbiAgICAgIG1ldGFzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3OTFcdUM1QzVcdUM3N0MnLCB2YWx1ZTogJzE0XHVDNzdDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCODVDXHVBQ0UwJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUJBODVcdUQ1NjgnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QkIzOFx1QzExQy9cdUM3NzRcdUJBNTRcdUM3N0MgXHVEMTVDXHVENTBDXHVCOUJGJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUI1MTRcdUM3OTBcdUM3NzggXHVDMkRDXHVDMkE0XHVEMTVDJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdBL1MnLCB2YWx1ZTogJzFcdUIxNDQnIH0sXG4gICAgICBdLFxuICAgICAgZXh0cmE6IDxzcGFuPjEwMFx1QjlDQ1x1QzZEMDwvc3Bhbj4sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb25zJz5cbiAgICAgICAge2xpc3QubWFwKGxpc3RJdGVtID0+IChcbiAgICAgICAgICA8U2VjdGlvbiBrZXk9e2xpc3RJdGVtLnRpdGxlfSBpdGVtPXtsaXN0SXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2JvbHQtdWknXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgdHlwZSBTZWN0aW9uSXRlbSA9IHtcbiAgaWNvbj86IEpTWC5FbGVtZW50LFxuICB0aXRsZTogc3RyaW5nLFxuICBsaW5rPzogc3RyaW5nLFxuICBsYWJlbD86IHN0cmluZyxcbiAgcGhvdG9zOiBhbnlbXSxcbiAgdGFncz86IHN0cmluZ1tdLFxuICBtZXRhcz86IHtcbiAgICBsYWJlbDogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gICAgdmFsdWU6IHN0cmluZyB8IEpTWC5FbGVtZW50LFxuICB9W10sXG4gIGV4dHJhPzogSlNYLkVsZW1lbnQsXG4gIGJhZGdlPzogSlNYLkVsZW1lbnQsXG59XG5cbnR5cGUgU2VjdGlvblByb3BzID0ge1xuICBpdGVtOiBTZWN0aW9uSXRlbSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlY3Rpb24oeyBpdGVtIH06IFNlY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBpY29uLCBwaG90b3MsIC8qIHRhZ3MsICovIG1ldGFzLCBleHRyYSwgYmFkZ2UsIGxpbmssIGxhYmVsIH0gPSBpdGVtXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24taGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24tdGl0bGUnPlxuICAgICAgICAgIHtpY29uID8gaWNvbiA6IDxJY29uLkJ1bGxldFNvbGlkIC8+fVxuICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAge2JhZGdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXNlY3Rpb24tZXh0cmEnPntleHRyYX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNhcm91c2VsJz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwaG90b3MgJiZcbiAgICAgICAgICAgICEhcGhvdG9zLmxlbmd0aCAmJlxuICAgICAgICAgICAgcGhvdG9zLm1hcCgoeyByZXNwb25zaXZlSW1hZ2UgfSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtyZXNwb25zaXZlSW1hZ2UudGl0bGV9IGNsYXNzTmFtZT0nYngtY2FyZC1zcWF1cmUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jYXJkLXRodW1iJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2J4LXRodW1ibmFpbCcgZGF0YT17cmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1jYXJkLXNxYXVyZS1pbmZvJz57cmVzcG9uc2l2ZUltYWdlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHttZXRhcyAmJiAhIW1ldGFzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tZXRhLWxpc3QnPlxuICAgICAgICAgIHttZXRhcy5tYXAoKG1ldGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXgudG9TdHJpbmcoKX0gY2xhc3NOYW1lPSdieC1tZXRhJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1tZXRhLWljb24nIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbWV0YS1pbmZvJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW1ldGEtbGFiZWwnPnttZXRhLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW1ldGEtdmFsdWUnPnttZXRhLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWF1dG8gbWQ6dy02MCBweC01IG1kOnNlbGYtZW5kIHB0LTIuNSBtZDpweC04Jz5cbiAgICAgICAgICA8QnV0dG9uIGJsb2NrIHNpemU9J2xhcmdlJyBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOWE3ZmUyNzcnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTQ1T01QUjVNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JMlVRUUJFWS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUVhTN1BWQUguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNBWkdTVE0yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFJZWklRMzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FWDIySjVGQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QnOnsnaWQnOidyb3V0ZXMvY29udGFjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbnRhY3QtTVhTTEZYM1guanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC00N0c2WVdCRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JHTU1EUVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RSDRLWjZCRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURLRk9TSzdELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25ld3MvJHNsdWcnOnsnaWQnOidyb3V0ZXMvbmV3cy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOiduZXdzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25ld3MvJHNsdWctRzVKVEhLV0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFINEtaNkJHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREtGT1NLN0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbmV3cy8kc2x1Zy8kdGFiJzp7J2lkJzoncm91dGVzL25ld3MvJHNsdWcvJHRhYicsJ3BhcmVudElkJzoncm91dGVzL25ld3MvJHNsdWcnLCdwYXRoJzonOnRhYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzLyRzbHVnLyR0YWItMjdWR0hWTzUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25ld3MvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbmV3cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOiduZXdzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzL2luZGV4LUw3TFQ1Q0hVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSDRLWjZCRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURLRk9TSzdELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvbm90aWNlcy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RpY2VzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZXMvJHNsdWctUUQ0R0xPQUYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFINEtaNkJHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREtGT1NLN0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbm90aWNlcy8kc2x1Zy8kdGFiJzp7J2lkJzoncm91dGVzL25vdGljZXMvJHNsdWcvJHRhYicsJ3BhcmVudElkJzoncm91dGVzL25vdGljZXMvJHNsdWcnLCdwYXRoJzonOnRhYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzLyRzbHVnLyR0YWItR1hDNk9WWDMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbm90aWNlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RpY2VzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3RpY2VzL2luZGV4LVBLVzJSMkhCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSDRLWjZCRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURLRk9TSzdELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvdGVzdCc6eydpZCc6J3JvdXRlcy9ub3RpY2VzL3Rlc3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbm90aWNlcy90ZXN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZXMvdGVzdC0zMkpVV0Q2WC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYW4nOnsnaWQnOidyb3V0ZXMvcGxhbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwbGFuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4tT0FYNVZOWEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSR01NRFFTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREtGT1NLN0QuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvJHRhZyc6eydpZCc6J3JvdXRlcy9wb3N0cy8kdGFnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzLzp0YWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvJHRhZy1TVzQ2WFNQUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUg0S1o2QkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ES0ZPU0s3RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcmV2aWV3L3N0YXJ0Jzp7J2lkJzoncm91dGVzL3ByZXZpZXcvc3RhcnQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJldmlldy9zdGFydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LUY2TTQ0QjRPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEFYMkRUUC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcmV2aWV3L3N0b3AnOnsnaWQnOidyb3V0ZXMvcHJldmlldy9zdG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByZXZpZXcvc3RvcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcmV2aWV3L3N0b3AtMjdDUFMyVkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0QVgyRFRQLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByaXZhY3knOnsnaWQnOidyb3V0ZXMvcHJpdmFjeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcml2YWN5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByaXZhY3ktTElQWFY2QkQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24nOnsnaWQnOidyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL2FwcGRlc2lnbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24tTEJXUVRPV0suanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdQUVc2NFVaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JHTU1EUVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ES0ZPU0s3RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZyc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9icmFuZGluZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZy1VS0NVNlFSVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR1BRVzY0VVouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkdNTURRUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURLRk9TSzdELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL2hvbWVwYWdlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlLTVOTUpLQkFMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESkxBUjY0Qy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdQUVc2NFVaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JHTU1EUVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ES0ZPU0s3RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvcHVibGlzaGluZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nLVROT1NCSTROLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESkxBUjY0Qy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdQUVc2NFVaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JHTU1EUVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ES0ZPU0s3RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvc2luZ2xlcGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlLUhDUUtJR1hOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESkxBUjY0Qy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdQUVc2NFVaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JHTU1EUVMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ES0ZPU0s3RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXR0aW5ncyc6eydpZCc6J3JvdXRlcy9zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXR0aW5ncycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXR0aW5ncy1DT1I3NldVTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC05QTdGRTI3Ny5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FB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RU8sSUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXNDaEI7QUFBQTs7O0FDeENKO0FBQU8sSUFBTSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXhCO0FBQU8sSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQTFCO0FBQU8sSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQTFCO0FBQU8sSUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXpCO0FBQU8sSUFBTSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXhCO0FBQU8sSUFBTSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBcEI7OztBQ0FBO0FBSU8scUJBQXFCLEVBQUUsYUFBK0I7QUFDM0QsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSztBQUFBLElBQXNCLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDcEUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBO0FBQUE7OztBQ1BkO0FBQU8seUJBQXlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTs7O0FDSGQ7QUFBTyxxQkFBcUI7QUFDMUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBOzs7QUNIZDtBQUFPLDBCQUEwQjtBQUMvQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBO0FBQUE7OztBQ0hkO0FBQU8sb0JBQW9CO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTs7O0FDSGQ7QUFJTyxjQUFjLEVBQUUsWUFBWSxlQUEwQjtBQUMzRCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLO0FBQUEsSUFBc0IsU0FBUTtBQUFBLEtBQ2pDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFFBQU87QUFBQSxJQUFPLGFBQVk7QUFBQSxJQUFJLE1BQUs7QUFBQSxJQUFPLFVBQVM7QUFBQSxLQUNwRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsSUFBb0MsVUFBUztBQUFBLEtBQ3hELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQTtBQUFBOzs7QUMzQ3hCO0FBQU8sb0JBQW9CO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixXQUFVO0FBQUEsTUFFWixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixXQUFVO0FBQUE7QUFBQTs7O0FDVGxCO0FBQU8sc0JBQXNCO0FBQzNCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixXQUFVO0FBQUEsTUFFWixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixXQUFVO0FBQUE7QUFBQTs7O0FDVGxCO0FBQU8sc0JBQXNCO0FBQzNCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUE7QUFBQTs7O0FDVFY7QUFBTyxxQkFBcUI7QUFDMUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQTtBQUFBOzs7QUNUVjtBQUFPLG9CQUFvQjtBQUN6QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBO0FBQUE7OztBQ1RWO0FBQU8saUJBQWdCO0FBQ3JCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUE7QUFBQTs7O0FDVFY7QUFBTyxtQkFBa0I7QUFDdkIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQTtBQUFBOzs7QUNUVjtBQUFPLGtCQUFrQjtBQUN2QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBO0FBQUE7OztBQ1RWO0FBQU8sbUJBQW1CO0FBQ3hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUE7QUFBQTs7O0FDVFY7QUFBTyxtQkFBbUI7QUFDeEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQTtBQUFBOzs7QUNUVjtBQUFPLGlCQUFpQjtBQUN0QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBO0FBQUE7OztBQ1RWO0FBQU8sb0JBQW9CO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixHQUFFO0FBQUE7QUFBQTs7O0FDVFY7QUFBTyxvQkFBb0I7QUFDekIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEdBQUU7QUFBQTtBQUFBOzs7QUNUVjtBQUFPLGdCQUFnQjtBQUNyQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsR0FBRTtBQUFBO0FBQUE7OztBQ1RWO0FBQU8sbUJBQW1CO0FBQ3hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTs7O0FDSGQ7QUFBTyxtQkFBbUI7QUFDeEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQzlDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBOzs7QUNIZDtBQUFPLHFCQUFxQjtBQUMxQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FDOUMsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBO0FBQUE7OztBQ0hkO0FBQU8saUJBQWlCO0FBQ3RCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQTZCLFNBQVE7QUFBQSxLQUM5QyxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsWUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLElBQWMsZUFBYztBQUFBLEtBQ3ZDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxRQUdaLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFVBQVM7QUFBQSxLQUNWLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBOzs7QXhCT2IsSUFBTSxTQUFtQjtBQUFBLEVBQzlCO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSVo7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJakI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJakI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFXO0FBQUE7QUFBQSxNQUViO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFD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
