/* eslint-disable react/prop-types */
function Button({href,children,type,}) {
    const base = "rounded-full text-lg cursor-pointer outline-1 w-full" 
    
    const styles = {
        primary: base + ' bg-[color:var(--primary-color)] border-none px-12 py-5 font-bold',
        secondary: base + ' border-2 border-solid bg-transparent border-[color:var(--primary-color)] px-12 py-5 font-medium ',
        submit:base + ' bg-[color:var(--primary-color)] border-none px-10 py-3 font-normal'
    }
    
    return (
        <div>
            {type === "submit" 
            ?( <button type={type} className={styles[type]}>{children}</button>) 
            :( <a href={href} className={styles[type]} >{children}</a>)}
       </div>
    )
}

export default Button
