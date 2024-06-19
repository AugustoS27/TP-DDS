import axios from 'axios';



async function getCategorias() {
    const response = await axios.get('http://localhost:3000/api/categorias');
    return response.data;
}

async function postCategoria(data) {
    const response = await axios.post('http://localhost:3000/api/categorias', data , {
        Headers: { 'Content-Type': 'application/json'}
    });
    return response.data;
}

async function deleteCategoria(id){
    const response = await axios.delete(`http://localhost:3000/api/categorias/${id}`);
    return response.data;
}

async function bajaLogicadeCategoria(id){
    const response = await axios.put(`http://localhost:3000/api/categorias/baja/${id}`);
    return response.data;
}

async function buscarPorId(id){
    if(!id) {return await getCategorias();}
    const response = await axios.get(`http://localhost:3000/api/categorias/${id}`);
    return response.data;

}

async function actualizarCategoria(data){
    const response = await axios.put(`http://localhost:3000/api/categorias/${data.id}`, data);
    return response.data;
}


export {getCategorias, postCategoria, deleteCategoria, bajaLogicadeCategoria, buscarPorId, actualizarCategoria };