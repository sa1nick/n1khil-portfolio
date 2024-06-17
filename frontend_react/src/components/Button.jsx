/* eslint-disable react/prop-types */
function Button({href,children,type,}) {
    const base = "rounded-full text-xl cursor-pointer outline-1 w-full max-sm:py-5 max-sm:text-1xl max-sm:font-extrabold" 
    
    const styles = {
        primary: base + ' bg-[color:var(--primary-color)] border-none px-12 py-5 font-extrabold max-sm:w-full',
        secondary: base + ' border-2 border-solid bg-transparent border-[color:var(--primary-color)] px-12 py-5 font-medium max-sm:py-4 max-sm:w-full ',
        submit:base + ' bg-[color:var(--primary-color)] border-none px-10 py-3 font-normal'
    }
    
    return (
        <div className="max-sm:flex max-sm:w-full">
            {type === "submit" 
            ?( <button type={type} className={styles[type]}>{children}</button>) 
            :( <a href={href} className={styles[type]} >{children}</a>)}
       </div>
    )
}

export default Button
