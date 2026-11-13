# Instrucciones para Copilot

## Proyecto

Este repositorio contiene una landing page estática para un estudio creativo llamado Norte Studio. La web está construida con HTML, CSS y JavaScript vanilla, sin dependencias ni framework, y está orientada a una estética minimalista, editorial y moderna.

## Objetivo

Mantener la página visualmente coherente, accesible y fácil de personalizar. Cualquier cambio debe preservar la identidad visual del proyecto y evitar introducir complejidad innecesaria.

## Stack y tecnologías

- HTML5 para la estructura
- CSS3 para estilos, layout y animaciones
- JavaScript vanilla para interacciones
- Google Fonts para tipografías
- Navegador moderno para pruebas visuales

## Estructura recomendada

```text
Myweb/
├── index.html
├── styles.cssit add .

├── main.js
├── README.MD
├── .github/
│   └── copilot-instructions.md
└── .git/
```

## Estándares de desarrollo

### HTML
- Mantener una semántica clara con `header`, `main`, `section`, `footer` y elementos accesibles.
- Usar `aria-label`, `aria-expanded`, `aria-controls` cuando sea necesario.
- Preferir enlaces reales para navegación y contacto; evitar enlaces vacíos o comportamientos ambiguos.
- Mantener los textos en español salvo que se indique lo contrario.

### CSS
- Usar una estructura clara y mantenible con nombres descriptivos.
- Preferir variables CSS para colores, espaciados y tipografías cuando convenga.
- Mantener un enfoque visual consistente con la marca: minimalista, elegante y sobrio.
- Evitar estilos redundantes o sobreespecificados.
- Mantener la responsividad en mobile, tablet y escritorio.

### JavaScript
- Usar JavaScript vanilla sin librerías externas.
- Validar elementos DOM antes de manipularlos.
- Evitar errores si un selector no existe; si se requiere, lanzar mensajes claros.
- Mantener funciones pequeñas y con propósito definido.
- Preferir eventos modernos y accesibles.

## Reglas de edición

- No introducir dependencias externas salvo que el proyecto lo requiera explícitamente.
- No cambiar la identidad visual del sitio sin justificarse.
- Mantener los textos y la marca coherentes con el concepto de "Norte".
- Si se añaden nuevas secciones, deben integrarse con el estilo de la landing actual.
- Cuando se realicen cambios visuales, priorizar consistencia sobre innovación aislada.

## Contenido y branding

- El nombre del proyecto es “Norte” y “Norte Studio”.
- El tono del contenido debe ser premium, creativo y claro.
- El correo principal del sitio es: `hola@norte.studio`.
- El sitio debe seguir una lógica editorial y una navegación simple.

## Validación antes de cerrar cambios

Antes de dar por finalizado un cambio:

1. Revisar que el HTML siga siendo válido y bien estructurado.
2. Comprobar que el CSS no rompa el layout ni la responsividad.
3. Confirmar que JavaScript no falla en consola.
4. Probar la navegación y las interacciones básicas.
5. Verificar que el proyecto sigue funcionando al abrirlo en el navegador.

## Recomendaciones para futuras tareas

- Para cambios de contenido, editar primero `index.html`.
- Para cambios visuales, revisar `styles.css` antes de crear nuevas reglas.
- Para interacciones, modificar `main.js` con lógica clara y mínima.
- Cuando una tarea sea pequeña y visual, no introducir arquitectura compleja.
- Mantener el proyecto simple, legible y fácil de mantener.

## Finalidad de Copilot

Copilot debe proponer soluciones que:

- respeten el estilo actual del proyecto
- mantengan la sencillez y claridad del código
- prioricen la calidad visual y la experiencia de usuario
- eviten sobreingeniería

Si un cambio no aporta valor al diseño o a la funcionalidad, debe evitarse.
