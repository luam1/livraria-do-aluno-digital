function login() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && username && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); 
        alert('Login bem-sucedido!');

        window.location.href = 'index2.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    if (email && username) {
        alert(`Bem-vindo de volta, ${username}!`);
   
        window.location.href = 'index2.html';
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function saveSettings() {
    // Simulação de salvar as configurações
    var siteName = document.getElementById('site-name').value;
    var email = document.getElementById('email').value;
    var currency = document.getElementById('currency').value;
    var theme = document.getElementById('theme').value;
    var fontSize = document.getElementById('font-size').value;
    var emailNotifications = document.getElementById('email-notifications').checked ? 'Sim' : 'Não';
    var language = document.getElementById('language').value;
    var facebook = document.getElementById('facebook').value;
    var twitter = document.getElementById('twitter').value;

    // Exemplo de saída para demonstração
    alert(`Configurações salvas!\n\nNome do Site: ${siteName}\nEmail de Contato: ${email}\nMoeda Padrão: ${currency}\nTema: ${theme}\nTamanho da Fonte: ${fontSize}\nNotificações por Email: ${emailNotifications}\nIdioma: ${language}\nFacebook: ${facebook}\nTwitter: ${twitter}`);
}

function showSection(sectionId) {
    var sections = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12'];
    sections.forEach(function(id) {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function searchBooks() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var sections = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12'];
    sections.forEach(function(id) {
        var section = document.getElementById(id);
        var buttons = section.getElementsByTagName('button');
        var found = false;
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }
        if (found) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Comments functionality
    const commentInput = document.getElementById('comment-input');
    const commentButton = document.getElementById('comment-button');
    const commentsList = document.getElementById('comments-list');

    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentsList.appendChild(commentElement);
        });
    };

    const saveComment = (comment) => {
        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    };

    commentButton.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment.trim()) {
            saveComment(comment);
            loadComments();
            commentInput.value = '';
        }
    });

    loadComments();

    // Rating functionality
    const ratingButtons = document.querySelectorAll('.rating-button');
    const ratingDisplay = document.getElementById('rating-display');

    const loadRating = () => {
        const rating = localStorage.getItem('rating') || '0';
        ratingDisplay.textContent = `Avaliação atual: ${rating}`;
    };

    const saveRating = (rating) => {
        localStorage.setItem('rating', rating);
        loadRating();
    };

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const rating = button.getAttribute('data-rating');
            saveRating(rating);
        });
    });

    loadRating();
});

