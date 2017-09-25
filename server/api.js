



module.exports = function (app) {

    

    app.post('/api/login', function(req,res) {
        
        res.json({success : true, status : 200, user: {name: "Roy Birger" }});

    });

    // app.get('/api/login', function (req, res) {
        
    //     res.json({users: users, totalUsers: users.length });
    // });

    // app.post('/api/user_return', function(req ,res) {
        
    //     if (!isInitUsers) this.initUsers();

    //     var user = users.find((user) => {return user.id === parseInt(req.body.data.userId)});

    //     user.books = user.books.filter((id) => { return id !== req.body.data.bookId });

    //     res.json({success : "Updated Successfully", status : 200, user: this.getUser(req.body.data.userId)});
    // })

    // app.post('/api/user/add', function(req,res) {

    //     if (!isInitUsers) this.initUsers();

    //     var user = {
    //         id: users.length,
    //         name: req.body.user.name
    //     }

    //     users.push(user);

    //     res.json({success : "Updated Successfully", status : 200});

    // });

    // app.get('/api/get_user/:user_id', function (req, res) {

    //     if (!isInitUsers) this.initUsers();
        
    //         var user = this.getUser(req.params.user_id);

    //         if (user) {
    //             res.json({status: 200, success: true, user: user});
    //         } else {
    //             res.json({status: 200, success: false});
    //         }       

    // });


}
