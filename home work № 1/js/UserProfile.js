let YourName, Patronymic, Surname, Age, Old, Day, Sex, retiree;

const getYourName = () => {
	YourName = prompt('Ваше имя?');
	if (YourName === '' || name == null) {
		getYourName();
	}
	else {
		getSurname();
	}
};

function getSurname () {
	Surname = prompt('Ваша фамилия?');
	if (Surname === '' || name == null) {
		getSurname();
	}
	else {
		getPatronymic();
	}
}
function getPatronymic () {
	Patronymic = prompt('Ваше отчество?');
	if (Patronymic === '' || name == null) {
		getPatronymic();
	}
	else {
		getAge();
	}
}
function getAge () {
	Age = prompt('Сколько Вам лет?');
	if (Age.replace (/\d/g, '').length || parseInt(Age) > 130 || parseInt(Age) < 0 || Age === '') {
		getAge();
	}
	else {
		getOldDay(Age);
	}
}
function getOldDay (arg) {
	arg = parseInt(arg);
	Old = arg + 5;
	Day = arg*365;
	getSex();
}
function getSex () {
	Sex = confirm('Вы мужчина?');
	if (!Sex) {
		Sex = 'женский';
		getRetireeWoman();
		
	}
	else {
		Sex = 'мужской';
		getRetireeMen();
	}
}
function getRetireeMen () {
	if (Age > 65) {
		retiree = 'да';
	}
	else {
		retiree = 'нет';
	}
}
function getRetireeWoman () {
	if (Age > 60) {
		retiree = 'да';
	}
	else {
		retiree = 'нет';
	}
}
function prof () {
	getYourName();
	alert('ФИО:' + ' ' + Surname + ' '  + YourName + ' ' + Patronymic +'\n' + 'Возраст в годах:' + ' ' + Age + '\n'
		+ 'Возраст в днях:' + ' ' + Day + '\n' + 'Через 5 лет Вам будет:' + ' ' + Old + '\n' + 'Ваш пол:' + ' '
		+ Sex + '\n' + 'Вы на пенсии:' + ' ' + retiree);
}
prof();