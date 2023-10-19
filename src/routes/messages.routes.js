import { Router } from 'express';
import { getMessages, getMessageByMail, postMessage, deleteMessage } from '../controllers/messages.controller.js';

const routerMessages = Router ();
routerMessages.get ( "/", getMessages );
routerMessages.get ( "/:email", getMessageByMail );
routerMessages.post ( "/", postMessage );
routerMessages.delete ( "/:email", deleteMessage );

export default routerMessages;