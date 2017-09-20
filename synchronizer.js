function Synchronizer() {
  this.finished = true;
  this.pendingCallbacks = [];
}

Synchronizer.prototype.startNewSession = function() {
  this.finished = false;
  this.pendingCallbacks = [];
};

Synchronizer.prototype.execute = function(callback) {
  if (this.finished) return callback();

  this.pendingCallbacks.push(callback);
};

Synchronizer.prototype.finishSession = function() {
  this.pendingCallbacks.forEach(function(callback) {
    callback();
  });

  this.finished = true;
};
