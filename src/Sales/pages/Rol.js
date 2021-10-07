import React, { Component } from 'react';
import Header from "../../Shared/components/Header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



const data = [
    { id: 1, Email: "Luisa@gmail.com", nombre: "Luisa", rol: "indefinido", estado: "Inactivo"},
    { id: 2, Email: "Juan@gmail.com", nombre: "Juan", rol: "indefinido", estado: "Inactivo" },
    { id: 3, Email: "Daniel@gmail.com", nombre: "Daniel", rol: "indefinido", estado: "Inactivo" },
    { id: 4, Email: "Pedro@gmail.com", nombre: "Pedro", rol: "indefinido", estado: "Inactivo"},
];

class Rol extends Component {
state={
  data: data,
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    Email:'',
    nombre: '',
    rol: '',
    estado: '',
    capestado: '',
    tipoModal: ''
  }
}

peticionGet=()=>{
axios.get(data).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}



editar = (dato) => {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
    if (dato.id == registro.id) {
      arreglo[contador].rol = dato.rol;
      arreglo[contador].estado = dato.estado;
    }
    contador++;
  });
  this.setState({ data: arreglo});
};

eliminar = (dato) => {
  var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
  if (opcion == true) {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo.splice(contador, 1);
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  }
};

insertar= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ modalInsertar: false, data: lista });
}






modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(empresa)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: empresa.id,
      nombre: empresa.nombre,
      Email: empresa.Email,
      rol: empresa.rol,
      estado: empresa.estado,
    }
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
      
    const {form}=this.state;
  return (
    <><div><Header /></div><div className="Rol">
          <br /><br />
          <h2 align="center">TABLA DE USUARIOS</h2>
          <br />
          <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar(); } }>Agregar Usuario</button>
          <br /><br />
          <table className="table ">
              <thead>
                
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Accion</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.data.map(empresa => {
                      return (
                          <tr>
                              <td>{empresa.id}</td>
                              <td>{empresa.nombre}</td>
                              <td>{empresa.Email}</td>
                              <td>{empresa.rol}</td>
                              <td>{empresa.estado}</td>

                              <td>
                                  <button className="btn btn-success" onClick={() => { this.seleccionarEmpresa(empresa); this.modalInsertar(); } }>Editar</button>
                                  {"   "}
                                  <button className="btn btn-dark" onClick={() => { this.seleccionarEmpresa(empresa); this.setState({ modalEliminar: true }); } }>Borrar</button>
                              </td>
                          </tr>
                      );
                  })}
              </tbody>
          </table>


          <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader style={{ display: 'block' }}>
                  <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
              </ModalHeader>
              <ModalBody>
                  <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
                      <br />
                      <label htmlFor="nombre">Nombre</label>
                      <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                      <br />
                      <label htmlFor="Email">Email</label>
                      <input className="form-control" type="text" name="Email" id="Email" onChange={this.handleChange} value={form ? form.Email : ''} />
                      <br />
                      <label htmlFor="rol">Rol</label>
                      <select className="form-control" type="text" name="rol" id="rol" onChange={this.handleChange} value={form ? form.rol : ''}>
                        <option>Indefinido</option>
                        <option>Administrador</option>
                        <option>Ventas</option>
                     </select>
                     <br />
                     <label htmlFor="rol">Estado</label>
                     <select className="form-control" type="text" name="estado" id="estado" onChange={this.handleChange} value={form ? form.estado : ''}>
                        <option>Inactivo</option>
                        <option>Activo</option>
                     </select>
                        
                  </div>
              </ModalBody>

              <ModalFooter>
                  {this.state.tipoModal == 'insertar' ?
                      <button className="btn btn-success" onClick={() => this.insertar()}>
                          Insertar
                      </button> : <button className="btn btn-primary" onClick={() => this.editar(this.state.form)}>
                          Actualizar
                      </button>}
                  <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
              </ModalFooter>
          </Modal>








          <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                  Estás seguro que deseas eliminar a la empresa {form && form.nombre}
              </ModalBody>
              <ModalFooter>
                  <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                  <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
              </ModalFooter>
          </Modal>
      </div></>



  );
}
}
export default Rol;
