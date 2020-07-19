const soupe=document.getElementById('soupe'),
pizza = document.getElementById('pizza'),
pasta = document.getElementById('pasta'),
desert = document.getElementById('desert'),
wine = document.getElementById('wine'),
beer = document.getElementById('beer'),
drinks = document.getElementById('drinks'),
name = document.querySelectorAll('.name__position'),
cost = document.querySelectorAll('.cost'),
about = document.querySelectorAll('.about__position');

soupe.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'Soupe chesse chicken';
        cost[i].textContent = '14,23';
        about[i].textContent = 'Cheese soupe witch chicken';
    } 
});

pizza.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'pizza quatro staconi';
        cost[i].textContent = '55.68';
        about[i].textContent = 'Integer ullamcorper neque eu purus euismod';
    } 
});

pasta.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'Pasta whits sea products';
        cost[i].textContent = '34,80';
        about[i].textContent = 'Pasta whith krevetka and kalmar';
    }
});

desert.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'Pancakes whits bananes';
        cost[i].textContent = '10,25';
        about[i].textContent = 'Bananes/chocolate/klubnika/vishnya';
    }
});

wine.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'White wine sugar';
        cost[i].textContent = '1000';
        about[i].textContent = 'Aston martin wine';
    }
});

beer.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'Beer white filter';
        cost[i].textContent = '20.50';
        about[i].textContent = 'Beer white/dark filter no filter';
    }
});

drinks.addEventListener('click', function(){
    for (let i=0; i<=21; i++){
        name[i].textContent = 'Coca cola';
        cost[i].textContent = '15';
        about[i].textContent = 'Cola/Fanta/MntDew/Sprite';
    }
});

