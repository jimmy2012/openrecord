/*
 * MODEL
 */
exports.model = {
  limit: function(limit, offset){
    var self = this.chain();
    offset = offset || 0;
  
    self.setInternal('limit', limit);
    self.setInternal('offset', offset);
  
    return self;
  }
};



/*
 * DEFINITION
 */
exports.definition = {
  mixinCallback: function(){
    var self = this;    
    this.beforeFind(function(query){
      var limit = this.getInternal('limit');
      var offset = this.getInternal('offset');
      
      query.limit(limit);
      query.offset(offset);
      
      return true;
    });
  }
};