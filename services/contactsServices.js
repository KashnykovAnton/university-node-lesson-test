import Contact from "../models/Contact.js";

function listContacts(search = {}) {
  const { filter = {}, fields = "" } = search;
  // if filter = {name: "Bob"} - will be shown objects that have in field name - "Bob"
  // if fields = "name email" - will be shown only this fields. If fields "-name -email" - will be shown all the fields exept name and email
  return Contact.find({ filter, fields });
}

async function getContactById(_id) {
  // const result = await Contact.findOne({ _id });
  const result = await Contact.findById({ _id });
  return result;
}

function removeContact(contactId) {}

function addContact(data) {
  return Contact.create(data);
}

function updateContact(contactId, body) {}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
