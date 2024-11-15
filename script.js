// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('multiStepForm');
    
    // Get all the step elements within the form and convert them to an array
    const steps = Array.from(form.querySelectorAll('.step'));
    
    // Initialize the current step index to 0 (the first step)
    let currentStep = 0;

    // Function to show the specified step and hide the others
    function showStep(stepIndex) {
        // Iterate through all steps and toggle the 'active' class based on the current step index
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }

    // Function to validate a single input field
    function validateInput(input) {
        // Check if the input field is valid
        if (!input.checkValidity()) {
            // If not, add the 'invalid' class to highlight the error
            input.classList.add('invalid');
        } else {
            // If valid, remove the 'invalid' class
            input.classList.remove('invalid');
        }
    }

    // Function to validate the current step
    function validateStep(stepIndex) {
        // Get all input fields within the current step
        const inputs = steps[stepIndex].querySelectorAll('input');
        
        // Initialize a flag to indicate if the step is valid
        let valid = true;
        
        // Iterate through all input fields and validate them
        inputs.forEach(input => {
            validateInput(input);
            // If any input field is invalid, set the flag to false
            if (!input.checkValidity()) {
                valid = false;
            }
        });

        // Custom validation logic for specific steps
        if (stepIndex === 1) { // Example for Step 2
            // Get the value of the consigneeDODAAC input field
            const consigneeDODAAC = document.getElementById('consigneeDODAAC').value;
            // Check if the value matches the required format (6 uppercase letters or numbers)
            if (!/^[A-Z0-9]{6}$/.test(consigneeDODAAC)) {
                // If not, add the 'invalid' class to highlight the error
                document.getElementById('consigneeDODAAC').classList.add('invalid');
                // Set the flag to false
                valid = false;
            } else {
                // If valid, remove the 'invalid' class
                document.getElementById('consigneeDODAAC').classList.remove('invalid');
            }
        }

        // Return the validity flag
        return valid;
    }

    // Function to proceed to the next step
    function nextStep() {
        // Validate the current step
        if (validateStep(currentStep)) {
            // If valid and not on the last step, proceed to the next step
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }
    }

    // Function to go back to the previous step
    function prevStep() {
        // If not on the first step, go back to the previous step
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Event listener for click events on the form
    form.addEventListener('click', function (event) {
        // Check if the clicked element is a 'next' button
        if (event.target.classList.contains('nextBtn')) {
            // Proceed to the next step
            nextStep();
        } 
        // Check if the clicked element is a 'previous' button
        else if (event.target.classList.contains('prevBtn')) {
            // Go back to the previous step
            prevStep();
        }
    });

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        // Validate the current step before submitting the form
        if (!validateStep(currentStep)) {
            // If invalid, prevent the form submission
            event.preventDefault();
        } else {
            // If valid, alert a success message
            alert('Form submitted!');
            // Add form submission logic here
        }
    });

    // Add real-time validation for input fields
    form.addEventListener('input', function (event) {
        // Check if the event target is an input field
        if (event.target.tagName.toLowerCase() === 'input') {
            // Validate the input field
            validateInput(event.target);
        }
    });

    // Initialize the form by showing the first step
    showStep(currentStep);
});
