let btn = document.querySelector(".btn-generatr");

// Жанр
let genre = document.querySelector(".genre");
let genreList = ["3D шутер", "Файтинг", "Симулятор", "Стратегии", "Приключение", "Квест", "RPG", "Головоломка", "Настолка", "Аркада", "Платформер", "Симулятор", "Игра для программистов", "Музыкальная игра"];

// Количество игроков
let NumberOfPlayers = document.querySelector(".NumberOfPlayers");
let NumberOfPlayersList = ["Одиночная", "Одиночная", "Одиночная", "Многопользовательская", "Многопользовательская", "PBEM"];

// Сюжет
let PlotGame = document.querySelector(".PlotGame");
let PlotGameList = ["Линейный сюжет", "Не линейный сюжет"];

// Мир
let WorldGame = document.querySelector(".WorldGame");
let WorldGameList = ["Бесконечнй", "Открытый мир"];

btn.addEventListener("click", () => {
	genre.innerHTML = genreList[Math.floor(Math.random() * genreList.length)];
	NumberOfPlayers.innerHTML = NumberOfPlayersList[Math.floor(Math.random() * NumberOfPlayersList.length)];
	PlotGame.innerHTML = PlotGameList[Math.floor(Math.random() * PlotGameList.length)];
	WorldGame.innerHTML = WorldGameList[Math.floor(Math.random() * WorldGameList.length)];
});
