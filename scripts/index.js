let charctersCategory = document.getElementById('character_category');
let charctersSubCategory = document.getElementById('characters_sub_category');
let charCount = 'off';
let itemCount = 'off';
let historyCount = 'off';
let gameCount = 'off';

charctersCategory.addEventListener('click', function() {
    
    
    if (charCount == 'off') {
        charctersSubCategory.style.display='flex';
        charctersSubCategory.style.opacity= '1';
        charCount = 'on' ;
    } else {
        charctersSubCategory.style.display='none';
        charCount = 'off' ;
    }
    
})

let itemCategory = document.getElementById('items_category');
let itemsSubCategory = document.getElementById('items_sub_category');

itemCategory.addEventListener('click', function() {
    
    
    if (itemCount == 'off') {
        itemsSubCategory.style.display='flex';
        itemCount = 'on' ;
    } else {
        itemsSubCategory.style.display='none';
        itemCount = 'off' ;
    }
    
})

let historyCategory = document.getElementById('history_category');
let historySubCategory = document.getElementById('history_sub_category');

historyCategory.addEventListener('click', function() {
    
    
    if (historyCount == 'off') {
        historySubCategory.style.display='flex';
        historyCount = 'on' ;
    } else {
        historySubCategory.style.display='none';
        historyCount = 'off' ;
    }
    
})

let gameCategory = document.getElementById('game_category');
let gameSubCategory = document.getElementById('game_sub_category');

gameCategory.addEventListener('click', function() {
    
    
    if (gameCount == 'off') {
        gameSubCategory.style.display='flex';
        gameCount = 'on' ;
    } else {
        gameSubCategory.style.display='none';
        gameCount = 'off' ;
    }
    
})