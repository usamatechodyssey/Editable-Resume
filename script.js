// TypeScript function to handle content editing
function handleEditableContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function () {
            var newValue = element.innerText;
            console.log("Updated content: ".concat(newValue));
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}
// TypeScript function to toggle visibility of skills section
function toggleVisibility(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', function () {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            }
            else {
                section.style.display = 'none';
            }
        });
    }
}
// Initialize functions on page load
document.addEventListener('DOMContentLoaded', function () {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});
