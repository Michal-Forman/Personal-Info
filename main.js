// Check if the alert has been shown before
if (!sessionStorage.getItem('alertShown')) {
    // Show the alert
    alert("Warning! This site is still in the early development stage, so many functions may not work.");

    // Set the flag in localStorage to indicate that the alert has been shown
    sessionStorage.setItem('alertShown', 'true');
}
