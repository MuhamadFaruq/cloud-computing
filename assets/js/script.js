const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-sm', 'bg-white');
        navbar.classList.remove('bg-transparent', 'py-3');
    } else {
        navbar.classList.remove('shadow-sm', 'bg-white');
        navbar.classList.add('bg-transparent', 'py-3');
    }
});

function handleDownload(platform) {
    alert(`Mengarahkan ke ${platform}... (Link belum dipasang)`);
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})