document.addEventListener('DOMContentLoaded', function() {

    const nav_container = document.querySelector('.nav-container');
    const nav_container_height = nav_container.clientHeight;
    
    window.addEventListener('scroll', function() {
        const current_position = window.scrollY;

        if (current_position > nav_container_height) {
            show_scroll_button();
        } else {
            hide_scroll_button();
        }
    });
});

function show_scroll_button() {
    const scroll_button = document.querySelector('.scroll-btn');
    const scroll_button_image = document.querySelector('.scroll-btn-image');
    scroll_button.style.display = 'block';
    scroll_button_image.style.display = 'block';
}

function hide_scroll_button() {
    const scroll_button = document.querySelector('.scroll-btn');
    const scroll_button_image = document.querySelector('.scroll-btn-image');
    scroll_button.style.display = 'none';
    scroll_button_image.style.display = 'none';
}

function scroll_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}