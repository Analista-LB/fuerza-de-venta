# Fuerza de Venta · Grupo LuanBeer

Página de accesos de Fuerza de Venta. Es un sitio estático: no necesita instalar programas ni ejecutar una compilación.

## Cambiar los enlaces

Todos los accesos y categorías se editan en **`links.js`**, desde la pestaña **Code** del repositorio. Abrí ese archivo, presioná el ícono de lápiz, hacé el cambio y elegí **Commit changes**.

Cada acceso tiene esta forma:

```js
{ label: 'PTC', url: 'https://ejemplo.com/recurso' },
```

- **Cambiar una URL:** reemplazá únicamente el texto entre comillas después de `url:`. Conservá el `https://` y las comillas.
- **Cambiar el nombre visible:** modificá el texto entre comillas después de `label:`.
- **Agregar un acceso:** copiá una línea completa dentro de la lista `links` de la categoría deseada, pegala en la posición donde querés que aparezca y cambiá `label` y `url`.
- **Eliminar un acceso:** borrá la línea completa de ese acceso.
- **Agregar una categoría:** copiá un bloque completo `{ title: '...', links: [ ... ] },` dentro de `sections`, pegalo en la posición deseada y cambiá el título y los accesos. Cada categoría debe tener al menos un acceso.

El **orden de las líneas** en `links.js` determina el orden de las categorías y los botones. Algunos nombres se repiten en categorías distintas y tienen URL diferentes; revisá que estés editando el acceso correcto. No borres las comas, llaves ni corchetes que rodean cada elemento.

## Publicación

GitHub Pages publica la rama `main` desde la carpeta `/ (root)`. Después de guardar un cambio con **Commit changes**, GitHub genera la nueva versión automáticamente. Puede tardar unos minutos; recargá la página pública para verla. El estado de la publicación aparece en **Settings → Pages** y en **Actions**.

La página utiliza rutas relativas (`./styles.css`, `./app.js`, `./assets/...`), por lo que funciona dentro de la ruta `/fuerza-de-venta/`. El archivo `.nojekyll` hace que Pages publique directamente los archivos estáticos.

El dominio personalizado todavía no está configurado. La publicación anterior permanece independiente.
