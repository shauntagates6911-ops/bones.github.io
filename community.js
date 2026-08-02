fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects");

    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project";

      div.innerHTML = `
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <a href="${p.url}" target="_blank">Visit Project</a>
      `;

      container.appendChild(div);
    });
  });
