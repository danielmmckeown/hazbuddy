document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const steps = Array.from(form.querySelectorAll('.step'));
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }

    function validateInput(input) {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    }

    function validateStep(stepIndex) {
        const inputs = steps[stepIndex].querySelectorAll('input');
        let valid = true;
        inputs.forEach(input => {
            validateInput(input);
            if (!input.checkValidity()) {
                valid = false;
            }
        });

        // Custom validation logic
        if (stepIndex === 1) { // Example for Step 2
            const consigneeDODAAC = document.getElementById('consigneeDODAAC').value;
            if (!/^[A-Z0-9]{6}$/.test(consigneeDODAAC)) {
                document.getElementById('consigneeDODAAC').classList.add('invalid');
                valid = false;
            } else {
                document.getElementById('consigneeDODAAC').classList.remove('invalid');
            }
        }

        return valid;
    }

    function nextStep() {
        if (validateStep(currentStep)) {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
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
        if (!validateStep(currentStep)) {
            event.preventDefault();
        } else {
            alert('Form submitted!');
            // Add form submission logic here
        }
    });

    // Add real-time validation
    form.addEventListener('input', function (event) {
        if (event.target.tagName.toLowerCase() === 'input') {
            validateInput(event.target);
        }
    });

    // Initialize the form by showing the first step
    showStep(currentStep);
});