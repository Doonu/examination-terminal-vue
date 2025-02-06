export const getGreeting = () => {
  const hours = new Date().getHours() // Получаем текущий час пользователя

  if (hours >= 6 && hours < 12) {
    return 'Доброе утро'
  } else if (hours >= 12 && hours < 18) {
    return 'Добрый день'
  } else if (hours >= 18 && hours < 24) {
    return 'Добрый вечер'
  } else {
    return 'Доброй ночи'
  }
}
