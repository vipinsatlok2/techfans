const render = require("../controllers/render");
const router = require("express").Router();

router.get("/", render.homePage);
router.get("/about", render.aboutPage);
router.get("/contact", render.contactPage);
router.get("/tools/:slug", render.toolPage);

module.exports = router;
