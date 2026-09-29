// Evita que la caché de Pages conserve una versión anterior de los accesos.
const { sections } = await import(`./links.js?v=${Date.now()}`);

const container = document.getElementById('sections');

for (const [index, group] of sections.entries()) {
  const section = document.createElement('section');
  section.className = 'link-section';
  section.setAttribute('aria-labelledby', `section-${index}`);

  const heading = document.createElement('h2');
  heading.id = `section-${index}`;
  heading.textContent = group.title;
  section.append(heading);

  const list = document.createElement('ul');
  list.className = 'link-list';
  for (const { label, url } of group.links) {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.className = 'access-link';
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = label;
    item.append(anchor);
    list.append(item);
  }
  section.append(list);
  container.append(section);
}
