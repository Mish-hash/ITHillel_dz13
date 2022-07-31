/*
1) Создайте объект student со свойствами firstName, lastName,
averageScore и методами getFullName(), который возвращает полное имея студента в виде строки ${firstName} ${lastName},
и isGrantHolder(). Метод isGrantHolder() должен содержать следующую логику:
Если averageScore больше или равняется числу 4, метод возвращает true, иначе - false.

Создайте функцию-конструктор Aspirant с прототипом student и свойствами dissertationTopic и isDissertationComplete.
Переопределите метод isGrantHolder() для Aspirant:
Если avarageScore больше или равняется числу 4.5 и значение isDissertationComplete равняется true,
метод возвращает true , иначе - false .
Создайте объект aspirant используя функцию-конструктор Aspirant .
Используя цикл, выведите все свойства и методы объекта aspirant (включая свойства и методы прототипа).
Продемонстрируйте метод isGrantHolder() у объектов student и aspirant.
*/

class Student {
    constructor(firstName, lastName, averageScore){
        this.firstName = firstName;
        this.lastName = lastName;
        this.averageScore = averageScore;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    isGrantHolder() {
        const result = this.averageScore >= 4 ? true : false;
        return result;
    }
}

class Aspirant extends Student {
    constructor(firstName, lastName, averageScore, dissertationTopic) {
        super(firstName, lastName, averageScore);
        this.dissertationTopic = dissertationTopic;
        this.isDissertationComplete = false;
    }

    isGrantHolder() {
        const result = this.averageScore >= 4.5 ? true : false;
        this.isDissertationComplete = result;
        return result;
    }
}

const student = new Student('ivan', 'pupkin', 4.2);

const aspirant = new Aspirant('Vasya', 'RND', 4.6, 'Some theme');

console.log(student.isGrantHolder());

console.log(aspirant.isGrantHolder())

for (let value in aspirant) {
    console.log(value)
}


