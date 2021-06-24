/*
---1) делаем поле ввода даты
---2) рядом делаем кнопку
3) по клику на кнопке или в поле ввода создаем попап (всплывающее окно)
---    3.1) по клику вызываем функцию
    3.2) функция делает попап
4) в попапе делаем календарь
    4.1) устанавливаем дату сегодня
    4.2) определяем месяц
    4.3) определяем количество недель в месяце, начальную и конечную даты страницы
    4.4) создаем страницу таблицей
    4.5) добавляем строку дней недели
    4.6) делаем заголовок (месяц и год)
    4.7) делаем кнопки перехода
        4.7.1) на месяц назад и вперед - выполняем снова пункт 4
    4.8) вставляем готовый календарь в попап
    4.9) подключаем обработку событий
5) по выбору даты закрываем календарь и вставляем дату в поле ввода
    5.1) ловим событие на дне
    5.2) вставляем дату в поле ввода
    5.3) уничтожаем попап с календарем.
*/
$(function(){
   $('input, button').click(makePopup);
});
const MONTHNAMES = ['Январь','Февраль','Март','Апрeль','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

function makePopup(){
    let today = new Date();
	let my_year = today.getFullYear();
	let my_month = today.getMonth();
	let my_weekend = today.getDay();
	let weeks = monthLength(my_month, my_year);
	
	let str = '<div class="header">' + MONTHNAMES[my_month] + ' ' + my_year + '</div><table>';
	str += '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th class ="holiday">Вс</th></tr>'
	for (let i = 0; i < weeks; i++) {
		str += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
	}
	str += '<table><div class="footer"></div>'
	//$('.mY').html(MONTHNAMES[my_month] + ' ' + my_year);
	
	
	
    // получить и сохранить сегодняшнюю дату
    // создать верстку попапа
    // вставить верстку в страницу
    // подключить события
};

$(function () {
  $('.openButton').click(function () {
    $('.screen').addClass('calendarActive');
  });
 
  $('.closeButton').click(function () {
    $('.screen').removeClass('calendarActive');
  });
});


function monthLength(month, year) {
	let a = new Date(year, month); //ГГГГ.ММ.ДД 00:00:00.000
	let b = new Date(year, month + 1); //ГГГГ.ММ.ДД 00:00:00.000
	let c = (b - a) / (60000 * 60 * 24); //сколько полных дней прошло
	if (!a.getDay()) {
		c += 6;
	} else {
		c += a.getDay() - 1;
	}	
	let week_c = Math.floor(c / 7);
	if (c % 7) {
		weeks += 1;
	}
	return weeks;
}