const comentario = document.getElementById('comentario');
comentario.addEventListener('input',Contador);

const cantidad = document.getElementById('cantidad');


function Contador(){
   let texto = document.getElementById('comentario');
    let caracteres = texto.getAttribute('maxlength');
    const max = caracteres.length;

   
    cantidad.InnerHTML = `${max}/140`;
}

