

export default function cover()
{
    return (
        <>
        <div className="relative">
            <div className="absolute left-20 top-20 text-white z-20">
              <h1 className="text-8xl font-extrabold tracking-wider" style={{fontFamily:"Adamina"}}>C&R INFRACON</h1>
              <p className="text-3xl leading-loose p-2">Perfection with Precision</p>
            </div>
            <div className="bg-black" style={{backgroundColor:"black"}} > 
              <img className="w-full opacity-50" style={{height:"700px"}}
                src="https://images.unsplash.com/photo-1485185148890-c944fab3e87c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           </div>
        </div>
        </>
)};