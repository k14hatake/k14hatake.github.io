$(document).ready(function(){
    sessionStorage.setItem('ili','false');
    
    isLoggedIn = false;
    $('#pog').on('click',function(event){
        var uid = $('#uid').val();
        var pwd = $('#pwd').val();
        if(uid==="lifeline" && pwd==="hotandsexy1"){
            $('#cont').prop('disabled', false);
            console.log('Done');
        }
        else{
            alert('Are you trying to sneak???');
            console.log('Nah');
        }
    });
    
    $('#cont').on('click',function(event){   
        sessionStorage.setItem('ili','true');
        $(location).attr('href', 'home.html');
    });
});