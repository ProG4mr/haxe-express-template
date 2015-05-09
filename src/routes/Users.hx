package routes;
import js.npm.connect.support.Middleware.TMiddleware;
import js.npm.express.Request;
import js.npm.express.Response;
import js.npm.express.Router;

/**
 * Index
 * @author TiagoLr
 */
class Users {
	
	public var router:Router;
	
	public function new() {
		router = new Router();
		
		router.get('/', function(req:Request, res:Response) {
			res.end("Users");
		});
	}
	
}