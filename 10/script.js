let students = [
    {
        name: 'Vinicius',
        n1: 10,
        n2: 8,

    },

    {
        name: 'Victor',
        n1: 7,
        n2: 6,
    },

    {
        name: 'Maria',
        n1: 5,
        n2: 3,

    },

    {
        name: 'Steffanie',
        n1: 8,
        n2: 7,
    }

]


function studentsGradeAverage(students) {
    for (let student of students) {
        let result = (student.n1 + student.n2) / 2;
    
        if (result > 7) {
            alert('Parabens, ' + student.name + ' Você foi aprovado(a) no concurso! Sua média foi de:' + result)
        }
        else {
            alert(student.name + " Não foi dessa vez que você conseguiu! Sua média foi de: " + result)
        }
    }
}

studentsGradeAverage(students)
