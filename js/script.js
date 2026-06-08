const container = 
document.getElementById("jobsContainer");

function showjobs() {
  container.innerHTML = "";

  jobs.forEach(job =>{
    container.innerHTML += `
  <div class="job-card">
  <h3>${job.title}</h3>
  <p>${job.company}</p>
  <p>${job.location}</p>
  <p>${job.salary}</p>
  <p>${job.type}</p>
  <a href="${job.link}" class="apply-btn">
  Apply Now
  </a>
  </div>
  `;
  })

}
showjobs()