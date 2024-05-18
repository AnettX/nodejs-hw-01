import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    console.log(`Режим читання існуючих контактів: ${fileContent}`);
  } catch (error) {
    console.error('Помилка зчитування контактів:', error);
  }
};

console.log(await getAllContacts());
