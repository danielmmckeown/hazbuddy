document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const steps = Array.from(form.querySelectorAll('.step'));
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    form.addEventListener('click', function (event) {
        if (event.target.classList.contains('nextBtn')) {
            nextStep();
        } else if (event.target.classList.contains('prevBtn')) {
            prevStep();
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
        // Add form submission logic here
    });

    // Initialize the form by showing the first step
    showStep(currentStep);
});