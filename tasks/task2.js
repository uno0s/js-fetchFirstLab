"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


const URL = "https://jsonplaceholder.typicode.com/users";

async function createUser(user) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Помилка при створенні користувача:", error);
  }
}

createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"})
  .then(data => console.log("Відповідь сервера:", data));

module.exports = createUser;
