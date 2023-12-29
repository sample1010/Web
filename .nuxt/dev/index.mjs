globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/helen/Desktop/test/Web/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, getHeaders, readBody, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, createError, callNodeListener, getRouterParams, sendStream, getQuery as getQuery$1, getResponseStatusText } from 'file:///Users/helen/Desktop/test/Web/node_modules/h3/dist/index.mjs';
import FormData from 'file:///Users/helen/Desktop/test/Web/node_modules/form-data/lib/form_data.js';
import multer from 'file:///Users/helen/Desktop/test/Web/node_modules/multer/index.js';
import fs from 'fs';
import sharp from 'file:///Users/helen/Desktop/test/Web/node_modules/sharp/lib/index.js';
import axios from 'file:///Users/helen/Desktop/test/Web/node_modules/axios/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/helen/Desktop/test/Web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/helen/Desktop/test/Web/node_modules/devalue/index.js';
import { renderToString } from 'file:///Users/helen/Desktop/test/Web/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file:///Users/helen/Desktop/test/Web/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/helen/Desktop/test/Web/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/helen/Desktop/test/Web/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/helen/Desktop/test/Web/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/helen/Desktop/test/Web/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/helen/Desktop/test/Web/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/helen/Desktop/test/Web/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/helen/Desktop/test/Web/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/helen/Desktop/test/Web/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file:///Users/helen/Desktop/test/Web/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/helen/Desktop/test/Web/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/helen/Desktop/test/Web/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/helen/Desktop/test/Web/node_modules/radix3/dist/index.mjs';
import { version, unref } from 'file:///Users/helen/Desktop/test/Web/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///Users/helen/Desktop/test/Web/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/helen/Desktop/test/Web/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),t=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return t()[o]??r[o]},has(e,o){const i=t();return o in i||o in r},set(e,o,i){const p=t(!0);return p[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=t(!0);return delete i[o],!0},ownKeys(){const e=t(!0);return Object.keys(e)}}),E=typeof process<"u"&&process.env&&"development"||"",d=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"]];function B(){if(globalThis.process?.env)for(const e of d){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),P=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=E==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||C&&s.TERM!=="dumb"||a&&s.TERM&&s.TERM==="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const w=globalThis.process||Object.create(null),_={versions:{}};new Proxy(w,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in _)return _[o]}});const L=!!globalThis.Netlify,A=!!globalThis.EdgeRuntime,O=globalThis.navigator?.userAgent==="Cloudflare-Workers",D=!!globalThis.Deno,u=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",S=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,G=[[L,"netlify"],[A,"edge-light"],[O,"workerd"],[D,"deno"],[u,"lagon"],[N,"node"],[S,"bun"],[b,"fastly"]];function K(){const e=G.find(o=>o[0]);if(e)return {name:e[1]}}const g=K();g?.name||"";

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  name: "BondingTechs",
  link: "/"
});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "test"
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "http://127.0.0.1:8001/app",
    "apiUpload": "http://127.0.0.1:8001/",
    "naiveUI": {
      "themeOverrides": ""
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/helen/Desktop/test/Web/src/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/helen/Desktop/test/Web","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/helen/Desktop/test/Web/src/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/helen/Desktop/test/Web/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/helen/Desktop/test/Web/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/helen/Desktop/test/Web/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(headers.Etag || headers.etag) || `W/"${hash(body)}"`;
      headers["last-modified"] = String(headers["Last-Modified"] || headers["last-modified"]) || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config$2 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$2.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _VoWx327t1w = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _VoWx327t1w
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const config$1 = useRuntimeConfig();
const request$1 = axios.create({
  baseURL: config$1.public.apiBase,
  timeout: 5e3
});
request$1.interceptors.request.use(
  (req) => {
    return req;
  }
);
request$1.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (error) => {
    var _a, _b;
    return Promise.reject((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) != null ? _b : error);
  }
);
const request$2 = request$1;

const _fyfWNQ = defineEventHandler(async (event) => {
  var _a, _b;
  const headers = getHeaders(event);
  const { authorization } = headers;
  const method = event.req.method;
  const isMultipart = ((_a = headers["content-type"]) == null ? void 0 : _a.split("/").shift()) === "multipart";
  if (method === "POST" && !isMultipart) {
    const body = await readBody(event);
    if (body == null ? void 0 : body.server)
      request$2.server = true;
    else
      (_b = request$2) == null ? true : delete _b.server;
  }
  if (authorization)
    request$2.defaults.headers.Authorization = authorization;
  else
    request$2.defaults.headers.Authorization = "";
});

const _lazy_iQADBC = () => Promise.resolve().then(function () { return _type_Captcha_post$1; });
const _lazy_ChJEbo = () => Promise.resolve().then(function () { return forgot_post$1; });
const _lazy_Y61FY5 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_JvjfIN = () => Promise.resolve().then(function () { return refresh_post$1; });
const _lazy_JjZX8K = () => Promise.resolve().then(function () { return register_post$1; });
const _lazy_VtGnGi = () => Promise.resolve().then(function () { return info_post$5; });
const _lazy_cBdIFj = () => Promise.resolve().then(function () { return upload_post$1; });
const _lazy_YxtbRo = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_6MsA5d = () => Promise.resolve().then(function () { return like_post$3; });
const _lazy_0JgJMZ = () => Promise.resolve().then(function () { return page_post$3; });
const _lazy_iEuWAm = () => Promise.resolve().then(function () { return data_post$1; });
const _lazy_8gSIvJ = () => Promise.resolve().then(function () { return click_post$1; });
const _lazy_Hdt6yx = () => Promise.resolve().then(function () { return agent_post$1; });
const _lazy_yGQZbS = () => Promise.resolve().then(function () { return history_post$3; });
const _lazy_2DBB9y = () => Promise.resolve().then(function () { return info_post$3; });
const _lazy_UgeurT = () => Promise.resolve().then(function () { return collections_post$1; });
const _lazy_Y2z6WT = () => Promise.resolve().then(function () { return history_post$1; });
const _lazy_yibzo4 = () => Promise.resolve().then(function () { return tips_post$1; });
const _lazy_fFq8YP = () => Promise.resolve().then(function () { return article_post$1; });
const _lazy_txpgdV = () => Promise.resolve().then(function () { return categories_post$1; });
const _lazy_PuNApL = () => Promise.resolve().then(function () { return collection_post$3; });
const _lazy_5XHMtC = () => Promise.resolve().then(function () { return like_post$1; });
const _lazy_5uQcJc = () => Promise.resolve().then(function () { return list_post$1; });
const _lazy_aqxCrX = () => Promise.resolve().then(function () { return page_post$1; });
const _lazy_NcmJZF = () => Promise.resolve().then(function () { return collection_post$1; });
const _lazy_10Ln3Q = () => Promise.resolve().then(function () { return info_post$1; });
const _lazy_RWAEek = () => Promise.resolve().then(function () { return today_post$1; });
const _lazy_xnS0qu = () => Promise.resolve().then(function () { return changePhone_post$1; });
const _lazy_0dIig0 = () => Promise.resolve().then(function () { return emailBinding_post$1; });
const _lazy_rFmFXW = () => Promise.resolve().then(function () { return emailVerify_post$1; });
const _lazy_bpqBWC = () => Promise.resolve().then(function () { return identityVerify_post$1; });
const _lazy_ADHaQN = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_QKTkNS = () => Promise.resolve().then(function () { return person_post$1; });
const _lazy_uLEgKP = () => Promise.resolve().then(function () { return resetPassword_post$1; });
const _lazy_t5FcDE = () => Promise.resolve().then(function () { return update_post$1; });
const _lazy_8YCUu9 = () => Promise.resolve().then(function () { return _file_$1; });
const _lazy_t519cO = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _fyfWNQ, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/:type-captcha', handler: _lazy_iQADBC, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/forgot', handler: _lazy_ChJEbo, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/login', handler: _lazy_Y61FY5, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/refresh', handler: _lazy_JvjfIN, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/register', handler: _lazy_JjZX8K, lazy: true, middleware: false, method: "post" },
  { route: '/api/category/info', handler: _lazy_VtGnGi, lazy: true, middleware: false, method: "post" },
  { route: '/api/comm/upload', handler: _lazy_cBdIFj, lazy: true, middleware: false, method: "post" },
  { route: '/api/comment/create', handler: _lazy_YxtbRo, lazy: true, middleware: false, method: "post" },
  { route: '/api/comment/like', handler: _lazy_6MsA5d, lazy: true, middleware: false, method: "post" },
  { route: '/api/comment/page', handler: _lazy_0JgJMZ, lazy: true, middleware: false, method: "post" },
  { route: '/api/dict/data', handler: _lazy_iEuWAm, lazy: true, middleware: false, method: "post" },
  { route: '/api/external-link/click', handler: _lazy_8gSIvJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/ip/agent', handler: _lazy_Hdt6yx, lazy: true, middleware: false, method: "post" },
  { route: '/api/ip/history', handler: _lazy_yGQZbS, lazy: true, middleware: false, method: "post" },
  { route: '/api/ip/info', handler: _lazy_2DBB9y, lazy: true, middleware: false, method: "post" },
  { route: '/api/my/collections', handler: _lazy_UgeurT, lazy: true, middleware: false, method: "post" },
  { route: '/api/my/history', handler: _lazy_Y2z6WT, lazy: true, middleware: false, method: "post" },
  { route: '/api/my/tips', handler: _lazy_yibzo4, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/article', handler: _lazy_fFq8YP, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/categories', handler: _lazy_txpgdV, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/collection', handler: _lazy_PuNApL, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/like', handler: _lazy_5XHMtC, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/list', handler: _lazy_5uQcJc, lazy: true, middleware: false, method: "post" },
  { route: '/api/news/page', handler: _lazy_aqxCrX, lazy: true, middleware: false, method: "post" },
  { route: '/api/tip/collection', handler: _lazy_NcmJZF, lazy: true, middleware: false, method: "post" },
  { route: '/api/tip/info', handler: _lazy_10Ln3Q, lazy: true, middleware: false, method: "post" },
  { route: '/api/tip/today', handler: _lazy_RWAEek, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/change-phone', handler: _lazy_xnS0qu, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/email-binding', handler: _lazy_0dIig0, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/email-verify', handler: _lazy_rFmFXW, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/identity-verify', handler: _lazy_bpqBWC, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/logout', handler: _lazy_ADHaQN, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/person', handler: _lazy_QKTkNS, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/reset-password', handler: _lazy_uLEgKP, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/update', handler: _lazy_t5FcDE, lazy: true, middleware: false, method: "post" },
  { route: '/public/uploads/:date/:file', handler: _lazy_8YCUu9, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_t519cO, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_t519cO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (P === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const _type_Captcha_post = defineEventHandler(async (event) => {
  var _a, _b;
  try {
    const type = (_b = (_a = event.context) == null ? void 0 : _a.params) == null ? void 0 : _b["type-captcha"].replace("-captcha", "");
    const body = await readBody(event);
    const { phone, area } = body;
    const rules = [
      {
        key: "area",
        message: "\u8ACB\u9078\u64C7\u5730\u5340"
      },
      {
        key: "phone",
        message: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC"
        // regex: phoneRegex,
      }
    ];
    const validateRule = (rule) => {
      const value = body[rule.key] || "";
      if (value)
        return;
      throw createError({
        message: rule.message
      });
    };
    await Promise.all(rules.map(async (rule) => await validateRule(rule)));
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/auth/captcha", { area, phone, type });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const _type_Captcha_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _type_Captcha_post
});

const forgot_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { area, phone, password, passwordConfirm, verifyCode } = body;
    const rules = [
      {
        key: "area",
        message: "\u8ACB\u9078\u64C7\u5730\u5340"
      },
      {
        key: "phone",
        message: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC"
        // regex: phoneRegex,
      },
      {
        key: "password",
        label: "\u5BC6\u78BC",
        message: "\u5BC6\u78BC\u683C\u5F0F\u932F\u8AA4"
      },
      {
        key: "passwordConfirm",
        message: "\u5169\u6B21\u5BC6\u78BC\u4E0D\u4E00\u81F4"
      },
      {
        key: "verifyCode",
        message: "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC"
      }
    ];
    const validateRule = (rule) => {
      const value = body[rule.key] || "";
      if (!value) {
        throw createError({
          message: rule.message
        });
      }
      if (rule.regex && !rule.regex.test(value)) {
        throw createError({
          message: rule.message
        });
      }
    };
    await Promise.all(rules.map(async (rule) => await validateRule(rule)));
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/auth/forgot", {
      area,
      phone,
      password,
      passwordConfirm,
      verifyCode
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const forgot_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: forgot_post
});

const login_post = defineEventHandler(async (event) => {
  try {
    const { area, phone, password } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/auth/login", { area, phone, password });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const refresh_post = defineEventHandler(async (event) => {
  try {
    const { refreshToken } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/auth/refreshToken", { refreshToken });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const refresh_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: refresh_post
});

const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      firstName,
      lastName,
      birthday,
      area,
      phone,
      password,
      passwordConfirm,
      gender,
      verifyCode
    } = body;
    const rules = [
      {
        key: "firstName",
        message: "\u8ACB\u8F38\u5165\u59D3\u6C0F"
      },
      {
        key: "lastName",
        message: "\u8ACB\u8F38\u5165\u540D\u5B57"
      },
      {
        key: "birthday",
        message: "\u8ACB\u8F38\u5165\u751F\u65E5"
      },
      {
        key: "area",
        message: "\u8ACB\u9078\u64C7\u5730\u5340"
      },
      {
        key: "phone",
        message: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC"
      },
      {
        key: "password",
        message: "\u5BC6\u78BC\u683C\u5F0F\u932F\u8AA4"
      },
      {
        key: "passwordConfirm",
        message: "\u5169\u6B21\u5BC6\u78BC\u4E0D\u4E00\u81F4"
      },
      {
        key: "gender",
        message: "\u8ACB\u8F38\u5165\u6027\u5225"
      },
      {
        key: "verifyCode",
        message: "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC"
      }
    ];
    const validateRule = (rule) => {
      const value = body[rule.key] || "";
      if (!value) {
        throw createError({
          message: rule.message
        });
      }
      if (rule.regex && !rule.regex.test(value)) {
        throw createError({
          message: rule.message
        });
      }
    };
    await Promise.all(rules.map(async (rule) => await validateRule(rule)));
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/auth/register", {
      firstName,
      lastName,
      birthday,
      area,
      phone,
      password,
      passwordConfirm,
      gender,
      verifyCode
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const register_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: register_post
});

const info_post$4 = defineEventHandler(async (event) => {
  try {
    const { slug } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/industry/category/info", { slug });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const info_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: info_post$4
});

function uuid() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++)
    s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
  s[14] = "4";
  s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  return s.join("");
}

const uploadService = () => {
  const folderPath = "./" ;
  const { limits: templateLimits } = {
    limits: {
      files: 1,
      fieldNameSize: 400,
      fileSize: 80 * 1024 * 1024
    }
  };
  const { filename } = {
    filename: (_req, file, cb) => {
      const name = `${uuid()}.${file.mimetype.split("/").pop()}`;
      cb(null, name);
    }
  };
  const destination = () => {
    const { destination: destination2 } = {
      destination: (_req, _file, cb) => {
        cb(null, folderPath);
      }
    };
    return destination2;
  };
  const generateHandler = (itemType, fileType) => {
    if (!fileType || fileType !== "document" && fileType !== "icon" && fileType !== "image")
      throw new Error("File type error.");
    if (!itemType || itemType !== "assortment" && itemType !== "carousel" && itemType !== "catalog")
      throw new Error("Item type error.");
    const options = {
      limits: {
        ...templateLimits
      },
      storage: multer.diskStorage({
        filename,
        destination: destination()
      })
    };
    return multer(options).single("file");
  };
  return { generateHandler };
};

const upload_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  try {
    const handler = uploadService().generateHandler("carousel", "image");
    await callNodeListener(handler, event.req, event.res);
    const formData = new FormData();
    const fileName = uuid();
    const fileType = (_a = event == null ? void 0 : event.req) == null ? void 0 : _a.file.originalname.split(".").pop();
    const minifyPath = await minify((_b = event == null ? void 0 : event.req) == null ? void 0 : _b.file.filename);
    formData.append("file", fs.createReadStream(minifyPath));
    formData.append("key", `${fileName}.${fileType}`);
    const data = await request$2.post("/comm/upload", formData, {
      headers: formData.getHeaders()
    });
    fs.unlink((_c = event == null ? void 0 : event.req) == null ? void 0 : _c.file.path, () => {
    });
    fs.unlink(minifyPath, () => {
    });
    return { error: false, code: 1e3, message: "\u4E0A\u50B3\u6210\u529F", data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});
async function minify(inputImagePath) {
  const outputFilePath = `minify_${inputImagePath}`;
  const targetWidth = 1024;
  const targetHeight = 1024;
  try {
    await sharp(inputImagePath).resize(targetWidth, targetHeight).toFile(outputFilePath);
    console.log("\u58D3\u7E2E\u5F8C\u7684\u5716\u7247\u5DF2\u4FDD\u5B58\u5230:", outputFilePath);
    return outputFilePath;
  } catch (error) {
    console.error("\u5716\u7247\u58D3\u7E2E\u5931\u6557:", error);
    return "";
  }
}

const upload_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: upload_post
});

const create_post = defineEventHandler(async (event) => {
  try {
    const { articleId, content, parentId } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/comment/create", {
      articleId,
      content,
      parentId
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const create_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post
});

const like_post$2 = defineEventHandler(async (event) => {
  try {
    const { commentId, articleId } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/comment/like", { commentId, articleId });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const like_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: like_post$2
});

const page_post$2 = defineEventHandler(async (event) => {
  try {
    const { articleId, parentId, page = 1, size = 10 } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/comment/page", {
      articleId,
      parentId,
      page,
      size
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const page_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: page_post$2
});

const data_post = defineEventHandler(async () => {
  try {
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/dict/info/data");
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const data_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: data_post
});

const click_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      code,
      message = "",
      data
    } = await request$2.post("/external-link/add", body);
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const click_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: click_post
});

const agent_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      code,
      message = "",
      data
    } = await request$2.post("/location/agent/add", body);
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const agent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: agent_post
});

const history_post$2 = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      code,
      message = "",
      data
    } = await request$2.post("/location/history/add", body);
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const history_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: history_post$2
});

const info_post$2 = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      code,
      message = "",
      data
    } = await request$2.post("/location/info/add", body);
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const info_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: info_post$2
});

const collections_post = defineEventHandler(async (event) => {
  try {
    const {
      keyWord,
      size,
      page,
      order,
      sort,
      category,
      type = "article"
    } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/my/collections", {
      keyWord,
      size,
      page,
      order,
      sort,
      category,
      type
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const collections_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: collections_post
});

const history_post = defineEventHandler(async (event) => {
  try {
    const {
      keyWord,
      size,
      page,
      order,
      sort,
      category,
      type = "article"
    } = await readBody(event);
    const {
      code,
      message = "",
      data
    } = await request$2.post("/my/history", {
      keyWord,
      size,
      page,
      order,
      sort,
      category,
      type
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const history_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: history_post
});

const tips_post = defineEventHandler(async (event) => {
  try {
    const { keyWord, size, page, order, sort, category } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/my/tips", {
      keyWord,
      size,
      page,
      order,
      sort,
      category
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const tips_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: tips_post
});

const article_post = defineEventHandler(async (event) => {
  var _a;
  try {
    const { slug } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/info", {
      slug,
      client: !((_a = request$2) == null ? void 0 : _a.server)
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const article_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: article_post
});

const categories_post = defineEventHandler(async () => {
  try {
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/industry/category/list");
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const categories_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categories_post
});

const collection_post$2 = defineEventHandler(async (event) => {
  try {
    const { id } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/collection", { id });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const collection_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: collection_post$2
});

const like_post = defineEventHandler(async (event) => {
  try {
    const { id } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/like", { id });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const like_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: like_post
});

const list_post = eventHandler(async (event) => {
  try {
    const { isTop, isHot, size, sort, type, category, articleId } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/list", {
      isTop,
      isHot,
      size,
      sort,
      type,
      category,
      articleId
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const list_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: list_post
});

const page_post = eventHandler(async (event) => {
  try {
    const { isTop, isHot, page, size, sort, type, category, articleId } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/news/article/page", {
      isTop,
      isHot,
      page,
      size,
      sort,
      type,
      category,
      articleId
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const page_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: page_post
});

const collection_post = eventHandler(async (event) => {
  try {
    const { id } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/tip/collection", { id });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const collection_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: collection_post
});

const info_post = eventHandler(async (event) => {
  try {
    const { id } = await readBody(event);
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/tip/getInfo", { id });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const info_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: info_post
});

const today_post = eventHandler(async () => {
  var _a;
  try {
    const {
      code,
      message = "",
      data = null
    } = await request$2.post("/tip/today", { client: !((_a = request$2) == null ? void 0 : _a.server) });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const today_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: today_post
});

const changePhone_post = defineEventHandler(async (event) => {
  try {
    const { phone, verifyCode } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/change-phone", { phone, verifyCode });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const changePhone_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: changePhone_post
});

const emailBinding_post = defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/email-binding", { email });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const emailBinding_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: emailBinding_post
});

const emailVerify_post = defineEventHandler(async (event) => {
  try {
    const { token } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/auth/email-verify", { token });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const emailVerify_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: emailVerify_post
});

const identityVerify_post = defineEventHandler(async (event) => {
  try {
    const { idCard, positive, negative } = await readBody(event);
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/identity-verify", {
      idCard,
      positiveId: positive,
      negativeId: negative
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const identityVerify_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: identityVerify_post
});

const logout_post = defineEventHandler(async () => {
  try {
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/logout");
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const logout_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout_post
});

const person_post = defineEventHandler(async () => {
  try {
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/person");
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const person_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: person_post
});

const resetPassword_post = defineEventHandler(async (event) => {
  try {
    const { oldPassword, newPassword, newPasswordConfirm } = await readBody(
      event
    );
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/reset-password", {
      oldPassword,
      newPassword,
      newPasswordConfirm
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const resetPassword_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: resetPassword_post
});

const update_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { firstName, lastName, intro, birthday, gender } = body;
    const rules = [
      {
        key: "firstName",
        message: "\u8ACB\u8F38\u5165\u59D3\u6C0F"
      },
      {
        key: "lastName",
        message: "\u8ACB\u8F38\u5165\u540D\u5B57"
      },
      {
        key: "birthday",
        message: "\u8ACB\u8F38\u5165\u751F\u65E5"
      },
      {
        key: "gender",
        message: "\u8ACB\u8F38\u5165\u6027\u5225"
      }
    ];
    const validateRule = (rule) => {
      const value = body[rule.key] || "";
      if (!value) {
        throw createError({
          message: rule.message
        });
      }
      if (rule.regex && !rule.regex.test(value)) {
        throw createError({
          message: rule.message
        });
      }
    };
    await Promise.all(rules.map(async (rule) => await validateRule(rule)));
    const {
      code,
      message = "",
      data = {}
    } = await request$2.post("/user/personUpdate", {
      firstName,
      lastName,
      intro,
      birthday,
      gender
    });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const update_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: update_post
});

const config = useRuntimeConfig();
const request = axios.create({
  baseURL: config.public.apiUpload,
  timeout: 5e3
});
const _file_ = defineEventHandler(async (event) => {
  try {
    event.node.res.setHeader("content-type", "image/png");
    const { date, file } = await getRouterParams(event);
    const path = `/public/uploads/${date}/${file}`;
    const { data } = await request.get(path, {
      responseType: "stream"
    });
    return sendStream(event, data);
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

const _file_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _file_
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/helen/Desktop/test/Web/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/helen/Desktop/test/Web/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !islandContext || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    )
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
