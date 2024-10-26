export const insertCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.currentYear');

    yearElements.forEach(function(element) {
        element.textContent = currentYear;
    });
}