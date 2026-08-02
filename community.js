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
fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const featured = document.getElementById("featured-projects");
    const cards = document.getElementById("project-cards");

    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${p.url}" target="_blank">Visit Project</a>
        <div class="tags">${p.tags.join(", ")}</div>
      `;

      if (p.featured) {
        featured.appendChild(div.cloneNode(true));
      }

      cards.appendChild(div);
    });
  });
