TAREA PARA CODEX — Mejorar modal de procesos del negocio

Contexto:
En mi portal React + Vite + Tailwind tengo un modal para mostrar procesos del negocio. Actualmente el modal se abre bien, pero los pasos del flujo se ven muy pálidos y poco legibles.

Objetivo:
Mejorar visualmente el modal de proceso para que se vea más profesional, legible y dinámico.

Problema actual:
Los pasos como:
- Seleccionar producto
- Validar stock
- Confirmar pago
- Emitir comprobante

aparecen con texto muy claro sobre fondo blanco y casi no se leen.

Mejoras requeridas:

1. Aumentar contraste
   Cambiar los pasos a:
- texto emerald-900 o slate-900
- fondo emerald-50 o white
- borde emerald-200
- sombra suave

2. Diseño de flujo
   Cada paso debe verse como una tarjeta pequeña:
- rounded-xl
- border
- icono o número
- texto legible
- hover suave

Ejemplo visual:
[01 Seleccionar producto] → [02 Validar stock] → [03 Confirmar pago] → [04 Emitir comprobante]

3. Flechas
   Las flechas entre pasos deben ser más visibles:
- color emerald-500 o cyan-500
- tamaño mayor
- no usar color demasiado claro

4. Modal
   Mejorar modal:
- fondo blanco limpio
- borde emerald-200
- sombra grande
- max-width más amplio si es necesario
- padding cómodo
- botón cerrar con hover rojo/emerald

5. Metadata inferior
   Mejorar las tarjetas:
- Actor principal
- Requerimientos
- Reglas aplicadas

Cada una debe tener:
- título pequeño uppercase
- valor legible
- fondo emerald-50
- borde emerald-100
- texto principal slate-800

6. Responsive
   En móvil:
- pasos en columna
- flechas hacia abajo
  En desktop:
- pasos en fila

7. Animaciones
   Usar Framer Motion:
- modal fade/scale
- pasos con stagger
- hover scale leve

8. No romper lógica existente
   Solo mejorar estilos y legibilidad del modal.

Resultado esperado:
El modal debe verse como una ficha profesional de documentación de procesos, no como un popup básico.