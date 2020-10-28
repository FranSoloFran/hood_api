class Usuario{
    constructor(id,nombre,apellido,DNI,mail,password,foto,estado,eliminado){
        this.id = id; 
        this.nombre = nombre;
        this.apellido = apellido; 
        this.DNI = DNI;
        this.mail = mail;
        this.password = password;
        this.foto = foto; 
        this.estado = estado;
        this.eliminado = eliminado;
    }
}

module.exports = Usuario;
