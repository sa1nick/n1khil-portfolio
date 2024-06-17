/* eslint-disable react/prop-types */
function Heading({children,type}) {

  const base = "text-center capitalize [&>span]:bg-[linear-gradient(to_bottom,_transparent_64%,_#f6bd78_50%)] [&>span]:inline [@media_screen_and(min-width:2000px)]:text-[4rem] [@media_screen_and(max-width:450px)]:text-[2rem] "
  
  const styles = {
  primary : base+" text-[2.75rem] font-black max-sm:text-[3.75rem]",
  small : base + " text-[1.75rem] font-extrabold  max-sm:text-4xl"
  
  }
  return (
        <h2 className={styles[type]}>
        {children}
      </h2>
    )
}

export default Heading

