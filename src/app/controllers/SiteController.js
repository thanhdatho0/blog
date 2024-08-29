const Course = require('../models/Course');


class SiteController {
    async home(req, res) {

        try {
            res.json(await Course.find({}));
        } catch (error) {
            res.status(400).json({ eror: "Loi" });
        }
        //res.render('home');
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;
