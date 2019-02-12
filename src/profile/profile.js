const formProfile = document.getElementById('form-profile');

formProfile.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formProfile);

    const userProfile = {
        name: formData.get('name'),
        // avatar: formData.get('avatar')
    }

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);    

    window.location = '../../html/questions.html';
});