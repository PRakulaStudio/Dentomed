document.querySelectorAll('form').forEach(form => form.addEventListener('submit', () => {
    form.reset();
    ym(56780170, 'reachGoal', 'formSubmit');
}));

document.querySelectorAll('div.popup_make-appointment form').forEach(
    form => form.addEventListener('submit',
        () => $('.popup_make-appointment__close').click()));

document.querySelectorAll("a[href^='tel:']").forEach(a => a.addEventListener('click', () =>
    ym(56780170, 'reachGoal', 'callOut')));