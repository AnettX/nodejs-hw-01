import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Видалено всі контакти');
  } catch (error) {
    console.error('Помилка видалення всіх контактів', error);
  }
};

await removeAllContacts();
