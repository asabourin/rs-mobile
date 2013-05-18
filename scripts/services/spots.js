angular.module('Services').factory('Spots', function ($rootScope, $http) {
    return {

        nearby:function (token, lat, lon, coeff, max_dist, successCallback) {
            $http.get(Settings.host+'spots/nearby?token='+token+'&lat='+lat+'&lng='+lon+'&coeff='+coeff+'&max_dist='+max_dist).success(successCallback);
        },
        show: function(id, successCallback, errorCallback) {
            $http.get(Settings.host+'/spots/'+id).success(successCallback).error(errorCallback);
        }
    };

})