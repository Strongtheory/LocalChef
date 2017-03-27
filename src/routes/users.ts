import { Router } from 'express';

const router: Router = Router();

router.get('/', function(req, res, next) {
    res.send('respnd with a resource');
});

export default router;
