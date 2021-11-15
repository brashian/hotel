const comentario = document.getElementById('comentario');
comentario.addEventListener('input',Contador);

const cantidad = document.getElementById('cantidad');


function Contador(){
    let texto = comentario.getAttribute('maxlength');
    
    let max = texto.length;

    console.log(texto.length)
    document.getElementById('cantidad').InnerHTML = `${max}/140`;
}

