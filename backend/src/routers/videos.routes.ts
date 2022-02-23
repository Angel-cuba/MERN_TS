import { Router } from 'express';
const router = Router();

import * as videoCtrls from '../controllers/videos.controllers';

router.get('/videos', videoCtrls.getAllVideos);
router.get('/video/:id', videoCtrls.getVideo);
router.post('/video', videoCtrls.createVideo);
router.put('/video/:id', videoCtrls.updateVideo);
router.delete('/video/:id', videoCtrls.deleteVideo);

export default router;
