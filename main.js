$(document).ready(function(){
    console.log($('header button'))

    //evento click com jQuerry
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn_cancelar').click(function(){
        $('form').slideUp()
    })

    //evento on com jQuerry
    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco_imagem').val()
        const novoItem = $('<li style="display: none"></li>')
        
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay_imagem_link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000);
        $('#endereco_imagem').val('')
    })

})