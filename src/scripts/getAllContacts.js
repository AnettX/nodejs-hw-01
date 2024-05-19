import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(fileContent);
    return contacts;
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};

console.log(await getAllContacts());
