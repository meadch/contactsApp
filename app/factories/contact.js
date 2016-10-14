App.factory('ContactsFactory', ['$firebaseArray', function($firebaseArray) {
    var ref = firebase.database().ref(),
        contacts = $firebaseArray(ref),
        URL = "https://contactsapp-26475.firebaseio.com"

    return {
        addContact(newContact) {
            return contacts.$add(newContact);
        },
        getContacts() {
            return Promise.resolve(contacts);
        },
        updateContact(contact){
          var record = contacts.$getRecord(contact.$id);
          Object.assign(record, contact);
          return contacts.$save(record);
        },
        deleteContact(contact){
          return contacts.$remove(contact);
        }
    };
}])
