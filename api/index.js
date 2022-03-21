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
var nav = [
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
  ["\uBE0C\uB79C\uB4DC \uAC00\uC774\uB4DC", "\uAE4C\uC9C0"]
];

// app/components/Layout/index.tsx
init_react();

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
var import_remix5 = __toESM(require_remix());

// app/components/Button/index.tsx
init_react();
var import_remix4 = __toESM(require_remix());
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
function Button({
  type = "button",
  size = "default",
  href,
  onClick,
  icon,
  block = false,
  children
}) {
  return href ? /* @__PURE__ */ React.createElement(import_remix4.Link, {
    key: href,
    to: href
  }, /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? "w-full" : ""}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? "w-full" : ""}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-icon ${sizes.iconSize[size]}`
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-text"
  }, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  }))) : onClick ? /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? "w-full" : ""}`,
    onClick
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? "w-full" : ""}`
  }, icon && /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-icon ${sizes.iconSize[size]}`
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-text"
  }, children)), /* @__PURE__ */ React.createElement("span", {
    className: "bx-button-background"
  })) : /* @__PURE__ */ React.createElement("button", {
    type,
    className: `bx-button ${sizes.height[size]} ${sizes.minWidth[size]}} ${block ? "w-full" : ""}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: `bx-button-label ${sizes.fontSize[size]} ${sizes.gap[size]} ${block ? "w-full" : ""}`
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

// app/components/Hero/index.tsx
function Hero({ heroString: heroString2 = [["", ""]], desc, links: links2, isRoot }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bx-hero"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `bx-hero-logo ${isRoot ? "justify-center" : "justify-center md:pb-4"}`
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
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
  }, link.label))))));
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
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
  }), /* @__PURE__ */ React.createElement(Nav, __spreadValues({}, { nav, pathname })), /* @__PURE__ */ React.createElement("div", {
    className: `${isRoot ? "px-3 md:px-0" : ""}`
  }, /* @__PURE__ */ React.createElement(Footer, null))), children);
}

// app/styles/app.css
var app_default = "/build/_assets/app-BZSWO7VY.css";

// route:/Users/yonne/Dev/bolt-ux/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
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
  const { sidebar = true } = useNav(pathname);
  const isRoot = pathname === "/";
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname, sidebar }), /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title: status.toString(), Icon: NotFound, desc: statusText, prevRoute, pathname, sidebar }), /* @__PURE__ */ React.createElement("div", {
    className: "bx-error"
  }, /* @__PURE__ */ React.createElement("h1", null, "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uC774\uC804\uC73C\uB85C \uB3CC\uC544 \uAC00\uC2DC\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")))), /* @__PURE__ */ React.createElement(import_remix8.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React.createElement(import_remix8.LiveReload, null)));
}
function App() {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix8.useLoaderData)();
  const { sidebar } = useNav(pathname);
  const isRoot = pathname === "/";
  const {
    data: { site }
  } = (0, import_react_datocms.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(SiteMeta, null), /* @__PURE__ */ React.createElement(import_remix8.Meta, null), /* @__PURE__ */ React.createElement(import_remix8.Links, null), (0, import_react_datocms.renderMetaTags)([...site.favicon])), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(RootLayout, __spreadValues({}, { isRoot, pathname, sidebar }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix8.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix8.Scripts, null), /* @__PURE__ */ React.createElement(import_remix8.LiveReload, null)));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/posts/preview/start.ts
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.publishing.tsx
var services_publishing_exports = {};
__export(services_publishing_exports, {
  default: () => Publishing2,
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.publishing.tsx
var loader2 = async ({ request }) => {
  return datoQuerySubscription({
    request,
    query: publishing
  });
};
function Publishing2() {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix10.useLoaderData)();
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.singlepage.tsx
var services_singlepage_exports = {};
__export(services_singlepage_exports, {
  default: () => Singlepage2,
  loader: () => loader3
});
init_react();
var import_remix11 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix11.useLoaderData)();
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/posts/preview/stop.ts
var stop_exports = {};
__export(stop_exports, {
  action: () => action2
});
init_react();
var import_remix12 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("preview");
  return (0, import_remix12.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.appdesign.tsx
var services_appdesign_exports = {};
__export(services_appdesign_exports, {
  default: () => Appdesign2,
  loader: () => loader4
});
init_react();
var import_remix13 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix13.useLoaderData)();
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.branding.tsx
var services_branding_exports = {};
__export(services_branding_exports, {
  default: () => Branding2,
  loader: () => loader5
});
init_react();
var import_remix14 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix14.useLoaderData)();
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/services.homepage.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/notices/$slug.tsx
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-post"
  }, /* @__PURE__ */ React.createElement(import_remix16.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${firstPost.slug}`
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
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "bx-section"
  }, /* @__PURE__ */ React.createElement("ul", null, otherPosts.map((post2) => /* @__PURE__ */ React.createElement("li", {
    className: "bx-post bx-other-post",
    key: post2.slug
  }, /* @__PURE__ */ React.createElement(import_remix16.Link, {
    className: "bx-post-link",
    to: `/${category || "posts"}/${post2.slug}`
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
  }))))))))));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/notices/$slug.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/notices/index.tsx
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
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms11.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "notices" })));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/preview/start.ts
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/preview/stop.ts
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/posts/$slug.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/posts/index.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/news/$slug.tsx
var slug_exports3 = {};
__export(slug_exports3, {
  default: () => PostSlug3,
  loader: () => loader11,
  meta: () => meta4
});
init_react();
var import_remix23 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix23.useLoaderData)();
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/news/index.tsx
var news_exports = {};
__export(news_exports, {
  default: () => Index3,
  loader: () => loader12
});
init_react();
var import_react_router_dom12 = require("react-router-dom");
var import_remix24 = __toESM(require_remix());
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix24.useLoaderData)();
  const { title, Icon, desc, sidebar } = useNav(pathname);
  const prevRoute = usePrevRoute(pathname);
  const {
    data: {
      posts: [firstPost, ...otherPosts]
    }
  } = (0, import_react_datocms15.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(Layout, __spreadValues({}, { title, Icon, desc, sidebar, prevRoute }), /* @__PURE__ */ React.createElement(Posts, __spreadValues({}, { firstPost, otherPosts, category: "news" })));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/settings.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/contact.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/contact.tsx
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
  }, /* @__PURE__ */ React.createElement(ButtonGroup, {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Button, {
    icon: /* @__PURE__ */ React.createElement(Kakao, null),
    onClick: handleClickAddChannel
  }, "\uCC44\uB110 \uCD94\uAC00"), /* @__PURE__ */ React.createElement(Button, {
    icon: /* @__PURE__ */ React.createElement(Kakao, null),
    onClick: handleClickChatChannel
  }, "\uCE74\uD1A1 \uCC44\uD305"))))));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/privacy.tsx
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

// route:/Users/yonne/Dev/bolt-ux/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4,
  loader: () => loader13
});
init_react();
var import_remix25 = __toESM(require_remix());
var import_react_datocms16 = require("react-datocms");
var loader13 = ({ request }) => {
  return datoQuerySubscription({
    request,
    query: promotions
  });
};
function Index4() {
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix25.useLoaderData)();
  const {
    data: { promotions: promotions2 }
  } = (0, import_react_datocms16.useQuerySubscription)(datoQuerySubscription2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bx-page max-w-112"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "bx-page-row hidden md:flex"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "bx-promotions"
  }, promotions2.map((promotion) => /* @__PURE__ */ React.createElement("li", {
    key: promotion.title,
    className: "bx-promotion-item"
  }, /* @__PURE__ */ React.createElement(import_remix25.Link, {
    to: promotion.url || "./",
    className: "bx-promotion-link"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_datocms16.Image, {
    className: "bx-promotion-image",
    data: promotion.banner.responsiveImage,
    style: {
      "--tw-shadow-color": `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
      "--tw-shadow": "var(--tw-shadow-colored)"
    }
  })))))))), /* @__PURE__ */ React.createElement(import_remix25.Outlet, null));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/plan.tsx
var plan_exports = {};
__export(plan_exports, {
  default: () => Plan,
  loader: () => loader14
});
init_react();
var import_remix26 = __toESM(require_remix());
var import_react_router_dom16 = require("react-router-dom");
var import_react_datocms18 = require("react-datocms");

// app/components/Section/index.tsx
init_react();
var import_react_datocms17 = require("react-datocms");
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
  }, /* @__PURE__ */ React.createElement(Button, {
    block: true,
    size: "large",
    href: link
  }, label)));
}

// route:/Users/yonne/Dev/bolt-ux/app/routes/plan.tsx
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
  const { datoQuerySubscription: datoQuerySubscription2 } = (0, import_remix26.useLoaderData)();
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
var assets_manifest_default = { "version": "d84732dd", "entry": { "module": "/build/entry.client-M7KO4KFG.js", "imports": ["/build/_shared/chunk-MKHN7Y6S.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ERCM2TNH.js", "imports": ["/build/_shared/chunk-5QQHE74C.js", "/build/_shared/chunk-D5NZZFYL.js", "/build/_shared/chunk-457TPCSV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-XIQ2XODO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2SYP5AXG.js", "imports": ["/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/$slug": { "id": "routes/news/$slug", "parentId": "root", "path": "news/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/news/$slug-RLSHRDLC.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/news/index": { "id": "routes/news/index", "parentId": "root", "path": "news", "index": true, "caseSensitive": void 0, "module": "/build/routes/news/index-QHH2XHHN.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/$slug": { "id": "routes/notices/$slug", "parentId": "root", "path": "notices/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notices/$slug-N6L34S3N.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notices/index": { "id": "routes/notices/index", "parentId": "root", "path": "notices", "index": true, "caseSensitive": void 0, "module": "/build/routes/notices/index-YTQKEOZ3.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan": { "id": "routes/plan", "parentId": "root", "path": "plan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan-OCJAKJLL.js", "imports": ["/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-CWGE7ZTC.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-IEAK3RPF.js", "imports": ["/build/_shared/chunk-AYWXGUWJ.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/start": { "id": "routes/posts/preview/start", "parentId": "root", "path": "posts/preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/start-4AI65FHK.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/preview/stop": { "id": "routes/posts/preview/stop", "parentId": "root", "path": "posts/preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/preview/stop-U7MZ7V3G.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/start": { "id": "routes/preview/start", "parentId": "root", "path": "preview/start", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/start-MSFTKJ7R.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/preview/stop": { "id": "routes/preview/stop", "parentId": "root", "path": "preview/stop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/preview/stop-ZB5NXELI.js", "imports": ["/build/_shared/chunk-3OOV44CU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/privacy-VPVUNNRZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.appdesign": { "id": "routes/services.appdesign", "parentId": "root", "path": "services/appdesign", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.appdesign-KANWJZBE.js", "imports": ["/build/_shared/chunk-QTX36TSP.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.branding": { "id": "routes/services.branding", "parentId": "root", "path": "services/branding", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.branding-2VRORQDM.js", "imports": ["/build/_shared/chunk-QTX36TSP.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.homepage": { "id": "routes/services.homepage", "parentId": "root", "path": "services/homepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.homepage-E4YDFG5U.js", "imports": ["/build/_shared/chunk-P2NDYXNP.js", "/build/_shared/chunk-QTX36TSP.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.publishing": { "id": "routes/services.publishing", "parentId": "root", "path": "services/publishing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.publishing-3XSD3SER.js", "imports": ["/build/_shared/chunk-P2NDYXNP.js", "/build/_shared/chunk-QTX36TSP.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services.singlepage": { "id": "routes/services.singlepage", "parentId": "root", "path": "services/singlepage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services.singlepage-SIFWORKI.js", "imports": ["/build/_shared/chunk-P2NDYXNP.js", "/build/_shared/chunk-QTX36TSP.js", "/build/_shared/chunk-REXL2Z2O.js", "/build/_shared/chunk-WRASV437.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-6PEAGNMP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D84732DD.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2xpYi9kYXRvY21zLnRzIiwgIi4uL2FwcC9zZXNzaW9ucy50cyIsICIuLi9hcHAvcXVlcmllcy9yb290LnRzIiwgIi4uL2FwcC9saWIvZnJhZ21lbnRzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3Bvc3RzLnRzIiwgIi4uL2FwcC9xdWVyaWVzL25ld3MudHMiLCAiLi4vYXBwL3F1ZXJpZXMvbm90aWNlcy50cyIsICIuLi9hcHAvcXVlcmllcy9wcm9tb3Rpb25zLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL2hvbWVwYWdlLnRzIiwgIi4uL2FwcC9xdWVyaWVzL3NlcnZpY2VzL3NpbmdsZXBhZ2UudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcHVibGlzaGluZy50cyIsICIuLi9hcHAvcXVlcmllcy9zZXJ2aWNlcy9hcHBkZXNpZ24udHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvYnJhbmRpbmcudHMiLCAiLi4vYXBwL3F1ZXJpZXMvc2VydmljZXMvcGxhbi50cyIsICIuLi9hcHAvbGliL2NvbmZpZy50cyIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0J1bGxldFNvbGlkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1NldHRpbmdzTGlnaHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZUxpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Fycm93TGVmdExpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0xvZ28udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vSG9tZXBhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2luZ2xlcGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9BcnJvd1JpZ2h0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL1B1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vQXBwZGVzaWduLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0JyYW5kaW5nLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL05ld3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTm90aWNlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0Jhbm5lci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Qcml2YWN5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0NvbnRhY3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vUHJpY2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vU2V0dGluZ3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vTm90Rm91bmQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb24vWW91dHViZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9Ud2l0dGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29uL0luc3RhZ3JhbS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9LYWthby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9saWIva2FrYW8udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFubmVyL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0LnRzIiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VzL1JlY29tbWVuZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUm93L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MaXN0L2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9UZWNoLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9GbG93LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9DcmV3cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvRkFRLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy9SZWZ1bmQudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2UudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcC50cyIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24udHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NlcnZpY2VzLmJyYW5kaW5nLnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZS50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy8kc2x1Zy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQXZhdGFyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9EYXRlL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0cy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdHMvUG9zdC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbm90aWNlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJldmlldy9zdGFydC50cyIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHMiLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvJHNsdWcudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXR0aW5ncy50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcHJpdmFjeS50c3giLCAicm91dGU6L1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL25vdGljZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9wcmV2aWV3L3N0b3AudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvbmV3cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL1VzZXJzL3lvbm5lL0Rldi9ib2x0LXV4L2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3ByaXZhY3kudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE5IGZyb20gXCIvVXNlcnMveW9ubmUvRGV2L2JvbHQtdXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIi9Vc2Vycy95b25uZS9EZXYvYm9sdC11eC9hcHAvcm91dGVzL3BsYW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL3ByZXZpZXcvc3RhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvcHVibGlzaGluZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuc2luZ2xlcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXJ2aWNlcy9zaW5nbGVwYWdlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9wcmV2aWV3L3N0b3BcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0cy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3NlcnZpY2VzLmFwcGRlc2lnblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2FwcGRlc2lnblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMuYnJhbmRpbmdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NlcnZpY2VzLmJyYW5kaW5nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlcnZpY2VzL2JyYW5kaW5nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9zZXJ2aWNlcy5ob21lcGFnZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VydmljZXMuaG9tZXBhZ2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2VydmljZXMvaG9tZXBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL25vdGljZXMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGljZXMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibm90aWNlcy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90aWNlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbm90aWNlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJub3RpY2VzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJldmlldy9zdGFydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcmV2aWV3L3N0YXJ0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJldmlldy9zdG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcmV2aWV3L3N0b3BcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJldmlldy9zdG9wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL25ld3MvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL25ld3MvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25ld3MvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibmV3c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9zZXR0aW5nc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2V0dGluZ3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy9wcml2YWN5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcml2YWN5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByaXZhY3lcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMThcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcGxhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGxhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHJvb3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VQcmV2Um91dGUsIHVzZU5hdiwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBSb290TGF5b3V0LCBMYXlvdXQsIFNpdGVNZXRhIH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5pbXBvcnQgYXBwU3R5bGVzIGZyb20gJy4vc3R5bGVzL2FwcC5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL3Nwb3FhLmdpdGh1Yi5pby9zcG9xYS1oYW4tc2Fucy9jc3MvU3BvcWFIYW5TYW5zTmVvLmNzcycsXG4gICAgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBibG9nLCBzaXRlIH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEoWy4uLmJsb2cuc2VvLCAuLi5zaXRlLmZhdmljb25dKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHN0YXR1cywgc3RhdHVzVGV4dCB9ID0gdXNlQ2F0Y2goKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIGNvbnN0IHsgc2lkZWJhciA9IHRydWUgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IGlzUm9vdCA9IHBhdGhuYW1lID09PSAnLydcblxuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxTaXRlTWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8Um9vdExheW91dCB7Li4ueyBpc1Jvb3QsIHBhdGhuYW1lLCBzaWRlYmFyIH19PlxuICAgICAgICAgIDxMYXlvdXRcbiAgICAgICAgICAgIHsuLi57IHRpdGxlOiBzdGF0dXMudG9TdHJpbmcoKSwgSWNvbjogSWNvbnMuTm90Rm91bmQsIGRlc2M6IHN0YXR1c1RleHQsIHByZXZSb3V0ZSwgcGF0aG5hbWUsIHNpZGViYXIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZXJyb3InPlxuICAgICAgICAgICAgICA8aDE+XHVEMzk4XHVDNzc0XHVDOUMwXHVCOTdDIFx1Q0MzRVx1Qzc0NCBcdUMyMTggXHVDNUM2XHVDMkI1XHVCMkM4XHVCMkU0LjwvaDE+XG4gICAgICAgICAgICAgIDxwPlx1Qzc3NFx1QzgwNFx1QzczQ1x1Qjg1QyBcdUIzQ0NcdUM1NDQgXHVBQzAwXHVDMkRDXHVBQzcwXHVCMDk4IFx1QjJFNFx1QzJEQyBcdUMyRENcdUIzQzRcdUQ1NzQgXHVDOEZDXHVDMTM4XHVDNjk0LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1Jvb3RMYXlvdXQ+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgaXNSb290ID0gcGF0aG5hbWUgPT09ICcvJ1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNpdGUgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8U2l0ZU1ldGEgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtyZW5kZXJNZXRhVGFncyhbLi4uc2l0ZS5mYXZpY29uXSl9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFJvb3RMYXlvdXQgey4uLnsgaXNSb290LCBwYXRobmFtZSwgc2lkZWJhciB9fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgdGlueSBmcm9tICd0aW55LWpzb24taHR0cCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfTogYW55KSB7XG4gIGxldCBlbmRwb2ludCA9ICdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20nXG5cbiAgaWYgKHByb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlQpIHtcbiAgICBlbmRwb2ludCArPSBgL2Vudmlyb25tZW50cy8ke3Byb2Nlc3MuZW52LkRBVE9DTVNfRU5WSVJPTk1FTlR9YFxuICB9XG5cbiAgaWYgKHByZXZpZXcpIHtcbiAgICBlbmRwb2ludCArPSBgL3ByZXZpZXdgXG4gIH1cblxuICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHRpbnkucG9zdCh7XG4gICAgdXJsOiBlbmRwb2ludCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuREFUT0NNU19SRUFET05MWV9UT0tFTn1gLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoYm9keS5lcnJvcnMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdPdWNoISBUaGUgcXVlcnkgaGFzIHNvbWUgZXJyb3JzIScsIGJvZHkuZXJyb3JzKVxuICAgIHRocm93IGJvZHkuZXJyb3JzXG4gIH1cblxuICByZXR1cm4gYm9keS5kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oeyByZXF1ZXN0LCAuLi5ncWxSZXF1ZXN0IH06IGFueSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcbiAgY29uc3QgcHJldmlld0VuYWJsZWQgPSBzZXNzaW9uLmdldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRvUXVlcnlTdWJzY3JpcHRpb246IHByZXZpZXdFbmFibGVkXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5ncWxSZXF1ZXN0LFxuICAgICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGF3YWl0IGxvYWQoeyAuLi5ncWxSZXF1ZXN0LCBwcmV2aWV3OiB0cnVlIH0pLFxuICAgICAgICAgIHRva2VuOiBwcm9jZXNzLmVudi5EQVRPQ01TX1JFQURPTkxZX1RPS0VOLFxuICAgICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5EQVRPQ01TX0VOVklST05NRU5UIHx8IG51bGwsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxEYXRhOiBhd2FpdCBsb2FkKGdxbFJlcXVlc3QpLFxuICAgICAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICBtYXhBZ2U6IDYwNF84MDAsXG4gICAgcGF0aDogJy8nLFxuICB9LFxufSlcblxuZXhwb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfVxuIiwgImltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCByb290ID0gYFxuICB7XG4gICAgc2l0ZTogX3NpdGUge1xuICAgICAgZmF2aWNvbjogZmF2aWNvbk1ldGFUYWdzKHZhcmlhbnRzOiBbaWNvbiwgbXNBcHBsaWNhdGlvbiwgYXBwbGVUb3VjaEljb25dKSB7XG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gICAgYmxvZyB7XG4gICAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHttZXRhVGFnc0ZyYWdtZW50fVxuYFxuIiwgIi8vIFNlZTogaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vYmxvZy9vZmZlci1yZXNwb25zaXZlLXByb2dyZXNzaXZlLWxxaXAtaW1hZ2VzLWluLTIwMjBcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50OiBzdHJpbmcgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gICAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmFzZTY0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzRnJhZ21lbnQ6IHN0cmluZyA9IGBcbiAgZnJhZ21lbnQgbWV0YVRhZ3NGcmFnbWVudCBvbiBUYWcge1xuICAgIGF0dHJpYnV0ZXNcbiAgICBjb250ZW50XG4gICAgdGFnXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGNvdmVySW1hZ2UgPSBgY292ZXJJbWFnZSB7XG4gIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgfVxufWBcblxuZXhwb3J0IGNvbnN0IGF1dGhvciA9IGBhdXRob3Ige1xuICBuYW1lXG4gIHBpY3R1cmUge1xuICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gIH1cbn1gXG4iLCAiaW1wb3J0IHsgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQsIG1ldGFUYWdzRnJhZ21lbnQgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gYFxuICBxdWVyeSBQb3N0QnlTbHVnKCRzbHVnOiBTdHJpbmcpIHtcbiAgICBwb3N0KGZpbHRlcjoge3NsdWc6IHtlcTogJHNsdWd9fSkge1xuICAgICAgc2VvOiBfc2VvTWV0YVRhZ3Mge1xuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XG4gICAgICB9XG4gICAgICB0aXRsZVxuICAgICAgZXhjZXJwdFxuICAgICAgc2x1Z1xuICAgICAgY29udGVudCB7XG4gICAgICAgIHZhbHVlXG4gICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgIC4uLm9uIEltYWdlQmxvY2tSZWNvcmQge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBkYXRlXG4gICAgICBvZ0ltYWdlOiBjb3ZlckltYWdle1xuICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSlcbiAgICAgIH1cbiAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF1dGhvciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAxMDAsIGg6IDEwMCwgc2F0OiAtMTAwfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtb3JlUG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIsIGZpbHRlcjoge3NsdWc6IHtuZXE6ICRzbHVnfX0pIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgJHttZXRhVGFnc0ZyYWdtZW50fVxuYFxuXG5leHBvcnQgY29uc3QgcG9zdHMgPSBgXG4gIHtcbiAgICBwb3N0czogYWxsUG9zdHMob3JkZXJCeTogZGF0ZV9ERVNDLCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHJvbW90aW9uOiBwcm9tb3Rpb24ob3JkZXJCeTogZXhwaXJlZGF0X0FTQywgbG9jYWxlOiBrb19LUikge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgIH1cbiAgfVxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuYFxuIiwgImltcG9ydCB7IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50LCBjb3ZlckltYWdlLCBhdXRob3IgfSBmcm9tICd+L2xpYi9mcmFnbWVudHMnXG5cbmV4cG9ydCBjb25zdCBuZXdzID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IF9jcmVhdGVkQXRfREVTQywgZmlsdGVyOiB7Y2F0ZWdvcnk6IHtlcTogXCIxMTY2NzkwNzlcIn19LCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICAke2NvdmVySW1hZ2V9XG4gICAgICAke2F1dGhvcn1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCwgY292ZXJJbWFnZSwgYXV0aG9yIH0gZnJvbSAnfi9saWIvZnJhZ21lbnRzJ1xuXG5leHBvcnQgY29uc3Qgbm90aWNlID0gYFxuICB7XG4gICAgcG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IF9jcmVhdGVkQXRfREVTQywgZmlsdGVyOiB7Y2F0ZWdvcnk6IHtlcTogXCIxMTY2NzY4NDVcIn19LCBmaXJzdDogMjApIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICAke2NvdmVySW1hZ2V9XG4gICAgICAke2F1dGhvcn1cbiAgICB9XG4gIH1cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbmBcbiIsICJpbXBvcnQgeyByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCB9IGZyb20gJ34vbGliL2ZyYWdtZW50cydcblxuZXhwb3J0IGNvbnN0IHByb21vdGlvbnMgPSBgXG4gIHtcbiAgICBwcm9tb3Rpb25zOiBhbGxQcm9tb3Rpb25zKG9yZGVyQnk6IGV4cGlyZWRhdF9BU0MsIGZpcnN0OiAyMCkge1xuICAgICAgdGl0bGVcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgYmx1ZVxuICAgICAgICBncmVlblxuICAgICAgICByZWRcbiAgICAgIH1cbiAgICAgIHVybFxuICAgICAgZXhwaXJlZGF0XG4gICAgICBiYW5uZXIge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDc3NiwgaDogNzI2IH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IGhvbWVwYWdlID0gYFxuICBxdWVyeSBIb21lcGFnZSB7XG4gICAgcHJvbW90aW9uIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYWx0XG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBob3RvIHtcbiAgICAgIGNvbW1vbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaG9tZXBhZ2Uge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3Qgc2luZ2xlcGFnZSA9IGBcbiAgcXVlcnkgU2luZ2xlcGFnZSB7XG4gICAgcHJvbW90aW9uIHtcbiAgICAgIHRpdGxlKGxvY2FsZToga29fS1IpXG4gICAgICB1cmxcbiAgICAgIGNvbG9yIHtcbiAgICAgICAgcmVkXG4gICAgICAgIGdyZWVuXG4gICAgICAgIGJsdWVcbiAgICAgIH1cbiAgICAgIHRleHRjb2xvciB7XG4gICAgICAgIGhleFxuICAgICAgfVxuICAgICAgbGFiZWwobG9jYWxlOiBrb19LUilcbiAgICAgIGJhbm5lciB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYWx0XG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBob3RvIHtcbiAgICAgIGNvbW1vbiB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2luZ2xlcGFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBwdWJsaXNoaW5nID0gYFxuICBxdWVyeSBQdWJsaXNoaW5nIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaXNoaW5nIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiZXhwb3J0IGNvbnN0IGFwcGRlc2lnbiA9IGBcbiAgcXVlcnkgQXBwZGVzaWduIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcHBkZXNpZ24ge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiIsICJleHBvcnQgY29uc3QgYnJhbmRpbmcgPSBgXG4gIHF1ZXJ5IEJyYW5kaW5nIHtcbiAgICBwcm9tb3Rpb24ge1xuICAgICAgdGl0bGUobG9jYWxlOiBrb19LUilcbiAgICAgIHVybFxuICAgICAgY29sb3Ige1xuICAgICAgICByZWRcbiAgICAgICAgZ3JlZW5cbiAgICAgICAgYmx1ZVxuICAgICAgfVxuICAgICAgdGV4dGNvbG9yIHtcbiAgICAgICAgaGV4XG4gICAgICB9XG4gICAgICBsYWJlbChsb2NhbGU6IGtvX0tSKVxuICAgICAgYmFubmVyIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBhbHRcbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGhvdG8ge1xuICAgICAgY29tbW9uIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmFuZGluZyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIiwgImV4cG9ydCBjb25zdCBwbGFuID0gYFxuICBxdWVyeSBQbGFuIHtcbiAgICBwaG90byB7XG4gICAgICBob21lcGFnZWJhc2ljIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlIHtcbiAgICAgICAgICBhc3BlY3RSYXRpb1xuICAgICAgICAgIGJhc2U2NFxuICAgICAgICAgIGJnQ29sb3JcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBzaXplc1xuICAgICAgICAgIHNyY1xuICAgICAgICAgIHNyY1NldFxuICAgICAgICAgIHdlYnBTcmNTZXRcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNpbmdsZXBhZ2ViYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaXNoaW5nYmFzaWMge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXBwZGVzaWduYmFzaWMge1xuICAgICAgICByZXNwb25zaXZlSW1hZ2Uge1xuICAgICAgICAgIGFzcGVjdFJhdGlvXG4gICAgICAgICAgYmFzZTY0XG4gICAgICAgICAgYmdDb2xvclxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIHNpemVzXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgd2VicFNyY1NldFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJhbmRpbmdiYXNpYyB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgICBiYXNlNjRcbiAgICAgICAgICBiZ0NvbG9yXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgc2l6ZXNcbiAgICAgICAgICBzcmNcbiAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxuZXhwb3J0IHR5cGUgUm91dGUgPSB7XG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBzaWRlYmFyOiBib29sZWFuLFxuICBpZD86IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGRlc2M/OiBzdHJpbmcsXG4gIEljb24/OiBKU1guRWxlbWVudCB8ICgoKSA9PiBKU1guRWxlbWVudCksXG59XG5cbmV4cG9ydCB0eXBlIFJvdXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGlzcGxheT86IGJvb2xlYW4sXG4gIGNoaWxkcmVuOiBSb3V0ZVtdLFxufVxuXG5leHBvcnQgY29uc3QgbmF2OiBSb3V0ZXNbXSA9IFtcbiAge1xuICAgIHRpdGxlOiAnXHVENjQ4JyxcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICB0aXRsZTogJ1x1RDY0OCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICcnLFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnXHVCRTE0XHVCODVDXHVBREY4JyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25vdGljZXMnLFxuICAgICAgICB0aXRsZTogJ1x1QUNGNVx1QzlDMFx1QzBBQ1x1RDU2RCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGlkOiAnMTE2Njc2ODQ1JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzU0Q1x1QjgyNFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLm5vdGljZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL25ld3MnLFxuICAgICAgICB0aXRsZTogJ1x1QzBDOFx1QzE4Q1x1QzJERCcsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGlkOiAnMTE2Njc5MDc5JyxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzBDOFx1Qjg1Q1x1QzZCNCBcdUMxOENcdUMyREQnLFxuICAgICAgICBJY29uOiBJY29uLm5ld3MsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1x1QzExQ1x1QkU0NFx1QzJBNCcsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9ob21lcGFnZScsXG4gICAgICAgIHRpdGxlOiAnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1QzgxQ1x1Qzc5MScsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUQ2NERcdUJDRjRcdUI5N0MgXHVDNzA0XHVENTVDIFx1QzZGOVx1QzBBQ1x1Qzc3NFx1RDJCOCBcdUFENkNcdUNEOTUnLFxuICAgICAgICBJY29uOiBJY29uLkhvbWVwYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2VydmljZXMvc2luZ2xlcGFnZScsXG4gICAgICAgIHRpdGxlOiAnXHVDMkYxXHVBRTAwIFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVDNzc0XHVCQ0E0XHVEMkI4LCBcdUI3OUNcdUI1MjkgXHVCMkU4XHVDNzdDIFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUFENkNcdUNEOTUnLFxuICAgICAgICBJY29uOiBJY29uLlNpbmdsZXBhZ2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9wdWJsaXNoaW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUQzN0NcdUJFMTRcdUI5QUNcdUMyRjEgXHVBQzFDXHVCQzFDJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QjlDOFx1RDA2Q1x1QzVDNSBcdUFDMUNcdUJDMUMnLFxuICAgICAgICBJY29uOiBJY29uLlB1Ymxpc2hpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9zZXJ2aWNlcy9hcHBkZXNpZ24nLFxuICAgICAgICB0aXRsZTogJ1x1QzU3MSBcdUI1MTRcdUM3OTBcdUM3NzgnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVCQUE4XHVCQzE0XHVDNzdDIFx1QzVCNFx1RDUwQ1x1QjlBQ1x1Q0YwMFx1Qzc3NFx1QzE1OCBcdUI1MTRcdUM3OTBcdUM3NzgnLFxuICAgICAgICBJY29uOiBJY29uLkFwcGRlc2lnbixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3NlcnZpY2VzL2JyYW5kaW5nJyxcbiAgICAgICAgdGl0bGU6ICdcdUJFMENcdUI3OUNcdUI0REMgXHVBQzAwXHVDNzc0XHVCNERDJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzYyOCwgXHVDNjI0XHVENTA0XHVCNzdDXHVDNzc4IFx1QjUxNFx1Qzc5MFx1Qzc3OCBcdUNFRThcdUMxMjRcdUQzMDUnLFxuICAgICAgICBJY29uOiBJY29uLkJyYW5kaW5nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUFFMzBcdUQwQzAnLFxuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL2NvbnRhY3QnLFxuICAgICAgICB0aXRsZTogJ1x1QkIzNFx1QjhDQyBcdUMwQzFcdUIyRjQnLFxuICAgICAgICBzaWRlYmFyOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBkZXNjOiAnXHVCQjM0XHVDNUM3XHVDNzc0XHVCNEUwIFx1QzU0Q1x1QjgyNFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nLFxuICAgICAgICBJY29uOiBJY29uLkNvbnRhY3QsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogJy9wbGFuJyxcbiAgICAgICAgdGl0bGU6ICdcdUMxMUNcdUJFNDRcdUMyQTQgXHVDNjk0XHVBRTA4XHVENDVDJyxcbiAgICAgICAgc2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUJDQzQgXHVBQzAwXHVBQ0E5XHVDNzQ0IFx1QzU0OFx1QjBCNFx1RDU3NCBcdUI0RENcdUI4MjRcdUM2OTQuJyxcbiAgICAgICAgSWNvbjogSWNvbi5QcmljZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiAnL3ByaXZhY3knLFxuICAgICAgICB0aXRsZTogJ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUM4MTVcdUNDNDUnLFxuICAgICAgICBzaWRlYmFyOiBmYWxzZSxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZGVzYzogJ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDQgXHVDMjE4XHVCOUJEXHUwMEI3XHVBQ0Y1XHVBQzFDXHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24uUHJpdmFjeSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdcdUMxMjRcdUM4MTUnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvc2V0dGluZ3MnLFxuICAgICAgICB0aXRsZTogJ1x1RDY1OFx1QUNCRFx1QzEyNFx1QzgxNScsXG4gICAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGRlc2M6ICdcdUFDMUNcdUM3NzhcdUQ2NTQgXHVDMTI0XHVDODE1XHVDNzQ0IFx1QkNDMFx1QUNCRFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LicsXG4gICAgICAgIEljb246IEljb24uU2V0dGluZ3MsXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbl1cblxuY29uc3QgZXhjZXB0Um91dGUgPSBbJ3Bvc3RzJywgJ3NlcnZpY2VzJywgJ2V2ZW50cyddXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXYocGF0aG5hbWU/OiBzdHJpbmcpOiBSb3V0ZSB7XG4gIGNvbnN0IG1hdGNoZWRSb3V0ZSA9IG5hdi5yZWR1Y2U8Um91dGVbXT4oKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ci5jaGlsZHJlbiksIFtdKS5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGhuYW1lID09PSBwYXRobmFtZSlcbiAgcmV0dXJuIG1hdGNoZWRSb3V0ZSB8fCBuYXZbMF0uY2hpbGRyZW5bMF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZSb3V0ZShwYXRobmFtZSA6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghcGF0aG5hbWUpIHJldHVybiAnLydcbiAgY29uc3QgcGF0aHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG4gIHBhdGhzLnBvcCgpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHBhdGhzLmZpbHRlcihwID0+ICFleGNlcHRSb3V0ZS5pbmNsdWRlcyhwKSkuam9pbignLycpXG4gIHJldHVybiAhcHJldlJvdXRlIHx8IHByZXZSb3V0ZSA9PT0gJycgPyAnLycgOiBwcmV2Um91dGVcbn1cblxuZXhwb3J0IHR5cGUgSGVyb1N0cmluZyA9IFtzdHJpbmcsIHN0cmluZ11bXVxuXG5leHBvcnQgY29uc3QgaGVyb1N0cmluZzogSGVyb1N0cmluZyA9IFtcbiAgWydcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJywgJ1x1QkQ4MFx1RDEzMCddLFxuICBbJ1x1QkUwQ1x1Qjc5Q1x1QjREQyBcdUFDMDBcdUM3NzRcdUI0REMnLCAnXHVBRTRDXHVDOUMwJ10sXG5dIiwgInR5cGUgQnVsbGV0U29saWRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnVsbGV0U29saWQoeyBjbGFzc05hbWUgfTogQnVsbGV0U29saWRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGggZD0nTTM4MS4yIDE3Mi44QzM3Ny4xIDE2NC45IDM2OC45IDE2MCAzNjAgMTYwaC0xNTYuNmw1MC44NC0xMjcuMWMyLjk2OS03LjM3NSAyLjA2Mi0xNS43OC0yLjQwNi0yMi4zOFMyMzkuMSAwIDIzMiAwaC0xNzZDNDMuOTcgMCAzMy44MSA4LjkwNiAzMi4yMiAyMC44NGwtMzIgMjQwQy0uNzE3OSAyNjcuNyAxLjM3NiAyNzQuNiA1LjkzOCAyNzkuOEMxMC41IDI4NSAxNy4wOSAyODggMjQgMjg4aDE0Ni4zbC00MS43OCAxOTQuMWMtMi40MDYgMTEuMjIgMy40NjkgMjIuNTYgMTQgMjcuMDlDMTQ1LjYgNTExLjQgMTQ4LjggNTEyIDE1MiA1MTJjNy43MTkgMCAxNS4yMi0zLjc1IDE5LjgxLTEwLjQ0bDIwOC0zMDRDMzg0LjggMTkwLjIgMzg1LjQgMTgwLjcgMzgxLjIgMTcyLjh6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzTGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00wIDQxNkMwIDQwNy4yIDcuMTY0IDQwMCAxNiA0MDBIODEuNkM4OS4wMSAzNjMuNSAxMjEuMyAzMzYgMTYwIDMzNkMxOTguNyAzMzYgMjMwLjEgMzYzLjUgMjM4LjQgNDAwSDQ5NkM1MDQuOCA0MDAgNTEyIDQwNy4yIDUxMiA0MTZDNTEyIDQyNC44IDUwNC44IDQzMiA0OTYgNDMySDIzOC40QzIzMC4xIDQ2OC41IDE5OC43IDQ5NiAxNjAgNDk2QzEyMS4zIDQ5NiA4OS4wMSA0NjguNSA4MS42IDQzMkgxNkM3LjE2NCA0MzIgMCA0MjQuOCAwIDQxNlY0MTZ6TTIwOCA0MTZDMjA4IDM4OS41IDE4Ni41IDM2OCAxNjAgMzY4QzEzMy41IDM2OCAxMTIgMzg5LjUgMTEyIDQxNkMxMTIgNDQyLjUgMTMzLjUgNDY0IDE2MCA0NjRDMTg2LjUgNDY0IDIwOCA0NDIuNSAyMDggNDE2ek0zNTIgMTc2QzM5MC43IDE3NiA0MjIuMSAyMDMuNSA0MzAuNCAyNDBINDk2QzUwNC44IDI0MCA1MTIgMjQ3LjIgNTEyIDI1NkM1MTIgMjY0LjggNTA0LjggMjcyIDQ5NiAyNzJINDMwLjRDNDIyLjEgMzA4LjUgMzkwLjcgMzM2IDM1MiAzMzZDMzEzLjMgMzM2IDI4MSAzMDguNSAyNzMuNiAyNzJIMTZDNy4xNjQgMjcyIDAgMjY0LjggMCAyNTZDMCAyNDcuMiA3LjE2NCAyNDAgMTYgMjQwSDI3My42QzI4MSAyMDMuNSAzMTMuMyAxNzYgMzUyIDE3NnpNNDAwIDI1NkM0MDAgMjI5LjUgMzc4LjUgMjA4IDM1MiAyMDhDMzI1LjUgMjA4IDMwNCAyMjkuNSAzMDQgMjU2QzMwNCAyODIuNSAzMjUuNSAzMDQgMzUyIDMwNEMzNzguNSAzMDQgNDAwIDI4Mi41IDQwMCAyNTZ6TTQ5NiA4MEM1MDQuOCA4MCA1MTIgODcuMTYgNTEyIDk2QzUxMiAxMDQuOCA1MDQuOCAxMTIgNDk2IDExMkgyNzAuNEMyNjIuMSAxNDguNSAyMzAuNyAxNzYgMTkyIDE3NkMxNTMuMyAxNzYgMTIxIDE0OC41IDExMy42IDExMkgxNkM3LjE2NCAxMTIgMCAxMDQuOCAwIDk2QzAgODcuMTYgNy4xNjQgODAgMTYgODBIMTEzLjZDMTIxIDQzLjQ4IDE1My4zIDE2IDE5MiAxNkMyMzAuNyAxNiAyNjIuMSA0My40OCAyNzAuNCA4MEg0OTZ6TTE0NCA5NkMxNDQgMTIyLjUgMTY1LjUgMTQ0IDE5MiAxNDRDMjE4LjUgMTQ0IDI0MCAxMjIuNSAyNDAgOTZDMjQwIDY5LjQ5IDIxOC41IDQ4IDE5MiA0OEMxNjUuNSA0OCAxNDQgNjkuNDkgMTQ0IDk2eicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBIb21lTGlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yNzcuNCA0LjAwMkMyODMuNS0xLjMzNCAyOTIuNS0xLjMzNCAyOTguNiA0LjAwMkwzODQgNzkuMzdWNTZDMzg0IDQyLjc1IDM5NC43IDMxLjEgNDA4IDMxLjFINDg4QzUwMS4zIDMxLjEgNTEyIDQyLjc1IDUxMiA1NlYxOTIuM0w1NzAuNiAyNDRDNTc3LjIgMjQ5LjggNTc3LjggMjU5LjEgNTcxLjEgMjY2LjZDNTY2LjIgMjczLjIgNTU2IDI3My44IDU0OS40IDI2Ny4xTDUxMiAyMzQuMVY0MzJDNTEyIDQ3Ni4yIDQ3Ni4yIDUxMiA0MzIgNTEySDE0NEM5OS44MiA1MTIgNjQgNDc2LjIgNjQgNDMyVjIzNC4xTDI2LjU5IDI2Ny4xQzE5Ljk2IDI3My44IDkuODQ5IDI3My4yIDQuMDAzIDI2Ni42Qy0xLjg0NCAyNTkuMS0xLjIxMiAyNDkuOCA1LjQxNCAyNDRMMjc3LjQgNC4wMDJ6TTQ4MCAxNjQuMVY2NEg0MTZWMTA3LjZMNDgwIDE2NC4xek05NiAyMDYuN1Y0MzJDOTYgNDU4LjUgMTE3LjUgNDgwIDE0NCA0ODBIMjA4VjMyMEMyMDggMzAyLjMgMjIyLjMgMjg4IDI0MCAyODhIMzM2QzM1My43IDI4OCAzNjggMzAyLjMgMzY4IDMyMFY0ODBINDMyQzQ1OC41IDQ4MCA0ODAgNDU4LjUgNDgwIDQzMlYyMDYuN0wyODggMzcuMzRMOTYgMjA2Ljd6TTI0MCAzMjBWNDgwSDMzNlYzMjBIMjQweicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBBcnJvd0xlZnRMaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInPlxuICAgICAgPHBhdGggZD0nTTIwMy45IDQwNS4zYzUuODc3IDYuNTk0IDUuMzYxIDE2LjY5LTEuMTg4IDIyLjYyYy02LjU2MiA1LjkwNi0xNi42OSA1LjM3NS0yMi41OS0xLjE4OEwzNi4xIDI2Ni43Yy01LjQ2OS02LjEyNS01LjQ2OS0xNS4zMSAwLTIxLjQ0bDE0NC0xNTkuMWM1LjkwNi02LjU2MiAxNi4wMy03LjA5NCAyMi41OS0xLjE4OGM2LjkxOCA2LjI3MSA2Ljc4MyAxNi4zOSAxLjE4OCAyMi42Mkw2OS41MyAyNTZMMjAzLjkgNDA1LjN6JyAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAidHlwZSBMb2dvUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oeyBjbGFzc05hbWUgPSAndy0xNiBoLTExJyB9OiBMb2dvUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PScwIDAgNjAgNDQnPlxuICAgICAgPGcgc3Ryb2tlPSdub25lJyBzdHJva2VXaWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbFJ1bGU9J2V2ZW5vZGQnPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTguMDAwMDAwLCAtMjYuMDAwMDAwKScgZmlsbFJ1bGU9J25vbnplcm8nPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE4LjAwMDAwMCwgMjYuMDAwMDAwKSc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMC45MzY2MzI4MzUsMzEuMDA0MjE5NCBDMC4zMTIyMTA5NDUsMzEuMDA0MjE5NCAwLDMwLjY5MTE1NTggMCwzMC4wNjUwMjg1IEwwLDE1Ljk3NzE2NTUgQzAsMTUuMzUxMDM4MyAwLjMxMjIxMDk0NSwxNS4wMzc5NzQ3IDAuOTM2NjMyODM1LDE1LjAzNzk3NDcgTDkuMzY2MzI4MzUsMTUuMDM3OTc0NyBDMTEuMTE0NzA5NiwxNS4wMzc5NzQ3IDEyLjQ4ODQzNzgsMTUuNDcyMzUwNSAxMy40ODc1MTI4LDE2LjM0MTEwMiBDMTQuNDg2NTg3OSwxNy4yMDk4NTM2IDE0Ljk4NjEyNTQsMTguNDE5MDYxOCAxNC45ODYxMjU0LDE5Ljk2ODcyNjcgQzE0Ljk4NjEyNTQsMjAuMzc1NzA5NCAxNC45Mjc1ODU4LDIwLjc0MzU1OTIgMTQuODEwNTA2NywyMS4wNzIyNzYgQzE0LjY5MzQyNzYsMjEuNDAwOTkyOCAxNC41NzI0NDU5LDIxLjY3NDkyMzUgMTQuNDQ3NTYxNSwyMS44OTQwNjggQzE0LjI5MTQ1NiwyMi4xNjAxNzIxIDE0LjExOTc0LDIyLjM5NDk2OTggMTMuOTMyNDEzNCwyMi41OTg0NjEyIEMxNC4yMjkwMTM4LDIyLjc3MDY0NjEgMTQuNTAyMTk4NCwyMy4wMTMyNzA1IDE0Ljc1MTk2NzIsMjMuMzI2MzM0MSBDMTQuOTcwNTE0OCwyMy41OTI0MzgyIDE1LjE2NTY0NjcsMjMuOTQ4NTQ4IDE1LjMzNzM2MjcsMjQuMzk0NjYzNyBDMTUuNTA5MDc4NywyNC44NDA3NzkzIDE1LjU5NDkzNjcsMjUuNDAwMzgwNiAxNS41OTQ5MzY3LDI2LjA3MzQ2NzQgQzE1LjU5NDkzNjcsMjYuNzc3ODYwNSAxNS40OTczNzA4LDI3LjQzMTM4MDggMTUuMzAyMjM4OSwyOC4wMzQwMjgzIEMxNS4xMDcxMDcxLDI4LjYzNjY3NTggMTQuNzcxNDgwMywyOS4xNTcxNDQgMTQuMjk1MzU4NiwyOS41OTU0MzMxIEMxMy44MTkyMzcsMzAuMDMzNzIyMiAxMy4xODMxMDcyLDMwLjM3ODA5MjIgMTIuMzg2OTY5MiwzMC42Mjg1NDMxIEMxMS41OTA4MzEzLDMwLjg3ODk5NCAxMC41ODM5NTEsMzEuMDA0MjE5NCA5LjM2NjMyODM1LDMxLjAwNDIxOTQgTDAuOTM2NjMyODM1LDMxLjAwNDIxOTQgWiBNOC4zMTI2MTY0MSwyMS4xNDI3MTUzIEM4LjUzMTE2NDA4LDIxLjE0MjcxNTMgOC43MjIzOTMyOCwyMS4wNjA1MzYxIDguODg2MzA0MDMsMjAuODk2MTc3NyBDOS4wNTAyMTQ3NywyMC43MzE4MTkzIDkuMTMyMTcwMTQsMjAuNTQwMDY3OCA5LjEzMjE3MDE0LDIwLjMyMDkyMzMgQzkuMTMyMTcwMTQsMjAuMTAxNzc4OCA5LjA1MDIxNDc3LDE5LjkxMDAyNzMgOC44ODYzMDQwMywxOS43NDU2Njg5IEM4LjcyMjM5MzI4LDE5LjU4MTMxMDUgOC41MzExNjQwOCwxOS40OTkxMzEzIDguMzEyNjE2NDEsMTkuNDk5MTMxMyBMNi4wODgxMTM0MywxOS40OTkxMzEzIEM1LjkzMjAwNzk2LDE5LjQ5OTEzMTMgNS44NTM5NTUyMiwxOS41NzczOTcyIDUuODUzOTU1MjIsMTkuNzMzOTI5IEw1Ljg1Mzk1NTIyLDIwLjkwNzkxNzYgQzUuODUzOTU1MjIsMjEuMDY0NDQ5NCA1LjkzMjAwNzk2LDIxLjE0MjcxNTMgNi4wODgxMTM0MywyMS4xNDI3MTUzIEw4LjMxMjYxNjQxLDIxLjE0MjcxNTMgWiBNOC41NDY3NzQ2MiwyNi41NDMwNjI4IEM4Ljc2NTMyMjI4LDI2LjU0MzA2MjggOC45NTY1NTE0OSwyNi40NjA4ODM2IDkuMTIwNDYyMjMsMjYuMjk2NTI1MiBDOS4yODQzNzI5OCwyNi4xMzIxNjY4IDkuMzY2MzI4MzUsMjUuOTQwNDE1MyA5LjM2NjMyODM1LDI1LjcyMTI3MDggQzkuMzY2MzI4MzUsMjUuNTAyMTI2MyA5LjI4NDM3Mjk4LDI1LjMxMDM3NDggOS4xMjA0NjIyMywyNS4xNDYwMTY0IEM4Ljk1NjU1MTQ5LDI0Ljk4MTY1OCA4Ljc2NTMyMjI4LDI0Ljg5OTQ3ODggOC41NDY3NzQ2MiwyNC44OTk0Nzg4IEw2LjA4ODExMzQzLDI0Ljg5OTQ3ODggQzUuOTMyMDA3OTYsMjQuODk5NDc4OCA1Ljg1Mzk1NTIyLDI0Ljk3Nzc0NDcgNS44NTM5NTUyMiwyNS4xMzQyNzY1IEw1Ljg1Mzk1NTIyLDI2LjMwODI2NTEgQzUuODUzOTU1MjIsMjYuNDY0Nzk2OSA1LjkzMjAwNzk2LDI2LjU0MzA2MjggNi4wODgxMTM0MywyNi41NDMwNjI4IEw4LjU0Njc3NDYyLDI2LjU0MzA2MjggWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tYidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTE2LjMzNzU1MjcsMjMuMDIxMDk3IEMxNi4zMzc1NTI3LDIxLjg2OTgzNDggMTYuNTUzMjQ0MSwyMC43ODQ2OTIzIDE2Ljk4NDYyNjgsMTkuNzY1NjY5NiBDMTcuNDE2MDA5NSwxOC43NDY2NDY5IDE4LjAwODE4MDIsMTcuODU5ODYzOCAxOC43NjExMzkxLDE3LjEwNTMyMDIgQzE5LjUxNDA5OCwxNi4zNTA3NzY3IDIwLjQwNDMxNSwxNS43NTU2OTg2IDIxLjQzMTc5MDEsMTUuMzIwMDg1OCBDMjIuNDU5MjY1MywxNC44ODQ0NzMgMjMuNTc2OTM4NiwxNC42NjY2NjY3IDI0Ljc4NDgxMDEsMTQuNjY2NjY2NyBDMjUuOTc2OTk1LDE0LjY2NjY2NjcgMjcuMDkwNzQ2NywxNC44ODQ0NzMgMjguMTI2MDY1MSwxNS4zMjAwODU4IEMyOS4xNjEzODM2LDE1Ljc1NTY5ODYgMzAuMDU1NTIyMywxNi4zNTA3NzY3IDMwLjgwODQ4MTEsMTcuMTA1MzIwMiBDMzEuNTYxNDQsMTcuODU5ODYzOCAzMi4xNTM2MTA4LDE4Ljc0NjY0NjkgMzIuNTg0OTkzNSwxOS43NjU2Njk2IEMzMy4wMTYzNzYyLDIwLjc4NDY5MjMgMzMuMjMyMDY3NSwyMS44Njk4MzQ4IDMzLjIzMjA2NzUsMjMuMDIxMDk3IEMzMy4yMzIwNjc1LDI0LjE3MjM1OTMgMzMuMDE2Mzc2MiwyNS4yNTc1MDE4IDMyLjU4NDk5MzUsMjYuMjc2NTI0NSBDMzIuMTUzNjEwOCwyNy4yOTU1NDcyIDMxLjU2MTQ0LDI4LjE4MjMzMDMgMzAuODA4NDgxMSwyOC45MzY4NzM5IEMzMC4wNTU1MjIzLDI5LjY5MTQxNzQgMjkuMTYxMzgzNiwzMC4yODY0OTU1IDI4LjEyNjA2NTEsMzAuNzIyMTA4MyBDMjcuMDkwNzQ2NywzMS4xNTc3MjEgMjUuOTc2OTk1LDMxLjM3NTUyNzQgMjQuNzg0ODEwMSwzMS4zNzU1Mjc0IEMyMy41NzY5Mzg2LDMxLjM3NTUyNzQgMjIuNDU5MjY1MywzMS4xNTc3MjEgMjEuNDMxNzkwMSwzMC43MjIxMDgzIEMyMC40MDQzMTUsMzAuMjg2NDk1NSAxOS41MTQwOTgsMjkuNjkxNDE3NCAxOC43NjExMzkxLDI4LjkzNjg3MzkgQzE4LjAwODE4MDIsMjguMTgyMzMwMyAxNy40MTYwMDk1LDI3LjI5NTU0NzIgMTYuOTg0NjI2OCwyNi4yNzY1MjQ1IEMxNi41NTMyNDQxLDI1LjI1NzUwMTggMTYuMzM3NTUyNywyNC4xNzIzNTkzIDE2LjMzNzU1MjcsMjMuMDIxMDk3IFogTTIyLjQzMTgxMzYsMjMuMDIxMDk3IEMyMi40MzE4MTM2LDIzLjc1MjMwNDIgMjIuNjMxODE4MywyNC4zNTUxNjExIDIzLjAzMTgyNzcsMjQuODI5NjY3OSBDMjMuNDMxODM3MSwyNS4zMDQxNzQ2IDI0LjAxNjE2NDYsMjUuNTQxNDI4IDI0Ljc4NDgxMDEsMjUuNTQxNDI4IEMyNS41Mzc3NjksMjUuNTQxNDI4IDI2LjExNDI1MzEsMjUuMzA0MTc0NiAyNi41MTQyNjI1LDI0LjgyOTY2NzkgQzI2LjkxNDI3MTksMjQuMzU1MTYxMSAyNy4xMTQyNzY2LDIzLjc1MjMwNDIgMjcuMTE0Mjc2NiwyMy4wMjEwOTcgQzI3LjExNDI3NjYsMjIuMjg5ODg5OSAyNi45MTQyNzE5LDIxLjY4NzAzMyAyNi41MTQyNjI1LDIxLjIxMjUyNjIgQzI2LjExNDI1MzEsMjAuNzM4MDE5NSAyNS41Mzc3NjksMjAuNTAwNzY2MSAyNC43ODQ4MTAxLDIwLjUwMDc2NjEgQzI0LjAxNjE2NDYsMjAuNTAwNzY2MSAyMy40MzE4MzcxLDIwLjczODAxOTUgMjMuMDMxODI3NywyMS4yMTI1MjYyIEMyMi42MzE4MTgzLDIxLjY4NzAzMyAyMi40MzE4MTM2LDIyLjI4OTg4OTkgMjIuNDMxODEzNiwyMy4wMjEwOTcgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tbydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTQ0LjU1Njk2MiwyNS42MDM4NzE5IEM0NS4xNzU4MDg3LDI1LjYwMzg3MTkgNDUuNDg1MjMyMSwyNS45MTY5MzU2IDQ1LjQ4NTIzMjEsMjYuNTQzMDYyOCBMNDUuNDg1MjMyMSwzMC4wNjUwMjg1IEM0NS40ODUyMzIxLDMwLjY5MTE1NTggNDUuMTc1ODA4NywzMS4wMDQyMTk0IDQ0LjU1Njk2MiwzMS4wMDQyMTk0IEwzNS4yNzQyNjE2LDMxLjAwNDIxOTQgQzM0LjY1NTQxNDksMzEuMDA0MjE5NCAzNC4zNDU5OTE2LDMwLjY5MTE1NTggMzQuMzQ1OTkxNiwzMC4wNjUwMjg1IEwzNC4zNDU5OTE2LDE1Ljk3NzE2NTUgQzM0LjM0NTk5MTYsMTUuMzUxMDM4MyAzNC42NTU0MTQ5LDE1LjAzNzk3NDcgMzUuMjc0MjYxNiwxNS4wMzc5NzQ3IEwzOS4yMTk0MDkzLDE1LjAzNzk3NDcgQzM5LjgzODI1NiwxNS4wMzc5NzQ3IDQwLjE0NzY3OTMsMTUuMzUxMDM4MyA0MC4xNDc2NzkzLDE1Ljk3NzE2NTUgTDQwLjE0NzY3OTMsMjQuODk5NDc4OCBDNDAuMTQ3Njc5MywyNS4xOTY4ODkyIDQwLjE5MDIyNSwyNS4zODg2NDA3IDQwLjI3NTMxNjUsMjUuNDc0NzMzMiBDNDAuMzYwNDA3OSwyNS41NjA4MjU3IDQwLjU0OTkyOTcsMjUuNjAzODcxOSA0MC44NDM4ODE5LDI1LjYwMzg3MTkgTDQ0LjU1Njk2MiwyNS42MDM4NzE5IFonXG4gICAgICAgICAgICAgIGlkPSdsb2dvLWwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtbG9nby1wcmltYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J000Ny4zNDgxNzQsMjAuNDM4MzIyMiBDNDYuNzI1MDU5NCwyMC40MzgzMjIyIDQ2LjQxMzUwMjEsMjAuMTI1MjU4NSA0Ni40MTM1MDIxLDE5LjQ5OTEzMTMgTDQ2LjQxMzUwMjEsMTUuOTc3MTY1NSBDNDYuNDEzNTAyMSwxNS4zNTEwMzgzIDQ2LjcyNTA1OTQsMTUuMDM3OTc0NyA0Ny4zNDgxNzQsMTUuMDM3OTc0NyBMNTkuMDMxNTcyOCwxNS4wMzc5NzQ3IEM1OS42NTQ2ODc0LDE1LjAzNzk3NDcgNTkuOTY2MjQ0NywxNS4zNTEwMzgzIDU5Ljk2NjI0NDcsMTUuOTc3MTY1NSBMNTkuOTY2MjQ0NywxOS40OTkxMzEzIEM1OS45NjYyNDQ3LDIwLjEyNTI1ODUgNTkuNjU0Njg3NCwyMC40MzgzMjIyIDU5LjAzMTU3MjgsMjAuNDM4MzIyMiBMNTYuODExNzI3LDIwLjQzODMyMjIgQzU2LjUxNTc0NzYsMjAuNDM4MzIyMiA1Ni4zMjQ5MTg4LDIwLjQ4MTM2ODQgNTYuMjM5MjQwNSwyMC41Njc0NjA5IEM1Ni4xNTM1NjIyLDIwLjY1MzU1MzQgNTYuMTEwNzIzMSwyMC44NDUzMDQ5IDU2LjExMDcyMzEsMjEuMTQyNzE1MyBMNTYuMTEwNzIzMSwzMC4wNjUwMjg1IEM1Ni4xMTA3MjMxLDMwLjY5MTE1NTggNTUuNzk5MTY1OCwzMS4wMDQyMTk0IDU1LjE3NjA1MTIsMzEuMDA0MjE5NCBMNTEuMjAzNjk1NiwzMS4wMDQyMTk0IEM1MC41ODA1ODEsMzEuMDA0MjE5NCA1MC4yNjkwMjM3LDMwLjY5MTE1NTggNTAuMjY5MDIzNywzMC4wNjUwMjg1IEw1MC4yNjkwMjM3LDIxLjE0MjcxNTMgQzUwLjI2OTAyMzcsMjAuODQ1MzA0OSA1MC4yMjYxODQ2LDIwLjY1MzU1MzQgNTAuMTQwNTA2MywyMC41Njc0NjA5IEM1MC4wNTQ4MjgxLDIwLjQ4MTM2ODQgNDkuODYzOTk5MiwyMC40MzgzMjIyIDQ5LjU2ODAxOTgsMjAuNDM4MzIyMiBMNDcuMzQ4MTc0LDIwLjQzODMyMjIgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28tdCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD0nTTIzLjgzNTExODUsMzkuMTQ4NTI1NiBDMjMuODM1MTE4NSwzOS40MTEzMTM4IDIzLjg3Mjk2MzMsMzkuNjIzNTY1OCAyMy45NDg2NTMsMzkuNzg1MjgxNiBDMjQuMDI0MzQyNywzOS45NDY5OTc0IDI0LjEyMDIxNjQsNDAuMDcwODExMSAyNC4yMzYyNzM5LDQwLjE1NjcyMjYgQzI0LjM1MjMzMTUsNDAuMjQyNjM0MiAyNC40NzM0MzUsNDAuMjk4MjI0IDI0LjU5OTU4NDYsNDAuMzIzNDkyMSBDMjQuNzI1NzM0MSw0MC4zNDg3NjAyIDI0Ljg0NDMxNDYsNDAuMzYxMzk0MiAyNC45NTUzMjYyLDQwLjM2MTM5NDIgQzI1LjA2NjMzNzgsNDAuMzYxMzk0MiAyNS4xODk5NjQzLDQwLjM0ODc2MDIgMjUuMzI2MjA1OCw0MC4zMjM0OTIxIEMyNS40NjI0NDczLDQwLjI5ODIyNCAyNS41ODg1OTY4LDQwLjI0MjYzNDIgMjUuNzA0NjU0Myw0MC4xNTY3MjI2IEMyNS44MjA3MTE5LDQwLjA3MDgxMTEgMjUuOTE2NTg1NSwzOS45NDY5OTc0IDI1Ljk5MjI3NTIsMzkuNzg1MjgxNiBDMjYuMDY3OTY0OSwzOS42MjM1NjU4IDI2LjEwNTgwOTgsMzkuNDExMzEzOCAyNi4xMDU4MDk4LDM5LjE0ODUyNTYgTDI2LjEwNTgwOTgsMzQuMDI0MTU1OCBDMjYuMTA1ODA5OCwzMy42MTk4NjYzIDI2LjMwNzY0OSwzMy40MTc3MjE1IDI2LjcxMTMyNzUsMzMuNDE3NzIxNSBMMjkuMjg0Nzc3NywzMy40MTc3MjE1IEMyOS42ODg0NTYxLDMzLjQxNzcyMTUgMjkuODkwMjk1NCwzMy42MTk4NjYzIDI5Ljg5MDI5NTQsMzQuMDI0MTU1OCBMMjkuODkwMjk1NCwzOS4xNzg4NDczIEMyOS44OTAyOTU0LDM5Ljg5NjQ2MTMgMjkuNzk0NDIxNyw0MC41NTA5MDQ5IDI5LjYwMjY3NDUsNDEuMTQyMTc4NCBDMjkuNDEwOTI3Miw0MS43MzM0NTE4IDI5LjExMzIxNDMsNDIuMjQxMzQwNSAyOC43MDk1MzU5LDQyLjY2NTg0NDUgQzI4LjMwNTg1NzQsNDMuMDkwMzQ4NiAyNy43OTM2OTA0LDQzLjQxODgzMzggMjcuMTczMDM0Nyw0My42NTEzMDAzIEMyNi41NTIzNzkxLDQzLjg4Mzc2NjggMjUuODE4MTg4OSw0NCAyNC45NzA0NjQxLDQ0IEMyNC4xMjI3Mzk0LDQ0IDIzLjM4ODU0OTIsNDMuODgzNzY2OCAyMi43Njc4OTM1LDQzLjY1MTMwMDMgQzIyLjE0NzIzNzksNDMuNDE4ODMzOCAyMS42MzUwNzA5LDQzLjA5MDM0ODYgMjEuMjMxMzkyNCw0Mi42NjU4NDQ1IEMyMC44Mjc3MTM5LDQyLjI0MTM0MDUgMjAuNTMwMDAxMSw0MS43MzM0NTE4IDIwLjMzODI1MzgsNDEuMTQyMTc4NCBDMjAuMTQ2NTA2NSw0MC41NTA5MDQ5IDIwLjA1MDYzMjksMzkuODk2NDYxMyAyMC4wNTA2MzI5LDM5LjE3ODg0NzMgTDIwLjA1MDYzMjksMzQuMDI0MTU1OCBDMjAuMDUwNjMyOSwzMy42MTk4NjYzIDIwLjI1MjQ3MjEsMzMuNDE3NzIxNSAyMC42NTYxNTA2LDMzLjQxNzcyMTUgTDIzLjIyOTYwMDgsMzMuNDE3NzIxNSBDMjMuNjMzMjc5MiwzMy40MTc3MjE1IDIzLjgzNTExODUsMzMuNjE5ODY2MyAyMy44MzUxMTg1LDM0LjAyNDE1NTggTDIzLjgzNTExODUsMzkuMTQ4NTI1NiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby11J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zMS4yNDcxNzcyLDM0LjM5Mzc3MDIgQzMxLjE3ODIwNTIsMzQuMjkzNjYyNiAzMS4xNDM3MTkyLDM0LjE2ODUyODIgMzEuMTQzNzE5MiwzNC4wMTgzNjY4IEMzMS4xNDM3MTkyLDMzLjYxNzkzNjYgMzEuMzQwNzgyMSwzMy40MTc3MjE1IDMxLjczNDkwOCwzMy40MTc3MjE1IEwzNC45NzE2NjYzLDMzLjQxNzcyMTUgQzM1LjE1ODg3NjEsMzMuNDE3NzIxNSAzNS4zMDE3NDY3LDMzLjQ3NTI4MzQgMzUuNDAwMjc4MiwzMy41OTA0MDcgQzM1LjQ5ODgwOTYsMzMuNzA1NTMwNyAzNS41OTI0MTQ1LDMzLjg0ODE4NCAzNS42ODEwOTI4LDM0LjAxODM2NjggTDM2LjI3MjI4MTUsMzUuMTE0NTQ0NiBMMzYuOTY2OTI4MywzNC4wMTgzNjY4IEMzNy4wNzUzMTI5LDMzLjg0ODE4NCAzNy4xNzg3NzA5LDMzLjcwNTUzMDcgMzcuMjc3MzAyNCwzMy41OTA0MDcgQzM3LjM3NTgzMzksMzMuNDc1MjgzNCAzNy40OTg5OTgyLDMzLjQxNzcyMTUgMzcuNjQ2Nzk1NCwzMy40MTc3MjE1IEw0MC42MzIyOTg1LDMzLjQxNzcyMTUgQzQxLjAyNjQyNDMsMzMuNDE3NzIxNSA0MS4yMjM0ODczLDMzLjYxNzkzNjYgNDEuMjIzNDg3MywzNC4wMTgzNjY4IEM0MS4yMjM0ODczLDM0LjE2ODUyODIgNDEuMTg5MDAxMiwzNC4yOTM2NjI2IDQxLjEyMDAyOTIsMzQuMzkzNzcwMiBMMzguNjk2MTU1NCwzOC4xMTc3NzEyIEw0MS4zMTIxNjU2LDQyLjY2NzY1OTUgQzQxLjM3MTI4NDQsNDIuNzc3Nzc3OCA0MS40MDA4NDM5LDQyLjg5NzkwNjggNDEuNDAwODQzOSw0My4wMjgwNDY3IEM0MS40MDA4NDM5LDQzLjQyODQ3NjkgNDEuMjAzNzgxLDQzLjYyODY5MiA0MC44MDk2NTUxLDQzLjYyODY5MiBMMzcuNzk0NTkyNiw0My42Mjg2OTIgQzM3LjYyNzA4OTEsNDMuNjI4NjkyIDM3LjQ4OTE0NSw0My41Njg2Mjc1IDM3LjM4MDc2MDQsNDMuNDQ4NDk4NCBDMzcuMjcyMzc1OCw0My4zMjgzNjkzIDM3LjE2Mzk5MTIsNDMuMTg4MjE4NyAzNy4wNTU2MDY2LDQzLjAyODA0NjcgTDM2LjA4MDE0NTIsNDEuMzMxMjIzNiBMMzUuMTYzODAyNyw0My4wMjgwNDY3IEMzNS4wNTU0MTgxLDQzLjE4ODIxODcgMzQuOTU0NDIzMyw0My4zMjgzNjkzIDM0Ljg2MDgxODQsNDMuNDQ4NDk4NCBDMzQuNzY3MjEzNSw0My41Njg2Mjc1IDM0LjYyMTg3OTYsNDMuNjI4NjkyIDM0LjQyNDgxNjcsNDMuNjI4NjkyIEwzMS40MDk3NTQxLDQzLjYyODY5MiBDMzEuMDE1NjI4Myw0My42Mjg2OTIgMzAuODE4NTY1NCw0My40Mjg0NzY5IDMwLjgxODU2NTQsNDMuMDI4MDQ2NyBDMzAuODE4NTY1NCw0Mi45MDc5MTc2IDMwLjg0MzE5ODMsNDIuNzk3Nzk5MyAzMC44OTI0NjQsNDIuNjk3NjkxNyBMMzMuNjU2MjcxNCwzOC4xMDI3NTUgTDMxLjI0NzE3NzIsMzQuMzkzNzcwMiBaJ1xuICAgICAgICAgICAgICBpZD0nbG9nby14J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J4LWxvZ28tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00zNS41NTY0OTAyLDUuMzg4NjA3NTkgQzM1LjQyNTY1OTIsNS4xNDIyNTM0MyAzNS4xNjM5OTcxLDQuOTg5NDUxNDggMzQuODc5OTk4MSw0Ljk4OTQ1MTQ4IEwyOS44ODI4OTE1LDQuOTg5NDUxNDggTDMxLjUwNTE5NjEsMS4wMjU5NTU5NiBDMzEuNTk5OTM2OSwwLjc5NTk3MzQzMSAzMS41NzA5OTQ1LDAuNTMzODcxMzA4IDMxLjQyODQyMDYsMC4zMjgwNTY0MzUgQzMxLjI4NTg0NjcsMC4xMjIyNDE1NjEgMzEuMDIyMDc4NywwIDMwLjc5NTUxNzYsMCBMMjUuMTc5MzU3LDAgQzI0Ljc5NTQ3OTYsMCAyNC40NzEyNzQsMC4yNzc3MjUzNDMgMjQuNDIwNTM3MSwwLjY0OTg3NjA1NSBMMjMuMzk5NDE3LDguMTM0MDUzMjcgQzIzLjM2OTQ4ODYsOC4zNDc5NzYgMjMuNDM2MzA0OSw4LjU2MzE0NjEgMjMuNTgxODc4NCw4LjcyNTMwMzI3IEMyMy43Mjc0NTE4LDguODg3NDYwNDQgMjMuOTM3NzM4Nyw4Ljk4MTAxMjY2IDI0LjE1ODIzNjksOC45ODEwMTI2NiBMMjguODI2NjcwNCw4Ljk4MTAxMjY2IEwyNy40OTM0NzA0LDE1LjAzMzg0MSBDMjcuNDE2Njk1LDE1LjM4MzcyNjMgMjcuNjA0MTY2MiwxNS43MzczNTM2IDI3Ljk0MDIxMDUsMTUuODc4NjE3NSBDMjguMDM4NDkzMywxNS45NDc1MzQzIDI4LjE0MDYwNTMsMTUuOTY2MjQ0NyAyOC4yNDI3MTczLDE1Ljk2NjI0NDcgQzI4LjQ4OTAzMDYsMTUuOTY2MjQ0NyAyOC43MjgzODc2LDE1Ljg0OTMwNDUgMjguODc0ODU0NSwxNS42NDA2ODMgTDM1LjUxMjEzNTMsNi4xNjA3MjUyMSBDMzUuNjcxMzY2Miw1LjkzMTIxMDQ0IDM1LjY5MDUxMjIsNS42MzQ5NjE3NiAzNS41NTY0OTAyLDUuMzg4NjA3NTkgWidcbiAgICAgICAgICAgICAgaWQ9J2xvZ28taWNvbidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdieC1sb2dvLXByaW1hcnknXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNjQwIDQ2NHYzMmExNiAxNiAwIDAgMS0xNiAxNkgxNmExNiAxNiAwIDAgMS0xNi0xNnYtMzJhMTYgMTYgMCAwIDEgMTYtMTZoNjA4YTE2IDE2IDAgMCAxIDE2IDE2eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNNDAuNjggNDQ4bDIzOS43OS0zMzAuMjUtNTMuNDEtNzMuNTVhMTYgMTYgMCAwIDEgMy41NC0yMi4zNWwyNS44OC0xOC44YTE2IDE2IDAgMCAxIDIyLjM1IDMuNTVMMzIwIDYzLjNsNDEuMTYtNTYuNjlhMTYgMTYgMCAwIDEgMjIuMzUtMy41NWwyNS45IDE4Ljc5QTE2IDE2IDAgMCAxIDQxMyA0NC4ybC01My40MSA3My41NUw1OTkuMzIgNDQ4aC0xNjNMMzIwIDI4OCAyMDMuNjQgNDQ4eidcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZXBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00zNTIgMjU2YTI0IDI0IDAgMSAwIDI0IDI0IDI0IDI0IDAgMCAwLTI0LTI0em0tMTk0LjQ4IDE2aDM3TDE3NiAyMTguNzh6TTQ2NCA2NEg0OGE0OCA0OCAwIDAgMC00OCA0OHYyODhhNDggNDggMCAwIDAgNDggNDhoNDE2YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjExMmE0OCA0OCAwIDAgMC00OC00OHpNMjUwLjU4IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMTAuNzVMMjExLjE1IDMyMGgtNzAuMjlsLTcuMzggMjEuMjVBMTYgMTYgMCAwIDEgMTE4LjM2IDM1MmgtMTYuOTRhMTYgMTYgMCAwIDEtMTUuMTItMjEuMjVMMTQwIDE3Ni4xMkEyNCAyNCAwIDAgMSAxNjIuNjcgMTYwaDI2LjY2QTI0IDI0IDAgMCAxIDIxMiAxNzYuMTNsNTMuNjkgMTU0LjYyQTE2IDE2IDAgMCAxIDI1MC41OCAzNTJ6TTQyNCAzMzZhMTYgMTYgMCAwIDEtMTYgMTZoLTE2YTE1Ljc0IDE1Ljc0IDAgMCAxLTEyLTUuNjhBNzIgNzIgMCAxIDEgMzUyIDIwOGE3MS4wNSA3MS4wNSAwIDAgMSAyNCA0LjQyVjE3NmExNiAxNiAwIDAgMSAxNi0xNmgxNmExNiAxNiAwIDAgMSAxNiAxNnonXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTIxMiAxNzYuMTNBMjQgMjQgMCAwIDAgMTg5LjMzIDE2MGgtMjYuNjZBMjQgMjQgMCAwIDAgMTQwIDE3Ni4xMkw4Ni4zIDMzMC43NUExNiAxNiAwIDAgMCAxMDEuNDIgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjEyLTEwLjc1bDcuMzgtMjEuMjVoNzAuMjlsNy4zNyAyMS4yNUExNiAxNiAwIDAgMCAyMzMuNjQgMzUyaDE2Ljk0YTE2IDE2IDAgMCAwIDE1LjExLTIxLjI1ek0xNTcuNTIgMjcyTDE3NiAyMTguNzggMTk0LjQ4IDI3MnpNNDA4IDE2MGgtMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzYuNDJhNzEuMDUgNzEuMDUgMCAwIDAtMjQtNC40MiA3MiA3MiAwIDEgMCAyOCAxMzguMzIgMTUuNzQgMTUuNzQgMCAwIDAgMTIgNS42OGgxNmExNiAxNiAwIDAgMCAxNi0xNlYxNzZhMTYgMTYgMCAwIDAtMTYtMTZ6bS01NiAxNDRhMjQgMjQgMCAxIDEgMjQtMjQgMjQgMjQgMCAwIDEtMjQgMjR6J1xuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXJyb3dSaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyMCA1MTInPlxuICAgICAgPHBhdGggZD0nTTI4NS40NzYgMjcyLjk3MUw5MS4xMzIgNDY3LjMxNGMtOS4zNzMgOS4zNzMtMjQuNTY5IDkuMzczLTMzLjk0MSAwbC0yMi42NjctMjIuNjY3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxODguNTA1IDI1NiAzNC40ODQgMTAxLjI1NWMtOS4zMzUtOS4zNzktOS4zMTctMjQuNTQ0LjA0LTMzLjkwMWwyMi42NjctMjIuNjY3YzkuMzczLTkuMzczIDI0LjU2OS05LjM3MyAzMy45NDEgMEwyODUuNDc1IDIzOS4wM2M5LjM3MyA5LjM3MiA5LjM3MyAyNC41NjguMDAxIDMzLjk0MXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHVibGlzaGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yNTYgMHYxMjhoMTI4TDI1NiAwek0xNTQuMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMGwtNDggNDhjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMWw0OCA0OEMxMjkuOCAzODYuMSAxMzQuOSAzODggMTQwIDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMTIwLjMgMzIwbDMzLjg2LTMzLjg0QzE2MS4xIDI3OC4zIDE2MS4xIDI2NS43IDE1NC4xIDI1Ny44ek0yNTguMSAyNTcuOGMtNy44MTItNy44MTItMjAuNDctNy44MTItMjguMjggMHMtNy44MTIgMjAuNSAwIDI4LjMxTDI2My43IDMyMGwtMzMuODYgMzMuODRjLTcuODEyIDcuODEyLTcuODEyIDIwLjUgMCAyOC4zMUMyMzMuOCAzODYuMSAyMzguOSAzODggMjQ0IDM4OHMxMC4yMy0xLjkzOCAxNC4xNC01Ljg0NGw0OC00OGM3LjgxMi03LjgxMiA3LjgxMi0yMC41IDAtMjguMzFMMjU4LjEgMjU3Ljh6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yNTYgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDE2QzAgNDkwLjUgMjEuNDkgNTEyIDQ4IDUxMmgyODhjMjYuNTEgMCA0OC0yMS40OSA0OC00OFYxMjhIMjU2ek0xNTQuMSAzNTMuOGM3LjgxMiA3LjgxMiA3LjgxMiAyMC41IDAgMjguMzFDMTUwLjIgMzg2LjEgMTQ1LjEgMzg4IDE0MCAzODhzLTEwLjIzLTEuOTM4LTE0LjE0LTUuODQ0bC00OC00OGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxbDQ4LTQ4YzcuODEyLTcuODEyIDIwLjQ3LTcuODEyIDI4LjI4IDBzNy44MTIgMjAuNSAwIDI4LjMxTDEyMC4zIDMyMEwxNTQuMSAzNTMuOHpNMzA2LjEgMzM0LjJsLTQ4IDQ4QzI1NC4yIDM4Ni4xIDI0OS4xIDM4OCAyNDQgMzg4cy0xMC4yMy0xLjkzOC0xNC4xNC01Ljg0NGMtNy44MTItNy44MTItNy44MTItMjAuNSAwLTI4LjMxTDI2My43IDMyMGwtMzMuODYtMzMuODRjLTcuODEyLTcuODEyLTcuODEyLTIwLjUgMC0yOC4zMXMyMC40Ny03LjgxMiAyOC4yOCAwbDQ4IDQ4QzMxMy4xIDMxMy43IDMxMy4xIDMyNi4zIDMwNi4xIDMzNC4yeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQXBwZGVzaWduKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTQxMi43IDI1Ni4xQzM4Ny4xIDI4MC4zIDM1Ny43IDI5OC44IDMyNC4xIDMwOS41TDI1NiAxOTJIMjU1LjFMOTguNjUgNDYzLjdDOTMuOTUgNDcxLjggODYuOTcgNDc4LjQgNzguNTggNDgyLjZMMjMuMTYgNTEwLjNDMTguMiA1MTIuOCAxMi4zMSA1MTIuNSA3LjU4OCA1MDkuNkMyLjg3MSA1MDYuNyAwIDUwMS41IDAgNDk2VjQ0MC42QzAgNDMyLjIgMi4yMjggNDIzLjkgNi40NiA0MTYuNUwxNjguOCAxMzYuMkMxNjMuMSAxMjMuOSAxNjAgMTEwLjMgMTYwIDk2QzE2MCA0Mi45OCAyMDIuMSAwIDI1NiAwQzMwOSAwIDM1MiA0Mi45OCAzNTIgOTZDMzUyIDExMC4zIDM0OC45IDEyMy45IDM0My4yIDEzNi4yTDQxMi43IDI1Ni4xek0yNTUuMSA2NEMyMzguMyA2NCAyMjMuMSA3OC4zMyAyMjMuMSA5NkMyMjMuMSAxMTMuNyAyMzguMyAxMjggMjU1LjEgMTI4QzI3My43IDEyOCAyODggMTEzLjcgMjg4IDk2QzI4OCA3OC4zMyAyNzMuNyA2NCAyNTUuMSA2NHpNMzU2LjcgMzY1LjlDMzg5LjYgMzUzLjYgNDE5LjYgMzM1LjUgNDQ1LjUgMzEyLjlMNTA1LjUgNDE2LjVDNTA5LjggNDIzLjkgNTEyIDQzMi4yIDUxMiA0NDAuNlY0OTZDNTEyIDUwMS41IDUwOS4xIDUwNi43IDUwNC40IDUwOS42QzQ5OS43IDUxMi41IDQ5My44IDUxMi44IDQ4OC44IDUxMC4zTDQzMy40IDQ4Mi42QzQyNSA0NzguNCA0MTggNDcxLjggNDEzLjMgNDYzLjdMMzU2LjcgMzY1Ljl6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J002Ni40OSAzMTIuOUM1My42NiAzMDEuNiA0MS44NCAyODkuMyAzMS4xOCAyNzZDMjAuMTMgMjYyLjIgMjIuMzQgMjQyLjEgMzYuMTMgMjMxQzQ5LjkyIDIxOS4xIDcwLjA2IDIyMi4yIDgxLjEyIDIzNS4xQzg2Ljc5IDI0My4xIDkyLjg3IDI0OS44IDk5LjM0IDI1Ni4xTDY2LjQ5IDMxMi45ek0xNTUuMyAzNjUuOUwxODcuOSAzMDkuNUMyMDkuNCAzMTYuMyAyMzIuMyAzMjAgMjU1LjEgMzIwQzMyNi43IDMyMCAzODkuOCAyODcuMyA0MzAuOSAyMzUuMUM0NDEuOSAyMjIuMiA0NjIuMSAyMTkuMSA0NzUuOSAyMzFDNDg5LjcgMjQyLjEgNDkxLjkgMjYyLjIgNDgwLjggMjc2QzQyOC4xIDM0MS44IDM0Ni4xIDM4NCAyNTUuMSAzODRDMjIwLjYgMzg0IDE4Ni42IDM3Ny42IDE1NS4zIDM2NS45SDE1NS4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQnJhbmRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1wcmltYXJ5J1xuICAgICAgICBkPSdNMjg4IDk2QzI4OCAxMTMuNyAyNzMuNyAxMjggMjU2IDEyOEMyMzguMyAxMjggMjI0IDExMy43IDIyNCA5NkMyMjQgNzguMzMgMjM4LjMgNjQgMjU2IDY0QzI3My43IDY0IDI4OCA3OC4zMyAyODggOTZ6TTk2IDE2MEM5NiAxNDIuMyAxMTAuMyAxMjggMTI4IDEyOEMxNDUuNyAxMjggMTYwIDE0Mi4zIDE2MCAxNjBDMTYwIDE3Ny43IDE0NS43IDE5MiAxMjggMTkyQzExMC4zIDE5MiA5NiAxNzcuNyA5NiAxNjB6TTY0IDI4OEM2NCAyNzAuMyA3OC4zMyAyNTYgOTYgMjU2QzExMy43IDI1NiAxMjggMjcwLjMgMTI4IDI4OEMxMjggMzA1LjcgMTEzLjcgMzIwIDk2IDMyMEM3OC4zMyAzMjAgNjQgMzA1LjcgNjQgMjg4ek0zNTIgMTYwQzM1MiAxNDIuMyAzNjYuMyAxMjggMzg0IDEyOEM0MDEuNyAxMjggNDE2IDE0Mi4zIDQxNiAxNjBDNDE2IDE3Ny43IDQwMS43IDE5MiAzODQgMTkyQzM2Ni4zIDE5MiAzNTIgMTc3LjcgMzUyIDE2MHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTUxMiAyNTUuMUM1MTIgMjU2LjkgNTExLjEgMjU3LjggNTExLjEgMjU4LjdDNTExLjYgMjk1LjIgNDc4LjQgMzE5LjEgNDQxLjkgMzE5LjFIMzQ0QzMxNy41IDMxOS4xIDI5NiAzNDEuNSAyOTYgMzY4QzI5NiAzNzEuNCAyOTYuNCAzNzQuNyAyOTcgMzc3LjlDMjk5LjIgMzg4LjEgMzAzLjUgMzk3LjEgMzA3LjkgNDA3LjhDMzEzLjkgNDIxLjYgMzIwIDQzNS4zIDMyMCA0NDkuOEMzMjAgNDgxLjcgMjk4LjQgNTEwLjUgMjY2LjYgNTExLjhDMjYzLjEgNTExLjkgMjU5LjUgNTEyIDI1NiA1MTJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZDMCAxMTQuNiAxMTQuNiAwIDI1NiAwQzM5Ny40IDAgNTEyIDExNC42IDUxMiAyNTZWMjU1LjF6TTk2IDI1NS4xQzc4LjMzIDI1NS4xIDY0IDI3MC4zIDY0IDI4Ny4xQzY0IDMwNS43IDc4LjMzIDMxOS4xIDk2IDMxOS4xQzExMy43IDMxOS4xIDEyOCAzMDUuNyAxMjggMjg3LjFDMTI4IDI3MC4zIDExMy43IDI1NS4xIDk2IDI1NS4xek0xMjggMTkxLjFDMTQ1LjcgMTkxLjEgMTYwIDE3Ny43IDE2MCAxNTkuMUMxNjAgMTQyLjMgMTQ1LjcgMTI3LjEgMTI4IDEyNy4xQzExMC4zIDEyNy4xIDk2IDE0Mi4zIDk2IDE1OS4xQzk2IDE3Ny43IDExMC4zIDE5MS4xIDEyOCAxOTEuMXpNMjU2IDYzLjFDMjM4LjMgNjMuMSAyMjQgNzguMzMgMjI0IDk1LjFDMjI0IDExMy43IDIzOC4zIDEyNy4xIDI1NiAxMjcuMUMyNzMuNyAxMjcuMSAyODggMTEzLjcgMjg4IDk1LjFDMjg4IDc4LjMzIDI3My43IDYzLjEgMjU2IDYzLjF6TTM4NCAxOTEuMUM0MDEuNyAxOTEuMSA0MTYgMTc3LjcgNDE2IDE1OS4xQzQxNiAxNDIuMyA0MDEuNyAxMjcuMSAzODQgMTI3LjFDMzY2LjMgMTI3LjEgMzUyIDE0Mi4zIDM1MiAxNTkuMUMzNTIgMTc3LjcgMzY2LjMgMTkxLjEgMzg0IDE5MS4xeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbmV3cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00wIDEyOHYzMDRDMCA0NTguNSAyMS40OSA0ODAgNDggNDgwUzk2IDQ1OC41IDk2IDQzMlY5NkgzMkMxNC4zMyA5NiAwIDExMC4zIDAgMTI4ek0yNzIgMjg4aC05NkMxNjcuMiAyODggMTYwIDI5NS4yIDE2MCAzMDRDMTYwIDMxMi44IDE2Ny4yIDMyMCAxNzYgMzIwaDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDMjg4IDI5NS4yIDI4MC44IDI4OCAyNzIgMjg4ek0zMzYgMzIwaDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDNDQ4IDI5NS4yIDQ0MC44IDI4OCA0MzIgMjg4aC05NkMzMjcuMiAyODggMzIwIDI5NS4yIDMyMCAzMDRDMzIwIDMxMi44IDMyNy4yIDMyMCAzMzYgMzIwek0yNzIgMzg0aC05NkMxNjcuMiAzODQgMTYwIDM5MS4yIDE2MCA0MDBDMTYwIDQwOC44IDE2Ny4yIDQxNiAxNzYgNDE2aDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDMjg4IDM5MS4yIDI4MC44IDM4NCAyNzIgMzg0ek00MzIgMzg0aC05NmMtOC44MzYgMC0xNiA3LjE2Mi0xNiAxNmMwIDguODM2IDcuMTY0IDE2IDE2IDE2aDk2YzguODM2IDAgMTYtNy4xNjQgMTYtMTZDNDQ4IDM5MS4yIDQ0MC44IDM4NCA0MzIgMzg0eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNNDgwIDMySDEyOEMxMTAuMyAzMiA5NiA0Ni4zMyA5NiA2NHYzNjhDOTYgNDU4LjUgNzQuNTEgNDgwIDQ4IDQ4MEg0NDhjMzUuMzUgMCA2NC0yOC42NSA2NC02NFY2NEM1MTIgNDYuMzMgNDk3LjcgMzIgNDgwIDMyek0yNzIgNDE2aC05NkMxNjcuMiA0MTYgMTYwIDQwOC44IDE2MCA0MDBDMTYwIDM5MS4yIDE2Ny4yIDM4NCAxNzYgMzg0aDk2YzguODM2IDAgMTYgNy4xNjIgMTYgMTZDMjg4IDQwOC44IDI4MC44IDQxNiAyNzIgNDE2ek0yNzIgMzIwaC05NkMxNjcuMiAzMjAgMTYwIDMxMi44IDE2MCAzMDRDMTYwIDI5NS4yIDE2Ny4yIDI4OCAxNzYgMjg4aDk2QzI4MC44IDI4OCAyODggMjk1LjIgMjg4IDMwNEMyODggMzEyLjggMjgwLjggMzIwIDI3MiAzMjB6TTQzMiA0MTZoLTk2Yy04LjgzNiAwLTE2LTcuMTY0LTE2LTE2YzAtOC44MzggNy4xNjQtMTYgMTYtMTZoOTZjOC44MzYgMCAxNiA3LjE2MiAxNiAxNkM0NDggNDA4LjggNDQwLjggNDE2IDQzMiA0MTZ6TTQzMiAzMjBoLTk2QzMyNy4yIDMyMCAzMjAgMzEyLjggMzIwIDMwNEMzMjAgMjk1LjIgMzI3LjIgMjg4IDMzNiAyODhoOTZDNDQwLjggMjg4IDQ0OCAyOTUuMiA0NDggMzA0QzQ0OCAzMTIuOCA0NDAuOCAzMjAgNDMyIDMyMHpNNDQ4IDIwOEM0NDggMjE2LjggNDQwLjggMjI0IDQzMiAyMjRoLTI1NkMxNjcuMiAyMjQgMTYwIDIxNi44IDE2MCAyMDh2LTk2QzE2MCAxMDMuMiAxNjcuMiA5NiAxNzYgOTZoMjU2QzQ0MC44IDk2IDQ0OCAxMDMuMiA0NDggMTEyVjIwOHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIG5vdGljZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xOTIgMjI0YzEzLjI1IDAgMjQtMTAuNzUgMjQtMjR2LTExMkMyMTYgNzQuNzUgMjA1LjMgNjQgMTkyIDY0UzE2OCA3NC43NSAxNjggODh2MTEyQzE2OCAyMTMuMyAxNzguOCAyMjQgMTkyIDIyNHpNMTkyIDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMycy0xNC4zMy0zMi0zMi0zMlMxNjAgMjcwLjMgMTYwIDI4OFMxNzQuMyAzMjAgMTkyIDMyMHpNMTEyLjMgMzg0bC0uMDkwNiA3MC4zNWMwIDYuMjk3IDEuODg2IDEyLjQzIDUuMzU1IDE3LjY4bDE3LjA4IDI1LjY5QzEzOS44IDUwNS42IDE1MS44IDUxMiAxNjEuMiA1MTJoNjEuNjdjOS40MzggMCAyMS4zNi02LjM5NSAyNi42MS0xNC4yN2wxNy4zNC0yNS43YzIuOTM4LTQuNDM4IDUuMDk3LTEyLjM1IDUuMDk3LTE3LjY4bC4yMTU2LTcwLjM1TDExMi4zIDM4NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTE5MS41IC4wMTI3Qzg5LjQ3IC4yNjI3IDE2IDgyLjEgMTYgMTc1LjFjMCA0NC4zOCAxNi41MiA4NC44OSA0My41MiAxMTUuOGMxNi42MiAxOC44OCA0Mi4zNiA1OC4yMyA1Mi4yNCA5MS40OGMwIC4yNSAuMTE0NiAuNTEwNCAuMTE0NiAuNzYwNGwxNjAuMyAuMDAwNmMwLS4yNSAuMDgzMy0uNTExMSAuMDgzMy0uNzYxMWM5Ljg3NS0zMy4yNSAzNS42MS03Mi42MSA1Mi4yNC05MS40OEMzNTEuNSAyNjAuOSAzNjggMjIwLjQgMzY4IDE3NS4xQzM2OCA3OC42MiAyODguOC0uMjM3MyAxOTEuNSAuMDEyN3pNMTY4IDg4QzE2OCA3NC43NSAxNzguOCA2NCAxOTIgNjRzMjQgMTAuNzUgMjQgMjR2MTEyQzIxNiAyMTMuMyAyMDUuMyAyMjQgMTkyIDIyNFMxNjggMjEzLjMgMTY4IDIwMFY4OHpNMTkyIDMyMGMtMTcuNjcgMC0zMi0xNC4zMy0zMi0zMnMxNC4zMy0zMiAzMi0zMnMzMiAxNC4zMyAzMiAzMlMyMDkuNyAzMjAgMTkyIDMyMHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00yOTguOSAzMDkuNmwtNDUuNjQtNi42ODhsLTIwLjM2LTQxLjRjLTMuNjI1LTcuMzc1LTE0LjE2LTcuNS0xNy45MSAwTDE5NC43IDMwMi45TDE0OSAzMDkuNmMtOC4yNSAxLjEyNS0xMS4zNyAxMS4yMi01LjQ5MSAxNy4xbDMyLjk0IDMyLjFsLTcuNzcyIDQ1LjU1Yy0xLjUgOC4yNSA3LjI2NCAxNC4zNyAxNC41MSAxMC40OWw0MC43Ny0yMS41M2w0MC43NyAyMS41M2M3LjM3NSAzLjg3NSAxNi4wMS0yLjI0MiAxNC41MS0xMC40OWwtNy43NzMtNDUuNTVsMzIuMS0zMi4xQzMxMC40IDMyMC44IDMwNy4yIDMxMC43IDI5OC45IDMwOS42ek00MjQgMTQzLjFMMTI3LjQgMTQzLjFjNi4zNzUtMzAuODggMzAuNzUtNTUuMjUgNjIuNzUtNjEuMUMxOTguOCA5MC42MiAyMTAuOCA5NS4xIDIyNCA5NS4xbDYyLjIgLjAwMDFjMjMuMjEgMCA0NC41LTE1LjY5IDQ4Ljg5LTM4LjQ4QzM0MC4xIDI2Ljg1IDMxNy42IDAgMjg4IDBoLTY0Yy0yMiAwLTQwLjUgMTUtNDYuMTMgMzUuMjVjLTUyIDExLjYyLTkxLjc1IDU1LTk4LjUgMTA4LjhMMjMuMSAxNDMuMUMxMC43NSAxNDMuMSAwIDE1NC43IDAgMTY3LjFjMCAxMy4yNSAxMC43NSAyNCAyMy4xIDI0aDQwMGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0QzQ0OCAxNTQuNyA0MzcuMyAxNDMuMSA0MjQgMTQzLjF6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J000OCAxOTEuMWwyOS4xMiAyOTEuMmMxLjYzNiAxNi4zNiAxNS4yNCAyOC44MiAzMS42OCAyOC44MmgyMzAuNGMxNi40NCAwIDMwLjA1LTEyLjQ2IDMxLjY4LTI4LjgyTDQwMCAxOTEuMUg0OHpNMzA0LjUgMzI2LjdsLTMyLjEgMzIuMWw3Ljc3MyA0NS41NWMxLjUgOC4yNS03LjEzOSAxNC4zNy0xNC41MSAxMC40OUwyMjMuMSAzOTMuM2wtNDAuNzcgMjEuNTNjLTcuMjUgMy44NzUtMTYuMDEtMi4yNDItMTQuNTEtMTAuNDlsNy43NzItNDUuNTVsLTMyLjk0LTMyLjFDMTM3LjcgMzIwLjggMTQwLjggMzEwLjcgMTQ5IDMwOS42TDE5NC43IDMwMi45bDIwLjM2LTQxLjRjMy43NS03LjUgMTQuMjktNy4zNzUgMTcuOTEgMGwyMC4zNiA0MS40bDQ1LjY0IDYuNjg4QzMwNy4yIDMxMC43IDMxMC40IDMyMC44IDMwNC41IDMyNi43eidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J002MjIuMyAyNzEuMWwtMTE1LjEtNDUuMDFjLTQuMTI1LTEuNjI5LTEyLjYyLTMuNzU0LTIyLjI1IDBMMzY5LjggMjcxLjFDMzU5IDI3NS4yIDM1MiAyODUuMSAzNTIgMjk1LjFjMCAxMTEuNiA2OC43NSAxODguOCAxMzIuOSAyMTMuOWM5LjYyNSAzLjc1IDE4IDEuNjI1IDIyLjI1IDBDNTU4LjQgNDg5LjkgNjQwIDQyMC41IDY0MCAyOTUuMUM2NDAgMjg1LjEgNjMzIDI3NS4yIDYyMi4zIDI3MS4xek00OTYgNDYyLjRWMjczLjJsOTUuNSAzNy4zOEM1ODUuOSAzOTcuOCA1MzAuNiA0NDYgNDk2IDQ2Mi40eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMxIDEyOC0xMjhTMjk0LjcgMCAyMjQgMEMxNTMuMyAwIDk2IDU3LjMxIDk2IDEyOFMxNTMuMyAyNTYgMjI0IDI1NnpNMzIwLjYgMzEwLjNDMzA1LjkgMzA2LjMgMjkwLjYgMzA0IDI3NC43IDMwNEgxNzMuM0M3Ny42MSAzMDQgMCAzODEuNyAwIDQ3Ny40QzAgNDk2LjUgMTUuNTIgNTEyIDM0LjY2IDUxMkg0MTMuM2MzLjE0MyAwIDUuOTY3LTEuMDA0IDguODYxLTEuNzg5QzM2OS43IDQ2OS44IDMyNC4xIDQwMC4zIDMyMC42IDMxMC4zeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xNTkuMSAxOTJMMTQ0IDE5MmMtMzUuMzQgMC02NCAyOC42Ni02NCA2NC4wOHY0Ny43OUM4MCAzMzkuMyAxMDguNyAzNjggMTQ0IDM2OEgxNjBjMTcuNjYgMCAzMi0xNC4zNiAzMi0zMi4wNkwxOTEuMSAyMjRDMTkxLjEgMjA2LjMgMTc3LjYgMTkyIDE1OS4xIDE5MnpNMzY4IDE5MmwtMTYgMGMtMTcuNjYgMC0zMiAxNC4zNC0zMiAzMi4wNEwzMjAgMzM1LjlDMzIwIDM1My43IDMzNC4zIDM2OCAzNTIgMzY4aDE2YzM1LjM0IDAgNjQtMjguNyA2NC02NC4xM1YyNTYuMUM0MzIgMjIwLjcgNDAzLjMgMTkyIDM2OCAxOTJ6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzTmFtZT0nYngtaWNvbi1zZWNvbmRhcnknXG4gICAgICAgIGQ9J00yNTYgMEMxMTIuOSAwIDQuNTgzIDExOS4xIC4wMjA4IDI1NkwwIDI5NkMwIDMwOS4zIDEwLjc1IDMyMCAyMy4xIDMyMFM0OCAzMDkuMyA0OCAyOTZWMjU2YzAtMTE0LjcgOTMuMzQtMjA3LjggMjA4LTIwNy44QzM3MC43IDQ4LjIgNDY0IDE0MS4zIDQ2NCAyNTZ2MTQ0YzAgMjIuMDktMTcuOTEgNDAtNDAgNDBoLTExMC43QzMwNSA0MjUuNyAyODkuNyA0MTYgMjcyIDQxNkgyNDEuOGMtMjMuMjEgMC00NC41IDE1LjY5LTQ4Ljg3IDM4LjQ5QzE4NyA0ODUuMiAyMTAuNCA1MTIgMjM5LjEgNTEySDI3MmMxNy43MiAwIDMzLjAzLTkuNzExIDQxLjM0LTI0SDQyNGM0OC42IDAgODgtMzkuNCA4OC04OFYyNTZDNTA3LjQgMTE5LjEgMzk5LjEgMCAyNTYgMHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFByaWNlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTk2IDE1MkM5NiAxMzguNyAxMDYuNyAxMjggMTIwIDEyOEMxMzMuMyAxMjggMTQ0IDEzOC43IDE0NCAxNTJWMzYwQzE0NCAzNzMuMyAxMzMuMyAzODQgMTIwIDM4NEMxMDYuNyAzODQgOTYgMzczLjMgOTYgMzYwVjE1MnpNMTc2IDE0NEMxNzYgMTM1LjIgMTgzLjIgMTI4IDE5MiAxMjhDMjAwLjggMTI4IDIwOCAxMzUuMiAyMDggMTQ0VjM2OEMyMDggMzc2LjggMjAwLjggMzg0IDE5MiAzODRDMTgzLjIgMzg0IDE3NiAzNzYuOCAxNzYgMzY4VjE0NHpNMjg4IDE1MlYzNjBDMjg4IDM3My4zIDI3Ny4zIDM4NCAyNjQgMzg0QzI1MC43IDM4NCAyNDAgMzczLjMgMjQwIDM2MFYxNTJDMjQwIDEzOC43IDI1MC43IDEyOCAyNjQgMTI4QzI3Ny4zIDEyOCAyODggMTM4LjcgMjg4IDE1MnpNMzUyIDE1MkMzNTIgMTM4LjcgMzYyLjcgMTI4IDM3NiAxMjhDMzg5LjMgMTI4IDQwMCAxMzguNyA0MDAgMTUyVjM2MEM0MDAgMzczLjMgMzg5LjMgMzg0IDM3NiAzODRDMzYyLjcgMzg0IDM1MiAzNzMuMyAzNTIgMzYwVjE1MnpNNDgwIDE0NFYzNjhDNDgwIDM3Ni44IDQ3Mi44IDM4NCA0NjQgMzg0QzQ1NS4yIDM4NCA0NDggMzc2LjggNDQ4IDM2OFYxNDRDNDQ4IDEzNS4yIDQ1NS4yIDEyOCA0NjQgMTI4QzQ3Mi44IDEyOCA0ODAgMTM1LjIgNDgwIDE0NHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXNlY29uZGFyeSdcbiAgICAgICAgZD0nTTUxMiAzMkM1NDcuMyAzMiA1NzYgNjAuNjUgNTc2IDk2VjQxNkM1NzYgNDUxLjMgNTQ3LjMgNDgwIDUxMiA0ODBINjRDMjguNjUgNDgwIDAgNDUxLjMgMCA0MTZWOTZDMCA2MC42NSAyOC42NSAzMiA2NCAzMkg1MTJ6TTEyMCAxMjhDMTA2LjcgMTI4IDk2IDEzOC43IDk2IDE1MlYzNjBDOTYgMzczLjMgMTA2LjcgMzg0IDEyMCAzODRDMTMzLjMgMzg0IDE0NCAzNzMuMyAxNDQgMzYwVjE1MkMxNDQgMTM4LjcgMTMzLjMgMTI4IDEyMCAxMjh6TTE3NiAzNjhDMTc2IDM3Ni44IDE4My4yIDM4NCAxOTIgMzg0QzIwMC44IDM4NCAyMDggMzc2LjggMjA4IDM2OFYxNDRDMjA4IDEzNS4yIDIwMC44IDEyOCAxOTIgMTI4QzE4My4yIDEyOCAxNzYgMTM1LjIgMTc2IDE0NFYzNjh6TTI2NCAxMjhDMjUwLjcgMTI4IDI0MCAxMzguNyAyNDAgMTUyVjM2MEMyNDAgMzczLjMgMjUwLjcgMzg0IDI2NCAzODRDMjc3LjMgMzg0IDI4OCAzNzMuMyAyODggMzYwVjE1MkMyODggMTM4LjcgMjc3LjMgMTI4IDI2NCAxMjh6TTM1MiAzNjBDMzUyIDM3My4zIDM2Mi43IDM4NCAzNzYgMzg0QzM4OS4zIDM4NCA0MDAgMzczLjMgNDAwIDM2MFYxNTJDNDAwIDEzOC43IDM4OS4zIDEyOCAzNzYgMTI4QzM2Mi43IDEyOCAzNTIgMTM4LjcgMzUyIDE1MlYzNjB6TTQ2NCAxMjhDNDU1LjIgMTI4IDQ0OCAxMzUuMiA0NDggMTQ0VjM2OEM0NDggMzc2LjggNDU1LjIgMzg0IDQ2NCAzODRDNDcyLjggMzg0IDQ4MCAzNzYuOCA0ODAgMzY4VjE0NEM0ODAgMTM1LjIgNDcyLjggMTI4IDQ2NCAxMjh6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3NOYW1lPSdieC1pY29uLXByaW1hcnknXG4gICAgICAgIGQ9J00xNjAgNDk2QzExNS44IDQ5NiA4MCA0NjAuMiA4MCA0MTZDODAgMzcxLjggMTE1LjggMzM2IDE2MCAzMzZDMjA0LjIgMzM2IDI0MCAzNzEuOCAyNDAgNDE2QzI0MCA0NjAuMiAyMDQuMiA0OTYgMTYwIDQ5NnpNMTkyIDQxNkMxOTIgMzk4LjMgMTc3LjcgMzg0IDE2MCAzODRDMTQyLjMgMzg0IDEyOCAzOTguMyAxMjggNDE2QzEyOCA0MzMuNyAxNDIuMyA0NDggMTYwIDQ0OEMxNzcuNyA0NDggMTkyIDQzMy43IDE5MiA0MTZ6TTM1MiAzMzZDMzA3LjggMzM2IDI3MiAzMDAuMiAyNzIgMjU2QzI3MiAyMTEuOCAzMDcuOCAxNzYgMzUyIDE3NkMzOTYuMiAxNzYgNDMyIDIxMS44IDQzMiAyNTZDNDMyIDMwMC4yIDM5Ni4yIDMzNiAzNTIgMzM2ek0zODQgMjU2QzM4NCAyMzguMyAzNjkuNyAyMjQgMzUyIDIyNEMzMzQuMyAyMjQgMzIwIDIzOC4zIDMyMCAyNTZDMzIwIDI3My43IDMzNC4zIDI4OCAzNTIgMjg4QzM2OS43IDI4OCAzODQgMjczLjcgMzg0IDI1NnpNMTkyIDE2QzIzNi4yIDE2IDI3MiA1MS44MiAyNzIgOTZDMjcyIDE0MC4yIDIzNi4yIDE3NiAxOTIgMTc2QzE0Ny44IDE3NiAxMTIgMTQwLjIgMTEyIDk2QzExMiA1MS44MiAxNDcuOCAxNiAxOTIgMTZ6TTE2MCA5NkMxNjAgMTEzLjcgMTc0LjMgMTI4IDE5MiAxMjhDMjA5LjcgMTI4IDIyNCAxMTMuNyAyMjQgOTZDMjI0IDc4LjMzIDIwOS43IDY0IDE5MiA2NEMxNzQuMyA2NCAxNjAgNzguMzMgMTYwIDk2eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMCA0MTZDMCAzOTguMyAxNC4zMyAzODQgMzIgMzg0SDg2LjY2QzgyLjM4IDM5My44IDgwIDQwNC42IDgwIDQxNkM4MCA0MjcuNCA4Mi4zOCA0MzguMiA4Ni42NiA0NDhIMzJDMTQuMzMgNDQ4IDAgNDMzLjcgMCA0MTZ6TTI0MCA0MTZDMjQwIDQwNC42IDIzNy42IDM5My44IDIzMy4zIDM4NEg0ODBDNDk3LjcgMzg0IDUxMiAzOTguMyA1MTIgNDE2QzUxMiA0MzMuNyA0OTcuNyA0NDggNDgwIDQ0OEgyMzMuM0MyMzcuNiA0MzguMiAyNDAgNDI3LjQgMjQwIDQxNlY0MTZ6TTAgMjU2QzAgMjM4LjMgMTQuMzMgMjI0IDMyIDIyNEgyNzguN0MyNzQuNCAyMzMuOCAyNzIgMjQ0LjYgMjcyIDI1NkMyNzIgMjY3LjQgMjc0LjQgMjc4LjIgMjc4LjcgMjg4SDMyQzE0LjMzIDI4OCAwIDI3My43IDAgMjU2VjI1NnpNNDMyIDI1NkM0MzIgMjQ0LjYgNDI5LjYgMjMzLjggNDI1LjMgMjI0SDQ4MEM0OTcuNyAyMjQgNTEyIDIzOC4zIDUxMiAyNTZDNTEyIDI3My43IDQ5Ny43IDI4OCA0ODAgMjg4SDQyNS4zQzQyOS42IDI3OC4yIDQzMiAyNjcuNCA0MzIgMjU2ek0xMTguNyA2NEMxMTQuNCA3My44IDExMiA4NC42MiAxMTIgOTZDMTEyIDEwNy40IDExNC40IDExOC4yIDExOC43IDEyOEgzMkMxNC4zMyAxMjggMCAxMTMuNyAwIDk2QzAgNzguMzMgMTQuMzMgNjQgMzIgNjRIMTE4Ljd6TTI2NS4zIDEyOEMyNjkuNiAxMTguMiAyNzIgMTA3LjQgMjcyIDk2QzI3MiA4NC42MiAyNjkuNiA3My44IDI2NS4zIDY0SDQ4MEM0OTcuNyA2NCA1MTIgNzguMzMgNTEyIDk2QzUxMiAxMTMuNyA0OTcuNyAxMjggNDgwIDEyOEgyNjUuM3onXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tcHJpbWFyeSdcbiAgICAgICAgZD0nTTExNiAyMDUuMUMxMTYgMTk2LjIgMTI1LjYgMTkwLjQgMTMzLjUgMTk0LjdMMjIzLjQgMjQyLjZDMjM0LjEgMjQ4LjMgMjM0LjEgMjYzLjcgMjIzLjQgMjY5LjRMMTMzLjUgMzE3LjNDMTI1LjYgMzIxLjYgMTE2IDMxNS44IDExNiAzMDYuOUMxMTYgMzA0LjEgMTE2LjEgMzAxLjQgMTE4LjggMjk5LjJMMTU0LjggMjU2TDExOC44IDIxMi44QzExNi4xIDIxMC42IDExNiAyMDcuOSAxMTYgMjA1LjFWMjA1LjF6TTM5My4yIDIxMi44TDM1Ny4yIDI1NkwzOTMuMiAyOTkuMkMzOTUgMzAxLjQgMzk2IDMwNC4xIDM5NiAzMDYuOUMzOTYgMzE1LjggMzg2LjQgMzIxLjYgMzc4LjUgMzE3LjNMMjg4LjYgMjY5LjRDMjc3LjkgMjYzLjcgMjc3LjkgMjQ4LjMgMjg4LjYgMjQyLjZMMzc4LjUgMTk0LjdDMzg2LjQgMTkwLjQgMzk2IDE5Ni4yIDM5NiAyMDUuMUMzOTYgMjA3LjkgMzk1IDIxMC42IDM5My4yIDIxMi44eidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9J2J4LWljb24tc2Vjb25kYXJ5J1xuICAgICAgICBkPSdNMCAyNTZDMCAxMTQuNiAxMTQuNiAwIDI1NiAwQzM5Ny40IDAgNTEyIDExNC42IDUxMiAyNTZDNTEyIDM5Ny40IDM5Ny40IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2ek0xMTguOCAyMTIuOEwxNTQuOCAyNTZMMTE4LjggMjk5LjJDMTE2LjEgMzAxLjQgMTE2IDMwNC4xIDExNiAzMDYuOUMxMTYgMzE1LjggMTI1LjYgMzIxLjYgMTMzLjUgMzE3LjNMMjIzLjQgMjY5LjRDMjM0LjEgMjYzLjcgMjM0LjEgMjQ4LjMgMjIzLjQgMjQyLjZMMTMzLjUgMTk0LjdDMTI1LjYgMTkwLjQgMTE2IDE5Ni4yIDExNiAyMDUuMUMxMTYgMjA3LjkgMTE2LjEgMjEwLjYgMTE4LjggMjEyLjhWMjEyLjh6TTI4OC42IDI0Mi42QzI3Ny45IDI0OC4zIDI3Ny45IDI2My43IDI4OC42IDI2OS40TDM3OC41IDMxNy4zQzM4Ni40IDMyMS42IDM5NiAzMTUuOCAzOTYgMzA2LjlDMzk2IDMwNC4xIDM5NSAzMDEuNCAzOTMuMiAyOTkuMkwzNTcuMiAyNTZMMzkzLjIgMjEyLjhDMzk1IDIxMC42IDM5NiAyMDcuOSAzOTYgMjA1LjFDMzk2IDE5Ni4yIDM4Ni40IDE5MC40IDM3OC41IDE5NC43TDI4OC42IDI0Mi42ek0yMTYuOSAzNTQuN0MyMTEuNSAzNTEuMSAyMDQuNSAzNTEuMSAxOTkuMSAzNTQuN0wxNTguOSAzODEuNUwxMzUuMiAzNjkuN0MxMjcuMyAzNjUuNyAxMTcuNiAzNjguOSAxMTMuNyAzNzYuOEMxMDkuNyAzODQuNyAxMTIuOSAzOTQuNCAxMjAuOCAzOTguM0wxNTIuOCA0MTQuM0MxNTcuMSA0MTYuOSAxNjQuMSA0MTYuNSAxNjguOSA0MTMuM0wyMDggMzg3LjJMMjQ3LjEgNDEzLjNDMjUyLjUgNDE2LjkgMjU5LjUgNDE2LjkgMjY0LjkgNDEzLjNMMzA0IDM4Ny4yTDM0My4xIDQxMy4zQzM0Ny45IDQxNi41IDM1NCA0MTYuOSAzNTkuMiA0MTQuM0wzOTEuMiAzOTguM0MzOTkuMSAzOTQuNCA0MDIuMyAzODQuNyAzOTguMyAzNzYuOEMzOTQuNCAzNjguOSAzODQuNyAzNjUuNyAzNzYuOCAzNjkuN0wzNTMuMSAzODEuNUwzMTIuOSAzNTQuN0MzMDcuNSAzNTEuMSAzMDAuNSAzNTEuMSAyOTUuMSAzNTQuN0wyNTYgMzgwLjhMMjE2LjkgMzU0Ljd6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBZb3V0dWJlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgICA8cGF0aCBkPSdNNTQ5LjY1NSAxMjQuMDgzYy02LjI4MS0yMy42NS0yNC43ODctNDIuMjc2LTQ4LjI4NC00OC41OTdDNDU4Ljc4MSA2NCAyODggNjQgMjg4IDY0UzExNy4yMiA2NCA3NC42MjkgNzUuNDg2Yy0yMy40OTcgNi4zMjItNDIuMDAzIDI0Ljk0Ny00OC4yODQgNDguNTk3LTExLjQxMiA0Mi44NjctMTEuNDEyIDEzMi4zMDUtMTEuNDEyIDEzMi4zMDVzMCA4OS40MzggMTEuNDEyIDEzMi4zMDVjNi4yODEgMjMuNjUgMjQuNzg3IDQxLjUgNDguMjg0IDQ3LjgyMUMxMTcuMjIgNDQ4IDI4OCA0NDggMjg4IDQ0OHMxNzAuNzggMCAyMTMuMzcxLTExLjQ4NmMyMy40OTctNi4zMjEgNDIuMDAzLTI0LjE3MSA0OC4yODQtNDcuODIxIDExLjQxMi00Mi44NjcgMTEuNDEyLTEzMi4zMDUgMTEuNDEyLTEzMi4zMDVzMC04OS40MzgtMTEuNDEyLTEzMi4zMDV6bS0zMTcuNTEgMjEzLjUwOFYxNzUuMTg1bDE0Mi43MzkgODEuMjA1LTE0Mi43MzkgODEuMjAxeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBUd2l0dGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgICA8cGF0aCBkPSdNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzeicgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBJbnN0YWdyYW0oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICAgIDxwYXRoIGQ9J00yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXonIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gS2FrYW8oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5OS42MTgwMSA5Mi4xNDcwMTEnPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD0nY2xpcFBhdGg2OTInIGNsaXBQYXRoVW5pdHM9J3VzZXJTcGFjZU9uVXNlJz5cbiAgICAgICAgICA8cGF0aCBkPSdtIDAsNTk1LjI4IDg0MS44OSwwIEwgODQxLjg5LDAgMCwwIFonIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyB0cmFuc2Zvcm09J21hdHJpeCgxLDAsMCwtMSwtMzYyLjI2MzU4LDIzNC4wOTg5NSknPlxuICAgICAgICA8ZyBjbGlwUGF0aD0ndXJsKCNjbGlwUGF0aDY5MiknPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2My4yNjEyLDM3Ni42Nzc3KSc+XG4gICAgICAgICAgICA8cGF0aCBkPSdtIDI0OC44MTAzOSwtMTQzLjU3ODc1IGMgLTI2Ljk1MywwIC00OC44MDgwMSwtMTcuMjU2IC00OC44MDgwMSwtMzguNTU1IDAsLTEzLjY4MTAxIDkuMDUyMDEsLTI1LjY5MzAxIDIyLjY0NjAxLC0zMi41NDkwMSBsIC00LjU5OSwtMTcuMTY3IGMgLTAuMTc2LC0wLjUyNyAtMC4wMywtMS4wODUgMC4zNTIsLTEuNDY1IDAuMjYzLC0wLjI2NSAwLjYxNCwtMC40MTEgMC45OTUsLTAuNDExIDAuMjk0LDAgMC41ODYsMC4xMTcgMC44NSwwLjMyMiBsIDE5Ljc3NSwxMy4zNiBjIDIuODcyLC0wLjQxIDUuODAyLC0wLjY0NCA4Ljc4OSwtMC42NDQgMjYuOTUzLDAgNDguODEsMTcuMjU1IDQ4LjgxLDM4LjU1NDAxIDAsMjEuMjk5IC0yMS44NTcsMzguNTU1IC00OC44MSwzOC41NTUnIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBoZXJvU3RyaW5nLCBuYXYgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJ34vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnfi9jb21wb25lbnRzL05hdidcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJ34vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgeyBCYW5uZXIsIFByb21vdGlvbiB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5cbnR5cGUgTGF5b3V0UHJvcHMgPSBSb3V0ZSAmIHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdLFxuICBwcm9tb3Rpb24/OiBQcm9tb3Rpb24sXG4gIHByZXZSb3V0ZT86IHN0cmluZyxcbiAgcGF0aG5hbWU/OiBzdHJpbmcsXG4gIGNvdmVyPzogSlNYLkVsZW1lbnQsXG4gIGRhdGU/OiBKU1guRWxlbWVudCxcbiAgY2F0ZWdvcnlJZD86IHN0cmluZyxcbiAgaXNXaWRlPzogYm9vbGVhbixcbn1cblxudHlwZSBSb290TGF5b3V0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSxcbiAgcGF0aG5hbWU/OiBzdHJpbmcsXG4gIGlzUm9vdDogYm9vbGVhbixcbiAgc2lkZWJhcjogYm9vbGVhbixcbiAgY2F0ZWdvcnlJZD86IHN0cmluZyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpdGVNZXRhKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3NpdGUud2VibWFuaWZlc3Q/dj0yMDIyMDMxMycgLz5cbiAgICAgIDxsaW5rIHJlbD0nbWFzay1pY29uJyBocmVmPScvaW1hZ2VzL3NhZmFyaS1waW5uZWQtdGFiLnN2Zz92PTIwMjIwMzEzJyBjb2xvcj0nIzI1NjNlYicgLz5cbiAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL2Zhdmljb24uaWNvP3Y9MjAyMjAzMTMnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScgY29udGVudD0nQk9MVCBVWCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxpY2F0aW9uLW5hbWUnIGNvbnRlbnQ9J0JPTFQgVVgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nIzI1NjNlYicgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZjhmYWZjJyAvPlxuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBzcmM9J2h0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzP2NsaWVudD1jYS1wdWItMTMxNTIzODg2MDcxODU0OSdcbiAgICAgICAgY3Jvc3NPcmlnaW49J2Fub255bW91cydcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIHsvKiA8IS0tIEdsb2JhbCBzaXRlIHRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzIC0tPiAqL31cbiAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPSdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctTlRaRENUSERYNSc+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cbiAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctTlRaRENUSERYNScpO1xuICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgID48L3NjcmlwdD5cbiAgICAgIHsvKiA8IS0tIENoYW5uZWwgUGx1Z2luIFNjcmlwdHMgLS0+ICovfVxuICAgICAgPHNjcmlwdFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9IHdpbmRvdztcbiAgICAgICAgICBpZiAody5DaGFubmVsSU8pIHtcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmNvbnNvbGUuZXJyb3IgfHwgd2luZG93LmNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uKCl7fSkoJ0NoYW5uZWxJTyBzY3JpcHQgaW5jbHVkZWQgdHdpY2UuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2guYyhhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgY2gucSA9IFtdO1xuICAgICAgICAgIGNoLmMgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBjaC5xLnB1c2goYXJncyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB3LkNoYW5uZWxJTyA9IGNoO1xuICAgICAgICAgIGZ1bmN0aW9uIGwoKSB7XG4gICAgICAgICAgICBpZiAody5DaGFubmVsSU9Jbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3LkNoYW5uZWxJT0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHMuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgcy5zcmMgPSAnaHR0cHM6Ly9jZG4uY2hhbm5lbC5pby9wbHVnaW4vY2gtcGx1Z2luLXdlYi5qcyc7XG4gICAgICAgICAgICBzLmNoYXJzZXQgPSAnVVRGLTgnO1xuICAgICAgICAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICB4LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHMsIHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubG9hZCcsIGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgICAgQ2hhbm5lbElPKCdib290Jywge1xuICAgICAgICAgIFwicGx1Z2luS2V5XCI6IFwiYmFmZmVhOWYtNWNmZC00ZDVkLTkzNWEtNzM0MDk2NDFlMWY2XCJcbiAgICAgICAgfSk7YCxcbiAgICAgICAgfX1cbiAgICAgID48L3NjcmlwdD5cbiAgICAgIHsvKiA8IS0tIEVuZCBDaGFubmVsIFBsdWdpbiAtLT4gKi99XG4gICAgICA8c2NyaXB0IGFzeW5jIHNyYz0naHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbS9zZGsvanMva2FrYW8ubWluLmpzJz48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxuICBJY29uLFxuICBkZXNjLFxuICBwcm9tb3Rpb24sXG4gIHByZXZSb3V0ZSxcbiAgY292ZXIsXG4gIGRhdGUsXG4gIGlzV2lkZSxcbiAgc2lkZWJhcixcbn06IExheW91dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BieC1wYWdlICR7aXNXaWRlID8gJ2J4LXBhZ2Utd2lkZScgOiAnJ31gfT5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHJldmlldyc+XG4gICAgICAgICAge3ByZXZpZXdFbmFibGVkID8gKFxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBhY3Rpb249Jy9wb3N0cy9wcmV2aWV3L3N0b3AnPlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgc2hvd2luZyBkcmFmdCBjb250ZW50LiA8YnV0dG9uPkNsaWNrIGhlcmU8L2J1dHRvbj4gdG8gZXhpdCBwcmV2aWV3IG1vZGUuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScvcG9zdHMvcHJldmlldy9zdGFydCc+XG4gICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBzaG93aW5nIHB1Ymxpc2hlZCBjb250ZW50LiA8YnV0dG9uPkNsaWNrIGhlcmU8L2J1dHRvbj4gdG8gZW50ZXIgcHJldmlldyBtb2RlIVxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxIZWFkZXIgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHByZXZSb3V0ZSwgY292ZXIsIGRhdGUsIGlzV2lkZSwgc2lkZWJhciB9fSAvPlxuICAgICAge3Byb21vdGlvbiAmJiA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzJz57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24gZmxleCBtZDpoaWRkZW4nPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoeyBpc1Jvb3QsIGNoaWxkcmVuLCBwYXRobmFtZSwgc2lkZWJhciB9OiBSb290TGF5b3V0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY29udGFpbmVyJz5cbiAgICAgIHtzaWRlYmFyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BieC1wYWdlIGJ4LXBhZ2Utcm9vdCAke2lzUm9vdCA/ICcnIDogJ2hpZGRlbiBtZDpmbGV4J31gfT5cbiAgICAgICAgICA8SGVyb1xuICAgICAgICAgICAgaXNSb290PXtpc1Jvb3R9XG4gICAgICAgICAgICBoZXJvU3RyaW5nPXtoZXJvU3RyaW5nfVxuICAgICAgICAgICAgZGVzYz0nXHVCMzU0IFx1QjA5OFx1Qzc0MCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVBQ0JEXHVENUQ4XHVDNzQ0IFx1QzBERFx1QUMwMVx1RDU1OFx1QkE3MCBcdUFGM0NcdUFGM0NcdUQ1NThcdUFDOEMgXHVCOUNDXHVCNEU0XHVDNUI0IFx1QjREQ1x1QjgyNFx1QzY5NC4nXG4gICAgICAgICAgICBsaW5rcz17W1xuICAgICAgICAgICAgICB7IHVybDogJy9jb250YWN0JywgbGFiZWw6ICdcdUJCMzRcdUI4Q0MgXHVDMEMxXHVCMkY0JyB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3BsYW4nLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnXHVDNjk0XHVBRTA4XHVENDVDIFx1RDY1NVx1Qzc3OCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE5hdiB7Li4ueyBuYXYsIHBhdGhuYW1lIH19IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzUm9vdCA/ICdweC0zIG1kOnB4LTAnIDogJyd9YH0+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbnR5cGUgSGVhZGVyUHJvcHMgPSBSb3V0ZSAmIHtcbiAgcHJldlJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGNvdmVyPzogSlNYLkVsZW1lbnQsXG4gIGRhdGU/OiBKU1guRWxlbWVudCxcbiAgc2lkZWJhcj86IGJvb2xlYW4sXG4gIGlzV2lkZT86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSwgSWNvbiwgZGVzYywgcHJldlJvdXRlLCBjb3ZlciwgZGF0ZSwgc2lkZWJhciwgaXNXaWRlIH06IEhlYWRlclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlcic+XG4gICAgICB7KGlzV2lkZSB8fCAhc2lkZWJhcikgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcGMtbmF2Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLWhvbWUnPlxuICAgICAgICAgICAge3ByZXZSb3V0ZSAmJiBwcmV2Um91dGUgIT09ICcvJyA/IChcbiAgICAgICAgICAgICAgPExpbmsgdG89e3ByZXZSb3V0ZX0+XG4gICAgICAgICAgICAgICAgPEljb25zLkFycm93TGVmdExpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgICAgICA8SWNvbnMuSG9tZUxpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1tb2JpbGUtbmF2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1ob21lJz5cbiAgICAgICAgICB7cHJldlJvdXRlICYmIHByZXZSb3V0ZSAhPT0gJy8nID8gKFxuICAgICAgICAgICAgPExpbmsgdG89e3ByZXZSb3V0ZX0+XG4gICAgICAgICAgICAgIDxJY29ucy5BcnJvd0xlZnRMaWdodCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgICAgIDxJY29ucy5Ib21lTGlnaHQgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1vYmlsZS1sb2dvJz5cbiAgICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgICA8SWNvbnMuTG9nbyBjbGFzc05hbWU9J3ctMTYgaC0xMCcgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtbW9iaWxlLXNldHRpbmdzJz5cbiAgICAgICAgICA8TGluayB0bz0nL3NldHRpbmdzJz5cbiAgICAgICAgICAgIDxJY29ucy5TZXR0aW5nc0xpZ2h0IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1zZWN0aW9uJz5cbiAgICAgICAge2NvdmVyICYmIDxkaXYgY2xhc3NOYW1lPSdieC1jb3Zlcic+e2NvdmVyfTwvZGl2Pn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLW1ldGEnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWhlYWRlci10aXRsZSc+XG4gICAgICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItZGVzYyc+e2Rlc2N9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtaGVhZGVyLWRlc2MnPntkYXRlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZWFkZXItaWNvbic+e0ljb24gJiYgdHlwZW9mIEljb24gPT09ICdmdW5jdGlvbicgPyA8SWNvbiAvPiA6IEljb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCB7IEhlcm9TdHJpbmcgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG50eXBlIEhlcm9Qcm9wcyA9IHtcbiAgaGVyb1N0cmluZzogSGVyb1N0cmluZyxcbiAgZGVzYz86IHN0cmluZyxcbiAgaXNSb290PzogYm9vbGVhbixcbiAgbGlua3M/OiB7IHVybD86IHN0cmluZywgbGFiZWw6IHN0cmluZywgaGFuZGxlcj86ICgpID0+IHZvaWQgfCB1bmRlZmluZWQgfVtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVybyh7IGhlcm9TdHJpbmcgPSBbWycnLCAnJ11dLCBkZXNjLCBsaW5rcywgaXNSb290IH06IEhlcm9Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtaGVyby1sb2dvICR7aXNSb290ID8gJ2p1c3RpZnktY2VudGVyJyA6ICdqdXN0aWZ5LWNlbnRlciBtZDpwYi00J31gfT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtgcC00ICR7aXNSb290ID8gJycgOiAnbWQ6cC0wIG1kOnB5LTEwJ31gfSB0bz0nLyc+XG4gICAgICAgICAgPEljb24uTG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc1Jvb3QgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICB7aGVyb1N0cmluZy5tYXAoaGVhZGluZyA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2hlYWRpbmdbMF19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBnYXAteC0wLjUgdGV4dC0yeGwgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGV2ZW46bWwtNSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+e2hlYWRpbmdbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC10aGluJz57aGVhZGluZ1sxXX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Rlc2MgJiYgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IG1heC13LVsyMDBweF0gdGV4dC14cyBtdC0zIHRleHQtY2VudGVyJz57ZGVzY308L2Rpdj59XG4gICAgICAgICAge2xpbmtzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1oZXJvLWxpbmtzJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+XG4gICAgICAgICAgICAgICAgICBsaW5rLnVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0gc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtsaW5rLmxhYmVsfSBvbkNsaWNrPXtsaW5rLmhhbmRsZXJ9IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBpY29uPzogUmVhY3RFbGVtZW50IHwgRWxlbWVudCB8IHN0cmluZyxcbiAgaHJlZj86IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXSB8IEVsZW1lbnQgfCBFbGVtZW50W10gfCBzdHJpbmcsXG4gIHNpemU/OiAnc21hbGwnIHwgJ2RlZmF1bHQnIHwgJ2xhcmdlJyxcbiAgdHlwZT86ICdzdWJtaXQnIHwgJ2J1dHRvbicsXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxuICBibG9jaz86IGJvb2xlYW4sXG59XG5cbnR5cGUgQnV0dG9uR3JvdXBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdIHwgc3RyaW5nLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmNvbnN0IHNpemVzID0ge1xuICBtaW5XaWR0aDoge1xuICAgIHNtYWxsOiAnbWluLXctWzI0cHhdJyxcbiAgICBkZWZhdWx0OiAnbWluLXctWzMycHhdJyxcbiAgICBsYXJnZTogJ21pbi13LVs0MHB4XScsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHNtYWxsOiAnaC02JyxcbiAgICBkZWZhdWx0OiAnaC04JyxcbiAgICBsYXJnZTogJ2gtMTAnLFxuICB9LFxuICBpY29uU2l6ZToge1xuICAgIHNtYWxsOiAndy0zIGgtMycsXG4gICAgZGVmYXVsdDogJ3ctNCBoLTQnLFxuICAgIGxhcmdlOiAndy02IGgtNicsXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgc21hbGw6ICd0ZXh0LXhzJyxcbiAgICBkZWZhdWx0OiAndGV4dC1zbScsXG4gICAgbGFyZ2U6ICd0ZXh0LWJhc2UnLFxuICB9LFxuICBnYXA6IHtcbiAgICBzbWFsbDogJ2dhcC14LTEnLFxuICAgIGRlZmF1bHQ6ICdnYXAteC0yJyxcbiAgICBsYXJnZTogJ2dhcC14LTMnLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcbiAgdHlwZSA9ICdidXR0b24nLFxuICBzaXplID0gJ2RlZmF1bHQnLFxuICBocmVmLFxuICBvbkNsaWNrLFxuICBpY29uLFxuICBibG9jayA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IEJ1dHRvblByb3BzKSB7XG4gIHJldHVybiBocmVmID8gKFxuICAgIDxMaW5rIGtleT17aHJlZn0gdG89e2hyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fSAke2Jsb2NrID8gJ3ctZnVsbCcgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BieC1idXR0b24tbGFiZWwgJHtzaXplcy5mb250U2l6ZVtzaXplXX0gJHtzaXplcy5nYXBbc2l6ZV19ICR7YmxvY2sgPyAndy1mdWxsJyA6ICcnfWB9PlxuICAgICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1pY29uICR7c2l6ZXMuaWNvblNpemVbc2l6ZV19YH0+e2ljb259PC9zcGFuPn1cbiAgICAgICAgICB7Y2hpbGRyZW4gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tdGV4dCc+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9MaW5rPlxuICApIDogb25DbGljayA/IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY2xhc3NOYW1lPXtgYngtYnV0dG9uICR7c2l6ZXMuaGVpZ2h0W3NpemVdfSAke3NpemVzLm1pbldpZHRoW3NpemVdfX0gJHtibG9jayA/ICd3LWZ1bGwnIDogJyd9YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWxhYmVsICR7c2l6ZXMuZm9udFNpemVbc2l6ZV19ICR7c2l6ZXMuZ2FwW3NpemVdfSAke2Jsb2NrID8gJ3ctZnVsbCcgOiAnJ31gfT5cbiAgICAgICAge2ljb24gJiYgPHNwYW4gY2xhc3NOYW1lPXtgYngtYnV0dG9uLWljb24gJHtzaXplcy5pY29uU2l6ZVtzaXplXX1gfT57aWNvbn08L3NwYW4+fVxuICAgICAgICB7Y2hpbGRyZW4gJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tdGV4dCc+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LWJ1dHRvbi1iYWNrZ3JvdW5kJz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICkgOiAoXG4gICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2BieC1idXR0b24gJHtzaXplcy5oZWlnaHRbc2l6ZV19ICR7c2l6ZXMubWluV2lkdGhbc2l6ZV19fSAke2Jsb2NrID8gJ3ctZnVsbCcgOiAnJ31gfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1sYWJlbCAke3NpemVzLmZvbnRTaXplW3NpemVdfSAke3NpemVzLmdhcFtzaXplXX0gJHtibG9jayA/ICd3LWZ1bGwnIDogJyd9YH0+XG4gICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT17YGJ4LWJ1dHRvbi1pY29uICR7c2l6ZXMuaWNvblNpemVbc2l6ZV19YH0+e2ljb259PC9zcGFuPn1cbiAgICAgICAge2NoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtYnV0dG9uLXRleHQnPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25Hcm91cCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfTogQnV0dG9uR3JvdXBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYngtYnV0dG9uLWdyb3VwICR7Y2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1idXR0b24tYmFja2dyb3VuZCc+PC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcblxudHlwZSBOYXZQcm9wcyA9IHtcbiAgbmF2PzogUm91dGVzW10sXG4gIHBhdGhuYW1lPzogc3RyaW5nLFxuICBjYXRlZ29yeUlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KHsgbmF2LCBwYXRobmFtZSwgY2F0ZWdvcnlJZCB9OiBOYXZQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J2J4LW5hdic+XG4gICAgICB7bmF2ID8gKFxuICAgICAgICBuYXZcbiAgICAgICAgICAuZmlsdGVyKG4gPT4gbi5kaXNwbGF5KVxuICAgICAgICAgIC5tYXAobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtuYXZJdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdieC1uYXYtY2F0ZWdvcnknPntuYXZJdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAge25hdkl0ZW0/LmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2J4LW5hdi1jaGlsZHJlbic+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihuID0+IG4uZGlzcGxheSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKG5hdlN1Ykl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bmF2U3ViSXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0ucGF0aG5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BieC1uYXYtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXRobmFtZSAmJiBwYXRobmFtZSAhPT0gJy8nICYmIHBhdGhuYW1lLmluZGV4T2YobmF2U3ViSXRlbS5wYXRobmFtZSkgIT09IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdlN1Ykl0ZW0ucGF0aG5hbWUgPT09IGNhdGVnb3J5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J4LW5hdi1pdGVtLWFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZTdWJJdGVtLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbT8uSWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIG5hdlN1Ykl0ZW0uSWNvbiA9PT0gJ2Z1bmN0aW9uJyAmJiA8bmF2U3ViSXRlbS5JY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LW5hbWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2U3ViSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlN1Ykl0ZW0/LmRlc2MgJiYgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtZGVzYyc+e25hdlN1Ykl0ZW0uZGVzY308L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWFycm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbi5BcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5JY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgbmF2U3ViSXRlbS5JY29uID09PSAnZnVuY3Rpb24nICYmIDxuYXZTdWJJdGVtLkljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW5hdi1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1uYXYtbmFtZSc+e25hdlN1Ykl0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZTdWJJdGVtPy5kZXNjICYmIDxzcGFuIGNsYXNzTmFtZT0nYngtbmF2LWRlc2MnPntuYXZTdWJJdGVtLmRlc2N9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxsaT5cdUI0RjFcdUI4NURcdUI0MUMgXHVCNzdDXHVDNkIwXHVEMkI4IFx1QkFBOVx1Qjg1RFx1Qzc3NCBcdUM4NzRcdUM3QUNcdUQ1NThcdUM5QzAgXHVDNTRBXHVDMkI1XHVCMkM4XHVCMkU0LjwvbGk+XG4gICAgICApfVxuICAgIDwvdWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBoYW5kbGVDbGlja0NoYXRDaGFubmVsIH0gZnJvbSAnfi9saWIva2FrYW8nXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ34vY29tcG9uZW50cy9JY29uJ1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWZvb3Rlci1sb2dvJz5cbiAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgIDxJY29uLkxvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtZm9vdGVyLWNvbnRhY3QnPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2hhdENoYW5uZWx9Plx1Q0U3NFx1Q0U3NFx1QzYyNFx1RDFBMSBcdUNDNDRcdUQzMDUgXHVCQjM4XHVDNzU4PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1mb290ZXItY29udGFjdC1kZXNjJz5cbiAgICAgICAgICBcdUQzQzlcdUM3N0MgMTA6MDAgLSAxODowMFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIChcdUM4MTBcdUMyRUNcdUMyRENcdUFDMDQgMTM6MDAgLSAxNDowMCBcdUM4MUNcdUM2NzggXHUwMEI3IFx1QzhGQ1x1QjlEMC9cdUFDRjVcdUQ3MzRcdUM3N0MgXHVDODFDXHVDNjc4KVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nYngtZm9vdGVyLXNucyc+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9kZWVycGFyazgyMTAnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdZb3VUdWJlJz5cbiAgICAgICAgICAgIDxJY29uLllvdXR1YmUgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy50d2l0dGVyLmNvbS9kZWVycGFyazcnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIHRpdGxlPSdUd2l0dGVyJz5cbiAgICAgICAgICAgIDxJY29uLlR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RlZXJwYXJrJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyJyB0aXRsZT0nSW5zdGFncmFtJz5cbiAgICAgICAgICAgIDxJY29uLkluc3RhZ3JhbSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJkZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEtha2FvOiBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrS2FLYW9TREsgPSAoKSA9PiB7XG4gIGlmKCF3aW5kb3cuS2FrYW8uQ2hhbm5lbCkge1xuICAgIHdpbmRvdy5LYWthby5pbml0KCdjMzQ4MDhlMzY0ZGVlYzFkZDM3YWI4YzY5MjMwNTc5ZScpXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGlja0NoYXRDaGFubmVsID0gKCkgPT4ge1xuICBjaGVja0thS2FvU0RLKClcbiAgd2luZG93Lktha2FvLkNoYW5uZWwuY2hhdCh7XG4gICAgY2hhbm5lbFB1YmxpY0lkOiAnX3F3c3hlYicsXG4gIH0pXG59XG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tBZGRDaGFubmVsID0gKCkgPT4ge1xuICBjaGVja0thS2FvU0RLKClcbiAgd2luZG93Lktha2FvLkNoYW5uZWwuYWRkQ2hhbm5lbCh7XG4gICAgY2hhbm5lbFB1YmxpY0lkOiAnX3F3c3hlYicsXG4gIH0pXG59XG4iLCAiaW1wb3J0ICogYXMgSWNvbiBmcm9tICd+L2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nXG5cbmV4cG9ydCB0eXBlIFByb21vdGlvbiA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgdXJsPzogc3RyaW5nLFxuICBsYWJlbD86IHN0cmluZyxcbiAgY29sb3I6IHtcbiAgICByZWQ6IG51bWJlcixcbiAgICBibHVlOiBudW1iZXIsXG4gICAgZ3JlZW46IG51bWJlcixcbiAgfSxcbiAgdGV4dGNvbG9yOiB7XG4gICAgaGV4OiBzdHJpbmcsXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYW5uZXIoeyB0aXRsZSwgdXJsLCBjb2xvcjogeyByZWQsIGJsdWUsIGdyZWVuIH0sIHRleHRjb2xvcjogeyBoZXggfSwgbGFiZWwgfTogUHJvbW90aW9uKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lcicgc3R5bGU9e3tcbiAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBgcmdiKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0pYCxcbiAgICAgICctLXR3LXNoYWRvdy1jb2xvcic6IGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sIC41KWAsXG4gICAgICAnLS10dy1zaGFkb3cnOiAndmFyKC0tdHctc2hhZG93LWNvbG9yZWQpJyxcbiAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWJhbm5lci1pY29uJz5cbiAgICAgICAgPEljb24uQmFubmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItdGl0bGUnPjxzcGFuPnt0aXRsZX08L3NwYW4+PC9kaXY+XG4gICAgICB7dXJsICYmIDxkaXYgY2xhc3NOYW1lPSdieC1iYW5uZXItbGluayc+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGhyZWY9e3VybH0+e2xhYmVsIHx8ICdcdUJDMTRcdUI4NUNcdUFDMDBcdUFFMzAnfTwvQnV0dG9uPlxuICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHB1Ymxpc2hpbmcgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJ34vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgUmVjb21tZW5kLCBUZWNoLCBGbG93LCBDcmV3cywgRkFRLCBSZWZ1bmQgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaXNoaW5nKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCByZWNvbW1lbmRMaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1swXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUM3NzhcdUQxMzBcdUIxMzcgXHVDMEFDXHVDNUM1XHVDNzkwIFx1QjMwMFx1RDQ1Q1x1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjhcdUM1RDAgXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQyBcdUJDMEYgVUkgXHVBQzFDXHVCQzFDIFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1RDEzNFx1RDBBNCBcdUFDQzRcdUM1N0QnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1sxXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUIzMDBcdUFFMzBcdUM1QzUgU0kgXHVCMkY0XHVCMkY5XHVDNzkwXHVCMkQ4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QjMwMFx1QUREQ1x1QkFBOCBcdUQ1MDRcdUI4NUNcdUM4MURcdUQyQjggXHVCOUM4XHVEMDZDXHVDNUM1LCBVSSBcdUFDMUNcdUJDMUMgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSwgXHVDMEMxXHVDOEZDIFx1QkQ4OFx1QUMwMCwgXHVEMTM0XHVEMEE0IFx1QUNDNFx1QzU3RCddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgdGVjaExpc3Q6IExpc3RJdGVtW10gPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1RhaWx3aW5kQ1NTIFx1QzlDMFx1QzZEMCcsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDNjk0XHVDOTk4IFx1QUMwMVx1QUQxMVx1QkMxQlx1QjI5NCBcdUM3MjBcdUQyRjhcdUI5QUNcdUQyRjAgXHVEMDc0XHVCNzk4XHVDMkE0IFx1RDUwNFx1QjgwOFx1Qzc4NFx1QzZDQ1x1RDA2Q1x1Qzc3OCBUYWlsd2luZENTU1x1Qjg1QyBcdUFDMUNcdUJDMUMgXHVBQzAwXHVCMkE1XHVENTU4XHVCQTcwIFx1QjJFNFx1QzU5MVx1RDU1QyBDU1MgXHVCQzI5XHVCQzk1XHVCODYwXHVDNzNDXHVCODVDXHVCM0M0IFx1QUMwMFx1QjJBNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8ucHVibGlzaGluZ1szXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUMyRENcdUI5RThcdUQyRjEgXHVCOUM4XHVEMDZDXHVDNUM1IFx1QUMxQ1x1QkMxQycsXG4gICAgICBjb250ZW50czogWydcdUJCMzhcdUMxMUNcdUM1RDAgXHVBRDZDXHVDODcwXHVDODAxXHVDNzc4IFx1Qzc1OFx1QkJGOFx1Qjk3QyBcdUJEODBcdUM1RUNcdUQ1NThcdUM1RUMgXHVDRDVDXHVCMzAwXHVENTVDIFx1QzJEQ1x1QjlFOFx1RDJGMVx1RDU1QyBcdUFDMUNcdUJDMUNcdUM3NDQgXHVDODFDXHVBQ0Y1XHVENTY5XHVCMkM4XHVCMkU0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5wdWJsaXNoaW5nWzRdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzZGOSBcdUM4MTFcdUFERkNcdUMxMzEgXHVDOTAwXHVDMjE4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QzY5NFx1QUQ2Q1x1QzBBQ1x1RDU2RFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVDODExXHVBREZDXHVDMTMxXHVDNzQ0IFx1QzkwMFx1QzIxOFx1RDU1OFx1QzVFQyBcdUM3NzhcdUM5OUQgXHVCOUM4XHVEMDZDXHVCOTdDIFx1QkMxQlx1Qzc0NCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEIFx1QUMxQ1x1QkMxQ1x1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnB1Ymxpc2hpbmdbNV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjg1QyBcdUM4MUNcdUM3OTEnLFxuICAgICAgY29udGVudHM6IFsnXHVCMkU0XHVDNTkxXHVENTVDIFBDIFx1RDA2Q1x1Qjg1Q1x1QzJBNCwgXHVCQUE4XHVCMzU4IFx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCwgXHVCQUE4XHVCQzE0XHVDNzdDXHVDNUQwXHVDMTFDIFx1QUMwMVx1QUMwMSBcdUQwNkNcdUFFMzBcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0IFx1QjQxOFx1QjNDNFx1Qjg1RCBcdUI5REVcdUNEQTQgXHVDODFDXHVDNzkxIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPFJlY29tbWVuZCBsaXN0PXtyZWNvbW1lbmRMaXN0fSAvPlxuICAgICAgPFRlY2ggY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnIGxpc3Q9e3RlY2hMaXN0fSAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5cbnR5cGUgUmVjb21tZW5kUHJvcHMgPSB7XG4gIGxpc3Q6IExpc3RJdGVtW10sXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgcGhvdG9zPzogYW55W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWNvbW1lbmQoeyBsaXN0LCBjbGFzc05hbWUgfTogUmVjb21tZW5kUHJvcHMpIHtcbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDNzc0XHVCN0YwXHVCRDg0XHVBRUQ4IFx1Q0Q5NFx1Q0M5QyBcdUI0RENcdUI4MjRcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdCB9IGZyb20gJ34vY29tcG9uZW50cy9MaXN0J1xuXG50eXBlIFJvd1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIGljb24/OiBKU1guRWxlbWVudCxcbiAgbGlzdDogTGlzdEl0ZW1bXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7IGljb24sIHRpdGxlLCBsaXN0LCBjbGFzc05hbWUgfTogUm93UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ4LWNvbnRlbnRzLXJvdyBieC1jb250ZW50cy1yb3ctZXh0ZW5kICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdyBwYi0xIG1kOnBiLTQnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdieC1jb250ZW50cy1oMic+XG4gICAgICAgICAgPHNwYW4+eyhpY29uICYmIGljb24pIHx8IDxJY29uLkJ1bGxldFNvbGlkIC8+fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGlzdCBsaXN0PXtsaXN0fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IHR5cGUgTGlzdEl0ZW0gPSB7XG4gIHRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIHRodW1iPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIGNvbnRlbnRzPzogKHN0cmluZyB8IEpTWC5FbGVtZW50KVtdLFxufVxuXG5leHBvcnQgdHlwZSBMaXN0UHJvcHMgPSB7XG4gIGxpc3Q6IExpc3RJdGVtW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgbGlzdCB9OiBMaXN0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPSdieC1saXN0Jz5cbiAgICAgIHtsaXN0ICYmXG4gICAgICAgIGxpc3QubGVuZ3RoICYmXG4gICAgICAgIGxpc3QubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXgudG9TdHJpbmcoKX0gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkJz5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLnRodW1iICYmIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLXRodW1ibmFpbCc+e2xpc3RJdGVtLnRodW1ifTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtYm9keSc+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLXRpdGxlJz57bGlzdEl0ZW0udGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5jb250ZW50cyAmJlxuICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uY29udGVudHMubWFwKChjb250ZW50LCBjb250ZW50SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnRJbmRleH0gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWRlc2MnPlxuICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICA8L3VsPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5cbnR5cGUgVGVjaFByb3BzID0ge1xuICBsaXN0OiBMaXN0SXRlbVtdLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZWNoKHsgbGlzdCwgY2xhc3NOYW1lIH06IFRlY2hQcm9wcykge1xuICBjb25zdCBwcm9wcyA9IHsgdGl0bGU6ICdcdUQ1NkRcdUMwQzEgXHVDRDVDXHVDMkUwXHVDNzU4IFx1QUUzMFx1QzIyMFx1Qzc0NCBcdUMxMjBcdUIzQzRcdUQ1NzRcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IFJvdyB9IGZyb20gJ34vY29tcG9uZW50cy9Sb3cnXG5cbnR5cGUgRmxvd1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGbG93KHsgY2xhc3NOYW1lIH06IEZsb3dQcm9wcykge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+MTwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QUNDNFx1QzU3RFx1QUUwOCAxMCUgXHVDNzg1XHVBRTA4JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOFx1QUMwMCBcdUMyRENcdUM3OTFcdUI0MThcdUFFMzAgXHVDODA0IFx1QkJGOFx1QjlBQyBcdUFDQzRcdUM1N0RcdUFFMDhcdUM3NDQgXHVCQzFCXHVBQ0UwIFx1QzJEQ1x1Qzc5MVx1RDU3NFx1QzY5NC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+Mjwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QUUzMFx1Q0QwOCBcdUMwQzFcdUIyRjQnLFxuICAgICAgY29udGVudHM6IFsnXHVENjQ4XHVEMzk4XHVDNzc0XHVDOUMwIFx1Q0VFOFx1QzE0OSwgXHVDNkQwXHVENTU4XHVCMjk0IFx1QUUzMFx1QjJBNVx1QjRFNFx1Qzc0NCBcdUFDRTBcdUFDMURcdUIyRDhcdUI0RTRcdUFDRkMgXHVENTY4XHVBRUQ4IFx1QzBBQ1x1QzgwNFx1QzVEMCBcdUM4RkNcdUFDRTAgXHVCQzFCXHVDNTQ0XHVDNjk0LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz4zPC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDNzU4XHVCOEIwXHVDNUQwIFx1QUQwMFx1QjgyOFx1QjQxQyBcdUM3OTBcdUI4Q0MgXHVDMjE4XHVDMkUwJyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUFENkNcdUNEOTUgXHVDODA0IFx1RDU0NFx1QzY5NFx1RDU1QyBcdUM3OTBcdUI4Q0NcdUI0RTRcdUM3NDQgXHVCMTE4XHVBQ0E4XHVCQzFCXHVDNTQ0XHVDNjk0LiAoXHVCODVDXHVBQ0UwLCBcdUM1NDRcdUM3NzRcdUI1MTRcdUM1QjQsIFx1QzgxQ1x1RDQ4OCBcdUM4MTVcdUJDRjRcdUFEMDBcdUI4MjggXHVDMEFDXHVDOUM0KSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz40PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVCNTE0XHVDNzkwXHVDNzc4IFx1QzJEQ1x1QzU0OCBcdUFDODBcdUQxQTAnLFxuICAgICAgY29udGVudHM6IFsnXHVCNTE0XHVDNzkwXHVDNzc4IFx1Q0VFOFx1QzE0OVx1Qzc1OCBcdUMyRENcdUM1NDhcdUM3NDQgXHVCQkY4XHVCOUFDIFx1QUNFMFx1QUMxRFx1QjJEOFx1QjRFNFx1QUNGQyBcdUQ2MTFcdUM3NThcdUQ1NzRcdUM2OTQuJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjU8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUMyMThcdUM4MTVcdUMwQUNcdUQ1NkQgXHVCQzE4XHVDNjAxIFx1QkMwRiBcdUFDMUNcdUJDMUMgXHVDOUM0XHVENTg5JyxcbiAgICAgIGNvbnRlbnRzOiBbJ1x1QkU2MFx1Qjk3NFx1QUM4QyBcdUFDMUNcdUJDMUMgXHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8c3BhbiBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLWNhcmQtaWNvbic+Njwvc3Bhbj4sXG4gICAgICB0aXRsZTogJ1x1QjM3MFx1QkFBOCcsXG4gICAgICBjb250ZW50czogWydcdUNDQUIgXHVDMkRDXHVDNUYwIFx1RDZDNCBcdUMyMThcdUM4MTVcdUMwQUNcdUQ1NkQgXHVCQzE4XHVDNjAxJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPHNwYW4gY2xhc3NOYW1lPSdieC1jb250ZW50cy1jYXJkLWljb24nPjc8L3NwYW4+LFxuICAgICAgdGl0bGU6ICdcdUNENUNcdUM4ODUgXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzYyNFx1RDUwOCcsXG4gICAgICBjb250ZW50czogWydcdUM2MjRcdUQ1MDggXHVENkM0IFx1QkFBOFx1QjJDOFx1RDEzMFx1QjlDMSddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxzcGFuIGNsYXNzTmFtZT0nYngtY29udGVudHMtY2FyZC1pY29uJz44PC9zcGFuPixcbiAgICAgIHRpdGxlOiAnXHVDNzk0XHVBRTA4IDkwJSBcdUM3ODVcdUFFMDgnLFxuICAgICAgY29udGVudHM6IFsnXHVENTA0XHVCODVDXHVDODFEXHVEMkI4IFx1QzY0NFx1QjhDQyddLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNVx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDNzc0IFx1Qzc3NFx1QjkwNFx1QzgzOFx1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcblxudHlwZSBDcmV3c1Byb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIHBob3RvczogYW55W10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmV3cyh7IHBob3RvcywgY2xhc3NOYW1lIH06IENyZXdzUHJvcHMpIHtcbiAgY29uc3QgW2NyZXdzMVRodW1iLCBjcmV3czJUaHVtYiwgY3Jld3MzVGh1bWJdID0gcGhvdG9zXG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtjcmV3czFUaHVtYn0gLz4sXG4gICAgICB0aXRsZTogJ1x1QjUxNFx1Qzc5MFx1Qzc3OC9cdUFDMUNcdUJDMUMgXCJcdUM2QTlcdUM2QTlcIicsXG4gICAgICBjb250ZW50czogWydJVFx1Q0Q1Q1x1QzgwNFx1QzEyMFx1QzVEMFx1QzExQyBcdUMyRjhcdUM2Q0NcdUM2MjggXHVBQ0JEXHVCODI1IDEwXHVCMTQ0IFx1Qzc3NFx1QzBDMVx1Qzc1OCBcdUM4MDRcdUJCMzhcdUFDMDAnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17Y3Jld3MyVGh1bWJ9IC8+LFxuICAgICAgdGl0bGU6ICdcdUQ1MDRcdUI4NjBcdUQyQjhcdUM1RDRcdUI0REMvXHVCQzMxXHVDNUQ0XHVCNERDIFx1QUMxQ1x1QkMxQyBcIlx1QjY5Q1x1QzJERFx1Qzc3NFwiJyxcbiAgICAgIGNvbnRlbnRzOiBbJ0lUXHVDRDVDXHVDODA0XHVDMTIwXHVDNUQwXHVDMTFDIFx1QzJGOFx1QzZDQ1x1QzYyOCBcdUFDQkRcdUI4MjUgMTBcdUIxNDQgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgwNFx1QkIzOFx1QUMwMCddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtjcmV3czNUaHVtYn0gLz4sXG4gICAgICB0aXRsZTogJ1x1QjM3MFx1Qzc3NFx1RDEzMC9cdUM3NzhcdUQ1MDRcdUI3N0MgXHVBQzFDXHVCQzFDIFwiXHVCQTg1XHVDNzkwXCInLFxuICAgICAgY29udGVudHM6IFsnSVRcdUNENUNcdUM4MDRcdUMxMjBcdUM1RDBcdUMxMUMgXHVDMkY4XHVDNkNDXHVDNjI4IFx1QUNCRFx1QjgyNSAxMFx1QjE0NCBcdUM3NzRcdUMwQzFcdUM3NTggXHVDODA0XHVCQjM4XHVBQzAwJ10sXG4gICAgfSxcbiAgXVxuICBjb25zdCBwcm9wcyA9IHsgdGl0bGU6ICdcdUM4MDBcdUQ3NkMgXHVEMzAwXHVDNzQwIFx1QzgwNFx1QkIzOFx1QUMwMFx1QjRFNFx1Qjg1QyBcdUFENkNcdUMxMzEgXHVCNDE4XHVDNUI0XHVDNzg4XHVDNUI0XHVDNjk0LicsIGxpc3QsIGNsYXNzTmFtZSB9XG4gIHJldHVybiA8Um93IHsuLi5wcm9wc30gLz5cbn1cbiIsICJpbXBvcnQgeyBSb3cgfSBmcm9tICd+L2NvbXBvbmVudHMvUm93J1xuXG50eXBlIEZBUVByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGQVEoeyBjbGFzc05hbWUgfTogRkFRUHJvcHMpIHtcbiAgY29uc3QgbGlzdCA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1Qzc5MVx1QzVDNSBcdUFFMzBcdUFDMDRcdUM3NDAgXHVCQ0Y0XHVEMUI1IFx1QzVCQ1x1QjlDOFx1QjA5OCBcdUFDNzhcdUI5QUNcdUIwOThcdUM2OTQ/JyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgIDx1bCBrZXk9J3NlcnZpY2UtZmFxLTAnIGNsYXNzTmFtZT0nYngtbGlzdC1pdGVtcyc+XG4gICAgICAgICAgPGxpPlx1RDY0RFx1QkNGNFx1QzZBOSBcdUM2RjlcdUQzOThcdUM3NzRcdUM5QzBcdUIyOTQgM1x1Qzc3QzwvbGk+XG4gICAgICAgICAgPGxpPlx1QUUzMFx1QzVDNSBcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzBcdUIyOTQgNVx1Qzc3QzwvbGk+XG4gICAgICAgICAgPGxpPlx1QkUwQ1x1Qjc5Q1x1QjUyOSBcdUNFRThcdUMxMjRcdUQzMDVcdUM3NDAgMTBcdUM3N0M8L2xpPlxuICAgICAgICA8L3VsPixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJzFcdUIxNDQgXHVCQjM0XHVDMEMxIEEvU1x1Qzc1OCBcdUJDOTRcdUM3MDRcdUIyOTQgXHVDNUI0XHVCNTE0XHVBRTRDXHVDOUMwIFx1Qzc3OFx1QUMwMFx1QzY5ND8nLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgPHVsIGtleT0nc2VydmljZS1mYXEtMScgY2xhc3NOYW1lPSdieC1saXN0LWl0ZW1zJz5cbiAgICAgICAgICA8bGk+XHVEMTREXHVDMkE0XHVEMkI4IFx1QzIxOFx1QzgxNTwvbGk+XG4gICAgICAgICAgPGxpPlx1Qzc3NFx1QkJGOFx1QzlDMCBcdUFENTBcdUNDQjQgXHVCQzBGIFx1Q0Q5NFx1QUMwMCwgXHVDMEFEXHVDODFDPC9saT5cbiAgICAgICAgICA8bGk+XHVCRTBDXHVCNzlDXHVCNTI5IFx1Q0VFQ1x1QjdFQyBcdUJDQzBcdUFDQkQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUQzOThcdUM3NzRcdUM5QzAgXHVDRDk0XHVBQzAwIFx1Qzc5MVx1QzVDNVx1Qzc0MCBcdUNEOTRcdUFDMDAgXHVDNjk0XHVBRTA4XHVDNzc0IFx1QkMxQ1x1QzBERCBcdUQ1NjlcdUIyQzhcdUIyRTQuKFx1QkNDNFx1QjNDNCBcdUQ2MTFcdUM3NTgpPC9saT5cbiAgICAgICAgPC91bD4sXG4gICAgICBdLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgcHJvcHMgPSB7IHRpdGxlOiAnXHVDNzkwXHVDOEZDXHVDNzg4XHVCMjk0IFx1QzlDOFx1QkIzOFx1QjRFNFx1Qzc3NFx1QzYwOFx1QzY5NC4nLCBsaXN0LCBjbGFzc05hbWUgfVxuICByZXR1cm4gPFJvdyB7Li4ucHJvcHN9IC8+XG59XG4iLCAiaW1wb3J0IHsgUm93IH0gZnJvbSAnfi9jb21wb25lbnRzL1JvdydcblxudHlwZSBSZWZ1bmRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVmdW5kKHsgY2xhc3NOYW1lIH06IFJlZnVuZFByb3BzKSB7XG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUFFMzBcdUJDRjggXHVENjU4XHVCRDg4IFx1QUREQ1x1QzgxNScsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnXHVDODA0XHVCQjM4XHVBQzAwXHVDNjQwIFx1Qzc1OFx1QjhCMFx1Qzc3OFx1Qzc1OCBcdUMwQzFcdUQ2MzggXHVENjExXHVDNzU4XHVENTU4XHVDNUQwIFx1Q0NBRFx1QzU3RCBcdUNDQTBcdUQ2OEMgXHVCQzBGIFx1RDY1OFx1QkQ4OFx1Qzc3NCBcdUFDMDBcdUIyQTVcdUQ1NjlcdUIyQzhcdUIyRTQuJyxcbiAgICAgICAgJ1x1Qzc5MVx1QzVDNVx1Qzc3NCBcdUM2NDRcdUI4Q0NcdUI0MUMgXHVDNzc0XHVENkM0IFx1QjYxMFx1QjI5NCBcdUM3OTBcdUI4Q0MsIFx1RDUwNFx1Qjg1Q1x1QURGOFx1QjdBOCBcdUI0RjEgXHVDMTFDXHVCRTQ0XHVDMkE0XHVBQzAwIFx1QzgxQ1x1QUNGNVx1QjQxQyBcdUM3NzRcdUQ2QzRcdUM1RDBcdUIyOTQgXHVENjU4XHVCRDg4XHVDNzc0IFx1QkQ4OFx1QUMwMFx1RDU2OVx1QjJDOFx1QjJFNC4gKCBcdUMxOENcdUJFNDRcdUM3OTBcdUJDRjRcdUQ2MzhcdUJDOTUgMTdcdUM4NzAgMlx1RDU2RFx1Qzc1OCA1XHVDODcwLiBcdUM2QTlcdUM1RUQgXHVCNjEwXHVCMjk0IFx1MzAwQ1x1QkIzOFx1RDY1NFx1QzBCMFx1QzVDNVx1QzlDNFx1RDc2NSBcdUFFMzBcdUJDRjhcdUJDOTVcdTMwMEQgXHVDODFDMlx1Qzg3MCBcdUM4MUM1XHVENjM4XHVDNzU4IFx1QjUxNFx1QzlDMFx1RDEzOFx1Q0Y1OFx1RDE1MFx1Q0UyMFx1Qzc1OCBcdUM4MUNcdUFDRjVcdUM3NzQgXHVBQzFDXHVDMkRDXHVCNDFDIFx1QUNCRFx1QzZCMFx1QzVEMCBcdUQ1NzRcdUIyRjkpJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1QzgwNFx1QkIzOFx1QUMwMCBcdUNDNDVcdUM3ODQgXHVDMEFDXHVDNzIwJyxcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICdcdUM4MDRcdUJCMzhcdUFDMDBcdUM3NTggXHVBREMwXHVDQzQ1XHVDMEFDXHVDNzIwXHVCODVDIFx1QjJGOVx1Q0QwOCBcdUM1N0RcdUM4MTVcdUQ1ODhcdUIzNTggXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QkJGOFx1Qzc3NFx1RDU4OSBcdUQ2MzlcdUM3NDAgXHVCQ0Y0XHVEM0I4XHVDODAxXHVDNzc4IFx1QUQwMFx1QzgxMFx1QzVEMFx1QzExQyBcdUMyRUNcdUFDMDFcdUQ1NThcdUFDOEMgXHVDNzk4XHVCQUJCIFx1Qzc3NFx1RDU4OVx1RDU1QyBcdUFDQkRcdUM2QjAgXHVBQ0IwXHVDODFDIFx1QUUwOFx1QzU2MSBcdUM4MDRcdUNDQjQgXHVENjU4XHVCRDg4XHVDNzc0IFx1QUMwMFx1QjJBNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVDNzU4XHVCOEIwXHVDNzc4IFx1Q0M0NVx1Qzc4NCBcdUMwQUNcdUM3MjAnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QzExQ1x1QkU0NFx1QzJBNCBcdUM5QzRcdUQ1ODkgXHVCM0M0XHVDOTExIFx1Qzc1OFx1QjhCMFx1Qzc3OFx1Qzc1OCBcdUFEQzBcdUNDNDVcdUMwQUNcdUM3MjBcdUI4NUMgXHVDNzc4XHVENTc0IFx1RDY1OFx1QkQ4OFx1Qzc0NCBcdUM2OTRcdUNDQURcdUQ1NjAgXHVBQ0JEXHVDNkIwLCBcdUMwQUNcdUM2QTkgXHVBRTA4XHVDNTYxXHVDNzQ0IFx1QzU0NFx1Qjc5OFx1QzY0MCBcdUFDMTlcdUM3NzQgXHVBQ0M0XHVDMEIwIFx1RDZDNCBcdUNEMUQgXHVBRTA4XHVDNTYxXHVDNzU4IDEwJVx1Qjk3QyBcdUFDRjVcdUM4MUNcdUQ1NThcdUM1RUMgXHVENjU4XHVCRDg4XHVENTY5XHVCMkM4XHVCMkU0LicsXG4gICAgICAgIDx1bCBrZXk9J3NlcnZpY2UtcmVmdW5kLTInIGNsYXNzTmFtZT0nYngtbGlzdC1pdGVtcyc+XG4gICAgICAgICAgPGxpPlx1Q0QxRCBcdUM3OTFcdUM1QzVcdUI3QzlcdUM3NTggMS8zIFx1QUNCRFx1QUNGQyBcdUM4MDQgOiBcdUM3NzRcdUJCRjggXHVCMEE5XHVCRDgwXHVENTVDIFx1QzY5NFx1QUUwOFx1Qzc1OCAyLzNcdUQ1NzRcdUIyRjlcdUM1NjE8L2xpPlxuICAgICAgICAgIDxsaT5cdUNEMUQgXHVDNzkxXHVDNUM1XHVCN0M5XHVDNzU4IDEvMiBcdUFDQkRcdUFDRkMgXHVDODA0IDogXHVDNzc0XHVCQkY4IFx1QjBBOVx1QkQ4MFx1RDU1QyBcdUM2OTRcdUFFMDhcdUM3NTggMS8yXHVENTc0XHVCMkY5XHVDNTYxPC9saT5cbiAgICAgICAgICA8bGk+XHVDRDFEIFx1Qzc5MVx1QzVDNVx1QjdDOVx1Qzc1OCAxLzIgXHVBQ0JEXHVBQ0ZDIFx1RDZDNCA6IFx1QkMxOFx1RDY1OFx1RDU1OFx1QzlDMCBcdUM1NEFcdUM3NEM8L2xpPlxuICAgICAgICA8L3VsPixcbiAgICAgIF0sXG4gICAgfSxcbiAgXVxuICBjb25zdCBwcm9wcyA9IHsgdGl0bGU6ICdcdUNERThcdUMxOEMgXHVCQzBGIFx1RDY1OFx1QkQ4OFx1QUREQ1x1QzgxNVx1Qzc0NCBcdUM1NENcdUI4MjRcdUI0RENcdUI5QjRcdUFDOENcdUM2OTQuJywgbGlzdCwgY2xhc3NOYW1lIH1cbiAgcmV0dXJuIDxSb3cgey4uLnByb3BzfSAvPlxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBzaW5nbGVwYWdlIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd+L2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IFJlY29tbWVuZCwgVGVjaCwgRmxvdywgQ3Jld3MsIEZBUSwgUmVmdW5kIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlcnZpY2VzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlcGFnZSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgY29uc3QgbGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnNpbmdsZXBhZ2VbMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnSVQgXHVBRTMwXHVDNUM1IFx1QjlDOFx1Q0YwMFx1RDMwNSBcdUIyRjRcdUIyRjlcdUM3OTBcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVCOEYwXHVCODFCIFx1Qzc3NFx1QkNBNFx1RDJCOCBcdUFFNENcdUM5QzAgXHVDNzc4XHVEMTMwXHVCODA5XHVDMTU4IFx1QUMxQ1x1QkMxQyBcdUQzRUNcdUQ1NjggXHVDNjk0XHVBRDZDXHVDMEFDXHVENTZEXHVDNzQ0IFx1Q0Q1Q1x1QjMwMFx1RDU1QyBcdUI5REVcdUNEQTQgXHVDODFDXHVBQ0Y1J10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnNpbmdsZXBhZ2VbMV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDMUZDXHVENTUxXHVCQUIwIFx1QzBBQ1x1QzdBNVx1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUMyRTBcdUFEREMgXHVDNzIwXHVDNzg1LCBcdUI5QUNcdUQxNTBcdUMxNThcdUI0RjEgXHVCOUM4XHVDRjAwXHVEMzA1XHVDNUQwIFx1RDY1Q1x1QzZBOVx1RDU1OFx1QUNFMCBcdUMyRjZcdUM3NDAgXHVBQzA0XHVCMkU4XHVENTVDIFx1Qzc3NFx1QkNBNFx1RDJCOCBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVBQ0Y1J10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLnNpbmdsZXBhZ2VbMl0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDNzc4XHVEMTRDXHVCOUFDXHVDNUI0IFx1QUMwMFx1QUM4QyBcdUMwQUNcdUM3QTVcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDMEFDXHVDNUM1XHVDNzQ0IFx1QUMwNFx1QjJFOFx1RDU1OFx1QUM4QyBcdUMxOENcdUFDMUNcdUQ1NThcdUFDRTAgXHVDNzc4XHVEMTMwXHVCMTM3XHVDNUQwIFx1RDY0RFx1QkNGNFx1RDU2MCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEIFx1Qjc5Q1x1QjUyOSBcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVBQ0Y1J10sXG4gICAgfSxcbiAgXVxuICBjb25zdCB0ZWNoTGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblswXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUNENUNcdUMyRTAgXHVEMTRDXHVEMDZDIFx1RDJCOFx1QjlBQycsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnTmV4dEpTL1JlbWl4IFJlYWN0IFx1RDUwNFx1QjgwOFx1Qzc4NFx1QzZDQ1x1RDA2QywgTm9kZUpTLCBQb3N0Z3JlU1FMXHVBRTMwXHVCQzE4IFx1Q0Q1Q1x1QzJFMCBcdUFFMzBcdUMyMjBcdUI4NUMgXHVBQzFDXHVCQzFDIFx1RDU2OFx1QzczQ1x1Qjg1Q1x1QzM2OCBcdUJFNjBcdUI5NzRcdUFDRTAgXHVBQzAwXHVCQ0JDXHVDNkI0IFx1QzExQ1x1QkU0NFx1QzJBNFx1Qjk3Q1x1QzgxQ1x1QUNGNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1NFTyBcdUIzQzRcdUM3ODUnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QUQ2Q1x1QUUwMCwgXHVCMTI0XHVDNzc0XHVCQzg0IFx1QUM4MFx1QzBDOVx1QzVENFx1QzlDNFx1QzVEMCBcdUNENUNcdUM4MDFcdUQ2NTRcdUQ1NThcdUM1RUMgXHVDNzkxXHVDNUM1XHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4gXHVBQzgwXHVDMEM5XHVDNzQwIFx1QzVCNFx1QjUxNFx1QzVEMFx1QzExQ1x1QjA5OCBcdUMyN0RcdUFDRTAgXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QzdBNSBcdUMwQzFcdUM3MDRcdUM1RDAgXHVCN0FEXHVEMDZDXHVCNDIwIFx1QzIxOFx1Qzc4OFx1QjNDNFx1Qjg1RCBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMl0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjg1QyBcdUM4MUNcdUM3OTEnLFxuICAgICAgY29udGVudHM6IFsnXHVCMkU0XHVDNTkxXHVENTVDIFBDIFx1RDA2Q1x1Qjg1Q1x1QzJBNCwgXHVCQUE4XHVCMzU4IFx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCwgXHVCQUE4XHVCQzE0XHVDNzdDXHVDNUQwXHVDMTFDIFx1QUMwMVx1QUMwMSBcdUQwNkNcdUFFMzBcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0IFx1QjQxOFx1QjNDNFx1Qjg1RCBcdUI5REVcdUNEQTQgXHVDODFDXHVDNzkxIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPFJlY29tbWVuZCBsaXN0PXtsaXN0fSAvPlxuICAgICAgPFRlY2ggbGlzdD17dGVjaExpc3R9IGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJyAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi51bnNldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGFwcGRlc2lnbiBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcGRlc2lnbigpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwcm9tb3Rpb24sIHBob3RvIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8QmFubmVyIHsuLi5wcm9tb3Rpb259IC8+XG4gICAgICA8RmxvdyAvPlxuICAgICAgPENyZXdzXG4gICAgICAgIGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJ1xuICAgICAgICBwaG90b3M9e1twaG90by5jb21tb25bM10ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNF0ucmVzcG9uc2l2ZUltYWdlLCBwaG90by5jb21tb25bNV0ucmVzcG9uc2l2ZUltYWdlXX1cbiAgICAgIC8+XG4gICAgICA8RkFRIC8+XG4gICAgICA8UmVmdW5kIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBicmFuZGluZyBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyYW5kaW5nKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxCYW5uZXIgey4uLnByb21vdGlvbn0gLz5cbiAgICAgIDxGbG93IC8+XG4gICAgICA8Q3Jld3NcbiAgICAgICAgY2xhc3NOYW1lPSdieC1jb250ZW50cy1yb3ctYmcnXG4gICAgICAgIHBob3Rvcz17W3Bob3RvLmNvbW1vblszXS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls0XS5yZXNwb25zaXZlSW1hZ2UsIHBob3RvLmNvbW1vbls1XS5yZXNwb25zaXZlSW1hZ2VdfVxuICAgICAgLz5cbiAgICAgIDxGQVEgLz5cbiAgICAgIDxSZWZ1bmQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEltYWdlLCB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBob21lcGFnZSBhcyBxdWVyeSB9IGZyb20gJ34vcXVlcmllcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyBSZWNvbW1lbmQsIFRlY2gsIEZsb3csIENyZXdzLCBGQVEsIFJlZnVuZCB9IGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIHJldHVybiBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbiwgcGhvdG8gfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICBjb25zdCBsaXN0OiBMaXN0SXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uaG9tZXBhZ2VbMF0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDNzc4XHVEMTRDXHVCOUFDXHVDNUI0IFx1QUMwMFx1QUM4QyBcdUMwQUNcdUM3QTVcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVBQzA0XHVCMkU4XHVENzg4IFx1QzBBQ1x1QzVDNVx1Qzc0NCBcdUMxOENcdUFDMUNcdUQ1NThcdUFDRTAgXHVENjREXHVCQ0Y0XHVENTU4XHVBQ0UwIFx1QzJGNlx1Qzc0MCBcdUMwQUNcdUM3QTVcdUIyRDhcdUI0RTRcdUM3NDQgXHVDNzA0XHVENTVDIFx1QzZGOVx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uaG9tZXBhZ2VbMV0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVDOTExXHVDMThDXHVBRTMwXHVDNUM1IFx1QjMwMFx1RDQ1Q1x1QjJEOCcsXG4gICAgICBjb250ZW50czogWydcdUFFMzBcdUM1QzVcdUM3NDQgXHVDMThDXHVBQzFDXHVENTU4XHVBQ0UwIFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUM4MUNcdUFDRjVcdUQ1NThcdUFFMzAgXHVDNzA0XHVENTVDIFx1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUI5REVcdUNEQTQgXHVDODFDXHVDNzkxJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmhvbWVwYWdlWzJdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1x1QzJERFx1QjJGOSBcdUMwQUNcdUM3QTVcdUIyRDgnLFxuICAgICAgY29udGVudHM6IFsnXHVDMEM4XHVCODVDXHVDNkI0IFx1QUMwMFx1QUM4QyBcdUI2MTBcdUIyOTQgXHVCQzk1XHVDNzc4XHVDNzQ0IFx1QzJEQ1x1Qzc5MVx1RDU1OFx1QUUzMCBcdUM4MDQgXHVBQzA0XHVEMzEwLCBcdUI4NUNcdUFDRTAsIFx1QkE1NFx1QjI3NFx1RDMxMFx1QjRGMVx1Qzc1OCBcdUJFMENcdUI3OUNcdUI1MjkgXHVCRTBDXHVCNzlDXHVCNERDIFx1QUMwMFx1Qzc3NFx1QjREQyBcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0MgXHVDODFDXHVBQ0Y1J10sXG4gICAgfSxcbiAgXVxuICBjb25zdCB0ZWNoTGlzdDogTGlzdEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aHVtYjogPEltYWdlIGRhdGE9e3Bob3RvLmNvbW1vblswXS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgdGl0bGU6ICdcdUNENUNcdUMyRTAgXHVEMTRDXHVEMDZDIFx1RDJCOFx1QjlBQycsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICAnTmV4dEpTL1JlbWl4IFJlYWN0IFx1RDUwNFx1QjgwOFx1Qzc4NFx1QzZDQ1x1RDA2QywgTm9kZUpTLCBQb3N0Z3JlU1FMXHVBRTMwXHVCQzE4IFx1Q0Q1Q1x1QzJFMCBcdUFFMzBcdUMyMjBcdUI4NUMgXHVBQzFDXHVCQzFDIFx1RDU2OFx1QzczQ1x1Qjg1Q1x1QzM2OCBcdUJFNjBcdUI5NzRcdUFDRTAgXHVBQzAwXHVCQ0JDXHVDNkI0IFx1QzExQ1x1QkU0NFx1QzJBNFx1Qjk3Q1x1QzgxQ1x1QUNGNVx1RDU2OVx1QjJDOFx1QjJFNC4nLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRodW1iOiA8SW1hZ2UgZGF0YT17cGhvdG8uY29tbW9uWzFdLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICB0aXRsZTogJ1NFTyBcdUIzQzRcdUM3ODUnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAgJ1x1QUQ2Q1x1QUUwMCwgXHVCMTI0XHVDNzc0XHVCQzg0IFx1QUM4MFx1QzBDOVx1QzVENFx1QzlDNFx1QzVEMCBcdUNENUNcdUM4MDFcdUQ2NTRcdUQ1NThcdUM1RUMgXHVDNzkxXHVDNUM1XHVENTc0IFx1QjREQ1x1QjlCRFx1QjJDOFx1QjJFNC4gXHVBQzgwXHVDMEM5XHVDNzQwIFx1QzVCNFx1QjUxNFx1QzVEMFx1QzExQ1x1QjA5OCBcdUMyN0RcdUFDRTAgXHVCRTYwXHVCOTc0XHVBQ0UwIFx1QUMwMFx1QzdBNSBcdUMwQzFcdUM3MDRcdUM1RDAgXHVCN0FEXHVEMDZDXHVCNDIwIFx1QzIxOFx1Qzc4OFx1QjNDNFx1Qjg1RCBcdUQ1NzQgXHVCNERDXHVCOUJEXHVCMkM4XHVCMkU0LicsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGh1bWI6IDxJbWFnZSBkYXRhPXtwaG90by5jb21tb25bMl0ucmVzcG9uc2l2ZUltYWdlfSAvPixcbiAgICAgIHRpdGxlOiAnXHVCQzE4XHVDNzUxXHVENjE1IFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjg1QyBcdUM4MUNcdUM3OTEnLFxuICAgICAgY29udGVudHM6IFsnXHVCMkU0XHVDNTkxXHVENTVDIFBDIFx1RDA2Q1x1Qjg1Q1x1QzJBNCwgXHVCQUE4XHVCMzU4IFx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCwgXHVCQUE4XHVCQzE0XHVDNzdDXHVDNUQwXHVDMTFDIFx1QUMwMVx1QUMwMSBcdUQwNkNcdUFFMzBcdUM1RDAgXHVDRDVDXHVDODAxXHVENjU0IFx1QjQxOFx1QjNDNFx1Qjg1RCBcdUI5REVcdUNEQTQgXHVDODFDXHVDNzkxIFx1RDU3NCBcdUI0RENcdUI5QkRcdUIyQzhcdUIyRTQuJ10sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPEJhbm5lciB7Li4ucHJvbW90aW9ufSAvPlxuICAgICAgPFJlY29tbWVuZCBsaXN0PXtsaXN0fSAvPlxuICAgICAgPFRlY2ggbGlzdD17dGVjaExpc3R9IGNsYXNzTmFtZT0nYngtY29udGVudHMtcm93LWJnJyAvPlxuICAgICAgPEZsb3cgLz5cbiAgICAgIDxDcmV3c1xuICAgICAgICBjbGFzc05hbWU9J2J4LWNvbnRlbnRzLXJvdy1iZydcbiAgICAgICAgcGhvdG9zPXtbcGhvdG8uY29tbW9uWzNdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzRdLnJlc3BvbnNpdmVJbWFnZSwgcGhvdG8uY29tbW9uWzVdLnJlc3BvbnNpdmVJbWFnZV19XG4gICAgICAvPlxuICAgICAgPEZBUSAvPlxuICAgICAgPFJlZnVuZCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IEltYWdlLCB0b1JlbWl4TWV0YSwgdXNlUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAnfi9saWIvZGF0b2NtcydcbmltcG9ydCB7IHBvc3QgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMvcG9zdHMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICd+L2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHsgRGF0ZSB9IGZyb20gJ34vY29tcG9uZW50cy9EYXRlJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgJ2V4cGVjdGVkIHBhcmFtcy5zbHVnJylcblxuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoe1xuICBkYXRhOiB7XG4gICAgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uOiB7XG4gICAgICBpbml0aWFsRGF0YTogeyBwb3N0IH0sXG4gICAgfSxcbiAgfSxcbn06IGFueSkgPT4ge1xuICByZXR1cm4gdG9SZW1peE1ldGEocG9zdC5zZW8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgeyB0aXRsZSwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHBvc3QgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHsuLi57XG4gICAgICAgIHRpdGxlOiBwb3N0Py50aXRsZSB8fCB0aXRsZSxcbiAgICAgICAgSWNvbjogPEF2YXRhciBuYW1lPXtwb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtwb3N0LmF1dGhvci5waWN0dXJlfSAvPixcbiAgICAgICAgZGVzYzogcG9zdD8uZXhjZXJwdCB8fCBkZXNjLFxuICAgICAgICBwcmV2Um91dGUsXG4gICAgICAgIGNvdmVyOiA8SW1hZ2UgZGF0YT17cG9zdC5jb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX0gLz4sXG4gICAgICAgIGRhdGU6IDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz4sXG4gICAgICAgIGNhdGVnb3J5SWQ6IHBvc3Q/LmNhdGVnb3J5Py5pZCxcbiAgICAgICAgc2lkZWJhcixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFBvc3Qgey4uLnsgcG9zdCB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAidHlwZSBBdmF0YXJQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBwaWN0dXJlOiB7XG4gICAgdXJsPzogc3RyaW5nLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgbmFtZSwgcGljdHVyZSB9OiBBdmF0YXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhdmF0YXJfX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17cGljdHVyZS51cmx9IGNsYXNzTmFtZT0nYXZhdGFyX19waWN0dXJlJyBhbHQ9e25hbWV9IC8+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2F2YXRhcl9fbmFtZSc+e25hbWV9PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG50eXBlIERhdGVQcm9wcyA9IHtcbiAgZGF0ZVN0cmluZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfTogRGF0ZVByb3BzKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX08L3RpbWU+XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IFBvc3RzUHJvcHMgfSBmcm9tICd+L3R5cGVzJ1xuXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzL1Bvc3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0cyh7IGZpcnN0UG9zdCwgb3RoZXJQb3N0cywgY2F0ZWdvcnkgfTogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYngtcG9zdCc+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgJ3Bvc3RzJ30vJHtmaXJzdFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LXRodW1iJz5cbiAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtdGh1bWJuYWlsJyBkYXRhPXtmaXJzdFBvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1tZXRhJz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdieC1wb3N0LXRpdGxlJz57Zmlyc3RQb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtZGVzYyc+e2ZpcnN0UG9zdC5leGNlcnB0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWRlc2MnPlxuICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17Zmlyc3RQb3N0LmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcG9zdC1hdmF0YXInPlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17Zmlyc3RQb3N0LmF1dGhvci5uYW1lfSBwaWN0dXJlPXtmaXJzdFBvc3QuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1zZWN0aW9uJz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtvdGhlclBvc3RzLm1hcCgocG9zdDogYW55KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdieC1wb3N0IGJ4LW90aGVyLXBvc3QnIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdieC1wb3N0LWxpbmsnIHRvPXtgLyR7Y2F0ZWdvcnkgfHwgJ3Bvc3RzJ30vJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtdGh1bWInPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtdGh1bWJuYWlsJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWluZm8nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LXBvc3QtbWV0YSc+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2J4LXBvc3QtdGl0bGUnPntwb3N0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWRlc2MnPntwb3N0LmV4Y2VycHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wb3N0LWRlc2MnPlxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgU3RydWN0dXJlZFRleHQsIEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IFBvc3QgYXMgUG9zdFR5cGUgfSBmcm9tICd+L3R5cGVzJ1xuXG50eXBlIFBvc3RQcm9wcyA9IHtcbiAgcG9zdDogUG9zdFR5cGUsXG4gIG1vcmVQb3N0cz86IFBvc3RUeXBlW10sXG4gIGNhdGVnb3J5SWQ/OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0KHsgcG9zdCAvKiAsIG1vcmVQb3N0cyAgKi8gfTogUG9zdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1hcnRpY2xlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWFydGljbGUtYm9keSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb3NlLXNtIHByb3NlLXNsYXRlIGRhcms6cHJvc2UtaW52ZXJ0Jz5cbiAgICAgICAgICAgIDxTdHJ1Y3R1cmVkVGV4dFxuICAgICAgICAgICAgICBkYXRhPXtwb3N0LmNvbnRlbnR9XG4gICAgICAgICAgICAgIHJlbmRlckJsb2NrPXsoeyByZWNvcmQgfTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5fX3R5cGVuYW1lID09PSAnSW1hZ2VCbG9ja1JlY29yZCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8SW1hZ2UgY2xhc3NOYW1lPSdieC1hcnRpY2xlLWltYWdlJyBkYXRhPXtyZWNvcmQuaW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb24ndCBrbm93IGhvdyB0byByZW5kZXIgYSBibG9jayE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHJlY29yZCwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX190aXRsZSc+TW9yZSBwb3N0czwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdncmlkJz5cbiAgICAgICAgICB7bW9yZVBvc3RzLm1hcCgocG9zdDogYW55KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9IGNsYXNzTmFtZT0nZ3JpZF9faXRlbSc+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IGNsYXNzTmFtZT0nZ3JpZF9fbGluayc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2dyaWRfX2ltYWdlJyBkYXRhPXtwb3N0LmNvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdncmlkX190aXRsZSc+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdC5kYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkYXRlJz57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgbm90aWNlIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnlTdWJzY3JpcHRpb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPFBvc3RzIHsuLi57IGZpcnN0UG9zdCwgb3RoZXJQb3N0cywgY2F0ZWdvcnk6ICdub3RpY2VzJyB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi5zZXQoJ3ByZXZpZXcnLCAneWVzJylcblxuICByZXR1cm4gcmVkaXJlY3QoJy8nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb25zJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgc2Vzc2lvbi51bnNldCgncHJldmlldycpXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0IH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICAgIHNpZGViYXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgcG9zdHMgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VOYXYsIHVzZVByZXZSb3V0ZSwgUm91dGUgfSBmcm9tICd+L2xpYi9jb25maWcnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdHMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICBjb25zdCBxdWVyeVN1YnNjcmlwdGlvbiA9IGF3YWl0IGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbiAgcmV0dXJuIHtcbiAgICAuLi5xdWVyeVN1YnNjcmlwdGlvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgcG9zdHM6IFtmaXJzdFBvc3QsIC4uLm90aGVyUG9zdHNdLFxuICAgIH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbnMnPlxuICAgICAgICA8UG9zdHMgey4uLnsgZmlyc3RQb3N0LCBvdGhlclBvc3RzIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5pbXBvcnQgeyBJbWFnZSwgdG9SZW1peE1ldGEsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBwb3N0IGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzL3Bvc3RzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnfi9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7IERhdGUgfSBmcm9tICd+L2NvbXBvbmVudHMvRGF0ZSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH06IGFueSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsICdleHBlY3RlZCBwYXJhbXMuc2x1ZycpXG5cbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKHtcbiAgZGF0YToge1xuICAgIGRhdG9RdWVyeVN1YnNjcmlwdGlvbjoge1xuICAgICAgaW5pdGlhbERhdGE6IHsgcG9zdCB9LFxuICAgIH0sXG4gIH0sXG59OiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvUmVtaXhNZXRhKHBvc3Quc2VvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHNpZGViYXIgfTogUm91dGUgPSB1c2VOYXYocGF0aG5hbWUpXG4gIGNvbnN0IHByZXZSb3V0ZSA9IHVzZVByZXZSb3V0ZShwYXRobmFtZSlcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwb3N0IH0sXG4gIH0gPSB1c2VRdWVyeVN1YnNjcmlwdGlvbihkYXRvUXVlcnlTdWJzY3JpcHRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB7Li4ue1xuICAgICAgICB0aXRsZTogcG9zdD8udGl0bGUgfHwgdGl0bGUsXG4gICAgICAgIEljb246IDxBdmF0YXIgbmFtZT17cG9zdC5hdXRob3IubmFtZX0gcGljdHVyZT17cG9zdC5hdXRob3IucGljdHVyZX0gLz4sXG4gICAgICAgIGRlc2M6IHBvc3Q/LmV4Y2VycHQgfHwgZGVzYyxcbiAgICAgICAgcHJldlJvdXRlLFxuICAgICAgICBjb3ZlcjogPEltYWdlIGRhdGE9e3Bvc3QuY292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9IC8+LFxuICAgICAgICBkYXRlOiA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0LmRhdGV9IC8+LFxuICAgICAgICBjYXRlZ29yeUlkOiBwb3N0Py5jYXRlZ29yeT8uaWQsXG4gICAgICAgIHNpZGViYXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0IHsuLi57IHBvc3QgfX0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IGRhdG9RdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ34vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBuZXdzIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgcXVlcnlTdWJzY3JpcHRpb24gPSBhd2FpdCBkYXRvUXVlcnlTdWJzY3JpcHRpb24oe1xuICAgIHJlcXVlc3QsXG4gICAgcXVlcnksXG4gIH0pXG4gIHJldHVybiB7XG4gICAgLi4ucXVlcnlTdWJzY3JpcHRpb24sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHBvc3RzOiBbZmlyc3RQb3N0LCAuLi5vdGhlclBvc3RzXSxcbiAgICB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlIH19PlxuICAgICAgPFBvc3RzIHsuLi57IGZpcnN0UG9zdCwgb3RoZXJQb3N0cywgY2F0ZWdvcnk6ICduZXdzJyB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgey4uLnsgdGl0bGUsIEljb24sIGRlc2MsIHNpZGViYXIsIHByZXZSb3V0ZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wYWdlLXJvdyc+PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTG90dGllIGZyb20gJ2xvdHRpZS1yZWFjdCdcbmltcG9ydCB7IHVzZU5hdiwgdXNlUHJldlJvdXRlLCBSb3V0ZSB9IGZyb20gJ34vbGliL2NvbmZpZydcbmltcG9ydCB7IGhhbmRsZUNsaWNrQ2hhdENoYW5uZWwsIGhhbmRsZUNsaWNrQWRkQ2hhbm5lbCB9IGZyb20gJ34vbGliL2tha2FvJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgY293Ym95SGF0RmFjZSBmcm9tICd+L2xvdHRpZXMvY293Ym95LWhhdC1mYWNlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgeyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciB9OiBSb3V0ZSA9IHVzZU5hdihwYXRobmFtZSlcbiAgY29uc3QgcHJldlJvdXRlID0gdXNlUHJldlJvdXRlKHBhdGhuYW1lKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdieC1wYWdlLXJvdyBwYi0yMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgcHQtMjAnPlxuICAgICAgICAgICAgPExvdHRpZSBsb29wIGF1dG9wbGF5IGFuaW1hdGlvbkRhdGE9e2Nvd2JveUhhdEZhY2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxiIGNsYXNzTmFtZT0ndGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC10aGluIG1iLTUgdGV4dC1zbGF0ZS02MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBkYXJrOmhvdmVyOnRleHQtc2xhdGUtMjAwJz5cbiAgICAgICAgICAgICAgXHVDQzQ0XHVEMzA1IFx1QkIzOFx1Qzc1OFxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtIG1kOnRleHQtYmFzZSBvcGFjaXR5LTgwJz5cdUQzQzlcdUM3N0MgMTA6MDAgLSAxODowMDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14cyBtZDp0ZXh0LXNtIG9wYWNpdHktNTAnPihcdUM4MTBcdUMyRUNcdUMyRENcdUFDMDQgMTM6MDAgLSAxNDowMCBcdUM4MUNcdUM2NzggXHUwMEI3IFx1QzhGQ1x1QjlEMC9cdUFDRjVcdUQ3MzRcdUM3N0MgXHVDODFDXHVDNjc4KTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtMic+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8SWNvbnMuS2FrYW8gLz59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQWRkQ2hhbm5lbH0+XG4gICAgICAgICAgICAgICAgXHVDQzQ0XHVCMTEwIFx1Q0Q5NFx1QUMwMFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8SWNvbnMuS2FrYW8gLz59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2hhdENoYW5uZWx9PlxuICAgICAgICAgICAgICAgIFx1Q0U3NFx1RDFBMSBcdUNDNDRcdUQzMDVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIHJldHVybiAoXG4gICAgPExheW91dCB7Li4ueyB0aXRsZSwgSWNvbiwgZGVzYywgc2lkZWJhciwgcHJldlJvdXRlLCBpc1dpZGU6IHRydWUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcHJpdmFjeSBwcm9zZS1zbSBwcm9zZS1zbGF0ZSBkYXJrOnByb3NlLWludmVydCc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyIGxoNiBiczUgdHM0Jz5cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+Jmx0O0JPTFQtVVgmZ3Q7KCdodHRwczovL3d3dy5ib2x0LXV4LmNvbSdcdUM3NzRcdUQ1NTggJ0JPTFQtVVgnKTwvZW0+XHVDNzQwKFx1QjI5NCkgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XG4gICAgICAgICAgXHVCQ0Y0XHVENjM4XHVCQzk1XHUzMDBEIFx1QzgxQzMwXHVDODcwXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNGNFx1RDYzOFx1RDU1OFx1QUNFMCBcdUM3NzRcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUNFMFx1Q0RBOVx1Qzc0NCBcdUMyRTBcdUMxOERcdUQ1NThcdUFDRTAgXHVDNkQwXHVENjVDXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1RDU2MCBcdUMyMTggXHVDNzg4XHVCM0M0XHVCODVEXG4gICAgICAgICAgXHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUNDOThcdUI5QUNcdUJDMjlcdUNFNjhcdUM3NDQgXHVDMjE4XHVCOUJEXHUwMEI3XHVBQ0Y1XHVBQzFDXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICBcdTI1Q0IgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCA8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+MjAyMjwvZW0+XHVCMTQ0IDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4zPC9lbT5cdUM2RDR7JyAnfVxuICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4xNzwvZW0+XHVCRDgwXHVEMTMwIFx1QzgwMVx1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzFcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQyBcdUJBQTlcdUM4MDEpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OygnaHR0cHM6Ly93d3cuYm9sdC11eC5jb20nXHVDNzc0XHVENTU4ICdCT0xULVVYJyk8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QjJFNFx1Qzc0Q1x1Qzc1OCBcdUJBQTlcdUM4MDFcdUM3NDRcbiAgICAgICAgICBcdUM3MDRcdUQ1NThcdUM1RUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0M5OFx1QjlBQ1x1RDU2OVx1QjJDOFx1QjJFNC4gXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUIyOTQgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QkFBOVx1QzgwMSBcdUM3NzRcdUM2NzhcdUM3NTggXHVDNkE5XHVCM0M0XHVCODVDXHVCMjk0IFx1Qzc3NFx1QzZBOVx1QjQxOFx1QzlDMCBcdUM1NEFcdUM3M0NcdUJBNzAgXHVDNzc0XHVDNkE5IFx1QkFBOVx1QzgwMVx1Qzc3NFxuICAgICAgICAgIFx1QkNDMFx1QUNCRFx1QjQxOFx1QjI5NCBcdUFDQkRcdUM2QjBcdUM1RDBcdUIyOTQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUM4MUMxOFx1Qzg3MFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVCQ0M0XHVCM0M0XHVDNzU4IFx1QjNEOVx1Qzc1OFx1Qjk3QyBcdUJDMUJcdUIyOTQgXHVCNEYxIFx1RDU0NFx1QzY5NFx1RDU1QyBcdUM4NzBcdUNFNThcdUI5N0MgXHVDNzc0XHVENTg5XHVENTYwIFx1QzYwOFx1QzgxNVx1Qzc4NVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4xLiBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUsIFx1Q0Y1OFx1RDE1MFx1Q0UyMCBcdUM4MUNcdUFDRjUsIFx1QjlERVx1Q0RBNFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz4yLiBcdUI5QzhcdUNGMDBcdUQzMDUgXHVCQzBGIFx1QUQxMVx1QUNFMFx1QzVEMFx1Qzc1OCBcdUQ2NUNcdUM2QTk8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgICAgXHVDNzc4XHVBRDZDXHVEMUI1XHVBQ0M0XHVENTU5XHVDODAxIFx1RDJCOVx1QzEzMVx1QzVEMCBcdUI1MzBcdUI5NzggXHVDMTFDXHVCRTQ0XHVDMkE0IFx1QzgxQ1x1QUNGNSBcdUJDMEYgXHVBRDExXHVBQ0UwIFx1QUM4Q1x1QzdBQyAsIFx1QzExQ1x1QkU0NFx1QzJBNFx1Qzc1OCBcdUM3MjBcdUQ2QThcdUMxMzEgXHVENjU1XHVDNzc4LCBcdUM4MTFcdUMxOERcdUJFNDhcdUIzQzQgXHVEMzBDXHVDNTQ1IFx1QjYxMFx1QjI5NCBcdUQ2OENcdUM2RDBcdUM3NTggXHVDMTFDXHVCRTQ0XHVDMkE0XG4gICAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM1RDAgXHVCMzAwXHVENTVDIFx1RDFCNVx1QUNDNCBcdUI0RjFcdUM3NDQgXHVCQUE5XHVDODAxXHVDNzNDXHVCODVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgPHN0cm9uZz5cdUM4MUMyXHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUNDOThcdUI5QUMgXHVCQzBGIFx1QkNGNFx1QzcyMCBcdUFFMzBcdUFDMDQpPC9zdHJvbmc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYwIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz4mbHQ7Qk9MVC1VWCZndDs8L2VtPlx1Qzc0MChcdUIyOTQpIFx1QkM5NVx1QjgzOVx1QzVEMCBcdUI1MzBcdUI5NzggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1MDBCN1x1Qzc3NFx1QzZBOVx1QUUzMFx1QUMwNCBcdUI2MTBcdUIyOTRcbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUI4NUNcdUJEODBcdUQxMzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzIxOFx1QzlEMSBcdUMyRENcdUM1RDAgXHVCM0Q5XHVDNzU4XHVCQzFCXHVDNzQwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdTAwQjdcdUM3NzRcdUM2QTlcdUFFMzBcdUFDMDQgXHVCMEI0XHVDNUQwXHVDMTFDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdTAwQjdcdUJDRjRcdUM3MjBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QUMwMVx1QUMwMVx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDIFx1QkMwRiBcdUJDRjRcdUM3MjAgXHVBRTMwXHVBQzA0XHVDNzQwIFx1QjJFNFx1Qzc0Q1x1QUNGQyBcdUFDMTlcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdF9pbmRlbnQyIG1ndDEwJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+MS4mbHQ7XHVCOUM4XHVDRjAwXHVEMzA1IFx1QkMwRiBcdUFEMTFcdUFDRTBcdUM1RDBcdUM3NTggXHVENjVDXHVDNkE5Jmd0OzwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlxuICAgICAgICAgICAgJmx0O1x1QjlDOFx1Q0YwMFx1RDMwNSBcdUJDMEYgXHVBRDExXHVBQ0UwXHVDNUQwXHVDNzU4IFx1RDY1Q1x1QzZBOSZndDtcdUM2NDAgXHVBRDAwXHVCODI4XHVENTVDIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QjI5NCBcdUMyMThcdUM5RDEuXHVDNzc0XHVDNkE5XHVDNUQwIFx1QUQwMFx1RDU1QyBcdUIzRDlcdUM3NThcdUM3N0NcdUI4NUNcdUJEODBcdUQxMzAmbHQ7XHVDOUMwXHVDQ0I0XHVDNUM2XHVDNzc0IFx1RDMwQ1x1QUUzMCZndDtcdUFFNENcdUM5QzBcbiAgICAgICAgICAgIFx1QzcwNCBcdUM3NzRcdUM2QTlcdUJBQTlcdUM4MDFcdUM3NDQgXHVDNzA0XHVENTU4XHVDNUVDIFx1QkNGNFx1QzcyMC5cdUM3NzRcdUM2QTlcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XHVCQ0Y0XHVDNzIwXHVBREZDXHVBQzcwIDogXHVBRDExXHVBQ0UwPC9saT5cbiAgICAgICAgICA8bGk+XHVBRDAwXHVCODI4XHVCQzk1XHVCODM5IDogXHVENDVDXHVDMkRDL1x1QUQxMVx1QUNFMFx1QzVEMCBcdUFEMDBcdUQ1NUMgXHVBRTMwXHVCODVEIDogNlx1QUMxQ1x1QzZENDwvbGk+XG4gICAgICAgICAgPGxpPlx1QzYwOFx1QzY3OFx1QzBBQ1x1QzcyMCA6IDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzNcdUM4NzAoXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNjQwIFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc1OCBcdUFEOENcdUI5QUNcdTAwQjdcdUM3NThcdUJCMzQgXHVCQzBGIFx1QURGOCBcdUQ1ODlcdUMwQUNcdUJDMjlcdUJDOTUpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7XHVDNUQwIFx1QjMwMFx1RDU3NCBcdUM1QjhcdUM4MUNcdUI0RTBcdUM5QzAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1MDBCN1x1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1MDBCN1x1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUM2OTRcdUFENkMgXHVCNEYxXHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1Qjk3QyBcdUQ1ODlcdUMwQUNcdUQ1NjAgXHVDMjE4XG4gICAgICAgICAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MSBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFEOENcdUI5QUMgXHVENTg5XHVDMEFDXHVCMjk0ICZsdDtCT0xULVVYJmd0O1x1QzVEMCBcdUIzMDBcdUQ1NzQgXHUzMDBDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRCBcdUMyRENcdUQ1ODlcdUI4MzkgXHVDODFDNDFcdUM4NzBcdUM4MUMxXHVENTZEXHVDNUQwIFx1QjUzMFx1Qjc3QyBcdUMxMUNcdUJBNzQsXG4gICAgICAgICAgXHVDODA0XHVDNzkwXHVDNkIwXHVEM0I4LCBcdUJBQThcdUMwQUNcdUM4MDRcdUMxQTEoRkFYKSBcdUI0RjFcdUM3NDQgXHVEMUI1XHVENTU4XHVDNUVDIFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDNzNDXHVCQTcwICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1Qzc3NFx1QzVEMCBcdUIzMDBcdUQ1NzQgXHVDOUMwXHVDQ0I0IFx1QzVDNlx1Qzc3NCBcdUM4NzBcdUNFNThcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDYyIFx1QzgxQzFcdUQ1NkRcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QUQ4Q1x1QjlBQyBcdUQ1ODlcdUMwQUNcdUIyOTQgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkM5NVx1QzgxNVx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3NFx1QjA5OCBcdUM3MDRcdUM3ODRcdUM3NDQgXHVCQzFCXHVDNzQwIFx1Qzc5MCBcdUI0RjEgXHVCMzAwXHVCOUFDXHVDNzc4XHVDNzQ0IFx1RDFCNVx1RDU1OFx1QzVFQyBcdUQ1NThcdUMyRTQgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cdUM3NzRcbiAgICAgICAgICBcdUFDQkRcdUM2QjAgXHUyMDFDXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQyBcdUJDMjlcdUJDOTVcdUM1RDAgXHVBRDAwXHVENTVDIFx1QUNFMFx1QzJEQyhcdUM4MUMyMDIwLTdcdUQ2MzgpXHUyMDFEIFx1QkNDNFx1QzlDMCBcdUM4MUMxMVx1RDYzOCBcdUMxMUNcdUMyRERcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzcwNFx1Qzc4NFx1QzdBNVx1Qzc0NCBcdUM4MUNcdUNEOUNcdUQ1NThcdUMxNTRcdUM1N0MgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjQ2MyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDIFx1QkMwRiBcdUNDOThcdUI5QUNcdUM4MTVcdUM5QzAgXHVDNjk0XHVBRDZDXHVCMjk0IFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzhcdUJDOTVcdTMwMEQgXHVDODFDMzVcdUM4NzAgXHVDODFDNFx1RDU2RCwgXHVDODFDMzdcdUM4NzAgXHVDODFDMlx1RDU2RFx1QzVEMCBcdUM3NThcdUQ1NThcdUM1RUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUQ4Q1x1QjlBQ1x1QUMwMFxuICAgICAgICAgIFx1QzgxQ1x1RDU1QyBcdUI0MjAgXHVDMjE4IFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICBcdTI0NjQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1QzgxNVx1QzgxNSBcdUJDMEYgXHVDMEFEXHVDODFDIFx1QzY5NFx1QUQ2Q1x1QjI5NCBcdUIyRTRcdUI5NzggXHVCQzk1XHVCODM5XHVDNUQwXHVDMTFDIFx1QURGOCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVDMjE4XHVDOUQxIFx1QjMwMFx1QzBDMVx1QzczQ1x1Qjg1QyBcdUJBODVcdUMyRENcdUI0MThcdUM1QjQgXHVDNzg4XHVCMjk0IFx1QUNCRFx1QzZCMFx1QzVEMFx1QjI5NCBcdUFERjggXHVDMEFEXHVDODFDXHVCOTdDXG4gICAgICAgICAgXHVDNjk0XHVBRDZDXHVENTYwIFx1QzIxOCBcdUM1QzZcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XG4gICAgICAgICAgXHUyNDY1ICZsdDtCT0xULVVYJmd0O1x1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNCBcdUFEOENcdUI5QUNcdUM1RDAgXHVCNTMwXHVCOTc4IFx1QzVGNFx1Qjc4Q1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1QzgxNVx1QzgxNVx1MDBCN1x1QzBBRFx1QzgxQ1x1Qzc1OCBcdUM2OTRcdUFENkMsIFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMFx1Qzc1OCBcdUM2OTRcdUFENkMgXHVDMkRDIFx1QzVGNFx1Qjc4QyBcdUI0RjEgXHVDNjk0XHVBRDZDXHVCOTdDXG4gICAgICAgICAgXHVENTVDIFx1Qzc5MFx1QUMwMCBcdUJDRjhcdUM3NzhcdUM3NzRcdUFDNzBcdUIwOTggXHVDODE1XHVCMkY5XHVENTVDIFx1QjMwMFx1QjlBQ1x1Qzc3OFx1Qzc3OFx1QzlDMFx1Qjk3QyBcdUQ2NTVcdUM3NzhcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNFx1Qzg3MChcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1RDU2RFx1QkFBOSBcdUM3OTFcdUMxMzEpIDwvc3Ryb25nPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPiBcdTI0NjAgPGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPiZsdDtCT0xULVVYJmd0OzwvZW0+XHVDNzQwKFx1QjI5NCkgXHVCMkU0XHVDNzRDXHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUQ1NkRcdUJBQTlcdUM3NDQgXHVDQzk4XHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz4xJmx0OyBcdUM3QUNcdUQ2NTQgXHVCNjEwXHVCMjk0IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM4MUNcdUFDRjUgJmd0OzwvbGk+XG4gICAgICAgICAgPGxpPlx1RDU0NFx1QzIxOFx1RDU2RFx1QkFBOSA6IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTkgXHVBRTMwXHVCODVELCBcdUM4MTFcdUMxOEQgXHVCODVDXHVBREY4LCBcdUNGRTBcdUQwQTQ8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMjBcdUQwRERcdUQ1NkRcdUJBQTkgOiBcdUM4MTFcdUMxOEQgSVAgXHVDODE1XHVCQ0Y0PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDNVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVEMzBDXHVBRTMwKTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nbHMyJz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjAgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc0MChcdUIyOTQpIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUM3MjBcdUFFMzBcdUFDMDRcdUM3NTggXHVBQ0JEXHVBQ0ZDLCBcdUNDOThcdUI5QUNcdUJBQTlcdUM4MDEgXHVCMkVDXHVDMTMxIFx1QjRGMSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUFDMDAgXHVCRDg4XHVENTQ0XHVDNjk0XHVENTU4XHVBQzhDIFx1QjQxOFx1QzVDOFx1Qzc0NCBcdUI1NENcdUM1RDBcdUIyOTRcbiAgICAgICAgICBcdUM5QzBcdUNDQjRcdUM1QzZcdUM3NzQgXHVENTc0XHVCMkY5IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUQzMENcdUFFMzBcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUIzRDlcdUM3NThcdUJDMUJcdUM3NDAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1QzcyMFx1QUUzMFx1QUMwNFx1Qzc3NCBcdUFDQkRcdUFDRkNcdUQ1NThcdUFDNzBcdUIwOTggXHVDQzk4XHVCOUFDXHVCQUE5XHVDODAxXHVDNzc0IFx1QjJFQ1x1QzEzMVx1QjQxOFx1QzVDOFx1Qzc0Q1x1QzVEMFx1QjNDNCBcdUJEODhcdUFENkNcdUQ1NThcdUFDRTAgXHVCMkU0XHVCOTc4IFx1QkM5NVx1QjgzOVx1QzVEMFxuICAgICAgICAgIFx1QjUzMFx1Qjc3QyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBQ0M0XHVDMThEIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QzVFQ1x1QzU3QyBcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0LCBcdUQ1NzRcdUIyRjkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QkNDNFx1QjNDNFx1Qzc1OCBcdUIzNzBcdUM3NzRcdUQxMzBcdUJDQTBcdUM3NzRcdUMyQTQoREIpXHVCODVDIFx1QzYyRVx1QUUzMFx1QUM3MFx1QjA5OCBcdUJDRjRcdUFEMDBcdUM3QTVcdUMxOENcdUI5N0NcbiAgICAgICAgICBcdUIyRUNcdUI5QUNcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDODc0XHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1QkM5NVx1QjgzOSBcdUFERkNcdUFDNzAgOjxiciAvPlxuICAgICAgICAgIDIuIFx1QkNGNFx1Qzg3NFx1RDU1OFx1QjI5NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVENTZEXHVCQUE5IDogXHVBQ0M0XHVDODhDXHVDODE1XHVCQ0Y0LCBcdUFDNzBcdUI3OThcdUIwQTBcdUM5RENcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cdTI0NjIgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1RDMwQ1x1QUUzMFx1Qzc1OCBcdUM4MDhcdUNDMjggXHVCQzBGIFx1QkMyOVx1QkM5NVx1Qzc0MCBcdUIyRTRcdUM3NENcdUFDRkMgXHVBQzE5XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDEuIFx1RDMwQ1x1QUUzMFx1QzgwOFx1Q0MyOFxuICAgICAgICAgIDxiciAvPiAmbHQ7IEJMVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVEMzBDXHVBRTMwIFx1QzBBQ1x1QzcyMFx1QUMwMCBcdUJDMUNcdUMwRERcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1QzEyMFx1QzgxNVx1RDU1OFx1QUNFMCwgJmx0OyBCTFQtVVgmZ3Q7IFx1Qzc1OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVDNzU4XG4gICAgICAgICAgXHVDMkI5XHVDNzc4XHVDNzQ0IFx1QkMxQlx1QzU0NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVEMzBDXHVBRTMwXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MTAnPjIuIFx1RDMwQ1x1QUUzMFx1QkMyOVx1QkM5NTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+XHVDODA0XHVDNzkwXHVDODAxIFx1RDMwQ1x1Qzc3QyBcdUQ2MTVcdUQwRENcdUM3NTggXHVDODE1XHVCQ0Y0XHVCMjk0IFx1QUUzMFx1Qjg1RFx1Qzc0NCBcdUM3QUNcdUMwRERcdUQ1NjAgXHVDMjE4IFx1QzVDNlx1QjI5NCBcdUFFMzBcdUMyMjBcdUM4MDEgXHVCQzI5XHVCQzk1XHVDNzQ0IFx1QzBBQ1x1QzZBOVx1RDU2OVx1QjJDOFx1QjJFNDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICBcdUM4MUM2XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1NDhcdUM4MDRcdUMxMzEgXHVENjU1XHVCQ0Y0IFx1Qzg3MFx1Q0U1OClcbiAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAmbHQ7IEJMVC1VWCZndDtcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICBcdUM3NDAoXHVCMjk0KSBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNTQ4XHVDODA0XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVCMkU0XHVDNzRDXHVBQ0ZDIFx1QUMxOVx1Qzc0MCBcdUM4NzBcdUNFNThcdUI5N0MgXHVDREU4XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDEwJz5cbiAgICAgICAgICAxLiBcdUM4MTVcdUFFMzBcdUM4MDFcdUM3NzggXHVDNzkwXHVDQ0I0IFx1QUMxMFx1QzBBQyBcdUMyRTRcdUMyRENcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUFEMDBcdUI4MjggXHVDNTQ4XHVDODE1XHVDMTMxIFx1RDY1NVx1QkNGNFx1Qjk3QyBcdUM3MDRcdUQ1NzQgXHVDODE1XHVBRTMwXHVDODAxKFx1QkQ4NFx1QUUzMCAxXHVENjhDKVx1QzczQ1x1Qjg1QyBcdUM3OTBcdUNDQjQgXHVBQzEwXHVDMEFDXHVCOTdDIFx1QzJFNFx1QzJEQ1x1RDU1OFx1QUNFMCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMi4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0RFOFx1QUUwOSBcdUM5QzFcdUM2RDBcdUM3NTggXHVDRDVDXHVDMThDXHVENjU0IFx1QkMwRiBcdUFENTBcdUM3MjFcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCOTdDIFx1Q0RFOFx1QUUwOVx1RDU1OFx1QjI5NCBcdUM5QzFcdUM2RDBcdUM3NDQgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1QjJGNFx1QjJGOVx1Qzc5MFx1QzVEMCBcdUQ1NUNcdUM4MTVcdUMyRENcdUNGMUMgXHVDRDVDXHVDMThDXHVENjU0IFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVBRDAwXHVCOUFDXHVENTU4XHVCMjk0IFx1QjMwMFx1Q0M0NVx1Qzc0NCBcdUMyRENcdUQ1ODlcdUQ1NThcdUFDRTBcbiAgICAgICAgICBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMy4gXHVENTc0XHVEMEI5IFx1QjRGMVx1QzVEMCBcdUIzMDBcdUJFNDRcdUQ1NUMgXHVBRTMwXHVDMjIwXHVDODAxIFx1QjMwMFx1Q0M0NVxuICAgICAgICAgIDxiciAvPiAmbHQ7PGVtIGNsYXNzTmFtZT0nZW1waGFzaXMnPkJPTFQtVVg8L2VtPiZndDsoJzxlbSBjbGFzc05hbWU9J2VtcGhhc2lzJz5CT0xULVVYPC9lbT4nKVx1Qzc0MCBcdUQ1NzRcdUQwQjlcdUM3NzRcdUIwOThcbiAgICAgICAgICBcdUNFRjRcdUQ0RThcdUQxMzAgXHVCQzE0XHVDNzc0XHVCN0VDXHVDMkE0IFx1QjRGMVx1QzVEMCBcdUM3NThcdUQ1NUMgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzcyMFx1Q0Q5QyBcdUJDMEYgXHVENkZDXHVDMTkwXHVDNzQ0IFx1QjlDOVx1QUUzMCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVCQ0Y0XHVDNTQ4XHVENTA0XHVCODVDXHVBREY4XHVCN0E4XHVDNzQ0IFx1QzEyNFx1Q0U1OFx1RDU1OFx1QUNFMCBcdUM4RkNcdUFFMzBcdUM4MDFcdUM3NzggXHVBQzMxXHVDMkUwXHUwMEI3XHVDODEwXHVBQzgwXHVDNzQ0XG4gICAgICAgICAgXHVENTU4XHVCQTcwIFx1QzY3OFx1QkQ4MFx1Qjg1Q1x1QkQ4MFx1RDEzMCBcdUM4MTFcdUFERkNcdUM3NzQgXHVEMUI1XHVDODFDXHVCNDFDIFx1QUQ2Q1x1QzVFRFx1QzVEMCBcdUMyRENcdUMyQTRcdUQxNUNcdUM3NDQgXHVDMTI0XHVDRTU4XHVENTU4XHVBQ0UwIFx1QUUzMFx1QzIyMFx1QzgwMS9cdUJCM0NcdUI5QUNcdUM4MDFcdUM3M0NcdUI4NUMgXHVBQzEwXHVDMkRDIFx1QkMwRiBcdUNDMjhcdUIyRThcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDQuIFx1QzgxMVx1QzE4RFx1QUUzMFx1Qjg1RFx1Qzc1OCBcdUJDRjRcdUFEMDAgXHVCQzBGIFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMjlcdUM5QzBcbiAgICAgICAgICA8YnIgLz4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDQzk4XHVCOUFDXHVDMkRDXHVDMkE0XHVEMTVDXHVDNUQwIFx1QzgxMVx1QzE4RFx1RDU1QyBcdUFFMzBcdUI4NURcdUM3NDQgXHVDRDVDXHVDMThDIDFcdUIxNDQgXHVDNzc0XHVDMEMxIFx1QkNGNFx1QUQwMCwgXHVBRDAwXHVCOUFDXHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzczQ1x1QkE3MCxcdUIyRTRcdUI5Q0MsIDVcdUI5Q0NcdUJBODUgXHVDNzc0XHVDMEMxXHVDNzU4IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QzVEMFxuICAgICAgICAgIFx1QUQwMFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUI5N0MgXHVDRDk0XHVBQzAwXHVENTU4XHVBQzcwXHVCMDk4LCBcdUFDRTBcdUM3MjBcdUMyRERcdUJDQzRcdUM4MTVcdUJDRjQgXHVCNjEwXHVCMjk0IFx1QkJGQ1x1QUMxMFx1QzgxNVx1QkNGNFx1Qjk3QyBcdUNDOThcdUI5QUNcdUQ1NThcdUIyOTQgXHVBQ0JEXHVDNkIwXHVDNUQwXHVCMjk0IDJcdUIxNDRcdUM3NzRcdUMwQzEgXHVCQ0Y0XHVBRDAwLCBcdUFEMDBcdUI5QUNcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QjYxMFx1RDU1QywgXHVDODExXHVDMThEXHVBRTMwXHVCODVEXHVDNzc0IFx1QzcwNFx1QkNDMFx1Qzg3MCBcdUJDMEYgXHVCM0M0XHVCMDlDLCBcdUJEODRcdUMyRTRcdUI0MThcdUM5QzAgXHVDNTRBXHVCM0M0XHVCODVEIFx1QkNGNFx1QzU0OFx1QUUzMFx1QjJBNVx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NThcdUFDRTAgXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsaDYgYnM0Jz5cbiAgICAgICAgICA8c3Ryb25nPlx1QzgxQzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Qzc5MFx1QjNEOSBcdUMyMThcdUM5RDEgXHVDN0E1XHVDRTU4XHVDNzU4IFx1QzEyNFx1Q0U1OFx1MjAyMlx1QzZCNFx1QzYwMSBcdUJDMEYgXHVBQzcwXHVCRDgwXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkQpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsczInPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlx1MjQ2MCAmbHQ7Qk9MVC1VWCZndDsgXHVDNzQwKFx1QjI5NCkgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNUQwXHVBQzhDIFx1QUMxQ1x1QkNDNFx1QzgwMVx1Qzc3OCBcdUI5REVcdUNEQTRcdUMxMUNcdUJFNDRcdUMyQTRcdUI5N0MgXHVDODFDXHVBQ0Y1XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU3NCBcdUM3NzRcdUM2QTlcdUM4MTVcdUJDRjRcdUI5N0MgXHVDODAwXHVDN0E1XHVENTU4XHVBQ0UwIFx1QzIxOFx1QzJEQ1x1Qjg1Q1xuICAgICAgICAgIFx1QkQ4OFx1QjdFQ1x1QzYyNFx1QjI5NCBcdTIwMThcdUNGRTBcdUQwQTQoY29va2llKVx1MjAxOVx1Qjk3QyBcdUMwQUNcdUM2QTlcdUQ1NjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XHUyNDYxIFx1Q0ZFMFx1RDBBNFx1QjI5NCBcdUM2RjlcdUMwQUNcdUM3NzRcdUQyQjhcdUI5N0MgXHVDNkI0XHVDNjAxXHVENTU4XHVCMjk0XHVCMzcwIFx1Qzc3NFx1QzZBOVx1QjQxOFx1QjI5NCBcdUMxMUNcdUJDODQoaHR0cClcdUFDMDAgXHVDNzc0XHVDNkE5XHVDNzkwXHVDNzU4IFx1Q0VGNFx1RDRFOFx1RDEzMCBcdUJFMENcdUI3N0NcdUM2QjBcdUM4MDBcdUM1RDBcdUFDOEMgXHVCQ0Y0XHVCMEI0XHVCMjk0IFx1QzE4Q1x1QjdDOVx1Qzc1OCBcdUM4MTVcdUJDRjRcdUM3NzRcdUJBNzBcbiAgICAgICAgICBcdUM3NzRcdUM2QTlcdUM3OTBcdUI0RTRcdUM3NTggUEMgXHVDRUY0XHVENEU4XHVEMTMwXHVCMEI0XHVDNzU4IFx1RDU1OFx1QjREQ1x1QjUxNFx1QzJBNFx1RDA2Q1x1QzVEMCBcdUM4MDBcdUM3QTVcdUI0MThcdUFFMzBcdUIzQzQgXHVENTY5XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1QUMwMC4gXHVDRkUwXHVEMEE0XHVDNzU4IFx1QzBBQ1x1QzZBOSBcdUJBQTlcdUM4MDEgOiBcdUM3NzRcdUM2QTlcdUM3OTBcdUFDMDAgXHVCQzI5XHVCQjM4XHVENTVDIFx1QUMwMSBcdUMxMUNcdUJFNDRcdUMyQTRcdUM2NDAgXHVDNkY5IFx1QzBBQ1x1Qzc3NFx1RDJCOFx1QjRFNFx1QzVEMCBcdUIzMDBcdUQ1NUMgXHVCQzI5XHVCQjM4IFx1QkMwRiBcdUM3NzRcdUM2QTlcdUQ2MTVcdUQwREMsIFx1Qzc3OFx1QUUzMCBcdUFDODBcdUMwQzlcdUM1QjQsIFx1QkNGNFx1QzU0OFx1QzgxMVx1QzE4RFxuICAgICAgICAgIFx1QzVFQ1x1QkQ4MCwgXHVCNEYxXHVDNzQ0IFx1RDMwQ1x1QzU0NVx1RDU1OFx1QzVFQyBcdUM3NzRcdUM2QTlcdUM3OTBcdUM1RDBcdUFDOEMgXHVDRDVDXHVDODAxXHVENjU0XHVCNDFDIFx1QzgxNVx1QkNGNCBcdUM4MUNcdUFDRjVcdUM3NDQgXHVDNzA0XHVENTc0IFx1QzBBQ1x1QzZBOVx1QjQyOVx1QjJDOFx1QjJFNC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUIwOTguIFx1Q0ZFMFx1RDBBNFx1Qzc1OCBcdUMxMjRcdUNFNThcdTIwMjJcdUM2QjRcdUM2MDEgXHVCQzBGIFx1QUM3MFx1QkQ4MCA6IFx1QzZGOVx1QkUwQ1x1Qjc3Q1x1QzZCMFx1QzgwMCBcdUMwQzFcdUIyRThcdUM3NTggXHVCM0M0XHVBRDZDJmd0O1x1Qzc3OFx1RDEzMFx1QjEzNyBcdUM2MzVcdUMxNTgmZ3Q7XHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkE1NFx1QjI3NFx1Qzc1OCBcdUM2MzVcdUMxNTggXHVDMTI0XHVDODE1XHVDNzQ0IFx1RDFCNVx1RDU3NCBcdUNGRTBcdUQwQTRcbiAgICAgICAgICBcdUM4MDBcdUM3QTVcdUM3NDQgXHVBQzcwXHVCRDgwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiBcdUNGRTBcdUQwQTQgXHVDODAwXHVDN0E1XHVDNzQ0IFx1QUM3MFx1QkQ4MFx1RDU2MCBcdUFDQkRcdUM2QjAgXHVCOURFXHVDREE0XHVENjE1IFx1QzExQ1x1QkU0NFx1QzJBNCBcdUM3NzRcdUM2QTlcdUM1RDAgXHVDNUI0XHVCODI0XHVDNkMwXHVDNzc0IFx1QkMxQ1x1QzBERFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AgbWd0MzAnPlxuICAgICAgICAgIDxzdHJvbmc+XHVDODFDOFx1Qzg3MCAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCkgPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCBtZ3QxMCc+XG4gICAgICAgICAgXHUyNDYwIDxzcGFuIGNsYXNzTmFtZT0nY29sb3JMaWdodEJsdWUnPiZsdDtCT0xULVVYJmd0Ozwvc3Bhbj4gXHVDNzQwKFx1QjI5NCkgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzVEMCBcdUFEMDBcdUQ1NUMgXHVDNUM1XHVCQjM0XHVCOTdDIFx1Q0QxRFx1QUQwNFx1RDU3NFx1QzExQ1xuICAgICAgICAgIFx1Q0M0NVx1Qzc4NFx1QzlDMFx1QUNFMCwgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QzY0MCBcdUFEMDBcdUI4MjhcdUQ1NUMgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QkQ4OFx1QjlDQ1x1Q0M5OFx1QjlBQyBcdUJDMEYgXHVENTNDXHVENTc0XHVBRDZDXHVDODFDIFx1QjRGMVx1Qzc0NCBcdUM3MDRcdUQ1NThcdUM1RUMgXHVDNTQ0XHVCNzk4XHVDNjQwIFx1QUMxOVx1Qzc3NCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVDQzQ1XHVDNzg0XHVDNzkwXHVCOTdDXG4gICAgICAgICAgXHVDOUMwXHVDODE1XHVENTU4XHVBQ0UwIFx1Qzc4OFx1QzJCNVx1QjJDOFx1QjJFNC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3R0Jz5cdTI1QjYgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCA8L2xpPlxuICAgICAgICAgIDxsaT5cdUMxMzFcdUJBODUgOlx1QUU0MFx1QzZBOVx1QjlDQzwvbGk+XG4gICAgICAgICAgPGxpPlx1QzlDMVx1Q0M0NSA6XHVBRDAwXHVCOUFDXHVDNzkwPC9saT5cbiAgICAgICAgICA8bGk+XHVDOUMxXHVBRTA5IDpcdUIzMDBcdUQ0NUM8L2xpPlxuICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlxuICAgICAgICAgIFx1MjAzQiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4IFx1QjJGNFx1QjJGOVx1QkQ4MFx1QzExQ1x1Qjg1QyBcdUM1RjBcdUFDQjBcdUI0MjlcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPHAgLz57JyAnfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3RfaW5kZW50MiBtZ3QxMCc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0dCc+XHUyNUI2IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUJDRjRcdUQ2MzggXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOlx1QzExQ1x1QkU0NFx1QzJBNCBcdUM2QjRcdUM2MDE8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QjJGNFx1QjJGOVx1Qzc5MCA6XHVBRTQwXHVDNkE5XHVCOUNDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUM1RjBcdUI3N0RcdUNDOTggOjAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cbiAgICAgICAgICAgIFx1MjQ2MSBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUFFRDhcdUMxMUNcdUIyOTQgJmx0O0JPTFQtVVgmZ3Q7IFx1Qzc1OCBcdUMxMUNcdUJFNDRcdUMyQTQoXHVCNjEwXHVCMjk0IFx1QzBBQ1x1QzVDNSlcdUM3NDQgXHVDNzc0XHVDNkE5XHVENTU4XHVDMkRDXHVCQTc0XHVDMTFDIFx1QkMxQ1x1QzBERFx1RDU1QyBcdUJBQThcdUI0RTAgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOCBcdUFEMDBcdUI4MjggXHVCQjM4XHVDNzU4LFxuICAgICAgICAgICAgXHVCRDg4XHVCOUNDXHVDQzk4XHVCOUFDLCBcdUQ1M0NcdUQ1NzRcdUFENkNcdUM4MUMgXHVCNEYxXHVDNUQwIFx1QUQwMFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QkNGNFx1RDYzOFx1Q0M0NVx1Qzc4NFx1Qzc5MCBcdUJDMEYgXHVCMkY0XHVCMkY5XHVCRDgwXHVDMTFDXHVCODVDIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJFNCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LiAmbHQ7Qk9MVC1VWCZndDtcbiAgICAgICAgICAgIFx1Qzc0MChcdUIyOTQpIFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1Qzc1OCBcdUJCMzhcdUM3NThcdUM1RDAgXHVCMzAwXHVENTc0IFx1QzlDMFx1Q0NCNCBcdUM1QzZcdUM3NzQgXHVCMkY1XHVCQ0MwIFx1QkMwRiBcdUNDOThcdUI5QUNcdUQ1NzRcdUI0RENcdUI5QjQgXHVBQzgzXHVDNzg1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wIG1ndDMwJz5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFx1QzgxQzlcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1QzVGNFx1Qjc4Q1x1Q0NBRFx1QUQ2QylcbiAgICAgICAgICAgICAgPGJyIC8+IFx1QzgxNVx1QkNGNFx1QzhGQ1x1Q0NCNFx1QjI5NCBcdUZGNjJcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVCQ0Y0XHVENjM4XHVCQzk1XHVGRjYzIFx1QzgxQzM1XHVDODcwXHVDNUQwIFx1QjUzMFx1Qjk3OCBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDNUY0XHVCNzhDIFx1Q0NBRFx1QUQ2Q1x1Qjk3QyBcdUM1NDRcdUI3OThcdUM3NTggXHVCRDgwXHVDMTFDXHVDNUQwIFx1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJmx0OyBCTFQtVVgmZ3Q7XHVDNzQwKFx1QjI5NCkgXHVDODE1XHVCQ0Y0XHVDOEZDXHVDQ0I0XHVDNzU4IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNCBcdUM1RjRcdUI3OENcdUNDQURcdUFENkNcdUFDMDAgXHVDMkUwXHVDMThEXHVENTU4XHVBQzhDIFx1Q0M5OFx1QjlBQ1x1QjQxOFx1QjNDNFx1Qjg1RCBcdUIxNzhcdUI4MjVcdUQ1NThcdUFDQTBcdUMyQjVcdUIyQzhcdUIyRTQueycgJ31cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0X2luZGVudDIgbWd0MTAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndHQnPlx1MjVCNiBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDNUY0XHVCNzhDXHVDQ0FEXHVBRDZDIFx1QzgxMVx1QzIxOFx1MDBCN1x1Q0M5OFx1QjlBQyBcdUJEODBcdUMxMUMgPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUJEODBcdUMxMUNcdUJBODUgOiBcdUMxMUNcdUJFNDRcdUMyQTQgXHVBRDAwXHVCOUFDPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUIyRjRcdUIyRjlcdUM3OTAgOiBcdUFFNDBcdUM2QTlcdUI5Q0M8L2xpPlxuICAgICAgICAgICAgPGxpPlx1QzVGMFx1Qjc3RFx1Q0M5OCA6IDAxMC04MzAwLTgyMTAsIGRlZXJwYXJrODIxMEBnbWFpbC5jb20sIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xoNiBiczQnPlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgXHVDODFDMTBcdUM4NzAoXHVBRDhDXHVDNzc1XHVDRTY4XHVENTc0IFx1QUQ2Q1x1QzgxQ1x1QkMyOVx1QkM5NSk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBcdUM4MTVcdUJDRjRcdUM4RkNcdUNDQjRcdUIyOTQgXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDRTY4XHVENTc0XHVCODVDIFx1Qzc3OFx1RDU1QyBcdUFENkNcdUM4MUNcdUI5N0MgXHVCQzFCXHVBRTMwIFx1QzcwNFx1RDU1OFx1QzVFQyBcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUJEODRcdUM3QzFcdUM4NzBcdUM4MTVcdUM3MDRcdUM2RDBcdUQ2OEMsIFx1RDU1Q1x1QUQ2RFx1Qzc3OFx1RDEzMFx1QjEzN1x1QzlDNFx1RDc2NVx1QzZEMFxuICAgICAgICAgIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCBcdUI0RjFcdUM1RDAgXHVCRDg0XHVDN0MxXHVENTc0XHVBQ0IwXHVDNzc0XHVCMDk4IFx1QzBDMVx1QjJGNCBcdUI0RjFcdUM3NDQgXHVDMkUwXHVDQ0FEXHVENTYwIFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIFx1Qzc3NCBcdUJDMTZcdUM1RDAgXHVBRTMwXHVEMEMwIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1Qzc1OCBcdUMyRTBcdUFDRTAsIFx1QzBDMVx1QjJGNFx1QzVEMFxuICAgICAgICAgIFx1QjMwMFx1RDU1OFx1QzVFQ1x1QjI5NCBcdUM1NDRcdUI3OThcdUM3NTggXHVBRTMwXHVBRDAwXHVDNUQwIFx1QkIzOFx1Qzc1OFx1RDU1OFx1QzJEQ1x1QUUzMCBcdUJDMTRcdUI3OERcdUIyQzhcdUIyRTQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgMS4gXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVCRDg0XHVDN0MxXHVDODcwXHVDODE1XHVDNzA0XHVDNkQwXHVENjhDIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgzMy02OTcyICh3d3cua29waWNvLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDIuIFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0U2OFx1RDU3NFx1QzJFMFx1QUNFMFx1QzEzQ1x1RDEzMCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDExOCAocHJpdmFjeS5raXNhLm9yLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDMuIFx1QjMwMFx1QUM4MFx1Q0MzMFx1Q0NBRCA6IChcdUFENkRcdUJDODhcdUM1QzZcdUM3NzQpIDEzMDEgKHd3dy5zcG8uZ28ua3IpXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgNC4gXHVBQ0JEXHVDQzMwXHVDQ0FEIDogKFx1QUQ2RFx1QkM4OFx1QzVDNlx1Qzc3NCkgMTgyIChlY3JtLmN5YmVyLmdvLmtyKVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MzAwQ1x1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1QkNGNFx1RDYzOFx1QkM5NVx1MzAwRFx1QzgxQzM1XHVDODcwKFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Qzc1OCBcdUM1RjRcdUI3OEMpLCBcdUM4MUMzNlx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjRcdUM3NTggXHVDODE1XHVDODE1XHUwMEI3XHVDMEFEXHVDODFDKSwgXHVDODFDMzdcdUM4NzAoXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0XHVDNzU4IFx1Q0M5OFx1QjlBQ1x1QzgxNVx1QzlDMCBcdUI0RjEpXHVDNzU4XG4gICAgICAgICAgXHVBRERDXHVDODE1XHVDNUQwIFx1Qzc1OFx1RDU1QyBcdUM2OTRcdUFENkNcdUM1RDAgXHVCMzAwIFx1RDU1OFx1QzVFQyBcdUFDRjVcdUFDRjVcdUFFMzBcdUFEMDBcdUM3NTggXHVDN0E1XHVDNzc0IFx1RDU4OVx1RDU1QyBcdUNDOThcdUJEODQgXHVCNjEwXHVCMjk0IFx1QkQ4MFx1Qzc5MVx1QzcwNFx1Qjg1QyBcdUM3NzhcdUQ1NThcdUM1RUMgXHVBRDhDXHVCOUFDIFx1QjYxMFx1QjI5NCBcdUM3NzRcdUM3NzVcdUM3NTggXHVDRTY4XHVENTc0XHVCOTdDIFx1QkMxQlx1Qzc0MCBcdUM3OTBcdUIyOTRcbiAgICAgICAgICBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUJDOTVcdUM3NzQgXHVDODE1XHVENTU4XHVCMjk0IFx1QkMxNFx1QzVEMCBcdUI1MzBcdUI3N0MgXHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzQ0IFx1Q0NBRFx1QUQ2Q1x1RDU2MCBcdUMyMTggXHVDNzg4XHVDMkI1XHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFx1MjAzQiBcdUQ1ODlcdUM4MTVcdUMyRUNcdUQzMTBcdUM1RDAgXHVCMzAwXHVENTc0IFx1Qzc5MFx1QzEzOFx1RDU1QyBcdUMwQUNcdUQ1NkRcdUM3NDAgXHVDOTExXHVDNTU5XHVENTg5XHVDODE1XHVDMkVDXHVEMzEwXHVDNzA0XHVDNkQwXHVENjhDKHd3dy5zaW1wYW4uZ28ua3IpIFx1RDY0OFx1RDM5OFx1Qzc3NFx1QzlDMFx1Qjk3QyBcdUNDMzhcdUFDRTBcdUQ1NThcdUMyRENcdUFFMzAgXHVCQzE0XHVCNzhEXHVCMkM4XHVCMkU0LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGg2IGJzNCc+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBcdUM4MUMxMVx1Qzg3MChcdUFDMUNcdUM3NzhcdUM4MTVcdUJDRjQgXHVDQzk4XHVCOUFDXHVCQzI5XHVDRTY4IFx1QkNDMFx1QUNCRCk8ZW0gY2xhc3NOYW1lPSdlbXBoYXNpcyc+PC9lbT5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz5cdTI0NjAgXHVDNzc0IFx1QUMxQ1x1Qzc3OFx1QzgxNVx1QkNGNFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCAyMDIyXHVCMTQ0IDNcdUM2RDQgMTdcdUJEODBcdUQxMzAgXHVDODAxXHVDNkE5XHVCNDI5XHVCMkM4XHVCMkU0LjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJfcCc+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1MjQ2MSBcdUM3NzRcdUM4MDRcdUM3NTggXHVBQzFDXHVDNzc4XHVDODE1XHVCQ0Y0IFx1Q0M5OFx1QjlBQ1x1QkMyOVx1Q0U2OFx1Qzc0MCBcdUM1NDRcdUI3OThcdUM1RDBcdUMxMUMgXHVENjU1XHVDNzc4XHVENTU4XHVDMkU0IFx1QzIxOCBcdUM3ODhcdUMyQjVcdUIyQzhcdUIyRTQuIDwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nc3ViX3AnPlx1QzYwOFx1QzJEQyApIC0gMjBYWC4gMy4gMTcgfiAyMFhYLiBYLiBYIFx1QzgwMVx1QzZBOSAoXHVEMDc0XHVCOUFEKSA8L3A+ICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9J3N1Yl9wJz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc3ViX3AnPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgSW1hZ2UsIHVzZVF1ZXJ5U3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCB7IHByb21vdGlvbnMgYXMgcXVlcnkgfSBmcm9tICd+L3F1ZXJpZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuICByZXR1cm4gZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKHtcbiAgICByZXF1ZXN0LFxuICAgIHF1ZXJ5LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSA9IHVzZUxvYWRlckRhdGEoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHByb21vdGlvbnMgfSxcbiAgfSA9IHVzZVF1ZXJ5U3Vic2NyaXB0aW9uKGRhdG9RdWVyeVN1YnNjcmlwdGlvbilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtcGFnZSBtYXgtdy0xMTInPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2J4LXBhZ2Utcm93IGhpZGRlbiBtZDpmbGV4Jz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdieC1wcm9tb3Rpb25zJz5cbiAgICAgICAgICAgIHtwcm9tb3Rpb25zLm1hcCgocHJvbW90aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cHJvbW90aW9uLnRpdGxlfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1pdGVtJz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17cHJvbW90aW9uLnVybCB8fCAnLi8nfSBjbGFzc05hbWU9J2J4LXByb21vdGlvbi1saW5rJz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYngtcHJvbW90aW9uLWltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb21vdGlvbi5iYW5uZXIucmVzcG9uc2l2ZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLS10dy1zaGFkb3ctY29sb3InOiBgcmdiYSgke3Byb21vdGlvbi5jb2xvci5yZWR9LCAke3Byb21vdGlvbi5jb2xvci5ncmVlbn0sICR7cHJvbW90aW9uLmNvbG9yLmJsdWV9LCAuNSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdHctc2hhZG93JzogJ3ZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKScsXG4gICAgICAgICAgICAgICAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VRdWVyeVN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWRhdG9jbXMnXG5pbXBvcnQgeyBkYXRvUXVlcnlTdWJzY3JpcHRpb24gfSBmcm9tICd+L2xpYi9kYXRvY21zJ1xuaW1wb3J0IHsgdXNlTmF2LCB1c2VQcmV2Um91dGUsIFJvdXRlIH0gZnJvbSAnfi9saWIvY29uZmlnJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25JdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlY3Rpb24nXG5pbXBvcnQgeyBwbGFuIGFzIHF1ZXJ5IH0gZnJvbSAnfi9xdWVyaWVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIGRhdG9RdWVyeVN1YnNjcmlwdGlvbih7XG4gICAgcmVxdWVzdCxcbiAgICBxdWVyeSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbigpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyIH06IFJvdXRlID0gdXNlTmF2KHBhdGhuYW1lKVxuICBjb25zdCBwcmV2Um91dGUgPSB1c2VQcmV2Um91dGUocGF0aG5hbWUpXG4gIGNvbnN0IHsgZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBwaG90byB9LFxuICB9ID0gdXNlUXVlcnlTdWJzY3JpcHRpb24oZGF0b1F1ZXJ5U3Vic2NyaXB0aW9uKVxuXG4gIGNvbnN0IGxpc3Q6IFNlY3Rpb25JdGVtW10gPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUQ2NDhcdUQzOThcdUM3NzRcdUM5QzAgXHVDODFDXHVDNzkxJyxcbiAgICAgIGJhZGdlOiA8c3BhbiBjbGFzc05hbWU9J2J4LWJhZGdlJz5CQVNJQzwvc3Bhbj4sXG4gICAgICBsaW5rOiAnL3NlcnZpY2VzL2hvbWVwYWdlJyxcbiAgICAgIGxhYmVsOiAnXHVDNzkwXHVDMTM4XHVENzg4IFx1QkNGNFx1QUUzMCcsXG4gICAgICBwaG90b3M6IHBob3RvLmhvbWVwYWdlYmFzaWMsXG4gICAgICBtZXRhczogW1xuICAgICAgICB7IGxhYmVsOiAnXHVDNzkxXHVDNUM1XHVDNzdDJywgdmFsdWU6ICc3XHVDNzdDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDRDVDXHVCMzAwIFx1RDM5OFx1Qzc3NFx1QzlDMCcsIHZhbHVlOiAnNVx1QUMxQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzJBNFx1RDBDMFx1Qzc3QyBcdUFDMDBcdUM3NzRcdUI0REMnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0EvUycsIHZhbHVlOiAnMVx1QjE0NCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUM2RjknLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjJFNFx1RDA2QyBcdUJBQThcdUI0REMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUM4MFx1QzBDOVx1QzVENFx1QzlDNCBcdUNENUNcdUM4MDFcdUQ2NTQnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjNDNFx1QkE1NFx1Qzc3OCAoMVx1QjE0NCknLCB2YWx1ZTogJ1x1QkIzNFx1QjhDQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1RDYzOFx1QzJBNFx1RDMwNSAoMVx1QjE0NCknLCB2YWx1ZTogJ1x1QkIzNFx1QjhDQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUQ2Q1x1QUUwMCBcdUM2Q0NcdUQwNkNcdUMyQTRcdUQzOThcdUM3NzRcdUMyQTQnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QUQ2Q1x1QUUwMCBcdUM1NjBcdUIxMTBcdUI5QUNcdUQyRjFcdUMyQTQnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0U3NFx1Q0U3NFx1QzYyNFx1RDFBMSBcdUNDNDRcdUIxMTAnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Q0M0NFx1QjExMFx1RDFBMScsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBRDAwXHVCOUFDXHVDNzkwIFx1QjNDNFx1QUQ2QycsIHZhbHVlOiAnXHVCQkY4XHVDOUMwXHVDNkQwJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiA8c3Bhbj41MFx1QjlDQ1x1QzZEMDwvc3Bhbj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1QzJGMVx1QUUwMFx1RDM5OFx1Qzc3NFx1QzlDMCBcdUM4MUNcdUM3OTEnLFxuICAgICAgYmFkZ2U6IDxzcGFuIGNsYXNzTmFtZT0nYngtYmFkZ2UnPkJBU0lDPC9zcGFuPixcbiAgICAgIGxpbms6ICcvc2VydmljZXMvc2luZ2xlcGFnZScsXG4gICAgICBsYWJlbDogJ1x1Qzc5MFx1QzEzOFx1RDc4OCBcdUJDRjRcdUFFMzAnLFxuICAgICAgcGhvdG9zOiBwaG90by5zaW5nbGVwYWdlYmFzaWMsXG4gICAgICBtZXRhczogW1xuICAgICAgICB7IGxhYmVsOiAnXHVDNzkxXHVDNUM1XHVDNzdDJywgdmFsdWU6ICczXHVDNzdDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDRDVDXHVCMzAwIFx1RDM5OFx1Qzc3NFx1QzlDMCcsIHZhbHVlOiAnMVx1QUMxQycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QzJBNFx1RDBDMFx1Qzc3QyBcdUFDMDBcdUM3NzRcdUI0REMnLCB2YWx1ZTogJ1x1QkJGOFx1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0EvUycsIHZhbHVlOiAnMVx1QjE0NCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QkMxOFx1Qzc1MVx1RDYxNSBcdUM2RjknLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc3OFx1RDEzMFx1QjgwOVx1RDJGMFx1QkUwQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCMkU0XHVEMDZDIFx1QkFBOFx1QjREQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBQzgwXHVDMEM5XHVDNUQ0XHVDOUM0IFx1Q0Q1Q1x1QzgwMVx1RDY1NCcsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCM0M0XHVCQTU0XHVDNzc4ICgxXHVCMTQ0KScsIHZhbHVlOiAnXHVCQjM0XHVCOENDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVENjM4XHVDMkE0XHVEMzA1ICgxXHVCMTQ0KScsIHZhbHVlOiAnXHVCQjM0XHVCOENDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVBRDAwXHVCOUFDXHVDNzkwIFx1QjNDNFx1QUQ2QycsIHZhbHVlOiAnXHVCQkY4XHVDOUMwXHVDNkQwJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dHJhOiA8c3Bhbj4yMFx1QjlDQ1x1QzZEMDwvc3Bhbj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1x1RDM3Q1x1QkUxNFx1QjlBQ1x1QzJGMSBcdUFDMUNcdUJDMUMnLFxuICAgICAgYmFkZ2U6IDxzcGFuIGNsYXNzTmFtZT0nYngtYmFkZ2UnPkJBU0lDPC9zcGFuPixcbiAgICAgIGxpbms6ICcvc2VydmljZXMvcHVibGlzaGluZycsXG4gICAgICBsYWJlbDogJ1x1Qzc5MFx1QzEzOFx1RDc4OCBcdUJDRjRcdUFFMzAnLFxuICAgICAgcGhvdG9zOiBwaG90by5wdWJsaXNoaW5nYmFzaWMsXG4gICAgICBtZXRhczogW1xuICAgICAgICB7IGxhYmVsOiAnXHVDNzkxXHVDNUM1XHVDNzdDJywgdmFsdWU6ICcyXHVDNzdDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDRDVDXHVCMzAwIFx1RDM5OFx1Qzc3NFx1QzlDMCcsIHZhbHVlOiAnMTBcdUFDMUMnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUMyQTRcdUQwQzBcdUM3N0MgXHVBQzAwXHVDNzc0XHVCNERDJywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdBL1MnLCB2YWx1ZTogJzFcdUFDMUNcdUM2RDQnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUJDMThcdUM3NTFcdUQ2MTUgXHVDNkY5JywgdmFsdWU6ICdcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUIyRTRcdUQwNkMgXHVCQUE4XHVCNERDJywgdmFsdWU6ICdcdUJCRjhcdUQzRUNcdUQ1NjgnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxJywgdmFsdWU6ICdcdUM5QzBcdUM2RDAnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUM2RjkgXHVDODExXHVBREZDXHVDMTMxIFx1Qzc3OFx1Qzk5RCBcdUI5QzhcdUQwNkMnLCB2YWx1ZTogJ1x1QkJGOFx1QzlDMFx1QzZEMCcgfSxcbiAgICAgIF0sXG4gICAgICBleHRyYTogPHNwYW4+NTBcdUI5Q0NcdUM2RDA8L3NwYW4+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdcdUM1NzEgXHVCNTE0XHVDNzkwXHVDNzc4JyxcbiAgICAgIGJhZGdlOiA8c3BhbiBjbGFzc05hbWU9J2J4LWJhZGdlJz5CQVNJQzwvc3Bhbj4sXG4gICAgICBsaW5rOiAnL3NlcnZpY2VzL2FwcGRlc2lnbicsXG4gICAgICBsYWJlbDogJ1x1Qzc5MFx1QzEzOFx1RDc4OCBcdUJDRjRcdUFFMzAnLFxuICAgICAgcGhvdG9zOiBwaG90by5hcHBkZXNpZ25iYXNpYyxcbiAgICAgIG1ldGFzOiBbXG4gICAgICAgIHsgbGFiZWw6ICdcdUM3OTFcdUM1QzVcdUM3N0MnLCB2YWx1ZTogJzNcdUM3N0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUNENUNcdUIzMDAgXHVEMzk4XHVDNzc0XHVDOUMwJywgdmFsdWU6ICc1XHVBQzFDJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCNTE0XHVDNzkwXHVDNzc4IFx1QzJEQ1x1QzJBNFx1RDE1QycsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnQS9TJywgdmFsdWU6ICczXHVBQzFDXHVDNkQ0JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCMkU0XHVEMDZDIFx1QkFBOFx1QjREQycsIHZhbHVlOiAnXHVCQkY4XHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDNkY5IFx1QzgxMVx1QURGQ1x1QzEzMScsIHZhbHVlOiAnXHVDOUMwXHVDNkQwJyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVDNkY5IFx1QzgxMVx1QURGQ1x1QzEzMSBcdUM3NzhcdUM5OUQgXHVCOUM4XHVEMDZDJywgdmFsdWU6ICdcdUJCRjhcdUM5QzBcdUM2RDAnIH0sXG4gICAgICBdLFxuICAgICAgZXh0cmE6IDxzcGFuPjUwXHVCOUNDXHVDNkQwPC9zcGFuPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnXHVCRTBDXHVCNzlDXHVCNERDIFx1QUMwMFx1Qzc3NFx1QjREQycsXG4gICAgICBiYWRnZTogPHNwYW4gY2xhc3NOYW1lPSdieC1iYWRnZSc+QkFTSUM8L3NwYW4+LFxuICAgICAgbGluazogJy9zZXJ2aWNlcy9icmFuZGluZycsXG4gICAgICBsYWJlbDogJ1x1Qzc5MFx1QzEzOFx1RDc4OCBcdUJDRjRcdUFFMzAnLFxuICAgICAgcGhvdG9zOiBwaG90by5icmFuZGluZ2Jhc2ljLFxuICAgICAgbWV0YXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1x1Qzc5MVx1QzVDNVx1Qzc3QycsIHZhbHVlOiAnMTRcdUM3N0MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdcdUI4NUNcdUFDRTAnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QkE4NVx1RDU2OCcsIHZhbHVlOiAnXHVEM0VDXHVENTY4JyB9LFxuICAgICAgICB7IGxhYmVsOiAnXHVCQjM4XHVDMTFDL1x1Qzc3NFx1QkE1NFx1Qzc3QyBcdUQxNUNcdUQ1MENcdUI5QkYnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1x1QjUxNFx1Qzc5MFx1Qzc3OCBcdUMyRENcdUMyQTRcdUQxNUMnLCB2YWx1ZTogJ1x1RDNFQ1x1RDU2OCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0EvUycsIHZhbHVlOiAnMVx1QjE0NCcgfSxcbiAgICAgIF0sXG4gICAgICBleHRyYTogPHNwYW4+MTAwXHVCOUNDXHVDNkQwPC9zcGFuPixcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi57IHRpdGxlLCBJY29uLCBkZXNjLCBzaWRlYmFyLCBwcmV2Um91dGUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbnMnPlxuICAgICAgICB7bGlzdC5tYXAobGlzdEl0ZW0gPT4gKFxuICAgICAgICAgIDxTZWN0aW9uIGtleT17bGlzdEl0ZW0udGl0bGV9IGl0ZW09e2xpc3RJdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnfi9jb21wb25lbnRzL0ljb24nXG5cbmV4cG9ydCB0eXBlIFNlY3Rpb25JdGVtID0ge1xuICBpY29uPzogSlNYLkVsZW1lbnQsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGxpbms/OiBzdHJpbmcsXG4gIGxhYmVsPzogc3RyaW5nLFxuICBwaG90b3M6IGFueVtdLFxuICB0YWdzPzogc3RyaW5nW10sXG4gIG1ldGFzPzoge1xuICAgIGxhYmVsOiBzdHJpbmcgfCBKU1guRWxlbWVudCxcbiAgICB2YWx1ZTogc3RyaW5nIHwgSlNYLkVsZW1lbnQsXG4gIH1bXSxcbiAgZXh0cmE/OiBKU1guRWxlbWVudCxcbiAgYmFkZ2U/OiBKU1guRWxlbWVudCxcbn1cblxudHlwZSBTZWN0aW9uUHJvcHMgPSB7XG4gIGl0ZW06IFNlY3Rpb25JdGVtLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VjdGlvbih7IGl0ZW0gfTogU2VjdGlvblByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGljb24sIHBob3RvcywgLyogdGFncywgKi8gbWV0YXMsIGV4dHJhLCBiYWRnZSwgbGluaywgbGFiZWwgfSA9IGl0ZW1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi10aXRsZSc+XG4gICAgICAgICAge2ljb24gPyBpY29uIDogPEljb24uQnVsbGV0U29saWQgLz59XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICB7YmFkZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtc2VjdGlvbi1leHRyYSc+e2V4dHJhfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYngtY2Fyb3VzZWwnPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Bob3RvcyAmJlxuICAgICAgICAgICAgISFwaG90b3MubGVuZ3RoICYmXG4gICAgICAgICAgICBwaG90b3MubWFwKCh7IHJlc3BvbnNpdmVJbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3BvbnNpdmVJbWFnZS50aXRsZX0gY2xhc3NOYW1lPSdieC1jYXJkLXNxYXVyZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNhcmQtdGh1bWInPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYngtdGh1bWJuYWlsJyBkYXRhPXtyZXNwb25zaXZlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LWNhcmQtc3FhdXJlLWluZm8nPntyZXNwb25zaXZlSW1hZ2UudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAge21ldGFzICYmICEhbWV0YXMubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J4LW1ldGEtbGlzdCc+XG4gICAgICAgICAge21ldGFzLm1hcCgobWV0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9J2J4LW1ldGEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J4LW1ldGEtaWNvbicgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdieC1tZXRhLWluZm8nPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbWV0YS1sYWJlbCc+e21ldGEubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYngtbWV0YS12YWx1ZSc+e21ldGEudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctYXV0byBtZDp3LTYwIHB4LTUgbWQ6c2VsZi1lbmQgcHQtMi41IG1kOnB4LTgnPlxuICAgICAgICAgIDxCdXR0b24gYmxvY2sgc2l6ZT0nbGFyZ2UnIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidkODQ3MzJkZCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTTdLTzRLRkcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1LSE43WTZTLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1FUkNNMlROSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVFRSEU3NEMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ENU5aWkZZTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ1N1RQQ1NWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29udGFjdCc6eydpZCc6J3JvdXRlcy9jb250YWN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbnRhY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29udGFjdC1YSVEyWE9ETy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTJTWVA1QVhHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9uZXdzLyRzbHVnJzp7J2lkJzoncm91dGVzL25ld3MvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbmV3cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzLyRzbHVnLVJMU0hSRExDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BWVdYR1VXSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25ld3MvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbmV3cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOiduZXdzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9uZXdzL2luZGV4LVFISDJYSEhOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BWVdYR1VXSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGljZXMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvbm90aWNlcy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RpY2VzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZXMvJHNsdWctTjZMMzRTM04uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFZV1hHVVdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbm90aWNlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9ub3RpY2VzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J25vdGljZXMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL25vdGljZXMvaW5kZXgtWVRRS0VPWjMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFZV1hHVVdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGxhbic6eydpZCc6J3JvdXRlcy9wbGFuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGxhbi1PQ0pBS0pMTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy8kc2x1Zy1DV0dFN1pUQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQVlXWEdVV0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb3N0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvaW5kZXgtSUVBSzNSUEYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFZV1hHVVdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1JBU1Y0MzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydCc6eydpZCc6J3JvdXRlcy9wb3N0cy9wcmV2aWV3L3N0YXJ0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzL3ByZXZpZXcvc3RhcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdGFydC00QUk2NUZISy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM09PVjQ0Q1UuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wJzp7J2lkJzoncm91dGVzL3Bvc3RzL3ByZXZpZXcvc3RvcCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy9wcmV2aWV3L3N0b3AnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvcHJldmlldy9zdG9wLVU3TVo3VjNHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zT09WNDRDVS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcmV2aWV3L3N0YXJ0Jzp7J2lkJzoncm91dGVzL3ByZXZpZXcvc3RhcnQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJldmlldy9zdGFydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcmV2aWV3L3N0YXJ0LU1TRlRLSjdSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zT09WNDRDVS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcmV2aWV3L3N0b3AnOnsnaWQnOidyb3V0ZXMvcHJldmlldy9zdG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ByZXZpZXcvc3RvcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcmV2aWV3L3N0b3AtWkI1TlhFTEkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNPT1Y0NENVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ByaXZhY3knOnsnaWQnOidyb3V0ZXMvcHJpdmFjeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcml2YWN5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ByaXZhY3ktVlBWVU5OUlouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24nOnsnaWQnOidyb3V0ZXMvc2VydmljZXMuYXBwZGVzaWduJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL2FwcGRlc2lnbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5hcHBkZXNpZ24tS0FOV0paQkUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFUWDM2VFNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZyc6eydpZCc6J3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXJ2aWNlcy9icmFuZGluZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5icmFuZGluZy0yVlJPUlFETS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVRYMzZUU1AuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SRVhMMloyTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdSQVNWNDM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlcnZpY2VzL2hvbWVwYWdlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlcnZpY2VzLmhvbWVwYWdlLUU0WURGRzVVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QMk5EWVhOUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFUWDM2VFNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLnB1Ymxpc2hpbmcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvcHVibGlzaGluZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5wdWJsaXNoaW5nLTNYU0QzU0VSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QMk5EWVhOUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFUWDM2VFNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlJzp7J2lkJzoncm91dGVzL3NlcnZpY2VzLnNpbmdsZXBhZ2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VydmljZXMvc2luZ2xlcGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXJ2aWNlcy5zaW5nbGVwYWdlLVNJRldPUktJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QMk5EWVhOUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFUWDM2VFNQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUkVYTDJaMk8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XUkFTVjQzNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXR0aW5ncyc6eydpZCc6J3JvdXRlcy9zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXR0aW5ncycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXR0aW5ncy02UEVBR05NUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1EODQ3MzJERC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0ExQjtBQUFPLElBQU0sYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0ExQjtBQUFPLElBQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0F6QjtBQUFPLElBQU0sV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0F4QjtBQUFPLElBQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQXBCOzs7QUNBQTtBQUlPLHFCQUFxQixFQUFFLGFBQStCO0FBQzNELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUs7QUFBQSxJQUFzQixPQUFNO0FBQUEsSUFBNkIsU0FBUTtBQUFBLEtBQ3BFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBOzs7QUNQZDtBQUFPLHlCQUF5QjtBQUM5QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUE2QixTQUFRO0FBQUEsS0FD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QVM7QUFBQSxRQUNULElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFNBQVM7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
