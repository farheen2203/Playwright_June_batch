function studentScore(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
         case (score >= 80 && score < 90):
            grade = "B";
            break;
        default:
            grade = "C";
    }
    return grade;
}
console.log("Grade:", studentScore(70));