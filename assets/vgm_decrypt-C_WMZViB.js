let B;
let __tla = (async () => {
  const g = "/assets/vgm_decrypt_bg-BjNUMhxt.wasm", v = async (e = {}, n) => {
    let r;
    if (n.startsWith("data:")) {
      const o = n.replace(/^data:.*?base64,/, "");
      let a;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") a = Buffer.from(o, "base64");
      else if (typeof atob == "function") {
        const i = atob(o);
        a = new Uint8Array(i.length);
        for (let t = 0; t < i.length; t++) a[t] = i.charCodeAt(t);
      } else throw new Error("Cannot decode base64-encoded data URL");
      r = await WebAssembly.instantiate(a, e);
    } else {
      const o = await fetch(n), a = o.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && a.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(o, e);
      else {
        const i = await o.arrayBuffer();
        r = await WebAssembly.instantiate(i, e);
      }
    }
    return r.instance.exports;
  };
  URL = globalThis.URL;
  const A = await v({}, g), { memory: y, decrypt: T, __wbindgen_add_to_stack_pointer: m, __wbindgen_malloc: h, __wbindgen_realloc: W, __wbindgen_free: U } = A;
  let u = null;
  function f() {
    return (u === null || u.buffer !== y.buffer) && (u = new Uint8Array(y.buffer)), u;
  }
  let l = 0;
  function x(e, n) {
    const r = n(e.length * 1);
    return f().set(e, r / 1), l = e.length, r;
  }
  const E = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let b = new E("utf-8");
  const M = typeof b.encodeInto == "function" ? function(e, n) {
    return b.encodeInto(e, n);
  } : function(e, n) {
    const r = b.encode(e);
    return n.set(r), {
      read: e.length,
      written: r.length
    };
  };
  function C(e, n, r) {
    if (r === void 0) {
      const s = b.encode(e), c = n(s.length);
      return f().subarray(c, c + s.length).set(s), l = s.length, c;
    }
    let o = e.length, a = n(o);
    const i = f();
    let t = 0;
    for (; t < o; t++) {
      const s = e.charCodeAt(t);
      if (s > 127) break;
      i[a + t] = s;
    }
    if (t !== o) {
      t !== 0 && (e = e.slice(t)), a = r(a, o, o = t + e.length * 3);
      const s = f().subarray(a + t, a + o), c = M(e, s);
      t += c.written;
    }
    return l = t, a;
  }
  let d = null;
  function w() {
    return (d === null || d.buffer !== y.buffer) && (d = new Int32Array(y.buffer)), d;
  }
  function S(e, n) {
    return f().subarray(e / 1, e / 1 + n);
  }
  B = function(e, n, r) {
    try {
      const _ = m(-16);
      var o = x(e, h), a = l, i = C(n, h, W), t = l;
      T(_, o, a, i, t, r);
      var s = w()[_ / 4 + 0], c = w()[_ / 4 + 1], p = S(s, c).slice();
      return U(s, c * 1), p;
    } finally {
      m(16);
    }
  };
})();
export {
  __tla,
  B as decrypt
};
