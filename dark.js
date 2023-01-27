const chk = document.querySelector('#change-theme');

chk.addEventListener('change', function(){
    document.body.classList.toggle('dark');
})

