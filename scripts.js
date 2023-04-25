// scripts.js
function processForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get the time values from the input fields
    const aid = document.getElementById('aid').value;
    const running = document.getElementById('running').value;
    const walking = document.getElementById('walking').value;

    // Convert the time strings to seconds
    const seconds1 = timeStringToSeconds(aid) * 15;
    const seconds2 = timeStringToSeconds(running) * 70;
    const seconds3 = timeStringToSeconds(walking) * 30;

    // Add the seconds
    const totalSeconds = seconds1 + seconds2 + seconds3;

    // Convert the total seconds back to the time string format
    const totalTime = secondsToTimeString(totalSeconds);

    // Display the result
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `Expected Race Time: ${totalTime}`;
}

function timeStringToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60) + seconds;
}

function secondsToTimeString(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
