"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


const URL = "https://jsonplaceholder.typicode.com/users";

async function deleteUser(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
    return response; 
  } catch (error) {
    console.error("Помилка при видаленні:", error);
  }
}
module.exports = deleteUser;
