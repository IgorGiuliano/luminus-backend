import { Router }                   from "express";
import { FindSensorController } from "./controllers/sensors/FindSensorController";
import { FindSensorDataController } from "./controllers/sensors/FindSensorDataController";
import { LuminusAlterateStateController } from "./controllers/sensors/LuminusAlterateStateController";
import { LuminusReceiveDataController } from "./controllers/sensors/LuminusReceiveDataController";
import { LuminusSendDataController } from "./controllers/sensors/LuminusSendDataController";
import { FindUserController } from "./controllers/users/FindUserController";
import { LoginUserController }      from "./controllers/users/LoginUserController";
import { RegisterSensorController } from "./controllers/users/RegisterSensorController";
import { RegisterUserController }   from "./controllers/users/RegisterUserController";
import { UpdatePassController } from "./controllers/users/UpdatePassController";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { ensureAuthenticated } from "./middleware/ensureAutheticated";

const router = Router();

//  Rotas user
router.post('/authenticate', new LoginUserController().handle);
router.post('/register', new RegisterUserController().handle);
router.post('/set-sensor', ensureAuthenticated, new RegisterSensorController().handle);
router.post('/find-user-sensors', ensureAuthenticated, new FindSensorController().handle);
router.post('/find-user-data', ensureAuthenticated, new FindUserController().handle);
router.post('/update-user-data', ensureAuthenticated,  new UpdateUserController().handle);
router.post('/update-user-pass', ensureAuthenticated,  new UpdatePassController().handle);

// Rotas sensor
router.post('/luminus-api-recieve-data', new LuminusReceiveDataController().handle);
router.post('/luminus-api-alterate-state', new LuminusAlterateStateController().handle);
router.get('/luminus-api-send-data', new LuminusSendDataController().handle);
router.post('/find-sensor-data', new FindSensorDataController().handle);

export { router };