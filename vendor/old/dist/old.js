// __например, у нас есть чужой и старый код, кем-то когда-то собранный и лежащий в dist
// __вынесем его в отдельную папку /vendor
// __мы предполагаем, что вся папка /old - не наших рук дело и мы не хотим ничего менять внутри
function Work() {
  setTimeout(function() {
    alert("work complete!")
  }, workSettings.delay);
}

// __так как это глобальная функция, которая использует какие-то глобальные настройки workSettings
// __то это все криво будет экспортировано вебпаком и не особо юзабельно
// __для работы с подобными скриптами в у вебпака е сть несколько специальных лоадеров
