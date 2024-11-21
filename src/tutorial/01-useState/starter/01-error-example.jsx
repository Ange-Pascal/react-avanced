
const ErrorExample = () => { 
  let count = 0; 

  const handleCount = () =>{
    let count = count + 1; 

    console.log(count)
  }

  return (
    <div>
      <h1>{count}</h1> 
      <button type="button" onClick={handleCount} className="button">Increase</button>
    </div>
  )
};

export default ErrorExample;
