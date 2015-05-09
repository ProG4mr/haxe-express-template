(function () { "use strict";
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
var Server = function() { };
Server.main = function() {
	var port = 8000;
	var app = new (Express__9||require("express"))();
	app["use"]((function($this) {
		var $r;
		var middleware = new (Static__1||require("express").static)((Path__11||require("path")).join(js.Node.__dirname,"public"));
		$r = middleware;
		return $r;
	}(this)));
	app["use"]((function($this) {
		var $r;
		var middleware1 = new (Logger__3||require("morgan"))("dev");
		$r = middleware1;
		return $r;
	}(this)));
	app["use"]((function($this) {
		var $r;
		var middleware2 = (BodyParser__10||require("body-parser")).json();
		$r = middleware2;
		return $r;
	}(this)));
	app["use"]((function($this) {
		var $r;
		var middleware3 = (BodyParser__10||require("body-parser")).urlencoded({ extended : false});
		$r = middleware3;
		return $r;
	}(this)));
	app["use"]((function($this) {
		var $r;
		var middleware4 = new (CookieParser__8||require("cookie-parser"))();
		$r = middleware4;
		return $r;
	}(this)));
	app["use"]("/",new routes.Index().router);
	app["use"]("/users",new routes.Users().router);
	app["use"](function(req,res,next) {
		var err = new String("Not Found");
		err.status = 404;
		next(err);
	});
	app["use"](function(err1,req1,res1,next1) {
		res1.status(err1.status || 500);
		res1.json({ message : err1.message, error : err1});
	});
	console.log("starting server on port " + port);
	app.listen(port);
};
var js = {};
js.Node = function() { };
js.npm = {};
js.npm.connect = {};
js.npm.connect.support = {};
js.npm.connect.support._Middleware = {};
js.npm.connect.support._Middleware.TMiddleware_Impl_ = function() { };
js.npm.connect.support._Middleware.TMiddleware_Impl_.fromMiddleware = function(middleware) {
	return middleware;
};
js.npm.connect.support._Middleware.TMiddleware_Impl_.fromAsync = function(method) {
	return method;
};
js.npm.connect.support._Middleware.TMiddleware_Impl_.fromSync = function(method) {
	return method;
};
js.npm.express = {};
js.npm.express._Static = {};
js.npm.express._Static.StaticDotfilesOptions_Impl_ = function() { };
js.support = {};
js.support._RegExp = {};
js.support._RegExp.RegExp_Impl_ = function() { };
js.support._RegExp.RegExp_Impl_.fromEReg = function(r) {
	return r.r;
};
js.support._RegExp.RegExp_Impl_.toEReg = function(r) {
	return new EReg(r.source,(r.ignoreCase?"i":"") + (r.global?"g":"") + (r.multiline?"m":""));
};
var routes = {};
routes.Index = function() {
	this.router = new (Router__0||require("express").Router)();
	this.router.get("/",function(req,res) {
		res.end("Index");
	});
};
routes.Users = function() {
	this.router = new (Router__0||require("express").Router)();
	this.router.get("/",function(req,res) {
		res.end("Users");
	});
};
var Path__11 = require("path");
var EventEmitter__4 = require("events").EventEmitter;
var Stats__2 = require("fs").Stats;
var ClientRequest__7 = require("http").ClientRequest;
var Writable__5 = require("stream").Writable;
var ServerResponse__6 = require("http").ServerResponse;
var Readable__12 = require("stream").Readable;
var Express__9 = require("express");
var BodyParser__10 = require("body-parser");
var CookieParser__8 = require("cookie-parser");
var Logger__3 = require("morgan");
var Router__0 = require("express").Router;
var Static__1 = require("express")["static"];
js.Node.console = console;
js.Node.process = process;
js.Node.module = module;
js.Node.exports = exports;
js.Node.__filename = __filename;
js.Node.__dirname = __dirname;
js.Node.require = require;
js.Node.setTimeout = setTimeout;
js.Node.setInterval = setInterval;
js.Node.clearTimeout = clearTimeout;
js.Node.clearInterval = clearInterval;
js.npm.express._Static.StaticDotfilesOptions_Impl_.Allow = "allow";
js.npm.express._Static.StaticDotfilesOptions_Impl_.Deny = "deny";
js.npm.express._Static.StaticDotfilesOptions_Impl_.Ignore = "ignore";
Server.main();
})();

//# sourceMappingURL=server.js.map