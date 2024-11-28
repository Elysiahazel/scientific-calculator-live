<script>
    document.addEventListener("DOMContentLoaded", function() {
                const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";
                let isResultDisplayed = false;

                function evaluateResult() {
                    try {
                        const convertedValue = currentValue
                            .replace("×", "*")
                            .replace("÷", "/")
                            .replace("%", "*0.01");

           
                            function evaluateResult() {
                                try {
                                    const convertedValue = currentValue
                                        .replace("×", "*")
                                        .replace("÷", "/")
                                        .replace("%", "*0.01");
                                        
                                    const result = eval(convertedValue);
                                    currentValue = result.toString();
                                    display.value = currentValue;
                                } catch (error) {
                                    console.error('Error evaluating expression:', error);
                                    display.value = "Error";
                                    currentValue = ""; // Reset for safety
                                }
                            }
                        
                            for (let i = 0; i < buttons.length; i++) {
                                const button = buttons[i];
                                button.addEventListener('click', function() {
                                    const value = button.innerText;
                        
                                    if (value === "AC") {
                                        currentValue = "";
                                        display.value = currentValue;
                                        isResultDisplayed = false; // Reset flag
                                    } else if (value === "=") {
                                        if (!isResultDisplayed) { // Only evaluate if result not displayed
                                            evaluateResult();
                                            isResultDisplayed = true; // Set flag to true after evaluation
                                        }
                                    } else {
                                        if (isResultDisplayed) { // If result was displayed, reset current value
                                            currentValue = "";
                                            isResultDisplayed = false; // Reset flag
                                        }
                                        currentValue += value; // Append clicked button value
                                        display.value = currentValue; // Update display
                                    }
                                });
                            }
                        });

</script>