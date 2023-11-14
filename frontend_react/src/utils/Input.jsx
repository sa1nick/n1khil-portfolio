/* eslint-disable react/prop-types */
function Input({label,type,styleType,value,onSet}) {
    const base = "w-full rounded-lg border-transparent bg-[#171e2c] px-3 py-3 outline-[#397ffd]";

    const styles = {
        input:base,
        textarea:base + " resize-none"
    }

    return (
        <div className="flex w-full flex-col gap-2">
            <label htmlFor="name" className="text-xl" >{label}</label>

            {type !== "textarea" ? (
                <input type={type} name="name" id="" className={styles[styleType]} value={value} onChange={(e) => onSet(e.target.value)}/>

            ) :(
                <textarea name="" id="" cols="60" rows="6" className={styles[styleType]} value={value} onChange={(e) => onSet(e.target.value)}></textarea>

            )}
        </div>
    )
}

export default Input
