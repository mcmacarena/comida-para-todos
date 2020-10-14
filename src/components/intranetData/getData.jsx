import React, { Fragment, useState} from 'react';
import { firebase } from '../../firebase';
import './styles/getData.css';
<<<<<<< HEAD
import DataGridDemo from './intranetTable';
import { DataGrid } from '@material-ui/data-grid';
import IntranetDataExport  from './intranetDataExport'
=======
import IntranetDataExport from './intranetDataExport'

>>>>>>> 70f0dae5c5c2fe77bdec304ae303038b891e7a2c
const GetData = () => {
  const [dataHuerta, setDataHuerta] = useState(null)
  const [dataEducacion, setDataEducacion] = useState(null)
  const [dataDespensa, setDataDespensa] = useState(null)
  const [dataTalento, setDataTalento] = useState(null)

  const handleShow = () => {
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const dataHuerta = await db.collection('Huertas').get()
        const arrayHuerta= dataHuerta.docs.map(doc => (doc.data().data))
        setDataHuerta(arrayHuerta)
        const dataEducacion = await db.collection('Educacion').get()
        const arrayEducacion= dataEducacion.docs.map(doc => (doc.data().data))
        setDataEducacion(arrayEducacion)
        const dataDespensa = await db.collection('Despensa').get()
        const arrayDespensa= dataDespensa.docs.map(doc => (doc.data().data))
        setDataDespensa(arrayDespensa)
        const dataTalento = await db.collection('Talento').get()
        const arrayTalento = dataTalento.docs.map(doc => (doc.data().data))
        setDataTalento(arrayTalento)
      } catch {
        console.log('error')
      }
    }
    obtenerDatos()
  }

  return (
    <Fragment>  
      
      <div className='contentIntranetForms'>
        <div className='textIntranetForms'>
          <h1 className='titleIntranetForms'>¡Bienvenido!</h1>
          <p className='paragraphIntranetForms'>Aquí podrás visualizar en forma de tabla los respectivos postulantes, presiona para mostrar</p>
          <button onClick={handleShow} className='btnsIntranetForms' >MOSTRAR</button>
        </div>
      </div>
<<<<<<< HEAD
      {/* <div className ='tableIntra'>
        {showTable[0]}
      </div> */}
      <IntranetDataExport/>
      {
            showTable.map(arrayData => (
               
                 <div className="list-group-item" key={arrayData.data.id}>
                  <div className="box">
                     <p>{arrayData.data.nombre}</p>
                       </div>
                     <div className="box">
                       <p>{arrayData.data.correo}</p>
                      </div>
                      <div className="box">
                       <p>{arrayData.data.comuna}</p>
                      </div>
                      </div>
                     ))
                }
                  
=======
      <IntranetDataExport dataHuerta={dataHuerta} dataEducacion={dataEducacion} dataDespensa={dataDespensa} dataTalento={dataTalento} />
>>>>>>> 70f0dae5c5c2fe77bdec304ae303038b891e7a2c
    </Fragment>
  );
}

export default GetData;