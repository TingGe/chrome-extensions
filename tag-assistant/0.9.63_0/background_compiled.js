var h, k = this, aa = function (a) {
        a.c = function () {
            return a.Ma ? a.Ma : a.Ma = new a
        }
    }, ba = function (a) {
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
    }, l = function (a) {
        return void 0 !== a
    }, m = function (a) {
        return"array" == ba(a)
    }, n = function (a) {
        return"string" == typeof a
    }, ca = function (a) {
        return"number" == typeof a
    }, da = function (a) {
        return"function" == ba(a)
    }, ea = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, fa = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments,
                2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, ga = function (a, b, c) {
        ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return ga.apply(null, arguments)
    }, p = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, ha = Date.now || function () {
        return+new Date
    },
    q = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.fa = b.prototype;
        a.prototype = new c;
        a.$a = function (a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    };
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return ga.apply(null, c)
    }
    return ga(this, a)
};
var r = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
    return d + c.join("%s")
}, ja = function (a) {
    return/^[\s\xa0]*$/.test(a)
}, ka = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, la = function (a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a
}, ma = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
var na = function () {
    this.Qa = ha()
};
new na;
na.prototype.set = function (a) {
    this.Qa = a
};
na.prototype.get = function () {
    return this.Qa
};
var oa = function (a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, oa); else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
q(oa, Error);
oa.prototype.name = "CustomError";
var pa = function (a, b) {
    b.unshift(a);
    oa.call(this, r.apply(null, b));
    b.shift()
};
q(pa, oa);
pa.prototype.name = "AssertionError";
var qa = function (a, b, c, d) {
    var e = "Assertion failed";
    if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
    throw new pa("" + e, f || []);
}, ra = function (a, b, c) {
    a || qa("", null, b, Array.prototype.slice.call(arguments, 2))
}, sa = function (a, b, c) {
    n(a) || qa("Expected string but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}, ta = function (a, b, c) {
    "boolean" == typeof a || qa("Expected boolean but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2))
}, va = function (a, b, c, d) {
    a instanceof b || qa("instanceof check failed.",
        null, c, Array.prototype.slice.call(arguments, 3));
    return a
};
var t = Array.prototype, wa = t.indexOf ? function (a, b, c) {
    ra(null != a.length);
    return t.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (n(a))return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
}, u = t.forEach ? function (a, b, c) {
    ra(null != a.length);
    t.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, v = t.filter ? function (a, b, c) {
    ra(null != a.length);
    return t.filter.call(a,
        b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = n(a) ? a.split("") : a, s = 0; s < d; s++)if (s in g) {
        var y = g[s];
        b.call(c, y, s, a) && (e[f++] = y)
    }
    return e
}, xa = t.map ? function (a, b, c) {
    ra(null != a.length);
    return t.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, w = t.some ? function (a, b, c) {
    ra(null != a.length);
    return t.some.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f,
        a))return!0;
    return!1
}, ya = t.every ? function (a, b, c) {
    ra(null != a.length);
    return t.every.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return!1;
    return!0
}, za = function (a, b) {
    var c = 0;
    u(a, function (a, e, f) {
        b.call(void 0, a, e, f) && ++c
    }, void 0);
    return c
}, Ba = function (a, b) {
    var c = Aa(a, b);
    return 0 > c ? null : n(a) ? a.charAt(c) : a[c]
}, Aa = function (a, b) {
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return e;
    return-1
}, Ca = function (a, b) {
    return 0 <= wa(a, b)
}, x = function (a, b) {
    Ca(a, b) || a.push(b)
}, Da = function (a, b) {
    var c = wa(a, b);
    0 <= c && (ra(null != a.length), t.splice.call(a, c, 1))
}, Ea = function (a, b) {
    var c = Aa(a, b);
    return 0 <= c ? (ra(null != a.length), t.splice.call(a, c, 1), !0) : !1
}, Fa = function (a) {
    return t.concat.apply(t, arguments)
}, Ga = function (a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return[]
}, Ha = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e, f;
        (f = m(d)) || (e = d, f = ba(e), f = (e = "array" == f || "object" ==
            f && "number" == typeof e.length) && Object.prototype.hasOwnProperty.call(d, "callee"));
        if (f)a.push.apply(a, d); else if (e) {
            f = a.length;
            for (var g = d.length, s = 0; s < g; s++)a[f + s] = d[s]
        } else a.push(d)
    }
}, Ja = function (a, b, c, d) {
    ra(null != a.length);
    t.splice.apply(a, Ia(arguments, 1))
}, Ia = function (a, b, c) {
    ra(null != a.length);
    return 2 >= arguments.length ? t.slice.call(a, b) : t.slice.call(a, b, c)
}, Ka = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}, La = function (a, b, c) {
    var d;
    c = c || Ka;
    for (var e = 0, f = a.length; e < f;) {
        var g = e + f >> 1, s;
        s = c(b, a[g]);
        0 < s ? e = g +
            1 : (f = g, d = !s)
    }
    d = d ? e : ~e;
    0 > d && Ja(a, -(d + 1), 0, b)
};
var Ma = function (a) {
    return function () {
        return a
    }
}, Na = Ma(!1), z = Ma(!0), Oa = function (a) {
    var b = arguments, c = b.length;
    return function () {
        for (var a = 0; a < c; a++)if (b[a].apply(this, arguments))return!0;
        return!1
    }
}, Ra = function () {
    var a = Oa(Pa, Qa);
    return function () {
        return!a.apply(this, arguments)
    }
};
var Sa = "StopIteration"in k ? k.StopIteration : Error("StopIteration"), Ta = function () {
};
Ta.prototype.next = function () {
    throw Sa;
};
Ta.prototype.Wa = function () {
    return this
};
var Ua = function (a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
}, Va = function (a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
}, Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Xa = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < Wa.length; f++)c = Wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, Ya = function (a) {
    var b = arguments.length;
    if (1 == b && m(arguments[0]))return Ya.apply(null,
        arguments[0]);
    if (b % 2)throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
    return c
};
var Za = function (a, b) {
    this.F = {};
    this.l = [];
    this.aa = this.h = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        if (a instanceof Za)d = a.P(), c = a.X(); else {
            var c = [], e = 0;
            for (d in a)c[e++] = d;
            d = c;
            c = Va(a)
        }
        for (e = 0; e < d.length; e++)this.set(d[e], c[e])
    }
};
h = Za.prototype;
h.X = function () {
    $a(this);
    for (var a = [], b = 0; b < this.l.length; b++)a.push(this.F[this.l[b]]);
    return a
};
h.P = function () {
    $a(this);
    return this.l.concat()
};
h.ba = function (a) {
    return ab(this.F, a)
};
h.clear = function () {
    this.F = {};
    this.aa = this.h = this.l.length = 0
};
h.remove = function (a) {
    return ab(this.F, a) ? (delete this.F[a], this.h--, this.aa++, this.l.length > 2 * this.h && $a(this), !0) : !1
};
var $a = function (a) {
    if (a.h != a.l.length) {
        for (var b = 0, c = 0; b < a.l.length;) {
            var d = a.l[b];
            ab(a.F, d) && (a.l[c++] = d);
            b++
        }
        a.l.length = c
    }
    if (a.h != a.l.length) {
        for (var e = {}, c = b = 0; b < a.l.length;)d = a.l[b], ab(e, d) || (a.l[c++] = d, e[d] = 1), b++;
        a.l.length = c
    }
};
h = Za.prototype;
h.get = function (a, b) {
    return ab(this.F, a) ? this.F[a] : b
};
h.set = function (a, b) {
    ab(this.F, a) || (this.h++, this.l.push(a), this.aa++);
    this.F[a] = b
};
h.forEach = function (a, b) {
    for (var c = this.P(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
h.G = function () {
    return new Za(this)
};
h.Wa = function (a) {
    $a(this);
    var b = 0, c = this.l, d = this.F, e = this.aa, f = this, g = new Ta;
    g.next = function () {
        for (; ;) {
            if (e != f.aa)throw Error("The map has changed since the iterator was created");
            if (b >= c.length)throw Sa;
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};
var ab = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var bb;
t:{
    var cb = k.navigator;
    if (cb) {
        var db = cb.userAgent;
        if (db) {
            bb = db;
            break t
        }
    }
    bb = ""
}
var eb = function (a) {
    return-1 != bb.indexOf(a)
};
var fb = eb("Opera") || eb("OPR"), gb = eb("Trident") || eb("MSIE"), hb = eb("Gecko") && -1 == bb.toLowerCase().indexOf("webkit") && !(eb("Trident") || eb("MSIE")), ib = -1 != bb.toLowerCase().indexOf("webkit"), jb = function () {
        var a = k.document;
        return a ? a.documentMode : void 0
    }, kb = function () {
        var a = "", b;
        if (fb && k.opera)return a = k.opera.version, da(a) ? a() : a;
        hb ? b = /rv\:([^\);]+)(\)|;)/ : gb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ib && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(bb)) ? a[1] : "");
        return gb && (b = jb(), b > parseFloat(a)) ? String(b) : a
    }(), lb =
    {}, mb = function (a) {
        var b;
        if (!(b = lb[a])) {
            b = 0;
            for (var c = ka(String(kb)).split("."), d = ka(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", s = d[f] || "", y = RegExp("(\\d*)(\\D*)", "g"), ia = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var ua = y.exec(g) || ["", "", ""], N = ia.exec(s) || ["", "", ""];
                    if (0 == ua[0].length && 0 == N[0].length)break;
                    b = ma(0 == ua[1].length ? 0 : parseInt(ua[1], 10), 0 == N[1].length ? 0 : parseInt(N[1], 10)) || ma(0 == ua[2].length, 0 == N[2].length) || ma(ua[2], N[2])
                } while (0 == b)
            }
            b = lb[a] = 0 <= b
        }
        return b
    },
    nb = k.document, ob = nb && gb ? jb() || ("CSS1Compat" == nb.compatMode ? parseInt(kb, 10) : 5) : void 0;
!hb && !gb || gb && gb && 9 <= ob || hb && mb("1.9.1");
gb && mb("9");
var pb = function (a, b) {
    a = a.parentNode;
    for (var c = 0; a;) {
        if (b(a))return a;
        a = a.parentNode;
        c++
    }
    return null
};
gb && mb("9");
!ib || mb("528");
hb && mb("1.9b") || gb && mb("8") || fb && mb("9.5") || ib && mb("528");
hb && !mb("8") || gb && mb("9");
var _gaq = _gaq || [];
var qb = {}, rb = {rb: !0};
qb.Sa = null;
var sb = function (a, b) {
    var c = [];
    do {
        var d = a.exec.call(a, b);
        d && (d.shift(), Ha(c, d))
    } while (0 < a.lastIndex);
    return c
}, tb = function (a) {
    return"true" == a || "1" == a || "!0" == a
}, ub = function (a, b) {
    return a.exec.call(a, b)
}, xb = function (a) {
    a = a.replace(/([=+-])\s*\n\s*/g, "$1 ");
    a = vb(a);
    a = wb(a, [";", ",", "\n"], !0);
    return(a = Ba(a, function (a) {
        return A(RegExp(r("^(?:var |(?:\\w*\\.)*)%s\\s*=", "google_tag_params")), a)
    })) && ka(a.substring(a.indexOf("=") + 1)).replace(/\s*\n\s*/g, " ")
}, yb = function (a) {
    a = a.replace(/\\\\/g, "").replace(/\\'/g,
        "").replace(/\\"/g, "").replace(/"[^"]*"/g, "_").replace(/'[^'']*'/g, "_").replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = sb(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (w(b, yb))return!0;
    for (; A(/[{].*[}]/, a);)a = a.replace(/[{][^}]*[}]/g, "__");
    return w(a.split(/\s*,\s*/), p(A, /^\s*[_a-zA-Z][_a-zA-Z0-9]*\s*=.*/g))
}, Ab = function (a) {
    a = zb(a);
    return w(a, function (a) {
        return A(/['"]\[.*\]['"]/, a.split(/\s*:\s*/)[1])
    })
}, Bb = function (a) {
    a = a.replace(/\\\\/g, "").replace(/\\'/g, "").replace(/\\"/g,
        "").replace(/"[^"]*"/g, "_").replace(/'[^'']*'/g, "_").replace(/^s*[{]\s*(.*)}\s*$/, "$1");
    var b = sb(/[{]([^}]*)[}]/g, a);
    a = a.replace(/[{][^}]*[}]/g, "_").replace(/\[[^\]]*\]/g, "_");
    if (b = w(b, Bb))return!0;
    for (; A(/[{].*[}]/, a);)a = a.replace(/[{][^}]*[}]/g, "__");
    return b || (a.match(/:/g) || []).length - 1 > (a.match(/,/g) || []).length
}, Db = function (a) {
    a = zb(a);
    return w(a, function (a) {
        a = a.split(/\s*:\s*/);
        return 1 < a.length ? (a = a[1].replace(/\\\\/g, "").replace(/\\'/g, "").replace(/\\"/g, ""), w(a.split(/\s*[+]\s*/), function (a) {
            return A(/^\s*['"].*['"]\s*$/,
                a) || Cb(a) || A(/^[_a-zA-Z][_a-zA-Z0-9]*$/, a) ? !1 : !0
        })) : !1
    })
}, Eb = function (a) {
    a = zb(a);
    return!ya(a, function (a) {
        if (-1 != a.indexOf(",")) {
            a = (a = ub(/\[(.*)\]/, a)) && 1 < a.length ? a[1] : null;
            if (!a)return!1;
            a = zb(a);
            return ya(a, function (a) {
                return-1 == a.indexOf(",")
            })
        }
        return!0
    })
}, B = function (a, b, c) {
    c = l(c) ? c : 1;
    return(a = a.exec.call(a, b)) ? a.length > c ? a[c] : !0 : !1
}, Fb = function (a, b) {
    for (var c, d = 0; d < a.length; d++) {
        var e = B(a[d], b);
        if (n(e))l(c) || (c = e); else if (!n(e) && !e)return!1
    }
    return l(c) ? c : !0
}, Gb = function (a, b) {
    for (var c = 0; c < a.length; c++) {
        var d =
            B(a[c], b);
        if (n(d) || d)return d
    }
    return!1
}, Hb = function (a, b) {
    return B(a, b.url)
}, Ib = function (a, b) {
    b || (b = {lastIndex: -1, Ra: wb(a), text: ""});
    b.lastIndex++;
    return b.lastIndex < b.Ra.length ? (b.text = b.Ra[b.lastIndex], b) : null
}, Jb = function (a) {
    return!ya([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//], function (b) {
        return A(b, a)
    })
}, Kb = function (a, b, c) {
    return B(a, c.url, b)
}, wb = function (a, b, c) {
    b = b || [";", ","];
    var d = {"(": ")", "{": "}", "[": "]"}, e = void 0, f = !1, g = [], s = [], y = 0;
    a = ka(Lb(a));
    for (var ia = 0, ua = a.length; ia < ua; ia++) {
        var N =
            a.charAt(ia);
        f ? f = !1 : "\\" == N ? f = !0 : e ? N == e && (e = void 0) : '"' == N || "'" == N ? e = N : "(" == N || "{" == N || "[" == N ? g.push(d[N]) : g.length ? N == g[g.length - 1] && g.pop() : Ca(b, N) ? (y = ka(a.substring(y, ia)), !y && c || s.push(y.replace(" *\n *", "")), y = ia + 1) : ia == y && C[a.charCodeAt(ia)] && (y = ia + 1)
    }
    y = ka(a.substring(y, ia));
    !y && c || s.push(y.replace(" *\n *", ""));
    return s
}, Lb = function (a, b) {
    for (var c = void 0, d = !1, e = -1, f = b || 0, g = f; g < a.length; g++) {
        var s = a.charAt(g), y = g + 1 < a.length ? a.charAt(g + 1) : "";
        if (d)d = !1; else if (0 <= e) {
            if ("*" == s && "/" == y)return a.substring(f,
                e) + Lb(a, g + 2)
        } else if ("\\" == s)d = !0; else if (c)s == c && (c = void 0); else if ("/" == s) {
            if ("/" == y)return c = a.indexOf("\n", g), -1 == c ? a.substring(f, g) : a.substring(f, g) + Lb(a, c);
            "*" == y && (e = g++)
        } else if ('"' == s || "'" == s)c = s
    }
    return a.substring(f)
}, vb = function (a) {
    a = a.replace(/\t/g, "    ").replace(/^ *\n+/, "").split("\n");
    for (var b = 20, c = 0; c < a.length && 0 < b; c++)if (a[c].replace(/[ ]+(\n?)/, "$1"), 0 < a[c].length && 0 != a[c].indexOf("..."))var d = /^([ ]*)/.exec(a[c]), d = d ? d[1].length : 0, b = b < d ? b : d;
    for (c = 0; c < a.length && 0 < b; c++)0 < a[c].length &&
        0 != a[c].indexOf("...") && (a[c] = a[c].substring(b));
    return a.join("\n")
}, Mb = function (a, b, c) {
    var d = l(500) ? 500 : 400;
    c = l(c) ? c : 0;
    var e = a - c;
    a = b;
    0 < e && (a = b.substring(e), b = a.indexOf("\n"), 0 <= b && b < c && (a = a.substring(b)), a = "..." + a, d += 3);
    a.length > d && (a = a.substring(0, d), b = a.lastIndexOf("\n"), 10 < b && (a = a.substring(0, b + 1)), a += "...");
    return vb(a)
}, zb = function (a) {
    return wb(a, [","])
}, A = function (a, b) {
    return a.test.call(a, b)
}, Cb = p(A, /^-?(?:\d+(?:\.\d*)?|\.\d+)$/), Nb = function (a, b) {
    return A(a, b.url)
}, C = [];
C[9] = !0;
C[10] = !0;
C[11] = !0;
C[12] = !0;
C[13] = !0;
C[32] = !0;
C[133] = !0;
C[160] = !0;
C[5760] = !0;
C[6158] = !0;
C[8192] = !0;
C[8193] = !0;
C[8194] = !0;
C[8195] = !0;
C[8196] = !0;
C[8197] = !0;
C[8198] = !0;
C[8199] = !0;
C[8200] = !0;
C[8201] = !0;
C[8202] = !0;
C[8203] = !0;
C[8232] = !0;
C[8233] = !0;
C[8239] = !0;
C[8287] = !0;
C[12288] = !0;
var Ob = function () {
    this.V = {};
    this.na = {}
};
aa(Ob);
var Pb = {ab: "categories", bb: "CheckPermissionsLater", cb: "DefaultLevel", eb: "IgnoreExternalScripts", fb: "IgnoreExternalScripts", gb: "isInSupportTeam", hb: "ManualChecks", ib: "ManualScriptParsing", kb: "PatternProfiling", lb: "GooglePublisherConsole", mb: "ShowWelcomeScreen", nb: "WhiteListedDomains"}, Ub = function () {
    var a = Qb, b = Qb;
    l(chrome) && l(chrome.storage) ? chrome.storage.local.get(null, function (c) {
        Rb(c);
        Sb(a, b)
    }) : Ob.c().V["Options initialized to default values."] || (console.log("No chrome storage available."), Tb(),
        a && a())
}, Sb = function (a, b) {
    l(chrome) && l(chrome.storage) && (chrome.storage.sync.get(null, function (b) {
        Rb(b);
        b["Options initialized to default values."] || Tb();
        a()
    }), Vb(b))
}, D = function (a) {
    return Ob.c().V[a]
}, Wb = function (a) {
    a = Ob.c().V[a];
    l(a) && ta(n(a));
    return null != a ? a + "" : ""
}, Vb = function (a) {
    da(a) && chrome.storage.onChanged.addListener(function (b) {
        for (var c in b)Ob.c().V[c] = b[c].newValue;
        da(a) && a()
    })
}, Yb = function () {
    var a = {};
    Ua(Pb, function (b) {
        l(D(b)) && (a[b] = D(b))
    });
    Tb();
    Xb(a)
}, Tb = function () {
    var a = D("categories");
    l(chrome) && l(chrome.storage) && (chrome.storage.local.clear(), chrome.storage.sync.clear());
    Ob.c().V = {};
    var b = {};
    b.categories = a;
    b.ManualChecks = !0;
    b.ShowWelcomeScreen = !0;
    b["Options initialized to default values."] = !0;
    l(chrome) && l(chrome.storage) && chrome.storage.local.set(b);
    Xb(b)
}, Zb = function (a, b) {
    Ua(b, function (a, b) {
        null != a && (Ob.c().na[b] ? ra(typeof a == Ob.c().na[b], "Unexpected type " + typeof a + " expected " + Ob.c().na[b]) : Ob.c().na[b] = typeof a)
    });
    Rb(b);
    a.set(b, function () {
        chrome.runtime && chrome.runtime.lastError &&
        (Yb(), a.set(b, function () {
            console.log("Failed to store values")
        }))
    })
}, Rb = function (a) {
    a && Xa(Ob.c().V, a)
}, $b = l(chrome) && l(chrome.storage) ? p(Zb, chrome.storage.local) : Rb, Xb = l(chrome) && l(chrome.storage) ? p(Zb, chrome.storage.sync) : Rb;
var ac = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), cc = function (a) {
    if (bc) {
        bc = !1;
        var b = k.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = cc(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)throw bc = !0, Error();
        }
    }
    return a.match(ac)
}, bc = ib;
var dc = function (a, b) {
    var c;
    if (a instanceof dc)this.A = l(b) ? b : a.A, ec(this, a.L), c = a.ja, fc(this), this.ja = c, c = a.U, fc(this), this.U = c, gc(this, a.ia), c = a.K, fc(this), this.K = c, hc(this, a.o.G()), c = a.ha, fc(this), this.ha = c; else if (a && (c = cc(String(a)))) {
        this.A = !!b;
        ec(this, c[1] || "", !0);
        var d = c[2] || "";
        fc(this);
        this.ja = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        fc(this);
        this.U = d ? decodeURIComponent(d) : "";
        gc(this, c[4]);
        d = c[5] || "";
        fc(this);
        this.K = d ? decodeURIComponent(d) : "";
        hc(this, c[6] || "", !0);
        c = c[7] || "";
        fc(this);
        this.ha = c ?
            decodeURIComponent(c) : ""
    } else this.A = !!b, this.o = new ic(null, 0, this.A)
};
h = dc.prototype;
h.L = "";
h.ja = "";
h.U = "";
h.ia = null;
h.K = "";
h.ha = "";
h.Xa = !1;
h.A = !1;
h.toString = function () {
    var a = [], b = this.L;
    b && a.push(jc(b, kc), ":");
    if (b = this.U) {
        a.push("//");
        var c = this.ja;
        c && a.push(jc(c, kc), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.ia;
        null != b && a.push(":", String(b))
    }
    if (b = this.K)this.U && "/" != b.charAt(0) && a.push("/"), a.push(jc(b, "/" == b.charAt(0) ? lc : mc));
    (b = nc(this)) && a.push("?", b);
    (b = this.ha) && a.push("#", jc(b, oc));
    return a.join("")
};
h.G = function () {
    return new dc(this)
};
var ec = function (a, b, c) {
    fc(a);
    a.L = c ? b ? decodeURIComponent(b) : "" : b;
    a.L && (a.L = a.L.replace(/:$/, ""))
}, pc = function (a) {
    return a.U
}, gc = function (a, b) {
    fc(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
        a.ia = b
    } else a.ia = null
}, qc = function (a) {
    return a.K
}, hc = function (a, b, c) {
    fc(a);
    b instanceof ic ? (a.o = b, a.o.xa(a.A)) : (c || (b = jc(b, rc)), a.o = new ic(b, 0, a.A))
}, nc = function (a) {
    return a.o.toString()
}, sc = function (a) {
    return a.o
}, tc = function (a, b) {
    return a.o.get(b)
}, fc = function (a) {
    if (a.Xa)throw Error("Tried to modify a read-only Uri");
};
dc.prototype.xa = function (a) {
    this.A = a;
    this.o && this.o.xa(a);
    return this
};
var uc = function (a) {
    return a instanceof dc ? a.G() : new dc(a, void 0)
}, jc = function (a, b) {
    return n(a) ? encodeURI(a).replace(b, vc) : null
}, vc = function (a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}, kc = /[#\/\?@]/g, mc = /[\#\?:]/g, lc = /[\#\?]/g, rc = /[\#\?@]/g, oc = /#/g, ic = function (a, b, c) {
    this.t = a || null;
    this.A = !!c
}, xc = function (a) {
    if (!a.g && (a.g = new Za, a.h = 0, a.t))for (var b = a.t.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="), e = null, f = null;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d +
            1)) : e = b[c];
        e = decodeURIComponent(e.replace(/\+/g, " "));
        e = wc(a, e);
        a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
};
h = ic.prototype;
h.g = null;
h.h = null;
h.add = function (a, b) {
    xc(this);
    this.t = null;
    a = wc(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.h++;
    return this
};
h.remove = function (a) {
    xc(this);
    a = wc(this, a);
    return this.g.ba(a) ? (this.t = null, this.h -= this.g.get(a).length, this.g.remove(a)) : !1
};
h.clear = function () {
    this.g = this.t = null;
    this.h = 0
};
h.ba = function (a) {
    xc(this);
    a = wc(this, a);
    return this.g.ba(a)
};
h.P = function () {
    xc(this);
    for (var a = this.g.X(), b = this.g.P(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
    return c
};
h.X = function (a) {
    xc(this);
    var b = [];
    if (n(a))this.ba(a) && (b = Fa(b, this.g.get(wc(this, a)))); else {
        a = this.g.X();
        for (var c = 0; c < a.length; c++)b = Fa(b, a[c])
    }
    return b
};
h.set = function (a, b) {
    xc(this);
    this.t = null;
    a = wc(this, a);
    this.ba(a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h++;
    return this
};
h.get = function (a, b) {
    var c = a ? this.X(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
h.toString = function () {
    if (this.t)return this.t;
    if (!this.g)return"";
    for (var a = [], b = this.g.P(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
    }
    return this.t = a.join("&")
};
h.G = function () {
    var a = new ic;
    a.t = this.t;
    this.g && (a.g = this.g.G(), a.h = this.h);
    return a
};
var wc = function (a, b) {
    var c = String(b);
    a.A && (c = c.toLowerCase());
    return c
};
ic.prototype.xa = function (a) {
    a && !this.A && (xc(this), this.t = null, this.g.forEach(function (a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.t = null, this.g.set(wc(this, d), Ga(a)), this.h += a.length))
    }, this));
    this.A = a
};
var zc = function (a, b) {
    var c = Array.prototype.slice.call(arguments), d = c.shift();
    if ("undefined" == typeof d)throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, s, y, ia, ua, N) {
        if ("%" == ia)return"%";
        var wf = c.shift();
        if ("undefined" == typeof wf)throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = wf;
        return yc[ia].apply(null, arguments)
    })
}, yc = {s: function (a, b, c) {
    return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ?
        a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
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
}, d: function (a, b, c, d, e, f, g, s) {
    return yc.f(parseInt(a, 10), b, c, d, 0, f, g, s)
}};
yc.i = yc.d;
yc.u = yc.d;
var Ac = function (a, b) {
    this.name = a;
    this.url = b
}, Bc = function (a, b, c, d, e) {
    this.tabId = a;
    this.url = b;
    this.isManualCheck = this.isExcluded = !1;
    this.title = c || "";
    this.issues = [];
    this.responses = [];
    this.redirects = {};
    this.domChecksFinished = !1;
    this.lastUpdated = 0;
    this.status = d;
    this.requiresReload = e;
    this.extensionIssues = []
};
var Cc = function (a, b) {
    var c = Math.round(a);
    return zc("%d %s%s", c, b, 1 == c ? "" : "s")
}, Dc = function (a) {
    var b = a.documentUri;
    a.documentUri || (b = uc(a.documentUrl), a.documentUri = b);
    return b
}, E = function (a) {
    var b = a.uri;
    a.uri || (b = uc(a.url), a.uri = b);
    return b
};
var Fc = function (a, b, c) {
        this.issueClass = a.issueClass || 0;
        this.type = a.type;
        this.category = a.category;
        this.label = c || b || a.label || "";
        this.text = r(a.text || "", b || this.label);
        this.infoLink = n(a.infoLink) ? r(a.infoLink, this.label) : void 0;
        this.value = a.value || void 0;
        this.valueFormat = a.format || a.valueFormat || "";
        this.relatedIssues = a.relatedIssues ? Ec(a.relatedIssues) : [];
        this.view = a.view;
        this.I = a.I || a;
        this.deleted = a.deleted || null
    }, Gc = new Fc({category: "null"}, "NULL"), Hc = function (a, b) {
        x(a.relatedIssues, b);
        b.parent = a
    },
    Jc = function (a, b) {
        var c = new Fc(b);
        Ic(a.relatedIssues, c.relatedIssues);
        Hc(a, c)
    }, Ec = function (a) {
        a = xa(a, function (a) {
            return new Fc(a)
        });
        Kc(a);
        return a
    }, Lc = function (a, b, c) {
        (b = F(b, a)) && (a = F(c, a)) && (a.label = b.label)
    }, Mc = function (a) {
        var b = new Fc(Gc);
        b.relatedIssues = a || [];
        return b
    }, Nc = function (a, b) {
        Ic(a.relatedIssues, b);
        u(b, function (b) {
            "Bucket" != b.type && Nc(a, b.relatedIssues)
        });
        u(b, function (b) {
            "Bucket" != b.type && "Tag" != b.type && b.text == a.text && b.label == a.label && (b.deleted = "Deduped")
        })
    }, Ic = function (a, b) {
        u(a, function (a) {
            Nc(a,
                b)
        })
    }, Oc = function (a, b) {
        for (; Ea(a, function (a) {
            return b.label == a.label
        }););
        u(a, function (a) {
            Oc(a.relatedIssues, b)
        })
    }, Qc = function (a, b) {
        if (m(a)) {
            var c = !1;
            u(a, function (a) {
                Ca(b, a.issueClass) && (c = !0, Pc(a, "Deleted because of class match " + b.join(", ")))
            });
            u(a, function (a) {
                c = Qc(a.relatedIssues, b) || c
            });
            return c
        }
        return Qc(a.relatedIssues, b)
    }, G = function (a, b) {
        if (m(a)) {
            var c = !1;
            u(a, function (a) {
                a.text == b && (c = !0, Pc(a, "Deleted because of text match."))
            });
            u(a, function (a) {
                c = G(a.relatedIssues, b) || c
            });
            return c
        }
        return G(a.relatedIssues,
            b)
    }, Rc = function (a, b, c) {
        if (m(a)) {
            var d = !1;
            u(a, function (a) {
                a.text == b && a.label == c && (d = !0, Pc(a, "Deleted because of text and label match."))
            });
            u(a, function (a) {
                d = Rc(a.relatedIssues, b, c) || d
            });
            return d
        }
        return Rc(a.relatedIssues, b, c)
    }, Sc = function (a, b) {
        if (m(a)) {
            var c = !1;
            u(a, function (a) {
                0 <= a.text.indexOf(b) && (c = !0, Pc(a, "Deleted because of text prefix match" + b))
            });
            u(a, function (a) {
                c = Sc(a.relatedIssues, b) || c
            });
            return c
        }
        return Sc(a.relatedIssues, b)
    }, Tc = function (a, b) {
        var c = 0;
        u(a, function (a) {
            var e = (b ? b + "." : "") + c++;
            console.log(e + " " + a.type + ": " + a.issueClass + ": " + a.text + (a.label && " -- " + la(a.label.replace("\n", ""), 25)) + (a.deleted ? " deleted:" + a.deleted : ""));
            a.relatedIssues && Tc(a.relatedIssues, e)
        })
    }, Uc = Tc, Vc = ["tvt", "Issue", "dump"], Wc = k;
Vc[0]in Wc || !Wc.execScript || Wc.execScript("var " + Vc[0]);
for (var Xc; Vc.length && (Xc = Vc.shift());)Vc.length || void 0 === Uc ? Wc = Wc[Xc] ? Wc[Xc] : Wc[Xc] = {} : Wc[Xc] = Uc;
var H = function (a, b) {
        return v(a, function (a) {
            return!a.deleted && Ca(b, a.category)
        })
    }, Yc = function (a, b, c) {
        return c && !m(c) ? Yc(a, b, [c]) : m(a) ? v(a, function (a) {
            return c ? !a.deleted && 0 < Zc(a.relatedIssues, [b], c).length : 0 < $c(a.relatedIssues, [b]).length
        }) : Yc(a.relatedIssues, b, c)
    }, ad = function (a, b, c) {
        return c && !m(c) ? ad(a, b, [c]) : m(a) ? v(a, function (a) {
            a = F(a.relatedIssues, b);
            return!!a && !a.deleted && (!l(c) || 0 <= c.indexOf(a.label))
        }) : ad(a.relatedIssues, b, c)
    }, bd = function (a, b) {
        return n(b) ? bd(a, [b]) : m(a) ? v(a, function (a) {
            return!a.deleted &&
                0 <= b.indexOf(a.label)
        }) : bd(a.relatedIssues, b)
    }, $c = function (a, b) {
        return n(b) ? $c(a, [b]) : m(a) ? v(a, function (a) {
            return!a.deleted && 0 <= b.indexOf(a.text)
        }) : $c(a.relatedIssues, b)
    }, Zc = function (a, b, c) {
        return n(b) ? Zc(a, [b], c) : n(c) ? Zc(a, b, [c]) : m(a) ? v(a, function (a) {
            return!a.deleted && 0 <= b.indexOf(a.text) && 0 <= c.indexOf(a.label)
        }) : Zc(a.relatedIssues, b, c)
    }, dd = function (a) {
        return v(a, function (a) {
            return!a.deleted && "Tag" == a.type && "hidden" != a.valueFormat && cd(a.category)
        })
    }, ed = function (a, b) {
        n(b) && (b = [b]);
        return v(a, function (a) {
            return!a.deleted &&
                "Tag" == a.type && "hidden" != a.valueFormat && -1 != b.indexOf(a.category)
        })
    }, fd = function (a, b, c, d) {
        var e = [];
        d = d || null;
        for (var f = 0; f < b.length; f++)if (!b[f].deleted && c == b[f][a])x(e, b[f]); else if (b[f].type != d) {
            var g = fd(a, b[f].relatedIssues, c);
            Ha(e, g)
        }
        return e
    }, gd = function (a, b) {
        return fd("label", m(a) ? a : a.relatedIssues, b)
    }, hd = function (a, b) {
        return fd("text", m(a) ? a : a.relatedIssues, b)
    }, id = function (a, b, c) {
        return fd("type", m(a) ? a : a.relatedIssues, b, c)
    }, kd = function (a) {
        return jd("category", m(a) ? a : a.relatedIssues, "Remarketing Tag (new)")
    },
    ld = function (a) {
        return jd("issueClass", m(a) ? a : a.relatedIssues, 2)
    }, md = function (a, b) {
        return jd("label", m(a) ? a : a.relatedIssues, b)
    }, F = function (a, b) {
        return jd("text", m(a) ? a : a.relatedIssues, b, void 0)
    }, nd = function (a, b, c) {
        a = hd(a, b);
        c = bd(a, c);
        return 0 < c.length ? c[0] : null
    }, od = function (a, b) {
        if (m(a)) {
            var c = Ba(a, function (a) {
                return!a.deleted && 0 <= a.text.indexOf(b)
            });
            c || w(a, function (a) {
                c = od(a.relatedIssues, b);
                return!!c
            });
            return c
        }
        return od(a.relatedIssues, b)
    }, pd = function (a) {
        return jd("type", m(a) ? a : a.relatedIssues,
            "Bucket")
    }, jd = function (a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            if ((!b[e].deleted || d) && c == b[e][a])return b[e];
            var f = jd(a, b[e].relatedIssues, c, d);
            if (f)return f
        }
        return null
    }, rd = function (a) {
        return qd(a) || "Bucket" == a.parent.type ? a : rd(a.parent)
    }, sd = function (a) {
        return qd(a) ? a : sd(a.parent)
    }, td = function (a) {
        return a.parent ? td(a.parent) : a.label
    }, ud = function (a) {
        return w(a, function (b) {
            return 1 < gd(a, b.label).length
        })
    }, vd = function (a, b) {
        return w(a, function (a) {
            return a.deleted || a.type != b || "hidden" == a.valueFormat ? a.relatedIssues ?
                vd(a.relatedIssues, b) : !1 : !0
        })
    }, wd = function (a) {
        a = hd(a, "Data layer fields should be quoted");
        for (var b = 1; b < a.length; b++)a[b].deleted = "Hide duplicate issues"
    }, cd = function (a) {
        var b;
        (b = null == a) || (a = D(a), b = "Off" != (l(a) && "Default" != a ? a + "" : D("DefaultLevel") ? Wb("DefaultLevel") : "Info"));
        return b
    }, xd = function (a) {
        return null == a || "null" == a.category
    }, qd = function (a) {
        return!a.parent || xd(a.parent)
    }, Pc = function (a, b) {
        a.deleted = b;
        a.relatedIssues = []
    }, yd = function (a) {
        u(a, function (a) {
            delete a.I;
            delete a.parent;
            yd(a.relatedIssues)
        });
        return a
    }, zd = function (a, b) {
        var c = 0;
        u(a, function (a) {
            !a.deleted && a.type == b && "hidden" != a.valueFormat && cd(a.category) && c++;
            c += zd(a.relatedIssues, b)
        });
        return c
    }, Kc = function (a, b) {
        u(a, function (a) {
            a.parent = b
        });
        u(a, function (a) {
            Kc(a.relatedIssues, a)
        })
    };
var I = function (a, b, c, d, e, f, g) {
    this.issueClass = 0;
    this.type = a;
    this.category = b;
    this.text = c;
    this.infoLink = d;
    this.format = f || "";
    this.H = e ? function (a, b) {
        return e.call(this, b)
    } : z;
    this.N = g || [];
    this.b = !1;
    this.O = this.view = this.hint = this.J = null;
    this.T = {}
}, Ad = function (a, b, c, d, e, f) {
    return new I(a, b, c, void 0, d, e, f)
}, Bd = p(Ad, "Debug", null), J = p(Ad, "Error", null), Cd = p(Ad, "Fine", null), K = p(Ad, "Info", null), Dd = p(Ad, "Suggestion", null), Ed = p(Ad, "Warning", null), Fd = K("Implemented in %s"), Gd = K("Includes %s"), Hd = function (a) {
    return J(a,
        function (a) {
            return!Cb(a.label)
        })
}, Id = function (a, b, c) {
    return new I("Tag", a, b, c, void 0, void 0, void 0)
}, Jd = function (a, b, c) {
    b = va(c || b, Fc);
    return a == b.label
}, Kd = function (a, b, c) {
    b = va(c || b, Fc);
    return B(a, b.label)
}, Md = function (a) {
    var b = "${"+a.text+"}", c = "not set" == a.label ? "" : a.label;
    qd(a) || Ld(va(a.parent, Fc), b, c);
    a.relatedIssues && u(a.relatedIssues, function (b) {
        b.parent = a;
        Md(b);
        b.parent = void 0
    })
}, Ld = function (a, b, c) {
    a.label = a.label.replace(b, c);
    a.text = a.text.replace(b, c);
    qd(a) || Ld(va(a.parent, Fc), b, c)
}, Nd = function (a) {
    return p(function (b) {
        return a(b.label)
    })
};
I.prototype.j = function (a) {
    for (var b = 0; b < arguments.length; b++)Ha(this.N, arguments[b]);
    return this
};
var Qd = function (a, b, c) {
    b.category != a.category && (b.text = l(void 0) ? r(a.text, void 0) : a.text, b.category = a.category, b.type = a.type, b.infoLink = a.infoLink, b.relatedIssues && (a = va(b, Fc), Md(a), Hc(a, Od(Pd, c))))
};
I.prototype.qa = function () {
    return!0
};
I.prototype.clear = function () {
    this.O = null;
    this.T = {};
    this.b = !1
};
I.prototype.G = function () {
    var a = new I(this.type, this.category, this.text, this.infoLink, void 0, this.format);
    a.view = this.view;
    a.H = this.H;
    a.N = this.N;
    a.J = this.J;
    return a
};
var Od = function (a, b, c) {
    return new Fc(a, b, c)
};
I.prototype.q = function (a, b) {
    var c = !xd(b) && b.I ? Rd(this, b.I, a) : a;
    ra(this.qa(c), "Parameter mismatch for " + this.text);
    try {
        do {
            var d = this.H(c, b), e;
            e = n(d) || d ? Od(this, n(d) ? d : "") : void 0;
            null != e ? (e.parent = b, x(b.relatedIssues, e), u(this.N, function (a) {
                a.q(c, e)
            }, this), Md(e), e.parent = void 0) : null != this.J && this.J.q(a, b)
        } while (this.b)
    } catch (f) {
        rb.testThis && (console.log("Failed: " + this.text + "\n" + f.stack), k.fail && k.fail(this.text + ": " + f))
    }
    this.clear()
};
var Rd = function (a, b, c) {
    var d = c;
    b.issueClass != a.issueClass && (1 == a.issueClass ? d = c && c.node || c : 2 == a.issueClass && (d = null != b.O ? b.O : c));
    return d
}, L = function (a, b) {
    a.J = b;
    return a
}, M = function (a, b) {
    a.format = b;
    return a
}, Sd = function (a, b) {
    a.H = b;
    return a
}, O = function (a, b) {
    a.hint = b;
    return a
}, P = function (a, b) {
    a.infoLink = b;
    return a
}, Td = function (a, b) {
    a.infoLink = "#" + b;
    return a
}, Q = function (a, b) {
    a.N = b;
    return a
}, Ud = function (a, b) {
    a.view = b;
    return a
}, Pd = M(Bd("__altered"), "hidden");
var Vd = function (a, b, c, d, e, f, g, s) {
    I.call(this, a, b, d, e, void 0, g, s);
    this.issueClass = 2;
    this.va = n(c) ? [c] : c;
    this.H = f || z;
    this.Ka = !1
};
q(Vd, I);
var Wd = function (a, b, c, d, e, f) {
    return new Vd(a, b, void 0, c, void 0, d, e, f)
}, Xd = p(Wd, "Tag", null), Yd = p(Wd, "Bucket", null), Zd = p(Wd, "Error", null), $d = p(Wd, "Fine", null), ae = p(Wd, "Group", null), R = p(Wd, "Info", null), be = p(Wd, "Warning", null), ce = p(Wd, "Suggestion", null), de = Zd("An error occured while the tag was fired", function (a) {
    return a.error
}), ee = Dd("Non-standard implementation"), fe = ce("Using secure code on non-secure page", function (a) {
    var b = E(a);
    a = Dc(a);
    return"https" == b.L && "http" == a.L
}), ge = Zd("HTTP response code indicates tag failed to fire",
    function (a) {
        a = a.statusCode;
        return!l(a) || 400 > a ? !1 : a + ""
    }, "value"), he = ce("Using non-secure code on secure page", function (a) {
    var b = E(a);
    a = Dc(a);
    return"http" == b.L && "https" == a.L
}), ie = function (a, b, c, d, e, f) {
    var g = c || z;
    c = da(e) ? e : function (a, b) {
        return b.label
    };
    return Q(M(Sd(Yd(a), function (a, b) {
        return g.call(this, a, b) ? "{$GROUP_CHILD_COUNT}_" : !1
    }), "value_status"), [M(Q(Sd(Xd(b), "boolean" == typeof e && e ? g : c), d || []), l(f) ? f : "group_status")])
}, S = function (a, b, c, d, e, f, g) {
    return new Vd("Tag", a, b, c, d, e, f, g)
}, je = function (a, b) {
    return R(a, function (a) {
        a = sc(E(a)).get(b);
        return n(a) ? a : !1
    })
}, le = function (a, b) {
    return Ud(R("URL", function (c) {
        var d = sc(E(c)).P();
        if (a && !ke(d, a) || b && ke(d, b))return!1;
        this.text = c.redirectedFrom ? "Redirected URL" : "URL";
        return c.url
    }, "link_expandable", [J("URL Encoding Error", function (a) {
        return-1 != a.label.indexOf("&amp;")
    }), ge, de, M($d("Redirected to", function (a) {
        return a.redirectUrl
    }), "hidden"), M($d("redirectedFrom", function (a) {
        return a.redirectedFrom
    }), "hidden")]), "URLs")
}, ke = function (a, b) {
    var c = b + ".";
    return!(!b || !Ba(a, function (a) {
        return b == a || 0 == a.indexOf(c)
    }))
}, T = le();
Vd.prototype.qa = function (a) {
    return l(a) && l(a.url)
};
Vd.prototype.q = function (a, b) {
    (!this.va || a && me(this, a.url)) && Vd.fa.q.call(this, a, b)
};
var me = function (a, b) {
    return m(a.va) ? w(a.va, function (a) {
        return A(RegExp(a), b)
    }) : !0
}, ne = function (a) {
    a.Ka = !0;
    return a
};
var oe = function (a, b, c, d, e, f) {
    I.call(this, a, b, c, d, void 0, f);
    this.issueClass = 3;
    this.H = e || z
};
q(oe, I);
var pe = function (a, b, c, d, e) {
    return new oe(a, b, c, d, e)
}, qe = function (a, b) {
    return new oe("CheckOnly", a, "Check only", void 0, b, void 0)
}, re = p(pe, "Error", null), se = function (a, b) {
    return qe(a, function (a) {
        b.call(this, a);
        return!1
    })
}, te = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; d++)c.push(se(a, arguments[d]));
    return c
}, ue = p(pe, "Warning", null), ve = p(pe, "Suggestion", null);
var U = function (a, b, c, d, e, f, g, s) {
    I.call(this, a, b, c, d, void 0, g, s);
    this.issueClass = 1;
    this.W = e || null;
    this.H = f || z
};
q(U, I);
var we = function (a, b, c, d, e, f) {
    return new U(a, b, c, void 0, void 0, d, e, f)
}, xe = p(we, "Tag", null), ye = p(we, "Bucket", null), V = p(we, "Error", null), ze = p(we, "Fine", null), Ae = p(we, "Group", null), W = p(we, "Info", null), Be = p(we, "Warning", null), Ce = p(we, "Suggestion", null), De = Q(Ce("Tag is included in an iframe", function () {
    return self !== top
}), [P(W("IFrame", function () {
    return self.location.href
}, "linked"), "view-source:%s")]), Ee = Ce("Tag is included in an external script file", function (a) {
    return a.externalScript
}), Fe = P(W("Script source",
    function (a) {
        return a.externalScript && a.getAttribute ? a.getAttribute("src") : !1
    }, "linked"), "view-source:%s"), Ge = Ud(W("HTML Snippet", function (a) {
    return a.outerHTML
}, "snippet"), "Code"), He = P(J("No HTTP response detected"), "https://support.google.com/tagassistant/answer/3059154?hl=en&ref_topic=2947092#http_response"), Ie = function (a, b) {
    return b.label
}, Je = function (a, b, c, d) {
    return Q(M(Sd(ye(a), function (a, b) {
        return!z || z.call(this, a, b) && "{$GROUP_CHILD_COUNT}_"
    }), "value_status"), [Q(Sd(M(xe(b), "group_status"), d ||
        Ie), c || [])])
}, Ke = function (a, b, c, d, e) {
    return new U("Tag", a, b, c, d, e, void 0, void 0)
};
U.prototype.qa = function (a) {
    return ca(a) || l(a) && l(a.nodeName)
};
U.prototype.q = function (a, b) {
    var c = ca(a) ? document : a;
    if (a.externalScript) {
        if (!this.W || 0 == this.W.indexOf("//script"))return U.fa.q.call(this, c, b)
    } else if (this.W) {
        c = da(this.W) ? this.W(c, b) : this.W;
        c = document.evaluate(c, document, null, XPathResult.ANY_TYPE, null);
        if (c.resultType == XPathResult.NUMBER_TYPE)return U.fa.q.call(this, c.numberValue, b);
        if (c.resultType == XPathResult.UNORDERED_NODE_ITERATOR_TYPE || c.resultType == XPathResult)try {
            for (var d; d = c.iterateNext();)U.fa.q.call(this, d, b)
        } catch (e) {
            rb.testThis && (console.log("Failed: " +
                this.text + "\n" + e.stack), k.fail && k.fail(this.text + ": " + e))
        }
    } else U.fa.q.call(this, c, b)
};
var Le = function (a, b) {
    a.W = b;
    return a
};
var Me = function (a, b, c, d, e, f) {
    I.call(this, a, b, c, d, void 0, f);
    this.issueClass = 4;
    this.H = e || z
};
q(Me, I);
var Ne = function (a, b, c, d, e, f) {
    I.call(this, a, b, c, d, void 0, f);
    this.H = e || this.za;
    this.issueClass = 6;
    this.scope = "Tag"
};
q(Ne, I);
var Oe = function (a, b, c) {
    return new Ne("Info", null, a, void 0, b, c)
}, Pe = function (a, b, c) {
    return new Ne("Group", a, b, void 0, Ma(c || b), "value_status")
};
Ne.prototype.za = function (a, b) {
    if ("Tag" == this.scope)return Wb(td(b) + ":" + this.text);
    if ("Domain" == this.scope && a.url) {
        var c = pc(uc(a.url));
        return Wb(c + ":" + this.text)
    }
    return"Global" == this.scope ? Wb(this.text) : !1
};
var X = function (a, b) {
    this.Oa = b;
    this.ya = null
};
h = X.prototype;
h.la = function (a) {
    Ua(this.B(), function (b, c) {
        u(b, function (b) {
            var e = H(a.issues, [b.category || "ignore template"]);
            u(e, function (e) {
                (e = F(e, c)) && b.q(a, e)
            })
        })
    })
};
h.Y = function (a) {
    var b = Mc(a);
    u(this.ga(), function (c) {
        c.q(a, b)
    })
};
h.ra = function (a) {
    var b = Mc();
    u(this.Na(), function (c) {
        u(a, function (a) {
            c.q(a, b)
        })
    });
    return b.relatedIssues
};
h.$ = function (a, b) {
    if (n(b))return this.$(a, [
        {url: b, Za: 200}
    ]);
    if (!m(b))return this.$(a, [b]);
    var c = 0, d = this.r();
    u(b, function (b) {
        u(d, function (d) {
            var g = Mc();
            d.q(b, g);
            c += g.relatedIssues.length;
            u(g.relatedIssues, function (b) {
                var c = dd(a);
                Qe(this, c, b) || (c = v(c, function (a) {
                    return this.ua(a, b)
                }, this), c.length ? u(c, function (a) {
                    this.ma(a, b)
                }, this) : (c = new Fc(b), c.issueClass = 7, c.relatedIssues = [b], G(b.relatedIssues, ee.text) && x(c.relatedIssues, new Fc(ee)), x(a, c)))
            }, this)
        }, this)
    }, this);
    Re(a);
    return c
};
h.wa = function () {
    if (null === this.ya) {
        var a = [], b = v(this.w(), function (b) {
            return a[b.category] ? !1 : a[b.category] = !0
        });
        this.ya = xa(b, function (a) {
            var b = sa(a.category);
            a = sa(a.infoLink);
            return new Ac(b, a)
        })
    }
    return this.ya
};
var Se = function (a) {
    return v(a.r(), function (a) {
        return a.Ka
    })
};
h = X.prototype;
h.ga = function () {
    return[]
};
h.Na = function () {
    return[]
};
h.B = function () {
    return{}
};
h.v = function () {
    return w(this.wa(), function (a) {
        return cd(a.name)
    })
};
h.ua = function (a, b) {
    return a.text == b.text && a.label == b.label
};
var Te = function (a, b, c) {
    var d = id(b, "Bucket");
    if (0 < d.length)return c = id(c, "Bucket"), u(c, function (a) {
        var c = Ba(d, function (b) {
            return a.text == b.text
        });
        c ? u(a.relatedIssues, function (a) {
            var b = v(c.relatedIssues, function (b) {
                return this.ua(b, a)
            }, this);
            0 < b.length ? Jc(b[0], a) : Hc(c, a)
        }, this) : Hc(b, a)
    }, a), 0 < c.length
};
X.prototype.ma = function (a, b) {
    7 == b.issueClass ? u(b.relatedIssues, ga(this.ma, this, a)) : (G(b.relatedIssues, ee.text), G(a.relatedIssues, He.text), Te(this, a, b) || Jc(a, b))
};
var Qe = function (a, b, c) {
    Kc(b);
    Kc([c]);
    var d = !1;
    if (2 == !c.issueClass)return d;
    var e = F(c, "Redirected URL");
    if (null !== e) {
        var f = e.label;
        return w(b, function (a) {
            var b = nd(a, "Redirected to", f);
            if (b) {
                b.deleted = "Resolved redirected issue";
                var b = rd(b), c = rd(e);
                qd(b) && !qd(c) ? c = e : d = !0;
                Ic(a.relatedIssues, c.relatedIssues);
                Jc(b, c)
            }
            return d
        }, a)
    }
    return d
}, Re = function (a) {
    a = id(a, "Bucket");
    u(a, function (a) {
        for (var c = 0; c < a.relatedIssues.length; c++)a.relatedIssues[c].text = a.relatedIssues[c].text.replace("${bucketIndex}", c +
            1 + ""), a.relatedIssues[c].text = a.relatedIssues[c].text.replace("${bucketIndex}", c + 1 + "")
    })
};
var Ue = function () {
    this.oa = {}
};
aa(Ue);
var Ve = function (a, b, c) {
    var d = Ue.c(), e = d.oa[a];
    l(e) || (e = {}, d.oa[a] = e);
    e[b] = c
}, We = function (a, b, c, d) {
    a = Ue.c().oa[a];
    l(a) && da(a[b]) && a[b](c, d)
}, Xe = function (a) {
    delete Ue.c().oa[a]
};
var Ye = function () {
    this.R = [];
    this.Ha = {};
    this.Ga = {}
};
aa(Ye);
var Ze = "chrome-extension: .doubleclick.net .cloudfront.net com.atlassian. .facebook.com .facebook.net apis.google.com .google-analytics.com .googlesyndication.com .googleapis.com .google.com/tagmanager/ jquery sitecatalyst.js .twitter.com".split(" ");
Q(M(K("Script", function (a) {
    if (null != this.b) {
        if (this.b++, this.b == document.scripts.length)return this.b = null, !1
    } else this.b = 0;
    var b = document.scripts[this.b];
    this.infoLink = b.src;
    return l(b.src) && "" != b.src && !md(a.relatedIssues, b.src) && !$e(Ye.c(), b.src) && b.src
}), "link_expandable_with_path"), [Ce("Found <script> tag with empty src attribute.", function (a) {
    return document.location.href == a.label
})]);
var bf = function (a) {
    var b = Oe("Check Contained Tags", af, "update_button");
    b.category = a;
    return b
}, cf = function (a, b, c) {
    var d = {};
    u(b, function (b) {
        if ("Tag" == b.type && b.label != a && 5 < b.label.length && 128 > b.label.length) {
            var f = ya(b.label.split(";"), function (a) {
                return RegExp("['\"/=;&]" + a + "['\"/=;&]").test(c)
            });
            d[b.label] = f
        }
    });
    return d
}, df = function (a, b, c) {
    return a && !w(b, function (b) {
        return b.label != c && "Tag" == b.type && !l(a[b.label])
    })
}, af = function (a, b) {
    var c = Ye.c(), d = td(b);
    if ((c = c.Ga[d]) && l(b)) {
        var e = F(b, T.text);
        if (e) {
            var f =
                e.label;
            Ve(a.tabId, d + ":" + this.text, function (a, c) {
                ef(a.issues, td(b), f, c)
            })
        }
    }
    return c || ""
}, ef = function (a, b, c, d) {
    ff(c, function (c) {
        var f = Ye.c();
        c = cf(b, a, c.responseText);
        f.Ha[b] = c;
        f.Ga[b] = (new Date).getTime() + "";
        gf(a, b, c);
        d()
    })
}, ff = function (a, b) {
    try {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        var d = !1;
        c.onreadystatechange = function () {
            d || 4 != c.readyState || 200 != c.status || (d = !0, b(c))
        };
        c.send()
    } catch (e) {
    }
}, jf = function (a) {
    hf(Ye.c(), a)
}, hf = function (a, b) {
    La(a.R, b, function (a, b) {
        return a.Oa > b.Oa ? 1 : -1
    })
}, lf = function (a) {
    u(a,
        function (a) {
            var c = id(a, "Error", "Bucket");
            kf(c);
            a = id(a, "Bucket");
            u(a, function (a) {
                a = id(a, "Error");
                kf(a)
            })
        })
};
Ye.prototype.la = function (a) {
    Qc(a.issues, [6]);
    Kc(a.issues);
    u(this.R, function (b) {
        b.v() && b.la(a)
    });
    yd(a.issues)
};
Ye.prototype.Y = function (a) {
    Qc(a, [3]);
    u(this.R, function (b) {
        b.v() && b.Y(a)
    });
    lf(a);
    yd(a)
};
Ye.prototype.ra = function (a, b) {
    var c = [];
    $e(this, a) || u(this.R, function (a) {
        a.v() && Ha(c, a.ra(b))
    });
    return yd(c)
};
Ye.prototype.$ = function (a, b) {
    var c = 0;
    Kc(a);
    u(this.R, function (d) {
        d.v() && (c += d.$(a, b))
    });
    c && this.Y(a);
    return c
};
var nf = function (a, b, c) {
    var d = mf(a);
    u(d, function (a) {
        a = H(b, [a.category || ""]);
        u(a, function (a) {
            var d = a.label, e = this.Ha[d];
            df(e, b, d) ? (gf(b, d, e), c()) : (a = hd(a, T.text), u(a, function (a) {
                ef(b, d, a.label, c)
            }))
        }, this)
    }, a)
}, mf = function (a) {
    var b = [];
    u(a.R, function (a) {
        a.v() && Ha(b, Se(a))
    }, a);
    return b
}, of = function () {
    var a = Ye.c(), b = [];
    u(a.R, function (a) {
        Ha(b, a.wa())
    });
    b.sort(function (a, b) {
        return a.name.localeCompare(b.name)
    });
    return b
};
Ye.prototype.m = function () {
    var a = [];
    u(this.R, function (b) {
        b.v() && Ha(a, b.m())
    });
    return a
};
var kf = function (a) {
    u(a, function (b) {
        b = Zc(a, b.text, b.label);
        for (var c = 1; c < b.length; c++)b[c].deleted = "SameError"
    })
}, $e = function (a, b) {
    return w(Ze, function (a) {
        return 0 <= b.indexOf(a)
    }) || rb.testThis && D("ManualScriptParsing") && w((D("IgnoreExternalScripts") || "").split("\n"), function (a) {
        return 0 < a.length && 0 <= b.indexOf(a)
    }) ? !0 : w(mf(a), function (a) {
        return me(a, b)
    }, a)
}, gf = function (a, b, c) {
    var d = md(a, b);
    null === d || d.category && Ua(c, function (c, f) {
        if (c) {
            var g = bd(a, f);
            G(g, ee.text);
            var s = Od(Fd, d.category || "", b);
            u(g, function (a) {
                F(a,
                    s.text) || Hc(a, new Fc(s));
                0 == bd(d, [f]).length && Hc(d, new Fc(Gd, a.category || "", f))
            })
        }
    })
};
var Pa = function (a) {
    switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return!0;
        default:
            return!1
    }
};
var pf = {"Service temporarily unavailable": 0, "Not valid": 1, Error: 2, "No items in stock": 3, "Requesting info": 4, Validated: 5, "Not validated yet": 6, Error: 7};
R("Status");
var qf = function (a) {
    a = (a = pd(sd(a))) ? hd(a, "URL") : [];
    return xa(a, function (a) {
        return a.label
    })
}, sf = function (a) {
    a = pd(sd(a));
    u(a ? a.relatedIssues : [], function (a) {
        var c = a.ob("URL"), d = "Not validated yet";
        w(c, function (a) {
            a = rf(a.label);
            d = D(a + "s");
            return!!d
        });
        (a = F(a, "Status")) && (a.label = d + "")
    })
}, tf = function (a) {
    var b = "Not validated yet";
    u(a, function (a) {
        a = rf(a);
        a = D(a + "s");
        pf[a] < pf[b] && (b = a)
    });
    return b
}, uf = function (a) {
    var b = null;
    u(a, function (a) {
        a = rf(a);
        a = Wb(a + "t");
        if (!a)b = ""; else if (!b || b.length && b < a)b = a
    });
    return b ||
        ""
}, yf = function (a, b) {
    var c = b.label, d = qf(b);
    this.format = "button_inactive";
    if (d.length && "" != c) {
        Ve(a.tabId, td(b) + ":" + this.text, function () {
            vf(b, c, d)
        });
        var e = tf(d);
        this.type = xf(e);
        b.parent.label = e;
        e = uf(d);
        this.format = "update_button";
        return!!d.length && e
    }
    b.parent.label = "Not validated yet";
    this.type = "Suggestion";
    return!!d.length && ""
}, xf = function (a) {
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
}, zf = function (a, b) {
    va(b, Fc);
    var c = this.za(a, b);
    if ("" != c) {
        var d = b.label, e = qf(b);
        ya(e, function (a) {
            a = rf(a);
            return!!Wb(a + "t")
        }) || vf(b, d, e)
    }
    return c
}, Cf = function () {
    return[Q(Pe(Af.category, "Validate Products"), [Q(M(Oe("Google Merchant Center ID", function (a, b) {
        var c = qf(b);
        this.text = w(c, function (a) {
            a = uc(a);
            a = Bf(a);
            return!!a && (0 <= a.indexOf("ecomm_") || A(/prod(?:oduct)?_?id/i, a))
        }) ? "Google Merchant Center ID" : "Feed ID";
        return this.za(a, b)
    }), "textfield"), [Oe("Validate", yf), Oe("Auto validation",
        zf, "checkbox")])])]
}, vf = function (a, b, c) {
    var d = this, e = (new Date).getTime() + "", f = {};
    u(c, function (a) {
        a = rf(a);
        f[a + "s"] = "Requesting info";
        f[a + "t"] = e
    });
    $b(f);
    var g = xa(c, function (a) {
        return{feedId: b, smartPixelUrl: a}
    }), s = r("%s?key=%s", "https://www.googleapis.com/dynamiccreatives/v1/gpa_offers/getvalidatedoffers", "AIzaSyCrG7PQT-YTwJ4-mYB7IOOeaZu_CSawr7M"), y = new XMLHttpRequest;
    y.open("POST", s, !0);
    y.setRequestHeader("Content-Type", "application/json");
    y.onreadystatechange = function () {
        if (4 == y.readyState)if (Pa(y.status)) {
            var b =
                JSON.parse(y.responseText);
            Df(c, b);
            sf(a);
            d.label = tf(c)
        } else {
            var f = 404 == y.status ? "Not valid" : 503 == y.status ? "Service temporarily unavailable" : "Error", g = {};
            u(c, function (a) {
                a = rf(a);
                g[a + "s"] = f;
                g[a + "t"] = e
            });
            $b(g);
            sf(a);
            d.label = f
        }
    };
    y.send(JSON.stringify({offers: g}))
}, Df = function (a, b) {
    var c = {};
    b.kind ? b.offers ? u(a, function (a) {
        var e = rf(a), f = Ba(b.offers, function (b) {
            return b.smartPixelUrl == a
        });
        c[e + "s"] = "Validated";
        f ? (0 == f.number && (c[e + "s"] = "No items in stock"), f.validated || (c[e + "s"] = "Error")) : c[e + "s"] = "Error"
    }) :
        u(a, function (a) {
            a = rf(a);
            c[a + "s"] = "Error"
        }) : u(a, function (a) {
        a = rf(a);
        c[a + "s"] = "Service temporarily unavailable"
    });
    $b(c)
}, rf = function (a) {
    var b = uc(a), c = tc(b, "url"), c = c ? pc(uc(decodeURIComponent(c))) : "", b = Bf(b);
    return"remarketing:" + c + "/-/" + (b || a) + ";"
}, Bf = function (a) {
    var b = a.o;
    a = b.get("data");
    var c = v(a ? a.toString().split(";") : [], function (a) {
        return 0 < a.length
    });
    u(b.P(), function (a) {
        0 == a.indexOf("data.") && c.push(a.substring(5) + "=" + escape(b.get(a) + ""))
    });
    return c.join(";")
};
var Ef = function () {
    X.call(this, 0, 1)
};
q(Ef, X);
var Ff = {Ua: "AdWords Conversion Tracking", M: "Remarketing Tag (old)", Va: "Remarketing Tag (new)"}, Gf = r("%s ${%s}", "AdWords Conversion Tracking", "Conversion ID"), Hf = r("%s ${%s}", "Remarketing Tag (old)", "Conversion ID"), If = r("%s ${%s}", "Remarketing Tag (new)", "Conversion ID"), Jf = Id("AdWords Conversion Tracking", Gf, "https://support.google.com/tagassistant/answer/2947038?ref_topic=2947092"), Af = Id("Remarketing Tag (new)", If, "https://support.google.com/tagassistant/answer/2978937?ref_topic=2947092"), Kf = Id("Remarketing Tag (old)",
    Hf, "https://support.google.com/tagassistant/answer/2978937?ref_topic=2947092"), Lf = {Ua: Jf, Va: Af, M: Kf};
Ef.prototype.wa = function () {
    var a = [];
    Ua(Lf, function (b) {
        x(a, new Ac(b.category, b.infoLink))
    });
    return a
};
var Mf = r("<%s> tag found.", "iframe"), Nf = r("<%s> tag found.", "img"), Of = r("<%s> tag found.", "noscript"), Pf = function (a) {
        var b = Fb([/(?:viewthrough)?conversion\/([^/?]*)/, /^((?![?]ai=)(.|\n))*$/], a);
        return n(b) ? (0 == b.length && (b = "undefined"), a = B(/[&?;#]label=([^&?#]*)/, a), n(a) ? b + ";" + a : b) : b
    }, Qf = function (a) {
        a = a.label.split(";")[0];
        this.format = "copyable";
        return"undefined" == a ? "not set" : a
    }, Rf = function (a) {
        a = B(/[^;]*;(.*)/, a.label);
        return"boolean" == typeof a || "undefined" == a ? "not set" : a
    }, Sf = ue("Conversion value missing in <noscript> tag."),
    Tf = ve("Update the Remarketing code to the new version."), Uf = Dd("Both <script> and <iframe> used."), Vf = J("Mismatch of conversion ID in <script> tag and <%s> tag."), Wf = J("Mismatch of conversion label in <script> tag and <%s> tag."), Xf = re("Missing <noscript> tag.");
Ef.prototype.m = function () {
    return["*://*.googleadservices.com/pagead/*", "*://googleads.g.doubleclick.net/pagead/*", "*://*.teracent.net/*", "*://www.google.com/ads/*"]
};
var Yf = function (a) {
    var b = a.url, c = a.redirectUrl;
    a = E(a);
    var d = !!a.o.get("data");
    d || (d = w(a.o.P(), function (a) {
        return 0 == a.indexOf("data.")
    }));
    return d ? !0 : a.o.get("value") ? !1 : 1 < b.indexOf("googleads.g.doubleclick.net/pagead/") || 1 < b.indexOf("www.google.com/ads/user-lists/") || c && 1 < c.indexOf("www.google.com/ads/user-lists/")
};
Ef.prototype.r = function () {
    return[S("Remarketing Tag (new)", ["www.google.com/ads/user-lists/"], If, Jf.infoLink || "", function (a) {
        var b = qc(E(a));
        return(b = B(/\/ads\/user-lists\/(\d*)\//, b)) ? (a = tc(E(a), "label"), l(a) ? b + ";" + a : b) : !1
    }, "", [P(K("Conversion ID", Qf), void 0), M(K("Conversion Label", Rf), "copyable"), M(R("Troubleshoot", function (a) {
        return(a = a.redirectedFrom) && 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/") ? (a = a.concat("&deb=c2&srr=n"), a.hasOwnProperty("fmt") || (a = a.concat("&fmt=1")), this.infoLink =
            a = a.replace("script=0", "script=1"), "redirect url") : !1
    }), "hidden"), T]), S("AdWords Conversion Tracking", ["googleadservices.com/pagead/", "googleads.g.doubleclick.net/pagead/"], Gf, Jf.infoLink || "", function (a) {
        Yf(a) ? Qd(Af, this, "URL detected as smart pixel.") : sc(E(a)).get("value") ? Qd(Jf, this, "URL contains value param.") : Qd(Kf, this, "URL does not contain value param.");
        return Pf(a.url)
    }, "", [P(K("Conversion ID", Qf), void 0), M(K("Conversion Label", Rf), "copyable"), R("data anchor", function (a) {
            a = E(a);
            return!!Bf(a)
        },
        "hidden", [Zf()]), je("Conversion Value", "value"), be("Ref/URL GET param did not match with actual URL.", function (a) {
        var b = E(a);
        a = Dc(a);
        if (!l(a))return!1;
        a = a.U;
        var c = tc(b, "url");
        if (l(c) && a == pc(uc(c)))return!1;
        b = tc(b, "ref");
        return l(b) && a == pc(uc(b)) ? !1 : l(c) || l(b)
    }), Td(fe, "http_https"), Td(he, "http_https"), L(R("Implemented in Teracent.", function (a) {
        return(a = a.redirectedFrom) && 0 <= a.indexOf(".teracent.") ? a : !1
    }, "link_expandable"), ee), le(null, "data")])]
};
var Zf = function () {
    var a = Q(R("Data", function (a) {
        a = E(a);
        return Bf(a)
    }, "map"), [J("Multiple product IDs need to be stored in an array.", function (a) {
        return A(/prodid=[^;]*\\,/, a.label)
    })]);
    return ie("Requests", "Request", function (a) {
        a = E(a);
        return!!Bf(a)
    }, [a, le("data").j([K("Last checked", function (a) {
        a = rf(a.label);
        a = D(a + "t");
        return n(a) && a
    }), M(K("Status", function (a) {
        a = rf(a.label);
        a = Wb(a + "s");
        return n(a) ? (this.type = xf(a), !!a && "" != a && a) : "Not validated yet"
    }), "value")])])
};
Ef.prototype.B = function () {
    var a = {};
    a["data anchor"] = Cf();
    return a
};
Ef.prototype.ua = function (a, b) {
    return a.label == b.label && (a.category == Jf.category || a.category == Af.category || a.category == Kf.category)
};
var $f = function (a, b) {
    return[Q(P(K("Conversion ID", Qf), void 0), [L(Td(J("Conversion ID not set" + a + ".", function (a) {
        return a && "not set" == a.label ? "not set" : a && "1234567890" == a.label ? "invalid" : !1
    }), "id_not_set"), L(J("Conversion ID should not have quotations around it.", function (a) {
        var b = a.parent.label.split(";"), e = B(/['"](\d*)['"]/, b[0]);
        return n(e) ? (b[0] = e, a.label = e, a.parent.label = b.join(";"), !0) : !1
    }), J("Conversion ID malformed" + a + ": %s.", function (a) {
        var b = a.parent.label.split(";"), e = B(/[^0-9]*([0-9]*)/,
            b[0]);
        if (b[0] != e) {
            var f = b[0];
            b[0] = n(e) && "" != e ? e : "undefined";
            a.parent.label = b.join(";");
            return f
        }
        return!1
    })))]), Q(M(K("Conversion Label", Rf), "copyable"), [Td(J("Conversion label not set" + a + ".", function (a) {
        return a && "not set" == a.label ? "not set" : !1
    }), "label_not_set")]), Q(W("Conversion Value" + a, function (a, d) {
        return b && "AdWords Conversion Tracking" == d.category ? b.call(this, a, d) || "not set" : !1
    }), [L(Td(Dd("Conversion value not set" + a + ".", function (a) {
        return"not set" == a.label
    }), "value_not_set"), Td(J("Dynamic conversion value in wrong format" +
        a + ".", function (a) {
        return!Cb(a.label)
    }), "dynamic_value"))]), He]
}, ag = function (a) {
    var b = "noscript" == a ? "text()" : "@src";
    return Q(Ke("AdWords Conversion Tracking", Gf, Jf.infoLink || "", r('//%s[contains(%s, "%s") or contains(%s, "%s")]', a, b, "googleadservices.com/pagead/", b, "googleads.g.doubleclick.net/pagead/"), function (a) {
        a = a.getAttribute("src") || a.textContent;
        A(/[?&]data(?:\.[a-zA-Z0-9_]+)?=/, a) || 0 <= a.indexOf("googleads.g.doubleclick.net/pagead/") ? Qd(Af, this, "data param in DOM src") : A(/value=/, a) ? Qd(Jf, this,
            "has value in DOM src URL") : Qd(Kf, this, "no value in DOM src URL");
        return Pf(a)
    }), $f(r(" in the <%s> tag", a), function (a) {
        a = a.getAttribute("src") || a.textContent;
        return B(/[&?;#]value=([^&?#]*)/, a)
    })).j([Ud(W(r("<%s> tag found.", a), function (a) {
        return la(a.outerHTML, 3E3)
    }, "snippet"), "Code"), Ce("Update to script based tracking.", function () {
        return"i" == a[0]
    })])
}, bg = function () {
    var a = /google_conversion_id\s*=\s*(?:[a-zA-Z._]*\s*=\s*)?([^;,]*)/g, b = Q(Ke("AdWords Conversion Tracking", Gf, Jf.infoLink || "", "//script",
        function (b) {
            var d = A(/google_conversion/i, b.textContent) && ub(a, b.textContent);
            this.b = a.lastIndex;
            if (!d)return!1;
            var e = "" == d[1] ? "undefined" : d[1], f;
            f = f || "";
            b = b.textContent.substring(d.index).replace(/\\\\/g, "__TA_BACKSLASH__").replace(/\\'/g, "__TA_SINGLE_QUOTE__").replace(/\\"/g, "__TA_DOUBLE_QUOTE__");
            d = B(RegExp("(?:^|[; \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*\\'([^\\']*)\\'\\s*(?:[;,\n]|$)", f), b);
            n(d) || (d = B(RegExp('(?:^|[;, \\t\\n])(?:\\w*\\.)*google_conversion_label\\s*=\\s*"([^"]*)"\\s*(?:[;,\n]|$)',
                f), b));
            f = d && d.replace(/__TA_BACKSLASH__/g, "\\\\").replace(/__TA_SINGLE_QUOTE__/g, "\\'").replace(/__TA_DOUBLE_QUOTE__/g, '\\"');
            n(f) && (e = e + ";" + f);
            return e
        }), $f("", function (a, b) {
        var e = b.label.split(";"), e = 1 < e.length ? e[1] : "";
        "not set" == e && (e = "");
        return Gb([RegExp(e + "(?:[^}])*google_conversion_value\\s*=\\s*([^;,}\\s]*)"), RegExp("google_conversion_value\\s*=\\s*([^;,}\\s]*)(?:.|\\n)*?" + b.label.split(";")[1])], a.textContent)
    }));
    Ha(b.N, [M(ze("Remarketing Only Flag", function (a, b) {
        var e = B(/google_remarketing_only\s*=\s*([a-z01!]+)/,
            a.textContent);
        n(e) && tb(e) ? Qd(Af, b, "google_remarketing_only") : e && Qd(Jf, b, "no remarketing marker in script");
        return e
    }), "hidden"), ze("Code Template", function (a) {
        return 0 < a.textContent.indexOf("goog_report_conversion") ? "Call on-site" : !1
    }), V("Missing conversion.js script.", function () {
        return!w(document.scripts, function (a) {
            return a.src && A(/[/]conversion(_async)?.js/, a.src)
        })
    }), Td(V("Missing closing \x3c/script> tag.", function (a) {
        return!a.externalScript && Fb([/\/\*\s*<!\[CDATA\[\s*\*\//, /\/\*\s*]]\x3e\s*\*\//,
            /<script.*>/], a.textContent)
    }), "missing_closing"), Td(V("Incorrect script attribute.", function (a) {
        return null != a.getAttribute("language")
    }), "script_attribute"), Td(Be("Missing CDATA comments.", function (a) {
        return Jb(a.textContent)
    }), "cdata_comments"), Td(Ce("Missing line breaks may cause issues.", function (a) {
        a = a.textContent.replace(/[\t ]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();
        return n(a) && 100 < a.length && a.split("\n").length < (-1 != a.indexOf("CDATA") ? 5 : 3)
    }), "line_break"), L(Td(V("Code found outside of <body> tag.",
        function (a) {
            if (!a.externalScript) {
                for (; a = a.parentNode;)if ("BODY" == a.tagName)return!1;
                return!0
            }
            return!1
        }), "body_tags"), Td(Ce("Code should be placed directly above the closing <body> tag.", function (a) {
        return!a.externalScript && "BODY" != a.parentNode.tagName
    }), "body_tags")), Ud(W(r("<%s> tag found.", "script"), function (a) {
        var b = ub(/google_conversion_id\s*=\s*([^;,]*)/mi, a.textContent);
        return Mb(b.index, a.textContent, 50)
    }, "snippet"), "Code"), Le(Q(M(W("Conversion tag parameters snippet", function (a) {
            return xb(a.textContent)
        }),
        "hidden"), [J("Conversion tag parameters object not correctly formed.", Nd(function (a) {
        a = a.replace(/\s*\n\s*/g, "");
        return!A(/\{(?:.|\n)*\}$/, a)
    })), J("Keys and values must be separated using colons.", Nd(yb)), J("Missing commas in between key-value element pairs.", Nd(Bb)), Q(M(K("Conversion tag parameters", function (a) {
        a = a.label.replace(/\s*\n\s*/g, "");
        return B(/^\s*\{?(.+?)\}?\s*$/m, a)
    }), "json"), [Dd("Pass multiple values in an array.", Nd(Eb)), J("Value passed as array has misplaced quotes.", Nd(Ab)), Ed("Missing quotes around the string values of the object.",
        Nd(Db)), J("Attribute key contains space or non-ASCII characters.", function (a) {
        a = zb(a.label);
        return w(a, function (a) {
            a = a.split(":");
            return 1 < a.length && !B(/^["|']?\s*[a-zA-Z0-9_]+\s*["|']?$/g, a[0])
        })
    })])]), '//script[contains(text(), "google_tag_params")]'), M(W("Report Conversion", function (a) {
        return B(/goog_report_conversion/, a.textContent)
    }), "hidden"), De, Ee, Fe]);
    return b
};
Ef.prototype.w = function () {
    return[bg(), ag("img"), ag("iframe"), ag("noscript")]
};
var dg = function (a) {
    var b = H(a, Va(Ff)), c = v(b, function (a) {
        return 0 == $c(a, [Nf, Of])
    });
    u(["iframe", "img", "noscript"], function (d) {
        var e = Yc(b, r("<%s> tag found.", d));
        e.length && u(c, function (b) {
            var c = gd(e, b.label);
            u(c, function (c) {
                var e = !l(b.parent);
                if ("Tag" == c.type && b != c && e) {
                    e = "Conversion Value" + r(" in the <%s> tag", d);
                    e = F(c, e);
                    if (null != e) {
                        var g = F(b, "Conversion Value");
                        if (null != g && g.label != e.label) {
                            var ua = parseFloat(g.label), N = parseFloat(e.label);
                            if ("not set" != g.label && isNaN(ua) && !isNaN(N) && !A(/^\s*[$\u20ac\u00a2\u00a3]?\s*[0-9.]+/,
                                g.label))g.label = e.label, Sc(g, "Dynamic conversion value in wrong format"); else if (isNaN(ua) || ua != N)g = r("Conversion value mismatch between <script> and <%s> tag.", d), Hc(e, Od(J(g), e.label))
                        } else Rc(c, e.text, e.label)
                    }
                    G(c.relatedIssues, He.text);
                    G(c, "Update to script based tracking.");
                    Da(a, c);
                    cg(b, c);
                    "iframe" == d && Hc(b, Od(Uf))
                }
            })
        })
    })
}, cg = function (a, b) {
    u(["Conversion ID malformed", "Conversion label not set", "Conversion value missing in <noscript> tag.", "Dynamic conversion value in wrong format"], function (c) {
        od(a,
            c) && Sc(b, c)
    });
    Jc(a, b)
};
Ef.prototype.Pa = function (a, b, c) {
    var d = H(c, ["AdWords Conversion Tracking", "Remarketing Tag (new)", "Remarketing Tag (old)"]), e = v(d, function (a) {
        return 1 == a.issueClass
    }), d = v(e, function (a) {
        return 0 == $c(a, [Nf, Mf, Of])
    });
    b = Yc(e, b);
    d = v(d, function (a) {
        return 0 == ad(a, Of).length
    });
    for (e = 0; e < d.length; e++) {
        var f = !1, g = d[e];
        if (0 < b.length) {
            if ("undefined;undefined" == g.label)var s = Ia(b, 0, 1)[0], f = !0; else if (0 == g.label.indexOf("undefined;"))var y = ad(b, "Conversion Label", g.label.split(";")[1]), f = 0 != y.length; else if (0 < g.label.indexOf(";undefined") ||
                1 == g.label.split(";").length)y = ad(b, "Conversion ID", g.label.split(";")[0]), f = 0 != y.length;
            y && 0 < y.length ? s = y[0] : s || e != d.length - b.length || (s = b[0])
        }
        s && (f ? (g.label = s.label, f = F(g, "Conversion ID"), f.label = g.label.split(";")[0], Sc(f, "Conversion ID not set"), F(g, "Conversion Label").label = Rf(g)) : Hc(g, Od(s.label.split(";")[0] == g.label.split(";")[0] ? Wf : Vf, a, "details")), (f = ld(s)) ? (this.ma(g, f), Oc(s.relatedIssues, f)) : G(s.relatedIssues, He.text), f = Od(M(Ae("<" + a + "> tag"), "group"), ""), cg(f, s), cg(g, f), Da(c, s))
    }
};
var eg = function (a) {
    a = H(a, ["AdWords Conversion Tracking", "Remarketing Tag (new)", "Remarketing Tag (old)"]);
    u(a, function (a) {
        1 != a.issueClass || nd(a, "Code Template", "Call on-site") || F(a, Of) || F(a, Ee.text) || !F(a, r("<%s> tag found.", "script")) || od(a, r(Fd.text, "")) || Hc(a, Od(Xf))
    })
};
Ef.prototype.Ta = function (a) {
    var b = H(a, ["AdWords Conversion Tracking", "Remarketing Tag (old)", "Remarketing Tag (new)"]), c = ad(b, ee.text);
    if (0 != c.length && (b = ad(b, He.text), 0 != b.length)) {
        var d = v(b, function (b) {
            var d = B(/([0-9])+;[^ ]+/, b.label);
            return n(d) && (d = ad(c, "Conversion ID", d), 0 < d.length) ? (Oc(c, d[0]), Oc(a, d[0]), fg(this, b, d[0]), !0) : !1
        }, this);
        u(d, p(Oc, b));
        d = v(b, function (b) {
            if (!B(/([0-9])+;[^ ]+/, b.label) && 0 < c.length) {
                var d = c.pop();
                Oc(a, d);
                fg(this, b, d)
            }
        }, this)
    }
};
var fg = function (a, b, c) {
    Sc(b.relatedIssues, "Conversion ID malformed");
    Sc(b.relatedIssues, "Conversion ID not set");
    Sc(b.relatedIssues, "Conversion label not set");
    b.category = c.category;
    b.text = c.text;
    b.label = c.label;
    Lc("Conversion ID", c, b);
    Lc("Conversion Label", c, b);
    a.ma(b, c)
}, gg = function (a) {
    a = H(a, ["AdWords Conversion Tracking"]);
    u(a, function (a) {
        if (!od(a, "Dynamic conversion value in wrong format")) {
            var c = F(a.relatedIssues, "Remarketing Only Flag");
            if (c)tb(c.label) ? (Qd(Af, a, "Remarketing Only Flag true"),
                Sc(a, "Conversion Value")) : Qd(Jf, a, "Remarketing Only Flag false"); else if (kd(a.relatedIssues))Qd(Af, a, "AWCT tag does have smart pixel child."), Sc(a, "Conversion Value"); else if (!c || tb(c.label)) {
                var d = ad(a.relatedIssues, Nf), c = ad(a.relatedIssues, Of);
                1 == d.length && "Remarketing Tag (old)" == d[0].category || 0 == d.length && 1 == c.length && "Remarketing Tag (old)" == c[0].category ? (Qd(Kf, a, "AWCT img tag is remarketing."), Sc(a, "Conversion Value")) : 1 == d.length && 1 == c.length && "Remarketing Tag (old)" == c[0].category && (a = Od(Sf),
                    Hc(c[0], a))
            }
        }
    })
}, hg = function (a) {
    a = H(a, ["Remarketing Tag (old)"]);
    u(a, function (a) {
        F(a.relatedIssues, "Remarketing Only Flag") || kd(a.relatedIssues) && Qd(Af, a, "Remarketing tag does have smart pixel child")
    })
}, ig = function (a) {
    a = H(a, ["Remarketing Tag (old)"]);
    u(a, function (a) {
        Hc(a, Od(Tf))
    })
}, jg = function (a) {
    a = ed(a, Va(Ff));
    u(a, function (a) {
        G(a, "Missing conversion.js script.")
    })
}, kg = function (a) {
    a = H(a, ["Remarketing Tag (new)"]);
    u(a, function (a) {
        var c = F(a, "Data");
        a = hd(a, "Conversion tag parameters");
        c && 0 < a.length &&
        u(a, function (a) {
            G(a, "Missing quotes around the string values of the object.");
            vd(a.relatedIssues, "Error") || vd(a.relatedIssues, "Suggestion") || (a.deleted = "Data found")
        })
    })
}, lg = function (a) {
    a = H(a, ["Remarketing Tag (new)"]);
    Rc(a, "Conversion Label", "not set")
}, mg = function (a) {
    a = H(a, ["Remarketing Tag (new)", "Remarketing Tag (old)"]);
    G(a, "Conversion Value")
}, ng = function (a) {
    a = H(a, ["AdWords Conversion Tracking", "Remarketing Tag (old)"]);
    G(a, "Conversion tag parameters")
}, og = function (a) {
    F(a, "Report Conversion") &&
    (a = F(a, "No HTTP response detected")) && (a.type = "Info")
};
Ef.prototype.ga = function () {
    var a = [];
    Ha(a, te("AdWords Conversion Tracking", dg, ga(this.Pa, this, "noscript", Of), ga(this.Pa, this, "img", Nf), og, ga(this.Ta, this), gg), te("Remarketing Tag (old)", hg, ig), te("Remarketing Tag (new)", kg, lg, mg), te("AdWords Conversion Tracking", jg, eg, ng));
    return a
};
jf(new Ef);
var pg = function () {
    X.call(this, 0, 99)
};
q(pg, X);
pg.prototype.m = function () {
    return["*://*.channelintelligence.com/*"]
};
var qg = M(K("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
pg.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("Channel Intelligence")];
    return a
};
pg.prototype.r = function () {
    return[M(ne(S("Channel Intelligence", "channelintelligence.com/", "Channel Intelligence", "http://www.google.com/ads/channelintelligence/", p(Hb, /.channelintelligence\.com\/([^_]*)_landing.js/), "", [qg, fe, he, T])), "unchecked")]
};
pg.prototype.w = Ma([]);
pg.prototype.v = z;
jf(new pg);
var rg = function () {
    X.call(this, 0, 3)
};
q(rg, X);
var sg = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(jump|ad[ijflx]?)\/.*N(\d+)\.([\d\w\.]+)\/B(\d+)/i, tg = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/clk[;&]([^;&]*)[;&]([^;&]*)[;&]/i, ug = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.mo\.doubleclick\.net\/dartproxy\/dfa\.(?:click|mobile)\.handler\?k=N(\d+)\.([\d\w\.]+)\/B(\d+)/i, vg = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/N?(\d+)?.*(ad[ijflx]?)\/([^;&]*)[;&].*[;&]tile=/i, wg =
    /^(?:.*mock.html#url=)?(?:https?:)?\/\/(\d+)?\.?fls\.doubleclick\.net\/(activity[ij]?)[;&]/i, xg = /^(?:.*mock.html#url=)?(?:https?:)?\/\/ad(?:[-.]\w+)?\.doubleclick\.net\/(activity[ij]?)[;&]/i;
rg.prototype.m = function () {
    return["*://*.doubleclick.net/*"]
};
var yg = function (a) {
        return RegExp("[?/&;]" + a + "=([^;&#?]*)")
    }, zg = function (a, b) {
        var c = b.url, d = c.split(";");
        1 == d.length && (d = c.split("&"));
        return d.slice(1)[a]
    }, Ag = function (a, b, c) {
        return R(a, p(Kb, b, c))
    }, Cg = function (a, b) {
        return M(R("URL type", function (c) {
            c = Kb(a, b, c);
            return n(c) ? Bg(c) : c
        }), "hidden")
    }, Dg = p(Ag, "Network"), Eg = function (a, b) {
        return P(M(Ag("Campaign", a, b), "linked"), "http://advertisers.doubleclick.net/app_pages/campaign/mediaplan.aspx?cid=%s")
    }, Fg = P(Q(M(K("Advertiser ID", function (a) {
        return a.label ||
            "not set"
    }), "copyable"), [J("Invalid or missing advertiser ID.", function (a) {
        return!A(/^[0-9]+$/, a.label || "")
    })]), "http://advertisers.doubleclick.net/app_pages/advertisers/spotlightactivities/default.aspx?aid=%s"), Hg = function (a, b) {
        return Q(R(a, p(Hb, yg(b))), [Gg])
    }, Ig = function (a, b) {
        return Q($d("Parameter name (changed from test function)", function (c) {
            this.sa || (this.sa = /[?/&;]([^;&#?/]+)=([^;&#?/]*)/g);
            var d = nc(E(c)), d = d ? E(c) : qc(E(c));
            c = ub(this.sa, d);
            this.b = this.sa.lastIndex;
            return!c || -1 != a.indexOf(c[1]) ||
                b && Gb(b, c[1]) ? !1 : (this.text = c[1], c[2])
        }), [Gg])
    }, Jg = function (a, b) {
        return Be("HTML tag type must match DoubleClick tag type.", function (c) {
            var d = c.src || c.href, d = d ? Kb(a, b, {url: d}) : null;
            return n(d) && c.tagName != Bg(d).toUpperCase()
        })
    }, Kg = function (a, b) {
        return W("Script Type", function (c) {
            c = (c = c.src || c.href) ? Kb(a, b, {url: c}) : null;
            return n(c) && Bg(c)
        })
    }, Lg = P(be('URLs should end with a "?".', function (a) {
        return!Nb(/.*[?]$/, a)
    }), "http://support.google.com/dfa/partner/answer/2811309"), Mg = Zd("Potential missing parameter(s), found '%s'.",
        p(Hb, /(;;|&&)/)), Ng = Zd("Smart quotes not allowed in tag HREF/SRC.", p(Nb, /%E2%80%9[89]/i)), Og = P(J("Question marks must be encoded in site-supplied click strings.", function (a) {
        return A(/[?]+/, a.label)
    }), "http://support.google.com/dfa/partner/answer/2774119"), Gg = Ed('Found "[" or "]" in parameter %s; site may not be passing required information into key value.', function (a) {
        if ("pc" == a.text)a.valueFormat = "hidden"; else if (A(/(\[|\])/, a.label))return"hidden" == a.valueFormat && (a.valueFormat = ""), a.text;
        return!1
    }),
    Pg = p(Nb, /[?&;]ord=1[;&#?]/), Qg = p(Nb, /[?&;]ord=[^;&#?]+/), Sg = L(R("ord value needs to be populated with a sales order ID.", function (a) {
        return Rg(a) && !Qg(a)
    }), P(Zd("ord value needs to be populated with a random value.", function (a) {
        return!Rg(a) && !Qg(a)
    }), "http://support.google.com/dfa/partner/bin/answer.py?answer=154049")), Tg = L(Q(M(R("ord", function (a) {
        var b;
        b = E(a);
        nc(b) ? b = Hb(yg("ord"), a) : (b = b.K, b = B(yg("ord"), b));
        Rg(a) && "1" != b ? this.format = "" : this.format = "fine_if_ok";
        return b
    }), "copyable"), [J("ord value contains unsupported symbols.",
        function (a) {
            return n(a.label) && !A(/^[-0-9.a-zA-Z\[\]]*$/, a.label)
        }), Gg, be("ord value not unique enough.", function (a, b) {
        return!Rg(a) && 10 > b.label.length && "1" != b.label && 0 < b.label.length
    }), Sg]), Sg), Ug = Tg.G();
Ug.text = "Order ID";
var Vg = M(Ug, ""), Wg = L(Q(M(Hg("num parameter", "num"), "fine_if_ok"), [J("num value needs to be populated with a random value.", function (a) {
        return"" == a.label
    }), ce("num parameter only required if ord=1.", function (a) {
        return!Pg(a)
    }), J("num value contains unsupported symbols.", function (a) {
        return n(a.label) && !A(/^[-0-9.a-zA-Z\[\]]*$/, a.label)
    }), Gg, Ed("num value not unique enough (10 or more characters required).", function (a) {
        return 10 > a.label.length
    })]), ce("Missing num parameter.", Pg)), Xg = Zd("URL must be terminated by the ord= or num= parameter",
        function (a) {
            if (a = Ba(a.url.split("?"), function (a) {
                return 0 < a.indexOf("ord=") || 0 < a.indexOf("num=")
            })) {
                a = a.split(";");
                for (var b = null; l(b) && ja(b = a.pop()););
                return!l(b) && !Ca(["ord", "num"], b.split("=")[0])
            }
            return!0
        }), Rg = function (a) {
        return!!Gb([yg("qty"), yg("cost")], qc(E(a)))
    }, Yg = R("Version", function (a) {
        return Rg(a) ? "Sales Activity Tag" : "Counter Activity Tag"
    }), Bg = function (a) {
        return{activity: "img", activityi: "iframe", activityj: "script", ad: "img", adf: "flash frame", adi: "iframe", adj: "script", adl: "flash layer",
            adx: "flash streaming"}[a] || ("" == a ? !1 : a)
    }, Zg = "1x1 88x31 120x60 120x90 120x240 120x600 125x125 160x600 180x150 234x60 240x400 250x250 300x100 300x250 300x600 336x280 468x60 720x300 728x90 970x250".split(" "), $g = Q(Hg("Size", "sz"), [Ed("sz= parameter value is not a recognized size.", function (a) {
        return!Ca(Zg, a.label)
    })]), ah = Q(M(R("Click", function (a) {
        return B(/[?&;]click=([^?]?[^;&#]*)/, a.url.replace(/\?$/, ""))
    }), "link_expandable"), [Og, Gg]), bh = T.G().j(fe, he), ch = [Tg, Wg, ah, $g, Ig(["click", "ord", "num", "sz"]),
        Mg, Lg, Ng], dh = [Tg, Wg, ah, Q(Hg("SP", "sp"), [J("sp= parameter incorrect.", function (a) {
        return!A(/\d+x\d+/, a.label)
    })]), Ig(["click", "num", "ord", "sp"]), Mg], eh = [Hg("Type", "type"), Hg("Category", "cat"), L(Q(Hg("Quantity", "qty"), [J("Quantity value contains unsupported symbols.", function (a) {
        return n(a.label) && !A(/^[0-9]+$/, a.label)
    })]), Zd("Sales activity tag must have quantity argument set.", Rg)), Vg, Wg, ah, L(Q(Hg("Cost", "cost"), [J("Cost value contains unsupported symbols.", function (a) {
        return!Cb(a.label)
    })]), Zd("Sales activity tag must have cost argument set.",
        Rg)), ah, Q(R("Custom Dimensions", function (a) {
        for (var b = /(?:[?&;])(u[0-9]+=[^;&#?]*)/g, c = [], d; d = ub(b, qc(E(a)));)x(c, d[1]);
        return 0 < c.length ? c.join(";") : !1
    }, "map"), [Gg]), Zd("Custom dimension %s value is empty.", function (a) {
        for (var b = /(?:[?&;])(u[0-9]+)=([^;&#?]*)/g, c; c = ub(b, qc(E(a)));)if (0 == c[2].length)return c[1];
        return!1
    }), Mg, Ig("cat click cost num ord prd qty src type".split(" "), [/^u[0-9]+$/])], fh = function () {
        return S("DFA", sg.source, r("DFA ${%s} ${%s} N${%s} B${%s}", "URL type", "Size", "Network", "Campaign"),
            "http://support.google.com/dfa/partner/bin/answer.py?answer=188812", p(Kb, sg, 3)).j(Cg(sg, 1), Dg(sg, 2), Ag("Site String", sg, 3), Eg(sg, 4), ch, Xg)
    }, gh = function () {
        return S("DFA", tg.source, "DFA Click Tracker", "http://support.google.com/dfa/partner/bin/answer.py?answer=188812", p(zg, 0)).j(Q(P(M(R("Ad", function (a) {
            return zg(0, a) || "not set"
        }), "linked"), "http://advertisers.doubleclick.net/app_pages/creatives/ad.aspx?id=%s"), [J("Invalid or missing ad ID.", function (a) {
            return!A(/^\d+$/, a.label || "")
        })]), Q(P(M(R("Placement ID",
            function (a) {
                return zg(1, a) || "not set"
            }), "linked"), "http://advertisers.doubleclick.net/app_pages/siteplacements/properties.aspx?id=%s"), [J("Invalid or missing Placement ID.", function (a) {
            return!A(/^\d+$/, a.label || "")
        })]), Cg(tg, 1), Q(R("Verifier", function (a) {
            return(a = zg(2, a)) && a.split("?")[0] || ""
        }), [J("DFA Click Tracker verifier not properly formatted.", function (a) {
            return!a.label
        }), Gg]), Mg)
    }, hh = function () {
        return S("DFA", ug.source, "DFA Mobile", "http://support.google.com/dfa/partner/answer/188813", p(Kb,
            ug, 2)).j(Dg(ug, 1), Ag("Site String", ug, 2), Eg(ug, 3), dh, Xg)
    }, ih = function (a) {
        var b = [Hg("Tile", "tile").j(P(Ed("Tile number should be between 1 and 16", function (a) {
            try {
                var b = parseInt(a.label, 10);
                return 1 > b || 16 < b
            } catch (e) {
                return!0
            }
        }), "http://support.google.com/dfp_premium/bin/answer.py?hl=en&answer=177207")), Hg("Size", "sz"), Hg("Tag ID", "tagid"), Hg("oba", "oba"), Hg("Keywords", "kw"), Ig("kw oba oe ord sz site tagid tile".split(" "))];
        a && Ha(b, a);
        return S("DFP", vg.source, r("DFP ${%s}", "URL type"), "http://support.google.com/dfp/",
            p(Nb, vg)).j(Dg(vg, 1), Cg(vg, 2), Hg("Site", "site"), Hg("Encoding", "oe"), Tg, ie("Ad Slots", r("%s ${%s}", "Ad Slot", "Tile"), z, b), Xg)
    }, kh = function (a) {
        var b = S("Floodlight", wg.source, r("%s Dynamic ${%s}", "Floodlight", "Advertiser ID"), "http://support.google.com/dfa/partner/bin/answer.py?answer=186746", function (a) {
            return Hb(wg, a) || B(yg("src"), qc(E(a)))
        }).j(Fg, Yg, Cg(wg, 2), Lg, Ng, Xg);
        if (0 < arguments.length) {
            for (var c = Ga(eh), d = 0; d < arguments.length; d++)Ha(c, arguments[d]);
            b.j(ie("Requests", "Request %s", z, c, jh))
        }
        return b
    },
    lh = function (a) {
        var b = S("Floodlight", xg.source, r("%s Static ${%s}", "Floodlight", "Advertiser ID"), "http://support.google.com/dfa/partner/bin/answer.py?answer=186746", function (a) {
            return B(yg("src"), qc(E(a)))
        }).j(Fg, Yg, Cg(xg, 1), Lg, Ng, Xg);
        if (0 < arguments.length) {
            for (var c = Ga(eh), d = 0; d < arguments.length; d++)Ha(c, arguments[d]);
            b.j(ie("Requests", "Request %s", z, c, jh))
        }
        return b
    }, mh = function (a, b) {
        var c = RegExp(b + "[0-9]+:([^;|]*)");
        return Q(K(a, p(Kd, RegExp(b + "[0-9]*:([^;|]*)"))), [J(a + " attribute must not contain an index.",
            function (a) {
                return B(c, a.parent.label)
            })])
    }, nh = function () {
        return Q(M(R("prd", function (a) {
            return(a = Hb(yg("prd"), a)) ? decodeURIComponent(a + "") : !1
        }), "hidden"), [mh("Merchant Center ID", "m"), mh("Country", "c"), mh("Language", "l"), J('Missing index for cart item "%s".', p(Kd, /(?:^|;)([ipq]):[^;|]*/)), ie("Products", "Item %s", z, [L(Q(K("Item ID", function (a) {
            return B(RegExp("i" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [L(J("Product Item ID is missing.", function (a) {
            return"" == a.label
        }), J("Product Item ID contains illegal characters.",
            p(Kd, /[<:?]/)))]), J("Product Item ID is missing.")), L(Q(K("Price per item", function (a) {
            return B(RegExp("p" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [L(J("Product Item price is missing.", function (a) {
            return"" == a.label
        }), J("Product Item price should be a number.", p(Kd, /[^-.0-9]+/)))]), J("Product Item price is missing.")), L(Q(K("Quantity", function (a) {
            return B(RegExp("q" + a.label + ":([^;|]*)"), a.parent.parent.label)
        }), [L(J("Product Item quantity is missing.", p(Jd, "")), J("Product Item quantity should be an integer.",
            p(Kd, /[^0-9]+/)))]), J("Product Item quantity is missing.")), J("Item index should start at 1.", p(Jd, "0"))], function (a, b) {
            this.ta || (this.ta = /[ipq]([0-9]+):([^;|]*)[;|]?/g);
            var c = B(this.ta, b.parent.label);
            this.b = this.ta.lastIndex;
            return c && 0 == bd(b, [c + ""]).length ? c : !1
        }), J("Item indices should be subsequent order and no index must be skipped.", function (a) {
            if (a = F(a, "Products")) {
                if (0 < bd(a, ["", "0"]).length)return!1;
                for (var b = 1; b < a.relatedIssues.length + 1; b++)if (0 == bd(a, [b + ""]).length)return b + ""
            }
            return!1
        }),
            J("prd attribute malformed.", function (a) {
                return!A(/^([mclipq]([0-9]*):([^;|]*)($|[;|]))+$/, a.label)
            }), J("Attribute %s occurs multiple times.", function (a) {
                a = sb(/([mclipq][0-9]*):(?:[^;|]*)(?:$|[;|])/g, a.label).sort();
                for (var b = 0; b < a.length - 1; b++)if (a[b + 1] == a[b])return a[b];
                return!1
            })])
    }, jh = function (a) {
        var b = B(yg("ord"), qc(E(a)));
        return null != b && "1" != b ? "ord=" + b : "num=" + B(yg("num"), qc(E(a)))
    }, oh = function (a) {
        a = (a = zg(2, a)) ? a.split("?") : [];
        return 1 < a.length ? (a.shift(), a.join("?")) : ""
    };
rg.prototype.r = function () {
    return[fh().j(bh, ee), gh().j(ie("Tags", "Click Tracker", z, [Q(R("Click-through URL", oh), [J("DFA Click Tracker click-through URL must start with http://, https://, tel://, or mailto://", function (a) {
        return!A(/^(http|https|mailto|tel):\/\//, a.label)
    })]), Gg, bh, ee], function (a) {
        return a.url
    })), hh().j(bh, ee), ih(bh), kh(bh, nh(), ee), lh(bh, nh(), ee)]
};
var ph = function (a, b, c) {
    var d = new U(b.type, b.category, b.text, b.infoLink, c, function (a, c) {
        this.O = {};
        this.O.node = a;
        this.O.url = "A" == a.tagName ? a.getAttribute("href") : a.getAttribute("src");
        return me(b, this.O.url) && b.H(this.O, c)
    }, b.format);
    b.J && (d.J = 2 == b.J.issueClass ? ph(a, b.J) : b.J.G());
    u(b.N, function (a) {
        d.N.push(2 == a.issueClass ? ph(this, a) : a.G())
    }, a);
    return d
};
rg.prototype.w = function () {
    return[ph(this, fh(), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]').j(He, Ge, De, V("Jump tag type found in non-anchor HTML tag.", function (a, b) {
        var c = F(b, "URL type");
        return!(!c || "jump" != c.label || "A" == a.tagName)
    }), Kg(sg, 1), Jg(sg, 1)), ph(this, gh(), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]').j(Je("Tags",
        "Click Tracker", [W("Click-through URL", function (a, b) {
            return oh({url: b.label})
        }), Ge, De], function (a, b) {
            return b.parent.I.O.url
        })), ph(this, hh(), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]').j(He, Ge, De), ph(this, ih(), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]').j(He,
        Ge, De, Kg(vg, 2), Jg(vg, 2)), ph(this, kh(He, Ge, De, Kg(wg, 2), Jg(wg, 2)), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]'), ph(this, lh(He, Ge, De, Kg(xg, 1), Jg(xg, 1)), '//iframe[contains(@src, ".doubleclick.net/")]|//img[contains(@src, ".doubleclick.net/")]|//script[contains(@src, ".doubleclick.net/")]|//a[contains(@href,".doubleclick.net/")]')]
};
jf(new rg);
var qh = function () {
    X.call(this, 0, 99)
};
q(qh, X);
var rh = ["AdWords Conversion Tracking", "Remarketing Tag (old)", "Remarketing Tag (new)", "Google Analytics", "Floodlight"];
qh.prototype.m = function () {
    return["*://*.googletagmanager.com/*"]
};
var sh = Q(P(M(K("Account ID", function (a) {
    this.format = "";
    return a.label || "not set"
}), "copyable"), void 0), [P(J("Invalid or missing account ID", function (a) {
    return!A(/^GTM-[0-9A-Z]{4,6}$/, a.label)
}), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#multiple_tags")]);
qh.prototype.r = function () {
    return[ne(Q(S("Google Tag Manager", "googletagmanager.com/", r("%s ${%s}", "Google Tag Manager", "Account ID"), "http://support.google.com/tagmanager/answer/2574370", function (a) {
        return sc(uc(a.url)).get("id")
    }), [sh, fe, he, P(ee, "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#nonstandard"), T]))]
};
qh.prototype.B = function () {
    return{Script: [bf("Google Tag Manager")]}
};
var th = {pageTitle: {type: 1}, pageCategory: {type: 19}, pageSubCategory: {type: 19}, pageVersion: {type: 2}, pageTestVariation: {type: 19}, pageValue: {type: 2}, pageAttributes: {type: 20}, visitorId: {type: 1}, visitorLoginState: {type: 1}, visitorType: {type: 1}, visitorDemographicInfo: {type: 20}, visitorSocialConnections: {type: 20}, visitorLifetimeValue: {type: 2}, visitorExistingCustomer: {type: 1}, conversionDate: {type: Date}, conversionValue: {type: 2}, conversionType: {type: 1}, conversionId: {type: 1}, conversionAttributes: {type: 20}, transactionId: {type: 1},
    transactionDate: {type: Date}, transactionType: {type: 1}, transactionAffiliation: {type: 1}, transactionTotal: {type: 2}, transactionShipping: {type: 2}, transactionTax: {type: 2}, transactionPaymentType: {type: 1}, transactionCurrency: {type: 1}, transactionShippingMethod: {type: 1}, transactionPromoCode: {type: 1}, transactionProducts: {type: 20}, siteSearchTerm: {type: 1}, siteSearchFrom: {type: 1}, siteSearchCategory: {type: 1}, siteSearchResults: {type: 2}}, uh = [];
Ua(th, function (a, b) {
    x(uh, b.toLowerCase())
});
qh.prototype.w = function () {
    return[Q(Ke("Google Tag Manager", r("%s ${%s}", "Google Tag Manager", "Account ID"), "http://support.google.com/tagmanager/answer/2574370", '//script[contains(@src, "www.googletagmanager.com/gtm.js?id=")]', function (a) {
        return B(/gtm.js[?]id=([^=&]*)/, a.getAttribute("src"))
    }), [sh, V("Missing closing \x3c/script> tag", function (a) {
        return!a.externalScript && B(/<\/html>\s*$/m, a.textContent)
    }), Q(Le(ze("Data Layer Variable", function (a, b) {
        var c = B(RegExp("\\(window,\\s*document\\s*,\\s*['\"]script['\"]\\s*,\\s*['\"]([^'\"]*)['\"]\\s*,\\s*['\"]" +
            b.label + "['\"]\\)", "m"), a.textContent);
        this.format = "dataLayer" == c ? "hidden" : "";
        return c
    }), '//script[contains(text(), "www.googletagmanager.com/gtm.js")]'), [Le(P(V("Data layer needs to be above the container snippet", function (a, b) {
        return B(RegExp(b.label + "\\s*=\\s*\\[\\s*[{]([^;]*)[}]\\s*\\]\\s*;", "im"), a.textContent)
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_snippet"), function (a, b) {
        var c = b.parent.label, d = b.label;
        return'//script[contains(translate(text(), " &#13;&#10;", ""), "\'' +
            d + "','" + c + '\'") or contains(translate(text(), " &#13;&#10;", ""), \'"' + d + '","' + c + '"\')]/following::script[contains(text(), "dataLayer")]'
    }), vh(), wh("\\s*=\\s*\\[\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\](?:;|$)?"), wh("\\s*\\.\\s*push\\s*\\(\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\)(?:[;]|$)?"), P(Ce("Code found outside of <body> tag", function (a) {
        return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#body_tag"), P(V("<script> tag must not be included in a <%s>",
        function (a) {
            return a.parentNode ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase() : !1
        }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#script_flow")]), K("Script", function (a) {
        return"http://www.googletagmanager.com/gtm.js?id=" + a.label
    }, "hidden"), P(De, "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#iframe"), Ee, Fe])]
};
var vh = function () {
    return new U("Info", "Google Tag Manager", "Data Layer", "https://developers.google.com/tag-manager/reference", function (a, b) {
        return r('//script[contains(text(), "%s")]', b.label)
    }, function (a, b) {
        var c = RegExp(b.label + "\\s*=\\s*\\[\\s*\\{\\s*((?:[^;]|\\n)*?)\\s*}\\](?:;|$)?", "ig");
        ca(this.b) && 0 < this.b && (c.lastIndex = this.b);
        var d = B(c, a.textContent);
        this.b = c.lastIndex;
        if (c = d && k[b.label] && 1 < k[b.label].length ? k[b.label][0] : !1) {
            var d = [], e;
            for (e in c) {
                var f = ca(c[e]) ? c[e] : r("'%s'", c[e]);
                d.push(r("'%s':%s",
                    e, f))
            }
            this.T = d
        }
        return!!c
    }, "collection", [P(K("Fields: Label will be set in the test function", function (a) {
        this.b = this.b || 0;
        if (this.b == a.I.T.length)this.b = !1; else return this.ka = a.I.T[this.b], this.b++, a = this.ka.split(":"), this.text = B(/^ *['"]?(.*?)['"]? *$/, a.shift()), a = ka(a.join(":")), 2 < a.length || !isNaN(a) ? A(/\[.*\]/, a) ? a.substring(1, a.length - 1) : a : "";
        return!1
    }, "entry"), "https://developers.google.com/tag-manager/devguide")])
}, wh = function (a) {
    return new U("Info", "Google Tag Manager", "Parsed Data Layer",
        "https://developers.google.com/tag-manager/reference", function (a, c) {
            return r('//script[contains(text(), "%s")]', c.label)
        }, function (b, c) {
            var d = RegExp(c.label + a, "ig");
            ca(this.b) && 0 < this.b && (d.lastIndex = this.b);
            var e = B(d, b.textContent);
            this.b = d.lastIndex;
            n(e) && (this.T = zb(e));
            return e
        }, "collection", [P(K("Fields: Label will be set in the test function", function (a) {
            this.b = this.b || 0;
            if (this.b == a.I.T.length)this.b = !1; else return this.ka = a.I.T[this.b], this.b++, a = this.ka.split(":"), this.text = B(/^ *['"]?(.*?)['"]? *$/,
                a.shift()), ka(a.join(":"));
            return!1
        }, "entry", [Ud(P(Dd("Data layer fields should be quoted", function (a) {
            return!A(RegExp("^\\s*['\"]" + a.text + "['\"]\\s*:.*"), a.I.ka)
        }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_quoted"), "Code"), P(Dd('Remove the "." from your dataLayer name %s. It may cause issues with tracking.', function (a) {
            a = a.text;
            return-1 != a.indexOf(".") ? a : !1
        }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#period_variable"),
            P(J("Data layer variable name in wrong case: '%s'", function (a) {
                a = a.text;
                return!l(th[a]) && -1 < uh.indexOf(a.toLowerCase()) ? a : !1
            }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#dl_conversion"), Dd("Number field should not be quoted: '%s'", function (a) {
                var c = a.text;
                return l(th[c]) && 2 == th[c].type ? A(/^\s*['"][^'"]+['"]\s*/, a.label || "") ? c : !1 : !1
            })]), "https://developers.google.com/tag-manager/devguide")])
};
qh.prototype.ga = function () {
    return[se("Google Tag Manager", function (a) {
        var b = ed(a, ["Google Tag Manager"]), b = v(b, function (a) {
            return"Parsed Data Layer" == a.text
        });
        u(b, function (b) {
            0 == b.relatedIssues.length && Da(a, b)
        });
        b = $c(a, ["HTTP response code indicates tag failed to fire"]);
        b.length && (b.infoLink = "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#http_response");
        wd(a);
        xh(a)
    }), pe("Suggestion", "Google Tag Manager", "Multiple installations of Google Tag Manager detected", "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#multiple_tags",
        function (a) {
            return 1 < ed(a, ["Google Tag Manager"]).length
        }), P(pe("Suggestion", "Google Tag Manager", "Consolidate your tags with Google Tag Manager.", "http://support.google.com/tagmanager/", function (a) {
        if (!H(a, ["Google Tag Manager"]).length) {
            a = H(a, rh);
            var b = [];
            u(a, function (a) {
                "Tag" == a.type && -1 == b.indexOf(a.category) && x(b, a.category)
            });
            return 1 < b.length
        }
        return!1
    }), "https://support.google.com/tagassistant/answer/3207128?hl=en&ref_topic=2947092#consolidate_gtm")]
};
var xh = function (a) {
    var b = F(a, "Data Layer"), c = F(a, "Parsed Data Layer");
    if (b && c) {
        for (var d = 0; d < c.relatedIssues.length; d++)c.relatedIssues[d].relatedIssues && (b.relatedIssues[d].relatedIssues = c.relatedIssues[d].relatedIssues, c.relatedIssues[d].relatedIssues = [], Kc([b]));
        G(a, "Parsed Data Layer")
    }
};
jf(new qh);
var yh = function (a, b) {
    var c = new XMLHttpRequest;
    c.open("HEAD", a, !0);
    c.onreadystatechange = function () {
        4 == c.readyState && b(c.status)
    };
    c.send()
}, Qa = function (a) {
    return 0 == a
}, zh = function (a) {
    return 404 == a
}, Ah = function (a) {
    return 300 < a && 310 > a && 304 != a
};
var Bh = function () {
    X.call(this, 0, 99)
};
q(Bh, X);
var Ch = {Ia: "status", Ja: "timestamp"}, Dh = "gts-i-name gts-i-price gts-i-quantity gts-i-prodsearch-id gts-i-prodsearch-store-id gts-i-prodsearch-country gts-i-prodsearch-language".split(" "), Fh = function (a, b, c) {
    c.valueFormat = "button_inactive";
    b.label = "Checking ...";
    c.label = "Checking ...";
    yh(c.text, p(Eh, a, b, c))
}, Eh = function (a, b, c, d) {
    var e = {}, f = (new Date).getTime() + "";
    e[c.text + ";" + Ch.Ia] = d + "";
    e[c.text + ";" + Ch.Ja] = f;
    $b(e);
    b.label = "Found";
    c.label = d + "";
    c.parent = b;
    a.q(c, c)
}, Gh = function (a, b, c) {
    var d = c.parent.label;
    return a(parseInt(d, 10)) ? (c.parent.parent.label = b, d) : !1
}, Hh = function (a, b, c) {
    return(c ? ze : W)(a, function (a) {
        return B(RegExp("\\.push\\s*\\(\\s*(?:\\[[^\\]]*\\]\\s*,\\s*)*\\[\\s*[\"']?" + b + "[\"']?\\s*,\\s*[\"']?([^'\")]+)[\"']?\\s*\\]", "g"), a.textContent)
    })
}, Ih = Q(M(K("Google Shopping ID", function (a) {
    return a.label || "not set"
}), "copyable"), [P(Hd("Invalid or missing account ID"), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#invalid_id")]), Jh = function () {
    return Q(Pe("Google Trusted Stores",
        "Check robots.txt", "Found"), [Q(Oe("HTTP Status for file", function (a) {
        a = uc(a.url);
        fc(a);
        a.K = "robots.txt";
        hc(a, "", void 0);
        this.text = a + "";
        return Wb(this.text + ";" + Ch.Ia)
    }, "hidden"), [Q(Oe("Check robots.txt", function (a, b) {
        var c = D(b.text + ";" + Ch.Ja);
        Ve(a.tabId, td(b) + ":" + this.text, p(Fh, this, b.parent, b));
        if (c)this.format = "update_button"; else return Fh(this, b.parent, b), this.format = "button_inactive", c + "";
        return""
    }), [L(O(J(r("%s must not use redirects", "robots.txt"), p(Gh, Ah, "Wrong redirect")), 'Serve both an "http" and "https" version of the robots.txt file'),
        L(O(J(r("%s is required at /%s on both HTTP and HTTPS", "robots.txt", "robots.txt"), p(Gh, zh, "Not Found")), 'Serve both an "http" and "https" version of the robots.txt file'), P(O(J(r("%s unexpected return code %s", "robots.txt"), p(Gh, Ra(), "Error")), 'Serve both an "http" and "https" version of the robots.txt file'), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#robot_txt")))])])])
}, Kh = M(K("gts-order-id", function (a) {
    return a.label || "not set"
}), "copyable"), Lh = function (a) {
    var b =
        "Remove the elements below:\n";
    u(a, function (a) {
        b = b + a + "\n"
    });
    return b
}, Mh = function (a, b, c) {
    c = c ? "class" : "id";
    a = a.getElementsByTagName("SPAN");
    for (var d = 0; d < a.length; d++) {
        var e = a[d].getAttribute(c);
        if (e && e === b)return a[d]
    }
}, Nh = function (a, b, c, d, e, f, g, s) {
    f = l(f) ? f : "is incorrect";
    g = l(g) ? g : "";
    s = l(s) ? s : "";
    return L(O(P(V(r('%s is missing in the order confirmation module: "%s"', a, b), function (a) {
        a = Mh(a, b, e);
        return!l(a)
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + g), r('Provide the Merchant Order %s in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.',
        a, b)), P(O(V(r('"%s" %s', b, f), function (a) {
        a = Mh(a, b, e);
        return!A(c, a.textContent)
    }), r('Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s', a, b, d)), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + s))
}, Oh = function (a, b, c, d, e, f) {
    var g = l(void 0) ? void 0 : "is incorrect";
    e = l(e) ? e : "";
    f = l(f) ? f : "";
    return L(O(P(Ce(r('%s is missing in the order confirmation module: "%s"',
        a, b), function (a) {
        a = Mh(a, b, !0);
        return!l(a)
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + e), r('Provide the language associated with the account used to submit product data feeds to Google Shopping, in the "%s" field.\nThis is a recommended but optional field. This field does not affect core functionality, and leaving this warning unresolved will not prevent you from entering the monitoring period. However, merchants using Google Shopping should correct these errors to ensure proper integration. This integration will allow Google to more easily correlate specific products to data that you have provided in connection with Google Trusted Stores. If you have chosen to leave out this field, you may disregard this warning.',
        b)), P(O(V(r('"%s" %s', b, g), function (a) {
        a = Mh(a, b, !0);
        return!A(c, a.textContent)
    }), r('Follow the required format when providing the %s associated with the order in the "%s" field of the Google Trusted Stores Order Confirmation JavaScript code.\n%s', a, b, d)), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#" + f))
}, Ph = p(B, /(?:^| )(gts\-[^ ]*)/);
h = Bh.prototype;
h.ga = function () {
    return[O(pe("Error", "Google Trusted Stores", "Order confirmation page is not in https", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", function (a) {
        var b = F(a, he.text);
        a = F(a, "gts-order-id");
        return null != b && null != a ? (b.valueFormat = "hidden", !0) : !1
    }), "Implement the order confirmation page in https.\nMerchants must provide a secure way for customers to purchase products online. Thus, merchants must use https when transmitting customer information or financial data, including on order confirmation, order history and order status pages.")]
};
h.r = function () {
    return[Q(S("Google Trusted Stores", "googlecommerce.com/trustedstores/", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", function (a) {
        return sc(uc(a.url)).get("id")
    }), [Ih, je("Google Shopping Account ID", "base_sid"), fe, he, ee, T, M(R("file check response issue handle", function (a) {
        a = a.documentUrl;
        return l(a) ? a : !1
    }), "hidden")])]
};
h.m = function () {
    return["*://*.googlecommerce.com/trustedstores/*"]
};
h.B = function () {
    var a = {};
    a["robots.txt file check dom issue handle"] = [Jh()];
    return a
};
h.w = function () {
    return[Q(Ke("Google Trusted Stores", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894", '//script[contains(text(), "google_base")]', function (a) {
        return B(/gts\.push\s*\(\s*\[\s*['"]?id['"]?\s*,\s*['"]?([^'"\]]*)/g, a.textContent)
    }), [Ih, O(Le(P(V("Class name conflicts for class %s", function (a) {
        var b = a.getAttribute("class");
        return pb(a, function (a) {
            var b = a.getAttribute ? a.getAttribute("class") : "";
            return a.id && Ca(["gtrust_badges",
                "gts-f-w", "gts-order"], a.id) || Ph(b)
        }) ? !1 : Ph(b)
    }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#class_conflict"), '//*[contains(@class, "gts-")]'), 'Remove the "gts-" for any class names defined for CSS styles. The "gts-" prefix is used by Google Trusted Stores, and such class names in the page may cause conflicts with the Google Trusted Stores JavaScript code. Please update your CSS to use another name. You must avoid using "gts-" for any class names defined for CSS styles in the page.'),
        L(Q(M(Hh("Google Shopping Item ID", "google_base_offer_id"), "copyable"), [J("Google Shopping Item ID should be an alphanumeric.", function (a) {
            return!A(/^\w[\s\w]+$/, a.label)
        })]), O(Dd("Google Shopping Item ID is missing."), 'Provide the Google Shopping Item ID in the "google_base_offer_id" field of the Google Trusted Stores JavaScript code.')), L(Q(M(Hh("Google Shopping Account ID", "google_base_subaccount_id"), "copyable"), [O(Hd('Incorrect format: "google_base_subaccount_id"'), 'Update the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code. The Google Shopping Account ID typically follows this format: "[0-9]+".  The Google Shopping Account ID provided appears to not match this format.')]),
            O(J("Google Shopping Account ID is missing.", function (a) {
                this.type = F(a, "Google Shopping Item ID") ? "Error" : "Suggestion";
                return!0
            }), 'Provide the Google Shopping Account ID in the "google_base_subaccount_id" field of the Google Trusted Stores JavaScript code.')), Hh("Google Base Country", "google_base_country", !0), Hh("Google Base Language", "google_base_language", !0), Hh("Container", "gtsContainer", !0), V("Missing closing \x3c/script> tag", function (a) {
            return B(/<\/html>\s*$/m, a.textContent)
        }), V("Missing script",
            function () {
                return!Ba(document.scripts, function (a) {
                    return a.src && 0 < a.src.indexOf("googlecommerce.com/trustedstores/gtmp_compiled.js")
                })
            }), O(P(Le(V("JavaScript is implemented more than once on the page.", function (a) {
            return 1 < a
        }), 'count(//script[contains(@src, "googlecommerce.com/trustedstores/gtmp_compiled.js")])'), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#js_page"), "The Trusted Stores JavaScript code must be implemented exactly once on each page. Remove all but one of the implementations of the Trusted Stores JavaScript code on this page."),
        P(Ce("Code found outside of <body> tag", function (a) {
            return a.parentNode ? "HEAD" == a.parentNode.nodeName : !1
        }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#outside_body"), P(V("<script> tag must not be included in a <%s>", function (a) {
            return a.parentNode ? "HEAD" != a.parentNode.nodeName && "BODY" != a.parentNode.nodeName && a.parentNode.nodeName.toLowerCase() : !1
        }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#script_html"), De, Ee, Fe, L(O(P(V("Missing DOCTYPE on the page.",
            function (a) {
                return self === top && !a.externalScript && "html" != document.childNodes[0].name
            }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#missing_doctype"), 'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.'), O(P(V("Incorrect DOCTYPE on the page.", function (a) {
            return self === top && !a.externalScript && "" != document.childNodes[0].publicId &&
                "" == document.childNodes[0].systemId
        }), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#incorrect_doctype"), 'Set the DOCTYPE of each HTML page to "<! DOCTYPE html>". An incorrect DOCTYPE may cause some browsers to render the page in quirks mode, which isn\u2019t supported by Google Trusted Stores.')), M(W("robots.txt file check dom issue handle"), "hidden"), He]), Q(Ke("Google Trusted Stores", "Google Trusted Stores ${Google Shopping ID}", "http://support.google.com/trustedstoresmerchant/bin/answer.py?answer=2609894",
        '//div[contains(@id, "gts-order")]'), [Kh, P(O(V("Item level details of the order confirmation module are missing", function (a) {
        a = Mh(a, "gts-item", !0);
        return!l(a)
    }), 'Provide the item level details associated with the order in the "gts-item" fields of the Google Trusted Stores Order Confirmation JavaScript code.  The gts-item fields include:  gts-i-name; gts-i-price; gts-i-quantity; gts-i-prodsearch-id; gts-i-prodsearch-store-id; gts-i-prodsearch-country; gts-i-prodsearch-language; etc'), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#item_details"),
        Q(M(Le(W("Google Trusted Stores"), '//span[contains(@class, "gts-item")]'), "hidden"), [Kh, P(V("Unknown fields specified in the item level details of the order confirmation module", function (a) {
            var b = [];
            u(a.getElementsByTagName("span"), function (a) {
                (a = a.getAttribute("class")) && !Ca(Dh, a) && x(b, a)
            });
            O(this, Lh(b));
            return 0 != b.length
        }), "https://support.google.com/trustedstoresmerchant/bin/answer.py?hl=en&answer=2609894&topic=2609888&ctx=topic"), Nh("Item name", "gts-i-name", /\w+.*/, "", !0), Nh("Item price", "gts-i-price",
            /^\d+(\.\d+)?$/, 'Required format: "123.45"', !0, void 0, "", "gts_price"), Nh("Item quantity", "gts-i-quantity", /^\d+$/, 'Required format: "123"', !0, void 0, "", "gts_quantity"), Oh("Google Shopping Item ID", "gts-i-prodsearch-id", /\w+.*/, "", "shopping_item", "gts_prodsearch_id"), Oh("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', "shopping_account", "gts_prodsearch_store"), Oh("Google Shopping Country ID", "gts-i-prodsearch-country", /^[A-Z]{2}$/, 'Required format: "US" (ISO3166',
            "shopping_country", "gts_prodsearch_country"), Oh("Google Shopping Language ID", "gts-i-prodsearch-language", /^[a-z]{2}$/, 'Required format: "en" (ISO639-1)', "shopping_language", "gts_prodsearch_language"), Q(M(Le(W("Google Trusted Stores", function (a) {
            a = Mh(a, "gts-i-prodsearch-id", !0);
            return l(a)
        }), '//span[contains(@class, "gts-item")]'), "hidden"), [Nh("Google Shopping Account ID", "gts-i-prodsearch-store-id", /^\d+$/, 'Required format: "123"', !0)])]), O(P(Le(V("Order confirmation module is implemented more than once",
            function (a) {
                return 1 < a
            }), 'count(//div[contains(@id, "gts-order")])'), "https://support.google.com/tagassistant/answer/3203009?hl=en&ref_topic=2947092#order_more"), "The Trusted Stores Order Confirmation Javascript code must be implemented exactly once on the order confirmation page.  Remove any duplicate implementations of the code."), Nh("Domain", "gts-o-domain", /^([\w\d]+\.)+\w+$/, 'Required format: "www.mystore.com"', void 0, void 0, "", "gts_domain"), Nh("Customer email", "gts-o-email", /^([\w]+\.?)+@\w+\.\w+$/,
            'Required format: "user@email.com"', void 0, void 0, "", "gts_email"), Nh("Customer country", "gts-o-country", /^[A-Z]{2}$/, 'Required format: ISO3166 (example: "US")', void 0, void 0, "", "gts_country"), Nh("Currency", "gts-o-currency", /^[A-Z]{3}$/, 'Required format: ISO4217 (example: "USD")'), Nh("Total", "gts-o-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'), Nh("Discounts", "gts-o-discounts", /^\-?\d+(\.\d+)?$/, 'Required format: "-123.45"'), Nh("Shipping total", "gts-o-shipping-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"'),
        Nh("Tax total", "gts-o-tax-total", /^\d+(\.\d+)?$/, 'Required format: "123.45"', void 0, void 0, "", "gts_tax"), Nh("Estimated shipping date", "gts-o-est-ship-date", /^\d{4}-\d{2}-\d{2}$/, 'Required format: "YYYY-MM-DD"'), Nh("Preorder", "gts-o-has-preorder", /^[YN]$/, 'Required format: "Y" or "N"'), Nh("Digital", "gts-o-has-digital", /^[YN]$/, 'Required format: "Y" or "N"'), Nh("ID", "gts-o-id", /^\d+$/, "", !1, "should be a number")])]
};
jf(new Bh);
var Qh = function (a) {
        return P(J("Unknown method name: '%s'", function (b) {
            var c = b.text.toLowerCase();
            return!a(c) && !a("_" + c) && b.text
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#unknown_method")
    }, Rh = function (a, b) {
        return J("Wrong case for method name: '%s'", function (c) {
            var d = a(c), e = c.text.toLowerCase();
            return!d && b(e) && c.text
        })
    }, Sh = function (a) {
        return P(Dd("Deprecated method used: '%s'", function (b) {
            var c = a(b);
            return!!c && !!c.S && b.text
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#remove_method")
    },
    Th = function (a) {
        return J("Retired method used: '%s'", function (b) {
            var c = a(b);
            return!!c && !!c.Aa && b.text
        })
    }, Uh = function (a, b, c, d) {
        var e = (c.a || []).length;
        c.e && (e -= c.e);
        if (d.length < e)return c = e - d.length, a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter", r("Missing %s required parameter(s) for method '%s'.", c, b);
        if (d.length > (c.a || []).length)return c = d.length - (c.a || []).length, a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter",
            r("Method '%s' has %s additional parameter.", b, c);
        for (e = 0; e < d.length; e++)if (c.types && c.types[e] && (4 == c.types[e] || 3 == c.types[e] || 5 == c.types[e] || 2 == c.types[e]) && ub(/^["'].*["']$/, d[e]))return a.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes", r("The value for parameter '%s' in method '%s' should not be quoted.", c.a[e], b);
        return!1
    };
var Vh = /^ga[.(]/, Wh = /\(([^;]+)\)/g, Xh = /\(([^;]+)\)/g, Yh = /(?:.|\n)*?(?:ga\.|tracker\.)([^;]*?);/g, Zh = /['"]?(?:(.*\.)?)([a-zA-Z0-9_:]*)['"]?/, $h = {hitCallback: 7, sessionControl: 1}, ai = {create: {a: ["trackingId", "auto", "cookieDomain", "name", "opt_configObject"], types: [1, 11, 11, 11, 5], e: 4, C: {allowAnchor: 4, allowLinker: 4, alwaysSendReferrer: 4, clientId: 1, cookieDomain: 1, cookieExpires: 3, cookieName: 1, anonymizeIp: 4, name: 1, sampleRate: 3, siteSpeedSampleRate: 2, storage: 1}, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"},
        getByName: {a: ["name"], types: [1], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, getAll: {a: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, require: {a: ["module", "script"], e: 1}, send: {variations: {appview: {a: ["appName", "appVersion"], e: 1, C: $h}, event: {a: ["hitType", "eventCategory", "eventAction", "eventLabel", "eventValue"], types: [1, 1, 1, 1, 3], e: 2, C: $h, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/events"}, exception: {a: ["exDescription",
            "exFatal"], e: 1, C: $h, types: [1, 4]}, item: {}, pageview: {a: ["hitType", "page", "title"], types: [1, 1, 1], e: 2, C: $h, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/pages"}, social: {a: ["hitType", "socialNetwork", "socialAction", "socialTarget"], C: $h, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"}, timing: {a: ["hitType", "timingCategory", "timingVar", "timingValue", "timingLabel"], types: [1, 1, 1, 3, 1], C: $h, e: 1, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"},
            transaction: {}}}, set: {a: ["fieldName", "value"], types: [1, 12], C: {anonymizeIp: 4, campaignId: 1, campaignKeyword: 1, campaignMedium: 1, campaignName: 1, campaignSource: 1, "dimension[0-9]+": 1, encoding: 1, flashVersion: 1, hostname: 1, javaEnabled: 4, language: 1, "metric[0-9]+": 2, nonInteraction: 4, page: 1, referrer: 1, screenColors: 1, screenResolution: 1, title: 1, viewportSize: 1}, qb: 1, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}, get: {a: ["fieldName"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/advanced"}},
    bi = {ecommerce: {addItem: {a: "id name sku category price quantity".split(" "), e: 4, C: {}, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, addTransaction: {a: ["id", "affiliation", "revenue", "shipping", "tax"], e: 4, C: {}, p: "_gat.GA_EComm_.Transactions_", link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, clear: {a: [], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}, send: {a: [], C: $h, link: "//developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce"}},
        linker: {decorate: {a: ["target"], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"}, autoLink: {a: ["targets", "autolinkAnchor", "autolinkForm"], e: 2, types: [6, 4, 4], link: "//developers.google.com/analytics/devguides/collection/analyticsjs/cross-domain"}}}, ci = [];
Ua(ai, function (a, b) {
    x(ci, b.toLowerCase())
});
Ua(bi, function (a, b) {
    var c = b.toLowerCase();
    Ua(a, function (a, b) {
        x(ci, c + ":" + b.toLowerCase())
    })
});
var ei = function (a) {
    var b = ai, c = a.text, d = c.split(":"), e = 2 == d.length && d.shift();
    n(e) && (b = bi[e], c = d.join(":"));
    b[c] && b[c].Ya && (a = di(a), a.shift(), b = b[c].Ya, c = B(/['"]?([^'"]*)['"]?/, a[0]));
    return b[c]
}, fi = function (a) {
    return Ca(ci, a.toLowerCase())
}, di = function (a) {
    var b;
    A(/^[_:a-zA-Z]+\(/, a.label) ? (b = a.text, a = B(/\s*(?:[^\(]*)\(([^\)]*)\)/, a.label), a = n(a) ? ja(a) ? b : r("%s, %s", b, a) : "", b = zb(a)) : b = zb(a.label);
    return b
}, gi = function () {
    return Q(M(W("Method", function (a, b) {
            var c;
            c = b.label;
            var d = Wh.lastIndex;
            if (0 != c.indexOf("ga(function")) {
                Wh =
                    Xh;
                Wh.lastIndex = d;
                var e = B(Wh, c)
            }
            n(e) || (Wh = Yh, Wh.lastIndex = d, e = B(Wh, c));
            c = e;
            this.b = Wh.lastIndex;
            if (n(c) && (d = wb(c), 0 < d.length))if (d = ub(Zh, d[0])) {
                var e = RegExp, f, g = d[1] || "";
                f = b.parent.label;
                if (g)var s = RegExp(".".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), ""), g = g.replace(s, "");
                f = r("['\"]create['\"]\\s*,\\s*[\"']%s[\"'](?:,\\s{\\s*name:\\s[\"']%s[\"'])?", f, g);
                if (!B(e(f, "im"), a.textContent))return!1;
                d = this.text = d[2];
                this.infoLink = ai[d] && ai[d].link || null
            } else return!1;
            return c
        }),
        "hidden"), [Qh(fi), Rh(ei, fi), Sh(ei), Th(ei), Q(P(J("%s", function (a) {
        var b = di(a);
        b.shift();
        var c = ei(a), d;
        if (d = !!c)if (d = !!c.a)t:if (a = a.text, d = c.a.length, c.e && (d -= c.e), b.length < d && (0 == b.length || !c.C || ub(/^["'].*["']$/, b[b.length - 1])))b = d - b.length, this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_parameter", d = r("Missing %s required parameter(s) for method '%s'.", b, a); else if (b.length > c.a.length)b = b.length - c.a.length, this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#additional_parameter",
            d = r("Method '%s' has %s additional parameter.", a, b); else {
            for (d = 0; d < b.length; d++)if (c.types && c.types[d] && (4 == c.types[d] || 3 == c.types[d] || 5 == c.types[d] || 2 == c.types[d]) && ub(/^["'].*["']$/, b[d])) {
                this.infoLink = "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#parameter_quotes";
                d = r("The value for parameter '%s' in method '%s' should not be quoted.", c.a[d], a);
                break t
            }
            d = !1
        }
        return d
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"), [Cd("Method call", function (a) {
        this.text =
            "Method call: " + a.parent.text;
        return a.parent.label
    }, "snippet")])])
};
var hi = [
    {link: "http://developers.google.com/analytics/devguides/collection/gat/methods/gaJSApi_gat", n: {_anonymizeIp: {}, _createTracker: {a: ["opt_account", "opt_name"], e: 2, types: [1, 1], p: 5}, _forceSSL: {a: ["forceSSL"], e: 1, types: [4]}, _getTracker: {a: ["account"], types: [1], S: !0, p: 5}, _getTrackerByName: {a: ["opt_name"], e: 1, types: [1], p: 5}, _getTrackers: {p: 6}}}
], ii = {};
u(hi, function (a) {
    Xa(ii, a.n)
});
var ji = [];
Ua(ii, function (a, b) {
    x(ji, b.toLowerCase())
});
var ki = function (a) {
    return ii[a.text]
}, li = function (a) {
    return Ca(ji, a.toLowerCase())
}, mi = function () {
    return Q(M(K("Method", function (a) {
        return(a = ub(/([_.a-zA-Z]*)\((.*)\)/, a.label)) ? (this.text = a[1], a[2]) : !1
    }), "hidden"), [J("Missing leading '_' in method name: '%s'", function (a) {
        return li("_" + a.text) && a.text
    }), Qh(li), Rh(ki, li), Sh(ki), Th(ki), J("%s", function (a) {
        var b = a.label.split(","), c = ki(a);
        return!!c && Uh(this, a.text, c, b)
    })])
}, ni = function () {
    return P(Q(M(W("_gat", function (a) {
        var b = /_gat\.([_a-zA-Z.]*\([^)]*\))/g;
        b.lastIndex = this.b;
        a = B(b, a.textContent);
        this.b = b.lastIndex;
        return a ? a : !1
    }), "hidden"), [mi()]), "http://developers.google.com/analytics/devguides/collection/gat/methods/")
};
var oi = function (a, b, c) {
    this.da = a;
    this.ca = b;
    this.Ea = c
}, pi = {};
pi.async = new oi(p(r, "['\"]%s_setAccount['\"]\\s*,\\s*['\"]%s['\"]"), {Fa: /^_gaq\.push/, method: /\s*(\[(?:(?!\],).|\n)*\])\s*(?:,|\))\s*/g, da: /['"](?:(.*\.)?)([a-zA-Z0-9_]*)['"]/}, function (a) {
    a = B(/^\s*\[\s*((.|\n)*?)\s*\]\s*$/, a);
    return zb(n(a) ? a : "")
});
pi.sync = new oi(p(r, "_gat.%s_getTracker\\(['\"]%s['\"]\\)"), {Fa: /^pageTracker\./, method: /\s*([^\)]*\)\s*$)/g, da: /(?:(.*\.)?)\.([a-zA-Z0-9_]*)/}, function (a, b) {
    var c = B(/\s*(?:[^\(]*)\(([^\)]*)\)/, a), c = n(c) ? ja(c) ? b : r("%s, %s", b, c) : "";
    return zb(c)
});
var qi = [
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration", n: {_deleteCustomVar: {a: ["index"], types: [2]}, _getName: {a: [], p: 1}, _getAccount: {a: [], p: 1}, _getVersion: {a: [], p: 1}, _getVisitorCustomVar: {a: ["index"], types: [2], p: 1}, _initData: {a: [], types: [], S: !0}, _setAccount: {a: ["accountID"]}, _setCookiePersistence: {a: ["milliseconds"], types: [3], S: !0}, _setCustomVar: {a: ["index", "name", "value", "opt_scope"], types: [2, 1, 1, 2], e: 1}, _setSampleRate: {a: ["newRate"], types: [10]},
        _setSessionTimeout: {a: ["newTimeout"], types: [10], S: !0}, _setSessionCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _setSiteSpeedSampleRate: {a: ["sampleRate"], types: [3]}, _setVar: {a: ["newVar"], S: !0}, _setVisitorCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _trackPageLoadTime: {a: [], S: !0, link: "http://support.google.com/analytics/bin/answer.py?answer=1205784"}, _trackPageview: {a: ["opt_pageURL"], e: 1}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiCampaignTracking",
        n: {_setAllowAnchor: {a: ["bool"], types: [4]}, _setCampContentKey: {a: ["newCampContentKey"]}, _setCampMediumKey: {a: ["newCampMedKey"]}, _setCampNameKey: {a: ["newCampNameKey"]}, _setCampNOKey: {a: ["newCampNOKey"]}, _setCampSourceKey: {a: ["newCampSrcKey"]}, _setCampTermKey: {a: ["newCampTermKey"]}, _setCampaignCookieTimeout: {a: ["cookieTimeoutMillis"], types: [3]}, _setCampaignTrack: {a: ["bool"], types: [4]}, _setCookieTimeout: {a: ["newDefaultTimeout"], types: [3], sb: [1], S: !0}, _setReferrerOverride: {a: ["newReferrerUrl"]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory",
        n: {_cookiePathCopy: {a: ["newPath"]}, _getLinkerUrl: {a: ["targetUrl", "useHash"], p: 1}, _link: {a: ["targetUrl", "useHash"]}, _linkByPost: {a: ["formObject", "useHash"]}, _setAllowHash: {a: ["bool"], types: [4], S: !0}, _setAllowLinker: {a: ["bool"], types: [4]}, _setCookiePath: {a: ["newCookiePath"]}, _setDomainName: {a: ["newDomainName"]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEcommerce", n: {_addItem: {a: "orderId sku name category price quantity".split(" ")}, _addTrans: {a: "orderId affiliation total tax shipping city state country".split(" "),
        p: "_gat.GA_EComm_.Transactions_"}, _trackTrans: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking?", n: {_trackEvent: {a: ["category", "action", "opt_label", "opt_value", "opt_noninteraction"], types: [1, 1, 1, 2, 4], e: 3}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSearchEngines", n: {_addIgnoredOrganic: {a: ["newIgnoredOrganicKeyword"]}, _addIgnoredRef: {a: ["newIgnoredReferrer"]}, _addOrganic: {a: ["newOrganicEngine",
        "newOrganicKeyword", "opt_prepend", "opt_displayName", "opt_urlPattern"], types: [1, 1, 4, 1, 1], e: 3}, _clearIgnoredOrganic: {a: []}, _clearIgnoredRef: {a: []}, _clearOrganic: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiSocialTracking", n: {_trackSocial: {a: ["network", "socialAction", "opt_target", "opt_pagePath"], e: 2}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiWebClient", n: {_getClientInfo: {a: [], p: 4}, _getDetectFlash: {a: [],
        p: 4}, _getDetectTitle: {a: [], p: 4}, _setClientInfo: {a: ["bool"], types: [4]}, _setDetectFlash: {a: ["bool"], types: [4]}, _setDetectTitle: {a: ["bool"], types: [4]}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUrchin", n: {_getLocalGifPath: {a: [], p: 1}, _getServiceMode: {a: [], p: 3}, _setLocalGifPath: {a: ["newLocalGifPath"]}, _setLocalRemoteServerMode: {a: []}, _setLocalServerMode: {a: []}, _setRemoteServerMode: {a: []}}},
    {link: "http://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiUserTiming",
        n: {_trackTiming: {a: ["category", "variable", "time", "opt_label", "opt_sampleRate"], types: [1, 1, 3, 1], e: 2}}},
    {link: "http://support.google.com/analytics/bin/answer.py?answer=2558867", n: {_require: {a: ["inpage_linkid", "pluginUrl"]}}},
    {link: null, n: {_addDevId: {a: ["devId"], types: [1]}, _anonymizeIp: {a: []}, _clearTrans: {a: []}, _clearXKey: {a: ["projectId"], types: [2]}, _clearXValue: {a: ["projectId"], types: [2]}, _createEventTracker: {a: ["name"], types: [1]}, _get: {a: ["key"], types: [1]}, _getPlugin: {a: ["name"], types: [1]}, _getXKey: {a: ["projectId",
        "num"], types: [3, 3]}, _getXValue: {a: ["projectId", "num"], types: [3, 3]}, _sendXEvent: {a: []}, _set: {a: ["key", "value"], types: [1, 1]}, _setAutoTrackOutbound: {a: [], types: [], Aa: !0}, _setTrackOutboundSubdomains: {a: [], types: [], Aa: !0}, _setHrefExamineLimit: {a: [], types: [], Aa: !0}, _setMaxCustomVariables: {a: ["maxCustomVars"], types: [2]}, _setPageGroup: {a: ["index", "value"], types: [3, 1]}, _setTransactionDelim: {a: ["delim"], types: [1]}, _setXKey: {a: ["key"], types: [1]}, _setXValue: {a: ["value"], types: [1]}, _visitCode: {a: []}}}
], ri = {};
u(qi, function (a) {
    Xa(ri, a.n);
    u(hi, function (a) {
        Ua(a, function (a, b) {
            ri["gat." + b] = a
        })
    })
});
var si = [];
Ua(ri, function (a, b) {
    x(si, b.toLowerCase())
});
var ti = function (a) {
    return ri[a.text]
}, ui = function (a) {
    return Ca(si, a.toLowerCase())
}, vi = function (a) {
    var b = Ba(qi, function (b) {
        return l(b.n[a])
    });
    return null != b ? b.n[a].link || b.link : null
}, xi = function (a) {
    var b = pi[a];
    return P(Q(W("Statements", function (a) {
        return b.ca && (this.b = a = Ib(a.textContent, this.b)) && B(b.ca.Fa, a.text) ? a.text : !1
    }, "hidden"), [wi(b)]), "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors")
}, wi = function (a) {
    return Q(M(W("Method", function (b, c) {
        var d = B(a.ca.method, c.label);
        this.b = a.ca.method.lastIndex;
        if (n(d)) {
            var e = wb(d);
            if (0 < e.length)if (e = ub(a.ca.da, e[0])) {
                if (!B(RegExp(a.da(e[1] || "", c.parent.label), "im"), b.textContent))return!1;
                this.text = e[2];
                this.infoLink = vi(this.text)
            } else return!1
        }
        return d
    }), "hidden"), [P(J("Missing leading '_' in method name: '%s'", function (a) {
        return ui("_" + a.text) && a.text
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_underscore"), Qh(ui), Rh(ti, ui), Sh(ti), Th(ti), Q(P(J("%s", function (b) {
        if (a.da &&
            a.Ea) {
            var c = a.Ea(b.label, b.text);
            c.shift();
            var d = ti(b);
            return!!d && Uh(this, b.text, d, c)
        }
        return!1
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092"), [Cd("Method call", function (a) {
        this.text = "Method call: " + a.parent.text;
        return a.parent.label
    }, "snippet")])])
};
var yi = function () {
    X.call(this, 0, 2)
};
q(yi, X);
var zi = [];
zi[5] = ["Category", "Action", "Label", "Value"];
zi[14] = ["Category", "Variable", "Time", "Label", "Sample Rate"];
var Ai = [];
Ai[5] = /(?:\d*\([^)]*\))*5\(([^)]*)\)(?:\(([^)]*)\))*/;
Ai[14] = /(?:\d*\([^)]*\))*14\((?:[0-9]*!)?([^)]*)\)/;
var Bi = r("%s ${%s}", "Google Analytics", "Web Property ID"), Ci = ["utmac", "tid"], Di = ["utme"], Ei = ["utmtci"], Fi = ["utmtco"], Gi = ["utmtrg"], Hi = ["utmiva", "ic"], Ii = ["utmipc", "ic"], Ji = ["utmipn", "in"], Ki = ["utmipr", "ip"], Li = ["utmiqt", "iq"], Mi = ["utmr", "dr"], Ni = ["utmt", "t"], Oi = ["utmtsp", "ts"], Pi = ["utmtst", "ta"], Qi = ["utmttx", "tt"], Ri = ["utmtto", "tr"], Si = ["tid", "tid"], Ti = ["utmp", "dp"], Ui = ["utmtid", "ti"], Vi = ["utmwv", "v"];
yi.prototype.m = function () {
    return["*://*.google-analytics.com/__utm.gif*", "*://*.google-analytics.com/collect*", "*://stats.g.doubleclick.net/__utm.gif*"]
};
var Wi = function (a, b) {
        var c = Y(Di, b), d = ub(Ai[a], c);
        if (0 < d.length) {
            var c = d[1].split("*"), e = Ia(zi[a], 0, c.length), d = d[2];
            l(d) && (c.push(d), d = zi[a], e.push(d[d.length - 1]));
            d = this.b ? this.b : 0;
            if (d < c.length)return this.b = d + 1, this.text = decodeURIComponent(e[d]), decodeURIComponent(c[d])
        }
        return this.b = !1
    }, Y = function (a, b) {
        var c = E(b);
        return("/__utm.gif" == c.K ? tc(c, a[0]) : tc(c, a[1])) || ""
    }, Xi = P(Q(ae("Custom Variables", function (a) {
        a = Y(Di, a);
        a = (a = ub(/(?:\d+\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a)) && 3 == a.length ? a[1].split("*").length :
            0;
        return 0 < a ? "" + a : !1
    }), [Q(R("Custom Variable", function (a) {
        var b;
        t:{
            b = this.b ? this.b : 0;
            a = nc(E(a));
            var c = ub(/utme=(?:\d*\([^)]*\))*8\(([^)]*)\)9\(([^)]*)\)/, a);
            if (c && 3 == c.length) {
                a = c[1].split("*");
                for (var c = c[2].split("*"), d = [], e = 0, f = 0; f < a.length; f++) {
                    e++;
                    if (f < c.length) {
                        var g = B(/([0-9]{1,2})!/, a[f]), s = B(/([0-9]{1,2})!/, c[f]);
                        g && g == s && (e = parseInt(g, 10), a[f] = a[f].substring(g.length + 1), c[f] = c[f].substring(s.length + 1))
                    }
                    x(d, e)
                }
                if (b < a.length) {
                    this.b = b + 1;
                    this.text = "Custom Variable " + d[b];
                    b = decodeURIComponent(a[b]) +
                        ": " + decodeURIComponent(c[b]);
                    break t
                }
            }
            b = this.b = !1
        }
        return b
    }), [Ed("The total combined length of any custom variable name and value may not exceed 128 characters.", function (a) {
        return 130 < a.label.length
    })]), Ed("More than 5 custom variables are used.", function (a) {
        return 5 < parseInt(a.label, 10)
    })]), "https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"), Yi = Q(K("Web Property ID", function (a) {
        D("Google Analytics-" + a.label) ? (this.infoLink = D("Google Analytics-" + a.label),
            this.valueFormat = "linked") : this.valueFormat = "copyable";
        return a.label || "not set"
    }), [P(J("Leading or trailing whitespace in ID", function (a) {
        var b = l(a.label) ? Gb([/^\s+[^ ]/, /[^ ]\s+$/], a.label) : !0;
        b && (a.parent.label = ka(a.label));
        return b
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#whitespace"), P(J("Invalid or missing web property ID", function (a) {
        return l(a.label) ? !A(/^\s*(?:UA|YT|MO)-\d{4,10}-\d+\s*$/, a.label) : !0
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_property")]),
    bj = function (a, b) {
        return Q(S("Google Analytics", [b], Bi, "http://support.google.com/analytics/bin/answer.py?answer=1008080", function (a) {
            var b = uc(a.url);
            return"/collect" == b.K ? Y(Si, a) : "/__utm.gif" == b.K ? Y(Ci, a) : !1
        }), [Yi, R("Pixel Version/Syntax", function () {
            return a == Z.M.k ? a : !1
        }), R("Tracked page", p(Y, Ti), "value"), R("Referral", p(Y, Mi), "value"), R("Version", p(Y, Vi), "value"), R("Code Version/Syntax", function (a, b) {
            if (b) {
                if (Hb(/google-analytics.com\/collect/, a))return Z.ea.k;
                if (Hb(/stats.g.doubleclick.net\/_utm.gif/,
                    a))return Z.M.k;
                if (F(b, "Version") && B(/1\.*/, F(b, "Version").label))return Z.Da.k
            }
            return!1
        }), L(Zi("Page Load", "Time ${bucketIndex}: ${Category} - ${Variable}", 14), L(Zi("Events", "Event ${bucketIndex}: ${Category} - ${Action}", 5), L($i(), L(aj(), M(Q(K("Page Tracking"), [Xi, T]), "hidden"))))), fe, he, P(ee, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#non_standard")])
    }, $i = function () {
        return Q(M(Sd(Yd("Transaction %s"), function (a) {
            return"/__utm.gif" == qc(uc(a.url)) && "tran" == Y(Ni, a) ? Y(Ui,
                a) : !1
        }), "group_status"), [Q(M(Sd(Xd("Total"), p(Y, Ri)), "value_status"), [R("Transaction ID", p(Y, Ui), "value"), R("Affiliation or Store name", p(Y, Pi), "value"), L(R("Total", p(Y, Ri), "value"), J("Missing total amount.")), R("Tax", p(Y, Qi), "value"), R("Shipping cost", p(Y, Oi), "value"), R("Billing City", p(Y, Ei), "value"), R("Billing region", p(Y, Gi), "value"), R("Billing Country", p(Y, Fi), "value"), T])])
    }, aj = function () {
        return Q(M(Sd(Yd("Transaction %s"), function (a) {
            return"/__utm.gif" == qc(uc(a.url)) && "item" == Y(Ni, a) ? Y(Ui,
                a) : !1
        }), "group_status"), [Q(M(Sd(Xd("Item %s"), function (a) {
            this.text = r("Item %s", Y(Ii, a));
            return Y(Ki, a)
        }), "value_status"), [R("Affiliation or Store name", p(Y, Pi), "value"), L(R("SKU / Code", p(Y, Ii), "value"), J("Missing SKU/code.")), R("Product Name", p(Y, Ji), "value"), R("Category or variation", p(Y, Hi), "value"), L(R("Unit price", p(Y, Ki), "value"), J("Missing unit price.")), L(R("Quantity", p(Y, Li), "value"), J("Missing quantity.")), T])])
    }, Zi = function (a, b, c) {
        return ie(a, b, function (a) {
            return"/__utm.gif" == qc(E(a)) &&
                "event" == Y(Ni, a) && A(Ai[c], Y(Di, a))
        }, [R("Parameter", p(Wi, c)), Xi, T])
    };
yi.prototype.r = function () {
    return[bj("Any", "google-analytics.com/"), bj(Z.M.k, "stats.g.doubleclick.net/")]
};
var cj = P(Ad("Suggestion", "Google Analytics", "Consider update to the async version"), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#update_async"), Z = {ea: {k: "Universal", Ba: function (a) {
    return Fb([/create/i, /displayfeatures/i, RegExp(Z.ea.Q[1].source + /(?:[^;\n]*[;\n])+[a-zA-Z_0-9. ]+/.source + /\(\s*["']require["']\s*,\s*["']displayfeatures["']/.source, "gi")], a.textContent) ? "Universal with Display Features" : Z.ea.k
}, link: "https://developers.google.com/analytics/devguides/collection/analyticsjs/",
    D: "google-analytics.com/analytics.js", Q: [/create/i, /["'](?:[a-zA-Z_0-9]*\.)*create["'],\s*["'](UA-[^"']*)["']/gi], Z: function () {
        return P(Q(W("Universal analytics statements", function (a) {
            return(this.b = a = Ib(a.textContent, this.b)) && B(Vh, a.text) ? a.text : !1
        }, "hidden"), [gi()]), "https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting#commonTrackingErrors")
    }}, La: {k: "Asynchronous", link: "http://support.google.com/analytics/bin/answer.py?answer=1008080", D: "google-analytics.com/ga.js",
    Q: [/setAccount/i, /\[\s*["'](?:[a-zA-Z_0-9]*\.)?_?setAccount["']\s*,\s*["']([^"']*)["']/gi], Ca: "stats.g.doubleclick.net/dc.js", Z: p(xi, "async")}, jb: {k: "Synchronous", link: "http://support.google.com/analytics/bin/answer.py?answer=1012283", D: "google-analytics.com/ga.js", Q: [/_getTracker/i, /_gat._getTracker\(["']([^\"']*)["']\)/gi], pa: cj, Z: p(xi, "sync")}, Da: {k: "Urchin", link: "http://support.google.com/analytics/bin/answer.py?answer=1008080", D: "google-analytics.com/urchin.js", Q: [/_uacct/i, /_uacct = ["']([^\"']*)["'];/gi],
    pa: cj, Z: function () {
        return K("Statments", Na)
    }}, M: {k: "Remarketing", link: "http://support.google.com/analytics/bin/answer.py?answer=2444872", D: "stats.g.doubleclick.net/dc.js", Q: [/_setAccount/i, /["'](?:[a-zA-Z_0-9]*\.)*_setAccount["'],\s*["']([^"']*)["']/gi, /stats\.g\.doubleclick\.net\/dc\.js/], Z: p(xi, "async")}}, dj = function (a) {
    var b = Q(Ke("Google Analytics", Bi, a.link, "//script", function (b) {
        var d = Fb(a.Q, b.textContent);
        this.b = b.textContent.length && a.Q[1].lastIndex;
        return d && a.Ca && 0 <= b.textContent.indexOf(a.Ca) ?
            !1 : d
    }), [Yi, W("Code Version/Syntax", da(a.Ba) ? a.Ba : Ma(a.k)), He, P(De, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#iframe"), P(V("Missing closing \x3c/script> tag", function (a) {
        return B(/<\/html>(.|\n)*$/m, a.textContent)
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_closing"), P(Le(P(V("Missing %s script", function (b) {
            return 0 == b ? a.D.substring(a.D.indexOf("/") + 1) : !1
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#missing_ga"),
            'count(//script[contains(@src, "' + a.D + '")])'), "http://support.google.com/analytics/bin/answer.py?answer=1008083"), P(Ce("Code found outside of <head> tag", function (a) {
        return!!a.parentNode && "HEAD" != a.parentNode.nodeName
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#move_head"), a.Z(), Ud(W("Code Snippet", function (b) {
        return Mb(a.Q[1].lastIndex, b.textContent, 100)
    }, "snippet"), "Code"), P(Ee, "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#external_file"),
        Fe, Ud(Cd("Cookies", function () {
            var a = v(document.cookie.split(/; */), function (a) {
                return 0 == a.indexOf("__utm") || 0 == a.indexOf("_ga")
            });
            return 0 < a.length ? a.join(";") : !1
        }, "map"), "Cookies")]);
    a.pa && x(b.N, a.pa);
    return b
};
yi.prototype.ga = function () {
    return[se("Google Analytics", function (a) {
        a = ed(a, ["Google Analytics"]);
        u(a, function (a) {
            nd(a, "Code Version/Syntax", "Universal with Display Features") && (Rc(a, "Code Version/Syntax", Z.ea.k), Rc(a, "Code Version/Syntax", Z.M.k))
        })
    }), se("Google Analytics", function (a) {
        var b = ed(a, ["Google Analytics"]), b = ad(b, "Pixel Version/Syntax");
        u(b, function (b) {
            var d = F(b, "Pixel Version/Syntax"), e = nd(b, "Code Version/Syntax", "Universal with Display Features");
            if (d && d.label == Z.M.k && !e && (d = md(a, b.label)) &&
                "Google Analytics" == d.category) {
                if (e = F(d, "Code Version/Syntax"))e.label = Z.M.k, d.infoLink = "http://support.google.com/analytics/bin/answer.py?answer=2444872";
                G(b, "Pixel Version/Syntax");
                G(d, "Missing ga.js script")
            }
        })
    }), pe("Suggestion", "Google Analytics", "Multiple Google Analytics tags detected", "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples#migrationInstructions", function (a) {
        var b = ed(a, ["Google Analytics"]), c = b.length, d = ad(b, "Code Version/Syntax", Z.M.k), e =
            ad(b, "Code Version/Syntax", Z.ea.k), f = ad(b, "Code Version/Syntax", "Universal with Display Features"), c = c - e.length, c = c - f.length, c = c - d.length;
        (a = F(a, "Detected more than one script containing _gaq and _gat variables.")) && a.label == c && (a.valueFormat = "hidden");
        return ud(b) ? !1 : 1 < e.length || 1 < f.length || 1 < d.length || 1 < c
    }), pe("Warning", "Google Analytics", "Same web property ID is tracked twice.", "https://developers.google.com/analytics/devguides/collection/gajs/asyncMigrationExamples", function (a) {
        a = ed(a, ["Google Analytics"]);
        return ud(a)
    }), se("Google Analytics", function (a) {
        a = ed(a, ["Google Analytics"]);
        u(a, function (a) {
            ld(a) && (G(a, "Missing ga.js script"), G(a, "Missing dc.js script"), G(a, "Missing urchin.js script"))
        })
    }), se("Google Analytics", function (a) {
        a = H(a, ["Google Analytics"]);
        F(a, "No Google Analytics HTTP responses because opted out with extension.") && G(a, "No Google Analytics HTTP responses because opted out code detected.")
    }), se("Google Analytics", function (a) {
        a = H(a, ["Google Analytics"]);
        F(a, "URL") && (G(a, "This extension may prevent Google Analytics from working correctly"),
            G(a, "No Google Analytics HTTP responses because opted out code detected."), G(a, "No Google Analytics HTTP responses because opted out with extension."))
    }), se("Google Analytics", function (a) {
        var b = hd(a, "_gat global object");
        u(b, function (b) {
            var d = b.relatedIssues;
            "working" == (vd(d, "Error") ? "not-working" : vd(d, "Warning") ? "working-with-warnings" : vd(d, "Suggestion") ? "working-with-suggestions" : "working") && Da(a, b)
        })
    }), P(pe("Suggestion", "Google Analytics", "Add Google Analytics", "http://support.google.com/analytics/bin/answer.py?answer=1008080",
        function (a) {
            return 0 == ed(a, ["Google Analytics", "Google Tag Manager"])
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#add_ga")]
};
yi.prototype.w = function () {
    var a = [];
    Ua(Z, function (b) {
        x(a, dj(b))
    }, this);
    Ha(a, [P(new U("Warning", "Google Analytics", "No Google Analytics HTTP responses because opted out code detected.", "https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=de", "//script", function (a) {
        return self === top && !a.externalScript && 'window["_gaUserPrefs"] = { ioo : function() { return true; } }' == a.textContent
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#opted_out"),
        P(new U("Error", "Google Analytics", "Detected both ga.js and dc.js scripts which will make tracking ambiguous.", "http://support.google.com/analytics/bin/answer.py?answer=1008080", void 0, function (a) {
            if (a.scripts) {
                var c = v(a.scripts, function (a) {
                    return a.src && 0 < a.src.indexOf(Z.La.D)
                });
                a = v(a.scripts, function (a) {
                    return a.src && 0 < a.src.indexOf(Z.M.D)
                });
                return 0 < c.length && 0 < a.length
            }
            return!1
        }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_dc"), P(new U("Error", "Google Analytics",
            "Detected both ga.js and urchin.js scripts which can cause reporting errors.", "http://support.google.com/analytics/bin/answer.py?answer=1008080", void 0, function (a) {
                if (a.scripts) {
                    var c = v(a.scripts, function (a) {
                        return a.src && 0 < a.src.indexOf(Z.La.D)
                    });
                    a = v(a.scripts, function (a) {
                        return a.src && 0 < a.src.indexOf(Z.Da.D)
                    });
                    return 0 < c.length && 0 < a.length
                }
                return!1
            }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#ga_urchin"), new U("Warning", "Google Analytics", "Detected more than one script containing _gaq and _gat variables.",
            "https://support.google.com/analytics/answer/1009683?hl=en", void 0, function (a) {
                if (a.scripts)return a = za(a.scripts, function (a) {
                    var b = a.textContent && a.textContent.match(/(?:$|[. \t])_ga[qt]\s*=/);
                    this.infoLink = a.src;
                    return b
                }), 1 < a ? a.toString() : !1
            }), Q(M(new U("Info", "Google Analytics", "_gat global object", "https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat", "//script", function (a) {
            return B(/(?:^|[ ,;]|window\.)_gat\./g, a.textContent)
        }), "group_status"), [Fe, ni()])]);
    return a
};
yi.prototype.Na = function () {
    return[P(new Me("Warning", "Google Analytics", "No Google Analytics HTTP responses because opted out with extension.", "https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=de", function (a) {
        this.infoLink = a.pb;
        return"fllaojicojecljbmefodhfapmkghcbnh" == a.id
    }), "https://support.google.com/tagassistant/answer/3059154?ref_topic=2947092#opted_out"), M(new Me("Warning", "Google Analytics", "This extension may prevent Google Analytics from working correctly",
        "chrome://extensions/#", function (a) {
            this.infoLink = a.homepageUrl;
            return Ca("epanfjkfahimkgomnigadpkobaefekcd epojjbofkhffmihobdncmbhdocjljhpi fadgflmigmogfionelcpalhohefbnehm jmcpbefnpobogldglnlikgojpaddibgb mlomiejdfkolichcflejclcbmpeaniij obfkigoejfpmepamlegoacdnpmeejeop".split(" "), a.id) && a.enabled && a.name
        }), "linked")]
};
jf(new yi);
var ej = function () {
    X.call(this, 0, 100)
};
q(ej, X);
var fj = /googletag.(define(?:OutOfPage)?Slot\(.*?\))/g, hj = function () {
        var a = [K("Document ID", p(Kd, /(['"]div[^)]+['"]?)[)]/)), K("Accepted sizes", p(Kd, /,\s*(\[?(?:\[\s*\d+\s*,\s*\d+\s*\]\s*,?\s*)+\]?)\s*,/)), K("Out of page", p(Kd, /defineOutOfPageSlot/))];
        return Je("Ad Slots", r("AdSlot ${%s}", "Document ID"), a, gj)
    }, ij = M(K("Network ID", function (a) {
        var b = D("GooglePublisherConsole"), c;
        c = document;
        c = c.querySelectorAll && c.querySelector ? c.querySelectorAll("DIV") : c.getElementsByTagName("DIV");
        for (var d = 0, e; e = c[d]; d++)B(/google_pubconsole/,
            e.id) && (e.style.display = b ? "block" : "none");
        return a.label || "not set"
    }), "copyable"), kj = function (a, b) {
        this.format = "update_button";
        this.text = jj(E(a)) ? "Turn off (requires reload)" : "Turn on (requires reload)";
        Ve(a.tabId, td(b) + ":" + this.text, function () {
            var b = E(a), d = {};
            jj(b) ? (fc(b), b.o.remove("google_force_console"), d.GooglePublisherConsole = !1) : (fc(b), b.o.set("google_force_console", 1), d.GooglePublisherConsole = !0);
            l(chrome) && l(chrome.storage) && Xb(d);
            chrome.tabs.update(a.tabId, {url: b.toString()})
        });
        return"Console"
    },
    gj = function (a) {
        a = B(fj, a.textContent);
        this.b = fj.lastIndex;
        return a
    };
ej.prototype.m = function () {
    return["*://*.pubads.g.doubleclick.net/*"]
};
ej.prototype.w = function () {
    return[Q(Ke("Google Publisher Tag", r("%s ${%s}", "Google Publisher Tag", "Network ID"), "https://support.google.com/dfp_premium/topic/28788?hl=en&ref_topic=28149", '//script[contains(text(), "googletag")]', function (a) {
        return!!a.textContent && B(/googletag\s*.\s*define(?:OutOfPage)?Slot\(\s*["']\/(\d+)\//g, a.textContent)
    }), [ij, Ge, hj()])]
};
ej.prototype.B = function () {
    var a = Oe("Console", kj);
    a.category = "Google Publisher Tag";
    var b = {};
    b["Network ID"] = [a];
    return b
};
ej.prototype.r = function () {
    return[M(ne(S("Google Publisher Tag", "pubads.g.doubleclick.net/", r("%s ${%s}", "Google Publisher Tag", "Network ID"), "https://support.google.com/dfp_premium/topic/28788?hl=en&ref_topic=28149", function (a) {
        var b = tc(E(a), "iu_parts");
        return!!b && Hb(/pubads.g.doubleclick.net\/gampad\/ads/, a) && B(/(\d+)/, b)
    }, "", [ij, fe, he, T])), "unchecked")]
};
var jj = function (a) {
    return!!a && !!(tc(a, "google_force_console") || tc(a, "google_console") || tc(a, "google_debug") || tc(a, "googfc"))
};
jf(new ej);
var lj = function () {
    X.call(this, 0, 99)
};
q(lj, X);
h = lj.prototype;
h.m = function () {
    return["*://*.nexus.ensighten.com/*"]
};
h.B = function () {
    var a = {};
    a[T.text] = [bf("Ensighten")];
    return a
};
h.r = function () {
    return[ne(S("Ensighten", "nexus.ensighten.com/", "Ensighten", "http://www.ensighten.com/", p(Hb, /nexus\.ensighten\.com\/([^\/]*)\//), "unchecked", [je("Client ID", "ClientID"), je("Page ID", "PageID"), ie("Rules", "Rule %s", function (a) {
        return tc(E(a), "ruleId") || !1
    }, [T, fe, he], void 0, "unchecked"), fe, he, T]))]
};
h.w = Ma([]);
h.v = z;
jf(new lj);
var mj = function () {
    X.call(this, 0, 99)
};
q(mj, X);
mj.prototype.m = function () {
    return["*://cdn.krxd.net/*"]
};
var nj = M(K("Configuration ID", function (a) {
    return a.label || "not set"
}), "copyable");
mj.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("Krux SuperTag")];
    return a
};
mj.prototype.r = function () {
    return[M(ne(S("Krux SuperTag", "cdn.krxd.net/", "Krux SuperTag", "http://www.krux.com/", function (a) {
        return(a = sc(uc(a.url)).get("confid")) ? a + "" : !1
    }, "", [nj, fe, he, T])), "unchecked")]
};
mj.prototype.w = Ma([]);
mj.prototype.v = z;
jf(new mj);
var oj = function () {
    X.call(this, 0, 99)
};
q(oj, X);
oj.prototype.m = function () {
    return["*://*.cloudfront.net/*"]
};
var pj = M(K("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
oj.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("Opentag")];
    return a
};
oj.prototype.r = function () {
    return[M(ne(S("Opentag", "cloudfront.net/", "Opentag", "http://www.opentag.com/", p(Hb, /(opentag-[^.]*)\.js/i), "", [pj, fe, he, T])), "unchecked")]
};
oj.prototype.w = Ma([]);
oj.prototype.v = z;
jf(new oj);
var qj = function () {
    X.call(this, 0, 99)
};
q(qj, X);
qj.prototype.m = function () {
    return["*://*.cdn.tagcommander.com/*"]
};
var rj = M(K("Account ID", function (a) {
    return a.label || "not set"
}), "copyable");
qj.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("Tagcommander")];
    return a
};
qj.prototype.r = function () {
    return[M(ne(S("Tagcommander", "cdn.tagcommander.com", "Tagcommander", "http://www.tagcommander.com/", function (a) {
        return qc(uc(a.url))
    }, "", [rj, fe, he, T])), "unchecked")]
};
qj.prototype.w = Ma([]);
qj.prototype.v = z;
jf(new qj);
var sj = function () {
    X.call(this, 0, 99)
};
q(sj, X);
sj.prototype.m = function () {
    return["*://*.tiqcdn.com/*"]
};
var tj = M(K("Account", function (a) {
    return a.label || "not set"
}), "copyable");
sj.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("Tealium")];
    return a
};
sj.prototype.r = function () {
    return[M(ne(S("Tealium", "tiqcdn.com/", "Tealium", "http://www.tealium.com/", p(Hb, /utag\/([^\/]+)\//i), "", [tj, fe, he, T])), "unchecked")]
};
sj.prototype.w = Ma([]);
sj.prototype.v = z;
jf(new sj);
var uj = function () {
    X.call(this, 0, 99)
};
q(uj, X);
uj.prototype.m = function () {
    return["*://*.levexis.com/*"]
};
var vj = K("Account", function (a) {
    return a.label || "not set"
});
uj.prototype.B = function () {
    var a = {};
    a[T.text] = [bf("TagMan")];
    return a
};
uj.prototype.r = function () {
    return[M(ne(S("TagMan", "levexis.com/", "TagMan", "http://www.tagman.com/", p(Hb, /levexis\.com\/([^\/]*)\/tman.cgi/), "", [vj, fe, he, T])), "unchecked")]
};
uj.prototype.w = Ma([]);
uj.prototype.v = z;
jf(new uj);
var wj = function (a) {
    if (!da(a))if (a && "function" == typeof a.handleEvent)a = ga(a.handleEvent, a); else throw Error("Invalid listener argument");
    k.setTimeout(a, 1E3)
};
var $ = {}, xj = {}, yj = new Bc(-1, "", "init", "", !0), zj = null, Aj = "images/product-icon/tag_assistant-19.png", Bj = "Tag Assistant (by Google)", Cj = p(r, "Found %s and %s."), Dj = function () {
        chrome.browserAction.setIcon({path: Aj});
        chrome.browserAction.setTitle({title: Bj})
    }, Fj = function () {
        var a = yj, b = a.issues;
        zj && zj.postMessage(a);
        if (D("ShowWelcomeScreen"))Dj(); else if (Ej(a))chrome.browserAction.setTitle({tabId: a.tabId, title: Bj + "\nThis Page is excluded from automatic validation"}), chrome.browserAction.setIcon({tabId: a.tabId,
            path: Aj}); else if (a.requiresReload)Dj(); else if (null != b) {
            var c = dd(b).length, d = zd(b, "Error"), e = 0 < d ? 0 : zd(b, "Warning"), f = 0 < d + e ? 0 : zd(b, "Suggestion"), g = Cc(c, "tag"), b = c;
            d ? (c = Cc(d, "error"), c = Cj(g, c), g = "r") : e ? (c = Cc(e, "warning"), c = Cj(g, c), g = "y") : f ? (c = Cc(f, "suggestion"), c = Cj(g, c), g = "b") : c ? (c = r("Found %s.", g), g = "g") : (c = r("Nothing found on %s.", a.title), b = "static", g = "k");
            a = a.tabId;
            d = "images/extension-icon/tag_assistant_";
            d = ca(b) ? 9 < b ? d + "9" : 0 == b ? d + "static" : d + b : d + b;
            chrome.browserAction.setIcon({tabId: a, path: d + ("_chrome_only-" +
                g + "19.png")});
            chrome.browserAction.setTitle({tabId: a, title: Bj + "\n" + c})
        }
    }, Hj = function (a) {
        var b = a.tabId, c = a.url;
        if (0 <= b && $[b]) {
            var d = $[b], e = {};
            e.url = a.url;
            e.redirectUrl = a.redirectUrl;
            e.statusCode = a.statusCode;
            e.redirectedFrom = d.redirects[c];
            e.tabId = b;
            e.documentUrl = d.url;
            x(d.responses, e);
            Ej(d) || Gj(b)
        }
    }, Ij = function (a) {
        var b = Ye.c(), c = $[a].issues;
        a = $[a].responses;
        Qc(c, [2, 6]);
        b.$(c, a)
    }, Jj = function (a, b) {
        a.url != b && (a.url = b, u(a.responses, function (a) {
            a.documentUrl = b;
            a.documentUri = void 0
        }))
    }, Kj = function (a) {
        chrome.permissions.contains({permissions: ["management"]},
            function (b) {
                b && chrome.management.getAll && chrome.management.getAll(function (b) {
                    if (null !== b) {
                        var d = Ye.c(), e = $[a];
                        e && (e.extensionIssues = d.ra(e.url, b));
                        Gj(a)
                    }
                })
            })
    }, Gj = function (a) {
        Xe(a);
        var b = $[a];
        b || (b = new Bc(a, ""), $[a] = b, Lj(a));
        b.issues = [];
        b.lastUpdated = (new Date).getTime();
        if (!Ej(b)) {
            var c = Ye.c();
            Ua(xj[a], function (a) {
                a.issues && Ha(b.issues, Ec(a.issues))
            });
            Ha(b.issues, Ec(b.extensionIssues));
            c.Y(b.issues);
            Ij(a);
            b.domChecksFinished && nf(c, b.issues, function () {
                c.Y(b.issues);
                c.la(b);
                Fj()
            });
            c.Y(b.issues);
            c.la(b)
        }
        Fj()
    },
    Mj = function (a) {
        if (a && a.active) {
            var b = a.id, c = a.url, d = $[b];
            $[b] || (d = new Bc(b, c), Lj(b));
            yj = d;
            d.title = a.title;
            Fj();
            a = {};
            a.tabId = b;
            a.popup = c ? "popup.html?utm_source=ext&url=" + c : "popup.html?utm_source=ext";
            chrome.browserAction.setPopup(a)
        }
    }, Nj = function () {
        chrome.tabs.query && chrome.tabs.query({}, function (a) {
            u(a, function (a) {
                $[a.id] = new Bc(a.id, a.url, a.title, a.status, !0);
                xj[a.id] = xj[a.id] || {}
            })
        })
    }, Lj = function (a) {
        if (-1 != a && chrome.tabs.get)try {
            chrome.tabs.get(a, function (b) {
                l(b) ? $[b.id] ? ($[b.id].status = b.status,
                    $[b.id].title = b.title, $[b.id].url = b.url) : $[b.id] = new Bc(b.id, b.url, b.title, b.status) : delete $[a]
            })
        } catch (b) {
        }
    }, Oj = function () {
        var a = chrome.i18n.getMessage("@@extension_id");
        chrome.permissions.contains({permissions: ["management"]}, function (b) {
            b && chrome.management.get(a, function (a) {
                Bj = a.name;
                a.name.indexOf("Dev") ? Aj = "images/product-icon/tag_assistant_dev-19.png" : a.name.indexOf("Internal") ? Aj = "images/product-icon/tag_assistant_internal-19.png" : a.name.indexOf("Test") && (Aj = "images/product-icon/tag_assistant_test-19.png")
            })
        })
    },
    Rj = function () {
        chrome.extension.onConnect.addListener(function (a) {
            console.assert("popup" == a.name);
            zj = a;
            a.onMessage.addListener(function (a) {
                var c = a.msg, d = a.tabId;
                $[d] || ($[d] = new Bc(d, a.url || ""), xj[d] = {}, Lj(d));
                var e = $[d];
                yj = e;
                switch (c) {
                    case "Action":
                        We(d, a.name, e, function () {
                            Gj(d)
                        });
                        break;
                    case "Status":
                        zj && zj.postMessage(e);
                        break;
                    case "Set":
                        Xb(Ya(a.name, a.value));
                        break;
                    case "ManualAction":
                        e.url && e.url.length && (Pj("DomTags", d, e.url), Kj(d), e.isManualCheck = !0, e.isExcluded = !0);
                        break;
                    case "WhiteListDomain":
                        e.url &&
                        e.url.length && (Qj(e.url), Pj("DomTags", d, e.url), Kj(d), e.isManualCheck = !0, e.isExcluded = !1)
                }
            });
            a.onDisconnect.addListener(function () {
                zj = null
            });
            Fj()
        })
    }, Sj = function () {
        chrome.extension.onMessage.addListener(function (a, b) {
            var c = a.msg;
            $[b.tab.id] || ($[b.tab.id] = new Bc(b.tab.id, b.tab.url, b.tab.title, b.tab.status), xj[b.tab.id] = {});
            var d = $[b.tab.id];
            switch (c) {
                case "DomTags":
                    Jj(d, b.tab.url), d.domChecksFinished = !0, D("IgnoreExternalScripts") || Pj("ExternalScriptTags", b.tab.id, b.url);
                case "ExternalScriptTags":
                    c = b.tab.id;
                    xj[c] || (xj[c] = {});
                    (d = xj[c][a.url]) && d.issues.length == a.issues.length || (xj[c][a.url] = a);
                    Gj(c);
                    break;
                default:
                    console.log("Message " + c + "not caught.")
            }
            Fj()
        })
    }, Tj = function () {
        chrome.tabs.onActivated.addListener(function (a) {
            chrome.tabs.get(a.tabId, Mj)
        })
    }, Uj = function () {
        chrome.tabs.onUpdated.addListener(function (a) {
            chrome.tabs.get(a, Mj)
        })
    }, Vj = function () {
        chrome.tabs.onRemoved.addListener(function (a) {
            Xe(a);
            delete $[a];
            delete xj[a]
        })
    }, Wj = function () {
        var a = {urls: Ye.c().m()};
        chrome.webRequest.onBeforeRedirect.addListener(function (a) {
            var c =
                a.url, d = $[a.tabId];
            d && (d.redirects[a.redirectUrl] = c);
            Hj(a)
        }, a, ["responseHeaders"])
    }, Xj = function () {
        chrome.webNavigation.onBeforeNavigate.addListener(function (a) {
            if (0 == a.frameId) {
                var b = a.tabId;
                $[b] = new Bc(b, a.url);
                Lj(b);
                xj[b] = {};
                Fj()
            }
        })
    }, Yj = function () {
        chrome.webNavigation.onCompleted.addListener(function (a) {
            var b = a.tabId, c = a.url;
            if (0 == a.frameId) {
                if (a = $[b])Jj(a, c), a.domChecksFinished = !0;
                Fj();
                wj(function () {
                    Pj("DomTags", b, c);
                    Kj(b)
                })
            }
        })
    }, Qb = function () {
        var a = Ob.c().V.PatternProfiling;
        l(a) && ta(a);
        delete qb.Sa;
        a = yj;
        if (!D("ShowWelcomeScreen") && a) {
            var b = parseInt(a.tabId, 10);
            a.requiresReload || isNaN(b) || Gj(b)
        }
        Fj()
    }, Qj = function (a) {
        var b = Wb("WhiteListedDomains");
        a = pc(new dc(a));
        b = null == b || ja(null == b ? "" : String(b)) || -1 != b.indexOf(a) ? a : ka(b) + "\n" + a;
        Xb(Ya("WhiteListedDomains", b))
    }, Ej = function (a) {
        if (a.isManualCheck)return!1;
        a.isExcluded = Zj(a.url);
        return a.isExcluded
    }, Zj = function (a) {
        var b = Wb("WhiteListedDomains"), c = !D("ManualChecks");
        return 0 <= a.indexOf("https://chrome.google.com") || 0 == a.indexOf("chrome") ? !0 : c ? !1 :
            ja(null == b ? "" : String(b)) ? !0 : !w(b.split(/[,\n]/), function (b) {
                return!ja(null == b ? "" : String(b)) && -1 != a.indexOf(b)
            })
    }, Pj = function (a, b, c) {
        var d = $[b];
        d || (d = new Bc(b, c), $[b] = d, Lj(b));
        Ej(d) || (d = {}, d.msg = a, d.tabId = b, d.url = c, d.issues = void 0, chrome.tabs.sendMessage(b, d))
    };
window.addEventListener("load", function () {
    Oj();
    var a = of();
    Xb(Ya("categories", a));
    Nj();
    Rj();
    Sj();
    Tj();
    Uj();
    Vj();
    Wj();
    a = {urls: Ye.c().m()};
    chrome.webRequest.onCompleted.addListener(Hj, a, ["responseHeaders"]);
    a = {urls: Ye.c().m()};
    chrome.webRequest.onErrorOccurred.addListener(Hj, a);
    Xj();
    Yj();
    Ub()
}, !1);
