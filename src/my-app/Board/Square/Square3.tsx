import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Input,
  Box
} from "@chakra-ui/react";
import { useState } from 'react'
import Data from "~/my-app/Board/Square/Data/Data";

type SquareState =
| "月曜日"
| "火曜日"
| "水曜日"
| "木曜日"
| "金曜日"
| "土曜日"
| "日曜日"
  | number
  | null;

type SquareProps = {
  value: SquareState;
  onClick: () => void;
  SQi: number;
  SQ2: number;
};

const Square3 = (props: SquareProps) => {

  const [event, setEvent] = useState('')
  const [date, setDate] = useState('')
  const [starttime, setStarttime] = useState('')
  const [endtime, setEndtime] = useState('')
  const [eventmore, setEventmore] = useState('')
  
return(
<Popover>
  <PopoverTrigger>
  <button className="square3" onClick={props.onClick}>
<div className="today"></div>
{props.value}
<Data event={event} date={date} starttime={starttime} endtime={endtime} eventmore={eventmore} />
</button>
  </PopoverTrigger>
  <Portal>
  <PopoverContent>
    <PopoverArrow />
    <PopoverHeader>予定の作成</PopoverHeader>
    <PopoverCloseButton />
    <PopoverBody height="210px">

    <Input id="event" placeholder='タイトルを入力' width="290px" value={event} onChange={(e) => setEvent(e.target.value)}/>

    <Input id="date" type="date" width="220px" top="10px" value={date} onChange={(e) => setDate(e.target.value)}/>

    <Input id="start-time" type="time" width="120px" top="20px" value={starttime} onChange={(e) => setStarttime(e.target.value)}/>
    <Box position="relative" left="140px" bottom="12px">~</Box>
    <Input id="start-time" type="time" width="120px" bottom="41px" left="170px"value={endtime} onChange={(e) => setEndtime(e.target.value)}/>

    <Input id="date" placeholder='memo' width="290px" bottom="30px" value={eventmore} onChange={(e) => setEventmore(e.target.value)}/>
    </PopoverBody>

  </PopoverContent>
</Portal>
</Popover>
)
};
export default Square3;
