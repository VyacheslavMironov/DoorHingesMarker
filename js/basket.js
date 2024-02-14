function modal()
{
    var el = document.getElementById('basket');
    if (el.style.display == 'block')
    {
        el.style.display = 'none';
    }
    else
    {
        el.style.display = 'block';
    }
}

function add_basket(id)
{
    var title = document.getElementById(`title-${id}`).innerText;
    var img = document.getElementById(`img-${id}`).src;
    var price = document.getElementById(`price-${id}`).innerText;
    // https://learn.javascript.ru/cookie
}