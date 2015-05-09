package;

import js.Node;
import js.node.Path;
import js.npm.connect.BodyParser;
import js.npm.Express;
import js.npm.express.CookieParser;
import js.npm.express.Logger;
import js.npm.express.Request;
import js.npm.express.Response;
import js.npm.express.Static;
import js.support.Error;
import routes.Index;
import routes.Users;

/**
 * ...
 * @author TiagoLr
 */

class Server {
	
	static function main() {
		var port = 8000;
		var app = new Express();
		
		// uncomment to use fav icon
		//app.use(new Favicon(Node.__dirname + '/public/favicon.ico'));
		app.use(new Static(Path.join(Node.__dirname, 'public')));
		// logger after icon and static files so they are not logged.
		#if debug
		app.use(new Logger('dev'));
		#else
		app.use(new Logger('combined'));
		#end
		app.use(BodyParser.json());
		app.use(BodyParser.urlencoded( { extended: false } ));
		app.use(new CookieParser());
		
		// routes
		app.use('/', new Index().router);
		app.use('/users', new Users().router);

		// catch 404 and forward to error handler
		app.use(function(req:Request, res:Response, next) {
			var err = new Error('Not Found');
			untyped err.status = 404;
			next(err);
		});

		// error handlers
		#if debug
		// development error handler
		// will print stacktrace
		app.use(function(err:Dynamic, req:Request, res:Response, next) {
			res.status(untyped err.status || 500);
			res.json({
				message: err.message,
				error: err,
			});
		});
		#else 
		// production error handler
		// no stacktraces leaked to user
		app.use(function(err, req, res, next) {
			res.status(untyped err.status || 500);
			res.json( {
				message: err.message,
				error: {}
			});
		});
		#end
		
		
		trace('starting server on port $port');
		app.listen(port);
	}
}