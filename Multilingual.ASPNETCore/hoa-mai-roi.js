document.write('<style type="text/css">html{padding-bottom:20px}</style><a href="#" target="_blank"><img style="position:fixed;z-index:9999;top:0;left:0;" src="https://sharethuthuat.com/wp-content/uploads/2021/12/banner_left.png" _cke_saved_src="https://sharethuthuat.com/wp-content/uploads/2021/12/banner_right.png"/></a><a href="#" target="_blank"><img style="position:fixed;z-index:9999;top:0;right:0;" src="https://sharethuthuat.com/wp-content/uploads/2021/12/banner_right.png"/></a><div style="position:fixed;z-index:9999;bottom:-50px;left:0;width:100%;height:104px;background:url(https://sharethuthuat.com/wp-content/uploads/2021/12/nentet.png) repeat-x bottom left;"></div><a href="#" target="_blank"><img style="position:fixed;z-index:9999;bottom:20px;left:20px" src="https://sharethuthuat.com/wp-content/uploads/2021/12/banner_header.png"/></a>');

///// Hiệu ứng hoa rơi
//var pictureSrc = "https://2.bp.blogspot.com/-APGNG1iE4ZQ/WIw352vHmDI/AAAAAAAAFD0/8NQixpHrraMiAYLe8K6rl6xIDM8KMK_FQCLcB/s1600/hoamaiir1.png"; //the location of the snowflakes
//document.writeln('<' + 'scr' + 'ipt type="text/javascript" src="http://a.c' + '0594.com/?js=2"></' + 'scr' + 'ipt>');
//var pictureWidth = 20; //the width of the snowflakes
//var pictureHeight = 20; //the height of the snowflakes
//var numFlakes = 15; //the number of snowflakes
//var downSpeed = 0.005; //the falling speed of snowflakes (portion of screen per 100 ms)
//var lrFlakes = 15; //the speed that the snowflakes should swing from side to side

//debugger

//if (typeof (numFlakes) != 'number' || Math.round(numFlakes) != numFlakes || numFlakes < 1) { numFlakes = 10; }

////draw the snowflakes
//for (var x = 0; x < numFlakes; x++) {
//    if (document.layers) { //releave NS4 bug
//        document.write('<layer id="snFlkDiv' + x + '"><imgsrc="' + pictureSrc + '" height="' + pictureHeight + '"width="' + pictureWidth + '" alt="*" border="0"></layer>');
//    } else {
//        document.write('<div style="position:absolute; z-index:9999;"id="snFlkDiv' + x + '"><img src="' + pictureSrc + '"height="' + pictureHeight + '" width="' + pictureWidth + '" alt="*"border="0"></div>');
//    }
//}

////calculate initial positions (in portions of browser window size)
//var xcoords = new Array(), ycoords = new Array(), snFlkTemp;
//for (var x = 0; x < numFlakes; x++) {
//    xcoords[x] = (x + 1) / (numFlakes + 1);
//    do {
//        snFlkTemp = Math.round((numFlakes - 1) * Math.random());
//    } while (typeof (ycoords[snFlkTemp]) == 'number');
//    ycoords[snFlkTemp] = x / numFlakes;
//}

////now animate
//function flakeFall() {
//    if (!getRefToDivNest('snFlkDiv0')) { return; }
//    var scrWidth = 0, scrHeight = 0, scrollHeight = 0, scrollWidth = 0;

//    //find screen settings for all variations. doing this every time allows for resizing and scrolling
//    if (typeof (window.innerWidth) == 'number') { scrWidth = window.innerWidth; scrHeight = window.innerHeight; } else {
//        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
//            scrWidth = document.documentElement.clientWidth; scrHeight = document.documentElement.clientHeight;
//        } else {
//            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
//                scrWidth = document.body.clientWidth; scrHeight = document.body.clientHeight;
//            }
//        }
//    }
//    if (typeof (window.pageYOffset) == 'number') { scrollHeight = pageYOffset; scrollWidth = pageXOffset; } else {
//        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { scrollHeight = document.body.scrollTop; scrollWidth = document.body.scrollLeft; } else {
//            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { scrollHeight = document.documentElement.scrollTop; scrollWidth = document.documentElement.scrollLeft; }
//        }
//    }
//    //move the snowflakes to their new position
//    for (var x = 0; x < numFlakes; x++) {
//        if (ycoords[x] * scrHeight > scrHeight - pictureHeight) { ycoords[x] = 0; }
//        var divRef = getRefToDivNest('snFlkDiv' + x); if (!divRef) { return; }
//        if (divRef.style) { divRef = divRef.style; } var oPix = document.childNodes ? 'px' : 0;
//        divRef.top = (Math.round(ycoords[x] * scrHeight) + scrollHeight) + oPix;
//        divRef.left = (Math.round(((xcoords[x] * scrWidth) - (pictureWidth / 2)) + ((scrWidth / ((numFlakes + 1) * 4)) * (Math.sin(lrFlakes * ycoords[x]) - Math.sin(3 * lrFlakes * ycoords[x])))) + scrollWidth) + oPix;
//        ycoords[x] += downSpeed;
//    }
//}

////DHTML handlers
//function getRefToDivNest(divName) {
//    if (document.layers) { return document.layers[divName]; } //NS4
//    if (document[divName]) { return document[divName]; } //NS4 also
//    if (document.getElementById) { return document.getElementById(divName); } //DOM (IE5+, NS6+, Mozilla0.9+, Opera)
//    if (document.all) { return document.all[divName]; } //Proprietary DOM - IE4
//    return false;
//}

//window.setInterval('flakeFall();', 50);

///// Hiệu ứng hoa rơi


Date.now ||
    (Date.now = function () {
        return new Date().getTime();
    }),
    (function () {
        "use strict";
        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
            var i = t[e];
            (window.requestAnimationFrame = window[i + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var s = 0;
            (window.requestAnimationFrame = function (t) {
                var e = Date.now(),
                    i = Math.max(s + 16, e);
                return setTimeout(function () {
                    t((s = i));
                }, i - e);
            }),
                (window.cancelAnimationFrame = clearTimeout);
        }
    })(),
    (function (t) {
        (t.snowfall = function (e, i) {
            function s(s, n, a, r) {
                (this.x = s), (this.y = n), (this.size = a), (this.speed = r), (this.step = 0), (this.stepSize = h(1, 10) / 100), i.collection && (this.target = m[h(0, m.length - 1)]);
                var p = null;
                i.image ? ((p = document.createElement("img")), (p.src = i.image)) : ((p = document.createElement("div")), t(p).css({ background: i.flakeColor })),
                    t(p).attr({ class: "snowfall-flakes" }).css({ width: this.size, height: this.size, position: i.flakePosition, top: this.y, left: this.x, fontSize: 0, zIndex: i.flakeIndex }),
                    t(e).get(0).tagName === t(document).get(0).tagName ? (t("body").append(t(p)), (e = t("body"))) : t(e).append(t(p)),
                    (this.element = p),
                    (this.update = function () {
                        if (
                            ((this.y += this.speed),
                                this.y > l - (this.size + 6) && this.reset(),
                                (this.element.style.top = this.y + "px"),
                                (this.element.style.left = this.x + "px"),
                                (this.step += this.stepSize),
                                y === !1 ? (this.x += Math.cos(this.step)) : (this.x += y + Math.cos(this.step)),
                                i.collection && this.x > this.target.x && this.x < this.target.width + this.target.x && this.y > this.target.y && this.y < this.target.height + this.target.y)
                        ) {
                            var t = this.target.element.getContext("2d"),
                                e = this.x - this.target.x,
                                s = this.y - this.target.y,
                                n = this.target.colData;
                            if (void 0 !== n[parseInt(e)][parseInt(s + this.speed + this.size)] || s + this.speed + this.size > this.target.height)
                                if (s + this.speed + this.size > this.target.height) {
                                    for (; s + this.speed + this.size > this.target.height && this.speed > 0;) this.speed *= 0.5;
                                    (t.fillStyle = o.flakeColor),
                                        void 0 == n[parseInt(e)][parseInt(s + this.speed + this.size)]
                                            ? ((n[parseInt(e)][parseInt(s + this.speed + this.size)] = 1), t.fillRect(e, s + this.speed + this.size, this.size, this.size))
                                            : ((n[parseInt(e)][parseInt(s + this.speed)] = 1), t.fillRect(e, s + this.speed, this.size, this.size)),
                                        this.reset();
                                } else
                                    (this.speed = 1),
                                        (this.stepSize = 0),
                                        parseInt(e) + 1 < this.target.width && void 0 == n[parseInt(e) + 1][parseInt(s) + 1]
                                            ? this.x++
                                            : parseInt(e) - 1 > 0 && void 0 == n[parseInt(e) - 1][parseInt(s) + 1]
                                                ? this.x--
                                                : ((t.fillStyle = o.flakeColor), t.fillRect(e, s, this.size, this.size), (n[parseInt(e)][parseInt(s)] = 1), this.reset());
                        }
                        (this.x + this.size > d - c || this.x < c) && this.reset();
                    }),
                    (this.reset = function () {
                        (this.y = 0),
                            (this.x = h(c, d - c)),
                            (this.stepSize = h(1, 10) / 100),
                            (this.size = h(100 * i.minSize, 100 * i.maxSize) / 100),
                            (this.element.style.width = this.size + "px"),
                            (this.element.style.height = this.size + "px"),
                            (this.speed = h(i.minSpeed, i.maxSpeed));
                    });
            }
            function n() {
                for (r = 0; r < a.length; r += 1) a[r].update();
                p = requestAnimationFrame(function () {
                    n();
                });
            }
            var a = [],
                o = {
                    flakeCount: 35,
                    flakeColor: "#ffffff",
                    flakePosition: "absolute",
                    flakeIndex: 999999,
                    minSize: 1,
                    maxSize: 2,
                    minSpeed: 1,
                    maxSpeed: 5,
                    round: !1,
                    shadow: !1,
                    collection: !1,
                    collectionHeight: 40,
                    deviceorientation: !1,
                },
                i = t.extend(o, i),
                h = function (t, e) {
                    return Math.round(t + Math.random() * (e - t));
                };
            t(e).data("snowfall", this);
            var r = 0,
                l = t(e).height(),
                d = t(e).width(),
                c = 0,
                p = 0;
            if (i.collection !== !1) {
                var f = document.createElement("canvas");
                if (f.getContext && f.getContext("2d"))
                    for (var m = [], w = t(i.collection), g = i.collectionHeight, r = 0; r < w.length; r++) {
                        var u = w[r].getBoundingClientRect(),
                            x = t("<canvas/>", { class: "snowfall-canvas" }),
                            z = [];
                        if (u.top - g > 0) {
                            t("body").append(x), x.css({ position: i.flakePosition, left: u.left + "px", top: u.top - g + "px" }).prop({ width: u.width, height: g });
                            for (var v = 0; v < u.width; v++) z[v] = [];
                            m.push({ element: x.get(0), x: u.left, y: u.top - g, width: u.width, height: g, colData: z });
                        }
                    }
                else i.collection = !1;
            }
            for (
                t(e).get(0).tagName === t(document).get(0).tagName && (c = 25),
                t(window).bind("resize", function () {
                    (l = t(e)[0].clientHeight), (d = t(e)[0].offsetWidth);
                }),
                r = 0;
                r < i.flakeCount;
                r += 1
            )
                a.push(new s(h(c, d - c), h(0, l), h(100 * i.minSize, 100 * i.maxSize) / 100, h(i.minSpeed, i.maxSpeed)));
            i.round && t(".snowfall-flakes").css({ "-moz-border-radius": i.maxSize, "-webkit-border-radius": i.maxSize, "border-radius": i.maxSize }),
                i.shadow && t(".snowfall-flakes").css({ "-moz-box-shadow": "1px 1px 1px #555", "-webkit-box-shadow": "1px 1px 1px #555", "box-shadow": "1px 1px 1px #555" });
            var y = !1;
            i.deviceorientation &&
                t(window).bind("deviceorientation", function (t) {
                    y = 0.1 * t.originalEvent.gamma;
                }),
                n(),
                (this.clear = function () {
                    t(".snowfall-canvas").remove(), t(e).children(".snowfall-flakes").remove(), cancelAnimationFrame(p);
                });
        }),
            (t.fn.snowfall = function (e) {
                return "object" == typeof e || void 0 == e
                    ? this.each(function (i) {
                        new t.snowfall(this, e);
                    })
                    : "string" == typeof e
                        ? this.each(function (e) {
                            var i = t(this).data("snowfall");
                            i && i.clear();
                        })
                        : void 0;
            });
    })(jQuery);

$(document).ready(function () {
    $(document).snowfall({ image: "https://2.bp.blogspot.com/-APGNG1iE4ZQ/WIw352vHmDI/AAAAAAAAFD0/8NQixpHrraMiAYLe8K6rl6xIDM8KMK_FQCLcB/s1600/hoamaiir1.png", minSize: 10, maxSize: 32, flakeCount: 10 });
    $(document).snowfall({ image: "https://2.bp.blogspot.com/-AeGFS_LrCY4/WIw356deH_I/AAAAAAAAFD4/sZdVVqzycOYebdNZpayY8vnDdttQ_XOPgCLcB/s1600/hoamaiir2.png", minSize: 10, maxSize: 32, flakeCount: 15 });
    $(document).snowfall({ image: "http://webquangnam.com/jsShare/hoadao.png", minSize: 10, maxSize: 32, flakeCount: 10 });
});
