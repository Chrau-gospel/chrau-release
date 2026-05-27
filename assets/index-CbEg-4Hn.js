import { i as _, __tla as __tla_0 } from "./index-DaIdkIrC.js";
let I, o, N, e, a, u, t, r, i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  o = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.eol;
  };
  t = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.platform;
  };
  i = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.version;
  };
  e = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.family;
  };
  r = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.os_type;
  };
  I = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.arch;
  };
  N = function() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.exe_extension;
  };
  u = async function() {
    return await _("plugin:os|locale");
  };
  a = async function() {
    return await _("plugin:os|hostname");
  };
});
export {
  __tla,
  I as arch,
  o as eol,
  N as exeExtension,
  e as family,
  a as hostname,
  u as locale,
  t as platform,
  r as type,
  i as version
};
