// create engineer card
const generateEngineer = function(engineer) {
    return `
    <div class="row mt-4">
    <div class="card col-sm-6 mt-4 mx-auto p-2" style="width: 400px">
      <div class="card-body progress-bar-striped bg-warning">
        <h5 class="card-title">Nariko</h5>
        <i class="fa-solid fa-user-gear"></i>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <div class="card" style="width: 18rem">
          <li class="list-group-item">ID: 0012</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">GitHub:</li>
        </div>
      </div>
    </div>
    `;
}

// create manager card
const generateManager = function (manager) {
    return `
    <div class="row mt-4">
    <div class="card col-sm-6 mt-4 mx-auto p-2" style="width: 25rem">
      <div class="card-body progress-bar-striped bg-warning">
        <h5 class="card-title">Nariko</h5>
        <i class="fa-solid fa-people-roof"></i>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <div class="card" style="width: 18rem">
          <li class="list-group-item">ID: 0015</li>
          <li class="list-group-item">Email:</li>
          <li class="officeNumber list-group-item">Office Number:</li>
        </div>
      </div>
    </div>
    `;
}

// create intern card
const generateIntern = function(intern) {
    return `
    <div class="card col-sm-6 mt-4 mx-auto p-2" style="width: 25rem">
    <div class="card-body progress-bar-striped bg-warning">
      <h5 class="card-title">Kyo</h5>
      <i class="fa-solid fa-graduation-cap"></i>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <div class="card" style="width: 18rem">
        <li class="id list-group-item">ID: 0016</li>
        <li class="email list-group-item">Email:</li>
        <li class="github list-group-item">School: HSPC</li>
      </div>
    </div>
  </div>
</div>
`;
}

