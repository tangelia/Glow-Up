// Review model
const Review = require('../models/Review.js')



module.export = {
    //Index reviews
     async reviewIndex (req, res){
        let reviews =  await Review.find();
        res.render('reviews/index', reviews);
     },

    //New review
   async  reviewNew (req, res){
        res.render('reviews/new');
    },
    //Show review
    async reviewShow (req,res){
        let reviews =  await Review.findById(req.params.reviewId);
            res.render('reviews/show', reviews);
        },
    //Create review
     async reviewCreate(req,res) {
        let reviews =  await Review.create(req.body);
         res.redirect("/reviews");
    },
    //Updates review and returns to index.hbs
    async reviewUpdate (req,res){
        let reviews =  await Review.findByIdAndUpdate(req.params.reviewId, req.body);
            res.redirect("/reviews");
    },
    //deletes and returns to index.hbs
    async reviewDelete (req,res){
        let reviews =  await Review.findByIdAndRemove(req.params.reviewId);
            res.redirect("/reviews");
        }
    }