App.controller('ContactsController', [
  '$firebaseArray',
  'ContactsFactory',
  '$modal',
  '$location',
  function($firebaseArray, ContactsFactory, $modal, $location) {
        var ref = firebase.database().ref(),
            _this = this;

        function fetchContacts() {
            ContactsFactory.getContacts()
                .then((contacts) => {
                    _this.contacts = contacts;
                })
        }

        fetchContacts();

        _this.addFormShow = {
            symbol: '+',
            status: false,
            className: ''
        };

        // METHODS

        _this.toggleAddForm = () => {
            _this.addFormShow.status = !_this.addFormShow.status;
            _this.addFormShow.symbol = (_this.addFormShow.status === true) ? "-" : "+";
            _this.addFormShow.className = (_this.addFormShow.status === true) ? "alert" : "";
        }

        _this.addFormSubmit = () => {
            ContactsFactory.addContact(_this.newContact)
                .then((contacts) => {
                    _this.newContact = {};
                    _this.toggleAddForm();
                })
        }

        // MODAL BEHAVIOR

        _this.openModal = (contact) => {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    contact: function() {
                        return contact;
                    }
                }
            });

            modalInstance.result.then(function(thing) {
                $location.path('/');
            }, function() {
                $location.path('/');
            });
        }

    }])
    .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'contact', function($scope, $modalInstance, contact) {

        $scope.contact = contact;

        $scope.reposition = function() {
            $modalInstance.reposition();
        };

        $scope.ok = function() {
            $modalInstance.close($scope.contact);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };
    }]);
