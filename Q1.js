/**
 * Created by anurag on 29/3/17.
 */


module.exports=function(inputFile, outputFile){

    var fs = require('fs');
    var pattern = /[//]{2}/;

    var readStream= fs.createReadStream(__dirname+'/'+inputFile,'UTF8');
    var writerStream = fs.createWriteStream(__dirname+'/'+outputFile);

    readStream.on('data',function read(line){
        var eachLine = line.split('\n');
        for(var i in eachLine){
            if(pattern.test(eachLine[i])){
                var lineToInsert = eachLine[i].substring(eachLine[i].indexOf('//')+2,eachLine[i].length );
                writerStream.write(lineToInsert+'\n');
            }

        }


    })

}



