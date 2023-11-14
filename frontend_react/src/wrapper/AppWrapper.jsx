const AppWrapper = (Component,idName)  => function HOC(){
    return (
        <div id={idName} className="flex flex-row w-full min-h-screen">
        <div className="flex justify-center items-center flex-1 flex-col w-full py-16 px-8">
            <Component/>
        </div>
    </div>
    )
 }
 
 export default AppWrapper

 
 