// create engineer card
const generateEngineer = function(engineer) {
    return `
    <div class="row mt-4">
    <div class="card col-sm-6 mt-4 mx-auto p-2" style="width: 400px">
      <div class="card-body progress-bar-striped bg-warning">

        <h5 class="card-title">${engineer.name}</h5>
        <i class="fa-solid fa-user-gear"></i>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <div class="card" style="width: 18rem">
          <li class="list-group-item">ID:${engineer.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>

          <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
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

        <h5 class="card-title">${manager.name}</h5>
        <i class="fa-solid fa-people-roof"></i>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <div class="card" style="width: 18rem">
          <li class="list-group-item">ID:${manager.id}</li>
          <li class="list-group-item">Email:${manager.email}</li>
          <li class="officeNumber list-group-item">Office Number:${manager.officeNumber}</li>

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

      <h5 class="card-title">${intern.name}</h5>
      <i class="fa-solid fa-graduation-cap"></i>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <div class="card" style="width: 18rem">
        <li class="id list-group-item">ID:${intern.id}</li>
        <li class="email list-group-item">Email:${intern.email}</li>

        <li class="github list-group-item">School:${intern.school}</li>
      </div>
    </div>
  </div>
</div>
`;
}

// push array
generateHTML = (data) => {
    pageArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // manager function
        if(role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // engineer function
        if(role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // intern function
        if(role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

        const employeeCards = pageArray.join('')

        const generateTeam = generateTeamPage(employeeCards);
        return generateTeam;
    }
}

    // html page
    const generateTeamPage = function (employeeCards) {
        return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/0b6e5b7972.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./style.css">
    <title>team profile</title>
  </head>
  <body>
    <header>
      <nav class="navbar p-3 mb-2 bg-dark text-white" id="navbar">
        <span class="navbar-brand mb-0 w-100 text-center" id="navbar-text"
          >My Team</span
        >
      </nav>
    </header>
    <main>
    ${employeeCards}
    </main>
  </body>
  <!-- CSS only -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
</html>
`;
}

module.exports = generateHTML;