var express = require("express");
const zoomController = require("../controllers/zoomController");
const router = express.Router();

router.get("/healthCheck", zoomController.healthCheck);
router.post("/zoomuserinfo", zoomController.zoomuserinfo);
router.post("/createZoomMeeting", zoomController.createZoomMeeting);
router.get("/getMeetingParticipants", zoomController.getMeetingParticipants);

module.exports = router;
