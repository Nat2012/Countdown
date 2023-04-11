function countdown(){
    
    let targetedDate = document.getElementById("input").value;
    setInterval(function() {
        let currentDate = new Date();
        let time = Math.abs(new Date(targetedDate).getTime() - currentDate.getTime())
        let timeInSeconds = time / 1000;
        let seconds = timeInSeconds % 60;
        seconds = seconds.toString().split(".")[0];
        let timeInMinutes = timeInSeconds / 60;
        let minutes = timeInMinutes % 60;
        minutes = minutes.toString().split(".")[0];
        let timeInHours = timeInMinutes / 60;
        let hours = timeInHours % 60;
        hours = hours.toString().split(".")[0]
        let timeInDays = timeInHours / 24;
        let days = timeInDays % 24;
        days = days.toString().split(".")[0]
        document.getElementById("days").innerText = days + " days";
        document.getElementById("hours").innerText = hours + " hours";
        document.getElementById("minutes").innerText = minutes + " minutes";
        document.getElementById("seconds").innerText = seconds + " seconds";
    })
    
}

