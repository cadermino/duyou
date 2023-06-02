'use client'
import { useState } from "react";
import Image from 'next/image';

export function FAQ() {
  const [isQuestionOpen, setQuestionState] = useState(false);

  const questions = [
    {
      question: "¿Por qué elegir DuYou?",
      answer: "Somos una empresa que conoce el mercado mexicano, sus formas y tendencias. Llevamos de la mano a nuestros clientes durante todo el proceso, desde la orden hasta la entrega. Más de 10 años en el mercado y miles de clientes felices lo avalan.",
    },
    {
      question: "¿Cómo se realizan los pagos?",
      answer: "A través de nuestra compañía en México nos encargamos de recibir tu pago y hacerlo llegar a los proveedores en China.",
    },
    {
      question: "¿Cuáles son los tiempos de producción?",
      answer: "Los tiempos de producción pueden variar según el artículo que se esté produciendo, para artículos pequeños de uso común se consigue stock, como para maquinarias y producción OEM (Original Equipment Manufacturer / Fabricante de equipos originales) con marcas o especificaciones de la compañía del cliente pueden tardar entre 12 a 30 días.",
    },
    {
      question: "¿Cuáles son los tiempos de envío?",
      answer: "Los tiempos de envío son determinados dependiendo del modo de transporte solicitado por el cliente. Las vías más rápidas son aérea express y aérea aeropuerto, las cuales demoran desde que tu producto está en la bodega de China hasta tu puerta en México aproximadamente de 7 a 15 días o por la vía marítima que desde que está en bodega demora aproximadamente de 45 a 50 días.",
    },
    {
      question: "¿Los productos chinos son de calidad?",
      answer: "Sí, las fábricas en China han subido de nivel en los últimos años y la calidad es algo muy importante para ellos, ahora la calidad y el precio van de la mano.",
    },
    {
      question: "¿Cómo calcular los costos de envío vía aérea?",
      answer: "Los costos de envío para aéreo se calculan por kg por ejemplo: 100 kg por el monto cotizado, los envíos aéreos están determinados por una fórmula de peso o volumen si el peso es mayor que el volumen se calcula el peso neto pero si el volumen es mayor que el peso neto se calcula por el peso volumétrico. Que se mide de la siguiente manera por paquete o caja: ancho * alto * largo / 5000 si el envío es express o ancho * alto * largo / 6000 si el envío es por carga aérea.",
    },
    {
      question: "¿Cómo se calcula un metro cúbico de envío vía marítima?",
      answer: "Para cotizar los fletes marítimos se calcula de la siguiente forma: Ancho* largo* alto /1.000.000 o simplemente agregamos un 0 a lado del nominado. Ej. 60 cm = 0.60",
    },
  ];

  function clickHandler() {
    setQuestionState(!isQuestionOpen);
    console.log('ento');
  }

  return (
    <article className="
    p-5
      ">
      <div className="
        text-2xl
        2xl:text-6xl
        py-8
        ">Resolvemos tus dudas</div>
      <div className="
        
        ">
        {questions.map((src, index) => {
          return(
            <div key={index}
              className="mb-8 
                border-b-[1px]
                ">
              <div className="
                mb-2
                "
                onClick={clickHandler}>{src.question}</div>
              <div className={
                (isQuestionOpen?'block':'hidden')  + " pb-8"}>{src.answer}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
