import { s as setContext, c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { a as auth, f as firestore, s as storage } from "../../chunks/firebase.js";
const themeRocket = "";
const skeleton = "";
const app = "";
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
const FirebaseApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firestore: firestore2 } = $$props;
  let { auth: auth2 } = $$props;
  let { storage: storage2 } = $$props;
  setFirebaseContext({ firestore: firestore2, auth: auth2, storage: storage2 });
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore2 !== void 0)
    $$bindings.firestore(firestore2);
  if ($$props.auth === void 0 && $$bindings.auth && auth2 !== void 0)
    $$bindings.auth(auth2);
  if ($$props.storage === void 0 && $$bindings.storage && storage2 !== void 0)
    $$bindings.storage(storage2);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(FirebaseApp, "FirebaseApp").$$render($$result, { auth, firestore, storage }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
