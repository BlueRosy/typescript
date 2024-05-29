import React, { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children?: ReactNode,
}

// modern way to provide prop default value
// title is sth string we can define, but children is the parent <section>children it will parse</section>
function Section({title = "My subheading", children}: SectionProps) {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{children}</h1>
    </div>
  )
}

export default Section

// old way , bad usage
// const Section:React.FC<{title:string}> = ({children, title}) => {
//     return <>
//         <h1>{title}</h1>
//         <h1>{children}</h1>
//     </>
// }

// export default Section