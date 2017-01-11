'use strict';

module.exports = {
    index(req, res) {

        let complimentsTab = [
            "Your instructors love you",
            "High five = ^5",
            "Is it Ruby Tuesday yet?",
            "It's almost beer o'clock",
            "The Force is strong with you"
        ];

        let colorsTab = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

        let compliments = complimentsTab[Math.floor(Math.random() * complimentsTab.length)]
        let colors = colorsTab[Math.floor(Math.random() * colorsTab.length)];
        let name = req.params.name;

        // global.body.style.backgroundColor = colors;

        res.render("index", {
            compliments,
            colors,
            name
        });
    }
};
