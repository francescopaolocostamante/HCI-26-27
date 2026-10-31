const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');


const deliverables = [
  {
    title: 'Consegna 1 HCI',
    type: 'PDF',
    description: 'Deliverable principale del progetto, contenente il materiale della prima consegna.',
    href: 'C1/Consegna 1 HCI.pdf',
  },
  {
    title: 'Consegna 2 HCI',
    type: 'PDF',
    description: 'Deliverable principale del progetto, contenente il materiale della seconda consegna.',
    href: 'C2/Consegna 2 HCI.pdf',
  }
];

const deliverablesList = document.getElementById('deliverables-list');

if (deliverablesList) {
  deliverablesList.innerHTML = deliverables
    .map(
      (item) => `
        <article class="deliverable-card">
          <span class="deliverable-tag">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="deliverable-link" href="${item.href}" target="_blank" rel="noreferrer">
            Apri PDF
          </a>
        </article>
      `
    )
    .join('');
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
