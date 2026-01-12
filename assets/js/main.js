
// Touch effect
document.body.addEventListener('touchstart', function(e) {
    const touch = document.createElement('div');
    touch.className = 'touch-effect';
    touch.style.left = e.touches[0].pageX + 'px';
    touch.style.top = e.touches[0].pageY + 'px';
    document.body.appendChild(touch);
    setTimeout(() => touch.remove(), 700);
});
