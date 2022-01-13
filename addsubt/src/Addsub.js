import React,{useState} from 'react'

function Addsub() {
    const[a,setA]=useState(0)

    const[b,setB]=useState(0)

    function Main(b){
        setB(Number(b.target.value))
    }

    function add(){
        setA(a+b)
        setB('')
    }
    function sub(){
        setA(a-b)
        setB('')
    }
    return (
        <div className='container'style={{width:'60%'}}>
            <div className='text-center' style={{marginTop:'35px', paddingLeft:'2%'}} >
                <h1 style={{border:'4px solid red'}}>{a}</h1>
                <label htmlFor="entervalue">Enter number</label>
                <input type="number" onChange={Main} /> 
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button onClick={add} className="btn btn-primary" type="button">ADD</button>
                    <button onClick={sub} className="btn btn-primary" type="button">SUBTRACT</button>
                </div>
                {/* <br/>
                <button onClick={add} className="btn btn-primary">ADD</button>
                <button onClick={sub} className="btn btn-primary">SUBTRACT</button> */}
            </div>
        </div>
    )
}

export default Addsub


