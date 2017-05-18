if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = st.type(t);
            return "function" !== i && !st.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t, e, i) {
            if (st.isFunction(e)) return st.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return st.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (ht.test(e)) return st.filter(e, t, i);
                e = st.filter(e, t)
            }
            return st.grep(t, function(t) {
                return Z.call(e, t) > -1 !== i
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) {
            var e = {};
            return st.each(t.match(vt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            G.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), st.ready()
        }

        function a() {
            this.expando = st.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(xt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? st.parseJSON(i) : i)
                    } catch (t) {}
                    Tt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c(t, e, i, n) {
            var o, s = 1,
                r = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return st.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (st.cssNumber[e] ? "" : "px"),
                d = (st.cssNumber[e] || "px" !== c && +l) && St.exec(st.css(t, e));
            if (d && d[3] !== c) {
                c = c || d[3], i = i || [], d = +l || 1;
                do {
                    s = s || ".5", d /= s, st.style(t, e, d + c)
                } while (s !== (s = a() / l) && 1 !== s && --r)
            }
            return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
        }

        function d(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], i) : i
        }

        function u(t, e) {
            for (var i = 0, n = t.length; n > i; i++) _t.set(t[i], "globalEval", !e || _t.get(e[i], "globalEval"))
        }

        function h(t, e, i, n, o) {
            for (var s, r, a, l, c, h, p = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
                if ((s = t[g]) || 0 === s)
                    if ("object" === st.type(s)) st.merge(f, s.nodeType ? [s] : s);
                    else if (Nt.test(s)) {
                for (r = r || p.appendChild(e.createElement("div")), a = (Dt.exec(s) || ["", ""])[1].toLowerCase(), l = $t[a] || $t._default, r.innerHTML = l[1] + st.htmlPrefilter(s) + l[2], h = l[0]; h--;) r = r.lastChild;
                st.merge(f, r.childNodes), r = p.firstChild, r.textContent = ""
            } else f.push(e.createTextNode(s));
            for (p.textContent = "", g = 0; s = f[g++];)
                if (n && st.inArray(s, n) > -1) o && o.push(s);
                else if (c = st.contains(s.ownerDocument, s), r = d(p.appendChild(s), "script"), c && u(r), i)
                for (h = 0; s = r[h++];) It.test(s.type || "") && i.push(s);
            return p
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function g() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function m(t, e, i, n, o, s) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) m(t, a, i, n, e[a], s);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = f;
            else if (!o) return t;
            return 1 === s && (r = o, o = function(t) {
                return st().off(t), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = st.guid++)), t.each(function() {
                st.event.add(this, e, o, n, i)
            })
        }

        function v(t, e) {
            return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Wt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            var i, n, o, s, r, a, l, c;
            if (1 === e.nodeType) {
                if (_t.hasData(t) && (s = _t.access(t), r = _t.set(e, s), c = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in c)
                        for (i = 0, n = c[o].length; n > i; i++) st.event.add(e, o, c[o][i])
                }
                Tt.hasData(t) && (a = Tt.access(t), l = st.extend({}, a), Tt.set(e, l))
            }
        }

        function _(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Ot.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }

        function T(t, e, i, n) {
            e = K.apply([], e);
            var o, s, r, a, l, c, u = 0,
                p = t.length,
                f = p - 1,
                g = e[0],
                m = st.isFunction(g);
            if (m || p > 1 && "string" == typeof g && !nt.checkClone && Mt.test(g)) return t.each(function(o) {
                var s = t.eq(o);
                m && (e[0] = g.call(this, o, s.html())), T(s, e, i, n)
            });
            if (p && (o = h(e, t[0].ownerDocument, !1, t, n), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
                for (r = st.map(d(o, "script"), y), a = r.length; p > u; u++) l = o, u !== f && (l = st.clone(l, !0, !0), a && st.merge(r, d(l, "script"))), i.call(t[u], l, u);
                if (a)
                    for (c = r[r.length - 1].ownerDocument, st.map(r, w), u = 0; a > u; u++) l = r[u], It.test(l.type || "") && !_t.access(l, "globalEval") && st.contains(c, l) && (l.src ? st._evalUrl && st._evalUrl(l.src) : st.globalEval(l.textContent.replace(Rt, "")))
            }
            return t
        }

        function C(t, e, i) {
            for (var n, o = e ? st.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || st.cleanData(d(n)), n.parentNode && (i && st.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function x(t, e) {
            var i = st(e.createElement(t)).appendTo(e.body),
                n = st.css(i[0], "display");
            return i.detach(), n
        }

        function E(t) {
            var e = G,
                i = zt[t];
            return i || (i = x(t, e), "none" !== i && i || (Ft = (Ft || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = x(t, e), Ft.detach()), zt[t] = i), i
        }

        function S(t, e, i) {
            var n, o, s, r, a = t.style;
            return i = i || Ut(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== r && void 0 !== r || st.contains(t.ownerDocument, t) || (r = st.style(t, e)), i && !nt.pixelMarginRight() && qt.test(r) && Bt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
        }

        function k(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function A(t) {
            if (t in Jt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Kt.length; i--;)
                if ((t = Kt[i] + e) in Jt) return t
        }

        function O(t, e, i) {
            var n = St.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function D(t, e, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += st.css(t, i + kt[s], !0, o)), n ? ("content" === i && (r -= st.css(t, "padding" + kt[s], !0, o)), "margin" !== i && (r -= st.css(t, "border" + kt[s] + "Width", !0, o))) : (r += st.css(t, "padding" + kt[s], !0, o), "padding" !== i && (r += st.css(t, "border" + kt[s] + "Width", !0, o)));
            return r
        }

        function I(e, i, n) {
            var o = !0,
                s = "width" === i ? e.offsetWidth : e.offsetHeight,
                r = Ut(e),
                a = "border-box" === st.css(e, "boxSizing", !1, r);
            if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= s || null == s) {
                if (s = S(e, i, r), (0 > s || null == s) && (s = e.style[i]), qt.test(s)) return s;
                o = a && (nt.boxSizingReliable() || s === e.style[i]), s = parseFloat(s) || 0
            }
            return s + D(e, i, n || (a ? "border" : "content"), o, r) + "px"
        }

        function $(t, e) {
            for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (s[r] = _t.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && At(n) && (s[r] = _t.access(n, "olddisplay", E(n.nodeName)))) : (o = At(n), "none" === i && o || _t.set(n, "olddisplay", o ? i : st.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function N(t, e, i, n, o) {
            return new N.prototype.init(t, e, i, n, o)
        }

        function P() {
            return t.setTimeout(function() {
                Zt = void 0
            }), Zt = st.now()
        }

        function L(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = kt[n], o["margin" + i] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function H(t, e, i) {
            for (var n, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, r = o.length; r > s; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function j(t, e, i) {
            var n, o, s, r, a, l, c, d = this,
                u = {},
                h = t.style,
                p = t.nodeType && At(t),
                f = _t.get(t, "fxshow");
            i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = st.css(t, "display"), "inline" === ("none" === c ? _t.get(t, "olddisplay") || E(t.nodeName) : c) && "none" === st.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], ee.exec(o)) {
                    if (delete e[n], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[n]) continue;
                        p = !0
                    }
                    u[n] = f && f[n] || st.style(t, n)
                } else c = void 0;
            if (st.isEmptyObject(u)) "inline" === ("none" === c ? E(t.nodeName) : c) && (h.display = c);
            else {
                f ? "hidden" in f && (p = f.hidden) : f = _t.access(t, "fxshow", {}), s && (f.hidden = !p), p ? st(t).show() : d.done(function() {
                    st(t).hide()
                }), d.done(function() {
                    var e;
                    _t.remove(t, "fxshow");
                    for (e in u) st.style(t, e, u[e])
                });
                for (n in u) r = H(p ? f[n] : 0, n, d), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function M(t, e) {
            var i, n, o, s, r;
            for (i in t)
                if (n = st.camelCase(i), o = e[n], s = t[i], st.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = st.cssHooks[n]) && "expand" in r) {
                    s = r.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = o)
                } else e[n] = o
        }

        function W(t, e, i) {
            var n, o, s = 0,
                r = W.prefilters.length,
                a = st.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Zt || P(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                    return a.notifyWith(t, [c, s, i]), 1 > s && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: st.extend({}, e),
                    opts: st.extend(!0, {
                        specialEasing: {},
                        easing: st.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Zt || P(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = st.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                d = c.props;
            for (M(d, c.opts.specialEasing); r > s; s++)
                if (n = W.prefilters[s].call(c, t, d, c.opts)) return st.isFunction(n.stop) && (st._queueHooks(c.elem, c.opts.queue).stop = st.proxy(n.stop, n)), n;
            return st.map(d, H, c), st.isFunction(c.opts.start) && c.opts.start.call(t, c), st.fx.timer(st.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function R(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function F(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    s = e.toLowerCase().match(vt) || [];
                if (st.isFunction(i))
                    for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function z(t, e, i, n) {
            function o(a) {
                var l;
                return s[a] = !0, st.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var s = {},
                r = t === ve;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function B(t, e) {
            var i, n, o = st.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && st.extend(!0, t, n), t
        }

        function q(t, e, i) {
            for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (o in a)
                    if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function U(t, e, i, n) {
            var o, s, r, a, l, c = {},
                d = t.dataTypes.slice();
            if (d[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (s = d.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s]))
                    for (o in c)
                        if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                            break
                        }
                if (!0 !== r)
                    if (r && t.throws) e = r(e);
                    else try {
                        e = r(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: r ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function V(t, e, i, n) {
            var o;
            if (st.isArray(e)) st.each(e, function(e, o) {
                i || be.test(t) ? n(t, o) : V(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== st.type(e)) n(t, e);
            else
                for (o in e) V(t + "[" + o + "]", e[o], i, n)
        }

        function Q(t) {
            return st.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var X = [],
            G = t.document,
            Y = X.slice,
            K = X.concat,
            J = X.push,
            Z = X.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            ot = "2.2.1",
            st = function(t, e) {
                return new st.fn.init(t, e)
            },
            rt = function(t, e) {
                return e.toUpperCase()
            };
        st.fn = st.prototype = {
            jquery: ot,
            constructor: st,
            selector: "",
            length: 0,
            toArray: function() {
                return Y.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
            },
            pushStack: function(t) {
                var e = st.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return st.each(this, t)
            },
            map: function(t) {
                return this.pushStack(st.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(Y.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: J,
            sort: X.sort,
            splice: X.splice
        }, st.extend = st.fn.extend = function() {
            var t, e, i, n, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], n = t[e], r !== n && (c && n && (st.isPlainObject(n) || (o = st.isArray(n))) ? (o ? (o = !1, s = i && st.isArray(i) ? i : []) : s = i && st.isPlainObject(i) ? i : {}, r[e] = st.extend(c, s, n)) : void 0 !== n && (r[e] = n));
            return r
        }, st.extend({
            expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === st.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !st.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" === st.type(t) && !t.nodeType && !st.isWindow(t) && !(t.constructor && !it.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = st.trim(t)) && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, rt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; n > o && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : Z.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                for (var n = [], o = 0, s = t.length, r = !i; s > o; o++) !e(t[o], o) !== r && n.push(t[o]);
                return n
            },
            map: function(t, e, n) {
                var o, s, r = 0,
                    a = [];
                if (i(t))
                    for (o = t.length; o > r; r++) null != (s = e(t[r], r, n)) && a.push(s);
                else
                    for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
                return K.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), st.isFunction(t) ? (n = Y.call(arguments, 2), o = function() {
                    return t.apply(e || this, n.concat(Y.call(arguments)))
                }, o.guid = t.guid = t.guid || st.guid++, o) : void 0
            },
            now: Date.now,
            support: nt
        }), "function" == typeof Symbol && (st.fn[Symbol.iterator] = X[Symbol.iterator]), st.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var at = function(t) {
            function e(t, e, i, n) {
                var o, s, r, a, c, u, h, p, f = e && e.ownerDocument,
                    g = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
                if (!n && ((e ? e.ownerDocument || e : M) !== D && O(e), e = e || D, $)) {
                    if (11 !== g && (u = gt.exec(t)))
                        if (o = u[1]) {
                            if (9 === g) {
                                if (!(r = e.getElementById(o))) return i;
                                if (r.id === o) return i.push(r), i
                            } else if (f && (r = f.getElementById(o)) && H(e, r) && r.id === o) return i.push(r), i
                        } else {
                            if (u[2]) return Y.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return Y.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (w.qsa && !B[t + " "] && (!N || !N.test(t))) {
                        if (1 !== g) f = e, p = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = j), h = C(t), s = h.length, c = dt.test(a) ? "#" + a : "[id='" + a + "']"; s--;) h[s] = c + " " + d(h[s]);
                            p = h.join(","), f = mt.test(t) && l(e.parentNode) || e
                        }
                        if (p) try {
                            return Y.apply(i, f.querySelectorAll(p)), i
                        } catch (t) {} finally {
                            a === j && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(st, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > b.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[j] = !0, t
            }

            function o(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function c() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function u(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    s = R++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, s)
                } : function(e, i, r) {
                    var a, l, c, d = [W, s];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if (c = e[j] || (e[j] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === W && a[1] === s) return d[2] = a[2];
                                if (l[n] = d, d[2] = t(e, i, r)) return !0
                            }
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function p(t, i, n) {
                for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
                return n
            }

            function f(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), c && e.push(a));
                return r
            }

            function g(t, e, i, o, s, r) {
                return o && !o[j] && (o = g(o)), s && !s[j] && (s = g(s, r)), n(function(n, r, a, l) {
                    var c, d, u, h = [],
                        g = [],
                        m = r.length,
                        v = n || p(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : f(v, h, t, a, l),
                        w = i ? s || (n ? t : m || o) ? [] : r : y;
                    if (i && i(y, w, a, l), o)
                        for (c = f(w, g), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (w[g[d]] = !(y[g[d]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (c = [], d = w.length; d--;)(u = w[d]) && c.push(y[d] = u);
                                s(null, w = [], c, l)
                            }
                            for (d = w.length; d--;)(u = w[d]) && (c = s ? J(n, u) : h[d]) > -1 && (n[c] = !(r[c] = u))
                        }
                    } else w = f(w === r ? w.splice(m, w.length) : w), s ? s(null, r, w, l) : Y.apply(r, w)
                })
            }

            function m(t) {
                for (var e, i, n, o = t.length, s = b.relative[t[0].type], r = s || b.relative[" "], a = s ? 1 : 0, l = u(function(t) {
                        return t === e
                    }, r, !0), c = u(function(t) {
                        return J(e, t) > -1
                    }, r, !0), p = [function(t, i, n) {
                        var o = !s && (n || i !== S) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, o
                    }]; o > a; a++)
                    if (i = b.relative[t[a].type]) p = [u(h(p), i)];
                    else {
                        if (i = b.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                            for (n = ++a; o > n && !b.relative[t[n].type]; n++);
                            return g(a > 1 && h(p), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), i, n > a && m(t.slice(a, n)), o > n && m(t = t.slice(n)), o > n && d(t))
                        }
                        p.push(i)
                    }
                return h(p)
            }

            function v(t, i) {
                var o = i.length > 0,
                    s = t.length > 0,
                    r = function(n, r, a, l, c) {
                        var d, u, h, p = 0,
                            g = "0",
                            m = n && [],
                            v = [],
                            y = S,
                            w = n || s && b.find.TAG("*", c),
                            _ = W += null == y ? 1 : Math.random() || .1,
                            T = w.length;
                        for (c && (S = r === D || r || c); g !== T && null != (d = w[g]); g++) {
                            if (s && d) {
                                for (u = 0, r || d.ownerDocument === D || (O(d), a = !$); h = t[u++];)
                                    if (h(d, r || D, a)) {
                                        l.push(d);
                                        break
                                    }
                                c && (W = _)
                            }
                            o && ((d = !h && d) && p--, n && m.push(d))
                        }
                        if (p += g, o && g !== p) {
                            for (u = 0; h = i[u++];) h(m, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = X.call(l));
                                v = f(v)
                            }
                            Y.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (W = _, S = y), m
                    };
                return o ? n(r) : r
            }
            var y, w, b, _, T, C, x, E, S, k, A, O, D, I, $, N, P, L, H, j = "sizzle" + 1 * new Date,
                M = t.document,
                W = 0,
                R = 0,
                F = i(),
                z = i(),
                B = i(),
                q = function(t, e) {
                    return t === e && (A = !0), 0
                },
                U = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                X = Q.pop,
                G = Q.push,
                Y = Q.push,
                K = Q.slice,
                J = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                rt = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ct = new RegExp(nt),
                dt = new RegExp("^" + et + "$"),
                ut = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + nt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ht = /^(?:input|select|textarea|button)$/i,
                pt = /^h\d$/i,
                ft = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                vt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                wt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                bt = function() {
                    O()
                };
            try {
                Y.apply(Q = K.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
            } catch (t) {
                Y = {
                    apply: Q.length ? function(t, e) {
                        G.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, O = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : M;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, I = D.documentElement, $ = !T(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", bt, !1) : i.attachEvent && i.attachEvent("onunload", bt)), w.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function(t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ft.test(D.getElementsByClassName), w.getById = o(function(t) {
                    return I.appendChild(t).id = j, !D.getElementsByName || !D.getElementsByName(j).length
                }), w.getById ? (b.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && $) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, b.filter.ID = function(t) {
                    var e = t.replace(yt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete b.find.ID, b.filter.ID = function(t) {
                    var e = t.replace(yt, wt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), b.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, b.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && $ ? e.getElementsByClassName(t) : void 0
                }, P = [], N = [], (w.qsa = ft.test(D.querySelectorAll)) && (o(function(t) {
                    I.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + j + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || N.push(".#.+[+~]")
                }), o(function(t) {
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (w.matchesSelector = ft.test(L = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
                    w.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), P.push("!=", nt)
                }), N = N.length && new RegExp(N.join("|")), P = P.length && new RegExp(P.join("|")), e = ft.test(I.compareDocumentPosition), H = e || ft.test(I.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, q = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === D || t.ownerDocument === M && H(M, t) ? -1 : e === D || e.ownerDocument === M && H(M, e) ? 1 : k ? J(k, t) - J(k, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i, n = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !s) return t === D ? -1 : e === D ? 1 : o ? -1 : s ? 1 : k ? J(k, t) - J(k, e) : 0;
                    if (o === s) return r(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? r(a[n], l[n]) : a[n] === M ? -1 : l[n] === M ? 1 : 0
                }, D) : D
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== D && O(t), i = i.replace(lt, "='$1']"), w.matchesSelector && $ && !B[i + " "] && (!P || !P.test(i)) && (!N || !N.test(i))) try {
                    var n = L.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, D, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && O(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && O(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && V.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
                return void 0 !== n ? n : w.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (A = !w.detectDuplicates, k = !w.sortStable && t.slice(0), t.sort(q), A) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return k = null, t
            }, _ = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += _(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += _(e);
                return i
            }, b = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ut,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(yt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(yt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = F[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && F(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, d, u, h, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (h = e; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (h = m, u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[t] || [], p = c[0] === W && c[1], w = p && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (w = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++w && h === e) {
                                            d[t] = [W, p, w];
                                            break
                                        }
                                } else if (y && (h = e, u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[t] || [], p = c[0] === W && c[1], w = p), !1 === w)
                                    for (;
                                        (h = ++p && h && h[g] || (w = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++w || (y && (u = h[j] || (h[j] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), d[t] = [W, w]), h !== e)););
                                return (w -= o) === n || w % n == 0 && w / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var o, s = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[j] ? s(i) : s.length > 1 ? (o = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, o = s(t, i), r = o.length; r--;) n = J(t, o[r]), t[n] = !(e[n] = o[r])
                        }) : function(t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            o = x(t.replace(st, "$1"));
                        return o[j] ? n(function(t, e, i, n) {
                            for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, n, s) {
                            return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(yt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, wt).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return pt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(t, e) {
                        return [e - 1]
                    }),
                    eq: a(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: a(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: a(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: a(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: a(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, b.pseudos.nth = b.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[y] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[y] = function(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }(y);
            return c.prototype = b.filters = b.pseudos, b.setFilters = new c, C = e.tokenize = function(t, i) {
                var n, o, s, r, a, l, c, d = z[t + " "];
                if (d) return i ? 0 : d.slice(0);
                for (a = t, l = [], c = b.preFilter; a;) {
                    (!n || (o = rt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = at.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(st, " ")
                    }), a = a.slice(n.length));
                    for (r in b.filter) !(o = ut[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, x = e.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    s = B[t + " "];
                if (!s) {
                    for (e || (e = C(t)), i = e.length; i--;) s = m(e[i]), s[j] ? n.push(s) : o.push(s);
                    s = B(t, v(o, n)), s.selector = t
                }
                return s
            }, E = e.select = function(t, e, i, n) {
                var o, s, r, a, c, u = "function" == typeof t && t,
                    h = !n && C(t = u.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && w.getById && 9 === e.nodeType && $ && b.relative[s[1].type]) {
                        if (!(e = (b.find.ID(r.matches[0].replace(yt, wt), e) || [])[0])) return i;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = ut.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !b.relative[a = r.type]);)
                        if ((c = b.find[a]) && (n = c(r.matches[0].replace(yt, wt), mt.test(s[0].type) && l(e.parentNode) || e))) {
                            if (s.splice(o, 1), !(t = n.length && d(s))) return Y.apply(i, n), i;
                            break
                        }
                }
                return (u || x(t, h))(n, e, !$, i, !e || mt.test(t) && l(e.parentNode) || e), i
            }, w.sortStable = j.split("").sort(q).join("") === j, w.detectDuplicates = !!A, O(), w.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(Z, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        st.find = at, st.expr = at.selectors, st.expr[":"] = st.expr.pseudos, st.uniqueSort = st.unique = at.uniqueSort, st.text = at.getText, st.isXMLDoc = at.isXML, st.contains = at.contains;
        var lt = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && st(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            ct = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            dt = st.expr.match.needsContext,
            ut = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ht = /^.[^:#\[\.,]*$/;
        st.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, st.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (st.contains(o[e], this)) return !0
                }));
                for (e = 0; i > e; e++) st.find(t, o[e], n);
                return n = this.pushStack(i > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && dt.test(t) ? st(t) : t || [], !1).length
            }
        });
        var pt, ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (st.fn.init = function(t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || pt, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ft.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), ut.test(n[1]) && st.isPlainObject(e))
                        for (n in e) st.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return o = G.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
        }).prototype = st.fn, pt = st(G);
        var gt = /^(?:parents|prev(?:Until|All))/,
            mt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        st.fn.extend({
            has: function(t) {
                var e = st(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (st.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, s = [], r = dt.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? st.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Z.call(st(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(st.uniqueSort(st.merge(this.get(), st(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), st.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return lt(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return lt(t, "parentNode", i)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return lt(t, "nextSibling")
            },
            prevAll: function(t) {
                return lt(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return lt(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return lt(t, "previousSibling", i)
            },
            siblings: function(t) {
                return ct((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ct(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || st.merge([], t.childNodes)
            }
        }, function(t, e) {
            st.fn[t] = function(i, n) {
                var o = st.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = st.filter(n, o)), this.length > 1 && (mt[t] || st.uniqueSort(o), gt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var vt = /\S+/g;
        st.Callbacks = function(t) {
            t = "string" == typeof t ? s(t) : st.extend({}, t);
            var e, i, n, o, r = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < r.length;) !1 === r[l].apply(i[0], i[1]) && t.stopOnFalse && (l = r.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
                },
                d = {
                    add: function() {
                        return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                            st.each(i, function(i, n) {
                                st.isFunction(n) ? t.unique && d.has(n) || r.push(n) : n && n.length && "string" !== st.type(n) && e(n)
                            })
                        }(arguments), i && !e && c()), this
                    },
                    remove: function() {
                        return st.each(arguments, function(t, e) {
                            for (var i;
                                (i = st.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? st.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = a = [], r = i = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = a = [], i || (r = i = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, i) {
                        return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, st.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", st.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return st.Deferred(function(i) {
                                st.each(e, function(e, s) {
                                    var r = st.isFunction(t[e]) && t[e];
                                    o[s[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && st.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? st.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, st.each(e, function(t, s) {
                    var r = s[2],
                        a = s[3];
                    n[s[1]] = r.add, a && r.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                        return o[s[0] + "With"](this === o ? n : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, o = 0,
                    s = Y.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && st.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : st.Deferred(),
                    c = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? Y.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && st.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, e)).done(c(o, n, s)).fail(l.reject) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var yt;
        st.fn.ready = function(t) {
            return st.ready.promise().done(t), this
        }, st.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? st.readyWait++ : st.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --st.readyWait : st.isReady) || (st.isReady = !0, !0 !== t && --st.readyWait > 0 || (yt.resolveWith(G, [st]), st.fn.triggerHandler && (st(G).triggerHandler("ready"), st(G).off("ready"))))
            }
        }), st.ready.promise = function(e) {
            return yt || (yt = st.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(st.ready) : (G.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), yt.promise(e)
        }, st.ready.promise();
        var wt = function(t, e, i, n, o, s, r) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === st.type(i)) {
                    o = !0;
                    for (a in i) wt(t, e, a, i[a], !0, s, r)
                } else if (void 0 !== n && (o = !0, st.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(st(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
            },
            bt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!bt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, bt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[e] = i;
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, st.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, o, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        st.isArray(e) ? n = e.concat(e.map(st.camelCase)) : (o = st.camelCase(e), e in s ? n = [e, o] : (n = o, n = n in s ? [n] : n.match(vt) || [])), i = n.length;
                        for (; i--;) delete s[n[i]]
                    }(void 0 === e || st.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !st.isEmptyObject(e)
            }
        };
        var _t = new a,
            Tt = new a,
            Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            xt = /[A-Z]/g;
        st.extend({
            hasData: function(t) {
                return Tt.hasData(t) || _t.hasData(t)
            },
            data: function(t, e, i) {
                return Tt.access(t, e, i)
            },
            removeData: function(t, e) {
                Tt.remove(t, e)
            },
            _data: function(t, e, i) {
                return _t.access(t, e, i)
            },
            _removeData: function(t, e) {
                _t.remove(t, e)
            }
        }), st.fn.extend({
            data: function(t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Tt.get(s), 1 === s.nodeType && !_t.get(s, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(s, n, o[n])));
                        _t.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Tt.set(this, t)
                }) : wt(this, function(e) {
                    var i, n;
                    if (s && void 0 === e) {
                        if (void 0 !== (i = Tt.get(s, t) || Tt.get(s, t.replace(xt, "-$&").toLowerCase()))) return i;
                        if (n = st.camelCase(t), void 0 !== (i = Tt.get(s, n))) return i;
                        if (void 0 !== (i = l(s, n, void 0))) return i
                    } else n = st.camelCase(t), this.each(function() {
                        var i = Tt.get(this, n);
                        Tt.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Tt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Tt.remove(this, t)
                })
            }
        }), st.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = _t.get(t, e), i && (!n || st.isArray(i) ? n = _t.access(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = st.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = st._queueHooks(t, e),
                    r = function() {
                        st.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return _t.get(t, i) || _t.access(t, i, {
                    empty: st.Callbacks("once memory").add(function() {
                        _t.remove(t, [e + "queue", i])
                    })
                })
            }
        }), st.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = st.queue(this, t, e);
                    st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    st.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = st.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = _t.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            kt = ["Top", "Right", "Bottom", "Left"],
            At = function(t, e) {
                return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
            },
            Ot = /^(?:checkbox|radio)$/i,
            Dt = /<([\w:-]+)/,
            It = /^$|\/(?:java|ecma)script/i,
            $t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td;
        var Nt = /<|&#?\w+;/;
        ! function() {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                i = G.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Pt = /^key/,
            Lt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ht = /^([^.]*)(?:\.(.+)|)/;
        st.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var s, r, a, l, c, d, u, h, p, f, g, m = _t.get(t);
                if (m)
                    for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = st.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                            return void 0 !== st && st.event.triggered !== e.type ? st.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(vt) || [""], c = e.length; c--;) a = Ht.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (u = st.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = st.event.special[p] || {}, d = st.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && st.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), st.event.global[p] = !0)
            },
            remove: function(t, e, i, n, o) {
                var s, r, a, l, c, d, u, h, p, f, g, m = _t.hasData(t) && _t.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(vt) || [""], c = e.length; c--;)
                        if (a = Ht.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = st.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) d = h[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
                            r && !h.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || st.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) st.event.remove(t, p + e[c], i, n, !0);
                    st.isEmptyObject(l) && _t.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = st.event.fix(t);
                var e, i, n, o, s, r = [],
                    a = Y.call(arguments),
                    l = (_t.get(this, "events") || {})[t.type] || [],
                    c = st.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (r = st.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(s.namespace)) && (t.handleObj = s, t.data = s.data, void 0 !== (n = ((st.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? st(o, this).index(l) > -1 : st.find(o, this, null, [l]).length), n[o] && n.push(s);
                            n.length && r.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[st.expando]) return t;
                var e, i, n, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Lt.test(o) ? this.mouseHooks : Pt.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new st.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && st.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return st.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, st.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, st.Event = function(t, e) {
            return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? p : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
        }, st.Event.prototype = {
            constructor: st.Event,
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, st.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            st.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return (!o || o !== n && !st.contains(n, o)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), st.fn.extend({
            on: function(t, e, i, n) {
                return m(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return m(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = f), this.each(function() {
                    st.event.remove(this, t, i, e)
                })
            }
        });
        var jt = /<script|<style|<link/i,
            Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Wt = /^true\/(.*)/,
            Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        st.extend({
            htmlPrefilter: function(t) {
                return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, o, s, r, a = t.cloneNode(!0),
                    l = st.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                    for (r = d(a), s = d(t), n = 0, o = s.length; o > n; n++) _(s[n], r[n]);
                if (e)
                    if (i)
                        for (s = s || d(t), r = r || d(a), n = 0, o = s.length; o > n; n++) b(s[n], r[n]);
                    else b(t, a);
                return r = d(a, "script"), r.length > 0 && u(r, !l && d(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, o = st.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (bt(i)) {
                        if (e = i[_t.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? st.event.remove(i, n) : st.removeEvent(i, n, e.handle);
                            i[_t.expando] = void 0
                        }
                        i[Tt.expando] && (i[Tt.expando] = void 0)
                    }
            }
        }), st.fn.extend({
            domManip: T,
            detach: function(t) {
                return C(this, t, !0)
            },
            remove: function(t) {
                return C(this, t)
            },
            text: function(t) {
                return wt(this, function(t) {
                    return void 0 === t ? st.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        v(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (st.cleanData(d(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return st.clone(this, t, e)
                })
            },
            html: function(t) {
                return wt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !jt.test(t) && !$t[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = st.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(d(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return T(this, arguments, function(e) {
                    var i = this.parentNode;
                    st.inArray(this, t) < 0 && (st.cleanData(d(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), st.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            st.fn[t] = function(t) {
                for (var i, n = [], o = st(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), st(o[r])[e](i), J.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ft, zt = {
                HTML: "block",
                BODY: "block"
            },
            Bt = /^margin/,
            qt = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            Ut = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Vt = function(t, e, i, n) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = i.apply(t, n || []);
                for (s in e) t.style[s] = r[s];
                return o
            },
            Qt = G.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Qt.removeChild(r)
            }
            var i, n, o, s, r = G.createElement("div"),
                a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), st.extend(nt, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), o
                },
                reliableMarginLeft: function() {
                    return null == n && e(), s
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(G.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Qt.appendChild(r), e = !parseFloat(t.getComputedStyle(i).marginRight), Qt.removeChild(r), a.removeChild(i), e
                }
            }))
        }();
        var Xt = /^(none|table(?!-c[ea]).+)/,
            Gt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Kt = ["Webkit", "O", "Moz", "ms"],
            Jt = G.createElement("div").style;
        st.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = S(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = st.camelCase(e),
                        l = t.style;
                    return e = st.cssProps[a] || (st.cssProps[a] = A(a) || a), r = st.cssHooks[e] || st.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = St.exec(i)) && o[1] && (i = c(t, e, o), s = "number"), void(null != i && i === i && ("number" === s && (i += o && o[3] || (st.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var o, s, r, a = st.camelCase(e);
                return e = st.cssProps[a] || (st.cssProps[a] = A(a) || a), r = st.cssHooks[e] || st.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = S(t, e, n)), "normal" === o && e in Yt && (o = Yt[e]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
            }
        }), st.each(["height", "width"], function(t, e) {
            st.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Xt.test(st.css(t, "display")) && 0 === t.offsetWidth ? Vt(t, Gt, function() {
                        return I(t, e, n)
                    }) : I(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var o, s = n && Ut(t),
                        r = n && D(t, e, n, "border-box" === st.css(t, "boxSizing", !1, s), s);
                    return r && (o = St.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = st.css(t, e)), O(t, i, r)
                }
            }
        }), st.cssHooks.marginLeft = k(nt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(S(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), st.cssHooks.marginRight = k(nt.reliableMarginRight, function(t, e) {
            return e ? Vt(t, {
                display: "inline-block"
            }, S, [t, "marginRight"]) : void 0
        }), st.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            st.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + kt[n] + e] = s[n] || s[n - 2] || s[0];
                    return o
                }
            }, Bt.test(t) || (st.cssHooks[t + e].set = O)
        }), st.fn.extend({
            css: function(t, e) {
                return wt(this, function(t, e, i) {
                    var n, o, s = {},
                        r = 0;
                    if (st.isArray(e)) {
                        for (n = Ut(t), o = e.length; o > r; r++) s[e[r]] = st.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    At(this) ? st(this).show() : st(this).hide()
                })
            }
        }), st.Tween = N, N.prototype = {
            constructor: N,
            init: function(t, e, i, n, o, s) {
                this.elem = t, this.prop = i, this.easing = o || st.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = N.propHooks[this.prop];
                return t && t.get ? t.get(this) : N.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = N.propHooks[this.prop];
                return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    st.fx.step[t.prop] ? st.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[st.cssProps[t.prop]] && !st.cssHooks[t.prop] ? t.elem[t.prop] = t.now : st.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, st.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, st.fx = N.prototype.init, st.fx.step = {};
        var Zt, te, ee = /^(?:toggle|show|hide)$/,
            ie = /queueHooks$/;
        st.Animation = st.extend(W, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return c(i.elem, t, St.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    st.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(vt);
                    for (var i, n = 0, o = t.length; o > n; n++) i = t[n], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e)
                },
                prefilters: [j],
                prefilter: function(t, e) {
                    e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                }
            }), st.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? st.extend({}, t) : {
                    complete: i || !i && e || st.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !st.isFunction(e) && e
                };
                return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
                }, n
            }, st.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(At).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var o = st.isEmptyObject(t),
                        s = st.speed(e, i, n),
                        r = function() {
                            var e = W(this, st.extend({}, t), s);
                            (o || _t.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = st.timers,
                            r = _t.get(this);
                        if (o) r[o] && r[o].stop && n(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && ie.test(o) && n(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                        (e || !i) && st.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = _t.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            s = st.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, st.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), st.each(["toggle", "show", "hide"], function(t, e) {
                var i = st.fn[e];
                st.fn[e] = function(t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, o)
                }
            }), st.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                st.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), st.timers = [], st.fx.tick = function() {
                var t, e = 0,
                    i = st.timers;
                for (Zt = st.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || st.fx.stop(), Zt = void 0
            }, st.fx.timer = function(t) {
                st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
            }, st.fx.interval = 13, st.fx.start = function() {
                te || (te = t.setInterval(st.fx.tick, st.fx.interval))
            }, st.fx.stop = function() {
                t.clearInterval(te), te = null
            }, st.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, st.fn.delay = function(e, i) {
                return e = st.fx ? st.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
            }();
        var ne, oe = st.expr.attrHandle;
        st.fn.extend({
            attr: function(t, e) {
                return wt(this, st.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    st.removeAttr(this, t)
                })
            }
        }), st.extend({
            attr: function(t, e, i) {
                var n, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? st.prop(t, e, i) : (1 === s && st.isXMLDoc(t) || (e = e.toLowerCase(), o = st.attrHooks[e] || (st.expr.match.bool.test(e) ? ne : void 0)), void 0 !== i ? null === i ? void st.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = st.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    s = e && e.match(vt);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), ne = {
            set: function(t, e, i) {
                return !1 === e ? st.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = oe[e] || st.find.attr;
            oe[e] = function(t, e, n) {
                var o, s;
                return n || (s = oe[e], oe[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = s), o
            }
        });
        var se = /^(?:input|select|textarea|button)$/i,
            re = /^(?:a|area)$/i;
        st.fn.extend({
            prop: function(t, e) {
                return wt(this, st.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[st.propFix[t] || t]
                })
            }
        }), st.extend({
            prop: function(t, e, i) {
                var n, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && st.isXMLDoc(t) || (e = st.propFix[e] || e, o = st.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = st.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : se.test(t.nodeName) || re.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), nt.optSelected || (st.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            st.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        st.fn.extend({
            addClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).addClass(t.call(this, e, R(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(vt) || []; i = this[l++];)
                        if (o = R(i), n = 1 === i.nodeType && (" " + o + " ").replace(ae, " ")) {
                            for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            a = st.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).removeClass(t.call(this, e, R(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(vt) || []; i = this[l++];)
                        if (o = R(i), n = 1 === i.nodeType && (" " + o + " ").replace(ae, " ")) {
                            for (r = 0; s = e[r++];)
                                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                            a = st.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function(i) {
                    st(this).toggleClass(t.call(this, i, R(this), e), e)
                }) : this.each(function() {
                    var e, n, o, s;
                    if ("string" === i)
                        for (n = 0, o = st(this), s = t.match(vt) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(void 0 === t || "boolean" === i) && (e = R(this), e && _t.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : _t.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + R(i) + " ").replace(ae, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        st.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, st(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(/\r/g, "") : null == i ? "" : i)) : void 0
            }
        }), st.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        return st.trim(t.value)
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !st.nodeName(i.parentNode, "optgroup"))) {
                                if (e = st(i).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, s = st.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = st.inArray(st.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), st.each(["radio", "checkbox"], function() {
            st.valHooks[this] = {
                set: function(t, e) {
                    return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) > -1 : void 0
                }
            }, nt.checkOn || (st.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var le = /^(?:focusinfocus|focusoutblur)$/;
        st.extend(st.event, {
            trigger: function(e, i, n, o) {
                var s, r, a, l, c, d, u, h = [n || G],
                    p = it.call(e, "type") ? e.type : e,
                    f = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !le.test(p + st.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), u = st.event.special[p] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                    if (!o && !u.noBubble && !st.isWindow(n)) {
                        for (l = u.delegateType || p, le.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
                        a === (n.ownerDocument || G) && h.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || p, d = (_t.get(r, "events") || {})[e.type] && _t.get(r, "handle"), d && d.apply(r, i), (d = c && r[c]) && d.apply && bt(r) && (e.result = d.apply(r, i), !1 === e.result && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), i) || !bt(n) || c && st.isFunction(n[p]) && !st.isWindow(n) && (a = n[c], a && (n[c] = null), st.event.triggered = p, n[p](), st.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = st.extend(new st.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                st.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
            }
        }), st.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    st.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? st.event.trigger(t, e, i, !0) : void 0
            }
        }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            st.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), st.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), nt.focusin = "onfocusin" in t, nt.focusin || st.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                st.event.simulate(e, t.target, st.event.fix(t))
            };
            st.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        o = _t.access(n, e);
                    o || n.addEventListener(t, i, !0), _t.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        o = _t.access(n, e) - 1;
                    o ? _t.access(n, e, o) : (n.removeEventListener(t, i, !0), _t.remove(n, e))
                }
            }
        });
        var ce = t.location,
            de = st.now(),
            ue = /\?/;
        st.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, st.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return (!i || i.getElementsByTagName("parsererror").length) && st.error("Invalid XML: " + e), i
        };
        var he = /([?&])_=[^&]*/,
            pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ge = /^(?:GET|HEAD)$/,
            me = {},
            ve = {},
            ye = "*/".concat("*"),
            we = G.createElement("a");
        we.href = ce.href, st.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ce.href,
                type: "GET",
                isLocal: fe.test(ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ye,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": st.parseJSON,
                    "text xml": st.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? B(B(t, st.ajaxSettings), e) : B(st.ajaxSettings, t)
            },
            ajaxPrefilter: F(me),
            ajaxTransport: F(ve),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var c, u, y, w, _, C = i;
                    2 !== b && (b = 2, l && t.clearTimeout(l), o = void 0, r = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (w = q(h, T, n)), w = U(h, w, T, c), c ? (h.ifModified && (_ = T.getResponseHeader("Last-Modified"), _ && (st.lastModified[s] = _), (_ = T.getResponseHeader("etag")) && (st.etag[s] = _)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, u = w.data, y = w.error, c = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (i || C) + "", c ? g.resolveWith(p, [u, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? u : y]), m.fireWith(p, [T, C]), d && (f.trigger("ajaxComplete", [T, h]), --st.active || st.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var o, s, r, a, l, c, d, u, h = st.ajaxSetup({}, i),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? st(p) : st.event,
                    g = st.Deferred(),
                    m = st.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    w = {},
                    b = 0,
                    _ = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; e = pe.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = w[i] = w[i] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return o && o.abort(e), n(0, e), this
                        }
                    };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, h.url = ((e || h.url || ce.href) + "").replace(/#.*$/, "").replace(/^\/\//, ce.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = st.trim(h.dataType || "*").toLowerCase().match(vt) || [""], null == h.crossDomain) {
                    c = G.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = we.protocol + "//" + we.host != c.protocol + "//" + c.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = st.param(h.data, h.traditional)), z(me, h, i, T), 2 === b) return T;
                d = st.event && h.global, d && 0 == st.active++ && st.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ge.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (ue.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = he.test(s) ? s.replace(he, "$1_=" + de++) : s + (ue.test(s) ? "&" : "?") + "_=" + de++)), h.ifModified && (st.lastModified[s] && T.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && T.setRequestHeader("If-None-Match", st.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : h.accepts["*"]);
                for (u in h.headers) T.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || 2 === b)) return T.abort();
                _ = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[u](h[u]);
                if (o = z(ve, h, i, T)) {
                    if (T.readyState = 1, d && f.trigger("ajaxSend", [T, h]), 2 === b) return T;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, o.send(y, n)
                    } catch (t) {
                        if (!(2 > b)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, i) {
                return st.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return st.get(t, void 0, e, "script")
            }
        }), st.each(["get", "post"], function(t, e) {
            st[e] = function(t, i, n, o) {
                return st.isFunction(i) && (o = o || n, n = i, i = void 0), st.ajax(st.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, st.isPlainObject(t) && t))
            }
        }), st._evalUrl = function(t) {
            return st.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, st.fn.extend({
            wrapAll: function(t) {
                var e;
                return st.isFunction(t) ? this.each(function(e) {
                    st(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = st(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return st.isFunction(t) ? this.each(function(e) {
                    st(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = st(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = st.isFunction(t);
                return this.each(function(i) {
                    st(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
                }).end()
            }
        }), st.expr.filters.hidden = function(t) {
            return !st.expr.filters.visible(t)
        }, st.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var be = /\[\]$/,
            _e = /^(?:submit|button|image|reset|file)$/i,
            Te = /^(?:input|select|textarea|keygen)/i;
        st.param = function(t, e) {
            var i, n = [],
                o = function(t, e) {
                    e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (i in t) V(i, t[i], e, o);
            return n.join("&").replace(/%20/g, "+")
        }, st.fn.extend({
            serialize: function() {
                return st.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = st.prop(this, "elements");
                    return t ? st.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !st(this).is(":disabled") && Te.test(this.nodeName) && !_e.test(t) && (this.checked || !Ot.test(t))
                }).map(function(t, e) {
                    var i = st(this).val();
                    return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(/\r?\n/g, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(/\r?\n/g, "\r\n")
                    }
                }).get()
            }
        }), st.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Ce = {
                0: 200,
                1223: 204
            },
            xe = st.ajaxSettings.xhr();
        nt.cors = !!xe && "withCredentials" in xe, nt.ajax = xe = !!xe, st.ajaxTransport(function(e) {
            var i, n;
            return nt.cors || xe && !e.crossDomain ? {
                send: function(o, s) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (r in o) a.setRequestHeader(r, o[r]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ce[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), st.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return st.globalEval(t), t
                }
            }
        }), st.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), st.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, o) {
                        e = st("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ee = [],
            Se = /(=)\?(?=&|$)|\?\?/;
        st.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ee.pop() || st.expando + "_" + de++;
                return this[t] = !0, t
            }
        }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
            var o, s, r, a = !1 !== e.jsonp && (Se.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Se.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Se, "$1" + o) : !1 !== e.jsonp && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return r || st.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
                r = arguments
            }, n.always(function() {
                void 0 === s ? st(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, Ee.push(o)), r && st.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), nt.createHTMLDocument = function() {
            var t = G.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), st.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || (nt.createHTMLDocument ? G.implementation.createHTMLDocument("") : G);
            var n = ut.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = h([t], e, o), o && o.length && st(o).remove(), st.merge([], n.childNodes))
        };
        var ke = st.fn.load;
        st.fn.load = function(t, e, i) {
            if ("string" != typeof t && ke) return ke.apply(this, arguments);
            var n, o, s, r = this,
                a = t.indexOf(" ");
            return a > -1 && (n = st.trim(t.slice(a)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && st.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                r.each(function() {
                    i.apply(r, s || [t.responseText, e, t])
                })
            }), this
        }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            st.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), st.expr.filters.animated = function(t) {
            return st.grep(st.timers, function(e) {
                return t === e.elem
            }).length
        }, st.offset = {
            setOffset: function(t, e, i) {
                var n, o, s, r, a, l, c, d = st.css(t, "position"),
                    u = st(t),
                    h = {};
                "static" === d && (t.style.position = "relative"), a = u.offset(), s = st.css(t, "top"), l = st.css(t, "left"), c = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, st.extend({}, a))), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : u.css(h)
            }
        }, st.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    st.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = n && n.ownerDocument;
                return s ? (e = s.documentElement, st.contains(e, n) ? (o = n.getBoundingClientRect(), i = Q(s), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === st.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (n = t.offset()), n.top += st.css(t[0], "borderTopWidth", !0), n.left += st.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - st.css(i, "marginTop", !0),
                        left: e.left - n.left - st.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === st.css(t, "position");) t = t.offsetParent;
                    return t || Qt
                })
            }
        }), st.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            st.fn[t] = function(n) {
                return wt(this, function(t, n, o) {
                    var s = Q(t);
                    return void 0 === o ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o)
                }, t, n, arguments.length)
            }
        }), st.each(["top", "left"], function(t, e) {
            st.cssHooks[e] = k(nt.pixelPosition, function(t, i) {
                return i ? (i = S(t, e), qt.test(i) ? st(t).position()[e] + "px" : i) : void 0
            })
        }), st.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            st.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                st.fn[n] = function(n, o) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        r = i || (!0 === n || !0 === o ? "margin" : "border");
                    return wt(this, function(e, i, n) {
                        var o;
                        return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? st.css(e, i, r) : st.style(e, i, n, r)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), st.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return st
        });
        var Ae = t.jQuery,
            Oe = t.$;
        return st.noConflict = function(e) {
            return t.$ === st && (t.$ = Oe), e && t.jQuery === st && (t.jQuery = Ae), st
        }, e || (t.jQuery = t.$ = st), st
    }), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(t, e, i) {
        function n(i) {
            var n = e.console;
            s[i] || (s[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
        }

        function o(e, o, s, r) {
            if (Object.defineProperty) try {
                return Object.defineProperty(e, o, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return n(r), s
                    },
                    set: function(t) {
                        n(r), s = t
                    }
                }), i
            } catch (t) {}
            t._definePropertyBroken = !0, e[o] = s
        }
        var s = {};
        t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
            s = {}, t.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var r = t("<input/>", {
                size: 1
            }).attr("size") && t.attrFn,
            a = t.attr,
            l = t.attrHooks.value && t.attrHooks.value.get || function() {
                return null
            },
            c = t.attrHooks.value && t.attrHooks.value.set || function() {
                return i
            },
            d = /^(?:input|button)$/i,
            u = /^[238]$/,
            h = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            p = /^(?:checked|selected)$/i;
        o(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, o, s, l) {
            var c = o.toLowerCase(),
                f = e && e.nodeType;
            return l && (4 > a.length && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(f) && (r ? o in r : t.isFunction(t.fn[o]))) ? t(e)[o](s) : ("type" === o && s !== i && d.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[c] && h.test(c) && (t.attrHooks[c] = {
                get: function(e, n) {
                    var o, s = t.prop(e, n);
                    return !0 === s || "boolean" != typeof s && (o = e.getAttributeNode(n)) && !1 !== o.nodeValue ? n.toLowerCase() : i
                },
                set: function(e, i, n) {
                    var o;
                    return !1 === i ? t.removeAttr(e, n) : (o = t.propFix[n] || n, o in e && (e[o] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, p.test(c) && n("jQuery.fn.attr('" + c + "') may use property instead of attribute")), a.call(t, e, o, s))
        }, t.attrHooks.value = {
            get: function(t, e) {
                var i = (t.nodeName || "").toLowerCase();
                return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
            },
            set: function(t, e) {
                var o = (t.nodeName || "").toLowerCase();
                return "button" === o ? c.apply(this, arguments) : ("input" !== o && "option" !== o && n("jQuery.fn.attr('value', val) no longer sets properties"), t.value = e, i)
            }
        };
        var f, g, m = t.fn.init,
            v = t.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        t.fn.init = function(e, i, o) {
            var s;
            return e && "string" == typeof e && !t.isPlainObject(i) && (s = y.exec(t.trim(e))) && s[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), s[3] && n("$(html) HTML text after last tag is ignored"), "#" === s[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? m.call(this, t.parseHTML(s[2], i, !0), i, o) : m.apply(this, arguments)
        }, t.fn.init.prototype = t.fn, t.parseJSON = function(t) {
            return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
        }, t.uaMatch = function(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        }, t.browser || (f = t.uaMatch(navigator.userAgent), g = {}, f.browser && (g[f.browser] = !0, g.version = f.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), t.browser = g), o(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function() {
            function e(t, i) {
                return new e.fn.init(t, i)
            }
            t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, o) {
                return o && o instanceof t && !(o instanceof e) && (o = e(o)), t.fn.init.call(this, n, o, i)
            }, e.fn.init.prototype = e.fn;
            var i = e(document);
            return n("jQuery.sub() is deprecated"), e
        }, t.ajaxSetup({
            converters: {
                "text json": t.parseJSON
            }
        });
        var w = t.fn.data;
        t.fn.data = function(e) {
            var o, s, r = this[0];
            return !r || "events" !== e || 1 !== arguments.length || (o = t.data(r, e), s = t._data(r, e), o !== i && o !== s || s === i) ? w.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), s)
        };
        var b = /\/(java|ecma)script/i,
            _ = t.fn.andSelf || t.fn.addBack;
        t.fn.andSelf = function() {
            return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), _.apply(this, arguments)
        }, t.clean || (t.clean = function(e, o, s, r) {
            o = o || document, o = !o.nodeType && o[0] || o, o = o.ownerDocument || o, n("jQuery.clean() is deprecated");
            var a, l, c, d, u = [];
            if (t.merge(u, t.buildFragment(e, o).childNodes), s)
                for (c = function(t) {
                        return !t.type || b.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : s.appendChild(t) : i
                    }, a = 0; null != (l = u[a]); a++) t.nodeName(l, "script") && c(l) || (s.appendChild(l), l.getElementsByTagName !== i && (d = t.grep(t.merge([], l.getElementsByTagName("script")), c), u.splice.apply(u, [a + 1, 0].concat(d)), a += d.length));
            return u
        });
        var T = t.event.add,
            C = t.event.remove,
            x = t.event.trigger,
            E = t.fn.toggle,
            S = t.fn.live,
            k = t.fn.die,
            A = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            O = RegExp("\\b(?:" + A + ")\\b"),
            D = /(?:^|\s)hover(\.\S+|)\b/,
            I = function(e) {
                return "string" != typeof e || t.event.special.hover ? e : (D.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(D, "mouseenter$1 mouseleave$1"))
            };
        t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && o(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function(t, e, i, o, s) {
            t !== document && O.test(e) && n("AJAX events should be attached to document: " + e), T.call(this, t, I(e || ""), i, o, s)
        }, t.event.remove = function(t, e, i, n, o) {
            C.call(this, t, I(e) || "", i, n, o)
        }, t.fn.error = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
        }, t.fn.toggle = function(e, i) {
            if (!t.isFunction(e) || !t.isFunction(i)) return E.apply(this, arguments);
            n("jQuery.fn.toggle(handler, handler...) is deprecated");
            var o = arguments,
                s = e.guid || t.guid++,
                r = 0,
                a = function(i) {
                    var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
                    return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), o[n].apply(this, arguments) || !1
                };
            for (a.guid = s; o.length > r;) o[r++].guid = s;
            return this.click(a)
        }, t.fn.live = function(e, i, o) {
            return n("jQuery.fn.live() is deprecated"), S ? S.apply(this, arguments) : (t(this.context).on(e, this.selector, i, o), this)
        }, t.fn.die = function(e, i) {
            return n("jQuery.fn.die() is deprecated"), k ? k.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
        }, t.event.trigger = function(t, e, i, o) {
            return i || O.test(t) || n("Global events are undocumented and deprecated"), x.call(this, t, e, i || document, o)
        }, t.each(A.split("|"), function(e, i) {
            t.event.special[i] = {
                setup: function() {
                    var e = this;
                    return e !== document && (t.event.add(document, i + "." + t.guid, function() {
                        t.event.trigger(i, null, e, !0)
                    }), t._data(this, i, t.guid++)), !1
                },
                teardown: function() {
                    return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
                }
            }
        })
    }(jQuery, window), function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
    }(this, function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var e = t.getBoundingClientRect(),
                i = {};
            for (var n in e) i[n] = e[n];
            if (t.ownerDocument !== document) {
                var s = t.ownerDocument.defaultView.frameElement;
                if (s) {
                    var r = o(s);
                    i.top += r.top, i.bottom += r.top, i.left += r.left, i.right += r.left
                }
            }
            return i
        }

        function s(t) {
            var e = getComputedStyle(t) || {},
                i = e.position,
                n = [];
            if ("fixed" === i) return [t];
            for (var o = t;
                (o = o.parentNode) && o && 1 === o.nodeType;) {
                var s = void 0;
                try {
                    s = getComputedStyle(o)
                } catch (t) {}
                if (void 0 === s || null === s) return n.push(o), n;
                var r = s,
                    a = r.overflow,
                    l = r.overflowX,
                    c = r.overflowY;
                /(auto|scroll)/.test(a + c + l) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(s.position) >= 0) && n.push(o)
            }
            return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
        }

        function r() {
            E && document.body.removeChild(E), E = null
        }

        function a(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var i = e.documentElement,
                n = o(t),
                s = A();
            return n.top -= s.top, n.left -= s.left, void 0 === n.width && (n.width = document.body.scrollWidth - n.left - n.right), void 0 === n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - i.clientTop, n.left = n.left - i.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
        }

        function l(t) {
            return t.offsetParent || document.documentElement
        }

        function c() {
            if (O) return O;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            d(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var i = t.offsetWidth;
            e.style.overflow = "scroll";
            var n = t.offsetWidth;
            i === n && (n = e.clientWidth), document.body.removeChild(e);
            var o = i - n;
            return O = {
                width: o,
                height: o
            }
        }

        function d() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
                if (e)
                    for (var i in e)({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
            }), t
        }

        function u(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e)
            });
            else {
                var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    n = f(t).replace(i, " ");
                g(t, n)
            }
        }

        function h(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e)
            });
            else {
                u(t, e);
                var i = f(t) + " " + e;
                g(t, i)
            }
        }

        function p(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var i = f(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(i)
        }

        function f(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }

        function g(t, e) {
            t.setAttribute("class", e)
        }

        function m(t, e, i) {
            i.forEach(function(i) {
                -1 === e.indexOf(i) && p(t, i) && u(t, i)
            }), e.forEach(function(e) {
                p(t, e) || h(t, e)
            })
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function v(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function y(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + i >= e && e >= t - i
        }

        function w() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
        }

        function b() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            return i.forEach(function(e) {
                var i = e.top,
                    n = e.left;
                "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += i, t.left += n
            }), t
        }

        function _(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }

        function T(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function() {
                var t = e,
                    i = a(e),
                    n = i,
                    o = getComputedStyle(e);
                if (e = [n.left, n.top, i.width + n.left, i.height + n.top], t.ownerDocument !== document) {
                    var s = t.ownerDocument.defaultView;
                    e[0] += s.pageXOffset, e[1] += s.pageYOffset, e[2] += s.pageXOffset, e[3] += s.pageYOffset
                }
                G.forEach(function(t, i) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[i] += parseFloat(o["border" + t + "Width"]) : e[i] -= parseFloat(o["border" + t + "Width"])
                })
            }(), e
        }
        var C = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            x = void 0;
        void 0 === x && (x = {
            modules: []
        });
        var E = null,
            S = function() {
                var t = 0;
                return function() {
                    return ++t
                }
            }(),
            k = {},
            A = function() {
                var t = E;
                t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", S()), d(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), E = t);
                var e = t.getAttribute("data-tether-id");
                return void 0 === k[e] && (k[e] = o(t), I(function() {
                    delete k[e]
                })), k[e]
            },
            O = null,
            D = [],
            I = function(t) {
                D.push(t)
            },
            $ = function() {
                for (var t = void 0; t = D.pop();) t()
            },
            N = function() {
                function t() {
                    n(this, t)
                }
                return C(t, [{
                    key: "on",
                    value: function(t, e, i) {
                        var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: i,
                            once: n
                        })
                    }
                }, {
                    key: "once",
                    value: function(t, e, i) {
                        this.on(t, e, i, !0)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                            if (void 0 === e) delete this.bindings[t];
                            else
                                for (var i = 0; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        if (void 0 !== this.bindings && this.bindings[t]) {
                            for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                            for (; e < this.bindings[t].length;) {
                                var s = this.bindings[t][e],
                                    r = s.handler,
                                    a = s.ctx,
                                    l = s.once,
                                    c = a;
                                void 0 === c && (c = this), r.apply(c, n), l ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        x.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: s,
            getBounds: a,
            getOffsetParent: l,
            extend: d,
            addClass: h,
            removeClass: u,
            hasClass: p,
            updateClasses: m,
            defer: I,
            flush: $,
            uniqueId: S,
            Evented: N,
            getScrollBarSize: c,
            removeUtilElements: r
        };
        var P = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        s = void 0;
                    try {
                        for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                        o = !0, s = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            C = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            L = function(t, e, i) {
                for (var n = !0; n;) {
                    var o = t,
                        s = e,
                        r = i;
                    n = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, s);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(r)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return;
                    t = c, e = s, i = r, n = !0, a = c = void 0
                }
            };
        if (void 0 === x) throw new Error("You must include the utils.js file before tether.js");
        var H = x.Utils,
            s = H.getScrollParents,
            a = H.getBounds,
            l = H.getOffsetParent,
            d = H.extend,
            h = H.addClass,
            u = H.removeClass,
            m = H.updateClasses,
            I = H.defer,
            $ = H.flush,
            c = H.getScrollBarSize,
            r = H.removeUtilElements,
            j = function() {
                if ("undefined" == typeof document) return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
                    var n = e[i];
                    if (void 0 !== t.style[n]) return n
                }
            }(),
            M = [],
            W = function() {
                M.forEach(function(t) {
                    t.position(!1)
                }), $()
            };
        ! function() {
            var t = null,
                e = null,
                i = null,
                n = function n() {
                    return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void(i = setTimeout(n, 250))) : void(void 0 !== t && w() - t < 10 || (null != i && (clearTimeout(i), i = null), t = w(), W(), e = w() - t))
                };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
                window.addEventListener(t, n)
            })
        }();
        var R = {
                center: "center",
                left: "right",
                right: "left"
            },
            F = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            z = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            B = function(t, e) {
                var i = t.left,
                    n = t.top;
                return "auto" === i && (i = R[e.left]), "auto" === n && (n = F[e.top]), {
                    left: i,
                    top: n
                }
            },
            q = function(t) {
                var e = t.left,
                    i = t.top;
                return void 0 !== z[t.left] && (e = z[t.left]), void 0 !== z[t.top] && (i = z[t.top]), {
                    left: e,
                    top: i
                }
            },
            U = function(t) {
                var e = t.split(" "),
                    i = P(e, 2);
                return {
                    top: i[0],
                    left: i[1]
                }
            },
            V = U,
            Q = function(t) {
                function e(t) {
                    var i = this;
                    n(this, e), L(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), M.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                        void 0 !== t.initialize && t.initialize.call(i)
                    }), this.position()
                }
                return v(e, t), C(e, [{
                    key: "getClass",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function(t) {
                        var e = this,
                            i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            n = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = d(n, t);
                        var o = this.options,
                            r = o.element,
                            a = o.target,
                            l = o.targetModifier;
                        if (this.element = r, this.target = a, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                                if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                                void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = V(this.options.targetAttachment), this.attachment = V(this.options.attachment), this.offset = U(this.options.offset), this.targetOffset = U(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = s(this.target), !1 !== this.options.enabled && this.enable(i)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if (void 0 === this.targetModifier) return a(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var t = a(this.target),
                                e = {
                                    height: t.height,
                                    width: t.width,
                                    top: t.top,
                                    left: t.left
                                };
                            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                i = this.target;
                            i === document.body ? (i = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = a(i);
                            var n = getComputedStyle(i),
                                o = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                s = 0;
                            o && (s = 15);
                            var r = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - s,
                                e = {
                                    width: 15,
                                    height: .975 * r * (r / i.scrollHeight),
                                    left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                                },
                                l = 0;
                            r < 408 && this.target === document.body && (l = -11e-5 * Math.pow(r, 2) - .00727 * r + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                            var c = this.target.scrollTop / (i.scrollHeight - r);
                            return e.top = c * (r - e.height - l) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(t, e) {
                        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var t = this;
                        u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        this.disable(), M.forEach(function(e, i) {
                            e === t && M.splice(i, 1)
                        }), 0 === M.length && r()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(t, e) {
                        var i = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        var n = ["left", "top", "bottom", "right", "middle", "center"];
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var o = this._addAttachClasses;
                        t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                        var s = [];
                        n.forEach(function(t) {
                            s.push(i.getClass("element-attached") + "-" + t), s.push(i.getClass("target-attached") + "-" + t)
                        }), I(function() {
                            void 0 !== i._addAttachClasses && (m(i.element, i._addAttachClasses, s), !1 !== i.options.addTargetClasses && m(i.target, i._addAttachClasses, s), delete i._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var i = B(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, i);
                            var n = this.cache("element-bounds", function() {
                                    return a(t.element)
                                }),
                                o = n.width,
                                s = n.height;
                            if (0 === o && 0 === s && void 0 !== this.lastSize) {
                                var r = this.lastSize;
                                o = r.width, s = r.height
                            } else this.lastSize = {
                                width: o,
                                height: s
                            };
                            var d = this.cache("target-bounds", function() {
                                    return t.getTargetBounds()
                                }),
                                u = d,
                                h = _(q(this.attachment), {
                                    width: o,
                                    height: s
                                }),
                                p = _(q(i), u),
                                f = _(this.offset, {
                                    width: o,
                                    height: s
                                }),
                                g = _(this.targetOffset, u);
                            h = b(h, f), p = b(p, g);
                            for (var m = d.left + p.left - h.left, v = d.top + p.top - h.top, y = 0; y < x.modules.length; ++y) {
                                var w = x.modules[y],
                                    T = w.position.call(this, {
                                        left: m,
                                        top: v,
                                        targetAttachment: i,
                                        targetPos: d,
                                        elementPos: n,
                                        offset: h,
                                        targetOffset: p,
                                        manualOffset: f,
                                        manualTargetOffset: g,
                                        scrollbarSize: k,
                                        attachment: this.attachment
                                    });
                                if (!1 === T) return !1;
                                void 0 !== T && "object" == typeof T && (v = T.top, m = T.left)
                            }
                            var C = {
                                    page: {
                                        top: v,
                                        left: m
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - s + innerHeight,
                                        left: m - pageXOffset,
                                        right: pageXOffset - m - o + innerWidth
                                    }
                                },
                                E = this.target.ownerDocument,
                                S = E.defaultView,
                                k = void 0;
                            return S.innerHeight > E.documentElement.clientHeight && (k = this.cache("scrollbar-size", c), C.viewport.bottom -= k.height), S.innerWidth > E.documentElement.clientWidth && (k = this.cache("scrollbar-size", c), C.viewport.right -= k.width), -1 !== ["", "static"].indexOf(E.body.style.position) && -1 !== ["", "static"].indexOf(E.body.parentElement.style.position) || (C.page.bottom = E.body.scrollHeight - v - s, C.page.right = E.body.scrollWidth - m - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                                var e = t.cache("target-offsetparent", function() {
                                        return l(t.target)
                                    }),
                                    i = t.cache("target-offsetparent-bounds", function() {
                                        return a(e)
                                    }),
                                    n = getComputedStyle(e),
                                    o = i,
                                    s = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                        s[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                                    }), i.right = E.body.scrollWidth - i.left - o.width + s.right, i.bottom = E.body.scrollHeight - i.top - o.height + s.bottom, C.page.top >= i.top + s.top && C.page.bottom >= i.bottom && C.page.left >= i.left + s.left && C.page.right >= i.right) {
                                    var r = e.scrollTop,
                                        c = e.scrollLeft;
                                    C.offset = {
                                        top: C.page.top - i.top + r - s.top,
                                        left: C.page.left - i.left + c - s.left
                                    }
                                }
                            }(), this.move(C), this.history.unshift(C), this.history.length > 3 && this.history.pop(), e && $(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(t) {
                        var e = this;
                        if (void 0 !== this.element.parentNode) {
                            var i = {};
                            for (var n in t) {
                                i[n] = {};
                                for (var o in t[n]) {
                                    for (var s = !1, r = 0; r < this.history.length; ++r) {
                                        var a = this.history[r];
                                        if (void 0 !== a[n] && !y(a[n][o], t[n][o])) {
                                            s = !0;
                                            break
                                        }
                                    }
                                    s || (i[n][o] = !0)
                                }
                            }
                            var c = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                u = function(t, i) {
                                    if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                        var n = void 0,
                                            o = void 0;
                                        t.top ? (c.top = 0, n = i.top) : (c.bottom = 0, n = -i.bottom), t.left ? (c.left = 0, o = i.left) : (c.right = 0, o = -i.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), n = Math.round(n))), c[j] = "translateX(" + o + "px) translateY(" + n + "px)", "msTransform" !== j && (c[j] += " translateZ(0)")
                                    } else t.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px", t.left ? c.left = i.left + "px" : c.right = i.right + "px"
                                },
                                h = !1;
                            if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute", u(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed", u(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function() {
                                    c.position = "absolute";
                                    var n = e.cache("target-offsetparent", function() {
                                        return l(e.target)
                                    });
                                    l(e.element) !== n && I(function() {
                                        e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                                    }), u(i.offset, t.offset), h = !0
                                }() : (c.position = "absolute", u({
                                    top: !0,
                                    left: !0
                                }, t.page)), !h)
                                if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var p = !0, f = this.element.parentNode; f && 1 === f.nodeType && "BODY" !== f.tagName;) {
                                        if ("static" !== getComputedStyle(f).position) {
                                            p = !1;
                                            break
                                        }
                                        f = f.parentNode
                                    }
                                    p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                }
                            var g = {},
                                m = !1;
                            for (var o in c) {
                                var v = c[o];
                                this.element.style[o] !== v && (m = !0, g[o] = v)
                            }
                            m && I(function() {
                                d(e.element.style, g), e.trigger("repositioned")
                            })
                        }
                    }
                }]), e
            }(N);
        Q.modules = [], x.position = W;
        var X = d(Q, x),
            P = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        s = void 0;
                    try {
                        for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                        o = !0, s = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            H = x.Utils,
            a = H.getBounds,
            d = H.extend,
            m = H.updateClasses,
            I = H.defer,
            G = ["left", "top", "right", "bottom"];
        x.modules.push({
            position: function(t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var s = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    r = s.height,
                    l = s.width;
                if (0 === l && 0 === r && void 0 !== this.lastSize) {
                    var c = this.lastSize;
                    l = c.width, r = c.height
                }
                var u = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    }),
                    h = u.height,
                    p = u.width,
                    f = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass,
                        i = t.pinnedClass;
                    e && f.push(e), i && f.push(i)
                }), f.forEach(function(t) {
                    ["left", "top", "right", "bottom"].forEach(function(e) {
                        f.push(t + "-" + e)
                    })
                });
                var g = [],
                    v = d({}, o),
                    y = d({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var s = t.to,
                        a = t.attachment,
                        c = t.pin;
                    void 0 === a && (a = "");
                    var d = void 0,
                        u = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var f = a.split(" "),
                            m = P(f, 2);
                        u = m[0], d = m[1]
                    } else d = u = a;
                    var w = T(e, s);
                    "target" !== u && "both" !== u || (i < w[1] && "top" === v.top && (i += h, v.top = "bottom"), i + r > w[3] && "bottom" === v.top && (i -= h, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && i < w[1] ? (i += h, v.top = "bottom", i += r, y.top = "top") : "top" === y.top && i + r > w[3] && i - (r - h) >= w[1] && (i -= r - h, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && i + r > w[3] ? (i -= h, v.top = "top", i -= r, y.top = "bottom") : "bottom" === y.top && i < w[1] && i + (2 * r - h) <= w[3] && (i += r - h, v.top = "top", y.top = "top")), "middle" === v.top && (i + r > w[3] && "top" === y.top ? (i -= r, y.top = "bottom") : i < w[1] && "bottom" === y.top && (i += r, y.top = "top"))), "target" !== d && "both" !== d || (n < w[0] && "left" === v.left && (n += p, v.left = "right"), n + l > w[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === d && (n < w[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += l, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= l, y.left = "right") : n + l > w[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= l, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += l, y.left = "left") : "center" === v.left && (n + l > w[2] && "left" === y.left ? (n -= l, y.left = "right") : n < w[0] && "right" === y.left && (n += l, y.left = "left"))), "element" !== u && "both" !== u || (i < w[1] && "bottom" === y.top && (i += r, y.top = "top"), i + r > w[3] && "top" === y.top && (i -= r, y.top = "bottom")), "element" !== d && "both" !== d || (n < w[0] && ("right" === y.left ? (n += l, y.left = "left") : "center" === y.left && (n += l / 2, y.left = "left")), n + l > w[2] && ("left" === y.left ? (n -= l, y.left = "right") : "center" === y.left && (n -= l / 2, y.left = "right"))), "string" == typeof c ? c = c.split(",").map(function(t) {
                        return t.trim()
                    }) : !0 === c && (c = ["top", "left", "right", "bottom"]), c = c || [];
                    var b = [],
                        _ = [];
                    i < w[1] && (c.indexOf("top") >= 0 ? (i = w[1], b.push("top")) : _.push("top")), i + r > w[3] && (c.indexOf("bottom") >= 0 ? (i = w[3] - r, b.push("bottom")) : _.push("bottom")), n < w[0] && (c.indexOf("left") >= 0 ? (n = w[0], b.push("left")) : _.push("left")), n + l > w[2] && (c.indexOf("right") >= 0 ? (n = w[2] - l, b.push("right")) : _.push("right")), b.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), b.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), _.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), _.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && (y.left = v.left = !1), (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === o.top && v.left === o.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }), I(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, g, f), m(e.element, g, f)
                }), {
                    top: i,
                    left: n
                }
            }
        });
        var H = x.Utils,
            a = H.getBounds,
            m = H.updateClasses,
            I = H.defer;
        x.modules.push({
            position: function(t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    s = o.height,
                    r = o.width,
                    l = this.getTargetBounds(),
                    c = i + s,
                    d = n + r,
                    u = [];
                i <= l.bottom && c >= l.top && ["left", "right"].forEach(function(t) {
                    var e = l[t];
                    e !== n && e !== d || u.push(t)
                }), n <= l.right && d >= l.left && ["top", "bottom"].forEach(function(t) {
                    var e = l[t];
                    e !== i && e !== c || u.push(t)
                });
                var h = [],
                    p = [],
                    f = ["left", "top", "right", "bottom"];
                return h.push(this.getClass("abutted")), f.forEach(function(t) {
                    h.push(e.getClass("abutted") + "-" + t)
                }), u.length && p.push(this.getClass("abutted")), u.forEach(function(t) {
                    p.push(e.getClass("abutted") + "-" + t)
                }), I(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, p, h), m(e.element, p, h)
                }), !0
            }
        });
        var P = function() {
            function t(t, e) {
                var i = [],
                    n = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
                } catch (t) {
                    o = !0, s = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw s
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return x.modules.push({
            position: function(t) {
                var e = t.top,
                    i = t.left;
                if (this.options.shift) {
                    var n = this.options.shift;
                    "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                        top: e,
                        left: i
                    }));
                    var o = void 0,
                        s = void 0;
                    if ("string" == typeof n) {
                        n = n.split(" "), n[1] = n[1] || n[0];
                        var r = n,
                            a = P(r, 2);
                        o = a[0], s = a[1], o = parseFloat(o, 10), s = parseFloat(s, 10)
                    } else o = n.top, s = n.left;
                    return e += o, i += s, {
                        top: e,
                        left: i
                    }
                }
            }
        }), X
    }), void 0 === jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery),
function() {
    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function i(t) {
                return (t[0] || t).nodeType
            }

            function n() {
                return {
                    bindType: r.end,
                    delegateType: r.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function o() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in a)
                    if (void 0 !== t.style[e]) return {
                        end: a[e]
                    };
                return !1
            }

            function s(e) {
                var i = this,
                    n = !1;
                return t(this).one(l.TRANSITION_END, function() {
                    n = !0
                }), setTimeout(function() {
                    n || l.triggerTransitionEnd(i)
                }, e), this
            }
            var r = !1,
                a = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(r.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(r)
                    },
                    typeCheckConfig: function(t, n, o) {
                        for (var s in o)
                            if (o.hasOwnProperty(s)) {
                                var r = o[s],
                                    a = n[s],
                                    l = a && i(a) ? "element" : e(a);
                                if (!new RegExp(r).test(l)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
                            }
                    }
                };
            return function() {
                r = o(), t.fn.emulateTransitionEnd = s, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = n())
            }(), l
        }(jQuery),
        r = (function(t) {
            var e = "alert",
                n = "bs.alert",
                r = "." + n,
                a = t.fn[e],
                l = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                c = {
                    CLOSE: "close" + r,
                    CLOSED: "closed" + r,
                    CLICK_DATA_API: "click" + r + ".data-api"
                },
                d = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                u = function() {
                    function e(t) {
                        i(this, e), this._element = t
                    }
                    return e.prototype.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, n), this._element = null
                    }, e.prototype._getRootElement = function(e) {
                        var i = s.getSelectorFromElement(e),
                            n = !1;
                        return i && (n = t(i)[0]), n || (n = t(e).closest("." + d.ALERT)[0]), n
                    }, e.prototype._triggerCloseEvent = function(e) {
                        var i = t.Event(c.CLOSE);
                        return t(e).trigger(i), i
                    }, e.prototype._removeElement = function(e) {
                        var i = this;
                        return t(e).removeClass(d.SHOW), s.supportsTransitionEnd() && t(e).hasClass(d.FADE) ? void t(e).one(s.TRANSITION_END, function(t) {
                            return i._destroyElement(e, t)
                        }).emulateTransitionEnd(150) : void this._destroyElement(e)
                    }, e.prototype._destroyElement = function(e) {
                        t(e).detach().trigger(c.CLOSED).remove()
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = t(this),
                                s = o.data(n);
                            s || (s = new e(this), o.data(n, s)), "close" === i && s[i](this)
                        })
                    }, e._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), e
                }();
            t(document).on(c.CLICK_DATA_API, l.DISMISS, u._handleDismiss(new u)), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
                return t.fn[e] = a, u._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "button",
                n = "bs.button",
                s = "." + n,
                r = ".data-api",
                a = t.fn[e],
                l = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                c = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                d = {
                    CLICK_DATA_API: "click" + s + r,
                    FOCUS_BLUR_DATA_API: "focus" + s + r + " blur" + s + r
                },
                u = function() {
                    function e(t) {
                        i(this, e), this._element = t
                    }
                    return e.prototype.toggle = function() {
                        var e = !0,
                            i = t(this._element).closest(c.DATA_TOGGLE)[0];
                        if (i) {
                            var n = t(this._element).find(c.INPUT)[0];
                            if (n) {
                                if ("radio" === n.type)
                                    if (n.checked && t(this._element).hasClass(l.ACTIVE)) e = !1;
                                    else {
                                        var o = t(i).find(c.ACTIVE)[0];
                                        o && t(o).removeClass(l.ACTIVE)
                                    }
                                e && (n.checked = !t(this._element).hasClass(l.ACTIVE), t(n).trigger("change")), n.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !t(this._element).hasClass(l.ACTIVE)), e && t(this._element).toggleClass(l.ACTIVE)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, n), this._element = null
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = t(this).data(n);
                            o || (o = new e(this), t(this).data(n, o)), "toggle" === i && o[i]()
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), e
                }();
            t(document).on(d.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var i = e.target;
                t(i).hasClass(l.BUTTON) || (i = t(i).closest(c.BUTTON)), u._jQueryInterface.call(t(i), "toggle")
            }).on(d.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                var i = t(e.target).closest(c.BUTTON)[0];
                t(i).toggleClass(l.FOCUS, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
                return t.fn[e] = a, u._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "carousel",
                r = "bs.carousel",
                a = "." + r,
                l = ".data-api",
                c = t.fn[e],
                d = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                u = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                p = {
                    SLIDE: "slide" + a,
                    SLID: "slid" + a,
                    KEYDOWN: "keydown" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a,
                    LOAD_DATA_API: "load" + a + l,
                    CLICK_DATA_API: "click" + a + l
                },
                f = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                g = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                m = function() {
                    function l(e, n) {
                        i(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(g.INDICATORS)[0], this._addEventListeners()
                    }
                    return l.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(h.NEXT)
                    }, l.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, l.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(h.PREVIOUS)
                    }, l.prototype.pause = function(e) {
                        e || (this._isPaused = !0), t(this._element).find(g.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, l.prototype.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, l.prototype.to = function(e) {
                        var i = this;
                        this._activeElement = t(this._element).find(g.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) {
                            if (this._isSliding) return void t(this._element).one(p.SLID, function() {
                                return i.to(e)
                            });
                            if (n === e) return this.pause(), void this.cycle();
                            var o = e > n ? h.NEXT : h.PREVIOUS;
                            this._slide(o, this._items[e])
                        }
                    }, l.prototype.dispose = function() {
                        t(this._element).off(a), t.removeData(this._element, r), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, l.prototype._getConfig = function(i) {
                        return i = t.extend({}, d, i), s.typeCheckConfig(e, i, u), i
                    }, l.prototype._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(p.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(p.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(p.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        })
                    }, l.prototype._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, l.prototype._getItemIndex = function(e) {
                        return this._items = t.makeArray(t(e).parent().find(g.ITEM)), this._items.indexOf(e)
                    }, l.prototype._getItemByDirection = function(t, e) {
                        var i = t === h.NEXT,
                            n = t === h.PREVIOUS,
                            o = this._getItemIndex(e),
                            s = this._items.length - 1;
                        if ((n && 0 === o || i && o === s) && !this._config.wrap) return e;
                        var r = t === h.PREVIOUS ? -1 : 1,
                            a = (o + r) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                    }, l.prototype._triggerSlideEvent = function(e, i) {
                        var n = t.Event(p.SLIDE, {
                            relatedTarget: e,
                            direction: i
                        });
                        return t(this._element).trigger(n), n
                    }, l.prototype._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(g.ACTIVE).removeClass(f.ACTIVE);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass(f.ACTIVE)
                        }
                    }, l.prototype._slide = function(e, i) {
                        var n = this,
                            o = t(this._element).find(g.ACTIVE_ITEM)[0],
                            r = i || o && this._getItemByDirection(e, o),
                            a = Boolean(this._interval),
                            l = void 0,
                            c = void 0,
                            d = void 0;
                        if (e === h.NEXT ? (l = f.LEFT, c = f.NEXT, d = h.LEFT) : (l = f.RIGHT, c = f.PREV, d = h.RIGHT), r && t(r).hasClass(f.ACTIVE)) return void(this._isSliding = !1);
                        if (!this._triggerSlideEvent(r, d).isDefaultPrevented() && o && r) {
                            this._isSliding = !0, a && this.pause(),
                                this._setActiveIndicatorElement(r);
                            var u = t.Event(p.SLID, {
                                relatedTarget: r,
                                direction: d
                            });
                            s.supportsTransitionEnd() && t(this._element).hasClass(f.SLIDE) ? (t(r).addClass(c), s.reflow(r), t(o).addClass(l), t(r).addClass(l), t(o).one(s.TRANSITION_END, function() {
                                t(r).removeClass(l + " " + c).addClass(f.ACTIVE), t(o).removeClass(f.ACTIVE + " " + c + " " + l), n._isSliding = !1, setTimeout(function() {
                                    return t(n._element).trigger(u)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (t(o).removeClass(f.ACTIVE), t(r).addClass(f.ACTIVE), this._isSliding = !1, t(this._element).trigger(u)), a && this.cycle()
                        }
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(r),
                                o = t.extend({}, d, t(this).data());
                            "object" === (void 0 === e ? "undefined" : n(e)) && t.extend(o, e);
                            var s = "string" == typeof e ? e : o.slide;
                            if (i || (i = new l(this, o), t(this).data(r, i)), "number" == typeof e) i.to(e);
                            else if ("string" == typeof s) {
                                if (void 0 === i[s]) throw new Error('No method named "' + s + '"');
                                i[s]()
                            } else o.interval && (i.pause(), i.cycle())
                        })
                    }, l._dataApiClickHandler = function(e) {
                        var i = s.getSelectorFromElement(this);
                        if (i) {
                            var n = t(i)[0];
                            if (n && t(n).hasClass(f.CAROUSEL)) {
                                var o = t.extend({}, t(n).data(), t(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (o.interval = !1), l._jQueryInterface.call(t(n), o), a && t(n).data(r).to(a), e.preventDefault()
                            }
                        }
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }]), l
                }();
            t(document).on(p.CLICK_DATA_API, g.DATA_SLIDE, m._dataApiClickHandler), t(window).on(p.LOAD_DATA_API, function() {
                t(g.DATA_RIDE).each(function() {
                    var e = t(this);
                    m._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = c, m._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "collapse",
                r = "bs.collapse",
                a = "." + r,
                l = t.fn[e],
                c = {
                    toggle: !0,
                    parent: ""
                },
                d = {
                    toggle: "boolean",
                    parent: "string"
                },
                u = {
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    CLICK_DATA_API: "click" + a + ".data-api"
                },
                h = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                p = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                f = {
                    ACTIVES: ".card > .show, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                g = function() {
                    function a(e, n) {
                        i(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return a.prototype.toggle = function() {
                        t(this._element).hasClass(h.SHOW) ? this.hide() : this.show()
                    }, a.prototype.show = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!t(this._element).hasClass(h.SHOW)) {
                            var i = void 0,
                                n = void 0;
                            if (this._parent && (i = t.makeArray(t(this._parent).find(f.ACTIVES)), i.length || (i = null)), !(i && (n = t(i).data(r)) && n._isTransitioning)) {
                                var o = t.Event(u.SHOW);
                                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    i && (a._jQueryInterface.call(t(i), "hide"), n || t(i).data(r, null));
                                    var l = this._getDimension();
                                    t(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var c = function() {
                                        t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(u.SHOWN)
                                    };
                                    if (!s.supportsTransitionEnd()) return void c();
                                    var d = l[0].toUpperCase() + l.slice(1),
                                        p = "scroll" + d;
                                    t(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[p] + "px"
                                }
                            }
                        }
                    }, a.prototype.hide = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (t(this._element).hasClass(h.SHOW)) {
                            var i = t.Event(u.HIDE);
                            if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var n = this._getDimension(),
                                    o = n === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[n] = this._element[o] + "px", s.reflow(this._element), t(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(h.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var r = function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(u.HIDDEN)
                                };
                                return this._element.style[n] = "", s.supportsTransitionEnd() ? void t(this._element).one(s.TRANSITION_END, r).emulateTransitionEnd(600) : void r()
                            }
                        }
                    }, a.prototype.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, a.prototype.dispose = function() {
                        t.removeData(this._element, r), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, a.prototype._getConfig = function(i) {
                        return i = t.extend({}, c, i), i.toggle = Boolean(i.toggle), s.typeCheckConfig(e, i, d), i
                    }, a.prototype._getDimension = function() {
                        return t(this._element).hasClass(p.WIDTH) ? p.WIDTH : p.HEIGHT
                    }, a.prototype._getParent = function() {
                        var e = this,
                            i = t(this._config.parent)[0],
                            n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(i).find(n).each(function(t, i) {
                            e._addAriaAndCollapsedClass(a._getTargetFromElement(i), [i])
                        }), i
                    }, a.prototype._addAriaAndCollapsedClass = function(e, i) {
                        if (e) {
                            var n = t(e).hasClass(h.SHOW);
                            e.setAttribute("aria-expanded", n), i.length && t(i).toggleClass(h.COLLAPSED, !n).attr("aria-expanded", n)
                        }
                    }, a._getTargetFromElement = function(e) {
                        var i = s.getSelectorFromElement(e);
                        return i ? t(i)[0] : null
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(r),
                                s = t.extend({}, c, i.data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                            if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || (o = new a(this, s), i.data(r, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, o(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), a
                }();
            t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var i = g._getTargetFromElement(this),
                    n = t(i).data(r),
                    o = n ? "toggle" : t(this).data();
                g._jQueryInterface.call(t(i), o)
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = l, g._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "dropdown",
                n = "bs.dropdown",
                r = "." + n,
                a = ".data-api",
                l = t.fn[e],
                c = {
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    CLICK: "click" + r,
                    CLICK_DATA_API: "click" + r + a,
                    FOCUSIN_DATA_API: "focusin" + r + a,
                    KEYDOWN_DATA_API: "keydown" + r + a
                },
                d = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    SHOW: "show"
                },
                u = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                h = function() {
                    function e(t) {
                        i(this, e), this._element = t, this._addEventListeners()
                    }
                    return e.prototype.toggle = function() {
                        if (this.disabled || t(this).hasClass(d.DISABLED)) return !1;
                        var i = e._getParentFromElement(this),
                            n = t(i).hasClass(d.SHOW);
                        if (e._clearMenus(), n) return !1;
                        if ("ontouchstart" in document.documentElement && !t(i).closest(u.NAVBAR_NAV).length) {
                            var o = document.createElement("div");
                            o.className = d.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                        }
                        var s = {
                                relatedTarget: this
                            },
                            r = t.Event(c.SHOW, s);
                        return t(i).trigger(r), !r.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(i).toggleClass(d.SHOW), t(i).trigger(t.Event(c.SHOWN, s)), !1)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, n), t(this._element).off(r), this._element = null
                    }, e.prototype._addEventListeners = function() {
                        t(this._element).on(c.CLICK, this.toggle)
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = t(this).data(n);
                            if (o || (o = new e(this), t(this).data(n, o)), "string" == typeof i) {
                                if (void 0 === o[i]) throw new Error('No method named "' + i + '"');
                                o[i].call(this)
                            }
                        })
                    }, e._clearMenus = function(i) {
                        if (!i || 3 !== i.which) {
                            var n = t(u.BACKDROP)[0];
                            n && n.parentNode.removeChild(n);
                            for (var o = t.makeArray(t(u.DATA_TOGGLE)), s = 0; s < o.length; s++) {
                                var r = e._getParentFromElement(o[s]),
                                    a = {
                                        relatedTarget: o[s]
                                    };
                                if (t(r).hasClass(d.SHOW) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "focusin" === i.type) && t.contains(r, i.target))) {
                                    var l = t.Event(c.HIDE, a);
                                    t(r).trigger(l), l.isDefaultPrevented() || (o[s].setAttribute("aria-expanded", "false"), t(r).removeClass(d.SHOW).trigger(t.Event(c.HIDDEN, a)))
                                }
                            }
                        }
                    }, e._getParentFromElement = function(e) {
                        var i = void 0,
                            n = s.getSelectorFromElement(e);
                        return n && (i = t(n)[0]), i || e.parentNode
                    }, e._dataApiKeydownHandler = function(i) {
                        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(d.DISABLED))) {
                            var n = e._getParentFromElement(this),
                                o = t(n).hasClass(d.SHOW);
                            if (!o && 27 !== i.which || o && 27 === i.which) {
                                if (27 === i.which) {
                                    var s = t(n).find(u.DATA_TOGGLE)[0];
                                    t(s).trigger("focus")
                                }
                                return void t(this).trigger("click")
                            }
                            var r = t(n).find(u.VISIBLE_ITEMS).get();
                            if (r.length) {
                                var a = r.indexOf(i.target);
                                38 === i.which && a > 0 && a--, 40 === i.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), e
                }();
            t(document).on(c.KEYDOWN_DATA_API, u.DATA_TOGGLE, h._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, u.ROLE_MENU, h._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, u.ROLE_LISTBOX, h._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.FOCUSIN_DATA_API, h._clearMenus).on(c.CLICK_DATA_API, u.DATA_TOGGLE, h.prototype.toggle).on(c.CLICK_DATA_API, u.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function() {
                return t.fn[e] = l, h._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "modal",
                r = "bs.modal",
                a = "." + r,
                l = t.fn[e],
                c = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                d = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                u = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    FOCUSIN: "focusin" + a,
                    RESIZE: "resize" + a,
                    CLICK_DISMISS: "click.dismiss" + a,
                    KEYDOWN_DISMISS: "keydown.dismiss" + a,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                    CLICK_DATA_API: "click" + a + ".data-api"
                },
                h = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                p = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                f = function() {
                    function l(e, n) {
                        i(this, l), this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return l.prototype.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, l.prototype.show = function(e) {
                        var i = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
                        var n = t.Event(u.SHOW, {
                            relatedTarget: e
                        });
                        t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, p.DATA_DISMISS, function(t) {
                            return i.hide(t)
                        }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                            t(i._element).one(u.MOUSEUP_DISMISS, function(e) {
                                t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return i._showElement(e)
                        }))
                    }, l.prototype.hide = function(e) {
                        var i = this;
                        if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var n = s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
                        n && (this._isTransitioning = !0);
                        var o = t.Event(u.HIDE);
                        t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(h.SHOW), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), n ? t(this._element).one(s.TRANSITION_END, function(t) {
                            return i._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal())
                    }, l.prototype.dispose = function() {
                        t.removeData(this._element, r), t(window, document, this._element, this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, l.prototype._getConfig = function(i) {
                        return i = t.extend({}, c, i), s.typeCheckConfig(e, i, d), i
                    }, l.prototype._showElement = function(e) {
                        var i = this,
                            n = s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && s.reflow(this._element), t(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();
                        var o = t.Event(u.SHOWN, {
                                relatedTarget: e
                            }),
                            r = function() {
                                i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(o)
                            };
                        n ? t(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                    }, l.prototype._enforceFocus = function() {
                        var e = this;
                        t(document).off(u.FOCUSIN).on(u.FOCUSIN, function(i) {
                            document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
                        })
                    }, l.prototype._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) {
                            27 === t.which && e.hide()
                        }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
                    }, l.prototype._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(u.RESIZE, function(t) {
                            return e._handleUpdate(t)
                        }) : t(window).off(u.RESIZE)
                    }, l.prototype._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(h.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(u.HIDDEN)
                        })
                    }, l.prototype._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, l.prototype._showBackdrop = function(e) {
                        var i = this,
                            n = t(this._element).hasClass(h.FADE) ? h.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var o = s.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function(t) {
                                    return i._ignoreBackdropClick ? void(i._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                                }), o && s.reflow(this._backdrop), t(this._backdrop).addClass(h.SHOW), !e) return;
                            if (!o) return void e();
                            t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(h.SHOW);
                            var r = function() {
                                i._removeBackdrop(), e && e()
                            };
                            s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                        } else e && e()
                    }, l.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, l.prototype._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, l.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, l.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, l.prototype._setScrollbar = function() {
                        var e = parseInt(t(p.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                    }, l.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, l.prototype._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, l._jQueryInterface = function(e, i) {
                        return this.each(function() {
                            var o = t(this).data(r),
                                s = t.extend({}, l.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                            if (o || (o = new l(this, s), t(this).data(r, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e](i)
                            } else s.show && o.show(i)
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            t(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
                var i = this,
                    n = void 0,
                    o = s.getSelectorFromElement(this);
                o && (n = t(o)[0]);
                var a = t(n).data(r) ? "toggle" : t.extend({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(n).one(u.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(u.HIDDEN, function() {
                        t(i).is(":visible") && i.focus()
                    })
                });
                f._jQueryInterface.call(t(n), a, this)
            }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
                return t.fn[e] = l, f._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "scrollspy",
                r = "bs.scrollspy",
                a = "." + r,
                l = t.fn[e],
                c = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                d = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                u = {
                    ACTIVATE: "activate" + a,
                    SCROLL: "scroll" + a,
                    LOAD_DATA_API: "load" + a + ".data-api"
                },
                h = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                f = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                g = function() {
                    function l(e, n) {
                        var o = this;
                        i(this, l), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(u.SCROLL, function(t) {
                            return o._process(t)
                        }), this.refresh(), this._process()
                    }
                    return l.prototype.refresh = function() {
                        var e = this,
                            i = this._scrollElement !== this._scrollElement.window ? f.POSITION : f.OFFSET,
                            n = "auto" === this._config.method ? i : this._config.method,
                            o = n === f.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                            var i = void 0,
                                r = s.getSelectorFromElement(e);
                            return r && (i = t(r)[0]), i && (i.offsetWidth || i.offsetHeight) ? [t(i)[n]().top + o, r] : null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, l.prototype.dispose = function() {
                        t.removeData(this._element, r), t(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, l.prototype._getConfig = function(i) {
                        if (i = t.extend({}, c, i), "string" != typeof i.target) {
                            var n = t(i.target).attr("id");
                            n || (n = s.getUID(e), t(i.target).attr("id", n)), i.target = "#" + n
                        }
                        return s.typeCheckConfig(e, i, d), i
                    }, l.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, l.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, l.prototype._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                    }, l.prototype._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            i = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= i) {
                            var n = this._targets[this._targets.length - 1];
                            return void(this._activeTarget !== n && this._activate(n))
                        }
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }, l.prototype._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var i = this._selector.split(",");
                        i = i.map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var n = t(i.join(","));
                        n.hasClass(h.DROPDOWN_ITEM) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(h.ACTIVE), n.addClass(h.ACTIVE)) : n.parents(p.LI).find("> " + p.NAV_LINKS).addClass(h.ACTIVE), t(this._scrollElement).trigger(u.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, l.prototype._clear = function() {
                        t(this._selector).filter(p.ACTIVE).removeClass(h.ACTIVE)
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(r),
                                o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
                            if (i || (i = new l(this, o), t(this).data(r, i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            t(window).on(u.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(p.DATA_SPY)), i = e.length; i--;) {
                    var n = t(e[i]);
                    g._jQueryInterface.call(n, n.data())
                }
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = l, g._jQueryInterface
            }
        }(jQuery), function(t) {
            var e = "tab",
                n = "bs.tab",
                r = "." + n,
                a = t.fn[e],
                l = {
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    CLICK_DATA_API: "click" + r + ".data-api"
                },
                c = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                d = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                u = function() {
                    function e(t) {
                        i(this, e), this._element = t
                    }
                    return e.prototype.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(c.ACTIVE) || t(this._element).hasClass(c.DISABLED))) {
                            var i = void 0,
                                n = void 0,
                                o = t(this._element).closest(d.LIST)[0],
                                r = s.getSelectorFromElement(this._element);
                            o && (n = t.makeArray(t(o).find(d.ACTIVE)), n = n[n.length - 1]);
                            var a = t.Event(l.HIDE, {
                                    relatedTarget: this._element
                                }),
                                u = t.Event(l.SHOW, {
                                    relatedTarget: n
                                });
                            if (n && t(n).trigger(a), t(this._element).trigger(u), !u.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                r && (i = t(r)[0]), this._activate(this._element, o);
                                var h = function() {
                                    var i = t.Event(l.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        o = t.Event(l.SHOWN, {
                                            relatedTarget: n
                                        });
                                    t(n).trigger(i), t(e._element).trigger(o)
                                };
                                i ? this._activate(i, i.parentNode, h) : h()
                            }
                        }
                    }, e.prototype.dispose = function() {
                        t.removeClass(this._element, n), this._element = null
                    }, e.prototype._activate = function(e, i, n) {
                        var o = this,
                            r = t(i).find(d.ACTIVE_CHILD)[0],
                            a = n && s.supportsTransitionEnd() && (r && t(r).hasClass(c.FADE) || Boolean(t(i).find(d.FADE_CHILD)[0])),
                            l = function() {
                                return o._transitionComplete(e, r, a, n)
                            };
                        r && a ? t(r).one(s.TRANSITION_END, l).emulateTransitionEnd(150) : l(), r && t(r).removeClass(c.SHOW)
                    }, e.prototype._transitionComplete = function(e, i, n, o) {
                        if (i) {
                            t(i).removeClass(c.ACTIVE);
                            var r = t(i.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                            r && t(r).removeClass(c.ACTIVE), i.setAttribute("aria-expanded", !1)
                        }
                        if (t(e).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0), n ? (s.reflow(e), t(e).addClass(c.SHOW)) : t(e).removeClass(c.FADE), e.parentNode && t(e.parentNode).hasClass(c.DROPDOWN_MENU)) {
                            var a = t(e).closest(d.DROPDOWN)[0];
                            a && t(a).find(d.DROPDOWN_TOGGLE).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0)
                        }
                        o && o()
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = t(this),
                                s = o.data(n);
                            if (s || (s = new e(this), o.data(n, s)), "string" == typeof i) {
                                if (void 0 === s[i]) throw new Error('No method named "' + i + '"');
                                s[i]()
                            }
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), e
                }();
            t(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                e.preventDefault(), u._jQueryInterface.call(t(this), "show")
            }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
                return t.fn[e] = a, u._jQueryInterface
            }
        }(jQuery), function(t) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip",
                r = "bs.tooltip",
                a = "." + r,
                l = t.fn[e],
                c = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                d = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                u = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                h = {
                    SHOW: "show",
                    OUT: "out"
                },
                p = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    INSERTED: "inserted" + a,
                    CLICK: "click" + a,
                    FOCUSIN: "focusin" + a,
                    FOCUSOUT: "focusout" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a
                },
                f = {
                    FADE: "fade",
                    SHOW: "show"
                },
                g = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                m = {
                    element: !1,
                    enabled: !1
                },
                v = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                y = function() {
                    function l(t, e) {
                        i(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    return l.prototype.enable = function() {
                        this._isEnabled = !0
                    }, l.prototype.disable = function() {
                        this._isEnabled = !1
                    }, l.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, l.prototype.toggle = function(e) {
                        if (e) {
                            var i = this.constructor.DATA_KEY,
                                n = t(e.currentTarget).data(i);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (t(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, l.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, l.prototype.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            t(this.element).trigger(i);
                            var n = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !n) return;
                            var o = this.getTipElement(),
                                r = s.getUID(this.constructor.NAME);
                            o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && t(o).addClass(f.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(a),
                                d = !1 === this.config.container ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: c,
                                element: o,
                                target: this.element,
                                classes: m,
                                classPrefix: "bs-tether",
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), s.reflow(o), this._tether.position(), t(o).addClass(f.SHOW);
                            var u = function() {
                                var i = e._hoverState;
                                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), i === h.OUT && e._leave(null, e)
                            };
                            if (s.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE)) return this._isTransitioning = !0, void t(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(l._TRANSITION_DURATION);
                            u()
                        }
                    }, l.prototype.hide = function(e) {
                        var i = this,
                            n = this.getTipElement(),
                            o = t.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var r = function() {
                            i._hoverState !== h.SHOW && n.parentNode && n.parentNode.removeChild(n), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), i._isTransitioning = !1, i.cleanupTether(), e && e()
                        };
                        t(this.element).trigger(o), o.isDefaultPrevented() || (t(n).removeClass(f.SHOW), this._activeTrigger[v.CLICK] = !1, this._activeTrigger[v.FOCUS] = !1, this._activeTrigger[v.HOVER] = !1, s.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE) ? (this._isTransitioning = !0, t(n).one(s.TRANSITION_END, r).emulateTransitionEnd(150)) : r(), this._hoverState = "")
                    }, l.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, l.prototype.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0]
                    }, l.prototype.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(g.TOOLTIP_INNER), this.getTitle()), e.removeClass(f.FADE + " " + f.SHOW), this.cleanupTether()
                    }, l.prototype.setElementContent = function(e, i) {
                        var o = this.config.html;
                        "object" === (void 0 === i ? "undefined" : n(i)) && (i.nodeType || i.jquery) ? o ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()): e[o ? "html" : "text"](i)
                    }, l.prototype.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, l.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, l.prototype._getAttachment = function(t) {
                        return u[t.toUpperCase()]
                    }, l.prototype._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function(i) {
                            if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (i !== v.MANUAL) {
                                var n = i === v.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    o = i === v.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(n, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(o, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = t.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, l.prototype._fixTitle = function() {
                        var t = n(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, l.prototype._enter = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        return i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? v.FOCUS : v.HOVER] = !0), t(i.getTipElement()).hasClass(f.SHOW) || i._hoverState === h.SHOW ? void(i._hoverState = h.SHOW) : (clearTimeout(i._timeout), i._hoverState = h.SHOW, i.config.delay && i.config.delay.show ? void(i._timeout = setTimeout(function() {
                            i._hoverState === h.SHOW && i.show()
                        }, i.config.delay.show)) : void i.show())
                    }, l.prototype._leave = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        if (i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? v.FOCUS : v.HOVER] = !1), !i._isWithActiveTrigger()) return clearTimeout(i._timeout), i._hoverState = h.OUT, i.config.delay && i.config.delay.hide ? void(i._timeout = setTimeout(function() {
                            i._hoverState === h.OUT && i.hide()
                        }, i.config.delay.hide)) : void i.hide()
                    }, l.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, l.prototype._getConfig = function(i) {
                        return i = t.extend({}, this.constructor.Default, t(this.element).data(), i), i.delay && "number" == typeof i.delay && (i.delay = {
                            show: i.delay,
                            hide: i.delay
                        }), s.typeCheckConfig(e, i, this.constructor.DefaultType), i
                    }, l.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(r),
                                o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
                            if ((i || !/dispose|hide/.test(e)) && (i || (i = new l(this, o), t(this).data(r, i)), "string" == typeof e)) {
                                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return r
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return d
                        }
                    }]), l
                }();
            return t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function() {
                return t.fn[e] = l, y._jQueryInterface
            }, y
        }(jQuery));
    ! function(s) {
        var a = "popover",
            l = "bs.popover",
            c = "." + l,
            d = s.fn[a],
            u = s.extend({}, r.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            h = s.extend({}, r.DefaultType, {
                content: "(string|element|function)"
            }),
            p = {
                FADE: "fade",
                SHOW: "show"
            },
            f = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            g = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            },
            m = function(r) {
                function d() {
                    return i(this, d), t(this, r.apply(this, arguments))
                }
                return e(d, r), d.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, d.prototype.getTipElement = function() {
                    return this.tip = this.tip || s(this.config.template)[0]
                }, d.prototype.setContent = function() {
                    var t = s(this.getTipElement());
                    this.setElementContent(t.find(f.TITLE), this.getTitle()), this.setElementContent(t.find(f.CONTENT), this._getContent()), t.removeClass(p.FADE + " " + p.SHOW), this.cleanupTether()
                }, d.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, d._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = s(this).data(l),
                            i = "object" === (void 0 === t ? "undefined" : n(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new d(this, i), s(this).data(l, e)), "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(d, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return g
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return h
                    }
                }]), d
            }(r);
        s.fn[a] = m._jQueryInterface, s.fn[a].Constructor = m, s.fn[a].noConflict = function() {
            return s.fn[a] = d, m._jQueryInterface
        }
    }(jQuery)
}(),
function() {
    var t, e, i, n, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        r = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in e) n = e[i], null == t[i] && (t[i] = n);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, i, n) {
            var o;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function(t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, i, n, o;
            for (o = this.keys, e = i = 0, n = o.length; i < n; e = ++i)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var i, n, o, s;
            for (s = this.keys, i = n = 0, o = s.length; n < o; i = ++n)
                if (s[i] === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), n = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var i;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, i, n, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, i, n, o;
                    for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; t < i; t++) e = n[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, i, n, o;
                    for (n = this.boxes, o = [], t = 0, i = n.length; t < i; t++) e = n[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, i = 0, n = o.length; i < n; i++) e = o[i], this.applyStyle(e, !0);
            if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function(t) {
                return function(e) {
                    var i, n, o, s, r;
                    for (r = [], i = 0, n = e.length; i < n; i++) s = e[i], r.push(function() {
                        var t, e, i, n;
                        for (i = s.addedNodes || [], n = [], t = 0, e = i.length; t < e; t++) o = i[t], n.push(this.doSync(o));
                        return n
                    }.call(t));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }, o.prototype.stop = function() {
            if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
        }, o.prototype.sync = function(e) {
            if (t.notSupported) return this.doSync(this.element)
        }, o.prototype.doSync = function(t) {
            var e, i, n, o, s;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), s = [], i = 0, n = o.length; i < n; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                return s
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var i, n, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(s) {
                return function() {
                    return s.customStyle(t, e, n, i, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            if (t.type.toLowerCase().indexOf("animationend") >= 0) return e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()
        }, o.prototype.customStyle = function(t, e, i, n, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var i, n, o, s;
            n = [];
            for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                var e, n, r, a;
                for (r = this.vendors, a = [], e = 0, n = r.length; e < n; e++) s = r[e], a.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                return a
            }.call(this));
            return n
        }, o.prototype.vendorCSS = function(t, e) {
            var i, o, s, r, a, l;
            for (a = n(t), r = a.getPropertyCSSValue(e), s = this.vendors, i = 0, o = s.length; i < o; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
            return r
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = n(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, i, n, o, s;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, s = window.pageYOffset, o = s + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= o && e >= s
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this),
    function(t, e, i, n) {
        function o(e, i) {
            this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(o.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, o.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, o.Type = {
            Event: "event",
            State: "state"
        }, o.Plugins = {}, o.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    o = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(o), t.css = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    o = !this.settings.autoWidth,
                    s = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = o ? e * i : this._items[n].width();
                this._widths = s
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    o = Math.max(2 * n.items, 4),
                    s = 2 * Math.ceil(i.length / 2),
                    r = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
                    a = "",
                    l = "";
                for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * t);
                this._coordinates = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], o.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, n;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, n = this.$element.children(i).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, o.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                o = null;
            i ? (t.each(i, function(t) {
                t <= e && t > n && (n = Number(t))
            }), o = t.extend({}, this.options, i[n]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, o.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, o.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, o.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, o.prototype.width = function(t) {
            switch (t = t || o.Width.Default) {
                case o.Width.Inner:
                case o.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, o.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, o.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, o.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, o.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, o.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                x: n[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            }) : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, o.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                o = this.difference(this._drag.pointer, this.pointer(t)),
                s = this.difference(this._drag.stage.start, o);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
        }, o.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                o = this._drag.stage.current,
                s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, o.prototype.closest = function(e, i) {
            var n = -1,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
                return "left" === i && e > r - 30 && e < r + 30 ? n = t : "right" === i && e > r - o - 30 && e < r - o + 30 ? n = t + 1 : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (n = e = this.maximum())), n
        }, o.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, o.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, o.prototype.current = function(t) {
            if (void 0 === t) return this._current;
            if (0 !== this._items.length) {
                if (t = this.normalize(t), this._current !== t) {
                    var e = this.trigger("change", {
                        property: {
                            name: "position",
                            value: t
                        }
                    });
                    void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
                }
                return this._current
            }
        }, o.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, o.prototype.reset = function(t) {
            void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, o.prototype.normalize = function(t, e) {
            var i = this._items.length,
                n = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = void 0 : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
        }, o.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, o.prototype.maximum = function(t) {
            var e, i, n, o = this.settings,
                s = this._coordinates.length;
            if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
            else if (o.autoWidth || o.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                s = e + 1
            } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
            return t && (s -= this._clones.length / 2), Math.max(s, 0)
        }, o.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, o.prototype.items = function(t) {
            return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, o.prototype.mergers = function(t) {
            return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, o.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                n = i + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
                };
            return void 0 === e ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null
            })
        }, o.prototype.speed = function(t) {
            return void 0 !== t && (this._speed = t), this._speed
        }, o.prototype.coordinates = function(e) {
            var i, n = 1,
                o = e - 1;
            return void 0 === e ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, o.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, o.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                o = t - this.relative(i),
                s = (o > 0) - (o < 0),
                r = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), t = i + o, (n = ((t - a) % r + r) % r + a) !== t && n - o <= l && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, o.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, o.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, o.prototype.onTransitionEnd = function(t) {
            if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, o.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, o.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, o.prototype.add = function(e, i) {
            var n = this.relative(this._current);
            i = void 0 === i ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, o.prototype.remove = function(t) {
            void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, o.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, o.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, o.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : t < i;
                case ">":
                    return n ? t < i : t > i;
                case ">=":
                    return n ? t <= i : t >= i;
                case "<=":
                    return n ? t >= i : t <= i
            }
        }, o.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, o.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, o.prototype.trigger = function(e, i, n, s, r) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: o.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, o.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, o.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, o.prototype.register = function(e) {
            if (e.type === o.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, o.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, o.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, o.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, o.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, o.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    s = n.data("owl.carousel");
                s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    s.register({
                        type: o.Type.Event,
                        name: i
                    }), s.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, s))
                })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
            })
        }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, o.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, o.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, o.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s)), a), s++
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            lazyLoad: !1
        }, o.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                o = n && n.find(".owl-lazy");
            !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
                var o, s = t(n),
                    r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", {
                    element: s,
                    url: r
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() {
                    s.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this), o.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, o.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                o = [],
                s = 0;
            t.each(n, function(e, i) {
                o.push(t(i).height())
            }), s = Math.max.apply(null, o), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        o.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, o.prototype.fetch = function(t, e) {
            var i = function() {
                    return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: o,
                height: s
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, o.prototype.thumbnail = function(e, i) {
            var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                d = this._core.settings,
                u = function(t) {
                    o = '<div class="owl-video-play-icon"></div>', n = d.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
                };
            if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length) return u(a.attr(l)), a.remove(), !1;
            "youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    s = t[0].thumbnail_large, u(s)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    s = t.framegrab_url, u(s)
                }
            })
        }, o.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, o.prototype.play = function(e) {
            var i, n = t(e.target),
                o = n.closest("." + this._core.settings.itemClass),
                s = this._videos[o.attr("data-video")],
                r = s.width || "100%",
                a = s.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), "youtube" === s.type ? i = '<iframe width="' + r + '" height="' + a + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? i = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
        }, o.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, o.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r)), s && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
            }
        }, o.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var o = function(e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
        };
        o.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, o.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, o.prototype._getNextTimeout = function(n, o) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, o.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, o.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, o.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, o.prototype.destroy = function() {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var o = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        o.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, o.prototype.initialize = function() {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
        }, o.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, o.prototype.update = function() {
            var t, e, i, n = this._core.clones().length / 2,
                o = n + this._core.items().length,
                s = this._core.maximum(!0),
                r = this._core.settings,
                a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; t < o; t++) {
                    if (e >= a || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(s, t - n),
                                end: t - n + a - 1
                            }), Math.min(s, t - n) === s) break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, o.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                o = this._core.relative(this._core.current()),
                s = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, o.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, o.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, o.prototype.getPosition = function(e) {
            var i, n, o = this._core.settings;
            return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
        }, o.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, o.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, o.prototype.to = function(e, i, n) {
            var o;
            !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var o = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            o = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!o || e.location.hash.slice(1) === o) return;
                        e.location.hash = o
                    }
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    o = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
            }, this))
        };
        o.Defaults = {
            URLhashListener: !1
        }, o.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function o(e, i) {
            var o = !1,
                s = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
                if (r[e] !== n) return o = !i || e, !1
            }), o
        }

        function s(t) {
            return o(t, !0)
        }
        var r = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = {
                csstransforms: function() {
                    return !!o("transform")
                },
                csstransforms3d: function() {
                    return !!o("perspective")
                },
                csstransitions: function() {
                    return !!o("transition")
                },
                cssanimations: function() {
                    return !!o("animation")
                }
            };
        c.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = c.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; o > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * r + (e * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, o, s, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
                return s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft ? (e = s, !1) : void 0
            }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                    }, n.src = i
                })
            }
            var i, n, o, s, r = this;
            !0 === r.options.centerMode ? !0 === r.options.infinite ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), !0 === r.options.fade && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, o, s = this,
                r = t("img[data-lazy]", s.$slider);
            r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
            }, o.onerror = function() {
                3 > e ? setTimeout(function() {
                    s.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
            }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, e.prototype.refresh = function(e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in s)
                    if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
                    }
                o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = !0 === e ? 0 : n.slideCount - 1) : t = !0 === e ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                o = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, o, s, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
            else if ("multiple" === s) t.each(n, function(t, e) {
                r.options[t] = e
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(o[i])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, o, s, r, a, l = null,
                c = this;
            return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o))))
        }, e.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, o, s, r = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + n * o : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = e + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (t = 0; r > t; t++)
                if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
            return n
        }
    });
var globalVariable = window || root,
    jQuery = jQuery || globalVariable.jQuery || require("jquery");
(function(t) {
    var e = 0,
        i = function(t, i, n, o) {
            this.$ = t, this.$el = i, this.points = n, this.svgDefId = "clipPathPolygonGenId" + e++,
                this.processOptions(o)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = i), exports.ClipPath = i) : globalVariable.ClipPath = i, i.prototype = {
        $: null,
        $el: null,
        points: null,
        isForWebkit: !0,
        isForSvg: !0,
        svgDefId: null,
        isPercentage: !1,
        create: function() {
            this._createClipPath(this.points)
        },
        _createClipPath: function(t) {
            this._createSvgDefs(), this.isForSvg && this._createSvgBasedClipPath(t), this.isForWebkit && this._createWebkitClipPath(t)
        },
        _createWebkitClipPath: function(t) {
            var e = "polygon(" + this._translatePoints(t, !0, this.isPercentage) + ")";
            this.$el.css("-webkit-clip-path", e)
        },
        _createSvgBasedClipPath: function(t) {
            this.$("#" + this.svgDefId).find("polygon").attr("points", this._translatePoints(t, !1, this.isPercentage)), this.$el.css("clip-path", "url(#" + this.svgDefId + ")")
        },
        _translatePoints: function(t, e, i) {
            var n = [];
            for (var o in t) {
                var s = this._handlePxs(t[o][0], e, i),
                    r = this._handlePxs(t[o][1], e, i);
                n.push(s + " " + r)
            }
            return n.join(", ")
        },
        _handlePxs: function(t, e, i) {
            return 0 === t ? t : e ? t + (i ? "%" : "px") : i ? t / 100 : t
        },
        _createSvgElement: function(t) {
            return this.$(document.createElementNS("http://www.w3.org/2000/svg", t))
        },
        _createSvgDefs: function() {
            if (0 === this.$("#" + this.svgDefId).length) {
                var t = this._createSvgElement("svg").attr("width", 0).attr("height", 0).css({
                        position: "absolute",
                        visibility: "hidden",
                        width: 0,
                        height: 0
                    }),
                    e = this._createSvgElement("defs");
                t.append(e);
                var i = this._createSvgElement("clipPath").attr("id", this.svgDefId);
                this.isPercentage && i.get(0).setAttribute("clipPathUnits", "objectBoundingBox"), e.append(i);
                var n = this._createSvgElement("polygon");
                i.append(n), this.$("body").append(t)
            }
        },
        processOptions: function(t) {
            this.isForWebkit = t && void 0 !== t.isForWebkit ? t.isForWebkit : this.isForWebkit, this.isForSvg = t && void 0 !== t.isForSvg ? t.isForSvg : this.isForSvg, this.isPercentage = t && t.isPercentage || this.isPercentage, this.svgDefId = t && t.svgDefId || this.svgDefId
        }
    }, t.fn.clipPath = function(e, n) {
        return this.each(function() {
            var o = t(this);
            new i(t, o, e, n).create()
        })
    }
}).call(this, jQuery),
    function() {
        var t, e, i, n, o, s, r, a, l, c;
        e = window.device, t = {}, window.device = t, n = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), t.ios = function() {
            return t.iphone() || t.ipod() || t.ipad()
        }, t.iphone = function() {
            return !t.windows() && o("iphone")
        }, t.ipod = function() {
            return o("ipod")
        }, t.ipad = function() {
            return o("ipad")
        }, t.android = function() {
            return !t.windows() && o("android")
        }, t.androidPhone = function() {
            return t.android() && o("mobile")
        }, t.androidTablet = function() {
            return t.android() && !o("mobile")
        }, t.blackberry = function() {
            return o("blackberry") || o("bb10") || o("rim")
        }, t.blackberryPhone = function() {
            return t.blackberry() && !o("tablet")
        }, t.blackberryTablet = function() {
            return t.blackberry() && o("tablet")
        }, t.windows = function() {
            return o("windows")
        }, t.windowsPhone = function() {
            return t.windows() && o("phone")
        }, t.windowsTablet = function() {
            return t.windows() && o("touch") && !t.windowsPhone()
        }, t.fxos = function() {
            return (o("(mobile;") || o("(tablet;")) && o("; rv:")
        }, t.fxosPhone = function() {
            return t.fxos() && o("mobile")
        }, t.fxosTablet = function() {
            return t.fxos() && o("tablet")
        }, t.meego = function() {
            return o("meego")
        }, t.cordova = function() {
            return window.cordova && "file:" === location.protocol
        }, t.nodeWebkit = function() {
            return "object" == typeof window.process
        }, t.mobile = function() {
            return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
        }, t.tablet = function() {
            return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
        }, t.desktop = function() {
            return !t.tablet() && !t.mobile()
        }, t.television = function() {
            var t, e = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
            for (t = 0; t < e.length;) {
                if (o(e[t])) return !0;
                t++
            }
            return !1
        }, t.portrait = function() {
            return window.innerHeight / window.innerWidth > 1
        }, t.landscape = function() {
            return window.innerHeight / window.innerWidth < 1
        }, t.noConflict = function() {
            return window.device = e, this
        }, o = function(t) {
            return -1 !== c.indexOf(t)
        }, r = function(t) {
            var e;
            return e = new RegExp(t, "i"), n.className.match(e)
        }, i = function(t) {
            var e = null;
            r(t) || (e = n.className.replace(/^\s+|\s+$/g, ""), n.className = e + " " + t)
        }, l = function(t) {
            r(t) && (n.className = n.className.replace(" " + t, ""))
        }, t.ios() ? t.ipad() ? i("ios ipad tablet") : t.iphone() ? i("ios iphone mobile") : t.ipod() && i("ios ipod mobile") : t.android() ? i(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? i(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? i(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? i(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? i("meego mobile") : t.nodeWebkit() ? i("node-webkit") : t.television() ? i("television") : t.desktop() && i("desktop"), t.cordova() && i("cordova"), s = function() {
            t.landscape() ? (l("portrait"), i("landscape")) : (l("landscape"), i("portrait"))
        }, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, s, !1) : window.attachEvent ? window.attachEvent(a, s) : window[a] = s, s(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return t
        }) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t
    }.call(this), $ = jQuery.noConflict(), $(function() {
        (new WOW).init(), $(function() {
            var t = [
                    [0, 0],
                    [100, 0],
                    [100, 100],
                    [0, 100]
                ],
                e = [
                    [0, 0],
                    [100, 35],
                    [100, 100],
                    [0, 65]
                ];
            $(window).width() < 768 ? $(".multibord").clipPath(t, {
                isPercentage: !0
            }) : $(".multibord").clipPath(e, {
                isPercentage: !0
            })
        }), $(".top").slick({
            arrows: !1,
            dots: !1,
            focusOnSelect: !0,
            infinite: !1,
            slidesToShow: 5,
            asNavFor: ".line",
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: !1,
                    dots: !0,
                    dotsClass: "dots",
                    focusOnSelect: !0,
                    asNavFor: ".line",
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: !1,
                    dots: !0,
                    dotsClass: "dots",
                    focusOnSelect: !0,
                    asNavFor: ".line",
                    slidesToShow: 1
                }
            }]
        }), $(".advantage").slick({
            centerMode: !0,
            arrows: !1,
            centerPadding: "200px",
            dotsClass: "dots",
            speed: 1e3,
            dots: !0,
            draggable: !1,
            focusOnSelect: !0,
            infinite: !0,
            slidesToShow: 3,
            swipeToSlide: !0,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: "0px",
                    infinite: !0,
                    dotsClass: "dots",
                    speed: 1e3,
                    dots: !0,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: "0px",
                    infinite: !0,
                    dotsClass: "dots",
                    speed: 1e3,
                    dots: !0,
                    slidesToShow: 1
                }
            }]
        }), $(".line").slick({
            centerMode: !0,
            arrows: !1,
            focusOnSelect: !0,
            centerPadding: "0px",
            dotsClass: "dots",
            speed: 1e3,
            dots: !0,
            draggable: !1,
            infinite: !0,
            slidesToShow: 3,
            swipeToSlide: !0,
            asNavFor: ".top",
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    centerPadding: "0px",
                    infinite: !0,
                    dotsClass: "dots",
                    speed: 1e3,
                    dots: !0,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    centerMode: !0,
                    infinite: !0,
                    dotsClass: "dots",
                    speed: 1e3,
                    dots: !0,
                    centerPadding: "0px",
                    slidesToShow: 1
                }
            }]
        }), $("#app .owl-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !1,
            center: !0,
            autoplay: !1,
            smartSpeed: 1e3,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1e3: {
                    items: 3
                }
            }
        }), $(document).ready(function() {
            $(".navbar-nav a").click(function(t) {
                t.preventDefault();
                var e = $(this).attr("href"),
                    i = $(e).offset().top;
                $("body,html").scrollTop(i - 100)
            }), $("#send").click(function() {
                var t = $("#contacts").offset().top;
                $("body,html").scrollTop(t - 100)
            }), $("#top a").click(function() {
                var t = $("#line").offset().top;
                $("body,html").scrollTop(t - 100)
            })
        }), $(document).ready(function() {
            $(".navbar-nav a").click(function(t) {
                t.preventDefault(), $(".navbar-collapse.show").collapse("hide")
            })
        }), $(document).ready(function() {
            var t = document.getElementById("customElement1"),
                e = t.getElementsByTagName("iframe")[0].contentWindow,
                i = document.getElementById("customElement2"),
                n = i.getElementsByTagName("iframe")[0].contentWindow;
            $("#customElement1 img").click(function() {
                e.postMessage('{"event":"command","func":"playVideo","args":""}', "*"), $("#video1").css("opacity", "1"), $(this).addClass("hidden"), $(".pos-rel-video1").removeClass("hidden"), $("#close1").removeClass("hidden")
            }), $("#customElement1 #close1").click(function() {
                e.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"), $("#video1").css("opacity", "0"), $("#customElement1").children("img").removeClass("hidden"), $(".pos-rel-video1").addClass("hidden"), $(this).addClass("hidden")
            }), $("#customElement2 img").click(function() {
                n.postMessage('{"event":"command","func":"playVideo","args":""}', "*"), $("#video2").css("opacity", "1"), $(this).addClass("hidden"), $(".pos-rel-video2").removeClass("hidden"), $("#close2").removeClass("hidden")
            }), $("#customElement2 #close2").click(function() {
                n.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"), $("#video2").css("opacity", "0"), $("#customElement2").children("img").removeClass("hidden"), $(".pos-rel-video2").addClass("hidden"), $(this).addClass("hidden")
            })
        }), (device.tablet() || device.mobile()) && device.tablet() && ($("#videoblock .se-slope").css({
            transform: "none",
            marginLeft: "auto",
            marginRight: "auto"
        }), $("#videoblock .se-slope .se-content").css({
            transform: "none"
        }), $("#videoblock .se-slope .se-content .video-bg").css({
            width: "50vw",
            height: "43vw"
        }), $("#videoblock .se-slope .se-content img").css({
            width: "50vw"
        }), $("#videoblock .video-margin-2").css({
            marginLeft: "auto"
        }), $("#videoblock .video-margin-4").css({
            marginLeft: "auto"
        }), $("#videoblock .block-margin-2").css({
            height: "34.5vw"
        }), $("#videoblock .block-margin-4").css({
            height: "41.5vw"
        })), document.getElementById("send-form").addEventListener("submit", function(t) {
            var e = new XMLHttpRequest,
                i = this;
            t.preventDefault(), e.open("POST", "send.php", !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send("&name=" + i.name.value + "&email=" + i.email.value + "&phone=" + i.phone.value + "&msg=" + i.msg.value), e.onreadystatechange = function() {
                4 == e.readyState && 200 == e.status && (alert("Ваше сообщение отправлено."), i.name.removeAttribute("value"), i.email.removeAttribute("value"), i.phone.removeAttribute("value"), i.msg.removeAttribute("value"), i.name.value = "", i.email.value = "", i.phone.value = "", i.msg.value = "")
            }, e.onerror = function() {
                alert("Извините, данные не были переданы")
            }
        }, !1)
    });