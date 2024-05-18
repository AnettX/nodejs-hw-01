import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(fileContent);
    for (let i = contacts.length - 1; i >= 0; i--) {
      if (Math.random() >= 0.5) {
        contacts.splice(i, 1);
      }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(
      'Спроба видалення кожного контакту з вірогідністю 50% завершена успішно',
    );
  } catch (error) {
    console.error('Помилка видалення всіх контактів', error);
  }
};

await thanos();
