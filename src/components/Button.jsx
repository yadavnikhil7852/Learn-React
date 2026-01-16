function Button( {children , func , jsx}){
  return (
    <>
<div className="pt-3 "><button onClick={func} style={{backgroundColor :"blue" , color:"white" }}>{children}</button></div>
{jsx}
    </>
  )
}

export default Button  
