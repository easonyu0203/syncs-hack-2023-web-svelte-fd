import { c as create_ssr_component, a as validate_store, b as subscribe } from "../../chunks/ssr.js";
import { u as userStore, a as auth } from "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { g as goto } from "../../chunks/navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const user = userStore(auth);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  {
    if ($user) {
      goto(`/${$user.uid}`);
    } else {
      goto("/login");
    }
  }
  $$unsubscribe_user();
  return ``;
});
export {
  Page as default
};
