let btn = document.querySelector(".btn-generatr");

// Жанр
let genre = document.querySelector(".genre");
let genreList = ["3D шутер", "Файтинг", "Симулятор", "Стратегии", "Приключение", "Квест", "RPG", "Головоломка", "Настолка", "Аркада", "Платформер", "Симулятор", "Игра для программистов", "Музыкальная игра"];

// Количество игроков
let NumberOfPlayers = document.querySelector(".NumberOfPlayers");
let NumberOfPlayersList = ["Одиночная", "Одиночная", "Одиночная", "Многопользовательская", "Многопользовательская", "PBEM"];

// Тип
let TypeGame = document.querySelector(".TypeGame");
let TypeGameList = ["Линейный сюжет", "Не линейный сюжет", "Бесконечная", "Открытый мир"];

btn.addEventListener("click", () => {
	genre.innerHTML = genreList[Math.floor(Math.random() * genreList.length)];
	NumberOfPlayers.innerHTML = NumberOfPlayersList[Math.floor(Math.random() * NumberOfPlayersList.length)];
	TypeGame.innerHTML = TypeGameList[Math.floor(Math.random() * TypeGameList.length)];
});