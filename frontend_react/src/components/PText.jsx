/* eslint-disable react/prop-types */

function PText({children}) {
    return (
        <p className="text-center text-[0.8rem] leading-5 tracking-wide text-[#C6CBD2] [@media_screen_and(min-width:2000px)]:text-[1.75rem]">
            {children}
        </p>
    )
}

export default PText
