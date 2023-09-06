import React from 'react'

const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [error, setError] = React.useState(false);

  const addProduct = async () => {

    if (!name || !price || !category ) {
      setError(true)
      return false
    }
    console.warn(name, price, category);
    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch('http://localhost:5000/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, price, category, userId }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result)
  }


  return (
    <div className='product'>
      <h1>AddCandidate</h1>
      <input type='text' placeholder='Enter Candidate name' className='inputBox'
        value={name} onChange={(e) => { setName(e.target.value) }}
      />
      {error && !name && <span className='invalid-input'>Enter valid name</span>}

      <input type='text' placeholder='Enter Candidate email' className='inputBox'
        value={price} onChange={(e) => { setPrice(e.target.value) }}
      />
      {error && !price && <span className='invalid-input'>Enter valid price</span>}


      <input type='text' placeholder='Enter Candidate roll no' className='inputBox'
        value={category} onChange={(e) => { setCategory(e.target.value) }}
      />
      {error && !category && <span className='invalid-input'>Enter valid category</span>}


      <button onClick={addProduct} className='appButton'>Add Candidate</button>
    </div>
  )

}
export default AddProduct