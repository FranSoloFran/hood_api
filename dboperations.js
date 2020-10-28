var config = require('./dbconfig');
const sql = require('mssql');


async function getUsuarios() {
    try {
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("SELECT * from usuario");
        return usuarios.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUsuario(usuarioId) {
    try {
        let pool = await sql.connect(config);
        let usuario = await pool.request()
            .input('input_parameter', sql.Int, usuarioId)
            .query("SELECT * from usuario where id = @input_parameter");
        return usuario.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUsuario(usuario) {

    try {
        let pool = await sql.connect(config);
        let insertUsuario = await pool.request()
            .input('id', sql.Int, usuario.id)
            .input('nombre', sql.NVarChar, usuario.nombre)
            .input('apellido', sql.NVarChar, usuario.apellido)
            .input('DNI', sql.NVarChar, usuario.DNI)
            .input('mail', sql.NVarChar, usuario.mail)
            .input('password', sql.NVarChar, usuario.password)
            .input('foto', sql.NVarChar, usuario.foto)
            .input('estado', sql.Bit, usuario.estado)
            .input('eliminado', sql.Bit, usuario.eliminado)
            .execute('InsertUsuarios');

        return insertUsuario.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getUsuarios: getUsuarios,
    getUsuario : getUsuario,
    addUsuario : addUsuario
}