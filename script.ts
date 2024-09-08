 // TypeScript function to handle content editing
 function handleEditableContent(): void {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
        element.addEventListener('blur', function () {
            const newValue = (element as HTMLElement).innerText;
            console.log(`Updated content: ${newValue}`);
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}

// TypeScript function to toggle visibility of skills section
function toggleVisibility(buttonId: string, sectionId: string): void {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', () => {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});