var str = '', LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('soaptrace.txt');

lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    //if (line.startsWith('SOAP RESPONSE')) {
        if (line.startsWith("GUID")) {
            str = str + ';' + line;
        }
        if (line.startsWith("SOAP URI")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("SOAPACTION")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("HRESULT")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("HTTP Status")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("TIME:")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("REQUEST MESSAGE:")) {
            str = str + '\n' + line;
        }
        if (line.startsWith("RESPONSE MESSAGE:")) {
            str = str + '\n' + line;
        }
   // }
    //if(line.startsWith('SOAP REQUEST RECEIVED')) {
        if (line.startsWith("TIME:")) {
            str = str + '\n' + line;
        }
    //}
});

lr.on('end', function () {
    console.log(str)
});