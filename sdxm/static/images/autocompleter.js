(function(b) {
    function g(a, c) {
        this.options = b.extend({}, h, c);
        this.customize = this.options.customize || this.customize;
        this.fill = this.options.fill || this.fill;
        this.$container = b(this.options.container);
        this.$element = b(a);
        this._attr_value = "data-item-value";
        this._cache = {};
        this._defaults = h;
        this._name = d;
        this.init()
    }
    var f = function(a) {
            var c = {
                click: "touchend",
                mousedown: "touchstart",
                mouseup: "touchend",
                mousemove: "touchmove",
                mouseover: "touchstart",
                mouseout: "touchend",
                mouseenter: "touchstart",
                mouseleave: "touchend"
            };
            return b.os.phone || b.os.tablet ? c[a] : a
        },
        d = "autocompletion",
        h = {
            caching: !0,
            delay: 500,
            postVar: "",
            container: '<ul class="autocompletion"></ul>',
            item: '<li class="autocompletion-item"></li>',
            shim: '<div class="autocompletion-shim"></div>',
            source: []
        };
    g.prototype = {
        init: function() {
            this.bind()
        },
        bind: function() {
            var a = this,
                c = "[" + this._attr_value + "]";
            this.$element.on("blur", b.proxy(this.blur, this)).on("input", function() {
                setTimeout(b.proxy(a.keyup, a), a.options.delay)
            }).on("changes", b.proxy(this.change, this));
            this.$container.on(f("mouseenter"),
                function() {
                    a.mousein = !0
                }).on(f("mouseleave"), function() {
                a.mousein = !1
            }).on(f("click"), c, b.proxy(this.click, this))
        },
        blur: function() {
            this.mousein || this.hide()
        },
        keyup: function() {
            var a = this.options.source;
            this.q = this.$element.val();
            this.q_lower = this.q.toLowerCase();
            var c = this;
            if (!this.q) return this.hide();
            this.options.caching && this._cache[this.q_lower] ? this.render(this._cache[this.q_lower]) : "string" === typeof a ? b.post(a, "" + this.options.postVar + "=" + encodeURIComponent(this.q_lower), function(b) {
                b && (a = JSON.parse(b),
                    c.suggest(a))
            }) : b.isFunction(a) ? a(this.q, b.proxy(this.suggest, this)) : b.isArray(a) && this.suggest(a)
        },
        click: function(a) {
            a.stopPropagation();
            a.preventDefault();
            this.select(a)
        },
        change: function(a) {
            this.$element.parents("form")[0].submit()
        },
        suggest: function(a) {
            var c = this;
            a = b.grep(a, function(a) {
                return -1 !== a.toLowerCase().indexOf(c.q_lower)
            });
            this.options.caching && (this._cache[this.q_lower] = a);
            this.render(a)
        },
        render: function(a) {
            if (!a.length) return this.hide();
            var c = this;
            a = b.map(a, function(a) {
                var i_v_i = a.indexOf("<");
                var i_v = i_v_i ? a.substring(0, i_v_i) : "";
                return b(c.options.item).attr(c._attr_value,
                    i_v).html(c.highlight(a))[0]
            });
            var e = this.$element.position(),
                e = {
                    left: e.left + "px",
                    top: e.top + this.$element.height() + "px"
                };
            this.customize(this.$container.css(e).html(a)[0]);
            this.$container.insertAfter(this.$element);
            this.show()
        },
        highlight: function(a) {
            var b = this.q.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return a.replace(RegExp("(" + b + ")", "ig"), function(a, b) {
                return "<strong>" + b + "</strong>"
            })
        },
        customize: function(a) {},
        select: function(a) {
            if (a = b(a.target).attr(this._attr_value)) this.hide(), this.$element.val(a).trigger("changes")
        },
        fill: function(a) {
            return a
        },
        show: function() {
            this.visible || (this.visible = !0, this.$container.show())
        },
        hide: function() {
            this.visible && (this.visible = !1, this.$container.hide())
        }
    };
    b.fn[d] = function(a) {
        return this.each(function() {
            b(this).data("plugin_" + d) || b(this).data("plugin_" + d, new g(this, a))
        })
    }
})(Zepto);