$(document).ready(function(){
    $('.new-task-button').on('click', function(){
        var tarefaText = $('.new-task-input').val  ();
        
        if (tarefaText.length > 0){
            addTarefa(tarefaText)
            $(".new-task-input").removeClass("error")
        } else if (tarefaText.length == 0){
            $(".new-task-input").toggleClass("error")
            alert('erro')
        }

        $('.new-task-input').val('');
    })


    //Função
    function addTarefa(text){   
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
    }

    //Marcar Tafera

    $(document).on('click', 'li',function(){
        $(this).toggleClass('completed');
    })

    //Remover Tarefa
    $(document).on('click', 'span',function(e){
        e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        })
    })


})
