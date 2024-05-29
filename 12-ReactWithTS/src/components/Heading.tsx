// define passing props here. in a much more cleaner way. main.jsx should pass all these props here
type HeadingProps = {title: string}

function Heading({title}: HeadingProps) {
  return (
    <h1>{title}</h1>
  )
}

export default Heading