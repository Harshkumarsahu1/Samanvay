import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
            <div className="overflow-hidden flex justify-center overflow-x-hidden h-30 w-45 p-20 mt-5">
            {children}
            </div>
    )
}
export default layout