# hazbuddy

## Explanation
HTML
The form is divided into multiple steps, each represented by a `div` with the class `step`. Each step contains the necessary input fields and navigation buttons (Next and Previous). The form starts with Step 1 and ends with Step 22.
    
## CSS
The CSS styles the form and hides all steps except the active one. The `.active` class is used to display the current step.
   
## JavaScript
The JavaScript handles the navigation between steps. It shows the current step and hides the others. It also handles the form submission.

I need to expand the HTML to include all 22 steps by following the pattern shown in the first three steps. Each step should have the necessary input fields and navigation buttons.

---
Explanation - Error checking

`validateStep` **Function:** This function checks the validity of all input fields in the current step. It uses the `checkValidity `method of the input elements to determine if they are valid according to their constraints (e.g., `required`, `type="email"`, etc.). If an input is invalid, it adds the `invalid` 
class to highlight the input field.

`nextStep` **Function:** Before moving to the next step, this function calls `validateStep` to ensure that all inputs in the current step are valid. If they are not, it prevents the user from proceeding.

`prevStep` **Function:** This function allows the user to go back to the previous step without validation.

**Form Submission:** The form submission event listener also calls `validateStep`
to ensure that the inputs in the current step are valid before submitting the form. If they are not, it prevents the form from being submitted.

## CSS
The `.invalid` class is used to style invalid input fields, making it clear to the user which fields need attention.

By adding these error checking mechanisms, you ensure that the user provides valid data at each step before proceeding or submitting the form.

## Explanation - Progress Bar

HTML

:
    A div with the class progress-bar is added to contain the progress bar.
    A nested div with the class progress-bar-fill is used to visually represent the progress.
CSS

:
    Styles for the progress bar and its fill are added. The progress-bar class styles the container, and the progress-bar-fill class styles the fill element.
    The progress-bar-fill width is initially set to 0 and will be updated dynamically.
JavaScript

:
    The updateProgressBar function calculates the progress as a percentage based on the current step and total number of steps. It then updates the width of the progress-bar-fill element.
    The showStep function is updated to call updateProgressBar whenever the step changes.
    The rest of the JavaScript handles form validation, navigation, and real-time input validation as before.

By adding a progress bar, you provide a visual indicator of the user's progress through the form, enhancing the user experience.
