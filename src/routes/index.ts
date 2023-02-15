import './auth';
import './users';
import './posts';
import './comments';
import './chats';
import './ws';
import { app } from '../app';
import { errorMiddleware } from '../middlewares/error-middleware';

app.use(errorMiddleware);
