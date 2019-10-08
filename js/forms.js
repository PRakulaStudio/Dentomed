document.querySelectorAll('form').forEach(form => form.addEventListener('submit', () => form.reset()));
document.querySelectorAll('div.popup_make-appointment form').forEach(
    form => form.addEventListener('submit',
        () => $('.popup_make-appointment__close').click()));