import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(fileContent);
    const countContacts = contacts.length;
    return `Всього контактів: ${countContacts}`;
  } catch (error) {
    console.error('Помилка підрахунку контактів', error);
  }
};

console.log(await countContacts());
