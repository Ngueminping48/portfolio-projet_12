const initProjectDisplay = async () => {
  const jsonUrl = "/assets/data/projets.json";
  const projetList = document.querySelector('.les-projets');
  const filtres = document.querySelector('.filtres');
  const darkBtn = document.querySelector('.dark-mode-btn');

  try {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      const projets = data.projets;

      // Affiche les projets en fonction de la catégorie sélectionnée
      const afficherProjets = (categorie) => {
          projetList.innerHTML = ''; // Vider la liste actuelle
          const projetsFiltres = categorie === 'Tous' ? projets : projets.filter(projet => projet.categorie === categorie);

          projetsFiltres.forEach(projet => {
              const item = document.createElement('li');
              item.innerHTML = `
                  
                      <figure>
                          <img src="${projet.image}" alt="${projet.altText}" />
                          <figcaption>
                              <p>${projet.techno}</p>
                                  <h3>${projet.titre}</h3>
                                  <p>${projet.description}</p>
                                  <div class="boutons-liens">
                                      <a target="_blank" href="${projet.lienRepo}" class="btnCode" title="Repo Github">Voir le code</a>
                                     
                                  </div>
                              
                          </figcaption>
                      </figure>
              `;
              projetList.appendChild(item);
          });
      };

      // Affiche tous les projets par défaut
      afficherProjets('Tous');

      // Gestion des filtres de catégorie
      filtres.addEventListener('click', (event) => {
          const target = event.target;
          if (target.tagName === 'A') {
              document.querySelectorAll('.filtres .active').forEach(active => active.classList.remove('active'));
              target.parentElement.classList.add('active');
              const categorie = target.parentElement.getAttribute('data-name');
              afficherProjets(categorie);
          }
      });

  } catch (error) {
      console.error('Erreur lors du chargement des projets :', error);
  }
};

// Appel de la fonction principale
initProjectDisplay();
