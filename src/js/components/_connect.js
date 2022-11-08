export const connectFunction = () => {
    if (document.querySelector('.connect__control')) {
        const control = document.querySelector('.connect__control');
        const controlList = document.querySelector('.connect__items');

        control.addEventListener('click', () => {
            control.classList.toggle('connect__control--close');
            controlList.classList.toggle('connect__items--active');

            if (control.classList.contains('connect__control--close')) {
                control.setAttribute('aria-expanded', 'true');
                control.setAttribute('aria-label', 'Закрыть панеь');
            } else {
                control.setAttribute('aria-expanded', 'false');
                control.setAttribute('aria-label', 'Открыть панель');
            }
        }) 
    };
};