var g, p = this, aa = function (a, b) {
        var c = a.split("."), d = p;
        c[0]in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }, ba = function (a) {
        a = a.split(".");
        for (var b = p, c; c = a.shift();)if (null != b[c])b = b[c]; else return null;
        return b
    }, ca = function () {
    }, da = function (a) {
        a.r = function () {
            return a.$d ? a.$d : a.$d = new a
        }
    }, ea = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return"array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return"object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
        } else return"null"; else if ("function" == b && "undefined" == typeof a.call)return"object";
        return b
    }, q = function (a) {
        return void 0 !== a
    }, r = function (a) {
        return"array" ==
            ea(a)
    }, fa = function (a) {
        var b = ea(a);
        return"array" == b || "object" == b && "number" == typeof a.length
    }, s = function (a) {
        return"string" == typeof a
    }, ga = function (a) {
        return"number" == typeof a
    }, t = function (a) {
        return"function" == ea(a)
    }, ha = function (a) {
        var b = typeof a;
        return"object" == b && null != a || "function" == b
    }, ka = function (a) {
        return a[ia] || (a[ia] = ++ja)
    }, ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0, la = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ma = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d =
                Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, na = function (a, b, c) {
        na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
        return na.apply(null, arguments)
    }, v = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    },
    pa = Date.now || function () {
        return+new Date
    }, w = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.c = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.uf = function (a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    };
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return na.apply(null, c)
    }
    return na(this, a)
};
var qa = function (a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, qa); else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
w(qa, Error);
qa.prototype.name = "CustomError";
var ra;
var sa = function (a, b) {
    return 0 == a.lastIndexOf(b, 0)
}, ta = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
    return d + c.join("%s")
}, ua = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}, va = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, wa = function (a) {
    return a.replace(/(\r\n|\r|\n)/g, "<br>")
}, Da = function (a) {
    if (!xa.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
    return a
}, ya = /&/g, za = /</g, Aa = />/g, Ba = /"/g, Ca = /'/g, xa = /[&<>"']/, Ea = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a
}, Ga = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}, Ha = function () {
    return"transform".replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase()
    })
}, Ia = function () {
    var a = s(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
        "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return"transform".replace(RegExp("(^" + (a ? "|[" + a + "]+" : "") + ")([a-z])", "g"), function (a, c, d) {
        return c + d.toUpperCase()
    })
};
var Ja = function (a, b) {
    b.unshift(a);
    qa.call(this, ta.apply(null, b));
    b.shift()
};
w(Ja, qa);
Ja.prototype.name = "AssertionError";
var Ka = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
    throw new Ja("" + e, f || []);
}, x = function (a, b, c) {
    a || Ka("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
}, La = function (a, b) {
    throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, Ma = function (a, b, c) {
    s(a) || Ka("Expected string but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}, Na = function (a, b, c) {
    ha(a) || Ka("Expected object but got %s: %s.", [ea(a),
        a], b, Array.prototype.slice.call(arguments, 2))
}, Oa = function (a, b, c) {
    r(a) || Ka("Expected array but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2))
}, Pa = function (a, b, c) {
    "boolean" == typeof a || Ka("Expected boolean but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2))
}, Qa = function (a, b, c, d) {
    a instanceof b || Ka("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
};
var y = Array.prototype, Ra = y.indexOf ? function (a, b, c) {
    x(null != a.length);
    return y.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (s(a))return s(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
}, z = y.forEach ? function (a, b, c) {
    x(null != a.length);
    y.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, Sa = y.filter ? function (a, b, c) {
    x(null != a.length);
    return y.filter.call(a, b,
        c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, h = s(a) ? a.split("") : a, k = 0; k < d; k++)if (k in h) {
        var l = h[k];
        b.call(c, l, k, a) && (e[f++] = l)
    }
    return e
}, Ta = y.map ? function (a, b, c) {
    x(null != a.length);
    return y.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = s(a) ? a.split("") : a, h = 0; h < d; h++)h in f && (e[h] = b.call(c, f[h], h, a));
    return e
}, Ua = y.some ? function (a, b, c) {
    x(null != a.length);
    return y.some.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return!0;
    return!1
}, Va = y.every ? function (a, b, c) {
    x(null != a.length);
    return y.every.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return!1;
    return!0
}, Wa = function (a, b) {
    var c;
    t:{
        c = a.length;
        for (var d = s(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
            c = e;
            break t
        }
        c = -1
    }
    return 0 > c ? null : s(a) ? a.charAt(c) : a[c]
}, Xa = function (a, b) {
    return 0 <= Ra(a, b)
}, Ya = function (a, b) {
    var c = Ra(a, b), d;
    if (d = 0 <= c)x(null != a.length), y.splice.call(a, c, 1);
    return d
}, Za =
    function (a) {
        return y.concat.apply(y, arguments)
    }, $a = function (a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return[]
}, bb = function (a, b, c, d) {
    x(null != a.length);
    y.splice.apply(a, ab(arguments, 1))
}, ab = function (a, b, c) {
    x(null != a.length);
    return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c)
}, db = function (a, b) {
    a.sort(b || cb)
}, eb = function (a) {
    var b = cb;
    db(a, function (a, d) {
        return b(a.category, d.category)
    })
}, cb = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0
};
var fb = function (a) {
    return function () {
        return a
    }
}, gb = fb(!0);
var A = function (a, b) {
    this.x = q(a) ? a : 0;
    this.y = q(b) ? b : 0
};
A.prototype.T = function () {
    return new A(this.x, this.y)
};
A.prototype.toString = function () {
    return"(" + this.x + ", " + this.y + ")"
};
var hb = function (a, b) {
    return new A(a.x - b.x, a.y - b.y)
};
A.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var ib = function (a, b) {
    this.width = a;
    this.height = b
};
ib.prototype.T = function () {
    return new ib(this.width, this.height)
};
ib.prototype.toString = function () {
    return"(" + this.width + " x " + this.height + ")"
};
ib.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var jb = function (a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
}, kb = function (a, b) {
    for (var c in a)if (a[c] == b)return!0;
    return!1
}, mb = function () {
    var a = lb, b;
    for (b in a)return!1;
    return!0
}, nb = function (a, b, c) {
    if (b in a)throw Error('The object already contains the key "' + b + '"');
    a[b] = c
}, ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), pb = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < ob.length; f++)c =
            ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, qb = function (a) {
    var b = arguments.length;
    if (1 == b && r(arguments[0]))return qb.apply(null, arguments[0]);
    if (b % 2)throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
    return c
}, rb = function (a) {
    var b = arguments.length;
    if (1 == b && r(arguments[0]))return rb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0;
    return c
};
var sb;
t:{
    var tb = p.navigator;
    if (tb) {
        var ub = tb.userAgent;
        if (ub) {
            sb = ub;
            break t
        }
    }
    sb = ""
}
var vb = function (a) {
    return-1 != sb.indexOf(a)
};
var wb, xb = function () {
    return p.navigator || null
}, yb = vb("Opera") || vb("OPR"), B = vb("Trident") || vb("MSIE"), C = vb("Gecko") && -1 == sb.toLowerCase().indexOf("webkit") && !(vb("Trident") || vb("MSIE")), D = -1 != sb.toLowerCase().indexOf("webkit"), zb = xb();
wb = -1 != (zb && zb.platform || "").indexOf("Mac");
var Ab = !!xb() && -1 != (xb().appVersion || "").indexOf("X11"), Bb = function () {
    var a = p.document;
    return a ? a.documentMode : void 0
}, Cb = function () {
    var a = "", b;
    if (yb && p.opera)return a = p.opera.version, t(a) ? a() : a;
    C ? b = /rv\:([^\);]+)(\)|;)/ : B ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(sb)) ? a[1] : "");
    return B && (b = Bb(), b > parseFloat(a)) ? String(b) : a
}(), Db = {}, E = function (a) {
    var b;
    if (!(b = Db[a])) {
        b = 0;
        for (var c = va(String(Cb)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length),
                 f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
            do {
                var n = l.exec(h) || ["", "", ""], u = m.exec(k) || ["", "", ""];
                if (0 == n[0].length && 0 == u[0].length)break;
                b = Ga(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || Ga(0 == n[2].length, 0 == u[2].length) || Ga(n[2], u[2])
            } while (0 == b)
        }
        b = Db[a] = 0 <= b
    }
    return b
}, Eb = p.document, Fb = Eb && B ? Bb() || ("CSS1Compat" == Eb.compatMode ? parseInt(Cb, 10) : 5) : void 0;
var Gb = !B || B && 9 <= Fb, Hb = !C && !B || B && B && 9 <= Fb || C && E("1.9.1"), Ib = B && !E("9");
var Kb = function (a) {
    a = a.className;
    return s(a) && a.match(/\S+/g) || []
}, Lb = function (a, b) {
    for (var c = Kb(a), d = ab(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++)Xa(f, d[h]) || f.push(d[h]);
    a.className = c.join(" ");
    return c.length == e
}, Nb = function (a, b) {
    var c = Kb(a), d = ab(arguments, 1), e = Mb(c, d);
    a.className = e.join(" ");
    return e.length == c.length - d.length
}, Mb = function (a, b) {
    return Sa(a, function (a) {
        return!Xa(b, a)
    })
};
var G = function (a) {
        return a ? new Ob(F(a)) : ra || (ra = new Ob)
    }, H = function (a) {
        return s(a) ? document.getElementById(a) : a
    }, Qb = function (a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Pb(document, "*", a, b)
    }, Rb = function (a, b) {
        var c = b || document, d = null;
        return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Pb(document, "*", a, b)[0]) || null
    }, Pb = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))return a.querySelectorAll(b +
            (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)b = h.className, "function" == typeof b.split && Xa(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }, Tb = function (a, b) {
        jb(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Sb ? a.setAttribute(Sb[d], b) : sa(d, "aria-") || sa(d,
                "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    }, Sb = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"}, Ub = function (a) {
        return D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }, Wb = function (a) {
        return a ? Vb(a) : window
    }, Vb = function (a) {
        return a.parentWindow || a.defaultView
    }, Yb = function (a, b, c) {
        return Xb(document, arguments)
    },
    Xb = function (a, b) {
        var c = b[0], d = b[1];
        if (!Gb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Da(d.name), '"');
            if (d.type) {
                c.push(' type="', Da(d.type), '"');
                var e = {};
                pb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (s(d) ? c.className = d : r(d) ? Lb.apply(null, [c].concat(d)) : Tb(c, d));
        2 < b.length && Zb(a, c, b, 2);
        return c
    }, Zb = function (a, b, c, d) {
        function e(c) {
            c && b.appendChild(s(c) ? a.createTextNode(c) : c)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !fa(f) || ha(f) && 0 < f.nodeType ? e(f) : z($b(f) ? $a(f) : f,
                e)
        }
    }, ac = function (a) {
        for (var b; b = a.firstChild;)a.removeChild(b)
    }, bc = function (a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }, cc = function (a, b) {
        if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)b = b.parentNode;
        return b == a
    }, F = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }, dc = function (a, b) {
        x(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent"in
            a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else ac(a), a.appendChild(F(a).createTextNode(String(b)))
    }, ec = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, fc = {IMG: " ", BR: "\n"}, gc = function (a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }, hc = function (a) {
        a = a.tabIndex;
        return ga(a) && 0 <= a && 32768 > a
    }, jc = function (a) {
        var b = [];
        ic(a, b, !1);
        return b.join("")
    }, ic = function (a, b, c) {
        if (!(a.nodeName in ec))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in fc)b.push(fc[a.nodeName]); else for (a = a.firstChild; a;)ic(a, b, c), a = a.nextSibling
    }, $b = function (a) {
        if (a && "number" == typeof a.length) {
            if (ha(a))return"function" == typeof a.item || "string" == typeof a.item;
            if (t(a))return"function" == typeof a.item
        }
        return!1
    }, kc = function (a, b) {
        for (var c = 0; a;) {
            if (b(a))return a;
            a = a.parentNode;
            c++
        }
        return null
    }, lc = function (a) {
        try {
            return a && a.activeElement
        } catch (b) {
        }
        return null
    },
    Ob = function (a) {
        this.q = a || p.document || document
    };
Ob.prototype.A = G;
var mc = function (a) {
    return a.q
};
Ob.prototype.a = function (a) {
    return s(a) ? this.q.getElementById(a) : a
};
Ob.prototype.g = function (a, b, c) {
    return Xb(this.q, arguments)
};
Ob.prototype.createElement = function (a) {
    return this.q.createElement(a)
};
Ob.prototype.createTextNode = function (a) {
    return this.q.createTextNode(String(a))
};
var nc = function (a) {
    return"CSS1Compat" == a.q.compatMode
}, oc = function (a) {
    var b = a.q;
    a = Ub(b);
    b = Vb(b);
    return B && E("10") && b.pageYOffset != a.scrollTop ? new A(a.scrollLeft, a.scrollTop) : new A(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
g = Ob.prototype;
g.appendChild = function (a, b) {
    a.appendChild(b)
};
g.append = function (a, b) {
    Zb(F(a), a, arguments, 1)
};
g.getChildren = function (a) {
    return Hb && void 0 != a.children ? a.children : Sa(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
};
g.contains = cc;
g.Ba = function (a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!gc(a) || hc(a)) : gc(a) && hc(a)) && B ? (a = t(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height: a.offsetHeight, width: a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
var pc = "StopIteration"in p ? p.StopIteration : Error("StopIteration"), qc = function () {
};
qc.prototype.next = function () {
    throw pc;
};
qc.prototype.pf = function () {
    return this
};
var rc = function (a, b) {
    this.sa = {};
    this.v = [];
    this.Mb = this.G = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        var e;
        if (a instanceof rc)e = a.pb(), d = a.qb(); else {
            var c = [], f = 0;
            for (e in a)c[f++] = e;
            e = c;
            c = [];
            f = 0;
            for (d in a)c[f++] = a[d];
            d = c
        }
        for (c = 0; c < e.length; c++)this.set(e[c], d[c])
    }
};
g = rc.prototype;
g.qb = function () {
    sc(this);
    for (var a = [], b = 0; b < this.v.length; b++)a.push(this.sa[this.v[b]]);
    return a
};
g.pb = function () {
    sc(this);
    return this.v.concat()
};
g.Ob = function (a) {
    return tc(this.sa, a)
};
g.clear = function () {
    this.sa = {};
    this.Mb = this.G = this.v.length = 0
};
g.remove = function (a) {
    return tc(this.sa, a) ? (delete this.sa[a], this.G--, this.Mb++, this.v.length > 2 * this.G && sc(this), !0) : !1
};
var sc = function (a) {
    if (a.G != a.v.length) {
        for (var b = 0, c = 0; b < a.v.length;) {
            var d = a.v[b];
            tc(a.sa, d) && (a.v[c++] = d);
            b++
        }
        a.v.length = c
    }
    if (a.G != a.v.length) {
        for (var e = {}, c = b = 0; b < a.v.length;)d = a.v[b], tc(e, d) || (a.v[c++] = d, e[d] = 1), b++;
        a.v.length = c
    }
};
g = rc.prototype;
g.get = function (a, b) {
    return tc(this.sa, a) ? this.sa[a] : b
};
g.set = function (a, b) {
    tc(this.sa, a) || (this.G++, this.v.push(a), this.Mb++);
    this.sa[a] = b
};
g.forEach = function (a, b) {
    for (var c = this.pb(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.T = function () {
    return new rc(this)
};
g.pf = function (a) {
    sc(this);
    var b = 0, c = this.v, d = this.sa, e = this.Mb, f = this, h = new qc;
    h.next = function () {
        for (; ;) {
            if (e != f.Mb)throw Error("The map has changed since the iterator was created");
            if (b >= c.length)throw pc;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var tc = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var uc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), wc = function (a) {
    if (vc) {
        vc = !1;
        var b = p.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = wc(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)throw vc = !0, Error();
        }
    }
    return a.match(uc)
}, vc = D;
var xc = function (a, b) {
    var c;
    if (a instanceof xc)this.da = q(b) ? b : a.da, yc(this, a.Aa), c = a.pc, zc(this), this.pc = c, c = a.bb, zc(this), this.bb = c, Ac(this, a.oc), c = a.Pa, zc(this), this.Pa = c, Bc(this, a.Na.T()), c = a.nc, zc(this), this.nc = c; else if (a && (c = wc(String(a)))) {
        this.da = !!b;
        yc(this, c[1] || "", !0);
        var d = c[2] || "";
        zc(this);
        this.pc = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        zc(this);
        this.bb = d ? decodeURIComponent(d) : "";
        Ac(this, c[4]);
        d = c[5] || "";
        zc(this);
        this.Pa = d ? decodeURIComponent(d) : "";
        Bc(this, c[6] || "", !0);
        c = c[7] || "";
        zc(this);
        this.nc = c ? decodeURIComponent(c) : ""
    } else this.da = !!b, this.Na = new Cc(null, 0, this.da)
};
g = xc.prototype;
g.Aa = "";
g.pc = "";
g.bb = "";
g.oc = null;
g.Pa = "";
g.nc = "";
g.qf = !1;
g.da = !1;
g.toString = function () {
    var a = [], b = this.Aa;
    b && a.push(Dc(b, Ec), ":");
    if (b = this.bb) {
        a.push("//");
        var c = this.pc;
        c && a.push(Dc(c, Ec), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.oc;
        null != b && a.push(":", String(b))
    }
    if (b = this.Pa)this.bb && "/" != b.charAt(0) && a.push("/"), a.push(Dc(b, "/" == b.charAt(0) ? Fc : Gc));
    (b = this.Na.toString()) && a.push("?", b);
    (b = this.nc) && a.push("#", Dc(b, Hc));
    return a.join("")
};
g.T = function () {
    return new xc(this)
};
var yc = function (a, b, c) {
    zc(a);
    a.Aa = c ? b ? decodeURIComponent(b) : "" : b;
    a.Aa && (a.Aa = a.Aa.replace(/:$/, ""))
}, Ac = function (a, b) {
    zc(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
        a.oc = b
    } else a.oc = null
}, Bc = function (a, b, c) {
    zc(a);
    b instanceof Cc ? (a.Na = b, a.Na.gd(a.da)) : (c || (b = Dc(b, Ic)), a.Na = new Cc(b, 0, a.da))
}, zc = function (a) {
    if (a.qf)throw Error("Tried to modify a read-only Uri");
};
xc.prototype.gd = function (a) {
    this.da = a;
    this.Na && this.Na.gd(a);
    return this
};
var Jc = function (a) {
    return a instanceof xc ? a.T() : new xc(a, void 0)
}, Dc = function (a, b) {
    return s(a) ? encodeURI(a).replace(b, Kc) : null
}, Kc = function (a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}, Ec = /[#\/\?@]/g, Gc = /[\#\?:]/g, Fc = /[\#\?]/g, Ic = /[\#\?@]/g, Hc = /#/g, Cc = function (a, b, c) {
    this.Z = a || null;
    this.da = !!c
}, Mc = function (a) {
    if (!a.t && (a.t = new rc, a.G = 0, a.Z))for (var b = a.Z.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="), e = null, f = null;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d +
            1)) : e = b[c];
        e = decodeURIComponent(e.replace(/\+/g, " "));
        e = Lc(a, e);
        a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
};
g = Cc.prototype;
g.t = null;
g.G = null;
g.add = function (a, b) {
    Mc(this);
    this.Z = null;
    a = Lc(this, a);
    var c = this.t.get(a);
    c || this.t.set(a, c = []);
    c.push(b);
    this.G++;
    return this
};
g.remove = function (a) {
    Mc(this);
    a = Lc(this, a);
    return this.t.Ob(a) ? (this.Z = null, this.G -= this.t.get(a).length, this.t.remove(a)) : !1
};
g.clear = function () {
    this.t = this.Z = null;
    this.G = 0
};
g.Ob = function (a) {
    Mc(this);
    a = Lc(this, a);
    return this.t.Ob(a)
};
g.pb = function () {
    Mc(this);
    for (var a = this.t.qb(), b = this.t.pb(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
    return c
};
g.qb = function (a) {
    Mc(this);
    var b = [];
    if (s(a))this.Ob(a) && (b = Za(b, this.t.get(Lc(this, a)))); else {
        a = this.t.qb();
        for (var c = 0; c < a.length; c++)b = Za(b, a[c])
    }
    return b
};
g.set = function (a, b) {
    Mc(this);
    this.Z = null;
    a = Lc(this, a);
    this.Ob(a) && (this.G -= this.t.get(a).length);
    this.t.set(a, [b]);
    this.G++;
    return this
};
g.get = function (a, b) {
    var c = a ? this.qb(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
g.toString = function () {
    if (this.Z)return this.Z;
    if (!this.t)return"";
    for (var a = [], b = this.t.pb(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.qb(d), f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h)
    }
    return this.Z = a.join("&")
};
g.T = function () {
    var a = new Cc;
    a.Z = this.Z;
    this.t && (a.t = this.t.T(), a.G = this.G);
    return a
};
var Lc = function (a, b) {
    var c = String(b);
    a.da && (c = c.toLowerCase());
    return c
};
Cc.prototype.gd = function (a) {
    a && !this.da && (Mc(this), this.Z = null, this.t.forEach(function (a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Z = null, this.t.set(Lc(this, d), $a(a)), this.G += a.length))
    }, this));
    this.da = a
};
var Oc = function (a, b) {
    var c = Array.prototype.slice.call(arguments), d = c.shift();
    if ("undefined" == typeof d)throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, k, l, m, n, u) {
        if ("%" == m)return"%";
        var L = c.shift();
        if ("undefined" == typeof L)throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = L;
        return Nc[m].apply(null, arguments)
    })
}, Nc = {s: function (a, b, c) {
    return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c -
        a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
}, f: function (a, b, c, d, e) {
    d = a.toString();
    isNaN(e) || "" == e || (d = a.toFixed(e));
    var f;
    f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
    0 <= a && (d = f + d);
    if (isNaN(c) || d.length >= c)return d;
    d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
    a = c - d.length - f.length;
    return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
}, d: function (a, b, c, d, e, f, h, k) {
    return Nc.f(parseInt(a, 10), b, c, d, 0, f, h, k)
}};
Nc.i = Nc.d;
Nc.u = Nc.d;
var Pc = function (a) {
    Pc[" "](a);
    return a
};
Pc[" "] = ca;
var Qc = !B || B && 9 <= Fb, Rc = !B || B && 9 <= Fb, Sc = B && !E("9");
!D || E("528");
C && E("1.9b") || B && E("8") || yb && E("9.5") || D && E("528");
C && !E("8") || B && E("9");
var Tc = function () {
};
Tc.prototype.Xc = !1;
Tc.prototype.P = function () {
    this.Xc || (this.Xc = !0, this.k())
};
var Uc = function (a, b) {
    a.Wb || (a.Wb = []);
    a.Wb.push(na(b, void 0))
};
Tc.prototype.k = function () {
    if (this.Wb)for (; this.Wb.length;)this.Wb.shift()()
};
var Vc = function (a) {
    a && "function" == typeof a.P && a.P()
};
var I = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.fb = !1;
    this.Od = !0
};
I.prototype.k = function () {
};
I.prototype.P = function () {
};
I.prototype.stopPropagation = function () {
    this.fb = !0
};
I.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Od = !1
};
var Wc = B ? "focusin" : "DOMFocusIn", Xc = B ? "focusout" : "DOMFocusOut";
var J = function (a, b) {
    I.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.$c = !1;
    this.Qa = null;
    if (a) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (C) {
                var e;
                t:{
                    try {
                        Pc(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {
                    }
                    e = !1
                }
                e || (d = null)
            }
        } else"mouseover" ==
        c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = D || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = D || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.$c = wb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.Qa = a;
        a.defaultPrevented && this.preventDefault()
    }
};
w(J, I);
var Yc = [1, 4, 2], Zc = function (a) {
    return Qc ? 0 == a.Qa.button : "click" == a.type ? !0 : !!(a.Qa.button & Yc[0])
};
J.prototype.stopPropagation = function () {
    J.c.stopPropagation.call(this);
    this.Qa.stopPropagation ? this.Qa.stopPropagation() : this.Qa.cancelBubble = !0
};
J.prototype.preventDefault = function () {
    J.c.preventDefault.call(this);
    var a = this.Qa;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, Sc)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
J.prototype.Sb = function () {
    return this.Qa
};
J.prototype.k = function () {
};
var $c = "closure_listenable_" + (1E6 * Math.random() | 0), ad = function (a) {
    try {
        return!(!a || !a[$c])
    } catch (b) {
        return!1
    }
}, bd = 0;
var cd = function (a, b, c, d, e) {
    this.cb = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.sc = !!d;
    this.vc = e;
    this.key = ++bd;
    this.removed = this.tc = !1
}, dd = function (a) {
    a.removed = !0;
    a.cb = null;
    a.proxy = null;
    a.src = null;
    a.vc = null
};
var ed = function (a) {
    this.src = a;
    this.K = {};
    this.Rb = 0
};
ed.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.K[f];
    a || (a = this.K[f] = [], this.Rb++);
    var h = fd(a, b, d, e);
    -1 < h ? (b = a[h], c || (b.tc = !1)) : (b = new cd(b, this.src, f, !!d, e), b.tc = c, a.push(b));
    return b
};
ed.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.K))return!1;
    var e = this.K[a];
    b = fd(e, b, c, d);
    return-1 < b ? (dd(e[b]), x(null != e.length), y.splice.call(e, b, 1), 0 == e.length && (delete this.K[a], this.Rb--), !0) : !1
};
var gd = function (a, b) {
    var c = b.type;
    if (!(c in a.K))return!1;
    var d = Ya(a.K[c], b);
    d && (dd(b), 0 == a.K[c].length && (delete a.K[c], a.Rb--));
    return d
};
ed.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.K)if (!a || c == a) {
        for (var d = this.K[c], e = 0; e < d.length; e++)++b, dd(d[e]);
        delete this.K[c];
        this.Rb--
    }
    return b
};
ed.prototype.Pb = function (a, b, c, d) {
    a = this.K[a.toString()];
    var e = -1;
    a && (e = fd(a, b, c, d));
    return-1 < e ? a[e] : null
};
var fd = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.cb == b && f.sc == !!c && f.vc == d)return e
    }
    return-1
};
var hd = "closure_lm_" + (1E6 * Math.random() | 0), id = {}, jd = 0, K = function (a, b, c, d, e) {
    if (r(b)) {
        for (var f = 0; f < b.length; f++)K(a, b[f], c, d, e);
        return null
    }
    c = kd(c);
    if (ad(a))a = a.listen(b, c, d, e); else {
        if (!b)throw Error("Invalid event type");
        var f = !!d, h = ld(a);
        h || (a[hd] = h = new ed(a));
        c = h.add(b, c, !1, d, e);
        c.proxy || (d = md(), c.proxy = d, d.src = a, d.cb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(nd(b.toString()), d), jd++);
        a = c
    }
    return a
}, md = function () {
    var a = od, b = Rc ? function (c) {
        return a.call(b.src, b.cb, c)
    } :
        function (c) {
            c = a.call(b.src, b.cb, c);
            if (!c)return c
        };
    return b
}, pd = function (a, b, c, d, e) {
    if (r(b))for (var f = 0; f < b.length; f++)pd(a, b[f], c, d, e); else c = kd(c), ad(a) ? a.Y(b, c, d, e) : a && (a = ld(a)) && (b = a.Pb(b, c, !!d, e)) && qd(b)
}, qd = function (a) {
    if (ga(a) || !a || a.removed)return!1;
    var b = a.src;
    if (ad(b))return gd(b.ra, a);
    var c = a.type, d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c, d, a.sc) : b.detachEvent && b.detachEvent(nd(c), d);
    jd--;
    (c = ld(b)) ? (gd(c, a), 0 == c.Rb && (c.src = null, b[hd] = null)) : dd(a);
    return!0
}, rd = function (a) {
    if (a)if (ad(a))a.ra &&
    a.ra.removeAll(void 0); else if (a = ld(a)) {
        var b = 0, c;
        for (c in a.K)for (var d = $a(a.K[c]), e = 0; e < d.length; ++e)qd(d[e]) && ++b
    }
}, nd = function (a) {
    return a in id ? id[a] : id[a] = "on" + a
}, td = function (a, b, c, d) {
    var e = 1;
    if (a = ld(a))if (b = a.K[b.toString()])for (b = $a(b), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.sc == c && !f.removed && (e &= !1 !== sd(f, d))
    }
    return Boolean(e)
}, sd = function (a, b) {
    var c = a.cb, d = a.vc || a.src;
    a.tc && qd(a);
    return c.call(d, b)
}, od = function (a, b) {
    if (a.removed)return!0;
    if (!Rc) {
        var c = b || ba("window.event"), d = new J(c, this),
            e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t:{
                var f = !1;
                if (0 == c.keyCode)try {
                    c.keyCode = -1;
                    break t
                } catch (h) {
                    f = !0
                }
                if (f || void 0 == c.returnValue)c.returnValue = !0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode)c.push(f);
            for (var f = a.type, k = c.length - 1; !d.fb && 0 <= k; k--)d.currentTarget = c[k], e &= td(c[k], f, !0, d);
            for (k = 0; !d.fb && k < c.length; k++)d.currentTarget = c[k], e &= td(c[k], f, !1, d)
        }
        return e
    }
    return sd(a, new J(b, this))
}, ld = function (a) {
    a = a[hd];
    return a instanceof ed ? a : null
}, ud = "__closure_events_fn_" + (1E9 * Math.random() >>>
    0), kd = function (a) {
    x(a, "Listener can not be null.");
    if (t(a))return a;
    x(a.handleEvent, "An object listener must have handleEvent method.");
    return a[ud] || (a[ud] = function (b) {
        return a.handleEvent(b)
    })
};
var _gaq = _gaq || [];
var vd = {}, wd = function (a, b) {
    z(a, function (a) {
        if ("Error" == a.type || "Warning" == a.type || "Suggestion" == a.type) {
            var d = (a.category || b) + a.type + ": " + a.text + a.label;
            vd[d] || (vd[d] = !0, _gaq.push(["_trackEvent", a.category || b, a.type + ": " + a.text, a.label, 0, !0]))
        }
        a.relatedIssues && wd(a.relatedIssues, a.category || b)
    })
};
B && E(8);
rb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
rb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
rb("link", "script", "style");
Da("".Bh ? "".zh() : "");
var xd = {Fh: !0}, yd = {Dh: !0}, zd = {Gh: !0}, Ad = function () {
    throw Error("Do not instantiate directly");
};
Ad.prototype.Vb = null;
Ad.prototype.toString = function () {
    return this.content
};
var Bd = function (a) {
    if (!ha(a))return String(a);
    if (a instanceof Ad) {
        if (a.Ga === xd)return Ma(a.content);
        if (a.Ga === zd)return Da(a.content)
    }
    La("Soy template output is unsafe for use as HTML: " + a);
    return"zSoyz"
}, Cd = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i, Dd = {};
var Ed = function (a) {
    if (null != a)switch (a.Vb) {
        case 1:
            return 1;
        case -1:
            return-1;
        case 0:
            return 0
    }
    return null
}, Fd = function () {
    Ad.call(this)
};
w(Fd, Ad);
Fd.prototype.Ga = xd;
var M = function (a) {
    return null != a && a.Ga === xd ? (x(a.constructor === Fd), a) : Gd(String(String(a)).replace(Hd, Id), Ed(a))
}, Jd = function () {
    Ad.call(this)
};
w(Jd, Ad);
Jd.prototype.Ga = {Eh: !0};
var Kd = function () {
    Ad.call(this)
};
w(Kd, Ad);
Kd.prototype.Ga = yd;
Kd.prototype.Vb = 1;
var Ld = function (a, b) {
    this.content = String(a);
    this.Vb = null != b ? b : null
};
w(Ld, Ad);
Ld.prototype.Ga = zd;
var Md = function (a) {
    function b() {
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Vb = d);
        return e
    }
}, Gd = Md(Fd);
Md(Jd);
var Nd = function (a, b, c) {
    x(b, "Soy template may not be null.");
    a.innerHTML = Bd(b(c || Dd, void 0, void 0))
};
(function (a) {
    function b() {
    }

    b.prototype = a.prototype;
    return function (a, d) {
        if (!String(a))return"";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Vb = d);
        return e
    }
})(Fd);
var Rd = function (a) {
        return null != a && a.Ga === xd ? (x(a.constructor === Fd), a = String(a.content).replace(Od, "").replace(Pd, "&lt;"), String(a).replace(Qd, Id)) : String(a).replace(Hd, Id)
    }, Sd = {"\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;"}, Id = function (a) {
        return Sd[a]
    }, Hd = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Qd = /[\x00\x22\x27\x3c\x3e]/g, Td = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, Vd = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, Wd = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i, Od = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Pd = /</g;
var N = {Pd: function (a) {
    var b = "" + N.La(a) + N.sb({issues: a.Ne, Ea: "Errors"}) + N.sb({issues: a.Qe, Ea: "Warnings"}) + N.sb({issues: a.Pe, Ea: "Suggestions"}) + N.sb({issues: a.Oe, Ea: "Information"});
    a = a.La;
    for (var c = a.length, d = 0; d < c; d++)var e = a[d], b = b + ("Group" == e.type ? N.sb({issues: e.relatedIssues, Ea: e.category}) : "");
    return b
}};
N.Pd.U = "tvt.templates.details";
N.he = function () {
    return Gd('<div id="manual-check-reload" style="display:none">Please reload the page to see the analysis.</div><div id="manual-check-introduction" style="display:none">Tag Assistant helps to troubleshoot installation of various Google tags including Google Analytics, Google Tag Manager and more. Tag Assistant helps you verify that you have installed various Google tags correctly on your page. Just navigate to any page and Tag Assistant will tell you which tags are present, report any errors we find and suggest improvements that can be made to your implementation. Most Google tags are checked including Google Analytics, Adwords Conversion Tracking, Google Tag Manager and more.</div><div id="manual-check-wrapper" style="display:none"><div class="manual-check-text">How would you like to check this page?</div><div class="manual-check-buttons"><div role="button" id="always-check" class="goog-inline-block jfk-button jfk-button-standard">Always check this domain</div><div role="button" id="check-this-page" class="goog-inline-block jfk-button jfk-button-action">Check this page now</div></div></div>')
};
N.he.U = "tvt.templates.manualcheck";
N.ee = function (a) {
    for (var b = '<div id="welcome-screen-header"><img src="images/tag_assistant.svg" alt="Google Tag Assistant" id="welcome-screen-logo" /><div class="welcome-text"><div class="welcome-text1">Welcome to</div><div class="welcome-text2"><span>Tag Assistant by</span><img class="google-icon" src="images/google_icon.png" alt="Google_icon"></div><div role="button" id="community-link" title="Google+ Community" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-communities-color"></div><div class="img-button-text">Join our Google+ Community!</div></div></div></div><div class="welcome-tags"><div id="start-title">To get started tell us which of these tags you want to check for besides of Google Tag Manager:</div><div class="check-mark"><div class="tags-left">', c =
        a.Tb.length / 2, d = 0; d < c; d++)b += '<div class="tag-image-text"><input type="checkbox" class="tag-checkbox-background" checked /><div class="tag-checkbox-img"><div class="tag-checkbox-tick"></div></div><div class="tag-text">' + M(a.Tb[d]) + "</div></div>";
    b += '</div><div class="tags-right">';
    d = Math.round(a.Tb.length / 2);
    for (c = a.Tb.length; d < c; d++)b += '<div class="tag-image-text"><input type="checkbox" class="tag-checkbox-background" checked /><div class="tag-checkbox-img"><div class="tag-checkbox-tick"></div></div><div class="tag-text">' +
        M(a.Tb[d]) + "</div></div>";
    a = a.df;
    null != a && a.Ga === xd ? (x(a.constructor === Fd), a = String(a.content).replace(Od, "").replace(Pd, "&lt;"), a = String(a).replace(Vd, Id)) : a = String(a).replace(Td, Id);
    return Gd(b + ('</div></div><div class="tags-combobox-selection"><input name="little_hider" id="domain-checkbox-background" type="hidden" value=' + a + ' /><div id="tag-combobox"></div></div><div role="button" id="welcome-screen-done-button" class="goog-inline-block jfk-button jfk-button-action">Done</div></div><div id="footer"><div role="button" id="footer-settings" title="Options" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-settings"></div><div class="img-button-text">More options</div></div><div role="button" id="help-button" title="Options" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-help"></div><div class="img-button-text">Need help?</div></div></div>'))
};
N.ee.U = "tvt.templates.welcomeScreen";
N.La = function (a) {
    var b = "";
    if (a.La.length) {
        for (var b = b + ("<div " + (a.kc ? "" : 'id="tags"') + ">" + (a.kc ? "" : N.Ea({label: "Tags found", info: "Status"}))), c = a.La, d = c.length, e = 0; e < d; e++) {
            var f = c[e];
            if ("Tag" == f.type) {
                for (var b = b + (N.category({category: f.text, id: f.id, status: "" + M(f.value), value: "" + ("value_status" == f.valueFormat ? M(f.label) : M(f.value))}) + '<div class="tag-details-wrapper ' + (a.kc ? "bucket-block" : "") + '">'), h = "Info Fine Debug Error Warning Suggestion Group Bucket".split(" "), k = h.length, l = 0; l < k; l++)var m = h[l],
                    b = b + N.issues({qa: M(e) + "-" + M(f.label), issues: f.relatedIssues, ca: f.infoLink, ab: m, xa: "" + (a.kc ? M(a.settings) : "Default" != a.settings[f.category] && a.settings[f.category] ? M(a.settings[f.category]) : M(a.settings.DefaultLevel))});
                b += "</div>"
            }
        }
        b += "</div>"
    }
    return b
};
N.La.U = "tvt.templates.tags";
N.issues = function (a) {
    var b = "";
    if (a.issues)for (var c = a.issues, d = c.length, e = 0; e < d; e++)var f = c[e], b = b + N.b({qa: "" + M(a.qa), b: f, ca: "" + (f.infoLink && "#" != f.infoLink[0] ? M(f.infoLink) : M(a.ca)), ab: a.ab, xa: a.xa});
    return b
};
N.issues.U = "tvt.templates.issues";
N.sb = function (a) {
    var b = "";
    if (a.issues.length) {
        for (var b = b + ("<div>" + N.Ea({label: a.Ea, info: ""}) + "</div>"), c = "Error Warning Info Fine Debug Suggestion Group".split(" "), d = c.length, e = 0; e < d; e++)for (var f = c[e], h = a.issues, k = h.length, l = 0; l < k; l++)var m = h[l], b = b + N.b({qa: "", b: m, ca: "" + (m.infoLink ? M(m.infoLink) : M(a.ca)), ab: f, xa: ""});
        b += "</div>"
    }
    return b
};
N.sb.U = "tvt.templates.globalIssues";
N.Ea = function (a) {
    return'<div class="section-header"><div class="header-text">' + M(a.label) + '</div><div class="header-info">' + M(a.info) + "</div></div>"
};
N.Ea.U = "tvt.templates.header";
N.category = function (a) {
    return'<div class="row-wrapper category zippy" id="category-' + Rd(a.id) + '"><div class="main-text">' + M(a.category) + '</div><div class="info-text ' + Rd(null != a.status ? a.status : "expandable") + '">' + N.status({status: a.value}) + "</div></div>"
};
N.category.U = "tvt.templates.category";
N.status = function (a) {
    a = a || {};
    return Gd(a.status ? "unchecked" == a.status ? "details" : "working" == a.status ? "Working" : "working-with-suggestions" == a.status ? "Suggestions" : "working-with-warnings" == a.status ? "Minor Issues" : "not-working" == a.status ? "Critical Issues" : M(a.status) : "&nbsp;")
};
N.status.U = "tvt.templates.status";
N.b = function (a) {
    var b = "";
    if (!a.b.deleted && "hidden" != a.b.valueFormat && "entry" != a.b.valueFormat && ("Debug" != a.xa && "Fine" != a.b.type || a.b.type == a.xa || "fine" == a.b.valueFormat) && a.b.type == a.ab) {
        b += '<div class="row-wrapper"><div ' + ("link_expandable" == a.b.valueFormat || "link_expandable_with_path" == a.b.valueFormat || "snippet" == a.b.valueFormat || "unchecked" == a.b.valueFormat || "group_status" == a.b.valueFormat || "value_status" == a.b.valueFormat || "group" == a.b.valueFormat || "Bucket" == a.b.type || "Tag" == a.b.type ? 'class="details zippy ' +
            ("Bucket" == a.b.type ? "expanded" : "") + '" id="' + M(a.b.id) + '"' : "") + '><div class="main-text">' + ("" == a.b.valueFormat || "linked" == a.b.valueFormat ? "Error" == a.b.type ? '<span class="tag-details-error">Error: </span>' : "Warning" == a.b.type ? '<span class="tag-details-warning">Warning: </span>' : "Suggestion" == a.b.type ? '<span class="tag-details-suggestion">Suggestion: </span>' : "" : "") + ("button" == a.b.valueFormat || "button_inactive" == a.b.valueFormat || "update_button" == a.b.valueFormat ? M(a.b.value) + " " : M(a.b.text) + " ") + "</div>" +
            ("Group" == a.b.type || "group_status" == a.b.valueFormat || "value_status" == a.b.valueFormat ? '<div class="info-text expandable' + ("group_status" == a.b.valueFormat || "value_status" == a.b.valueFormat ? " " + M(a.b.value) : "") + '">&nbsp;' + ("value_status" == a.b.valueFormat ? M(a.b.label) : N.status({status: a.b.value})) + "</div>" : "Error" != a.b.type && "Warning" != a.b.type && "Suggestion" != a.b.type || "" != a.b.valueFormat ? "link_expandable" == a.b.valueFormat || "snippet" == a.b.valueFormat ? '<div class="info-text expandable">&nbsp;</div>' : "Bucket" ==
                a.b.type || "link_expandable_with_path" == a.b.valueFormat ? '<div class="info-text expandable">&nbsp;' + M(a.b.value) + "</div>" : "" : '<div class="info-text"><a href="' + (a.b.infoLink ? ("#" == a.b.infoLink[0] ? M(a.ca) : "") + M(a.b.infoLink) : M(a.ca)) + '">more info</a></div>') + "</div>";
        if ("Group" == a.b.type) {
            for (var b = b + '<div class="issue-group">', c = "Info Fine Debug Error Warning Suggestion Group".split(" "), d = c.length, e = 0; e < d; e++)var f = c[e], b = b + N.issues({qa: a.qa, issues: a.b.relatedIssues, ca: "" + (a.b.infoLink ? M(a.b.infoLink) :
                M(a.ca)), ab: f, xa: a.xa});
            b += "</div>"
        } else if ("Bucket" == a.b.type)b += N.La({La: a.b.relatedIssues, settings: a.xa, kc: !0}); else if ("Info" == a.b.type || "Fine" == a.b.type || "Debug" == a.b.type || "" != a.b.valueFormat) {
            b += '<div class="info-text' + ("link_expandable" == a.b.valueFormat || "snippet" == a.b.valueFormat ? "-expandable" : "") + ("map" == a.b.valueFormat ? " value-map" : "") + '">';
            if ("link" == a.b.valueFormat || "link_expandable" == a.b.valueFormat)b += '<a href="' + M(a.b.value) + '" class="popup-value-link">' + M(a.b.value) + "</a>"; else if ("map" ==
                a.b.valueFormat || "json" == a.b.valueFormat || "collection" == a.b.valueFormat) {
                b += '<table class="popup-value-map">';
                c = a.b.value;
                d = c.length;
                for (e = 0; e < d; e++)f = c[e], b += "<tr><td>" + M(f.key) + ':</td><td class="popup-value-map-value">' + (f.value ? M(f.value) : "&nbsp;") + "</td></tr>";
                b += "</table>"
            } else if ("snippet" == a.b.valueFormat || "snippet_only" == a.b.valueFormat)b += "<pre>" + M(a.b.value) + "</pre>"; else if ("button" == a.b.valueFormat || "button_inactive" == a.b.valueFormat || "update_button" == a.b.valueFormat)b += "<input type='button' value='" +
                M(a.b.text) + "' class='ui-action-template' id='" + M(a.qa) + ":" + M(a.b.text) + "'" + ("button_inactive" == a.b.valueFormat ? " disabled" : "") + ">"; else if ("textfield" == a.b.valueFormat)b += "<input type='text' value='" + M(a.b.value) + "' class='ui-value-template' name='" + M(a.qa) + ":" + M(a.b.text) + "'>"; else if ("checkbox" == a.b.valueFormat)b += "<input type='checkbox' value='true' class='ui-checkbox-template' name='" + M(a.qa) + ":" + M(a.b.text) + "'" + ("" != a.b.value ? " checked" : "") + ">"; else if ("dropdown" == a.b.valueFormat || "dropdown_inactive" ==
                a.b.valueFormat) {
                b += "<select class='ui-dropdown-template' name='" + M(a.qa) + ":" + M(a.b.text) + "'" + ("dropdown_inactive" == a.b.valueFormat ? " disabled" : "") + "><option value=''>Please Select</option>";
                c = a.b.relatedIssues;
                d = c.length;
                for (e = 0; e < d; e++)f = c[e], b += "entry" == f.valueFormat ? "<option value='" + M(f.text) + "' " + (a.b.label == f.text ? "selected" : "") + ">" + M(f.label) + "</option>" : "";
                b += "</select>"
            } else"linked" == a.b.valueFormat ? b += '<div class="info-text"><a href="' + (a.b.infoLink ? M(a.b.infoLink) : M(a.ca)) + '">' + M(a.b.value) +
                "</a></div>" : "link_expandable_with_path" == a.b.valueFormat ? b += '<div class="info-text"><a href="' + (a.b.infoLink ? M(a.b.infoLink) : M(a.ca)) + '">' + M(a.b.label) + "</a></div>" : "copyable" == a.b.valueFormat ? b += '<div class = "text-ids">' + M(a.b.value) + "</div>" : "blank" != a.b.valueFormat && (b += M(a.b.value));
            b += "</div>"
        }
        b += "</div>"
    }
    return b += "Group" != a.b.type && "Bucket" != a.b.type ? N.issues({qa: a.qa, issues: a.b.relatedIssues, ca: a.ca, ab: a.ab, xa: a.xa}) : ""
};
N.b.U = "tvt.templates.issue";
N.je = function () {
    return Gd('<div id="page-info-wrapper" style="display:none"><div id="title"><div class="header-text">Page</div><div id="page-title"></div></div><div id="summary"><div id="summary-tags"><div class="header-text">Total tags found</div><div>On this page</div><div id="tags-total" class="total"><img src="images/spinner.gif" alt="Checking..." /></div></div><div id="summary-errors"><div class="header-text">Total errors found</div><div>On this page</div><div id="errors-total" class="total"><img src="images/spinner.gif" alt="Checking..." /></div></div></div><div id="details"></div><div id="permissions-check" display="none"><div class="section-header">Additional permissions requested</div><div class="permissions-check-buttons"><div role="button" id="permissions-check-button" class="goog-inline-block jfk-button jfk-button-action">Allow</div><div role="button" id="permissions-refuse-button" class="goog-inline-block jfk-button jfk-button-standard">Later</div></div><div class="permissions-check-message">Check if other extensions are blocking tags</div></div></div>')
};
N.je.U = "tvt.templates.pageinfo";
N.ie = function () {
    return Gd('<div id="manual-check-header" ><div class="manual-check-header-text"><span>Tag Assistant by</span><img class="google-icon" src="images/google_icon.png" alt="Google_icon"></div></div>')
};
N.ie.U = "tvt.templates.manualcheckheader";
N.ge = function (a) {
    return Gd('<div id="footer"><div role="button" id="footer-settings" title="Options" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-settings"></div></div><div role="button" id="community-link" title="Google+ Community" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-communities"></div></div>' + (a.Hh ? '<div role="button" id="footer-ticket" title="Still need help? File a ticket" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-email"></div></div>' :
        "") + '<div role="button" id="help-button" title="Options" style="-webkit-user-select: none;" class="goog-inline-block jfk-button jfk-button-flat"><div class="goog-inline-block img-button img-help"></div></div><div class="footer-text" id="logo"><span>Tag Assistant</span></div></div>')
};
N.ge.U = "tvt.templates.footer";
N.de = function (a) {
    return Gd(N.ie() + N.he() + N.je() + N.ge(a))
};
N.de.U = "tvt.templates.popup";
var O = function () {
    this.Ra = {};
    this.yc = {}
};
da(O);
var Xd = {Gf: "categories", Jf: "CheckPermissionsLater", Pf: "DefaultLevel", Xf: "IgnoreExternalScripts", hg: "IgnoreExternalScripts", kg: "isInSupportTeam", vg: "ManualChecks", wg: "ManualScriptParsing", Og: "PatternProfiling", eh: "GooglePublisherConsole", fh: "ShowWelcomeScreen", yh: "WhiteListedDomains"}, be = function () {
    var a = Yd, b = Yd;
    q(chrome) && q(chrome.storage) ? chrome.storage.local.get(null, function (c) {
        Zd(c);
        $d(a, b)
    }) : O.r().Ra["Options initialized to default values."] || (console.log("No chrome storage available."), ae(),
        a && a())
}, $d = function (a, b) {
    q(chrome) && q(chrome.storage) && (chrome.storage.sync.get(null, function (b) {
        Zd(b);
        b["Options initialized to default values."] || ae();
        a()
    }), ce(b))
}, de = function (a) {
    return O.r().Ra[a]
}, ee = function () {
    var a = O.r().Ra.categories;
    q(a) && Oa(a);
    return a || []
}, ce = function (a) {
    t(a) && chrome.storage.onChanged.addListener(function (b) {
        for (var c in b)O.r().Ra[c] = b[c].newValue;
        t(a) && a()
    })
}, ge = function () {
    var a = {};
    jb(Xd, function (b) {
        q(de(b)) && (a[b] = de(b))
    });
    ae();
    fe(a)
}, ae = function () {
    var a = de("categories");
    q(chrome) && q(chrome.storage) && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    O.r().Ra = {};
    var b = {};
    b.categories = a;
    b.ManualChecks = !0;
    b.ShowWelcomeScreen = !0;
    b["Options initialized to default values."] = !0;
    q(chrome) && q(chrome.storage) && chrome.storage.local.set(b);
    fe(b)
}, he = function (a, b) {
    jb(b, function (a, b) {
        null != a && (O.r().yc[b] ? x(typeof a == O.r().yc[b], "Unexpected type " + typeof a + " expected " + O.r().yc[b]) : O.r().yc[b] = typeof a)
    });
    Zd(b);
    a.set(b, function () {
        chrome.runtime && chrome.runtime.lastError &&
        (ge(), a.set(b, function () {
            console.log("Failed to store values")
        }))
    })
}, Zd = function (a) {
    a && pb(O.r().Ra, a)
}, fe = q(chrome) && q(chrome.storage) ? v(he, chrome.storage.sync) : Zd;
var ke = function (a, b) {
    if (de("CheckPermissionsLater") || a) {
        var c = H("permissions-check");
        c && ie(c, a);
        if (!a)return
    }
    chrome.permissions && chrome.permissions.contains({permissions: ["management"]}, function (c) {
        var e = H("permissions-check");
        e && (ie(e, !c), c || (K(H("permissions-check-button"), "click", v(je, a, b)), (c = H("permissions-refuse-button")) && K(c, "click", function () {
            fe(qb("CheckPermissionsLater", !0));
            ie(e, !1)
        })))
    })
}, je = function (a, b) {
    chrome.permissions.request({permissions: ["management"]}, function (c) {
        c && (ke(a, b),
            b());
        fe(qb("CheckPermissionsLater", c))
    })
};
var le = function () {
    this.ne = pa()
};
new le;
le.prototype.set = function (a) {
    this.ne = a
};
le.prototype.reset = function () {
    this.set(pa())
};
le.prototype.get = function () {
    return this.ne
};
var ne = function (a) {
    var b;
    b || (b = me(a || arguments.callee.caller, []));
    return b
}, me = function (a, b) {
    var c = [];
    if (Xa(b, a))c.push("[...circular reference...]"); else if (a && 50 > b.length) {
        c.push(oe(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = oe(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0,
                40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(me(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}, oe = function (a) {
    if (pe[a])return pe[a];
    a = String(a);
    if (!pe[a]) {
        var b = /function ([^\(]+)/.exec(a);
        pe[a] = b ? b[1] : "[Anonymous]"
    }
    return pe[a]
}, pe = {};
var qe = function (a, b, c, d, e) {
    this.reset(a, b, c, d, e)
};
qe.prototype.Zd = null;
qe.prototype.Yd = null;
var re = 0;
qe.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || re++;
    d || pa();
    this.Qb = a;
    this.lf = b;
    delete this.Zd;
    delete this.Yd
};
qe.prototype.ae = function (a) {
    this.Qb = a
};
qe.prototype.getMessage = function () {
    return this.lf
};
var se = function (a) {
    this.Re = a;
    this.Qd = this.I = this.Qb = this.F = null
}, te = function (a, b) {
    this.name = a;
    this.value = b
};
te.prototype.toString = function () {
    return this.name
};
var ue = new te("INFO", 800), ve = new te("CONFIG", 700), we = new te("FINE", 500);
se.prototype.getParent = function () {
    return this.F
};
se.prototype.getChildren = function () {
    this.I || (this.I = {});
    return this.I
};
se.prototype.ae = function (a) {
    this.Qb = a
};
var xe = function (a) {
    if (a.Qb)return a.Qb;
    if (a.F)return xe(a.F);
    La("Root logger has no level set.");
    return null
};
se.prototype.log = function (a, b, c) {
    if (a.value >= xe(this).value)for (t(b) && (b = b()), a = this.be(a, b, c, se.prototype.log), b = "log:" + a.getMessage(), p.console && (p.console.timeStamp ? p.console.timeStamp(b) : p.console.markTimeline && p.console.markTimeline(b)), p.msWriteProfilerMark && p.msWriteProfilerMark(b), b = this; b;) {
        c = b;
        var d = a;
        if (c.Qd)for (var e = 0, f = void 0; f = c.Qd[e]; e++)f(d);
        b = b.getParent()
    }
};
se.prototype.be = function (a, b, c, d) {
    a = new qe(a, String(b), this.Re);
    if (c) {
        a.Zd = c;
        var e;
        d = d || se.prototype.be;
        try {
            var f;
            var h = ba("window.location.href");
            if (s(c))f = {message: c, name: "Unknown error", lineNumber: "Not available", fileName: h, stack: "Not available"}; else {
                var k, l;
                b = !1;
                try {
                    k = c.lineNumber || c.vf || "Not available"
                } catch (m) {
                    k = "Not available", b = !0
                }
                try {
                    l = c.fileName || c.filename || c.sourceURL || p.$googDebugFname || h
                } catch (n) {
                    l = "Not available", b = !0
                }
                f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message: c.message ||
                    "Not available", name: c.name || "UnknownError", lineNumber: k, fileName: l, stack: c.stack || "Not available"}
            }
            e = "Message: " + Da(f.message) + '\nUrl: <a href="view-source:' + f.fileName + '" target="_new">' + f.fileName + "</a>\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + Da(f.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Da(ne(d) + "-> ")
        } catch (u) {
            e = "Exception trying to expose exception! You win, we lose. " + u
        }
        a.Yd = e
    }
    return a
};
se.prototype.info = function (a, b) {
    this.log(ue, a, b)
};
var ye = {}, ze = null, Ae = function (a) {
    ze || (ze = new se(""), ye[""] = ze, ze.ae(ve));
    var b;
    if (!(b = ye[a])) {
        b = new se(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Ae(a.substr(0, c));
        c.getChildren()[d] = b;
        b.F = c;
        ye[a] = b
    }
    return b
};
var Be = function (a, b) {
    a && a.info(b, void 0)
}, Ce = function (a, b) {
    a && a.log(we, b, void 0)
};
var Ee = function (a, b) {
    var c = b || [";", ","], d = {"(": ")", "{": "}", "[": "]"}, e = void 0, f = !1, h = [], k = [], l = 0;
    a = va(De(a));
    for (var m = 0, n = a.length; m < n; m++) {
        var u = a.charAt(m);
        f ? f = !1 : "\\" == u ? f = !0 : e ? u == e && (e = void 0) : '"' == u || "'" == u ? e = u : "(" == u || "{" == u || "[" == u ? h.push(d[u]) : h.length ? u == h[h.length - 1] && h.pop() : Xa(c, u) ? (l = va(a.substring(l, m)), k.push(l.replace(" *\n *", "")), l = m + 1) : m == l && P[a.charCodeAt(m)] && (l = m + 1)
    }
    l = va(a.substring(l, m));
    k.push(l.replace(" *\n *", ""));
    return k
}, De = function (a, b) {
    for (var c = void 0, d = !1, e = -1, f =
        b || 0, h = f; h < a.length; h++) {
        var k = a.charAt(h), l = h + 1 < a.length ? a.charAt(h + 1) : "";
        if (d)d = !1; else if (0 <= e) {
            if ("*" == k && "/" == l)return a.substring(f, e) + De(a, h + 2)
        } else if ("\\" == k)d = !0; else if (c)k == c && (c = void 0); else if ("/" == k) {
            if ("/" == l)return c = a.indexOf("\n", h), -1 == c ? a.substring(f, h) : a.substring(f, h) + De(a, c);
            "*" == l && (e = h++)
        } else if ('"' == k || "'" == k)c = k
    }
    return a.substring(f)
}, P = [];
P[9] = !0;
P[10] = !0;
P[11] = !0;
P[12] = !0;
P[13] = !0;
P[32] = !0;
P[133] = !0;
P[160] = !0;
P[5760] = !0;
P[6158] = !0;
P[8192] = !0;
P[8193] = !0;
P[8194] = !0;
P[8195] = !0;
P[8196] = !0;
P[8197] = !0;
P[8198] = !0;
P[8199] = !0;
P[8200] = !0;
P[8201] = !0;
P[8202] = !0;
P[8203] = !0;
P[8232] = !0;
P[8233] = !0;
P[8239] = !0;
P[8287] = !0;
P[12288] = !0;
var Ge = function (a) {
    var b = ((new Date).getTime() - a) / 1E3;
    if (60 > b)return Fe(b, "second") + " ago";
    b /= 60;
    if (60 > b)return Fe(b, "minute") + " ago";
    b /= 60;
    if (24 > b)return Fe(b, "hour") + " ago";
    b /= 24;
    return 365 > b ? Fe(b, "day") + " ago" : (new Date(a)).toLocaleDateString()
}, Fe = function (a, b) {
    var c = Math.round(a);
    return Oc("%d %s%s", c, b, 1 == c ? "" : "s")
}, He = function (a) {
    var b = a.documentUri;
    a.documentUri || (b = Jc(a.documentUrl), a.documentUri = b);
    return b
}, Ie = function (a) {
    var b = a.uri;
    a.uri || (b = Jc(a.url), a.uri = b);
    return b
}, Je = function (a, b) {
    var c = Jc(b), d = Jc(a);
    if (d.bb == c.bb) {
        var e = c.Pa.split("/"), f = d.Pa.split("/"), d = e.pop(), h = e.join("/") + "/", k = "", l = 0;
        for (f.pop(); -1 == h.indexOf(f.join("/") + "/");)f.pop(), k += "../", l++;
        return l == f.length ? c.Pa : l < e.length - 1 ? (c = e.slice(f.length), c.length && (k += c.join("/") + "/"), k + d) : c.Pa
    }
    return b
};
var Le = function (a, b) {
    this.issueClass = a.issueClass || 0;
    this.type = a.type;
    this.category = a.category;
    this.label = b || a.label || "";
    this.text = ta(a.text || "", b || this.label);
    this.infoLink = s(a.infoLink) ? ta(a.infoLink, this.label) : void 0;
    this.value = a.value || void 0;
    this.valueFormat = a.format || a.valueFormat || "";
    this.relatedIssues = a.relatedIssues ? Ke(a.relatedIssues) : [];
    this.view = a.view;
    this.tf = a.tf || a;
    this.deleted = a.deleted || null
};
new Le({category: "null"}, "NULL");
var Ke = function (a) {
    a = Ta(a, function (a) {
        return new Le(a)
    });
    Me(a);
    return a
}, Ne = function (a, b) {
    var c = 0;
    z(a, function (a) {
        var e = (b ? b + "." : "") + c++;
        console.log(e + " " + a.type + ": " + a.issueClass + ": " + a.text + (a.label && " -- " + Ea(a.label.replace("\n", ""), 25)) + (a.deleted ? " deleted:" + a.deleted : ""));
        a.relatedIssues && Ne(a.relatedIssues, e)
    })
};
aa("tvt.Issue.dump", Ne);
var Pe = function (a, b) {
    return Sa(a, function (a) {
        return!a.deleted && b == a.type && "hidden" != a.valueFormat && Oe(a.category)
    })
}, Re = function (a) {
    return Qe(a, "Error") ? "not-working" : Qe(a, "Warning") ? "working-with-warnings" : Qe(a, "Suggestion") ? "working-with-suggestions" : "working"
}, Qe = function (a, b) {
    return Ua(a, function (a) {
        return a.deleted || a.type != b || "hidden" == a.valueFormat ? a.relatedIssues ? Qe(a.relatedIssues, b) : !1 : !0
    })
}, Oe = function (a) {
    var b;
    (b = null == a) || (a = de(a), q(a) && "Default" != a ? a += "" : de("DefaultLevel") ? (a = O.r().Ra.DefaultLevel,
        q(a) && Pa(s(a)), a = null != a ? a + "" : "") : a = "Info", b = "Off" != a);
    return b
}, Se = function (a, b) {
    var c = 0;
    z(a, function (a) {
        !a.deleted && a.type == b && "hidden" != a.valueFormat && Oe(a.category) && c++;
        c += Se(a.relatedIssues, b)
    });
    return c
}, Me = function (a, b) {
    z(a, function (a) {
        a.parent = b
    });
    z(a, function (a) {
        Me(a.relatedIssues, a)
    })
};
var Te = function (a, b, c, d, e, f, h) {
    this.issueClass = 0;
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.Ub = e ? function (a, b) {
        return e.call(this, b)
    } : gb;
    this.jd = h || [];
    this.view = this.hint = this.ce = null
}, Ue = function (a, b, c, d, e, f) {
    return new Te(a, b, c, void 0, d, e, f)
}, Ve = v(Ue, "Debug", null), We = v(Ue, "Error", null), Xe = v(Ue, "Info", null), Ye = v(Ue, "Suggestion", null);
Xe("Implemented in %s");
Xe("Includes %s");
Te.prototype.clear = function () {
};
Te.prototype.T = function () {
    var a = new Te(this.type, this.category, this.text, this.infoLink, void 0, this.format);
    a.view = this.view;
    a.Ub = this.Ub;
    a.jd = this.jd;
    a.ce = this.ce;
    return a
};
var Ze = function (a) {
    a.format = "hidden";
    return a
}, $e = function (a, b) {
    a.infoLink = b;
    return a
};
Te.prototype.Xd = function (a) {
    this.Ub = fb(a);
    return this
};
var af = function (a, b) {
    a.view = b;
    return a
};
Ze(Ve("__altered"));
var bf = function (a, b, c, d, e, f, h, k) {
    Te.call(this, a, b, d, e, void 0, h, k);
    this.issueClass = 2;
    this.Ub = f || gb
};
w(bf, Te);
var cf = function (a, b, c, d, e, f) {
    return new bf(a, b, 0, c, void 0, d, e, f)
}, df = v(cf, "Error", null), ef = v(cf, "Fine", null), ff = v(cf, "Info", null), gf = v(cf, "Suggestion", null), hf = df("An error occured while the tag was fired", function (a) {
    return a.error
});
Ye("Non-standard implementation");
gf("Using secure code on non-secure page", function (a) {
    var b = Ie(a);
    a = He(a);
    return"https" == b.Aa && "http" == a.Aa
});
var jf = df("HTTP response code indicates tag failed to fire", function (a) {
    a = a.statusCode;
    return!q(a) || 400 > a ? !1 : a + ""
}, "value");
gf("Using non-secure code on secure page", function (a) {
    var b = Ie(a);
    a = He(a);
    return"http" == b.Aa && "https" == a.Aa
});
var kf = function (a, b) {
    var c = b + ".";
    return!(!b || !Wa(a, function (a) {
        return b == a || 0 == a.indexOf(c)
    }))
};
(function (a, b) {
    return af(ff("URL", function (c) {
        var d = Ie(c).Na.pb();
        if (a && !kf(d, a) || b && kf(d, b))return!1;
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url
    }, "link_expandable", [We("URL Encoding Error", function (a) {
        return-1 != a.label.indexOf("&amp;")
    }), jf, hf, Ze(ef("Redirected to", function (a) {
        return a.redirectUrl
    })), Ze(ef("redirectedFrom", function (a) {
        return a.redirectedFrom
    }))]), "URLs")
})();
var lf = function (a, b, c, d, e, f, h, k) {
    Te.call(this, a, b, c, d, void 0, h, k);
    this.issueClass = 1;
    this.Ub = f || gb
};
w(lf, Te);
var mf = function (a, b, c, d, e, f) {
    return new lf(a, b, c, void 0, 0, d, e, f)
}, nf = v(mf, "Info", null), of = v(mf, "Suggestion", null), pf = of("Tag is included in an iframe", function () {
    return self !== top
}), qf = [$e(nf("IFrame", function () {
    return self.location.href
}, "linked"), "view-source:%s")];
pf.jd = qf;
of("Tag is included in an external script file", function (a) {
    return a.externalScript
});
$e(nf("Script source", function (a) {
    return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1
}, "linked"), "view-source:%s");
af(nf("HTML Snippet", function (a) {
    return a.outerHTML
}, "snippet"), "Code");
$e(We("No HTTP response detected"), "https://support.google.com/tagassistant/answer/3059154?hl=en&ref_topic=2947092#http_response");
aa("userfeedback.api.startFeedback", function (a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    if (b && JSON && JSON.stringify) {
        var d = JSON.stringify(b);
        200 >= d.length && (a.psdJson = d)
    }
    d = c || p;
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
    var e = a.serverUri || "//www.google.com/tools/feedback", f = d.GOOGLE_FEEDBACK_START;
    if (f)f.apply(d, arguments); else {
        var e = e + "/load.js?", h;
        for (h in a)f = a[h], null != f && !ha(f) && (e += encodeURIComponent(h) + "=" + encodeURIComponent(f) + "&");
        h = d.document;
        d = h.createElement("script");
        d.src = e;
        h.body.appendChild(d)
    }
});
var Q = function () {
    this.ra = new ed(this);
    this.cf = this
};
w(Q, Tc);
Q.prototype[$c] = !0;
g = Q.prototype;
g.mc = null;
g.Vc = function (a) {
    this.mc = a
};
g.addEventListener = function (a, b, c, d) {
    K(this, a, b, c, d)
};
g.removeEventListener = function (a, b, c, d) {
    pd(this, a, b, c, d)
};
g.dispatchEvent = function (a) {
    rf(this);
    var b, c = this.mc;
    if (c) {
        b = [];
        for (var d = 1; c; c = c.mc)b.push(c), x(1E3 > ++d, "infinite loop")
    }
    c = this.cf;
    d = a.type || a;
    if (s(a))a = new I(a, c); else if (a instanceof I)a.target = a.target || c; else {
        var e = a;
        a = new I(d, c);
        pb(a, e)
    }
    var e = !0, f;
    if (b)for (var h = b.length - 1; !a.fb && 0 <= h; h--)f = a.currentTarget = b[h], e = sf(f, d, !0, a) && e;
    a.fb || (f = a.currentTarget = c, e = sf(f, d, !0, a) && e, a.fb || (e = sf(f, d, !1, a) && e));
    if (b)for (h = 0; !a.fb && h < b.length; h++)f = a.currentTarget = b[h], e = sf(f, d, !1, a) && e;
    return e
};
g.k = function () {
    Q.c.k.call(this);
    this.ra && this.ra.removeAll(void 0);
    this.mc = null
};
g.listen = function (a, b, c, d) {
    rf(this);
    return this.ra.add(String(a), b, !1, c, d)
};
g.Y = function (a, b, c, d) {
    return this.ra.remove(String(a), b, c, d)
};
var sf = function (a, b, c, d) {
    b = a.ra.K[String(b)];
    if (!b)return!0;
    b = $a(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.removed && h.sc == c) {
            var k = h.cb, l = h.vc || h.src;
            h.tc && gd(a.ra, h);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && !1 != d.Od
};
Q.prototype.Pb = function (a, b, c, d) {
    return this.ra.Pb(String(a), b, c, d)
};
var rf = function (a) {
    x(a.ra, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var tf = function (a, b) {
    Q.call(this);
    this.rb = a || 1;
    this.ob = b || p;
    this.ad = na(this.ef, this);
    this.bd = pa()
};
w(tf, Q);
g = tf.prototype;
g.enabled = !1;
g.O = null;
g.ef = function () {
    if (this.enabled) {
        var a = pa() - this.bd;
        0 < a && a < 0.8 * this.rb ? this.O = this.ob.setTimeout(this.ad, this.rb - a) : (this.O && (this.ob.clearTimeout(this.O), this.O = null), this.dispatchEvent("tick"), this.enabled && (this.O = this.ob.setTimeout(this.ad, this.rb), this.bd = pa()))
    }
};
g.start = function () {
    this.enabled = !0;
    this.O || (this.O = this.ob.setTimeout(this.ad, this.rb), this.bd = pa())
};
g.stop = function () {
    this.enabled = !1;
    this.O && (this.ob.clearTimeout(this.O), this.O = null)
};
g.k = function () {
    tf.c.k.call(this);
    this.stop();
    delete this.ob
};
var uf = function (a, b, c) {
    if (t(a))c && (a = na(a, c)); else if (a && "function" == typeof a.handleEvent)a = na(a.handleEvent, a); else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : p.setTimeout(a, b || 0)
};
var vf = function (a, b, c) {
    this.Pc = a;
    this.rb = b || 0;
    this.Hb = c;
    this.bf = na(this.ff, this)
};
w(vf, Tc);
g = vf.prototype;
g.ea = 0;
g.k = function () {
    vf.c.k.call(this);
    this.stop();
    delete this.Pc;
    delete this.Hb
};
g.start = function (a) {
    this.stop();
    this.ea = uf(this.bf, q(a) ? a : this.rb)
};
g.stop = function () {
    this.xc() && p.clearTimeout(this.ea);
    this.ea = 0
};
g.xc = function () {
    return 0 != this.ea
};
g.ff = function () {
    this.ea = 0;
    this.Pc && this.Pc.call(this.Hb)
};
var lb = {}, wf = null, xf = function (a) {
    a = ka(a);
    delete lb[a];
    mb() && wf && wf.stop()
}, zf = function () {
    wf || (wf = new vf(function () {
        yf()
    }, 20));
    var a = wf;
    a.xc() || a.start()
}, yf = function () {
    var a = pa();
    jb(lb, function (b) {
        Af(b, a)
    });
    mb() || zf()
};
var Bf = function () {
    Q.call(this);
    this.j = 0;
    this.Md = this.startTime = null
};
w(Bf, Q);
Bf.prototype.onStop = function () {
    this.ya("stop")
};
Bf.prototype.ya = function (a) {
    this.dispatchEvent(a)
};
var Cf = function (a, b, c, d) {
    Bf.call(this);
    if (!r(a) || !r(b))throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)throw Error("Start and end points must be the same length");
    this.Nb = a;
    this.mf = b;
    this.duration = c;
    this.fe = d;
    this.coords = []
};
w(Cf, Bf);
Cf.prototype.fa = 0;
Cf.prototype.play = function (a) {
    if (a || 0 == this.j)this.fa = 0, this.coords = this.Nb; else if (1 == this.j)return!1;
    xf(this);
    this.startTime = a = pa();
    -1 == this.j && (this.startTime -= this.duration * this.fa);
    this.Md = this.startTime + this.duration;
    this.fa || this.ya("begin");
    this.ya("play");
    -1 == this.j && this.ya("resume");
    this.j = 1;
    var b = ka(this);
    b in lb || (lb[b] = this);
    zf();
    Af(this, a);
    return!0
};
Cf.prototype.stop = function (a) {
    xf(this);
    this.j = 0;
    a && (this.fa = 1);
    Df(this, this.fa);
    this.onStop();
    this.ya("end")
};
Cf.prototype.k = function () {
    0 == this.j || this.stop(!1);
    this.ya("destroy");
    Cf.c.k.call(this)
};
var Af = function (a, b) {
    a.fa = (b - a.startTime) / (a.Md - a.startTime);
    1 <= a.fa && (a.fa = 1);
    Df(a, a.fa);
    1 == a.fa ? (a.j = 0, xf(a), a.ya("finish"), a.ya("end")) : 1 == a.j && a.ya("animate")
}, Df = function (a, b) {
    t(a.fe) && (b = a.fe(b));
    a.coords = Array(a.Nb.length);
    for (var c = 0; c < a.Nb.length; c++)a.coords[c] = (a.mf[c] - a.Nb[c]) * b + a.Nb[c]
};
Cf.prototype.ya = function (a) {
    this.dispatchEvent(new Ef(a, this))
};
var Ef = function (a, b) {
    I.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.fa = b.fa;
    this.state = b.j
};
w(Ef, I);
var Ff, Gf = {wf: "activedescendant", Bf: "atomic", Cf: "autocomplete", Ef: "busy", If: "checked", Of: "controls", Rf: "describedby", Uf: "disabled", Wf: "dropeffect", Yf: "expanded", Zf: "flowto", ag: "grabbed", eg: "haspopup", gg: "hidden", jg: "invalid", lg: "label", mg: "labelledby", ng: "level", sg: "live", Eg: "multiline", Fg: "multiselectable", Jg: "orientation", Kg: "owns", Lg: "posinset", Ng: "pressed", Sg: "readonly", Ug: "relevant", Vg: "required", ah: "selected", dh: "setsize", hh: "sort", uh: "valuemax", vh: "valuemin", wh: "valuenow", xh: "valuetext"};
var Hf = {xf: "alert", yf: "alertdialog", zf: "application", Af: "article", Df: "banner", Ff: "button", Hf: "checkbox", Kf: "columnheader", Lf: "combobox", Mf: "complementary", Nf: "contentinfo", Qf: "definition", Sf: "dialog", Tf: "directory", Vf: "document", $f: "form", bg: "grid", cg: "gridcell", dg: "group", fg: "heading", ig: "img", og: "link", pg: "list", qg: "listbox", rg: "listitem", tg: "log", ug: "main", xg: "marquee", yg: "math", zg: "menu", Ag: "menubar", Bg: "menuitem", Cg: "menuitemcheckbox", Dg: "menuitemradio", Gg: "navigation", Hg: "note", Ig: "option",
    Mg: "presentation", Pg: "progressbar", Qg: "radio", Rg: "radiogroup", Tg: "region", Wg: "row", Xg: "rowgroup", Yg: "rowheader", Zg: "scrollbar", $g: "search", bh: "separator", gh: "slider", ih: "spinbutton", jh: "status", kh: "tab", lh: "tablist", mh: "tabpanel", nh: "textbox", oh: "timer", ph: "toolbar", qh: "tooltip", rh: "tree", sh: "treegrid", th: "treeitem"};
var If = function (a, b) {
    b ? (x(kb(Hf, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
}, Kf = function (a, b, c) {
    fa(c) && (c = c.join(" "));
    var d = Jf(b);
    "" === c || void 0 == c ? (Ff || (Ff = {atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false"}), c = Ff, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
        c)
}, Jf = function (a) {
    x(a, "ARIA attribute cannot be empty.");
    x(kb(Gf, a), "No such ARIA attribute " + a);
    return"aria-" + a
};
var Lf = function (a) {
    if (a.classList)return a.classList;
    a = a.className;
    return s(a) && a.match(/\S+/g) || []
}, Mf = function (a, b) {
    return a.classList ? a.classList.contains(b) : Xa(Lf(a), b)
}, R = function (a, b) {
    a.classList ? a.classList.add(b) : Mf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, Nf = function (a, b) {
    if (a.classList)z(b, function (b) {
        R(a, b)
    }); else {
        var c = {};
        z(Lf(a), function (a) {
            c[a] = !0
        });
        z(b, function (a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c)a.className += 0 < a.className.length ? " " + d : d
    }
}, Of = function (a, b) {
    a.classList ?
        a.classList.remove(b) : Mf(a, b) && (a.className = Sa(Lf(a), function (a) {
        return a != b
    }).join(" "))
}, Pf = function (a, b) {
    a.classList ? z(b, function (b) {
        Of(a, b)
    }) : a.className = Sa(Lf(a), function (a) {
        return!Xa(b, a)
    }).join(" ")
}, Qf = function (a, b, c) {
    c ? R(a, b) : Of(a, b)
};
var Rf = function (a) {
    this.Hb = a;
    this.v = {}
};
w(Rf, Tc);
var Sf = [];
g = Rf.prototype;
g.listen = function (a, b, c, d) {
    r(b) || (b && (Sf[0] = b.toString()), b = Sf);
    for (var e = 0; e < b.length; e++) {
        var f = K(a, b[e], c || this.handleEvent, d || !1, this.Hb || this);
        if (!f)break;
        this.v[f.key] = f
    }
    return this
};
g.Y = function (a, b, c, d, e) {
    if (r(b))for (var f = 0; f < b.length; f++)this.Y(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.Hb || this, c = kd(c), d = !!d, b = ad(a) ? a.Pb(b, c, d, e) : a ? (a = ld(a)) ? a.Pb(b, c, d, e) : null : null, b && (qd(b), delete this.v[b.key]);
    return this
};
g.removeAll = function () {
    jb(this.v, qd);
    this.v = {}
};
g.k = function () {
    Rf.c.k.call(this);
    this.removeAll()
};
g.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
var Tf = function (a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)return!1;
    switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 224:
        case 92:
            return!1;
        case 0:
            return!C;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
    }
}, Wf = function (a, b, c, d, e) {
    if (!(B || D && E("525")))return!0;
    if (wb && e)return Uf(a);
    if (e && !d)return!1;
    ga(b) && (b = Vf(b));
    if (!c &&
        (17 == b || 18 == b || wb && 91 == b))return!1;
    if (D && d && c)switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return!1
    }
    if (B && d && b == a)return!1;
    switch (a) {
        case 13:
            return!(B && B && 9 <= Fb);
        case 27:
            return!D
    }
    return Uf(a)
}, Uf = function (a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || D && 0 == a)return!0;
    switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return!0;
        default:
            return!1
    }
}, Vf = function (a) {
    if (C)a = Xf(a); else if (wb && D)t:switch (a) {
        case 93:
            a = 91;
            break t
    }
    return a
}, Xf = function (a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};
var Yf = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
Yf.prototype.T = function () {
    return new Yf(this.top, this.right, this.bottom, this.left)
};
Yf.prototype.toString = function () {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
Yf.prototype.contains = function (a) {
    return this && a ? a instanceof Yf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
Yf.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var Zf = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
Zf.prototype.T = function () {
    return new Zf(this.left, this.top, this.width, this.height)
};
Zf.prototype.toString = function () {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
Zf.prototype.contains = function (a) {
    return a instanceof Zf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
Zf.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var $f = function (a, b) {
    var c = F(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, ag = function (a, b) {
    return $f(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, cg = function (a, b, c) {
    var d, e = C && (wb || Ab) && E("1.9");
    b instanceof A ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = bg(d, e);
    a.style.top = bg(b, e)
}, dg = function (a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return{left: 0, top: 0, right: 0, bottom: 0}
    }
    B && a.ownerDocument.body &&
    (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, eg = function (a) {
    if (B && !(B && 8 <= Fb))return a.offsetParent;
    var b = F(a), c = ag(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)if (c = ag(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
    return null
}, hg = function (a) {
    for (var b =
        new Yf(0, Infinity, Infinity, 0), c = G(a), d = c.q.body, e = c.q.documentElement, f = Ub(c.q); a = eg(a);)if (!(B && 0 == a.clientWidth || D && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == ag(a, "overflow"))) {
        var h = fg(a), k;
        k = a;
        if (C && !E("1.9")) {
            var l = parseFloat($f(k, "borderLeftWidth"));
            if (gg(k))var m = k.offsetWidth - k.clientWidth - l - parseFloat($f(k, "borderRightWidth")), l = l + m;
            k = new A(l, parseFloat($f(k, "borderTopWidth")))
        } else k = new A(k.clientLeft, k.clientTop);
        h.x += k.x;
        h.y += k.y;
        b.top = Math.max(b.top, h.y);
        b.right = Math.min(b.right,
                h.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
        b.left = Math.max(b.left, h.x)
    }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = (Vb(c.q) || window).document;
    c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
    c = new ib(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}, fg = function (a) {
    var b, c = F(a), d = ag(a, "position");
    Na(a, "Parameter is required");
    var e = C && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new A(0, 0), h;
    b = c ? F(c) : document;
    h = !B || B && 9 <= Fb || nc(G(b)) ? b.documentElement : b.body;
    if (a == h)return f;
    if (a.getBoundingClientRect)b = dg(a), a = oc(G(c)), f.x = b.left + a.x, f.y = b.top + a.y; else if (c.getBoxObjectFor && !e)b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY; else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y +=
                b.clientTop || 0);
            if (D && "fixed" == ag(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (yb || D && "absolute" == d)f.y -= c.body.offsetTop;
        for (b = a; (b = eg(b)) && b != c.body && b != h;)f.x -= b.scrollLeft, yb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, jg = function (a, b) {
    var c = ig(a), d = ig(b);
    return new A(c.x - d.x, c.y - d.y)
}, lg = function (a) {
    var b;
    if (a.getBoundingClientRect)b = dg(a), b = new A(b.left, b.top); else {
        b = oc(G(a));
        var c = fg(a);
        b = new A(c.x - b.x, c.y - b.y)
    }
    if (C && !E(12)) {
        i:{
            c = Ha();
            if (void 0 === a.style[c] && (c = (D ? "Webkit" : C ? "Moz" : B ? "ms" : yb ? "O" : null) + Ia(), void 0 !== a.style[c])) {
                c = (D ? "-webkit" : C ? "-moz" : B ? "-ms" : yb ? "-o" : null) + "-transform";
                break i
            }
            c = "transform"
        }
        a = (a = ag(a, c) || ag(a, "transform")) ? (a = a.match(kg)) ? new A(parseFloat(a[1]), parseFloat(a[2])) : new A(0, 0) : new A(0, 0);
        a = new A(b.x + a.x, b.y + a.y)
    } else a = b;
    return a
}, ig = function (a) {
    x(a);
    if (1 == a.nodeType)return lg(a);
    var b = t(a.Sb), c = a;
    a.targetTouches ? c = a.targetTouches[0] : b && a.Sb().targetTouches && (c = a.Sb().targetTouches[0]);
    return new A(c.clientX,
        c.clientY)
}, bg = function (a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, ng = function (a) {
    var b = mg;
    if ("none" != ag(a, "display"))return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}, mg = function (a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = D && !b && !c;
    return q(b) && !d || !a.getBoundingClientRect ? new ib(b, c) : (a = dg(a), new ib(a.right - a.left, a.bottom - a.top))
}, og = function (a) {
    var b =
        fg(a);
    a = ng(a);
    return new Zf(b.x, b.y, a.width, a.height)
}, ie = function (a, b) {
    a.style.display = b ? "" : "none"
}, gg = function (a) {
    return"rtl" == ag(a, "direction")
}, pg = C ? "MozUserSelect" : D ? "WebkitUserSelect" : null, qg = function (a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (pg) {
        if (b = b ? "none" : "", a.style[pg] = b, c) {
            a = 0;
            for (var d; d = c[a]; a++)d.style[pg] = b
        }
    } else if (B || yb)if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)for (a = 0; d = c[a]; a++)d.setAttribute("unselectable", b)
}, rg = function (a, b) {
    if (/^\d+px?$/.test(b))return parseInt(b,
        10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}, sg = function (a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? rg(a, c) : 0
}, tg = {thin: 2, medium: 4, thick: 6}, ug = function (a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in tg ? tg[c] : rg(a, c)
}, vg = function (a) {
    if (B && !(B && 9 <= Fb)) {
        var b = ug(a, "borderLeft"),
            c = ug(a, "borderRight"), d = ug(a, "borderTop");
        a = ug(a, "borderBottom");
        return new Yf(d, c, a, b)
    }
    b = $f(a, "borderLeftWidth");
    c = $f(a, "borderRightWidth");
    d = $f(a, "borderTopWidth");
    a = $f(a, "borderBottomWidth");
    return new Yf(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}, kg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var yg = function (a, b, c, d, e) {
    function f(a) {
        a && (a.tabIndex = 0, If(a, h.ma()), R(a, "goog-zippy-header"), wg(h, a), a && h.vd.listen(a, "keydown", h.De))
    }

    Q.call(this);
    this.ka = e || G();
    this.$a = this.ka.a(a) || null;
    this.hc = this.ka.a(d || null);
    this.mb = (this.Jc = t(b) ? b : null) || !b ? null : this.ka.a(b);
    this.Ka = !0 == c;
    this.vd = new Rf(this);
    this.Ec = new Rf(this);
    var h = this;
    f(this.$a);
    f(this.hc);
    this.Kc(this.Ka)
};
w(yg, Q);
g = yg.prototype;
g.eb = !0;
g.k = function () {
    yg.c.k.call(this);
    Vc(this.vd);
    Vc(this.Ec)
};
g.ma = function () {
    return"tab"
};
g.n = function () {
    return this.mb
};
g.toggle = function () {
    this.Kc(!this.Ka)
};
g.Kc = function (a) {
    this.mb ? ie(this.mb, a) : a && this.Jc && (this.mb = this.Jc());
    this.mb && R(this.mb, "goog-zippy-content");
    this.hc ? (ie(this.$a, !a), ie(this.hc, a)) : zg(this, a);
    this.Ka = a;
    this.dispatchEvent(new Ag("toggle", this))
};
var zg = function (a, b) {
    a.$a && (Qf(a.$a, "goog-zippy-expanded", b), Qf(a.$a, "goog-zippy-collapsed", !b), Kf(a.$a, "expanded", b))
};
yg.prototype.Dd = function () {
    return this.eb
};
yg.prototype.tb = function (a) {
    this.eb != a && ((this.eb = a) ? (wg(this, this.$a), wg(this, this.hc)) : this.Ec.removeAll())
};
var wg = function (a, b) {
    b && a.Ec.listen(b, "click", a.of)
};
yg.prototype.De = function (a) {
    if (13 == a.keyCode || 32 == a.keyCode)this.toggle(), this.dispatchEvent(new I("action", this)), a.preventDefault(), a.stopPropagation()
};
yg.prototype.of = function () {
    this.toggle();
    this.dispatchEvent(new I("action", this))
};
var Ag = function (a, b) {
    I.call(this, a, b)
};
w(Ag, I);
var Bg = function (a, b, c, d) {
    d = d || G();
    var e = d.g("div", {style: "overflow:hidden"});
    b = d.a(b);
    b.parentNode.replaceChild(e, b);
    e.appendChild(b);
    this.gc = e;
    this.na = null;
    yg.call(this, a, b, c, void 0, d);
    a = this.Ka;
    this.gc.style.display = a ? "" : "none";
    zg(this, a)
};
w(Bg, yg);
g = Bg.prototype;
g.Te = 500;
g.Se = function (a) {
    return 1 - Math.pow(1 - a, 3)
};
g.Kc = function (a) {
    if (this.Ka != a || this.na) {
        "none" == this.gc.style.display && (this.gc.style.display = "");
        var b = this.n().offsetHeight, c = 0;
        this.na ? (a = this.Ka, rd(this.na), this.na.stop(!1), c = b - Math.abs(parseInt(this.n().style.marginTop, 10))) : c = a ? 0 : b;
        zg(this, a);
        this.na = new Cf([0, c], [0, a ? b : 0], this.Te, this.Se);
        K(this.na, ["begin", "animate", "end"], this.Ue, !1, this);
        K(this.na, "end", na(this.Ve, this, a));
        this.na.play(!1)
    }
};
g.Ue = function (a) {
    var b = this.n();
    b.style.marginTop = a.y - b.offsetHeight + "px"
};
g.Ve = function (a) {
    a && (this.n().style.marginTop = "0");
    rd(this.na);
    this.Ka = a;
    this.na = null;
    a || (this.gc.style.display = "none");
    this.dispatchEvent(new Ag("toggle", this))
};
var Cg = function (a) {
    Q.call(this);
    this.e = a;
    a = B || D && !E("531") && "TEXTAREA" == a.tagName;
    this.W = new Rf(this);
    this.W.listen(this.e, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
};
w(Cg, Q);
Cg.prototype.O = null;
Cg.prototype.handleEvent = function (a) {
    if ("input" == a.type)B && E(10) && 0 == a.keyCode && 0 == a.charCode || (Dg(this), yb && this.e != F(this.e).activeElement || this.dispatchEvent(Eg(a))); else if ("keydown" != a.type || Tf(a)) {
        var b = "keydown" == a.type ? this.e.value : null;
        B && 229 == a.keyCode && (b = null);
        var c = Eg(a);
        Dg(this);
        this.O = uf(function () {
            this.O = null;
            this.e.value != b && this.dispatchEvent(c)
        }, 0, this)
    }
};
var Dg = function (a) {
    null != a.O && (p.clearTimeout(a.O), a.O = null)
}, Eg = function (a) {
    a = new J(a.Sb());
    a.type = "input";
    return a
};
Cg.prototype.k = function () {
    Cg.c.k.call(this);
    this.W.P();
    Dg(this);
    delete this.e
};
var Gg = function (a, b) {
    Q.call(this);
    a && Fg(this, a, b)
};
w(Gg, Q);
g = Gg.prototype;
g.e = null;
g.qc = null;
g.Wc = null;
g.rc = null;
g.$ = -1;
g.Oa = -1;
g.cd = !1;
var Hg = {3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45}, Ig = {Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45}, Jg = B || D && E("525"), Kg = wb && C;
Gg.prototype.We = function (a) {
    D && (17 == this.$ && !a.ctrlKey || 18 == this.$ && !a.altKey || wb && 91 == this.$ && !a.metaKey) && (this.Oa = this.$ = -1);
    -1 == this.$ && (a.ctrlKey && 17 != a.keyCode ? this.$ = 17 : a.altKey && 18 != a.keyCode ? this.$ = 18 : a.metaKey && 91 != a.keyCode && (this.$ = 91));
    Jg && !Wf(a.keyCode, this.$, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Oa = Vf(a.keyCode), Kg && (this.cd = a.altKey))
};
Gg.prototype.Xe = function (a) {
    this.Oa = this.$ = -1;
    this.cd = a.altKey
};
Gg.prototype.handleEvent = function (a) {
    var b = a.Sb(), c, d, e = b.altKey;
    B && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : D && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Uf(c) ? b.charCode : 0) : yb ? (c = this.Oa, d = Uf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Kg && (e = this.cd), wb && 63 == d && 224 == c && (c = 191));
    var f = c = Vf(c), h = b.keyIdentifier;
    c ? 63232 <= c && c in Hg ? f = Hg[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ig && (f = Ig[h]);
    a = f == this.$;
    this.$ = f;
    b = new Lg(f, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
};
Gg.prototype.a = function () {
    return this.e
};
var Fg = function (a, b, c) {
    a.rc && a.detach();
    a.e = b;
    a.qc = K(a.e, "keypress", a, c);
    a.Wc = K(a.e, "keydown", a.We, c, a);
    a.rc = K(a.e, "keyup", a.Xe, c, a)
};
Gg.prototype.detach = function () {
    this.qc && (qd(this.qc), qd(this.Wc), qd(this.rc), this.rc = this.Wc = this.qc = null);
    this.e = null;
    this.Oa = this.$ = -1
};
Gg.prototype.k = function () {
    Gg.c.k.call(this);
    this.detach()
};
var Lg = function (a, b, c, d) {
    J.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
};
w(Lg, J);
var Og = function (a, b, c, d, e, f, h, k, l) {
    x(c);
    var m = Mg(c), n = og(a), u = hg(a);
    if (u) {
        var L = new Zf(u.left, u.top, u.right - u.left, u.bottom - u.top), u = Math.max(n.left, L.left), oa = Math.min(n.left + n.width, L.left + L.width);
        if (u <= oa) {
            var Fa = Math.max(n.top, L.top), L = Math.min(n.top + n.height, L.top + L.height);
            Fa <= L && (n.left = u, n.top = Fa, n.width = oa - u, n.height = L - Fa)
        }
    }
    u = G(a);
    Fa = G(c);
    if (u.q != Fa.q) {
        var oa = u.q.body, Fa = Vb(Fa.q), L = new A(0, 0), Jb = Wb(F(oa)), Ud = oa;
        do {
            var xg = Jb == Fa ? fg(Ud) : lg(x(Ud));
            L.x += xg.x;
            L.y += xg.y
        } while (Jb && Jb != Fa && (Ud =
            Jb.frameElement) && (Jb = Jb.parent));
        oa = hb(L, fg(oa));
        B && !nc(u) && (oa = hb(oa, oc(u)));
        n.left += oa.x;
        n.top += oa.y
    }
    a = Ng(a, b);
    n = new A(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
    n = hb(n, m);
    e && (n.x += (a & 2 ? -1 : 1) * e.x, n.y += (a & 1 ? -1 : 1) * e.y);
    var S;
    if (h)if (l)S = l; else if (S = hg(c))S.top -= m.y, S.right -= m.x, S.bottom -= m.y, S.left -= m.x;
    t:{
        m = S;
        l = n.T();
        e = 0;
        S = Ng(c, d);
        d = ng(c);
        k = k ? k.T() : d.T();
        if (f || 0 != S)S & 2 ? l.x -= k.width + (f ? f.right : 0) : f && (l.x += f.left), S & 1 ? l.y -= k.height + (f ? f.bottom : 0) : f && (l.y += f.top);
        if (h && (m ? (f = l, e = 0, 65 == (h &
            65) && (f.x < m.left || f.x >= m.right) && (h &= -2), 132 == (h & 132) && (f.y < m.top || f.y >= m.bottom) && (h &= -5), f.x < m.left && h & 1 && (f.x = m.left, e |= 1), f.x < m.left && f.x + k.width > m.right && h & 16 && (k.width = Math.max(k.width - (f.x + k.width - m.right), 0), e |= 4), f.x + k.width > m.right && h & 1 && (f.x = Math.max(m.right - k.width, m.left), e |= 1), h & 2 && (e = e | (f.x < m.left ? 16 : 0) | (f.x + k.width > m.right ? 32 : 0)), f.y < m.top && h & 4 && (f.y = m.top, e |= 2), f.y <= m.top && f.y + k.height < m.bottom && h & 32 && (k.height = Math.max(k.height - (m.top - f.y), 0), f.y = m.top, e |= 8), f.y >= m.top && f.y + k.height >
            m.bottom && h & 32 && (k.height = Math.max(k.height - (f.y + k.height - m.bottom), 0), e |= 8), f.y + k.height > m.bottom && h & 4 && (f.y = Math.max(m.bottom - k.height, m.top), e |= 2), h & 8 && (e = e | (f.y < m.top ? 64 : 0) | (f.y + k.height > m.bottom ? 128 : 0)), h = e) : h = 256, e = h, e & 496)) {
            c = e;
            break t
        }
        cg(c, l);
        d == k || d && k && d.width == k.width && d.height == k.height || (f = nc(G(F(c))), !B || f && E("8") ? (c = c.style, C ? c.MozBoxSizing = "border-box" : D ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(k.width, 0) + "px", c.height = Math.max(k.height, 0) + "px") : (h =
            c.style, f ? (B ? (f = sg(c, "paddingLeft"), d = sg(c, "paddingRight"), l = sg(c, "paddingTop"), m = sg(c, "paddingBottom"), f = new Yf(l, d, m, f)) : (f = $f(c, "paddingLeft"), d = $f(c, "paddingRight"), l = $f(c, "paddingTop"), m = $f(c, "paddingBottom"), f = new Yf(parseFloat(l), parseFloat(d), parseFloat(m), parseFloat(f))), c = vg(c), h.pixelWidth = k.width - c.left - f.left - f.right - c.right, h.pixelHeight = k.height - c.top - f.top - f.bottom - c.bottom) : (h.pixelWidth = k.width, h.pixelHeight = k.height)));
        c = e
    }
    return c
}, Mg = function (a) {
    var b;
    if (a = a.offsetParent) {
        var c =
            "HTML" == a.tagName || "BODY" == a.tagName;
        c && "static" == ag(a, "position") || (b = fg(a), c || (c = (c = gg(a)) && C ? -a.scrollLeft : !c || B && E("8") || "visible" == ag(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = hb(b, new A(c, a.scrollTop))))
    }
    return b || new A
}, Ng = function (a, b) {
    return(b & 4 && gg(a) ? b ^ 2 : b) & -5
};
var Pg = function () {
};
Pg.prototype.ub = function () {
};
var Qg = function (a, b, c) {
    this.element = a;
    this.hd = b;
    this.nf = c
};
w(Qg, Pg);
Qg.prototype.ub = function (a, b, c) {
    Og(this.element, this.hd, a, b, void 0, c, this.nf)
};
var Rg = function (a, b, c, d) {
    Qg.call(this, a, b);
    this.ke = c ? 5 : 0;
    this.kd = d || void 0
};
w(Rg, Qg);
Rg.prototype.ub = function (a, b, c, d) {
    var e = Og(this.element, this.hd, a, b, null, c, 10, d, this.kd);
    if (e & 496) {
        var f = Sg(e, this.hd);
        b = Sg(e, b);
        e = Og(this.element, f, a, b, null, c, 10, d, this.kd);
        e & 496 && (f = Sg(e, f), b = Sg(e, b), Og(this.element, f, a, b, null, c, this.ke, d, this.kd))
    }
};
var Sg = function (a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
};
var Tg = function (a, b, c, d) {
    Rg.call(this, a, b, c || d);
    if (c || d)this.ke = 65 | (d ? 32 : 132)
};
w(Tg, Rg);
var Ug = function () {
};
da(Ug);
Ug.prototype.jf = 0;
var T = function (a) {
    Q.call(this);
    this.ka = a || G();
    this.Lb = Vg
};
w(T, Q);
T.prototype.hf = Ug.r();
var Vg = null, Wg = function (a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
};
g = T.prototype;
g.ea = null;
g.o = !1;
g.e = null;
g.Lb = null;
g.Fc = null;
g.F = null;
g.I = null;
g.ia = null;
g.ld = !1;
var Xg = function (a) {
    return a.ea || (a.ea = ":" + (a.hf.jf++).toString(36))
}, Yg = function (a, b) {
    if (a.F && a.F.ia) {
        var c = a.F.ia, d = a.ea;
        d in c && delete c[d];
        nb(a.F.ia, b, a)
    }
    a.ea = b
};
T.prototype.a = function () {
    return this.e
};
var Zg = function (a) {
    a.Ya || (a.Ya = new Rf(a));
    return a.Ya
}, ah = function (a, b) {
    if (a == b)throw Error("Unable to set parent component");
    if (b && a.F && a.ea && $g(a.F, a.ea) && a.F != b)throw Error("Unable to set parent component");
    a.F = b;
    T.c.Vc.call(a, b)
};
T.prototype.getParent = function () {
    return this.F
};
T.prototype.Vc = function (a) {
    if (this.F && this.F != a)throw Error("Method not supported");
    T.c.Vc.call(this, a)
};
T.prototype.A = function () {
    return this.ka
};
T.prototype.g = function () {
    this.e = this.ka.createElement("div")
};
var bh = function (a, b, c) {
    if (a.o)throw Error("Component already rendered");
    a.e || a.g();
    b ? b.insertBefore(a.e, c || null) : a.ka.q.body.appendChild(a.e);
    a.F && !a.F.o || a.L()
};
g = T.prototype;
g.J = function (a) {
    if (this.o)throw Error("Component already rendered");
    if (a && this.pa(a)) {
        this.ld = !0;
        var b = F(a);
        this.ka && this.ka.q == b || (this.ka = G(a));
        this.Ua(a);
        this.L()
    } else throw Error("Invalid element to decorate");
};
g.pa = function () {
    return!0
};
g.Ua = function (a) {
    this.e = a
};
g.L = function () {
    this.o = !0;
    ch(this, function (a) {
        !a.o && a.a() && a.L()
    })
};
g.ha = function () {
    ch(this, function (a) {
        a.o && a.ha()
    });
    this.Ya && this.Ya.removeAll();
    this.o = !1
};
g.k = function () {
    this.o && this.ha();
    this.Ya && (this.Ya.P(), delete this.Ya);
    ch(this, function (a) {
        a.P()
    });
    !this.ld && this.e && bc(this.e);
    this.F = this.Fc = this.e = this.ia = this.I = null;
    T.c.k.call(this)
};
g.ib = function (a, b) {
    this.Qc(a, dh(this), b)
};
g.Qc = function (a, b, c) {
    x(!!a, "Provided element must not be null.");
    if (a.o && (c || !this.o))throw Error("Component already rendered");
    if (0 > b || b > dh(this))throw Error("Child component index out of bounds");
    this.ia && this.I || (this.ia = {}, this.I = []);
    if (a.getParent() == this) {
        var d = Xg(a);
        this.ia[d] = a;
        Ya(this.I, a)
    } else nb(this.ia, Xg(a), a);
    ah(a, this);
    bb(this.I, b, 0, a);
    a.o && this.o && a.getParent() == this ? (c = this.n(), c.insertBefore(a.a(), c.childNodes[b] || null)) : c ? (this.e || this.g(), b = eh(this, b + 1), bh(a, this.n(), b ? b.e : null)) :
        this.o && !a.o && a.e && a.e.parentNode && 1 == a.e.parentNode.nodeType && a.L()
};
g.n = function () {
    return this.e
};
var fh = function (a) {
    null == a.Lb && (a.Lb = gg(a.o ? a.e : a.ka.q.body));
    return a.Lb
};
T.prototype.lb = function (a) {
    if (this.o)throw Error("Component already rendered");
    this.Lb = a
};
var dh = function (a) {
    return a.I ? a.I.length : 0
}, $g = function (a, b) {
    var c;
    a.ia && b ? (c = a.ia, c = (b in c ? c[b] : void 0) || null) : c = null;
    return c
}, eh = function (a, b) {
    return a.I ? a.I[b] || null : null
}, ch = function (a, b, c) {
    a.I && z(a.I, b, c)
}, gh = function (a, b) {
    return a.I && b ? Ra(a.I, b) : -1
};
T.prototype.removeChild = function (a, b) {
    if (a) {
        var c = s(a) ? a : Xg(a);
        a = $g(this, c);
        if (c && a) {
            var d = this.ia;
            c in d && delete d[c];
            Ya(this.I, a);
            b && (a.ha(), a.e && bc(a.e));
            ah(a, null)
        }
    }
    if (!a)throw Error("Child is not in parent component");
    return a
};
var hh = function (a, b, c) {
    I.call(this, a, b);
    this.item = c
};
w(hh, I);
var U = function (a, b) {
    T.call(this, b);
    this.S = a || ""
};
w(U, T);
U.prototype.za = null;
U.prototype.He = 10;
var ih = "placeholder"in document.createElement("input");
g = U.prototype;
g.zb = !1;
g.g = function () {
    this.e = this.A().g("input", {type: "text"})
};
g.Ua = function (a) {
    U.c.Ua.call(this, a);
    this.S || (this.S = a.getAttribute("label") || "");
    lc(F(a)) == a && (this.zb = !0, a = this.a(), x(a), Of(a, this.Db));
    ih ? this.a().placeholder = this.S : (a = this.a(), x(a, "The label input element cannot be null."), Kf(a, "label", this.S))
};
g.L = function () {
    U.c.L.call(this);
    var a = new Rf(this);
    a.listen(this.a(), "focus", this.xd);
    a.listen(this.a(), "blur", this.Ae);
    ih ? this.W = a : (C && a.listen(this.a(), ["keypress", "keydown", "keyup"], this.Be), a.listen(Wb(F(this.a())), "load", this.Ce), this.W = a, jh(this));
    kh(this);
    this.a().B = this
};
g.ha = function () {
    U.c.ha.call(this);
    this.W && (this.W.P(), this.W = null);
    this.a().B = null
};
var jh = function (a) {
    !a.Ke && a.W && a.a().form && (a.W.listen(a.a().form, "submit", a.Le), a.Ke = !0)
};
g = U.prototype;
g.k = function () {
    U.c.k.call(this);
    this.W && (this.W.P(), this.W = null)
};
g.Db = "label-input-label";
g.xd = function () {
    this.zb = !0;
    var a = this.a();
    x(a);
    Of(a, this.Db);
    if (!ih && !lh(this) && !this.Ge) {
        var b = this, a = function () {
            b.a() && (b.a().value = "")
        };
        B ? uf(a, 10) : a()
    }
};
g.Ae = function () {
    ih || (this.W.Y(this.a(), "click", this.xd), this.za = null);
    this.zb = !1;
    kh(this)
};
g.Be = function (a) {
    27 == a.keyCode && ("keydown" == a.type ? this.za = this.a().value : "keypress" == a.type ? this.a().value = this.za : "keyup" == a.type && (this.za = null), a.preventDefault())
};
g.Le = function () {
    lh(this) || (this.a().value = "", uf(this.Me, 10, this))
};
g.Me = function () {
    lh(this) || (this.a().value = this.S)
};
g.Ce = function () {
    kh(this)
};
var lh = function (a) {
    return!!a.a() && "" != a.a().value && a.a().value != a.S
};
g = U.prototype;
g.clear = function () {
    this.a().value = "";
    null != this.za && (this.za = "")
};
g.reset = function () {
    lh(this) && (this.clear(), kh(this))
};
g.ba = function (a) {
    null != this.za && (this.za = a);
    this.a().value = a;
    kh(this)
};
g.H = function () {
    return null != this.za ? this.za : lh(this) ? this.a().value : ""
};
g.Xd = function (a) {
    ih ? (this.S = a, this.a() && (this.a().placeholder = this.S)) : (this.a() && !lh(this) && (this.a().value = ""), this.S = a, this.Id(), (a = this.a()) && Kf(a, "label", this.S))
};
var kh = function (a) {
    var b = a.a();
    x(b, "The label input element cannot be null.");
    ih ? a.a().placeholder != a.S && (a.a().placeholder = a.S) : (jh(a), Kf(b, "label", a.S));
    lh(a) ? (b = a.a(), x(b), Of(b, a.Db)) : (a.Ge || a.zb || (b = a.a(), x(b), R(b, a.Db)), ih || uf(a.Id, a.He, a))
};
U.prototype.setEnabled = function (a) {
    this.a().disabled = !a;
    var b = this.a();
    x(b);
    Qf(b, this.Db + "-disabled", !a)
};
U.prototype.isEnabled = function () {
    return!this.a().disabled
};
U.prototype.Id = function () {
    !this.a() || lh(this) || this.zb || (this.a().value = this.S)
};
var nh = function (a, b) {
    if (!a)throw Error("Invalid class name " + a);
    if (!t(b))throw Error("Invalid decorator function " + b);
    mh[a] = b
}, oh = function (a) {
    var b;
    x(a);
    a = Lf(a);
    for (var c = 0, d = a.length; c < d; c++)if (b = a[c], b = b in mh ? mh[b]() : null)return b;
    return null
}, ph = {}, mh = {};
var qh = function (a) {
    this.me = a
};
da(qh);
qh.prototype.ma = function () {
    return this.me
};
var rh = function (a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
qh.prototype.g = function (a) {
    return a.A().g("div", this.Kb(a).join(" "))
};
qh.prototype.n = function (a) {
    return a
};
qh.prototype.pa = function (a) {
    return"DIV" == a.tagName
};
qh.prototype.J = function (a, b) {
    b.id && Yg(a, b.id);
    var c = this.l(), d = !1, e = Lf(b);
    e && z(e, function (b) {
        b == c ? d = !0 : b && (b == c + "-disabled" ? a.setEnabled(!1) : b == c + "-horizontal" ? sh(a, "horizontal") : b == c + "-vertical" && sh(a, "vertical"))
    }, this);
    d || R(b, c);
    th(this, a, this.n(b));
    return b
};
var th = function (a, b, c) {
    if (c)for (var d = c.firstChild, e; d && d.parentNode == c;) {
        e = d.nextSibling;
        if (1 == d.nodeType) {
            var f = a.Rc(d);
            f && (f.e = d, b.isEnabled() || f.setEnabled(!1), b.ib(f), f.J(d))
        } else d.nodeValue && "" != va(d.nodeValue) || c.removeChild(d);
        d = e
    }
};
g = qh.prototype;
g.Rc = function (a) {
    return oh(a)
};
g.hb = function (a) {
    a = a.a();
    x(a, "The container DOM element cannot be null.");
    qg(a, !0, C);
    B && (a.hideFocus = !0);
    var b = this.ma();
    b && If(a, b)
};
g.C = function (a) {
    return a.a()
};
g.l = function () {
    return"goog-container"
};
g.Kb = function (a) {
    var b = this.l(), c = [b, "horizontal" == a.Xa ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};
var uh = function () {
}, vh;
da(uh);
var wh = {button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected"};
g = uh.prototype;
g.ma = function () {
};
g.g = function (a) {
    var b = a.A().g("div", this.Kb(a).join(" "), a.ta);
    xh(this, a, b);
    return b
};
g.n = function (a) {
    return a
};
g.Eb = function (a, b, c) {
    if (a = a.a ? a.a() : a)if (B && !E("7")) {
        var d = yh(Kb(a), b);
        d.push(b);
        v(c ? Lb : Nb, a).apply(null, d)
    } else c ? Lb(a, b) : Nb(a, b)
};
g.pa = function () {
    return!0
};
g.J = function (a, b) {
    b.id && Yg(a, b.id);
    var c = this.n(b);
    c && c.firstChild ? zh(a, c.firstChild.nextSibling ? $a(c.childNodes) : c.firstChild) : a.ta = null;
    var d = 0, e = this.l(), f = this.l(), h = !1, k = !1, c = !1, l = Kb(b);
    z(l, function (a) {
        h || a != e ? k || a != f ? d |= this.Lc(a) : k = !0 : (h = !0, f == e && (k = !0))
    }, this);
    a.j = d;
    h || (l.push(e), f == e && (k = !0));
    k || l.push(f);
    var m = a.la;
    m && l.push.apply(l, m);
    if (B && !E("7")) {
        var n = yh(l);
        0 < n.length && (l.push.apply(l, n), c = !0)
    }
    if (!h || !k || m || c)b.className = l.join(" ");
    xh(this, a, b);
    return b
};
g.hb = function (a) {
    fh(a) && this.lb(a.a(), !0);
    a.isEnabled() && this.Ha(a, a.w())
};
var Ah = function (a, b, c) {
    if (a = c || a.ma())x(b, "The element passed as a first parameter cannot be null."), c = b.getAttribute("role") || null, a != c && If(b, a)
}, xh = function (a, b, c) {
    x(b);
    x(c);
    b.w() || Kf(c, "hidden", !b.w());
    b.isEnabled() || a.ua(c, 1, !b.isEnabled());
    V(b, 8) && a.ua(c, 8, !!(b.j & 8));
    V(b, 16) && a.ua(c, 16, !!(b.j & 16));
    V(b, 64) && a.ua(c, 64, !!(b.j & 64))
};
g = uh.prototype;
g.xb = function (a, b) {
    qg(a, !b, !B && !yb)
};
g.lb = function (a, b) {
    this.Eb(a, this.l() + "-rtl", b)
};
g.Ba = function (a) {
    var b;
    return V(a, 32) && (b = a.C()) ? gc(b) && hc(b) : !1
};
g.Ha = function (a, b) {
    var c;
    if (V(a, 32) && (c = a.C())) {
        if (!b && a.j & 32) {
            try {
                c.blur()
            } catch (d) {
            }
            a.j & 32 && a.Cb(null)
        }
        (gc(c) && hc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
};
g.ga = function (a, b) {
    ie(a, b);
    a && Kf(a, "hidden", !b)
};
g.R = function (a, b, c) {
    var d = a.a();
    if (d) {
        var e = this.yb(b);
        e && this.Eb(a, e, c);
        this.ua(d, b, c)
    }
};
g.ua = function (a, b, c) {
    vh || (vh = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
    x(a, "The element passed as a first parameter cannot be null.");
    b = vh[b];
    var d = a.getAttribute("role") || null;
    d && (d = wh[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && Kf(a, b, c)
};
g.jb = function (a, b) {
    var c = this.n(a);
    if (c && (ac(c), b))if (s(b))dc(c, b); else {
        var d = function (a) {
            if (a) {
                var b = F(c);
                c.appendChild(s(a) ? b.createTextNode(a) : a)
            }
        };
        r(b) ? z(b, d) : !fa(b) || "nodeType"in b ? d(b) : z($a(b), d)
    }
};
g.C = function (a) {
    return a.a()
};
g.l = function () {
    return"goog-control"
};
g.Kb = function (a) {
    var b = this.l(), c = [b], d = this.l();
    d != b && c.push(d);
    b = a.j;
    for (d = []; b;) {
        var e = b & -b;
        d.push(this.yb(e));
        b &= ~e
    }
    c.push.apply(c, d);
    (a = a.la) && c.push.apply(c, a);
    B && !E("7") && c.push.apply(c, yh(c));
    return c
};
var yh = function (a, b) {
    var c = [];
    b && (a = a.concat([b]));
    z([], function (d) {
        !Va(d, v(Xa, a)) || b && !Xa(d, b) || c.push(d.join("_"))
    });
    return c
};
uh.prototype.yb = function (a) {
    this.wc || Bh(this);
    return this.wc[a]
};
uh.prototype.Lc = function (a) {
    if (!this.le) {
        this.wc || Bh(this);
        var b = this.wc, c = {}, d;
        for (d in b)c[b[d]] = d;
        this.le = c
    }
    a = parseInt(this.le[a], 10);
    return isNaN(a) ? 0 : a
};
var Bh = function (a) {
    var b = a.l();
    a.wc = {1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open"}
};
var W = function (a, b, c) {
    T.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ka(b);
            if (d = ph[d])break;
            b = b.c ? b.c.constructor : null
        }
        b = d ? t(d.r) ? d.r() : new d : null
    }
    this.h = b;
    this.ta = q(a) ? a : null
};
w(W, T);
g = W.prototype;
g.ta = null;
g.j = 0;
g.Ab = 39;
g.Gb = 255;
g.Jb = 0;
g.Q = !0;
g.la = null;
g.eb = !0;
g.Yb = !1;
g.sf = null;
g.Dd = function () {
    return this.eb
};
g.tb = function (a) {
    this.o && a != this.eb && Ch(this, a);
    this.eb = a
};
g.C = function () {
    return this.h.C(this)
};
g.ic = function () {
    return this.M || (this.M = new Gg)
};
g.Ja = function () {
    return this.h
};
g.Eb = function (a, b) {
    b ? a && (this.la ? Xa(this.la, a) || this.la.push(a) : this.la = [a], this.h.Eb(this, a, !0)) : a && this.la && Ya(this.la, a) && (0 == this.la.length && (this.la = null), this.h.Eb(this, a, !1))
};
g.g = function () {
    var a = this.h.g(this);
    this.e = a;
    Ah(this.h, a, this.dc());
    this.Yb || this.h.xb(a, !1);
    this.w() || this.h.ga(a, !1)
};
g.dc = function () {
    return this.sf
};
g.n = function () {
    return this.h.n(this.a())
};
g.pa = function (a) {
    return this.h.pa(a)
};
g.Ua = function (a) {
    this.e = a = this.h.J(this, a);
    Ah(this.h, a, this.dc());
    this.Yb || this.h.xb(a, !1);
    this.Q = "none" != a.style.display
};
g.L = function () {
    W.c.L.call(this);
    this.h.hb(this);
    if (this.Ab & -2 && (this.Dd() && Ch(this, !0), V(this, 32))) {
        var a = this.C();
        if (a) {
            var b = this.ic();
            Fg(b, a);
            Zg(this).listen(b, "key", this.aa).listen(a, "focus", this.jc).listen(a, "blur", this.Cb)
        }
    }
};
var Ch = function (a, b) {
    var c = Zg(a), d = a.a();
    b ? (c.listen(d, "mouseover", a.Oc).listen(d, "mousedown", a.Ta).listen(d, "mouseup", a.Za).listen(d, "mouseout", a.Nc), a.Ib != ca && c.listen(d, "contextmenu", a.Ib), B && c.listen(d, "dblclick", a.Gd)) : (c.Y(d, "mouseover", a.Oc).Y(d, "mousedown", a.Ta).Y(d, "mouseup", a.Za).Y(d, "mouseout", a.Nc), a.Ib != ca && c.Y(d, "contextmenu", a.Ib), B && c.Y(d, "dblclick", a.Gd))
};
W.prototype.ha = function () {
    W.c.ha.call(this);
    this.M && this.M.detach();
    this.w() && this.isEnabled() && this.h.Ha(this, !1)
};
W.prototype.k = function () {
    W.c.k.call(this);
    this.M && (this.M.P(), delete this.M);
    delete this.h;
    this.la = this.ta = null
};
W.prototype.jb = function (a) {
    this.h.jb(this.a(), a);
    this.ta = a
};
var zh = function (a, b) {
    a.ta = b
};
g = W.prototype;
g.Ia = function () {
    var a = this.ta;
    if (!a)return"";
    if (!s(a))if (r(a))a = Ta(a, jc).join(""); else {
        if (Ib && "innerText"in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            ic(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Ib || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""))
    }
    return ua(a)
};
g.lb = function (a) {
    W.c.lb.call(this, a);
    var b = this.a();
    b && this.h.lb(b, a)
};
g.xb = function (a) {
    this.Yb = a;
    var b = this.a();
    b && this.h.xb(b, a)
};
g.w = function () {
    return this.Q
};
g.ga = function (a, b) {
    if (b || this.Q != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.a();
        c && this.h.ga(c, a);
        this.isEnabled() && this.h.Ha(this, a);
        this.Q = a;
        return!0
    }
    return!1
};
g.isEnabled = function () {
    return!(this.j & 1)
};
g.setEnabled = function (a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Dh(this, 1, !a) || (a || (this.setActive(!1), this.ja(!1)), this.w() && this.h.Ha(this, a), this.R(1, !a))
};
g.ja = function (a) {
    Dh(this, 2, a) && this.R(2, a)
};
g.xc = function () {
    return!!(this.j & 4)
};
g.setActive = function (a) {
    Dh(this, 4, a) && this.R(4, a)
};
g.uc = function (a) {
    Dh(this, 32, a) && this.R(32, a)
};
var Eh = function (a, b) {
    Dh(a, 64, b) && a.R(64, b)
};
W.prototype.R = function (a, b) {
    V(this, a) && b != !!(this.j & a) && (this.h.R(this, a, b), this.j = b ? this.j | a : this.j & ~a)
};
var V = function (a, b) {
    return!!(a.Ab & b)
}, Fh = function (a, b, c) {
    if (a.o && a.j & b && !c)throw Error("Component already rendered");
    !c && a.j & b && a.R(b, !1);
    a.Ab = c ? a.Ab | b : a.Ab & ~b
}, X = function (a, b) {
    return!!(a.Gb & b) && V(a, b)
}, Dh = function (a, b, c) {
    return V(a, b) && !!(a.j & b) != c && (!(a.Jb & b) || a.dispatchEvent(Wg(b, c))) && !a.Xc
};
g = W.prototype;
g.Oc = function (a) {
    (!a.relatedTarget || !cc(this.a(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && this.ja(!0)
};
g.Nc = function (a) {
    a.relatedTarget && cc(this.a(), a.relatedTarget) || !this.dispatchEvent("leave") || (X(this, 4) && this.setActive(!1), X(this, 2) && this.ja(!1))
};
g.Ib = ca;
g.Ta = function (a) {
    this.isEnabled() && (X(this, 2) && this.ja(!0), !Zc(a) || D && wb && a.ctrlKey || (X(this, 4) && this.setActive(!0), this.h.Ba(this) && this.C().focus()));
    this.Yb || !Zc(a) || D && wb && a.ctrlKey || a.preventDefault()
};
g.Za = function (a) {
    this.isEnabled() && (X(this, 2) && this.ja(!0), this.xc() && this.Va(a) && X(this, 4) && this.setActive(!1))
};
g.Gd = function (a) {
    this.isEnabled() && this.Va(a)
};
g.Va = function (a) {
    if (X(this, 16)) {
        var b = !(this.j & 16);
        Dh(this, 16, b) && this.R(16, b)
    }
    X(this, 8) && Dh(this, 8, !0) && this.R(8, !0);
    X(this, 64) && Eh(this, !(this.j & 64));
    b = new I("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.$c = a.$c);
    return this.dispatchEvent(b)
};
g.jc = function () {
    X(this, 32) && this.uc(!0)
};
g.Cb = function () {
    X(this, 4) && this.setActive(!1);
    X(this, 32) && this.uc(!1)
};
g.aa = function (a) {
    return this.w() && this.isEnabled() && this.Fa(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Fa = function (a) {
    return 13 == a.keyCode && this.Va(a)
};
if (!t(W))throw Error("Invalid component class " + W);
if (!t(uh))throw Error("Invalid renderer class " + uh);
var Gh = ka(W);
ph[Gh] = uh;
nh("goog-control", function () {
    return new W(null)
});
var Y = function (a, b, c) {
    T.call(this, c);
    this.h = b || qh.r();
    this.Xa = a || "vertical"
};
w(Y, T);
g = Y.prototype;
g.Gc = null;
g.M = null;
g.h = null;
g.Xa = null;
g.Q = !0;
g.va = !0;
g.Yc = !0;
g.X = -1;
g.D = null;
g.Sa = !1;
g.Je = !1;
g.Fe = !0;
g.Ca = null;
g.C = function () {
    return this.Gc || this.h.C(this)
};
g.ic = function () {
    return this.M || (this.M = new Gg(this.C()))
};
g.Ja = function () {
    return this.h
};
g.g = function () {
    this.e = this.h.g(this)
};
g.n = function () {
    return this.h.n(this.a())
};
g.pa = function (a) {
    return this.h.pa(a)
};
g.Ua = function (a) {
    this.e = this.h.J(this, a);
    "none" == a.style.display && (this.Q = !1)
};
g.L = function () {
    Y.c.L.call(this);
    ch(this, function (a) {
        a.o && Hh(this, a)
    }, this);
    var a = this.a();
    this.h.hb(this);
    this.ga(this.Q, !0);
    Zg(this).listen(this, "enter", this.Cc).listen(this, "highlight", this.re).listen(this, "unhighlight", this.te).listen(this, "open", this.se).listen(this, "close", this.pe).listen(a, "mousedown", this.Ta).listen(F(a), "mouseup", this.qe).listen(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.oe);
    this.Ba() && Ih(this, !0)
};
var Ih = function (a, b) {
    var c = Zg(a), d = a.C();
    b ? c.listen(d, "focus", a.jc).listen(d, "blur", a.Cb).listen(a.ic(), "key", a.aa) : c.Y(d, "focus", a.jc).Y(d, "blur", a.Cb).Y(a.ic(), "key", a.aa)
};
g = Y.prototype;
g.ha = function () {
    this.Da(-1);
    this.D && Eh(this.D, !1);
    this.Sa = !1;
    Y.c.ha.call(this)
};
g.k = function () {
    Y.c.k.call(this);
    this.M && (this.M.P(), this.M = null);
    this.h = this.D = this.Ca = this.Gc = null
};
g.Cc = function () {
    return!0
};
g.re = function (a) {
    var b = gh(this, a.target);
    if (-1 < b && b != this.X) {
        var c = Jh(this);
        c && c.ja(!1);
        this.X = b;
        c = Jh(this);
        this.Sa && c.setActive(!0);
        this.Fe && this.D && c != this.D && (V(c, 64) ? Eh(c, !0) : Eh(this.D, !1))
    }
    b = this.a();
    x(b, "The DOM element for the container cannot be null.");
    null != a.target.a() && Kf(b, "activedescendant", a.target.a().id)
};
g.te = function (a) {
    a.target == Jh(this) && (this.X = -1);
    a = this.a();
    x(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(Jf("activedescendant"))
};
g.se = function (a) {
    (a = a.target) && a != this.D && a.getParent() == this && (this.D && Eh(this.D, !1), this.D = a)
};
g.pe = function (a) {
    a.target == this.D && (this.D = null)
};
g.Ta = function (a) {
    this.va && (this.Sa = !0);
    var b = this.C();
    b && gc(b) && hc(b) ? b.focus() : a.preventDefault()
};
g.qe = function () {
    this.Sa = !1
};
g.oe = function (a) {
    var b;
    t:{
        b = a.target;
        if (this.Ca)for (var c = this.a(); b && b !== c;) {
            var d = b.id;
            if (d in this.Ca) {
                b = this.Ca[d];
                break t
            }
            b = b.parentNode
        }
        b = null
    }
    if (b)switch (a.type) {
        case "mousedown":
            b.Ta(a);
            break;
        case "mouseup":
            b.Za(a);
            break;
        case "mouseover":
            b.Oc(a);
            break;
        case "mouseout":
            b.Nc(a);
            break;
        case "contextmenu":
            b.Ib(a)
    }
};
g.jc = function () {
};
g.Cb = function () {
    this.Da(-1);
    this.Sa = !1;
    this.D && Eh(this.D, !1)
};
g.aa = function (a) {
    return this.isEnabled() && this.w() && (0 != dh(this) || this.Gc) && this.Fa(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Fa = function (a) {
    var b = Jh(this);
    if (b && "function" == typeof b.aa && b.aa(a) || this.D && this.D != b && "function" == typeof this.D.aa && this.D.aa(a))return!0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)return!1;
    switch (a.keyCode) {
        case 27:
            if (this.Ba())this.C().blur(); else return!1;
            break;
        case 36:
            Kh(this);
            break;
        case 35:
            Lh(this);
            break;
        case 38:
            if ("vertical" == this.Xa)Mh(this); else return!1;
            break;
        case 37:
            if ("horizontal" == this.Xa)fh(this) ? Nh(this) : Mh(this); else return!1;
            break;
        case 40:
            if ("vertical" == this.Xa)Nh(this); else return!1;
            break;
        case 39:
            if ("horizontal" == this.Xa)fh(this) ? Mh(this) : Nh(this); else return!1;
            break;
        default:
            return!1
    }
    return!0
};
var Hh = function (a, b) {
    var c = b.a(), c = c.id || (c.id = Xg(b));
    a.Ca || (a.Ca = {});
    a.Ca[c] = b
};
Y.prototype.ib = function (a, b) {
    Qa(a, W, "The child of a container must be a control");
    Y.c.ib.call(this, a, b)
};
Y.prototype.Qc = function (a, b, c) {
    a.Jb |= 2;
    a.Jb |= 64;
    !this.Ba() && this.Je || Fh(a, 32, !1);
    a.tb(!1);
    Y.c.Qc.call(this, a, b, c);
    a.o && this.o && Hh(this, a);
    b <= this.X && this.X++
};
Y.prototype.removeChild = function (a, b) {
    if (a = s(a) ? $g(this, a) : a) {
        var c = gh(this, a);
        -1 != c && (c == this.X ? (a.ja(!1), this.X = -1) : c < this.X && this.X--);
        var d = a.a();
        d && d.id && this.Ca && (c = this.Ca, d = d.id, d in c && delete c[d])
    }
    a = Y.c.removeChild.call(this, a, b);
    a.tb(!0);
    return a
};
var sh = function (a, b) {
    if (a.a())throw Error("Component already rendered");
    a.Xa = b
};
g = Y.prototype;
g.w = function () {
    return this.Q
};
g.ga = function (a, b) {
    if (b || this.Q != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Q = a;
        var c = this.a();
        c && (ie(c, a), this.Ba() && rh(this.C(), this.va && this.Q), b || this.dispatchEvent(this.Q ? "aftershow" : "afterhide"));
        return!0
    }
    return!1
};
g.isEnabled = function () {
    return this.va
};
g.setEnabled = function (a) {
    this.va != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.va = !0, ch(this, function (a) {
        a.Nd ? delete a.Nd : a.setEnabled(!0)
    })) : (ch(this, function (a) {
        a.isEnabled() ? a.setEnabled(!1) : a.Nd = !0
    }), this.Sa = this.va = !1), this.Ba() && rh(this.C(), a && this.Q))
};
g.Ba = function () {
    return this.Yc
};
g.Ha = function (a) {
    a != this.Yc && this.o && Ih(this, a);
    this.Yc = a;
    this.va && this.Q && rh(this.C(), a)
};
g.Da = function (a) {
    (a = eh(this, a)) ? a.ja(!0) : -1 < this.X && Jh(this).ja(!1)
};
g.ja = function (a) {
    this.Da(gh(this, a))
};
var Jh = function (a) {
    return eh(a, a.X)
}, Kh = function (a) {
    Oh(a, function (a, c) {
        return(a + 1) % c
    }, dh(a) - 1)
}, Lh = function (a) {
    Oh(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}, Nh = function (a) {
    Oh(a, function (a, c) {
        return(a + 1) % c
    }, a.X)
}, Mh = function (a) {
    Oh(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.X)
}, Oh = function (a, b, c) {
    c = 0 > c ? gh(a, a.D) : c;
    var d = dh(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = eh(a, c);
        if (f && a.Vd(f)) {
            a.Da(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
};
Y.prototype.Vd = function (a) {
    return a.w() && a.isEnabled() && V(a, 2)
};
var Ph = function () {
};
w(Ph, uh);
da(Ph);
Ph.prototype.l = function () {
    return"goog-menuheader"
};
var Qh = function (a, b, c) {
    W.call(this, a, c || Ph.r(), b);
    Fh(this, 1, !1);
    Fh(this, 2, !1);
    Fh(this, 4, !1);
    Fh(this, 32, !1);
    this.j = 1
};
w(Qh, W);
nh("goog-menuheader", function () {
    return new Qh(null)
});
var Rh = function () {
    this.Td = []
};
w(Rh, uh);
da(Rh);
var Sh = function (a, b) {
    var c = a.Td[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.l() + "-highlight";
                break;
            case 1:
                c = a.l() + "-checkbox";
                break;
            case 2:
                c = a.l() + "-content"
        }
        a.Td[b] = c
    }
    return c
};
g = Rh.prototype;
g.ma = function () {
    return"menuitem"
};
g.g = function (a) {
    var b = a.A().g("div", this.Kb(a).join(" "), Th(this, a.ta, a.A()));
    Uh(this, a, b, V(a, 8) || V(a, 16));
    xh(this, a, b);
    Vh(this, a, b);
    return b
};
g.n = function (a) {
    return a && a.firstChild
};
g.J = function (a, b) {
    x(b);
    var c;
    if (void 0 != b.firstElementChild)c = b.firstElementChild; else for (c = b.firstChild; c && 1 != c.nodeType;)c = c.nextSibling;
    var d = Sh(this, 2);
    c && Mf(c, d) || b.appendChild(Th(this, b.childNodes, a.A()));
    Mf(b, "goog-option") && (a.fc(!0), this.fc(a, b, !0));
    return Rh.c.J.call(this, a, b)
};
g.jb = function (a, b) {
    var c = this.n(a), d = Wh(this, a) ? c.firstChild : null;
    Rh.c.jb.call(this, a, b);
    d && !Wh(this, a) && c.insertBefore(d, c.firstChild || null)
};
var Th = function (a, b, c) {
    a = Sh(a, 2);
    return c.g("div", a, b)
};
Rh.prototype.fc = function (a, b, c) {
    b && (If(b, c ? "menuitemcheckbox" : this.ma()), Uh(this, a, b, c))
};
var Wh = function (a, b) {
    var c = a.n(b);
    if (c) {
        var c = c.firstChild, d = Sh(a, 1);
        return!!c && ha(c) && 1 == c.nodeType && Mf(c, d)
    }
    return!1
}, Uh = function (a, b, c, d) {
    x(c);
    d != Wh(a, c) && (Qf(c, "goog-option", d), c = a.n(c), d ? (a = Sh(a, 1), c.insertBefore(b.A().g("div", a), c.firstChild || null)) : c.removeChild(c.firstChild))
};
Rh.prototype.yb = function (a) {
    switch (a) {
        case 2:
            return Sh(this, 0);
        case 16:
        case 8:
            return"goog-option-selected";
        default:
            return Rh.c.yb.call(this, a)
    }
};
Rh.prototype.Lc = function (a) {
    var b = Sh(this, 0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return Rh.c.Lc.call(this, a)
    }
};
Rh.prototype.l = function () {
    return"goog-menuitem"
};
var Vh = function (a, b, c) {
    (V(b, 8) || V(b, 16)) && Ah(a, c, V(b, 16) ? "menuitemcheckbox" : "menuitemradio")
};
var Z = function (a, b, c, d) {
    W.call(this, a, d || Rh.r(), c);
    this.ba(b)
};
w(Z, W);
g = Z.prototype;
g.H = function () {
    var a = this.Fc;
    return null != a ? a : this.Ia()
};
g.ba = function (a) {
    this.Fc = a
};
g.fc = function (a) {
    Fh(this, 16, a);
    var b = this.a();
    b && this.Ja().fc(this, b, a)
};
g.Ia = function () {
    var a = this.ta;
    return r(a) ? (a = Ta(a, function (a) {
        return ha(a) && 1 == a.nodeType && (Mf(a, "goog-menuitem-accel") || Mf(a, "goog-menuitem-mnemonic-separator")) ? "" : jc(a)
    }).join(""), ua(a)) : Z.c.Ia.call(this)
};
g.Za = function (a) {
    var b = this.getParent();
    if (b) {
        var c = b.Jd;
        b.Jd = null;
        if (b = c && ga(a.clientX))b = new A(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
        if (b)return
    }
    Z.c.Za.call(this, a)
};
g.Fa = function (a) {
    return a.keyCode == this.Uc() && this.Va(a) ? !0 : Z.c.Fa.call(this, a)
};
g.Uc = function () {
    return this.Ch
};
nh("goog-menuitem", function () {
    return new Z(null)
});
Z.prototype.g = function () {
    Z.c.g.call(this);
    Vh(this.Ja(), this, this.a())
};
Z.prototype.dc = function () {
    return V(this, 16) ? "menuitemcheckbox" : V(this, 8) ? "menuitemradio" : Z.c.dc.call(this)
};
var Xh = function () {
};
w(Xh, uh);
da(Xh);
Xh.prototype.g = function (a) {
    return a.A().g("div", this.l())
};
Xh.prototype.J = function (a, b) {
    b.id && Yg(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.g(a);
        c.parentNode && c.parentNode.insertBefore(b, c);
        bc(c)
    } else R(b, this.l());
    return b
};
Xh.prototype.jb = function () {
};
Xh.prototype.l = function () {
    return"goog-menuseparator"
};
var Yh = function (a, b) {
    W.call(this, null, a || Xh.r(), b);
    Fh(this, 1, !1);
    Fh(this, 2, !1);
    Fh(this, 4, !1);
    Fh(this, 32, !1);
    this.j = 1
};
w(Yh, W);
Yh.prototype.L = function () {
    Yh.c.L.call(this);
    var a = this.a();
    x(a, "The DOM element for the separator cannot be null.");
    If(a, "separator")
};
nh("goog-menuseparator", function () {
    return new Yh
});
var Zh = function (a) {
    this.me = a || "menu"
};
w(Zh, qh);
da(Zh);
Zh.prototype.pa = function (a) {
    return"UL" == a.tagName || Zh.c.pa.call(this, a)
};
Zh.prototype.Rc = function (a) {
    return"HR" == a.tagName ? new Yh : Zh.c.Rc.call(this, a)
};
Zh.prototype.l = function () {
    return"goog-menu"
};
Zh.prototype.hb = function (a) {
    Zh.c.hb.call(this, a);
    a = a.a();
    x(a, "The menu DOM element cannot be null.");
    Kf(a, "haspopup", "true")
};
nh("goog-menuseparator", function () {
    return new Yh
});
var $h = function (a, b) {
    Y.call(this, "vertical", b || Zh.r(), a);
    this.Ha(!1)
};
w($h, Y);
g = $h.prototype;
g.Ic = !0;
g.Kd = !1;
g.l = function () {
    return this.Ja().l()
};
g.dd = function (a) {
    this.ib(a, !0)
};
g.Bd = function (a, b) {
    var c = this.w();
    c || ie(this.a(), !0);
    var d = this.a(), e = a, f = b, h = fg(d);
    e instanceof A && (f = e.y, e = e.x);
    cg(d, d.offsetLeft + (e - h.x), d.offsetTop + (f - h.y));
    c || ie(this.a(), !1)
};
g.ga = function (a, b, c) {
    (b = $h.c.ga.call(this, a, b)) && a && this.o && this.Ic && this.C().focus();
    this.Jd = a && c && ga(c.clientX) ? new A(c.clientX, c.clientY) : null;
    return b
};
g.Cc = function (a) {
    this.Ic && this.C().focus();
    return $h.c.Cc.call(this, a)
};
g.Vd = function (a) {
    return(this.Kd || a.isEnabled()) && a.w() && V(a, 2)
};
g.Ua = function (a) {
    var b = this.Ja(), c;
    c = this.A();
    c = Pb(c.q, "div", b.l() + "-content", a);
    for (var d = c.length, e = 0; e < d; e++)th(b, this, c[e]);
    $h.c.Ua.call(this, a)
};
g.Fa = function (a) {
    var b = $h.c.Fa.call(this, a);
    b || ch(this, function (c) {
        !b && c.Uc && c.Uc() == a.keyCode && (this.isEnabled() && this.ja(c), b = c.aa(a))
    }, this);
    return b
};
g.Da = function (a) {
    $h.c.Da.call(this, a);
    var b = eh(this, a);
    if (b) {
        a = this.a();
        var b = b.a(), c = fg(b), d = fg(a), e = vg(a), f = c.x - d.x - e.left, c = c.y - d.y - e.top, d = a.clientHeight - b.offsetHeight, e = a.scrollLeft, h = a.scrollTop, e = e + Math.min(f, Math.max(f - (a.clientWidth - b.offsetWidth), 0)), h = h + Math.min(c, Math.max(c - d, 0)), b = new A(e, h);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var ai = function (a, b, c) {
    T.call(this, a);
    this.B = c || new U;
    this.va = !0;
    a = this.m = b || new $h(this.A());
    a.ga(!1);
    a.Ic = !1;
    a.Kd = !0
};
w(ai, T);
var bi = ai.prototype, ci = Ae("goog.ui.ComboBox");
bi.N = ci;
g = ai.prototype;
g.Zb = null;
g.Cd = null;
g.B = null;
g.m = null;
g.kb = -1;
g.V = null;
g.Sc = sa;
g.gb = null;
g.Hc = "";
g.ze = "";
g.zc = null;
g.Ad = !1;
g.g = function () {
    this.V = this.A().g("input", {name: this.ze, type: "text", autocomplete: "off"});
    this.gb = this.A().g("span", "goog-combobox-button");
    this.e = this.A().g("span", "goog-combobox", this.V, this.gb);
    this.Ad && (this.gb.innerHTML = "&#x25BC;", qg(this.gb, !0));
    this.V.setAttribute("label", this.Hc);
    this.B.J(this.V);
    this.m.Ha(!1);
    this.m.o || this.ib(this.m, !0)
};
g.setEnabled = function (a) {
    this.va = a;
    this.B.setEnabled(a);
    Qf(x(this.a()), "goog-combobox-disabled", !a)
};
g.L = function () {
    ai.c.L.call(this);
    var a = Zg(this);
    a.listen(this.a(), "mousedown", this.ue);
    a.listen(mc(this.A()), "mousedown", this.ve);
    a.listen(this.V, "blur", this.we);
    this.M = new Gg(this.V);
    a.listen(this.M, "key", this.aa);
    this.Zb = new Cg(this.V);
    a.listen(this.Zb, "input", this.xe);
    a.listen(this.m, "action", this.ye)
};
g.ha = function () {
    this.M.P();
    delete this.M;
    this.Zb.P();
    this.Zb = null;
    ai.c.ha.call(this)
};
g.pa = function () {
    return!1
};
g.k = function () {
    ai.c.k.call(this);
    this.Xb();
    this.B.P();
    this.m.P();
    this.gb = this.V = this.m = this.B = null
};
g.vb = function () {
    this.Xb();
    di(this);
    this.m.Da(-1)
};
g.dd = function (a) {
    this.m.ib(a, !0);
    this.kb = -1
};
var ei = function (a) {
    var b = de("ManualChecks") ? "Check selected domains" : "Check all domains";
    a.Hc = b;
    a.B && a.B.Xd(a.Hc)
};
ai.prototype.ba = function (a) {
    Be(this.N, "setValue() - " + a);
    this.B.H() != a && (this.B.ba(a), fi(this))
};
ai.prototype.H = function () {
    return this.B.H()
};
var ii = function (a, b) {
    var c = a.m.w(), d;
    if (-1 == a.kb) {
        for (var e = d = 0, f = dh(a.m); e < f; e++)!eh(a.m, e).w() || d++;
        a.kb = d
    }
    Be(a.N, "getNumberOfVisibleItems() - " + a.kb);
    d = a.kb;
    c && 0 == d ? (Ce(a.N, "no matching items, hiding"), di(a)) : !c && 0 < d && (b && (Ce(a.N, "showing menu"), gi(a, ""), hi(a, va(a.B.H().toLowerCase()))), uf(a.Xb, 1, a), a.m.ga(!0), R(x(a.a()), "goog-combobox-active"));
    a.m && a.m.w() && (new Tg(a.a(), 5, !0)).ub(a.m.a(), 4)
}, di = function (a) {
    a.m.ga(!1);
    Of(x(a.a()), "goog-combobox-active")
};
g = ai.prototype;
g.Xb = function () {
    this.zc && (p.clearTimeout(this.zc), this.zc = null)
};
g.ue = function (a) {
    this.va && (a.target == this.a() || a.target == this.V || cc(this.gb, a.target)) && (this.m.w() ? (Ce(this.N, "Menu is visible, dismissing"), this.vb()) : (Ce(this.N, "Opening dropdown"), ii(this, !0), yb && this.V.focus(), this.V.select(), this.m.Sa = !0, a.preventDefault()));
    a.stopPropagation()
};
g.ve = function (a) {
    cc(this.m.a(), a.target) || (Be(this.N, "onDocClicked_() - dismissing immediately"), this.vb())
};
g.ye = function (a) {
    Be(this.N, "onMenuSelected_()");
    var b = a.target;
    this.dispatchEvent(new hh("action", this, b)) && (b = b.Ia(), Ce(this.N, "Menu selection: " + b + ". Dismissing menu"), this.B.H() != b && (this.B.ba(b), this.dispatchEvent("change")), this.vb());
    a.stopPropagation()
};
g.we = function () {
    Be(this.N, "onInputBlur_() - delayed dismiss");
    this.Xb();
    this.zc = uf(this.vb, 250, this)
};
g.aa = function (a) {
    var b = this.m.w();
    if (b && this.m.aa(a))return!0;
    var c = !1;
    switch (a.keyCode) {
        case 27:
            b && (Ce(this.N, "Dismiss on Esc: " + this.B.H()), this.vb(), c = !0);
            break;
        case 9:
            b && (b = Jh(this.m)) && (Ce(this.N, "Select on Tab: " + this.B.H()), b.Va(a), c = !0);
            break;
        case 38:
        case 40:
            b || (Ce(this.N, "Up/Down - maybe show menu"), ii(this, !0), c = !0)
    }
    c && a.preventDefault();
    return c
};
g.xe = function () {
    Ce(this.N, "Key is modifying: " + this.B.H());
    fi(this)
};
var fi = function (a) {
    var b = va(a.B.H().toLowerCase());
    gi(a, b);
    lc(mc(a.A())) == a.V && ii(a, !1);
    var c = Jh(a.m);
    "" != b && c && c.w() || hi(a, b);
    a.Cd = b;
    a.dispatchEvent("change")
}, gi = function (a, b) {
    Be(a.N, "setItemVisibilityFromToken_() - " + b);
    for (var c = 0, d = !a.Sc(b, a.Cd), e = 0, f = dh(a.m); e < f; e++) {
        var h = eh(a.m, e);
        if (h instanceof Z) {
            if (!h.w() && !d)continue;
            var k = h.Ia(), k = "function" == typeof h.Ld && h.Ld() || k && a.Sc(k.toLowerCase(), b);
            "function" == typeof h.lc && h.lc(b);
            h.ga(!!k)
        }
        !h.w() || c++
    }
    a.kb = c
}, hi = function (a, b) {
    Be(a.N, "setItemHighlightFromToken_() - " +
        b);
    if ("" != b)for (var c = 0, d = dh(a.m); c < d; c++) {
        var e = eh(a.m, c), f = e.Ia();
        if (f && a.Sc(f.toLowerCase(), b)) {
            a.m.Da(c);
            e.lc && e.lc(b);
            return
        }
    }
    a.m.Da(-1)
}, ji = function (a, b, c, d) {
    Z.call(this, a, b, c, d)
};
w(ji, Z);
nh("goog-combobox-item", function () {
    return new ji(null)
});
ji.prototype.rf = !1;
ji.prototype.Ld = function () {
    return this.rf
};
ji.prototype.lc = function (a) {
    if (this.isEnabled()) {
        var b = this.Ia(), c = b.toLowerCase().indexOf(a);
        if (0 <= c) {
            var d = this.A();
            this.jb([d.createTextNode(b.substr(0, c)), d.g("b", null, b.substr(c, a.length)), d.createTextNode(b.substr(c + a.length))])
        }
    }
};
var ki = function () {
};
w(ki, uh);
da(ki);
g = ki.prototype;
g.ma = function () {
    return"button"
};
g.ua = function (a, b, c) {
    switch (b) {
        case 8:
        case 16:
            x(a, "The button DOM element cannot be null.");
            Kf(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            ki.c.ua.call(this, a, b, c)
    }
};
g.g = function (a) {
    var b = ki.c.g.call(this, a);
    this.$b(b, a.wb());
    var c = a.H();
    c && this.ba(b, c);
    V(a, 16) && this.ua(b, 16, !!(a.j & 16));
    return b
};
g.J = function (a, b) {
    b = ki.c.J.call(this, a, b);
    var c = this.H(b);
    a.Dc = c;
    a.p = this.wb(b);
    V(a, 16) && this.ua(b, 16, !!(a.j & 16));
    return b
};
g.H = ca;
g.ba = ca;
g.wb = function (a) {
    return a.title
};
g.$b = function (a, b) {
    a && b && (a.title = b)
};
g.l = function () {
    return"goog-button"
};
var li = function () {
};
w(li, ki);
da(li);
g = li.prototype;
g.ma = function () {
};
g.g = function (a) {
    a.tb(!1);
    a.Gb &= -256;
    Fh(a, 32, !1);
    return a.A().g("button", {"class": this.Kb(a).join(" "), disabled: !a.isEnabled(), title: a.wb() || "", value: a.H() || ""}, a.Ia() || "")
};
g.pa = function (a) {
    return"BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
g.J = function (a, b) {
    a.tb(!1);
    a.Gb &= -256;
    Fh(a, 32, !1);
    if (b.disabled) {
        var c = Ma(this.yb(1));
        R(b, c)
    }
    return li.c.J.call(this, a, b)
};
g.hb = function (a) {
    Zg(a).listen(a.a(), "click", a.Va)
};
g.xb = ca;
g.lb = ca;
g.Ba = function (a) {
    return a.isEnabled()
};
g.Ha = ca;
g.R = function (a, b, c) {
    li.c.R.call(this, a, b, c);
    (a = a.a()) && 1 == b && (a.disabled = c)
};
g.H = function (a) {
    return a.value
};
g.ba = function (a, b) {
    a && (a.value = b)
};
g.ua = ca;
var mi = function (a, b, c) {
    W.call(this, a, b || li.r(), c)
};
w(mi, W);
g = mi.prototype;
g.H = function () {
    return this.Dc
};
g.ba = function (a) {
    this.Dc = a;
    this.Ja().ba(this.a(), a)
};
g.wb = function () {
    return this.p
};
g.$b = function (a) {
    this.p = a;
    this.Ja().$b(this.a(), a)
};
g.k = function () {
    mi.c.k.call(this);
    delete this.Dc;
    delete this.p
};
g.L = function () {
    mi.c.L.call(this);
    if (V(this, 32)) {
        var a = this.C();
        a && Zg(this).listen(a, "keyup", this.Fa)
    }
};
g.Fa = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Va(a) : 32 == a.keyCode
};
nh("goog-button", function () {
    return new mi(null)
});
var ni = function (a, b) {
    this.Ac = a;
    this.Ye = !!b;
    this.Sd = {0: this.Ac + "-arrowright", 1: this.Ac + "-arrowup", 2: this.Ac + "-arrowdown", 3: this.Ac + "-arrowleft"}
};
w(ni, Pg);
g = ni.prototype;
g.wd = !1;
g.ed = 2;
g.Ud = 20;
g.fd = 3;
g.Rd = null;
g.Zc = -5;
g.Bd = function (a, b, c, d) {
    null != a && (this.fd = a);
    null != b && (this.ed = b);
    ga(c) && (this.Ud = Math.max(c, 15));
    ga(d) && (this.Zc = d)
};
g.ub = function (a, b, c) {
    x(this.yd, "Must call setElements first.");
    a = this.ed;
    2 == a && (a = 0);
    oi(this, this.fd, a, 2 == this.ed ? pi(this.fd) ? this.wa.offsetHeight / 2 : this.wa.offsetWidth / 2 : this.Ud, c)
};
var oi = function (a, b, c, d, e, f) {
    if (a.Wa) {
        var h = qi(b, c), k, l = a.Wa, m = a.wa, n = a.Rd;
        k = ng(l);
        t:{
            k = (pi(b) ? k.height / 2 : k.width / 2) - d;
            var u = Ng(l, h);
            if (n)n = n.T(), m && (m = Mg(m), n.left += m.x, n.right += m.x, n.top += m.y, n.bottom += m.y); else if (n = hg(l), !n)break t;
            l = og(l);
            l = new Yf(l.top, l.left + l.width, l.top + l.height, l.left);
            pi(b) ? l.top < n.top && !(u & 1) ? k -= n.top - l.top : l.bottom > n.bottom && u & 1 && (k -= l.bottom - n.bottom) : l.left < n.left && !(u & 2) ? k -= n.left - l.left : l.right > n.right && u & 2 && (k -= l.right - n.right)
        }
        k = pi(b) ? new A(a.Zc, k) : new A(k, a.Zc);
        u = pi(b) ? 6 : 9;
        l = b ^ 3;
        pi(b) && "rtl" == a.Wa.dir && (l = b);
        h = Og(a.Wa, qi(l, c), a.wa, h, k, e, a.wd ? u : 0, void 0, a.Rd);
        if (!f && h & 496) {
            oi(a, b ^ 3, c, d, e, !0);
            return
        }
        !a.Ye || h & 496 || (e = parseFloat(a.wa.style.left), f = parseFloat(a.wa.style.top), x(!isNaN(e) && !isNaN(f), "Could not parse position."), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || cg(a.wa, Math.round(e), Math.round(f)))
    }
    ri(a, b, c, d)
}, ri = function (a, b, c, d) {
    var e = a.yd;
    jb(a.Sd, function (a) {
        Qf(e, a, !1)
    }, a);
    R(e, a.Sd[b]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    a.Wa ? (c =
        jg(a.Wa, a.wa), d = si(a.Wa, b), pi(b) ? (a = ti(c.y + d.y, a.wa.offsetHeight - 15), e.style.top = a + "px") : (a = ti(c.x + d.x, a.wa.offsetWidth - 15), e.style.left = a + "px")) : e.style[0 == c ? pi(b) ? "top" : "left" : pi(b) ? "bottom" : "right"] = d + "px"
}, ti = function (a, b) {
    return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
}, qi = function (a, b) {
    switch (a) {
        case 2:
            return 0 == b ? 1 : 3;
        case 1:
            return 0 == b ? 0 : 2;
        case 0:
            return 0 == b ? 6 : 7;
        default:
            return 0 == b ? 4 : 5
    }
}, si = function (a, b) {
    var c = 0, d = 0, e = ng(a);
    switch (b) {
        case 2:
            c = e.width / 2;
            break;
        case 1:
            c = e.width / 2;
            d = e.height;
            break;
        case 0:
            d =
                e.height / 2;
            break;
        case 3:
            c = e.width, d = e.height / 2
    }
    return new A(c, d)
}, pi = function (a) {
    return 0 == a || 3 == a
};
var ui = function (a) {
    this.nb = a || G()
};
w(ui, Tc);
ui.prototype.ma = function () {
    return"tooltip"
};
var wi = function (a) {
    this.nb = a || G();
    this.Ed = this.nb.g("div", vi() + "-contentId");
    this.ud = this.nb.g("div", vi() + "-arrow", this.nb.g("div", vi() + "-arrowimplbefore"), this.nb.g("div", vi() + "-arrowimplafter"));
    this.Mc = this.nb.g("div", {"class": vi(), role: "tooltip"}, this.Ed, this.ud);
    If(this.a(), this.ma());
    Kf(this.a(), "live", "polite")
};
w(wi, ui);
var vi = function () {
    return"jfk-tooltip"
};
wi.prototype.a = function () {
    return this.Mc
};
wi.prototype.n = function () {
    return this.Ed
};
wi.prototype.k = function () {
    this.Mc && bc(this.Mc)
};
var xi = {}, yi = function (a) {
    Rf.call(this);
    this.zd = a;
    this.Tc = new vf(this.af, 0, this);
    Uc(this, v(Vc, this.Tc));
    a = a.q;
    this.listen(a, ["mouseout", "mousedown", "click", "blur", Xc, "keydown"], this.Ze, !0);
    this.listen(a, ["mouseover", "focus", Wc], this.$e, !0)
};
w(yi, Rf);
yi.prototype.k = function () {
    zi(this);
    yi.c.k.call(this)
};
var Ai = function (a, b) {
    switch (b.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            a.Wd = !1;
            break;
        case "keydown":
            a.Wd = !0
    }
};
yi.prototype.$e = function (a) {
    Ai(this, a);
    var b = "focus" == a.type || a.type == Wc;
    !this.Wd && b ? this.Fb = null : (this.Ee = b, this.Fb = a.target);
    zi(this);
    this.Tc.start(this.oa ? 50 : 300)
};
yi.prototype.Ze = function (a) {
    var b = a.target, c = "mousedown" == a.type || "click" == a.type, b = this.p && cc(this.p.n(), b);
    c && b || (Ai(this, a), this.Fb = null, zi(this), this.Tc.start(this.oa ? 50 : 300))
};
var zi = function (a) {
    a.cc && (p.clearTimeout(a.cc), a.cc = 0, a.oa = null)
};
yi.prototype.af = function () {
    if (!this.Fb)Bi(this), this.oa = null; else if (!(this.oa && this.p && cc(this.p.a(), this.Fb))) {
        var a = kc(this.Fb, function (a) {
            return a.getAttribute && (a.getAttribute("data-tooltip-contained") || a.getAttribute("data-tooltip") || a.getAttribute("data-tooltip-html")) && !a.getAttribute("data-tooltip-suspended")
        }), b = !1;
        this.oa && this.oa != a && (Bi(this), this.oa = null, b = !0);
        if (!this.oa && a && (this.oa = a, !this.Ee || "mouse" != a.getAttribute("data-tooltip-trigger"))) {
            var c = "";
            if (a.getAttribute("data-tooltip-contained"))for (var d =
                Qb("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                if (d[e].parentNode == a) {
                    c = d[e].cloneNode(!0);
                    break
                }
            } else c = (c = a.getAttribute("data-tooltip")) ? wa(Da(c)) : a.getAttribute("data-tooltip-html");
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.cc = uf(v(this.Fd, this.oa, c, d, e), a, this);
                return
            }
            this.Fd(this.oa, c, d, e)
        }
    }
};
var Ci = function (a) {
    if (a)switch (a.toLowerCase().split(",")[0]) {
        case "l":
            return 0;
        case "t":
            return 2;
        case "r":
            return 3
    }
    return 1
};
yi.prototype.Fd = function (a, b, c, d) {
    this.cc = 0;
    if (!this.p) {
        this.p = new wi(this.zd);
        Bi(this);
        this.zd.q.body.appendChild(this.p.a());
        Uc(this, v(Vc, this.p));
        this.Bb = new ni(vi(), !0);
        this.Bb.wd = !0;
        var e = this.Bb, f = this.p.ud;
        e.wa = this.p.a();
        e.yd = f
    }
    t:{
        if (c)switch (c.toLowerCase().split(",")[1]) {
            case "l":
                e = 0;
                break t;
            case "r":
                e = 1;
                break t
        }
        e = 2
    }
    this.Bb.Bd(Ci(c), e, void 0, -1);
    Of(this.p.a(), "jfk-tooltip-hide");
    if (this.ec != d) {
        if (c = this.ec)c = this.ec, c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
        c && Of(this.p.a(), this.ec);
        /^[\s\xa0]*$/.test(null ==
            d ? "" : String(d)) || R(this.p.a(), d);
        this.ec = d
    }
    cg(this.p.a(), 0, 0);
    if (s(b))this.p.n().innerHTML = b; else for (ac(this.p.n()); d = b.firstChild;)this.p.n().appendChild(d);
    this.Bb.Wa = a;
    this.Bb.ub(null, 0)
};
var Bi = function (a) {
    a.p && R(a.p.a(), "jfk-tooltip-hide")
};
var Di = function (a) {
    a = a || {};
    var b = Gd, c = '<div role="button"' + (a.id ? ' id="' + Rd(a.id) + '"' : "") + ' class="', d;
    d = a || {};
    var e = "goog-inline-block jfk-button ";
    switch (d.style) {
        case 0:
            e += "jfk-button-standard";
            break;
        case 2:
            e += "jfk-button-action";
            break;
        case 3:
            e += "jfk-button-primary";
            break;
        case 1:
            e += "jfk-button-default";
            break;
        case 4:
            e += "jfk-button-flat";
            break;
        case 5:
            e += "jfk-button-mini";
            break;
        case 6:
            e += "jfk-button-contrast";
            break;
        default:
            e += "jfk-button-standard"
    }
    e += (1 == d.width ? " jfk-button-narrow" : "") + (d.checked ?
        " jfk-button-checked" : "") + (d.gf ? " " + d.gf : "") + (d.disabled ? " jfk-button-disabled" : "");
    c = c + Rd(new Ld(e, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.kf ? Rd(a.kf) : "0") + '"') + (a.title ? " " + (a.Ie ? "data-tooltip" : "title") + '="' + Rd(a.title) + '"' : "") + (a.value ? ' value="' + Rd(a.value) + '"' : "");
    a.attributes ? (d = a.attributes, null != d && d.Ga === yd ? (x(d.constructor === Kd), d = d.content.replace(/([^"'\s])$/, "$1 ")) : (d = String(d), Wd.test(d) || (La("Bad value `%s` for |filterHtmlAttributes", [d]), d = "zSoyz")), d = " " +
        d) : d = "";
    return b(c + d + ">" + M(null != a.content ? a.content : "") + "</div>")
};
Di.U = "jfk.templates.button.strict";
var Fi = function (a, b, c, d) {
    mi.call(this, a, Ei.r(), b);
    this.ac = c || 0;
    this.bc = d || 0;
    this.Bc = !1
};
w(Fi, mi);
g = Fi.prototype;
g.$b = function (a) {
    this.p = a;
    var b = this.a();
    if (b && a)if (this.Bc) {
        var c = void 0, c = a;
        b.removeAttribute("title");
        b.removeAttribute("data-tooltip-contained");
        a ? (b.setAttribute("data-tooltip", a), b.setAttribute("aria-label", c)) : (b.removeAttribute("data-tooltip"), b.removeAttribute("data-tooltip-html"), b.removeAttribute("aria-label"));
        a = G(b) || G();
        b = ka(a.q);
        xi[b] || (xi[b] = new yi(a))
    } else b.title = a
};
g.setEnabled = function (a) {
    this.isEnabled() != a && (Fi.c.setEnabled.call(this, a), Gi(this))
};
g.uc = function (a) {
    Fi.c.uc.call(this, a);
    Hi(this, !1)
};
g.Ta = function (a) {
    Fi.c.Ta.call(this, a);
    this.isEnabled() && Hi(this, !0)
};
g.Za = function (a) {
    Fi.c.Za.call(this, a);
    this.isEnabled() && Hi(this, !0)
};
var Hi = function (a, b) {
    a.a() && Qf(a.a(), "jfk-button-clear-outline", b)
}, Gi = function (a) {
    a.a() && Ii(a.Ja(), a)
}, Ei = function () {
    this.td = this.l() + "-standard";
    this.md = this.l() + "-action";
    this.sd = this.l() + "-primary";
    this.od = this.l() + "-default";
    this.pd = this.l() + "-flat";
    this.rd = this.l() + "-narrow";
    this.qd = this.l() + "-mini";
    this.nd = this.l() + "-contrast"
};
w(Ei, ki);
da(Ei);
g = Ei.prototype;
g.Ma = function (a, b, c) {
    a && c.ac != a && (c.ac = a, Gi(c));
    b && c.bc != b && (c.bc = b, Gi(c))
};
g.l = function () {
    return"jfk-button"
};
g.g = function (a) {
    Qa(a, Fi, "Button is expected to be instance of jfk.Button");
    var b = a.A(), c;
    t:{
        var d = {disabled: !a.isEnabled(), checked: !!(a.j & 16), style: a.ac, title: a.wb(), Ie: a.Bc, value: a.H(), width: a.bc};
        x(Di, "Soy template may not be null.");
        c = (b || G()).createElement("DIV");
        var d = Bd(Di(d || Dd)), e = d.match(Cd);
        x(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
        c.innerHTML = d;
        if (1 ==
            c.childNodes.length && (d = c.firstChild, 1 == d.nodeType)) {
            c = d;
            break t
        }
    }
    b.append(c, a.ta);
    this.J(a, c);
    return c
};
g.J = function (a, b) {
    Ei.c.J.call(this, a, b);
    this.Hd || (this.Hd = qb(this.td, v(this.Ma, 0, null), this.md, v(this.Ma, 2, null), this.sd, v(this.Ma, 3, null), this.od, v(this.Ma, 1, null), this.pd, v(this.Ma, 4, null), this.qd, v(this.Ma, 5, null), this.nd, v(this.Ma, 6, null), this.rd, v(this.Ma, null, 1)));
    for (var c = Lf(b), d = 0; d < c.length; ++d) {
        var e = this.Hd[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip"))a.p = c, a.Bc = !0;
    return b
};
g.H = function (a) {
    return a.getAttribute("value") || ""
};
g.ba = function (a, b) {
    a && a.setAttribute("value", b)
};
g.R = function (a, b, c) {
    Ei.c.R.call(this, a, b, c);
    if (32 == b)try {
        var d = a.a();
        c ? d.focus() : d.blur()
    } catch (e) {
    }
};
var Ii = function (a, b) {
    function c(a, b) {
        (a ? d : e).push(b)
    }

    x(b.a(), "Button element must already exist when updating style.");
    var d = [], e = [], f = b.ac;
    c(0 == f, a.td);
    c(2 == f, a.md);
    c(3 == f, a.sd);
    c(4 == f, a.pd);
    c(5 == f, a.qd);
    c(1 == f, a.od);
    c(6 == f, a.nd);
    c(1 == b.bc, a.rd);
    c(!b.isEnabled(), a.l() + "-disabled");
    Pf(b.a(), e);
    Nf(b.a(), d)
};
nh("jfk-button", function () {
    return new Fi(null)
});
var Ji = {}, Ki = new tf(1E3), Li = "Google Analytics;Google Trusted Stores;AdWords Conversion Tracking/Remarketing;Floodlight;DFA/DFP;Google Publisher Tag".split(";"), Mi = 0, Ni = {}, Oi = null, Pi = null, Qi = /\$\{[-_ a-zA-Z0-9]*\}/g, Ri = function (a) {
    z(a, function (a) {
        "hidden_if_ok" == a.valueFormat ? a.valueFormat = "working" == Re(a.relatedIssues) ? "hidden" : "" : "fine_if_ok" == a.valueFormat && (a.valueFormat = "working" == Re(a.relatedIssues) ? "fine" : "");
        a.relatedIssues && Ri(a.relatedIssues)
    })
}, Si = function (a) {
    z(a, function (a) {
        var c = a.relatedIssues.length +
            "";
        a.label = a.label.replace("{$GROUP_CHILD_COUNT}_", c);
        a.text = a.text.replace("{$GROUP_CHILD_COUNT}_", c);
        a.text = a.text.replace(Qi, "");
        a.relatedIssues && Si(a.relatedIssues)
    })
}, Ti = function (a, b, c, d) {
    if ("collection" == b) {
        var e = [];
        z(d, function (a) {
            "entry" == a.valueFormat && e.push({key: a.text, value: a.label})
        });
        return e
    }
    if ("link_expandable_with_path" == b)return c.split("/").pop();
    if ("group_status" == b || "value_status" == b)return Re(d);
    if ("update_button" == b) {
        if ("" != c && !/[^0-9]/.test(c))try {
            return"Last checked " + Ge(parseInt(c,
                10))
        } catch (f) {
        }
    } else if (s(c)) {
        if ("map" == b)return a = Ee(c, [";"]), e = Ta(a || [], function (a) {
            a = a.split("=");
            return{key: a.shift(), value: decodeURIComponent(a.join("="))}
        });
        if ("json" == b)return a = Ee(c, [","]), e = Ta(a, function (a) {
            a = a.split(":");
            return{key: a.shift(), value: a.join(":")}
        });
        if ("link" == b)return Je(a, c)
    }
    return c
}, Ui = function (a, b) {
    z(b, function (b) {
        b.value = Ti(a, b.valueFormat, b.label, b.relatedIssues);
        b.relatedIssues && Ui(a, b.relatedIssues)
    })
}, Vi = function (a, b, c) {
    for (var d = [], e = 0; e < b.length; e++) {
        var f = b[e].category +
            b[e].text + b[e].label, f = c ? c + "-" + f : f, h = Ni[f];
        if (!q(h) || q(d[f]))h = Mi++, Ni[f] = h;
        d[f] = h;
        b[e].id = "issue-" + h;
        b[e].relatedIssues && Vi(a, b[e].relatedIssues, b[e].id)
    }
}, Wi = function (a) {
    a = Pe(a, "Tag");
    z(a, function (a) {
        a.value = "unchecked" == a.valueFormat ? "unchecked" : Re(a.relatedIssues)
    })
}, Zi = function (a) {
    var b = Pb(document, "A", null, a);
    z(b, function (a) {
        a.addEventListener("click", v(function (a, b) {
            b.preventDefault();
            _gaq.push(["_trackEvent", "help-link-ext", "clicked"]);
            chrome.tabs.create({url: a})
        }, a.href))
    });
    b = Xi("INPUT",
        "ui-value-template", a);
    z(b, function (a) {
        var b = 0;
        a.addEventListener("input", function (a) {
            clearTimeout(b);
            b = setTimeout(function () {
                Yi("Set", a.srcElement.name.substring(a.srcElement.name.indexOf("-") + 1), a.srcElement.value)
            }, 1E3)
        })
    });
    b = Xi("SELECT", "ui-dropdown-template", a);
    z(b, function (a) {
        a.addEventListener("change", function (a) {
            Yi("Set", a.srcElement.name.substring(a.srcElement.name.indexOf("-") + 1), a.srcElement.value)
        })
    });
    b = Xi("INPUT", "ui-checkbox-template", a);
    z(b, function (a) {
        a.addEventListener("click", function (a) {
            Yi("Set",
                a.srcElement.name.substring(a.srcElement.name.indexOf("-") + 1), a.srcElement.checked ? a.srcElement.value : "")
        })
    });
    a = Xi("INPUT", "ui-action-template", a);
    z(a, function (a) {
        a.addEventListener("click", function (a) {
            Yi("Action", a.srcElement.id.substring(a.srcElement.id.indexOf("-") + 1));
            a.srcElement.disabled = "true"
        })
    });
    a = Qb("text-ids");
    z(a, function (a) {
        K(a, "click", function (a) {
            var b = Yb("INPUT", {type: "text", value: a.target.textContent, readOnly: !0, style: ta("width:%sem;", parseInt(0.8 * a.target.innerText.length, 10))});
            a.target.parentElement.appendChild(b);
            a.target.hidden = !0;
            b.onblur || b.addEventListener("blur", function (a) {
                a.target.hidden = !0;
                a.target.previousSibling.hidden = !1
            }, !1)
        })
    })
}, bj = function () {
    $i("community-link", function () {
        _gaq.push(["_trackEvent", "community-link-ext", "clicked"]);
        chrome.tabs.create({url: "https://plus.google.com/u/1/communities/105448214237192581344"})
    });
    $i("footer-settings", aj);
    var a = H("logo");
    a && K(a, "click", function () {
        Yi("ManualAction")
    });
    $i("help-button", function () {
        _gaq.push(["_trackEvent",
            "help-link-ext", "clicked"]);
        chrome.tabs.create({url: "https://support.google.com/tagassistant"});
        p.close()
    })
}, cj = function () {
    $i("check-this-page", function () {
        Yi("ManualAction")
    });
    $i("always-check", function () {
        Yi("WhiteListDomain")
    })
}, $ = function (a, b) {
    var c = H(a);
    c && ie(c, b)
}, aj = function () {
    var a = chrome.extension.getURL("options.html");
    de("ShowWelcomeScreen") && (dj(), ej());
    chrome.tabs.query({url: a}, function (b) {
        b.length ? (chrome.tabs.update(b[0].id, {active: !0}), p.close()) : chrome.tabs.create({url: a})
    })
}, Xi = function (a, b, c) {
    a = Pb(document, a, b, c);
    z(a, function (a) {
        a.addEventListener("focus", function () {
            Ki.stop()
        })
    });
    z(a, function (a) {
        a.addEventListener("blur", function () {
            Ki.start()
        })
    });
    return a
}, fj = function () {
    var a = Qb("zippy");
    z(a, function (a) {
        var c = Mf(a, "expanded");
        if (Ji[a.id]) {
            c = Ji[a.id] && Ji[a.id].Ka;
            null != Ji[a.id].na && (c = !c);
            try {
                Ji[a.id].P()
            } catch (d) {
            }
        }
        a.nextSibling && (Ji[a.id] = new Bg(a, a.nextSibling, !!c))
    })
}, $i = function (a, b) {
    var c = H(a);
    if (c && !Mf(c, "decorated")) {
        R(c, "decorated");
        var d = oh(c);
        d && d.J(c);
        d && d.listen && d.listen("action",
            b)
    }
}, gj = function () {
    for (var a = Qb("tag-image-text"), b = 0, c; c = a[b]; b++)K(c, "click", function (a) {
        var b = Rb("tag-checkbox-tick", a.currentTarget), c = !Mf(b, "tag-checkbox-untick");
        Qf(b, "tag-checkbox-untick", c);
        a = Rb("tag-checkbox-background", a.currentTarget);
        a.checked = !a.checked;
        dj(!0)
    })
}, hj = function () {
    $i("welcome-screen-done-button", function () {
        dj();
        ej();
        Yd()
    })
}, dj = function (a) {
    var b = {};
    b.ShowWelcomeScreen = !!a;
    var c = Qb("tag-checkbox-background"), d = [];
    a = 0;
    for (var e; e = c[a]; a++) {
        var f = e.checked ? "Default" : "Off";
        z(e.parentElement.textContent.split("/"),
            function (a) {
                d.push(a);
                b[a] = f
            })
    }
    b.DefaultLevel = "Info";
    c = ee() || [];
    a = 0;
    for (var h; h = c[a]; a++)e = Wa(d, function (a) {
        return 0 == h.name.indexOf(a)
    }), b[h.name] = e ? b[e] : "Default";
    fe(b)
}, ej = function () {
    fe(qb("ManualChecks", "Check all domains" != H("domain-checkbox-background").value))
}, ij = function () {
    var a = new ai;
    a.Ad = !0;
    ei(a);
    a.dd(new ji("Check all domains"));
    a.dd(new ji("Check selected domains"));
    bh(a, H("tag-combobox"));
    a.listen("change", function () {
        H("domain-checkbox-background").value = a.V.value;
        ej()
    });
    a.ba(de("ManualChecks") ?
        "Check selected domains" : "Check all domains")
}, jj = function () {
    if (de("ShowWelcomeScreen")) {
        var a = H("popup-wrapper");
        H("welcome-screen-done-button") || (Nd(a, N.ee, {Tb: Li, df: de("ManualChecks") ? "Check selected domains" : "Check all domains"}), gj(), ij(), hj(), bj());
        $("help-button", !0)
    } else if (!H("page-title")) {
        Nd(H("popup-wrapper"), N.de, {ticketLink: void 0});
        _gaq.push(["_setAccount", "UA-33463431-1"]);
        _gaq.push(["_trackPageview"]);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "https://ssl.google-analytics.com/ga.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
        cj();
        bj()
    }
}, Yd = function () {
    jj();
    Oi = chrome.extension.connect({name: "popup"});
    Oi.onMessage.addListener(function (a) {
        if (!Pi || Pi.tabId != a.tabId || Pi.lastUpdated != a.lastUpdated) {
            Pi = a;
            jj();
            if ("" != a.url)if (a.requiresReload)$("page-info-wrapper", !1), $("manual-check-introduction", !1), $("manual-check-wrapper", !1), $("manual-check-header", !0), $("manual-check-reload", !0), $("logo", !1), $("help-button", !0); else {
                var b = a.url;
                if (0 <= b.indexOf("https://chrome.google.com") ||
                    0 == b.indexOf("chrome"))$("page-info-wrapper", !1), $("manual-check-reload", !1), $("manual-check-wrapper", !1), $("manual-check-header", !0), $("manual-check-introduction", !0), $("logo", !1), $("help-button", !0); else if (a.isExcluded && !a.isManualCheck)$("page-info-wrapper", !1), $("manual-check-introduction", !1), $("manual-check-reload", !1), $("manual-check-header", !0), $("manual-check-wrapper", !0), $("logo", !1), $("help-button", !0); else {
                    $("manual-check-introduction", !1);
                    $("manual-check-header", !1);
                    $("manual-check-reload",
                        !1);
                    $("manual-check-wrapper", !1);
                    $("page-info-wrapper", !0);
                    $("help-button", !1);
                    $("logo", !0);
                    b = a.issues;
                    Si(b);
                    Ri(b);
                    Ui(a.url, b);
                    Vi({}, b);
                    Wi(b);
                    var c = a.title || a.url, d = H("page-title");
                    d && (dc(d, Ea(c, 80)), d.title = a.url, eb(b), c = H("details"), Nd(c, N.Pd, {settings: O.r().Ra, La: b, Ne: Pe(b, "Error"), Oe: Pe(b, "Info"), Pe: Pe(b, "Suggestion"), Qe: Pe(b, "Warning")}), fj(), Zi(c), c = Se(b, "Error"), b = Pe(b, "Tag"), H("tags-total").innerText = b.length + "", H("errors-total").innerText = c + "")
                }
            }
            wd(a.issues)
        }
    });
    Yi("Status");
    K(Ki, "tick", function () {
        Yi("Status")
    });
    ke(!0, function () {
        Yi("ManualAction")
    });
    Ki.start()
}, Yi = function (a, b, c) {
    Oi && chrome.tabs.query({active: !0, currentWindow: !0}, function (d) {
        var e = {};
        e.msg = a;
        e.tabId = d[0].id;
        e.name = b;
        e.value = c;
        Oi.postMessage(e)
    })
};
chrome.extension && window.addEventListener("load", function () {
    be()
}, !1);
