window.addEventListener('DOMContentLoaded', function() {
		//Получение информации для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName('button'),
		open = document.getElementsByClassName('open')[0];

		//Функция для создания корзины
	function createCart() {
		//Создание элементов корзины
		let cart = document.createElement('div'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');

		//Добавление классов элементам
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		//Добавление текста элементам
		close.textContent = 'Закрыть';
		heading.textContent = 'В нашей корзине:';

		//Добавление элементов на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);

	};

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close'),
		shop = document.querySelector('.shop');

		//Создаем цикл перебора массива кнопок через переменную buttons
		for (let i = 0; i < buttons.length; i++) {
			//Вешаем обработчик события на каждую кнопку
			buttons[i].addEventListener('click', function() {
				//Добавление true в cloneNode для глубокого клонирования элемента
				let item = products[i].cloneNode(true);
				//Поиск button в копии элемента
					btn = item.querySelector('button');

				//Замена надписи на кнопки с 'Купить' на 'Удалить'
				btn.textContent = 'Удалить';
				//Добавление товара в корзину
				field.appendChild(item);
				//Удаление товара из магазина
				products[i].remove();

				//Функция удаления товара из корзины и его возврат в магазин
				function removeProduct() {
					field.removeChild(item);
					shop.appendChild(item);
		        };

		        //Привязка функции удаления товара из корзины
				btn.addEventListener('click', removeProduct);

			});
		}

		//Функции открытия и закрытия корзины
		function openCart() {
			cart.style.display = 'block';
		};

		function closeCart() {
			cart.style.display = 'none';
		};

		//Привязка функций открытия и закрытия корзины через обработчик событий
		open.addEventListener('click', openCart);
		close.addEventListener('click', closeCart);

});