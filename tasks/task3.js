"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


const URL = "https://jsonplaceholder.typicode.com/users";

async function updateUser(id, updatedData) {
  try {
    const userUrl = `${URL}/${id}`;
    const response = await fetch(userUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при оновленні:", error);
  }
}
updateUser(1, { name: 'New Name' })
  .then(data => console.log("Оновлені дані:", data));

module.exports = updateUser;
