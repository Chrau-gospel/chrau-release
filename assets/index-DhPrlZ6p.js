import { i, __tla as __tla_0 } from "./index-DaIdkIrC.js";
let p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  p = async function(n, o) {
    await i("plugin:opener|open_url", {
      url: n,
      with: o
    });
  };
});
export {
  __tla,
  p as openUrl
};
