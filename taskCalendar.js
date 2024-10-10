function dayPlan() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Practice your dance.");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: pumasok school.");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: walang pasok.");
            break;
        case "Thursday":
            alert("Your task for Thursday is: pumasok ulit sa school.");
            break;
        case "Friday":
            alert("Your task for Friday is: pumasok nga kulit.");
            break;
        case "Saturday":
            alert("Your task for Saturday is: practice .");
            break;
        case "Sunday":
            alert("Your task for Sunday is: going to church.");
            break;
        default:
            alert("Please only enter a day of a week, Example: Monday..")          
    }
}
