const generateManager = function (manager) {
    return `
    <div class="col-sm-4">
        <div class="teamPanel">
            <div class="panelHeader">
                <h3>${manager.name}</h3>
                <div class="position">
                <i class="fas fa-user-tie icons"></i>
                <h4>Manager</h4>
            </div>
            </div>
            <div class="panelInfo">
                <p class="id">ID: ${manager.id}</p>
                <p class="email"><a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-sm-4">
        <div class="teamPanel">
            <div class="panelHeader">
                <h3>${engineer.name}</h3>
                <div class="position">
                <i class="fas fa-laptop-code icons"></i>
                <h4>Engineer</h4>
                </div>
            </div>

            <div class="panelInfo">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="col-sm-4">
        <div class="teamPanel">
            <div class="panelHeader">
                <h3>${intern.name}</h3>
                <div class="position">
                <i class="fas fa-user-graduate icons"></i>
                <h4>Intern</h4>
                </div>
            </div>

            <div class="panelInfo">
                <p class="id">ID: ${intern.id}</p>
                <p class="email"><a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateMarkdown = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/b36df62ff0.js" crossorigin="anonymous"></script>
  </head>
  <body>
  <header>
  <h1>Team Profile</h1>
</header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </main>
  </body>
  </html>

`;
}

module.exports = generateMarkdown;
