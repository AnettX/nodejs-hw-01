import { createFakeContact } from '../../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(fileContent);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Додано новий контакт');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

await addOneContact();
