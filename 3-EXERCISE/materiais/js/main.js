var modal = document.getElementById('myModal'),
        btn = document.getElementById('myBtn'),
        span = document.getElementsByClassName('close')[0],
        rating = document.getElementById('rating'),
        form = document.getElementsByTagName('form');
var rates = Array.from(rating.getElementsByClassName('rate'));

btn.onclick = function () {
    modal.style.display = "flex";
}

rates.forEach(function (rate) {
    var value = parseInt(rate.dataset.value);
    rate.onclick = function () {
        rates.forEach(function (r, index) {
            if (index + 1 <= value) {
                r.classList.add('checked');
            } else {
                r.classList.remove('checked');

            }
        })
    }
});

span.onclick = function () {
    modal.style.display = 'none';
}

//pensei em comentar essa função pois há o botão para fechar o formulário.
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


document.getElementById('sendFeedback').onclick = function (event) {
    var body = {
        name: document.getElementById('name').value,
        rating: document.getElementById('rating').getElementsByClassName('checked').length,
        message: document.getElementById('message').value
    }

    fetch('https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback', {
        method: 'POST',
        body: JSON.stringify(body) 
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    })

    modal.style.display = 'none';
}