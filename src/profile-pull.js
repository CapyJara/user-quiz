function profilePull () {
    const name = document.getElementById('name');
    const profile = window.localStorage.getItem('userProfile');
    const nameJson = JSON.parse(profile);
    name.textContent = nameJson.name;
}

export default profilePull;