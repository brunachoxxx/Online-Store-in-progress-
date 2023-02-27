import { useState } from "react";
import AddProductForm from "./AddProductForm.js";
import useFetch from "./useFetch.js";

export default function StoreFront() {
  const [products, setProducts] = useState<any>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");
  const { post } = useFetch(
    "https://api.learnjavascript.online/demo/react/admin/"
  );

  function handleFormSubmit(event: any) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }

    post("products", {
      name: name,
      description: description,
    }).then((data) => {
      console.log(data);
      if (data) {
        setProducts([
          ...products,
          {
            id: products.length + 1,
            name: name,
            description: description,
          },
        ]);
      }
    });
    setName("");
    setDescription("");
    setValidation("");
  }

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event: any) {
    setDescription(event.target.value);
  }

  function handleDeleteClick(id: number) {
    setProducts(products.filter((product: any) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
