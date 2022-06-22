const { request, response } = require('express');

const usuariosGet = ( req, res= response ) => {

    // ?nombre=jotaro&dni=666666

    const { nombre, dni } = req.query;
    
    res.json({
        msg: 'get - API  ... =) .',
        nombre,
        dni
    });
}

const usuariosPost = ( req, res= response ) => {

    const { mensaje, tel } = req.body;

    res.json({
        msg: 'post - API  ... =) .',
        mensaje,
        tel
    });
}

const usuariosPut = ( req, res= response ) => {

    const {id } = req.params;

    res.json({
        msg: 'put - API  ... =) .',
        id
    });
}

const usuariosPatch = ( req, res= response ) => {
    res.json({
        msg: 'patch - API  ... =) .'
    });
}

const usuariosDelete = ( req, res= response ) => {
    res.json({
        msg: 'delete - API  ... =) .'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};