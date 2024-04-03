import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-dice-roll/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-dice-roll/dist/index.js"(exports) {
    function e(e2) {
      if (e2 && e2.__esModule)
        return e2;
      var t2 = /* @__PURE__ */ Object.create(null);
      return e2 && Object.keys(e2).forEach(function(n2) {
        if ("default" !== n2) {
          var r2 = Object.getOwnPropertyDescriptor(e2, n2);
          Object.defineProperty(t2, n2, r2.get ? r2 : { enumerable: true, get: function() {
            return e2[n2];
          } });
        }
      }), t2.default = e2, Object.freeze(t2);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var t = e(require_react());
    var n = function() {
      return (n = Object.assign || function(e2) {
        for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
          for (var a2 in t2 = arguments[n2])
            Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
        return e2;
      }).apply(this, arguments);
    };
    !function(e2) {
      if (e2 && "undefined" != typeof window) {
        var t2 = document.createElement("style");
        t2.setAttribute("type", "text/css"), t2.innerHTML = e2, document.head.appendChild(t2);
      }
    }("._space3d {\n  perspective: 1000px;\n  text-align: center;\n  display: inline-block;\n  padding: unset;\n  border: unset;\n  background-color: transparent;\n  outline: unset;\n  box-shadow: unset;\n}\n._space3d ._3dbox {\n  display: inline-block;\n  transition: all 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);\n}\n._space3d ._3dface {\n  overflow: hidden;\n  position: absolute;\n  opacity: 1;\n  background-size: auto 100%;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._space3d .defaultFace {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border-radius: 12px;\n  box-shadow: inset 0 0 6px #000000;\n  background-color: #fff;\n}\n._space3d .defaultFace div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._space3d .defaultFace span {\n  width: 60%;\n  height: 60%;\n  box-shadow: 0 0 6px #000000;\n  border-radius: 50%;\n  background-color: #000;\n}\n._space3d.one ._3dbox {\n  transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg);\n}\n._space3d.two ._3dbox {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n._space3d.three ._3dbox {\n  transform: rotateX(0deg) rotateY(180deg) rotateZ(0deg);\n}\n._space3d.four ._3dbox {\n  transform: rotateX(-90deg) rotateY(90deg) rotateZ(90deg);\n}\n._space3d.five ._3dbox {\n  transform: rotateX(90deg) rotateY(-90deg) rotateZ(90deg);\n}\n._space3d.rolling ._3dbox {\n  transform-style: preserve-3d;\n  animation: spin 2s infinite linear;\n}\n\n@keyframes spin {\n  0% {\n    transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  }\n  16% {\n    transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);\n  }\n  33% {\n    transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);\n  }\n  50% {\n    transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n  66% {\n    transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);\n  }\n  83% {\n    transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);\n  }\n  100% {\n    transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);\n  }\n}");
    var r = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six" };
    var a = { 1: function(e2) {
      return { transform: "rotateX(-90deg) translate3d(0, 0, " + e2 + "px)" };
    }, 2: function(e2) {
      return { transform: "translate3d(0, 0, " + e2 + "px)" };
    }, 3: function(e2) {
      return { transform: "rotateY(180deg) translate3d(0, 0, " + e2 + "px)" };
    }, 4: function(e2) {
      return { left: "50%", marginLeft: "-" + e2 + "px", transform: "rotateY(-90deg) translate3d(0, 0, " + e2 + "px)" };
    }, 5: function(e2) {
      return { left: "50%", marginLeft: "-" + e2 + "px", transform: "rotateY(90deg) translate3d(0, 0, " + e2 + "px)" };
    }, 6: function(e2) {
      return { transform: "rotateX(90deg) translate3d(0, 0, " + e2 + "px)" };
    } };
    var o = { 1: [12], 2: [11, 13], 3: [6, 12, 18], 4: [6, 8, 16, 18], 5: [6, 8, 12, 16, 18], 6: [6, 8, 11, 13, 16, 18] };
    var d = ["_3dface _3dface--one", "_3dface _3dface--two", "_3dface _3dface--three", "_3dface _3dface--four", "_3dface _3dface--five", "_3dface _3dface--six"];
    var i = function(e2, t2) {
      for (var n2 = [], r2 = 0; r2 < e2; r2++)
        n2.push(t2(r2));
      return n2;
    };
    var l = t.useState;
    var s = t.useEffect;
    var c = t.forwardRef;
    var f = t.useImperativeHandle;
    var u = c(function(e2, c2) {
      var u2 = e2.rollingTime, p = void 0 === u2 ? 1e3 : u2, g = e2.onRoll, m = e2.defaultValue, v = void 0 === m ? 6 : m, b = e2.size, x = void 0 === b ? 250 : b, h = e2.faceBg, y = e2.faces, _ = void 0 === y ? [] : y, w = e2.disabled, Z = e2.cheatValue, O = e2.placement, k = e2.sound, E = e2.triggers, Y = void 0 === E ? ["click"] : E, X = function(e3, t2) {
        var n2 = {};
        for (var r2 in e3)
          Object.prototype.hasOwnProperty.call(e3, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e3[r2]);
        if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
          var a2 = 0;
          for (r2 = Object.getOwnPropertySymbols(e3); a2 < r2.length; a2++)
            t2.indexOf(r2[a2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, r2[a2]) && (n2[r2[a2]] = e3[r2[a2]]);
        }
        return n2;
      }(e2, ["rollingTime", "onRoll", "defaultValue", "size", "faceBg", "faces", "disabled", "cheatValue", "placement", "sound", "triggers"]), j = l(v), P = j[0], z = j[1], L = l(false), M = L[0], F = L[1], N = l([]), T = N[0], V = N[1], C = l({}), I = C[0], R = C[1], S = l({}), A = S[0], B = S[1], D = function(e3) {
        var t2;
        k && (t2 = new Audio(k)).play(), F(true), setTimeout(function() {
          var n2 = Math.floor(6 * Math.random() + 1);
          e3 && (n2 = e3), Z && (n2 = Z), F(false), z(n2), t2 && t2.pause(), g && g(n2);
        }, p);
      };
      f(c2, function() {
        return { rollDice: D };
      });
      var H = function(e3) {
        (null == Y ? void 0 : Y.length) && Y.includes(e3.key) && D();
      };
      return s(function() {
        if ("undefined" != typeof window && (null == Y ? void 0 : Y.length))
          return window.addEventListener("keypress", H), function() {
            window.removeEventListener("keypress", H);
          };
      }, [Y]), s(function() {
        V(function(e3, l2, s2) {
          return d.map(function(d2, c3) {
            return { className: d2, children: l2[c3] ? null : t.createElement("div", { className: "defaultFace " + r[c3 + 1] }, i(25, function(e4) {
              return t.createElement("div", { key: e4 }, o[c3 + 1].includes(e4) && t.createElement("span", null));
            })), style: n(n(n(n({}, a[c3 + 1](e3 / 2)), { width: e3 + "px", height: e3 + "px" }), s2 && { backgroundColor: s2 }), l2[c3] && { backgroundImage: "url(" + l2[c3] + ")" }) };
          });
        }(x, _, h));
      }, [x, _.length, h]), s(function() {
        var e3, t2 = null === (e3 = null == O ? void 0 : O.split("-")) || void 0 === e3 ? void 0 : e3.reduce(function(e4, t3) {
          var r2;
          return n(n({}, e4), ((r2 = {})[t3] = ["left", "right"].includes(t3) ? 0 : "-" + x + "px", r2));
        }, {});
        R(t2);
      }, [O, x]), s(function() {
        B(n(n(n({}, X), I), { width: x + "px", height: x + "px", filter: w ? "grayscale(100%)" : "unset" }));
      }, [I, x, w]), (null == T ? void 0 : T.length) ? t.createElement("button", { disabled: w || M, onClick: function() {
        (null == Y ? void 0 : Y.length) && Y.includes("click") && D();
      }, style: A, className: "_space3d " + r[P] + " " + (M && "rolling") }, t.createElement("div", { className: "_3dbox" }, t.createElement("div", n({}, T[0])), t.createElement("div", n({}, T[1])), t.createElement("div", n({}, T[2])), t.createElement("div", n({}, T[3])), t.createElement("div", n({}, T[4])), t.createElement("div", n({}, T[5])))) : null;
    });
    exports.default = u;
  }
});
export default require_dist();
/*! Bundled license information:

react-dice-roll/dist/index.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=react-dice-roll.js.map
