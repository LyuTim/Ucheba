/*
Домашнее задание:
1) добавить на доску белых и черных коней
2) сделать функция, проверяющую, пустая ли клетка
3) добавить переменную, в которой между первым и вторым кликом хранится класс фигуры
4) добавить в проверку хода ход коня.
-->*/

let counter = true;//тру и фолс, выбирем начальную и конечную точку
let flag = true;//тру и фолс, таймаут для того чтобы видеть выбранные клетки и не сразу выполнять ход
let save_class = ''; //сохраняем класс выбранной фигуры
let coords = [['a','b','c','d','e','f','g','h'], [1, 2, 3, 4, 5, 6, 7, 8]];

//проверяет пустая ли клетка:
function isEmpty(cell) {
	for (klass of ['white_king','white_knight','black_king','black_knight']) {
		if (cell.classList.contains(klass)) {
			return false;
		}
	}
	return true;
}

//проверяет является ли путь фигуры допустимым:
function check_path(a, b) {
	if (save_class == 'white_king' || save_class == 'black_king') {
		let pathes = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
	} else if (save_class == 'white_knight' || save_class == 'black_knight') {	
	    let pathes = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]];
	}
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


document.addEventListener('click', function(event){
    if ((!flag) || (event.target.tagName.toLowerCase() != 'td')) return; 
    if (counter) {  
        if (isEmpty(event.target) return;  
		save_class = event.target.className.split(' ')[0]; 
        event.target.classList.add('startpoint');  
		document.body.classList.add('mouseup'); 
    } else {
        if (!check_path(document.querySelector('.startpoint'), event.target) || !isEmpty(event.target)) { 
            alert('Сюда ходить нельзя!');
            return;
        }
        event.target.classList.add('endpoint'); 
        flag = false; 
        setTimeout(function(){
			document.querySelector('.startpoint').classList.remove(save_class);
            document.querySelector('.endpoint').classList.add(save_class);
            document.querySelector('.mouseup').classList.remove('mouseup');
            document.querySelector('.startpoint').classList.remove('startpoint');
            document.querySelector('.endpoint').classList.remove('endpoint');
			save_class = '';
            flag = true;
        }, 500);
    }
    counter = !counter;
});




