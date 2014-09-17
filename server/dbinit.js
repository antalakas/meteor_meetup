CreateSpinningClasses = function(){
  if(SpinningClasses.find().count() === 0){
    SpinningClasses.insert({
      classdate: '18/09/2014 12:00:00',
      user: [
        { name : 'brecht' },
        { name : 'bart'},
        { name : 'werner'},
        { name : 'stefaan'},
      ]
      
    });  
        
    SpinningClasses.insert({
      classdate: '25/09/2014 12:00:00',
      user: [
        { name : 'brecht' },
        { name : 'bart'},
        { name : 'werner'},
      ]
      
    });  
    
  }
};