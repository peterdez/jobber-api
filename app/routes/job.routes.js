module.exports = app => {
    const jobs = require("../controllers/job.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Job
    router.post("/", jobs.create);
  
    // Retrieve all Jobs
    router.get("/", jobs.findAll);
  
    // Retrieve all published Jobs
    router.get("/published", jobs.findAllPublished);
  
    // Retrieve a single Job with id
    router.get("/:id", jobs.findOne);
  
    // Update a Job with id
    router.put("/:id", jobs.update);
  
    // Delete a Job with id
    router.delete("/:id", jobs.delete);
  
    // Delete all Jobs
    router.delete("/", jobs.deleteAll);
  
    app.use('/api/jobs', router);
  };