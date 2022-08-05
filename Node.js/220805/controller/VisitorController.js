const Visitor = require("../model/Visitor");

exports.get_visitors = async(req,res) => {
    Visitor.get_visitors();
    res.render("index");
}
