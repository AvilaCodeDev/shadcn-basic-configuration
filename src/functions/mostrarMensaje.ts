import Swal from "sweetalert2"

type MostrarMensajeProps = {
  titulo: string,
  milisegundos?: number
}

const MostrarMensaje = ({ titulo, milisegundos }: MostrarMensajeProps) => {
  const esperar = milisegundos || 3000;
  Swal.fire({
    position: "top-end",
    title: titulo,
    showConfirmButton: false,
    timer: esperar,
  });
};

export default MostrarMensaje;

// MostrarMensaje({ icono: "error", titulo: error,  });
