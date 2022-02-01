// 1. Вычислить сумму первых N элементов последовательности, параметр N задает пользователь.

function sum(n) {
    let res = 0;

    for (let i = 0; i <= n; i++) {
        res = res + i;
    }

    return res;
}

console.log(sum(2));

console.log('////////////////////////////////////////');

// 2.
// 2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, содержащий информацию о факультете и кафедре.
// 2.3. Связать объекты между собой, т.е. прописать данные о факультете и кафедре для студента.
// 2.4 Реализовать функцию вывода на экран полной информации о студенте.

class Student {
    constructor(name, surname, sex, info = null) {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        this.info = info;
    }

    set name(val) {
        this._name = val;
    }

    get name() {
        return this._name;
    }

    set surname(val) {
        this._surname = val;
    }

    get surname() {
        return this._surname;
    }

    set sex(val) {
        this._sex = val;
    }

    get sex() {
        return this._sex;
    }

    set info(val) {
        this._info = val;
    }

    get info() {
        return this._info;
    }

    get userInfo() {
        return {
            name: this.name,
            surname: this.surname,
            sex: this.sex,
            faculty: this.info.faculty,
            department: this.info.department,
        };
    }
}

class UniversityInfo {
    constructor(faculty, department) {
        this.faculty = faculty;
        this.department = department;
    }
}

const stud1 = new Student('user1', 'sername user1', 'male', new UniversityInfo('faculty', 'department'));

console.log(stud1);
console.log(stud1.userInfo);

console.log('////////////////////////////////////////');

// 3.
// 3.1 Создать числовой массив и проинициализировать его 25 элементами с помощью случайных чисел.
// 3.2 Вывести элементы с четными индексами.
// 3.3 Вывести только четные элементы
// 3.4 Вывести индексы нулевых элементов (элемент = 0)
// 3.5 Посчитать количество нулевых элементов

class NumberGenerator {
    constructor(step) {
        this.numberRandomArray = step;
    }

    set numberRandomArray(step) {
        const arr = [];

        for (let i = 0; i < step; i++) {
            arr.push(Math.round(Math.random()*10));
        }

         this._randomArr = arr;
    }

    get numberRandomArray() {
         return this._randomArr;
    }

    get numberEvenIndex() {
        const evenArr = [];
        const randomArr = this.numberRandomArray;

        for (let i = 2; i < randomArr.length; i = i+2) {
            evenArr.push(randomArr[i]);
        }

        return evenArr;
    }

    get numberEvenEl() {
        const evenArr = [];
        const randomArr = this.numberRandomArray;

        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] % 2 === 0) {
                evenArr.push(randomArr[i])
            }
        }

        return evenArr;
    }

    get zeroEl() {
        const zeroArr = [];
        const randomArr = this.numberRandomArray;

        for (let i = 0; i < randomArr.length; i++) {
            if (!randomArr[i]) {
                zeroArr.push(i)
            }
        }

        return zeroArr;
    }

    get countZeroEl() {
        return this.zeroEl.length;
    }
}

const generator1 = new NumberGenerator(25);

console.log('////////////////////////////////////////');

// 4.
// Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат файла, электронный номер)

class Book {
    constructor(author, name, yearPubl, publOffice) {
        this.author = author;
        this.name = name;
        this.yearPubl = yearPubl;
        this.publOffice = publOffice;
    }
}

class EBook extends Book{
    constructor(author, name, yearPubl, publOffice, format, number) {
        super(author, name, yearPubl, publOffice);
        this.format = format;
        this.number = number;
    }
}

const ebook1 = new EBook('than man', 'vidmak', '1990+', 'poland', 'fb2', '00001');
console.log(ebook1);
