function gradingStudents(grades) {
    // Write your code here
    let answer =[];
    for(let i=0;i<grades.length;i++){
        let nextMulOf5 = grades[i] + (5 - (grades[i] % 5));
        let diff = nextMulOf5 -  grades[i]; 
        if(diff<3 && grades[i] >= 38){
            answer[i] = nextMulOf5;
        }
        else{
            answer[i] = grades[i];
        } 
    }
    return answer;
}
gradingStudents([73, 67, 38, 33]);