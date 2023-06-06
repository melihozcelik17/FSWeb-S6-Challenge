import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const Karakterler = (props) => {
  //  const data = props.data ;
  const { data } = props;
  console.log(data)
  const [open, setOpen] = useState("0")
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {data.map((item, index) => (


          <AccordionItem key={index}>
            <AccordionHeader targetId={index.toString()}>{item.name}</AccordionHeader>
            <AccordionBody accordionId={index.toString()}>
              <p>gender:{item.gender} </p>
              <p>heigh:{item.heigh} </p>
              <p>mass:{item.mass} </p>
              <p>BirthYear:{item.birth_year} </p>
            </AccordionBody>
          </AccordionItem>
        ))}

      </Accordion>


    </div>
  )
}

export default Karakterler;