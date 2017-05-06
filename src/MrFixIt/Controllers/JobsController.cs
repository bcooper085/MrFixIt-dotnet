using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MrFixIt.Models;
using Microsoft.EntityFrameworkCore;


namespace MrFixIt.Controllers
{
    public class JobsController : Controller
    {
        private MrFixItContext db = new MrFixItContext();

        // Displays list of jobs in db, includes jobs assigned to a specific worker, no known bug
        public IActionResult Index()
        {
            return View(db.Jobs.Include(i => i.Worker).ToList());
        }

        public IActionResult Create()
        {
            return View();
        }

        // Create a job and save to db, no known bug
        [HttpPost]
        public IActionResult Create(Job job)
        {
            db.Jobs.Add(job);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        // Claim action appear to be job details action


        // worker can claim job and assign to their user account
        [HttpPost]
        public IActionResult Claim(int JobId)
        {
            Job job = db.Jobs.FirstOrDefault(j => j.JobId == JobId);
            job.Worker = db.Workers.FirstOrDefault(i => i.UserName == User.Identity.Name);
            db.Entry(job).State = EntityState.Modified;
            db.SaveChanges();
            return Json(job);
        }

        [HttpPost]
        public IActionResult Working(int JobId)
        {
            Job job = db.Jobs.FirstOrDefault(j => j.JobId == JobId);
            job.Pending = true;
            db.Entry(job).State = EntityState.Modified;
            db.SaveChanges();
            return Json(job);
        }

        [HttpPost]
        public IActionResult Done(int JobId)
        {
            Job job = db.Jobs.FirstOrDefault(j => j.JobId == JobId);
            job.Completed = true;
            db.Entry(job).State = EntityState.Modified;
            db.SaveChanges();
            return Json(job);
        }
    }
}
