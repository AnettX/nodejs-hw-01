import { createFakeContact } from '../../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const fileContent = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(fileContent);
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};

await generateContacts(3);
