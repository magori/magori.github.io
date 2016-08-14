/******/ ! function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    } // webpackBootstrap
    /******/
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
}([function(e, n, t) {
    "use strict";
    var r = t(1),
        i = t(2),
        o = t(3);
    angular.module("DBManger", ["ngRoute", "ui.bootstrap", "dexieAdmin"]).config(r.config).config(o.routerConfig).controller("MainController", function() {}).service("dbManagerConfig", i.DbManagerConfig)
}, function(e, n) {
    "use strict";

    function t(e) {
        "ngInject";
        e.debugEnabled(!0)
    }
    t.$inject = ["$logProvider"], Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.config = t
}, function(e, n) {
    "use strict";

    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n
        }
    }();
    n.DbManagerConfig = function() {
        function e() {
            "ngInject";
            t(this, e), this.db = new Dexie("MyDatabases"), this.db.test = "test", this.db.version(1).stores({
                friends: "++id, name, age, isCloseFriend, contact.phone ",
                notes: "++id, title, date, *items",
                noAction: "++id",
                fleurs: "++id, name, race"
            })
        }
        return r(e, [{
            key: "onNewDb",
            value: function() {
                var e = this;
                return function(n) {
                    e.db = n
                }
            }
        }, {
            key: "getDb",
            value: function() {
                return this.db
            }
        }, {
            key: "tablesConfig",
            value: function() {
                var e = this;
                return {
                    friends: {
                        columns: {
                            id: !1,
                            time: !0,
                            isCloseFriend: !1
                        },
                        trash: !0,
                        load: function() {
                            for (var n = [], t = 0; t < 3; t++) n.push({
                                name: chance.name(),
                                age: chance.age(),
                                contact: {
                                    phone: chance.phone()
                                },
                                t: {
                                    g: {
                                        t: "toto",
                                        v: "val"
                                    }
                                }
                            });
                            return e.db.friends.bulkPut(n)
                        }
                    },
                    notes: {
                        load: function() {
                            for (var n = [], t = 0; t < 1e3; t++) n.push({
                                title: "tata"
                            });
                            return e.getDb().notes.bulkPut(n)
                        }
                    }
                }
            }
        }]), e
    }()
}, function(e, n) {
    "use strict";

    function t(e) {
        "ngInject";
        e.when("/", {
            templateUrl: "app/main/main.html",
            controller: "MainController",
            controllerAs: "dbManger"
        }).otherwise({
            redirectTo: "/"
        })
    }
    t.$inject = ["$routeProvider"], Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.routerConfig = t
}]), angular.module("dexieAdmin").run(["$templateCache", function(e) {
    e.put("app/main/main.html", "<div class=container><div><div class=row><div class=col-xs-12 style=height:80px><h3>Demo ng-dexie-admin</h3></div></div><db-manager></db-manager></div></div>")
}]);
//# sourceMappingURL=../maps/scripts/app-8af9b00427.js.map
