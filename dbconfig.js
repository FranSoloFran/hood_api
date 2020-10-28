
const config = {
    user :'admin',
    password :'123456',
    server:'127.0.0.1',
    database:'hood',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 52566
}

module.exports = config; 