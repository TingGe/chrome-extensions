var h, aa = this, ba = function () {
}, ca = function (a) {
    a.o = function () {
        return a.Tc ? a.Tc : a.Tc = new a
    }
}, da = function (a) {
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
}, m = function (a) {
    return void 0 !== a
}, p = function (a) {
    return"array" == da(a)
}, ea = function (a) {
    var b = da(a);
    return"array" == b || "object" == b && "number" == typeof a.length
}, q = function (a) {
    return"string" == typeof a
}, fa = function (a) {
    return"number" == typeof a
}, ga = function (a) {
    return"function" == da(a)
}, ha = function (a) {
    var b = typeof a;
    return"object" == b && null != a || "function" == b
}, ka = function (a) {
    return a[ia] || (a[ia] = ++ja)
}, ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0, ma = function (a, b, c) {
    return a.call.apply(a.bind, arguments)
}, na = function (a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}, oa = function (a, b, c) {
    oa = Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
    return oa.apply(null, arguments)
}, r = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, pa = Date.now || function () {
    return+new Date
}, s = function (a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.d = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Cd = function (a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return oa.apply(null, c)
    }
    return oa(this, a)
};
var qa = function (a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, qa); else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
s(qa, Error);
qa.prototype.name = "CustomError";
var ra;
var t = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
    return d + c.join("%s")
}, ta = function (a) {
    return/^[\s\xa0]*$/.test(a)
}, ua = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, va = function (a) {
    return a.replace(/(\r\n|\r|\n)/g, "<br>")
}, Ca = function (a) {
    if (!wa.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(za, "&gt;"));
    -1 !=
    a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ba, "&#39;"));
    return a
}, xa = /&/g, ya = /</g, za = />/g, Aa = /"/g, Ba = /'/g, wa = /[&<>"']/, Da = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a
}, Ea = function (a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}, Fa = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}, Ga = function () {
    return"transform".replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase()
    })
}, Ha = function () {
    var a = q(void 0) ? Ea(void 0) : "\\s";
    return"transform".replace(RegExp("(^" + (a ? "|[" + a + "]+" : "") + ")([a-z])", "g"), function (a, c, d) {
        return c + d.toUpperCase()
    })
};
var Ia = function (a, b) {
    b.unshift(a);
    qa.call(this, t.apply(null, b));
    b.shift()
};
s(Ia, qa);
Ia.prototype.name = "AssertionError";
var Ja = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
    throw new Ia("" + e, f || []);
}, u = function (a, b, c) {
    a || Ja("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
}, Ka = function (a, b) {
    throw new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, La = function (a, b, c) {
    q(a) || Ja("Expected string but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}, Ma = function (a, b, c) {
    ha(a) || Ja("Expected object but got %s: %s.", [da(a),
        a], b, Array.prototype.slice.call(arguments, 2))
}, Na = function (a, b, c) {
    "boolean" == typeof a || Ja("Expected boolean but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2))
}, Oa = function (a, b, c, d) {
    a instanceof b || Ja("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3));
    return a
};
var Pa = Array.prototype, Qa = Pa.indexOf ? function (a, b, c) {
    u(null != a.length);
    return Pa.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (q(a))return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
}, v = Pa.forEach ? function (a, b, c) {
    u(null != a.length);
    Pa.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, w = Pa.filter ? function (a, b, c) {
    u(null != a.length);
    return Pa.filter.call(a,
        b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)if (k in g) {
        var l = g[k];
        b.call(c, l, k, a) && (e[f++] = l)
    }
    return e
}, Ra = Pa.map ? function (a, b, c) {
    u(null != a.length);
    return Pa.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Sa = Pa.some ? function (a, b, c) {
    u(null != a.length);
    return Pa.some.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f],
        f, a))return!0;
    return!1
}, Ta = Pa.every ? function (a, b, c) {
    u(null != a.length);
    return Pa.every.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return!1;
    return!0
}, Ua = function (a, b) {
    var c = 0;
    v(a, function (a, e, f) {
        b.call(void 0, a, e, f) && ++c
    }, void 0);
    return c
}, Wa = function (a, b) {
    var c = Va(a, b);
    return 0 > c ? null : q(a) ? a.charAt(c) : a[c]
}, Va = function (a, b) {
    for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return e;
    return-1
}, y =
    function (a, b) {
        return 0 <= Qa(a, b)
    }, Xa = function (a, b) {
    y(a, b) || a.push(b)
}, Za = function (a, b) {
    var c = Qa(a, b), d;
    (d = 0 <= c) && Ya(a, c);
    return d
}, Ya = function (a, b) {
    u(null != a.length);
    Pa.splice.call(a, b, 1)
}, $a = function (a, b) {
    var c = Va(a, b);
    return 0 <= c ? (Ya(a, c), !0) : !1
}, bb = function (a) {
    return Pa.concat.apply(Pa, arguments)
}, cb = function (a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return[]
}, db = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (p(d) || (e = ea(d)) && Object.prototype.hasOwnProperty.call(d,
            "callee"))a.push.apply(a, d); else if (e)for (var f = a.length, g = d.length, k = 0; k < g; k++)a[f + k] = d[k]; else a.push(d)
    }
}, fb = function (a, b, c, d) {
    u(null != a.length);
    Pa.splice.apply(a, eb(arguments, 1))
}, eb = function (a, b, c) {
    u(null != a.length);
    return 2 >= arguments.length ? Pa.slice.call(a, b) : Pa.slice.call(a, b, c)
}, gb = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}, hb = function (a, b, c) {
    var d;
    c = c || gb;
    for (var e = 0, f = a.length; e < f;) {
        var g = e + f >> 1, k;
        k = c(b, a[g]);
        0 < k ? e = g + 1 : (f = g, d = !k)
    }
    d = d ? e : ~e;
    0 > d && fb(a, -(d + 1), 0, b)
};
var ib = function (a) {
    return function () {
        return a
    }
}, jb = ib(!1), A = ib(!0);
var C = function (a, b) {
    this.x = m(a) ? a : 0;
    this.y = m(b) ? b : 0
};
C.prototype.n = function () {
    return new C(this.x, this.y)
};
C.prototype.toString = function () {
    return"(" + this.x + ", " + this.y + ")"
};
var kb = function (a, b) {
    return new C(a.x - b.x, a.y - b.y)
};
C.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var lb = function (a, b) {
    this.width = a;
    this.height = b
};
lb.prototype.n = function () {
    return new lb(this.width, this.height)
};
lb.prototype.toString = function () {
    return"(" + this.width + " x " + this.height + ")"
};
lb.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var mb = function (a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
}, nb = function (a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
}, ob = function (a, b) {
    for (var c in a)if (a[c] == b)return!0;
    return!1
}, pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), qb = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < pb.length; f++)c = pb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, rb = function (a) {
    var b = arguments.length;
    if (1 == b && p(arguments[0]))return rb.apply(null, arguments[0]);
    if (b % 2)throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
    return c
}, sb = function (a) {
    var b = arguments.length;
    if (1 == b && p(arguments[0]))return sb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0;
    return c
};
var tb;
t:{
    var ub = aa.navigator;
    if (ub) {
        var vb = ub.userAgent;
        if (vb) {
            tb = vb;
            break t
        }
    }
    tb = ""
}
var wb = function (a) {
    return-1 != tb.indexOf(a)
};
var xb, zb = function () {
    return aa.navigator || null
}, Cb = wb("Opera") || wb("OPR"), D = wb("Trident") || wb("MSIE"), Db = wb("Gecko") && -1 == tb.toLowerCase().indexOf("webkit") && !(wb("Trident") || wb("MSIE")), E = -1 != tb.toLowerCase().indexOf("webkit"), Eb = zb();
xb = -1 != (Eb && Eb.platform || "").indexOf("Mac");
var Fb = !!zb() && -1 != (zb().appVersion || "").indexOf("X11"), Gb = function () {
    var a = aa.document;
    return a ? a.documentMode : void 0
}, Hb = function () {
    var a = "", b;
    if (Cb && aa.opera)return a = aa.opera.version, ga(a) ? a() : a;
    Db ? b = /rv\:([^\);]+)(\)|;)/ : D ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : E && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(tb)) ? a[1] : "");
    return D && (b = Gb(), b > parseFloat(a)) ? String(b) : a
}(), Ib = {}, F = function (a) {
    var b;
    if (!(b = Ib[a])) {
        b = 0;
        for (var c = ua(String(Hb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length),
                 f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
            do {
                var n = l.exec(g) || ["", "", ""], z = x.exec(k) || ["", "", ""];
                if (0 == n[0].length && 0 == z[0].length)break;
                b = Fa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == z[1].length ? 0 : parseInt(z[1], 10)) || Fa(0 == n[2].length, 0 == z[2].length) || Fa(n[2], z[2])
            } while (0 == b)
        }
        b = Ib[a] = 0 <= b
    }
    return b
}, Jb = aa.document, Kb = Jb && D ? Gb() || ("CSS1Compat" == Jb.compatMode ? parseInt(Hb, 10) : 5) : void 0;
var Lb = !D || D && 9 <= Kb;
!Db && !D || D && D && 9 <= Kb || Db && F("1.9.1");
var Mb = D && !F("9");
var Nb = function (a) {
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}, Ob = function (a, b) {
    for (var c = Nb(a), d = eb(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)y(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
}, Qb = function (a, b) {
    var c = Nb(a), d = eb(arguments, 1), e = Pb(c, d);
    a.className = e.join(" ");
    return e.length == c.length - d.length
}, Pb = function (a, b) {
    return w(a, function (a) {
        return!y(b, a)
    })
};
var Tb = function (a) {
    return a ? new Rb(Sb(a)) : ra || (ra = new Rb)
}, G = function (a) {
    return q(a) ? document.getElementById(a) : a
}, Vb = function (a) {
    var b = a || document;
    return b.querySelectorAll && b.querySelector ? b.querySelectorAll(".jfk-tooltip-data") : Ub("*", "jfk-tooltip-data", a)
}, Ub = function (a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {},
                     e = 0, f = 0, g; g = c[f]; f++)a == g.nodeName && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; g = c[f]; f++)a = g.className, "function" == typeof a.split && y(a.split(/\s+/), b) && (d[e++] = g);
        d.length = e;
        return d
    }
    return c
}, Xb = function (a, b) {
    mb(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Wb ? a.setAttribute(Wb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, Wb = {cellpadding: "cellPadding",
    cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"}, Yb = function (a) {
    return E || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}, Zb = function (a) {
    return a.parentWindow || a.defaultView
}, ac = function (a, b, c, d) {
    function e(c) {
        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }

    for (; d < c.length; d++) {
        var f = c[d];
        !ea(f) || ha(f) && 0 < f.nodeType ? e(f) : v($b(f) ? cb(f) :
            f, e)
    }
}, bc = function (a) {
    for (var b; b = a.firstChild;)a.removeChild(b)
}, cc = function (a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}, dc = function (a, b) {
    if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)b = b.parentNode;
    return b == a
}, Sb = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, ec = function (a, b) {
    u(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent"in
        a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else bc(a), a.appendChild(Sb(a).createTextNode(String(b)))
}, fc = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, gc = {IMG: " ", BR: "\n"}, hc = function (a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}, ic = function (a) {
    a = a.tabIndex;
    return fa(a) && 0 <= a && 32768 > a
}, kc = function (a) {
    var b = [];
    jc(a, b, !1);
    return b.join("")
}, jc = function (a, b, c) {
    if (!(a.nodeName in fc))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in gc)b.push(gc[a.nodeName]); else for (a = a.firstChild; a;)jc(a, b, c), a = a.nextSibling
}, $b = function (a) {
    if (a && "number" == typeof a.length) {
        if (ha(a))return"function" == typeof a.item || "string" == typeof a.item;
        if (ga(a))return"function" == typeof a.item
    }
    return!1
}, lc = function (a, b, c) {
    c || (a = a.parentNode);
    for (c = 0; a;) {
        if (b(a))return a;
        a = a.parentNode;
        c++
    }
    return null
}, Rb = function (a) {
    this.m =
        a || aa.document || document
};
h = Rb.prototype;
h.nb = Tb;
h.c = function (a) {
    return q(a) ? this.m.getElementById(a) : a
};
h.v = function (a, b, c) {
    var d = this.m, e = arguments, f = e[0], g = e[1];
    if (!Lb && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', Ca(g.name), '"');
        if (g.type) {
            f.push(' type="', Ca(g.type), '"');
            var k = {};
            qb(k, g);
            delete k.type;
            g = k
        }
        f.push(">");
        f = f.join("")
    }
    f = d.createElement(f);
    g && (q(g) ? f.className = g : p(g) ? Ob.apply(null, [f].concat(g)) : Xb(f, g));
    2 < e.length && ac(d, f, e, 2);
    return f
};
h.createElement = function (a) {
    return this.m.createElement(a)
};
h.createTextNode = function (a) {
    return this.m.createTextNode(String(a))
};
var mc = function (a) {
    return"CSS1Compat" == a.m.compatMode
}, nc = function (a) {
    var b = a.m;
    a = Yb(b);
    b = Zb(b);
    return D && F("10") && b.pageYOffset != a.scrollTop ? new C(a.scrollLeft, a.scrollTop) : new C(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
};
Rb.prototype.appendChild = function (a, b) {
    a.appendChild(b)
};
Rb.prototype.append = function (a, b) {
    ac(Sb(a), a, arguments, 1)
};
Rb.prototype.contains = dc;
Rb.prototype.ac = function (a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!hc(a) || ic(a)) : hc(a) && ic(a)) && D ? (a = ga(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height: a.offsetHeight, width: a.offsetWidth}, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
D && F(8);
sb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
sb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
sb("link", "script", "style");
Ca("".Jf ? "".Hf() : "");
var oc = {Nf: !0}, pc = {Pf: !0}, qc = {Lf: !0}, rc = {Of: !0}, sc = function () {
    throw Error("Do not instantiate directly");
};
sc.prototype.Ga = null;
sc.prototype.toString = function () {
    return this.content
};
var tc = function (a) {
    if (!ha(a))return String(a);
    if (a instanceof sc) {
        if (a.Y === oc)return La(a.content);
        if (a.Y === rc)return Ca(a.content)
    }
    Ka("Soy template output is unsafe for use as HTML: " + a);
    return"zSoyz"
}, uc = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i, vc = {};
var wc = function (a) {
    if (null != a)switch (a.Ga) {
        case 1:
            return 1;
        case -1:
            return-1;
        case 0:
            return 0
    }
    return null
}, xc = function () {
    sc.call(this)
};
s(xc, sc);
xc.prototype.Y = oc;
var Bc = function (a) {
    return null != a && a.Y === oc ? (u(a.constructor === xc), a) : yc(String(String(a)).replace(zc, Ac), wc(a))
}, Cc = function () {
    sc.call(this)
};
s(Cc, sc);
Cc.prototype.Y = {Mf: !0};
var Dc = function () {
    sc.call(this)
};
s(Dc, sc);
Dc.prototype.Y = pc;
Dc.prototype.Ga = 1;
var Ec = function () {
    sc.call(this)
};
s(Ec, sc);
Ec.prototype.Y = qc;
Ec.prototype.Ga = 1;
var Fc = function (a, b) {
    this.content = String(a);
    this.Ga = null != b ? b : null
};
s(Fc, sc);
Fc.prototype.Y = rc;
var Gc = function (a) {
    function b() {
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Ga = d);
        return e
    }
}, yc = Gc(xc);
Gc(Cc);
var Hc = function (a, b, c) {
    u(b, "Soy template may not be null.");
    a.innerHTML = tc(b(c || vc, void 0, void 0))
};
(function (a) {
    function b() {
    }

    b.prototype = a.prototype;
    return function (a, d) {
        if (!String(a))return"";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Ga = d);
        return e
    }
})(xc);
var Lc = function (a) {
        return null != a && a.Y === oc ? (u(a.constructor === xc), a = String(a.content).replace(Ic, "").replace(Jc, "&lt;"), String(a).replace(Kc, Ac)) : String(a).replace(zc, Ac)
    }, Pc = function (a) {
        if (null != a && a.Y === pc)return u(a.constructor === Dc), String(a).replace(Mc, Nc);
        a = String(a);
        Oc.test(a) ? a = a.replace(Mc, Nc) : (Ka("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz");
        return a
    }, Qc = {"\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;",
        "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;"}, Ac = function (a) {
        return Qc[a]
    }, Rc = {"\x00": "%00", "\u0001": "%01", "\u0002": "%02", "\u0003": "%03", "\u0004": "%04", "\u0005": "%05", "\u0006": "%06", "\u0007": "%07", "\b": "%08", "\t": "%09", "\n": "%0A", "\x0B": "%0B", "\f": "%0C", "\r": "%0D", "\u000e": "%0E", "\u000f": "%0F", "\u0010": "%10", "\u0011": "%11", "\u0012": "%12", "\u0013": "%13", "\u0014": "%14", "\u0015": "%15", "\u0016": "%16",
        "\u0017": "%17", "\u0018": "%18", "\u0019": "%19", "\u001a": "%1A", "\u001b": "%1B", "\u001c": "%1C", "\u001d": "%1D", "\u001e": "%1E", "\u001f": "%1F", " ": "%20", '"': "%22", "'": "%27", "(": "%28", ")": "%29", "<": "%3C", ">": "%3E", "\\": "%5C", "{": "%7B", "}": "%7D", "\u007f": "%7F", "\u0085": "%C2%85", "\u00a0": "%C2%A0", "\u2028": "%E2%80%A8", "\u2029": "%E2%80%A9", "\uff01": "%EF%BC%81", "\uff03": "%EF%BC%83", "\uff04": "%EF%BC%84", "\uff06": "%EF%BC%86", "\uff07": "%EF%BC%87", "\uff08": "%EF%BC%88", "\uff09": "%EF%BC%89", "\uff0a": "%EF%BC%8A", "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C", "\uff0f": "%EF%BC%8F", "\uff1a": "%EF%BC%9A", "\uff1b": "%EF%BC%9B", "\uff1d": "%EF%BC%9D", "\uff1f": "%EF%BC%9F", "\uff20": "%EF%BC%A0", "\uff3b": "%EF%BC%BB", "\uff3d": "%EF%BC%BD"}, Nc = function (a) {
        return Rc[a]
    }, zc = /[\x00\x22\x26\x27\x3c\x3e]/g, Kc = /[\x00\x22\x27\x3c\x3e]/g, Mc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, Oc = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, Sc = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,
    Ic = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Jc = /</g;
var Tc = function (a) {
    var b = '<dl><dt class="options-description-title">Default level:</dt><dd><select id="DefaultLevel"><option value="Info">Basic Information</option><option value="Fine">Detailed Information</option>' + (a.isInternal ? '<option value="Debug">Debug Information</option>' : "") + '<option value="Off">Off</option></select></dd></dl><div class="options-help"><dl><dt class="options-description-title">Basic Information</dt><dd>This covers ID\'s and other important information as well as errors, warnings and suggestions.</dd><dt class="options-description-title">Detailed Information</dt><dd>Some tags provide additional information that may be useful for debugging.</dd></dl></div><dl>';
    if (a.K) {
        a = a.K;
        for (var c = a.length, d = 0; d < c; d++)var e = a[d], b = b + ('<dt class="options-description-title options-category"><a target="_blank" href="' + Lc(Pc(e.url)) + '">' + Bc(e.name) + '</a>:</dt><dd><select id="' + Lc(e.name) + '"><option value="Default">Default</option><option value="Info">Basic Information</option><option value="Fine">Detailed Information</option><option value="Off">Off</option></select></dd>')
    } else b += "No Categories";
    return b + "</dl>"
};
Tc.Ha = "tvt.templates.options.categories";
var Uc = function (a) {
    var b = '<div class="options-description-title">Google Analytics Accounts</div><div id="check-analytics-urls-button" class="goog-inline-block jfk-button jfk-button-standard">Add website URLs to the checked domains</div><div>User ' + Bc(a.response.username) + " with total results: " + Bc(a.response.totalResults) + "</div>";
    a = a.vd;
    for (var c = a.length, d = 0; d < c; d++)var e = a[d], b = b + ('<div><a class="options-account-id" href="' + Lc(Pc(e.analyticsUrl)) + '">' + Bc(e.webPropertyId) + "<a><span>" + (e.websiteUrl ?
        ': <a href="' + Lc(Pc(e.websiteUrl)) + '">' + Bc(e.websiteUrl) + "</a>" : "") + "</span></div>");
    return b
};
Uc.Ha = "tvt.templates.options.accounts";
var Vc = function () {
    return'<input type="checkbox" name="validate-all-checkbox" id="validate-all-checkbox" checked><span class="options-category">Validate all pages</span><br/><div style="display:none;" id="validate-all-textarea-div"></div>'
};
Vc.Ha = "tvt.templates.options.validateAllPages";
var Wc = function () {
    return'<br/><span class="options-category">Enter domains to check (e.g. example.com):</span><br><textarea placeholder="Enter domains to check" rows="4" cols="50" id="validate-all-textarea"></textarea>'
};
Wc.Ha = "tvt.templates.options.autocheckAllPagesTextArea";
var Xc = function (a) {
    for (var b = "<table class='options-table'><tr class='options-table-header'><th>#</th><th class='options-table-text'>Text</th><th>Type</th><th style=\"min-width: 120px\">Category</th><th>Link</th></tr>", c = a.Uc.keys, d = c.length, e = 0; e < d; e++) {
        for (var f = c[e], g = "" + Bc(e), k = a.Uc.map[f], f = "<tr><td>" + Bc(g) + "</td><td>" + Bc(k[0].text) + "</td><td>" + Bc(k[0].type) + "</td><td>", g = k, l = g.length, x = 0; x < l; x++)f += (0 != x ? "<br/>" : "") + Bc(g[x].category);
        f += "</td><td>";
        g = k.length;
        for (l = 0; l < g; l++)x = k[l], f += (0 != l &&
            x.infoLink ? "<br/>" : "") + '<a target="_blank" href="' + Lc(Pc(x.infoLink)) + '">' + Bc(x.infoLink) + "</a>";
        f += "</td></tr>";
        b += f
    }
    return b + "</table>"
};
Xc.Ha = "tvt.templates.options.checksTable";
var Yc = function (a) {
    var b = '<div id="templateFilter" class="checks-control"><span class="checks-controls-label">Filter by Type: </span><input name=\'templateTypes\' type="checkbox" value="Error" checked>Error<input name=\'templateTypes\' type="checkbox" value="Warning" checked>Warning<input name=\'templateTypes\' type="checkbox" value="Suggestion" checked>Suggestion<input name=\'templateTypes\' type="checkbox" value="Info">Info<input name=\'templateTypes\' type="checkbox" value="Fine">Fine</div><div class="checks-control"><span class="checks-controls-label">Filter by Category </span><select id="categoryFilter"><option value=\'\'>All</option>';
    a =
        a.K;
    for (var c = a.length, d = 0; d < c; d++)var e = a[d], b = b + ("<option value='" + Lc(e.name) + "'>" + Bc(e.name) + "</option>");
    return b + "</select></div>"
};
Yc.Ha = "tvt.templates.options.checksControls";
var Zc = function () {
    this.Zc = pa()
};
new Zc;
Zc.prototype.set = function (a) {
    this.Zc = a
};
Zc.prototype.get = function () {
    return this.Zc
};
var $c = "StopIteration"in aa ? aa.StopIteration : Error("StopIteration"), ad = function () {
};
ad.prototype.next = function () {
    throw $c;
};
ad.prototype.zd = function () {
    return this
};
var bd = function (a, b) {
    this.O = {};
    this.i = [];
    this.Ta = this.p = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        if (a instanceof bd)d = a.fa(), c = a.Da(); else {
            var c = [], e = 0;
            for (d in a)c[e++] = d;
            d = c;
            c = nb(a)
        }
        for (e = 0; e < d.length; e++)this.set(d[e], c[e])
    }
};
h = bd.prototype;
h.Da = function () {
    cd(this);
    for (var a = [], b = 0; b < this.i.length; b++)a.push(this.O[this.i[b]]);
    return a
};
h.fa = function () {
    cd(this);
    return this.i.concat()
};
h.Wa = function (a) {
    return dd(this.O, a)
};
h.clear = function () {
    this.O = {};
    this.Ta = this.p = this.i.length = 0
};
h.remove = function (a) {
    return dd(this.O, a) ? (delete this.O[a], this.p--, this.Ta++, this.i.length > 2 * this.p && cd(this), !0) : !1
};
var cd = function (a) {
    if (a.p != a.i.length) {
        for (var b = 0, c = 0; b < a.i.length;) {
            var d = a.i[b];
            dd(a.O, d) && (a.i[c++] = d);
            b++
        }
        a.i.length = c
    }
    if (a.p != a.i.length) {
        for (var e = {}, c = b = 0; b < a.i.length;)d = a.i[b], dd(e, d) || (a.i[c++] = d, e[d] = 1), b++;
        a.i.length = c
    }
};
h = bd.prototype;
h.get = function (a, b) {
    return dd(this.O, a) ? this.O[a] : b
};
h.set = function (a, b) {
    dd(this.O, a) || (this.p++, this.i.push(a), this.Ta++);
    this.O[a] = b
};
h.forEach = function (a, b) {
    for (var c = this.fa(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
h.n = function () {
    return new bd(this)
};
h.zd = function (a) {
    cd(this);
    var b = 0, c = this.i, d = this.O, e = this.Ta, f = this, g = new ad;
    g.next = function () {
        for (; ;) {
            if (e != f.Ta)throw Error("The map has changed since the iterator was created");
            if (b >= c.length)throw $c;
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};
var dd = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var ed = function (a) {
    ed[" "](a);
    return a
};
ed[" "] = ba;
var fd = !D || D && 9 <= Kb, gd = !D || D && 9 <= Kb, hd = D && !F("9");
!E || F("528");
Db && F("1.9b") || D && F("8") || Cb && F("9.5") || E && F("528");
Db && !F("8") || D && F("9");
var id = function () {
};
id.prototype.Xb = !1;
id.prototype.Aa = function () {
    this.Xb || (this.Xb = !0, this.k())
};
var jd = function (a, b) {
    a.eb || (a.eb = []);
    a.eb.push(oa(b, void 0))
};
id.prototype.k = function () {
    if (this.eb)for (; this.eb.length;)this.eb.shift()()
};
var kd = function (a) {
    a && "function" == typeof a.Aa && a.Aa()
};
var ld = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.xa = !1;
    this.Lc = !0
};
ld.prototype.k = function () {
};
ld.prototype.Aa = function () {
};
ld.prototype.stopPropagation = function () {
    this.xa = !0
};
ld.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Lc = !1
};
var md = D ? "focusin" : "DOMFocusIn", nd = D ? "focusout" : "DOMFocusOut";
var od = function (a, b) {
    ld.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.$b = !1;
    this.ka = null;
    if (a) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Db) {
                var e;
                t:{
                    try {
                        ed(d.nodeName);
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
        this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
        this.$b = xb ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.ka = a;
        a.defaultPrevented && this.preventDefault()
    }
};
s(od, ld);
var pd = [1, 4, 2], qd = function (a) {
    return fd ? 0 == a.ka.button : "click" == a.type ? !0 : !!(a.ka.button & pd[0])
};
od.prototype.stopPropagation = function () {
    od.d.stopPropagation.call(this);
    this.ka.stopPropagation ? this.ka.stopPropagation() : this.ka.cancelBubble = !0
};
od.prototype.preventDefault = function () {
    od.d.preventDefault.call(this);
    var a = this.ka;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, hd)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
od.prototype.Eb = function () {
    return this.ka
};
od.prototype.k = function () {
};
var rd = "closure_listenable_" + (1E6 * Math.random() | 0), sd = function (a) {
    try {
        return!(!a || !a[rd])
    } catch (b) {
        return!1
    }
}, td = 0;
var ud = function (a, b, c, d, e) {
    this.wa = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.xb = !!d;
    this.Bb = e;
    this.key = ++td;
    this.removed = this.yb = !1
}, vd = function (a) {
    a.removed = !0;
    a.wa = null;
    a.proxy = null;
    a.src = null;
    a.Bb = null
};
var wd = function (a) {
    this.src = a;
    this.B = {};
    this.bb = 0
};
wd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.B[f];
    a || (a = this.B[f] = [], this.bb++);
    var g = xd(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.yb = !1)) : (b = new ud(b, this.src, f, !!d, e), b.yb = c, a.push(b));
    return b
};
wd.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.B))return!1;
    var e = this.B[a];
    b = xd(e, b, c, d);
    return-1 < b ? (vd(e[b]), Ya(e, b), 0 == e.length && (delete this.B[a], this.bb--), !0) : !1
};
var yd = function (a, b) {
    var c = b.type;
    if (!(c in a.B))return!1;
    var d = Za(a.B[c], b);
    d && (vd(b), 0 == a.B[c].length && (delete a.B[c], a.bb--));
    return d
};
wd.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.B)if (!a || c == a) {
        for (var d = this.B[c], e = 0; e < d.length; e++)++b, vd(d[e]);
        delete this.B[c];
        this.bb--
    }
    return b
};
wd.prototype.ab = function (a, b, c, d) {
    a = this.B[a.toString()];
    var e = -1;
    a && (e = xd(a, b, c, d));
    return-1 < e ? a[e] : null
};
var xd = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.wa == b && f.xb == !!c && f.Bb == d)return e
    }
    return-1
};
var zd = "closure_lm_" + (1E6 * Math.random() | 0), Ad = {}, Bd = 0, Cd = function (a, b, c, d, e) {
    if (p(b)) {
        for (var f = 0; f < b.length; f++)Cd(a, b[f], c, d, e);
        return null
    }
    c = Dd(c);
    if (sd(a))a = a.listen(b, c, d, e); else {
        if (!b)throw Error("Invalid event type");
        var f = !!d, g = Ed(a);
        g || (a[zd] = g = new wd(a));
        c = g.add(b, c, !1, d, e);
        c.proxy || (d = Fd(), c.proxy = d, d.src = a, d.wa = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Gd(b.toString()), d), Bd++);
        a = c
    }
    return a
}, Fd = function () {
    var a = Hd, b = gd ? function (c) {
        return a.call(b.src, b.wa,
            c)
    } : function (c) {
        c = a.call(b.src, b.wa, c);
        if (!c)return c
    };
    return b
}, Id = function (a, b, c, d, e) {
    if (p(b))for (var f = 0; f < b.length; f++)Id(a, b[f], c, d, e); else c = Dd(c), sd(a) ? a.ca(b, c, d, e) : a && (a = Ed(a)) && (b = a.ab(b, c, !!d, e)) && Jd(b)
}, Jd = function (a) {
    if (fa(a) || !a || a.removed)return!1;
    var b = a.src;
    if (sd(b))return yd(b.ba, a);
    var c = a.type, d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c, d, a.xb) : b.detachEvent && b.detachEvent(Gd(c), d);
    Bd--;
    (c = Ed(b)) ? (yd(c, a), 0 == c.bb && (c.src = null, b[zd] = null)) : vd(a);
    return!0
}, Gd = function (a) {
    return a in
        Ad ? Ad[a] : Ad[a] = "on" + a
}, Ld = function (a, b, c, d) {
    var e = 1;
    if (a = Ed(a))if (b = a.B[b.toString()])for (b = cb(b), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.xb == c && !f.removed && (e &= !1 !== Kd(f, d))
    }
    return Boolean(e)
}, Kd = function (a, b) {
    var c = a.wa, d = a.Bb || a.src;
    a.yb && Jd(a);
    return c.call(d, b)
}, Hd = function (a, b) {
    if (a.removed)return!0;
    if (!gd) {
        var c;
        if (!(c = b))t:{
            c = ["window", "event"];
            for (var d = aa, e; e = c.shift();)if (null != d[e])d = d[e]; else {
                c = null;
                break t
            }
            c = d
        }
        e = c;
        c = new od(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            t:{
                var f =
                    !1;
                if (0 == e.keyCode)try {
                    e.keyCode = -1;
                    break t
                } catch (g) {
                    f = !0
                }
                if (f || void 0 == e.returnValue)e.returnValue = !0
            }
            e = [];
            for (f = c.currentTarget; f; f = f.parentNode)e.push(f);
            for (var f = a.type, k = e.length - 1; !c.xa && 0 <= k; k--)c.currentTarget = e[k], d &= Ld(e[k], f, !0, c);
            for (k = 0; !c.xa && k < e.length; k++)c.currentTarget = e[k], d &= Ld(e[k], f, !1, c)
        }
        return d
    }
    return Kd(a, new od(b, this))
}, Ed = function (a) {
    a = a[zd];
    return a instanceof wd ? a : null
}, Md = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Dd = function (a) {
    u(a, "Listener can not be null.");
    if (ga(a))return a;
    u(a.handleEvent, "An object listener must have handleEvent method.");
    return a[Md] || (a[Md] = function (b) {
        return a.handleEvent(b)
    })
};
var _gaq = _gaq || [];
var Nd = {Qf: !0}, Od = function (a, b) {
    var c = [];
    do {
        var d = a.exec.call(a, b);
        d && (d.shift(), db(c, d))
    } while (0 < a.lastIndex);
    return c
}, Pd = function (a) {
    return"true" == a || "1" == a || "!0" == a
}, Qd = function (a, b) {
    return a.exec.call(a, b)
}, Td = function (a) {
    a = a.replace(/([=+-])\s*\n\s*/g, "$1 ");
    a = Rd(a);
    a = Sd(a, [";", ",", "\n"], !0);
    return(a = Wa(a, function (a) {
        return H(RegExp(t("^(?:var |(?:\\w*\\.)*)%s\\s*=", "google_tag_params")), a)
    })) && ua(a.substring(a.indexOf("=") + 1)).replace(/\s*\n\s*/g, " ")
}, Ud = function (a) {
    a = a.replace(/\\\\/g, "").replace(/\\'/g,
        "").replace(/\\"/g, "").replace(/"[^"]*"/g, "_").replace(/'[^'']*'/g, "_").replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = Od(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (Sa(b, Ud))return!0;
    for (; H(/[{].*[}]/, a);)a = a.replace(/[{][^}]*[}]/g, "__");
    return Sa(a.split(/\s*,\s*/), r(H, /^\s*[_a-zA-Z][_a-zA-Z0-9]*\s*=.*/g))
}, Wd = function (a) {
    a = Vd(a);
    return Sa(a, function (a) {
        return H(/['"]\[.*\]['"]/, a.split(/\s*:\s*/)[1])
    })
}, Xd = function (a) {
    a = a.replace(/\\\\/g, "").replace(/\\'/g, "").replace(/\\"/g,
        "").replace(/"[^"]*"/g, "_").replace(/'[^'']*'/g, "_").replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = Od(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (b = Sa(b, Xd))return!0;
    for (; H(/[{].*[}]/, a);)a = a.replace(/[{][^}]*[}]/g, "__");
    return b || (a.match(/:/g) || []).length - 1 > (a.match(/,/g) || []).length
}, Zd = function (a) {
    a = Vd(a);
    return Sa(a, function (a) {
        a = a.split(/\s*:\s*/);
        return 1 < a.length ? (a = a[1].replace(/\\\\/g, "").replace(/\\'/g, "").replace(/\\"/g, ""), Sa(a.split(/\s*[+]\s*/), function (a) {
            return H(/^\s*['"].*['"]\s*$/,
                a) || Yd(a) || H(/^[_a-zA-Z][_a-zA-Z0-9]*$/, a) ? !1 : !0
        })) : !1
    })
}, $d = function (a) {
    a = Vd(a);
    return!Ta(a, function (a) {
        if (-1 != a.indexOf(",")) {
            a = (a = Qd(/\[(.*)\]/, a)) && 1 < a.length ? a[1] : null;
            if (!a)return!1;
            a = Vd(a);
            return Ta(a, function (a) {
                return-1 == a.indexOf(",")
            })
        }
        return!0
    })
}, J = function (a, b, c) {
    c = m(c) ? c : 1;
    return(a = a.exec.call(a, b)) ? a.length > c ? a[c] : !0 : !1
}, ae = function (a, b) {
    for (var c, d = 0; d < a.length; d++) {
        var e = J(a[d], b);
        if (q(e))m(c) || (c = e); else if (!q(e) && !e)return!1
    }
    return m(c) ? c : !0
}, be = function (a, b) {
    for (var c = 0; c < a.length; c++) {
        var d =
            J(a[c], b);
        if (q(d) || d)return d
    }
    return!1
}, ce = function (a, b) {
    return J(a, b.url)
}, de = function (a, b) {
    b || (b = {lastIndex: -1, $c: Sd(a), text: ""});
    b.lastIndex++;
    return b.lastIndex < b.$c.length ? (b.text = b.$c[b.lastIndex], b) : null
}, ee = function (a) {
    return!Ta([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//], function (b) {
        return H(b, a)
    })
}, fe = function (a, b, c) {
    return J(a, c.url, b)
}, Sd = function (a, b, c) {
    b = b || [";", ","];
    var d = {"(": ")", "{": "}", "[": "]"}, e = void 0, f = !1, g = [], k = [], l = 0;
    a = ua(ge(a));
    for (var x = 0, n = a.length; x < n; x++) {
        var z =
            a.charAt(x);
        f ? f = !1 : "\\" == z ? f = !0 : e ? z == e && (e = void 0) : '"' == z || "'" == z ? e = z : "(" == z || "{" == z || "[" == z ? g.push(d[z]) : g.length ? z == g[g.length - 1] && g.pop() : y(b, z) ? (l = ua(a.substring(l, x)), !l && c || k.push(l.replace(" *\n *", "")), l = x + 1) : x == l && K[a.charCodeAt(x)] && (l = x + 1)
    }
    l = ua(a.substring(l, x));
    !l && c || k.push(l.replace(" *\n *", ""));
    return k
}, ge = function (a, b) {
    for (var c = void 0, d = !1, e = -1, f = b || 0, g = f; g < a.length; g++) {
        var k = a.charAt(g), l = g + 1 < a.length ? a.charAt(g + 1) : "";
        if (d)d = !1; else if (0 <= e) {
            if ("*" == k && "/" == l)return a.substring(f,
                e) + ge(a, g + 2)
        } else if ("\\" == k)d = !0; else if (c)k == c && (c = void 0); else if ("/" == k) {
            if ("/" == l)return c = a.indexOf("\n", g), -1 == c ? a.substring(f, g) : a.substring(f, g) + ge(a, c);
            "*" == l && (e = g++)
        } else if ('"' == k || "'" == k)c = k
    }
    return a.substring(f)
}, Rd = function (a) {
    a = a.replace(/\t/g, "    ").replace(/^ *\n+/, "").split("\n");
    for (var b = 20, c = 0; c < a.length && 0 < b; c++)if (a[c].replace(/[ ]+(\n?)/, "$1"), 0 < a[c].length && 0 != a[c].indexOf("..."))var d = /^([ ]*)/.exec(a[c]), d = d ? d[1].length : 0, b = b < d ? b : d;
    for (c = 0; c < a.length && 0 < b; c++)0 < a[c].length &&
        0 != a[c].indexOf("...") && (a[c] = a[c].substring(b));
    return a.join("\n")
}, he = function (a, b, c) {
    var d = m(500) ? 500 : 400;
    c = m(c) ? c : 0;
    var e = a - c;
    a = b;
    0 < e && (a = b.substring(e), b = a.indexOf("\n"), 0 <= b && b < c && (a = a.substring(b)), a = "..." + a, d += 3);
    a.length > d && (a = a.substring(0, d), b = a.lastIndexOf("\n"), 10 < b && (a = a.substring(0, b + 1)), a += "...");
    return Rd(a)
}, Vd = function (a) {
    return Sd(a, [","])
}, H = function (a, b) {
    return a.test.call(a, b)
}, Yd = r(H, /^-?(?:\d+(?:\.\d*)?|\.\d+)$/), ie = function (a, b) {
    return H(a, b.url)
}, K = [];
K[9] = !0;
K[10] = !0;
K[11] = !0;
K[12] = !0;
K[13] = !0;
K[32] = !0;
K[133] = !0;
K[160] = !0;
K[5760] = !0;
K[6158] = !0;
K[8192] = !0;
K[8193] = !0;
K[8194] = !0;
K[8195] = !0;
K[8196] = !0;
K[8197] = !0;
K[8198] = !0;
K[8199] = !0;
K[8200] = !0;
K[8201] = !0;
K[8202] = !0;
K[8203] = !0;
K[8232] = !0;
K[8233] = !0;
K[8239] = !0;
K[8287] = !0;
K[12288] = !0;
var je = function () {
    this.Fa = {};
    this.Gb = {}
};
ca(je);
var ke = {Nd: "categories", Qd: "CheckPermissionsLater", Wd: "DefaultLevel", de: "IgnoreExternalScripts", oe: "IgnoreExternalScripts", re: "isInSupportTeam", Ce: "ManualChecks", De: "ManualScriptParsing", We: "PatternProfiling", mf: "GooglePublisherConsole", nf: "ShowWelcomeScreen", Gf: "WhiteListedDomains"}, le = function (a) {
    return je.o().Fa[a]
}, me = function (a) {
    a = je.o().Fa[a];
    m(a) && Na(a);
    return!!a
}, ne = function (a) {
    a = je.o().Fa[a];
    m(a) && Na(q(a));
    return null != a ? a + "" : ""
}, pe = function () {
    var a = oe;
    ga(a) && chrome.storage.onChanged.addListener(function (b) {
        for (var c in b)je.o().Fa[c] =
            b[c].newValue;
        ga(a) && a()
    })
}, se = function () {
    var a = {};
    mb(ke, function (b) {
        m(le(b)) && (a[b] = le(b))
    });
    qe();
    re(a)
}, qe = function () {
    var a = le("categories");
    m(chrome) && m(chrome.storage) && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    je.o().Fa = {};
    var b = {};
    b.categories = a;
    b.ManualChecks = !0;
    b.ShowWelcomeScreen = !0;
    b["Options initialized to default values."] = !0;
    m(chrome) && m(chrome.storage) && chrome.storage.local.set(b);
    re(b)
}, ue = function (a, b) {
    mb(b, function (a, b) {
        null != a && (je.o().Gb[b] ? u(typeof a == je.o().Gb[b],
                "Unexpected type " + typeof a + " expected " + je.o().Gb[b]) : je.o().Gb[b] = typeof a)
    });
    te(b);
    a.set(b, function () {
        chrome.runtime && chrome.runtime.lastError && (se(), a.set(b, function () {
            console.log("Failed to store values")
        }))
    })
}, te = function (a) {
    a && qb(je.o().Fa, a)
}, ve = m(chrome) && m(chrome.storage) ? r(ue, chrome.storage.local) : te, re = m(chrome) && m(chrome.storage) ? r(ue, chrome.storage.sync) : te, we = function (a, b) {
    re(rb(a, b))
};
var xe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), ze = function (a) {
    if (ye) {
        ye = !1;
        var b = aa.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = ze(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)throw ye = !0, Error();
        }
    }
    return a.match(xe)
}, ye = E;
var Ae = function (a, b) {
    var c;
    if (a instanceof Ae)this.I = m(b) ? b : a.I, Be(this, a.W), c = a.sb, Ce(this), this.sb = c, c = a.va, Ce(this), this.va = c, De(this, a.rb), c = a.aa, Ce(this), this.aa = c, Ee(this, a.G.n()), c = a.qb, Ce(this), this.qb = c; else if (a && (c = ze(String(a)))) {
        this.I = !!b;
        Be(this, c[1] || "", !0);
        var d = c[2] || "";
        Ce(this);
        this.sb = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        Ce(this);
        this.va = d ? decodeURIComponent(d) : "";
        De(this, c[4]);
        d = c[5] || "";
        Ce(this);
        this.aa = d ? decodeURIComponent(d) : "";
        Ee(this, c[6] || "", !0);
        c = c[7] || "";
        Ce(this);
        this.qb =
            c ? decodeURIComponent(c) : ""
    } else this.I = !!b, this.G = new Fe(null, 0, this.I)
};
h = Ae.prototype;
h.W = "";
h.sb = "";
h.va = "";
h.rb = null;
h.aa = "";
h.qb = "";
h.Ad = !1;
h.I = !1;
h.toString = function () {
    var a = [], b = this.W;
    b && a.push(Ge(b, He), ":");
    if (b = this.va) {
        a.push("//");
        var c = this.sb;
        c && a.push(Ge(c, He), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.rb;
        null != b && a.push(":", String(b))
    }
    if (b = this.aa)this.va && "/" != b.charAt(0) && a.push("/"), a.push(Ge(b, "/" == b.charAt(0) ? Ie : Je));
    (b = Ke(this)) && a.push("?", b);
    (b = this.qb) && a.push("#", Ge(b, Le));
    return a.join("")
};
h.n = function () {
    return new Ae(this)
};
var Be = function (a, b, c) {
    Ce(a);
    a.W = c ? b ? decodeURIComponent(b) : "" : b;
    a.W && (a.W = a.W.replace(/:$/, ""))
}, Me = function (a) {
    return a.va
}, De = function (a, b) {
    Ce(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
        a.rb = b
    } else a.rb = null
}, Ne = function (a) {
    return a.aa
}, Ee = function (a, b, c) {
    Ce(a);
    b instanceof Fe ? (a.G = b, a.G.cc(a.I)) : (c || (b = Ge(b, Oe)), a.G = new Fe(b, 0, a.I))
}, Ke = function (a) {
    return a.G.toString()
}, Pe = function (a) {
    return a.G
}, Qe = function (a, b) {
    return a.G.get(b)
}, Ce = function (a) {
    if (a.Ad)throw Error("Tried to modify a read-only Uri");
};
Ae.prototype.cc = function (a) {
    this.I = a;
    this.G && this.G.cc(a);
    return this
};
var Re = function (a) {
    return a instanceof Ae ? a.n() : new Ae(a, void 0)
}, Ge = function (a, b) {
    return q(a) ? encodeURI(a).replace(b, Se) : null
}, Se = function (a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}, He = /[#\/\?@]/g, Je = /[\#\?:]/g, Ie = /[\#\?]/g, Oe = /[\#\?@]/g, Le = /#/g, Fe = function (a, b, c) {
    this.F = a || null;
    this.I = !!c
}, Ue = function (a) {
    if (!a.h && (a.h = new bd, a.p = 0, a.F))for (var b = a.F.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="), e = null, f = null;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d +
            1)) : e = b[c];
        e = decodeURIComponent(e.replace(/\+/g, " "));
        e = Te(a, e);
        a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
};
h = Fe.prototype;
h.h = null;
h.p = null;
h.add = function (a, b) {
    Ue(this);
    this.F = null;
    a = Te(this, a);
    var c = this.h.get(a);
    c || this.h.set(a, c = []);
    c.push(b);
    this.p++;
    return this
};
h.remove = function (a) {
    Ue(this);
    a = Te(this, a);
    return this.h.Wa(a) ? (this.F = null, this.p -= this.h.get(a).length, this.h.remove(a)) : !1
};
h.clear = function () {
    this.h = this.F = null;
    this.p = 0
};
h.Wa = function (a) {
    Ue(this);
    a = Te(this, a);
    return this.h.Wa(a)
};
h.fa = function () {
    Ue(this);
    for (var a = this.h.Da(), b = this.h.fa(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
    return c
};
h.Da = function (a) {
    Ue(this);
    var b = [];
    if (q(a))this.Wa(a) && (b = bb(b, this.h.get(Te(this, a)))); else {
        a = this.h.Da();
        for (var c = 0; c < a.length; c++)b = bb(b, a[c])
    }
    return b
};
h.set = function (a, b) {
    Ue(this);
    this.F = null;
    a = Te(this, a);
    this.Wa(a) && (this.p -= this.h.get(a).length);
    this.h.set(a, [b]);
    this.p++;
    return this
};
h.get = function (a, b) {
    var c = a ? this.Da(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
h.toString = function () {
    if (this.F)return this.F;
    if (!this.h)return"";
    for (var a = [], b = this.h.fa(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Da(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
    }
    return this.F = a.join("&")
};
h.n = function () {
    var a = new Fe;
    a.F = this.F;
    this.h && (a.h = this.h.n(), a.p = this.p);
    return a
};
var Te = function (a, b) {
    var c = String(b);
    a.I && (c = c.toLowerCase());
    return c
};
Fe.prototype.cc = function (a) {
    a && !this.I && (Ue(this), this.F = null, this.h.forEach(function (a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.F = null, this.h.set(Te(this, d), cb(a)), this.p += a.length))
    }, this));
    this.I = a
};
var Ve = function (a, b) {
    this.name = a;
    this.url = b
};
var Ye = function (a, b) {
    if (le("CheckPermissionsLater") || a) {
        var c = G("permissions-check");
        c && We(c, a);
        if (!a)return
    }
    chrome.permissions && chrome.permissions.contains({permissions: ["management"]}, function (c) {
        var e = G("permissions-check");
        e && (We(e, !c), c || (Cd(G("permissions-check-button"), "click", r(Xe, a, b)), (c = G("permissions-refuse-button")) && Cd(c, "click", function () {
            we("CheckPermissionsLater", !0);
            We(e, !1)
        })))
    })
}, Xe = function (a, b) {
    chrome.permissions.request({permissions: ["management"]}, function (c) {
        c && (Ye(a, b), b());
        we("CheckPermissionsLater", c)
    })
};
var Ze = function (a) {
    var b = a.documentUri;
    a.documentUri || (b = Re(a.documentUrl), a.documentUri = b);
    return b
}, L = function (a) {
    var b = a.uri;
    a.uri || (b = Re(a.url), a.uri = b);
    return b
};
var af = function (a, b, c) {
    this.issueClass = a.issueClass || 0;
    this.type = a.type;
    this.category = a.category;
    this.label = c || b || a.label || "";
    this.text = t(a.text || "", b || this.label);
    this.infoLink = q(a.infoLink) ? t(a.infoLink, this.label) : void 0;
    this.value = a.value || void 0;
    this.valueFormat = a.format || a.valueFormat || "";
    this.relatedIssues = a.relatedIssues ? $e(a.relatedIssues) : [];
    this.view = a.view;
    this.ua = a.ua || a;
    this.deleted = a.deleted || null
};
new af({category: "null"}, "NULL");
var bf = function (a, b) {
    Xa(a.relatedIssues, b);
    b.parent = a
}, df = function (a, b) {
    var c = new af(b);
    cf(a.relatedIssues, c.relatedIssues);
    bf(a, c)
}, $e = function (a) {
    a = Ra(a, function (a) {
        return new af(a)
    });
    ef(a);
    return a
}, ff = function (a, b, c) {
    (b = M(b, a)) && (a = M(c, a)) && (a.label = b.label)
}, gf = function (a, b) {
    cf(a.relatedIssues, b);
    v(b, function (b) {
        "Bucket" != b.type && gf(a, b.relatedIssues)
    });
    v(b, function (b) {
        "Bucket" != b.type && "Tag" != b.type && b.text == a.text && b.label == a.label && (b.deleted = "Deduped")
    })
}, cf = function (a, b) {
    v(a, function (a) {
        gf(a,
            b)
    })
}, hf = function (a, b) {
    for (; $a(a, function (a) {
        return b.label == a.label
    }););
    v(a, function (a) {
        hf(a.relatedIssues, b)
    })
}, N = function (a, b) {
    if (p(a)) {
        var c = !1;
        v(a, function (a) {
            a.text == b && (c = !0, jf(a, "Deleted because of text match."))
        });
        v(a, function (a) {
            c = N(a.relatedIssues, b) || c
        });
        return c
    }
    return N(a.relatedIssues, b)
}, kf = function (a, b, c) {
    if (p(a)) {
        var d = !1;
        v(a, function (a) {
            a.text == b && a.label == c && (d = !0, jf(a, "Deleted because of text and label match."))
        });
        v(a, function (a) {
            d = kf(a.relatedIssues, b, c) || d
        });
        return d
    }
    return kf(a.relatedIssues,
        b, c)
}, lf = function (a, b) {
    if (p(a)) {
        var c = !1;
        v(a, function (a) {
            0 <= a.text.indexOf(b) && (c = !0, jf(a, "Deleted because of text prefix match" + b))
        });
        v(a, function (a) {
            c = lf(a.relatedIssues, b) || c
        });
        return c
    }
    return lf(a.relatedIssues, b)
}, mf = function (a, b) {
    var c = 0;
    v(a, function (a) {
        var e = (b ? b + "." : "") + c++;
        console.log(e + " " + a.type + ": " + a.issueClass + ": " + a.text + (a.label && " -- " + Da(a.label.replace("\n", ""), 25)) + (a.deleted ? " deleted:" + a.deleted : ""));
        a.relatedIssues && mf(a.relatedIssues, e)
    })
}, nf = mf, of = ["tvt", "Issue", "dump"], pf =
    aa;
of[0]in pf || !pf.execScript || pf.execScript("var " + of[0]);
for (var qf; of.length && (qf = of.shift());)of.length || void 0 === nf ? pf = pf[qf] ? pf[qf] : pf[qf] = {} : pf[qf] = nf;
var rf = function (a, b) {
    return w(a, function (a) {
        return!a.deleted && y(b, a.category)
    })
}, sf = function (a, b, c) {
    return c && !p(c) ? sf(a, b, [c]) : p(a) ? w(a, function (a) {
        return c ? !a.deleted && 0 < tf(a.relatedIssues, [b], c).length : 0 < uf(a.relatedIssues, [b]).length
    }) : sf(a.relatedIssues, b, c)
}, vf = function (a, b, c) {
    return c && !p(c) ? vf(a, b, [c]) : p(a) ? w(a, function (a) {
        a = M(a.relatedIssues, b);
        return!!a && !a.deleted && (!m(c) || 0 <= c.indexOf(a.label))
    }) : vf(a.relatedIssues, b, c)
}, wf = function (a, b) {
    return q(b) ? wf(a, [b]) : p(a) ? w(a, function (a) {
        return!a.deleted &&
            0 <= b.indexOf(a.label)
    }) : wf(a.relatedIssues, b)
}, uf = function (a, b) {
    return q(b) ? uf(a, [b]) : p(a) ? w(a, function (a) {
        return!a.deleted && 0 <= b.indexOf(a.text)
    }) : uf(a.relatedIssues, b)
}, tf = function (a, b, c) {
    return q(b) ? tf(a, [b], c) : q(c) ? tf(a, b, [c]) : p(a) ? w(a, function (a) {
        return!a.deleted && 0 <= b.indexOf(a.text) && 0 <= c.indexOf(a.label)
    }) : tf(a.relatedIssues, b, c)
}, xf = function (a, b) {
    q(b) && (b = [b]);
    return w(a, function (a) {
        return!a.deleted && "Tag" == a.type && "hidden" != a.valueFormat && -1 != b.indexOf(a.category)
    })
}, yf = function (a, b, c, d) {
    var e =
        [];
    d = d || null;
    for (var f = 0; f < b.length; f++)if (!b[f].deleted && c == b[f][a])Xa(e, b[f]); else if (b[f].type != d) {
        var g = yf(a, b[f].relatedIssues, c);
        db(e, g)
    }
    return e
}, zf = function (a, b) {
    return yf("label", p(a) ? a : a.relatedIssues, b)
}, Af = function (a, b) {
    return yf("text", p(a) ? a : a.relatedIssues, b)
}, Bf = function (a) {
    return yf("type", p(a) ? a : a.relatedIssues, "Bucket", void 0)
}, Df = function (a) {
    return Cf("category", p(a) ? a : a.relatedIssues, "Remarketing Tag (new)")
}, Ef = function (a) {
    return Cf("issueClass", p(a) ? a : a.relatedIssues, 2)
}, Ff =
    function (a, b) {
        return Cf("label", p(a) ? a : a.relatedIssues, b)
    }, M = function (a, b) {
    return Cf("text", p(a) ? a : a.relatedIssues, b, void 0)
}, Gf = function (a, b, c) {
    a = Af(a, b);
    c = wf(a, c);
    return 0 < c.length ? c[0] : null
}, Hf = function (a, b) {
    if (p(a)) {
        var c = Wa(a, function (a) {
            return!a.deleted && 0 <= a.text.indexOf(b)
        });
        c || Sa(a, function (a) {
            c = Hf(a.relatedIssues, b);
            return!!c
        });
        return c
    }
    return Hf(a.relatedIssues, b)
}, Cf = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        if ((!b[e].deleted || d) && c == b[e][a])return b[e];
        var f = Cf(a, b[e].relatedIssues,
            c, d);
        if (f)return f
    }
    return null
}, If = function (a) {
    return Sa(a, function (b) {
        return 1 < zf(a, b.label).length
    })
}, Jf = function (a, b) {
    return Sa(a, function (a) {
        return a.deleted || a.type != b || "hidden" == a.valueFormat ? a.relatedIssues ? Jf(a.relatedIssues, b) : !1 : !0
    })
}, Kf = function (a) {
    a = Af(a, "Data layer fields should be quoted");
    for (var b = 1; b < a.length; b++)a[b].deleted = "Hide duplicate issues"
}, Lf = function (a) {
    return null == a || "null" == a.category
}, jf = function (a, b) {
    a.deleted = b;
    a.relatedIssues = []
}, ef = function (a, b) {
    v(a, function (a) {
        a.parent =
            b
    });
    v(a, function (a) {
        ef(a.relatedIssues, a)
    })
};
var Mf = function (a, b, c, d, e, f, g) {
    this.issueClass = 0;
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.sa = e ? function (a, b) {
        return e.call(this, b)
    } : A;
    this.$ = g || [];
    this.b = !1;
    this.qa = this.view = this.hint = this.ha = null;
    this.ta = {}
}, Nf = function (a) {
    return Ra(a, function (a) {
        return a.n()
    })
}, Of = function (a, b, c, d, e, f) {
    return new Mf(a, b, c, void 0, d, e, f)
}, Pf = r(Of, "Debug", null), O = r(Of, "Error", null), Qf = r(Of, "Fine", null), P = r(Of, "Info", null), Rf = r(Of, "Suggestion", null), Sf = r(Of, "Warning", null), Tf =
    P("Implemented in %s");
P("Includes %s");
var Uf = function (a) {
    return O(a, function (a) {
        return!Yd(a.label)
    })
}, Vf = function (a, b, c) {
    return new Mf("Tag", a, b, c, void 0, void 0, void 0)
}, Wf = function (a, b, c) {
    b = Oa(c || b, af);
    return a == b.label
}, Xf = function (a, b, c) {
    b = Oa(c || b, af);
    return J(a, b.label)
}, Zf = function (a) {
    var b = "${"+a.text+"}", c = "not set" == a.label ? "" : a.label;
    !a.parent || Lf(a.parent) || Yf(Oa(a.parent, af), b, c);
    a.relatedIssues && v(a.relatedIssues, function (b) {
        b.parent = a;
        Zf(b);
        b.parent = void 0
    })
}, Yf = function (a, b, c) {
    a.label = a.label.replace(b, c);
    a.text = a.text.replace(b,
        c);
    !a.parent || Lf(a.parent) || Yf(Oa(a.parent, af), b, c)
}, $f = function (a) {
    return r(function (b) {
        return a(b.label)
    })
};
Mf.prototype.q = function (a) {
    for (var b = 0; b < arguments.length; b++)db(this.$, arguments[b]);
    return this
};
var cg = function (a, b, c) {
    b.category != a.category && (b.text = m(void 0) ? t(a.text, void 0) : a.text, b.category = a.category, b.type = a.type, b.infoLink = a.infoLink, b.relatedIssues && (a = Oa(b, af), Zf(a), bf(a, ag(bg, c))))
};
Mf.prototype.Cb = function (a) {
    a.category = this.category;
    a.infoLink = this.infoLink;
    return a
};
Mf.prototype.clear = function () {
    this.qa = null;
    this.ta = {};
    this.b = !1
};
Mf.prototype.n = function () {
    var a = new Mf(this.type, this.category, this.text, this.infoLink, void 0, this.format);
    a.view = this.view;
    a.sa = this.sa;
    a.$ = this.$;
    a.ha = this.ha;
    return a
};
var ag = function (a, b, c) {
    return new af(a, b, c)
}, Q = function (a, b) {
    a.ha = b;
    return a
}, R = function (a, b) {
    a.format = b;
    return a
}, dg = function (a, b) {
    a.sa = b;
    return a
}, eg = function (a, b) {
    a.hint = b;
    return a
}, S = function (a, b) {
    a.infoLink = b;
    return a
}, fg = function (a, b) {
    a.infoLink = "#" + b;
    return a
}, T = function (a, b) {
    a.$ = b;
    return a
}, gg = function (a, b) {
    a.view = b;
    return a
}, bg = R(Pf("__altered"), "hidden");
var hg = function (a, b, c, d, e, f, g, k) {
    Mf.call(this, a, b, d, e, void 0, g, k);
    this.issueClass = 2;
    this.Vc = q(c) ? [c] : c;
    this.sa = f || A;
    this.Qc = !1
};
s(hg, Mf);
var ig = function (a, b, c, d, e, f) {
    return new hg(a, b, void 0, c, void 0, d, e, f)
}, jg = r(ig, "Tag", null), kg = r(ig, "Bucket", null), lg = r(ig, "Error", null), mg = r(ig, "Fine", null), ng = r(ig, "Group", null), U = r(ig, "Info", null), og = r(ig, "Warning", null), pg = r(ig, "Suggestion", null), qg = lg("An error occured while the tag was fired", function (a) {
    return a.error
}), rg = Rf("Non-standard implementation"), sg = pg("Using secure code on non-secure page", function (a) {
    var b = L(a);
    a = Ze(a);
    return"https" == b.W && "http" == a.W
}), tg = lg("HTTP response code indicates tag failed to fire",
    function (a) {
        a = a.statusCode;
        return!m(a) || 400 > a ? !1 : a + ""
    }, "value"), ug = pg("Using non-secure code on secure page", function (a) {
    var b = L(a);
    a = Ze(a);
    return"http" == b.W && "https" == a.W
}), vg = function (a, b, c, d, e, f) {
    var g = c || A;
    c = ga(e) ? e : function (a, b) {
        return b.label
    };
    return T(R(dg(kg(a), function (a, b) {
        return g.call(this, a, b) ? "{$GROUP_CHILD_COUNT}_" : !1
    }), "value_status"), [R(T(dg(jg(b), "boolean" == typeof e && e ? g : c), d || []), m(f) ? f : "group_status")])
}, xg = function (a, b, c, d, e, f, g) {
    return new hg("Tag", a, b, c, d, e, f, g)
}, yg = function (a, b) {
    return U(a, function (a) {
        a = Pe(L(a)).get(b);
        return q(a) ? a : !1
    })
}, Ag = function (a, b) {
    return gg(U("URL", function (c) {
        var d = Pe(L(c)).fa();
        if (a && !zg(d, a) || b && zg(d, b))return!1;
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url
    }, "link_expandable", [O("URL Encoding Error", function (a) {
        return-1 != a.label.indexOf("&amp;")
    }), tg, qg, R(mg("Redirected to", function (a) {
        return a.redirectUrl
    }), "hidden"), R(mg("redirectedFrom", function (a) {
        return a.redirectedFrom
    }), "hidden")]), "URLs")
}, zg = function (a, b) {
    var c = b + ".";
    return!(!b || !Wa(a, function (a) {
        return b == a || 0 == a.indexOf(c)
    }))
}, Bg = Ag(), Cg = function (a, b) {
    return p(a.Vc) ? Sa(a.Vc, function (a) {
        return H(RegExp(a), b)
    }) : !0
}, Dg = function (a) {
    a.Qc = !0;
    return a
};
var Eg = function (a, b, c, d, e, f) {
    Mf.call(this, a, b, c, d, void 0, f);
    this.issueClass = 3;
    this.sa = e || A
};
s(Eg, Mf);
var Fg = function (a, b, c, d, e) {
    return new Eg(a, b, c, d, e)
}, Gg = function (a, b) {
    return new Eg("CheckOnly", a, "Check only", void 0, b, void 0)
}, Hg = r(Fg, "Error", null), Ig = function (a, b) {
    return Gg(a, function (a) {
        b.call(this, a);
        return!1
    })
}, Jg = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; d++)c.push(Ig(a, arguments[d]));
    return c
}, Kg = r(Fg, "Warning", null), Lg = r(Fg, "Suggestion", null);
var Mg = function (a, b, c, d, e, f, g, k) {
    Mf.call(this, a, b, c, d, void 0, g, k);
    this.issueClass = 1;
    this.sa = f || A
};
s(Mg, Mf);
var Ng = function (a, b, c, d, e, f) {
    return new Mg(a, b, c, void 0, 0, d, e, f)
}, Og = r(Ng, "Tag", null), Pg = r(Ng, "Bucket", null), V = r(Ng, "Error", null), Qg = r(Ng, "Fine", null), Rg = r(Ng, "Group", null), W = r(Ng, "Info", null), Sg = r(Ng, "Warning", null), Tg = r(Ng, "Suggestion", null), Ug = T(Tg("Tag is included in an iframe", function () {
    return self !== top
}), [S(W("IFrame", function () {
    return self.location.href
}, "linked"), "view-source:%s")]), Vg = Tg("Tag is included in an external script file", function (a) {
    return a.externalScript
}), Wg = S(W("Script source",
    function (a) {
        return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1
    }, "linked"), "view-source:%s"), Xg = gg(W("HTML Snippet", function (a) {
    return a.outerHTML
}, "snippet"), "Code"), Yg = S(O("No HTTP response detected"), "https://support.google.com/tagassistant/answer/3059154?hl=en&ref_topic=2947092#http_response"), Zg = function (a, b) {
    return b.label
}, $g = function (a, b, c, d) {
    return T(R(dg(Pg(a), function (a, b) {
        return!A || A.call(this, a, b) && "{$GROUP_CHILD_COUNT}_"
    }), "value_status"), [T(dg(R(Og(b), "group_status"), d ||
        Zg), c || [])])
}, ah = function (a, b, c, d, e) {
    return new Mg("Tag", a, b, c, 0, e, void 0, void 0)
}, bh = function (a) {
    return a
};
var X = function (a, b) {
    this.Wc = b;
    this.ec = null
};
X.prototype.Oc = function () {
    return[]
};
X.prototype.dc = function () {
    if (null === this.ec) {
        var a = [], b = w(this.w(), function (b) {
            return a[b.category] ? !1 : a[b.category] = !0
        });
        this.ec = Ra(b, function (a) {
            var b = La(a.category);
            a = La(a.infoLink);
            return new Ve(b, a)
        })
    }
    return this.ec
};
var ch = function (a) {
    return w(a.A(), function (a) {
        return a.Qc
    })
};
X.prototype.cb = function () {
    return[]
};
X.prototype.J = function () {
    return Sa(this.dc(), function (a) {
        a = a.name;
        var b;
        (b = null == a) || (a = le(a), b = "Off" != (m(a) && "Default" != a ? a + "" : le("DefaultLevel") ? ne("DefaultLevel") : "Info"));
        return b
    })
};
X.prototype.list = function (a) {
    a = a || [];
    db(a, this.w(), this.A(), this.cb(), this.Oc());
    return a
};
X.prototype.Yc = function (a, b) {
    return a.text == b.text && a.label == b.label
};
var dh = function (a, b, c) {
    var d = Bf(b);
    if (0 < d.length)return c = Bf(c), v(c, function (a) {
        var c = Wa(d, function (b) {
            return a.text == b.text
        });
        c ? v(a.relatedIssues, function (a) {
            var b = w(c.relatedIssues, function (b) {
                return this.Yc(b, a)
            }, this);
            0 < b.length ? df(b[0], a) : bf(c, a)
        }, this) : bf(b, a)
    }, a), 0 < c.length
};
X.prototype.fc = function (a, b) {
    7 == b.issueClass ? v(b.relatedIssues, oa(this.fc, this, a)) : (N(b.relatedIssues, rg.text), N(a.relatedIssues, Yg.text), dh(this, a, b) || df(a, b))
};
var eh = function () {
    this.Db = []
};
ca(eh);
var fh = "chrome-extension: .doubleclick.net .cloudfront.net com.atlassian. .facebook.com .facebook.net apis.google.com .google-analytics.com .googlesyndication.com .googleapis.com .google.com/tagmanager/ jquery sitecatalyst.js .twitter.com".split(" ");
T(R(P("Script", function (a) {
    if (null != this.b) {
        if (this.b++, this.b == document.scripts.length)return this.b = null, !1
    } else this.b = 0;
    var b = document.scripts[this.b];
    this.infoLink = b.src;
    return m(b.src) && "" != b.src && !Ff(a.relatedIssues, b.src) && !gh(eh.o(), b.src) && b.src
}), "link_expandable_with_path"), [Tg("Found <script> tag with empty src attribute.", function (a) {
    return document.location.href == a.label
})]);
var hh = function (a, b, c, d, e, f) {
        v(c, function (c) {
            var k = c.category || f && f.category || "", l = c.infoLink || f && f.infoLink;
            l && 0 == l.indexOf("#") && f && (l = f.infoLink + c.infoLink + "");
            l = new Mf(c.type, k, c.text, l);
            if (("" == b || k == b) && y(a, c.type)) {
                var x = e[l.text];
                x ? Wa(x, function (a) {
                    return a.category == k
                }) || Xa(x, l) : (hb(d, l.text), e[l.text] = [l])
            }
            hh(a, b, c.$, d, e, l)
        })
    }, jh = function (a) {
        ih(eh.o(), a)
    }, ih = function (a, b) {
        hb(a.Db, b, function (a, b) {
            return a.Wc > b.Wc ? 1 : -1
        })
    }, kh = function (a) {
        var b = [];
        v(a.Db, function (a) {
            a.J() && db(b, ch(a))
        }, a);
        return b
    },
    lh = function () {
        var a = eh.o(), b = [];
        v(a.Db, function (a) {
            db(b, a.dc())
        });
        b.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        });
        return b
    }, mh = function (a, b, c) {
        var d = [];
        v(a.Db, function (a) {
            a.list(d)
        });
        a = [];
        var e = {};
        hh(b, c, d, a, e);
        return{keys: a, map: e}
    }, gh = function (a, b) {
        return Sa(fh, function (a) {
            return 0 <= b.indexOf(a)
        }) || Nd.testThis && le("ManualScriptParsing") && Sa((le("IgnoreExternalScripts") || "").split("\n"), function (a) {
            return 0 < a.length && 0 <= b.indexOf(a)
        }) ? !0 : Sa(kh(a), function (a) {
            return Cg(a, b)
        }, a)
    };
U("Status");
var nh = function (a) {
    switch (a) {
        case "No items in stock":
        case "Error":
        case "Not valid":
            return"Error";
        case "Requesting info":
        case "Validated":
            return"Info";
        case "Service temporarily unavailable":
            return"Suggestion";
        default:
            return"Suggestion"
    }
}, ph = function (a) {
    var b = Re(a), c = Qe(b, "url"), c = c ? Me(Re(decodeURIComponent(c))) : "", b = oh(b);
    return"remarketing:" + c + "/-/" + (b || a) + ";"
}, oh = function (a) {
    var b = a.G;
    a = b.get("data");
    var c = w(a ? a.toString().split(";") : [], function (a) {
        return 0 < a.length
    });
    v(b.fa(), function (a) {
        0 == a.indexOf("data.") &&
        c.push(a.substring(5) + "=" + escape(b.get(a) + ""))
    });
    return c.join(";")
};
var qh = function () {
    X.call(this, 0, 1)
};
s(qh, X);
var rh = {xd: "AdWords Conversion Tracking", X: "Remarketing Tag (old)", yd: "Remarketing Tag (new)"}, sh = t("%s ${%s}", "AdWords Conversion Tracking", "Conversion ID"), th = t("%s ${%s}", "Remarketing Tag (old)", "Conversion ID"), uh = t("%s ${%s}", "Remarketing Tag (new)", "Conversion ID"), vh = Vf("AdWords Conversion Tracking", sh, "https://support.google.com/tagassistant/answer/2947038?ref_topic=2947092"), wh = Vf("Remarketing Tag (new)", uh, "https://support.google.com/tagassistant/answer/2978937?ref_topic=2947092"), xh = Vf("Remarketing Tag (old)",
    th, "https://support.google.com/tagassistant/answer/2978937?ref_topic=2947092"), yh = {xd: vh, yd: wh, X: xh};
qh.prototype.dc = function () {
    var a = [];
    mb(yh, function (b) {
        Xa(a, new Ve(b.category, b.infoLink))
    });
    return a
};
var zh = t("<%s> tag found.", "iframe"), Ah = t("<%s> tag found.", "img"), Bh = t("<%s> tag found.", "noscript"), Ch = function (a) {
        var b = ae([/(?:viewthrough)?conversion\/([^/?]*)/, /^((?![?]ai=)(.|\n))*$/], a);
        return q(b) ? (0 == b.length && (b = "undefined"), a = J(/[&?;#]label=([^&?#]*)/, a), q(a) ? b + ";" + a : b) : b
    }, Dh = function (a) {
        a = a.label.split(";")[0];
        this.format = "copyable";
        return"undefined" == a ? "not set" : a
    }, Eh = function (a) {
        a = J(/[^;]*;(.*)/, a.label);
        return"boolean" == typeof a || "undefined" == a ? "not set" : a
    }, Fh = Kg("Conversion value missing in <noscript> tag."),
    Gh = Lg("Update the Remarketing code to the new version."), Hh = Rf("Both <script> and <iframe> used."), Ih = O("Mismatch of conversion ID in <script> tag and <%s> tag."), Jh = O("Mismatch of conversion label in <script> tag and <%s> tag."), Kh = Hg("Missing <noscript> tag."), Lh = function (a) {
        var b = a.url, c = a.redirectUrl;
        a = L(a);
        var d = !!a.G.get("data");
        d || (d = Sa(a.G.fa(), function (a) {
            return 0 == a.indexOf("data.")
        }));
        return d ? !0 : a.G.get("value") ? !1 : 1 < b.indexOf("googleads.g.doubleclick.net/pagead/") || 1 < b.indexOf("www.google.com/ads/user-lists/") ||
            c && 1 < c.indexOf("www.google.com/ads/user-lists/")
    };
qh.prototype.A = function () {
    return[xg("Remarketing Tag (new)", ["www.google.com/ads/user-lists/"], uh, vh.infoLink || "", function (a) {
        var b = Ne(L(a));
        return(b = J(/\/ads\/user-lists\/(\d*)\//, b)) ? (a = Qe(L(a), "label"), m(a) ? b + ";" + a : b) : !1
    }, "", [S(P("Conversion ID", Dh), void 0), R(P("Conversion Label", Eh), "copyable"), R(U("Troubleshoot", function (a) {
        return(a = a.redirectedFrom) && 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/") ? (a = a.concat("&deb=c2&srr=n"), a.hasOwnProperty("fmt") || (a = a.concat("&fmt=1")), this.infoLink =
            a = a.replace("script=0", "script=1"), "redirect url") : !1
    }), "hidden"), Bg]), xg("AdWords Conversion Tracking", ["googleadservices.com/pagead/", "googleads.g.doubleclick.net/pagead/"], sh, vh.infoLink || "", function (a) {
        Lh(a) ? cg(wh, this, "URL detected as smart pixel.") : Pe(L(a)).get("value") ? cg(vh, this, "URL contains value param.") : cg(xh, this, "URL does not contain value param.");
        return Ch(a.url)
    }, "", [S(P("Conversion ID", Dh), void 0), R(P("Conversion Label", Eh), "copyable"), U("data anchor", function (a) {
            a = L(a);
            return!!oh(a)
        },
        "hidden", [Mh()]), yg("Conversion Value", "value"), og("Ref/URL GET param did not match with actual URL.", function (a) {
        var b = L(a);
        a = Ze(a);
        if (!m(a))return!1;
        a = a.va;
        var c = Qe(b, "url");
        if (m(c) && a == Me(Re(c)))return!1;
        b = Qe(b, "ref");
        return m(b) && a == Me(Re(b)) ? !1 : m(c) || m(b)
    }), fg(sg, "http_https"), fg(ug, "http_https"), Q(U("Implemented in Teracent.", function (a) {
        return(a = a.redirectedFrom) && 0 <= a.indexOf(".teracent.") ? a : !1
    }, "link_expandable"), rg), Ag(null, "data")])]
};
var Mh = function () {
    var a = T(U("Data", function (a) {
        a = L(a);
        return oh(a)
    }, "map"), [O("Multiple product IDs need to be stored in an array.", function (a) {
        return H(/prodid=[^;]*\\,/, a.label)
    })]);
    return vg("Requests", "Request", function (a) {
        a = L(a);
        return!!oh(a)
    }, [a, Ag("data").q([P("Last checked", function (a) {
        a = ph(a.label);
        a = le(a + "t");
        return q(a) && a
    }), R(P("Status", function (a) {
        a = ph(a.label);
        a = ne(a + "s");
        return q(a) ? (this.type = nh(a), !!a && "" != a && a) : "Not validated yet"
    }), "value")])])
};
qh.prototype.Yc = function (a, b) {
    return a.label == b.label && (a.category == vh.category || a.category == wh.category || a.category == xh.category)
};
var Nh = function (a, b) {
    return[T(S(P("Conversion ID", Dh), void 0), [Q(fg(O("Conversion ID not set" + a + ".", function (a) {
        return a && "not set" == a.label ? "not set" : a && "1234567890" == a.label ? "invalid" : !1
    }), "id_not_set"), Q(O("Conversion ID should not have quotations around it.", function (a) {
        var b = a.parent.label.split(";"), e = J(/['"](\d*)['"]/, b[0]);
        return q(e) ? (b[0] = e, a.label = e, a.parent.label = b.join(";"), !0) : !1
    }), O("Conversion ID malformed" + a + ": %s.", function (a) {
        var b = a.parent.label.split(";"), e = J(/[^0-9]*([0-9]*)/,
            b[0]);
        if (b[0] != e) {
            var f = b[0];
            b[0] = q(e) && "" != e ? e : "undefined";
            a.parent.label = b.join(";");
            return f
        }
        return!1
    })))]), T(R(P("Conversion Label", Eh), "copyable"), [fg(O("Conversion label not set" + a + ".", function (a) {
        return a && "not set" == a.label ? "not set" : !1
    }), "label_not_set")]), T(W("Conversion Value" + a, function (a, d) {
        return b && "AdWords Conversion Tracking" == d.category ? b.call(this, a, d) || "not set" : !1
    }), [Q(fg(Rf("Conversion value not set" + a + ".", function (a) {
        return"not set" == a.label
    }), "value_not_set"), fg(O("Dynamic conversion value in wrong format" +
        a + ".", function (a) {
        return!Yd(a.label)
    }), "dynamic_value"))]), Yg]
}, Oh = function (a) {
    var b = "noscript" == a ? "text()" : "@src";
    return T(ah("AdWords Conversion Tracking", sh, vh.infoLink || "", t('//%s[contains(%s, "%s") or contains(%s, "%s")]', a, b, "googleadservices.com/pagead/", b, "googleads.g.doubleclick.net/pagead/"), function (a) {
        a = a.getAttribute("src") || a.textContent;
        H(/[?&]data(?:\.[a-zA-Z0-9_]+)?=/, a) || 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/") ? cg(wh, this, "data param in DOM src") : H(/value=/, a) ? cg(vh, this,
            "has value in DOM src URL") : cg(xh, this, "no value in DOM src URL");
        return Ch(a)
    }), Nh(t(" in the <%s> tag", a), function (a) {
        a = a.getAttribute("src") || a.textContent;
        return J(/[&?;#]value=([^&?#]*)/, a)
    })).q([gg(W(t("<%s> tag found.", a), function (a) {
        return Da(a.outerHTML, 3E3)
    }, "snippet"), "Code"), Tg("Update to script based tracking.", function () {
        return"i" == a[0]
    })])
}, Ph = function () {
    var a = /google_conversion_id\s*=\s*(?:[a-zA-Z._]*\s*=\s*)?([^;,]*)/g, b = T(ah("AdWords Conversion Tracking", sh, vh.infoLink || "", 0, function (b) {
        var d =
            H(/google_conversion/i, b.textContent) && Qd(a, b.textContent);
        this.b = a.lastIndex;
        if (!d)return!1;
        var e = "" == d[1] ? "undefined" : d[1], f;
        f = f || "";
        b = b.textContent.substring(d.index).replace(/\\\\/g, "__TA_BACKSLASH__").replace(/\\'/g, "__TA_SINGLE_QUOTE__").replace(/\\"/g, "__TA_DOUBLE_QUOTE__");
        d = J(RegExp("(?:^|[; \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*\\'([^\\']*)\\'\\s*(?:[;,\n]|$)", f), b);
        q(d) || (d = J(RegExp('(?:^|[;, \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*"([^"]*)"\\s*(?:[;,\n]|$)', f),
            b));
        f = d && d.replace(/__TA_BACKSLASH__/g, "\\\\").replace(/__TA_SINGLE_QUOTE__/g, "\\'").replace(/__TA_DOUBLE_QUOTE__/g, '\\"');
        q(f) && (e = e + ";" + f);
        return e
    }), Nh("", function (a, b) {
        var e = b.label.split(";"), e = 1 < e.length ? e[1] : "";
        "not set" == e && (e = "");
        return be([RegExp(e + "(?:[^}])*google_conversion_value\\s*=\\s*([^;,}\\s]*)"), RegExp("google_conversion_value\\s*=\\s*([^;,}\\s]*)(?:.|\\n)*?" + b.label.split(";")[1])], a.textContent)
    }));
    db(b.$, [R(Qg("Remarketing Only Flag", function (a, b) {
        var e = J(/google_remarketing_only\s*=\s*([a-z01!]+)/,
            a.textContent);
        q(e) && Pd(e) ? cg(wh, b, "google_remarketing_only") : e && cg(vh, b, "no remarketing marker in script");
        return e
    }), "hidden"), Qg("Code Template", function (a) {
        return 0 < a.textContent.indexOf("goog_report_conversion") ? "Call on-site" : !1
    }), V("Missing conversion.js script.", function () {
        return!Sa(document.scripts, function (a) {
            return a.src && H(/[/]conversion(_async)?.js/, a.src)
        })
    }), fg(V("Missing closing \x3c/script> tag.", function (a) {
        return!a.externalScript && ae([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//,
            /<script.*>/], a.textContent)
    }), "missing_closing"), fg(V("Incorrect script attribute.", function (a) {
        return null != a.getAttribute("language")
    }), "script_attribute"), fg(Sg("Missing CDATA comments.", function (a) {
        return ee(a.textContent)
    }), "cdata_comments"), fg(Tg("Missing line breaks may cause issues.", function (a) {
        a = a.textContent.replace(/[\t ]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();
        return q(a) && 100 < a.length && a.split("\n").length < (-1 != a.indexOf("CDATA") ? 5 : 3)
    }), "line_break"), Q(fg(V("Code found outside of <body> tag.",
        function (a) {
            if (!a.externalScript) {
                for (; a = a.parentNode;)if ("BODY" == a.tagName)return!1;
                return!0
            }
            return!1
        }), "body_tags"), fg(Tg("Code should be placed directly above the closing <body> tag.", function (a) {
        return!a.externalScript && "BODY" != a.parentNode.tagName
    }), "body_tags")), gg(W(t("<%s> tag found.", "script"), function (a) {
        var b = Qd(/google_conversion_id\s*=\s*([^;,]*)/mi, a.textContent);
        return he(b.index, a.textContent, 50)
    }, "snippet"), "Code"), bh(T(R(W("Conversion tag parameters snippet", function (a) {
            return Td(a.textContent)
        }),
        "hidden"), [O("Conversion tag parameters object not correctly formed.", $f(function (a) {
        a = a.replace(/\s*\n\s*/g, "");
        return!H(/\{(?:.|\n)*\}$/, a)
    })), O("Keys and values must be separated using colons.", $f(Ud)), O("Missing commas in between key-value element pairs.", $f(Xd)), T(R(P("Conversion tag parameters", function (a) {
        a = a.label.replace(/\s*\n\s*/g, "");
        return J(/^\s*\{?(.+?)\}?\s*$/m, a)
    }), "json"), [Rf("Pass multiple values in an array.", $f($d)), O("Value passed as array has misplaced quotes.", $f(Wd)), Sf("Missing quotes around the string values of the object.",
        $f(Zd)), O("Attribute key contains space or non-ASCII characters.", function (a) {
        a = Vd(a.label);
        return Sa(a, function (a) {
            a = a.split(":");
            return 1 < a.length && !J(/^["|']?\s*[a-zA-Z0-9_]+\s*["|']?$/g, a[0])
        })
    })])])), R(W("Report Conversion", function (a) {
        return J(/goog_report_conversion/, a.textContent)
    }), "hidden"), Ug, Vg, Wg]);
    return b
};
qh.prototype.w = function () {
    return[Ph(), Oh("img"), Oh("iframe"), Oh("noscript")]
};
var Rh = function (a) {
    var b = rf(a, nb(rh)), c = w(b, function (a) {
        return 0 == uf(a, [Ah, Bh])
    });
    v(["iframe", "img", "noscript"], function (d) {
        var e = sf(b, t("<%s> tag found.", d));
        e.length && v(c, function (b) {
            var c = zf(e, b.label);
            v(c, function (c) {
                var e = !m(b.parent);
                if ("Tag" == c.type && b != c && e) {
                    e = "Conversion Value" + t(" in the <%s> tag", d);
                    e = M(c, e);
                    if (null != e) {
                        var g = M(b, "Conversion Value");
                        if (null != g && g.label != e.label) {
                            var n = parseFloat(g.label), z = parseFloat(e.label);
                            if ("not set" != g.label && isNaN(n) && !isNaN(z) && !H(/^\s*[$\u20ac\u00a2\u00a3]?\s*[0-9.]+/,
                                g.label))g.label = e.label, lf(g, "Dynamic conversion value in wrong format"); else if (isNaN(n) || n != z)g = t("Conversion value mismatch between <script> and <%s> tag.", d), bf(e, ag(O(g), e.label))
                        } else kf(c, e.text, e.label)
                    }
                    N(c.relatedIssues, Yg.text);
                    N(c, "Update to script based tracking.");
                    Za(a, c);
                    Qh(b, c);
                    "iframe" == d && bf(b, ag(Hh))
                }
            })
        })
    })
}, Qh = function (a, b) {
    v(["Conversion ID malformed", "Conversion label not set", "Conversion value missing in <noscript> tag.", "Dynamic conversion value in wrong format"], function (c) {
        Hf(a,
            c) && lf(b, c)
    });
    df(a, b)
};
qh.prototype.Xc = function (a, b, c) {
    var d = rf(c, ["AdWords Conversion Tracking", "Remarketing Tag (new)", "Remarketing Tag (old)"]), e = w(d, function (a) {
        return 1 == a.issueClass
    }), d = w(e, function (a) {
        return 0 == uf(a, [Ah, zh, Bh])
    });
    b = sf(e, b);
    d = w(d, function (a) {
        return 0 == vf(a, Bh).length
    });
    for (e = 0; e < d.length; e++) {
        var f = !1, g = d[e];
        if (0 < b.length) {
            if ("undefined;undefined" == g.label)var k = eb(b, 0, 1)[0], f = !0; else if (0 == g.label.indexOf("undefined;"))var l = vf(b, "Conversion Label", g.label.split(";")[1]), f = 0 != l.length; else if (0 <
                g.label.indexOf(";undefined") || 1 == g.label.split(";").length)l = vf(b, "Conversion ID", g.label.split(";")[0]), f = 0 != l.length;
            l && 0 < l.length ? k = l[0] : k || e != d.length - b.length || (k = b[0])
        }
        k && (f ? (g.label = k.label, f = M(g, "Conversion ID"), f.label = g.label.split(";")[0], lf(f, "Conversion ID not set"), M(g, "Conversion Label").label = Eh(g)) : bf(g, ag(k.label.split(";")[0] == g.label.split(";")[0] ? Jh : Ih, a, "details")), (f = Ef(k)) ? (this.fc(g, f), hf(k.relatedIssues, f)) : N(k.relatedIssues, Yg.text), f = ag(R(Rg("<" + a + "> tag"), "group"), ""),
            Qh(f, k), Qh(g, f), Za(c, k))
    }
};
var Sh = function (a) {
    a = rf(a, ["AdWords Conversion Tracking", "Remarketing Tag (new)", "Remarketing Tag (old)"]);
    v(a, function (a) {
        1 != a.issueClass || Gf(a, "Code Template", "Call on-site") || M(a, Bh) || M(a, Vg.text) || !M(a, t("<%s> tag found.", "script")) || Hf(a, t(Tf.text, "")) || bf(a, ag(Kh))
    })
};
qh.prototype.wd = function (a) {
    var b = rf(a, ["AdWords Conversion Tracking", "Remarketing Tag (old)", "Remarketing Tag (new)"]), c = vf(b, rg.text);
    if (0 != c.length && (b = vf(b, Yg.text), 0 != b.length)) {
        var d = w(b, function (b) {
            var d = J(/([0-9])+;[^ ]+/, b.label);
            return q(d) && (d = vf(c, "Conversion ID", d), 0 < d.length) ? (hf(c, d[0]), hf(a, d[0]), Th(this, b, d[0]), !0) : !1
        }, this);
        v(d, r(hf, b));
        d = w(b, function (b) {
            if (!J(/([0-9])+;[^ ]+/, b.label) && 0 < c.length) {
                var d = c.pop();
                hf(a, d);
                Th(this, b, d)
            }
        }, this)
    }
};
var Th = function (a, b, c) {
    lf(b.relatedIssues, "Conversion ID malformed");
    lf(b.relatedIssues, "Conversion ID not set");
    lf(b.relatedIssues, "Conversion label not set");
    b.category = c.category;
    b.text = c.text;
    b.label = c.label;
    ff("Conversion ID", c, b);
    ff("Conversion Label", c, b);
    a.fc(b, c)
}, Uh = function (a) {
    a = rf(a, ["AdWords Conversion Tracking"]);
    v(a, function (a) {
        if (!Hf(a, "Dynamic conversion value in wrong format")) {
            var c = M(a.relatedIssues, "Remarketing Only Flag");
            if (c)Pd(c.label) ? (cg(wh, a, "Remarketing Only Flag true"),
                lf(a, "Conversion Value")) : cg(vh, a, "Remarketing Only Flag false"); else if (Df(a.relatedIssues))cg(wh, a, "AWCT tag does have smart pixel child."), lf(a, "Conversion Value"); else if (!c || Pd(c.label)) {
                var d = vf(a.relatedIssues, Ah), c = vf(a.relatedIssues, Bh);
                1 == d.length && "Remarketing Tag (old)" == d[0].category || 0 == d.length && 1 == c.length && "Remarketing Tag (old)" == c[0].category ? (cg(xh, a, "AWCT img tag is remarketing."), lf(a, "Conversion Value")) : 1 == d.length && 1 == c.length && "Remarketing Tag (old)" == c[0].category && (a = ag(Fh),
                    bf(c[0], a))
            }
        }
    })
}, Vh = function (a) {
    a = rf(a, ["Remarketing Tag (old)"]);
    v(a, function (a) {
        M(a.relatedIssues, "Remarketing Only Flag") || Df(a.relatedIssues) && cg(wh, a, "Remarketing tag does have smart pixel child")
    })
}, Wh = function (a) {
    a = rf(a, ["Remarketing Tag (old)"]);
    v(a, function (a) {
        bf(a, ag(Gh))
    })
}, Xh = function (a) {
    a = xf(a, nb(rh));
    v(a, function (a) {
        N(a, "Missing conversion.js script.")
    })
}, Yh = function (a) {
    a = rf(a, ["Remarketing Tag (new)"]);
    v(a, function (a) {
        var c = M(a, "Data");
        a = Af(a, "Conversion tag parameters");
        c && 0 < a.length &&
        v(a, function (a) {
            N(a, "Missing quotes around the string values of the object.");
            Jf(a.relatedIssues, "Error") || Jf(a.relatedIssues, "Suggestion") || (a.deleted = "Data found")
        })
    })
}, Zh = function (a) {
    a = rf(a, ["Remarketing Tag (new)"]);
    kf(a, "Conversion Label", "not set")
}, $h = function (a) {
    a = rf(a, ["Remarketing Tag (new)", "Remarketing Tag (old)"]);
    N(a, "Conversion Value")
}, ai = function (a) {
    a = rf(a, ["AdWords Conversion Tracking", "Remarketing Tag (old)"]);
    N(a, "Conversion tag parameters")
}, bi = function (a) {
    M(a, "Report Conversion") &&
    (a = M(a, "No HTTP response detected")) && (a.type = "Info")
};
qh.prototype.cb = function () {
    var a = [];
    db(a, Jg("AdWords Conversion Tracking", Rh, oa(this.Xc, this, "noscript", Bh), oa(this.Xc, this, "img", Ah), bi, oa(this.wd, this), Uh), Jg("Remarketing Tag (old)", Vh, Wh), Jg("Remarketing Tag (new)", Yh, Zh, $h), Jg("AdWords Conversion Tracking", Xh, Sh, ai));
    return a
};
qh.prototype.Oc = function () {
    var a = Nf([Hh, Ih, Jh, Kh, O("Conversion value mismatch between <script> and <noscript> tag."), O("Conversion value mismatch between <script> and <img> tag.")]), b = Nf(a), c = Nf(a);
    v(a, vh.Cb);
    v(b, wh.Cb);
    v(c, xh.Cb);
    var d = this.w();
    db(d, this.A());
    var e = Nf(d);
    v(e, function (a) {
        cg(wh, a, "init")
    });
    var f = Nf(d);
    v(f, function (a) {
        cg(xh, a, "init")
    });
    db(d, a, e, b, f, c, Fh, xh.Cb(Gh.n()));
    return d
};
jh(new qh);
var ci = function () {
    X.call(this, 0, 99);
    this.K = "Channel Intelligence"
};
s(ci, X);
var di = R(P("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
ci.prototype.A = function () {
    return[R(Dg(xg("Channel Intelligence", "channelintelligence.com/", "Channel Intelligence", "http://www.google.com/ads/channelintelligence/", r(ce, /.channelintelligence\.com\/([^_]*)_landing.js/), "", [di, sg, ug, Bg])), "unchecked")]
};
ci.prototype.w = ib([]);
ci.prototype.J = A;
jh(new ci);
var ei = function () {
    X.call(this, 0, 3)
};
s(ei, X);
var fi = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(jump|ad[ijflx]?)\/.*N(\d+)\.([\d\w\.]+)\/B(\d+)/i, gi = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/clk[;&]([^;&]*)[;&]([^;&]*)[;&]/i, hi = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.mo\.doubleclick\.net\/dartproxy\/dfa\.(?:click|mobile)\.handler\?k=N(\d+)\.([\d\w\.]+)\/B(\d+)/i, ii = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/N?(\d+)?.*(ad[ijflx]?)\/([^;&]*)[;&].*[;&]tile=/i, ji =
    /^(?:.*mock.html#url=)?(?:https?:)?\/\/(\d+)?\.?fls\.doubleclick\.net\/(activity[ij]?)[;&]/i, ki = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(activity[ij]?)[;&]/i, li = function (a) {
    return RegExp("[?/&;]" + a + "=([^;&#?]*)")
}, mi = function (a, b) {
    var c = b.url, d = c.split(";");
    1 == d.length && (d = c.split("&"));
    return d.slice(1)[a]
}, ni = function (a, b, c) {
    return U(a, r(fe, b, c))
}, pi = function (a, b) {
    return R(U("URL type", function (c) {
        c = fe(a, b, c);
        return q(c) ? oi(c) : c
    }), "hidden")
}, qi = r(ni, "Network"), ri =
    function (a, b) {
        return S(R(ni("Campaign", a, b), "linked"), "http://advertisers.doubleclick.net/app_pages/campaign/mediaplan.aspx?cid=%s")
    }, si = S(T(R(P("Advertiser ID", function (a) {
    return a.label || "not set"
}), "copyable"), [O("Invalid or missing advertiser ID.", function (a) {
    return!H(/^[0-9]+$/, a.label || "")
})]), "http://advertisers.doubleclick.net/app_pages/advertisers/spotlightactivities/default.aspx?aid=%s"), ui = function (a, b) {
    return T(U(a, r(ce, li(b))), [ti])
}, vi = function (a, b) {
    return T(mg("Parameter name (changed from test function)",
        function (c) {
            this.Yb || (this.Yb = /[?/&;]([^;&#?/]+)=([^;&#?/]*)/g);
            var d = Ke(L(c)), d = d ? L(c) : Ne(L(c));
            c = Qd(this.Yb, d);
            this.b = this.Yb.lastIndex;
            return!c || -1 != a.indexOf(c[1]) || b && be(b, c[1]) ? !1 : (this.text = c[1], c[2])
        }), [ti])
}, wi = function (a, b) {
    return Sg("HTML tag type must match DoubleClick tag type.", function (c) {
        var d = c.src || c.href, d = d ? fe(a, b, {url: d}) : null;
        return q(d) && c.tagName != oi(d).toUpperCase()
    })
}, xi = function (a, b) {
    return W("Script Type", function (c) {
        c = (c = c.src || c.href) ? fe(a, b, {url: c}) : null;
        return q(c) &&
            oi(c)
    })
}, yi = S(og('URLs should end with a "?".', function (a) {
    return!ie(/.*[?]$/, a)
}), "http://support.google.com/dfa/partner/answer/2811309"), zi = lg("Potential missing parameter(s), found '%s'.", r(ce, /(;;|&&)/)), Ai = lg("Smart quotes not allowed in tag HREF/SRC.", r(ie, /%E2%80%9[89]/i)), Bi = S(O("Question marks must be encoded in site-supplied click strings.", function (a) {
    return H(/[?]+/, a.label)
}), "http://support.google.com/dfa/partner/answer/2774119"), ti = Sf('Found "[" or "]" in parameter %s; site may not be passing required information into key value.',
    function (a) {
        if ("pc" == a.text)a.valueFormat = "hidden"; else if (H(/(\[|\])/, a.label))return"hidden" == a.valueFormat && (a.valueFormat = ""), a.text;
        return!1
    }), Ci = r(ie, /[?&;]ord=1[;&#?]/), Di = r(ie, /[?&;]ord=[^;&#?]+/), Fi = Q(U("ord value needs to be populated with a sales order ID.", function (a) {
    return Ei(a) && !Di(a)
}), S(lg("ord value needs to be populated with a random value.", function (a) {
    return!Ei(a) && !Di(a)
}), "http://support.google.com/dfa/partner/bin/answer.py?answer=154049")), Gi = Q(T(R(U("ord", function (a) {
    var b;
    b = L(a);
    Ke(b) ? b = ce(li("ord"), a) : (b = b.aa, b = J(li("ord"), b));
    Ei(a) && "1" != b ? this.format = "" : this.format = "fine_if_ok";
    return b
}), "copyable"), [O("ord value contains unsupported symbols.", function (a) {
    return q(a.label) && !H(/^[-0-9.a-zA-Z\[\]]*$/, a.label)
}), ti, og("ord value not unique enough.", function (a, b) {
    return!Ei(a) && 10 > b.label.length && "1" != b.label && 0 < b.label.length
}), Fi]), Fi), Hi = Gi.n();
Hi.text = "Order ID";
var Ii = R(Hi, ""), Ji = Q(T(R(ui("num parameter", "num"), "fine_if_ok"), [O("num value needs to be populated with a random value.", function (a) {
        return"" == a.label
    }), pg("num parameter only required if ord=1.", function (a) {
        return!Ci(a)
    }), O("num value contains unsupported symbols.", function (a) {
        return q(a.label) && !H(/^[-0-9.a-zA-Z\[\]]*$/, a.label)
    }), ti, Sf("num value not unique enough (10 or more characters required).", function (a) {
        return 10 > a.label.length
    })]), pg("Missing num parameter.", Ci)), Ki = lg("URL must be terminated by the ord= or num= parameter",
        function (a) {
            if (a = Wa(a.url.split("?"), function (a) {
                return 0 < a.indexOf("ord=") || 0 < a.indexOf("num=")
            })) {
                a = a.split(";");
                for (var b = null; m(b) && ta(b = a.pop()););
                return!m(b) && !y(["ord", "num"], b.split("=")[0])
            }
            return!0
        }), Ei = function (a) {
        return!!be([li("qty"), li("cost")], Ne(L(a)))
    }, Li = U("Version", function (a) {
        return Ei(a) ? "Sales Activity Tag" : "Counter Activity Tag"
    }), oi = function (a) {
        return{activity: "img", activityi: "iframe", activityj: "script", ad: "img", adf: "flash frame", adi: "iframe", adj: "script", adl: "flash layer",
            adx: "flash streaming"}[a] || ("" == a ? !1 : a)
    }, Mi = "1x1 88x31 120x60 120x90 120x240 120x600 125x125 160x600 180x150 234x60 240x400 250x250 300x100 300x250 300x600 336x280 468x60 720x300 728x90 970x250".split(" "), Ni = T(ui("Size", "sz"), [Sf("sz= parameter value is not a recognized size.", function (a) {
        return!y(Mi, a.label)
    })]), Oi = T(R(U("Click", function (a) {
        return J(/[?&;]click=([^?]?[^;&#]*)/, a.url.replace(/\?$/, ""))
    }), "link_expandable"), [Bi, ti]), Pi = Bg.n().q(sg, ug), Qi = [Gi, Ji, Oi, Ni, vi(["click", "ord", "num", "sz"]),
        zi, yi, Ai], Ri = [Gi, Ji, Oi, T(ui("SP", "sp"), [O("sp= parameter incorrect.", function (a) {
        return!H(/\d+x\d+/, a.label)
    })]), vi(["click", "num", "ord", "sp"]), zi], Si = [ui("Type", "type"), ui("Category", "cat"), Q(T(ui("Quantity", "qty"), [O("Quantity value contains unsupported symbols.", function (a) {
        return q(a.label) && !H(/^[0-9]+$/, a.label)
    })]), lg("Sales activity tag must have quantity argument set.", Ei)), Ii, Ji, Oi, Q(T(ui("Cost", "cost"), [O("Cost value contains unsupported symbols.", function (a) {
        return!Yd(a.label)
    })]), lg("Sales activity tag must have cost argument set.",
        Ei)), Oi, T(U("Custom Dimensions", function (a) {
        for (var b = /(?:[?&;])(u[0-9]+=[^;&#?]*)/g, c = [], d; d = Qd(b, Ne(L(a)));)Xa(c, d[1]);
        return 0 < c.length ? c.join(";") : !1
    }, "map"), [ti]), lg("Custom dimension %s value is empty.", function (a) {
        for (var b = /(?:[?&;])(u[0-9]+)=([^;&#?]*)/g, c; c = Qd(b, Ne(L(a)));)if (0 == c[2].length)return c[1];
        return!1
    }), zi, vi("cat click cost num ord prd qty src type".split(" "), [/^u[0-9]+$/])], Ti = function () {
        return xg("DFA", fi.source, t("DFA ${%s} ${%s} N${%s} B${%s}", "URL type", "Size", "Network",
            "Campaign"), "http://support.google.com/dfa/partner/bin/answer.py?answer=188812", r(fe, fi, 3)).q(pi(fi, 1), qi(fi, 2), ni("Site String", fi, 3), ri(fi, 4), Qi, Ki)
    }, Ui = function () {
        return xg("DFA", gi.source, "DFA Click Tracker", "http://support.google.com/dfa/partner/bin/answer.py?answer=188812", r(mi, 0)).q(T(S(R(U("Ad", function (a) {
                return mi(0, a) || "not set"
            }), "linked"), "http://advertisers.doubleclick.net/app_pages/creatives/ad.aspx?id=%s"), [O("Invalid or missing ad ID.", function (a) {
                return!H(/^\d+$/, a.label || "")
            })]),
            T(S(R(U("Placement ID", function (a) {
                return mi(1, a) || "not set"
            }), "linked"), "http://advertisers.doubleclick.net/app_pages/siteplacements/properties.aspx?id=%s"), [O("Invalid or missing Placement ID.", function (a) {
                return!H(/^\d+$/, a.label || "")
            })]), pi(gi, 1), T(U("Verifier", function (a) {
                return(a = mi(2, a)) && a.split("?")[0] || ""
            }), [O("DFA Click Tracker verifier not properly formatted.", function (a) {
                return!a.label
            }), ti]), zi)
    }, Vi = function () {
        return xg("DFA", hi.source, "DFA Mobile", "http://support.google.com/dfa/partner/answer/188813",
            r(fe, hi, 2)).q(qi(hi, 1), ni("Site String", hi, 2), ri(hi, 3), Ri, Ki)
    }, Wi = function (a) {
        var b = [ui("Tile", "tile").q(S(Sf("Tile number should be between 1 and 16", function (a) {
            try {
                var b = parseInt(a.label, 10);
                return 1 > b || 16 < b
            } catch (e) {
                return!0
            }
        }), "http://support.google.com/dfp_premium/bin/answer.py?hl=en&answer=177207")), ui("Size", "sz"), ui("Tag ID", "tagid"), ui("oba", "oba"), ui("Keywords", "kw"), vi("kw oba oe ord sz site tagid tile".split(" "))];
        a && db(b, a);
        return xg("DFP", ii.source, t("DFP ${%s}", "URL type"), "http://support.google.com/dfp/",
            r(ie, ii)).q(qi(ii, 1), pi(ii, 2), ui("Site", "site"), ui("Encoding", "oe"), Gi, vg("Ad Slots", t("%s ${%s}", "Ad Slot", "Tile"), A, b), Ki)
    }, Yi = function (a) {
        var b = xg("Floodlight", ji.source, t("%s Dynamic ${%s}", "Floodlight", "Advertiser ID"), "http://support.google.com/dfa/partner/bin/answer.py?answer=186746", function (a) {
            return ce(ji, a) || J(li("src"), Ne(L(a)))
        }).q(si, Li, pi(ji, 2), yi, Ai, Ki);
        if (0 < arguments.length) {
            for (var c = cb(Si), d = 0; d < arguments.length; d++)db(c, arguments[d]);
            b.q(vg("Requests", "Request %s", A, c, Xi))
        }
        return b
    },
    Zi = function (a) {
        var b = xg("Floodlight", ki.source, t("%s Static ${%s}", "Floodlight", "Advertiser ID"), "http://support.google.com/dfa/partner/bin/answer.py?answer=186746", function (a) {
            return J(li("src"), Ne(L(a)))
        }).q(si, Li, pi(ki, 1), yi, Ai, Ki);
        if (0 < arguments.length) {
            for (var c = cb(Si), d = 0; d < arguments.length; d++)db(c, arguments[d]);
            b.q(vg("Requests", "Request %s", A, c, Xi))
        }
        return b
    }, $i = function (a, b) {
        var c = RegExp(b + "[0-9]+:([^;|]*)");
        return T(P(a, r(Xf, RegExp(b + "[0-9]*:([^;|]*)"))), [O(a + " attribute must not contain an index.",
            function (a) {
                return J(c, a.parent.label)
            })])
    }, aj = function () {
        return T(R(U("prd", function (a) {
            return(a = ce(li("prd"), a)) ? decodeURIComponent(a + "") : !1
        }), "hidden"), [$i("Merchant Center ID", "m"), $i("Country", "c"), $i("Language", "l"), O('Missing index for cart item "%s".', r(Xf, /(?:^|;)([ipq]):[^;|]*/)), vg("Products", "Item %s", A, [Q(T(P("Item ID", function (a) {
            return J(RegExp("i" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [Q(O("Product Item ID is missing.", function (a) {
            return"" == a.label
        }), O("Product Item ID contains illegal characters.",
            r(Xf, /[<:?]/)))]), O("Product Item ID is missing.")), Q(T(P("Price per item", function (a) {
            return J(RegExp("p" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [Q(O("Product Item price is missing.", function (a) {
            return"" == a.label
        }), O("Product Item price should be a number.", r(Xf, /[^-.0-9]+/)))]), O("Product Item price is missing.")), Q(T(P("Quantity", function (a) {
            return J(RegExp("q" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [Q(O("Product Item quantity is missing.", r(Wf, "")), O("Product Item quantity should be an integer.",
            r(Xf, /[^0-9]+/)))]), O("Product Item quantity is missing.")), O("Item index should start at 1.", r(Wf, "0"))], function (a, b) {
            this.Zb || (this.Zb = /[ipq]([0-9]+):([^;|]*)[;|]?/g);
            var c = J(this.Zb, b.parent.label);
            this.b = this.Zb.lastIndex;
            return c && 0 == wf(b, [c + ""]).length ? c : !1
        }), O("Item indices should be subsequent order and no index must be skipped.", function (a) {
            if (a = M(a, "Products")) {
                if (0 < wf(a, ["", "0"]).length)return!1;
                for (var b = 1; b < a.relatedIssues.length + 1; b++)if (0 == wf(a, [b + ""]).length)return b + ""
            }
            return!1
        }),
            O("prd attribute malformed.", function (a) {
                return!H(/^([mclipq]([0-9]*):([^;|]*)($|[;|]))+$/, a.label)
            }), O("Attribute %s occurs multiple times.", function (a) {
                a = Od(/([mclipq][0-9]*):(?:[^;|]*)(?:$|[;|])/g, a.label).sort();
                for (var b = 0; b < a.length - 1; b++)if (a[b + 1] == a[b])return a[b];
                return!1
            })])
    }, Xi = function (a) {
        var b = J(li("ord"), Ne(L(a)));
        return null != b && "1" != b ? "ord=" + b : "num=" + J(li("num"), Ne(L(a)))
    }, bj = function (a) {
        a = (a = mi(2, a)) ? a.split("?") : [];
        return 1 < a.length ? (a.shift(), a.join("?")) : ""
    };
ei.prototype.A = function () {
    return[Ti().q(Pi, rg), Ui().q(vg("Tags", "Click Tracker", A, [T(U("Click-through URL", bj), [O("DFA Click Tracker click-through URL must start with http://, https://, tel://, or mailto://", function (a) {
        return!H(/^(http|https|mailto|tel):\/\//, a.label)
    })]), ti, Pi, rg], function (a) {
        return a.url
    })), Vi().q(Pi, rg), Wi(Pi), Yi(Pi, aj(), rg), Zi(Pi, aj(), rg)]
};
var cj = function (a, b) {
    var c = new Mg(b.type, b.category, b.text, b.infoLink, 0, function (a, c) {
        this.qa = {};
        this.qa.node = a;
        this.qa.url = "A" == a.tagName ? a.getAttribute("href") : a.getAttribute("src");
        return Cg(b, this.qa.url) && b.sa(this.qa, c)
    }, b.format);
    b.ha && (c.ha = 2 == b.ha.issueClass ? cj(a, b.ha) : b.ha.n());
    v(b.$, function (a) {
        c.$.push(2 == a.issueClass ? cj(this, a) : a.n())
    }, a);
    return c
};
ei.prototype.w = function () {
    return[cj(this, Ti()).q(Yg, Xg, Ug, V("Jump tag type found in non-anchor HTML tag.", function (a, b) {
        var c = M(b, "URL type");
        return!(!c || "jump" != c.label || "A" == a.tagName)
    }), xi(fi, 1), wi(fi, 1)), cj(this, Ui()).q($g("Tags", "Click Tracker", [W("Click-through URL", function (a, b) {
        return bj({url: b.label})
    }), Xg, Ug], function (a, b) {
        return b.parent.ua.qa.url
    })), cj(this, Vi()).q(Yg, Xg, Ug), cj(this, Wi()).q(Yg, Xg, Ug, xi(ii, 2), wi(ii, 2)), cj(this, Yi(Yg, Xg, Ug, xi(ji, 2), wi(ji, 2))), cj(this, Zi(Yg, Xg, Ug, xi(ki, 1),
        wi(ki, 1)))]
};
jh(new ei);
var dj = function () {
    X.call(this, 0, 99)
};
s(dj, X);
var ej = ["AdWords Conversion Tracking", "Remarketing Tag (old)", "Remarketing Tag (new)", "Google Analytics", "Floodlight"], fj = T(S(R(P("Account ID", function (a) {
    this.format = "";
    return a.label || "not set"
}), "copyable"), void 0), [S(O("Invalid or missing account ID", function (a) {
    return!H(/^GTM-[0-9A-Z]{4,6}$/, a.label)
}), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#multiple_tags")]);
dj.prototype.A = function () {
    return[Dg(T(xg("Google Tag Manager", "googletagmanager.com/", t("%s ${%s}", "Google Tag Manager", "Account ID"), "http://support.google.com/tagmanager/answer/2574370", function (a) {
        return Pe(Re(a.url)).get("id")
    }), [fj, sg, ug, S(rg, "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#nonstandard"), Bg]))]
};
var gj = {pageTitle: {type: 1}, pageCategory: {type: 19}, pageSubCategory: {type: 19}, pageVersion: {type: 2}, pageTestVariation: {type: 19}, pageValue: {type: 2}, pageAttributes: {type: 20}, visitorId: {type: 1}, visitorLoginState: {type: 1}, visitorType: {type: 1}, visitorDemographicInfo: {type: 20}, visitorSocialConnections: {type: 20}, visitorLifetimeValue: {type: 2}, visitorExistingCustomer: {type: 1}, conversionDate: {type: Date}, conversionValue: {type: 2}, conversionType: {type: 1}, conversionId: {type: 1}, conversionAttributes: {type: 20}, transactionId: {type: 1},
    transactionDate: {type: Date}, transactionType: {type: 1}, transactionAffiliation: {type: 1}, transactionTotal: {type: 2}, transactionShipping: {type: 2}, transactionTax: {type: 2}, transactionPaymentType: {type: 1}, transactionCurrency: {type: 1}, transactionShippingMethod: {type: 1}, transactionPromoCode: {type: 1}, transactionProducts: {type: 20}, siteSearchTerm: {type: 1}, siteSearchFrom: {type: 1}, siteSearchCategory: {type: 1}, siteSearchResults: {type: 2}}, hj = [];
mb(gj, function (a, b) {
    Xa(hj, b.toLowerCase())
});
dj.prototype.w = function () {
    return[T(ah("Google Tag Manager", t("%s ${%s}", "Google Tag Manager", "Account ID"), "http://support.google.com/tagmanager/answer/2574370", 0, function (a) {
        return J(/gtm.js[?]id=([^=&]*)/, a.getAttribute("src"))
    }), [fj, V("Missing closing \x3c/script> tag", function (a) {
        return!a.externalScript && J(/<\/html>\s*$/m, a.textContent)
    }), T(bh(Qg("Data Layer Variable", function (a, b) {
        var c = J(RegExp("\\(window,\\s*document\\s*,\\s*['\"]script['\"]\\s*,\\s*['\"]([^'\"]*)['\"]\\s*,\\s*['\"]" + b.label +
            "['\"]\\)", "m"), a.textContent);
        this.format = "dataLayer" == c ? "hidden" : "";
        return c
    })), [bh(S(V("Data layer needs to be above the container snippet", function (a, b) {
        return J(RegExp(b.label + "\\s*=\\s*\\[\\s*[{]([^;]*)[}]\\s*\\]\\s*;", "im"), a.textContent)
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_snippet")), ij(), jj("\\s*=\\s*\\[\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\](?:;|$)?"), jj("\\s*\\.\\s*push\\s*\\(\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\)(?:[;]|$)?"), S(Tg("Code found outside of <body> tag",
        function (a) {
            return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1
        }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#body_tag"), S(V("<script> tag must not be included in a <%s>", function (a) {
        return a.parentNode ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase() : !1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#script_flow")]), P("Script", function (a) {
        return"http://www.googletagmanager.com/gtm.js?id=" +
            a.label
    }, "hidden"), S(Ug, "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#iframe"), Vg, Wg])]
};
var ij = function () {
    return new Mg("Info", "Google Tag Manager", "Data Layer", "https://developers.google.com/tag-manager/reference", 0, function (a, b) {
        var c = RegExp(b.label + "\\s*=\\s*\\[\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\](?:;|$)?", "ig");
        fa(this.b) && 0 < this.b && (c.lastIndex = this.b);
        var d = J(c, a.textContent);
        this.b = c.lastIndex;
        if (c = d && aa[b.label] && 1 < aa[b.label].length ? aa[b.label][0] : !1) {
            var d = [], e;
            for (e in c) {
                var f = fa(c[e]) ? c[e] : t("'%s'", c[e]);
                d.push(t("'%s':%s", e, f))
            }
            this.ta = d
        }
        return!!c
    }, "collection", [S(P("Fields: Label will be set in the test function",
        function (a) {
            this.b = this.b || 0;
            if (this.b == a.ua.ta.length)this.b = !1; else return this.wb = a.ua.ta[this.b], this.b++, a = this.wb.split(":"), this.text = J(/^ *['"]?(.*?)['"]? *$/, a.shift()), a = ua(a.join(":")), 2 < a.length || !isNaN(a) ? H(/\[.*\]/, a) ? a.substring(1, a.length - 1) : a : "";
            return!1
        }, "entry"), "https://developers.google.com/tag-manager/devguide")])
}, jj = function (a) {
    return new Mg("Info", "Google Tag Manager", "Parsed Data Layer", "https://developers.google.com/tag-manager/reference", 0, function (b, c) {
        var d = RegExp(c.label +
            a, "ig");
        fa(this.b) && 0 < this.b && (d.lastIndex = this.b);
        var e = J(d, b.textContent);
        this.b = d.lastIndex;
        q(e) && (this.ta = Vd(e));
        return e
    }, "collection", [S(P("Fields: Label will be set in the test function", function (a) {
        this.b = this.b || 0;
        if (this.b == a.ua.ta.length)this.b = !1; else return this.wb = a.ua.ta[this.b], this.b++, a = this.wb.split(":"), this.text = J(/^ *['"]?(.*?)['"]? *$/, a.shift()), ua(a.join(":"));
        return!1
    }, "entry", [gg(S(Rf("Data layer fields should be quoted", function (a) {
        return!H(RegExp("^\\s*['\"]" + a.text + "['\"]\\s*:.*"),
            a.ua.wb)
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_quoted"), "Code"), S(Rf('Remove the "." from your dataLayer name %s. It may cause issues with tracking.', function (a) {
        a = a.text;
        return-1 != a.indexOf(".") ? a : !1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#period_variable"), S(O("Data layer variable name in wrong case: '%s'", function (a) {
        a = a.text;
        return!m(gj[a]) && -1 < hj.indexOf(a.toLowerCase()) ? a : !1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_conversion"),
        Rf("Number field should not be quoted: '%s'", function (a) {
            var c = a.text;
            return m(gj[c]) && 2 == gj[c].type ? H(/^\s*['"][^'"]+['"]\s*/, a.label || "") ? c : !1 : !1
        })]), "https://developers.google.com/tag-manager/devguide")])
};
dj.prototype.cb = function () {
    return[Ig("Google Tag Manager", function (a) {
        var b = xf(a, ["Google Tag Manager"]), b = w(b, function (a) {
            return"Parsed Data Layer" == a.text
        });
        v(b, function (b) {
            0 == b.relatedIssues.length && Za(a, b)
        });
        b = uf(a, ["HTTP response code indicates tag failed to fire"]);
        b.length && (b.infoLink = "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#http_response");
        Kf(a);
        kj(a)
    }), Fg("Suggestion", "Google Tag Manager", "Multiple installations of Google Tag Manager detected", "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#multiple_tags",
        function (a) {
            return 1 < xf(a, ["Google Tag Manager"]).length
        }), S(Fg("Suggestion", "Google Tag Manager", "Consolidate your tags with Google Tag Manager.", "http://support.google.com/tagmanager/", function (a) {
        if (!rf(a, ["Google Tag Manager"]).length) {
            a = rf(a, ej);
            var b = [];
            v(a, function (a) {
                "Tag" == a.type && -1 == b.indexOf(a.category) && Xa(b, a.category)
            });
            return 1 < b.length
        }
        return!1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#consolidate_gtm")]
};
var kj = function (a) {
    var b = M(a, "Data Layer"), c = M(a, "Parsed Data Layer");
    if (b && c) {
        for (var d = 0; d < c.relatedIssues.length; d++)c.relatedIssues[d].relatedIssues && (b.relatedIssues[d].relatedIssues = c.relatedIssues[d].relatedIssues, c.relatedIssues[d].relatedIssues = [], ef([b]));
        N(a, "Parsed Data Layer")
    }
};
jh(new dj);
var lj = function () {
    X.call(this, 0, 99)
};
s(lj, X);
var mj = "gts-i-name gts-i-price gts-i-quantity gts-i-prodsearch-id gts-i-prodsearch-store-id gts-i-prodsearch-country gts-i-prodsearch-language".split(" "), nj = function (a, b, c) {
        return(c ? Qg : W)(a, function (a) {
            return J(RegExp("\\.push\\s*\\(\\s*(?:\\[[^\\]]*\\]\\s*,\\s*)*\\[\\s*[\"']?" + b + "[\"']?\\s*,\\s*[\"']?([^'\")]+)[\"']?\\s*\\]", "g"), a.textContent)
        })
    }, oj = T(R(P("Google Shopping ID", function (a) {
        return a.label || "not set"
    }), "copyable"), [S(Uf("Invalid or missing account ID"), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#invalid_id")]),
    pj = R(P("gts-order-id", function (a) {
        return a.label || "not set"
    }), "copyable"), qj = function (a) {
        var b = "Remove the elements below:\n";
        v(a, function (a) {
            b = b + a + "\n"
        });
        return b
    }, rj = function (a, b, c) {
        c = c ? "class" : "id";
        a = a.getElementsByTagName("SPAN");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].getAttribute(c);
            if (e && e === b)return a[d]
        }
    }, sj = function (a, b, c, d, e, f, g, k) {
        f = m(f) ? f : "is incorrect";
        g = m(g) ? g : "";
        k = m(k) ? k : "";
        return Q(eg(S(V(t('%s is missing in the order confirmation module: "%s"', a, b), function (a) {
                a = rj(a, b, e);
                return!m(a)
            }),
                "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + g), t('Provide the Merchant Order %s in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.', a, b)), S(eg(V(t('"%s" %s', b, f), function (a) {
            a = rj(a, b, e);
            return!H(c, a.textContent)
        }), t('Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s', a, b, d)), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" +
            k))
    }, tj = function (a, b, c, d, e, f) {
        var g = m(void 0) ? void 0 : "is incorrect";
        e = m(e) ? e : "";
        f = m(f) ? f : "";
        return Q(eg(S(Tg(t('%s is missing in the order confirmation module: "%s"', a, b), function (a) {
            a = rj(a, b, !0);
            return!m(a)
        }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + e), t('Provide the language associated with the account used to submit product data feeds to Google Shopping, in the "%s" field.\nThis is a recommended but optional field. This field does not affect core functionality, and leaving this warning unresolved will not prevent you from entering the monitoring period. However, merchants using Google Shopping should correct these errors to ensure proper integration. This integration will allow Google to more easily correlate specific products to data that you have provided in connection with Google Trusted Stores. If you have chosen to leave out this field, you may disregard this warning.',
            b)), S(eg(V(t('"%s" %s', b, g), function (a) {
            a = rj(a, b, !0);
            return!H(c, a.textContent)
        }), t('Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s', a, b, d)), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + f))
    }, uj = r(J, /(?:^| )(gts\-[^ ]*)/);
lj.prototype.cb = function () {
    return[eg(Fg("Error", "Google Trusted Stores", "Order confirmation page is not in https", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", function (a) {
        var b = M(a, ug.text);
        a = M(a, "gts-order-id");
        return null != b && null != a ? (b.valueFormat = "hidden", !0) : !1
    }), "Implement the order confirmation page in https.\nMerchants must provide a secure way for customers to purchase products online. Thus, merchants must use https when transmitting customer information or financial data, including on order confirmation, order history and order status pages.")]
};
lj.prototype.A = function () {
    return[T(xg("Google Trusted Stores", "googlecommerce.com/trustedstores/", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", function (a) {
        return Pe(Re(a.url)).get("id")
    }), [oj, yg("Google Shopping Account ID", "base_sid"), sg, ug, rg, Bg, R(U("file check response issue handle", function (a) {
        a = a.documentUrl;
        return m(a) ? a : !1
    }), "hidden")])]
};
lj.prototype.w = function () {
    return[T(ah("Google Trusted Stores", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", 0, function (a) {
        return J(/gts\.push\s*\(\s*\[\s*['"]?id['"]?\s*,\s*['"]?([^'"\]]*)/g, a.textContent)
    }), [oj, eg(bh(S(V("Class name conflicts for class %s", function (a) {
        var b = a.getAttribute("class");
        return lc(a, function (a) {
            var b = a.getAttribute ? a.getAttribute("class") : "";
            return a.id && y(["gtrust_badges", "gts-f-w", "gts-order"],
                a.id) || uj(b)
        }) ? !1 : uj(b)
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#class_conflict")), 'Remove the "gts-" for any class names defined for CSS styles. The "gts-" prefix is used by Google Trusted Stores, and such class names in the page may cause conflicts with the Google Trusted Stores JavaScript code. Please update your CSS to use another name. You must avoid using "gts-" for any class names defined for CSS styles in the page.'), Q(T(R(nj("Google Shopping Item ID",
        "google_base_offer_id"), "copyable"), [O("Google Shopping Item ID should be an alphanumeric.", function (a) {
        return!H(/^\w[\s\w]+$/, a.label)
    })]), eg(Rf("Google Shopping Item ID is missing."), 'Provide the Google Shopping Item ID in the "google_base_offer_id" field of the Google Trusted Stores JavaScript code.')), Q(T(R(nj("Google Shopping Account ID", "google_base_subaccount_id"), "copyable"), [eg(Uf('Incorrect format: "google_base_subaccount_id"'), 'Update the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code. The Google Shopping Account ID typically follows this format: "[0-9]+".  The Google Shopping Account ID provided appears to not match this format.')]),
        eg(O("Google Shopping Account ID is missing.", function (a) {
            this.type = M(a, "Google Shopping Item ID") ? "Error" : "Suggestion";
            return!0
        }), 'Provide the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code.')), nj("Google Base Country", "google_base_country", !0), nj("Google Base Language", "google_base_language", !0), nj("Container", "gtsContainer", !0), V("Missing closing \x3c/script> tag", function (a) {
        return J(/<\/html>\s*$/m, a.textContent)
    }), V("Missing script",
        function () {
            return!Wa(document.scripts, function (a) {
                return a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js")
            })
        }), eg(S(bh(V("JavaScript is implemented more than once on the page.", function (a) {
        return 1 < a
    })), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#js_page"), "The Trusted Stores JavaScript code must be implemented exactly once on each page. Remove all but one of the implementations of the Trusted Stores JavaScript code on this page."), S(Tg("Code found outside of <body> tag",
        function (a) {
            return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1
        }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#outside_body"), S(V("<script> tag must not be included in a <%s>", function (a) {
        return a.parentNode ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase() : !1
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#script_html"), Ug, Vg, Wg, Q(eg(S(V("Missing DOCTYPE on the page.", function (a) {
        return self ===
            top && !a.externalScript && "html" != document.childNodes[0].name
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#missing_doctype"), 'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'), eg(S(V("Incorrect DOCTYPE on the page.", function (a) {
            return self === top && !a.externalScript && "" != document.childNodes[0].publicId && "" == document.childNodes[0].systemId
        }),
        "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#incorrect_doctype"), 'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.')), R(W("robots.txt file check dom issue handle"), "hidden"), Yg]), T(ah("Google Trusted Stores", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894"),
        [pj, S(eg(V("Item level details of the order confirmation module are missing", function (a) {
            a = rj(a, "gts-item", !0);
            return!m(a)
        }), 'Provide the item level details associated with the order in the "gts-item" fields of the Google Trusted Stores Order Confirmation JavaScript code.  The gts-item fields include:  gts-i-name; gts-i-price; gts-i-quantity; gts-i-prodsearch-id; gts-i-prodsearch-store-id; gts-i-prodsearch-country; gts-i-prodsearch-language; etc'), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#item_details"),
            T(R(bh(W("Google Trusted Stores")), "hidden"), [pj, S(V("Unknown fields specified in the item level details of the order confirmation module", function (a) {
                var b = [];
                v(a.getElementsByTagName("span"), function (a) {
                    (a = a.getAttribute("class")) && !y(mj, a) && Xa(b, a)
                });
                eg(this, qj(b));
                return 0 != b.length
            }), "https://support.google.com/trustedstoresmerchant/bin/answer.py?hl=en&answer=2609894&topic=2609888&ctx=topic"), sj("Item name", "gts-i-name", /\w+.*/, "", !0), sj("Item price", "gts-i-price", /^\d+(\.\d+)?$/, 'Required format: "123.45"',
                !0, void 0, "", "gts_price"), sj("Item quantity", "gts-i-quantity", /^\d+$/, 'Required format: "123"', !0, void 0, "", "gts_quantity"), tj("Google Shopping Item ID", "gts-i-prodsearch-id", /\w+.*/, "", "shopping_item", "gts_prodsearch_id"), tj("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', "shopping_account", "gts_prodsearch_store"), tj("Google Shopping Country ID", "gts-i-prodsearch-country", /^[A-Z]{2}$/, 'Required format: "US" (ISO3166', "shopping_country", "gts_prodsearch_country"),
                tj("Google Shopping Language ID", "gts-i-prodsearch-language", /^[a-z]{2}$/, 'Required format: "en" (ISO639-1)', "shopping_language", "gts_prodsearch_language"), T(R(bh(W("Google Trusted Stores", function (a) {
                    a = rj(a, "gts-i-prodsearch-id", !0);
                    return m(a)
                })), "hidden"), [sj("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', !0)])]), eg(S(bh(V("Order confirmation module is implemented more than once", function (a) {
                return 1 < a
            })), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#order_more"),
            "The Trusted Stores Order Confirmation Javascript code must be implemented exactly once on the order confirmation page.  Remove any duplicate implementations of the code."), sj("Domain", "gts-o-domain", /^([\w\d]+\.)+\w+$/, 'Required format: "www.mystore.com"', void 0, void 0, "", "gts_domain"), sj("Customer email", "gts-o-email", /^([\w]+\.?)+@\w+\.\w+$/, 'Required format: "user@email.com"', void 0, void 0, "", "gts_email"), sj("Customer country", "gts-o-country", /^[A-Z]{2}$/, 'Required format: ISO3166 (example: "US")',
            void 0, void 0, "", "gts_country"), sj("Currency", "gts-o-currency", /^[A-Z]{3}$/, 'Required format: ISO4217 (example: "USD")'), sj("Total", "gts-o-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'), sj("Discounts", "gts-o-discounts", /^\-?\d+(\.\d+)?$/, 'Required format: "-123.45"'), sj("Shipping total", "gts-o-shipping-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'), sj("Tax total", "gts-o-tax-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"', void 0, void 0, "", "gts_tax"), sj("Estimated shipping date", "gts-o-est-ship-date",
            /^\d{4}-\d{2}-\d{2}$/, 'Required format: "YYYY-MM-DD"'), sj("Preorder", "gts-o-has-preorder", /^[YN]$/, 'Required format: "Y" or "N"'), sj("Digital", "gts-o-has-digital", /^[YN]$/, 'Required format: "Y" or "N"'), sj("ID", "gts-o-id", /^\d+$/, "", !1, "should be a number")])]
};
jh(new lj);
var vj = function (a) {
        return S(O("Unknown method name: '%s'", function (b) {
            var c = b.text.toLowerCase();
            return!a(c) && !a("_" + c) && b.text
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#unknown_method")
    }, wj = function (a, b) {
        return O("Wrong case for method name: '%s'", function (c) {
            var d = a(c), e = c.text.toLowerCase();
            return!d && b(e) && c.text
        })
    }, xj = function (a) {
        return S(Rf("Deprecated method used: '%s'", function (b) {
            var c = a(b);
            return!!c && !!c.la && b.text
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#remove_method")
    },
    yj = function (a) {
        return O("Retired method used: '%s'", function (b) {
            var c = a(b);
            return!!c && !!c.gc && b.text
        })
    }, zj = function (a, b, c, d) {
        var e = (c.a || []).length;
        c.g && (e -= c.g);
        if (d.length < e)return c = e - d.length, a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter", t("Missing %s required parameter(s) for method '%s'.", c, b);
        if (d.length > (c.a || []).length)return c = d.length - (c.a || []).length, a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter",
            t("Method '%s' has %s additional parameter.", b, c);
        for (e = 0; e < d.length; e++)if (c.types && c.types[e] && (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) && Qd(/^["'].*["']$/, d[e]))return a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes", t("The value for parameter '%s' in method '%s' should not be quoted.", c.a[e], b);
        return!1
    };
var Aj = /^ga[.(]/, Bj = /\(([^;]+)\)/g, Cj = /\(([^;]+)\)/g, Dj = /(?:.|\n)*?(?:ga\.|tracker\.)([^;]*?);/g, Ej = /['"]?(?:(.*\.)?)([a-zA-Z0-9_:]*)['"]?/, Fj = {hitCallback: 7, sessionControl: 1}, Gj = {create: {a: ["trackingId", "auto", "cookieDomain", "name", "opt_configObject"], types: [1, 11, 11, 11, 5], g: 4, L: {allowAnchor: 4, allowLinker: 4, alwaysSendReferrer: 4, clientId: 1, cookieDomain: 1, cookieExpires: 3, cookieName: 1, anonymizeIp: 4, name: 1, sampleRate: 3, siteSpeedSampleRate: 2, storage: 1}, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"},
        getByName: {a: ["name"], types: [1], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, getAll: {a: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, require: {a: ["module", "script"], g: 1}, send: {variations: {appview: {a: ["appName", "appVersion"], g: 1, L: Fj}, event: {a: ["hitType", "eventCategory", "eventAction", "eventLabel", "eventValue"], types: [1, 1, 1, 1, 3], g: 2, L: Fj, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/events"}, exception: {a: ["exDescription",
            "exFatal"], g: 1, L: Fj, types: [1, 4]}, item: {}, pageview: {a: ["hitType", "page", "title"], types: [1, 1, 1], g: 2, L: Fj, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/pages"}, social: {a: ["hitType", "socialNetwork", "socialAction", "socialTarget"], L: Fj, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"}, timing: {a: ["hitType", "timingCategory", "timingVar", "timingValue", "timingLabel"], types: [1, 1, 1, 3, 1], L: Fj, g: 1, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"},
            transaction: {}}}, set: {a: ["fieldName", "value"], types: [1, 12], L: {anonymizeIp: 4, campaignId: 1, campaignKeyword: 1, campaignMedium: 1, campaignName: 1, campaignSource: 1, "dimension[0-9]+": 1, encoding: 1, flashVersion: 1, hostname: 1, javaEnabled: 4, language: 1, "metric[0-9]+": 2, nonInteraction: 4, page: 1, referrer: 1, screenColors: 1, screenResolution: 1, title: 1, viewportSize: 1}, Kf: 1, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, get: {a: ["fieldName"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}},
    Hj = {ecommerce: {addItem: {a: "id name sku category price quantity".split(" "), g: 4, L: {}, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, addTransaction: {a: ["id", "affiliation", "revenue", "shipping", "tax"], g: 4, L: {}, C: "_gat.GA_EComm_.Transactions_", link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, clear: {a: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, send: {a: [], L: Fj, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}},
        linker: {decorate: {a: ["target"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"}, autoLink: {a: ["targets", "autolinkAnchor", "autolinkForm"], g: 2, types: [6, 4, 4], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"}}}, Ij = [];
mb(Gj, function (a, b) {
    Xa(Ij, b.toLowerCase())
});
mb(Hj, function (a, b) {
    var c = b.toLowerCase();
    mb(a, function (a, b) {
        Xa(Ij, c + ":" + b.toLowerCase())
    })
});
var Kj = function (a) {
    var b = Gj, c = a.text, d = c.split(":"), e = 2 == d.length && d.shift();
    q(e) && (b = Hj[e], c = d.join(":"));
    b[c] && b[c].Bd && (a = Jj(a), a.shift(), b = b[c].Bd, c = J(/['"]?([^'"]*)['"]?/, a[0]));
    return b[c]
}, Lj = function (a) {
    return y(Ij, a.toLowerCase())
}, Jj = function (a) {
    var b;
    H(/^[_:a-zA-Z]+\(/, a.label) ? (b = a.text, a = J(/\s*(?:[^\(]*)\(([^\)]*)\)/, a.label), a = q(a) ? ta(a) ? b : t("%s, %s", b, a) : "", b = Vd(a)) : b = Vd(a.label);
    return b
}, Mj = function () {
    return T(R(W("Method", function (a, b) {
        var c;
        c = b.label;
        var d = Bj.lastIndex;
        if (0 != c.indexOf("ga(function")) {
            Bj =
                Cj;
            Bj.lastIndex = d;
            var e = J(Bj, c)
        }
        q(e) || (Bj = Dj, Bj.lastIndex = d, e = J(Bj, c));
        c = e;
        this.b = Bj.lastIndex;
        if (q(c) && (d = Sd(c), 0 < d.length))if (d = Qd(Ej, d[0])) {
            var e = RegExp, f, g = d[1] || "";
            f = b.parent.label;
            if (g)var k = RegExp(Ea("."), ""), g = g.replace(k, "");
            f = t("['\"]create['\"]\\s*,\\s*[\"']%s[\"'](?:,\\s{\\s*name:\\s[\"']%s[\"'])?", f, g);
            if (!J(e(f, "im"), a.textContent))return!1;
            d = this.text = d[2];
            this.infoLink = Gj[d] && Gj[d].link || null
        } else return!1;
        return c
    }), "hidden"), [vj(Lj), wj(Kj, Lj), xj(Kj), yj(Kj), T(S(O("%s", function (a) {
        var b =
            Jj(a);
        b.shift();
        var c = Kj(a), d;
        if (d = !!c)if (d = !!c.a)t:if (a = a.text, d = c.a.length, c.g && (d -= c.g), b.length < d && (0 == b.length || !c.L || Qd(/^["'].*["']$/, b[b.length - 1])))b = d - b.length, this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter", d = t("Missing %s required parameter(s) for method '%s'.", b, a); else if (b.length > c.a.length)b = b.length - c.a.length, this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter", d = t("Method '%s' has %s additional parameter.",
            a, b); else {
            for (d = 0; d < b.length; d++)if (c.types && c.types[d] && (4 == c.types[d] || 3 == c.types[d] || 5 == c.types[d] || 2 == c.types[d]) && Qd(/^["'].*["']$/, b[d])) {
                this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes";
                d = t("The value for parameter '%s' in method '%s' should not be quoted.", c.a[d], a);
                break t
            }
            d = !1
        }
        return d
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"), [Qf("Method call", function (a) {
        this.text = "Method call: " + a.parent.text;
        return a.parent.label
    }, "snippet")])])
};
var Nj = [
    {link: "http://developers.google.com/analytics/devguides/collection/gat/methods/gaJSApi_gat", t: {_anonymizeIp: {}, _createTracker: {a: ["opt_account", "opt_name"], g: 2, types: [1, 1], C: 5}, _forceSSL: {a: ["forceSSL"], g: 1, types: [4]}, _getTracker: {a: ["account"], types: [1], la: !0, C: 5}, _getTrackerByName: {a: ["opt_name"], g: 1, types: [1], C: 5}, _getTrackers: {C: 6}}}
], Oj = {};
v(Nj, function (a) {
    qb(Oj, a.t)
});
var Pj = [];
mb(Oj, function (a, b) {
    Xa(Pj, b.toLowerCase())
});
var Qj = function (a) {
    return Oj[a.text]
}, Rj = function (a) {
    return y(Pj, a.toLowerCase())
}, Sj = function () {
    return T(R(P("Method", function (a) {
        return(a = Qd(/([_.a-zA-Z]*)\((.*)\)/, a.label)) ? (this.text = a[1], a[2]) : !1
    }), "hidden"), [O("Missing leading '_' in method name: '%s'", function (a) {
        return Rj("_" + a.text) && a.text
    }), vj(Rj), wj(Qj, Rj), xj(Qj), yj(Qj), O("%s", function (a) {
        var b = a.label.split(","), c = Qj(a);
        return!!c && zj(this, a.text, c, b)
    })])
}, Tj = function () {
    return S(T(R(W("_gat", function (a) {
        var b = /_gat\.([_a-zA-Z.]*\([^)]*\))/g;
        b.lastIndex = this.b;
        a = J(b, a.textContent);
        this.b = b.lastIndex;
        return a ? a : !1
    }), "hidden"), [Sj()]), "http://developers.google.com/analytics/devguides/collection/gat/methods/")
};
var Vj = function (a, b, c) {
    this.Ya = a;
    this.Xa = b;
    this.Kc = c
}, Wj = {};
Wj.async = new Vj(r(t, "['\"]%s_setAccount['\"]\\s*,\\s*['\"]%s['\"]"), {Nc: /^_gaq\.push/, method: /\s*(\[(?:(?!\],).|\n)*\])\s*(?:,|\))\s*/g, Ya: /['"](?:(.*\.)?)([a-zA-Z0-9_]*)['"]/}, function (a) {
    a = J(/^\s*\[\s*((.|\n)*?)\s*\]\s*$/, a);
    return Vd(q(a) ? a : "")
});
Wj.sync = new Vj(r(t, "_gat.%s_getTracker\\(['\"]%s['\"]\\)"), {Nc: /^pageTracker\./, method: /\s*([^\)]*\)\s*$)/g, Ya: /(?:(.*\.)?)\.([a-zA-Z0-9_]*)/}, function (a, b) {
    var c = J(/\s*(?:[^\(]*)\(([^\)]*)\)/, a), c = q(c) ? ta(c) ? b : t("%s, %s", b, c) : "";
    return Vd(c)
});
var Xj = [
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration", t: {_deleteCustomVar: {a: ["index"], types: [2]}, _getName: {a: [], C: 1}, _getAccount: {a: [], C: 1}, _getVersion: {a: [], C: 1}, _getVisitorCustomVar: {a: ["index"], types: [2], C: 1}, _initData: {a: [], types: [], la: !0}, _setAccount: {a: ["accountID"]}, _setCookiePersistence: {a: ["milliseconds"], types: [3], la: !0}, _setCustomVar: {a: ["index", "name", "value", "opt_scope"], types: [2, 1, 1, 2], g: 1}, _setSampleRate: {a: ["newRate"], types: [10]},
        _setSessionTimeout: {a: ["newTimeout"], types: [10], la: !0}, _setSessionCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _setSiteSpeedSampleRate: {a: ["sampleRate"], types: [3]}, _setVar: {a: ["newVar"], la: !0}, _setVisitorCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _trackPageLoadTime: {a: [], la: !0, link: "http://support.google.com/analytics/bin/answer.py?answer=1205784"}, _trackPageview: {a: ["opt_pageURL"], g: 1}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiCampaignTracking",
        t: {_setAllowAnchor: {a: ["bool"], types: [4]}, _setCampContentKey: {a: ["newCampContentKey"]}, _setCampMediumKey: {a: ["newCampMedKey"]}, _setCampNameKey: {a: ["newCampNameKey"]}, _setCampNOKey: {a: ["newCampNOKey"]}, _setCampSourceKey: {a: ["newCampSrcKey"]}, _setCampTermKey: {a: ["newCampTermKey"]}, _setCampaignCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _setCampaignTrack: {a: ["bool"], types: [4]}, _setCookieTimeout: {a: ["newDefaultTimeout"], types: [3], Rf: [1], la: !0}, _setReferrerOverride: {a: ["newReferrerUrl"]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory",
        t: {_cookiePathCopy: {a: ["newPath"]}, _getLinkerUrl: {a: ["targetUrl", "useHash"], C: 1}, _link: {a: ["targetUrl", "useHash"]}, _linkByPost: {a: ["formObject", "useHash"]}, _setAllowHash: {a: ["bool"], types: [4], la: !0}, _setAllowLinker: {a: ["bool"], types: [4]}, _setCookiePath: {a: ["newCookiePath"]}, _setDomainName: {a: ["newDomainName"]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEcommerce", t: {_addItem: {a: "orderId sku name category price quantity".split(" ")}, _addTrans: {a: "orderId affiliation total tax shipping city state country".split(" "),
        C: "_gat.GA_EComm_.Transactions_"}, _trackTrans: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking?", t: {_trackEvent: {a: ["category", "action", "opt_label", "opt_value", "opt_noninteraction"], types: [1, 1, 1, 2, 4], g: 3}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSearchEngines", t: {_addIgnoredOrganic: {a: ["newIgnoredOrganicKeyword"]}, _addIgnoredRef: {a: ["newIgnoredReferrer"]}, _addOrganic: {a: ["newOrganicEngine",
        "newOrganicKeyword", "opt_prepend", "opt_displayName", "opt_urlPattern"], types: [1, 1, 4, 1, 1], g: 3}, _clearIgnoredOrganic: {a: []}, _clearIgnoredRef: {a: []}, _clearOrganic: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSocialTracking", t: {_trackSocial: {a: ["network", "socialAction", "opt_target", "opt_pagePath"], g: 2}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiWebClient", t: {_getClientInfo: {a: [], C: 4}, _getDetectFlash: {a: [],
        C: 4}, _getDetectTitle: {a: [], C: 4}, _setClientInfo: {a: ["bool"], types: [4]}, _setDetectFlash: {a: ["bool"], types: [4]}, _setDetectTitle: {a: ["bool"], types: [4]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUrchin", t: {_getLocalGifPath: {a: [], C: 1}, _getServiceMode: {a: [], C: 3}, _setLocalGifPath: {a: ["newLocalGifPath"]}, _setLocalRemoteServerMode: {a: []}, _setLocalServerMode: {a: []}, _setRemoteServerMode: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUserTiming",
        t: {_trackTiming: {a: ["category", "variable", "time", "opt_label", "opt_sampleRate"], types: [1, 1, 3, 1], g: 2}}},
    {link: "http://support.google.com/analytics/bin/answer.py?answer=2558867", t: {_require: {a: ["inpage_linkid", "pluginUrl"]}}},
    {link: null, t: {_addDevId: {a: ["devId"], types: [1]}, _anonymizeIp: {a: []}, _clearTrans: {a: []}, _clearXKey: {a: ["projectId"], types: [2]}, _clearXValue: {a: ["projectId"], types: [2]}, _createEventTracker: {a: ["name"], types: [1]}, _get: {a: ["key"], types: [1]}, _getPlugin: {a: ["name"], types: [1]}, _getXKey: {a: ["projectId",
        "num"], types: [3, 3]}, _getXValue: {a: ["projectId", "num"], types: [3, 3]}, _sendXEvent: {a: []}, _set: {a: ["key", "value"], types: [1, 1]}, _setAutoTrackOutbound: {a: [], types: [], gc: !0}, _setTrackOutboundSubdomains: {a: [], types: [], gc: !0}, _setHrefExamineLimit: {a: [], types: [], gc: !0}, _setMaxCustomVariables: {a: ["maxCustomVars"], types: [2]}, _setPageGroup: {a: ["index", "value"], types: [3, 1]}, _setTransactionDelim: {a: ["delim"], types: [1]}, _setXKey: {a: ["key"], types: [1]}, _setXValue: {a: ["value"], types: [1]}, _visitCode: {a: []}}}
], Yj = {};
v(Xj, function (a) {
    qb(Yj, a.t);
    v(Nj, function (a) {
        mb(a, function (a, b) {
            Yj["gat." + b] = a
        })
    })
});
var Zj = [];
mb(Yj, function (a, b) {
    Xa(Zj, b.toLowerCase())
});
var ak = function (a) {
    return Yj[a.text]
}, bk = function (a) {
    return y(Zj, a.toLowerCase())
}, ck = function (a) {
    var b = Wa(Xj, function (b) {
        return m(b.t[a])
    });
    return null != b ? b.t[a].link || b.link : null
}, ek = function (a) {
    var b = Wj[a];
    return S(T(W("Statements", function (a) {
        return b.Xa && (this.b = a = de(a.textContent, this.b)) && J(b.Xa.Nc, a.text) ? a.text : !1
    }, "hidden"), [dk(b)]), "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors")
}, dk = function (a) {
    return T(R(W("Method", function (b, c) {
        var d = J(a.Xa.method, c.label);
        this.b = a.Xa.method.lastIndex;
        if (q(d)) {
            var e = Sd(d);
            if (0 < e.length)if (e = Qd(a.Xa.Ya, e[0])) {
                if (!J(RegExp(a.Ya(e[1] || "", c.parent.label), "im"), b.textContent))return!1;
                this.text = e[2];
                this.infoLink = ck(this.text)
            } else return!1
        }
        return d
    }), "hidden"), [S(O("Missing leading '_' in method name: '%s'", function (a) {
        return bk("_" + a.text) && a.text
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_underscore"), vj(bk), wj(ak, bk), xj(ak), yj(ak), T(S(O("%s", function (b) {
        if (a.Ya &&
            a.Kc) {
            var c = a.Kc(b.label, b.text);
            c.shift();
            var d = ak(b);
            return!!d && zj(this, b.text, d, c)
        }
        return!1
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"), [Qf("Method call", function (a) {
        this.text = "Method call: " + a.parent.text;
        return a.parent.label
    }, "snippet")])])
};
var fk = function () {
    X.call(this, 0, 2)
};
s(fk, X);
var gk = [];
gk[5] = ["Category", "Action", "Label", "Value"];
gk[14] = ["Category", "Variable", "Time", "Label", "Sample Rate"];
var hk = [];
hk[5] = /(?:\d*\([^)]*\))*5\(([^)]*)\)(?:\(([^)]*)\))*/;
hk[14] = /(?:\d*\([^)]*\))*14\((?:[0-9]*!)?([^)]*)\)/;
var ik = t("%s ${%s}", "Google Analytics", "Web Property ID"), jk = ["utmac", "tid"], kk = ["utme"], lk = ["utmtci"], mk = ["utmtco"], nk = ["utmtrg"], ok = ["utmiva", "ic"], pk = ["utmipc", "ic"], qk = ["utmipn", "in"], rk = ["utmipr", "ip"], sk = ["utmiqt", "iq"], tk = ["utmr", "dr"], uk = ["utmt", "t"], vk = ["utmtsp", "ts"], wk = ["utmtst", "ta"], xk = ["utmttx", "tt"], yk = ["utmtto", "tr"], zk = ["tid", "tid"], Ak = ["utmp", "dp"], Bk = ["utmtid", "ti"], Ck = ["utmwv", "v"], Dk = function (a, b) {
    var c = Z(kk, b), d = Qd(hk[a], c);
    if (0 < d.length) {
        var c = d[1].split("*"), e = eb(gk[a], 0, c.length),
            d = d[2];
        m(d) && (c.push(d), d = gk[a], e.push(d[d.length - 1]));
        d = this.b ? this.b : 0;
        if (d < c.length)return this.b = d + 1, this.text = decodeURIComponent(e[d]), decodeURIComponent(c[d])
    }
    return this.b = !1
}, Z = function (a, b) {
    var c = L(b);
    return("/__utm.gif" == c.aa ? Qe(c, a[0]) : Qe(c, a[1])) || ""
}, Ek = S(T(ng("Custom Variables", function (a) {
    a = Z(kk, a);
    a = (a = Qd(/(?:\d+\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a)) && 3 == a.length ? a[1].split("*").length : 0;
    return 0 < a ? "" + a : !1
}), [T(U("Custom Variable", function (a) {
    var b;
    t:{
        b = this.b ? this.b : 0;
        a = Ke(L(a));
        var c = Qd(/utme=(?:\d*\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a);
        if (c && 3 == c.length) {
            a = c[1].split("*");
            for (var c = c[2].split("*"), d = [], e = 0, f = 0; f < a.length; f++) {
                e++;
                if (f < c.length) {
                    var g = J(/([0-9]{1,2})!/, a[f]), k = J(/([0-9]{1,2})!/, c[f]);
                    g && g == k && (e = parseInt(g, 10), a[f] = a[f].substring(g.length + 1), c[f] = c[f].substring(k.length + 1))
                }
                Xa(d, e)
            }
            if (b < a.length) {
                this.b = b + 1;
                this.text = "Custom Variable " + d[b];
                b = decodeURIComponent(a[b]) + ": " + decodeURIComponent(c[b]);
                break t
            }
        }
        b = this.b = !1
    }
    return b
}), [Sf("The total combined length of any custom variable name and value may not exceed 128 characters.",
    function (a) {
        return 130 < a.label.length
    })]), Sf("More than 5 custom variables are used.", function (a) {
    return 5 < parseInt(a.label, 10)
})]), "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"), Fk = T(P("Web Property ID", function (a) {
    le("Google Analytics-" + a.label) ? (this.infoLink = le("Google Analytics-" + a.label), this.valueFormat = "linked") : this.valueFormat = "copyable";
    return a.label || "not set"
}), [S(O("Leading or trailing whitespace in ID", function (a) {
    var b = m(a.label) ? be([/^\s+[^ ]/,
        /[^ ]\s+$/], a.label) : !0;
    b && (a.parent.label = ua(a.label));
    return b
}), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#whitespace"), S(O("Invalid or missing web property ID", function (a) {
    return m(a.label) ? !H(/^\s*(?:UA|YT|MO)-\d{4,10}-\d+\s*$/, a.label) : !0
}), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_property")]), Kk = function (a, b) {
    return T(xg("Google Analytics", [b], ik, "http://support.google.com/analytics/bin/answer.py?answer=1008080", function (a) {
        var b =
            Re(a.url);
        return"/collect" == b.aa ? Z(zk, a) : "/__utm.gif" == b.aa ? Z(jk, a) : !1
    }), [Fk, U("Pixel Version/Syntax", function () {
        return a == Gk.X.s ? a : !1
    }), U("Tracked page", r(Z, Ak), "value"), U("Referral", r(Z, tk), "value"), U("Version", r(Z, Ck), "value"), U("Code Version/Syntax", function (a, b) {
        if (b) {
            if (ce(/google-analytics.com\/collect/, a))return Gk.Za.s;
            if (ce(/stats.g.doubleclick.net\/_utm.gif/, a))return Gk.X.s;
            if (M(b, "Version") && J(/1\.*/, M(b, "Version").label))return Gk.Jc.s
        }
        return!1
    }), Q(Hk("Page Load", "Time ${bucketIndex}: ${Category} - ${Variable}",
        14), Q(Hk("Events", "Event ${bucketIndex}: ${Category} - ${Action}", 5), Q(Ik(), Q(Jk(), R(T(P("Page Tracking"), [Ek, Bg]), "hidden"))))), sg, ug, S(rg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#non_standard")])
}, Ik = function () {
    return T(R(dg(kg("Transaction %s"), function (a) {
        return"/__utm.gif" == Ne(Re(a.url)) && "tran" == Z(uk, a) ? Z(Bk, a) : !1
    }), "group_status"), [T(R(dg(jg("Total"), r(Z, yk)), "value_status"), [U("Transaction ID", r(Z, Bk), "value"), U("Affiliation or Store name", r(Z, wk), "value"),
        Q(U("Total", r(Z, yk), "value"), O("Missing total amount.")), U("Tax", r(Z, xk), "value"), U("Shipping cost", r(Z, vk), "value"), U("Billing City", r(Z, lk), "value"), U("Billing region", r(Z, nk), "value"), U("Billing Country", r(Z, mk), "value"), Bg])])
}, Jk = function () {
    return T(R(dg(kg("Transaction %s"), function (a) {
        return"/__utm.gif" == Ne(Re(a.url)) && "item" == Z(uk, a) ? Z(Bk, a) : !1
    }), "group_status"), [T(R(dg(jg("Item %s"), function (a) {
        this.text = t("Item %s", Z(pk, a));
        return Z(rk, a)
    }), "value_status"), [U("Affiliation or Store name",
        r(Z, wk), "value"), Q(U("SKU / Code", r(Z, pk), "value"), O("Missing SKU/code.")), U("Product Name", r(Z, qk), "value"), U("Category or variation", r(Z, ok), "value"), Q(U("Unit price", r(Z, rk), "value"), O("Missing unit price.")), Q(U("Quantity", r(Z, sk), "value"), O("Missing quantity.")), Bg])])
}, Hk = function (a, b, c) {
    return vg(a, b, function (a) {
        return"/__utm.gif" == Ne(L(a)) && "event" == Z(uk, a) && H(hk[c], Z(kk, a))
    }, [U("Parameter", r(Dk, c)), Ek, Bg])
};
fk.prototype.A = function () {
    return[Kk("Any", "google-analytics.com/"), Kk(Gk.X.s, "stats.g.doubleclick.net/")]
};
var Lk = S(Of("Suggestion", "Google Analytics", "Consider update to the async version"), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#update_async"), Gk = {Za: {s: "Universal", xc: function (a) {
    return ae([/create/i, /displayfeatures/i, RegExp(Gk.Za.ga[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']displayfeatures["']/.source, "gi")], a.textContent) ? "Universal with Display Features" : Gk.Za.s
}, link: "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
    U: "google-analytics.com/analytics.js", ga: [/create/i, /["'](?:[a-zA-Z_0-9]*\.)*create["'],\s*["'](UA-[^"']*)["']/gi], Qa: function () {
        return S(T(W("Universal analytics statements", function (a) {
            return(this.b = a = de(a.textContent, this.b)) && J(Aj, a.text) ? a.text : !1
        }, "hidden"), [Mj()]), "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors")
    }}, Rc: {s: "Asynchronous", link: "http://support.google.com/analytics/bin/answer.py?answer=1008080", U: "google-analytics.com/ga.js",
    ga: [/setAccount/i, /\[\s*["'](?:[a-zA-Z_0-9]*\.)?_?setAccount["']\s*,\s*["']([^"']*)["']/gi], yc: "stats.g.doubleclick.net/dc.js", Qa: r(ek, "async")}, Pe: {s: "Synchronous", link: "http://support.google.com/analytics/bin/answer.py?answer=1012283", U: "google-analytics.com/ga.js", ga: [/_getTracker/i, /_gat._getTracker\(["']([^\"']*)["']\)/gi], Pb: Lk, Qa: r(ek, "sync")}, Jc: {s: "Urchin", link: "http://support.google.com/analytics/bin/answer.py?answer=1008080", U: "google-analytics.com/urchin.js", ga: [/_uacct/i, /_uacct = ["']([^\"']*)["'];/gi],
    Pb: Lk, Qa: function () {
        return P("Statments", jb)
    }}, X: {s: "Remarketing", link: "http://support.google.com/analytics/bin/answer.py?answer=2444872", U: "stats.g.doubleclick.net/dc.js", ga: [/_setAccount/i, /["'](?:[a-zA-Z_0-9]*\.)*_setAccount["'],\s*["']([^"']*)["']/gi, /stats\.g\.doubleclick\.net\/dc\.js/], Qa: r(ek, "async")}}, Mk = function (a) {
    var b = T(ah("Google Analytics", ik, a.link, 0, function (b) {
        var d = ae(a.ga, b.textContent);
        this.b = b.textContent.length && a.ga[1].lastIndex;
        return d && a.yc && 0 <= b.textContent.indexOf(a.yc) ?
            !1 : d
    }), [Fk, W("Code Version/Syntax", ga(a.xc) ? a.xc : ib(a.s)), Yg, S(Ug, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#iframe"), S(V("Missing closing \x3c/script> tag", function (a) {
        return J(/<\/html>(.|\n)*$/m, a.textContent)
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_closing"), S(bh(S(V("Missing %s script", function (b) {
            return 0 == b ? a.U.substring(a.U.indexOf("/") + 1) : !1
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_ga")),
        "http://support.google.com/analytics/bin/answer.py?answer=1008083"), S(Tg("Code found outside of <head> tag", function (a) {
        return!!a.parentNode && "HEAD" != a.parentNode.nodeName
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#move_head"), a.Qa(), gg(W("Code Snippet", function (b) {
        return he(a.ga[1].lastIndex, b.textContent, 100)
    }, "snippet"), "Code"), S(Vg, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#external_file"), Wg, gg(Qf("Cookies", function () {
        var a = w(document.cookie.split(/; */),
            function (a) {
                return 0 == a.indexOf("__utm") || 0 == a.indexOf("_ga")
            });
        return 0 < a.length ? a.join(";") : !1
    }, "map"), "Cookies")]);
    a.Pb && Xa(b.$, a.Pb);
    return b
};
fk.prototype.cb = function () {
    return[Ig("Google Analytics", function (a) {
        a = xf(a, ["Google Analytics"]);
        v(a, function (a) {
            Gf(a, "Code Version/Syntax", "Universal with Display Features") && (kf(a, "Code Version/Syntax", Gk.Za.s), kf(a, "Code Version/Syntax", Gk.X.s))
        })
    }), Ig("Google Analytics", function (a) {
        var b = xf(a, ["Google Analytics"]), b = vf(b, "Pixel Version/Syntax");
        v(b, function (b) {
            var d = M(b, "Pixel Version/Syntax"), e = Gf(b, "Code Version/Syntax", "Universal with Display Features");
            if (d && d.label == Gk.X.s && !e && (d = Ff(a, b.label)) &&
                "Google Analytics" == d.category) {
                if (e = M(d, "Code Version/Syntax"))e.label = Gk.X.s, d.infoLink = "http://support.google.com/analytics/bin/answer.py?answer=2444872";
                N(b, "Pixel Version/Syntax");
                N(d, "Missing ga.js script")
            }
        })
    }), Fg("Suggestion", "Google Analytics", "Multiple Google Analytics tags detected", "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples#migrationInstructions", function (a) {
        var b = xf(a, ["Google Analytics"]), c = b.length, d = vf(b, "Code Version/Syntax", Gk.X.s),
            e = vf(b, "Code Version/Syntax", Gk.Za.s), f = vf(b, "Code Version/Syntax", "Universal with Display Features"), c = c - e.length, c = c - f.length, c = c - d.length;
        (a = M(a, "Detected more than one script containing _gaq and _gat variables.")) && a.label == c && (a.valueFormat = "hidden");
        return If(b) ? !1 : 1 < e.length || 1 < f.length || 1 < d.length || 1 < c
    }), Fg("Warning", "Google Analytics", "Same web property ID is tracked twice.", "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples", function (a) {
        a = xf(a, ["Google Analytics"]);
        return If(a)
    }), Ig("Google Analytics", function (a) {
        a = xf(a, ["Google Analytics"]);
        v(a, function (a) {
            Ef(a) && (N(a, "Missing ga.js script"), N(a, "Missing dc.js script"), N(a, "Missing urchin.js script"))
        })
    }), Ig("Google Analytics", function (a) {
        a = rf(a, ["Google Analytics"]);
        M(a, "No Google Analytics HTTP responses because opted out with extension.") && N(a, "No Google Analytics HTTP responses because opted out code detected.")
    }), Ig("Google Analytics", function (a) {
        a = rf(a, ["Google Analytics"]);
        M(a, "URL") && (N(a, "This extension may prevent Google Analytics from working correctly"),
            N(a, "No Google Analytics HTTP responses because opted out code detected."), N(a, "No Google Analytics HTTP responses because opted out with extension."))
    }), Ig("Google Analytics", function (a) {
        var b = Af(a, "_gat global object");
        v(b, function (b) {
            var d = b.relatedIssues;
            "working" == (Jf(d, "Error") ? "not-working" : Jf(d, "Warning") ? "working-with-warnings" : Jf(d, "Suggestion") ? "working-with-suggestions" : "working") && Za(a, b)
        })
    }), S(Fg("Suggestion", "Google Analytics", "Add Google Analytics", "http://support.google.com/analytics/bin/answer.py?answer=1008080",
        function (a) {
            return 0 == xf(a, ["Google Analytics", "Google Tag Manager"])
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#add_ga")]
};
fk.prototype.w = function () {
    var a = [];
    mb(Gk, function (b) {
        Xa(a, Mk(b))
    }, this);
    db(a, [S(new Mg("Warning", "Google Analytics", "No Google Analytics HTTP responses because opted out code detected.", "https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=de", 0, function (a) {
        return self === top && !a.externalScript && 'window["_gaUserPrefs"] = { ioo : function() { return true; } }' == a.textContent
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#opted_out"),
        S(new Mg("Error", "Google Analytics", "Detected both ga.js and dc.js scripts which will make tracking ambiguous.", "http://support.google.com/analytics/bin/answer.py?answer=1008080", 0, function (a) {
            if (a.scripts) {
                var c = w(a.scripts, function (a) {
                    return a.src && 0 < a.src.indexOf(Gk.Rc.U)
                });
                a = w(a.scripts, function (a) {
                    return a.src && 0 < a.src.indexOf(Gk.X.U)
                });
                return 0 < c.length && 0 < a.length
            }
            return!1
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_dc"), S(new Mg("Error", "Google Analytics",
            "Detected both ga.js and urchin.js scripts which can cause reporting errors.", "http://support.google.com/analytics/bin/answer.py?answer=1008080", 0, function (a) {
                if (a.scripts) {
                    var c = w(a.scripts, function (a) {
                        return a.src && 0 < a.src.indexOf(Gk.Rc.U)
                    });
                    a = w(a.scripts, function (a) {
                        return a.src && 0 < a.src.indexOf(Gk.Jc.U)
                    });
                    return 0 < c.length && 0 < a.length
                }
                return!1
            }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_urchin"), new Mg("Warning", "Google Analytics", "Detected more than one script containing _gaq and _gat variables.",
            "https://support.google.com/analytics/answer/1009683?hl=en", 0, function (a) {
                if (a.scripts)return a = Ua(a.scripts, function (a) {
                    var b = a.textContent && a.textContent.match(/(?:$|[. \t])_ga[qt]\s*=/);
                    this.infoLink = a.src;
                    return b
                }), 1 < a ? a.toString() : !1
            }), T(R(new Mg("Info", "Google Analytics", "_gat global object", "https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat", 0, function (a) {
            return J(/(?:^|[ ,;]|window\.)_gat\./g, a.textContent)
        }), "group_status"), [Wg, Tj()])]);
    return a
};
jh(new fk);
var Nk = function () {
    X.call(this, 0, 100);
    this.K = "Google Publisher Tag"
};
s(Nk, X);
var Ok = /googletag.(define(?:OutOfPage)?Slot\(.*?\))/g, Qk = function () {
    var a = [P("Document ID", r(Xf, /(['"]div[^)]+['"]?)[)]/)), P("Accepted sizes", r(Xf, /,\s*(\[?(?:\[\s*\d+\s*,\s*\d+\s*\]\s*,?\s*)+\]?)\s*,/)), P("Out of page", r(Xf, /defineOutOfPageSlot/))];
    return $g("Ad Slots", t("AdSlot ${%s}", "Document ID"), a, Pk)
}, Rk = R(P("Network ID", function (a) {
    for (var b = le("GooglePublisherConsole"), c = Ub("DIV", void 0, void 0), d = 0, e; e = c[d]; d++)J(/google_pubconsole/, e.id) && (e.style.display = b ? "block" : "none");
    return a.label ||
        "not set"
}), "copyable"), Pk = function (a) {
    a = J(Ok, a.textContent);
    this.b = Ok.lastIndex;
    return a
};
Nk.prototype.w = function () {
    return[T(ah("Google Publisher Tag", t("%s ${%s}", "Google Publisher Tag", "Network ID"), "https://support.google.com/dfp_premium/topic/28788?hl=en&ref_topic=28149", 0, function (a) {
        return!!a.textContent && J(/googletag\s*.\s*define(?:OutOfPage)?Slot\(\s*["']\/(\d+)\//g, a.textContent)
    }), [Rk, Xg, Qk()])]
};
Nk.prototype.A = function () {
    return[R(Dg(xg("Google Publisher Tag", "pubads.g.doubleclick.net/", t("%s ${%s}", "Google Publisher Tag", "Network ID"), "https://support.google.com/dfp_premium/topic/28788?hl=en&ref_topic=28149", function (a) {
        var b = Qe(L(a), "iu_parts");
        return!!b && ce(/pubads.g.doubleclick.net\/gampad\/ads/, a) && J(/(\d+)/, b)
    }, "", [Rk, sg, ug, Bg])), "unchecked")]
};
jh(new Nk);
var Sk = function () {
    X.call(this, 0, 99);
    this.K = "Ensighten"
};
s(Sk, X);
Sk.prototype.A = function () {
    return[Dg(xg("Ensighten", "nexus.ensighten.com/", "Ensighten", "http://www.ensighten.com/", r(ce, /nexus\.ensighten\.com\/([^\/]*)\//), "unchecked", [yg("Client ID", "ClientID"), yg("Page ID", "PageID"), vg("Rules", "Rule %s", function (a) {
        return Qe(L(a), "ruleId") || !1
    }, [Bg, sg, ug], void 0, "unchecked"), sg, ug, Bg]))]
};
Sk.prototype.w = ib([]);
Sk.prototype.J = A;
jh(new Sk);
var Tk = function () {
    X.call(this, 0, 99);
    this.K = "Krux SuperTag"
};
s(Tk, X);
var Uk = R(P("Configuration ID", function (a) {
    return a.label || "not set"
}), "copyable");
Tk.prototype.A = function () {
    return[R(Dg(xg("Krux SuperTag", "cdn.krxd.net/", "Krux SuperTag", "http://www.krux.com/", function (a) {
        return(a = Pe(Re(a.url)).get("confid")) ? a + "" : !1
    }, "", [Uk, sg, ug, Bg])), "unchecked")]
};
Tk.prototype.w = ib([]);
Tk.prototype.J = A;
jh(new Tk);
var Vk = function () {
    X.call(this, 0, 99);
    this.K = "Opentag"
};
s(Vk, X);
var Wk = R(P("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
Vk.prototype.A = function () {
    return[R(Dg(xg("Opentag", "cloudfront.net/", "Opentag", "http://www.opentag.com/", r(ce, /(opentag-[^.]*)\.js/i), "", [Wk, sg, ug, Bg])), "unchecked")]
};
Vk.prototype.w = ib([]);
Vk.prototype.J = A;
jh(new Vk);
var Xk = function () {
    X.call(this, 0, 99);
    this.K = "Tagcommander"
};
s(Xk, X);
var Yk = R(P("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
Xk.prototype.A = function () {
    return[R(Dg(xg("Tagcommander", "cdn.tagcommander.com", "Tagcommander", "http://www.tagcommander.com/", function (a) {
        return Ne(Re(a.url))
    }, "", [Yk, sg, ug, Bg])), "unchecked")]
};
Xk.prototype.w = ib([]);
Xk.prototype.J = A;
jh(new Xk);
var Zk = function () {
    X.call(this, 0, 99);
    this.K = "Tealium"
};
s(Zk, X);
var $k = R(P("Account", function (a) {
    return a.label || "not set"
}), "copyable");
Zk.prototype.A = function () {
    return[R(Dg(xg("Tealium", "tiqcdn.com/", "Tealium", "http://www.tealium.com/", r(ce, /utag\/([^\/]+)\//i), "", [$k, sg, ug, Bg])), "unchecked")]
};
Zk.prototype.w = ib([]);
Zk.prototype.J = A;
jh(new Zk);
var al = function () {
    X.call(this, 0, 99);
    this.K = "TagMan"
};
s(al, X);
var bl = P("Account", function (a) {
    return a.label || "not set"
});
al.prototype.A = function () {
    return[R(Dg(xg("TagMan", "levexis.com/", "TagMan", "http://www.tagman.com/", r(ce, /levexis\.com\/([^\/]*)\/tman.cgi/), "", [bl, sg, ug, Bg])), "unchecked")]
};
al.prototype.w = ib([]);
al.prototype.J = A;
jh(new al);
var cl = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
cl.prototype.n = function () {
    return new cl(this.top, this.right, this.bottom, this.left)
};
cl.prototype.toString = function () {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
cl.prototype.contains = function (a) {
    return this && a ? a instanceof cl ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
cl.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var dl = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
dl.prototype.n = function () {
    return new dl(this.left, this.top, this.width, this.height)
};
dl.prototype.toString = function () {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
dl.prototype.contains = function (a) {
    return a instanceof dl ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
dl.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var el = function (a, b) {
    var c = Sb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, fl = function (a, b) {
    return el(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, hl = function (a, b, c) {
    var d, e = Db && (xb || Fb) && F("1.9");
    b instanceof C ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = gl(d, e);
    a.style.top = gl(b, e)
}, il = function (a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return{left: 0, top: 0, right: 0, bottom: 0}
    }
    D && a.ownerDocument.body &&
    (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, jl = function (a) {
    if (D && !(D && 8 <= Kb))return a.offsetParent;
    var b = Sb(a), c = fl(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)if (c = fl(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
    return null
}, ml = function (a) {
    for (var b =
        new cl(0, Infinity, Infinity, 0), c = Tb(a), d = c.m.body, e = c.m.documentElement, f = Yb(c.m); a = jl(a);)if (!(D && 0 == a.clientWidth || E && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == fl(a, "overflow"))) {
        var g = kl(a), k;
        k = a;
        if (Db && !F("1.9")) {
            var l = parseFloat(el(k, "borderLeftWidth"));
            if (ll(k))var x = k.offsetWidth - k.clientWidth - l - parseFloat(el(k, "borderRightWidth")), l = l + x;
            k = new C(l, parseFloat(el(k, "borderTopWidth")))
        } else k = new C(k.clientLeft, k.clientTop);
        g.x += k.x;
        g.y += k.y;
        b.top = Math.max(b.top, g.y);
        b.right = Math.min(b.right,
                g.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
        b.left = Math.max(b.left, g.x)
    }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = (Zb(c.m) || window).document;
    c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
    c = new lb(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}, kl = function (a) {
    var b, c = Sb(a), d = fl(a, "position");
    Ma(a, "Parameter is required");
    var e = Db && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new C(0, 0), g;
    b = c ? Sb(c) : document;
    g = !D || D && 9 <= Kb || mc(Tb(b)) ? b.documentElement : b.body;
    if (a == g)return f;
    if (a.getBoundingClientRect)b = il(a), a = nc(Tb(c)), f.x = b.left + a.x, f.y = b.top + a.y; else if (c.getBoxObjectFor && !e)b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY; else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y +=
                b.clientTop || 0);
            if (E && "fixed" == fl(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (Cb || E && "absolute" == d)f.y -= c.body.offsetTop;
        for (b = a; (b = jl(b)) && b != c.body && b != g;)f.x -= b.scrollLeft, Cb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, ol = function (a, b) {
    var c = nl(a), d = nl(b);
    return new C(c.x - d.x, c.y - d.y)
}, ql = function (a) {
    var b;
    if (a.getBoundingClientRect)b = il(a), b = new C(b.left, b.top); else {
        b = nc(Tb(a));
        var c = kl(a);
        b = new C(c.x - b.x, c.y - b.y)
    }
    if (Db && !F(12)) {
        n:{
            c =
                Ga();
            if (void 0 === a.style[c] && (c = (E ? "Webkit" : Db ? "Moz" : D ? "ms" : Cb ? "O" : null) + Ha(), void 0 !== a.style[c])) {
                c = (E ? "-webkit" : Db ? "-moz" : D ? "-ms" : Cb ? "-o" : null) + "-transform";
                break n
            }
            c = "transform"
        }
        a = (a = fl(a, c) || fl(a, "transform")) ? (a = a.match(pl)) ? new C(parseFloat(a[1]), parseFloat(a[2])) : new C(0, 0) : new C(0, 0);
        a = new C(b.x + a.x, b.y + a.y)
    } else a = b;
    return a
}, nl = function (a) {
    u(a);
    if (1 == a.nodeType)return ql(a);
    var b = ga(a.Eb), c = a;
    a.targetTouches ? c = a.targetTouches[0] : b && a.Eb().targetTouches && (c = a.Eb().targetTouches[0]);
    return new C(c.clientX,
        c.clientY)
}, gl = function (a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, sl = function (a) {
    var b = rl;
    if ("none" != fl(a, "display"))return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}, rl = function (a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = E && !b && !c;
    return m(b) && !d || !a.getBoundingClientRect ? new lb(b, c) : (a = il(a), new lb(a.right - a.left, a.bottom - a.top))
}, tl = function (a) {
    var b =
        kl(a);
    a = sl(a);
    return new dl(b.x, b.y, a.width, a.height)
}, We = function (a, b) {
    a.style.display = b ? "" : "none"
}, ll = function (a) {
    return"rtl" == fl(a, "direction")
}, ul = Db ? "MozUserSelect" : E ? "WebkitUserSelect" : null, vl = function (a, b) {
    if (/^\d+px?$/.test(b))return parseInt(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}, wl = function (a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? vl(a, c) :
        0
}, xl = {thin: 2, medium: 4, thick: 6}, yl = function (a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in xl ? xl[c] : vl(a, c)
}, pl = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var zl = function (a) {
    if (a.classList)return a.classList;
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}, Al = function (a, b) {
    return a.classList ? a.classList.contains(b) : y(zl(a), b)
}, Bl = function (a, b) {
    a.classList ? a.classList.add(b) : Al(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, Cl = function (a, b) {
    if (a.classList)v(b, function (b) {
        Bl(a, b)
    }); else {
        var c = {};
        v(zl(a), function (a) {
            c[a] = !0
        });
        v(b, function (a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c)a.className += 0 < a.className.length ? " " + d : d
    }
}, Dl = function (a, b) {
    a.classList ?
        a.classList.remove(b) : Al(a, b) && (a.className = w(zl(a), function (a) {
        return a != b
    }).join(" "))
}, El = function (a, b) {
    a.classList ? v(b, function (b) {
        Dl(a, b)
    }) : a.className = w(zl(a), function (a) {
        return!y(b, a)
    }).join(" ")
};
var Hl = function (a, b, c, d, e) {
    if (!(D || E && F("525")))return!0;
    if (xb && e)return Fl(a);
    if (e && !d)return!1;
    fa(b) && (b = Gl(b));
    if (!c && (17 == b || 18 == b || xb && 91 == b))return!1;
    if (E && d && c)switch (a) {
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
    if (D && d && b == a)return!1;
    switch (a) {
        case 13:
            return!(D && D && 9 <= Kb);
        case 27:
            return!E
    }
    return Fl(a)
}, Fl = function (a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a)return!0;
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
}, Gl = function (a) {
    if (Db)a = Il(a); else if (xb && E)t:switch (a) {
        case 93:
            a = 91;
            break t
    }
    return a
}, Il = function (a) {
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
var Jl = function () {
    this.ba = new wd(this);
    this.rd = this
};
s(Jl, id);
Jl.prototype[rd] = !0;
h = Jl.prototype;
h.vb = null;
h.Qb = function (a) {
    this.vb = a
};
h.addEventListener = function (a, b, c, d) {
    Cd(this, a, b, c, d)
};
h.removeEventListener = function (a, b, c, d) {
    Id(this, a, b, c, d)
};
h.dispatchEvent = function (a) {
    Kl(this);
    var b, c = this.vb;
    if (c) {
        b = [];
        for (var d = 1; c; c = c.vb)b.push(c), u(1E3 > ++d, "infinite loop")
    }
    c = this.rd;
    d = a.type || a;
    if (q(a))a = new ld(a, c); else if (a instanceof ld)a.target = a.target || c; else {
        var e = a;
        a = new ld(d, c);
        qb(a, e)
    }
    var e = !0, f;
    if (b)for (var g = b.length - 1; !a.xa && 0 <= g; g--)f = a.currentTarget = b[g], e = Ll(f, d, !0, a) && e;
    a.xa || (f = a.currentTarget = c, e = Ll(f, d, !0, a) && e, a.xa || (e = Ll(f, d, !1, a) && e));
    if (b)for (g = 0; !a.xa && g < b.length; g++)f = a.currentTarget = b[g], e = Ll(f, d, !1, a) && e;
    return e
};
h.k = function () {
    Jl.d.k.call(this);
    this.ba && this.ba.removeAll(void 0);
    this.vb = null
};
h.listen = function (a, b, c, d) {
    Kl(this);
    return this.ba.add(String(a), b, !1, c, d)
};
h.ca = function (a, b, c, d) {
    return this.ba.remove(String(a), b, c, d)
};
var Ll = function (a, b, c, d) {
    b = a.ba.B[String(b)];
    if (!b)return!0;
    b = cb(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.removed && g.xb == c) {
            var k = g.wa, l = g.Bb || g.src;
            g.yb && yd(a.ba, g);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && !1 != d.Lc
};
Jl.prototype.ab = function (a, b, c, d) {
    return this.ba.ab(String(a), b, c, d)
};
var Kl = function (a) {
    u(a.ba, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Nl = function (a, b) {
    Jl.call(this);
    a && Ml(this, a, b)
};
s(Nl, Jl);
h = Nl.prototype;
h.l = null;
h.zb = null;
h.Wb = null;
h.Ab = null;
h.H = -1;
h.ja = -1;
h.bc = !1;
var Ol = {3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45}, Pl = {Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45}, Ql = D || E && F("525"), Rl = xb && Db;
Nl.prototype.kd = function (a) {
    E && (17 == this.H && !a.ctrlKey || 18 == this.H && !a.altKey || xb && 91 == this.H && !a.metaKey) && (this.ja = this.H = -1);
    -1 == this.H && (a.ctrlKey && 17 != a.keyCode ? this.H = 17 : a.altKey && 18 != a.keyCode ? this.H = 18 : a.metaKey && 91 != a.keyCode && (this.H = 91));
    Ql && !Hl(a.keyCode, this.H, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ja = Gl(a.keyCode), Rl && (this.bc = a.altKey))
};
Nl.prototype.ld = function (a) {
    this.ja = this.H = -1;
    this.bc = a.altKey
};
Nl.prototype.handleEvent = function (a) {
    var b = a.Eb(), c, d, e = b.altKey;
    D && "keypress" == a.type ? (c = this.ja, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.ja, d = 0 <= b.charCode && 63232 > b.charCode && Fl(c) ? b.charCode : 0) : Cb ? (c = this.ja, d = Fl(c) ? b.keyCode : 0) : (c = b.keyCode || this.ja, d = b.charCode || 0, Rl && (e = this.bc), xb && 63 == d && 224 == c && (c = 191));
    var f = c = Gl(c), g = b.keyIdentifier;
    c ? 63232 <= c && c in Ol ? f = Ol[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Pl && (f = Pl[g]);
    a = f == this.H;
    this.H = f;
    b = new Sl(f, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
};
Nl.prototype.c = function () {
    return this.l
};
var Ml = function (a, b, c) {
    a.Ab && a.detach();
    a.l = b;
    a.zb = Cd(a.l, "keypress", a, c);
    a.Wb = Cd(a.l, "keydown", a.kd, c, a);
    a.Ab = Cd(a.l, "keyup", a.ld, c, a)
};
Nl.prototype.detach = function () {
    this.zb && (Jd(this.zb), Jd(this.Wb), Jd(this.Ab), this.Ab = this.Wb = this.zb = null);
    this.l = null;
    this.ja = this.H = -1
};
Nl.prototype.k = function () {
    Nl.d.k.call(this);
    this.detach()
};
var Sl = function (a, b, c, d) {
    od.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
};
s(Sl, od);
var Tl, Ul = {Dd: "activedescendant", Id: "atomic", Jd: "autocomplete", Ld: "busy", Pd: "checked", Vd: "controls", Yd: "describedby", ae: "disabled", ce: "dropeffect", ee: "expanded", fe: "flowto", he: "grabbed", le: "haspopup", ne: "hidden", qe: "invalid", se: "label", te: "labelledby", ue: "level", ze: "live", Le: "multiline", Me: "multiselectable", Re: "orientation", Se: "owns", Te: "posinset", Ve: "pressed", $e: "readonly", bf: "relevant", cf: "required", jf: "selected", lf: "setsize", pf: "sort", Cf: "valuemax", Df: "valuemin", Ef: "valuenow", Ff: "valuetext"};
var Vl = {Ed: "alert", Fd: "alertdialog", Gd: "application", Hd: "article", Kd: "banner", Md: "button", Od: "checkbox", Rd: "columnheader", Sd: "combobox", Td: "complementary", Ud: "contentinfo", Xd: "definition", Zd: "dialog", $d: "directory", be: "document", ge: "form", ie: "grid", je: "gridcell", ke: "group", me: "heading", pe: "img", ve: "link", we: "list", xe: "listbox", ye: "listitem", Ae: "log", Be: "main", Ee: "marquee", Fe: "math", Ge: "menu", He: "menubar", Ie: "menuitem", Je: "menuitemcheckbox", Ke: "menuitemradio", Ne: "navigation", Oe: "note", Qe: "option",
    Ue: "presentation", Xe: "progressbar", Ye: "radio", Ze: "radiogroup", af: "region", df: "row", ef: "rowgroup", ff: "rowheader", gf: "scrollbar", hf: "search", kf: "separator", of: "slider", qf: "spinbutton", rf: "status", sf: "tab", tf: "tablist", uf: "tabpanel", vf: "textbox", wf: "timer", xf: "toolbar", yf: "tooltip", zf: "tree", Af: "treegrid", Bf: "treeitem"};
var Wl = function (a, b) {
    b ? (u(ob(Vl, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
}, Xl = function (a, b, c) {
    ea(c) && (c = c.join(" "));
    var d;
    u(b, "ARIA attribute cannot be empty.");
    u(ob(Ul, b), "No such ARIA attribute " + b);
    d = "aria-" + b;
    "" === c || void 0 == c ? (Tl || (Tl = {atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false"}),
        c = Tl, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};
var Yl = function (a) {
    this.Oa = a;
    this.i = {}
};
s(Yl, id);
var Zl = [];
h = Yl.prototype;
h.listen = function (a, b, c, d) {
    p(b) || (b && (Zl[0] = b.toString()), b = Zl);
    for (var e = 0; e < b.length; e++) {
        var f = Cd(a, b[e], c || this.handleEvent, d || !1, this.Oa || this);
        if (!f)break;
        this.i[f.key] = f
    }
    return this
};
h.ca = function (a, b, c, d, e) {
    if (p(b))for (var f = 0; f < b.length; f++)this.ca(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.Oa || this, c = Dd(c), d = !!d, b = sd(a) ? a.ab(b, c, d, e) : a ? (a = Ed(a)) ? a.ab(b, c, d, e) : null : null, b && (Jd(b), delete this.i[b.key]);
    return this
};
h.removeAll = function () {
    mb(this.i, Jd);
    this.i = {}
};
h.k = function () {
    Yl.d.k.call(this);
    this.removeAll()
};
h.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
var $l = function () {
};
ca($l);
$l.prototype.fd = 0;
var bm = function (a) {
    Jl.call(this);
    this.Ca = a || Tb();
    this.Na = am
};
s(bm, Jl);
bm.prototype.ed = $l.o();
var am = null, cm = function (a, b) {
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
h = bm.prototype;
h.V = null;
h.P = !1;
h.l = null;
h.Na = null;
h.ea = null;
h.mb = null;
h.oa = null;
h.tc = !1;
var dm = function (a, b) {
    if (a.ea && a.ea.oa) {
        var c = a.ea.oa, d = a.V;
        d in c && delete c[d];
        c = a.ea.oa;
        if (b in c)throw Error('The object already contains the key "' + b + '"');
        c[b] = a
    }
    a.V = b
};
bm.prototype.c = function () {
    return this.l
};
var em = function (a) {
    a.ra || (a.ra = new Yl(a));
    return a.ra
};
h = bm.prototype;
h.Qb = function (a) {
    if (this.ea && this.ea != a)throw Error("Method not supported");
    bm.d.Qb.call(this, a)
};
h.nb = function () {
    return this.Ca
};
h.v = function () {
    this.l = this.Ca.createElement("div")
};
h.Q = function (a) {
    if (this.P)throw Error("Component already rendered");
    if (a && this.Ua(a)) {
        this.tc = !0;
        var b = Sb(a);
        this.Ca && this.Ca.m == b || (this.Ca = Tb(a));
        this.Mc(a);
        this.ya()
    } else throw Error("Invalid element to decorate");
};
h.Ua = function () {
    return!0
};
h.Mc = function (a) {
    this.l = a
};
h.ya = function () {
    this.P = !0;
    fm(this, function (a) {
        !a.P && a.c() && a.ya()
    })
};
h.Ja = function () {
    fm(this, function (a) {
        a.P && a.Ja()
    });
    this.ra && this.ra.removeAll();
    this.P = !1
};
h.k = function () {
    this.P && this.Ja();
    this.ra && (this.ra.Aa(), delete this.ra);
    fm(this, function (a) {
        a.Aa()
    });
    !this.tc && this.l && cc(this.l);
    this.ea = this.l = this.oa = this.mb = null;
    bm.d.k.call(this)
};
h.R = function () {
    return this.l
};
h.Ba = function (a) {
    if (this.P)throw Error("Component already rendered");
    this.Na = a
};
var fm = function (a, b) {
    a.mb && v(a.mb, b, void 0)
};
bm.prototype.removeChild = function (a, b) {
    if (a) {
        var c = q(a) ? a : a.V || (a.V = ":" + (a.ed.fd++).toString(36)), d;
        this.oa && c ? (d = this.oa, d = (c in d ? d[c] : void 0) || null) : d = null;
        a = d;
        if (c && a) {
            d = this.oa;
            c in d && delete d[c];
            Za(this.mb, a);
            b && (a.Ja(), a.l && cc(a.l));
            c = a;
            if (null == c)throw Error("Unable to set parent component");
            c.ea = null;
            bm.d.Qb.call(c, null)
        }
    }
    if (!a)throw Error("Child is not in parent component");
    return a
};
var gm = function () {
}, hm;
ca(gm);
var im = {button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected"};
h = gm.prototype;
h.Va = function () {
};
h.v = function (a) {
    var b = a.nb().v("div", jm(this, a).join(" "), a.da);
    km(this, a, b);
    return b
};
h.R = function (a) {
    return a
};
h.Ra = function (a, b, c) {
    if (a = a.c ? a.c() : a)if (D && !F("7")) {
        var d = lm(Nb(a), b);
        d.push(b);
        r(c ? Ob : Qb, a).apply(null, d)
    } else c ? Ob(a, b) : Qb(a, b)
};
h.Ua = function () {
    return!0
};
h.Q = function (a, b) {
    b.id && dm(a, b.id);
    var c = this.R(b);
    c && c.firstChild ? mm(a, c.firstChild.nextSibling ? cb(c.childNodes) : c.firstChild) : a.da = null;
    var d = 0, e = this.r(), f = this.r(), g = !1, k = !1, c = !1, l = Nb(b);
    v(l, function (a) {
        if (g || a != e)if (k || a != f) {
            var b = d;
            if (!this.Ec) {
                this.tb || nm(this);
                var c = this.tb, l = {}, n;
                for (n in c)l[c[n]] = n;
                this.Ec = l
            }
            a = parseInt(this.Ec[a], 10);
            d = b | (isNaN(a) ? 0 : a)
        } else k = !0; else g = !0, f == e && (k = !0)
    }, this);
    a.j = d;
    g || (l.push(e), f == e && (k = !0));
    k || l.push(f);
    var x = a.M;
    x && l.push.apply(l, x);
    if (D && !F("7")) {
        var n =
            lm(l);
        0 < n.length && (l.push.apply(l, n), c = !0)
    }
    if (!g || !k || x || c)b.className = l.join(" ");
    km(this, a, b);
    return b
};
h.Ac = function (a) {
    null == a.Na && (a.Na = ll(a.P ? a.l : a.Ca.m.body));
    a.Na && this.Ba(a.c(), !0);
    a.isEnabled() && this.ib(a, a.Z)
};
var om = function (a, b, c) {
    if (a = c || a.Va())u(b, "The element passed as a first parameter cannot be null."), c = b.getAttribute("role") || null, a != c && Wl(b, a)
}, km = function (a, b, c) {
    u(b);
    u(c);
    b.Z || Xl(c, "hidden", !b.Z);
    b.isEnabled() || a.S(c, 1, !b.isEnabled());
    b.u & 8 && a.S(c, 8, !!(b.j & 8));
    b.u & 16 && a.S(c, 16, !!(b.j & 16));
    b.u & 64 && a.S(c, 64, !!(b.j & 64))
};
h = gm.prototype;
h.Ma = function (a, b) {
    var c = !b, d = D || Cb ? a.getElementsByTagName("*") : null;
    if (ul) {
        if (c = c ? "none" : "", a.style[ul] = c, d)for (var e = 0, f; f = d[e]; e++)f.style[ul] = c
    } else if (D || Cb)if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)for (e = 0; f = d[e]; e++)f.setAttribute("unselectable", c)
};
h.Ba = function (a, b) {
    this.Ra(a, this.r() + "-rtl", b)
};
h.ac = function (a) {
    var b;
    return a.u & 32 && (b = a.pa()) ? hc(b) && ic(b) : !1
};
h.ib = function (a, b) {
    var c;
    if (a.u & 32 && (c = a.pa())) {
        if (!b && a.j & 32) {
            try {
                c.blur()
            } catch (d) {
            }
            a.j & 32 && a.wc()
        }
        (hc(c) && ic(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
};
h.Nb = function (a, b) {
    We(a, b);
    a && Xl(a, "hidden", !b)
};
h.D = function (a, b, c) {
    var d = a.c();
    if (d) {
        var e = pm(this, b);
        e && this.Ra(a, e, c);
        this.S(d, b, c)
    }
};
h.S = function (a, b, c) {
    hm || (hm = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
    u(a, "The element passed as a first parameter cannot be null.");
    b = hm[b];
    var d = a.getAttribute("role") || null;
    d && (d = im[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && Xl(a, b, c)
};
h.Sb = function (a, b) {
    var c = this.R(a);
    if (c && (bc(c), b))if (q(b))ec(c, b); else {
        var d = function (a) {
            if (a) {
                var b = Sb(c);
                c.appendChild(q(a) ? b.createTextNode(a) : a)
            }
        };
        p(b) ? v(b, d) : !ea(b) || "nodeType"in b ? d(b) : v(cb(b), d)
    }
};
h.pa = function (a) {
    return a.c()
};
h.r = function () {
    return"goog-control"
};
var jm = function (a, b) {
    var c = a.r(), d = [c], e = a.r();
    e != c && d.push(e);
    c = b.j;
    for (e = []; c;) {
        var f = c & -c;
        e.push(pm(a, f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.M) && d.push.apply(d, c);
    D && !F("7") && d.push.apply(d, lm(d));
    return d
}, lm = function (a, b) {
    var c = [];
    b && (a = a.concat([b]));
    v([], function (d) {
        !Ta(d, r(y, a)) || b && !y(d, b) || c.push(d.join("_"))
    });
    return c
}, pm = function (a, b) {
    a.tb || nm(a);
    return a.tb[b]
}, nm = function (a) {
    var b = a.r();
    a.tb = {1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b +
        "-open"}
};
var qm = function () {
};
s(qm, gm);
ca(qm);
h = qm.prototype;
h.Va = function () {
    return"button"
};
h.S = function (a, b, c) {
    switch (b) {
        case 8:
        case 16:
            u(a, "The button DOM element cannot be null.");
            Xl(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            qm.d.S.call(this, a, b, c)
    }
};
h.v = function (a) {
    var b = qm.d.v.call(this, a);
    this.hb(b, a.Ia());
    var c = a.ma();
    c && this.Ka(b, c);
    a.u & 16 && this.S(b, 16, !!(a.j & 16));
    return b
};
h.Q = function (a, b) {
    b = qm.d.Q.call(this, a, b);
    var c = this.ma(b);
    a.Jb = c;
    a.f = this.Ia(b);
    a.u & 16 && this.S(b, 16, !!(a.j & 16));
    return b
};
h.ma = ba;
h.Ka = ba;
h.Ia = function (a) {
    return a.title
};
h.hb = function (a, b) {
    a && b && (a.title = b)
};
h.r = function () {
    return"goog-button"
};
var sm = function (a, b) {
    if (!a)throw Error("Invalid class name " + a);
    if (!ga(b))throw Error("Invalid decorator function " + b);
    rm[a] = b
}, tm = {}, rm = {};
var $ = function (a, b, c) {
    bm.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ka(b);
            if (d = tm[d])break;
            b = b.d ? b.d.constructor : null
        }
        b = d ? ga(d.o) ? d.o() : new d : null
    }
    this.e = b;
    this.da = m(a) ? a : null
};
s($, bm);
h = $.prototype;
h.da = null;
h.j = 0;
h.u = 39;
h.Sa = 255;
h.jd = 0;
h.Z = !0;
h.M = null;
h.Ob = !0;
h.lb = !1;
h.Bc = null;
var vm = function (a) {
    a.P && !1 != a.Ob && um(a, !1);
    a.Ob = !1
};
h = $.prototype;
h.pa = function () {
    return this.e.pa(this)
};
h.Ra = function (a, b) {
    b ? a && (this.M ? y(this.M, a) || this.M.push(a) : this.M = [a], this.e.Ra(this, a, !0)) : a && this.M && Za(this.M, a) && (0 == this.M.length && (this.M = null), this.e.Ra(this, a, !1))
};
h.v = function () {
    var a = this.e.v(this);
    this.l = a;
    om(this.e, a, this.Bc);
    this.lb || this.e.Ma(a, !1);
    this.Z || this.e.Nb(a, !1)
};
h.R = function () {
    return this.e.R(this.c())
};
h.Ua = function (a) {
    return this.e.Ua(a)
};
h.Mc = function (a) {
    this.l = a = this.e.Q(this, a);
    om(this.e, a, this.Bc);
    this.lb || this.e.Ma(a, !1);
    this.Z = "none" != a.style.display
};
h.ya = function () {
    $.d.ya.call(this);
    this.e.Ac(this);
    if (this.u & -2 && (this.Ob && um(this, !0), this.u & 32)) {
        var a = this.pa();
        if (a) {
            var b = this.za || (this.za = new Nl);
            Ml(b, a);
            em(this).listen(b, "key", this.cd).listen(a, "focus", this.bd).listen(a, "blur", this.wc)
        }
    }
};
var um = function (a, b) {
    var c = em(a), d = a.c();
    b ? (c.listen(d, "mouseover", a.Hc).listen(d, "mousedown", a.ob).listen(d, "mouseup", a.pb).listen(d, "mouseout", a.Gc), a.ub != ba && c.listen(d, "contextmenu", a.ub), D && c.listen(d, "dblclick", a.Fc)) : (c.ca(d, "mouseover", a.Hc).ca(d, "mousedown", a.ob).ca(d, "mouseup", a.pb).ca(d, "mouseout", a.Gc), a.ub != ba && c.ca(d, "contextmenu", a.ub), D && c.ca(d, "dblclick", a.Fc))
};
$.prototype.Ja = function () {
    $.d.Ja.call(this);
    this.za && this.za.detach();
    this.Z && this.isEnabled() && this.e.ib(this, !1)
};
$.prototype.k = function () {
    $.d.k.call(this);
    this.za && (this.za.Aa(), delete this.za);
    delete this.e;
    this.M = this.da = null
};
$.prototype.Sb = function (a) {
    this.e.Sb(this.c(), a);
    this.da = a
};
var mm = function (a, b) {
    a.da = b
}, wm = function (a) {
    a = a.da;
    if (!a)return"";
    if (!q(a))if (p(a))a = Ra(a, kc).join(""); else {
        if (Mb && "innerText"in a)a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            jc(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Mb || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""))
    }
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
$.prototype.Ba = function (a) {
    $.d.Ba.call(this, a);
    var b = this.c();
    b && this.e.Ba(b, a)
};
$.prototype.Ma = function (a) {
    this.lb = a;
    var b = this.c();
    b && this.e.Ma(b, a)
};
$.prototype.Nb = function (a, b) {
    if (b || this.Z != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.c();
        c && this.e.Nb(c, a);
        this.isEnabled() && this.e.ib(this, a);
        this.Z = a;
        return!0
    }
    return!1
};
$.prototype.isEnabled = function () {
    return!(this.j & 1)
};
var ym = function (a, b) {
    xm(a, 2, b) && a.D(2, b)
};
$.prototype.J = function () {
    return!!(this.j & 4)
};
$.prototype.setActive = function (a) {
    xm(this, 4, a) && this.D(4, a)
};
$.prototype.Fb = function (a) {
    xm(this, 32, a) && this.D(32, a)
};
$.prototype.D = function (a, b) {
    this.u & a && b != !!(this.j & a) && (this.e.D(this, a, b), this.j = b ? this.j | a : this.j & ~a)
};
var zm = function (a) {
    if (a.P && a.j & 32)throw Error("Component already rendered");
    a.j & 32 && a.D(32, !1);
    a.u &= -33
}, Am = function (a, b) {
    return!!(a.Sa & b) && !!(a.u & b)
}, xm = function (a, b, c) {
    return!!(a.u & b) && !!(a.j & b) != c && (!(a.jd & b) || a.dispatchEvent(cm(b, c))) && !a.Xb
};
h = $.prototype;
h.Hc = function (a) {
    (!a.relatedTarget || !dc(this.c(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Am(this, 2) && ym(this, !0)
};
h.Gc = function (a) {
    a.relatedTarget && dc(this.c(), a.relatedTarget) || !this.dispatchEvent("leave") || (Am(this, 4) && this.setActive(!1), Am(this, 2) && ym(this, !1))
};
h.ub = ba;
h.ob = function (a) {
    this.isEnabled() && (Am(this, 2) && ym(this, !0), !qd(a) || E && xb && a.ctrlKey || (Am(this, 4) && this.setActive(!0), this.e.ac(this) && this.pa().focus()));
    this.lb || !qd(a) || E && xb && a.ctrlKey || a.preventDefault()
};
h.pb = function (a) {
    this.isEnabled() && (Am(this, 2) && ym(this, !0), this.J() && this.$a(a) && Am(this, 4) && this.setActive(!1))
};
h.Fc = function (a) {
    this.isEnabled() && this.$a(a)
};
h.$a = function (a) {
    if (Am(this, 16)) {
        var b = !(this.j & 16);
        xm(this, 16, b) && this.D(16, b)
    }
    Am(this, 8) && xm(this, 8, !0) && this.D(8, !0);
    Am(this, 64) && (b = !(this.j & 64), xm(this, 64, b) && this.D(64, b));
    b = new ld("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.$b = a.$b);
    return this.dispatchEvent(b)
};
h.bd = function () {
    Am(this, 32) && this.Fb(!0)
};
h.wc = function () {
    Am(this, 4) && this.setActive(!1);
    Am(this, 32) && this.Fb(!1)
};
h.cd = function (a) {
    return this.Z && this.isEnabled() && this.Vb(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
h.Vb = function (a) {
    return 13 == a.keyCode && this.$a(a)
};
if (!ga($))throw Error("Invalid component class " + $);
if (!ga(gm))throw Error("Invalid renderer class " + gm);
var Bm = ka($);
tm[Bm] = gm;
sm("goog-control", function () {
    return new $(null)
});
var Cm = function () {
};
s(Cm, qm);
ca(Cm);
h = Cm.prototype;
h.Va = function () {
};
h.v = function (a) {
    vm(a);
    a.Sa &= -256;
    zm(a);
    return a.nb().v("button", {"class": jm(this, a).join(" "), disabled: !a.isEnabled(), title: a.Ia() || "", value: a.ma() || ""}, wm(a) || "")
};
h.Ua = function (a) {
    return"BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
h.Q = function (a, b) {
    vm(a);
    a.Sa &= -256;
    zm(a);
    if (b.disabled) {
        var c = La(pm(this, 1));
        Bl(b, c)
    }
    return Cm.d.Q.call(this, a, b)
};
h.Ac = function (a) {
    em(a).listen(a.c(), "click", a.$a)
};
h.Ma = ba;
h.Ba = ba;
h.ac = function (a) {
    return a.isEnabled()
};
h.ib = ba;
h.D = function (a, b, c) {
    Cm.d.D.call(this, a, b, c);
    (a = a.c()) && 1 == b && (a.disabled = c)
};
h.ma = function (a) {
    return a.value
};
h.Ka = function (a, b) {
    a && (a.value = b)
};
h.S = ba;
var Dm = function (a, b, c) {
    $.call(this, a, b || Cm.o(), c)
};
s(Dm, $);
h = Dm.prototype;
h.ma = function () {
    return this.Jb
};
h.Ka = function (a) {
    this.Jb = a;
    this.e.Ka(this.c(), a)
};
h.Ia = function () {
    return this.f
};
h.hb = function (a) {
    this.f = a;
    this.e.hb(this.c(), a)
};
h.k = function () {
    Dm.d.k.call(this);
    delete this.Jb;
    delete this.f
};
h.ya = function () {
    Dm.d.ya.call(this);
    if (this.u & 32) {
        var a = this.pa();
        a && em(this).listen(a, "keyup", this.Vb)
    }
};
h.Vb = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.$a(a) : 32 == a.keyCode
};
sm("goog-button", function () {
    return new Dm(null)
});
var Em = function (a, b, c) {
    if (ga(a))c && (a = oa(a, c)); else if (a && "function" == typeof a.handleEvent)a = oa(a.handleEvent, a); else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : aa.setTimeout(a, b || 0)
};
var Fm = function (a, b, c) {
    this.Tb = a;
    this.qd = b || 0;
    this.Oa = c;
    this.pd = oa(this.td, this)
};
s(Fm, id);
h = Fm.prototype;
h.V = 0;
h.k = function () {
    Fm.d.k.call(this);
    this.stop();
    delete this.Tb;
    delete this.Oa
};
h.start = function (a) {
    this.stop();
    this.V = Em(this.pd, m(a) ? a : this.qd)
};
h.stop = function () {
    this.J() && aa.clearTimeout(this.V);
    this.V = 0
};
h.J = function () {
    return 0 != this.V
};
h.td = function () {
    this.V = 0;
    this.Tb && this.Tb.call(this.Oa)
};
var Gm = function (a) {
    var b;
    if (a = a.offsetParent) {
        var c = "HTML" == a.tagName || "BODY" == a.tagName;
        c && "static" == fl(a, "position") || (b = kl(a), c || (c = (c = ll(a)) && Db ? -a.scrollLeft : !c || D && F("8") || "visible" == fl(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = kb(b, new C(c, a.scrollTop))))
    }
    return b || new C
}, Hm = function (a, b) {
    return(b & 4 && ll(a) ? b ^ 2 : b) & -5
};
var Im = function () {
};
Im.prototype.vc = function () {
};
var Jm = function (a, b) {
    this.Hb = a;
    this.hd = !!b;
    this.Pc = {0: this.Hb + "-arrowright", 1: this.Hb + "-arrowup", 2: this.Hb + "-arrowdown", 3: this.Hb + "-arrowleft"}
};
s(Jm, Im);
h = Jm.prototype;
h.ic = !1;
h.Lb = 2;
h.uc = 20;
h.Mb = 3;
h.Ic = null;
h.Kb = -5;
h.vc = function (a, b, c) {
    u(this.sc, "Must call setElements first.");
    a = this.Lb;
    2 == a && (a = 0);
    Km(this, this.Mb, a, 2 == this.Lb ? Lm(this.Mb) ? this.T.offsetHeight / 2 : this.T.offsetWidth / 2 : this.uc, c)
};
var Km = function (a, b, c, d, e, f) {
    if (a.na) {
        var g = Mm(b, c), k, l = a.na, x = a.T, n = a.Ic;
        k = sl(l);
        t:{
            k = (Lm(b) ? k.height / 2 : k.width / 2) - d;
            var z = Hm(l, g);
            if (n)n = n.n(), x && (x = Gm(x), n.left += x.x, n.right += x.x, n.top += x.y, n.bottom += x.y); else if (n = ml(l), !n)break t;
            l = tl(l);
            l = new cl(l.top, l.left + l.width, l.top + l.height, l.left);
            Lm(b) ? l.top < n.top && !(z & 1) ? k -= n.top - l.top : l.bottom > n.bottom && z & 1 && (k -= l.bottom - n.bottom) : l.left < n.left && !(z & 2) ? k -= n.left - l.left : l.right > n.right && z & 2 && (k -= l.right - n.right)
        }
        l = Lm(b) ? new C(a.Kb, k) : new C(k, a.Kb);
        z = Lm(b) ? 6 : 9;
        k = b ^ 3;
        Lm(b) && "rtl" == a.na.dir && (k = b);
        var n = a.na, yb = Mm(k, c);
        k = a.T;
        z = a.ic ? z : 0;
        x = a.Ic;
        u(k);
        var I = Gm(k), Y = tl(n), la = ml(n);
        if (la) {
            var sa = new dl(la.left, la.top, la.right - la.left, la.bottom - la.top), la = Math.max(Y.left, sa.left), ab = Math.min(Y.left + Y.width, sa.left + sa.width);
            if (la <= ab) {
                var Ab = Math.max(Y.top, sa.top), sa = Math.min(Y.top + Y.height, sa.top + sa.height);
                Ab <= sa && (Y.left = la, Y.top = Ab, Y.width = ab - la, Y.height = sa - Ab)
            }
        }
        la = Tb(n);
        Ab = Tb(k);
        if (la.m != Ab.m) {
            var ab = la.m.body, Ab = Zb(Ab.m), sa = new C(0, 0), Bb;
            Bb = (Bb =
                Sb(ab)) ? Zb(Bb) : window;
            var wg = ab;
            do {
                var Uj = Bb == Ab ? kl(wg) : ql(u(wg));
                sa.x += Uj.x;
                sa.y += Uj.y
            } while (Bb && Bb != Ab && (wg = Bb.frameElement) && (Bb = Bb.parent));
            ab = kb(sa, kl(ab));
            D && !mc(la) && (ab = kb(ab, nc(la)));
            Y.left += ab.x;
            Y.top += ab.y
        }
        n = Hm(n, yb);
        yb = new C(n & 2 ? Y.left + Y.width : Y.left, n & 1 ? Y.top + Y.height : Y.top);
        yb = kb(yb, I);
        l && (yb.x += (n & 2 ? -1 : 1) * l.x, yb.y += (n & 1 ? -1 : 1) * l.y);
        var B;
        if (z)if (x)B = x; else if (B = ml(k))B.top -= I.y, B.right -= I.x, B.bottom -= I.y, B.left -= I.x;
        t:{
            n = B;
            l = yb.n();
            B = 0;
            I = Hm(k, g);
            x = sl(k);
            g = x.n();
            if (e || 0 != I)I & 2 ? l.x -= g.width +
                (e ? e.right : 0) : e && (l.x += e.left), I & 1 ? l.y -= g.height + (e ? e.bottom : 0) : e && (l.y += e.top);
            if (z && (n ? (B = l, I = 0, 65 == (z & 65) && (B.x < n.left || B.x >= n.right) && (z &= -2), 132 == (z & 132) && (B.y < n.top || B.y >= n.bottom) && (z &= -5), B.x < n.left && z & 1 && (B.x = n.left, I |= 1), B.x < n.left && B.x + g.width > n.right && z & 16 && (g.width = Math.max(g.width - (B.x + g.width - n.right), 0), I |= 4), B.x + g.width > n.right && z & 1 && (B.x = Math.max(n.right - g.width, n.left), I |= 1), z & 2 && (I = I | (B.x < n.left ? 16 : 0) | (B.x + g.width > n.right ? 32 : 0)), B.y < n.top && z & 4 && (B.y = n.top, I |= 2), B.y <= n.top && B.y +
                g.height < n.bottom && z & 32 && (g.height = Math.max(g.height - (n.top - B.y), 0), B.y = n.top, I |= 8), B.y >= n.top && B.y + g.height > n.bottom && z & 32 && (g.height = Math.max(g.height - (B.y + g.height - n.bottom), 0), I |= 8), B.y + g.height > n.bottom && z & 4 && (B.y = Math.max(n.bottom - g.height, n.top), I |= 2), z & 8 && (I = I | (B.y < n.top ? 64 : 0) | (B.y + g.height > n.bottom ? 128 : 0)), B = I) : B = 256, B & 496)) {
                k = B;
                break t
            }
            hl(k, l);
            x == g || x && g && x.width == g.width && x.height == g.height || (l = mc(Tb(Sb(k))), !D || l && F("8") ? (k = k.style, Db ? k.MozBoxSizing = "border-box" : E ? k.WebkitBoxSizing = "border-box" :
                k.boxSizing = "border-box", k.width = Math.max(g.width, 0) + "px", k.height = Math.max(g.height, 0) + "px") : (z = k.style, l ? (D ? (l = wl(k, "paddingLeft"), n = wl(k, "paddingRight"), x = wl(k, "paddingTop"), I = wl(k, "paddingBottom"), l = new cl(x, n, I, l)) : (l = el(k, "paddingLeft"), n = el(k, "paddingRight"), x = el(k, "paddingTop"), I = el(k, "paddingBottom"), l = new cl(parseFloat(x), parseFloat(n), parseFloat(I), parseFloat(l))), !D || D && 9 <= Kb ? (n = el(k, "borderLeftWidth"), x = el(k, "borderRightWidth"), I = el(k, "borderTopWidth"), k = el(k, "borderBottomWidth"), k = new cl(parseFloat(I),
                parseFloat(x), parseFloat(k), parseFloat(n))) : (n = yl(k, "borderLeft"), x = yl(k, "borderRight"), I = yl(k, "borderTop"), k = yl(k, "borderBottom"), k = new cl(I, x, k, n)), z.pixelWidth = g.width - k.left - l.left - l.right - k.right, z.pixelHeight = g.height - k.top - l.top - l.bottom - k.bottom) : (z.pixelWidth = g.width, z.pixelHeight = g.height)));
            k = B
        }
        if (!f && k & 496) {
            Km(a, b ^ 3, c, d, e, !0);
            return
        }
        !a.hd || k & 496 || (e = parseFloat(a.T.style.left), f = parseFloat(a.T.style.top), u(!isNaN(e) && !isNaN(f), "Could not parse position."), isFinite(e) && 0 == e % 1 && isFinite(f) &&
            0 == f % 1 || hl(a.T, Math.round(e), Math.round(f)))
    }
    Nm(a, b, c, d)
}, Nm = function (a, b, c, d) {
    var e = a.sc;
    mb(a.Pc, function (a) {
        Dl(e, a)
    }, a);
    Bl(e, a.Pc[b]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    a.na ? (c = ol(a.na, a.T), d = Om(a.na, b), Lm(b) ? (a = Pm(c.y + d.y, a.T.offsetHeight - 15), e.style.top = a + "px") : (a = Pm(c.x + d.x, a.T.offsetWidth - 15), e.style.left = a + "px")) : e.style[0 == c ? Lm(b) ? "top" : "left" : Lm(b) ? "bottom" : "right"] = d + "px"
}, Pm = function (a, b) {
    return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
}, Mm = function (a, b) {
    switch (a) {
        case 2:
            return 0 ==
                b ? 1 : 3;
        case 1:
            return 0 == b ? 0 : 2;
        case 0:
            return 0 == b ? 6 : 7;
        default:
            return 0 == b ? 4 : 5
    }
}, Om = function (a, b) {
    var c = 0, d = 0, e = sl(a);
    switch (b) {
        case 2:
            c = e.width / 2;
            break;
        case 1:
            c = e.width / 2;
            d = e.height;
            break;
        case 0:
            d = e.height / 2;
            break;
        case 3:
            c = e.width, d = e.height / 2
    }
    return new C(c, d)
}, Lm = function (a) {
    return 0 == a || 3 == a
};
var Qm = function (a) {
    this.Ea = a || Tb()
};
s(Qm, id);
Qm.prototype.Va = function () {
    return"tooltip"
};
var Sm = function (a) {
    this.Ea = a || Tb();
    this.Dc = this.Ea.v("div", Rm() + "-contentId");
    this.hc = this.Ea.v("div", Rm() + "-arrow", this.Ea.v("div", Rm() + "-arrowimplbefore"), this.Ea.v("div", Rm() + "-arrowimplafter"));
    this.Ub = this.Ea.v("div", {"class": Rm(), role: "tooltip"}, this.Dc, this.hc);
    Wl(this.c(), this.Va());
    Xl(this.c(), "live", "polite")
};
s(Sm, Qm);
var Rm = function () {
    return"jfk-tooltip"
};
Sm.prototype.c = function () {
    return this.Ub
};
Sm.prototype.R = function () {
    return this.Dc
};
Sm.prototype.k = function () {
    this.Ub && cc(this.Ub)
};
var Tm = {}, Um = function (a) {
    Yl.call(this);
    this.rc = a;
    this.Rb = new Fm(this.od, 0, this);
    jd(this, r(kd, this.Rb));
    a = a.m;
    this.listen(a, ["mouseout", "mousedown", "click", "blur", nd, "keydown"], this.md, !0);
    this.listen(a, ["mouseover", "focus", md], this.nd, !0)
};
s(Um, Yl);
Um.prototype.k = function () {
    Vm(this);
    Um.d.k.call(this)
};
var Wm = function (a, b) {
    switch (b.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            a.Sc = !1;
            break;
        case "keydown":
            a.Sc = !0
    }
};
Um.prototype.nd = function (a) {
    Wm(this, a);
    var b = "focus" == a.type || a.type == md;
    !this.Sc && b ? this.Pa = null : (this.dd = b, this.Pa = a.target);
    Vm(this);
    this.Rb.start(this.N ? 50 : 300)
};
Um.prototype.md = function (a) {
    var b = a.target, c = "mousedown" == a.type || "click" == a.type, b = this.f && dc(this.f.R(), b);
    c && b || (Wm(this, a), this.Pa = null, Vm(this), this.Rb.start(this.N ? 50 : 300))
};
var Vm = function (a) {
    a.jb && (aa.clearTimeout(a.jb), a.jb = 0, a.N = null)
};
Um.prototype.od = function () {
    if (!this.Pa)Xm(this), this.N = null; else if (!(this.N && this.f && dc(this.f.c(), this.Pa))) {
        var a = lc(this.Pa, function (a) {
            return a.getAttribute && (a.getAttribute("data-tooltip-contained") || a.getAttribute("data-tooltip") || a.getAttribute("data-tooltip-html")) && !a.getAttribute("data-tooltip-suspended")
        }, !0), b = !1;
        this.N && this.N != a && (Xm(this), this.N = null, b = !0);
        if (!this.N && a && (this.N = a, !this.dd || "mouse" != a.getAttribute("data-tooltip-trigger"))) {
            var c = "";
            if (a.getAttribute("data-tooltip-contained"))for (var d =
                Vb(a), e = 0; e < d.length; e++) {
                if (d[e].parentNode == a) {
                    c = d[e].cloneNode(!0);
                    break
                }
            } else c = (c = a.getAttribute("data-tooltip")) ? va(Ca(c)) : a.getAttribute("data-tooltip-html");
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.jb = Em(r(this.Cc, this.N, c, d, e), a, this);
                return
            }
            this.Cc(this.N, c, d, e)
        }
    }
};
var Ym = function (a) {
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
Um.prototype.Cc = function (a, b, c, d) {
    this.jb = 0;
    if (!this.f) {
        this.f = new Sm(this.rc);
        Xm(this);
        this.rc.m.body.appendChild(this.f.c());
        jd(this, r(kd, this.f));
        this.La = new Jm(Rm(), !0);
        this.La.ic = !0;
        var e = this.La, f = this.f.hc;
        e.T = this.f.c();
        e.sc = f
    }
    t:{
        if (c)switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break t;
            case "r":
                f = 1;
                break t
        }
        f = 2
    }
    e = this.La;
    c = Ym(c);
    null != c && (e.Mb = c);
    null != f && (e.Lb = f);
    fa(void 0) && (e.uc = Math.max(void 0, 15));
    fa(-1) && (e.Kb = -1);
    Dl(this.f.c(), "jfk-tooltip-hide");
    if (this.kb != d) {
        if (c = this.kb)c =
            this.kb, c = !ta(null == c ? "" : String(c));
        c && Dl(this.f.c(), this.kb);
        ta(null == d ? "" : String(d)) || Bl(this.f.c(), d);
        this.kb = d
    }
    hl(this.f.c(), 0, 0);
    if (q(b))this.f.R().innerHTML = b; else for (bc(this.f.R()); d = b.firstChild;)this.f.R().appendChild(d);
    this.La.na = a;
    this.La.vc(null, 0)
};
var Xm = function (a) {
    a.f && Bl(a.f.c(), "jfk-tooltip-hide")
};
var Zm = function (a) {
    a = a || {};
    var b = yc, c = '<div role="button"' + (a.id ? ' id="' + Lc(a.id) + '"' : "") + ' class="', d;
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
        " jfk-button-checked" : "") + (d.sd ? " " + d.sd : "") + (d.disabled ? " jfk-button-disabled" : "");
    c = c + Lc(new Fc(e, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.ud ? Lc(a.ud) : "0") + '"') + (a.title ? " " + (a.gd ? "data-tooltip" : "title") + '="' + Lc(a.title) + '"' : "") + (a.value ? ' value="' + Lc(a.value) + '"' : "");
    a.attributes ? (d = a.attributes, null != d && d.Y === qc ? (u(d.constructor === Ec), d = d.content.replace(/([^"'\s])$/, "$1 ")) : (d = String(d), Sc.test(d) || (Ka("Bad value `%s` for |filterHtmlAttributes", [d]), d = "zSoyz")), d = " " +
        d) : d = "";
    return b(c + d + ">" + Bc(null != a.content ? a.content : "") + "</div>")
};
Zm.Ha = "jfk.templates.button.strict";
var an = function (a, b, c, d) {
    Dm.call(this, a, $m.o(), b);
    this.fb = c || 0;
    this.gb = d || 0;
    this.Ib = !1
};
s(an, Dm);
an.prototype.hb = function (a) {
    this.f = a;
    var b = this.c();
    if (b && a)if (this.Ib) {
        var c = void 0, c = a;
        b.removeAttribute("title");
        b.removeAttribute("data-tooltip-contained");
        a ? (b.setAttribute("data-tooltip", a), b.setAttribute("aria-label", c)) : (b.removeAttribute("data-tooltip"), b.removeAttribute("data-tooltip-html"), b.removeAttribute("aria-label"));
        a = Tb(b) || Tb();
        b = ka(a.m);
        Tm[b] || (Tm[b] = new Um(a))
    } else b.title = a
};
an.prototype.Fb = function (a) {
    an.d.Fb.call(this, a);
    bn(this, !1)
};
an.prototype.ob = function (a) {
    an.d.ob.call(this, a);
    this.isEnabled() && bn(this, !0)
};
an.prototype.pb = function (a) {
    an.d.pb.call(this, a);
    this.isEnabled() && bn(this, !0)
};
var bn = function (a, b) {
    if (a.c()) {
        var c = a.c();
        b ? Bl(c, "jfk-button-clear-outline") : Dl(c, "jfk-button-clear-outline")
    }
}, $m = function () {
    this.qc = this.r() + "-standard";
    this.jc = this.r() + "-action";
    this.pc = this.r() + "-primary";
    this.lc = this.r() + "-default";
    this.mc = this.r() + "-flat";
    this.oc = this.r() + "-narrow";
    this.nc = this.r() + "-mini";
    this.kc = this.r() + "-contrast"
};
s($m, qm);
ca($m);
h = $m.prototype;
h.ia = function (a, b, c) {
    a && c.fb != a && (c.fb = a, c.c() && cn(c.e, c));
    b && c.gb != b && (c.gb = b, c.c() && cn(c.e, c))
};
h.r = function () {
    return"jfk-button"
};
h.v = function (a) {
    Oa(a, an, "Button is expected to be instance of jfk.Button");
    var b = a.nb(), c;
    t:{
        var d = {disabled: !a.isEnabled(), checked: !!(a.j & 16), style: a.fb, title: a.Ia(), gd: a.Ib, value: a.ma(), width: a.gb};
        u(Zm, "Soy template may not be null.");
        c = (b || Tb()).createElement("DIV");
        var d = tc(Zm(d || vc)), e = d.match(uc);
        u(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
        c.innerHTML =
            d;
        if (1 == c.childNodes.length && (d = c.firstChild, 1 == d.nodeType)) {
            c = d;
            break t
        }
    }
    b.append(c, a.da);
    this.Q(a, c);
    return c
};
h.Q = function (a, b) {
    $m.d.Q.call(this, a, b);
    this.zc || (this.zc = rb(this.qc, r(this.ia, 0, null), this.jc, r(this.ia, 2, null), this.pc, r(this.ia, 3, null), this.lc, r(this.ia, 1, null), this.mc, r(this.ia, 4, null), this.nc, r(this.ia, 5, null), this.kc, r(this.ia, 6, null), this.oc, r(this.ia, null, 1)));
    for (var c = zl(b), d = 0; d < c.length; ++d) {
        var e = this.zc[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip"))a.f = c, a.Ib = !0;
    return b
};
h.ma = function (a) {
    return a.getAttribute("value") || ""
};
h.Ka = function (a, b) {
    a && a.setAttribute("value", b)
};
h.D = function (a, b, c) {
    $m.d.D.call(this, a, b, c);
    if (32 == b)try {
        var d = a.c();
        c ? d.focus() : d.blur()
    } catch (e) {
    }
};
var cn = function (a, b) {
    function c(a, b) {
        (a ? d : e).push(b)
    }

    u(b.c(), "Button element must already exist when updating style.");
    var d = [], e = [], f = b.fb;
    c(0 == f, a.qc);
    c(2 == f, a.jc);
    c(3 == f, a.pc);
    c(4 == f, a.mc);
    c(5 == f, a.nc);
    c(1 == f, a.lc);
    c(6 == f, a.kc);
    c(1 == b.gb, a.oc);
    c(!b.isEnabled(), a.r() + "-disabled");
    El(b.c(), e);
    Cl(b.c(), d)
};
sm("jfk-button", function () {
    return new an(null)
});
var dn, en = null, hn = function (a) {
    fn("Authorizing ...");
    chrome.identity.getAuthToken({interactive: a}, gn)
}, kn = function (a) {
    var b = G("analytics-accounts"), c = window.JSON.parse(a.responseText), d = [], e = {};
    en.Sb("Logout user " + c.username);
    v(c.items, function (a) {
        var b = t(0 < c.username.indexOf("@google.com") ? "https://analytics.corp.google.com/analytics/web/#report/visitors-overview/a%sw%sp%s/" : "https://www.google.com/analytics/web/#report/visitors-overview/a%sw%sp%s/", a.accountId, a.internalWebPropertyId, a.id);
        e["Google Analytics-" +
            a.webPropertyId] = b;
        Xa(d, {webPropertyId: a.webPropertyId, analyticsUrl: b, websiteUrl: a.websiteUrl})
    });
    fn("Received " + d.length + " profiles.");
    ve(e);
    Hc(b, Uc, {vd: d, response: c});
    We(G("link-google-analytics"), 0 < d.length);
    jn("check-analytics-urls-button", function () {
        var a = {ManualChecks: !0}, b = (le("WhiteListedDomains") || "").split("\n");
        v(c.items, function (a) {
            a.websiteUrl && (a = Me(new Ae(a.websiteUrl)), 0 < a.length && -1 == b.indexOf(a) && Xa(b, a))
        });
        a.WhiteListedDomains = b.join("\n");
        re(a)
    });
    we("request_analytics_accounts",
        !1)
}, gn = function (a) {
    if (chrome.runtime.lastError || !a)console.log(chrome.runtime.lastError); else {
        dn = a + "";
        We(G("logout"), !0);
        fn("Authorized");
        var b = new XMLHttpRequest;
        b.onreadystatechange = function () {
            if (4 == b.readyState) {
                var a;
                t:switch (b.status) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        a = !0;
                        break t;
                    default:
                        a = !1
                }
                a ? kn(b) : fn("Error while retrieving accounts: " + b.status)
            }
        };
        b.open("GET", "https://www.googleapis.com/analytics/v3/management/accounts/~all/webproperties/~all/profiles?alt=json",
            !0);
        b.setRequestHeader("Authorization", "Bearer " + dn);
        b.send()
    }
}, mn = function () {
    var a = G("IgnoreExternalScripts");
    a && Cd(a, "change", function () {
        we("IgnoreExternalScripts", a.checked)
    });
    var b = G("validate-all-checkbox");
    Cd(b, "change", function () {
        we("ManualChecks", !b.checked);
        We(G("validate-all-textarea-div"), !b.checked)
    });
    var c = G("validate-all-textarea");
    Cd(c, "change", function () {
        we("WhiteListedDomains", c.value)
    });
    var d = G("PatternProfiling");
    d && Cd(d, "change", function () {
        we("PatternProfiling", d.checked)
    });
    var e =
        G("ManualScriptParsing");
    if (e) {
        Cd(e, "change", function () {
            we("ManualScriptParsing", e.checked);
            var a = G("excluded-scripts-textarea-div");
            a && We(a, e.checked)
        });
        var f = G("excluded-scripts-textarea");
        f && Cd(f, "change", function () {
            we("IgnoreExternalScripts", f.value)
        })
    }
    var g = G("DefaultLevel");
    Cd(g, "change", function () {
        we("DefaultLevel", g.value)
    });
    var k = lh();
    v(k, function (a) {
        var b = G(a.name);
        b && Cd(b, "change", r(we, a.name, b.value))
    });
    jn("reset", ln);
    jn("link-google-analytics", function () {
        we("request_analytics_accounts",
            !0);
        hn(!0)
    });
    en = jn("logout", function () {
        dn && chrome.identity.removeCachedAuthToken({token: dn}, function () {
            console.log("User logged out.");
            We(G("logout"), !1);
            We(G("analytics-accounts"), !1)
        })
    })
}, oe = function () {
    (G("IgnoreExternalScripts") || {}).checked = me("IgnoreExternalScripts");
    var a = me("ManualChecks");
    (G("validate-all-checkbox") || {}).checked = !a;
    (G("validate-all-textarea") || {}).value = le("WhiteListedDomains") || "";
    nn("validate-all-textarea-div", a);
    (G("PatternProfiling") || {}).checked = me("PatternProfiling");
    a = me("ManualScriptParsing");
    (G("ManualScriptParsing") || {}).checked = a;
    (G("excluded-scripts-textarea") || {}).value = q(le("IgnoreExternalScripts")) ? le("IgnoreExternalScripts") : "";
    nn("excluded-scripts-textarea-div", a);
    (G("DefaultLevel") || {}).value = le("DefaultLevel") || "Info";
    a = lh();
    v(a, function (a) {
        (G(a.name) || {}).value = le(a.name) || "Default"
    })
}, ln = function () {
    qe();
    var a = lh();
    v(a, function (a) {
        (a = G(a.name)) && (a.value = "Default")
    });
    fn("Options resetted.")
}, fn = function (a) {
    var b = G("status");
    b.innerText = a;
    Dl(b, "status-hidden");
    Bl(b, "status-shown");
    setTimeout(function () {
        Dl(b, "status-shown");
        Bl(b, "status-hidden")
    }, 2E3)
}, on = function () {
    var a = [];
    v(document.getElementsByName("templateTypes"), function (b) {
        b.checked && Xa(a, b.value)
    });
    var b = G("categoryFilter").value;
    Hc(G("templates"), Xc, {Uc: mh(eh.o(), a, b)});
    nn("checksTable", !0);
    nn("options-list", !1);
    nn("reset", !1);
    nn("list-checks", !1);
    nn("back", !0)
}, qn = function () {
    Hc(G("validate-all-pages"), Vc);
    Hc(G("validate-all-textarea-div"), Wc);
    Hc(G("categories"), Tc, {K: lh(), isInternal: !1});
    oe();
    mn();
    Hc(G("checksControls"), Yc, {K: lh()});
    Cd(G("categoryFilter"), "change", on);
    jn("list-checks", on);
    v(document.getElementsByName("templateTypes"), function (a) {
        Cd(a, "change", on)
    });
    pn()
}, nn = function (a, b) {
    var c = G(a);
    c && We(c, b)
}, pn = function () {
    jn("back", function () {
        nn("checksTable", !1);
        nn("options-list", !0);
        nn("back", !1);
        nn("reset", !0);
        nn("list-checks", !0)
    })
}, jn = function (a, b) {
    var c = G(a);
    if (c && !Al(c, "decorated")) {
        Bl(c, "decorated");
        var d;
        t:{
            var e;
            u(c);
            d = zl(c);
            for (var f = 0, g = d.length; f < g; f++)if (e = d[f], e = e in rm ?
                rm[e]() : null) {
                d = e;
                break t
            }
            d = null
        }
        d && d.Q(c);
        d && d.listen && d.listen("action", b);
        return d
    }
    return null
};
window.ChromeExOAuth && le("request_analytics_accounts") && hn(!1);
m(chrome) && m(chrome.storage) && (chrome.storage.sync.get(null, function (a) {
    te(a);
    a["Options initialized to default values."] || qe();
    qn()
}), pe());
m(chrome) && m(chrome.storage) && (chrome.storage.local.getBytesInUse(null, function (a) {
    console.log("Percentage used in local: " + parseInt(100 * a / chrome.storage.local.QUOTA_BYTES, 10) + "%")
}), chrome.storage.sync.getBytesInUse(null, function (a) {
    console.log("Percentage used in sync: " + parseInt(100 * a / chrome.storage.local.QUOTA_BYTES, 10) + "%")
}));
Ye(!0);
