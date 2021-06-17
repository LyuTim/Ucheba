/*
Домашнее задание:
1) добавить на доску белых и черных коней
2) сделать функция, проверяющую, пустая ли клетка
3) добавить переменную, в которой между первым и вторым кликом хранится класс фигуры
4) добавить в проверку хода ход коня.
-->*/

document.addEventListener('click', function(event){
    if ((!flag) || (event.target.tagName.toLowerCase() != 'td')) return; //не дает тыкать во все клеточки чтобы ходить, она же поднимает влаг чтобы можно было снова ходить
    if (counter) {  //если каунтер = правда
        if (!event.target.classList.contains('white_king') && !event.target.classList.contains('black_king')) return;  //если первый раз ткнули на клетку, где НЕ стоят короли, то все заново.
        event.target.classList.add('startpoint');  //присваиваем первой тыкнутой клетке класс старт
		save_class = event.target.className.split(' ')[0]; //хранит класс выбранной фигуры
        document.body.classList.add('mouseup'); 
    } else {
        if (!check_path //идем по функции проверки возможности пути, и если она у нас тут НЕ выполняется(т.е. ЛОЖЬ)
			(document.querySelector('.startpoint'), event.target)  //начальная точка есть, конечную точку тыкнули
			|| event.target.classList.contains('white_king')  //ИЛИ если на конечное клетке белый король
			|| event.target.classList.contains('black_king')) { //ИЛИ если там черный король
            alert('Сюда ходить нельзя!');
            return;
        }
        event.target.classList.add('endpoint'); //если все ок, то присваиваем второй тыкнутой клетке класс энд
        flag = false; //опускаем флаг, чтобы не мешать программе, не дает тыкать везде подряд
        setTimeout(function(){
            if (document.querySelector('.startpoint').classList.contains('white_king')) { 
                document.querySelector('.startpoint').classList.remove('white_king');
                document.querySelector('.endpoint').classList.add('white_king');
            } else {
                document.querySelector('.startpoint').classList.remove('black_king');
                document.querySelector('.endpoint').classList.add('black_king');
            }
            document.querySelector('.mouseup').classList.remove('mouseup');
            document.querySelector('.startpoint').classList.remove('startpoint');
            document.querySelector('.endpoint').classList.remove('endpoint');
			save_class = '';
            flag = true;
        }, 500);
    }
    counter = !counter;
})
let counter = true;
let flag = true;
let save_class = '';
let coords = [['a','b','c','d','e','f','g','h'], [1, 2, 3, 4, 5, 6, 7, 8]];
function check_path(a, b) {
	if (save_class == 'white_king' || save_class == 'black_king') {
		let pathes = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
		let begin_idx1 = coords[0].findIndex(item => item == a.id[0]);
		let begin_idx2 = a.id[1];
		let end_idx1 = coords[0].findIndex(item => item == b.id[0]);
		let end_idx2 = b.id[1]
		for (path of pathes) {
			if ((path[0] == begin_idx1 - end_idx1) && (path[1] == begin_idx2 - end_idx2)) {
				return true;
			}
		}
		return false;
	} else if (save_class == 'white_knight' || save_class == 'black_knight') {	
	    let pathes = [[-2,-1],[-2,1],[-2,2],[-2,2],[2,-1],[2,1],[2,-2],[2,2],[-1,-1],[-1,1],[-1,-2],[-1,2],[1,-1],[1,1],[1,-2],[1,2]];
		let begin_idx1 = coords[0].findIndex(item => item == a.id[0]);
		let begin_idx2 = a.id[1];
		let end_idx1 = coords[0].findIndex(item => item == b.id[0]);
		let end_idx2 = b.id[1]
		for (path of pathes) {
			if ((path[0] == begin_idx1 - end_idx1) && (path[1] == begin_idx2 - end_idx2)) {
				return true;
			}
		}
		return false;
	}
}
function is_empty(cell) {
	if (cell.classList.contains('')) {
		return true;
	}
}

