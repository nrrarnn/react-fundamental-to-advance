import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"
import { PropTypes } from "prop-types"


const TodoList = (props) => {
  return(
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{props.day}</p>
        <small className="text-default-500">{props.propTambahan}</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  )
}

TodoList.propTypes ={
  day: PropTypes.string,
}

export default TodoList;