/* 
Author: Mahmoud Assaf
Full Stack Developer | UI/UX Graphics Designer
Contact: 01141768847
Version: v1.0
*/
// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;
    try {
        // Handle percentage calculation
        expression = expression.replace(/(\d+)%/g, (match, p1) => p1 / 100);
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}




function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeLabel.textContent = 'Light Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeLabel.textContent = 'Dark Mode';
    }
}

// Function to update the switch label
function updateSwitchLabel() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('switch-label').textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
}

// Call the updateSwitchLabel function on load to set the initial label text
document.addEventListener('DOMContentLoaded', () => {
    updateSwitchLabel();
});

// Function to contact me
function contactMe() {
    // You can add your contact logic here, like opening a call or sending a message
    alert('Contact me at: 01141768847');
}  
