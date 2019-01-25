// CODE here for your Lambda Classes


class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.gender = atts.gender;
        this.location = atts.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}


class Instructor extends Person {
    constructor(Iatts) {
        super(Iatts);
        this.specialty = Iatts.specialty;
        this.favLanguage = Iatts.favLanguage;
        this.catchPhrase = Iatts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning aboutt ${subject}`)
    }
    grade(Student, subject) {
        console.log(`${Student.name} recieves a perfect score on ${subject}`)
    }
    mark(student) {
        if (student.grade >= 70) {
            console.log(`Yay! You Graduated with a ${student.grade}%`) 
        } else {
            while( student.grade < 70) {
                let extraCredit = Math.floor(Math.random() * 10);
                student.grade += extraCredit;
                console.log(`You did not pass because your score was ${student.grade}, but you get ${extraCredit} extra credit points!`)
            }
            console.log(`You did it!!`)
        }
    }
}



class Student extends Person {
    constructor(Satts) {
        super(Satts);
        this.previousBackground = Satts.previousBackground;
        this.className = Satts.className;
        this.favSubjects = Satts.favSubjects;
        this.grade = Math.floor(Math.random() * 100);
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i ++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submittted a PRR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}


class ProjectManager extends Instructor {
    constructor(Patts) {
        super(Patts);
        this.gradClassName = Patts.gradClassName;
        this.favInstructor = Patts.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} deebugs ${student.name}'s code on ${subject}`)
    }
}


const Buffy = new Person ({
    name: 'Buffy',
    age: '234',
    gender: 'undefined',
    location: 'germany'
})

const Wilma = new Person ({
    name: 'Wilma',
    age: '34',
    gender: 'undefined',
    location: 'Indiana'
})


const Josh = new Instructor({
    name: 'Josh',
    location: 'Knell',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'CSS',
    catchPhrase: `You guys, Don't worry is you're lost right now!`
  });

  const Elissa = new Instructor({
    name: 'Elissa',
    location: 'Thomas',
    age: 30,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'CSS',
    catchPhrase: `Hello, I've never met you before.`
  });

  const Lydia = new Student({
    name: 'Lydia',
    location: 'Thornton',
    age: 28,
    location: 'SF',
    previousBackground: 'data',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'SQL', 'JavaScript']
  });

  const Ellis = new Student({
    name: 'Ellis',
    location: 'Wombat',
    age: 165,
    location: 'Transylvania',
    previousBackground: 'existing',
    className: 'Web17',
    favSubjects: ['sleeping upside down', 'drinking blood', 'opening creaky doors']
  });

  const Chance = new ProjectManager({
    name: 'Chance',
    location: 'Embrey',
    age: 24,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'CSS',
    catchPhrase: `Who is up for some codewars?!`,
    gradClassName: 'Web17',
    favInstructor: 'Josh Knell'
  });

  const Angelo = new ProjectManager({
    name: 'Angelo',
    location: 'Deleon',
    age: 24,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'CSS',
    catchPhrase: `Windows? or Mac?`,
    gradClassName: 'Web17',
    favInstructor: 'Josh Knell'
  });

  Wilma.speak()
  Buffy.speak()
  Josh.demo('JavaScript')
  Josh.grade(Lydia, 'CSS')
  Lydia.speak()
  Ellis.PRAssignment('CSS')
  Chance.grade(Ellis, 'JavaScript')
  Angelo.standUp('web17')
 
  Chance.mark(Ellis)
  
/*
  Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
*/