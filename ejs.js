app.get('/', (req, res)=>{
 
    // The render method takes the name of the html
    // page to be rendered as input.
    // This page should be in views folder
    // in the root directory.
    var data = {name:'Akashdeep',
        hobbies:['playing football', 'playing chess', 'cycling']}
     
    res.render('home', {data:data});
    });
     
    var server = app.listen(4000, function() {
        console.log('listening to port 4000')
    });