const AppWrapper = (Component,idName)  => function HOC(){
    return (
       <div className="appWrapper text-white max-sm:w-full"> <section id={idName} className="flex min-h-screen w-full flex-row">
       <div className="flex w-full flex-1 flex-col items-center justify-center px-8 py-16 max-sm:px-4 max-sm:py-5">
           <Component/>
       </div>
   </section></div>
    )
 }
 
 export default AppWrapper

 
 