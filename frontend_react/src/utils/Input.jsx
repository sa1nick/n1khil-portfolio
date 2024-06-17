/* eslint-disable react/prop-types */
function Input({label,type,styleType,value,onSet}) {
    const base = "w-full rounded-lg border border-[#cce1ff] bg-[#192333] px-3 py-3 outline-[#397ffd] max-sm:px-4 max-sm:py-7";

    const styles = {
        input:base,
        textarea:base + " resize-none"
    }

    return (
        <div className="flex w-full flex-col gap-6">
            <label htmlFor="name" className="text-xl font-medium max-sm:text-[1.6rem]" >{label}</label>

            {type !== "textarea" ? (
                <input type={type} name="name" id="" className={styles[styleType]} value={value} onChange={(e) => onSet(e.target.value)}/>

            ) :(
                <textarea name="" id="" cols="60" rows="6" className={styles[styleType]} value={value} onChange={(e) => onSet(e.target.value)}></textarea>

            )}
        </div>
    )
}

export default Input
