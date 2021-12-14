/* 
Const, se utiliza para declarar constantes, tiene alcance de contexto vive en
un bloque de codigo
Solo para valores que nunca cambien, si quiero que cambien le pongo un let, si no
le pongo un const
*/

const gravedad = 9.8;
gravedad = 30;// da error el navegador porque no pueDES revalorizar una constante

console.log(gravedad);