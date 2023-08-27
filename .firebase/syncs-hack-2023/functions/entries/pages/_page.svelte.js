import { c as create_ssr_component, a as validate_store, b as subscribe } from "../../chunks/ssr.js";
import { g as goto } from "../../chunks/navigation.js";
import { u as userStore, a as auth } from "../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
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
