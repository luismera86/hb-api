import { BaseRouter } from './index.routes';
import { UserController } from '../controllers/user.controllers';

class UserRoutes extends BaseRouter {
  private controller = new UserController();

  constructor() {
    super();
  }

  public routes(): void {
    this.router.get('/user', this.controller.getUsers);
    this.router.get('/user/:dni', this.controller.getUserByDni);
    this.router.post('/user', this.controller.postUser);
    this.router.put('/user', this.controller.putUser);
    this.router.delete('/user', this.controller.deleteUser);
  }
}
