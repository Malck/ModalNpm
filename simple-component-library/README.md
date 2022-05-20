# Simple-component-library

A library of React components created using create-component-lib.

This is a modal who can be used with react 

## What is it for ? 

This is a modal that will display a message and a mark to inform the user that he completed something like a form 

It will take the entire screen so the users are gonna see and have to close it

## How to use it

You can import it in your project using the command ```npm i malck-modal-npm```

After you have to import it with ```import { Modal } from "malck-modal-npm"```

You will have to add an onCloseModal function that will "display : none" for exemple and a message with a value "hello" 

Or if you are using the useState hooks you can do like this : 

  - const [openModal, setOpenModal] = useState(false);
 -  const onOpenModal = () => setOpenModal(true);
 - const onCloseModal = () => setOpenModal(false);
  
And make it appear in your code like : 
- {openModal && (
       <Modal message={"Employee created"} onCloseModal={onCloseModal} />
  )}