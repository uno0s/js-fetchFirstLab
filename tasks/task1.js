"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP помилка! статус: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Сталася помилка при запиті:", error);
  }
}

fetchUsers().then(data => console.log(data));

module.exports = fetchUsers;