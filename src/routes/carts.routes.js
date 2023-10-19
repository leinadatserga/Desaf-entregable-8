import { Router } from 'express';
import { getCarts, getCart, postCart, postProdCart, putProdCart, putProdsCart, deleteProdCart, deleteCart } from '../controllers/carts.controller.js';

const routerCart = Router ();
routerCart.get ( "/", getCarts );
routerCart.get ( "/:cid", getCart );
routerCart.post ( "/", postCart );
routerCart.post ( "/:cid/products/:pid", postProdCart );
routerCart.put ( "/:cid/products/:pid", putProdCart );
routerCart.put ( "/:cid", putProdsCart );
routerCart.delete ( "/:cid/products/:pid", deleteProdCart );
routerCart.delete ( "/:cid", deleteCart );

export default routerCart;