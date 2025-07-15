import { defineComponent, unref, withCtx, createVNode, createBlock, openBlock, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: { type: Boolean },
    canRegister: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:col-start-2 lg:justify-center"><svg class="w-24 h-24 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"></path></svg></div></header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8">`);
      if (_ctx.canLogin) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.$page.props.auth.user ? _ctx.route("dashboard") : _ctx.route("login"),
          class: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"${_scopeId}><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m4.5-3h-9m0 0l3-3m-3 3l3 3"${_scopeId}></path></svg></div><div class="pt-3 sm:pt-5"${_scopeId}><h3 class="rounded-md px-3 py-2 text-black text-xl font-semibold dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user ? "Dashboard" : "Connexion")}</h3><p class="mt-4 text-sm/relaxed"${_scopeId}> Reprenez votre écoute là où vous l’avez laissée, retrouvez vos playlists, artistes favoris et recommandations personnalisées. En vous connectant, vous accédez à toute votre bibliothèque, vos paramètres audio, vos habitudes d’écoute, et vos titres enregistrés. Entrez simplement vos identifiants pour replonger dans votre monde musical, sans interruption. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("div", { class: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16" }, [
                  (openBlock(), createBlock("svg", {
                    class: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1.5",
                      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m4.5-3h-9m0 0l3-3m-3 3l3 3"
                    })
                  ]))
                ]),
                createVNode("div", { class: "pt-3 sm:pt-5" }, [
                  createVNode("h3", { class: "rounded-md px-3 py-2 text-black text-xl font-semibold dark:text-white" }, toDisplayString(_ctx.$page.props.auth.user ? "Dashboard" : "Connexion"), 1),
                  createVNode("p", { class: "mt-4 text-sm/relaxed" }, " Reprenez votre écoute là où vous l’avez laissée, retrouvez vos playlists, artistes favoris et recommandations personnalisées. En vous connectant, vous accédez à toute votre bibliothèque, vos paramètres audio, vos habitudes d’écoute, et vos titres enregistrés. Entrez simplement vos identifiants pour replonger dans votre monde musical, sans interruption. ")
                ]),
                (openBlock(), createBlock("svg", {
                  class: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.canRegister) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("register"),
            class: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"${_scopeId}><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><g fill="#FF2D20"${_scopeId}><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"${_scopeId}></path><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"${_scopeId}></path><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"${_scopeId}></path></g></svg></div><div class="pt-3 sm:pt-5"${_scopeId}>`);
                if (_ctx.canLogin) {
                  _push2(`<nav${_scopeId}>`);
                  if (_ctx.canRegister) {
                    _push2(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("register"),
                      class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] text-xl font-semibold text-black dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Inscription `);
                        } else {
                          return [
                            createTextVNode(" Inscription ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</nav>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<p class="mt-4 text-sm/relaxed"${_scopeId}> Rejoignez notre plateforme et explorez des millions de titres, albums et podcasts — sans limite. En quelques clics, créez votre compte, construisez vos premières playlists et laissez nos recommandations vous guider vers de nouvelles découvertes. Avec un compte, vous pouvez sauvegarder vos musiques, suivre vos artistes préférés, personnaliser votre expérience et synchroniser votre bibliothèque sur tous vos appareils. </p></div><svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 3.75H4.875A1.125 1.125 0 003.75 4.875v14.25c0 .621.504 1.125 1.125 1.125h14.25a1.125 1.125 0 001.125-1.125V7.5m-5.625-3.75L20.25 7.5m0 0l-5.625 5.625M20.25 7.5H9"${_scopeId}></path></svg>`);
              } else {
                return [
                  createVNode("div", { class: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16" }, [
                    (openBlock(), createBlock("svg", {
                      class: "size-5 sm:size-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("g", { fill: "#FF2D20" }, [
                        createVNode("path", { d: "M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" }),
                        createVNode("path", { d: "M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" }),
                        createVNode("path", { d: "M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" })
                      ])
                    ]))
                  ]),
                  createVNode("div", { class: "pt-3 sm:pt-5" }, [
                    _ctx.canLogin ? (openBlock(), createBlock("nav", { key: 0 }, [
                      _ctx.canRegister ? (openBlock(), createBlock(unref(Link), {
                        key: 0,
                        href: _ctx.route("register"),
                        class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] text-xl font-semibold text-black dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Inscription ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode("p", { class: "mt-4 text-sm/relaxed" }, " Rejoignez notre plateforme et explorez des millions de titres, albums et podcasts — sans limite. En quelques clics, créez votre compte, construisez vos premières playlists et laissez nos recommandations vous guider vers de nouvelles découvertes. Avec un compte, vous pouvez sauvegarder vos musiques, suivre vos artistes préférés, personnaliser votre expérience et synchroniser votre bibliothèque sur tous vos appareils. ")
                  ]),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "size-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1.5",
                      d: "M16.5 3.75H4.875A1.125 1.125 0 003.75 4.875v14.25c0 .621.504 1.125 1.125 1.125h14.25a1.125 1.125 0 001.125-1.125V7.5m-5.625-3.75L20.25 7.5m0 0l-5.625 5.625M20.25 7.5H9"
                    })
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> By Kanace </footer></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
