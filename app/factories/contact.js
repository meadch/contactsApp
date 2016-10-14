App.factory('ContactsFactory', ['$firebaseArray', function($firebaseArray) {
    var ref = firebase.database().ref(),
        contacts = $firebaseArray(ref);

    var factory = {
        addContact(newContact) {
            return contacts.$add(newContact);
        },
        getContacts() {
            return Promise.resolve(contacts);
        }
    };

    return factory;
}])
