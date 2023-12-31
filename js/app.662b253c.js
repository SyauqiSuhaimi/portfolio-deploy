(function () {
  "use strict";
  var e = {
      7034: function (e, t, n) {
        var o = n(9242),
          r = n(3396),
          i = n(7139);
        const a = {
            class: "home row mx-0 d-flex align-items-center",
            style: { height: "100vh" },
          },
          u = { class: "col-6 p-4" },
          c = (0, r._)("h2", null, "MUHAMMAD SYAUQI BIN SUHAIMI", -1),
          l = (0, r._)(
            "h5",
            { class: "secondory-color" },
            "FULL STACK DEVELOPER",
            -1
          ),
          s = { class: "my-2 row d-flex justify-content-end" },
          f = { class: "footer row d-flex justify-content-end my-3" },
          d = ["href", "data-bs-title"],
          p = { class: "col-6 p-4" };
        function m(e, t, n, m, h, g) {
          const v = (0, r.up)("router-link"),
            b = (0, r.up)("router-view");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", a, [
              (0, r._)("div", u, [
                c,
                l,
                (0, r._)("div", s, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      h.pages,
                      (e, t) => (
                        (0, r.wg)(),
                        (0, r.j4)(
                          v,
                          { key: t, to: e.link, class: "navBar mx-1 col-auto" },
                          {
                            default: (0, r.w5)(() => [
                              (0, r.Uk)((0, i.zw)(e.name), 1),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                (0, r._)("div", f, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      h.footer,
                      (e, t) => (
                        (0, r.wg)(),
                        (0, r.iD)(
                          "a",
                          {
                            key: t,
                            href: e.link,
                            class: "col-auto p-0 mx-2 navigation",
                            target: "_blank",
                            "data-bs-toggle": "tooltip",
                            "data-bs-placement": "bottom",
                            "data-bs-title": e.tooltip,
                          },
                          [
                            (0, r._)(
                              "i",
                              {
                                class: (0, i.C_)(`fa fa-2x ${e.icon}`),
                                "aria-hidden": "true",
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          d
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              (0, r._)("div", p, [
                (0, r.Wm)(
                  b,
                  { style: { "max-width": "600px" } },
                  {
                    default: (0, r.w5)(({ Component: e }) => [
                      (0, r.Wm)(
                        o.uT,
                        { name: "route", mode: "out-in" },
                        {
                          default: (0, r.w5)(() => [
                            ((0, r.wg)(), (0, r.j4)((0, r.LL)(e))),
                          ]),
                          _: 2,
                        },
                        1024
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
        var h = {
            name: "HomeView",
            data() {
              return {
                pages: [
                  { name: "About Me", link: "/" },
                  { name: "Education", link: "/education" },
                  { name: "Work Experience", link: "/work" },
                  { name: "Projects", link: "/projects" },
                ],
                footer: [
                  {
                    icon: "fa-file-text",
                    link: "https://drive.google.com/file/d/1U7iPTvZxcgbfaeqW8UL_Lt7QiXu17JiZ/view?usp=sharing",
                    tooltip: "Download Resume",
                  },
                  {
                    icon: "fa-github",
                    link: "https://github.com/SyauqiSuhaimi",
                  },
                  {
                    icon: "fa-linkedin-square",
                    link: "https://www.linkedin.com/in/muhammad-syauqi-64b52118b/",
                  },
                  {
                    icon: "fa-envelope-o",
                    link: "mailto:muhammadsyauqi122@gmail.com",
                  },
                ],
              };
            },
          },
          g = n(89);
        const v = (0, g.Z)(h, [["render", m]]);
        var b = v,
          y = n(2483);
        const w = { class: "home text-start" };
        function k(e, t, n, o, i, a) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "div",
              w,
              " Seeking opportunities to join a company to utilize my engineering skills that can contribute to the company’s growth and a company that can help me in enhancing my skills, strengthening my knowledge and realising my potential. I am willing to explore a wide variety of opportunities that can help me gain new perspective and experience. "
            )
          );
        }
        var x = { name: "HomeView" };
        const j = (0, g.Z)(x, [["render", k]]);
        var _ = j;
        const C = [
            { path: "/", name: "home", component: _ },
            {
              path: "/about",
              name: "about",
              component: () => n.e(443).then(n.bind(n, 833)),
            },
            {
              path: "/education",
              name: "education",
              component: () => n.e(443).then(n.bind(n, 6886)),
            },
            {
              path: "/work",
              name: "work",
              component: () => n.e(443).then(n.bind(n, 6314)),
            },
            {
              path: "/projects",
              name: "projects",
              component: () => n.e(443).then(n.bind(n, 7630)),
            },
          ],
          E = (0, y.p7)({ history: (0, y.r5)(), routes: C });
        var O = E,
          S = (n(5654), n(5302));
        (0, o.ri)(b).use(O).use(S.tc).mount("#app");
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, o, r, i) {
        if (!o) {
          var a = 1 / 0;
          for (s = 0; s < e.length; s++) {
            (o = e[s][0]), (r = e[s][1]), (i = e[s][2]);
            for (var u = !0, c = 0; c < o.length; c++)
              (!1 & i || a >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](o[c]);
              })
                ? o.splice(c--, 1)
                : ((u = !1), i < a && (a = i));
            if (u) {
              e.splice(s--, 1);
              var l = r();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        i = i || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
        e[s] = [o, r, i];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, o) {
              return n.f[o](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return "https://syauqisuhaimi.github.io/portfolio-deploy/js/about.1c5a7fc2.js";
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "https://syauqisuhaimi.github.io/portfolio-deploy/css/about.ad5bb751.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "portfolio:";
      n.l = function (o, r, i, a) {
        if (e[o]) e[o].push(r);
        else {
          var u, c;
          if (void 0 !== i)
            for (
              var l = document.getElementsByTagName("script"), s = 0;
              s < l.length;
              s++
            ) {
              var f = l[s];
              if (
                f.getAttribute("src") == o ||
                f.getAttribute("data-webpack") == t + i
              ) {
                u = f;
                break;
              }
            }
          u ||
            ((c = !0),
            (u = document.createElement("script")),
            (u.charset = "utf-8"),
            (u.timeout = 120),
            n.nc && u.setAttribute("nonce", n.nc),
            u.setAttribute("data-webpack", t + i),
            (u.src = o)),
            (e[o] = [r]);
          var d = function (t, n) {
              (u.onerror = u.onload = null), clearTimeout(p);
              var r = e[o];
              if (
                (delete e[o],
                u.parentNode && u.parentNode.removeChild(u),
                r &&
                  r.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: u }),
              12e4
            );
          (u.onerror = d.bind(null, u.onerror)),
            (u.onload = d.bind(null, u.onload)),
            c && document.head.appendChild(u);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, n, o, r) {
            var i = document.createElement("link");
            (i.rel = "stylesheet"), (i.type = "text/css");
            var a = function (n) {
              if (((i.onerror = i.onload = null), "load" === n.type)) o();
              else {
                var a = n && ("load" === n.type ? "missing" : n.type),
                  u = (n && n.target && n.target.href) || t,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + u + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.type = a),
                  (c.request = u),
                  i.parentNode && i.parentNode.removeChild(i),
                  r(c);
              }
            };
            return (
              (i.onerror = i.onload = a),
              (i.href = t),
              n
                ? n.parentNode.insertBefore(i, n.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          t = function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var r = n[o],
                i = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (i === e || i === t)) return r;
            }
            var a = document.getElementsByTagName("style");
            for (o = 0; o < a.length; o++) {
              (r = a[o]), (i = r.getAttribute("data-href"));
              if (i === e || i === t) return r;
            }
          },
          o = function (o) {
            return new Promise(function (r, i) {
              var a = n.miniCssF(o),
                u = n.p + a;
              if (t(a, u)) return r();
              e(o, u, null, r, i);
            });
          },
          r = { 143: 0 };
        n.f.miniCss = function (e, t) {
          var n = { 443: 1 };
          r[e]
            ? t.push(r[e])
            : 0 !== r[e] &&
              n[e] &&
              t.push(
                (r[e] = o(e).then(
                  function () {
                    r[e] = 0;
                  },
                  function (t) {
                    throw (delete r[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, o) {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var i = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            o.push((r[2] = i));
            var a = n.p + n.u(t),
              u = new Error(),
              c = function (o) {
                if (n.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var i = o && ("load" === o.type ? "missing" : o.type),
                    a = o && o.target && o.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = i),
                    (u.request = a),
                    r[1](u);
                }
              };
            n.l(a, c, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, o) {
          var r,
            i,
            a = o[0],
            u = o[1],
            c = o[2],
            l = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in u) n.o(u, r) && (n.m[r] = u[r]);
            if (c) var s = c(n);
          }
          for (t && t(o); l < a.length; l++)
            (i = a[l]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(s);
        },
        o = (self["webpackChunkportfolio"] =
          self["webpackChunkportfolio"] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [998], function () {
    return n(7034);
  });
  o = n.O(o);
})();
//# sourceMappingURL=app.662b253c.js.map
