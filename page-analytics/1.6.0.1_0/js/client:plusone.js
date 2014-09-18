/**
 * 代码翻译：听歌
 * 电子邮件：505253293@163.com
 * 新浪微博：http://blog.sina.com.cn/tinggebar
 * 代码地址：https://apis.google.com/js/client:plusone.js?onload=gaextOnGapiClientLoadCallback
 * 文档地址：https://developers.google.com/+/web/api/javascript?hl=zh-cn
 * @fileoverview google+ 登录API。
 */

var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
    var _encodeURIComponent = encodeURIComponent,
        _window = window,
        _Object = Object,
        _document = document,
        _Array = Array,
        _parseInt = parseInt,
        _String = String,
        _decodeURIComponent = decodeURIComponent;

    function fa(a, b) {
        return a.type = b
    }

    var _appendChild = "appendChild",
        _shift = "shift",
        _exec = "exec",
        _width = "width",
        _replace = "replace",
        _concat = "concat",
        _charAt = "charAt",
        _match = "match",
        _createElement = "createElement",
        _setAttribute = "setAttribute",
        _bind = "bind",
        _getTime = "getTime",
        _getElementsByTagName = "getElementsByTagName",
        _substr = "substr",
        _toString = "toString",
        _split = "split",
        _location = "location",
        _style = "style",
        _protocol = "protocol",
        _href = "href",
        _action = "action",
        _apply = "apply",
        _attributes = "attributes",
        _height = "height",
        _push = "push",
        _test = "test",
        _slice = "slice",
        _getElementById = "getElementById",
        _JSON = "JSON",
        _indexOf = "indexOf",
        _nodeName = "nodeName",
        _type = "type",
        _length = "length",
        _prototype = "prototype",
        _removeChild = "removeChild",
        _call = "call",
        _getAttribute = "getAttribute",
        _charCodeAt = "charCodeAt",
        _substring = "substring",
        _documentMode = "documentMode",
        _parentNode = "parentNode",
        _update = "update",
        _join = "join",
        _toLowerCase = "toLowerCase",
        Ea = function (a, b, c) {
            return a[_call][_apply](a[_bind], arguments)
        },
        Fa = function (a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments[_length]) {
                var d = _Array[_prototype][_slice][_call](arguments, 2);
                return function () {
                    var c = _Array[_prototype][_slice][_call](arguments);
                    _Array[_prototype].unshift[_apply](c, d);
                    return a[_apply](b, c)
                }
            }
            return function () {
                return a[_apply](b, arguments)
            }
        },
        Ga = function (a, b, c) {
            Ga = Function[_prototype][_bind] && -1 != Function[_prototype][_bind][_toString]()[_indexOf]("native code") ? Ea : Fa;
            return Ga[_apply](null, arguments)
        };

    Function[_prototype].bind = Function[_prototype][_bind] || function (a, b) {
        if (1 < arguments[_length]) {
            var c = _Array[_prototype][_slice][_call](arguments, 1);
            c.unshift(this, a);
            return Ga[_apply](null, c)
        }
        return Ga(this, a)
    };

    var Win = _window,
        Doc = _document,
        Loc = Win[_location],
        emptyFunction = function () {
        },
        NativeCode = /\[native code\]/,

        //初始化a[b]
        S = function (a, b, c) {
            return a[b] = a[b] || c
        },

        Ka = function (a) {
            for (var b = 0; b < this[_length]; b++)
                if (this[b] === a)
                    return b;
            return-1
        },
        La = function (a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a[_length]; d++) {
                var e = a[d];
                e != c && b[_push](e);
                c = e
            }
            return b
        },
        Ma = /&/g,
        Na = /</g, Oa = />/g,
        Pa = /"/g, Qa = /'/g,
        Ra = function (a) {
            return _String(a)[_replace](Ma, "&amp;")[_replace](Na, "&lt;")[_replace](Oa, "&gt;")[_replace](Pa, "&quot;")[_replace](Qa, "&#39;")
        },
        
        //
        T = function () {
            var a;
            if ((a = _Object.create) && NativeCode[_test](a))
                a = a(null);
            else {
                a = {};
                for (var b in a)
                    a[b] = void 0
            }
            return a
        },

        //使用原型链上真正的 hasOwnProperty 方法,判断对象是否含有指定的自身属性
        hasOwn = function (object, property) {
            return _Object[_prototype].hasOwnProperty[_call](object, property)
        },
        Sa = function (a) {
            if (NativeCode[_test](_Object.keys))return _Object.keys(a);
            var b = [], c;
            for (c in a)
                hasOwn(a, c) && b[_push](c);
            return b
        },
        V = function (a, b) {
            a = a || {};
            for (var c in a)hasOwn(a, c) && (b[c] = a[c])
        },
        Ta = function (a) {
            return function () {
                Win.setTimeout(a, 0)
            }
        },
        Ua = function (a, b) {
            if (!a)throw Error(b || "");
        },
        W = S(Win, "gapi", {});

    var X = function (a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if (a = a && (d[_exec](a) || b[_exec](a)))
            try {
                c = _decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        Va = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/, 
        Wa = function (a) {
            a = a[_match](Va);
            var b = T();
            b.H = a[1];
            b.j = a[3] ? [a[3]] : [];
            b.o = a[5] ? [a[5]] : [];
            return b
        },
        Xa = function (a) {
            return a.H + (0 < a.j[_length] ? "?" + a.j[_join]("&") : "") + (0 < a.o[_length] ? "#" + a.o[_join]("&") : "")
        },
        Ya = function (a, b) {
            var c = [];
            if (a)for (var d in a)if (hasOwn(a, d) && null != a[d]) {
                var e = b ? b(a[d]) : a[d];
                c[_push](_encodeURIComponent(d) +
                    "=" + _encodeURIComponent(e))
            }
            return c
        },
        Za = function (a, b, c, d) {
            a = Wa(a);
            a.j[_push][_apply](a.j, Ya(b, d));
            a.o[_push][_apply](a.o, Ya(c, d));
            return Xa(a)
        },
        $a = function (a, b) {
            var c = "";
            2E3 < b[_length] && (c = b[_substring](2E3), b = b[_substring](0, 2E3));
            var d = a[_createElement]("div"), e = a[_createElement]("a");
            e.href = b;
            d[_appendChild](e);
            d.innerHTML = d.innerHTML;
            b = _String(d.firstChild[_href]);
            d[_parentNode] && d[_parentNode][_removeChild](d);
            return b + c
        },
        ab = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;

    var bb = function (a, b, c, d) {
        if (Win[c + "EventListener"])
            Win[c + "EventListener"](a, b, !1);
        else if (Win[d + "tachEvent"])
            Win[d + "tachEvent"]("on" + a, b)
        },
        cb = function () {
            var a = Doc.readyState;
            return"complete" === a || "interactive" === a && -1 == navigator.userAgent[_indexOf]("MSIE")
        },
        fb = function (a) {
            var b = db;
            if (!cb())
                try {
                    b()
                } catch (c) {}
            eb(a)
        },
        eb = function (a) {
            if (cb())
                a();
            else {
                var b = !1,
                    c = function () {
                        if (!b)
                            return b = !0, a[_apply](this, arguments)
                    };
                Win.addEventListener ? (Win.addEventListener("load", c, !1), Win.addEventListener("DOMContentLoaded", c, !1)) : Win.attachEvent &&
                    (Win.attachEvent("onreadystatechange", function () {
                        cb() && c[_apply](this, arguments)
                    }), Win.attachEvent("onload", c))
            }
        },
        gb = function (a) {
            for (; a.firstChild;)a[_removeChild](a.firstChild)
        },
        hb = {
            button: !0,
            div: !0,
            span: !0
        };

        var Y;
        Y = S(Win, "___jsl", T());
        S(Y, "I", 0);
        S(Y, "hel", 10);

        var ib = function (a) {
            return Y.dpo ? Y.h : X(a, "jsh", Y.h)
        },
        jb = function (a) {
            var b = S(Y, "sws", []);
            b[_push][_apply](b, a)
        },
        kb = function (a) {
            return S(Y, "watt", T())[a]
        },
        lb = function (a) {
            var b = S(Y, "PQ", []);
            Y.PQ = [];
            var c = b[_length];
            if (0 === c)
                a();
            else
                for (var d = 0, e = function () {
                    ++d === c && a()
                }, f = 0; f < c; f++)b[f](e)
        },
        nb = function (a) {
            return S(S(Y, "H", T()), a, T())
        };

    var ob = S(Y, "perf", T()),
        pb = S(ob, "g", T()),
        qb = S(ob, "i", T());
    S(ob, "r", []);
    T();
    T();
    var rb = function (a, b, c) {
        var d = ob.r;
        "function" === typeof d ? d(a, b, c) : d[_push]([a, b, c])
    },
    sb = function (a, b, c) {
        pb[a] = !b && pb[a] || c || (new Date)[_getTime]();
        rb(a)
    },
    ub = function (a, b, c) {
        b && 0 < b[_length] && (b = tb(b), c && 0 < c[_length] && (b += "___" + tb(c)), 28 < b[_length] && (b = b[_substr](0, 28) + (b[_length] - 28)), c = b, b = S(qb, "_p", T()), S(b, c, T())[a] = (new Date)[_getTime](), rb(a, "_p", c))
    },
    tb = function (a) {
        return a[_join]("__")[_replace](/\./g, "_")[_replace](/\-/g, "_")[_replace](/\,/g, "_")
    };

    var vb = T(),
        wb = [],
        xb = function (a) {
            throw Error("Bad hint" + (a ? ": " + a : ""));
        };

    wb[_push](["jsl", function (a) {
        for (var b in a)if (hasOwn(a, b)) {
            var c = a[b];
            "object" == typeof c ? Y[b] = S(Y, b, [])[_concat](c) : S(Y, b, c)
        }

        if (b = a.u)
            a = S(Y, "us", []), a[_push](b), (b = /^https:(.*)$/[_exec](b)) && a[_push]("http:" + b[1])
    }]);

    var yb = /^(\/[a-zA-Z0-9_\-]+)+$/,
        zb = /^[a-zA-Z0-9\-_\.,!]+$/,
        Ab = /^gapi\.loaded_[0-9]+$/,
        Bb = /^[a-zA-Z0-9,._-]+$/,
        Fb = function (a, b, c, d) {
            var e = a[_split](";"), f = vb[e[_shift]()], g = null;

            f && (g = f(e, b, c, d));
            if (b = g)
                b = g, c = b[_match](Cb), d = b[_match](Db), b = !!d && 1 === d[_length] && Eb[_test](b) && !!c && 1 === c[_length];
            b || xb(a);
            return g
        },
        Ib = function (a, b, c, d) {
            a = Gb(a);
            Ab[_test](c) || xb("invalid_callback");
            b = Hb(b);
            d = d && d[_length] ? Hb(d) : null;
            var e = function (a) {
                return _encodeURIComponent(a)[_replace](/%2C/g, ",")
            };
            return[_encodeURIComponent(a.T)[_replace](/%2C/g, ",")[_replace](/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" +
                e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.J ? "/am=" + e(a.J) : "", a.K ? "/rs=" + e(a.K) : "", "/cb=", e(c)][_join]("")
        },
        Gb = function (a) {
            "/" !== a[_charAt](0) && xb("relative path");
            for (var b = a[_substring](1)[_split]("/"), c = []; b[_length];) {
                a = b[_shift]();
                if (!a[_length] || 0 == a[_indexOf]("."))
                    xb("empty/relative directory");
                else if (0 < a[_indexOf]("=")) {
                    b.unshift(a);
                    break
                }
                c[_push](a)
            }
            a = {};
            for (var d = 0, e = b[_length]; d < e; ++d) {
                var f = b[d][_split]("="), g = _decodeURIComponent(f[0]), h = _decodeURIComponent(f[1]);
                2 == f[_length] && g && h && (a[g] = a[g] || h)
            }
            b = "/" + c[_join]("/");
            yb[_test](b) || xb("invalid_prefix");
            c = Jb(a, "k", !0);
            d = Jb(a, "am");
            a = Jb(a, "rs");
            return{
                T: b,
                version: c,
                J: d,
                K: a
            }
        },
        Hb = function (a) {
            for (var b = [], c = 0, d = a[_length]; c < d; ++c) {
                var e = a[c][_replace](/\./g, "_")[_replace](/-/g, "_");
                Bb[_test](e) && b[_push](e)
            }
            return b[_join](",")
        },
        Jb = function (a, b, c) {
            a = a[b];
            !a && c && xb("missing: " + b);
            if (a) {
                if (zb[_test](a))
                    return a;
                xb("invalid: " + b)
            }
            return null
        },
        Eb = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Db = /\/cb=/g,
        Cb = /\/\//g,
        Kb = function () {
            var a = ib(Loc[_href]);
            if (!a)
                throw Error("Bad hint");
            return a
        };

    vb.m = function (a, b, c, d) {
        (a = a[0]) || xb("missing_hint");
        return"https://apis.google.com" + Ib(a, b, c, d)
    };

    var script = decodeURI("%73cript"),
        Mb = function (a, b) {
            for (var c = [], d = 0; d < a[_length]; ++d) {
                var e = a[d];
                e && 0 > Ka[_call](b, e) && c[_push](e)
            }
            return c
        },

        //向页面添加js
        addScripts = function (a) {
            "loading" != Doc.readyState ? insertScript(a) : Doc.write("<" + script + ' src="' + encodeURI(a) + '"></' + script + ">")
        },

        //向页面异步插入js
        insertScript = function (uri) {
            var b = Doc[_createElement](script);
            b[_setAttribute]("src", uri);
            b.async = "true";
            (a = Doc[_getElementsByTagName](script)[0]) ? a[_parentNode].insertBefore(b, a) : (Doc.head || Doc.body || Doc.documentElement)[_appendChild](b)
        },

        //
        Pb = function (a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < wb[_length]; d++) {
                    var e = wb[d][0],
                        f = wb[d][1];
                    f && hasOwn(c, e) && f(c[e], a, b)
                }
        },
        Rb = function (a, b) {
            Qb(function () {
                var c;
                c = b === ib(Loc[_href]) ? S(W, "_", T()) : T();
                c = S(nb(b), "_", c);
                a(c)
            })
        },
        Tb = function (a, b) {
            var c = b || {};
            "function" == typeof b && (c = {}, c.callback = b);
            Pb(a, c);
            var d = a ? a[_split](":") : [], e = c.h || Kb(), f = S(Y, "ah", T());
            if (f["::"] && d[_length]) {
                for (var g = [], h = null; h = d[_shift]();) {
                    var l = h[_split]("."), l = f[h] || f[l[1] && "ns:" + l[0] || ""] || e, n = g[_length] && g[g[_length] - 1] || null, m = n;
                    n && n.hint == l || (m = {hint: l, M: []}, g[_push](m));
                    m.M[_push](h)
                }
                var p = g[_length];
                if (1 < p) {
                    var w = c.callback;
                    w && (c.callback = function () {
                        0 == --p && w()
                    })
                }
                for (; d = g[_shift]();)
                    Sb(d.M, c, d.hint)
            } else
                Sb(d || [], c, e)
        },
        Sb = function (a, b, c) {
            a = La(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                h = null,
                l = !1;

            if (f && !g || !f && g)
                throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
            var n = S(nb(c), "r", []).sort(),
                m = S(nb(c), "L", []).sort(),
                p = [][_concat](n),
                w = function (a, b) {
                    if (l)
                        return 0;
                    Win.clearTimeout(h);
                    m[_push][_apply](m, C);
                    var d = ((W || {}).config || {})[_update];
                    d ? d(e) : e && S(Y, "cu", [])[_push](e);
                    if (b) {
                        ub("me0", a, p);
                        try {
                            Rb(b, c)
                        } finally {
                            ub("me1", a, p)
                        }
                    }
                    return 1
                };
            0 < f && (h = Win.setTimeout(function () {
                l = !0;
                g()
            }, f));

            var C = Mb(a, m);
            if (C[_length]) {
                var C =
                    Mb(a, n), u = S(Y, "CP", []), J = u[_length];
                u[J] = function (a) {
                    if (!a)return 0;
                    ub("ml1", C, p);
                    var b = function (b) {
                        u[J] = null;
                        w(C, a) && lb(function () {
                            d && d();
                            b()
                        })
                    },
                    c = function () {
                        var a = u[J + 1];
                        a && a()
                    };
                    0 < J && u[J - 1] ? u[J] = function () {
                        b(c)
                    } : b(c)
                };
                if (C[_length]) {
                    var mb = "loaded_" + Y.I++;
                    W[mb] = function (a) {
                        u[J](a);
                        W[mb] = null
                    };
                    a = Fb(c, C, "gapi." + mb, n);
                    n[_push][_apply](n, C);
                    ub("ml0", C, p);
                    b.sync || Win.___gapisync ? addScripts(a) : insertScript(a)
                } else
                    u[J](emptyFunction)
            } else
                w(C) && d && d()
        };

    var Qb = function (a) {
        if (Y.hee && 0 < Y.hel)
            try {
                return a()
            } catch (b) {
                Y.hel--, Tb("debug_error", function () {
                    try {
                        _window.___jsl.hefn(b)
                    } catch (a) {
                        throw b;
                    }
                })
            }
        else
            return a()
    };

    W.load = function (a, b) {
        return Qb(function () {
            return Tb(a, b)
        })
    };
    var Ub = function (a) {
        var b = _window.___jsl = _window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    },
    Vb = function (a) {
        var b = _window.___jsl = _window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    },
    Wb = function (a) {
        return"object" === typeof a && /\[native code\]/[_test](a[_push])
    },
    Xb = function (a, b) {
        if (b)
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !Wb(a[c]) && !Wb(b[c]) ? Xb(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = Wb(b[c]) ? [] : {}, Xb(a[c], b[c])) : a[c] = b[c])
    },
    Yb = function (a) {
        if (a && !/^\s+$/[_test](a)) {
            for (; 0 == a[_charCodeAt](a[_length] - 1);)
                a = a[_substring](0, a[_length] - 1);
            var b;
            try {
                b = _window[_JSON].parse(a)
            } catch (c) {
            }
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (d) {
            }
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (e) {
            }
            return"object" === typeof b ? b : {}
        }
    },
    Zb = function (a) {
        Vb(!0);
        var b = _window.___gcfg,
            c = Ub("cu");
        if (b && b !== _window.___gu) {
            var d = {};
            Xb(d, b);
            c[_push](d);
            _window.___gu = b
        }
        var b = Ub("cu"),
            e = _document.scripts || _document[_getElementsByTagName]("script") || [],
            d = [],
            f = [];
        f[_push][_apply](f, Ub("us"));
        for (var g = 0; g < e[_length]; ++g)
            for (var h = e[g], l = 0; l < f[_length]; ++l)
                h.src && 0 == h.src[_indexOf](f[l]) && d[_push](h);
        0 == d[_length] && 0 < e[_length] && e[e[_length] - 1].src && d[_push](e[e[_length] - 1]);
        for (e = 0; e < d[_length]; ++e)
            d[e][_getAttribute]("gapi_processed") || (d[e][_setAttribute]("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = Yb(f)) && b[_push](f));
        a && (d = {}, Xb(d, a), c[_push](d));
        d = Ub("cd");
        a = 0;
        for (b = d[_length]; a < b; ++a)
            Xb(Vb(), d[a]);
        d = Ub("ci");
        a = 0;
        for (b = d[_length]; a < b; ++a)
            Xb(Vb(), d[a]);
        a = 0;
        for (b = c[_length]; a < b; ++a)
            Xb(Vb(), c[a])
    },
    Z = function (a) {
        if (!a)
            return Vb();
        a = a[_split]("/");
        for (var b = Vb(), c = 0, d = a[_length]; b && "object" === typeof b && c < d; ++c)
            b = b[a[c]];
        return c === a[_length] && void 0 !== b ? b : void 0
    },
    $b = function (a, b) {
        var c = a;
        if ("string" === typeof a) {
            for (var d = c = {}, e = a[_split]("/"), f = 0, g = e[_length]; f < g - 1; ++f)
                 var h = {}, d = d[e[f]] = h;
            d[e[f]] = b
        }
        Zb(c)
    };
    var ac = function () {
        var a = _window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), S(Y, "ci", [])[_push](a), _window.__GOOGLEAPIS = void 0)
    };
    var bc = {
        apppackagename: 1,
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    },
    cc = !1, dc = T(), ec = function () {
        if (!cc) {
            for (var a = _document[_getElementsByTagName]("meta"), b = 0; b < a[_length]; ++b) {
                var c = a[b].name[_toLowerCase]();
                if (0 == c.lastIndexOf("google-signin-", 0)) {
                    var c = c[_substring](14), d = a[b].content;
                    bc[c] && d && (dc[c] = d)
                }
            }
            if (_window.self !== _window.top) {
                var a = _document[_location][_toString](), e;
                for (e in bc)
                    0 < bc[e] && (b = X(a, e, "")) && (dc[e] = b)
            }
            cc = !0
        }
        e = T();
        V(dc, e);
        return e
    },
    fc = function (a) {
        return!!(a.clientid && a.scope && a.callback)
    };

    var gc = _window.console,
        hc = function (a) {
            gc && gc.log && gc.log(a)
        };
    var ic = function () {
            return!!Y.oa
        },
            jc = function () {
        };
    var $ = S(Y, "rw", T()),
        kc = function (a) {
            for (var b in $)a($[b])
        },
        lc = function (a, b) {
            var c = $[a];
            c && c.state < b && (c.state = b)
        };

    var mc;
    var nc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//, oc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,
        pc = function (a) {
            var b = Z("googleapis.config/sessionIndex");
            null == b && (b = _window.__X_GOOG_AUTHUSER);
            if (null == b) {
                var c = _window.google;
                c && (b = c.authuser)
            }
            null == b && (a = a || _window[_location][_href], b = X(a, "authuser") || null, null == b && (b = (b = a[_match](nc)) ? b[1] : null));
            return null == b ? null : _String(b)
        },
        qc = function (a) {
            var b = Z("googleapis.config/sessionDelegate");
            null == b && (b = (a = (a || _window[_location][_href])[_match](oc)) ?
                a[1] : null);
            return null == b ? null : _String(b)
        };
    var rc = function () {
        this.c = -1
    };
    var sc = function () {
        this.c = -1;
        this.c = 64;
        this.b = [];
        this.p = [];
        this.N = [];
        this.n = [];
        this.n[0] = 128;
        for (var a = 1; a < this.c; ++a)this.n[a] = 0;
        this.l = this.g = 0;
        this.reset()
    };
    (function () {
        function a() {
        }

        a.prototype = rc[_prototype];
        sc.$ = rc[_prototype];
        sc.prototype = new a;
        sc.H = function (a, c, d) {
            return rc[_prototype][c][_apply](a, _Array[_prototype][_slice][_call](arguments, 2))
        }
    })();
    sc[_prototype].reset = function () {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.l = this.g = 0
    };
    var tc = function (a, b, c) {
        c || (c = 0);
        var d = a.N;
        if ("string" == typeof b)
            for (var e = 0; 16 > e; e++)
                d[e] = b[_charCodeAt](c) << 24 | b[_charCodeAt](c + 1) << 16 | b[_charCodeAt](c + 2) << 8 | b[_charCodeAt](c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.b[0];
        c = a.b[1];
        for (var g = a.b[2], h = a.b[3], l = a.b[4], n, e = 0; 80 > e; e++)
            40 > e ? 20 > e ? (f = h ^ c & (g ^ h), n = 1518500249) : (f = c ^ g ^ h, n = 1859775393) : 60 > e ? (f = c & g | h & (c | g), n = 2400959708) : (f = c ^ g ^ h, n = 3395469782), f = (b << 5 | b >>> 27) + f + l + n + d[e] & 4294967295, l = h, h = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + h & 4294967295;
        a.b[4] = a.b[4] + l & 4294967295
    };
    sc[_prototype].update = function (a, b) {
        void 0 === b && (b = a[_length]);
        for (var c = b - this.c, d = 0, e = this.p, f = this.g; d < b;) {
            if (0 == f)
                for (; d <= c;)
                    tc(this, a, d), d += this.c;
            if ("string" == typeof a)
                for (; d < b;) {
                    if (e[f] = a[_charCodeAt](d), ++f, ++d, f == this.c) {
                        tc(this, e);
                        f = 0;
                        break
                    }
                }
            else
                for (; d < b;)
                    if (e[f] = a[d], ++f, ++d, f == this.c) {
                        tc(this, e);
                        f = 0;
                        break
                    }
        }
        this.g = f;
        this.l += b
    };
    var uc = function () {
        this.q = new sc
    };
    uc[_prototype].reset = function () {
        this.q.reset()
    };

    var Bc = function () {
        var a;
        vc ? (a = new Win.Uint32Array(1), wc.getRandomValues(a), a = Number("0." + a[0])) : (a = xc, a += _parseInt(yc[_substr](0, 20), 16), yc = zc(yc), a /= Ac + Math.pow(16, 20));
        return a
    },
    wc = Win.crypto, vc = !1, Cc = 0, Dc = 0, xc = 1, Ac = 0, yc = "", Ec = function (a) {
        a = a || Win.event;
        var b = a.screenX + a.clientX << 16, b = b + (a.screenY + a.clientY), b = (new Date)[_getTime]() % 1E6 * b;
        xc = xc * b % Ac;
        0 < Cc && ++Dc == Cc && bb("mousemove", Ec, "remove", "de")
    },
    zc = function (a) {
        var b = new uc;
        a = unescape(_encodeURIComponent(a));
        for (var c = [], d = 0, e = a[_length]; d < e; ++d)
            c[_push](a[_charCodeAt](d));
        b.q[_update](c);
        a = b.q;
        b = [];
        d = 8 * a.l;
        56 > a.g ? a[_update](a.n, 56 - a.g) : a[_update](a.n, a.c - (a.g - 56));
        for (c = a.c - 1; 56 <= c; c--)
            a.p[c] = d & 255, d /= 256;
        tc(a, a.p);
        for (c = d = 0; 5 > c; c++)
            for (e = 24; 0 <= e; e -= 8)
                b[d] = a.b[c] >> e & 255, ++d;
        a = "";
        for (c = 0; c < b[_length]; c++)
            a += "0123456789ABCDEF"[_charAt](Math.floor(b[c] / 16)) + "0123456789ABCDEF"[_charAt](b[c] % 16);
        return a
    },
    vc = !!wc && "function" == typeof wc.getRandomValues;

    vc || (Ac = 1E6 * (screen[_width] * screen[_width] + screen[_height]), yc = zc(Doc.cookie + "|" + Doc[_location] + "|" + (new Date)[_getTime]() + "|" + Math.random()), Cc = Z("random/maxObserveMousemove") || 0, 0 != Cc && bb("mousemove", Ec, "add", "at"));
    var Fc = function () {
        var a = Y.onl;
        if (!a) {
            a = T();
            Y.onl = a;
            var b = T();
            a.e = function (a) {
                var d = b[a];
                d && (delete b[a], d())
            };
            a.a = function (a, d) {
                b[a] = d
            };
            a.r = function (a) {
                delete b[a]
            }
        }
        return a
    },
    Gc = function (a, b) {
        var c = b.onload;
        return"function" === typeof c ? (Fc().a(a, c), c) : null
    },
    Hc = function (a) {
        Ua(/^\w+$/[_test](a), "Unsupported id - " + a);
        Fc();
        return'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    },
    Ic = function (a) {
        Fc().r(a)
    };
    var Jc = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    },
    Kc = {allowtransparency: !0, onload: !0}, Lc = 0, Mc = function (a) {
        Ua(!a || ab[_test](a), "Illegal url for new iframe - " + a)
    },
    Nc = function (a, b, c, d, e) {
        Mc(c.src);
        var f, g = Gc(d, c), h = g ? Hc(d) : "";
        try {
            f = a[_createElement]('<iframe frameborder="' + Ra(_String(c.frameborder)) + '" scrolling="' + Ra(_String(c.scrolling)) + '" ' + h + ' name="' + Ra(_String(c.name)) + '"/>')
        } catch (l) {
            f = a[_createElement]("iframe"),
            g && (f.onload = function () {
                f.onload =
                    null;
                g[_call](this)
            }, Ic(d))
        }
        for (var n in c)
            a = c[n], "style" === n && "object" === typeof a ? V(a, f[_style]) : Kc[n] || f[_setAttribute](n, _String(a));
        (n = e && e.beforeNode || null) || e && e.dontclear || gb(b);
        b.insertBefore(f, n);
        f = n ? n.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };

    var Oc = /^:[\w]+$/,
        Pc = /:([a-zA-Z_]+):/g,
        Qc = function () {
            var a = pc() || "0", b = qc(), c;
            c = pc(void 0) || a;
            var d = qc(void 0), e = "";
            c && (e += "u/" + c + "/");
            d && (e += "b/" + d + "/");
            c = e || null;
            (e = (d = !1 === Z("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = Z("iframes/:socialhost:"),
                g = Z("iframes/:im_socialhost:");
            return mc = {socialhost: f, ctx_socialhost: d ? g : f, session_index: a, session_delegate: b, session_prefix: c, im_prefix: e}
        },
        Rc = function (a, b) {
            return Qc()[b] || ""
        },
        Sc = function (a) {
            return function (b, c) {
                return a ? Qc()[c] || a[c] || "" : Qc()[c] || ""
            }
        };
    var Tc = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        Uc = function (a) {
        var b, c, d;
        b = /[\"\\\x00-\x1f\x7f-\x9f]/g;
        if (void 0 !== a) {
            switch (typeof a) {
                case "string":
                    return b[_test](a) ? '"' + a[_replace](b, function (a) {
                        var b = Tc[a];
                        if (b)return b;
                        b = a[_charCodeAt]();
                        return"\\u00" + Math.floor(b / 16)[_toString](16) + (b % 16)[_toString](16)
                    }) + '"' : '"' + a + '"';
                case "number":
                    return isFinite(a) ? _String(a) : "null";
                case "boolean":
                case "null":
                    return _String(a);
                case "object":
                    if (!a)return"null";
                    b = [];
                    if ("number" === typeof a[_length] && !a.propertyIsEnumerable("length")) {
                        d =
                            a[_length];
                        for (c = 0; c < d; c += 1)b[_push](Uc(a[c]) || "null");
                        return"[" + b[_join](",") + "]"
                    }
                    for (c in a)!/___$/[_test](c) && hasOwn(a, c) && "string" === typeof c && (d = Uc(a[c])) && b[_push](Uc(c) + ":" + d);
                    return"{" + b[_join](",") + "}"
            }
            return""
        }
    },
    Vc = function (a) {
        if (!a)
            return!1;
        if (/^[\],:{}\s]*$/[_test](a[_replace](/\\["\\\/b-u]/g, "@")[_replace](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")[_replace](/(?:^|:|,)(?:\s*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {
            }
        return!1
    },
    Wc = !1;

    try {
        Wc = !!_window[_JSON] && '["a"]' === _window[_JSON].stringify(["a"]) && "a" === _window[_JSON].parse('["a"]')[0]
    } catch (Xc) {
    }
    var Yc = function (a) {
        try {
            return _window[_JSON].parse(a)
        } catch (b) {
            return!1
        }
    },
    Zc = Wc ? _window[_JSON].stringify : Uc, $c = Wc ? Yc : Vc;

    var ad = function (a) {
        var b;
        a[_match](/^https?%3A/i) && (b = _decodeURIComponent(a));
        return $a(_document, b ? b : a)
    },
    bd = function (a) {
        a = a || "canonical";
        for (var b = _document[_getElementsByTagName]("link"), c = 0, d = b[_length]; c < d; c++) {
            var e = b[c],
                f = e[_getAttribute]("rel");
            if (f && f[_toLowerCase]() == a && (e = e[_getAttribute]("href")) && (e = ad(e)) && null != e[_match](/^https?:\/\/[\w\-\_\.]+/i))
                return e
        }
        return _window[_location][_href]
    };
    var cd = {se: "0"},
        dd = {post: !0},
        ed = {style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},
        fd = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        gd = S(Y, "WI", T()),
        hd = function (a, b, c) {
            var d, e;
            d = {};
            var f = e = a;
            "plus" == a && b[_action] && (e = a + "_" + b[_action], f = a + "/" + b[_action]);
            (e = Z("iframes/" + e + "/url")) || (e = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in cd)
                d[g] = g + "/" + (b[g] || cd[g]) + "/";
            d = $a(Doc, e[_replace](Pc, Sc(d)));
            g = "iframes/" + a + "/params/";
            f = {};
            V(b, f);
            (e = Z("lang") || Z("gwidget/lang")) && (f.hl = e);
            dd[a] || (f.origin = _window[_location].origin || _window[_location][_protocol] + "//" + _window[_location].host);
            f.exp = Z(g + "exp");
            if (g = Z(g + "location"))
                for (e = 0; e < g[_length]; e++) {
                var h = g[e];
                f[h] = Win[_location][h]
            }
            switch (a) {
                case "plus":
                case "follow":
                    g = f[_href];
                    e = b[_action] ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? ad(g) : bd(e);
                    f.url = g;
                    delete f[_href];
                    break;
                case "plusone":
                    g = (g = b[_href]) ? ad(g) : bd();
                    f.url = g;
                    g = b.db;
                    e = Z();
                    null == g && e && (g = e.db, null == g && (g = e.gwidget && e.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    e = Z();
                    null == g &&
                    e && (g = e.ecp, null == g && (g = e.gwidget && e.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f[_href];
                    break;
                case "signin":
                    f.url = bd()
            }
            Y.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var l in cd)
                f[l] && delete f[l];
            f.gsrc = Z("iframes/:source:");
            l = Z("inline/css");
            "undefined" !== typeof l && 0 < c && l >= c && (f.ic = "1");
            l = /^#|^fr-/;
            c = {};
            for (var n in f)
                hasOwn(f, n) && l[_test](n) && (c[n[_replace](l, "")] = f[n], delete f[n]);
            n = "q" == Z("iframes/" + a + "/params/si") ? f : c;
            l = ec();
            for (var m in l)
                !hasOwn(l, m) || hasOwn(f, m) || hasOwn(c, m) || (n[m] = l[m]);
            m = [][_concat](fd);
            (n = Z("iframes/" +
                a + "/methods")) && "object" === typeof n && NativeCode[_test](n[_push]) && (m = m[_concat](n));
            for (var p in b)
                hasOwn(b, p) && /^on/[_test](p) && ("plus" != a || "onconnect" != p) && (m[_push](p), delete f[p]);
            delete f.callback;
            c._methods = m[_join](",");
            return Za(d, f, c)
        },
        id = ["style", "data-gapiscan"], kd = function (a) {
            for (var b = T(), c = 0 != a[_nodeName][_toLowerCase]()[_indexOf]("g:"), d = 0, e = a[_attributes][_length]; d < e; d++) {
                var f = a[_attributes][d],
                    g = f.name,
                    h = f.value;
                0 <= Ka[_call](id, g) || c && 0 != g[_indexOf]("data-") || "null" === h || "specified"in f && !f.specified || (c && (g = g[_substr](5)), b[g[_toLowerCase]()] = h)
            }
            a = a[_style];
            (c = jd(a && a[_height])) && (b.height = _String(c));
            (a = jd(a && a[_width])) && (b.width = _String(a));
            return b
        },
        jd = function (a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = _parseInt(a, 10));
            return b
        },
        md = function () {
            var a = Y.drw;
            kc(function (b) {
                if (a !== b.id && 4 != b.state && "share" != b[_type]) {
                    var c = b.id, d = b[_type], e = b.url;
                    b = b.userParams;
                    var f = Doc[_getElementById](c);
                    if (f) {
                        var g = hd(d, b, 0);
                        g ? (f = f[_parentNode], e[_replace](/\#.*/, "")[_replace](/(\?|&)ic=1/, "") !== g[_replace](/\#.*/, "")[_replace](/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, fa(b, d), ld(f, b), (d = $[f.lastChild.id]) && (d.oid = c), lc(c, 4))) : delete $[c]
                    } else
                        delete $[c]
                }
            })
        };
    var nd, od, pd, qd, rd,
        sd = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        td = {plusone: !0, autocomplete: !0, profile: !0, signin: !0};
    nd = S(Y, "SW", T());
    od = S(Y, "SA", T());
    pd = S(Y, "SM", T());
    qd = S(Y, "FW", []);
    rd = null;
    var vd = function (a, b) {
        ud(void 0, !1, a, b)
    },
    ud = function (a, b, c, d) {
        sb("ps0", !0);
        c = ("string" === typeof c ? _document[_getElementById](c) : c) || Doc;
        var e;
        e = Doc[_documentMode];
        if (c.querySelectorAll && (!e || 8 < e)) {
            e = d ? [d] : Sa(nd)[_concat](Sa(od))[_concat](Sa(pd));
            for (var f = [], g = 0; g < e[_length]; g++) {
                var h = e[g];
                f[_push](".g-" + h, "g\\:" + h)
            }
            e = c.querySelectorAll(f[_join](","))
        } else
            e = c[_getElementsByTagName]("*");
        c = T();
        for (f = 0; f < e[_length]; f++) {
            g = e[f];
            var l = g, h = d, n = l[_nodeName][_toLowerCase](), m = void 0;
            l[_getAttribute]("data-gapiscan") ? h = null : (0 == n[_indexOf]("g:") ? m = n[_substr](2) : (l = (l = _String(l.className || l[_getAttribute]("class"))) && sd[_exec](l)) && (m = l[1]), h = !m || !(nd[m] ||
                od[m] || pd[m]) || h && m !== h ? null : m);
            h && (td[h] || 0 == g[_nodeName][_toLowerCase]()[_indexOf]("g:") || 0 != Sa(kd(g))[_length]) && (g[_setAttribute]("data-gapiscan", !0), S(c, h, [])[_push](g))
        }
        if (b)
            for (var p in c)
                for (b = c[p], d = 0; d < b[_length]; d++)
                    b[d][_setAttribute]("data-onload", !0);
        for (var w in c)
            qd[_push](w);
        sb("ps1", !0);
        if ((p = qd[_join](":")) || a)
            try {
                W.load(p, a)
            } catch (C) {
                hc(C);
                return
            }
        if (wd(rd || {}))for (var u in c) {
            a = c[u];
            w = 0;
            for (b = a[_length]; w < b; w++)
                a[w].removeAttribute("data-gapiscan");
            xd(u)
        } else {
            d = [];
            for (u in c)
                for (a = c[u], w = 0, b = a[_length]; w < b; w++)
                    e = a[w], yd(u, e, kd(e), d, b);
            zd(p, d)
        }
    },
    Ad = function (a) {
        var b = S(W, a, {});
        b.go || (b.go = function (b) {
            return vd(b, a)
        },
        b.render = function (b, d) {
            var e = d || {};
            fa(e, a);
            return ld(b, e)
        })
    },
    Bd = function (a) {
        nd[a] = !0
    },
    Cd = function (a) {
        od[a] = !0
    },
    Dd = function (a) {
        pd[a] = !0
    };

    var xd = function (a, b) {
        var c = kb(a);
        b && c ? (c(b), (c = b.iframeNode) && c[_setAttribute]("data-gapiattached", !0)) : W.load(a, function () {
            var c = kb(a), e = b && b.iframeNode;
            e && c ? (c(b), e[_setAttribute]("data-gapiattached", !0)) : (0, W[a].go)(e && e[_parentNode])
        })
    },
    wd = function () {
        return!1
    },
    zd = function () {
    },
    yd = function (a, b, c, d, e, f) {
        switch (Ed(b, a, f)) {
            case 0:
                a = pd[a] ? a + "_annotation" : a;
                d = {};
                d.iframeNode = b;
                d.userParams = c;
                xd(a, d);
                break;
            case 1:
                var g;
                if (b[_parentNode]) {
                    for (var h in c) {
                        if (f = hasOwn(c, h))
                            f = c[h], f = !!f && "object" === typeof f && (!f[_toString] || f[_toString] === _Object[_prototype][_toString] || f[_toString] === _Array[_prototype][_toString]);
                        if (f)
                            try {
                                c[h] = Zc(c[h])
                            } catch (l) {
                                delete c[h]
                            }
                    }
                    var n = !0;
                    c.dontclear && (n = !1);
                    delete c.dontclear;
                    jc();
                    f = hd(a, c, e);
                    h = {
                        allowPost: 1,
                        attributes: ed
                    };
                    h.dontclear = !n;
                    e = {};
                    e.userParams = c;
                    e.url = f;
                    fa(e, a);
                    var m;
                    c.rd ? m = b : (m = _document[_createElement]("div"), b[_setAttribute]("data-gapistub", !0), m[_style].cssText = "position:absolute;width:450px;left:-10000px;", b[_parentNode].insertBefore(m, b));
                    e.siteElement = m;
                    m.id || (b = m, S(gd, a, 0), n = "___" + a + "_" + gd[a]++, b.id = n);
                    b = T();
                    b[">type"] = a;
                    V(c, b);
                    n = f;
                    c = m;
                    f = h || {};
                    b = f[_attributes] || {};
                    Ua(!f.allowPost || !b.onload, "onload is not supported by post iframe");
                    h = b = n;
                    Oc[_test](b) && (h = Z("iframes/" + h[_substring](1) + "/url"), Ua(!!h, "Unknown iframe url config for - " + b));
                    n = $a(Doc, h[_replace](Pc, Rc));
                    b = c.ownerDocument || Doc;
                    m = 0;
                    do h = f.id || ["I", Lc++, "_", (new Date)[_getTime]()][_join](""); while (b[_getElementById](h) && 5 > ++m);
                    Ua(5 > m, "Error creating iframe id");
                    m = {};
                    var p = {};
                    b[_documentMode] && 9 > b[_documentMode] && (m.hostiemode = b[_documentMode]);
                    V(f.queryParams || {}, m);
                    V(f.fragmentParams || {}, p);
                    var w = f.connectWithQueryParams ? m : p, C = f.pfname, u = T();
                    u.id = h;
                    u.parent = b[_location][_protocol] + "//" + b[_location].host;
                    var J = X(b[_location][_href], "parent"), C = C || "";
                    !C && J && (J = X(b[_location][_href], "id", ""),
                        C = X(b[_location][_href], "pfname", ""), C = J ? C + "/" + J : "");
                    u.pfname = C;
                    V(u, w);
                    (u = X(n, "rpctoken") || m.rpctoken || p.rpctoken) || (u = w.rpctoken = f.rpctoken || _String(Math.round(1E8 * Bc())));
                    f.rpctoken = u;
                    u = b[_location][_href];
                    w = T();
                    (J = X(u, "_bsh", Y.bsh)) && (w._bsh = J);
                    (u = ib(u)) && (w.jsh = u);
                    f.hintInFragment ? V(w, p) : V(w, m);
                    n = Za(n, m, p, f.paramsSerializer);
                    p = T();
                    V(Jc, p);
                    V(f[_attributes], p);
                    p.name = p.id = h;
                    p.src = n;
                    f.eurl = n;
                    if ((f || {}).allowPost && 2E3 < n[_length]) {
                        m = Wa(n);
                        p.src = "";
                        p["data-postorigin"] = n;
                        n = Nc(b, c, p, h);
                        -1 != navigator.userAgent[_indexOf]("WebKit") && (g = n.contentWindow.document,
                            g.open(), p = g[_createElement]("div"), w = {}, u = h + "_inner", w.name = u, w.src = "", w.style = "display:none", Nc(b, p, w, u, f));
                        p = (f = m.j[0]) ? f[_split]("&") : [];
                        f = [];
                        for (w = 0; w < p[_length]; w++)u = p[w][_split]("=", 2), f[_push]([_decodeURIComponent(u[0]), _decodeURIComponent(u[1])]);
                        m.j = [];
                        p = Xa(m);
                        m = b[_createElement]("form");
                        m.action = p;
                        m.method = "POST";
                        m.target = h;
                        m[_style].display = "none";
                        for (h = 0; h < f[_length]; h++)p = b[_createElement]("input"), fa(p, "hidden"), p.name = f[h][0], p.value = f[h][1], m[_appendChild](p);
                        c[_appendChild](m);
                        m.submit();
                        m[_parentNode][_removeChild](m);
                        g && g.close();
                        g = n
                    } else
                        g = Nc(b, c, p, h, f);
                    e.iframeNode = g;
                    e.id = g[_getAttribute]("id");
                    g = e.id;
                    c = T();
                    c.id = g;
                    c.userParams = e.userParams;
                    c.url = e.url;
                    fa(c, e[_type]);
                    c.state = 1;
                    $[g] = c;
                    g = e
                } else
                    g = null;
                g && ((e = g.id) && d[_push](e), xd(a, g))
        }
    },
    Ed = function (a, b, c) {
        if (a && 1 === a.nodeType && b) {
            if (c)
                return 1;
            if (pd[b]) {
                if (hb[a[_nodeName][_toLowerCase]()])
                    return(a = a.innerHTML) && a[_replace](/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
            } else {
                if (od[b])
                    return 0;
                if (nd[b])
                    return 1
            }
        }
        return null
    },
    ld = function (a, b) {
        var c = b[_type];
        delete b[_type];
        var d = ("string" === typeof a ? _document[_getElementById](a) : a) || void 0;
        if (d) {
            var e = {}, f;
            for (f in b)
                hasOwn(b, f) && (e[f[_toLowerCase]()] = b[f]);
            e.rd = 1;
            (f = !!e.ri) && delete e.ri;
            var g = [];
            yd(c, d, e, g, 0,
                f);
            zd(c, g)
        } else
            hc("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
    };
    S(W, "platform", {}).go = vd;

    var wd = function (a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b[_length] && a; c++)
            a = a[b[c]];
        b = ib(Loc[_href]);
        return!a || 0 != a[_indexOf]("n;") && 0 != b[_indexOf]("n;") && a !== b
    },
    zd = function (a, b) {
        Fd(a, b)
    },
    db = function (a) {
        ud(a, !0)
    },
    Gd = function (a, b) {
        for (var c = b || [], d = 0; d < c[_length]; ++d)
            a(c[d]);
        for (d = 0; d < c[_length]; d++)
            Ad(c[d])
    };
    wb[_push](["platform", function (a, b, c) {
        rd = c;
        b && qd[_push](b);
        Gd(Bd, a);
        Gd(Cd, c._c.annotation);
        Gd(Dd, c._c.bimodal);
        ac();
        Zb();
        if ("explicit" != Z("parsetags")) {
            jb(a);
            fc(ec()) && !Z("disableRealtimeCallback") && jc();
            var d;
            c && (a = c.callback) && (d = Ta(a), delete c.callback);
            fb(function () {
                db(d)
            })
        }
    }]);
    W._pl = !0;
    var Hd = function (a) {
        a = (a = $[a]) ? a.oid : void 0;
        if (a) {
            var b = Doc[_getElementById](a);
            b && b[_parentNode][_removeChild](b);
            delete $[a];
            Hd(a)
        }
    };
    var Id = /^\{h\:'/, Jd = /^!_/, Kd = "", Fd = function (a, b) {
        function c() {
            bb("message", d, "remove", "de")
        }

        function d(d) {
            var g = d.data,
                h = d.origin;
            if (Ld(g, b)) {
                var l = e;
                e = !1;
                l && sb("rqe");
                Md(a, function () {
                    l && sb("rqd");
                    c();
                    for (var a = S(Y, "RPMQ", []), b = 0; b < a[_length]; b++)
                        a[b]({data: g, origin: h})
                })
            }
        }

        if (0 !== b[_length]) {
            Kd = X(Loc[_href], "pfname", "");
            var e = !0;
            bb("message", d, "add", "at");
            Tb(a, c)
        }
    },
    Ld = function (a, b) {
        a = _String(a);
        if (Id[_test](a))
            return!0;
        var c = !1;
        Jd[_test](a) && (c = !0, a = a[_substr](2));
        if (!/^\{/[_test](a))
            return!1;
        var d = $c(a);
        if (!d)
            return!1;
        var e = d.f;
        if (d.s && e && -1 != Ka[_call](b, e)) {
            if ("_renderstart" === d.s || d.s === Kd + "/" + e + "::_renderstart") {
                var f = d.a && d.a[c ? 0 : 1],
                    c = Doc[_getElementById](e);
                lc(e, 2);
                if (f && c && f[_width] && f[_height]) {
                    n:{
                        d = c[_parentNode];
                        e = f || {};
                        if (ic()) {
                            var g = c.id;
                            if (g) {
                                f = (f = $[g]) ? f.state : void 0;
                                if (1 === f || 4 === f)break n;
                                Hd(g)
                            }
                        }
                        (f = d.nextSibling) && f[_getAttribute] && f[_getAttribute]("data-gapistub") && (d[_parentNode][_removeChild](f), d[_style].cssText = "");
                        var f = e[_width], h = e[_height], l = d[_style];
                        l.textIndent = "0";
                        l.margin = "0";
                        l.padding = "0";
                        l.background = "transparent";
                        l.borderStyle = "none";
                        l.cssFloat = "none";
                        l.styleFloat = "none";
                        l.lineHeight = "normal";
                        l.fontSize =
                            "1px";
                        l.verticalAlign = "baseline";
                        d = d[_style];
                        d.display = "inline-block";
                        l = c[_style];
                        l.position = "static";
                        l.left = 0;
                        l.top = 0;
                        l.visibility = "visible";
                        f && (d.width = l.width = f + "px");
                        h && (d.height = l.height = h + "px");
                        e.verticalAlign && (d.verticalAlign = e.verticalAlign);
                        g && lc(g, 3)
                    }
                    c["data-csi-wdt"] = (new Date)[_getTime]()
                }
            }
            return!0
        }
        return!1
    },
    Md = function (a, b) {
        Tb(a, b)
    };

    var Nd = function (a, b) {
        this.B = a;
        var c = b || {};
        this.R = c.W;
        this.A = c.domain;
        this.C = c.path;
        this.S = c.X
    },
    Od = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
    Pd = /^[A-Z_][A-Z0-9_]{0,63}$/;

    Nd[_prototype].write = function (a, b) {
        if (!Pd[_test](this.B))throw"Invalid cookie name";
        if (!Od[_test](a))throw"Invalid cookie value";
        var c = this.B + "=" + a;
        this.A && (c += ";domain=" + this.A);
        this.C && (c += ";path=" + this.C);
        var d = "number" === typeof b ? b : this.R;
        if (0 <= d) {
            var e = new Date;
            e.setSeconds(e.getSeconds() + d);
            c += ";expires=" + e.toUTCString()
        }
        this.S && (c += ";secure");
        _document.cookie = c;
        return!0
    };
    Nd.iterate = function (a) {
        for (var b = _document.cookie[_split](/;\s*/), c = 0; c < b[_length]; ++c) {
            var d = b[c][_split]("="), e = d[_shift]();
            a(e, d[_join]("="))
        }
    };
    var Qd = function (a) {
            this.U = a
        },
        Rd = {};
    Qd[_prototype].write = function (a) {
        Rd[this.U] = a;
        return!0
    };
    Qd.iterate = function (a) {
        for (var b in Rd)
            Rd.hasOwnProperty(b) && a(b, Rd[b])
    };
    var Sd = "https:" === _window[_location][_protocol], Td = Sd || "http:" === _window[_location][_protocol] ? Nd : Qd, Ud = function (a) {
        var b = a[_substr](1), c = "", d = _window[_location].hostname;
        if ("" !== b) {
            c = _parseInt(b, 10);
            if (isNaN(c))
                return null;
            b = d[_split](".");
            if (b[_length] < c - 1)
                return null;
            b[_length] == c - 1 && (d = "." + d)
        } else
            d = "";
        return{d: "S" == a[_charAt](0), domain: d, i: c}
    },
    Vd = function (a) {
        if (0 !== a[_indexOf]("GCSC"))
            return null;
        var b = {w: !1};
        a = a[_substr](4);
        if (!a)
            return b;
        var c = a[_charAt](0);
        a = a[_substr](1);
        var d = a.lastIndexOf("_");
        if (-1 == d)
            return b;
        var e = Ud(a[_substr](d + 1));
        if (null == e)
            return b;
        a = a[_substring](0, d);
        if ("_" !== a[_charAt](0))
            return b;
        d = "E" ===
            c && e.d;
        return!d && ("U" !== c || e.d) || d && !Sd ? b : {w: !0, d: d, V: a[_substr](1), domain: e.domain, i: e.i}
    },
    Wd = function (a) {
        if (!a)
            return[];
        a = a[_split]("=");
        return a[1] ? a[1][_split]("|") : []
    },
    Xd = function (a) {
        a = a[_split](":");
        return{t: a[0][_split]("=")[1], O: Wd(a[1]), Z: Wd(a[2]), Y: Wd(a[3])}
    },
    Yd = function () {
        var a, b = null;
        Td.iterate(function (c, d) {
            if (0 === c[_indexOf]("G_AUTHUSER_")) {
                var e = Ud(c[_substring](11));
                if (!a || e.d && !a.d || e.d == a.d && e.i > a.i)
                    a = e, b = d
            }
        });
        if (null !== b) {
            var c;
            Td.iterate(function (b, d) {
                var e = Vd(b);
                e && e.w && e.d == a.d && e.i == a.i && (c = d)
            });
            if (c) {
                var d = Xd(c),
                    e = d && d.O[Number(b)], d = d && d.t;
                if (e)
                    return{P: b, Q: e, t: d}
            }
        }
        return null
    };
    var Zd = function (a) {
        this.G = a
    };
    Zd[_prototype]._window = 0;
    Zd[_prototype].F = 2;
    Zd[_prototype].G = null;
    Zd[_prototype].v = !1;
    Zd[_prototype].L = function () {
        this.v || (this.k = 0, this.v = !0, this.D())
    };
    Zd[_prototype].D = function () {
        this.v && (this.G() ? this.k = this.F : this.k = Math.min(2 * (this.k || this.F), 120), k.setTimeout(Ga(this.D, this), 1E3 * this.k))
    };
    for (var $d = 0; 64 > $d; ++$d);

    var ae = null, ic = function () {
        return Y.oa = !0
    },
    jc = function () {
        Y.oa = !0;
        var a = Yd();
        (a = a && a.P) && $b("googleapis.config/sessionIndex", a);
        ae || (ae = S(Y, "ss", new Zd(be)));
        a = ae;
        a.L && a.L()
    },
    be = function () {
        var a = Yd(), b = a && a.Q || null, c = a && a.t;
        Tb("auth", {callback: function () {
            var a = Win.gapi.auth,
                e = {
                    client_id: c,
                    session_state: b
                };
            a.checkSessionState(e, function (b) {
                var c = e.session_state, h = Z("isLoggedIn");
                b = Z("debug/forceIm") ? !1 : c && b || !c && !b;
                if (h = h != b)$b("isLoggedIn", b), jc(), md(), b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null));
                b = ec();
                var l = Z("savedUserState"),
                    c = a._guss(b.cookiepolicy),
                    l = l != c && "undefined" != typeof l;
                $b("savedUserState", c);
                (h || l) && fc(b) && !Z("disableRealtimeCallback") && a._pimf(b, !0)
            })
        }});
        return!0
    };
    sb("bs0", !0, _window.gapi._bs);
    sb("bs1", !0);
    delete _window.gapi._bs;
})();
gapi.load("client:plusone", {
    callback: window["gaextOnGapiClientLoadCallback"],
    _c: {
        "jsl": {
            "ci": {
                "llang": "zh",
                "client": {
                    "headers": {
                        "response": ["Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", "WWW-Authenticate", "X-Goog-Safety-Content-Type", "X-Goog-Safety-Encoding", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status", "X-Goog-Upload-URL", "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid"],
                        "request": ["Accept", "Accept-Language", "Authorization", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "GData-Version", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Origin", "OriginToken", "Pragma", "Range", "Slug", "Transfer-Encoding", "X-ClientDetails", "X-GData-Client", "X-GData-Key", "X-Goog-AuthUser", "X-Goog-PageId", "X-Goog-Encode-Response-If-Executable", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Experiments", "x-goog-iam-role", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition", "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-Visitor-Id", "X-HTTP-Method-Override", "X-JavaScript-User-Agent", "X-Pan-Versionid", "X-Origin", "X-Referer", "X-Upload-Content-Length", "X-Upload-Content-Type", "X-Use-HTTP-Status-Code-Override", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"]
                    },
                    "cors": false
                },
                "plus_layer": {
                    "isEnabled": false
                },
                "enableMultilogin": true,
                "disableRealtimeCallback": false,
                "isLoggedIn": true,
                "iframes": {
                    "additnow": {
                        "methods": ["launchurl"],
                        "url": "https://apis.google.com/additnow/additnow.html?usegapi\u003d1"
                    },
                    "person": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
                    },
                    "visibility": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
                    },
                    "photocomments": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"
                    },
                    "plus_followers": {
                        "params": {"url": ""},
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
                    },
                    "signin": {
                        "methods": ["onauth"],
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1"
                    },
                    "share": {
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
                    },
                    "commentcount": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
                    },
                    "page": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
                    },
                    "hangout": {
                        "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                    },
                    "plus_circle": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
                    },
                    "youtube": {
                        "methods": ["scroll", "openwindow"],
                        "params": {"location": ["search", "hash"]},
                        "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1"
                    },
                    "zoomableimage": {
                        "url": "https://ssl.gstatic.com/microscope/embed/"
                    },
                    "card": {
                        "url": ":socialhost:/:session_prefix:_/hovercard/card"
                    },
                    "evwidget": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
                    },
                    "reportabuse": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"
                    },
                    "follow": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
                    },
                    "shortlists": {"url": ""},
                    "plus": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
                    },
                    "configurator": {
                        "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
                    },
                    ":socialhost:": "https://apis.google.com",
                    "post": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
                    },
                    "community": {
                        "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
                    },
                    ":gplus_url:": "https://plus.google.com",
                    "rbr_s": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                    },
                    "autocomplete": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                    },
                    "plus_share": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
                    },
                    ":source:": "3p",
                    "blogger": {
                        "methods": ["scroll", "openwindow"],
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1"
                    },
                    "savetowallet": {
                        "url": "https://clients5.google.com/s2w/o/savetowallet"
                    },
                    "rbr_i": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                    },
                    "appcirclepicker": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                    },
                    "savetodrive": {
                        "methods": ["save"],
                        "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1"
                    },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    "ytshare": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
                    },
                    ":signuphost:": "https://plus.google.com",
                    "plusone": {
                        "params": {"count": "", "size": "", "url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
                    },
                    "comments": {
                        "methods": ["scroll", "openwindow"],
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1"
                    },
                    "ytsubscribe": {
                        "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
                    }
                },
                "isPlusUser": true,
                "debug": {
                    "host": "https://apis.google.com",
                    "forceIm": false,
                    "reportExceptionRate": 0.05,
                    "rethrowException": false
                },
                "enableContextualSignin": false,
                "enableSigninTooltip": false,
                "deviceType": "desktop",
                "inline": {"css": 1},
                "lexps": [102, 99, 97, 79, 109, 45, 17, 117, 115, 81, 127, 123, 122, 61, 30],
                "include_granted_scopes": true,
                "oauth-flow": {
                    "usegapi": false,
                    "disableOpt": true,
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay"
                },
                "report": {
                    "apiRate": {"gapi\\.signin\\..*": 0.05},
                    "host": "https://apis.google.com",
                    "rate": 0.001,
                    "apis": ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.auth\\..*", "gapi\\.client\\..*"]
                },
                "csi": {"rate": 0.01},
                "googleapis.config": {
                    "auth": {
                        "useFirstPartyAuthV2": true
                    }
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.zh_CN.H4zztFe7d9A.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAItRSTNqAoR1SUHwHUWSQKkats2rb6BG4A",
            "u": "https://apis.google.com/js/client:plusone.js?onload\u003dgaextOnGapiClientLoadCallback",
            "hee": true,
            "fp": "0849350dce2cb502a5f909e55ba02710e7d5e531",
            "dpo": false
        },
        "platform": ["additnow", "blogger", "comments", "commentcount", "community", "follow", "page", "person", "plus", "plusone", "post", "reportabuse", "savetodrive", "savetowallet", "shortlists", "visibility", "youtube", "ytsubscribe", "zoomableimage", "photocomments", "hangout"],
        "fp": "0849350dce2cb502a5f909e55ba02710e7d5e531",
        "annotation": ["interactivepost", "recobar", "autocomplete", "profile"],
        "bimodal": ["signin", "share"]
    }
});