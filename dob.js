const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function () {
    // Prevent multiple intervals
    if (window.ageInterval) {
        clearInterval(window.ageInterval);
    }

    const updateAge = function () {
        const dobInput = document.querySelector('#dob').value;
        const dob = new Date(dobInput);
        const now = new Date();

        if (isNaN(dob.getTime())) {
            alert('Please enter a valid date of birth.');
            return;
        }

        const diff = now - dob;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375)); // Average month
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Accounting leap years

        const setText = (selector, text) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        };

        setText('#year', `${years} years`);
        setText('#month', `${months} months`);
        setText('#week', `${weeks} weeks`);
        setText('#day', `${days} days`);
        setText('#hour', `${hours} hours`);
        setText('#min', `${minutes} minutes`);
        setText('#sec', `${seconds} seconds`);
    };

    // Update immediately and then every second
    updateAge();
    window.ageInterval = setInterval(updateAge, 1000);
});
