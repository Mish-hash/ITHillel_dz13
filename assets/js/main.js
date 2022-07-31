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


/*
2) Создайте класс Plane со свойствами name и isFlying (по-умолчанию false) и методами takeOff() и land().
Метод takeOff() меняет значение свойства isFlying на true, а метод land() меняет значение свойства isFlying на false.

Создайте объект airport со свойством planes (массив объектов класса Planes ) и методом getFlyingPlanes(),
который вовзращающий количество элементов из массива planes , у которых isFlying равняется true.

Cоздайте несколько объектов на основе класса Plane и добавьте их в массив самолетов в airport.
Измените любым объектам значение isFlying на true; Продемонстрируйте метод getFlyingPlanes() в работе.
*/


class Plane {
    constructor(isFlying = false) {
        this.isFlying = isFlying;
    }

    takeOff() {
        this.isFlying = true;
    }

    land() {
        this.isFlying = false;
    }
}

const airport = {
    planes: [],
    getFlyingPlanes() {
        const flyingPlanes = [];
        this.planes.forEach(element => {
            if (element.isFlying === true) {
                flyingPlanes.push(element)
            };
        });
        return flyingPlanes;
    }
}

const cessnaCitationCJ3 = new Plane;
const embraerLegacy450 = new Plane;
const gulfstreamG450 = new Plane;

airport.planes.push(cessnaCitationCJ3, embraerLegacy450, gulfstreamG450);

airport.planes[2].takeOff();
airport.planes[0].takeOff();

console.log(airport.getFlyingPlanes());

