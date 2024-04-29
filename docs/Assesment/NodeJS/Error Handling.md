# Error Handling 

1. Sync code - with try/catch blocks
2. Async code - then().catch()
3. Express has an error middleware `app.use((error,res,req,next)=>{
res.redirect(500)}`. Async code though, doesn't trigger this middleware. Inside async we need to use `next(new Error(err))`
