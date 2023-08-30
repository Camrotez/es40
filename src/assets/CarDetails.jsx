import { useEffect, useRef } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const { modello, anno, colore } = initialData;
    form.modello.value = modello || '';
    form.anno.value = anno || '';
    form.colore.value = colore || '';
  }, [initialData]);

  const handleSubmit = ((e) => {
    e.preventDefault();
    const form = formRef.current;
    
    const formData = {
      modello: form.modello.value,
      anno: form.anno.value,
      colore: form.colore.value,
    };
    console.log("la macchina scelta è :", formData);
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          Model:
          <input type="text" name="modello" />
        </label>
      </div>
      <div>
        <label>
          Year:
          <input type="text" name="anno" />
        </label>
      </div>
      <div>
        <label>
          Color:
          <input type="text" name="colore" />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CarDetails;