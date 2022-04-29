console.log("Program start");
var cmd=require('node-cmd');

cmd.get(
    'pwd',
    function(data){
        console.log('the current working dir is : ',data)
    }
);

cmd.run('whoami');