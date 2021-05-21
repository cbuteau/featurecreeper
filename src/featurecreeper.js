
function FeatureCreeper() {

}

FeatureCreeper.prototype = {
  initialize: function()  {
      return new Promise(function(resolve, reject) {
        resolve();
      })
  }
};

var instance
if (!instance) {
  instance = new FeatureCreeper();
}

module.exports = instance;
